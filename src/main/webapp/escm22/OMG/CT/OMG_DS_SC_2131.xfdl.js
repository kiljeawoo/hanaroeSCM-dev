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
                this.set_name("OMG_DS_SC_2121");
                this.set_titletext("전자계약서신청상세 협력업체");
                this._setFormPosition(0,0,803,850);
            }
            this.style.set_background("#ffffffff");
            this.style.set_color("#999999ff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_receive", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STS\" type=\"string\" size=\"32\"/><Column id=\"TINM\" type=\"string\" size=\"32\"/><Column id=\"ST_DT\" type=\"string\" size=\"32\"/><Column id=\"CHRG_BUYER_NM\" type=\"string\" size=\"32\"/><Column id=\"RLTM_NTC_CHK\" type=\"string\" size=\"32\"/><Column id=\"CNTN\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_in", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서 번호\"/><Column id=\"CEO\" type=\"STRING\" size=\"256\" sumtext=\"협력업체 사장\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\" sumtext=\"협력업체 전화\"/><Column id=\"HP\" type=\"STRING\" size=\"256\" sumtext=\"협력업체 전화\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\" sumtext=\"협력업체 이메일\"/><Column id=\"BUYER_NM\" type=\"STRING\" size=\"256\" sumtext=\"계약담당자 이름\"/><Column id=\"BUYER_TELNO\" type=\"STRING\" size=\"256\" sumtext=\"협력업체 전화\"/><Column id=\"BUYER_MPNO\" type=\"STRING\" size=\"256\" sumtext=\"협력업체 전화\"/><Column id=\"BUYER_EMAIL\" type=\"STRING\" size=\"256\" sumtext=\"협력업체 이메일\"/><Column id=\"CTRW_KD_NM\" type=\"STRING\" size=\"256\" sumtext=\"계약서\"/><Column id=\"CTRW_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"TMP_STS\" type=\"STRING\" size=\"256\"/><Column id=\"TMP_STS_NM\" type=\"STRING\" size=\"256\" sumtext=\"계약서상태\"/><Column id=\"STS\" type=\"STRING\" size=\"256\" sumtext=\"계약서변경상태\"/><Column id=\"TINM\" type=\"STRING\" size=\"256\" sumtext=\"제목\"/><Column id=\"CNTN\" type=\"STRING\" size=\"256\" sumtext=\"내용\"/><Column id=\"BUYER_APV_STS\" type=\"STRING\" size=\"256\"/><Column id=\"RLTM_NTC_SMS\" type=\"STRING\" size=\"256\" sumtext=\"실시간통지_문자\"/><Column id=\"SEAL_OMIT_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_kd", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CTRW_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_KD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_KDC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_eltSts", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ntc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서 번호\"/><Column id=\"MPNO\" type=\"STRING\" size=\"256\" sumtext=\"협력업체 핸드폰\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\" sumtext=\"협력업체 이메일\"/><Column id=\"BUYER_MPNO\" type=\"STRING\" size=\"256\" sumtext=\"계약담당자 핸드폰\"/><Column id=\"BUYER_EMAIL\" type=\"STRING\" size=\"256\" sumtext=\"계약담당자이메일\"/><Column id=\"CTRW_KD_NM\" type=\"STRING\" size=\"256\" sumtext=\"계약서종류\"/><Column id=\"CTRW_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"STS_NM\" type=\"STRING\" size=\"256\" sumtext=\"계약서상태\"/><Column id=\"TINM\" type=\"STRING\" size=\"256\" sumtext=\"제목\"/><Column id=\"CNTN\" type=\"STRING\" size=\"256\" sumtext=\"내용\"/><Column id=\"RLTM_NTC_CHK\" type=\"STRING\" size=\"256\" sumtext=\"실시간통지방법\"/><Column id=\"USR_TP\" type=\"STRING\" size=\"256\" sumtext=\"사용자유형\"/><Column id=\"RLTM_NTC_SMS\" type=\"STRING\" size=\"256\" sumtext=\"SMS 사용여부\"/><Column id=\"RLTM_NTC_EMAIL\" type=\"STRING\" size=\"256\" sumtext=\"EMAIL사용여부\"/><Column id=\"SMS_NATV_NO\" type=\"STRING\" size=\"256\" sumtext=\"SMS고유번호\"/><Column id=\"EMAIL_NATV_NO\" type=\"STRING\" size=\"256\" sumtext=\"EMAIL고유번호\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\" sumtext=\"등록자\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"0\" sumtext=\"등록날짜\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_fyn", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서 번호\"/><Column id=\"MN_CTRW_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"DCM_C\" type=\"STRING\" size=\"256\"/><Column id=\"DCM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ESS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ESS_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILESIZE\" type=\"STRING\" size=\"256\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"SEAL\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_DEL\" type=\"STRING\" size=\"256\"/><Column id=\"APDFL_STS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_uploadresult00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DCM_C\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_hp", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_uploadresult01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DCM_C\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_tel", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_related", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"1\"/><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NA_TRPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"STS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_save", "absolute", null, "0", "41", "21", "-121", null, this);
            obj.set_taborder("132");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "0", "41", null, "29", "85.93%", null, this);
            obj.set_taborder("146");
            obj.set_text("메인계약서");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "0", "69", null, "29", "85.93%", null, this);
            obj.set_taborder("147");
            obj.set_text("전송상태");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "14.07%", "41", null, "29", "15", null, this);
            obj.set_taborder("152");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "14.07%", "69", null, "29", "15", null, this);
            obj.set_taborder("153");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_tmsSts", "absolute", "15.19%", "73", "386", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("160");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_direction("vertical");
            obj.set_cssclass("rdo_WF_Essential");
            obj.set_innerdataset("@ds_eltSts");
            obj.set_index("-1");

            obj = new Edit("edt_tmpSts", "absolute", "61.52%", "46", null, "21", "18", null, this);
            obj.set_taborder("188");
            obj.style.set_background("#e4e4e4ff");
            obj.style.set_color("#999999ff");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "-15", "0", "23", "558", null, null, this);
            obj.set_taborder("194");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "0", "21", "871", "20", null, null, this);
            obj.set_taborder("198");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "47.45%", "41", null, "29", "38.85%", null, this);
            obj.set_taborder("156");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "-8", "97", "871", "20", null, null, this);
            obj.set_taborder("246");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_eltCtrw", "absolute", "14.57%", "46", null, "21", "53.05%", null, this);
            obj.set_taborder("252");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "88", "8", "29", "553", null, null, this);
            obj.set_taborder("254");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.addChild(obj.name, obj);

            obj = new Plugin("Plugin00", "absolute", "401", "-2", null, "0", "363", null, this);
            obj.setProperty("classid", "{55D9860A-AB9C-44A1-BB74-75AF7F805333}");
            obj.setProperty("taborder", "259");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "20", "301", "21", null, null, this);
            obj.set_taborder("261");
            obj.set_text("전자 계약 상세");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_eltCtrwNo", "absolute", "874", "144", "140", "21", null, null, this);
            obj.set_taborder("263");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_chgSqNo", "absolute", "874", "168", "140", "21", null, null, this);
            obj.set_taborder("264");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup", "absolute", null, "0", "80", "21", "15", null, this);
            obj.set_taborder("265");
            obj.set_text("계약서내역");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_seal", "absolute", "0", "116", null, "50", "0", null, this);
            obj.set_taborder("266");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Static("Static124", "absolute", "108", "21", null, "29", "15", null, this.div_seal);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_seal.addChild(obj.name, obj);
            obj = new Static("Static121", "absolute", "1", "0", "89", "21", null, null, this.div_seal);
            obj.set_taborder("33");
            obj.set_text("인감 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.div_seal.addChild(obj.name, obj);
            obj = new Static("Static123", "absolute", "0", "21", null, "29", "85.93%", null, this.div_seal);
            obj.set_taborder("34");
            obj.set_text("인감이미지");
            obj.set_cssclass("sta_WF_Label");
            this.div_seal.addChild(obj.name, obj);
            obj = new FileUpload("FileUpload", "absolute", "14.57%", "25", null, "24", "18", null, this.div_seal);
            obj.set_taborder("35");
            obj.getSetter("retry").set("0");
            obj.set_scrollbars("none");
            obj.set_index("0");
            this.div_seal.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "-8", "166", "871", "20", null, null, this);
            obj.set_taborder("267");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_ntc", "absolute", "0", "186", null, null, "0", "10", this);
            obj.set_taborder("268");
            obj.set_text("Div00");
            obj.style.set_background("transparent");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0", "265", "301", "21", null, null, this.div_ntc);
            obj.set_taborder("0");
            obj.set_text("통보내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "0", "290", null, "29", "85.93%", null, this.div_ntc);
            obj.set_taborder("1");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Label");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "0", "318", null, "122", "85.93%", null, this.div_ntc);
            obj.set_taborder("2");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "14.07%", "290", null, "29", "15", null, this.div_ntc);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "14.07%", "318", null, "122", "15", null, this.div_ntc);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Edit("edt_tinm", "absolute", "14.57%", "294", null, "21", "18", null, this.div_ntc);
            obj.set_taborder("5");
            this.div_ntc.addChild(obj.name, obj);
            obj = new TextArea("txa_cntn01", "absolute", "14.57%", "322", null, "114", "18", null, this.div_ntc);
            obj.set_taborder("6");
            obj.set_wordwrap("char");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Static("Static23", "absolute", "0", "439", null, "29", "85.93%", null, this.div_ntc);
            obj.set_taborder("7");
            obj.set_text("실시간통지");
            obj.set_cssclass("sta_WF_Label");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Static("Static25", "absolute", "14.07%", "439", null, "29", "15", null, this.div_ntc);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Static("Static31", "absolute", "0", "467", null, "29", "85.93%", null, this.div_ntc);
            obj.set_taborder("9");
            obj.set_text("담당계약담당자");
            obj.set_cssclass("sta_WF_Label");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Static("Static32", "absolute", "14.07%", "467", null, "29", "15", null, this.div_ntc);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Static("Static33", "absolute", "48.94%", "467", null, "29", "37.36%", null, this.div_ntc);
            obj.set_taborder("11");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_Label");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "77.46%", "471", null, "21", "21.42%", null, this.div_ntc);
            obj.set_taborder("12");
            obj.set_text("-");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Static("Static40", "absolute", "70.11%", "471", null, "21", "28.64%", null, this.div_ntc);
            obj.set_taborder("13");
            obj.set_text("-");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Edit("edt_buyerNm", "absolute", "14.57%", "471", null, "21", "51.93%", null, this.div_ntc);
            obj.set_taborder("14");
            obj.set_cssclass("edt_WF_Readonly");
            this.div_ntc.addChild(obj.name, obj);
            obj = new CheckBox("chk_rltmNtcSms", "absolute", "14.57%", "443", null, "21", "78.7%", null, this.div_ntc);
            obj.set_taborder("15");
            obj.set_text("SMS");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_ntc.addChild(obj.name, obj);
            obj = new CheckBox("chk_rltmNtcEmail", "absolute", "48.94%", "443", null, "21", "42.84%", null, this.div_ntc);
            obj.set_taborder("16");
            obj.set_text("E-Mail");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Edit("edt_chrrEmail", "absolute", "57.04%", "443", null, "21", "18", null, this.div_ntc);
            obj.set_taborder("17");
            obj.set_enable("false");
            obj.style.set_background("#e4e4e4ff");
            obj.style.set_color("#999999ff");
            this.div_ntc.addChild(obj.name, obj);
            obj = new MaskEdit("mae_chrwMpsqno", "absolute", "39.1%", "443", null, "21", "54.92%", null, this.div_ntc);
            obj.set_taborder("18");
            obj.set_enable("false");
            obj.style.set_background("#e4e4e4ff");
            obj.style.set_color("#999999ff");
            this.div_ntc.addChild(obj.name, obj);
            obj = new MaskEdit("mae_chrwMphno", "absolute", "31.63%", "443", null, "21", "62.39%", null, this.div_ntc);
            obj.set_taborder("19");
            obj.set_enable("false");
            obj.style.set_background("#e4e4e4ff");
            obj.style.set_color("#999999ff");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Combo("cbo_chrwMpsvno", "absolute", "23.91%", "443", null, "21", "69.61%", null, this.div_ntc);
            this.div_ntc.addChild(obj.name, obj);
            obj.set_taborder("20");
            obj.set_innerdataset("@ds_hp");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_enable("false");
            obj.style.set_background("#e4e4e4ff");
            obj.style.set_color("#999999ff");
            obj = new Static("Static03", "absolute", "30.51%", "444", null, "21", "68.37%", null, this.div_ntc);
            obj.set_taborder("21");
            obj.set_text("-");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "37.98%", "444", null, "21", "60.9%", null, this.div_ntc);
            obj.set_taborder("22");
            obj.set_text("-");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Edit("etd_buyerHtel", "absolute", "71.36%", "471", null, "21", "22.79%", null, this.div_ntc);
            obj.set_taborder("23");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            obj.set_cssclass("edt_WF_Readonly");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Edit("etd_buyerStel", "absolute", "78.58%", "471", null, "21", "15.44%", null, this.div_ntc);
            obj.set_taborder("24");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            obj.set_cssclass("edt_WF_Readonly");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Grid("grd_file", "absolute", "0", "31", null, "220", "15", null, this.div_ntc);
            obj.set_taborder("25");
            obj.set_binddataset("ds_fyn");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"225\"/><Column size=\"350\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"순서\"/><Cell col=\"2\" text=\"구분\"/><Cell col=\"3\" text=\"구비서류명\"/><Cell col=\"4\" text=\"UPLOAD 파일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"none\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" style=\"color:EXPR(ESS_YN_NM == &quot;필수&quot; ? &quot;#FF0000FF&quot; : &quot;&quot;);color2:EXPR(ESS_YN_NM == &quot;필수&quot; ? &quot;#FF0000FF&quot; : &quot;&quot;);selectcolor:EXPR(ESS_YN_NM == &quot;필수&quot; ? &quot;#FF0000FF&quot; : &quot;&quot;);\" text=\"bind:ESS_YN_NM\"/><Cell col=\"3\" text=\"bind:DCM_NM\"/><Cell col=\"4\" text=\"bind:ORGFNAME\"/></Band></Format></Formats>");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Button("btn_fileDel", "absolute", null, "5", "72", "21", "15", null, this.div_ntc);
            obj.set_taborder("26");
            obj.set_text("파일삭제");
            obj.set_visible("false");
            obj.set_enable("false");
            this.div_ntc.addChild(obj.name, obj);
            obj = new FileUpload("FileUpload01", "absolute", null, "5", "72", "21", "89", null, this.div_ntc);
            obj.set_taborder("27");
            obj.getSetter("retry").set("0");
            obj.set_visible("false");
            obj.set_enable("false");
            obj.set_index("0");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Combo("cbo_buyerAtel", "absolute", "63.64%", "471", null, "21", "30.14%", null, this.div_ntc);
            this.div_ntc.addChild(obj.name, obj);
            obj.set_taborder("28");
            obj.set_readonly("true");
            obj.set_innerdataset("@ds_tel");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_cssclass("cmb_WF_Readonly");
            obj = new Button("btn_down", "absolute", null, "5", "72", "21", "160", null, this.div_ntc);
            obj.set_taborder("29");
            obj.set_text("파일다운");
            obj.set_visible("false");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "0", "8", "94", "21", null, null, this.div_ntc);
            obj.set_taborder("30");
            obj.set_text("첨부 파일");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Button("btn_paperNotice", "absolute", null, "5", "112", "21", "233", null, this.div_ntc);
            obj.set_taborder("31");
            obj.set_text("서류양식다운로드");
            obj.set_visible("true");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Static("Static86", "absolute", "0", "514", "190", "21", null, null, this.div_ntc);
            obj.set_taborder("32");
            obj.set_text("관련계약서");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Grid("grd_related", "absolute", "0", "541", null, "113", "15", null, this.div_ntc);
            obj.set_taborder("33");
            obj.set_binddataset("ds_related");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"47\"/><Column size=\"138\"/><Column size=\"223\"/><Column size=\"201\"/><Column size=\"123\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"mask\" text=\"계약서번호\" mask=\"######\"/><Cell col=\"3\" text=\"계약서종류\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"mask\" text=\"계약기간\" mask=\"######\"/><Cell col=\"5\" text=\"계약서상태\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"padding:0 5 0 5;\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" edittype=\"none\" style=\"align:center middle;padding:0 5 0 5;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"expr:currow+1\"/><Cell col=\"2\" edittype=\"none\" style=\"align:center middle;padding:0 5 0 5;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ELT_CTRW_NO\"/><Cell col=\"3\" edittype=\"none\" style=\"align:center middle;padding:0 5 0 5;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:MN_CTRW_KD_NM\"/><Cell col=\"4\" edittype=\"none\" style=\"align:center middle;padding:0 5 0 5;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:CTR_DT\"/><Cell col=\"5\" edittype=\"none\" style=\"align:center middle;padding:0 5 0 5;\" text=\"bind:STS_NM\"/></Band></Format></Formats>");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Button("btn_origin", "absolute", null, "514", "107", "21", "15", null, this.div_ntc);
            obj.set_taborder("34");
            obj.set_text("계약서 보기");
            obj.set_enable("false");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Static("sta_ess", "absolute", "81", "8", "160", "21", null, null, this.div_ntc);
            obj.set_taborder("35");
            obj.set_text("(필수 구비서류 0/0)");
            obj.set_visible("false");
            obj.set_usedecorate("true");
            obj.style.set_padding("0 0 0 0");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Button("btn_save_atch", "absolute", null, "5", "100", "21", "347", null, this.div_ntc);
            obj.set_taborder("36");
            obj.set_text("첨부파일 저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            obj.set_enable("false");
            this.div_ntc.addChild(obj.name, obj);

            obj = new Plugin("Plugin01", "absolute", "101.62%", "44", null, "24", "-21.17%", null, this);
            obj.setProperty("classid", "{55D9860A-AB9C-44A1-BB74-75AF7F805333}");
            obj.setProperty("taborder", "269");
            obj.setProperty("visible", "false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_stsNm", "absolute", "874", "193", "140", "21", null, null, this);
            obj.set_taborder("270");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bfCtrSqNo", "absolute", "874", "245", "140", "21", null, null, this);
            obj.set_taborder("271");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bfCtrNo", "absolute", "874", "221", "140", "21", null, null, this);
            obj.set_taborder("272");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sign", "absolute", "14.45%", "98", "517", "21", null, null, this);
            obj.set_taborder("273");
            obj.set_text("* 전자서명법 제3조 1항, 2항에 따라 직인이미지 생략");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_stsExp", "absolute", "874", "269", "140", "21", null, null, this);
            obj.set_taborder("274");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 50, this.div_seal,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("266");
            		p.style.set_background("transparent");
            		p.set_visible("false");

            	}
            );
            this.div_seal.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_ntc,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("268");
            		p.set_text("Div00");
            		p.style.set_background("transparent");
            		p.set_scrollbars("none");

            	}
            );
            this.div_ntc.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 850, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("전자계약서신청상세 협력업체");
            		p.style.set_background("#ffffffff");
            		p.style.set_color("#999999ff");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item13","rdo_tmsSts","value","ds_in","STS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","edt_tmpSts","value","ds_in","TMP_STS_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edt_eltCtrw","value","ds_in","CTRW_KD_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Div00.edt_tinm","value","ds_in","TINM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div00.txa_cntn01","value","ds_in","CNTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Div00.edt_buyerNm","value","ds_in","BUYER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Div00.chk_rltmNtcSms","value","ds_in","RLTM_NTC_SMS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Div00.chk_rltmNtcEmail","value","ds_in","RLTM_NTC_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Div00.edt_chrrEmail","value","ds_in","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","Div00.etd_buyerHtel","value","ds_in","BUYER_HTEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","Div00.etd_buyerStel","value","ds_in","BUYER_STEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_ntc.edt_buyerNm","value","ds_in","BUYER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_ntc.edt_tinm","value","ds_in","TINM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_ntc.txa_cntn01","value","ds_in","CNTN");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_2131.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("OMG_DS_SC_2131.xfdl", "lib::comTSToolKit.xjs");
        this.registerScript("OMG_DS_SC_2131.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comTSToolKit.xjs", null, exports); }	//include "lib::comTSToolKit.xjs";

        this.fn_colbCompSgnt = "";
        this.fn_tmpSts = "";
        this.fn_BuyerApvSts = "";
        this.SEAL_OMIT_YN = "";
        this.ESS_CNT = 0;

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        	var param = [
               {code:"TEL", dsName:"ds_tel", selecttype:""},
               {code:"ELT_STS", dsName:"ds_eltSts", selecttype:""}
        	];

        	this.gfn_setPortalCommonCode(param);
        	this.div_ntc.set_top(116);
        	this.fn_Chrr_disable(); // 협력 업체 담당자 정보 숨김
        }

        // 협력 업체 담당자 정보 숨김
        this.fn_Chrr_disable = function()
        {
        	this.div_ntc.Static23.set_visible(false);
        	this.div_ntc.chk_rltmNtcSms.set_visible(false);
        	this.div_ntc.cbo_chrwMpsvno.set_visible(false);
        	this.div_ntc.Static03.set_visible(false);
        	this.div_ntc.mae_chrwMphno.set_visible(false);
        	this.div_ntc.Static04.set_visible(false);

        	this.div_ntc.mae_chrwMpsqno.set_visible(false);
        	this.div_ntc.chk_rltmNtcEmail.set_visible(false);
        	this.div_ntc.edt_chrrEmail.set_visible(false);
        	this.div_ntc.Static25.set_visible(false);

        	this.div_ntc.Static31.set_top(this.div_ntc.Static31.top - 29);
        	this.div_ntc.edt_buyerNm.set_top(this.div_ntc.edt_buyerNm.top - 29);
        	this.div_ntc.Static33.set_top(this.div_ntc.Static33.top - 29);
        	this.div_ntc.cbo_buyerAtel.set_top(this.div_ntc.cbo_buyerAtel.top - 29);
        	this.div_ntc.Static40.set_top(this.div_ntc.Static40.top - 29);

        	this.div_ntc.etd_buyerHtel.set_top(this.div_ntc.etd_buyerHtel.top - 29);
        	this.div_ntc.Static09.set_top(this.div_ntc.Static09.top - 29);
        	this.div_ntc.etd_buyerStel.set_top(this.div_ntc.etd_buyerStel.top - 29);
        	this.div_ntc.Static32.set_top(this.div_ntc.Static32.top - 29);
        	
        	this.resetScroll();
        }

        //gfn_setCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	//콤보에 최상단Row보이도록 설정
        	this.div_ntc.cbo_buyerAtel.set_index(0);
        	this.div_ntc.cbo_chrwMpsvno.set_index(0);

        	for (var i = this.ds_eltSts.rowcount-1; 0 <= i; i--) {
        		var sts = this.ds_eltSts.getColumn(i, "SIMP_C");
        		if (sts == "1") { this.ds_eltSts.deleteRow(i); }
        		// if (sts == "2") { this.ds_eltSts.deleteRow(i); }
        		if (sts == "4") { this.ds_eltSts.deleteRow(i); }
        		if (sts == "5") { this.ds_eltSts.deleteRow(i); }
        		if (sts == "6") { this.ds_eltSts.deleteRow(i); }
        		if (sts == "7") { this.ds_eltSts.deleteRow(i); }
        		if (sts == "9") { this.ds_eltSts.deleteRow(i); }
        		if (sts == "10") { this.ds_eltSts.deleteRow(i); }
        		if (sts == "A") { this.ds_eltSts.deleteRow(i); }
        	}
        	this.div_ntc.grd_related.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        }

        this.fn_afterFormOnload = function()
        {
        	// 파일업로드 설정
        	var fileParam = {
        		form:this,
        		param:[{
        				fileObj: this.div_seal.FileUpload,
        				maxSize:3,						//허용할 파일 사이즈(MB)
        				maxLength:1,					//허용할 파일갯수
        				ext:['jpg','jpeg','png'],		//허용할 확장자명
        				upload_after_succ: 'div_seal_FileUpload_onsuccess'    	//파일 업로드 성공후 호출할 함수이름
        			}]
        	};
        	this.gfn_addEventFileUpload(fileParam);
        }

        /*조회*/
        this.search = function()
        {
        	this.fn_setVisibleSeal(false);
        	var eltCtrwNo =  this.edt_eltCtrwNo.value;
        	var chgSqno =  this.edt_chgSqNo.value;

        	var sSvcID        = "search";
        	var sURL          = "svc::rest/ct/eltctrw/retrieveEltCtrw";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_in=ds_in ds_kd=ds_kd ds_ntc=ds_ntc ds_fyn=ds_fyn";

        	var sArgument     = "colbComp=Y eltCtrwNo="+ eltCtrwNo +" chgSqno="+ chgSqno;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        //callback메소드
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID =="insert") {
        			this.gfn_getMessage("alert", "result.message.save.success");
        			this.parent.btn_search.click();
        			this.reload();
        			return;
        		} else if (svcID == "search") {
        			if (this.ds_in.rowcount == 0) {
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        			if (this.ds_in.getColumn(0,"BUYER_TELNO") != undefined) {
        				var buyer_telno = this.ds_in.getColumn(0, "BUYER_TELNO");
         				this.fn_telNo(buyer_telno, this.div_ntc.cbo_buyerAtel, this.div_ntc.etd_buyerHtel, this.div_ntc.etd_buyerStel);
         				this.btn_popup.set_visible(true);
        			}
        			this.SEAL_OMIT_YN = this.gfn_nullToEmpty(this.ds_in.getColumn(0, "SEAL_OMIT_YN"));
        			this.ESS_CNT = this.ds_fyn.getCaseCount("ESS_YN == 'Y'");
        			this.fn_setEssCnt();
        			this.div_ntc.btn_save_atch.set_visible(false);
        			this.div_ntc.btn_save_atch.set_enable(false);
        		} else if (svcID == "relatedEltList") {
        			if (this.ds_related.rowcount > 0) {
        				this.div_ntc.btn_origin.set_enable(true);
        				this.ds_related.filter("ELT_CTRW_NO != '" + this.gfn_nullToEmpty(this.edt_eltCtrwNo.value) + "'");
        			}
        			return;
        		} else if (svcID == "saveAtch") {
        			this.alert("첨부파일을 저장하였습니다.");
        			this.ESS_CNT = this.ds_fyn.getCaseCount("ESS_YN == 'Y'");
        			this.fn_setEssCnt();
        			this.div_ntc.btn_save_atch.set_enable(false);
        		} else {
        			if (this.ds_in.rowcount == 0) {
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        			return;
        		}
        	}

        	this.fn_tmpSts = this.ds_in.getColumn(0, "TMP_STS");
        	if (this.edt_stsNm.value == "계약종료") {
        		this.fn_tmpSts = 10;
        	}

        	// 5 계약기간 변경, 6 문구변경, 7 개별 변경
        	if (this.fn_tmpSts == 5 || this.fn_tmpSts == 6 || this.fn_tmpSts == 7) {
        		this.disable1();
        	} else if (this.fn_tmpSts != 1 && this.fn_tmpSts != 4) {
        		this.disable();
        	} else {
        		this.btn_save.set_visible(true);
        	}

        	if (this.fn_tmpSts == 1 || this.fn_tmpSts == 4 || this.fn_tmpSts == 5 || this.fn_tmpSts == 6 || this.fn_tmpSts == 7) {
        		this.btn_save.set_visible(true);
        		this.btn_save.set_right(15);
        		this.btn_popup.set_right(63);
        	} else {
        		this.btn_save.set_visible(false);
        		this.btn_popup.set_right(15);
        	}

        	this.fn_BuyerApvSts = this.ds_in.getColumn(0, "BUYER_APV_STS");

        	if (this.fn_tmpSts == 1) {
        		if (this.fn_BuyerApvSts  == "Y") {
        			this.div_ntc.btn_down.set_visible(true);
        		} else {
        			this.div_ntc.btn_down.set_visible(false);
        		}
        		this.div_ntc.FileUpload01.set_visible(true);
        		this.div_ntc.btn_save_atch.set_visible(true);
        		this.div_ntc.btn_fileDel.set_visible(true);
        		this.div_ntc.FileUpload01.set_right(89);
        		this.div_ntc.btn_fileDel.set_right(15);
        		this.enable();
        	} else if (this.fn_tmpSts == 4) {
        		this.div_ntc.btn_down.set_visible(true);
        		this.div_ntc.FileUpload01.set_visible(true);
        		this.div_ntc.btn_save_atch.set_visible(true);
        		this.div_ntc.btn_fileDel.set_visible(true);
        		this.div_ntc.btn_down.set_right(160);
        		this.div_ntc.FileUpload01.set_right(89);
        		this.div_ntc.btn_fileDel.set_right(15);
        		this.enable();
        	}

        	if (this.edt_stsExp.value == "Y") {
        		alert("계약서 작성 중 계약기간일이 도래되어 업무가 중단되었습니다.\n업체 재협의 후 다시 작성하시기 바랍니다.\n본 계약서는 7 영업일 후 자동 삭제될 예정입니다.");
        		this.expDisable();
        	} else if (this.SEAL_OMIT_YN != "Y" && (this.fn_tmpSts == 1 || this.fn_tmpSts == 3 || this.fn_tmpSts == 4)) {
        		// 직인 비활성화 (2020.07.01 이전)
        		// this.alert("인감이미지 등록 부분은 2020. 07. 01.(수)부터 비활성화 예정입니다. 계약서 작성일이 2020년 이전인 계약의 체결이 필요하신 경우, 2020. 06. 30.(화)까지 체결완료하시기 바랍니다.");
        		
        		// 직인 비활성화 (2020.07.01 이후)
        		this.alert("2020년 이전에 작성된 계약서는 인감이미지 등록이 비활성화됨에 따라 2020. 07. 01.(수)부터 진행하실 수 없습니다. 담당 바이어를 통해 새로운 계약서로 진행하시기 바랍니다.");
        		this.disable();
        	}
        }

        /* 입력저장 */
        this.btn_save_onclick = function(obj,e)
        {
        	this.insert();
        }

        /*등록*/
        this.insert = function()
        {
        	if (this.fn_validationCheck()) {
        		var buyer_telno = this.gfn_nullToEmpty(this.div_ntc.cbo_buyerAtel.value)
        							+this.gfn_nullToEmpty(this.div_ntc.etd_buyerHtel.value)
        							+this.gfn_nullToEmpty(this.div_ntc.etd_buyerStel.value);

        		var chrr_mpNo = this.gfn_nullToEmpty(this.div_ntc.cbo_chrwMpsvno.value)
        				            +this.gfn_nullToEmpty(this.div_ntc.mae_chrwMphno.value)
        							+this.gfn_nullToEmpty(this.div_ntc.mae_chrwMpsqno.value);

        		var sId   = application.gv_userId;
        		var sParams =	"COLB_COMP_SGNT=" + this.fn_colbCompSgnt;

        		var sSvcID        = "insert";
        		var sURL          = "svc::rest/ct/eltctrw/saveEltCtrw";// 호출할 서버 페이지 주소
        		var sInDatasets   = "ds_in=ds_in ds_fyn=ds_fyn:A";
        		var sOutDatasets  = "";
        		var sArgument     = sParams;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회

        		// trace("ds_in"  +this.ds_in.saveXML());
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

         /*닫기*/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.disable = function(obj,e)
        {
        	// 상태가 거절, 완료 일 때  모두 비활성화
        	this.rdo_tmsSts.set_enable(false);
        	this.div_ntc.edt_tinm.set_enable(false);
        	this.div_ntc.txa_cntn01.set_enable(false);
        	this.div_ntc.chk_rltmNtcSms.set_enable(false);
        	this.div_ntc.chk_rltmNtcEmail.set_enable(false);
        	this.div_ntc.edt_buyerNm.set_enable(false);
        	this.div_ntc.cbo_buyerAtel.set_enable(false);
        	this.div_ntc.etd_buyerHtel.set_enable(false);
        	this.div_ntc.etd_buyerStel.set_enable(false);
        	this.btn_save.set_enable(false);

        	if (this.fn_tmpSts != 4) {
        		this.div_ntc.btn_down.set_visible(true);
        		this.div_ntc.btn_down.set_right(this.div_ntc.btn_fileDel.right);
        		this.div_ntc.FileUpload01.set_visible(false);
        		this.div_ntc.btn_fileDel.set_visible(false);
        	}
        }

        this.expDisable = function(obj,e)
        {
        	//지연계약서일때 비활성화
        	this.rdo_tmsSts.set_enable(false);
        	this.div_ntc.edt_tinm.set_enable(false);
        	this.div_ntc.txa_cntn01.set_enable(false);
        	this.div_ntc.chk_rltmNtcSms.set_enable(false);
        	this.div_ntc.chk_rltmNtcEmail.set_enable(false);
        	this.div_ntc.edt_buyerNm.set_enable(false);
        	this.div_ntc.cbo_buyerAtel.set_enable(false);
        	this.div_ntc.etd_buyerHtel.set_enable(false);
        	this.div_ntc.etd_buyerStel.set_enable(false);
        	this.btn_save.set_enable(false);
        	this.div_ntc.FileUpload01.set_visible(false);
        	this.div_ntc.btn_fileDel.set_visible(false);
        }

        
        this.enable = function(obj,e)
        {
        	// 상태가 거절, 완료 일 때  모두 비활성화
        	this.rdo_tmsSts.set_enable(true);
        	this.div_ntc.edt_tinm.set_enable(true);
        	this.div_ntc.txa_cntn01.set_enable(true);
        	this.div_ntc.chk_rltmNtcSms.set_enable(true);
        	this.div_ntc.chk_rltmNtcEmail.set_enable(true);
        	this.div_ntc.edt_buyerNm.set_enable(true);
        	this.div_ntc.cbo_buyerAtel.set_enable(true);
        	this.div_ntc.etd_buyerHtel.set_enable(true);
        	this.div_ntc.etd_buyerStel.set_enable(true);
        	//this.btn_save.set_enable(true);
        }

        this.disable1 = function(obj,e)
        {
        	// 상태가 거절, 완료 일 때  모두 비활성화
        	// this.rdo_tmsSts.set_enable(false);
        	// this.chk_rltmNtcSms.set_enable(false);
        	// this.chk_rltmNtcEmail.set_enable(false);
        	this.div_ntc.edt_buyerNm.set_enable(false);
        	this.div_ntc.cbo_buyerAtel.set_enable(false);
        	this.div_ntc.etd_buyerHtel.set_enable(false);
        	this.div_ntc.etd_buyerStel.set_enable(false);
        	this.btn_save.set_enable(false);

        	if (this.fn_tmpSts == 5 || this.fn_tmpSts == 6) {
        		this.div_ntc.btn_down.set_right(this.div_ntc.btn_fileDel.right);
        		this.div_ntc.FileUpload01.set_visible(false);
        		this.div_ntc.btn_fileDel.set_visible(false);
        	}
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
        	if (this.gfn_isNull(this.rdo_tmsSts.value)) {
        		this.rdo_tmsSts.set_index(0);

        		if (this.rdo_tmsSts.value == "2") {
        			this.rdo_tmsSts.set_index(1);
        		}

        		alert('전송 상태를 선택 하세요.');
        		return false;
        	}

        	if (this.rdo_tmsSts.value == 2 && this.fn_colbCompSgnt == "") {
        		alert('협력업체 서명을 다시 하세요.');
        		return false;
        	}

        	if (!(this.ds_in.getColumn(0, "STS") == "8" || this.ds_in.getColumn(0, "STS") == "3")) {
        		for (var i = 0; i < this.ds_fyn.rowcount; i++) {
        			if (this.ds_fyn.getColumn(i, "ESS_YN") == "Y") {
        				if (this.gfn_isNull(this.ds_fyn.getColumn(i, "ORGFNAME"))) {
        					alert('필수 구비서류를 첨부 하세요.');
        					return false;
        				}
        			}
        		}
        	}

        	// (191211) 전자서명법 제3조 1항, 2항에 따라 신규계약 건부터 직인이미지 생략
        	/*
        	if (this.SEAL_OMIT_YN != "Y" && this.gfn_nullToEmpty(this.ds_in.getColumn(0,"COLB_COMP_SEAL_SYS_FLNM")) == "" && this.ds_in.getColumn(0,"STS")  == "2") {
        		this.div_ntc.edt_tinm.setFocus();
        		alert('인감도장을 입력 하세요.');
        		return false;
        	}
        	*/

        	if (this.gfn_isNull(this.div_ntc.edt_tinm.value)) {
        		this.div_ntc.edt_tinm.setFocus();
        		alert('통보내역 제목을 입력 하세요.');
        		return false;
        	}

        	if (this.gfn_isNull(this.div_ntc.txa_cntn01.value)) {
        		this.div_ntc.txa_cntn01.setFocus();
        		alert('통보내역 내용을 입력 하세요.');
        		return false;
        	}

        	return true;
        }

        this.btn_popup_onclick = function(obj,e)
        {
        	var mnCtrwKd = this.ds_in.getColumn(0, "MN_CTRW_KD");
        	var eltCtrwNo = this.ds_in.getColumn(0,"ELT_CTRW_NO");
        	var chgSqNo = this.ds_in.getColumn(0,"CHG_SQNO");

        	// comEsum.xjs
        	this.eltOzViewer(mnCtrwKd, eltCtrwNo, chgSqNo); // type, eltCtrwNo, chgSqNo
        }

        this.FileUpload01_onlbuttondown = function(obj,e)
        {
        	if (this.ds_fyn.getColumn(this.ds_fyn.rowposition, "ISCHECKED") == 0) {
        		alert("파일을 추가할 서류를 선택 하세요.");
        	} else {
        		for (var i = this.ds_fyn.getRowCount()-1; i >= 0; i--) {
        			if (this.ds_fyn.getColumn(i, "ISCHECKED") == 1) {
        				if (this.ds_fyn.getColumn(i, "ISCHECKED") !="SYSTEM" && this.ds_in.getColumn(0, "TMP_STS") != "1" && this.ds_in.getColumn(0, "TMP_STS") != "4" && this.ds_fyn.getColumn(i, "ORGFNAME") != undefined) {
        					alert("파일을 변경 할 수 없습니다.");
        					return false;
        				 } else {
        					this.ds_fyn.setColumn(i, "FILE_DEL", 0)
        					return true;
        				}
        			}
        		}
        	}
        }

        /*회사소개 파일첨부*/
        this.FileUpload01_onitemchanged = function(obj,e)
        {
        	this.gfn_callUpload(obj);
        }

        this.FileUpload01_onsuccess = function(obj,e)
        {
        	if (e.datasets == null) {
        		// trace("업로드 실패");
        		this.alert(e.errormsg);
        	} else {
        		// trace("업로드 성공");
        		if (e.datasets[0].id == "ds_fileValid") {
        			this.ds_uploadresult00.clear();
        			this.alert("첨부파일 용량이 너무 큽니다.\n(하나로eSCM 첨부파일 업로드 제한 크기 20MB)");
        			return;
        		}
        		
        		this.ds_uploadresult00.clear();
        		this.ds_uploadresult00.copyData(e.datasets[0]);
        		
        		var eltCtrwNo =  this.ds_in.getColumn(0,"ELT_CTRW_NO");
        		var chgSqNo =  this.ds_in.getColumn(0,"CHG_SQNO");

        		var fName = this.ds_uploadresult00.getColumn(0,"FILENAME");
        		var fType = this.ds_uploadresult00.getColumn(0,"FILETYPE");
        		var fSize = this.ds_uploadresult00.getColumn(0,"FILESIZE");
        		var orgName = this.ds_uploadresult00.getColumn(0,"ORGFNAME");
        		var sysName = this.ds_uploadresult00.getColumn(0,"SYSTEMFILENAME");
        		
        		var bytes = this.gfn_lengthByte(orgName);
        		if (bytes > 64) {
        			this.ds_uploadresult00.clear();
        			this.div_ntc.FileUpload01.deleteItem(0);
        			this.div_ntc.FileUpload01.appendItem();
        			this.alert("첨부파일명의 길이는 확장자 포함 64바이트 이하로 등록해주시기 바랍니다.\n(한글 최대32자, 영·숫자 최대64자)\n등록한 파일의 바이트 수 : " + bytes);
        			return;
        		}
        		
        		this.ds_fyn.setColumn(this.ds_fyn.rowposition, "ELT_CTRW_NO", eltCtrwNo);
        		this.ds_fyn.setColumn(this.ds_fyn.rowposition, "CHG_SQNO", chgSqNo);
        		this.ds_fyn.setColumn(this.ds_fyn.rowposition, "FILENAME", fName);
        		this.ds_fyn.setColumn(this.ds_fyn.rowposition, "FILETYPE", fType);
        		this.ds_fyn.setColumn(this.ds_fyn.rowposition, "FILESIZE", fSize);
        		this.ds_fyn.setColumn(this.ds_fyn.rowposition, "ORGFNAME", orgName);
        		this.ds_fyn.setColumn(this.ds_fyn.rowposition, "SYSTEMFILENAME", sysName);
        		
        		// 업로드 성공 시 포커스 자동 이동
        		this.ds_uploadresult00.clear();
        		this.div_ntc.FileUpload01.deleteItem(0);
        		this.div_ntc.FileUpload01.appendItem();
        		var row = this.ds_fyn.findRowExpr("ORGFNAME == null && ESS_YN == 'Y'", null);
        		if (row != -1) {
        			//this.div_ntc.grd_file.selectRow(row);
        			this.ds_fyn.setColumn(this.ds_fyn.rowposition, "ISCHECKED", "0");
        			this.ds_fyn.set_rowposition(row);
        			this.ds_fyn.setColumn(row, "ISCHECKED", "1");
        		}
        		
        		// 첨부파일 저장 활성화 (작성, 보완 상태일 때)
        		this.fn_enableSaveAtchBtn();
        	}
        }

        this.FileUpload01_onerror = function(obj,e)
        {
        	// trace("FileUpload01_onerror");
        	// trace("e.errorcode: "+e.errorcode);
        	// trace("e.errormsg: "+e.errormsg);
        	this.alert(e.errormsg);
        }

        /*파일 삭제*/
        this.btn_fileDel_onclick = function(obj,e)
        {
        	if (this.ds_fyn.getColumn(this.ds_fyn.rowposition, "ISCHECKED") == 0) {
        		alert("파일을 삭제할 서류를 선택 하세요.");
        	} else {
        		for (var i = this.ds_fyn.getRowCount()-1; i >= 0; i--) {
        			if  (this.ds_fyn.getColumn(i, "ISCHECKED") == 1) {
        				 if (this.ds_fyn.getColumn(i, "ISCHECKED") != "SYSTEM" && this.ds_in.getColumn(0, "TMP_STS") != "1" && this.ds_in.getColumn(0, "TMP_STS") != "4") {
        					alert("파일을 삭제 할 수 없습니다. ");
        					return false;
        				 } else {
        					// this.ds_fyn.deleteRow(i);
        					this.ds_fyn.setColumn(i, "FILENAME", "");
        					this.ds_fyn.setColumn(i, "FILETYPE", "");
        					this.ds_fyn.setColumn(i, "FILESIZE", "");
        					this.ds_fyn.setColumn(i, "ORGFNAME", "");
        					this.ds_fyn.setColumn(i, "FILE_DEL", 1);
        					// this.ds_fyn.setColumn(i,"SYSTEMFILENAME","");
        					
        					this.fn_enableSaveAtchBtn();
        					return true;
        				}
        			}
        		}
        	}
        }

        /* 필수서류 업로드 표시 */
        this.fn_setEssCnt = function()
        {
        	var essUp = this.ds_fyn.getCaseCount("ORGFNAME != null && ORGFNAME != '' && ESS_YN == 'Y'");
        	if (this.ESS_CNT > 0) {
        		var color = this.ESS_CNT == essUp ? "#0000FFFF" : "#FF0000FF";
        		var str = "(필수 구비서류 <fc v='"+color+"'>"+essUp+"</fc>/"+this.ESS_CNT+")";
        		this.div_ntc.sta_ess.set_text(str);
        		this.div_ntc.sta_ess.set_visible(true);
        	} else {
        		this.div_ntc.sta_ess.set_visible(false);
        	}
        }

        //전화 번호 타입 변경
        this.fn_telNo = function(strTelNo,strVal1,strVal2,strVal3)
        {
        	 if (strTelNo.length > 8) {
        		var RegPhonNum = "";

        		//문자열 길이에 따른 값 처리
        		if (strTelNo.length == 9) {
        			RegPhonNum = /([0-9]{2})([0-9]{3})([0-9]+)/;
        		} else if (strTelNo.length == 10) {
        			if (strTelNo.substring(0,2)=="02") {
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

        this.grd_file_oncellclick = function(obj,e)
        {
        	var row = this.ds_fyn.findRow("ISCHECKED", "1");
        	if (row != -1) {
        		this.ds_fyn.setColumn(this.ds_fyn.findRow("ISCHECKED", "1"), "ISCHECKED", "0");
        	}
        	this.ds_fyn.setColumn(e.row, "ISCHECKED", e.row != row ? "1" : "0");
        }

        this.btn_down_onclick = function(obj,e)
        {
        	if (!this.fn_checkDownload()) {
        		this.div_ntc.btn_down.set_enable(false);
        		//this.btn_down_zip.set_enable(false);
        		return;
        	}
        	this.fn_eltFileDownload(this, this.ds_fyn, false);
        }

        /**
         * 전자계약 첨부파일 다운로드 상태 (계약상대자)
         */
        this.fn_checkDownload =  function()
        {
        	var sts = this.ds_in.getColumn(0, "TMP_STS"); // 계약서상태
        	var cancel = this.ds_in.getColumn(0, "CANCEL"); // 해지여부
        	var end = this.ds_in.getColumn(0, "STS_END"); // 계약종료여부
        	
        	if (sts == "10" || sts == "8" || cancel == "Y" || end == "Y") {
        		// 거절,종료,해지 - 차단
        		this.alert("전자계약서가 거절, 종료, 해지 상태일 경우 첨부파일을 다운로드 하실 수 없습니다.");
        		return false;
        	}
        	return true;
        }

        this.rdo_tmsSts_onitemchanged = function(obj,e)
        {
        	if (this.rdo_tmsSts.value  == "2") {
        		this.btn_save.set_enable(false);
        		var plainText = this.ds_in.getColumn(0, "ELT_CTRW_NO");
        		// this.gfn_signTradeSign(this.Plugin00,plainText,"","fn_signCallback" , "screenId");
        		var bzno = "";

        		/*
        		 * escm/lib/comTSToolKit.xjs.js
        		 * bzno 를 공백으로 던지면 자동으로 구함
        		 * application.gv_serverType 기본값은 LOCAL 임
        		 */
        		if (application.gv_serverType != "ADMIN") {
        			bzno ="1234567890";
        		}

        		var Elsg  = "test";

        		this.gfn_signTradeSign(this.Plugin00, Elsg, bzno, "fn_signCallback", "screenId");
        	} else {
        		this.fn_setVisibleSeal(false);
        		this.btn_save.set_enable(true);
        	}
        }

        /*
         * 인감이미지 등록 보이기/숨기기
         */
        this.fn_setVisibleSeal = function(isVisible)
        {
        	if (isVisible) {
        		if (this.SEAL_OMIT_YN == "Y") {
        			this.sta_sign.set_visible(true);
        		} else {
        			this.div_seal.set_visible(true);
        			this.div_seal.set_top(116);
        			this.div_ntc.set_top(186);
        			//this.parent.div_dtl.set_height(560);
        		}
        		this.btn_save.set_enable(true);
        	} else {
        		this.sta_sign.set_visible(false);
        		this.div_seal.set_visible(false);
        		this.div_ntc.set_top(116);
        		this.div_ntc.edt_tinm.set_value("");
        		this.div_ntc.txa_cntn01.set_value("");
        	}
        	this.resetScroll();
        	this.parent.resetScroll();
        }

        this.fn_signCallback = function(rtnValue ,signId)
        {
        	if (rtnValue == "ERROR") {
        	//	alert("전자서명시 오류가 있습니다.");
        		this.fn_colbCompSgnt = "";
        		this.fn_setVisibleSeal(false);
        		this.ds_in.setColumn(0, "STS", "");
        	} else {
        		switch(signId) {
        			case "screenId":
        //				alert("성공하였습니다.");
        				this.fn_colbCompSgnt = rtnValue;
        				this.fn_setVisibleSeal(true);
        // 				if (this.SEAL_OMIT_YN == "Y") {
        // 					this.sta_sign.set_visible(true);
        // 				} else {
        // 					this.div_seal.set_visible(true);
        // 					this.div_seal.set_top(116);
        // 					this.div_ntc.set_top(186);
        // 					this.parent.div_dtl.set_height(560);
        // 				}
        				this.div_ntc.edt_tinm.set_value("협력업체 서명");
        				this.div_ntc.txa_cntn01.set_value("협력업체 서명");
        				break;
        		}
        	}
        // 	this.resetScroll();
        // 	this.parent.resetScroll();
        }

        this.div_seal_FileUpload_onerror = function(obj,e)
        {
        	// trace("FileUpload_onerror");
        	// trace("e.errorcode: "+e.errorcode);
        	// trace("e.errormsg: "+e.errormsg);
        }

        this.div_seal_FileUpload_onitemchanged = function(obj,e)
        {
        	this.gfn_callUpload(obj);
        }

        this.div_seal_FileUpload_onsuccess = function(obj,e)
        {
        	if (e.datasets == null) {
        		trace("업로드 실패");
        	} else {
        		this.ds_uploadresult01.copyData(e.datasets[0]);
        		this.ds_in.setColumn(0, "COLB_COMP_SEAL_SYS_FLNM", this.ds_uploadresult01.getColumn(0,"SYSTEMFILENAME"));
        		this.ds_in.setColumn(0, "COLB_COMP_SEAL_APDFLNM", this.ds_uploadresult01.getColumn(0,"ORGFNAME"));
        	}
        }

        /*
         * 제출서류안내 자료실 링크
         * 운영 자료실 직접링크: 개발서버에서 테스트 안됨
         */
        this.div_ntc_btn_paperNotice_onclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		return;
        	}

        	var objDs = this.objects[obj.binddataset];
        	this.fn_openBbrd(e.row); // 조회
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_openBbrd = function(nRow)
        {
        	var arg = '';
        	var oArg = {arg:arg};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_compopupAfter";
        	this.gfn_openPopup("blbdPopup", "OMG.PT::OMG_DS_SC_4116.xfdl", oArg, sOption, sPopupCallBack);
        }

        /*  팝업콜백 함수*/
        this.fn_compopupAfter = function(strId,strVal)
        {
        	if (strVal != '') {
        		var paramsArr = strVal.split(",");

        		if (strId == "blbdPopup") {
        		}
        	}
        }

        /*
         * 관련 계약서 로드
         */
        this.fn_loadRelatedElt = function()
        {
        	this.ds_related.clearData();

        	var relno = this.gfn_nullToEmpty(this.edt_bfCtrNo.value);
        	var relseq = this.gfn_nullToEmpty(this.edt_bfCtrSqNo.value);

        	if (relno == "") {
        		relno =  this.gfn_nullToEmpty(this.edt_eltCtrwNo.value);
        		relseq   =  this.gfn_nullToEmpty(this.edt_chgSqNo.value);
        	}

        	var param = "relno=" + relno
        		+ " relseq=" + relseq
        	;

        	var sSvcID        = "relatedEltList";//통신아이디
        	var sURL          = "svc::rest/ct/eltctrw/retrieveRelatedEltCtrw";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_related=ds_elt";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        // 계약서 보기
        this.btn_origin_onclick = function(obj,e)
        {
        	var rowposition = -1;
        	for (var i = 0; i < this.ds_related.rowcount; i++) {
        		if (this.ds_related.getColumn(i, "ISCHECKED") == "1") {
        			rowposition = i;
        			break;
        		}
        	}

        	if (rowposition == -1) {
        		this.alert("계약서를 먼저 선택해주시기 바랍니다.");
        		return;
        	}

        	var mnCtrwKd = this.gfn_nullToEmpty(this.ds_related.getColumn(rowposition, "MN_CTRW_KD"));
        	var eltCtrwNo = this.gfn_nullToEmpty(this.ds_related.getColumn(rowposition, "ELT_CTRW_NO"));
        	var chgSqNo = this.gfn_nullToEmpty(this.ds_related.getColumn(rowposition, "CHG_SQNO"));

        	// comEsum.xjs
        	this.eltOzViewer(mnCtrwKd, eltCtrwNo, chgSqNo); // type, eltCtrwNo, chgSqNo
        }

        this.grd_related_oncellclick = function(obj,e)
        {
        	if (e.cell==0) {
        		this.gfn_singleChk(obj,e);
        	}
        }
        this.ds_fyn_oncolumnchanged = function(obj,e)
        {
        	if (this.ESS_CNT > 0) {
        		this.fn_setEssCnt();
        	}
        	this.div_ntc.FileUpload01.set_enable(this.ds_fyn.findRow("ISCHECKED", "1") != -1);
        	this.div_ntc.btn_fileDel.set_enable(this.ds_fyn.findRow("ISCHECKED", "1") != -1);
        }

        /*
         * 전자계약 파일다운로드(BLOB형)
         * @param _form(호출 화면 폼)
         * @param _ds(첨부파일 데이터 셋)
         * @param _isZip(일괄다운로드 여부)
         */
        this.fn_eltFileDownload = function(_form,_ds,_isZip)
        {	
        	var existFile = false;
        	var apdflSts = "";
        	if (_isZip) {
        		for (var i=0; i<_ds.getRowCount(); i++) {
        			var sysflnm = _ds.getColumn(i, "SYSTEMFILENAME");
        			var apdflnm = _ds.getColumn(i, "ORGFNAME");
        			var sts = _ds.getColumn(i, "APDFL_STS");
        			if (!this.gfn_isNull(sysflnm) && !this.gfn_isNull(apdflnm)) {
        				existFile = true; // 다운로드 할 파일이 있음
        			}
        			if (!this.gfn_isNull(sts)) {
        				apdflSts = sts; // 저장된 테이블 위치 값 획득
        			}
        			if (existFile && !this.gfn_isNull(apdflSts)) {
        				// 필요한 값이 모두 구해지면 break
        				break;
        			}
        		}
        	} else if (_ds.getColumn(_ds.rowposition, "ISCHECKED") != 0) {
        		existFile = true;
        	}
        	
        	if (!existFile) {
        		if (_isZip) {
        			alert("등록된 구비서류가 없습니다.");
        		} else {
        			alert("파일을 다운할 서류를 선택 하세요.");
        		}
        		return;
        	} else {
        		var eltCtrwNo = _ds.getColumn(_ds.rowposition, "ELT_CTRW_NO");
        		var chgSqno   = _ds.getColumn(_ds.rowposition, "CHG_SQNO");
        		var strDownUrl = application.gv_server_url+"rest/ct/eltctrw/downloadFile";
        		var params = "eltCtrwNo="+eltCtrwNo + "&chgSqno=" + chgSqno;
        		
        		if (_isZip) {
        			params += "&zipYn=Y&sts=" + apdflSts;
        		} else {
        			var apdflnm = _ds.getColumn(_ds.rowposition, "ORGFNAME");
        			if (!this.gfn_isNull(apdflnm)) {			
        				var sqno = _ds.getColumn(_ds.rowposition, "SQNO");
        				var sts = this.gfn_nullToEmpty(_ds.getColumn(_ds.rowposition, "APDFL_STS"));
        				params += "&sqno=" + sqno + "&sts=" + sts;
        			} else {
        				alert("등록된 구비서류가 없습니다.");
        				return;
        			}
        		}
        		
        		// 물리파일 다운로드 강제 옵션(DB다운로드 오류 대비 비상용, 추후 제거)
        		//params += "&force=Y";
        		
        		_form.setWaitCursor();
        		try {
        			$.fileDownload(strDownUrl, {
        				httpMethod: "POST",
        				data: params,
        				successCallback: function (url) {
        					_form.setWaitCursor(false);
        				},
        				failCallback: function (responseHtml) {
        					_form.setWaitCursor(false);
        					_form.alert("첨부파일 다운로드 할 수 없습니다.");
        				}
        			});
        		} catch(e) {
        			_form.setWaitCursor(false);
        			alert("첨부파일 다운로드 모듈에 오류가 발생했습니다.\n새로고침 후 진행하시기 바랍니다.");
        		}
        	}
        }

        /* 첨부파일저장버튼 활성화(작성, 보완 Only) */
        this.fn_enableSaveAtchBtn = function()
        {
        	if (this.fn_tmpSts == 1 || this.fn_tmpSts == 4) {
        		var atchCnt = this.ds_fyn.getCaseCount("(ORGFNAME != null && ORGFNAME != '') || FILE_DEL == 1");
        		this.div_ntc.btn_save_atch.set_enable(atchCnt > 0);
        	}
        }

        this.div_ntc_btn_save_atch_onclick = function(obj,e)
        {
        	if (this.confirm("첨부파일을 저장하시겠습니까?\n(전자계약 진행 상태는 변하지 않습니다.)")) {
        		var sSvcID        = "saveAtch";
        		var sURL          = "svc::rest/ct/eltctrw/saveEltCtrwAtch";// 호출할 서버 페이지 주소
        		var sInDatasets   = "ds_in=ds_in ds_fyn=ds_fyn:A";
        		var sOutDatasets  = "ds_fyn=ds_fyn";
        		var sArgument     = "";
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회

        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_receive.addEventHandler("onrowposchanged", this.ds_receive_onrowposchanged, this);
            this.ds_ntc.addEventHandler("onrowposchanged", this.ds_ntc_onrowposchanged, this);
            this.ds_fyn.addEventHandler("oncolumnchanged", this.ds_fyn_oncolumnchanged, this);
            this.ds_uploadresult00.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.ds_uploadresult01.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.rdo_tmsSts.addEventHandler("onitemchanged", this.rdo_tmsSts_onitemchanged, this);
            this.edt_eltCtrw.addEventHandler("oneditclick", this.edt_eltCtrw_oneditclick, this);
            this.btn_popup.addEventHandler("onclick", this.btn_popup_onclick, this);
            this.div_seal.FileUpload.addEventHandler("onsuccess", this.div_seal_FileUpload_onsuccess, this);
            this.div_seal.FileUpload.addEventHandler("onerror", this.div_seal_FileUpload_onerror, this);
            this.div_seal.FileUpload.addEventHandler("onitemchanged", this.div_seal_FileUpload_onitemchanged, this);
            this.div_ntc.chk_rltmNtcSms.addEventHandler("onclick", this.CheckBox00_onclick, this);
            this.div_ntc.cbo_chrwMpsvno.addEventHandler("onitemchanged", this.Combo00_onitemchanged, this);
            this.div_ntc.grd_file.addEventHandler("oncellclick", this.grd_file_oncellclick, this);
            this.div_ntc.btn_fileDel.addEventHandler("onclick", this.btn_fileDel_onclick, this);
            this.div_ntc.FileUpload01.addEventHandler("onlbuttondown", this.FileUpload01_onlbuttondown, this);
            this.div_ntc.FileUpload01.addEventHandler("onsuccess", this.FileUpload01_onsuccess, this);
            this.div_ntc.FileUpload01.addEventHandler("onerror", this.div_seal_FileUpload_onerror, this);
            this.div_ntc.FileUpload01.addEventHandler("onitemchanged", this.FileUpload01_onitemchanged, this);
            this.div_ntc.cbo_buyerAtel.addEventHandler("onitemchanged", this.Combo08_onitemchanged, this);
            this.div_ntc.btn_down.addEventHandler("onclick", this.btn_down_onclick, this);
            this.div_ntc.btn_paperNotice.addEventHandler("onclick", this.div_ntc_btn_paperNotice_onclick, this);
            this.div_ntc.grd_related.addEventHandler("oncellclick", this.grd_related_oncellclick, this);
            this.div_ntc.btn_origin.addEventHandler("onclick", this.btn_origin_onclick, this);
            this.div_ntc.btn_save_atch.addEventHandler("onclick", this.div_ntc_btn_save_atch_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_2131.xfdl", true);

       
    };
}
)();
