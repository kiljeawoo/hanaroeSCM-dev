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
                this.set_name("OMG_DS_SC_1114");
                this.set_titletext("상담신청내역팝업");
                this.set_scrollbars("autovert");
                this._setFormPosition(0,0,950,490);
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
            obj._setContents("<ColumnInfo><Column id=\"CSLT_RQ_NO\" type=\"STRING\" size=\"256\" sumtext=\"상담신청번호\"/><Column id=\"BZNO\" type=\"STRING\" size=\"256\" sumtext=\"사업자등록번호\"/><Column id=\"ST_DT\" type=\"STRING\" size=\"256\" sumtext=\"신청일자\"/><Column id=\"CHRRNM\" type=\"STRING\" size=\"256\" sumtext=\"담당자\"/><Column id=\"BUYER_SHRT_BZPLNM\" type=\"STRING\" size=\"256\" sumtext=\"바이어사업장명\"/><Column id=\"BUYER_CHRG_BSNNM\" type=\"STRING\" size=\"256\" sumtext=\"바이어담당업무명\"/><Column id=\"BUYER_NM\" type=\"STRING\" size=\"256\" sumtext=\"바이어명\"/><Column id=\"CHRW_ATEL\" type=\"STRING\" size=\"256\" sumtext=\"담당자 전화지역번호\"/><Column id=\"CHRW_HTEL\" type=\"STRING\" size=\"256\" sumtext=\"담당자 전화국번호\"/><Column id=\"CHRW_STEL\" type=\"STRING\" size=\"256\" sumtext=\"담당자 전화일련번호\"/><Column id=\"CHRR_EMAIL\" type=\"STRING\" size=\"256\" sumtext=\"담당자 Email\"/><Column id=\"CHRR_MPNO\" type=\"STRING\" size=\"256\" sumtext=\"담당자 휴대전화\"/><Column id=\"CHRW_MPSVNO\" type=\"STRING\" size=\"256\" sumtext=\"담당자 휴대전화서비스번호\"/><Column id=\"CHRW_MPHNO\" type=\"STRING\" size=\"256\" sumtext=\"담당자 휴대전화국번호\"/><Column id=\"CHRW_MPSQNO\" type=\"STRING\" size=\"256\" sumtext=\"담당자 휴대전화일련번호\"/><Column id=\"CONM\" type=\"STRING\" size=\"256\" sumtext=\"업체명\"/><Column id=\"REPM\" type=\"STRING\" size=\"256\" sumtext=\"대표자\"/><Column id=\"REPM_ATEL\" type=\"STRING\" size=\"256\" sumtext=\"대표자 전화지역번호\"/><Column id=\"REPM_HTEL\" type=\"STRING\" size=\"256\" sumtext=\"대표자 전화국번호\"/><Column id=\"REPM_STEL\" type=\"STRING\" size=\"256\" sumtext=\"대표자 전화일련번호\"/><Column id=\"BIZTP\" type=\"STRING\" size=\"256\" sumtext=\"업태\"/><Column id=\"ITM\" type=\"STRING\" size=\"256\" sumtext=\"종목\"/><Column id=\"FZIP\" type=\"STRING\" size=\"256\" sumtext=\"앞자리우편번호\"/><Column id=\"RZIP\" type=\"STRING\" size=\"256\" sumtext=\"뒷자리우편번호\"/><Column id=\"ZIP_SQNO\" type=\"STRING\" size=\"256\" sumtext=\"우편번호일련번호\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"256\" sumtext=\"동이상주소\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"256\" sumtext=\"동이하주소\"/><Column id=\"BYR_SLAM\" type=\"STRING\" size=\"256\" sumtext=\"연간매출금액\"/><Column id=\"MSELPL\" type=\"STRING\" size=\"256\" sumtext=\"주판매처\"/><Column id=\"MFO_LATC\" type=\"STRING\" size=\"256\" sumtext=\"주력품목\"/><Column id=\"CO_CHR_MFT\" type=\"STRING\" size=\"256\" sumtext=\"회사성격 제조\"/><Column id=\"CO_CHR_REV\" type=\"STRING\" size=\"256\" sumtext=\"회사성격 수입\"/><Column id=\"CO_CHR_TOT_AGCY\" type=\"STRING\" size=\"256\" sumtext=\"회사성격 총판/대리점\"/><Column id=\"CO_CHR_VD\" type=\"STRING\" size=\"256\" sumtext=\"회사성격 벤더\"/><Column id=\"MAJ_LATC\" type=\"STRING\" size=\"256\" sumtext=\"주요품목\"/><Column id=\"CSLT_RQ_CNTN\" type=\"STRING\" size=\"256\" sumtext=\"상담신청내용\"/><Column id=\"STS\" type=\"STRING\" size=\"256\" sumtext=\"상태\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\" sumtext=\"비고\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\" sumtext=\"최초등록일시\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\" sumtext=\"최초등록자\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\" sumtext=\"최종변경일시\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\" sumtext=\"최종변경자\"/></ColumnInfo><Rows><Row><Col id=\"BZNO\"/><Col id=\"CSLT_RQ_NO\"/><Col id=\"ST_DT\"/><Col id=\"CHRRNM\"/><Col id=\"BUYER_SHRT_BZPLNM\"/><Col id=\"BUYER_CHRG_BSNNM\"/><Col id=\"BUYER_NM\"/><Col id=\"CHRW_ATEL\"/><Col id=\"CHRW_HTEL\"/><Col id=\"CHRW_STEL\"/><Col id=\"CHRR_EMAIL\"/><Col id=\"CHRR_MPNO\"/><Col id=\"CHRW_MPSVNO\"/><Col id=\"CHRW_MPHNO\"/><Col id=\"CHRW_MPSQNO\"/><Col id=\"CONM\"/><Col id=\"REPM\"/><Col id=\"REPM_ATEL\"/><Col id=\"REPM_HTEL\"/><Col id=\"REPM_STEL\"/><Col id=\"BIZTP\"/><Col id=\"ITM\"/><Col id=\"FZIP\"/><Col id=\"RZIP\"/><Col id=\"ZIP_SQNO\"/><Col id=\"DONGUP\"/><Col id=\"DONGBW\"/><Col id=\"BYR_SLAM\"/><Col id=\"MSELPL\"/><Col id=\"MFO_LATC\"/><Col id=\"CO_CHR_MFT\"/><Col id=\"CO_CHR_REV\"/><Col id=\"CO_CHR_TOT_AGCY\"/><Col id=\"CO_CHR_VD\"/><Col id=\"MAJ_LATC\"/><Col id=\"CSLT_RQ_CNTN\"/><Col id=\"STS\"/><Col id=\"RMK\"/><Col id=\"FSRG_DTM\"/><Col id=\"FS_RGM\"/><Col id=\"LSCHG_DTM\"/><Col id=\"LS_CHGM\"/></Row></Rows>");
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

            obj = new Dataset("ds_registerList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CSLT_RQ_NO\" type=\"STRING\" size=\"256\" sumtext=\"상담신청번호\"/><Column id=\"BZNO\" type=\"STRING\" size=\"256\" sumtext=\"사업자등록번호\"/><Column id=\"ST_DT\" type=\"STRING\" size=\"256\" sumtext=\"신청일자\"/><Column id=\"CHRRNM\" type=\"STRING\" size=\"256\" sumtext=\"담당자\"/><Column id=\"BUYER_SHRT_BZPLNM\" type=\"STRING\" size=\"256\" sumtext=\"바이어사업장명\"/><Column id=\"BUYER_CHRG_BSNNM\" type=\"STRING\" size=\"256\" sumtext=\"바이어담당업무명\"/><Column id=\"BUYER_NM\" type=\"STRING\" size=\"256\" sumtext=\"바이어명\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"CHRR_TELNO\" type=\"STRING\" size=\"256\" sumtext=\"담당자 전화지역번호\"/><Column id=\"CHRR_EMAIL\" type=\"STRING\" size=\"256\" sumtext=\"담당자 Email\"/><Column id=\"CHRR_MPNO\" type=\"STRING\" size=\"256\" sumtext=\"담당자 휴대전화\"/><Column id=\"CONM\" type=\"STRING\" size=\"256\" sumtext=\"업체명\"/><Column id=\"REPM\" type=\"STRING\" size=\"256\" sumtext=\"대표자\"/><Column id=\"REPM_TELNO\" type=\"STRING\" size=\"256\" sumtext=\"대표자 전화지역번호\"/><Column id=\"BIZTP\" type=\"STRING\" size=\"256\" sumtext=\"업태\"/><Column id=\"ITM\" type=\"STRING\" size=\"256\" sumtext=\"종목\"/><Column id=\"FZIP\" type=\"STRING\" size=\"256\" sumtext=\"앞자리우편번호\"/><Column id=\"RZIP\" type=\"STRING\" size=\"256\" sumtext=\"뒷자리우편번호\"/><Column id=\"ZIP_SQNO\" type=\"STRING\" size=\"256\" sumtext=\"우편번호일련번호\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"256\" sumtext=\"동이상주소\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"256\" sumtext=\"동이하주소\"/><Column id=\"BYR_SLAM\" type=\"STRING\" size=\"256\" sumtext=\"연간매출금액\"/><Column id=\"MSELPL\" type=\"STRING\" size=\"256\" sumtext=\"주판매처\"/><Column id=\"MFO_LATC\" type=\"STRING\" size=\"256\" sumtext=\"주력품목\"/><Column id=\"CO_CHR_MFT\" type=\"STRING\" size=\"256\" sumtext=\"회사성격 제조\"/><Column id=\"CO_CHR_REV\" type=\"STRING\" size=\"256\" sumtext=\"회사성격 수입\"/><Column id=\"CO_CHR_TOT_AGCY\" type=\"STRING\" size=\"256\" sumtext=\"회사성격 총판/대리점\"/><Column id=\"CO_CHR_VD\" type=\"STRING\" size=\"256\" sumtext=\"회사성격 벤더\"/><Column id=\"MAJ_LATC\" type=\"STRING\" size=\"256\" sumtext=\"주요품목\"/><Column id=\"CSLT_RQ_CNTN\" type=\"STRING\" size=\"256\" sumtext=\"상담신청내용\"/><Column id=\"STS\" type=\"STRING\" size=\"256\" sumtext=\"상태\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\" sumtext=\"비고\"/><Column id=\"EVL_HDNG_A1\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_A2\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_A3\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_A4\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_A5\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_A6\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_B1\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_B11\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_B2\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_B3\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_B4\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_B5\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNGCN\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\" sumtext=\"최초등록일시\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\" sumtext=\"최초등록자\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\" sumtext=\"최종변경일시\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\" sumtext=\"최종변경자\"/><Column id=\"CSLT_CLS\" type=\"STRING\" size=\"256\"/><Column id=\"CSLT_CTG1\" type=\"STRING\" size=\"256\"/><Column id=\"CSLT_CTG2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_uploadresult02", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DCM_C\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"BIGDECIMAL\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_csltManager", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"CSLT_MANAGER_LIST\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ctg1", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_LCLFNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">130</Col><Col id=\"WRS_LCLFNM\">생활용품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">140</Col><Col id=\"WRS_LCLFNM\">가전/가구/인테리어</Col></Row><Row><Col id=\"NA_WRS_LCLC\">150</Col><Col id=\"WRS_LCLFNM\">문화/레포츠</Col></Row><Row><Col id=\"NA_WRS_LCLC\">160</Col><Col id=\"WRS_LCLFNM\">패션/침구</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ctg2", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_LCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_MCLFNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">034</Col><Col id=\"WRS_MCLFNM\">HMR(간편가정식)</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">011</Col><Col id=\"WRS_MCLFNM\">가루식품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">023</Col><Col id=\"WRS_MCLFNM\">건강식품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">024</Col><Col id=\"WRS_MCLFNM\">건강식품(한약재)</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">032</Col><Col id=\"WRS_MCLFNM\">건해산물</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">019</Col><Col id=\"WRS_MCLFNM\">과자</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">031</Col><Col id=\"WRS_MCLFNM\">김치·절임식품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">025</Col><Col id=\"WRS_MCLFNM\">담배</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">012</Col><Col id=\"WRS_MCLFNM\">대용식품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">030</Col><Col id=\"WRS_MCLFNM\">두부·묵류</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">010</Col><Col id=\"WRS_MCLFNM\">면류</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">015</Col><Col id=\"WRS_MCLFNM\">병·통조림</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">020</Col><Col id=\"WRS_MCLFNM\">빵·케익·떡</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">022</Col><Col id=\"WRS_MCLFNM\">아이스크림류</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">021</Col><Col id=\"WRS_MCLFNM\">안주류</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">029</Col><Col id=\"WRS_MCLFNM\">어육가공</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">013</Col><Col id=\"WRS_MCLFNM\">유아식품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">026</Col><Col id=\"WRS_MCLFNM\">유제품(냉장)</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">028</Col><Col id=\"WRS_MCLFNM\">육가공(냉동)</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">027</Col><Col id=\"WRS_MCLFNM\">육가공(냉장)</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">017</Col><Col id=\"WRS_MCLFNM\">음료</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">033</Col><Col id=\"WRS_MCLFNM\">의약외품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">014</Col><Col id=\"WRS_MCLFNM\">조미식품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">018</Col><Col id=\"WRS_MCLFNM\">주류</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">016</Col><Col id=\"WRS_MCLFNM\">커피·차류</Col></Row><Row><Col id=\"NA_WRS_LCLC\">130</Col><Col id=\"WRS_LCLFNM\">생활용품</Col><Col id=\"NA_WRS_MCLC\">010</Col><Col id=\"WRS_MCLFNM\">건강·미용</Col></Row><Row><Col id=\"NA_WRS_LCLC\">130</Col><Col id=\"WRS_LCLFNM\">생활용품</Col><Col id=\"NA_WRS_MCLC\">012</Col><Col id=\"WRS_MCLFNM\">세탁·세정제</Col></Row><Row><Col id=\"NA_WRS_LCLC\">130</Col><Col id=\"WRS_LCLFNM\">생활용품</Col><Col id=\"NA_WRS_MCLC\">015</Col><Col id=\"WRS_MCLFNM\">의약외품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">130</Col><Col id=\"WRS_LCLFNM\">생활용품</Col><Col id=\"NA_WRS_MCLC\">013</Col><Col id=\"WRS_MCLFNM\">일상가정용품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">130</Col><Col id=\"WRS_LCLFNM\">생활용품</Col><Col id=\"NA_WRS_MCLC\">011</Col><Col id=\"WRS_MCLFNM\">제지류</Col></Row><Row><Col id=\"NA_WRS_LCLC\">130</Col><Col id=\"WRS_LCLFNM\">생활용품</Col><Col id=\"NA_WRS_MCLC\">014</Col><Col id=\"WRS_MCLFNM\">주방용품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">130</Col><Col id=\"WRS_LCLFNM\">생활용품</Col><Col id=\"NA_WRS_MCLC\">017</Col><Col id=\"WRS_MCLFNM\">혼수주방용품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">140</Col><Col id=\"WRS_LCLFNM\">가전·가구·인테리어</Col><Col id=\"NA_WRS_MCLC\">017</Col><Col id=\"WRS_MCLFNM\">DIY</Col></Row><Row><Col id=\"NA_WRS_LCLC\">140</Col><Col id=\"WRS_LCLFNM\">가전·가구·인테리어</Col><Col id=\"NA_WRS_MCLC\">015</Col><Col id=\"WRS_MCLFNM\">가구</Col></Row><Row><Col id=\"NA_WRS_LCLC\">140</Col><Col id=\"WRS_LCLFNM\">가전·가구·인테리어</Col><Col id=\"NA_WRS_MCLC\">018</Col><Col id=\"WRS_MCLFNM\">농업용자재</Col></Row><Row><Col id=\"NA_WRS_LCLC\">140</Col><Col id=\"WRS_LCLFNM\">가전·가구·인테리어</Col><Col id=\"NA_WRS_MCLC\">010</Col><Col id=\"WRS_MCLFNM\">생활가전</Col></Row><Row><Col id=\"NA_WRS_LCLC\">140</Col><Col id=\"WRS_LCLFNM\">가전·가구·인테리어</Col><Col id=\"NA_WRS_MCLC\">012</Col><Col id=\"WRS_MCLFNM\">영상·음향가전</Col></Row><Row><Col id=\"NA_WRS_LCLC\">140</Col><Col id=\"WRS_LCLFNM\">가전·가구·인테리어</Col><Col id=\"NA_WRS_MCLC\">016</Col><Col id=\"WRS_MCLFNM\">인테리어</Col></Row><Row><Col id=\"NA_WRS_LCLC\">140</Col><Col id=\"WRS_LCLFNM\">가전·가구·인테리어</Col><Col id=\"NA_WRS_MCLC\">011</Col><Col id=\"WRS_MCLFNM\">주방가전</Col></Row><Row><Col id=\"NA_WRS_LCLC\">140</Col><Col id=\"WRS_LCLFNM\">가전·가구·인테리어</Col><Col id=\"NA_WRS_MCLC\">014</Col><Col id=\"WRS_MCLFNM\">컴퓨터</Col></Row><Row><Col id=\"NA_WRS_LCLC\">140</Col><Col id=\"WRS_LCLFNM\">가전·가구·인테리어</Col><Col id=\"NA_WRS_MCLC\">013</Col><Col id=\"WRS_MCLFNM\">통신·사무용가전</Col></Row><Row><Col id=\"NA_WRS_LCLC\">150</Col><Col id=\"WRS_LCLFNM\">문화·레포츠</Col><Col id=\"NA_WRS_MCLC\">020</Col><Col id=\"WRS_MCLFNM\">골프</Col></Row><Row><Col id=\"NA_WRS_LCLC\">150</Col><Col id=\"WRS_LCLFNM\">문화·레포츠</Col><Col id=\"NA_WRS_MCLC\">018</Col><Col id=\"WRS_MCLFNM\">등산·레져</Col></Row><Row><Col id=\"NA_WRS_LCLC\">150</Col><Col id=\"WRS_LCLFNM\">문화·레포츠</Col><Col id=\"NA_WRS_MCLC\">010</Col><Col id=\"WRS_MCLFNM\">문구·사무용품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">150</Col><Col id=\"WRS_LCLFNM\">문화·레포츠</Col><Col id=\"NA_WRS_MCLC\">012</Col><Col id=\"WRS_MCLFNM\">서적·음반</Col></Row><Row><Col id=\"NA_WRS_LCLC\">150</Col><Col id=\"WRS_LCLFNM\">문화·레포츠</Col><Col id=\"NA_WRS_MCLC\">019</Col><Col id=\"WRS_MCLFNM\">스포츠용품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">150</Col><Col id=\"WRS_LCLFNM\">문화·레포츠</Col><Col id=\"NA_WRS_MCLC\">015</Col><Col id=\"WRS_MCLFNM\">악기</Col></Row><Row><Col id=\"NA_WRS_LCLC\">150</Col><Col id=\"WRS_LCLFNM\">문화·레포츠</Col><Col id=\"NA_WRS_MCLC\">014</Col><Col id=\"WRS_MCLFNM\">애완·원예</Col></Row><Row><Col id=\"NA_WRS_LCLC\">150</Col><Col id=\"WRS_LCLFNM\">문화·레포츠</Col><Col id=\"NA_WRS_MCLC\">011</Col><Col id=\"WRS_MCLFNM\">완구</Col></Row><Row><Col id=\"NA_WRS_LCLC\">150</Col><Col id=\"WRS_LCLFNM\">문화·레포츠</Col><Col id=\"NA_WRS_MCLC\">013</Col><Col id=\"WRS_MCLFNM\">자동차용품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">150</Col><Col id=\"WRS_LCLFNM\">문화·레포츠</Col><Col id=\"NA_WRS_MCLC\">021</Col><Col id=\"WRS_MCLFNM\">장제용품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">150</Col><Col id=\"WRS_LCLFNM\">문화·레포츠</Col><Col id=\"NA_WRS_MCLC\">016</Col><Col id=\"WRS_MCLFNM\">종교용품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">150</Col><Col id=\"WRS_LCLFNM\">문화·레포츠</Col><Col id=\"NA_WRS_MCLC\">017</Col><Col id=\"WRS_MCLFNM\">표식및광고용품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">160</Col><Col id=\"WRS_LCLFNM\">패션·침구</Col><Col id=\"NA_WRS_MCLC\">014</Col><Col id=\"WRS_MCLFNM\">가방</Col></Row><Row><Col id=\"NA_WRS_LCLC\">160</Col><Col id=\"WRS_LCLFNM\">패션·침구</Col><Col id=\"NA_WRS_MCLC\">018</Col><Col id=\"WRS_MCLFNM\">귀금속</Col></Row><Row><Col id=\"NA_WRS_LCLC\">160</Col><Col id=\"WRS_LCLFNM\">패션·침구</Col><Col id=\"NA_WRS_MCLC\">013</Col><Col id=\"WRS_MCLFNM\">섬유용품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">160</Col><Col id=\"WRS_LCLFNM\">패션·침구</Col><Col id=\"NA_WRS_MCLC\">012</Col><Col id=\"WRS_MCLFNM\">스포츠웨어</Col></Row><Row><Col id=\"NA_WRS_LCLC\">160</Col><Col id=\"WRS_LCLFNM\">패션·침구</Col><Col id=\"NA_WRS_MCLC\">016</Col><Col id=\"WRS_MCLFNM\">시계</Col></Row><Row><Col id=\"NA_WRS_LCLC\">160</Col><Col id=\"WRS_LCLFNM\">패션·침구</Col><Col id=\"NA_WRS_MCLC\">015</Col><Col id=\"WRS_MCLFNM\">신발</Col></Row><Row><Col id=\"NA_WRS_LCLC\">160</Col><Col id=\"WRS_LCLFNM\">패션·침구</Col><Col id=\"NA_WRS_MCLC\">017</Col><Col id=\"WRS_MCLFNM\">안경</Col></Row><Row><Col id=\"NA_WRS_LCLC\">160</Col><Col id=\"WRS_LCLFNM\">패션·침구</Col><Col id=\"NA_WRS_MCLC\">011</Col><Col id=\"WRS_MCLFNM\">웨딩</Col></Row><Row><Col id=\"NA_WRS_LCLC\">160</Col><Col id=\"WRS_LCLFNM\">패션·침구</Col><Col id=\"NA_WRS_MCLC\">010</Col><Col id=\"WRS_MCLFNM\">의류</Col></Row><Row><Col id=\"NA_WRS_LCLC\">160</Col><Col id=\"WRS_LCLFNM\">패션·침구</Col><Col id=\"NA_WRS_MCLC\">021</Col><Col id=\"WRS_MCLFNM\">침구</Col></Row><Row><Col id=\"NA_WRS_LCLC\">160</Col><Col id=\"WRS_LCLFNM\">패션·침구</Col><Col id=\"NA_WRS_MCLC\">019</Col><Col id=\"WRS_MCLFNM\">피혁용품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">160</Col><Col id=\"WRS_LCLFNM\">패션·침구</Col><Col id=\"NA_WRS_MCLC\">020</Col><Col id=\"WRS_MCLFNM\">한복</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rdo03", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"point\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"level\">0</Col><Col id=\"point\"/></Row><Row><Col id=\"level\">5</Col><Col id=\"point\"/></Row><Row><Col id=\"level\">10</Col><Col id=\"point\"/></Row><Row><Col id=\"point\"/><Col id=\"level\">20</Col></Row><Row><Col id=\"point\"/><Col id=\"level\">25</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rdo01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"point\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"level\">5</Col><Col id=\"point\"/></Row><Row><Col id=\"level\">10</Col><Col id=\"point\"/></Row><Row><Col id=\"level\">15</Col><Col id=\"point\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rdo02", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"point\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"level\">0</Col><Col id=\"point\"/></Row><Row><Col id=\"level\">5</Col><Col id=\"point\"/></Row><Row><Col id=\"level\">10</Col><Col id=\"point\"/></Row><Row><Col id=\"level\">15</Col><Col id=\"point\"/></Row><Row><Col id=\"level\">20</Col><Col id=\"point\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static04", "absolute", "124", "335", null, "29", "15", null, this);
            obj.set_taborder("603");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static200", "absolute", "124", "460", null, "29", "15", null, this);
            obj.set_taborder("533");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "124", "572", null, "29", "15", null, this);
            obj.set_taborder("167");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "124", "628", null, "45", "15", null, this);
            obj.set_taborder("171");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "124", "600", null, "29", "15", null, this);
            obj.set_taborder("170");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static50", "absolute", "124", "516", null, "29", "15", null, this);
            obj.set_taborder("284");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "124", "432", null, "29", "15", null, this);
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
            obj.set_text("신청자 기본정보<fc v='#ff0000ff'>*</fc>");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_usedecorate("true");
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

            obj = new Static("Static21", "absolute", "15", "283", "301", "21", null, null, this);
            obj.set_taborder("130");
            obj.set_text("바이어 기본정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "124", "404", null, "29", "15", null, this);
            obj.set_taborder("131");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "15", "404", "110", "29", null, null, this);
            obj.set_taborder("132");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "15", "432", "110", "29", null, null, this);
            obj.set_taborder("133");
            obj.set_text("대표자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "124", "488", null, "29", "15", null, this);
            obj.set_taborder("135");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "423", "460", "110", "29", null, null, this);
            obj.set_taborder("136");
            obj.set_text("종목");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_itm", "absolute", "536", "464", null, "21", "19", null, this);
            obj.set_taborder("138");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "15", "516", "110", "57", null, null, this);
            obj.set_taborder("153");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "423", "572", "110", "29", null, null, this);
            obj.set_taborder("165");
            obj.set_text("주판매처");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static61", "absolute", "15", "628", "110", "45", null, null, this);
            obj.set_taborder("191");
            obj.set_text("제목\r\n(업체명,주품목)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static68", "absolute", "15", "600", "110", "29", null, null, this);
            obj.set_taborder("207");
            obj.set_text("주력품목");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static75", "absolute", "15", "572", "110", "29", null, null, this);
            obj.set_taborder("223");
            obj.set_text("연간매출");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static76", "absolute", "423", "600", "110", "29", null, null, this);
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

            obj = new Static("Static19", "absolute", "423", "404", "110", "29", null, null, this);
            obj.set_taborder("297");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_bzno", "absolute", "128", "408", "151", "21", null, null, this);
            obj.set_taborder("298");
            obj.set_type("string");
            obj.set_mask("###-##-#####");
            obj.set_limitbymask("integer");
            obj.set_trimtype("right");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "423", "432", "110", "29", null, null, this);
            obj.set_taborder("299");
            obj.set_text("대표자연락처");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "15", "460", "110", "29", null, null, this);
            obj.set_taborder("300");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_repmAtel", "absolute", "536", "436", "51", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("301");
            obj.set_innerdataset("@ds_tel");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_index("-1");

            obj = new Static("Static27", "absolute", "648", "436", "9", "21", null, null, this);
            obj.set_taborder("302");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "589", "436", "9", "21", null, null, this);
            obj.set_taborder("303");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_conm", "absolute", "536", "408", null, "21", "19", null, this);
            obj.set_taborder("306");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_repm", "absolute", "128", "436", "292", "21", null, null, this);
            obj.set_taborder("307");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_biztp", "absolute", "128", "464", "292", "21", null, null, this);
            obj.set_taborder("308");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "15", "488", "110", "29", null, null, this);
            obj.set_taborder("309");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dongUp", "absolute", "128", "520", null, "21", "19", null, this);
            obj.set_taborder("310");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("80");
            this.addChild(obj.name, obj);

            obj = new Static("Static142", "absolute", "188", "492", "9", "21", null, null, this);
            obj.set_taborder("313");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addr", "absolute", "258", "492", "21", "21", null, null, this);
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

            obj = new MaskEdit("mae_byrSlam", "absolute", "128", "576", "150", "21", null, null, this);
            obj.set_taborder("319");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "283", "576", "82", "21", null, null, this);
            obj.set_taborder("320");
            obj.set_text("(단위 : 억원)");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mSelPl", "absolute", "536", "576", null, "21", "19", null, this);
            obj.set_taborder("321");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mProduct", "absolute", "128", "604", "292", "21", null, null, this);
            obj.set_taborder("322");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_chrMft", "absolute", "540", "604", "53", "21", null, null, this);
            obj.set_taborder("323");
            obj.set_text("제조");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_chrRev", "absolute", "598", "604", "53", "21", null, null, this);
            obj.set_taborder("324");
            obj.set_text("수입");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_chrTotAgcy", "absolute", "655", "604", "97", "21", null, null, this);
            obj.set_taborder("325");
            obj.set_text("총판/대리점");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_chrVd", "absolute", "754", "604", "57", "21", null, null, this);
            obj.set_taborder("326");
            obj.set_text("벤더");
            obj.set_truevalue("4");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "15", "672", "110", "100", null, null, this);
            obj.set_taborder("327");
            obj.set_text("상담신청내용\r\n(업체 및 상품\r\n소개)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "124", "672", null, "100", "15", null, this);
            obj.set_taborder("328");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new TextArea("ta_cslt", "absolute", "128", "676", null, "92", "19", null, this);
            obj.set_taborder("329");
            obj.set_wordwrap("char");
            obj.style.set_padding("2 5 0 5");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("2048");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "15", "771", "110", "45", null, null, this);
            obj.set_taborder("330");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "124", "771", null, "45", "15", null, this);
            obj.set_taborder("331");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new TextArea("ta_rmk", "absolute", "128", "775", null, "37", "19", null, this);
            obj.set_taborder("332");
            obj.set_wordwrap("char");
            obj.style.set_padding("2 5 0 5");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("2048");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "12", "816", null, "20", "-1", null, this);
            obj.set_taborder("333");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "15", "832", "301", "21", null, null, this);
            obj.set_taborder("334");
            obj.set_text("회사설명 첨부파일<fc v='#ff0000ff'>*</fc>");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "15", "958", "301", "21", null, null, this);
            obj.set_taborder("338");
            obj.set_text("평가표");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "12", "942", null, "20", "-1", null, this);
            obj.set_taborder("339");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static201", "absolute", "124", "544", null, "29", "15", null, this);
            obj.set_taborder("534");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dongBw", "absolute", "128", "548", null, "21", "19", null, this);
            obj.set_taborder("535");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_majLatc", "absolute", "128", "640", null, "21", "19", null, this);
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

            obj = new Edit("edt_repmHtel", "absolute", "598", "436", "48", "21", null, null, this);
            obj.set_taborder("541");
            obj.set_inputtype("digit");
            obj.set_maxlength("4");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_repmStel", "absolute", "657", "436", "48", "21", null, null, this);
            obj.set_taborder("542");
            obj.set_inputtype("digit");
            obj.set_maxlength("4");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fZip", "absolute", "128", "492", "58", "21", null, null, this);
            obj.set_taborder("543");
            obj.set_inputtype("number");
            obj.set_maxlength("3");
            obj.style.set_align("right middle");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_rZip", "absolute", "197", "492", "58", "21", null, null, this);
            obj.set_taborder("544");
            obj.set_inputtype("number");
            obj.set_maxlength("3");
            obj.style.set_align("right middle");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_file", "absolute", "15", "856", null, "86", "15", null, this);
            obj.set_taborder("566");
            obj.set_binddataset("ds_uploadresult00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"684\"/><Column size=\"188\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"UPLOAD 파일\"/><Cell col=\"2\" text=\"파일크기\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" text=\"bind:ORGFNAME\"/><Cell col=\"2\" text=\"expr:FILESIZE + ' byte '\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload10", "absolute", null, "832", "72", "21", "161", null, this);
            obj.set_taborder("567");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_fileDel", "absolute", null, "832", "72", "21", "87", null, this);
            obj.set_taborder("568");
            obj.set_text("파일삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down10", "absolute", null, "832", "70", "21", "15", null, this);
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

            obj = new Static("Static202", "absolute", "15", "307", "110", "29", null, null, this);
            obj.set_taborder("592");
            obj.set_text("바이어 사업장명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static203", "absolute", "124", "307", null, "29", "15", null, this);
            obj.set_taborder("593");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_buyerChrgBsNm", "absolute", "536", "339", "264", "21", null, null, this);
            obj.set_taborder("594");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("76");
            this.addChild(obj.name, obj);

            obj = new Button("btn_buyer", "absolute", "806", "339", "21", "21", null, null, this);
            obj.set_taborder("595");
            obj.set_cssclass("btn_WF_Searchbtn");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static205", "absolute", "423", "335", "110", "29", null, null, this);
            obj.set_taborder("597");
            obj.set_text("바이어 업무명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static206", "absolute", "15", "335", "110", "29", null, null, this);
            obj.set_taborder("598");
            obj.set_text("바이어명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_buyerShrtBxplNm", "absolute", "128", "311", "292", "21", null, null, this);
            obj.set_taborder("599");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("60");
            this.addChild(obj.name, obj);

            obj = new Static("st_spot", "absolute", "204", "549", "22", "21", null, null, this);
            obj.set_taborder("600");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_buyerNm", "absolute", "128", "339", "292", "21", null, null, this);
            obj.set_taborder("601");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "15", "364", null, "20", "-4", null, this);
            obj.set_taborder("602");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_register01", "absolute", null, "2624", "41", "21", "15", null, this);
            obj.set_taborder("604");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print", "absolute", null, "15", "41", "21", "64", null, this);
            obj.set_taborder("609");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static152", "absolute", "15", "380", "301", "21", null, null, this);
            obj.set_taborder("619");
            obj.set_text("회사 기본정보<fc v='#ff0000ff'>*</fc>");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_naBzplc", "absolute", "536", "311", "120", "21", null, null, this);
            obj.set_taborder("621");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_buyerEno", "absolute", "680", "311", "120", "21", null, null, this);
            obj.set_taborder("622");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_updateBuyer", "absolute", "832", "339", "82", "21", null, null, this);
            obj.set_taborder("623");
            obj.set_text("담당자 배정");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static217", "absolute", "124", "226", null, "29", "15", null, this);
            obj.set_taborder("624");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "16", "257", null, "20", "-5", null, this);
            obj.set_taborder("625");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "16", "205", "301", "21", null, null, this);
            obj.set_taborder("626");
            obj.set_text("상담 희망카테고리");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_hope_dsc", "absolute", "129", "230", "292", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_hope_dsc_innerdataset = new Dataset("cbo_hope_dsc_innerdataset", this.cbo_hope_dsc);
            cbo_hope_dsc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">001</Col><Col id=\"datacolumn\">식품</Col></Row><Row><Col id=\"codecolumn\">002</Col><Col id=\"datacolumn\">비식품</Col></Row></Rows>");
            obj.set_innerdataset(cbo_hope_dsc_innerdataset);
            obj.set_taborder("627");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Static("Static215", "absolute", "16", "226", "110", "29", null, null, this);
            obj.set_taborder("628");
            obj.set_text("분류");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static216", "absolute", "423", "226", "110", "29", null, null, this);
            obj.set_taborder("629");
            obj.set_text("카테고리");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_ctgr_lrg", "absolute", "536", "230", "130", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("630");
            obj.set_innerdataset("ds_ctg1");
            obj.set_codecolumn("NA_WRS_LCLC");
            obj.set_datacolumn("WRS_LCLFNM");

            obj = new Combo("cbo_ctgr_mid", "absolute", "670", "230", "130", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("631");
            obj.set_innerdataset("ds_ctg2");
            obj.set_codecolumn("NA_WRS_MCLC");
            obj.set_datacolumn("WRS_MCLFNM");
            obj.set_enable("false");

            obj = new Static("Static46", "absolute", "133", "980", null, "29", "422", null, this);
            obj.set_taborder("632");
            obj.set_text("평가기준");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "133", "1260", null, "29", "422", null, this);
            obj.set_taborder("633");
            obj.set_text("전년 세금계산서");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "133", "1120", null, "141", "422", null, this);
            obj.set_taborder("634");
            obj.set_text("매출규모\r\n(직전년)");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "133", "1008", null, "85", "422", null, this);
            obj.set_taborder("635");
            obj.set_text("업  력");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", "14", "980", "120", "29", null, null, this);
            obj.set_taborder("636");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", "14", "1120", "120", "169", null, null, this);
            obj.set_taborder("637");
            obj.set_text("2. 실적<fc v='#ff0000ff'>*</fc>");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "14", "1008", "120", "113", null, null, this);
            obj.set_taborder("638");
            obj.set_text("1. 업력<fc v='#ff0000ff'>*</fc>");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static62", "absolute", null, "980", "290", "29", "133", null, this);
            obj.set_taborder("639");
            obj.set_text("구  분");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", null, "980", "60", "29", "74", null, this);
            obj.set_taborder("640");
            obj.set_text("배점");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", null, "980", "60", "29", "15", null, this);
            obj.set_taborder("641");
            obj.set_text("득점");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static65", "absolute", null, "1008", "290", "29", "133", null, this);
            obj.set_taborder("642");
            obj.set_text("개업 1년 이상 ~ 3년 미만");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static66", "absolute", null, "1008", "60", "29", "74", null, this);
            obj.set_taborder("643");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static67", "absolute", null, "1008", "60", "29", "15", null, this);
            obj.set_taborder("644");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static69", "absolute", null, "1036", "290", "29", "133", null, this);
            obj.set_taborder("645");
            obj.set_text("3년 이상 ~ 10년 미만");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static70", "absolute", null, "1036", "60", "29", "74", null, this);
            obj.set_taborder("646");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static71", "absolute", null, "1036", "60", "29", "15", null, this);
            obj.set_taborder("647");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static72", "absolute", null, "1064", "290", "29", "133", null, this);
            obj.set_taborder("648");
            obj.set_text("10년 이상");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static73", "absolute", null, "1064", "60", "29", "74", null, this);
            obj.set_taborder("649");
            obj.set_text("15");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static74", "absolute", null, "1064", "60", "29", "15", null, this);
            obj.set_taborder("650");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static77", "absolute", "133", "1092", null, "29", "422", null, this);
            obj.set_taborder("651");
            obj.set_text("사업자등록증");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static78", "absolute", null, "1092", "408", "29", "15", null, this);
            obj.set_taborder("652");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", null, "1120", "290", "29", "133", null, this);
            obj.set_taborder("654");
            obj.set_text("1억원 미만");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static79", "absolute", null, "1120", "60", "29", "74", null, this);
            obj.set_taborder("655");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static80", "absolute", null, "1120", "60", "29", "15", null, this);
            obj.set_taborder("656");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static81", "absolute", null, "1148", "290", "29", "133", null, this);
            obj.set_taborder("657");
            obj.set_text("1억원 이상 ~ 3억원 미만");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static82", "absolute", null, "1148", "60", "29", "74", null, this);
            obj.set_taborder("658");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static83", "absolute", null, "1148", "60", "29", "15", null, this);
            obj.set_taborder("659");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static84", "absolute", null, "1176", "290", "29", "133", null, this);
            obj.set_taborder("660");
            obj.set_text("3억원 이상 ~ 10억원 미만");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static85", "absolute", null, "1176", "60", "29", "74", null, this);
            obj.set_taborder("661");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", null, "1176", "60", "29", "15", null, this);
            obj.set_taborder("662");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static87", "absolute", null, "1204", "290", "29", "133", null, this);
            obj.set_taborder("663");
            obj.set_text("10억원 이상 ~ 50억원 미만");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static88", "absolute", null, "1204", "60", "29", "74", null, this);
            obj.set_taborder("664");
            obj.set_text("15");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static89", "absolute", null, "1204", "60", "29", "15", null, this);
            obj.set_taborder("665");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static90", "absolute", null, "1232", "290", "29", "133", null, this);
            obj.set_taborder("666");
            obj.set_text("50억원 이상");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static91", "absolute", null, "1232", "60", "29", "74", null, this);
            obj.set_taborder("667");
            obj.set_text("20");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static92", "absolute", null, "1232", "60", "29", "15", null, this);
            obj.set_taborder("668");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", null, "1260", "408", "29", "15", null, this);
            obj.set_taborder("669");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static53", "absolute", "133", "1624", null, "29", "422", null, this);
            obj.set_taborder("671");
            obj.set_text("증빙자료");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static108", "absolute", null, "1624", "408", "29", "15", null, this);
            obj.set_taborder("672");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static102", "absolute", "133", "1568", null, "29", "422", null, this);
            obj.set_taborder("674");
            obj.set_text("오프라인 거래");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static103", "absolute", null, "1568", "290", "29", "133", null, this);
            obj.set_taborder("675");
            obj.set_text("백화점, 대형마트, 편의점");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static104", "absolute", null, "1568", "60", "29", "74", null, this);
            obj.set_taborder("676");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static105", "absolute", null, "1568", "60", "29", "15", null, this);
            obj.set_taborder("677");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static106", "absolute", null, "1596", "290", "29", "133", null, this);
            obj.set_taborder("678");
            obj.set_text("온라인몰, 홈쇼핑");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static107", "absolute", null, "1596", "60", "29", "74", null, this);
            obj.set_taborder("679");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static109", "absolute", null, "1596", "60", "29", "15", null, this);
            obj.set_taborder("680");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static113", "absolute", "14", "1568", "120", "85", null, null, this);
            obj.set_taborder("681");
            obj.set_text("5. 상품력");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static114", "absolute", "133", "1428", null, "29", "422", null, this);
            obj.set_taborder("682");
            obj.set_text("기업신용평가 첨부파일");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static115", "absolute", "133", "1288", null, "141", "422", null, this);
            obj.set_taborder("683");
            obj.set_text("기업신용등급");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static116", "absolute", "14", "1288", "120", "169", null, null, this);
            obj.set_taborder("684");
            obj.set_text("3. 신용평가");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static117", "absolute", null, "1288", "290", "29", "133", null, this);
            obj.set_taborder("685");
            obj.set_text("D ~ CCC");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static118", "absolute", null, "1288", "60", "29", "74", null, this);
            obj.set_taborder("686");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static119", "absolute", null, "1288", "60", "29", "15", null, this);
            obj.set_taborder("687");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static120", "absolute", null, "1316", "290", "29", "133", null, this);
            obj.set_taborder("688");
            obj.set_text("CCC+ ~ B");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static121", "absolute", null, "1316", "60", "29", "74", null, this);
            obj.set_taborder("689");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static122", "absolute", null, "1316", "60", "29", "15", null, this);
            obj.set_taborder("690");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static123", "absolute", null, "1344", "290", "29", "133", null, this);
            obj.set_taborder("691");
            obj.set_text("B+ ~ BB+");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static124", "absolute", null, "1344", "60", "29", "74", null, this);
            obj.set_taborder("692");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static125", "absolute", null, "1344", "60", "29", "15", null, this);
            obj.set_taborder("693");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static126", "absolute", null, "1372", "290", "29", "133", null, this);
            obj.set_taborder("694");
            obj.set_text("BBB- ~ BBB+");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static127", "absolute", null, "1372", "60", "29", "74", null, this);
            obj.set_taborder("695");
            obj.set_text("20");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static128", "absolute", null, "1372", "60", "29", "15", null, this);
            obj.set_taborder("696");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static132", "absolute", null, "1428", "408", "29", "15", null, this);
            obj.set_taborder("697");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static129", "absolute", null, "1456", "290", "29", "133", null, this);
            obj.set_taborder("699");
            obj.set_text("공장등록증");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static130", "absolute", null, "1456", "60", "29", "74", null, this);
            obj.set_taborder("700");
            obj.set_text("20");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static131", "absolute", null, "1456", "60", "29", "15", null, this);
            obj.set_taborder("701");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static133", "absolute", "133", "1456", null, "29", "422", null, this);
            obj.set_taborder("702");
            obj.set_text("제조공장 보유");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static134", "absolute", "14", "1456", "120", "113", null, null, this);
            obj.set_taborder("703");
            obj.set_text("4. 제조여부");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static138", "absolute", "133", "1484", null, "29", "422", null, this);
            obj.set_taborder("704");
            obj.set_text("증빙자료");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static135", "absolute", null, "1484", "408", "29", "15", null, this);
            obj.set_taborder("705");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static136", "absolute", "133", "1994", null, "50", "422", null, this);
            obj.set_taborder("707");
            obj.set_text("공인인증 I\r\n(개당 5점)");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static137", "absolute", "14", "1994", "120", "239", null, null, this);
            obj.set_taborder("708");
            obj.set_text("6. 품질관리");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static140", "absolute", null, "1994", "290", "50", "133", null, this);
            obj.set_taborder("709");
            obj.set_text("ISO9001, ISO22000, FSSC22000, 일반HACCP,\r\nGMP(건강식품), 축산물 HACCP");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static141", "absolute", null, "1994", "60", "99", "74", null, this);
            obj.set_taborder("710");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static143", "absolute", null, "1994", "60", "99", "15", null, this);
            obj.set_taborder("711");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static150", "absolute", "133", "2092", null, "29", "422", null, this);
            obj.set_taborder("712");
            obj.set_text("ISO 인증 (5)");
            obj.set_cssclass("sta_WF_Label_c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static151", "absolute", null, "2092", "408", "29", "15", null, this);
            obj.set_taborder("713");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static144", "absolute", "133", "2120", null, "29", "422", null, this);
            obj.set_taborder("715");
            obj.set_text("HACCP GMP인증 (5)");
            obj.set_cssclass("sta_WF_Label_c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static145", "absolute", null, "2120", "408", "29", "15", null, this);
            obj.set_taborder("716");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static146", "absolute", "133", "2148", null, "29", "422", null, this);
            obj.set_taborder("718");
            obj.set_text("전통식품(1)");
            obj.set_cssclass("sta_WF_Label_c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static153", "absolute", null, "2148", "408", "29", "15", null, this);
            obj.set_taborder("719");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static157", "absolute", "133", "2176", null, "29", "422", null, this);
            obj.set_taborder("721");
            obj.set_text("특허ㆍ실용신안 (1)");
            obj.set_cssclass("sta_WF_Label_c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static159", "absolute", null, "2176", "408", "29", "15", null, this);
            obj.set_taborder("722");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static160", "absolute", "133", "2204", null, "29", "422", null, this);
            obj.set_taborder("724");
            obj.set_text("소규모HACCP");
            obj.set_cssclass("sta_WF_Label_c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static161", "absolute", null, "2232", "290", "50", "133", null, this);
            obj.set_taborder("725");
            obj.set_text("유통계열사ㆍ조합\r\n하나로마트ㆍ농협경제 판매사업");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static162", "absolute", null, "2232", "60", "50", "74", null, this);
            obj.set_taborder("726");
            obj.set_text("3");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static163", "absolute", null, "2232", "60", "50", "15", null, this);
            obj.set_taborder("727");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static167", "absolute", "133", "2232", null, "50", "422", null, this);
            obj.set_taborder("728");
            obj.set_text("농협 경제\r\n사업 참여");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static174", "absolute", "14", "2232", "120", "190", null, null, this);
            obj.set_taborder("729");
            obj.set_text("7. 기타");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static183", "absolute", null, "2281", "408", "29", "15", null, this);
            obj.set_taborder("730");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static184", "absolute", "14", "2421", null, "29", "422", null, this);
            obj.set_taborder("732");
            obj.set_text("소계");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("sta_add_total", "absolute", null, "2421", "408", "29", "15", null, this);
            obj.set_taborder("733");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_a01", "absolute", null, "1010", "20", "83", "31", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("734");
            obj.set_innerdataset("@ds_rdo01");
            obj.set_codecolumn("level");
            obj.set_datacolumn("point");

            obj = new Radio("rdo_a02", "absolute", null, "1121", "20", "141", "31", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("735");
            obj.set_innerdataset("@ds_rdo02");
            obj.set_codecolumn("level");
            obj.set_datacolumn("point");

            obj = new Static("Static195", "absolute", null, "1400", "290", "29", "133", null, this);
            obj.set_taborder("736");
            obj.set_text("A- ~ AAA");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static196", "absolute", null, "1400", "60", "29", "74", null, this);
            obj.set_taborder("737");
            obj.set_text("25");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static197", "absolute", null, "1400", "60", "29", "15", null, this);
            obj.set_taborder("738");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_a03", "absolute", null, "1289", "20", "141", "31", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("739");
            obj.set_innerdataset("@ds_rdo03");
            obj.set_codecolumn("level");
            obj.set_datacolumn("point");

            obj = new CheckBox("chk_a041", "absolute", null, "1460", "25", "21", "26", null, this);
            obj.set_taborder("740");
            obj.set_value("0");
            obj.set_truevalue("20");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down02", "absolute", null, "1264", "330", "21", "89", null, this);
            obj.set_taborder("741");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down05", "absolute", null, "1628", "330", "21", "89", null, this);
            obj.set_taborder("742");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down03", "absolute", null, "1432", "330", "21", "89", null, this);
            obj.set_taborder("743");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down041", "absolute", null, "1488", "330", "21", "89", null, this);
            obj.set_taborder("744");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down061", "absolute", null, "2096", "330", "21", "89", null, this);
            obj.set_taborder("745");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down062", "absolute", null, "2124", "330", "21", "89", null, this);
            obj.set_taborder("746");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down063", "absolute", null, "2152", "330", "21", "89", null, this);
            obj.set_taborder("747");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down064", "absolute", null, "2180", "330", "21", "89", null, this);
            obj.set_taborder("748");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down01", "absolute", null, "1096", "330", "21", "89", null, this);
            obj.set_taborder("749");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static54", "absolute", "14", "1652", null, "29", "422", null, this);
            obj.set_taborder("750");
            obj.set_text("소계");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pt_total", "absolute", null, "1652", "408", "29", "15", null, this);
            obj.set_taborder("751");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "13", "1942", null, "21", "4.42%", null, this);
            obj.set_taborder("752");
            obj.set_text("□ 가점 및 감점");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down071", "absolute", null, "2285", "330", "21", "89", null, this);
            obj.set_taborder("753");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static182", "absolute", "133", "2281", null, "29", "422", null, this);
            obj.set_taborder("754");
            obj.set_text("증빙자료");
            obj.set_cssclass("sta_WF_Label_c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static208", "absolute", "14", "1967", "120", "29", null, null, this);
            obj.set_taborder("755");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label_c");
            obj.style.set_padding("2 7 0 7");
            this.addChild(obj.name, obj);

            obj = new Static("Static209", "absolute", "133", "1967", null, "29", "422", null, this);
            obj.set_taborder("756");
            obj.set_text("평가기준");
            obj.set_cssclass("sta_WF_Label_c");
            obj.style.set_padding("2 7 0 7");
            this.addChild(obj.name, obj);

            obj = new Static("Static210", "absolute", null, "1967", "290", "29", "133", null, this);
            obj.set_taborder("757");
            obj.set_text("구  분");
            obj.set_cssclass("sta_WF_Label_c");
            obj.style.set_padding("2 7 0 7");
            this.addChild(obj.name, obj);

            obj = new Static("Static211", "absolute", null, "1967", "60", "29", "74", null, this);
            obj.set_taborder("758");
            obj.set_text("배점");
            obj.set_cssclass("sta_WF_Label_c");
            obj.style.set_padding("2 7 0 7");
            this.addChild(obj.name, obj);

            obj = new Static("Static212", "absolute", null, "1967", "60", "29", "15", null, this);
            obj.set_taborder("759");
            obj.set_text("득점");
            obj.set_cssclass("sta_WF_Label_c");
            obj.style.set_padding("2 7 0 7");
            this.addChild(obj.name, obj);

            obj = new Static("Static139", "absolute", null, "1512", "290", "29", "133", null, this);
            obj.set_taborder("760");
            obj.set_text("타사와의 제조하도급 거래증빙");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static59", "absolute", null, "1512", "60", "29", "74", null, this);
            obj.set_taborder("761");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static214", "absolute", null, "1512", "60", "29", "15", null, this);
            obj.set_taborder("762");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static218", "absolute", "133", "1540", null, "29", "422", null, this);
            obj.set_taborder("763");
            obj.set_text("증빙자료");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static219", "absolute", null, "1540", "408", "29", "15", null, this);
            obj.set_taborder("764");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_a042", "absolute", null, "1516", "25", "21", "26", null, this);
            obj.set_taborder("766");
            obj.set_value("0");
            obj.set_truevalue("10");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down042", "absolute", null, "1544", "330", "21", "89", null, this);
            obj.set_taborder("767");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static220", "absolute", "133", "1512", null, "29", "422", null, this);
            obj.set_taborder("768");
            obj.set_text("OEM거래");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static221", "absolute", "133", "1596", null, "29", "422", null, this);
            obj.set_taborder("769");
            obj.set_text("온라인 거래");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "14", "1680", null, "250", "15", null, this);
            obj.set_taborder("770");
            obj.set_text("*증빙자료 제출 및 판단방법*\r\n1. 매출규모 : 부가세자료(증명원+합계표) 또는 최신 표준재무제표 증명원 등\r\n2. 기업신용평가 (만료기간 1개월 전 자료)\r\n ① 기업신용평가 발급자료 스캔본 \r\n ② 해당 신용평가사에 제출처 선정 \"농협경제지주 마트상품부\"\r\n3. 제조공장 보유 : 자사보유 공장의 공장등록증만 해당\r\n4. OEM거래 \r\n ① 자사보유 제조시설로 타 사업자와 제조하도급 거래를 하는 경우에 해당 \r\n ② OEM상품라벨 이미지 등\r\n5. 상품력 : 부가가치세자료(증명원+합계표)");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_linespace("10");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_a06", "absolute", null, "2033", "45", "21", "23", null, this);
            obj.set_taborder("771");
            obj.set_value("0");
            obj.set_inputtype("number");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("2");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", null, "2043", "290", "50", "133", null, this);
            obj.set_taborder("772");
            obj.set_text("전통식품품질인증, 특허증, 소규모 HACCP,\r\n실용신안");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static95", "absolute", "133", "2043", null, "50", "422", null, this);
            obj.set_taborder("773");
            obj.set_text("공인인증 II\r\n(개당 1점)");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static96", "absolute", null, "2204", "408", "29", "15", null, this);
            obj.set_taborder("774");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down065", "absolute", null, "2208", "330", "21", "89", null, this);
            obj.set_taborder("776");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_a071", "absolute", null, "2246", "25", "21", "18", null, this);
            obj.set_taborder("777");
            obj.set_value("0");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static97", "absolute", null, "2309", "290", "29", "133", null, this);
            obj.set_taborder("778");
            obj.set_text("사회적 기업, 중소기업");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static98", "absolute", null, "2309", "60", "29", "74", null, this);
            obj.set_taborder("779");
            obj.set_text("2");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static99", "absolute", null, "2309", "60", "29", "15", null, this);
            obj.set_taborder("780");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static100", "absolute", null, "2337", "408", "29", "15", null, this);
            obj.set_taborder("781");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down072", "absolute", null, "2341", "330", "21", "89", null, this);
            obj.set_taborder("783");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static101", "absolute", "133", "2337", null, "29", "422", null, this);
            obj.set_taborder("784");
            obj.set_text("증빙자료");
            obj.set_cssclass("sta_WF_Label_c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_a072", "absolute", null, "2313", "25", "21", "18", null, this);
            obj.set_taborder("785");
            obj.set_value("0");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static110", "absolute", "133", "2309", null, "29", "422", null, this);
            obj.set_taborder("786");
            obj.set_text("동반성장");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static111", "absolute", "133", "2365", null, "57", "422", null, this);
            obj.set_taborder("787");
            obj.set_text("기타평가");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static112", "absolute", null, "2365", "60", "29", "74", null, this);
            obj.set_taborder("788");
            obj.set_text("△10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static147", "absolute", null, "2365", "290", "29", "133", null, this);
            obj.set_taborder("789");
            obj.set_text("카테고리 포화도");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static148", "absolute", null, "2393", "60", "29", "74", null, this);
            obj.set_taborder("790");
            obj.set_text("△10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static149", "absolute", null, "2393", "290", "29", "133", null, this);
            obj.set_taborder("791");
            obj.set_text("하향 카테고리 계약검토");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static154", "absolute", null, "2365", "60", "57", "15", null, this);
            obj.set_taborder("792");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static155", "absolute", "14", "2449", null, "250", "15", null, this);
            obj.set_taborder("793");
            obj.set_text("*증빙자료 제출 및 판단방법*\r\n6. 해당 인증서 스캔본\r\n ① 공인인증Ⅰ(개당 5점), 공인인증 Ⅱ(개당 1점) \r\n ② 공인인증Ⅰ과 공인인증 Ⅱ 합산 최대 10점 \r\n7. 농협경제 사업참여 : 연간 거래실적 1억 이상일 때 가점되며 부가세 증명원\r\n8. 동반성장 : 사회적기업, 중소기업 인증 보유시 ex) 이노비즈, 메인비즈, 벤처비즈\r\n  \r\n○ 기타평가사항이 있는 이유\r\n - 신규계약의 목적은 고객니즈에 충족하는 신상품 확보에 있습니다. 이미 농협에 취급하고 있는 품목과 제품수명주기 쇠퇴기에\r\n   해당되는 카테고리의 계약 필요성이 낮다는 점에서 감점을 적용합니다.");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_linespace("10");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_a051", "absolute", null, "1572", "25", "21", "26", null, this);
            obj.set_taborder("794");
            obj.set_value("0");
            obj.set_truevalue("5");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_a052", "absolute", null, "1600", "25", "21", "26", null, this);
            obj.set_taborder("795");
            obj.set_value("0");
            obj.set_truevalue("5");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down01", "absolute", null, "1096", "70", "21", "19", null, this);
            obj.set_taborder("796");
            obj.set_text("파일다운");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down02", "absolute", null, "1264", "70", "21", "19", null, this);
            obj.set_taborder("797");
            obj.set_text("파일다운");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down03", "absolute", null, "1432", "70", "21", "19", null, this);
            obj.set_taborder("798");
            obj.set_text("파일다운");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down041", "absolute", null, "1488", "70", "21", "19", null, this);
            obj.set_taborder("799");
            obj.set_text("파일다운");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down042", "absolute", null, "1544", "70", "21", "19", null, this);
            obj.set_taborder("800");
            obj.set_text("파일다운");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down05", "absolute", null, "1628", "70", "21", "19", null, this);
            obj.set_taborder("801");
            obj.set_text("파일다운");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down061", "absolute", null, "2096", "70", "21", "19", null, this);
            obj.set_taborder("802");
            obj.set_text("파일다운");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down062", "absolute", null, "2124", "70", "21", "19", null, this);
            obj.set_taborder("803");
            obj.set_text("파일다운");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down063", "absolute", null, "2152", "70", "21", "19", null, this);
            obj.set_taborder("804");
            obj.set_text("파일다운");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down064", "absolute", null, "2180", "70", "21", "19", null, this);
            obj.set_taborder("805");
            obj.set_text("파일다운");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down065", "absolute", null, "2208", "70", "21", "19", null, this);
            obj.set_taborder("806");
            obj.set_text("파일다운");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down071", "absolute", null, "2285", "70", "21", "19", null, this);
            obj.set_taborder("807");
            obj.set_text("파일다운");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down072", "absolute", null, "2341", "70", "21", "19", null, this);
            obj.set_taborder("808");
            obj.set_text("파일다운");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload01", "absolute", null, "1096", "72", "21", "19", null, this);
            obj.set_taborder("653");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload02", "absolute", null, "1264", "72", "21", "19", null, this);
            obj.set_taborder("670");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload03", "absolute", null, "1432", "72", "21", "19", null, this);
            obj.set_taborder("698");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload041", "absolute", null, "1488", "72", "21", "19", null, this);
            obj.set_taborder("706");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload042", "absolute", null, "1544", "72", "21", "19", null, this);
            obj.set_taborder("765");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload05", "absolute", null, "1628", "72", "21", "19", null, this);
            obj.set_taborder("673");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload061", "absolute", null, "2096", "72", "21", "19", null, this);
            obj.set_taborder("714");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload062", "absolute", null, "2124", "72", "21", "19", null, this);
            obj.set_taborder("717");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload063", "absolute", null, "2152", "72", "21", "19", null, this);
            obj.set_taborder("720");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload064", "absolute", null, "2180", "72", "21", "19", null, this);
            obj.set_taborder("723");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload065", "absolute", null, "2208", "72", "21", "19", null, this);
            obj.set_taborder("775");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload071", "absolute", null, "2285", "72", "21", "19", null, this);
            obj.set_taborder("731");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload072", "absolute", null, "2341", "72", "21", "19", null, this);
            obj.set_taborder("782");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static156", "absolute", "16", "2695", null, "20", "15", null, this);
            obj.set_taborder("809");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down_zip", "absolute", null, "15", "72", "21", "64", null, this);
            obj.set_taborder("810");
            obj.set_text("ZIP다운");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 950, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("상담신청내역팝업");
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
            obj = new BindItem("item30","cbo_hope_dsc","value","ds_registerList","CSLT_CLS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item49","cbo_ctgr_lrg","value","ds_registerList","CSLT_CTG1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item50","cbo_ctgr_mid","value","ds_registerList","CSLT_CTG2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","rdo_a01","value","ds_registerList","EVL_HDNG_A1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","rdo_a02","value","ds_registerList","EVL_HDNG_A2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","rdo_a03","value","ds_registerList","EVL_HDNG_A3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","chk_a041","value","ds_registerList","EVL_HDNG_A4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item51","chk_a042","value","ds_registerList","EVL_HDNG_A5");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","edt_a06","value","ds_registerList","EVL_HDNG_B11");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","chk_a071","value","ds_registerList","EVL_HDNG_B2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","chk_a072","value","ds_registerList","EVL_HDNG_B3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","chk_a051","value","ds_registerList","EVL_HDNG_A6");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","chk_a052","value","ds_registerList","EVL_HDNG_B1");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_1114.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_1114.xfdl", function() {
        //include "lib::comLib.xjs";

        var rdoA01 = 0;
        var rdoA02 = 0;
        var rdoA03 = 0;
        var rdoA04 = 0;
        var rdoA05 = 0;
        var chkA06 = 0;
        var cboB01 = 0;
        var chkB11 = 0;
        var chkB02 = 0;
        var rdoB03 = 0;
        var rdoB04 = 0;
        var rdoB05 = 0;

        var sts;
        var tot;

        this.OMG_DS_SC_1113_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        	
        	var param = [  
        	   {code:"HP",     dsName:"ds_hp",        selecttype:""},
        	   {code:"TEL",     dsName:"ds_tel",        selecttype:""}
        	];

        	this.gfn_setPortalCommonCode(param);
        }

        //gfn_setCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	//콤보에 최상단Row보이도록 설정
        	this.cbo_chrwAtel.set_index(0);
        	this.cbo_chrwMpsvno.set_index(0);
        	this.cbo_repmAtel.set_index(0);
        }

        //평가항목A1
        this.rdo_a01_onitemchanged = function(obj,e)
        {
        	if(this.gfn_isNull(this.rdo_a01.value))
        	{
        		this.rdo_a01.set_index(0);
        	}
        	rdoA01 = this.rdo_a01.value;
        	this.FileUpload00.set_enable(true);
        	this.fn_sum();
        	//alert('this.rdo_a01.value'+rdoA01);
        }

        //평가항목A2
        this.rdo_a02_onitemchanged = function(obj,e)
        {
        	if(this.gfn_isNull(this.rdo_a02.value))
        	{
        		this.rdo_a02.set_index(0);
        	}
        	rdoA02 = this.rdo_a02.value;
        	this.FileUpload01.set_enable(true);
        	this.edt_down01.set_enable(true);
        	if(rdoA02 < 10)
        	{
        		this.rdo_b04.set_enable(false);
        		//this.Static168.set_enable(false);
        		//this.Static169.set_enable(false);
        		//this.Static171.set_enable(false);
        		//this.Static172.set_enable(false);
        		var nIndex = -1;
        		this.rdo_b04.set_index(nIndex);
        		rdoB04 = 0;
        	}
        	else
        	{
        		this.rdo_b04.set_enable(true);
        		//this.Static168.set_enable(true);
        		//this.Static169.set_enable(true);
        		//this.Static171.set_enable(true);
        		//this.Static172.set_enable(true);
        	}
        	this.fn_sum();
        	//alert("rdoA02"+rdoA02);
        }

        //평가항목A3
        this.rdo_a03_onitemchanged = function(obj,e)
        {
        	if(this.gfn_isNull(this.rdo_a03.value))
        	{
        		this.rdo_a03.set_index(0);
        	}
        	rdoA03 = this.rdo_a03.value;
        	this.fn_sum();
        	//alert('this.rdo_a03.value'+rdoA03);
        }

        //평가항목A4
        this.rdo_a04_onitemchanged = function(obj,e)
        {
        	if(this.gfn_isNull(this.rdo_a04.value))
        	{
        		this.rdo_a04.set_index(0);
        	}
        	rdoA04 = this.rdo_a04.value;
        	this.FileUpload02.set_enable(true);
        	this.edt_down02.set_enable(true);
        	this.fn_sum();
        	//alert('this.rdo_a04.value'+rdoA04);
        }

        //평가항목A5
        this.rdo_a05_onitemchanged = function(obj,e)
        {
        	if(this.gfn_isNull(this.rdo_a05.value))
        	{
        		this.rdo_a05.set_index(0);
        	}
        	rdoA05 = this.rdo_a05.value;
        	this.FileUpload03.set_enable(true);
        	this.edt_down03.set_enable(true);
        	this.fn_sum();
        	//alert('this.rdo_a05.value'+rdoA05);
        }

        this.btn_kis_onclick = function(obj,e)
        {
        	//system.execBrowser("http://www.kisrating.com/");
        	system.execBrowser("http://www.k-srm.co.kr/");
        }

        //평가항목A6
        this.chk_a06_onchanged = function(obj,e)
        {
        	if(this.chk_a06.value == 15)
        	{
        		chkA06 = 15;
        		//alert('chk_a06 true => '+chkA06);
        		this.fn_sum();
        		this.FileUpload04.set_enable(true);
        		this.edt_down04.set_enable(true);
        	}
        	if(this.chk_a06.value == 0)
        	{
        		chkA06 = 0;
        		//alert('chk_a06 false => '+chkA06);
        		this.fn_sum();
        		this.FileUpload04.set_enable(false);
        		this.edt_down04.set_enable(false);
        		
        		//uncheck 삭제
        		var dmc = 04;
        		this.ds_uploadresult.deleteRow(this.ds_uploadresult.findRow("DCM_C",dmc).toString());
        		
        		this.edt_down04.set_value("");
        	}
        }

        //평가항목B1
        this.cbo_b01_onitemchanged = function(obj,e)
        {
        	if(this.cbo_b01.index == 1)
        	{
        		cboB01 = 5;
        		this.fn_sum();
        		this.FileUpload05.set_enable(true);
        		this.edt_down05.set_enable(true);
        		this.FileUpload06.set_enable(false);
        		this.edt_down06.set_enable(false);
        		
        		//uncheck 삭제
        		var dmc = 06;
        		this.ds_uploadresult.deleteRow(this.ds_uploadresult.findRow("DCM_C",dmc).toString());
        		
        		this.edt_down06.set_value("");
        	}
        	else if(this.cbo_b01.index == 2)
        	{
        		cboB01 = 10;
        		//alert('cbo_b01 2 => '+cboB01);
        		this.fn_sum();
        		this.FileUpload05.set_enable(true);
        		this.edt_down05.set_enable(true);
        		this.FileUpload06.set_enable(true);
        		this.edt_down06.set_enable(true);
        	}
        	else
        	{
        		cboB01 = 0;
        		//alert('cbo_b01 0 => '+cboB01);
        		this.fn_sum();
        		this.FileUpload05.set_enable(false);
        		this.edt_down05.set_enable(false);
        		this.FileUpload06.set_enable(false);
        		this.edt_down06.set_enable(false);
        		
        		//uncheck 삭제
        		var dmc = 05;
        		var dmc2 = 05;
        		this.ds_uploadresult.deleteRow(this.ds_uploadresult.findRow("DCM_C",dmc).toString());
        		this.ds_uploadresult.deleteRow(this.ds_uploadresult.findRow("DCM_C",dmc2).toString());
        		
        		this.edt_down05.set_value("");
        		this.edt_down06.set_value("");
        	}
        }

        //평가항목B11
        this.chk_b11_onchanged = function(obj,e)
        {
        	if(this.chk_b11.value == 10)
        	{
        		chkB11 = 10;
        		//alert('chk_b11 true => '+chkB11);
        		this.fn_sum();
        		this.FileUpload07.set_enable(true);
        		this.edt_down07.set_enable(true);
        	}
        	if(this.chk_b11.value == 0)
        	{
        		chkB11 = 0;
        		//alert('chk_b11 false => '+chkB11);
        		this.fn_sum();
        		this.FileUpload07.set_enable(false);
        		this.edt_down07.set_enable(false);
        		
        		//uncheck 삭제
        		var dmc = 07;
        		this.ds_uploadresult.deleteRow(this.ds_uploadresult.findRow("DCM_C",dmc).toString());
        		
        		this.edt_down07.set_value("");
        	}
        }

        //평가항목B2
        this.chk_b02_onchanged = function(obj,e)
        {
        	if(this.chk_b02.value == 10)
        	{
        		chkB02 = 10;
        		//alert('chk_b02 true => '+chkB02);
        		this.fn_sum();
        		this.FileUpload08.set_enable(true);
        		this.edt_down08.set_enable(true);
        	}
        	if(this.chk_b02.value == 0)
        	{
        		chkB02 = 0;
        		//alert('chk_b02 false => '+chkB02);
        		this.fn_sum();
        		this.FileUpload08.set_enable(false);
        		this.edt_down08.set_enable(false);
        		
        		//uncheck 삭제
        		var dmc = 08;
        		this.ds_uploadresult.deleteRow(this.ds_uploadresult.findRow("DCM_C",dmc).toString());
        		
        		this.edt_down08.set_value("");
        	}
        }

        //평가항목B3
        this.rdo_b03_onitemchanged = function(obj,e)
        {
        	if(this.gfn_isNull(this.rdo_b03.value))
        	{
        		this.rdo_b03.set_index(0);
        	}
        	rdoB03 = this.rdo_b03.value;
        	this.fn_sum();
        	//alert('this.rdo_b03.value'+rdoB03);
        }

        //평가항목B4
        this.rdo_b04_onitemchanged = function(obj,e)
        {
        	if(this.gfn_isNull(this.rdo_b04.value))
        	{
        		this.rdo_b04.set_index(0);
        	}
        	rdoB04 = this.rdo_b04.value;
        	this.fn_sum();
        	//alert('this.rdo_b04.value'+rdoB04);
        }

        //평가항목B5
        this.rdo_b05_onitemchanged = function(obj,e)
        {
        	if(this.gfn_isNull(this.rdo_b05.value))
        	{
        		this.rdo_b05.set_index(0);
        	}
        	rdoB05 = this.rdo_b05.value;
        	this.FileUpload09.set_enable(true);
        	this.edt_down09.set_enable(true);
        	this.fn_sum();
        	//alert('this.rdo_b05.value'+rdoB05);
        }

        this.btn_register_onclick = function(obj,e)
        {
        	this.update();
        }

        this.fn_sum = function()
        {
        	var num01 = nexacro.toNumber(rdoA01);
        	var num02 = nexacro.toNumber(rdoA02);
        	var num03 = nexacro.toNumber(rdoA05);
        	var num04 = nexacro.toNumber(rdoA03);
        	var num05 = nexacro.toNumber(rdoA04);
        	var num06 = nexacro.toNumber(rdoB03);
        	var num07 = nexacro.toNumber(rdoB04);
        	var num08 = nexacro.toNumber(rdoB05);
        	var num09 = nexacro.toNumber(chkA06);
        	var num10 = nexacro.toNumber(chkB11);
        	var num11 = nexacro.toNumber(chkB02);
        	var num12 = nexacro.toNumber(cboB01);
        	
        	//보기에 0점이 있는문제
        	if(this.gfn_isNull(rdoA02)){
        		num02 = 0;
        	}
        	if(this.gfn_isNull(rdoA05)){
        		num03 = 0;
        	}
        	
        	var tot = num01 + num02 + num03 + num04 + num05 - num06 + num07 + num08 + num09 + num10 + num11 + num12;
        	
        	var tot2 = num01 + num02 + num04 + num05 + num03 + num09;
        	var tot3 = num12 + num10 + num11 - num06 + num07 + num08;
        	
        	this.mae_sum00.set_value(tot);
        	
        	this.sta_pt_total.set_text(tot2);
        	this.sta_add_total.set_text(tot3);
        	
        	// 점수 제한 해제
        	this.btn_register.set_enable(true);
        	this.btn_register01.set_enable(true);
        	
        	/*
        	if(tot >= 70)
        	{
        		this.btn_register.set_enable(true);
        		this.btn_register01.set_enable(true);
        	}
        	else
        	{
        		this.btn_register.set_enable(false);
        		this.btn_register01.set_enable(false);
        		//alert("입력결과 점수가 70점 이상이면 저장할 수 있습니다");
        	}
        	*/
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
        	
        	var sSvcID        = "update";
        	var sURL          = "svc::rest/bt/rqBrk/saveCsltRq";
        	var sInDatasets   = "ds_registerList=ds_registerList ds_uploadresult=ds_uploadresult:A ds_uploadresult00=ds_uploadresult00:A";
        	var sOutDatasets  = "";
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        this.fn_validationCheck = function()
        {	
        	// 신청자 기본정보
        	if (this.gfn_isNull(this.edt_chrrNm.value)) {
        		this.edt_chrrNm.setFocus();
        		this.alert('신청자 기본정보 중 신청자 값을 입력하세요.');
        		return false;
        	} else if (this.gfn_isNull(this.cbo_chrwAtel.value)) {
        		this.cbo_chrwAtel.setFocus();
        		this.alert('신청자 기본정보 중 연락처 전화지역번호 값을 선택하세요.');
        		return false;
        	} else if (this.gfn_isNull(this.edt_chrwHtel.value)) {
        		this.edt_chrwHtel.setFocus();
        		this.alert('신청자 기본정보 중 연락처 전화번호 값을 입력하세요.');
        		return false;
        	} else if (this.gfn_isNull(this.edt_chrwStel.value)) {
        		this.edt_chrwStel.setFocus();
        		this.alert('신청자 기본정보 중 연락처 전화번호 값을 입력하세요.');
        		return false;
        	} else if (this.gfn_isNull(this.edt_chrrEmail.value)) {
        		this.edt_chrrEmail.setFocus();
        		this.alert('신청자 기본정보 중 Email 값을 입력하세요.');
        		return false;
        	} else if (!this.gfn_checkEmail(this.edt_chrrEmail.value)) {
        		this.edt_chrrEmail.setFocus();
        		this.alert('신청자 기본정보 중 정확한 Email 값을 입력하세요.');
        		return false;
        	} else if (this.gfn_isNull(this.cbo_chrwMpsvno.value)) {
        		this.cbo_chrwMpsvno.setFocus();
        		this.alert('신청자 기본정보 중 휴대전화서비스번호 값을 선택하세요.');
        		return false;
        	} else if (this.gfn_isNull(this.edt_chrwMphno.value)) {
        		this.edt_chrwMphno.setFocus();
        		this.alert('신청자 기본정보 중 휴대전화번호 값을 입력하세요.');
        		return false;
        	} else if (this.gfn_isNull(this.edt_chrwMpsqno.value)) {
        		this.edt_chrwMpsqno.setFocus();
        		this.alert('신청자 기본정보 중 휴대전화번호 값을 입력하세요.');
        		return false;
        	}
        	
        	// 상담 희망카테고리
        	if (this.gfn_isNull(this.cbo_hope_dsc.value)) {
        		this.cbo_hope_dsc.setFocus();
        		this.alert('상담 희망카테고리 분류 값을 선택해주세요.');
        		return false;
        	} else if (this.gfn_isNull(this.cbo_ctgr_lrg.value)) {
        		this.cbo_ctgr_lrg.setFocus();
        		this.alert('상담 희망카테고리 카테고리 대분류 값을 선택해주세요.');
        		return false;
        	} else if (this.gfn_isNull(this.cbo_ctgr_mid.value)) {
        		this.cbo_ctgr_mid.setFocus();
        		this.alert('상담 희망카테고리 카테고리 중분류 값을 선택해주세요.');
        		return false;
        	}
        	
        	// 회사 기본정보
        	if (this.gfn_isNull(this.mae_bzno.value)) {
        		this.mae_bzno.setFocus();
        		this.alert('회사 기본정보 중 사업자등록번호 값을 입력하세요.');
        		return false;
        	} else if (this.gfn_length(this.gfn_replace(this.mae_bzno.value, " ", "")) < 10) {
        		this.mae_bzno.setFocus();
        		this.alert('회사 기본정보 중 사업자등록번호 값 10자리를 확인 후 다시 입력하세요.');
        		return false;
        	} else {
        	    var strNumb = this.mae_bzno.value;
            	if (strNumb =='0000000000') {
        			alert("지사 사업자등록번호가 잘못되었습니다.");
        			return false;
        		}

                var sumMod = 0;
                sumMod += nexacro.toNumber(strNumb.substring(0, 1));
                sumMod += nexacro.toNumber(strNumb.substring(1, 2)) * 3 % 10;
                sumMod += nexacro.toNumber(strNumb.substring(2, 3)) * 7 % 10;
                sumMod += nexacro.toNumber(strNumb.substring(3, 4)) * 1 % 10;
                sumMod += nexacro.toNumber(strNumb.substring(4, 5)) * 3 % 10;
                sumMod += nexacro.toNumber(strNumb.substring(5, 6)) * 7 % 10;
                sumMod += nexacro.toNumber(strNumb.substring(6, 7)) * 1 % 10;
                sumMod += nexacro.toNumber(strNumb.substring(7, 8)) * 3 % 10;
                sumMod += Math.floor(parseInt(strNumb.substring(8, 9)) * 5 / 10);
                sumMod += nexacro.toNumber(strNumb.substring(8, 9)) * 5 % 10;
                sumMod += nexacro.toNumber(strNumb.substring(9, 10));

                if (sumMod % 10 != 0) {
        			alert("사업자등록번호가 잘못되었습니다.");
        			this.mae_bzno.setFocus();
        			return false;
                }
        	}
        	if (this.gfn_isNull(this.edt_conm.value)) {
        		this.edt_conm.setFocus();
        		this.alert('회사 기본정보 중 업체명 값을 입력하세요.');
        		return false;
        	} else if (this.gfn_isNull(this.edt_repm.value)) {
        		this.edt_repm.setFocus();
        		this.alert('회사 기본정보 중 대표자 값을 입력하세요.');
        		return false;
        	} else if (this.gfn_isNull(this.cbo_repmAtel.value)) {
        		this.cbo_repmAtel.setFocus();
        		this.alert('회사 기본정보 중 대표자연락처 전화지역번호 값을 선택하세요.');
        		return false;
        	} else if (this.gfn_isNull(this.edt_repmHtel.value)) {
        		this.edt_repmHtel.setFocus();
        		this.alert('회사 기본정보 중 대표자연락처 전화번호 값을 입력하세요.');
        		return false;
        	} else if (this.gfn_isNull(this.edt_repmStel.value)) {
        		this.edt_repmStel.setFocus();
        		this.alert('회사 기본정보 중 대표자연락처 전화번호 값을 입력하세요.');
        		return false;
        	} else if (this.gfn_isNull(this.edt_biztp.value)) {
        		this.edt_biztp.setFocus();
        		this.alert('회사 기본정보 중 업태 값을 입력하세요.');
        		return false;
        	} else if (this.gfn_isNull(this.edt_itm.value)) {
        		this.edt_itm.setFocus();
        		this.alert('회사 기본정보 중 종목 값을 입력하세요.');
        		return false;
        	} else if (this.gfn_isNull(this.mae_byrSlam.value)) {
        		this.mae_byrSlam.setFocus();
        		this.alert('회사 기본정보 중 연간매출 값을 입력하세요.');
        		return false;
        	} else if (this.gfn_isNull(this.edt_mSelPl.value)) {
        		this.edt_mSelPl.setFocus();
        		this.alert('회사 기본정보 중 주판매처 값을 입력하세요.');
        		return false;
        	} else if (this.gfn_isNull(this.edt_mProduct.value)) {
        		this.edt_mProduct.setFocus();
        		this.alert('회사 기본정보 중 주력품목 값을 입력 하세요.');
        		return false;
        	} else if (this.gfn_isNull(this.chk_chrMft.value) && this.gfn_isNull(this.chk_chrRev.value) && this.gfn_isNull(this.chk_chrTotAgcy.value) && this.gfn_isNull(this.chk_chrVd.value)) {
        		this.chk_chrMft.setFocus();
        		this.alert('회사 기본정보 중 회사성격 값을 최소 하나 이상 선택하세요.');
        		return false;
        	} else if (this.chk_chrMft.value==0 && this.chk_chrRev.value==0 && this.chk_chrTotAgcy.value==0 && this.chk_chrVd.value==0) {
        		this.chk_chrMft.setFocus();
        		this.alert('회사 기본정보 중 회사성격 값을 최소 하나 이상 선택하세요.');
        		return false;
        	} else if (this.gfn_isNull(this.edt_majLatc.value)) {
        		this.edt_majLatc.setFocus();
        		this.alert('회사 기본정보 중 제목(업체명, 주품목) 값을 입력하세요.');
        		return false;
        	} else if (this.gfn_isNull(this.ta_cslt.value)) {
        		this.ta_cslt.setFocus();
        		this.alert('회사 기본정보 중 상담신청내용(업체 및 상품소개) 값을 입력하세요.');
        		return false;
        	} else if (this.gfn_isNull(this.ta_rmk.value)) {
        		this.ta_rmk.setFocus();
        		this.alert('회사 기본정보 중 비고 값을 입력하세요.');
        		return false;
        	} else if (this.gfn_isNull(this.edt_dongUp.value)) {
        		this.btn_addr.setFocus();
        		this.alert('주소를 검색해서 주소 값을 입력하세요.');
        		return false;
        	} else if (this.gfn_isNull(this.edt_dongBw.value)) {
        		this.edt_dongBw.setFocus();
        		this.alert('회사 기본정보 중 상세주소 값을 입력하세요.');
        		return false;
        	}
        	
        	// 첨부파일 검사
        	if (this.edt_down01.enable == true && this.gfn_isNull(this.edt_down01.value)) {
        		this.edt_down01.setFocus();
        		this.alert('사업장 등록증을 첨부하세요.');
        		return false;
        	} else if (this.edt_down02.enable == true && this.gfn_isNull(this.edt_down02.value)) {
        		this.edt_down02.setFocus();
        		this.alert('전년 세금계산서를 첨부하세요.');
        		return false;
        	} else if (this.edt_down03.enable == true && this.gfn_isNull(this.edt_down03.value)) {
        		this.edt_down03.setFocus();
        		this.alert('기업신용평가를 첨부하세요.');
        		return false;
        	} else if (this.edt_down041.enable == true && this.gfn_isNull(this.edt_down041.value)) {
        		this.edt_down041.setFocus();
        		this.alert('공장등록증을 첨부하세요.');
        		return false;
        	} else if (this.edt_down042.enable == true && this.gfn_isNull(this.edt_down042.value)) {
        		this.edt_down042.setFocus();
        		this.alert('타사와의 제조하도급 거래증빙을 첨부하세요.');
        		return false;
        	} else if (this.edt_down05.enable == true && this.gfn_isNull(this.edt_down05.value)) {
        		this.edt_down05.setFocus();
        		this.alert('온라인/오프라인 거래 증빙자료를 첨부하세요.');
        		return false;
        	} else if (
        		(this.edt_down061.enable == true && this.gfn_isNull(this.edt_down061.value)) &&
        		(this.edt_down062.enable == true && this.gfn_isNull(this.edt_down062.value)) &&
        		(this.edt_down063.enable == true && this.gfn_isNull(this.edt_down063.value)) &&
        		(this.edt_down064.enable == true && this.gfn_isNull(this.edt_down064.value)) &&
        		(this.edt_down065.enable == true && this.gfn_isNull(this.edt_down065.value))
        	) {
        		this.edt_down061.setFocus();
        		this.alert('공인인증 증빙자료를 첨부하세요.');
        		return false;
        	} else if (this.edt_down071.enable == true && this.gfn_isNull(this.edt_down071.value)) {
        		this.edt_down071.setFocus();
        		this.alert('농협 경제사업 참여 증빙자료를 첨부하세요.');
        		return false;
        	} else if (this.edt_down072.enable == true && this.gfn_isNull(this.edt_down072.value)) {
        		this.edt_down072.setFocus();
        		this.alert('동방성장 증빙자료를 첨부하세요.');
        		return false;
        	}
        	
        	return true;
        }

        this.mae_bzno_onlbuttonup = function(obj,e)
        {
        	if (this.gfn_isNull(obj.value)) {
        		this.mae_bzno.setCaretPos(0);
        	}
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
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
        	
        	this.cbo_hope_dsc.set_enable(false);
        	this.cbo_ctgr_lrg.set_enable(false);
        	this.cbo_ctgr_mid.set_enable(false);
        	
        	//this.btn_search01.set_enable(false);
        	
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
        	
        	this.btn_fileDel.set_visible(false);
        	this.FileUpload10.set_visible(false);
        	
        	this.rdo_a01.set_readonly(true);
        	this.rdo_a02.set_readonly(true);
        	this.rdo_a03.set_readonly(true);
        	this.chk_a041.set_readonly(true);
        	this.chk_a042.set_readonly(true);
        	this.chk_a051.set_readonly(true);
        	this.chk_a052.set_readonly(true);
        	this.edt_a06.set_readonly(true);
        	this.chk_a071.set_readonly(true);
        	this.chk_a072.set_readonly(true);
        	
        	this.btn_down01.set_visible(true);
        	this.btn_down02.set_visible(true);
        	this.btn_down03.set_visible(true);
        	this.btn_down041.set_visible(true);
        	this.btn_down042.set_visible(true);
        	this.btn_down05.set_visible(true);
        	this.btn_down061.set_visible(true);
        	this.btn_down062.set_visible(true);
        	this.btn_down063.set_visible(true);
        	this.btn_down064.set_visible(true);
        	this.btn_down065.set_visible(true);
        	this.btn_down071.set_visible(true);
        	this.btn_down072.set_visible(true);
        	
        	this.FileUpload01.set_visible(false);
        	this.FileUpload02.set_visible(false);
        	this.FileUpload03.set_visible(false);
        	this.FileUpload041.set_visible(false);
        	this.FileUpload042.set_visible(false);
        	this.FileUpload05.set_visible(false);
        	this.FileUpload061.set_visible(false);
        	this.FileUpload062.set_visible(false);
        	this.FileUpload063.set_visible(false);
        	this.FileUpload064.set_visible(false);
        	this.FileUpload065.set_visible(false);
        	this.FileUpload071.set_visible(false);
        	this.FileUpload072.set_visible(false);
        	
        	this.edt_down01.set_enable(false);
        	this.edt_down02.set_enable(false);
        	this.edt_down03.set_enable(false);
        	this.edt_down041.set_enable(false);
        	this.edt_down042.set_enable(false);
        	this.edt_down05.set_enable(false);
        	this.edt_down061.set_enable(false);
        	this.edt_down062.set_enable(false);
        	this.edt_down063.set_enable(false);
        	this.edt_down064.set_enable(false);
        	this.edt_down065.set_enable(false);
        	this.edt_down071.set_enable(false);
        	this.edt_down072.set_enable(false);
        	
        	this.btn_register.set_enable(false);
        	this.btn_register01.set_enable(false);
        }

        /*sts2 보완수정 파일업로드 점수입력 비활성화*/
        this.disable2 = function(obj,e)
        {
        	this.rdo_a01.set_readonly(true);
        	this.rdo_a02.set_readonly(true);
        	this.rdo_a03.set_readonly(true);
        	this.chk_a041.set_readonly(true);
        	this.chk_a042.set_readonly(true);
        	this.chk_a051.set_readonly(true);
        	this.chk_a052.set_readonly(true);
        	this.edt_a06.set_readonly(true);
        	this.chk_a071.set_readonly(true);
        	this.chk_a072.set_readonly(true);
        	
        	//파일업로드 활성화
        	this.edt_down01.set_enable(!this.gfn_isNull(this.edt_down01.value));
        	this.edt_down02.set_enable(!this.gfn_isNull(this.edt_down02.value));
        	this.edt_down03.set_enable(!this.gfn_isNull(this.edt_down03.value));
        	this.edt_down041.set_enable(!this.gfn_isNull(this.edt_down041.value));
        	this.edt_down042.set_enable(!this.gfn_isNull(this.edt_down042.value));
        	this.edt_down05.set_enable(!this.gfn_isNull(this.edt_down05.value));
        	this.edt_down061.set_enable(!this.gfn_isNull(this.edt_down061.value));
        	this.edt_down062.set_enable(!this.gfn_isNull(this.edt_down062.value));
        	this.edt_down063.set_enable(!this.gfn_isNull(this.edt_down063.value));
        	this.edt_down064.set_enable(!this.gfn_isNull(this.edt_down064.value));
        	this.edt_down065.set_enable(!this.gfn_isNull(this.edt_down065.value));
        	this.edt_down071.set_enable(!this.gfn_isNull(this.edt_down071.value));
        	this.edt_down072.set_enable(!this.gfn_isNull(this.edt_down072.value));
        }

        this.fn_afterFormOnload = function()
        {
             //페이지 로딩후 실행부분      
        	var fv_paramMode = this.getOwnerFrame().paramMode;
        	this.mae_sum00.setFocus(); // 팝업 오픈 후 스크롤 내려가는 문제
        	
        	/*조회 호출*/
        	this.search();
        }

        /*조회*/
        this.search = function()
        {	
        	this.ds_registerList.clearData();
        	
        	var fv_cslt_rq_no =  this.gfn_isEmpty(this.getOwnerFrame().CSLT_RQ_NO);		
        	
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
        		
        		this.fn_setHopeDsc(this.cbo_hope_dsc.value, true);
        	} else if (svcID == "update" || svcID == "updateBuyer") {
        		this.gfn_getMessage("alert", "result.message.save.success");
        		this.close("SUCCESS");
        		return;
        	}
        	
        	/*서류첨부*/
        	if (!this.gfn_isNull(this.ds_uploadresult.rowcount)) {
        		for (var i = 0 ; i < this.ds_uploadresult.rowcount; i++) {
        			var dcmC = this.ds_uploadresult.getColumn(i, "DCM_C");
        			var orgNm = this.ds_uploadresult.getColumn(i, "ORGFNAME");
        			
        			if (dcmC == "01") {
        				this.edt_down01.set_value(orgNm);
        			} else if (dcmC == "02") {
        				this.edt_down02.set_value(orgNm);
        			} else if (dcmC == "03") {
        				this.edt_down03.set_value(orgNm);
        			} else if (dcmC == "041") {
        				this.edt_down041.set_value(orgNm);
        			} else if (dcmC == "042") {
        				this.edt_down042.set_value(orgNm);
        			} else if (dcmC == "05") {
        				this.edt_down05.set_value(orgNm);
        			} else if (dcmC == "061") {
        				this.edt_down061.set_value(orgNm);
        			} else if (dcmC == "062") {
        				this.edt_down062.set_value(orgNm);
        			} else if (dcmC == "063") {
        				this.edt_down063.set_value(orgNm);
        			} else if (dcmC == "064") {
        				this.edt_down064.set_value(orgNm);
        			} else if (dcmC == "065") {
        				this.edt_down065.set_value(orgNm);
        			} else if (dcmC == "071") {
        				this.edt_down071.set_value(orgNm);
        			} else if (dcmC == "072") {
        				this.edt_down072.set_value(orgNm);
        			}
        		}
        		
        		// 신용평가 미선택시 0점과 같이 나오기 때문에 별도로 선택값 제거
        		if (this.ds_uploadresult.findRow("DCM_C", "03") == -1) {
        			this.ds_registerList.setColumn(0, "EVL_HDNG_A3", "");
        		}
        	}
        	
        	/*retrieve합계호출*/
        	this.fn_calcTable();
        	
        	sts = this.ds_registerList.getColumn(0, "STS");
        	if (sts == "2" && application.gv_userType != "02" && application.gv_userType != "03") { // 보완 상태
        		this.disable2();
        	} else {
        		this.disable();
        	}
        	
        	if (!this.gfn_isNull(application.gv_userId)) { // 로그인
        		// 로그인 사용자가 상담관리자인 경우, 담당자배정 가능
        		for (var j = 0 ; j < this.ds_csltManager.rowcount; j++) {
        			var csltManagerList = this.ds_csltManager.getColumn(j, "CSLT_MANAGER_LIST"); // 상담관리자 목록
        			if (csltManagerList == application.gv_userId) {
        				this.btn_buyer.set_visible(true);
        				this.btn_updateBuyer.set_visible(true);
        				break;
        			}
        		}
        		
        		// 출력 버튼 표시
        		this.btn_print.set_visible(true);
        		this.btn_down_zip.set_right(111);
        	}
        }

        // 점수계산
        this.fn_calcTable = function()
        {
        	point01 = nexacro.toNumber(this.gfn_nvl(this.rdo_a01.value, 0)); // 업력
        	point02 = nexacro.toNumber(this.gfn_nvl(this.rdo_a02.value, 0)); // 실적
        	point03 = nexacro.toNumber(this.gfn_nvl(this.rdo_a03.value, 0)); // 신용평가
        	point041 = nexacro.toNumber(this.gfn_nvl(this.chk_a041.value, 0)); // 제조공장
        	point042 = nexacro.toNumber(this.gfn_nvl(this.chk_a042.value, 0)); // OEM
        	point051 = nexacro.toNumber(this.gfn_nvl(this.chk_a051.value, 0)); // 오프라인거래
        	point052 = nexacro.toNumber(this.gfn_nvl(this.chk_a052.value, 0)); // 온라인거래
        	point06 = nexacro.toNumber(this.gfn_nvl(this.edt_a06.value, 0)); // [가점] 공인인증 I+II
        	point071 = nexacro.toNumber(this.gfn_nvl(this.chk_a071.value, 0)); // [가점] 농협경제사업참여
        	point072 = nexacro.toNumber(this.gfn_nvl(this.chk_a072.value, 0)); // [가점] 동반성장
        	
        	this.fn_setEnableUpload(point01 > 0, this.edt_down01, this.FileUpload01);
        	this.fn_setEnableUpload(!this.gfn_isNull(this.rdo_a02.value), this.edt_down02, this.FileUpload02); // 항목에 0점이 있어서 선택 여부를 확인
        	this.fn_setEnableUpload(!this.gfn_isNull(this.rdo_a03.value), this.edt_down03, this.FileUpload03); // 항목에 0점이 있어서 선택 여부를 확인
        	this.fn_setEnableUpload(point041 > 0, this.edt_down041, this.FileUpload041);
        	this.fn_setEnableUpload(point042 > 0, this.edt_down042, this.FileUpload042);
        	this.fn_setEnableUpload((point051 + point052) > 0, this.edt_down05, this.FileUpload05);
        	this.fn_setEnableUpload(point06 > 0, this.edt_down061, this.FileUpload061);
        	this.fn_setEnableUpload(point06 > 0, this.edt_down062, this.FileUpload062);
        	this.fn_setEnableUpload(point06 > 0, this.edt_down063, this.FileUpload063);
        	this.fn_setEnableUpload(point06 > 0, this.edt_down064, this.FileUpload064);
        	this.fn_setEnableUpload(point06 > 0, this.edt_down065, this.FileUpload065);
        	this.fn_setEnableUpload(point071 > 0, this.edt_down071, this.FileUpload071);
        	this.fn_setEnableUpload(point072 > 0, this.edt_down072, this.FileUpload072);
        	
        	tot2 = point01 + point02 + point03 + point041 + point042 + point051 + point052;
        	tot3 = point06 + point071 + point072;
        	tot1 = tot2 + tot3;
        	
        	this.mae_sum00.set_value(tot1); // 전체 합계
        	this.sta_pt_total.set_text(tot2);
        	this.sta_add_total.set_text(tot3);
        	
        	this.fn_checkCutline();
        }

        this.fn_checkCutline = function()
        {
        	var tot = nexacro.toNumber(this.mae_sum00.value);
        	var cutline = 1; // 상담신청 가능 점수 (점수제한 없음)
        	var csltDsc = this.cbo_hope_dsc.value;
        	/*
        	if (csltDsc == "001") {
        		cutline = 70; // 001:식품
        	} else if (csltDsc == "002") {
        		cutline = 60; // 002:비식품
        	}
        	*/
        	
        	if (tot >= cutline) {
        		this.btn_register.set_enable(true);
        		this.btn_register01.set_enable(true);
        	} else {
        		this.btn_register.set_enable(false);
        		this.btn_register01.set_enable(false);
        	}
        }

        this.fn_setEnableUpload = function(enable,objEdt,objFile)
        {
        	objEdt.set_enable(enable);
        	objFile.set_enable(enable);
        // 	if (!enable) {
        // 		objFile.deleteItem(0);
        // 		objFile.appendItem();
        // 	}
        }

        /*retrieve합계*/
        this.retrieveSum = function()
        {	
        	//평가항목A1
        	if(this.gfn_isNull(this.rdo_a01.value))
        	{
        		this.rdo_a01.set_value(0);
        	}
        	rdoA01 = this.rdo_a01.value;
        	this.FileUpload00.set_enable(true);

        	//평가항목A2
        	if(this.gfn_isNull(this.rdo_a02.value))
        	{
        		var nIndex = -1;
        		this.rdo_a02.set_index(nIndex);
        		this.rdo_b04.set_enable(false);
        	}
        	rdoA02 = this.rdo_a02.value;
        	this.FileUpload01.set_enable(true);
        	if(rdoA02 < 10)
        	{
        		this.rdo_b04.set_enable(false);
        		var nIndex = -1;
        		this.rdo_b04.set_index(nIndex);
        		rdoB04 = 0;
        	}
        	else
        	{
        		this.rdo_b04.set_enable(true);
        	}

        	//평가항목A3
        	if(this.gfn_isNull(this.rdo_a03.value))
        	{
        		this.rdo_a03.set_value(0);
        	}
        	rdoA03 = this.rdo_a03.value;

        	//평가항목A4
        	if(this.gfn_isNull(this.rdo_a04.value))
        	{
        		this.rdo_a04.set_value(0);
        	}
        	rdoA04 = this.rdo_a04.value;
        	this.FileUpload02.set_enable(true);

        	//평가항목A5
        	if(this.gfn_isNull(this.rdo_a05.value))
        	{
        		var nIndex = -1;
        		this.rdo_a05.set_index(nIndex);
        	}
        	rdoA05 = this.rdo_a05.value;
        	this.FileUpload03.set_enable(true);

        	//평가항목A6
        	if(this.chk_a06.value == 15)
        	{
        		chkA06 = 15;
        		this.FileUpload04.set_enable(true);
        	}
        	if(this.chk_a06.value == 0)
        	{
        		chkA06 = 0;
        		this.FileUpload04.set_enable(false);
        		var upld04 = "";
        		this.FileUpload04.set_value(upld04);
        	}

        	//평가항목B1
        	if(this.cbo_b01.value == 5)
        	{
        		cboB01 = 5;
        		this.cbo_b01.set_index(1);
        		this.FileUpload05.set_enable(true);
        		this.FileUpload06.set_enable(false);
        		var upld06 = "";
        		this.FileUpload06.set_value(upld06);
        	}
        	if(this.cbo_b01.value == 10)
        	{
        		cboB01 = 10;
        		this.cbo_b01.set_index(2);
        		this.FileUpload05.set_enable(true);
        		this.FileUpload06.set_enable(true);
        	}
        	if(this.gfn_isNull(this.cbo_b01.value))
        	{
        		cboB01 = 0;
        		this.cbo_b01.set_index(0);
        		this.FileUpload05.set_enable(false);
        		this.FileUpload06.set_enable(false);
        		var upld05 = "";
        		var upld06 = "";
        		this.FileUpload05.set_value(upld05);
        		this.FileUpload06.set_value(upld06);
        	}

        	//평가항목B11
        	if(this.chk_b11.value == 10)
        	{
        		chkB11 = 10;
        		this.FileUpload07.set_enable(true);
        	}
        	if(this.chk_b11.value == 0)
        	{
        		chkB11 = 0;
        		this.FileUpload07.set_enable(false);
        		var upld07 = "";
        		this.FileUpload07.set_value(upld07);
        	}
        	
        	//평가항목B2
        	if(this.chk_b02.value == 10)
        	{
        		chkB02 = 10;
        		this.FileUpload08.set_enable(true);
        	}
        	if(this.chk_b02.value == 0)
        	{
        		chkB02 = 0;
        		this.FileUpload08.set_enable(false);
        		var upld08 = "";
        		this.FileUpload08.set_value(upld08);
        	}

        	//평가항목B3
        	if(this.gfn_isNull(this.rdo_b03.value))
        	{
        		this.rdo_b03.set_value(0);
        	}
        	rdoB03 = this.rdo_b03.value;

        	//평가항목B4
        	if(this.gfn_isNull(this.rdo_b04.value))
        	{
        		this.rdo_b04.set_value(0);
        	}
        	rdoB04 = this.rdo_b04.value;

        	//평가항목B5
        	if(this.gfn_isNull(this.rdo_b05.value))
        	{
        		this.rdo_b05.set_value(0);
        	}
        	rdoB05 = this.rdo_b05.value;
        	this.FileUpload09.set_enable(true);
        	
        	this.fn_sum();
        }

        this.FileUpload_onitemchanged = function(obj,e)
        {
        	this.gfn_callUpload(obj);
        }

        /*회사서류 파일첨부*/
        this.FileUpload_onsuccess = function(obj,e)
        {	
        	var name = obj.name.replace("FileUpload", ""); // 첨부파일코드
        	var dmc = this.ds_uploadresult.findRow("DCM_C",name).toString(); //파일Row위치
        	
        	if (dmc == -1) {
        		if (e.datasets == null) {
        			this.alert(e.errormsg);
        		} else {
        			this.ds_uploadresult.appendData(e.datasets[0],false,false);
        			this.ds_uploadresult.setColumn(this.ds_uploadresult.rowcount -1 ,"DCM_C", name);
        			
        			//this.edt_down00.set_value(e.datasets[0].getColumn(0,"ORGFNAME"));
        			this.all["edt_down"+name].set_value(e.datasets[0].getColumn(0,"ORGFNAME"));
        		}
        	} else {
        		//기존upload파일삭제
        		this.ds_uploadresult.deleteRow(dmc);
        		//this.ds_uploadresult.appendData(e.datasets[0],false,false);
        		//this.ds_uploadresult.setColumn(this.ds_uploadresult.rowcount -1,"DCM_C",name);
        		//this.ds_uploadresult.setColumn(this.ds_uploadresult.rowcount -1,"UPSTS","2");
        		
        		this.ds_uploadresult01.copyData(e.datasets[0]);
        		
        		var fName = this.ds_uploadresult01.getColumn(0,"FILENAME");
        		var fType = this.ds_uploadresult01.getColumn(0,"FILETYPE");
        		var fSize = this.ds_uploadresult01.getColumn(0,"FILESIZE");
        		var orgName = this.ds_uploadresult01.getColumn(0,"ORGFNAME");
        		var sysName = this.ds_uploadresult01.getColumn(0,"SYSTEMFILENAME");

        		var nRow = this.ds_uploadresult.addRow();
        		
        		this.ds_uploadresult.setColumn(nRow ,"DCM_C", name);
        		this.ds_uploadresult.setColumn(nRow,"FILENAME",fName);
        		this.ds_uploadresult.setColumn(nRow,"FILETYPE",fType);
        		this.ds_uploadresult.setColumn(nRow,"FILESIZE",fSize);
        		this.ds_uploadresult.setColumn(nRow,"ORGFNAME",orgName);
        		this.ds_uploadresult.setColumn(nRow,"SYSTEMFILENAME",sysName);
        		
        		this.all["edt_down"+name].set_value(e.datasets[0].getColumn(0,"ORGFNAME"));
        	}
        }

        this.FileUpload_onerror = function(obj,e)
        {
        // 	trace("FileUpload_onerror");
        // 	trace("e.errorcode: "+e.errorcode);
        // 	trace("e.errormsg: "+e.errormsg);
        	this.alert(e.errormsg);
        }

        /*회사소개 파일첨부*/
        this.FileUpload10_onitemchanged = function(obj,e)
        {
        	this.gfn_callUpload(obj);
        }

        this.FileUpload10_onsuccess = function(obj,e)
        {
        	if (e.datasets == null) {
        		this.alert(e.errormsg);
        	} else {
        		this.ds_uploadresult01.copyData(e.datasets[0]);
        		var fName = this.ds_uploadresult01.getColumn(0,"FILENAME");
        		var fType = this.ds_uploadresult01.getColumn(0,"FILETYPE");
        		var fSize = this.ds_uploadresult01.getColumn(0,"FILESIZE");
        		var orgName = this.ds_uploadresult01.getColumn(0,"ORGFNAME");
        		var sysName = this.ds_uploadresult01.getColumn(0,"SYSTEMFILENAME");
        		
        		var nRow = this.ds_uploadresult00.rowposition ;
        		if (this.ds_uploadresult00.rowposition == "-1") {
        			 nRow = this.ds_uploadresult00.addRow();
        		} else {
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
        // 	trace("FileUpload10_onerror");
        // 	trace("e.errorcode: "+e.errorcode);
        // 	trace("e.errormsg: "+e.errormsg);
        	this.alert(e.errormsg);
        }

        this.btn_fileDel_onclick = function(obj,e)
        {
        	for (var i = this.ds_uploadresult00.getRowCount()-1; i >= 0; i--) {
        		if (this.ds_uploadresult00.getColumn(i, "ISCHECKED") == 1) {
        			this.ds_uploadresult00.deleteRow(i);
        		}
        	}
        }

        this.btn_down00_onclick = function(obj,e)
        {
        	var dcmC = obj.id.replace("btn_down", "");
        	var dmcRow = this.ds_uploadresult.findRow("DCM_C", dcmC);
        	if (dmcRow != -1) {
        		this.ds_uploadresult01.copyRow(0, this.ds_uploadresult, dmcRow);
        		this.gfn_callDownload(this.ds_uploadresult01);
        	} else {
        		this.alert("첨부파일이 없습니다.");
        	}
        }

        this.btn_down10_onclick = function(obj,e)
        {
        	//this.gfn_callDownload(this.ds_uploadresult00);
        	this.gfn_callDownload(this.ds_uploadresult00, "ISCHECKED");
        }

        //전화 번호 타입 변경
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

        //주소 리턴 값
        this.fn_addr = function(strVal)
        {
        	var fn_addr = strVal.split(",");
        	for (var i=0; i<fn_addr.length; i++) {
        		var fn_addr1 = fn_addr[i].split("#");
        		
        		if (fn_addr1[0] == "FZIP") {
        			//앞자리우편번호
        			this.ds_registerList.setColumn(0, "FZIP", fn_addr1[1]);
        		} else if (fn_addr1[0] == "RZIP") {
        			//뒷자리우편번호
        			this.ds_registerList.setColumn(0, "RZIP", fn_addr1[1]);
        		} else if (fn_addr1[0] == "ZIP_SQNO") {
        			//우편번호일련번호
        			this.ds_registerList.setColumn(0, "ZIP_SQNO", fn_addr1[1]);
        		} else if (fn_addr1[0] == "DONGUP") {
        			//동이상주소
        			this.ds_registerList.setColumn(0, "DONGUP", fn_addr1[1]);
        		} else if (fn_addr1[0] == "DONGBW") {
        			//동이하주소
        			this.ds_registerList.setColumn(0, "DONGBW",  fn_addr1[1]);
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

        this.Button05_onclick = function(obj,e)
        {
        	system.execBrowser("http://www.kedkorea.com/ci/CIINT01R0.do");
        }
        this.Button06_onclick = function(obj,e)
        {
        	system.execBrowser("http://www.clipq.co.kr//");
        }

        this.Button07_onclick = function(obj,e)
        {
        	system.execBrowser("https://www.srms.co.kr/srms/zsrms/mems/a200_MemberIns.jsp");
        }

        this.cbo_ctgr_lrg_onitemchanged = function(obj,e)
        {
        	if (!this.gfn_isNull(obj.value)) {
        		this.ds_ctg2.filter("NA_WRS_LCLC == '" + obj.value + "'");
        		this.cbo_ctgr_mid.set_enable(true);
        	} else {
        		this.cbo_ctgr_mid.set_value("");
        		this.cbo_ctgr_mid.set_enable(false);
        	}
        }

        this.btn_down_zip_onclick = function(obj,e)
        {
        	var existFile = false;
        	
        	for (var i=0; i<this.ds_uploadresult.getRowCount(); i++) {
        		var sysflnm = this.ds_uploadresult.getColumn(i, "SYSTEMFILENAME");
        		var apdflnm = this.ds_uploadresult.getColumn(i, "ORGFNAME");
        		
        		if (!this.gfn_isNull(sysflnm) && !this.gfn_isNull(apdflnm)) {
        			existFile = true;
        			break;
        		}
        	}
        		
        	for (var i=0; i<this.ds_uploadresult00.getRowCount(); i++) {
        		var sysflnm = this.ds_uploadresult00.getColumn(i, "SYSTEMFILENAME");
        		var apdflnm = this.ds_uploadresult00.getColumn(i, "ORGFNAME");
        			
        		if (!this.gfn_isNull(sysflnm) && !this.gfn_isNull(apdflnm)) {
        			existFile = true;
        			break;
        		}
        	}
        	
        	if (existFile) {
        		var csltRqNo =  this.ds_registerList.getColumn(0, "CSLT_RQ_NO");;		
        		var sURL          = "svc::rest/bt/rqBrk/saveCsltRq";
        		var strDownUrl = application.gv_server_url+"rest/bt/rq/downloadZipFile?csltRqNo="+csltRqNo;
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
        }

        this.cbo_dsc_onitemchanged = function(obj,e)
        {
        	this.fn_setHopeDsc(obj.value, false);
        }

        this.fn_setHopeDsc = function(dsc,init)
        {
        	if (!this.gfn_isNull(dsc)) {
        		if (dsc == "001") {
        			this.ds_ctg1.filter("NA_WRS_LCLC == '120'");
        		} else {
        			this.ds_ctg1.filter("NA_WRS_LCLC != '120'");
        		}
        		this.cbo_ctgr_lrg.set_enable(true);
        		this.cbo_ctgr_mid.set_enable(init);
        		
        		if (!init) {
        			this.cbo_ctgr_lrg.set_value("");
        			this.cbo_ctgr_mid.set_value("");
        		} else {
        			this.ds_ctg2.filter("NA_WRS_LCLC == '" + this.ds_registerList.getColumn(0, "CSLT_CTG1") + "'");
        		}
        	} else {
        		this.cbo_ctgr_lrg.set_enable(false);
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_uploadresult00.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.ds_uploadresult.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.ds_uploadresult01.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.addEventHandler("onload", this.OMG_DS_SC_1113_onload, this);
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
            this.btn_register01.addEventHandler("onclick", this.btn_register_onclick, this);
            this.btn_print.addEventHandler("onclick", this.btn_print_onclick, this);
            this.btn_updateBuyer.addEventHandler("onclick", this.btn_updateBuyer_onclick, this);
            this.cbo_hope_dsc.addEventHandler("onitemchanged", this.cbo_dsc_onitemchanged, this);
            this.cbo_ctgr_lrg.addEventHandler("onitemchanged", this.cbo_ctgr_lrg_onitemchanged, this);
            this.rdo_a01.addEventHandler("onitemchanged", this.fn_rdo_onitemchanged, this);
            this.rdo_a02.addEventHandler("onitemchanged", this.fn_rdo_onitemchanged, this);
            this.rdo_a03.addEventHandler("onitemchanged", this.fn_rdo_onitemchanged, this);
            this.chk_a041.addEventHandler("onchanged", this.fn_calcTable, this);
            this.chk_a042.addEventHandler("onchanged", this.fn_calcTable, this);
            this.edt_a06.addEventHandler("onkillfocus", this.edt_a06_onkillfocus, this);
            this.edt_a06.addEventHandler("ontextchanged", this.edt_a06_onkillfocus, this);
            this.chk_a071.addEventHandler("onchanged", this.fn_calcTable, this);
            this.chk_a072.addEventHandler("onchanged", this.fn_calcTable, this);
            this.chk_a051.addEventHandler("onchanged", this.fn_calcTable, this);
            this.chk_a052.addEventHandler("onchanged", this.fn_calcTable, this);
            this.btn_down01.addEventHandler("onclick", this.btn_down00_onclick, this);
            this.btn_down02.addEventHandler("onclick", this.btn_down00_onclick, this);
            this.btn_down03.addEventHandler("onclick", this.btn_down00_onclick, this);
            this.btn_down041.addEventHandler("onclick", this.btn_down00_onclick, this);
            this.btn_down042.addEventHandler("onclick", this.btn_down00_onclick, this);
            this.btn_down05.addEventHandler("onclick", this.btn_down00_onclick, this);
            this.btn_down061.addEventHandler("onclick", this.btn_down00_onclick, this);
            this.btn_down062.addEventHandler("onclick", this.btn_down00_onclick, this);
            this.btn_down063.addEventHandler("onclick", this.btn_down00_onclick, this);
            this.btn_down064.addEventHandler("onclick", this.btn_down00_onclick, this);
            this.btn_down065.addEventHandler("onclick", this.btn_down00_onclick, this);
            this.btn_down071.addEventHandler("onclick", this.btn_down00_onclick, this);
            this.btn_down072.addEventHandler("onclick", this.btn_down00_onclick, this);
            this.FileUpload01.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload01.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload01.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.FileUpload02.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload02.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload02.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.FileUpload03.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload03.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload03.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.FileUpload041.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload041.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload041.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.FileUpload042.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload042.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload042.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.FileUpload05.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload05.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload05.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.FileUpload061.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload061.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload061.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.FileUpload062.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload062.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload062.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.FileUpload063.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload063.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload063.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.FileUpload064.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload064.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload064.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.FileUpload065.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload065.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload065.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.FileUpload071.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload071.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload071.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.FileUpload072.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload072.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload072.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.btn_down_zip.addEventHandler("onclick", this.btn_down_zip_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_1114.xfdl");

       
    };
}
)();
