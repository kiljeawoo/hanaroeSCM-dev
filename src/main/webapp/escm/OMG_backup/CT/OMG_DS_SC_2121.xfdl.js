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
                this.set_titletext("전자계약서조회상세 협력업체");
                this._setFormPosition(0,0,803,619);
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
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서 번호\"/><Column id=\"CEO\" type=\"STRING\" size=\"256\" sumtext=\"협력업체 사장\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\" sumtext=\"협력업체 전화\"/><Column id=\"HP\" type=\"STRING\" size=\"256\" sumtext=\"협력업체 전화\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\" sumtext=\"협력업체 이메일\"/><Column id=\"BUYER_NM\" type=\"STRING\" size=\"256\" sumtext=\"계약담당자 이름\"/><Column id=\"BUYER_TELNO\" type=\"STRING\" size=\"256\" sumtext=\"협력업체 전화\"/><Column id=\"BUYER_MPNO\" type=\"STRING\" size=\"256\" sumtext=\"협력업체 전화\"/><Column id=\"BUYER_EMAIL\" type=\"STRING\" size=\"256\" sumtext=\"협력업체 이메일\"/><Column id=\"CTRW_KD_NM\" type=\"STRING\" size=\"256\" sumtext=\"계약서\"/><Column id=\"CTRW_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"TMP_STS\" type=\"STRING\" size=\"256\"/><Column id=\"TMP_STS_NM\" type=\"STRING\" size=\"256\" sumtext=\"계약서상태\"/><Column id=\"STS\" type=\"STRING\" size=\"256\" sumtext=\"계약서변경상태\"/><Column id=\"TINM\" type=\"STRING\" size=\"256\" sumtext=\"제목\"/><Column id=\"CNTN\" type=\"STRING\" size=\"256\" sumtext=\"내용\"/><Column id=\"RLTM_NTC_SMS\" type=\"STRING\" size=\"256\" sumtext=\"실시간통지_문자\"/><Column id=\"STS_END\" type=\"STRING\" size=\"256\"/><Column id=\"CANCEL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서 번호\"/><Column id=\"MN_CTRW_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"DCM_C\" type=\"STRING\" size=\"256\"/><Column id=\"DCM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ESS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ESS_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILESIZE\" type=\"STRING\" size=\"256\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEAL\" type=\"STRING\" size=\"256\"/><Column id=\"APDFL_STS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj = new Static("Static20", "absolute", "15", "20", null, "29", "84%", null, this);
            obj.set_taborder("146");
            obj.set_text("메인계약서");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "16%", "20", null, "29", "15", null, this);
            obj.set_taborder("152");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup", "absolute", null, "239", "80", "21", "15", null, this);
            obj.set_taborder("183");
            obj.set_text("계약서내역");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_tmpSts", "absolute", "64.5%", "25", null, "21", "2.37%", null, this);
            obj.set_taborder("188");
            obj.style.set_background("#e4e4e4ff");
            obj.style.set_color("#999999ff");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "0", "15", "1000", null, null, this);
            obj.set_taborder("194");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "15", "240", "301", "21", null, null, this);
            obj.set_taborder("196");
            obj.set_text("수신내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "15", "0", "871", "20", null, null, this);
            obj.set_taborder("198");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "15", "265", null, "123", "15", null, this);
            obj.set_taborder("200");
            obj.set_binddataset("ds_ntc");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"373\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"0\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"날짜\"/><Cell col=\"3\" text=\"실시간 통지방법\"/><Cell col=\"4\" text=\"등록자\"/><Cell col=\"5\"/></Band><Band id=\"body\"><Cell text=\"bind:STS_NM\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:TINM\"/><Cell col=\"2\" text=\"bind:FSRG_DTM\" mask=\"####-##-##\"/><Cell col=\"3\" text=\"bind:RLTM_NTC_CHK\"/><Cell col=\"4\" text=\"bind:USR_NM\"/><Cell col=\"5\" text=\"bind:CNTN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "15", "387", null, "78", "84.06%", null, this);
            obj.set_taborder("202");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "15.94%", "387", null, "78", "15", null, this);
            obj.set_taborder("203");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_cntn", "absolute", "16.44%", "391", null, "70", "2.24%", null, this);
            obj.set_taborder("204");
            obj.set_wordwrap("char");
            obj.style.set_background("#e4e4e4ff");
            obj.style.set_color("#999999ff");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "50%", "20", null, "29", "36%", null, this);
            obj.set_taborder("156");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "15", "77", "871", "20", null, null, this);
            obj.set_taborder("246");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "15", "97", null, "123", "15", null, this);
            obj.set_taborder("247");
            obj.set_binddataset("ds_kd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"283\"/><Column size=\"440\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"부가계약서종류\"/><Cell col=\"2\" text=\"계약서\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:CTRW_NM\"/><Cell col=\"2\" text=\"bind:CTRW_KD_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "15", "219", "871", "20", null, null, this);
            obj.set_taborder("248");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "15", "465", "871", "20", null, null, this);
            obj.set_taborder("249");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_file", "absolute", "15", "510", null, "88", "15", null, this);
            obj.set_taborder("250");
            obj.set_binddataset("ds_fyn");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"225\"/><Column size=\"350\"/><Column size=\"70\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"구비서류명\"/><Cell col=\"3\" text=\"UPLOAD 파일\"/><Cell col=\"4\" text=\"업로드여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" text=\"bind:ESS_YN_NM\"/><Cell col=\"2\" text=\"bind:DCM_NM\"/><Cell col=\"3\" text=\"bind:ORGFNAME\"/><Cell col=\"4\" style=\"color:EXPR(ORGFNAME == null ? 'red' : 'black');color2:EXPR(ORGFNAME == null ? 'red' : 'black');font:EXPR(ORGFNAME == null ? 'bold': '');selectcolor:EXPR(ORGFNAME == null ? 'red' : 'black');selectfont:EXPR(ORGFNAME == null ? 'bold': '');\" text=\"expr:ORGFNAME == null ? '미등록': '등록'\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "15", "598", "871", "20", null, null, this);
            obj.set_taborder("251");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_eltCtrw", "absolute", "16.5%", "25", null, "21", "50.5%", null, this);
            obj.set_taborder("252");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down", "absolute", null, "484", "72", "21", "15", null, this);
            obj.set_taborder("258");
            obj.set_text("파일다운");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Plugin("Plugin00", "absolute", "416", "-2", null, "0", "348", null, this);
            obj.setProperty("classid", "{55D9860A-AB9C-44A1-BB74-75AF7F805333}");
            obj.setProperty("taborder", "259");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "15", "48", null, "29", "84%", null, this);
            obj.set_taborder("260");
            obj.set_text("담당계약담당자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "16%", "48", null, "29", "15", null, this);
            obj.set_taborder("261");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "50%", "48", null, "29", "36%", null, this);
            obj.set_taborder("262");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "78.33%", "52", null, "21", "20.55%", null, this);
            obj.set_taborder("263");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "70.98%", "52", null, "21", "27.77%", null, this);
            obj.set_taborder("264");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_buyerNm", "absolute", "16.5%", "52", null, "21", "50.5%", null, this);
            obj.set_taborder("265");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("etd_buyerHtel", "absolute", "72.23%", "52", null, "21", "21.92%", null, this);
            obj.set_taborder("266");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Edit("etd_buyerStel", "absolute", "79.45%", "52", null, "21", "14.57%", null, this);
            obj.set_taborder("267");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_buyerAtel", "absolute", "64.5%", "52", null, "21", "29.27%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("268");
            obj.set_readonly("true");
            obj.set_innerdataset("ds_tel");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_cssclass("cmb_WF_Readonly");

            obj = new Button("btn_down_zip", "absolute", null, "484", "72", "21", "98", null, this);
            obj.set_taborder("269");
            obj.set_text("ZIP다운");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_related", "absolute", "15", "655", null, "113", "15", null, this);
            obj.set_taborder("270");
            obj.set_binddataset("ds_related");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"47\"/><Column size=\"138\"/><Column size=\"223\"/><Column size=\"201\"/><Column size=\"123\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"mask\" text=\"계약서번호\" mask=\"######\"/><Cell col=\"3\" text=\"계약서종류\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"mask\" text=\"계약기간\" mask=\"######\"/><Cell col=\"5\" text=\"계약서상태\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"padding:0 5 0 5;\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" edittype=\"none\" style=\"align:center middle;padding:0 5 0 5;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"expr:currow+1\"/><Cell col=\"2\" edittype=\"none\" style=\"align:center middle;padding:0 5 0 5;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ELT_CTRW_NO\"/><Cell col=\"3\" edittype=\"none\" style=\"align:center middle;padding:0 5 0 5;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:MN_CTRW_KD_NM\"/><Cell col=\"4\" edittype=\"none\" style=\"align:center middle;padding:0 5 0 5;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:CTR_DT\"/><Cell col=\"5\" edittype=\"none\" style=\"align:center middle;padding:0 5 0 5;\" text=\"bind:STS_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_origin", "absolute", null, "628", "107", "21", "15", null, this);
            obj.set_taborder("271");
            obj.set_text("계약서 보기");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", "15", "628", "190", "21", null, null, this);
            obj.set_taborder("272");
            obj.set_text("관련계약서");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "15", "767", "871", "20", null, null, this);
            obj.set_taborder("273");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 619, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("전자계약서조회상세 협력업체");
            		p.style.set_color("#999999ff");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item14","edt_tmpSts","value","ds_in","TMP_STS_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edt_eltCtrw","value","ds_in","CTRW_KD_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edt_buyerNm","value","ds_in","BUYER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_2121.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("OMG_DS_SC_2121.xfdl", "lib::comTSToolKit.xjs");
        this.registerScript("OMG_DS_SC_2121.xfdl", function() {
        //include "lib::comLib.xjs";
        //include "lib::comTSToolKit.xjs";

        this.form_onload = function(obj,e)
        {   
           this.gfn_setInitForm(obj, e); //공통
           
           var param = [
               {code:"TEL", dsName:"ds_tel", selecttype:""}
            ];

           this.gfn_setPortalCommonCode(param);
        }

        //gfn_setCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	
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
        	var chgSqno =  this.gfn_isEmpty(this.getOwnerFrame().CHG_SQNO);
        	
        	var sSvcID        = "search";
        	var sURL          = "svc::rest/ct/eltctrw/retrieveEltCtrw";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_in=ds_in ds_kd=ds_kd ds_ntc=ds_ntc ds_fyn=ds_fyn";
        	var sArgument     = "colbComp=Y eltCtrwNo="+ eltCtrwNo +" chgSqno="+ chgSqno ;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        //callback메소드
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {		
        	var exp;
        	
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "search") {
        			exp  = this.ds_in.getColumn(0,"STS_EXP");
        			if (this.ds_in.rowcount == 0) {
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        			if (this.ds_in.getColumn(0,"BUYER_TELNO") != undefined) {
        				var buyer_telno = this.ds_in.getColumn(0,"BUYER_TELNO") ;
         				this.fn_telNo(buyer_telno, this.cbo_buyerAtel, this.etd_buyerHtel, this.etd_buyerStel);
        			}
        		} else if (svcID == "relatedEltList") {
        			if (this.ds_related.rowcount > 0) {
        				this.btn_origin.set_enable(true);
        				this.ds_related.filter("ELT_CTRW_NO != '" + this.gfn_nullToEmpty(this.parent.ELT_CTRW_NO) + "'");
        			}
        		} else {
        			if (this.ds_in.rowcount == 0) {
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        		}
        	}
        	
        	if(exp == 'Y') {
        		alert("계약서 작성 중 계약기간일이 도래되어 업무가 중단되었습니다.\n업체 재협의 후 다시 작성하시기 바랍니다.\n본 계약서는 7 영업일 후 자동 삭제될 예정입니다.");
        	}
        }

         /*닫기*/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.btn_popup_onclick = function(obj,e)
        {
        	var mnCtrwKd = this.ds_in.getColumn(0, "MN_CTRW_KD");
        	var eltCtrwNo = this.ds_in.getColumn(0,"ELT_CTRW_NO") ;
        	var chgSqNo = this.ds_in.getColumn(0,"CHG_SQNO");
        	
        	// comEsum.xjs
        	this.eltOzViewer(mnCtrwKd, eltCtrwNo, chgSqNo); // type, eltCtrwNo, chgSqNo
        }

        this.ds_ntc_onrowposchanged = function(obj,e)
        {
        	this.txa_cntn.set_value(obj.getColumn(e.newrow ,"CNTN")) ;
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
        		} else if(strTelNo.length > 10) {
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
        		this.btn_down.set_enable(false);
        		this.btn_down_zip.set_enable(false);
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
        		this.btn_down.set_enable(false);
        		this.btn_down_zip.set_enable(false);
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
            this.ds_uploadresult00.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_popup.addEventHandler("onclick", this.btn_popup_onclick, this);
            this.grd_file.addEventHandler("oncellclick", this.grd_file_oncellclick, this);
            this.btn_down.addEventHandler("onclick", this.btn_down_onclick, this);
            this.cbo_buyerAtel.addEventHandler("onitemchanged", this.Combo08_onitemchanged, this);
            this.btn_down_zip.addEventHandler("onclick", this.btn_down_zip_onclick, this);
            this.grd_related.addEventHandler("oncellclick", this.grd_related_oncellclick, this);
            this.btn_origin.addEventHandler("onclick", this.btn_origin_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_2121.xfdl");

       
    };
}
)();
