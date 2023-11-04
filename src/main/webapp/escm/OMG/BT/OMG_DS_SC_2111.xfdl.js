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
                this.set_titletext("신규계약 상담신청(수산 신청자)");
                this._setFormPosition(0,0,800,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CSLT_RQ_NO\" type=\"STRING\" size=\"256\" sumtext=\"상담신청번호\"/><Column id=\"BZNO\" type=\"STRING\" size=\"256\" sumtext=\"사업자등록번호\"/><Column id=\"ST_DT\" type=\"STRING\" size=\"256\" sumtext=\"신청일자\"/><Column id=\"CHRRNM\" type=\"STRING\" size=\"256\" sumtext=\"담당자\"/><Column id=\"BUYER_SHRT_BZPLNM\" type=\"STRING\" size=\"256\" sumtext=\"경제통합상품대분류코드\"/><Column id=\"BUYER_CHRG_BSNNM\" type=\"STRING\" size=\"256\" sumtext=\"경제통합상품중분류코드\"/><Column id=\"BUYER_NM\" type=\"STRING\" size=\"256\" sumtext=\"경제통합상품소분류코드\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\" sumtext=\"경제통합거래처코드\"/><Column id=\"BUYER_ENO\" type=\"STRING\" size=\"256\" sumtext=\"바이어개인번호\"/><Column id=\"CHRR_TELNO\" type=\"STRING\" size=\"256\" sumtext=\"담당자 전화지역번호\"/><Column id=\"CHRR_EMAIL\" type=\"STRING\" size=\"256\" sumtext=\"담당자 Email\"/><Column id=\"CHRR_MPNO\" type=\"STRING\" size=\"256\" sumtext=\"담당자 휴대전화\"/><Column id=\"CONM\" type=\"STRING\" size=\"256\" sumtext=\"업체명\"/><Column id=\"REPM\" type=\"STRING\" size=\"256\" sumtext=\"대표자\"/><Column id=\"REPM_TELNO\" type=\"STRING\" size=\"256\" sumtext=\"대표자 전화지역번호\"/><Column id=\"BIZTP\" type=\"STRING\" size=\"256\" sumtext=\"업태\"/><Column id=\"ITM\" type=\"STRING\" size=\"256\" sumtext=\"종목\"/><Column id=\"FZIP\" type=\"STRING\" size=\"256\" sumtext=\"앞자리우편번호\"/><Column id=\"RZIP\" type=\"STRING\" size=\"256\" sumtext=\"뒷자리우편번호\"/><Column id=\"CSLT_DSC\" type=\"STRING\" size=\"256\" sumtext=\"우편번호일련번호\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"256\" sumtext=\"동이상주소\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"256\" sumtext=\"동이하주소\"/><Column id=\"BYR_SLAM\" type=\"STRING\" size=\"256\" sumtext=\"연간매출금액\"/><Column id=\"MSELPL\" type=\"STRING\" size=\"256\" sumtext=\"주판매처\"/><Column id=\"MFO_LATC\" type=\"STRING\" size=\"256\" sumtext=\"주력품목\"/><Column id=\"CO_CHR_MFT\" type=\"STRING\" size=\"256\" sumtext=\"회사성격 제조\"/><Column id=\"CO_CHR_REV\" type=\"STRING\" size=\"256\" sumtext=\"회사성격 수입\"/><Column id=\"CO_CHR_TOT_AGCY\" type=\"STRING\" size=\"256\" sumtext=\"회사성격 총판/대리점\"/><Column id=\"CO_CHR_VD\" type=\"STRING\" size=\"256\" sumtext=\"회사성격 벤더\"/><Column id=\"MAJ_LATC\" type=\"STRING\" size=\"256\" sumtext=\"주요품목\"/><Column id=\"CSLT_RQ_CNTN\" type=\"STRING\" size=\"256\" sumtext=\"상담신청내용\"/><Column id=\"STS\" type=\"STRING\" size=\"256\" sumtext=\"상태\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\" sumtext=\"비고\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\" sumtext=\"최초등록일시\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\" sumtext=\"최초등록자\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\" sumtext=\"최종변경일시\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\" sumtext=\"최종변경자\"/></ColumnInfo><Rows><Row><Col id=\"BZNO\"/><Col id=\"CSLT_RQ_NO\"/><Col id=\"ST_DT\"/><Col id=\"CHRRNM\"/><Col id=\"BUYER_SHRT_BZPLNM\"/><Col id=\"BUYER_CHRG_BSNNM\"/><Col id=\"BUYER_NM\"/><Col id=\"CHRR_TELNO\"/><Col id=\"CHRR_EMAIL\"/><Col id=\"CHRR_MPNO\"/><Col id=\"CONM\"/><Col id=\"REPM\"/><Col id=\"REPM_TELNO\"/><Col id=\"BIZTP\"/><Col id=\"ITM\"/><Col id=\"FZIP\"/><Col id=\"RZIP\"/><Col id=\"CSLT_DSC\"/><Col id=\"DONGUP\"/><Col id=\"DONGBW\"/><Col id=\"BYR_SLAM\"/><Col id=\"MSELPL\"/><Col id=\"MFO_LATC\"/><Col id=\"CO_CHR_MFT\"/><Col id=\"CO_CHR_REV\"/><Col id=\"CO_CHR_TOT_AGCY\"/><Col id=\"CO_CHR_VD\"/><Col id=\"MAJ_LATC\"/><Col id=\"CSLT_RQ_CNTN\"/><Col id=\"STS\"/><Col id=\"RMK\"/><Col id=\"FSRG_DTM\"/><Col id=\"FS_RGM\"/><Col id=\"LSCHG_DTM\"/><Col id=\"LS_CHGM\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rcev", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CSLT_RQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_A1\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_A2\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_A3\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_A4\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_A5\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_A6\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_B1\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_B11\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_B2\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_B3\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_B4\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_B5\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNGCN\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DCM_C\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
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

            obj = new Dataset("ds_zip", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"POST_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"PROVNM\" type=\"STRING\" size=\"256\"/><Column id=\"CCWNM\" type=\"STRING\" size=\"256\"/><Column id=\"TTVNM\" type=\"STRING\" size=\"256\"/><Column id=\"RODNM_C\" type=\"STRING\" size=\"256\"/><Column id=\"RODNM\" type=\"STRING\" size=\"256\"/><Column id=\"BLD_NO_MHZNO\" type=\"STRING\" size=\"256\"/><Column id=\"BLD_NO_SHZNO\" type=\"STRING\" size=\"256\"/><Column id=\"CCWN_BLDNM\" type=\"STRING\" size=\"256\"/><Column id=\"LWDG_C\" type=\"STRING\" size=\"256\"/><Column id=\"LWDGNM\" type=\"STRING\" size=\"256\"/><Column id=\"LTNO_MHZNO\" type=\"STRING\" size=\"256\"/><Column id=\"LTNO_SHZNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DCM_C\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dsc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"string\" size=\"13\"/><Column id=\"name\" type=\"string\" size=\"13\"/></ColumnInfo><Rows><Row><Col id=\"code\">201</Col><Col id=\"name\">선어/활어(냉동 원물 비규격포함)</Col></Row><Row><Col id=\"code\">202</Col><Col id=\"name\">건어/수산 가공품</Col></Row><Row><Col id=\"code\">203</Col><Col id=\"name\">수산 규격품(냉동·냉장)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div00", "absolute", "0", "39", "885", "839", null, null, this);
            obj.set_taborder("8");
            obj.set_visible("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);
            obj = new Static("Static41", "absolute", "125", "648", "661", "45", null, null, this.div00);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static32", "absolute", "125", "549", "661", "100", null, null, this.div00);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static40", "absolute", "125", "505", "661", "45", null, null, this.div00);
            obj.set_taborder("95");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static38", "absolute", "125", "477", "661", "29", null, null, this.div00);
            obj.set_taborder("94");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "125", "449", "661", "29", null, null, this.div00);
            obj.set_taborder("96");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "125", "212", "661", "29", null, null, this.div00);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static51", "absolute", "125", "184", "661", "29", null, null, this.div00);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static200", "absolute", "125", "337", "661", "29", null, null, this.div00);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static50", "absolute", "125", "393", "661", "29", null, null, this.div00);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static49", "absolute", "125", "309", "661", "29", null, null, this.div00);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static26", "absolute", "125", "17", "660", "29", null, null, this.div00);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "16", "17", "110", "29", null, null, this.div00);
            obj.set_taborder("39");
            obj.set_text("입력결과");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "16", "62", "301", "21", null, null, this.div00);
            obj.set_taborder("40");
            obj.set_text("신청자 기본정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "125", "86", "661", "29", null, null, this.div00);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "16", "86", "110", "29", null, null, this.div00);
            obj.set_taborder("42");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static23", "absolute", "125", "114", "661", "29", null, null, this.div00);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static25", "absolute", "16", "114", "110", "29", null, null, this.div00);
            obj.set_taborder("44");
            obj.set_text("E-Mail");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);
            obj = new Edit("edt_chrrEmail", "absolute", "129", "118", "270", "21", null, null, this.div00);
            obj.set_taborder("5");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "16", "257", "301", "21", null, null, this.div00);
            obj.set_taborder("45");
            obj.set_text("회사 기본정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static29", "absolute", "125", "281", "661", "29", null, null, this.div00);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static34", "absolute", "16", "281", "110", "29", null, null, this.div00);
            obj.set_taborder("47");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static35", "absolute", "16", "309", "110", "29", null, null, this.div00);
            obj.set_taborder("48");
            obj.set_text("대표자");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static36", "absolute", "125", "365", "661", "29", null, null, this.div00);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static37", "absolute", "403", "337", "110", "29", null, null, this.div00);
            obj.set_taborder("50");
            obj.set_text("종목");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);
            obj = new Edit("edt_itm", "absolute", "516", "341", "266", "21", null, null, this.div00);
            obj.set_taborder("16");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static52", "absolute", "16", "393", "110", "57", null, null, this.div00);
            obj.set_taborder("51");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "403", "212", "110", "29", null, null, this.div00);
            obj.set_taborder("52");
            obj.set_text("바이어 업무명");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "16", "46", null, "20", "-5", null, this.div00);
            obj.set_taborder("53");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "16", "241", null, "20", "-5", null, this.div00);
            obj.set_taborder("54");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div00.addChild(obj.name, obj);
            obj = new MaskEdit("mae_sum00", "absolute", "129", "21", "100", "21", null, null, this.div00);
            obj.set_taborder("55");
            obj.set_displaynulltext("0");
            obj.set_enable("false");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "233", "21", "28", "21", null, null, this.div00);
            obj.set_taborder("56");
            obj.set_text("점");
            this.div00.addChild(obj.name, obj);
            obj = new Edit("edt_chrrNm", "absolute", "129", "90", "270", "21", null, null, this.div00);
            obj.set_taborder("1");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "403", "281", "110", "29", null, null, this.div00);
            obj.set_taborder("57");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);
            obj = new MaskEdit("mae_bzno", "absolute", "129", "285", "151", "21", null, null, this.div00);
            obj.set_taborder("9");
            obj.set_type("string");
            obj.set_mask("###-##-#####");
            obj.set_trimtype("right");
            obj.set_limitbymask("integer");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "403", "309", "110", "29", null, null, this.div00);
            obj.set_taborder("58");
            obj.set_text("대표자연락처");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "16", "337", "110", "29", null, null, this.div00);
            obj.set_taborder("59");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);
            obj = new Combo("cbo_repmAtel", "absolute", "516", "313", "51", "21", null, null, this.div00);
            this.div00.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_innerdataset("@ds_tel");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new Static("Static27", "absolute", "628", "313", "9", "21", null, null, this.div00);
            obj.set_taborder("60");
            obj.set_text("-");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static28", "absolute", "569", "313", "9", "21", null, null, this.div00);
            obj.set_taborder("61");
            obj.set_text("-");
            this.div00.addChild(obj.name, obj);
            obj = new Edit("edt_conm", "absolute", "516", "285", "266", "21", null, null, this.div00);
            obj.set_taborder("10");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.div00.addChild(obj.name, obj);
            obj = new Edit("edt_repm", "absolute", "129", "313", "270", "21", null, null, this.div00);
            obj.set_taborder("11");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.div00.addChild(obj.name, obj);
            obj = new Edit("edt_biztp", "absolute", "129", "341", "270", "21", null, null, this.div00);
            obj.set_taborder("15");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "16", "365", "110", "29", null, null, this.div00);
            obj.set_taborder("62");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);
            obj = new Edit("edt_dongUp", "absolute", "129", "397", "653", "21", null, null, this.div00);
            obj.set_taborder("63");
            obj.set_readonly("true");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("80");
            obj.set_cssclass("edt_WF_Readonly");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static142", "absolute", "189", "369", "9", "21", null, null, this.div00);
            obj.set_taborder("64");
            obj.set_text("-");
            this.div00.addChild(obj.name, obj);
            obj = new Button("btn_addr", "absolute", "259", "369", "21", "21", null, null, this.div00);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div00.addChild(obj.name, obj);
            obj = new Combo("cbo_chrwAtel", "absolute", "516", "90", "51", "21", null, null, this.div00);
            this.div00.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_innerdataset("@ds_tel");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new Static("Static31", "absolute", "628", "90", "9", "21", null, null, this.div00);
            obj.set_taborder("65");
            obj.set_text("-");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static33", "absolute", "569", "90", "9", "21", null, null, this.div00);
            obj.set_taborder("66");
            obj.set_text("-");
            this.div00.addChild(obj.name, obj);
            obj = new Combo("cbo_chrwMpsvno", "absolute", "516", "118", "51", "21", null, null, this.div00);
            this.div00.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_innerdataset("@ds_hp");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new Static("Static02", "absolute", "628", "118", "9", "21", null, null, this.div00);
            obj.set_taborder("67");
            obj.set_text("-");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "569", "118", "9", "21", null, null, this.div00);
            obj.set_taborder("68");
            obj.set_text("-");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "403", "86", "110", "29", null, null, this.div00);
            obj.set_taborder("69");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static30", "absolute", "403", "114", "110", "29", null, null, this.div00);
            obj.set_taborder("70");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);
            obj = new Edit("edt_buyerChrgBsNm", "absolute", "516", "216", "261", "21", null, null, this.div00);
            obj.set_taborder("71");
            obj.set_readonly("true");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("76");
            obj.set_cssclass("edt_WF_Readonly");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static201", "absolute", "125", "421", "661", "29", null, null, this.div00);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div00.addChild(obj.name, obj);
            obj = new Edit("edt_dongBw", "absolute", "129", "425", "653", "21", null, null, this.div00);
            obj.set_taborder("18");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            this.div00.addChild(obj.name, obj);
            obj = new Edit("edt_chrwHtel", "absolute", "578", "90", "48", "21", null, null, this.div00);
            obj.set_taborder("3");
            obj.set_inputtype("digit");
            obj.set_maxlength("4");
            obj.style.set_align("right middle");
            this.div00.addChild(obj.name, obj);
            obj = new Edit("edt_chrwStel", "absolute", "637", "90", "48", "21", null, null, this.div00);
            obj.set_taborder("4");
            obj.set_inputtype("digit");
            obj.set_maxlength("4");
            obj.style.set_align("right middle");
            this.div00.addChild(obj.name, obj);
            obj = new Edit("edt_chrwMphno", "absolute", "578", "118", "48", "21", null, null, this.div00);
            obj.set_taborder("7");
            obj.set_inputtype("digit");
            obj.set_maxlength("4");
            obj.style.set_align("right middle");
            this.div00.addChild(obj.name, obj);
            obj = new Edit("edt_chrwMpsqno", "absolute", "637", "118", "48", "21", null, null, this.div00);
            obj.set_taborder("8");
            obj.set_inputtype("digit");
            obj.set_maxlength("4");
            obj.style.set_align("right middle");
            this.div00.addChild(obj.name, obj);
            obj = new Edit("edt_repmHtel", "absolute", "578", "313", "48", "21", null, null, this.div00);
            obj.set_taborder("13");
            obj.set_inputtype("digit");
            obj.set_maxlength("4");
            obj.style.set_align("right middle");
            this.div00.addChild(obj.name, obj);
            obj = new Edit("edt_repmStel", "absolute", "637", "313", "48", "21", null, null, this.div00);
            obj.set_taborder("14");
            obj.set_inputtype("digit");
            obj.set_maxlength("4");
            obj.style.set_align("right middle");
            this.div00.addChild(obj.name, obj);
            obj = new Edit("edt_fZip", "absolute", "129", "369", "58", "21", null, null, this.div00);
            obj.set_taborder("73");
            obj.set_inputtype("digit");
            obj.set_readonly("true");
            obj.set_maxlength("3");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("right middle");
            this.div00.addChild(obj.name, obj);
            obj = new Edit("edt_rZip", "absolute", "198", "369", "58", "21", null, null, this.div00);
            obj.set_taborder("74");
            obj.set_inputtype("digit");
            obj.set_readonly("true");
            obj.set_maxlength("3");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("right middle");
            this.div00.addChild(obj.name, obj);
            obj = new Edit("edt_naBzplc", "absolute", "516", "188", "120", "21", null, null, this.div00);
            obj.set_taborder("33");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);
            obj = new Edit("edt_buyerEno", "absolute", "657", "188", "120", "21", null, null, this.div00);
            obj.set_taborder("75");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static203", "absolute", "16", "184", "110", "29", null, null, this.div00);
            obj.set_taborder("76");
            obj.set_text("바이어 사업장명");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static204", "absolute", "16", "212", "110", "29", null, null, this.div00);
            obj.set_taborder("77");
            obj.set_text("바이어명");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);
            obj = new Edit("edt_buyerShrtBxplNm", "absolute", "129", "188", "270", "21", null, null, this.div00);
            obj.set_taborder("32");
            obj.set_readonly("true");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("60");
            obj.style.set_background("#ecececff");
            obj.style.set_border("1 solid #bfbfbfff");
            this.div00.addChild(obj.name, obj);
            obj = new Static("st_spot", "absolute", "205", "426", "22", "21", null, null, this.div00);
            obj.set_taborder("78");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);
            obj = new Edit("edt_buyerNm", "absolute", "129", "216", "270", "21", null, null, this.div00);
            obj.set_taborder("79");
            obj.set_readonly("true");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_cssclass("edt_WF_Readonly");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "16", "159", "301", "21", null, null, this.div00);
            obj.set_taborder("80");
            obj.set_text("바이어 기본정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static158", "absolute", "260", "21", "188", "21", null, null, this.div00);
            obj.set_taborder("81");
            obj.set_text("(70점 이상 획득업체 상담 가능)");
            this.div00.addChild(obj.name, obj);
            obj = new Edit("edt_majLatc", "absolute", "129", "516", "653", "21", null, null, this.div00);
            obj.set_taborder("26");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("128");
            this.div00.addChild(obj.name, obj);
            obj = new Grid("grd_file", "absolute", "16", "733", "770", "86", null, null, this.div00);
            obj.set_taborder("31");
            obj.set_binddataset("ds_uploadresult00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"684\"/><Column size=\"188\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"UPLOAD 파일\"/><Cell col=\"2\" text=\"파일크기\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:ORGFNAME\"/><Cell col=\"2\" text=\"expr:FILESIZE + ' byte '\"/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static43", "absolute", "16", "709", "301", "21", null, null, this.div00);
            obj.set_taborder("82");
            obj.set_text("회사설명 첨부파일");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static42", "absolute", "13", "693", null, "20", "-2", null, this.div00);
            obj.set_taborder("83");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div00.addChild(obj.name, obj);
            obj = new TextArea("ta_rmk", "absolute", "129", "652", "653", "37", null, null, this.div00);
            obj.set_taborder("28");
            obj.set_wordwrap("char");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("2048");
            obj.style.set_padding("2 5 0 5");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static39", "absolute", "16", "648", "110", "45", null, null, this.div00);
            obj.set_taborder("85");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);
            obj = new TextArea("ta_cslt", "absolute", "129", "553", "653", "92", null, null, this.div00);
            obj.set_taborder("27");
            obj.set_wordwrap("char");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("2048");
            obj.style.set_padding("2 5 0 5");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "16", "549", "110", "100", null, null, this.div00);
            obj.set_taborder("87");
            obj.set_text("상담신청내용\r\n(업체 및 상품\r\n소개)");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);
            obj = new CheckBox("chk_chrVd", "absolute", "734", "481", "57", "21", null, null, this.div00);
            obj.set_taborder("25");
            obj.set_text("벤더");
            obj.set_value("0");
            obj.set_truevalue("4");
            obj.set_falsevalue("0");
            this.div00.addChild(obj.name, obj);
            obj = new CheckBox("chk_chrTotAgcy", "absolute", "635", "481", "97", "21", null, null, this.div00);
            obj.set_taborder("24");
            obj.set_text("총판/대리점");
            obj.set_value("0");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.div00.addChild(obj.name, obj);
            obj = new CheckBox("chk_chrRev", "absolute", "578", "481", "53", "21", null, null, this.div00);
            obj.set_taborder("23");
            obj.set_text("수입");
            obj.set_value("0");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.div00.addChild(obj.name, obj);
            obj = new CheckBox("chk_chrMft", "absolute", "520", "481", "53", "21", null, null, this.div00);
            obj.set_taborder("22");
            obj.set_text("제조");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div00.addChild(obj.name, obj);
            obj = new Edit("edt_mProduct", "absolute", "129", "481", "270", "21", null, null, this.div00);
            obj.set_taborder("21");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.div00.addChild(obj.name, obj);
            obj = new Edit("edt_mSelPl", "absolute", "516", "453", "266", "21", null, null, this.div00);
            obj.set_taborder("20");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "284", "453", "82", "21", null, null, this.div00);
            obj.set_taborder("88");
            obj.set_text("(단위 : 억원)");
            this.div00.addChild(obj.name, obj);
            obj = new MaskEdit("mae_byrSlam", "absolute", "129", "453", "150", "21", null, null, this.div00);
            obj.set_taborder("19");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static76", "absolute", "403", "477", "110", "29", null, null, this.div00);
            obj.set_taborder("89");
            obj.set_text("회사성격");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static75", "absolute", "16", "449", "110", "29", null, null, this.div00);
            obj.set_taborder("90");
            obj.set_text("연간매출");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static68", "absolute", "16", "477", "110", "29", null, null, this.div00);
            obj.set_taborder("91");
            obj.set_text("주력품목");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static61", "absolute", "16", "505", "110", "45", null, null, this.div00);
            obj.set_taborder("92");
            obj.set_text("제목\r\n(업체명,주품목)");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "403", "449", "110", "29", null, null, this.div00);
            obj.set_taborder("93");
            obj.set_text("주판매처");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);
            obj = new FileUpload("FileUpload10", "absolute", "642", "709", "72", "21", null, null, this.div00);
            obj.set_taborder("29");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);
            obj = new Button("btn_fileDel", "absolute", "714", "709", "72", "21", null, null, this.div00);
            obj.set_taborder("30");
            obj.set_text("파일삭제");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "16", "36", "871", "20", null, null, this);
            obj.set_taborder("1");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_register", "absolute", "754", "16", "41", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "25", "874", "301", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_text("평가표");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "13", "858", null, "20", "-2", null, this);
            obj.set_taborder("4");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_bookmark", "absolute", "16", "15", "15", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("sta_location", "absolute", "34", "15", "185", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_text("신규계약 상담신청(수산)");
            obj.set_cssclass("sta_WF_Location");
            this.addChild(obj.name, obj);

            obj = new Static("Static214", "absolute", "369", "16", "110", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("수산상담구분");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dsc", "absolute", "479", "16", "270", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_dsc");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_index("-1");

            obj = new Div("div01", "absolute", "0", "887", "800", "243", null, null, this);
            obj.set_taborder("9");
            obj.set_text("평가표");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dsc", "absolute", "945", "90", "64", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_value("insert");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_privacy", "absolute", "1", "1000", "800", "295", null, null, this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);
            obj = new TextArea("txa_privacy", "absolute", "14", "54", null, "200", "12", null, this.div_privacy);
            obj.set_taborder("5");
            obj.set_tabstop("false");
            obj.set_scrollbars("autovert");
            obj.set_wordwrap("char");
            obj.set_readonly("true");
            obj.set_cssclass("txt_modern");
            obj.style.set_padding("5 5 5 5");
            this.div_privacy.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", null, "27", "40", "21", "9", null, this.div_privacy);
            obj.set_taborder("6");
            obj.set_text("<fc v='#ff0000ff'>(필수)</fc>");
            obj.set_usedecorate("true");
            this.div_privacy.addChild(obj.name, obj);
            obj = new CheckBox("chk_agree", "absolute", null, "26", "217", "21", "15", null, this.div_privacy);
            obj.set_taborder("7");
            obj.set_text("개인정보 수집 및 이용 동의");
            obj.style.set_font("bold 9 Gulim");
            this.div_privacy.addChild(obj.name, obj);
            obj = new Button("btn_insert", "absolute", null, "261", "84", "21", "15", null, this.div_privacy);
            obj.set_taborder("8");
            obj.set_text("상담가능");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.div_privacy.addChild(obj.name, obj);
            obj = new Button("btn_register01", "absolute", null, "261", "41", "21", "103", null, this.div_privacy);
            obj.set_taborder("9");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.div_privacy.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 885, 839, this.div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("8");
            		p.set_visible("true");
            		p.set_enable("false");

            	}
            );
            this.div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 800, 243, this.div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.set_text("평가표");
            		p.set_visible("false");

            	}
            );
            this.div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 800, 422, this.div_privacy,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("11");

            	}
            );
            this.div_privacy.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 800, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("신규계약 상담신청(수산 신청자)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item30","edt_dsc","value","ds_rc","CHRRNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div00.edt_chrrEmail","value","ds_rc","CHRR_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","div00.edt_itm","value","ds_rc","ITM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","div00.mae_sum00","value","ds_rcev","EVL_HDNGCN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div00.edt_chrrNm","value","ds_rc","CHRRNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div00.mae_bzno","value","ds_rc","BZNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","div00.cbo_repmAtel","value","ds_rc","REPM_ATEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","div00.edt_conm","value","ds_rc","CONM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div00.edt_repm","value","ds_rc","REPM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div00.edt_biztp","value","ds_rc","BIZTP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","div00.edt_dongUp","value","ds_rc","DONGUP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","div00.cbo_chrwAtel","value","ds_rc","CHRW_ATEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","div00.cbo_chrwMpsvno","value","ds_rc","CHRW_MPSVNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","div00.edt_buyerChrgBsNm","value","ds_rc","BUYER_CHRG_BSNNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","div00.edt_dongBw","value","ds_rc","DONGBW");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div00.edt_chrwHtel","value","ds_rc","CHRW_HTEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","div00.edt_chrwStel","value","ds_rc","CHRW_STEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","div00.edt_chrwMphno","value","ds_rc","CHRW_MPHNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","div00.edt_chrwMpsqno","value","ds_rc","CHRW_MPSQNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","div00.edt_repmHtel","value","ds_rc","REPM_HTEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","div00.edt_repmStel","value","ds_rc","REPM_STEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","div00.edt_fZip","value","ds_rc","FZIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","div00.edt_rZip","value","ds_rc","RZIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item47","div00.edt_naBzplc","value","ds_rc","NA_BZPLC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item48","div00.edt_buyerEno","value","ds_rc","BUYER_ENO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","div00.edt_buyerShrtBxplNm","value","ds_rc","BUYER_SHRT_BZPLNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item45","div00.edt_buyerNm","value","ds_rc","BUYER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","div00.edt_majLatc","value","ds_rc","MAJ_LATC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","div00.ta_rmk","value","ds_rc","RMK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","div00.ta_cslt","value","ds_rc","CSLT_RQ_CNTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","div00.chk_chrVd","value","ds_rc","CO_CHR_VD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","div00.chk_chrTotAgcy","value","ds_rc","CO_CHR_TOT_AGCY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","div00.chk_chrRev","value","ds_rc","CO_CHR_REV");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","div00.chk_chrMft","value","ds_rc","CO_CHR_MFT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","div00.edt_mProduct","value","ds_rc","MFO_LATC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","div00.edt_mSelPl","value","ds_rc","MSELPL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","div00.mae_byrSlam","value","ds_rc","BYR_SLAM");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_2111.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("OMG_DS_SC_2111.xfdl", "lib::comPolicy.xjs");
        this.registerScript("OMG_DS_SC_2111.xfdl", function() {
        //include "lib::comLib.xjs";
        //include "lib::comPolicy.xjs";

        this.OMG_DS_SC_2111_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        	
        	var param = [  
        	   {code:"HP",     dsName:"ds_hp",        selecttype:""},
        	   {code:"TEL",     dsName:"ds_tel",        selecttype:""}
        	];
        	
        	this.gfn_setPortalCommonCode(param);
        	this.div_privacy.txa_privacy.set_value(this.policyPrivacy);
        }

        
        this.btn_register_onclick = function(obj,e)
        {
        	this.insert();
        }

        this.grd_file_onheadclick = function(obj,e)
        {
        	if(e.cell == 0) {
        		this.gfn_setGridCheckAll(obj,e);
        	}
        }

        // 등록
        this.insert = function()
        {
        	if (!this.fn_validationCheck()) {
        		return;
        	}
        	if (!confirm("등록하시겠습니까?")) {
        		return;
        	}
        	
        	this.ds_rcev.copyData(this.div01.ds_rcev);
        	
        	this.ds_uploadresult.copyData(this.div01.ds_uploadresult);
        	
        	var chrr_telNo	= this.gfn_nullToEmpty(this.div00.cbo_chrwAtel.value)
        					+ this.gfn_nullToEmpty(this.div00.edt_chrwHtel.value)
        					+ this.gfn_nullToEmpty(this.div00.edt_chrwStel.value);
        	
        	var chrr_mpno	= this.gfn_nullToEmpty(this.div00.cbo_chrwMpsvno.value)
        					+ this.gfn_nullToEmpty(this.div00.edt_chrwMphno.value)
        					+ this.gfn_nullToEmpty(this.div00.edt_chrwMpsqno.value);
        	
        	var repm_telNo	= this.gfn_nullToEmpty(this.div00.cbo_repmAtel.value)
        					+ this.gfn_nullToEmpty(this.div00.edt_repmHtel.value)
        					+ this.gfn_nullToEmpty(this.div00.edt_repmStel.value);
        					
        	this.ds_rc.setColumn(this.ds_rc.rowcount - 1, "CHRR_TELNO", chrr_telNo);
        	this.ds_rc.setColumn(this.ds_rc.rowcount - 1, "CHRR_MPNO", chrr_mpno);
        	this.ds_rc.setColumn(this.ds_rc.rowcount - 1, "REPM_TELNO", repm_telNo);
        	this.ds_rc.setColumn(this.ds_rc.rowcount - 1, "CSLT_DSC", this.cbo_dsc.value);
        	

        	
        	var sSvcID        = "insert";
        	var sURL          = "svc::rest/bt/rqBrk/insertCsltRq";
        	var sInDatasets   = "ds_rc=ds_rc ds_rcev=ds_rcev ds_uploadresult=ds_uploadresult ds_uploadresult00=ds_uploadresult00";
        	var sOutDatasets  = "";
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	if (ErrorCode < 0) {
        		// this.gfn_getMessage("alert", ErrorMsg);
        		alert(ErrorMsg);
        		// this.gfn_getMessage("alert", "error.message.server.exception");

        		return;
        	}
        	
        	if (svcID == "insert") {
        		this.ds_rc.clear();
        		this.disable();
        		alert("정상적으로 등록되었습니다.\n\n진행결과보기 메뉴에서 진행상황을 조회할 수 있습니다.");
        	}
        }

        /* Validation Check */
        this.fn_validationCheck = function(){
            if(this.gfn_isNull(this.div00.edt_chrrNm.value)){
        		this.div00.edt_chrrNm.setFocus();
        		this.alert('신청자 기본정보중 신청자 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.div00.cbo_chrwAtel.value)){
        		this.div00.cbo_chrwAtel.setFocus();
        		this.alert('신청자 기본정보중 연락처 전화지역번호 값을 선택 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.div00.edt_chrwHtel.value)){
        		this.div00.edt_chrwHtel.setFocus();
        		this.alert('신청자 기본정보중 연락처 전화국번호 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.div00.edt_chrwStel.value)){
        		this.div00.edt_chrwStel.setFocus();
        		this.alert('신청자 기본정보중 연락처 전화일련번호 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.div00.edt_chrrEmail.value)){
        		this.div00.edt_chrrEmail.setFocus();
        		this.alert('신청자 기본정보중 Email 값을 입력 하세요.');
        		return false;
        	}else if(!this.gfn_checkEmail(this.div00.edt_chrrEmail.value)){
        		this.div00.edt_chrrEmail.setFocus();
        		this.alert('신청자 기본정보중 정확한 Email 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.div00.cbo_chrwMpsvno.value)){
        		this.div00.cbo_chrwMpsvno.setFocus();
        		this.alert('신청자 기본정보중 휴대전화서비스번호 값을 선택 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.div00.edt_chrwMphno.value)){
        		this.div00.edt_chrwMphno.setFocus();
        		this.alert('신청자 기본정보중 휴대전화국번호 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.div00.edt_chrwMpsqno.value)){
        		this.div00.edt_chrwMpsqno.setFocus();
        		this.alert('신청자 기본정보중 휴대전화일련번호 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.div00.mae_bzno.value)){
        		this.div00.mae_bzno.setFocus();
        		this.alert('회사 기본정보중 사업자등록번호 값을 입력 하세요.');
        		return false;
        	}else if(this.gfn_length(this.gfn_replace(this.div00.mae_bzno.value, " ", "")) < 10){
        		this.div00.mae_bzno.setFocus();
        		this.alert('회사 기본정보중 사업자등록번호 값 10자리를 확인 후 다시 입력 하세요.');
        		return false;
        		
        	}else {	
        	    var strNumb = this.div00.mae_bzno.value ;
        	    
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
        			this.div00.mae_bzno.setFocus();
        			return false; 
                } 
        		
        	}
        	if(this.gfn_isNull(this.div00.edt_conm.value)){
        		this.div00.edt_conm.setFocus();
        		this.alert('회사 기본정보중 업체명 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.div00.edt_repm.value)){
        		this.div00.edt_repm.setFocus();
        		this.alert('회사 기본정보중 대표자 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.div00.cbo_repmAtel.value)){
        		this.div00.cbo_repmAtel.setFocus();
        		this.alert('회사 기본정보중 대표자연락처 전화지역번호 값을 선택 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.div00.edt_repmHtel.value)){
        		this.div00.edt_repmHtel.setFocus();
        		this.alert('회사 기본정보중 대표자연락처 전화국번호 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.div00.edt_repmStel.value)){
        		this.div00.edt_repmStel.setFocus();
        		this.alert('회사 기본정보중 대표자연락처 전화일련번호 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.div00.edt_biztp.value)){
        		this.div00.edt_biztp.setFocus();
        		this.alert('회사 기본정보중 업태 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.div00.edt_itm.value)){
        		this.div00.edt_itm.setFocus();
        		this.alert('회사 기본정보중 종목 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.div00.mae_byrSlam.value)){
        		this.div00.mae_byrSlam.setFocus();
        		this.alert('회사 기본정보중 연간매출 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.div00.edt_mSelPl.value)){
        		this.div00.edt_mSelPl.setFocus();
        		this.alert('회사 기본정보중 주판매처 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.div00.edt_mProduct.value)){
        		this.div00.edt_mProduct.setFocus();
        		this.alert('회사 기본정보중 주력품목 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.div00.chk_chrMft.value) && this.gfn_isNull(this.div00.chk_chrRev.value) && this.gfn_isNull(this.div00.chk_chrTotAgcy.value) && this.gfn_isNull(this.div00.chk_chrVd.value)){
        		this.div00.chk_chrMft.setFocus();
        		this.alert('회사 기본정보중 회사성격 값을 최소 하나 이상 선택 하세요.');
        		return false;
        	}else if(this.div00.chk_chrMft.value==0 && this.div00.chk_chrRev.value==0 && this.div00.chk_chrTotAgcy.value==0 && this.div00.chk_chrVd.value==0){
        		this.div00.chk_chrMft.setFocus();
        		this.alert('회사 기본정보중 회사성격 값을 최소 하나 이상 선택 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.div00.edt_majLatc.value)){
        		this.div00.edt_majLatc.setFocus();
        		this.alert('회사 기본정보중 제목(업체명,주품목) 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.div00.ta_cslt.value)){
        		this.div00.ta_cslt.setFocus();
        		this.alert('회사 기본정보중 상담신청내용(업체 및 상품소개) 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.div00.ta_rmk.value)){
        		this.div00.ta_rmk.setFocus();
        		this.alert('회사 기본정보중 비고 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.div00.edt_dongUp.value)){
        		this.div00.btn_addr.setFocus();
        		this.alert('주소를 검색해서 주소 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.div00.edt_dongBw.value)){
        		this.div00.edt_dongBw.setFocus();
        		this.alert('회사 기본정보중 상세주소 값을 입력 하세요.');
        		return false;
        	}
        	
        	if (this.div_privacy.chk_agree.value == false) {
        		this.div_privacy.chk_agree.setFocus();
        		this.alert('개인 정보 수집 및 이용에 동의해 주시기 바랍니다.');
        		return false;
        	}
        	
        	var validationCheck = this.div01.fn_validationCheck();
        	
        	return validationCheck;
        }

        this.mae_bzno_onlbuttonup = function(obj,e)
        {
        	if(this.gfn_isNull(obj.value)){
        		this.div00.mae_bzno.setCaretPos(0);
        		//trace(this.mae_bzno.value);
        	}
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        //gfn_setCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	//콤보에 최상단Row보이도록 설정
        	this.div00.cbo_chrwAtel.set_index(0);
        	this.div00.cbo_chrwMpsvno.set_index(0);
        	this.div00.cbo_repmAtel.set_index(0);
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
        	
        	for(var i = this.ds_uploadresult00.getRowCount()-1; i >= 0; i--) {
        	
        		if(this.ds_uploadresult00.getColumn(i, "CHK") == 1)
        		{
        			this.ds_uploadresult00.deleteRow(i);
        		}
        	}
        	
        }

        this.btn_addr_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"U", dsArg:this.ds_rsclist};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";       
        	this.gfn_openPopup("zipCode","OMG.PT::OMG_DS_SC_9010.xfdl",oArg,sOption,sPopupCallBack);
        	//this.gfn_openPopup("zipCode", "common::AddressDaum.xfdl", oArg, sOption, sPopupCallBack);
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

        this.fn_popupAfter = function(strId,strVal)
        {
        	if (strId == "zipCode") {
        		this.fn_addr(strVal);
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
        			this.ds_rc.setColumn(0,"FZIP",  fn_addr1[1]) ;
        		
        		}else if( fn_addr1[0] == "RZIP"         ){

        			//뒷자리우편번호
        			this.ds_rc.setColumn(0,"RZIP",  fn_addr1[1]) ;
        			
        		}else if( fn_addr1[0] == "ZIP_SQNO"     ){
        			
        			//우편번호일련번호
        			this.ds_rc.setColumn(0,"ZIP_SQNO",  fn_addr1[1]) ;
        			
        		}else if( fn_addr1[0] == "DONGUP"       ){

        			//동이상주소
        			this.ds_rc.setColumn(0,"DONGUP",  fn_addr1[1]) ;
        			
        		}else if( fn_addr1[0] == "DONGBW"       ){

        			//동이하주소
        			this.ds_rc.setColumn(0,"DONGBW",  fn_addr1[1]) ;

        		}
        	  }
        }

        this.fn_btnEnable = function(enable)
        {
        	this.btn_register.set_enable(enable);
        	this.div_privacy.btn_insert.set_enable(enable);
        	this.div_privacy.btn_register01.set_enable(enable);
        }

        /* 비활성화 */
        this.disable = function()
        {
        	this.btn_register.set_enable(false);
        	this.div00.set_enable(false);
        	this.div01.set_enable(false);
        }

        this.cbo_dsc_onitemchanged = function(obj,e)
        {	
        	this.div00.set_enable(true);
        	this.div01.set_visible(true);
        	this.div01.set_enable(true);
        	
        	if (this.cbo_dsc.value == "201") {
        		this.div01.set_url("OMG.BT::OMG_DS_SC_21111.xfdl");
        		this.div01.set_height(950);
        	}else if (this.cbo_dsc.value == "202") {
        		this.div01.set_url("OMG.BT::OMG_DS_SC_21112.xfdl");
        		this.div01.set_height(1000);
        	}else if (this.cbo_dsc.value == "203") {
        		this.div01.set_url("OMG.BT::OMG_DS_SC_21113.xfdl");
        		this.div01.set_height(1100);
        	}
        	
        	var pt = Number(this.div01.top) + Number(this.div01.height) + 10;
        	this.div_privacy.set_top(pt);
        	this.fn_btnEnable(false);
        	
        	this.div00.mae_sum00.set_value(0);
        	this.resetScroll() ;
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_uploadresult.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.ds_uploadresult00.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.ds_uploadresult01.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.addEventHandler("onload", this.OMG_DS_SC_2111_onload, this);
            this.div00.mae_bzno.addEventHandler("onlbuttonup", this.mae_bzno_onlbuttonup, this);
            this.div00.btn_addr.addEventHandler("onclick", this.btn_addr_onclick, this);
            this.div00.grd_file.addEventHandler("onheadclick", this.grd_file_onheadclick, this);
            this.div00.chk_chrMft.addEventHandler("onchanged", this.chk_chrMft_onchanged, this);
            this.div00.FileUpload10.addEventHandler("onsuccess", this.FileUpload10_onsuccess, this);
            this.div00.FileUpload10.addEventHandler("onerror", this.FileUpload10_onerror, this);
            this.div00.FileUpload10.addEventHandler("onitemchanged", this.FileUpload10_onitemchanged, this);
            this.div00.btn_fileDel.addEventHandler("onclick", this.btn_fileDel_onclick, this);
            this.btn_register.addEventHandler("onclick", this.btn_register_onclick, this);
            this.cbo_dsc.addEventHandler("onitemchanged", this.cbo_dsc_onitemchanged, this);
            this.div_privacy.btn_register01.addEventHandler("onclick", this.btn_register_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_2111.xfdl");

       
    };
}
)();
