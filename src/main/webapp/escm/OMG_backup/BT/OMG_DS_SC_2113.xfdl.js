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
                this.set_name("OMG_DS_SC_2113");
                this.set_titletext("상담신청내역팝업(수산)");
                this.set_scrollbars("autovert");
                this._setFormPosition(0,0,950,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_registerList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CSLT_RQ_NO\" type=\"STRING\" size=\"256\" sumtext=\"상담신청번호\"/><Column id=\"BZNO\" type=\"STRING\" size=\"256\" sumtext=\"사업자등록번호\"/><Column id=\"ST_DT\" type=\"STRING\" size=\"256\" sumtext=\"신청일자\"/><Column id=\"CHRRNM\" type=\"STRING\" size=\"256\" sumtext=\"담당자\"/><Column id=\"BUYER_SHRT_BZPLNM\" type=\"STRING\" size=\"256\" sumtext=\"바이어사업장명\"/><Column id=\"BUYER_CHRG_BSNNM\" type=\"STRING\" size=\"256\" sumtext=\"바이어담당업무명\"/><Column id=\"BUYER_NM\" type=\"STRING\" size=\"256\" sumtext=\"바이어명\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"CHRR_TELNO\" type=\"STRING\" size=\"256\" sumtext=\"담당자 전화지역번호\"/><Column id=\"CHRR_EMAIL\" type=\"STRING\" size=\"256\" sumtext=\"담당자 Email\"/><Column id=\"CHRR_MPNO\" type=\"STRING\" size=\"256\" sumtext=\"담당자 휴대전화\"/><Column id=\"CONM\" type=\"STRING\" size=\"256\" sumtext=\"업체명\"/><Column id=\"REPM\" type=\"STRING\" size=\"256\" sumtext=\"대표자\"/><Column id=\"REPM_TELNO\" type=\"STRING\" size=\"256\" sumtext=\"대표자 전화지역번호\"/><Column id=\"BIZTP\" type=\"STRING\" size=\"256\" sumtext=\"업태\"/><Column id=\"ITM\" type=\"STRING\" size=\"256\" sumtext=\"종목\"/><Column id=\"FZIP\" type=\"STRING\" size=\"256\" sumtext=\"앞자리우편번호\"/><Column id=\"RZIP\" type=\"STRING\" size=\"256\" sumtext=\"뒷자리우편번호\"/><Column id=\"ZIP_SQNO\" type=\"STRING\" size=\"256\" sumtext=\"우편번호일련번호\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"256\" sumtext=\"동이상주소\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"256\" sumtext=\"동이하주소\"/><Column id=\"BYR_SLAM\" type=\"STRING\" size=\"256\" sumtext=\"연간매출금액\"/><Column id=\"MSELPL\" type=\"STRING\" size=\"256\" sumtext=\"주판매처\"/><Column id=\"MFO_LATC\" type=\"STRING\" size=\"256\" sumtext=\"주력품목\"/><Column id=\"CO_CHR_MFT\" type=\"STRING\" size=\"256\" sumtext=\"회사성격 제조\"/><Column id=\"CO_CHR_REV\" type=\"STRING\" size=\"256\" sumtext=\"회사성격 수입\"/><Column id=\"CO_CHR_TOT_AGCY\" type=\"STRING\" size=\"256\" sumtext=\"회사성격 총판/대리점\"/><Column id=\"CO_CHR_VD\" type=\"STRING\" size=\"256\" sumtext=\"회사성격 벤더\"/><Column id=\"MAJ_LATC\" type=\"STRING\" size=\"256\" sumtext=\"주요품목\"/><Column id=\"CSLT_RQ_CNTN\" type=\"STRING\" size=\"256\" sumtext=\"상담신청내용\"/><Column id=\"STS\" type=\"STRING\" size=\"256\" sumtext=\"상태\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\" sumtext=\"비고\"/><Column id=\"EVL_HDNG_A1\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_A2\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_A3\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_A4\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_A5\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_A6\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_B1\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_B11\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_B2\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_B3\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_B4\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_B5\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNGCN\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\" sumtext=\"최초등록일시\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\" sumtext=\"최초등록자\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\" sumtext=\"최종변경일시\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\" sumtext=\"최종변경자\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"UPSTS\" type=\"STRING\" size=\"32\"/><Column id=\"SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"BIGDECIMAL\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYS_FLNM\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEAL\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"UPSTS\" type=\"STRING\" size=\"32\"/><Column id=\"DCM_C\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEAL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
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

            obj = new Dataset("ds_uploadresult01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"UPSTS\" type=\"STRING\" size=\"32\"/><Column id=\"DCM_C\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEAL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_csltManager", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"CSLT_MANAGER_LIST\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static04", "absolute", "124", "250", null, "29", "15", null, this);
            obj.set_taborder("603");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Div("div_addr", "absolute", "962", "0", "460", "383", null, null, this);
            obj.set_taborder("591");
            obj.style.set_background("white");
            obj.set_visible("false");
            obj.set_url("OMG.PT::OMG_DS_SC_9010.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static200", "absolute", "124", "375", null, "29", "15", null, this);
            obj.set_taborder("533");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "124", "487", null, "29", "15", null, this);
            obj.set_taborder("167");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "124", "543", null, "45", "15", null, this);
            obj.set_taborder("171");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "124", "515", null, "29", "15", null, this);
            obj.set_taborder("170");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static50", "absolute", "124", "431", null, "29", "15", null, this);
            obj.set_taborder("284");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "124", "347", null, "29", "15", null, this);
            obj.set_taborder("283");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "124", "56", null, "29", "15", null, this);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "15", "56", "110", "29", null, null, this);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("입력결과");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "15", "36", "871", "20", null, null, this);
            obj.set_taborder("97");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "15", "101", "301", "21", null, null, this);
            obj.set_taborder("106");
            obj.set_text("신청자 기본정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "124", "125", null, "29", "15", null, this);
            obj.set_taborder("107");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "15", "125", "110", "29", null, null, this);
            obj.set_taborder("108");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "124", "153", null, "29", "15", null, this);
            obj.set_taborder("113");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "15", "153", "110", "29", null, null, this);
            obj.set_taborder("114");
            obj.set_text("E-Mail");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_chrrEmail", "absolute", "128", "157", "292", "21", null, null, this);
            obj.set_taborder("119");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "15", "198", "301", "21", null, null, this);
            obj.set_taborder("130");
            obj.set_text("바이어 기본정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "124", "319", null, "29", "15", null, this);
            obj.set_taborder("131");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "15", "319", "110", "29", null, null, this);
            obj.set_taborder("132");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "15", "347", "110", "29", null, null, this);
            obj.set_taborder("133");
            obj.set_text("대표자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "124", "403", null, "29", "15", null, this);
            obj.set_taborder("135");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "423", "375", "110", "29", null, null, this);
            obj.set_taborder("136");
            obj.set_text("종목");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_itm", "absolute", "536", "379", null, "21", "19", null, this);
            obj.set_taborder("138");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "15", "431", "110", "57", null, null, this);
            obj.set_taborder("153");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "423", "487", "110", "29", null, null, this);
            obj.set_taborder("165");
            obj.set_text("주판매처");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static61", "absolute", "15", "543", "110", "45", null, null, this);
            obj.set_taborder("191");
            obj.set_text("제목\r\n(업체명,주품목)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static68", "absolute", "15", "515", "110", "29", null, null, this);
            obj.set_taborder("207");
            obj.set_text("주력품목");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static75", "absolute", "15", "487", "110", "29", null, null, this);
            obj.set_taborder("223");
            obj.set_text("연간매출");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static76", "absolute", "423", "515", "110", "29", null, null, this);
            obj.set_taborder("224");
            obj.set_text("회사성격");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "15", "85", null, "20", "-4", null, this);
            obj.set_taborder("242");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "15", "182", null, "20", "-4", null, this);
            obj.set_taborder("243");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_register", "absolute", null, "15", "41", "21", "15", null, this);
            obj.set_taborder("288");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_sum00", "absolute", "128", "60", "100", "21", null, null, this);
            obj.set_taborder("289");
            obj.set_displaynulltext("0");
            obj.set_readonly("true");
            obj.set_cssclass("msk_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "234", "60", "28", "21", null, null, this);
            obj.set_taborder("290");
            obj.set_text("점");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_chrrNm", "absolute", "128", "129", "292", "21", null, null, this);
            obj.set_taborder("291");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "423", "319", "110", "29", null, null, this);
            obj.set_taborder("297");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_bzno", "absolute", "128", "323", "151", "21", null, null, this);
            obj.set_taborder("298");
            obj.set_type("string");
            obj.set_mask("###-##-#####");
            obj.set_limitbymask("integer");
            obj.set_trimtype("right");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "423", "347", "110", "29", null, null, this);
            obj.set_taborder("299");
            obj.set_text("대표자연락처");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "15", "375", "110", "29", null, null, this);
            obj.set_taborder("300");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_repmAtel", "absolute", "536", "351", "51", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("301");
            obj.set_innerdataset("@ds_tel");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_index("-1");

            obj = new Static("Static27", "absolute", "648", "351", "9", "21", null, null, this);
            obj.set_taborder("302");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "589", "351", "9", "21", null, null, this);
            obj.set_taborder("303");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_conm", "absolute", "536", "323", null, "21", "19", null, this);
            obj.set_taborder("306");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_repm", "absolute", "128", "351", "292", "21", null, null, this);
            obj.set_taborder("307");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_biztp", "absolute", "128", "379", "292", "21", null, null, this);
            obj.set_taborder("308");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "15", "403", "110", "29", null, null, this);
            obj.set_taborder("309");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dongUp", "absolute", "128", "435", null, "21", "19", null, this);
            obj.set_taborder("310");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("80");
            this.addChild(obj.name, obj);

            obj = new Static("Static142", "absolute", "188", "407", "9", "21", null, null, this);
            obj.set_taborder("313");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addr", "absolute", "258", "407", "21", "21", null, null, this);
            obj.set_taborder("315");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_chrwAtel", "absolute", "536", "129", "51", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("265");
            obj.set_innerdataset("@ds_tel");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");
            obj.set_index("-1");

            obj = new Static("Static31", "absolute", "648", "129", "9", "21", null, null, this);
            obj.set_taborder("266");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "589", "129", "9", "21", null, null, this);
            obj.set_taborder("267");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "648", "157", "9", "21", null, null, this);
            obj.set_taborder("293");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "589", "157", "9", "21", null, null, this);
            obj.set_taborder("294");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "423", "125", "110", "29", null, null, this);
            obj.set_taborder("109");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "423", "153", "110", "29", null, null, this);
            obj.set_taborder("115");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_byrSlam", "absolute", "128", "491", "150", "21", null, null, this);
            obj.set_taborder("319");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "283", "491", "82", "21", null, null, this);
            obj.set_taborder("320");
            obj.set_text("(단위 : 억원)");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mSelPl", "absolute", "536", "491", null, "21", "19", null, this);
            obj.set_taborder("321");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mProduct", "absolute", "128", "519", "292", "21", null, null, this);
            obj.set_taborder("322");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_chrMft", "absolute", "540", "519", "53", "21", null, null, this);
            obj.set_taborder("323");
            obj.set_text("제조");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_chrRev", "absolute", "598", "519", "53", "21", null, null, this);
            obj.set_taborder("324");
            obj.set_text("수입");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_chrTotAgcy", "absolute", "655", "519", "97", "21", null, null, this);
            obj.set_taborder("325");
            obj.set_text("총판/대리점");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_chrVd", "absolute", "754", "519", "57", "21", null, null, this);
            obj.set_taborder("326");
            obj.set_text("벤더");
            obj.set_truevalue("4");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "15", "587", "110", "100", null, null, this);
            obj.set_taborder("327");
            obj.set_text("상담신청내용\r\n(업체 및 상품\r\n소개)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "124", "587", null, "100", "15", null, this);
            obj.set_taborder("328");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new TextArea("ta_cslt", "absolute", "128", "591", null, "92", "19", null, this);
            obj.set_taborder("329");
            obj.set_wordwrap("char");
            obj.style.set_padding("2 5 0 5");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("2048");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "15", "686", "110", "45", null, null, this);
            obj.set_taborder("330");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "124", "686", null, "45", "15", null, this);
            obj.set_taborder("331");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new TextArea("ta_rmk", "absolute", "128", "690", null, "37", "19", null, this);
            obj.set_taborder("332");
            obj.set_wordwrap("char");
            obj.style.set_padding("2 5 0 5");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("2048");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "12", "731", null, "20", "-1", null, this);
            obj.set_taborder("333");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "15", "747", "301", "21", null, null, this);
            obj.set_taborder("334");
            obj.set_text("회사설명 첨부파일");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "15", "873", "301", "21", null, null, this);
            obj.set_taborder("338");
            obj.set_text("평가표");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "12", "857", null, "20", "-1", null, this);
            obj.set_taborder("339");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static201", "absolute", "124", "459", null, "29", "15", null, this);
            obj.set_taborder("534");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dongBw", "absolute", "128", "463", null, "21", "19", null, this);
            obj.set_taborder("535");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_majLatc", "absolute", "128", "555", null, "21", "19", null, this);
            obj.set_taborder("536");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("128");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_chrwHtel", "absolute", "598", "129", "48", "21", null, null, this);
            obj.set_taborder("537");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_chrwStel", "absolute", "657", "129", "48", "21", null, null, this);
            obj.set_taborder("538");
            obj.set_inputtype("digit");
            obj.set_maxlength("4");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_chrwMphno", "absolute", "598", "157", "48", "21", null, null, this);
            obj.set_taborder("539");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_chrwMpsqno", "absolute", "657", "157", "48", "21", null, null, this);
            obj.set_taborder("540");
            obj.set_inputtype("digit");
            obj.set_maxlength("4");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_repmHtel", "absolute", "598", "351", "48", "21", null, null, this);
            obj.set_taborder("541");
            obj.set_inputtype("digit");
            obj.set_maxlength("4");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_repmStel", "absolute", "657", "351", "48", "21", null, null, this);
            obj.set_taborder("542");
            obj.set_inputtype("digit");
            obj.set_maxlength("4");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fZip", "absolute", "128", "407", "58", "21", null, null, this);
            obj.set_taborder("543");
            obj.set_inputtype("number");
            obj.set_maxlength("3");
            obj.style.set_align("right middle");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_rZip", "absolute", "197", "407", "58", "21", null, null, this);
            obj.set_taborder("544");
            obj.set_inputtype("number");
            obj.set_maxlength("3");
            obj.style.set_align("right middle");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_file", "absolute", "15", "771", null, "86", "15", null, this);
            obj.set_taborder("566");
            obj.set_binddataset("ds_uploadresult00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"684\"/><Column size=\"188\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"UPLOAD 파일\"/><Cell col=\"2\" text=\"파일크기\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" text=\"bind:ORGFNAME\"/><Cell col=\"2\" text=\"expr:FILESIZE + ' byte '\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload10", "absolute", null, "747", "72", "21", "161", null, this);
            obj.set_taborder("567");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_fileDel", "absolute", null, "747", "72", "21", "87", null, this);
            obj.set_taborder("568");
            obj.set_text("파일삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down10", "absolute", null, "747", "70", "21", "15", null, this);
            obj.set_taborder("589");
            obj.set_text("파일다운");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_chrwMpsvno", "absolute", "536", "157", "51", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("590");
            obj.set_innerdataset("@ds_hp");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_index("0");

            obj = new Static("Static202", "absolute", "15", "222", "110", "29", null, null, this);
            obj.set_taborder("592");
            obj.set_text("바이어 사업장명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static203", "absolute", "124", "222", null, "29", "15", null, this);
            obj.set_taborder("593");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_buyerChrgBsNm", "absolute", "536", "254", "264", "21", null, null, this);
            obj.set_taborder("594");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("76");
            this.addChild(obj.name, obj);

            obj = new Button("btn_buyer", "absolute", "806", "254", "21", "21", null, null, this);
            obj.set_taborder("595");
            obj.set_cssclass("btn_WF_Searchbtn");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static205", "absolute", "423", "250", "110", "29", null, null, this);
            obj.set_taborder("597");
            obj.set_text("바이어 업무명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static206", "absolute", "15", "250", "110", "29", null, null, this);
            obj.set_taborder("598");
            obj.set_text("바이어명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_buyerShrtBxplNm", "absolute", "128", "226", "292", "21", null, null, this);
            obj.set_taborder("599");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("60");
            this.addChild(obj.name, obj);

            obj = new Static("st_spot", "absolute", "204", "464", "22", "21", null, null, this);
            obj.set_taborder("600");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_buyerNm", "absolute", "128", "254", "292", "21", null, null, this);
            obj.set_taborder("601");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "15", "279", null, "20", "-4", null, this);
            obj.set_taborder("602");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print", "absolute", null, "15", "41", "21", "64", null, this);
            obj.set_taborder("609");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new PopupMenu("PopupMenu00", "absolute", "1035", "117", "220", "100", null, null, this);
            this.addChild(obj.name, obj);

            obj = new Static("Static152", "absolute", "15", "295", "301", "21", null, null, this);
            obj.set_taborder("619");
            obj.set_text("회사 기본정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_naBzplc", "absolute", "536", "226", "120", "21", null, null, this);
            obj.set_taborder("621");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_buyerEno", "absolute", "680", "226", "120", "21", null, null, this);
            obj.set_taborder("622");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_updateBuyer", "absolute", "832", "254", "82", "21", null, null, this);
            obj.set_taborder("623");
            obj.set_text("담당자 배정");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div01", "absolute", "1", "887", "936", "100", null, null, this);
            obj.set_taborder("624");
            obj.set_text("평가표");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dsc", "absolute", "1521", "90", "64", "21", null, null, this);
            obj.set_taborder("625");
            obj.set_value("popup");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 950, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("상담신청내역팝업(수산)");
            		p.set_scrollbars("autovert");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item29","cbo_chrwMpsvno","value","ds_registerList","CHRW_MPSVNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edt_chrrNm","value","ds_registerList","CHRRNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_chrrEmail","value","ds_registerList","CHRR_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_repm","value","ds_registerList","REPM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edt_biztp","value","ds_registerList","BIZTP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","mae_bzno","value","ds_registerList","BZNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edt_conm","value","ds_registerList","CONM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","edt_itm","value","ds_registerList","ITM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","edt_dongUp","value","ds_registerList","DONGUP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","edt_dongBw","value","ds_registerList","DONGBW");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","mae_byrSlam","value","ds_registerList","BYR_SLAM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","edt_mSelPl","value","ds_registerList","MSELPL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","edt_mProduct","value","ds_registerList","MFO_LATC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","chk_chrMft","value","ds_registerList","CO_CHR_MFT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","chk_chrRev","value","ds_registerList","CO_CHR_REV");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","chk_chrTotAgcy","value","ds_registerList","CO_CHR_TOT_AGCY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","chk_chrVd","value","ds_registerList","CO_CHR_VD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","ta_cslt","value","ds_registerList","CSLT_RQ_CNTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","ta_rmk","value","ds_registerList","RMK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","edt_majLatc","value","ds_registerList","MAJ_LATC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","cbo_chrwAtel","value","ds_registerList","CHRW_ATEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","cbo_repmAtel","value","ds_registerList","REPM_ATEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edt_chrwHtel","value","ds_registerList","CHRW_HTEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edt_chrwStel","value","ds_registerList","CHRW_STEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","edt_chrwMphno","value","ds_registerList","CHRW_MPHNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edt_chrwMpsqno","value","ds_registerList","CHRW_MPSQNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edt_repmHtel","value","ds_registerList","REPM_HTEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","edt_repmStel","value","ds_registerList","REPM_STEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","edt_rZip","value","ds_registerList","RZIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","edt_fZip","value","ds_registerList","FZIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","mae_sum00","value","ds_registerList","EVL_HDNGCN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item47","edt_buyerShrtBxplNm","value","ds_registerList","BUYER_SHRT_BZPLNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item46","edt_buyerChrgBsNm","value","ds_registerList","BUYER_CHRG_BSNNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item48","edt_buyerNm","value","ds_registerList","BUYER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","edt_dsc","value","ds_rc","CHRRNM");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "OMG.PT::OMG_DS_SC_9010.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_2113.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_2113.xfdl", function() {
        //include "lib::comLib.xjs";

        var cbo_dsc = "";

        this.OMG_DS_SC_2113_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        	
        	var param = [  
        	   {code:"HP",     dsName:"ds_hp",        selecttype:""},
        	   {code:"TEL",     dsName:"ds_tel",        selecttype:""}
        	];
        	this.gfn_setPortalCommonCode(param);
        	
        	cbo_dsc = this.getOwnerFrame().CSLT_DSC;	
        	
        	
        	if (cbo_dsc == "201") {
        		this.div01.set_url("OMG.BT::OMG_DS_SC_21111.xfdl");
        		this.div01.set_height(950);
        	}else if (cbo_dsc == "202") {
        		this.div01.set_url("OMG.BT::OMG_DS_SC_21112.xfdl");
        		this.div01.set_height(950);
        	}else if (cbo_dsc == "203") {
        		this.div01.set_url("OMG.BT::OMG_DS_SC_21113.xfdl");
        		this.div01.set_height(1060);
        	}
        	
        	this.mae_sum00.set_value(0);
        	this.resetScroll();
        }

        //gfn_setCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	//콤보에 최상단Row보이도록 설정
        	this.cbo_chrwAtel.set_index(0);
        	this.cbo_chrwMpsvno.set_index(0);
        	this.cbo_repmAtel.set_index(0);
        }

        this.btn_register_onclick = function(obj,e)
        {
        	this.update();
        }

        
        this.grd_file_onheadclick = function(obj,e)
        {
        	if(e.cell == 0) {
        		this.gfn_setGridCheckAll(obj,e);
        	}
        }

        /* 보완(sts=2) 수정 등록 */
        this.update = function()
        {
        	if (!this.fn_validationCheck()) {
        		return;
        	}
        	if (!confirm("저장하시겠습니까?")) {
        		return;
        	}
        	
        	this.ds_uploadresult.copyData(this.div01.ds_uploadresult);
        	
        	var chrr_telNo = this.gfn_nullToEmpty(this.cbo_chrwAtel.value)
        				            +this.gfn_nullToEmpty(this.edt_chrwHtel.value)
        							+this.gfn_nullToEmpty(this.edt_chrwStel.value);
        	
        	var chrr_mpNo = this.gfn_nullToEmpty(this.cbo_chrwMpsvno.value)
        				            +this.gfn_nullToEmpty(this.edt_chrwMphno.value)
        							+this.gfn_nullToEmpty(this.edt_chrwMpsqno.value);
        	
        	var repm_telNo = this.gfn_nullToEmpty(this.cbo_repmAtel.value)
        				            +this.gfn_nullToEmpty(this.edt_repmHtel.value)
        							+this.gfn_nullToEmpty(this.edt_repmStel.value);
        	
        	this.ds_registerList.setColumn(0, "CHRR_TELNO", chrr_telNo);
        	this.ds_registerList.setColumn(0, "CHRR_MPNO", chrr_mpNo);
        	this.ds_registerList.setColumn(0, "REPM_TELNO", repm_telNo);
        	
        	this.ds_registerList.setColumn(0, "EVL_HDNG_A1", this.div01.ds_rcev.getColumn(0, "EVL_HDNG_A1"));
        	this.ds_registerList.setColumn(0, "EVL_HDNG_A2", this.div01.ds_rcev.getColumn(0, "EVL_HDNG_A2"));
        	this.ds_registerList.setColumn(0, "EVL_HDNG_A3", this.div01.ds_rcev.getColumn(0, "EVL_HDNG_A3"));
        	this.ds_registerList.setColumn(0, "EVL_HDNG_A4", this.div01.ds_rcev.getColumn(0, "EVL_HDNG_A4"));
        	this.ds_registerList.setColumn(0, "EVL_HDNG_A5", this.div01.ds_rcev.getColumn(0, "EVL_HDNG_A5"));
        	this.ds_registerList.setColumn(0, "EVL_HDNG_A6", this.div01.ds_rcev.getColumn(0, "EVL_HDNG_A6"));
        	this.ds_registerList.setColumn(0, "EVL_HDNG_B1", this.div01.ds_rcev.getColumn(0, "EVL_HDNG_B1"));
        	this.ds_registerList.setColumn(0, "EVL_HDNG_B11", this.div01.ds_rcev.getColumn(0, "EVL_HDNG_B11"));
        	this.ds_registerList.setColumn(0, "EVL_HDNG_B2", this.div01.ds_rcev.getColumn(0, "EVL_HDNG_B2"));
        	this.ds_registerList.setColumn(0, "EVL_HDNG_B3", this.div01.ds_rcev.getColumn(0, "EVL_HDNG_B3"));
        	this.ds_registerList.setColumn(0, "EVL_HDNG_B4", this.div01.ds_rcev.getColumn(0, "EVL_HDNG_B4"));
        	this.ds_registerList.setColumn(0, "EVL_HDNG_B5", this.div01.ds_rcev.getColumn(0, "EVL_HDNG_B5"));
        	this.ds_registerList.setColumn(0, "EVL_HDNGCN", this.div01.ds_rcev.getColumn(0, "EVL_HDNGCN"));
        	
        	var sSvcID        = "update";
        	var sURL          = "svc::rest/bt/rqBrk/saveCsltRq";
        	var sInDatasets   = "ds_registerList=ds_registerList ds_uploadresult=ds_uploadresult:A ds_uploadresult00=ds_uploadresult00:A";
        	var sOutDatasets  = "";
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        this.fn_validationCheck = function(){
        	
        	if(this.gfn_isNull(this.edt_chrrNm.value)){
        		this.edt_chrrNm.setFocus();
        		this.alert('신청자 기본정보중 신청자 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.cbo_chrwAtel.value)){
        		this.cbo_chrwAtel.setFocus();
        		this.alert('신청자 기본정보중 연락처 전화지역번호 값을 선택 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.edt_chrwHtel.value)){
        		this.edt_chrwHtel.setFocus();
        		this.alert('신청자 기본정보중 연락처 전화국번호 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.edt_chrwStel.value)){
        		this.edt_chrwStel.setFocus();
        		this.alert('신청자 기본정보중 연락처 전화일련번호 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.edt_chrrEmail.value)){
        		this.edt_chrrEmail.setFocus();
        		this.alert('신청자 기본정보중 Email 값을 입력 하세요.');
        		return false;
        	}else if(!this.gfn_checkEmail(this.edt_chrrEmail.value)){
        		this.edt_chrrEmail.setFocus();
        		this.alert('신청자 기본정보중 정확한 Email 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.cbo_chrwMpsvno.value)){
        		this.cbo_chrwMpsvno.setFocus();
        		this.alert('신청자 기본정보중 휴대전화서비스번호 값을 선택 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.edt_chrwMphno.value)){
        		this.edt_chrwMphno.setFocus();
        		this.alert('신청자 기본정보중 휴대전화국번호 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.edt_chrwMpsqno.value)){
        		this.edt_chrwMpsqno.setFocus();
        		this.alert('신청자 기본정보중 휴대전화일련번호 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.mae_bzno.value)){
        		this.mae_bzno.setFocus();
        		this.alert('회사 기본정보중 사업자등록번호 값을 입력 하세요.');
        		return false;
        	}else if(this.gfn_length(this.gfn_replace(this.mae_bzno.value, " ", "")) < 10){
        		this.mae_bzno.setFocus();
        		this.alert('회사 기본정보중 사업자등록번호 값 10자리를 확인 후 다시 입력 하세요.');
        		return false;
        		
        	}else {	
        	    var strNumb = this.mae_bzno.value ;
        	    
            	if(strNumb =='0000000000'){
        			alert("지사 사업자등록번호가 잘못되었습니다."); 
        			return false; 
        		}
        	    
        	    
                var sumMod = 0 ;
                sumMod += nexacro.toNumber(strNumb.substring(0,1)); 
                sumMod += nexacro.toNumber(strNumb.substring(1,2)) * 3 % 10; 
                sumMod += nexacro.toNumber(strNumb.substring(2,3)) * 7 % 10; 
                sumMod += nexacro.toNumber(strNumb.substring(3,4)) * 1 % 10; 
                sumMod += nexacro.toNumber(strNumb.substring(4,5)) * 3 % 10; 
                sumMod += nexacro.toNumber(strNumb.substring(5,6)) * 7 % 10; 
                sumMod += nexacro.toNumber(strNumb.substring(6,7)) * 1 % 10; 
                sumMod += nexacro.toNumber(strNumb.substring(7,8)) * 3 % 10; 
                sumMod += Math.floor(parseInt(strNumb.substring(8,9)) * 5 / 10); 
                sumMod += nexacro.toNumber(strNumb.substring(8,9)) * 5 % 10; 
                sumMod += nexacro.toNumber(strNumb.substring(9,10)); 
                
                if(sumMod % 10 != 0){ 
                
        			alert("사업자등록번호가 잘못되었습니다."); 
        			this.mae_bzno.setFocus();
        			return false; 
                } 
        		
        	}
        	if(this.gfn_isNull(this.edt_conm.value)){
        		this.edt_conm.setFocus();
        		this.alert('회사 기본정보중 업체명 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.edt_repm.value)){
        		this.edt_repm.setFocus();
        		this.alert('회사 기본정보중 대표자 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.cbo_repmAtel.value)){
        		this.cbo_repmAtel.setFocus();
        		this.alert('회사 기본정보중 대표자연락처 전화지역번호 값을 선택 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.edt_repmHtel.value)){
        		this.edt_repmHtel.setFocus();
        		this.alert('회사 기본정보중 대표자연락처 전화국번호 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.edt_repmStel.value)){
        		this.edt_repmStel.setFocus();
        		this.alert('회사 기본정보중 대표자연락처 전화일련번호 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.edt_biztp.value)){
        		this.edt_biztp.setFocus();
        		this.alert('회사 기본정보중 업태 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.edt_itm.value)){
        		this.edt_itm.setFocus();
        		this.alert('회사 기본정보중 종목 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.mae_byrSlam.value)){
        		this.mae_byrSlam.setFocus();
        		this.alert('회사 기본정보중 연간매출 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.edt_mSelPl.value)){
        		this.edt_mSelPl.setFocus();
        		this.alert('회사 기본정보중 주판매처 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.edt_mProduct.value)){
        		this.edt_mProduct.setFocus();
        		this.alert('회사 기본정보중 주력품목 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.chk_chrMft.value) && this.gfn_isNull(this.chk_chrRev.value) && this.gfn_isNull(this.chk_chrTotAgcy.value) && this.gfn_isNull(this.chk_chrVd.value)){
        		this.chk_chrMft.setFocus();
        		this.alert('회사 기본정보중 회사성격 값을 최소 하나 이상 선택 하세요.');
        		return false;
        	}else if(this.chk_chrMft.value==0 && this.chk_chrRev.value==0 && this.chk_chrTotAgcy.value==0 && this.chk_chrVd.value==0){
        		this.chk_chrMft.setFocus();
        		this.alert('회사 기본정보중 회사성격 값을 최소 하나 이상 선택 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.edt_majLatc.value)){
        		this.edt_majLatc.setFocus();
        		this.alert('회사 기본정보중 제목(업체명,주품목) 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.ta_cslt.value)){
        		this.ta_cslt.setFocus();
        		this.alert('회사 기본정보중 상담신청내용(업체 및 상품소개) 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.ta_rmk.value)){
        		this.ta_rmk.setFocus();
        		this.alert('회사 기본정보중 비고 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.edt_dongUp.value)){
        		this.btn_addr.setFocus();
        		this.alert('주소를 검색해서 주소 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.edt_dongBw.value)){
        		this.edt_dongBw.setFocus();
        		this.alert('회사 기본정보중 상세주소 값을 입력 하세요.');
        		return false;
        	}
        	
        	var validationCheck = this.div01.fn_validationCheck();
        	
        	return validationCheck;
        }

        this.mae_bzno_onlbuttonup = function(obj,e)
        {
        	if(this.gfn_isNull(obj.value)){
        		this.mae_bzno.setCaretPos(0);
        		//trace(this.mae_bzno.value);
        	}
        }

        /* 비활성화 */
        this.disable = function(obj,e)
        {
        	this.edt_chrrNm.set_enable(false);
        	this.cbo_chrwAtel.set_enable(false);
        	this.edt_chrwHtel.set_enable(false);
        	this.edt_chrwStel.set_enable(false);
        	this.edt_chrrEmail.set_enable(false);
        	this.cbo_chrwMpsvno.set_enable(false);
        	this.edt_chrwMphno.set_enable(false);
        	this.edt_chrwMpsqno.set_enable(false);
        	this.mae_bzno.set_enable(false);
        	this.edt_conm.set_enable(false);
        	this.edt_repm.set_enable(false);
        	this.cbo_repmAtel.set_enable(false);
        	this.edt_repmHtel.set_enable(false);
        	this.edt_repmStel.set_enable(false);
        	this.edt_biztp.set_enable(false);
        	this.edt_itm.set_enable(false);
        	this.edt_fZip.set_enable(false);
        	this.edt_rZip.set_enable(false);
        	this.edt_dongUp.set_enable(false);
        	this.edt_dongBw.set_enable(false);
        	this.btn_addr.set_enable(false);

        	this.mae_byrSlam.set_enable(false);
        	this.edt_mSelPl.set_enable(false);
        	this.edt_mProduct.set_enable(false);
        	this.chk_chrMft.set_enable(false);
        	this.chk_chrRev.set_enable(false);
        	this.chk_chrTotAgcy.set_enable(false);
        	this.chk_chrVd.set_enable(false);
        	this.edt_majLatc.set_enable(false);
        	this.ta_cslt.set_enable(false);
        	this.ta_rmk.set_enable(false);
        	
        	this.btn_down10.set_visible(true);
        	this.btn_fileDel.set_visible(false);
        	this.FileUpload10.set_visible(false);
        	this.btn_down10.set_right(15);
        	this.btn_register.set_enable(false);
        	
        	this.div01.disable();
        }

        /*sts2 보완수정 파일업로드 점수입력 비활성화*/
        this.disable2 = function(obj,e)
        {
        	this.div01.disable2();
        }

        this.fn_afterFormOnload = function()
        {
             //페이지 로딩후 실행부분      
        	var fv_paramMode = this.getOwnerFrame().paramMode;
        	
        	this.mae_sum00.setFocus(); // 팝업 오픈 후 스크롤 내려가는 문제
        	
        }

        /*조회*/
        this.search = function()
        {	
        	this.ds_registerList.clearData();
        	
        	var fv_cslt_rq_no =  this.gfn_isEmpty(this.getOwnerFrame().CSLT_RQ_NO );		
        	
        	var sSvcID        = "search";
        	var sURL          = "svc::rest/bt/rq/retrieveCsltRqDsc";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_registerList=ds_registerList ds_uploadresult=ds_uploadresult ds_uploadresult00=ds_uploadresult00 ds_csltManager=ds_csltManager";
        	var sArgument     = "cslt_rq_no=" + fv_cslt_rq_no;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}
        	
        	if (svcID == "search") {
        		if (this.ds_registerList.rowcount == 0) {
        			this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			return;
        		}
        		
        		var chrr_telNo = this.ds_registerList.getColumn(0, "CHRR_TELNO");
        		var chrr_mpNo = this.ds_registerList.getColumn(0, "CHRR_MPNO");
        		var repm_telNo = this.ds_registerList.getColumn(0, "REPM_TELNO");
        		
        		if (chrr_telNo) {
        			this.fn_telNo(chrr_telNo, this.cbo_chrwAtel, this.edt_chrwHtel, this.edt_chrwStel);
        		}
        		if (chrr_mpNo) {
        			this.fn_telNo(chrr_mpNo, this.cbo_chrwMpsvno, this.edt_chrwMphno, this.edt_chrwMpsqno);
        		}
        		if (repm_telNo) {
        			this.fn_telNo(repm_telNo, this.cbo_repmAtel, this.edt_repmHtel, this.edt_repmStel);
        		}
        		
        		this.div01.ds_rcev.setColumn(0,"EVL_HDNG_A1",this.ds_registerList.getColumn(0, "EVL_HDNG_A1"));
        		this.div01.ds_rcev.setColumn(0,"EVL_HDNG_A2",this.ds_registerList.getColumn(0, "EVL_HDNG_A2"));
        		this.div01.ds_rcev.setColumn(0,"EVL_HDNG_A3",this.ds_registerList.getColumn(0, "EVL_HDNG_A3"));
        		this.div01.ds_rcev.setColumn(0,"EVL_HDNG_A4",this.ds_registerList.getColumn(0, "EVL_HDNG_A4"));
        		this.div01.ds_rcev.setColumn(0,"EVL_HDNG_A5",this.ds_registerList.getColumn(0, "EVL_HDNG_A5"));
        		this.div01.ds_rcev.setColumn(0,"EVL_HDNG_A6",this.ds_registerList.getColumn(0, "EVL_HDNG_A6"));
        		this.div01.ds_rcev.setColumn(0,"EVL_HDNG_B1",this.ds_registerList.getColumn(0, "EVL_HDNG_B1"));
        		this.div01.ds_rcev.setColumn(0,"EVL_HDNG_B11",this.ds_registerList.getColumn(0, "EVL_HDNG_B11"));
        		this.div01.ds_rcev.setColumn(0,"EVL_HDNG_B2",this.ds_registerList.getColumn(0, "EVL_HDNG_B2"));
        		this.div01.ds_rcev.setColumn(0,"EVL_HDNG_B3",this.ds_registerList.getColumn(0, "EVL_HDNG_B3"));
        		this.div01.ds_rcev.setColumn(0,"EVL_HDNG_B4",this.ds_registerList.getColumn(0, "EVL_HDNG_B4"));
        		this.div01.ds_rcev.setColumn(0,"EVL_HDNG_B5",this.ds_registerList.getColumn(0, "EVL_HDNG_B5"));
        		this.div01.ds_rcev.setColumn(0,"EVL_HDNGCN",this.ds_registerList.getColumn(0, "EVL_HDNGCN"));
        		
        	} else if (svcID == "update" || svcID == "updateBuyer") {
        		this.gfn_getMessage("alert", "result.message.save.success");
        		this.close("SUCCESS");
        		return;
        	}
        	
        	
        	trace(this.ds_uploadresult.saveXML());
        	
        	/*서류첨부*/
        	if(!this.gfn_isNull(this.ds_uploadresult.rowcount))
        	{
        		this.div01.ds_uploadresult.copyData(this.ds_uploadresult);
        		
        		for(var i = 0 ; i < this.ds_uploadresult.rowcount; i++){
        			
        			if(this.ds_uploadresult.getColumn(i, "DCM_C") == "00"){
        				this.div01.edt_down00.set_value(this.ds_uploadresult.getColumn(i, "ORGFNAME"));
        			}
        			if(this.ds_uploadresult.getColumn(i, "DCM_C") == "01"){
        				this.div01.edt_down01.set_value(this.ds_uploadresult.getColumn(i, "ORGFNAME"));
        			}
        			if(this.ds_uploadresult.getColumn(i, "DCM_C") == "02"){
        				this.div01.edt_down02.set_value(this.ds_uploadresult.getColumn(i, "ORGFNAME"));
        			}
        			if(this.ds_uploadresult.getColumn(i, "DCM_C") == "03"){
        				this.div01.edt_down03.set_value(this.ds_uploadresult.getColumn(i, "ORGFNAME"));
        			}
        			if(this.ds_uploadresult.getColumn(i, "DCM_C") == "04"){
        				this.div01.edt_down04.set_value(this.ds_uploadresult.getColumn(i, "ORGFNAME"));
        			}
        			if(this.ds_uploadresult.getColumn(i, "DCM_C") == "05"){
        				this.div01.edt_down05.set_value(this.ds_uploadresult.getColumn(i, "ORGFNAME"));
        			}
        			if(this.ds_uploadresult.getColumn(i, "DCM_C") == "06"){
        				this.div01.edt_down06.set_value(this.ds_uploadresult.getColumn(i, "ORGFNAME"));
        			}
        			if(this.ds_uploadresult.getColumn(i, "DCM_C") == "07"){
        				this.div01.edt_down07.set_value(this.ds_uploadresult.getColumn(i, "ORGFNAME"));
        			}
        		}			
        	}
        	
        	//trace(this.ds_registerList.saveXML());
        	trace(this.ds_uploadresult.saveXML());
        	//trace(this.ds_uploadresult00.saveXML());
        	
        	/*retrieve합계호출*/
        	this.div01.retrieveSum();
        	
        	sts = this.ds_registerList.getColumn(0, "STS");
        	
        	if (sts == "2" && application.gv_userType != "02" && application.gv_userType != "03") { // 보완 상태
        		this.disable2();
        	} else {
        		this.disable();
        	}
        	
        	if (application.gv_userId) { // 로그인
        		// 로그인 사용자가 상담관리자인 경우, 담당자배정 가능
        		for(var j = 0 ; j < this.ds_csltManager.rowcount; j++){
        			var csltManagerList = this.ds_csltManager.getColumn(j, "CSLT_MANAGER_LIST");// 상담관리자 목록			
        			if(csltManagerList == application.gv_userId){
        				this.btn_buyer.set_visible(true);
        				this.btn_updateBuyer.set_visible(true);
        				break;
        			}
        		}
        		
        		// 출력 버튼 표시
        		this.btn_print.set_visible(true);
        	}
        }

        /*회사소개 파일첨부*/
        this.FileUpload10_onitemchanged = function(obj,e)
        {
        	this.gfn_callUpload(obj);
        }

        this.FileUpload10_onsuccess = function(obj,e)
        {
        	if( e.datasets == null )
        	{
        		trace("업로드 실패");
        	} else {
        		trace("업로드 성공");
        		/*
        		this.ds_uploadresult00.set_updatecontrol(false);
        		this.ds_uploadresult00.appendData(e.datasets[0],false,false);
        		this.ds_uploadresult00.setRowType(this.ds_uploadresult00.rowcount -1, "I");
        		this.ds_uploadresult00.set_updatecontrol(true);
        		this.ds_uploadresult00.setColumn(this.ds_uploadresult00.rowcount -1,"ISCHECKED","0");
        		*/
        		
        		this.ds_uploadresult01.copyData(e.datasets[0]);
        		var fName = this.ds_uploadresult01.getColumn(0,"FILENAME");
        		var fType = this.ds_uploadresult01.getColumn(0,"FILETYPE");
        		var fSize = this.ds_uploadresult01.getColumn(0,"FILESIZE");
        		var orgName = this.ds_uploadresult01.getColumn(0,"ORGFNAME");
        		var sysName = this.ds_uploadresult01.getColumn(0,"SYSTEMFILENAME");
        		
        		
        		//trace(this.ds_uploadresult00.rowposition);
        		
        		var nRow = this.ds_uploadresult00.rowposition ;
        		if(this.ds_uploadresult00.rowposition == "-1" ){
        			 nRow = this.ds_uploadresult00.addRow();
        		}else{
        		
        			nRow = this.ds_uploadresult00.addRow();
        		}
        		
        		this.ds_uploadresult00.setColumn(nRow,"FILENAME",fName);
        		this.ds_uploadresult00.setColumn(nRow,"FILETYPE",fType);
        		this.ds_uploadresult00.setColumn(nRow,"FILESIZE",fSize);
        		this.ds_uploadresult00.setColumn(nRow,"ORGFNAME",orgName);
        		this.ds_uploadresult00.setColumn(nRow,"SYSTEMFILENAME",sysName);
        		
        		//this.ds_uploadresult00.setColumn(this.ds_uploadresult00.rowcount -1,"UPSTS","2");
        		//this.ds_uploadresult00.setColumn(this.ds_uploadresult.rowcount -1 ,"DCM_C", name);
        		trace(this.ds_uploadresult00.saveXML());
        	}
        }

        this.FileUpload10_onerror = function(obj,e)
        {
        	trace("FileUpload10_onerror");
        	trace("e.errorcode: "+e.errorcode);
        	trace("e.errormsg: "+e.errormsg);
        }

        this.btn_fileDel_onclick = function(obj,e)
        {
        	//alert(this.ds_uploadresult00.getRowCount());
        	for(var i = this.ds_uploadresult00.getRowCount()-1; i >= 0; i--) {
        	//alert(this.ds_uploadresult00.getColumn("ISCHECKED", i));
        		if(this.ds_uploadresult00.getColumn(i, "ISCHECKED") == 1)
        		{
        			this.ds_uploadresult00.deleteRow(i);
        			//alert(this.ds_uploadresult00.getRowType(i));
        		}
        	}
        	trace(this.ds_uploadresult00.saveXML());
        }

        //전화 번호 타입 변경
        this.fn_telNo = function(strTelNo,strVal1,strVal2,strVal3){
        	 if(strTelNo.length > 8 ){
        		var RegPhonNum = ""; 

        		//문자열 길이에 따른 값 처리
        		if(strTelNo.length == 9 ) {
        			RegPhonNum = /([0-9]{2})([0-9]{3})([0-9]+)/; 
        		} else if(strTelNo.length == 10){
        			if(strTelNo.substring(0,2)=="02"){
        				RegPhonNum = /([0-9]{2})([0-9]{4})([0-9]+)/; 
        			}else{
        				RegPhonNum = /([0-9]{3})([0-9]{3})([0-9]+)/;
        			}
        		} else if(strTelNo.length > 10){ 
        			RegPhonNum = /([0-9]{3})([0-9]{4})([0-9]+)/; 
        		}

        		strTelNo = strTelNo.replace(RegPhonNum, "$1-$2-$3"); 

        		var naTrplCVal = strTelNo.split("-");
        			
        			 strVal1.set_value(naTrplCVal[0]);
        			 strVal2.set_value(naTrplCVal[1]);
        			 strVal3.set_value(naTrplCVal[2]);
        	}
        }

        //주소 리턴 값
        this.fn_addr = function(strVal)
        {
        	
        	var fn_addr = strVal.split(",");
        	 for(var i=0; i<fn_addr.length; i++) {
        	 
        		var fn_addr1 = fn_addr[i].split("#");
        		
        		if( fn_addr1[0] == "FZIP"         ){
        		
        			//앞자리우편번호
        			this.ds_registerList.setColumn(0,"FZIP",  fn_addr1[1]) ;
        		
        		}else if( fn_addr1[0] == "RZIP"         ){

        			//뒷자리우편번호
        			this.ds_registerList.setColumn(0,"RZIP",  fn_addr1[1]) ;
        			
        		}else if( fn_addr1[0] == "ZIP_SQNO"     ){
        			
        			//우편번호일련번호
        			this.ds_registerList.setColumn(0,"ZIP_SQNO",  fn_addr1[1]) ;
        			
        		}else if( fn_addr1[0] == "DONGUP"       ){

        			//동이상주소
        			this.ds_registerList.setColumn(0,"DONGUP",  fn_addr1[1]) ;
        			
        		}else if( fn_addr1[0] == "DONGBW"       ){

        			//동이하주소
        			this.ds_registerList.setColumn(0,"DONGBW",  fn_addr1[1]) ;

        		}
        	  }
        }

        // 바이어 조회
        this.btn_buyer_onclick = function(obj,e)
        {
        	var oArg = { paramMode: "S" };
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("buyer", "OMG.PT::OMG_DS_SC_9020.xfdl", oArg, sOption, sPopupCallBack);
        }

        // 바이어 선택 후처리
        this.fn_buyer = function(strVal)
        {
        	if (!strVal) {
        		return;
        	}
        	
        	var buyer = strVal.split("&");
        	
        	for (var i = 0; i < buyer.length; i++) {
        		var arr = buyer[i].split("=");
        		
        		var key = arr[0];
        		var val = decodeURIComponent(arr[1]); // decode
        		
        		if (key == "ShrtBzplNm") {
        			this.edt_buyerShrtBxplNm.set_value(val);
        		} else if (key == "chrgBsnnm") {
        			this.edt_buyerChrgBsNm.set_value(val);
        		} else if (key == "buyerNm") {
        			this.edt_buyerNm.set_value(val);
        		} else if (key == "naBzplc") {
        			this.edt_naBzplc.set_value(val);
        		} else if (key == "buyerEno") {
        			this.edt_buyerEno.set_value(val);
        		}
        	}
        }

        // 담당자 배정
        this.btn_updateBuyer_onclick = function(obj,e)
        {
        	if (this.gfn_isNull(this.edt_buyerEno.value)) {
        		if (this.gfn_isNull(this.edt_buyerNm.value)) {
        			this.alert("바이어를 선택하세요.");
        		} else {
        			this.alert("변경할 바이어를 선택하세요.");
        		}
        		return;
        	}
        	if (!confirm("\"" + this.edt_buyerNm.value + "\" 바이어를 담당자로 배정하시겠습니까?")) {
        		return;
        	}
        	
        	var sParams = " CSLT_RQ_NO="        + this.gfn_isEmpty(this.getOwnerFrame().CSLT_RQ_NO)
        				+ " BUYER_SHRT_BZPLNM=" + encodeURIComponent(this.edt_buyerShrtBxplNm.value) // encode
        				+ " BUYER_CHRG_BSNNM="  + encodeURIComponent(this.edt_buyerChrgBsNm.value)   // encode
        				+ " BUYER_NM="          + encodeURIComponent(this.edt_buyerNm.value)         // encode
        				+ " NA_TRPL_C="         + this.edt_naBzplc.value
        				+ " BUYER_ENO="         + this.edt_buyerEno.value;
        	
        	var sSvcID        = "updateBuyer";
        	var sURL          = "svc::rest/bt/rq/saveCtrCsltRqBuyer";
        	var sInDatasets   = "";
        	var sOutDatasets  = "";
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	if (strId == "buyer") {
        		this.fn_buyer(strVal);
        	} else if (strId == "zipCode") {
        		this.fn_addr(strVal);
        	}
        }

        this.btn_addr_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"U", dsArg:this.ds_rsclist};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";       
        	this.gfn_openPopup("zipCode","OMG.PT::OMG_DS_SC_9010.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.btn_print_onclick = function(obj,e)
        {
        	var fv_cslt_rq_no =  this.gfn_isEmpty(this.getOwnerFrame().CSLT_RQ_NO );			
        	//
        	var param = {
        		cslt_rq_no:fv_cslt_rq_no
        	}
        	
        	var ozParam = {
        	sId: 'OMG_DS_SC_1113',
        	sUrl: '/rest/oz/bt/rq/retrieveCsltRqDsc',
        	paramType: 'param',
        	sParam: param
        	};
        	this.ozViewer(ozParam);
        }

        this.btn_down10_onclick = function(obj,e)
        {
        	this.gfn_callDownload(this.ds_uploadresult00, "ISCHECKED")
        }

        this.fn_btnEnable = function(enable)
        {
        	this.btn_register.set_enable(enable);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_uploadresult00.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.ds_uploadresult.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.ds_uploadresult01.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.addEventHandler("onload", this.OMG_DS_SC_2113_onload, this);
            this.btn_register.addEventHandler("onclick", this.btn_register_onclick, this);
            this.mae_bzno.addEventHandler("onlbuttonup", this.mae_bzno_onlbuttonup, this);
            this.btn_addr.addEventHandler("onclick", this.btn_addr_onclick, this);
            this.chk_chrMft.addEventHandler("onchanged", this.chk_chrMft_onchanged, this);
            this.grd_file.addEventHandler("onheadclick", this.grd_file_onheadclick, this);
            this.FileUpload10.addEventHandler("onsuccess", this.FileUpload10_onsuccess, this);
            this.FileUpload10.addEventHandler("onerror", this.FileUpload10_onerror, this);
            this.FileUpload10.addEventHandler("onitemchanged", this.FileUpload10_onitemchanged, this);
            this.btn_fileDel.addEventHandler("onclick", this.btn_fileDel_onclick, this);
            this.btn_down10.addEventHandler("onclick", this.btn_down10_onclick, this);
            this.btn_buyer.addEventHandler("onclick", this.btn_buyer_onclick, this);
            this.btn_print.addEventHandler("onclick", this.btn_print_onclick, this);
            this.PopupMenu00.addEventHandler("onmenuclick", this.PopupMenu00_onmenuclick, this);
            this.btn_updateBuyer.addEventHandler("onclick", this.btn_updateBuyer_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_2113.xfdl");
        this.loadPreloadList();
       
    };
}
)();
