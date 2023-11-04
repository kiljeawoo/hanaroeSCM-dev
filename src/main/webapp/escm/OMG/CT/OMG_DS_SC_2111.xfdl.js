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
                this.set_name("OMG_DS_SC_2111");
                this.set_titletext("전자계약서신청상세 농협");
                this.set_scrollbars("autoboth");
                this._setFormPosition(0,0,803,600);
            }
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
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서 번호\"/><Column id=\"CEO\" type=\"STRING\" size=\"256\" sumtext=\"협력업체 사장\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\" sumtext=\"협력업체 전화\"/><Column id=\"MPNO\" type=\"STRING\" size=\"256\" sumtext=\"협력업체 전화\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\" sumtext=\"협력업체 이메일\"/><Column id=\"BUYER_NM\" type=\"STRING\" size=\"256\" sumtext=\"계약담당자 이름\"/><Column id=\"BUYER_TELNO\" type=\"STRING\" size=\"256\" sumtext=\"협력업체 전화\"/><Column id=\"BUYER_MPNO\" type=\"STRING\" size=\"256\" sumtext=\"협력업체 전화\"/><Column id=\"BUYER_EMAIL\" type=\"STRING\" size=\"256\" sumtext=\"협력업체 이메일\"/><Column id=\"CTRW_KD_NM\" type=\"STRING\" size=\"256\" sumtext=\"계약서\"/><Column id=\"TMP_STS_NM\" type=\"STRING\" size=\"256\" sumtext=\"계약서상태\"/><Column id=\"STS\" type=\"STRING\" size=\"256\" sumtext=\"계약서변경상태\"/><Column id=\"TINM\" type=\"STRING\" size=\"256\" sumtext=\"제목\"/><Column id=\"CNTN\" type=\"STRING\" size=\"256\" sumtext=\"내용\"/><Column id=\"RLTM_NTC_EMAIL\" type=\"STRING\" size=\"256\" sumtext=\"실시간통지_이메일\"/><Column id=\"RLTM_NTC_SMS\" type=\"STRING\" size=\"256\" sumtext=\"실시간통지_문자\"/><Column id=\"BUYER_SGNT\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_SGNT_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NA_TRPL_SEAL_FLNM\" type=\"STRING\" size=\"256\"/><Column id=\"COLB_COMP_SGNT\" type=\"STRING\" size=\"256\"/><Column id=\"COLB_COMP_SGNT_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"STS_END\" type=\"STRING\" size=\"256\"/><Column id=\"CANCEL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_uploadresult", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"UPSTS\" type=\"STRING\" size=\"32\"/><Column id=\"DCM_C\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서 번호\"/><Column id=\"MPNO\" type=\"STRING\" size=\"256\" sumtext=\"협력업체 핸드폰\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\" sumtext=\"협력업체 이메일\"/><Column id=\"BUYER_MPNO\" type=\"STRING\" size=\"256\" sumtext=\"계약담당자 핸드폰\"/><Column id=\"BUYER_EMAIL\" type=\"STRING\" size=\"256\" sumtext=\"계약담당자이메일\"/><Column id=\"CTRW_KD_NM\" type=\"STRING\" size=\"256\" sumtext=\"계약서종류\"/><Column id=\"STS_NM\" type=\"STRING\" size=\"256\" sumtext=\"계약서상태\"/><Column id=\"TINM\" type=\"STRING\" size=\"256\" sumtext=\"제목\"/><Column id=\"CNTN\" type=\"STRING\" size=\"256\" sumtext=\"내용\"/><Column id=\"RLTM_NTC_CHK\" type=\"STRING\" size=\"256\" sumtext=\"실시간통지방법\"/><Column id=\"USR_TPC\" type=\"STRING\" size=\"256\" sumtext=\"사용자유형\"/><Column id=\"RLTM_NTC_SMS\" type=\"STRING\" size=\"256\" sumtext=\"SMS 사용여부\"/><Column id=\"RLTM_NTC_EMAIL\" type=\"STRING\" size=\"256\" sumtext=\"EMAIL사용여부\"/><Column id=\"SMS_NATV_NO\" type=\"STRING\" size=\"256\" sumtext=\"SMS고유번호\"/><Column id=\"EMAIL_NATV_NO\" type=\"STRING\" size=\"256\" sumtext=\"EMAIL고유번호\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\" sumtext=\"등록자\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"0\" sumtext=\"등록날짜\"/></ColumnInfo>");
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

            obj = new Dataset("ds_fyn", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서 번호\"/><Column id=\"MN_CTRW_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"DCM_C\" type=\"STRING\" size=\"256\"/><Column id=\"DCM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ESS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ESS_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILESIZE\" type=\"STRING\" size=\"256\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DCM_APD_STS\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_USR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"SEAL\" type=\"STRING\" size=\"256\"/><Column id=\"APDFL_STS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_dcmApdSts", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo><Rows><Row><Col id=\"SIMP_C\">0</Col><Col id=\"SIMP_CNM\">신규등록예정</Col></Row><Row><Col id=\"SIMP_C\">1</Col><Col id=\"SIMP_CNM\">기존 </Col></Row><Row><Col id=\"SIMP_C\">2</Col><Col id=\"SIMP_CNM\">신규 추가</Col></Row></Rows>");
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
            obj = new Static("Static00", "absolute", "0", "0", "15", "1000", null, null, this);
            obj.set_taborder("194");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "15", "21", "871", "20", null, null, this);
            obj.set_taborder("256");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "15", "97", "871", "20", null, null, this);
            obj.set_taborder("257");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "15", "307", "871", "20", null, null, this);
            obj.set_taborder("258");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "15", "69", "110", "29", null, null, this);
            obj.set_taborder("302");
            obj.set_text("전송상태");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "15", "41", "110", "29", null, null, this);
            obj.set_taborder("303");
            obj.set_text("메인계약서");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "0", "41", "21", "15", null, this);
            obj.set_taborder("304");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "124", "41", null, "29", "15", null, this);
            obj.set_taborder("305");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "124", "69", null, "29", "15", null, this);
            obj.set_taborder("306");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_tmsSts", "absolute", "132", "73", "270", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("307");
            obj.set_innerdataset("@ds_eltSts");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_direction("vertical");
            obj.set_cssclass("rdo_WF_Essential");

            obj = new Static("Static35", "absolute", "408", "69", "110", "29", null, null, this);
            obj.set_taborder("326");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_eltCtrw", "absolute", "132", "46", "260", "21", null, null, this);
            obj.set_taborder("334");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "124", "8", "8", "1000", null, null, this);
            obj.set_taborder("335");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_tmpSts", "absolute", "521", "73", null, "21", "19", null, this);
            obj.set_taborder("337");
            obj.set_enable("false");
            obj.style.set_background("#e4e4e4ff");
            obj.style.set_color("#999999ff");
            this.addChild(obj.name, obj);

            obj = new Div("div_seal", "absolute", "15", "116", null, "50", "15", null, this);
            obj.set_taborder("341");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("Static124", "absolute", "108", "21", null, "29", "0%", null, this.div_seal);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_seal.addChild(obj.name, obj);
            obj = new Static("Static121", "absolute", "0", "0", "135", "21", null, null, this.div_seal);
            obj.set_taborder("29");
            obj.set_text("인감 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.div_seal.addChild(obj.name, obj);
            obj = new Static("Static123", "absolute", "-1", "21", "110", "29", null, null, this.div_seal);
            obj.set_taborder("30");
            obj.set_text("인감이미지");
            obj.set_cssclass("sta_WF_Label");
            obj.set_enable("false");
            this.div_seal.addChild(obj.name, obj);
            obj = new FileUpload("FileUpload", "absolute", "113", "25", null, "24", "7", null, this.div_seal);
            obj.set_taborder("31");
            obj.getSetter("retry").set("0");
            obj.set_scrollbars("none");
            obj.set_enable("false");
            obj.set_index("0");
            this.div_seal.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "15", "165", "871", "20", null, null, this);
            obj.set_taborder("342");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_ntc", "absolute", "15", "184", null, "986", "0", null, this);
            obj.set_taborder("343");
            obj.set_text("Div00");
            obj.style.set_background("transparent");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0", "1", null, "123", "15", null, this.div_ntc);
            obj.set_taborder("0");
            obj.set_binddataset("ds_kd");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"283\"/><Column size=\"440\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"부가계약서종류\"/><Cell col=\"2\" text=\"계약서\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:CTRW_NM\"/><Cell col=\"2\" text=\"bind:CTRW_KD_NM\"/></Band></Format></Formats>");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Static("Static31", "absolute", "0", "774", "110", "29", null, null, this.div_ntc);
            obj.set_taborder("1");
            obj.set_text("담당계약담당자");
            obj.set_cssclass("sta_WF_Label");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Static("Static23", "absolute", "0", "746", "110", "29", null, null, this.div_ntc);
            obj.set_taborder("2");
            obj.set_text("실시간통지");
            obj.set_cssclass("sta_WF_Label");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "0", "625", "110", "122", null, null, this.div_ntc);
            obj.set_taborder("3");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "0", "597", "110", "29", null, null, this.div_ntc);
            obj.set_taborder("4");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Label");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0", "572", "301", "21", null, null, this.div_ntc);
            obj.set_taborder("5");
            obj.set_text("통보내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "0", "302", "110", "78", null, null, this.div_ntc);
            obj.set_taborder("6");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0", "169", null, "123", "15", null, this.div_ntc);
            obj.set_taborder("33");
            obj.set_binddataset("ds_ntc");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"373\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"0\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"날짜\"/><Cell col=\"3\" text=\"실시간 통지방법\"/><Cell col=\"4\" text=\"등록자\"/><Cell col=\"5\"/></Band><Band id=\"body\"><Cell text=\"bind:STS_NM\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:TINM\"/><Cell col=\"2\" text=\"bind:FSRG_DTM\" mask=\"####-##-##\"/><Cell col=\"3\" text=\"bind:RLTM_NTC_CHK\"/><Cell col=\"4\" text=\"bind:USR_NM\"/><Cell col=\"5\" text=\"bind:CNTN\"/></Band></Format></Formats>");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "144", "301", "21", null, null, this.div_ntc);
            obj.set_taborder("7");
            obj.set_text("수신내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Button("btn_popup", "absolute", null, "143", "133", "21", "15", null, this.div_ntc);
            obj.set_taborder("8");
            obj.set_text("계약서내역(미리보기)");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "94", "302", null, "78", "15", null, this.div_ntc);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_ntc.addChild(obj.name, obj);
            obj = new TextArea("txa_cntn", "absolute", "98", "306", null, "70", "23", null, this.div_ntc);
            obj.set_taborder("10");
            obj.set_wordwrap("none");
            obj.set_readonly("true");
            obj.style.set_background("#e4e4e4ff");
            obj.style.set_color("#999999ff");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "109", "597", null, "29", "15", null, this.div_ntc);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "109", "625", null, "122", "15", null, this.div_ntc);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Edit("edt_tinm", "absolute", "117", "601", null, "21", "23", null, this.div_ntc);
            obj.set_taborder("13");
            this.div_ntc.addChild(obj.name, obj);
            obj = new TextArea("txa_cntn01", "absolute", "117", "629", null, "114", "23", null, this.div_ntc);
            obj.set_taborder("14");
            obj.set_wordwrap("char");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Static("Static25", "absolute", "109", "746", null, "29", "15", null, this.div_ntc);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Static("Static32", "absolute", "109", "774", null, "29", "15", null, this.div_ntc);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Static("Static33", "absolute", "393", "774", "110", "29", null, null, this.div_ntc);
            obj.set_taborder("17");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_Label");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Combo("cbo_buyerMpNo", "absolute", "510", "778", "51", "21", null, null, this.div_ntc);
            this.div_ntc.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.set_innerdataset("@ds_hp");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new Static("Static09", "absolute", "622", "778", "9", "21", null, null, this.div_ntc);
            obj.set_taborder("19");
            obj.set_text("-");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Static("Static40", "absolute", "563", "778", "9", "21", null, null, this.div_ntc);
            obj.set_taborder("20");
            obj.set_text("-");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Edit("edt_buyerNm", "absolute", "117", "778", "270", "21", null, null, this.div_ntc);
            obj.set_taborder("21");
            obj.set_enable("true");
            this.div_ntc.addChild(obj.name, obj);
            obj = new CheckBox("chk_rltmNtcSms", "absolute", "117", "750", "54", "21", null, null, this.div_ntc);
            obj.set_taborder("22");
            obj.set_text("SMS");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_ntc.addChild(obj.name, obj);
            obj = new CheckBox("chk_rltmNtcEmail", "absolute", "393", "750", "66", "21", null, null, this.div_ntc);
            obj.set_taborder("23");
            obj.set_text("E-Mail");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Edit("edt_chrrEmail", "absolute", "458", "750", "250", "21", null, null, this.div_ntc);
            obj.set_taborder("24");
            obj.set_enable("false");
            obj.style.set_background("#e4e4e4ff");
            obj.style.set_color("#999999ff");
            obj.set_password("true");
            this.div_ntc.addChild(obj.name, obj);
            obj = new MaskEdit("mae_chrwMpNo2", "absolute", "314", "750", "48", "21", null, null, this.div_ntc);
            obj.set_taborder("25");
            obj.set_value("1234");
            obj.set_enable("false");
            obj.style.set_background("#e4e4e4ff");
            obj.style.set_color("#999999ff");
            obj.set_mask("{####}");
            obj.set_type("string");
            this.div_ntc.addChild(obj.name, obj);
            obj = new MaskEdit("mae_chrwMpNo1", "absolute", "255", "750", "48", "21", null, null, this.div_ntc);
            obj.set_taborder("26");
            obj.set_value("1234");
            obj.set_enable("false");
            obj.style.set_background("#e4e4e4ff");
            obj.style.set_color("#999999ff");
            obj.set_mask("{####}");
            obj.set_type("string");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Combo("cbo_chrwMpNo", "absolute", "193", "750", "51", "21", null, null, this.div_ntc);
            this.div_ntc.addChild(obj.name, obj);
            obj.set_taborder("27");
            obj.set_innerdataset("@ds_hp");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_enable("false");
            obj.style.set_background("#e4e4e4ff");
            obj.style.set_color("#999999ff");
            obj = new Static("Static03", "absolute", "246", "751", "9", "21", null, null, this.div_ntc);
            obj.set_taborder("28");
            obj.set_text("-");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "305", "751", "9", "21", null, null, this.div_ntc);
            obj.set_taborder("29");
            obj.set_text("-");
            this.div_ntc.addChild(obj.name, obj);
            obj = new MaskEdit("etd_buyerMpNo1", "absolute", "572", "778", "48", "21", null, null, this.div_ntc);
            obj.set_taborder("30");
            obj.getSetter("inputtype").set("number");
            obj.getSetter("maxlength").set("4");
            obj.set_mask("{####}");
            obj.set_type("string");
            this.div_ntc.addChild(obj.name, obj);
            obj = new MaskEdit("etd_buyerMpNo2", "absolute", "631", "778", "48", "21", null, null, this.div_ntc);
            obj.set_taborder("31");
            obj.getSetter("inputtype").set("number");
            obj.getSetter("maxlength").set("4");
            obj.set_mask("{####}");
            obj.set_type("string");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Button("btn_down", "absolute", null, "399", "72", "21", "15", null, this.div_ntc);
            obj.set_taborder("32");
            obj.set_text("파일다운");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Grid("grd_file", "absolute", "0", "427", null, "137", "15", null, this.div_ntc);
            obj.set_taborder("34");
            obj.set_binddataset("ds_fyn");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"225\"/><Column size=\"350\"/><Column size=\"70\"/><Column size=\"123\"/><Column size=\"141\"/><Column size=\"103\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"순서\"/><Cell col=\"2\" text=\"구분\"/><Cell col=\"3\" text=\"구비서류명\"/><Cell col=\"4\" text=\"UPLOAD 파일\"/><Cell col=\"5\" text=\"업로드 여부\"/><Cell col=\"6\" text=\"첨부 파일 추가 \"/><Cell col=\"7\" text=\"추가 항목 내용\"/><Cell col=\"8\" text=\"수정자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:ESS_YN_NM\"/><Cell col=\"3\" text=\"bind:DCM_NM\"/><Cell col=\"4\" text=\"bind:ORGFNAME\"/><Cell col=\"5\" style=\"color:EXPR(ORGFNAME == null ? 'red' : 'black');color2:EXPR(ORGFNAME == null ? 'red' : 'black');font:EXPR(ORGFNAME == null ? 'bold': '');selectcolor:EXPR(ORGFNAME == null ? 'red' : 'black');selectfont:EXPR(ORGFNAME == null ? 'bold': '');\" text=\"expr:ORGFNAME == null ? '미등록': '등록'\"/><Cell col=\"6\" displaytype=\"combo\" text=\"bind:DCM_APD_STS\" combodataset=\"ds_dcmApdSts\" combocodecol=\"SIMP_C\" combodatacol=\"SIMP_CNM\"/><Cell col=\"7\" text=\"bind:RMK\"/><Cell col=\"8\" text=\"bind:LSCHG_USR_NM\"/></Band></Format></Formats>");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Button("btn_down_zip", "absolute", null, "399", "72", "21", "98", null, this.div_ntc);
            obj.set_taborder("35");
            obj.set_text("ZIP다운");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Static("Static86", "absolute", "0", "830", "190", "21", null, null, this.div_ntc);
            obj.set_taborder("36");
            obj.set_text("관련계약서");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Button("btn_origin", "absolute", null, "830", "107", "21", "15", null, this.div_ntc);
            obj.set_taborder("37");
            obj.set_text("계약서 보기");
            obj.set_enable("false");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Grid("grd_related", "absolute", "0", "857", null, "113", "15", null, this.div_ntc);
            obj.set_taborder("38");
            obj.set_binddataset("ds_related");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"47\"/><Column size=\"138\"/><Column size=\"223\"/><Column size=\"201\"/><Column size=\"123\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"mask\" text=\"계약서번호\" mask=\"######\"/><Cell col=\"3\" text=\"계약서종류\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"mask\" text=\"계약기간\" mask=\"######\"/><Cell col=\"5\" text=\"계약서상태\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"padding:0 5 0 5;\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" edittype=\"none\" style=\"align:center middle;padding:0 5 0 5;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"expr:currow+1\"/><Cell col=\"2\" edittype=\"none\" style=\"align:center middle;padding:0 5 0 5;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ELT_CTRW_NO\"/><Cell col=\"3\" edittype=\"none\" style=\"align:center middle;padding:0 5 0 5;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:MN_CTRW_KD_NM\"/><Cell col=\"4\" edittype=\"none\" style=\"align:center middle;padding:0 5 0 5;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:CTR_DT\"/><Cell col=\"5\" edittype=\"none\" style=\"align:center middle;padding:0 5 0 5;\" text=\"bind:STS_NM\"/></Band></Format></Formats>");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Button("btn_modify", "absolute", null, "143", "100", "21", "153", null, this.div_ntc);
            obj.set_taborder("39");
            obj.set_text("계약서 수정");
            obj.set_visible("false");
            this.div_ntc.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "0", "399", "94", "21", null, null, this.div_ntc);
            obj.set_taborder("40");
            obj.set_text("첨부 파일");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_ntc.addChild(obj.name, obj);

            obj = new Button("btn_sup", "absolute", null, "0", "39", "21", "64", null, this);
            obj.set_taborder("346");
            obj.set_text("보완");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete", "absolute", null, "0", "41", "21", "107", null, this);
            obj.set_taborder("347");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 50, this.div_seal,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("341");
            		p.style.set_background("transparent");
            		p.set_visible("false");
            		p.set_scrollbars("none");

            	}
            );
            this.div_seal.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 773, 808, this.div_ntc,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("343");
            		p.set_text("Div00");
            		p.style.set_background("transparent");

            	}
            );
            this.div_ntc.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 600, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("전자계약서신청상세 농협");
            		p.style.set_color("#999999ff");
            		p.set_scrollbars("autoboth");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item10","edt_eltCtrw","value","ds_in","CTRW_KD_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","rdo_tmsSts","value","ds_in","STS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edt_tmpSts","value","ds_in","TMP_STS_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_ntc.edt_chrrEmail","value","ds_in","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_ntc.edt_buyerNm","value","ds_in","BUYER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_ntc.edt_tinm","value","ds_in","TINM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div_ntc.txa_cntn01","value","ds_in","CNTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_ntc.chk_rltmNtcEmail","value","ds_in","RLTM_NTC_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","div_ntc.chk_rltmNtcSms","value","ds_in","RLTM_NTC_SMS");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_2111.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("OMG_DS_SC_2111.xfdl", "lib::comElt.xjs");
        this.registerScript("OMG_DS_SC_2111.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";
        //include "lib::comElt.xjs";

        var eltCtrwNo="";

        this.fv_ctrwChgObjChk =0;     // 2011_01에서 호출할때 사용

        this.form_onload = function(obj,e)
        {   
        	this.gfn_setInitForm(obj, e); //공통

        	var param = [  
        		{code:"HP"             ,     dsName:"ds_hp",        selecttype:""},
        		{code:"ELT_STS"        ,     dsName:"ds_eltSts",    selecttype:""}
        	];

        	this.gfn_setPortalCommonCode(param); 
        	this.div_ntc.set_top(116) ;
        	//this.div_ntc.set_height(808) ;
           
        	this.resetScroll() ;
        	this.fv_ctrwChgObjChk = this.gfn_isEmpty(this.getOwnerFrame().CTRW_CHG);
        	this.div_ntc.btn_modify.set_visible(this.fv_ctrwChgObjChk == 1 || this.fv_ctrwChgObjChk == 2);
        }

        //gfn_setCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload = function()
        {
        	this.ds_eltSts.filter("SIMP_C == '4' || SIMP_C == '8' || SIMP_C == '9'");
        }

        this.fn_afterFormOnload = function()
        {
        	//페이지 로딩후 실행부분
        	var fv_paramMode = this.getOwnerFrame().paramMode;

        	/*조회 호출*/
        	this.search();
        	this.fn_loadRelatedElt();
        }

         /*조회*/
        this.search = function()
        {
        	var eltCtrwNo =  this.gfn_isEmpty(this.getOwnerFrame().ELT_CTRW_NO);
        	var chgSqno   =  this.gfn_isEmpty(this.getOwnerFrame().CHG_SQNO);

        	var sSvcID        = "search";
        	var sURL          = "svc::rest/ct/eltctrw/retrieveEltCtrw";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_in=ds_in ds_kd=ds_kd ds_ntc=ds_ntc ds_fyn=ds_fyn"; 
        	var sArgument     = "eltCtrwNo="+ eltCtrwNo +" chgSqno="+ chgSqno ;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        //callback메소드
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	var tmpSts;
        	var exp;
        	
        	var isBuyer = true;
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID =="insert") {
        			this.gfn_getMessage("alert", "result.message.save.success");

        			if (this.fv_ctrwChgObjChk == 1) {
        				this.parent.close(); 
        			} else if (this.fv_ctrwChgObjChk == 0) {
        				this.close();
        			} else {
        				this.parent.close(); 
        			}
        		} else if (svcID == "supupdate") {
        			alert("변경이 완료되었습니다.");
        			this.close();
        		} else if (svcID == "search") {
        			if (this.ds_in.rowcount == 0) {
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}

        			if (this.ds_in.getColumn(0,"MPNO") != undefined) {
        				this.fn_telNo(this.ds_in.getColumn(0,"MPNO"), this.div_ntc.cbo_chrwMpNo, this.div_ntc.mae_chrwMpNo1, this.div_ntc.mae_chrwMpNo2);
        			}
        			
        			if (this.ds_in.getColumn(0,"BUYER_MPNO") != undefined) {
        				this.fn_telNo(this.ds_in.getColumn(0,"BUYER_MPNO"), this.div_ntc.cbo_buyerMpNo, this.div_ntc.etd_buyerMpNo1, this.div_ntc.etd_buyerMpNo2);
        			}
        			
        			tmpSts = this.ds_in.getColumn(0,"TMP_STS");
        			exp  = this.ds_in.getColumn(0,"STS_EXP");
        			if (tmpSts == 1) {
        				var delFlag = this.gfn_nullToEmpty(this.getOwnerFrame().DEL_FLAG);
        				if (delFlag != "" && delFlag != "N") {
        					this.btn_delete.set_visible(true);
        				}
        			}
        			if (tmpSts == 3) {
        				this.btn_sup.set_visible(false);
        				for (var i = this.ds_eltSts.rowcount-1 ; 0 <= i ; i--) {
        					if (this.ds_eltSts.getColumn(i, "SIMP_C") == "A") {
        						this.ds_eltSts.deleteRow(i);
        					}
        				}
        			} else if (tmpSts != 9) {
        				this.btn_sup.set_visible(false);
        			}
        			
        			var login_nm =application.gv_userName; // 로그인 이름
        			var buyer_nm = this.div_ntc.edt_buyerNm.value; //계약계약담당자 이름
        			if (login_nm == buyer_nm) {
        				// 담당 계약담당자 이름과 로그인한 사용자 아이디 일치					
        				isBuyer = true;
        			} else {
        				// 담당 계약담당자 이름과 로그인한 사용자 아이디 다르면 저장버튼 안보임
        				this.btn_save.set_visible(false);
        				this.btn_sup.set_visible(false);
        				isBuyer = false;
        			}
        		} else if (svcID == "relatedEltList") {
        			if (this.ds_related.rowcount > 0) {
        				this.div_ntc.btn_origin.set_enable(true);
        				this.ds_related.filter("ELT_CTRW_NO != '" + this.gfn_nullToEmpty(this.parent.ELT_CTRW_NO) + "'");
        			}
        		} else if (svcID == "deleteElt") {
        			this.alert("계약서가 삭제되었습니다.");
        			this.close();
        		} else {
        			if (this.ds_in.rowcount == 0) {
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        		}
        	}
        	
        	if(exp == 'Y') {
        		alert("계약서 작성 중 계약기간일이 도래되어 업무가 중단되었습니다.\n업체 재협의 후 다시 작성하시기 바랍니다.\n본 계약서는 7 영업일 후 자동 삭제될 예정입니다.");
        		this.expDisable();
        	} else if (tmpSts >= 4 || tmpSts == 1 || tmpSts == 'A' || !isBuyer) {
        		this.disable(tmpSts);
        	}
        	this.resetScroll() ;		
        }

        /* 입력저장 */
        this.btn_save_onclick = function(obj,e)
        {
        	if (this.fn_validationCheck()) {
        		if (!confirm('승인하시겠습니까?')) {
        			return false;
        		}
        		var rtnSignData = "";
        		this.insert(rtnSignData);  // 계약담당자 완료처리시 전자서명하지 않는다. 계약담당자 완료건에 대해 공인인증서 관리자가 일괄 서명함. 
        	}
        }
        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/

        /*등록*/
        this.insert = function(signData)
        {
        	//if(this.fn_validationCheck()){
        	var strMpNo = this.div_ntc.cbo_chrwMpNo.value ;
        	   strMpNo += this.div_ntc.mae_chrwMpNo1.value ;
        	   strMpNo += this.div_ntc.mae_chrwMpNo2.value ;
           
            var strBuyerMpNo = this.div_ntc.cbo_buyerMpNo.value ;
        		strBuyerMpNo += this.div_ntc.etd_buyerMpNo1.value ;
        		strBuyerMpNo += this.div_ntc.etd_buyerMpNo2.value ;

        	this.ds_in.setColumn(0, "MPNO" , strMpNo) ;		
        	this.ds_in.setColumn(0, "BUYER_MPNO" , strBuyerMpNo) ;		
        	//this.ds_in.setColumn(0, "BUYER_SGNT" , signData) ;		
        	//this.ds_in.setColumn(0, "BUYER_SGNT_DTM" , '') ;	

        	var params = 	"BUYER_SGNT=" + signData ;
        	var sSvcID        = "insert";
        	var sURL          = "svc::rest/ct/eltctrw/saveEltCtrw";// 호출할 서버 페이지 주소							     
        	var sInDatasets   = "ds_in=ds_in" ;
        	var sOutDatasets  = "";	
        	var sArgument     = params;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	//}	
        }

         /* 닫 기*/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.disable = function(sts)
        {
        	if (this.getOwnerFrame().paramMode == "A" && sts == "9") {
        		// 최종승인권자가 바이어 승인상태를 변경요청 가능
        		this.ds_eltSts.filter("SIMP_C == '3' || SIMP_C == '4'");
        		
        		this.div_ntc.chk_rltmNtcSms.set_enable(false);
        		this.div_ntc.chk_rltmNtcEmail.set_enable(false);
        		this.div_ntc.edt_buyerNm.set_enable(false);
        		this.div_ntc.cbo_buyerMpNo.set_enable(false);
        		this.div_ntc.etd_buyerMpNo1.set_enable(false);
        		this.div_ntc.etd_buyerMpNo2.set_enable(false);
        		this.btn_save.set_visible(true);
        	} else {
        		//상태가 거절, 완료 일 때  모두 비활성화
        		this.rdo_tmsSts.set_enable(false);
        		this.div_ntc.edt_tinm.set_enable(false);
        		this.div_ntc.txa_cntn01.set_enable(false);
        		this.div_ntc.chk_rltmNtcSms.set_enable(false);
        		this.div_ntc.chk_rltmNtcEmail.set_enable(false);
        		this.div_ntc.edt_buyerNm.set_enable(false);
        		this.div_ntc.cbo_buyerMpNo.set_enable(false);
        		this.div_ntc.etd_buyerMpNo1.set_enable(false);
        		this.div_ntc.etd_buyerMpNo2.set_enable(false);
        		this.btn_save.set_visible(false);
        	}
        }

        this.expDisable = function()
        {	
        	
        	// 지연계약서 일때 비활성화
        	this.rdo_tmsSts.set_enable(false);
        	this.div_ntc.edt_tinm.set_enable(false);
        	this.div_ntc.txa_cntn01.set_enable(false);
        	this.div_ntc.chk_rltmNtcSms.set_enable(false);
        	this.div_ntc.chk_rltmNtcEmail.set_enable(false);
        	this.div_ntc.edt_buyerNm.set_enable(false);
        	this.div_ntc.cbo_buyerMpNo.set_enable(false);
        	this.div_ntc.etd_buyerMpNo1.set_enable(false);
        	this.div_ntc.etd_buyerMpNo2.set_enable(false);
        	this.btn_save.set_visible(false);
        	this.div_ntc.btn_modify.set_enable(false);
        	this.btn_delete.set_visible(false);
        	this.btn_save.set_visible(false);
        	this.btn_sup.set_visible(false);
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
        	if (this.gfn_isNull(this.rdo_tmsSts.value)) {
        		this.rdo_tmsSts.set_index(0);
        		alert('전송 상태를 선택 하세요.');
        		return false;
        	}
        	
        	/*
        	 * 계약담당자 직인은 등록된 직인을 씀. 
        		if (this.rdo_tmsSts.value  == "9"){
        			if( this.ds_uploadresult01.rowcount == 0){
        				this.div_seal.FileUpload.setFocus();
        				alert('계약담당자 인감 도장을 첨부 하세요.');
        				return false;
        			}
        		}
        	 */

        	 // 계약담당자 직인은 등록된 직인을 씀. 
        	if (this.rdo_tmsSts.value  == "9") {
        		/*
        		if (this.ds_in.getColumn(0, "BUYER_NA_TRPL_SEAL_FLNM") == undefined) {
        		// if( this.ds_in.BUYER_NA_TRPL_SEAL_FLNM == 0){
        			// this.div_seal.FileUpload.setFocus();
        			alert('계약담당자 인감 도장이 등록되지 않았습니다. \n 직인등록 화면에서 직인을 먼저 등록하세요.');
        			return false;
        		}
        		*/
        		
        		if (this.ds_in.getColumn(0, "COLB_COMP_SGNT_DTM") == undefined) {
        		// if( this.ds_in.BUYER_NA_TRPL_SEAL_FLNM == 0){
        			// this.div_seal.FileUpload.setFocus();
        			alert('협력업체 서명이 등록되지않았습니다.');
        			return false;
        		} else if (this.ds_in.getColumn(0, "COLB_COMP_SGNT") == undefined) {
        		// if( this.ds_in.BUYER_NA_TRPL_SEAL_FLNM == 0){
        			// this.div_seal.FileUpload.setFocus();
        			alert('협력업체 서명이 등록되지않았습니다.');
        			return false;
        		}
        	}
        		
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
        	eltCtrwNo =  this.gfn_isEmpty(this.getOwnerFrame().ELT_CTRW_NO);

        	var oArg = {paramMode:"S", ELT_CTRW_NO:elt_ctrw_no};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";
        	
        	this.gfn_openPopup("popId","OMG.BT::OMG_DS_SC_2113.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.ds_ntc_onrowposchanged = function(obj,e)
        {
        	this.div_ntc.txa_cntn.set_value(obj.getColumn(e.newrow ,"CNTN"));
        }

        //전화 번호를 해당 위치로 값 세팅
        this.fn_telNo = function(strTelNo,strVal1,strVal2,strVal3)
        {
        	if (strTelNo.length > 8) {
        		var RegPhonNum = ""; 

        		//문자열 길이에 따른 값 처리
        		if (strTelNo.length == 9 ) {
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

        // 계약서내역 미리보기
        this.btn_ctrwBrk_onclick = function(obj,e)
        {
        	var mnCtrwKd = this.ds_in.getColumn(0, "MN_CTRW_KD");
        	var eltCtrwNo = this.gfn_isEmpty(this.getOwnerFrame().ELT_CTRW_NO);
        	var chgSqNo = this.gfn_isEmpty(this.getOwnerFrame().CHG_SQNO); 
        	
        	// comEsum.xjs
        	this.eltOzViewer(mnCtrwKd, eltCtrwNo, chgSqNo); // type, eltCtrwNo, chgSqNo
        }

        // 계약서수정
        this.div_ntc_btn_modify_onclick = function(obj,e)
        {
        	var mnCtrwKd = this.ds_in.getColumn(0, "MN_CTRW_KD");
        	var login_nm =application.gv_userName; // 로그인 이름
        	var buyer_nm = this.div_ntc.edt_buyerNm.value; //계약계약담당자 이름
        	if (login_nm != buyer_nm) {
        		alert("담당바이어만 계약서를 수정할 수 있습니다.");
        		this.div_ntc.btn_modify.set_enable(false);
        		return;
        	}

        	var nX = 0;
        	var nY = 0;
        	
        	this.parent.div_ctrwDsc.set_visible(false);

        	if (this.gfn_equalEltType("12", mnCtrwKd)) {
        		this.parent.div_ctrwBrk.set_url("OMG.CT::OMG_DS_SC_3113.xfdl");
        	} else if (this.gfn_equalEltType("13", mnCtrwKd)) {
        		this.parent.div_ctrwBrk.set_url("OMG.CT::OMG_DS_SC_3114.xfdl");
        	} else if (this.gfn_equalEltType("14", mnCtrwKd)) {
        		this.parent.div_ctrwBrk.set_url("OMG.CT::OMG_DS_SC_3115.xfdl");
        	} else if (this.gfn_equalEltType("15", mnCtrwKd)) {
        		this.parent.div_ctrwBrk.set_url("OMG.CT::OMG_DS_SC_3116.xfdl");
        	} else {
        		this.parent.div_ctrwBrk.set_url("OMG.CT::OMG_DS_SC_2113.xfdl");
        	}
        	this.parent.div_ctrwBrk.move(nX, nY);
        	this.parent.div_ctrwBrk.bringToFront();
        	this.parent.div_ctrwBrk.set_visible(true);
        }

        this.btn_down_onclick = function(obj,e)
        {
        	if (!this.fn_checkDownload()) {
        		this.div_ntc.btn_down.set_enable(false);
        		this.div_ntc.btn_down_zip.set_enable(false);
        		return;
        	}
        	this.fn_eltFileDownload(this, this.ds_fyn, false);
        	/*
        	if (this.ds_fyn.getColumn(this.ds_fyn.rowposition, "ISCHECKED") == 0) {
        		alert("파일을 다운할 서류를 선택 하세요.");
        	} else {
        		var sysflnm = this.ds_fyn.getColumn(this.ds_fyn.rowposition, "SYSTEMFILENAME");
        		var apdflnm = this.ds_fyn.getColumn(this.ds_fyn.rowposition, "ORGFNAME");
        		if (!this.gfn_isNull(sysflnm) && !this.gfn_isNull(apdflnm)) {
        			this.gfn_callDownload(this.ds_fyn);
        		} else {
        			alert("첨부파일이 등록되지 않았습니다.");
        		}
        	}
        	*/
        }

        this.btn_down_zip_onclick = function(obj,e)
        {
        	if (!this.fn_checkDownload()) {
        		this.div_ntc.btn_down.set_enable(false);
        		this.div_ntc.btn_down_zip.set_enable(false);
        		return;
        	}
        	this.fn_eltFileDownload(this, this.ds_fyn, true);
        	
        	/*
        	var existFile = false;
        	for (var i=0; i<this.ds_fyn.getRowCount(); i++) {
        		var sysflnm = this.ds_fyn.getColumn(i, "SYSTEMFILENAME");
        		var apdflnm = this.ds_fyn.getColumn(i, "ORGFNAME");
        		if (!this.gfn_isNull(sysflnm) && !this.gfn_isNull(apdflnm)) {
        			existFile = true;
        			break;
        		}
        	}
        	if (existFile) {
        		var eltCtrwNo =  this.gfn_isEmpty(this.getOwnerFrame().ELT_CTRW_NO);
        		var chgSqno   =  this.gfn_isEmpty(this.getOwnerFrame().CHG_SQNO);
        		var strDownUrl = application.gv_server_url+"rest/ct/eltctrw/downloadZipFile?eltCtrwNo="+eltCtrwNo + "&chgSqno=" + chgSqno;
        		var _form = this;
        		_form.setWaitCursor();
        		$.fileDownload(strDownUrl, {
        			successCallback: function (url) {
        				_form.setWaitCursor(false);
        			},
        			failCallback: function (responseHtml) {
        				_form.setWaitCursor(false);
        				alert("ZIP파일 다운로드를 실패하였습니다.\n개별 다운로드를 시도해보세요.");
        			},
        			httpMethod: "POST",
        			data: ''
        		});
        	} else {
        		alert("첨부파일이 등록되지 않았습니다.");
        	}
        	*/
        }

        this.grd_file_oncellclick = function(obj,e)
        {
        // 	if (e.cell==0) {
        // 		this.gfn_singleChk(obj,e);
        // 	}
        	var row = this.ds_fyn.findRow("ISCHECKED", "1");
        	if (row != -1) {
        		this.ds_fyn.setColumn(this.ds_fyn.findRow("ISCHECKED", "1"), "ISCHECKED", "0");
        	}
        	this.ds_fyn.setColumn(e.row, "ISCHECKED", e.row != row ? "1" : "0");
        }

        this.div_seal_FileUpload_onerror = function(obj,e)
        {
        	trace("FileUpload_onerror");
        	trace("e.errorcode: "+e.errorcode);
        	trace("e.errormsg: "+e.errormsg);
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
        		//this.ds_in.setColumn(0,"BUYER_SEAL_SYS_FLNM",this.ds_uploadresult01.getColumn(0,"SYSTEMFILENAME"));
        		//this.ds_in.setColumn(0,"BUYER_SEAL_APDFLNM",this.ds_uploadresult01.getColumn(0,"ORGFNAME"));				
        	}
        }

        this.rdo_tmsSts_onitemchanged = function(obj,e)
        {
        	if (this.rdo_tmsSts.value  == "9") {
        	        // 완료처리 인감정보 감추기
        			//this.div_seal.set_visible(true) ;
        			//this.div_seal.set_top(116) ;
        			//this.div_ntc.set_top(186) ;
        	} else {
        			this.div_seal.set_visible(false);
        			this.div_ntc.set_top(116) ;
        	}	
        	this.resetScroll() ;
        }

        /*보완상태로 변경*/
        this.btn_sup_onclick = function()
        {
        	var eltCtrwNo =  this.gfn_isEmpty(this.getOwnerFrame().ELT_CTRW_NO); // 전자계약 번호
        	var ctrw_kdc = this.ds_in.getColumn(0, "MN_CTRW_KD");
        	if (confirm("보완상태로 변경하시겠습니까?")) {
        		var param = "eltCtrwNo=" + eltCtrwNo + " ctrwKdc=" + ctrw_kdc;
        		var sSvcID        = "supupdate";
        		var sURL          = "svc::rest/ct/eltctrw/supupdate";// 호출할 서버 페이지 주소							     
        		var sInDatasets   = "" ;
        		var sOutDatasets  = "";	
        		var sArgument     = param;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회
        		
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);	
        	}	
        }

        /**
         * 전자계약 첨부파일 다운로드 상태 (계약담당자)
         */
        this.fn_checkDownload =  function()
        {
        	var sts = this.ds_in.getColumn(0, "TMP_STS"); // 계약서상태
        	var cancel = this.ds_in.getColumn(0, "CANCEL"); // 해지여부
        	var end = this.ds_in.getColumn(0, "STS_END"); // 계약종료여부
        	
        	if (sts == "10" || sts == "8" || cancel == "Y" || end == "Y") {
        		// 거절,종료,해지 - 차단
        		this.alert("전자계약서가 거절, 종료, 해지, 상태일 경우 첨부파일을 다운로드 하실 수 없습니다.");
        		return false;
        	} else if (sts == "A") {
        		// 완료 - 계약상대자 only
        		this.alert("전자계약서가 계약완료 상태일 경우 계약상대자만 첨부파일을 다운로드 할 수 있습니다.");
        		return false;
        	}
        	return true;
        }

        /*
         * 관련 계약서 로드
         */
        this.fn_loadRelatedElt = function()
        {
        	this.ds_related.clearData();
        	
        	var relno = this.gfn_nullToEmpty(this.getOwnerFrame().BF_CTR_NO);
        	var relseq = this.gfn_nullToEmpty(this.getOwnerFrame().BF_CTR_SQNO);
        	
        	if (relno == "") {
        		relno =  this.gfn_nullToEmpty(this.getOwnerFrame().ELT_CTRW_NO);
        		relseq   =  this.gfn_nullToEmpty(this.getOwnerFrame().CHG_SQNO);
        	}
        	
        	var param = "relno=" + relno
        		+ " relseq=" + relseq
        	//	+ " sts=A"
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

        this.btn_delete_onclick = function(obj,e)
        {
        	var delFlag = this.gfn_nullToEmpty(this.getOwnerFrame().DEL_FLAG);
        	var msg = "";
        	
        	if (delFlag != "" && delFlag != "N") {
        		if (delFlag == "Y") {
        			msg = "해당 계약서를 정말 삭제하시겠습니까?";
        		} else {
        			msg = "계약 협력업체가 해당 계약서를 조회한 이력이 있습니다.\n정말 삭제하시겠습니까?";
        		}
        	}
        	
        	if (confirm(msg)) {
        		var elt_ctrw_no = this.gfn_nullToEmpty(this.getOwnerFrame().ELT_CTRW_NO);
        		var chg_sqno = this.gfn_nullToEmpty(this.getOwnerFrame().CHG_SQNO);
        		var param = "eltCtrwNo=" + elt_ctrw_no + " chgSqno=" + chg_sqno;
        		
        		var sSvcID        = "deleteElt";
        		var sURL          = "svc::rest/ct/eltctrw/deleteEltCtrw";
        		var sInDatasets   = "";
        		var sOutDatasets  = "";
        		var sArgument     = param;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U";

        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
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
        		var eltCtrwNo =  this.gfn_isEmpty(this.getOwnerFrame().ELT_CTRW_NO);
        		var chgSqno   =  this.gfn_isEmpty(this.getOwnerFrame().CHG_SQNO);
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
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_receive.addEventHandler("onrowposchanged", this.ds_receive_onrowposchanged, this);
            this.ds_ntc.addEventHandler("onrowposchanged", this.ds_ntc_onrowposchanged, this);
            this.ds_uploadresult01.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.rdo_tmsSts.addEventHandler("onitemchanged", this.rdo_tmsSts_onitemchanged, this);
            this.rdo_tmsSts.addEventHandler("onitemclick", this.rdo_tmsSts_onitemclick, this);
            this.div_seal.FileUpload.addEventHandler("onsuccess", this.div_seal_FileUpload_onsuccess, this);
            this.div_seal.FileUpload.addEventHandler("onerror", this.div_seal_FileUpload_onerror, this);
            this.div_seal.FileUpload.addEventHandler("onitemchanged", this.div_seal_FileUpload_onitemchanged, this);
            this.div_ntc.btn_popup.addEventHandler("onclick", this.btn_ctrwBrk_onclick, this);
            this.div_ntc.cbo_buyerMpNo.addEventHandler("onitemchanged", this.Combo08_onitemchanged, this);
            this.div_ntc.chk_rltmNtcSms.addEventHandler("onclick", this.CheckBox00_onclick, this);
            this.div_ntc.mae_chrwMpNo1.addEventHandler("oneditclick", this.MaskEdit01_oneditclick, this);
            this.div_ntc.cbo_chrwMpNo.addEventHandler("onitemchanged", this.Combo00_onitemchanged, this);
            this.div_ntc.btn_down.addEventHandler("onclick", this.btn_down_onclick, this);
            this.div_ntc.grd_file.addEventHandler("oncellclick", this.grd_file_oncellclick, this);
            this.div_ntc.btn_down_zip.addEventHandler("onclick", this.btn_down_zip_onclick, this);
            this.div_ntc.btn_origin.addEventHandler("onclick", this.btn_origin_onclick, this);
            this.div_ntc.grd_related.addEventHandler("oncellclick", this.grd_related_oncellclick, this);
            this.div_ntc.btn_modify.addEventHandler("onclick", this.div_ntc_btn_modify_onclick, this);
            this.btn_sup.addEventHandler("onclick", this.btn_sup_onclick, this);
            this.btn_delete.addEventHandler("onclick", this.btn_delete_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_2111.xfdl");

       
    };
}
)();
