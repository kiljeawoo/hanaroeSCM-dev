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
                this.set_name("OMG_DS_SC_1111");
                this.set_titletext("신규계약 상담신청 (신청자)");
                this._setFormPosition(0,0,800,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
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

            obj = new Dataset("ds_rc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CSLT_RQ_NO\" type=\"STRING\" size=\"256\" sumtext=\"상담신청번호\"/><Column id=\"BZNO\" type=\"STRING\" size=\"256\" sumtext=\"사업자등록번호\"/><Column id=\"ST_DT\" type=\"STRING\" size=\"256\" sumtext=\"신청일자\"/><Column id=\"CHRRNM\" type=\"STRING\" size=\"256\" sumtext=\"담당자\"/><Column id=\"BUYER_SHRT_BZPLNM\" type=\"STRING\" size=\"256\" sumtext=\"경제통합상품대분류코드\"/><Column id=\"BUYER_CHRG_BSNNM\" type=\"STRING\" size=\"256\" sumtext=\"경제통합상품중분류코드\"/><Column id=\"BUYER_NM\" type=\"STRING\" size=\"256\" sumtext=\"경제통합상품소분류코드\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\" sumtext=\"경제통합거래처코드\"/><Column id=\"BUYER_ENO\" type=\"STRING\" size=\"256\" sumtext=\"바이어개인번호\"/><Column id=\"CHRR_TELNO\" type=\"STRING\" size=\"256\" sumtext=\"담당자 전화지역번호\"/><Column id=\"CHRR_EMAIL\" type=\"STRING\" size=\"256\" sumtext=\"담당자 Email\"/><Column id=\"CHRR_MPNO\" type=\"STRING\" size=\"256\" sumtext=\"담당자 휴대전화\"/><Column id=\"CONM\" type=\"STRING\" size=\"256\" sumtext=\"업체명\"/><Column id=\"REPM\" type=\"STRING\" size=\"256\" sumtext=\"대표자\"/><Column id=\"REPM_TELNO\" type=\"STRING\" size=\"256\" sumtext=\"대표자 전화지역번호\"/><Column id=\"BIZTP\" type=\"STRING\" size=\"256\" sumtext=\"업태\"/><Column id=\"ITM\" type=\"STRING\" size=\"256\" sumtext=\"종목\"/><Column id=\"FZIP\" type=\"STRING\" size=\"256\" sumtext=\"앞자리우편번호\"/><Column id=\"RZIP\" type=\"STRING\" size=\"256\" sumtext=\"뒷자리우편번호\"/><Column id=\"ZIP_SQNO\" type=\"STRING\" size=\"256\" sumtext=\"우편번호일련번호\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"256\" sumtext=\"동이상주소\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"256\" sumtext=\"동이하주소\"/><Column id=\"BYR_SLAM\" type=\"STRING\" size=\"256\" sumtext=\"연간매출금액\"/><Column id=\"MSELPL\" type=\"STRING\" size=\"256\" sumtext=\"주판매처\"/><Column id=\"MFO_LATC\" type=\"STRING\" size=\"256\" sumtext=\"주력품목\"/><Column id=\"CO_CHR_MFT\" type=\"STRING\" size=\"256\" sumtext=\"회사성격 제조\"/><Column id=\"CO_CHR_REV\" type=\"STRING\" size=\"256\" sumtext=\"회사성격 수입\"/><Column id=\"CO_CHR_TOT_AGCY\" type=\"STRING\" size=\"256\" sumtext=\"회사성격 총판/대리점\"/><Column id=\"CO_CHR_VD\" type=\"STRING\" size=\"256\" sumtext=\"회사성격 벤더\"/><Column id=\"MAJ_LATC\" type=\"STRING\" size=\"256\" sumtext=\"주요품목\"/><Column id=\"CSLT_RQ_CNTN\" type=\"STRING\" size=\"256\" sumtext=\"상담신청내용\"/><Column id=\"STS\" type=\"STRING\" size=\"256\" sumtext=\"상태\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\" sumtext=\"비고\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\" sumtext=\"최초등록일시\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\" sumtext=\"최초등록자\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\" sumtext=\"최종변경일시\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\" sumtext=\"최종변경자\"/><Column id=\"CSLT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"CSLT_CLS\" type=\"STRING\" size=\"256\"/><Column id=\"CSLT_CTG1\" type=\"STRING\" size=\"256\"/><Column id=\"CSLT_CTG2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BZNO\"/><Col id=\"CSLT_RQ_NO\"/><Col id=\"ST_DT\"/><Col id=\"CHRRNM\"/><Col id=\"BUYER_SHRT_BZPLNM\"/><Col id=\"BUYER_CHRG_BSNNM\"/><Col id=\"BUYER_NM\"/><Col id=\"CHRR_TELNO\"/><Col id=\"CHRR_EMAIL\"/><Col id=\"CHRR_MPNO\"/><Col id=\"CONM\"/><Col id=\"REPM\"/><Col id=\"REPM_TELNO\"/><Col id=\"BIZTP\"/><Col id=\"ITM\"/><Col id=\"FZIP\"/><Col id=\"RZIP\"/><Col id=\"ZIP_SQNO\"/><Col id=\"DONGUP\"/><Col id=\"DONGBW\"/><Col id=\"BYR_SLAM\"/><Col id=\"MSELPL\"/><Col id=\"MFO_LATC\"/><Col id=\"CO_CHR_MFT\"/><Col id=\"CO_CHR_REV\"/><Col id=\"CO_CHR_TOT_AGCY\"/><Col id=\"CO_CHR_VD\"/><Col id=\"MAJ_LATC\"/><Col id=\"CSLT_RQ_CNTN\"/><Col id=\"STS\"/><Col id=\"RMK\"/><Col id=\"FSRG_DTM\"/><Col id=\"FS_RGM\"/><Col id=\"LSCHG_DTM\"/><Col id=\"LS_CHGM\"/></Row></Rows>");
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

            obj = new Dataset("ds_uploadresult02", this);
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

            obj = new Dataset("ds_ctg1", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_LCLFNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">130</Col><Col id=\"WRS_LCLFNM\">생활용품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">140</Col><Col id=\"WRS_LCLFNM\">가전/가구/인테리어</Col></Row><Row><Col id=\"NA_WRS_LCLC\">150</Col><Col id=\"WRS_LCLFNM\">문화/레포츠</Col></Row><Row><Col id=\"NA_WRS_LCLC\">160</Col><Col id=\"WRS_LCLFNM\">패션/침구</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ctg2", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_LCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_MCLFNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">034</Col><Col id=\"WRS_MCLFNM\">HMR(간편가정식)</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">011</Col><Col id=\"WRS_MCLFNM\">가루식품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">023</Col><Col id=\"WRS_MCLFNM\">건강식품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">024</Col><Col id=\"WRS_MCLFNM\">건강식품(한약재)</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">032</Col><Col id=\"WRS_MCLFNM\">건해산물</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">019</Col><Col id=\"WRS_MCLFNM\">과자</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">031</Col><Col id=\"WRS_MCLFNM\">김치·절임식품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">025</Col><Col id=\"WRS_MCLFNM\">담배</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">012</Col><Col id=\"WRS_MCLFNM\">대용식품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">030</Col><Col id=\"WRS_MCLFNM\">두부·묵류</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">010</Col><Col id=\"WRS_MCLFNM\">면류</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">015</Col><Col id=\"WRS_MCLFNM\">병·통조림</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">020</Col><Col id=\"WRS_MCLFNM\">빵·케익·떡</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">022</Col><Col id=\"WRS_MCLFNM\">아이스크림류</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">021</Col><Col id=\"WRS_MCLFNM\">안주류</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">029</Col><Col id=\"WRS_MCLFNM\">어육가공</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">013</Col><Col id=\"WRS_MCLFNM\">유아식품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">026</Col><Col id=\"WRS_MCLFNM\">유제품(냉장)</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">028</Col><Col id=\"WRS_MCLFNM\">육가공(냉동)</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">027</Col><Col id=\"WRS_MCLFNM\">육가공(냉장)</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">017</Col><Col id=\"WRS_MCLFNM\">음료</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">033</Col><Col id=\"WRS_MCLFNM\">의약외품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">014</Col><Col id=\"WRS_MCLFNM\">조미식품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">018</Col><Col id=\"WRS_MCLFNM\">주류</Col></Row><Row><Col id=\"NA_WRS_LCLC\">120</Col><Col id=\"WRS_LCLFNM\">가공식품</Col><Col id=\"NA_WRS_MCLC\">016</Col><Col id=\"WRS_MCLFNM\">커피·차류</Col></Row><Row><Col id=\"NA_WRS_LCLC\">130</Col><Col id=\"WRS_LCLFNM\">생활용품</Col><Col id=\"NA_WRS_MCLC\">010</Col><Col id=\"WRS_MCLFNM\">건강·미용</Col></Row><Row><Col id=\"NA_WRS_LCLC\">130</Col><Col id=\"WRS_LCLFNM\">생활용품</Col><Col id=\"NA_WRS_MCLC\">012</Col><Col id=\"WRS_MCLFNM\">세탁·세정제</Col></Row><Row><Col id=\"NA_WRS_LCLC\">130</Col><Col id=\"WRS_LCLFNM\">생활용품</Col><Col id=\"NA_WRS_MCLC\">015</Col><Col id=\"WRS_MCLFNM\">의약외품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">130</Col><Col id=\"WRS_LCLFNM\">생활용품</Col><Col id=\"NA_WRS_MCLC\">013</Col><Col id=\"WRS_MCLFNM\">일상가정용품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">130</Col><Col id=\"WRS_LCLFNM\">생활용품</Col><Col id=\"NA_WRS_MCLC\">011</Col><Col id=\"WRS_MCLFNM\">제지류</Col></Row><Row><Col id=\"NA_WRS_LCLC\">130</Col><Col id=\"WRS_LCLFNM\">생활용품</Col><Col id=\"NA_WRS_MCLC\">014</Col><Col id=\"WRS_MCLFNM\">주방용품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">130</Col><Col id=\"WRS_LCLFNM\">생활용품</Col><Col id=\"NA_WRS_MCLC\">017</Col><Col id=\"WRS_MCLFNM\">혼수주방용품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">140</Col><Col id=\"WRS_LCLFNM\">가전·가구·인테리어</Col><Col id=\"NA_WRS_MCLC\">017</Col><Col id=\"WRS_MCLFNM\">DIY</Col></Row><Row><Col id=\"NA_WRS_LCLC\">140</Col><Col id=\"WRS_LCLFNM\">가전·가구·인테리어</Col><Col id=\"NA_WRS_MCLC\">015</Col><Col id=\"WRS_MCLFNM\">가구</Col></Row><Row><Col id=\"NA_WRS_LCLC\">140</Col><Col id=\"WRS_LCLFNM\">가전·가구·인테리어</Col><Col id=\"NA_WRS_MCLC\">018</Col><Col id=\"WRS_MCLFNM\">농업용자재</Col></Row><Row><Col id=\"NA_WRS_LCLC\">140</Col><Col id=\"WRS_LCLFNM\">가전·가구·인테리어</Col><Col id=\"NA_WRS_MCLC\">010</Col><Col id=\"WRS_MCLFNM\">생활가전</Col></Row><Row><Col id=\"NA_WRS_LCLC\">140</Col><Col id=\"WRS_LCLFNM\">가전·가구·인테리어</Col><Col id=\"NA_WRS_MCLC\">012</Col><Col id=\"WRS_MCLFNM\">영상·음향가전</Col></Row><Row><Col id=\"NA_WRS_LCLC\">140</Col><Col id=\"WRS_LCLFNM\">가전·가구·인테리어</Col><Col id=\"NA_WRS_MCLC\">016</Col><Col id=\"WRS_MCLFNM\">인테리어</Col></Row><Row><Col id=\"NA_WRS_LCLC\">140</Col><Col id=\"WRS_LCLFNM\">가전·가구·인테리어</Col><Col id=\"NA_WRS_MCLC\">011</Col><Col id=\"WRS_MCLFNM\">주방가전</Col></Row><Row><Col id=\"NA_WRS_LCLC\">140</Col><Col id=\"WRS_LCLFNM\">가전·가구·인테리어</Col><Col id=\"NA_WRS_MCLC\">014</Col><Col id=\"WRS_MCLFNM\">컴퓨터</Col></Row><Row><Col id=\"NA_WRS_LCLC\">140</Col><Col id=\"WRS_LCLFNM\">가전·가구·인테리어</Col><Col id=\"NA_WRS_MCLC\">013</Col><Col id=\"WRS_MCLFNM\">통신·사무용가전</Col></Row><Row><Col id=\"NA_WRS_LCLC\">150</Col><Col id=\"WRS_LCLFNM\">문화·레포츠</Col><Col id=\"NA_WRS_MCLC\">020</Col><Col id=\"WRS_MCLFNM\">골프</Col></Row><Row><Col id=\"NA_WRS_LCLC\">150</Col><Col id=\"WRS_LCLFNM\">문화·레포츠</Col><Col id=\"NA_WRS_MCLC\">018</Col><Col id=\"WRS_MCLFNM\">등산·레져</Col></Row><Row><Col id=\"NA_WRS_LCLC\">150</Col><Col id=\"WRS_LCLFNM\">문화·레포츠</Col><Col id=\"NA_WRS_MCLC\">010</Col><Col id=\"WRS_MCLFNM\">문구·사무용품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">150</Col><Col id=\"WRS_LCLFNM\">문화·레포츠</Col><Col id=\"NA_WRS_MCLC\">012</Col><Col id=\"WRS_MCLFNM\">서적·음반</Col></Row><Row><Col id=\"NA_WRS_LCLC\">150</Col><Col id=\"WRS_LCLFNM\">문화·레포츠</Col><Col id=\"NA_WRS_MCLC\">019</Col><Col id=\"WRS_MCLFNM\">스포츠용품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">150</Col><Col id=\"WRS_LCLFNM\">문화·레포츠</Col><Col id=\"NA_WRS_MCLC\">015</Col><Col id=\"WRS_MCLFNM\">악기</Col></Row><Row><Col id=\"NA_WRS_LCLC\">150</Col><Col id=\"WRS_LCLFNM\">문화·레포츠</Col><Col id=\"NA_WRS_MCLC\">014</Col><Col id=\"WRS_MCLFNM\">애완·원예</Col></Row><Row><Col id=\"NA_WRS_LCLC\">150</Col><Col id=\"WRS_LCLFNM\">문화·레포츠</Col><Col id=\"NA_WRS_MCLC\">011</Col><Col id=\"WRS_MCLFNM\">완구</Col></Row><Row><Col id=\"NA_WRS_LCLC\">150</Col><Col id=\"WRS_LCLFNM\">문화·레포츠</Col><Col id=\"NA_WRS_MCLC\">013</Col><Col id=\"WRS_MCLFNM\">자동차용품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">150</Col><Col id=\"WRS_LCLFNM\">문화·레포츠</Col><Col id=\"NA_WRS_MCLC\">021</Col><Col id=\"WRS_MCLFNM\">장제용품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">150</Col><Col id=\"WRS_LCLFNM\">문화·레포츠</Col><Col id=\"NA_WRS_MCLC\">016</Col><Col id=\"WRS_MCLFNM\">종교용품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">150</Col><Col id=\"WRS_LCLFNM\">문화·레포츠</Col><Col id=\"NA_WRS_MCLC\">017</Col><Col id=\"WRS_MCLFNM\">표식및광고용품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">160</Col><Col id=\"WRS_LCLFNM\">패션·침구</Col><Col id=\"NA_WRS_MCLC\">014</Col><Col id=\"WRS_MCLFNM\">가방</Col></Row><Row><Col id=\"NA_WRS_LCLC\">160</Col><Col id=\"WRS_LCLFNM\">패션·침구</Col><Col id=\"NA_WRS_MCLC\">018</Col><Col id=\"WRS_MCLFNM\">귀금속</Col></Row><Row><Col id=\"NA_WRS_LCLC\">160</Col><Col id=\"WRS_LCLFNM\">패션·침구</Col><Col id=\"NA_WRS_MCLC\">013</Col><Col id=\"WRS_MCLFNM\">섬유용품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">160</Col><Col id=\"WRS_LCLFNM\">패션·침구</Col><Col id=\"NA_WRS_MCLC\">012</Col><Col id=\"WRS_MCLFNM\">스포츠웨어</Col></Row><Row><Col id=\"NA_WRS_LCLC\">160</Col><Col id=\"WRS_LCLFNM\">패션·침구</Col><Col id=\"NA_WRS_MCLC\">016</Col><Col id=\"WRS_MCLFNM\">시계</Col></Row><Row><Col id=\"NA_WRS_LCLC\">160</Col><Col id=\"WRS_LCLFNM\">패션·침구</Col><Col id=\"NA_WRS_MCLC\">015</Col><Col id=\"WRS_MCLFNM\">신발</Col></Row><Row><Col id=\"NA_WRS_LCLC\">160</Col><Col id=\"WRS_LCLFNM\">패션·침구</Col><Col id=\"NA_WRS_MCLC\">017</Col><Col id=\"WRS_MCLFNM\">안경</Col></Row><Row><Col id=\"NA_WRS_LCLC\">160</Col><Col id=\"WRS_LCLFNM\">패션·침구</Col><Col id=\"NA_WRS_MCLC\">011</Col><Col id=\"WRS_MCLFNM\">웨딩</Col></Row><Row><Col id=\"NA_WRS_LCLC\">160</Col><Col id=\"WRS_LCLFNM\">패션·침구</Col><Col id=\"NA_WRS_MCLC\">010</Col><Col id=\"WRS_MCLFNM\">의류</Col></Row><Row><Col id=\"NA_WRS_LCLC\">160</Col><Col id=\"WRS_LCLFNM\">패션·침구</Col><Col id=\"NA_WRS_MCLC\">021</Col><Col id=\"WRS_MCLFNM\">침구</Col></Row><Row><Col id=\"NA_WRS_LCLC\">160</Col><Col id=\"WRS_LCLFNM\">패션·침구</Col><Col id=\"NA_WRS_MCLC\">019</Col><Col id=\"WRS_MCLFNM\">피혁용품</Col></Row><Row><Col id=\"NA_WRS_LCLC\">160</Col><Col id=\"WRS_LCLFNM\">패션·침구</Col><Col id=\"NA_WRS_MCLC\">020</Col><Col id=\"WRS_MCLFNM\">한복</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static217", "absolute", "125", "279", "661", "29", null, null, this);
            obj.set_taborder("308");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "921", "308", "661", "29", null, null, this);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "921", "280", "661", "29", null, null, this);
            obj.set_taborder("280");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static200", "absolute", "125", "411", "661", "29", null, null, this);
            obj.set_taborder("259");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "125", "523", "661", "29", null, null, this);
            obj.set_taborder("85");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "125", "579", "661", "45", null, null, this);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "125", "551", "661", "29", null, null, this);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static50", "absolute", "125", "467", "661", "29", null, null, this);
            obj.set_taborder("97");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "125", "383", "661", "29", null, null, this);
            obj.set_taborder("96");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "125", "116", "660", "29", null, null, this);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "16", "116", "110", "29", null, null, this);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("입력결과");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "16", "96", "784", "20", null, null, this);
            obj.set_taborder("68");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "16", "161", "301", "21", null, null, this);
            obj.set_taborder("69");
            obj.set_text("신청자 기본정보<fc v='#ff0000ff'>*</fc>");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "125", "185", "661", "29", null, null, this);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "16", "185", "110", "29", null, null, this);
            obj.set_taborder("70");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "125", "213", "661", "29", null, null, this);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "16", "213", "110", "29", null, null, this);
            obj.set_taborder("73");
            obj.set_text("E-Mail");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_chrrEmail", "absolute", "129", "217", "270", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "16", "331", "301", "21", null, null, this);
            obj.set_taborder("75");
            obj.set_text("회사 기본정보<fc v='#ff0000ff'>*</fc>");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "125", "355", "661", "29", null, null, this);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "16", "355", "110", "29", null, null, this);
            obj.set_taborder("77");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "16", "383", "110", "29", null, null, this);
            obj.set_taborder("78");
            obj.set_text("대표자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "125", "439", "661", "29", null, null, this);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "403", "411", "110", "29", null, null, this);
            obj.set_taborder("80");
            obj.set_text("종목");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_itm", "absolute", "516", "415", "266", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "16", "467", "110", "57", null, null, this);
            obj.set_taborder("81");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "1199", "308", "110", "29", null, null, this);
            obj.set_taborder("82");
            obj.set_text("바이어 업무명");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "403", "523", "110", "29", null, null, this);
            obj.set_taborder("83");
            obj.set_text("주판매처");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static61", "absolute", "16", "579", "110", "45", null, null, this);
            obj.set_taborder("88");
            obj.set_text("제목\r\n(업체명,주품목)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static68", "absolute", "16", "551", "110", "29", null, null, this);
            obj.set_taborder("89");
            obj.set_text("주력품목");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static75", "absolute", "16", "523", "110", "29", null, null, this);
            obj.set_taborder("90");
            obj.set_text("연간매출");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static76", "absolute", "403", "551", "110", "29", null, null, this);
            obj.set_taborder("91");
            obj.set_text("회사성격");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "16", "145", null, "20", "-5", null, this);
            obj.set_taborder("92");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "16", "310", null, "20", "-5", null, this);
            obj.set_taborder("93");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_register", "absolute", "745", "75", "41", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_sum00", "absolute", "129", "120", "100", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_enable("false");
            obj.set_displaynulltext("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "233", "120", "28", "21", null, null, this);
            obj.set_taborder("98");
            obj.set_text("점");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_chrrNm", "absolute", "129", "189", "270", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "403", "355", "110", "29", null, null, this);
            obj.set_taborder("101");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_bzno", "absolute", "129", "359", "151", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_type("string");
            obj.set_mask("###-##-#####");
            obj.set_limitbymask("integer");
            obj.set_trimtype("right");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "403", "383", "110", "29", null, null, this);
            obj.set_taborder("102");
            obj.set_text("대표자연락처");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "16", "411", "110", "29", null, null, this);
            obj.set_taborder("103");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_repmAtel", "absolute", "516", "387", "51", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.set_innerdataset("@ds_tel");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_index("-1");

            obj = new Static("Static27", "absolute", "628", "387", "9", "21", null, null, this);
            obj.set_taborder("104");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "569", "387", "9", "21", null, null, this);
            obj.set_taborder("105");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_conm", "absolute", "516", "359", "266", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_repm", "absolute", "129", "387", "270", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_biztp", "absolute", "129", "415", "270", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "16", "439", "110", "29", null, null, this);
            obj.set_taborder("106");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dongUp", "absolute", "129", "471", "653", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("80");
            this.addChild(obj.name, obj);

            obj = new Static("Static142", "absolute", "189", "443", "9", "21", null, null, this);
            obj.set_taborder("107");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addr", "absolute", "259", "443", "21", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_chrwAtel", "absolute", "516", "189", "51", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_innerdataset("@ds_tel");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_index("-1");

            obj = new Static("Static31", "absolute", "628", "189", "9", "21", null, null, this);
            obj.set_taborder("94");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "569", "189", "9", "21", null, null, this);
            obj.set_taborder("95");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_chrwMpsvno", "absolute", "516", "217", "51", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_innerdataset("@ds_hp");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_index("0");

            obj = new Static("Static02", "absolute", "628", "217", "9", "21", null, null, this);
            obj.set_taborder("99");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "569", "217", "9", "21", null, null, this);
            obj.set_taborder("100");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "403", "185", "110", "29", null, null, this);
            obj.set_taborder("71");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "403", "213", "110", "29", null, null, this);
            obj.set_taborder("74");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_buyerChrgBsNm", "absolute", "1312", "312", "261", "21", null, null, this);
            obj.set_taborder("108");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("76");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_byrSlam", "absolute", "129", "527", "150", "21", null, null, this);
            obj.set_taborder("27");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "284", "527", "82", "21", null, null, this);
            obj.set_taborder("109");
            obj.set_text("(단위 : 억원)");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mSelPl", "absolute", "516", "527", "266", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mProduct", "absolute", "129", "555", "270", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_chrMft", "absolute", "520", "555", "53", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_text("제조");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_chrRev", "absolute", "578", "555", "53", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("수입");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_chrTotAgcy", "absolute", "635", "555", "97", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_text("총판/대리점");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_chrVd", "absolute", "734", "555", "57", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("벤더");
            obj.set_truevalue("4");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "16", "623", "110", "100", null, null, this);
            obj.set_taborder("110");
            obj.set_text("상담신청내용\r\n(업체 및 상품\r\n소개)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "125", "623", "661", "100", null, null, this);
            obj.set_taborder("111");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new TextArea("ta_cslt", "absolute", "129", "627", "653", "92", null, null, this);
            obj.set_taborder("35");
            obj.set_wordwrap("char");
            obj.style.set_padding("2 5 0 5");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("2048");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "16", "722", "110", "45", null, null, this);
            obj.set_taborder("112");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "125", "722", "661", "45", null, null, this);
            obj.set_taborder("113");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new TextArea("ta_rmk", "absolute", "129", "726", "653", "37", null, null, this);
            obj.set_taborder("36");
            obj.set_wordwrap("char");
            obj.style.set_padding("2 5 0 5");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("2048");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "13", "767", null, "20", "-2", null, this);
            obj.set_taborder("114");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "16", "783", "301", "21", null, null, this);
            obj.set_taborder("115");
            obj.set_text("회사설명 첨부파일<fc v='#ff0000ff'>*</fc>");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_file", "absolute", "16", "807", "770", "86", null, null, this);
            obj.set_taborder("64");
            obj.set_binddataset("ds_uploadresult00");
            obj.set_selecttype("row");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"684\"/><Column size=\"188\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"UPLOAD 파일\"/><Cell col=\"2\" text=\"파일크기\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:ORGFNAME\"/><Cell col=\"2\" text=\"expr:FILESIZE + ' byte '\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "16", "909", "301", "21", null, null, this);
            obj.set_taborder("116");
            obj.set_text("평가표");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "13", "893", null, "20", "-2", null, this);
            obj.set_taborder("117");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "133", "933", "246", "29", null, null, this);
            obj.set_taborder("118");
            obj.set_text("평가기준");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "133", "1213", "246", "29", null, null, this);
            obj.set_taborder("119");
            obj.set_cssclass("sta_WF_Label_c");
            obj.set_text("전년 세금계산서");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "133", "1073", "246", "141", null, null, this);
            obj.set_taborder("120");
            obj.set_text("매출규모\r\n(직전년)");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "133", "961", "246", "85", null, null, this);
            obj.set_taborder("121");
            obj.set_text("업  력");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", "14", "933", "120", "29", null, null, this);
            obj.set_taborder("122");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", "14", "1073", "120", "169", null, null, this);
            obj.set_taborder("123");
            obj.set_text("2. 실적<fc v='#ff0000ff'>*</fc>");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "14", "961", "120", "113", null, null, this);
            obj.set_taborder("124");
            obj.set_text("1. 업력<fc v='#ff0000ff'>*</fc>");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static62", "absolute", "378", "933", "290", "29", null, null, this);
            obj.set_taborder("125");
            obj.set_text("구  분");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", "667", "933", "60", "29", null, null, this);
            obj.set_taborder("126");
            obj.set_text("배점");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", "726", "933", "60", "29", null, null, this);
            obj.set_taborder("127");
            obj.set_text("득점");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static65", "absolute", "378", "961", "290", "29", null, null, this);
            obj.set_taborder("128");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_text("개업 1년 이상 ~ 3년 미만");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static66", "absolute", "667", "961", "60", "29", null, null, this);
            obj.set_taborder("129");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static67", "absolute", "726", "961", "60", "29", null, null, this);
            obj.set_taborder("130");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static69", "absolute", "378", "989", "290", "29", null, null, this);
            obj.set_taborder("131");
            obj.set_text("3년 이상 ~ 10년 미만");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static70", "absolute", "667", "989", "60", "29", null, null, this);
            obj.set_taborder("132");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static71", "absolute", "726", "989", "60", "29", null, null, this);
            obj.set_taborder("133");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static72", "absolute", "378", "1017", "290", "29", null, null, this);
            obj.set_taborder("134");
            obj.set_text("10년 이상");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static73", "absolute", "667", "1017", "60", "29", null, null, this);
            obj.set_taborder("135");
            obj.set_text("15");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static74", "absolute", "726", "1017", "60", "29", null, null, this);
            obj.set_taborder("136");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static77", "absolute", "133", "1045", "246", "29", null, null, this);
            obj.set_taborder("137");
            obj.set_text("사업자등록증");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static78", "absolute", "378", "1045", "408", "29", null, null, this);
            obj.set_taborder("138");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload01", "absolute", "710", "1049", "72", "21", null, null, this);
            obj.set_taborder("40");
            obj.getSetter("retry").set("0");
            obj.set_visible("true");
            obj.set_enable("false");
            obj.set_tooltiptext("사업자등록증");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", "378", "1073", "290", "29", null, null, this);
            obj.set_taborder("139");
            obj.set_text("1억원 미만");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static79", "absolute", "667", "1073", "60", "29", null, null, this);
            obj.set_taborder("140");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static80", "absolute", "726", "1073", "60", "29", null, null, this);
            obj.set_taborder("141");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static81", "absolute", "378", "1101", "290", "29", null, null, this);
            obj.set_taborder("142");
            obj.set_text("1억원 이상 ~ 3억원 미만");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static82", "absolute", "667", "1101", "60", "29", null, null, this);
            obj.set_taborder("143");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static83", "absolute", "726", "1101", "60", "29", null, null, this);
            obj.set_taborder("144");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static84", "absolute", "378", "1129", "290", "29", null, null, this);
            obj.set_taborder("145");
            obj.set_text("3억원 이상 ~ 10억원 미만");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static85", "absolute", "667", "1129", "60", "29", null, null, this);
            obj.set_taborder("146");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", "726", "1129", "60", "29", null, null, this);
            obj.set_taborder("147");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static87", "absolute", "378", "1157", "290", "29", null, null, this);
            obj.set_taborder("148");
            obj.set_text("10억원 이상 ~ 50억원 미만");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static88", "absolute", "667", "1157", "60", "29", null, null, this);
            obj.set_taborder("149");
            obj.set_text("15");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static89", "absolute", "726", "1157", "60", "29", null, null, this);
            obj.set_taborder("150");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static90", "absolute", "378", "1185", "290", "29", null, null, this);
            obj.set_taborder("151");
            obj.set_text("50억원 이상");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static91", "absolute", "667", "1185", "60", "29", null, null, this);
            obj.set_taborder("152");
            obj.set_text("20");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static92", "absolute", "726", "1185", "60", "29", null, null, this);
            obj.set_taborder("153");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "378", "1213", "408", "29", null, null, this);
            obj.set_taborder("154");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload02", "absolute", "710", "1217", "72", "21", null, null, this);
            obj.set_taborder("42");
            obj.getSetter("retry").set("0");
            obj.set_visible("true");
            obj.set_enable("false");
            obj.set_tooltiptext("전년 세금계산서");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static53", "absolute", "133", "1577", "246", "29", null, null, this);
            obj.set_taborder("155");
            obj.set_text("증빙자료");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static108", "absolute", "378", "1577", "408", "29", null, null, this);
            obj.set_taborder("160");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload05", "absolute", "710", "1581", "72", "21", null, null, this);
            obj.set_taborder("51");
            obj.getSetter("retry").set("0");
            obj.set_visible("true");
            obj.set_enable("false");
            obj.set_tooltiptext("온-오프라인거래");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static102", "absolute", "133", "1521", "246", "29", null, null, this);
            obj.set_taborder("161");
            obj.set_text("오프라인 거래");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static103", "absolute", "378", "1521", "290", "29", null, null, this);
            obj.set_taborder("162");
            obj.set_text("백화점, 대형마트, 편의점");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static104", "absolute", "667", "1521", "60", "29", null, null, this);
            obj.set_taborder("163");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static105", "absolute", "726", "1521", "60", "29", null, null, this);
            obj.set_taborder("164");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static106", "absolute", "378", "1549", "290", "29", null, null, this);
            obj.set_taborder("165");
            obj.set_text("온라인몰, 홈쇼핑");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static107", "absolute", "667", "1549", "60", "29", null, null, this);
            obj.set_taborder("166");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static109", "absolute", "726", "1549", "60", "29", null, null, this);
            obj.set_taborder("167");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static113", "absolute", "14", "1521", "120", "85", null, null, this);
            obj.set_taborder("171");
            obj.set_text("5. 상품력");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static114", "absolute", "133", "1381", "246", "29", null, null, this);
            obj.set_taborder("172");
            obj.set_text("기업신용평가 첨부파일");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static115", "absolute", "133", "1241", "246", "141", null, null, this);
            obj.set_taborder("173");
            obj.set_text("기업신용등급");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static116", "absolute", "14", "1241", "120", "169", null, null, this);
            obj.set_taborder("174");
            obj.set_text("3. 신용평가");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static117", "absolute", "378", "1241", "290", "29", null, null, this);
            obj.set_taborder("175");
            obj.set_text("D ~ CCC");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static118", "absolute", "667", "1241", "60", "29", null, null, this);
            obj.set_taborder("176");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static119", "absolute", "726", "1241", "60", "29", null, null, this);
            obj.set_taborder("177");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static120", "absolute", "378", "1269", "290", "29", null, null, this);
            obj.set_taborder("178");
            obj.set_text("CCC+ ~ B");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static121", "absolute", "667", "1269", "60", "29", null, null, this);
            obj.set_taborder("179");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static122", "absolute", "726", "1269", "60", "29", null, null, this);
            obj.set_taborder("180");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static123", "absolute", "378", "1297", "290", "29", null, null, this);
            obj.set_taborder("181");
            obj.set_text("B+ ~ BB+");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static124", "absolute", "667", "1297", "60", "29", null, null, this);
            obj.set_taborder("182");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static125", "absolute", "726", "1297", "60", "29", null, null, this);
            obj.set_taborder("183");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static126", "absolute", "378", "1325", "290", "29", null, null, this);
            obj.set_taborder("184");
            obj.set_text("BBB- ~ BBB+");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static127", "absolute", "667", "1325", "60", "29", null, null, this);
            obj.set_taborder("185");
            obj.set_text("20");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static128", "absolute", "726", "1325", "60", "29", null, null, this);
            obj.set_taborder("186");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static132", "absolute", "378", "1381", "408", "29", null, null, this);
            obj.set_taborder("187");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload03", "absolute", "710", "1385", "72", "21", null, null, this);
            obj.set_taborder("44");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_tooltiptext("기업신용평가");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static129", "absolute", "378", "1409", "290", "29", null, null, this);
            obj.set_taborder("189");
            obj.set_text("공장등록증");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static130", "absolute", "667", "1409", "60", "29", null, null, this);
            obj.set_taborder("190");
            obj.set_text("20");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static131", "absolute", "726", "1409", "60", "29", null, null, this);
            obj.set_taborder("191");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static133", "absolute", "133", "1409", "246", "29", null, null, this);
            obj.set_taborder("192");
            obj.set_text("제조공장 보유");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static134", "absolute", "14", "1409", "120", "113", null, null, this);
            obj.set_taborder("193");
            obj.set_text("4. 제조여부");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static138", "absolute", "133", "1437", "246", "29", null, null, this);
            obj.set_taborder("194");
            obj.set_text("증빙자료");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static135", "absolute", "378", "1437", "408", "29", null, null, this);
            obj.set_taborder("196");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload041", "absolute", "710", "1441", "72", "21", null, null, this);
            obj.set_taborder("46");
            obj.getSetter("retry").set("0");
            obj.set_visible("true");
            obj.set_enable("false");
            obj.set_tooltiptext("제조공장보유");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static136", "absolute", "133", "1947", "246", "50", null, null, this);
            obj.set_taborder("197");
            obj.set_text("공인인증 I\r\n(개당 5점)");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_wordwrap("char");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static137", "absolute", "14", "1947", "120", "239", null, null, this);
            obj.set_taborder("198");
            obj.set_text("6. 품질관리");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static140", "absolute", "378", "1947", "290", "50", null, null, this);
            obj.set_taborder("199");
            obj.set_text("ISO9001, ISO22000, FSSC22000, 일반HACCP,\r\nGMP(건강식품), 축산물 HACCP");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_wordwrap("char");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static141", "absolute", "667", "1947", "60", "99", null, null, this);
            obj.set_taborder("200");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static143", "absolute", "726", "1947", "60", "99", null, null, this);
            obj.set_taborder("201");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static150", "absolute", "133", "2045", "246", "29", null, null, this);
            obj.set_taborder("202");
            obj.set_text("ISO 인증 (5)");
            obj.set_cssclass("sta_WF_Label_c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static151", "absolute", "378", "2045", "408", "29", null, null, this);
            obj.set_taborder("203");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload061", "absolute", "710", "2049", "72", "21", null, null, this);
            obj.set_taborder("53");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_multiselect("false");
            obj.set_tooltiptext("공인인증_ISO");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static144", "absolute", "133", "2073", "246", "29", null, null, this);
            obj.set_taborder("204");
            obj.set_text("HACCP GMP인증 (5)");
            obj.set_cssclass("sta_WF_Label_c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static145", "absolute", "378", "2073", "408", "29", null, null, this);
            obj.set_taborder("205");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload062", "absolute", "710", "2077", "72", "21", null, null, this);
            obj.set_taborder("54");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_tooltiptext("공인인증_HACCP_GMP");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static146", "absolute", "133", "2101", "246", "29", null, null, this);
            obj.set_taborder("206");
            obj.set_text("전통식품(1)");
            obj.set_cssclass("sta_WF_Label_c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static153", "absolute", "378", "2101", "408", "29", null, null, this);
            obj.set_taborder("211");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload063", "absolute", "710", "2105", "72", "21", null, null, this);
            obj.set_taborder("55");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_tooltiptext("공인인증_전통식품");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static157", "absolute", "133", "2129", "246", "29", null, null, this);
            obj.set_taborder("215");
            obj.set_text("특허ㆍ실용신안 (1)");
            obj.set_cssclass("sta_WF_Label_c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static159", "absolute", "378", "2129", "408", "29", null, null, this);
            obj.set_taborder("217");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload064", "absolute", "710", "2133", "72", "21", null, null, this);
            obj.set_taborder("56");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_tooltiptext("공인인증_특허실용신안");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static160", "absolute", "133", "2157", "246", "29", null, null, this);
            obj.set_taborder("218");
            obj.set_text("소규모HACCP");
            obj.set_cssclass("sta_WF_Label_c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static161", "absolute", "378", "2185", "290", "50", null, null, this);
            obj.set_taborder("219");
            obj.set_text("유통계열사ㆍ조합\r\n하나로마트ㆍ농협경제 판매사업");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static162", "absolute", "667", "2185", "60", "50", null, null, this);
            obj.set_taborder("220");
            obj.set_text("3");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static163", "absolute", "726", "2185", "60", "50", null, null, this);
            obj.set_taborder("221");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static167", "absolute", "133", "2185", "246", "50", null, null, this);
            obj.set_taborder("225");
            obj.set_text("농협 경제\r\n사업 참여");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static174", "absolute", "14", "2185", "120", "190", null, null, this);
            obj.set_taborder("232");
            obj.set_text("7. 기타");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static183", "absolute", "378", "2234", "408", "29", null, null, this);
            obj.set_taborder("241");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload071", "absolute", "710", "2238", "72", "21", null, null, this);
            obj.set_taborder("59");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_tooltiptext("농협경제사업");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static184", "absolute", "14", "2374", "365", "29", null, null, this);
            obj.set_taborder("242");
            obj.set_cssclass("sta_WF_Label_c");
            obj.set_text("소계");
            this.addChild(obj.name, obj);

            obj = new Static("sta_add_total", "absolute", "378", "2374", "408", "29", null, null, this);
            obj.set_taborder("245");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_a01", "absolute", "750", "963", "20", "83", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("39");
            obj.set_codecolumn("level");
            obj.set_datacolumn("point");
            obj.set_innerdataset("@ds_rdo01");
            obj.set_index("-1");

            obj = new Radio("rdo_a02", "absolute", "750", "1074", "20", "141", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("41");
            obj.set_codecolumn("level");
            obj.set_datacolumn("point");
            obj.set_innerdataset("@ds_rdo02");
            obj.set_index("-1");

            obj = new Static("Static195", "absolute", "378", "1353", "290", "29", null, null, this);
            obj.set_taborder("253");
            obj.set_text("A- ~ AAA");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static196", "absolute", "667", "1353", "60", "29", null, null, this);
            obj.set_taborder("254");
            obj.set_text("25");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static197", "absolute", "726", "1353", "60", "29", null, null, this);
            obj.set_taborder("255");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_a03", "absolute", "750", "1242", "20", "141", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("43");
            obj.set_codecolumn("level");
            obj.set_datacolumn("point");
            obj.set_innerdataset("@ds_rdo03");
            obj.set_enable("true");
            obj.set_index("-1");

            obj = new CheckBox("chk_a041", "absolute", "750", "1413", "25", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_value("false");
            obj.set_truevalue("20");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static201", "absolute", "125", "495", "661", "29", null, null, this);
            obj.set_taborder("260");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dongBw", "absolute", "129", "499", "653", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_majLatc", "absolute", "129", "590", "653", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("128");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_chrwHtel", "absolute", "578", "189", "48", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_chrwStel", "absolute", "637", "189", "48", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_inputtype("digit");
            obj.set_maxlength("4");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_chrwMphno", "absolute", "578", "217", "48", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_chrwMpsqno", "absolute", "637", "217", "48", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_inputtype("digit");
            obj.set_maxlength("4");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_repmHtel", "absolute", "578", "387", "48", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_inputtype("digit");
            obj.set_maxlength("4");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_repmStel", "absolute", "637", "387", "48", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_inputtype("digit");
            obj.set_maxlength("4");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fZip", "absolute", "129", "443", "58", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_inputtype("digit");
            obj.set_maxlength("3");
            obj.style.set_align("right middle");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_rZip", "absolute", "198", "443", "58", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_inputtype("digit");
            obj.set_maxlength("3");
            obj.style.set_align("right middle");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down02", "absolute", "382", "1217", "330", "21", null, null, this);
            obj.set_taborder("263");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down05", "absolute", "382", "1581", "330", "21", null, null, this);
            obj.set_taborder("264");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down03", "absolute", "382", "1385", "330", "21", null, null, this);
            obj.set_taborder("265");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down041", "absolute", "382", "1441", "330", "21", null, null, this);
            obj.set_taborder("266");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down061", "absolute", "382", "2049", "330", "21", null, null, this);
            obj.set_taborder("267");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down062", "absolute", "382", "2077", "330", "21", null, null, this);
            obj.set_taborder("268");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down063", "absolute", "382", "2105", "330", "21", null, null, this);
            obj.set_taborder("269");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down064", "absolute", "382", "2133", "330", "21", null, null, this);
            obj.set_taborder("270");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUploadCmpy", "absolute", "642", "783", "72", "21", null, null, this);
            obj.set_taborder("37");
            obj.getSetter("retry").set("0");
            obj.set_enable("true");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_fileDel", "absolute", "714", "783", "72", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_text("파일삭제");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_naBzplc", "absolute", "1312", "284", "120", "21", null, null, this);
            obj.set_taborder("273");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_buyerEno", "absolute", "1453", "284", "120", "21", null, null, this);
            obj.set_taborder("274");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static203", "absolute", "812", "280", "110", "29", null, null, this);
            obj.set_taborder("275");
            obj.set_text("바이어 사업장명");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static204", "absolute", "812", "308", "110", "29", null, null, this);
            obj.set_taborder("276");
            obj.set_text("바이어명");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_buyerShrtBxplNm", "absolute", "925", "284", "270", "21", null, null, this);
            obj.set_taborder("63");
            obj.set_readonly("true");
            obj.style.set_background("#ecececff");
            obj.style.set_border("1 solid #bfbfbfff");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("60");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_spot", "absolute", "205", "500", "22", "21", null, null, this);
            obj.set_taborder("277");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_buyerNm", "absolute", "925", "312", "270", "21", null, null, this);
            obj.set_taborder("278");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "16", "258", "301", "21", null, null, this);
            obj.set_taborder("279");
            obj.set_text("상담 희망카테고리<fc v='#ff0000ff'>*</fc>");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down01", "absolute", "382", "1049", "330", "21", null, null, this);
            obj.set_taborder("281");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static202", "absolute", "14", "1605", "365", "29", null, null, this);
            obj.set_taborder("282");
            obj.set_text("소계");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pt_total", "absolute", "378", "1605", "408", "29", null, null, this);
            obj.set_taborder("285");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "13", "1895", null, "21", "4.38%", null, this);
            obj.set_taborder("289");
            obj.set_text("□ 가점 및 감점");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down071", "absolute", "382", "2238", "330", "21", null, null, this);
            obj.set_taborder("291");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static182", "absolute", "133", "2234", "246", "29", null, null, this);
            obj.set_taborder("292");
            obj.set_text("증빙자료");
            obj.set_cssclass("sta_WF_Label_c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static208", "absolute", "14", "1920", "120", "29", null, null, this);
            obj.set_taborder("293");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label_c");
            obj.style.set_padding("2 7 0 7");
            this.addChild(obj.name, obj);

            obj = new Static("Static209", "absolute", "133", "1920", "246", "29", null, null, this);
            obj.set_taborder("294");
            obj.set_text("평가기준");
            obj.set_cssclass("sta_WF_Label_c");
            obj.style.set_padding("2 7 0 7");
            this.addChild(obj.name, obj);

            obj = new Static("Static210", "absolute", "378", "1920", "290", "29", null, null, this);
            obj.set_taborder("295");
            obj.set_text("구  분");
            obj.set_cssclass("sta_WF_Label_c");
            obj.style.set_padding("2 7 0 7");
            this.addChild(obj.name, obj);

            obj = new Static("Static211", "absolute", "667", "1920", "60", "29", null, null, this);
            obj.set_taborder("296");
            obj.set_text("배점");
            obj.set_cssclass("sta_WF_Label_c");
            obj.style.set_padding("2 7 0 7");
            this.addChild(obj.name, obj);

            obj = new Static("Static212", "absolute", "726", "1920", "60", "29", null, null, this);
            obj.set_taborder("297");
            obj.set_text("득점");
            obj.set_cssclass("sta_WF_Label_c");
            obj.style.set_padding("2 7 0 7");
            this.addChild(obj.name, obj);

            obj = new Button("btn_bookmark", "absolute", "16", "75", "15", "21", null, null, this);
            obj.set_taborder("298");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("sta_location", "absolute", "34", "75", "185", "21", null, null, this);
            obj.set_taborder("299");
            obj.set_text("신규계약 상담신청");
            obj.set_cssclass("sta_WF_Location");
            this.addChild(obj.name, obj);

            obj = new Static("Static158", "absolute", "260", "120", "498", "21", null, null, this);
            obj.set_taborder("301");
            obj.set_text("(식품 70점 이상, 비식품 60점 이상 획득업체 계약가능)");
            this.addChild(obj.name, obj);

            obj = new Div("div_privacy", "absolute", "0", "2669", "800", "260", null, null, this);
            obj.set_taborder("62");
            this.addChild(obj.name, obj);
            obj = new TextArea("txa_privacy", "absolute", "16", "25", null, "200", "10", null, this.div_privacy);
            obj.set_taborder("3");
            obj.set_tabstop("false");
            obj.set_scrollbars("autovert");
            obj.set_wordwrap("char");
            obj.set_readonly("true");
            obj.set_cssclass("txt_modern");
            obj.style.set_padding("5 5 5 5");
            this.div_privacy.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", null, "0", "40", "21", "8", null, this.div_privacy);
            obj.set_taborder("4");
            obj.set_text("<fc v='#ff0000ff'>(필수)</fc>");
            obj.set_usedecorate("true");
            this.div_privacy.addChild(obj.name, obj);
            obj = new CheckBox("chk_agree", "absolute", null, "0", "217", "21", "18", null, this.div_privacy);
            obj.set_taborder("0");
            obj.set_text("개인정보 수집 및 이용 동의");
            obj.style.set_font("bold 9 Gulim");
            this.div_privacy.addChild(obj.name, obj);
            obj = new Button("btn_insert", "absolute", null, "235", "84", "21", "55", null, this.div_privacy);
            obj.set_taborder("2");
            obj.set_text("상담가능");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            obj.set_visible("false");
            this.div_privacy.addChild(obj.name, obj);
            obj = new Button("btn_register01", "absolute", null, "235", "41", "21", "10", null, this.div_privacy);
            obj.set_taborder("1");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.div_privacy.addChild(obj.name, obj);

            obj = new Static("Static213", "absolute", "16", "9", "769", "55", null, null, this);
            obj.set_taborder("303");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_text("정보 누락 및 불일치 시 계약상담이 지연되거나 중단 혹은 취소될 수 있습니다.\r\n신속하고 정확한 계약상담을 위해 상담신청에 앞서 농협계약제도와 서류를 확인하여 주시기 바랍니다.");
            obj.style.set_padding("0 20 0 20");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_hope_dsc", "absolute", "129", "283", "270", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_hope_dsc_innerdataset = new Dataset("cbo_hope_dsc_innerdataset", this.cbo_hope_dsc);
            cbo_hope_dsc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">001</Col><Col id=\"datacolumn\">식품</Col></Row><Row><Col id=\"codecolumn\">002</Col><Col id=\"datacolumn\">비식품</Col></Row></Rows>");
            obj.set_innerdataset(cbo_hope_dsc_innerdataset);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("-1");

            obj = new Static("Static215", "absolute", "16", "279", "110", "29", null, null, this);
            obj.set_taborder("306");
            obj.set_text("분류");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static216", "absolute", "403", "279", "110", "29", null, null, this);
            obj.set_taborder("307");
            obj.set_text("카테고리");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_ctgr_lrg", "absolute", "516", "283", "130", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_innerdataset("@ds_ctg1");
            obj.set_codecolumn("NA_WRS_LCLC");
            obj.set_datacolumn("WRS_LCLFNM");
            obj.set_enable("false");

            obj = new Combo("cbo_ctgr_mid", "absolute", "650", "283", "130", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_innerdataset("@ds_ctg2");
            obj.set_codecolumn("NA_WRS_MCLC");
            obj.set_datacolumn("WRS_MCLFNM");
            obj.set_enable("false");

            obj = new Static("Static139", "absolute", "378", "1465", "290", "29", null, null, this);
            obj.set_taborder("311");
            obj.set_text("타사와의 제조하도급 거래증빙");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static152", "absolute", "667", "1465", "60", "29", null, null, this);
            obj.set_taborder("312");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static214", "absolute", "726", "1465", "60", "29", null, null, this);
            obj.set_taborder("313");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static218", "absolute", "133", "1493", "246", "29", null, null, this);
            obj.set_taborder("314");
            obj.set_text("증빙자료");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static219", "absolute", "378", "1493", "408", "29", null, null, this);
            obj.set_taborder("315");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload042", "absolute", "710", "1497", "72", "21", null, null, this);
            obj.set_taborder("48");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_tooltiptext("OEM거래");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_a042", "absolute", "750", "1469", "25", "21", null, null, this);
            obj.set_taborder("47");
            obj.set_value("0");
            obj.set_truevalue("10");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down042", "absolute", "382", "1497", "330", "21", null, null, this);
            obj.set_taborder("318");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static220", "absolute", "133", "1465", "246", "29", null, null, this);
            obj.set_taborder("319");
            obj.set_text("OEM거래");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static221", "absolute", "133", "1549", "246", "29", null, null, this);
            obj.set_taborder("320");
            obj.set_text("온라인 거래");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static54", "absolute", "14", "1633", "772", "250", null, null, this);
            obj.set_taborder("322");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_wordwrap("char");
            obj.set_text("*증빙자료 제출 및 판단방법*\r\n1. 매출규모 : 부가세자료(증명원+합계표) 또는 최신 표준재무제표 증명원 등\r\n2. 기업신용평가 (만료기간 1개월 전 자료)\r\n ① 기업신용평가 발급자료 스캔본 \r\n ② 해당 신용평가사에 제출처 선정 \"농협경제지주 마트상품부\"\r\n3. 제조공장 보유 : 자사보유 공장의 공장등록증만 해당\r\n4. OEM거래 \r\n ① 자사보유 제조시설로 타 사업자와 제조하도급 거래를 하는 경우에 해당 \r\n ② OEM상품라벨 이미지 등\r\n5. 상품력 : 부가가치세자료(증명원+합계표)");
            obj.style.set_linespace("10");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_a06", "absolute", "733", "1986", "45", "21", null, null, this);
            obj.set_taborder("52");
            obj.set_maxlength("2");
            obj.set_lengthunit("ascii");
            obj.set_inputtype("number");
            obj.set_value("0");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static59", "absolute", "378", "1996", "290", "50", null, null, this);
            obj.set_taborder("324");
            obj.set_text("전통식품품질인증, 특허증, 소규모 HACCP,\r\n실용신안");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static95", "absolute", "133", "1996", "246", "50", null, null, this);
            obj.set_taborder("328");
            obj.set_text("공인인증 II\r\n(개당 1점)");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_wordwrap("char");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "378", "2157", "408", "29", null, null, this);
            obj.set_taborder("329");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload065", "absolute", "710", "2161", "72", "21", null, null, this);
            obj.set_taborder("57");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_tooltiptext("공인인증_소규모HACCP");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down065", "absolute", "382", "2161", "330", "21", null, null, this);
            obj.set_taborder("331");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_a071", "absolute", "758", "2199", "25", "21", null, null, this);
            obj.set_taborder("58");
            obj.set_value("0");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "378", "2262", "290", "29", null, null, this);
            obj.set_taborder("333");
            obj.set_text("사회적 기업, 중소기업");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static96", "absolute", "667", "2262", "60", "29", null, null, this);
            obj.set_taborder("334");
            obj.set_text("2");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static97", "absolute", "726", "2262", "60", "29", null, null, this);
            obj.set_taborder("335");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static98", "absolute", "378", "2290", "408", "29", null, null, this);
            obj.set_taborder("336");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload072", "absolute", "710", "2294", "72", "21", null, null, this);
            obj.set_taborder("61");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_tooltiptext("동반성장");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down072", "absolute", "382", "2294", "330", "21", null, null, this);
            obj.set_taborder("338");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static99", "absolute", "133", "2290", "246", "29", null, null, this);
            obj.set_taborder("339");
            obj.set_text("증빙자료");
            obj.set_cssclass("sta_WF_Label_c");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_a072", "absolute", "758", "2266", "25", "21", null, null, this);
            obj.set_taborder("60");
            obj.set_value("0");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static100", "absolute", "133", "2262", "246", "29", null, null, this);
            obj.set_taborder("341");
            obj.set_text("동반성장");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static101", "absolute", "133", "2318", "246", "57", null, null, this);
            obj.set_taborder("342");
            obj.set_text("기타평가");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static110", "absolute", "667", "2318", "60", "29", null, null, this);
            obj.set_taborder("343");
            obj.set_text("△10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static111", "absolute", "378", "2318", "290", "29", null, null, this);
            obj.set_taborder("344");
            obj.set_text("카테고리 포화도");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static147", "absolute", "667", "2346", "60", "29", null, null, this);
            obj.set_taborder("346");
            obj.set_text("△10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static148", "absolute", "378", "2346", "290", "29", null, null, this);
            obj.set_taborder("347");
            obj.set_text("하향 카테고리 계약검토");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static112", "absolute", "726", "2318", "60", "57", null, null, this);
            obj.set_taborder("348");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static149", "absolute", "14", "2402", "772", "250", null, null, this);
            obj.set_taborder("349");
            obj.set_text("*증빙자료 제출 및 판단방법*\r\n6. 해당 인증서 스캔본\r\n ① 공인인증Ⅰ(개당 5점), 공인인증 Ⅱ(개당 1점) \r\n ② 공인인증Ⅰ과 공인인증 Ⅱ 합산 최대 10점 \r\n7. 농협경제 사업참여 : 연간 거래실적 1억 이상일 때 가점되며 부가세 증명원\r\n8. 동반성장 : 사회적기업, 중소기업 인증 보유시 ex) 이노비즈, 메인비즈, 벤처비즈\r\n  \r\n○ 기타평가사항이 있는 이유\r\n - 신규계약의 목적은 고객니즈에 충족하는 신상품 확보에 있습니다. 이미 농협에 취급하고 있는 품목과 제품수명주기 쇠퇴기에\r\n   해당되는 카테고리의 계약 필요성이 낮다는 점에서 감점을 적용합니다.");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_linespace("10");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_a051", "absolute", "750", "1525", "25", "21", null, null, this);
            obj.set_taborder("49");
            obj.set_value("0");
            obj.set_truevalue("5");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_a052", "absolute", "750", "1553", "25", "21", null, null, this);
            obj.set_taborder("50");
            obj.set_value("0");
            obj.set_truevalue("5");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear", "absolute", "677", "75", "60", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 800, 260, this.div_privacy,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("62");

            	}
            );
            this.div_privacy.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 800, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("신규계약 상담신청 (신청자)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edt_chrrNm","value","ds_rc","CHRRNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_chrrEmail","value","ds_rc","CHRR_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_repm","value","ds_rc","REPM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edt_biztp","value","ds_rc","BIZTP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","mae_bzno","value","ds_rc","BZNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edt_conm","value","ds_rc","CONM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","edt_itm","value","ds_rc","ITM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","edt_dongUp","value","ds_rc","DONGUP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","edt_dongBw","value","ds_rc","DONGBW");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","mae_byrSlam","value","ds_rc","BYR_SLAM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","edt_mSelPl","value","ds_rc","MSELPL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","edt_mProduct","value","ds_rc","MFO_LATC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","chk_chrMft","value","ds_rc","CO_CHR_MFT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","chk_chrRev","value","ds_rc","CO_CHR_REV");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","chk_chrTotAgcy","value","ds_rc","CO_CHR_TOT_AGCY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","chk_chrVd","value","ds_rc","CO_CHR_VD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","ta_cslt","value","ds_rc","CSLT_RQ_CNTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","ta_rmk","value","ds_rc","RMK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","edt_majLatc","value","ds_rc","MAJ_LATC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","cbo_chrwAtel","value","ds_rc","CHRW_ATEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","cbo_chrwMpsvno","value","ds_rc","CHRW_MPSVNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","cbo_repmAtel","value","ds_rc","REPM_ATEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edt_chrwHtel","value","ds_rc","CHRW_HTEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edt_chrwStel","value","ds_rc","CHRW_STEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","edt_chrwMphno","value","ds_rc","CHRW_MPHNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edt_chrwMpsqno","value","ds_rc","CHRW_MPSQNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edt_repmHtel","value","ds_rc","REPM_HTEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","edt_repmStel","value","ds_rc","REPM_STEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","edt_rZip","value","ds_rc","RZIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","edt_fZip","value","ds_rc","FZIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","rdo_a01","value","ds_rcev","EVL_HDNG_A1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","rdo_a02","value","ds_rcev","EVL_HDNG_A2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","rdo_a03","value","ds_rcev","EVL_HDNG_A3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","chk_a041","value","ds_rcev","EVL_HDNG_A4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","mae_sum00","value","ds_rcev","EVL_HDNGCN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item47","edt_naBzplc","value","ds_rc","NA_BZPLC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item48","edt_buyerEno","value","ds_rc","BUYER_ENO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","edt_buyerShrtBxplNm","value","ds_rc","BUYER_SHRT_BZPLNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","edt_buyerChrgBsNm","value","ds_rc","BUYER_CHRG_BSNNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item45","edt_buyerNm","value","ds_rc","BUYER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item46","cbo_hope_dsc","value","ds_rc","CSLT_CLS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item49","cbo_ctgr_lrg","value","ds_rc","CSLT_CTG1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item50","cbo_ctgr_mid","value","ds_rc","CSLT_CTG2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item51","chk_a042","value","ds_rcev","EVL_HDNG_A5");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","chk_a071","value","ds_rcev","EVL_HDNG_B2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","chk_a072","value","ds_rcev","EVL_HDNG_B3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","chk_a051","value","ds_rcev","EVL_HDNG_A6");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","chk_a052","value","ds_rcev","EVL_HDNG_B1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","edt_a06","value","ds_rcev","EVL_HDNG_B11");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_1111.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("OMG_DS_SC_1111.xfdl", "lib::comPolicy.xjs");
        this.registerScript("OMG_DS_SC_1111.xfdl", function() {
        //include "lib::comLib.xjs";
        //include "lib::comPolicy.xjs";

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

        var point01 = 0; // 업력
        var point02 = 0; // 실적
        var point03 = 0; // 신용평가
        var point041 = 0; // 제조공장
        var point042 = 0; // OEM
        var point051 = 0; // 오프라인거래
        var point052 = 0; // 온라인거래
        var point06 = 0; // [가점] 공인인증 I+II
        var point071 = 0; // [가점] 농협경제사업참여
        var point072 = 0; // [가점] 동반성장

        var tot1;
        var tot2;
        var tot3;

        this.OMG_DS_SC_1111_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통

        	var param = [
        	   {code:"HP", dsName:"ds_hp", selecttype:""}, 
        	   {code:"TEL", dsName:"ds_tel", selecttype:""}
        	];

        	this.gfn_setPortalCommonCode(param);
        	this.div_privacy.txa_privacy.set_value(this.policyPrivacy);
        }

        this.btn_register_onclick = function(obj,e)
        {
        	this.insert();
        }

        // 등록
        this.insert = function()
        {
        	if (!this.fn_validationCheck()) {
        		return;
        	} else if (!confirm("등록하시겠습니까?")) {
        		return;
        	}

        	var chrr_telNo	= this.gfn_nullToEmpty(this.cbo_chrwAtel.value)
        					+ this.gfn_nullToEmpty(this.edt_chrwHtel.value)
        					+ this.gfn_nullToEmpty(this.edt_chrwStel.value);

        	var chrr_mpno	= this.gfn_nullToEmpty(this.cbo_chrwMpsvno.value)
        					+ this.gfn_nullToEmpty(this.edt_chrwMphno.value)
        					+ this.gfn_nullToEmpty(this.edt_chrwMpsqno.value);

        	var repm_telNo	= this.gfn_nullToEmpty(this.cbo_repmAtel.value)
        					+ this.gfn_nullToEmpty(this.edt_repmHtel.value)
        					+ this.gfn_nullToEmpty(this.edt_repmStel.value);

        	this.ds_rc.setColumn(this.ds_rc.rowcount - 1, "CHRR_TELNO", chrr_telNo);
        	this.ds_rc.setColumn(this.ds_rc.rowcount - 1, "CHRR_MPNO", chrr_mpno);
        	this.ds_rc.setColumn(this.ds_rc.rowcount - 1, "REPM_TELNO", repm_telNo);
        	this.ds_rc.setColumn(this.ds_rc.rowcount - 1, "CSLT_DSC", "102"); // 개선 이후 기존 마트상품부 상담과 분리 (220722)

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
        		alert(ErrorMsg);
        		return;
        	}

        	if (svcID == "insert") {
        		alert("정상적으로 등록되었습니다.\n\n진행결과보기 메뉴에서 진행상황을 조회할 수 있습니다.");
        		this.reload();
        	}
        }

        /* Validation Check */
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
        	
        	// 회사설명 첨부자료 검사
        	if (this.ds_uploadresult00.rowcount == 0) {
        		this.FileUploadCmpy.setFocus();
        		this.alert('회사설명 첨부자료를 첨부하세요.');
        		return false;
        	}
        	
        	// 평가표
        	if (this.gfn_isNull(this.rdo_a01.value)) {
        		this.rdo_a01.setFocus();
        		this.alert('평가표 업력을 선택해주세요.');
        		return false;
        	} else if (this.gfn_isNull(this.rdo_a02.value)) {
        		this.rdo_a02.setFocus();
        		this.alert('평가표 실적을 선택해주세요.');
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
        	
        	// 개인정보수집동의
        	if (!this.div_privacy.chk_agree.value) {
        		this.div_privacy.chk_agree.setFocus();
        		this.alert('개인 정보 수집 및 이용에 동의해 주시기 바랍니다.');
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

        //gfn_setCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	//콤보에 최상단Row보이도록 설정
        	this.cbo_chrwAtel.set_index(0);
        	this.cbo_chrwMpsvno.set_index(0);
        	this.cbo_repmAtel.set_index(0);
        }

        /* 평가표 첨부자료 */
        this.FileUpload_onitemchanged = function(obj,e)
        {
        	this.gfn_callUpload(obj);
        }

        this.FileUpload_onsuccess = function(obj,e)
        {
        	var name = obj.name.replace("FileUpload", ""); // 첨부파일코드
        	var dmc = this.ds_uploadresult.findRow("DCM_C", name).toString(); // 파일Row위치

        	if (e.datasets != null) {
        		var nRow;
        		if (dmc == -1) {
        			nRow = this.ds_uploadresult.rowposition;
        			if (this.ds_uploadresult.rowposition == "-1") {
        				nRow = this.ds_uploadresult.addRow();
        			} else {
        				nRow = this.ds_uploadresult.addRow();
        			}
        		} else {
        			nRow = dmc;
        		}
        		this.ds_uploadresult02.copyData(e.datasets[0]);
        		
        		var fName = this.ds_uploadresult02.getColumn(0, "FILENAME");
        		var fType = this.ds_uploadresult02.getColumn(0, "FILETYPE");
        		var fSize = this.ds_uploadresult02.getColumn(0, "FILESIZE");
        		var orgName = this.ds_uploadresult02.getColumn(0, "ORGFNAME");
        		var sysName = this.ds_uploadresult02.getColumn(0, "SYSTEMFILENAME");
        		
        		this.ds_uploadresult.setColumn(nRow, "DCM_C", name);
        		this.ds_uploadresult.setColumn(nRow, "FILENAME", this.gfn_nvl(obj.tooltiptext, fName));
        		this.ds_uploadresult.setColumn(nRow, "FILETYPE", fType);
        		this.ds_uploadresult.setColumn(nRow, "FILESIZE", fSize);
        		this.ds_uploadresult.setColumn(nRow, "ORGFNAME", orgName);
        		this.ds_uploadresult.setColumn(nRow, "SYSTEMFILENAME", sysName);
        		
        		this.all["edt_down"+name].set_value(e.datasets[0].getColumn(0, "ORGFNAME"));
        	} else {
        		this.alert(e.errormsg);
        	}
        }

        this.FileUpload_onerror = function(obj,e)
        {
        }

        /* 회사소개 첨부자료 */
        this.FileUploadCmpy_onitemchanged = function(obj,e)
        {
        	this.gfn_callUpload(obj);
        }

        this.FileUploadCmpy_onsuccess = function(obj,e)
        {
        	if (e.datasets != null) {
        		this.ds_uploadresult01.copyData(e.datasets[0]);
        		var fName = this.ds_uploadresult01.getColumn(0, "FILENAME");
        		var fType = this.ds_uploadresult01.getColumn(0, "FILETYPE");
        		var fSize = this.ds_uploadresult01.getColumn(0, "FILESIZE");
        		var orgName = this.ds_uploadresult01.getColumn(0, "ORGFNAME");
        		var sysName = this.ds_uploadresult01.getColumn(0, "SYSTEMFILENAME");

        		var nRow = this.ds_uploadresult00.rowposition;
        		if (this.ds_uploadresult00.rowposition == "-1") {
        			nRow = this.ds_uploadresult00.addRow();
        		} else {
        			nRow = this.ds_uploadresult00.addRow();
        		}

        		this.ds_uploadresult00.setColumn(nRow, "FILENAME", fName);
        		this.ds_uploadresult00.setColumn(nRow, "FILETYPE", fType);
        		this.ds_uploadresult00.setColumn(nRow, "FILESIZE", fSize);
        		this.ds_uploadresult00.setColumn(nRow, "ORGFNAME", orgName);
        		this.ds_uploadresult00.setColumn(nRow, "SYSTEMFILENAME", sysName);
        	} else {
        		this.alert(e.errormsg);
        	}
        }

        this.FileUploadCmpy_onerror = function(obj,e)
        {
        }

        this.btn_fileDel_onclick = function(obj,e)
        {
        	for (var i = this.ds_uploadresult00.getRowCount()-1; i >= 0; i--) {
        		if (this.ds_uploadresult00.getColumn(i, "CHK") == 1) {
        			this.ds_uploadresult00.deleteRow(i);
        		}
        	}
        }

        this.btn_addr_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"U", dsArg:this.ds_rsclist};
        	var sOption = "autosize=true, title=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("zipCode", "OMG.PT::OMG_DS_SC_9010.xfdl", oArg, sOption, sPopupCallBack);
        	//this.gfn_openPopup("zipCode", "common::AddressDaum.xfdl", oArg, sOption, sPopupCallBack);
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
        			if (strTelNo.substring(0, 2)=="02") {
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

        this.fn_popupAfter = function(strId,strVal)
        {
        	if (strId == "zipCode") {
        		this.fn_addr(strVal);
        	}
        }

        //주소 리턴 값
        this.fn_addr = function(strVal)
        {
        	if (this.gfn_isNull(strVal)) {
        		return;
        	}
        	var fn_addr = strVal.split(",");
        	for (var i=0; i<fn_addr.length; i++) {
        		var fn_addr1 = fn_addr[i].split("#");

        		if (fn_addr1[0] == "FZIP") {
        			//앞자리우편번호
        			this.ds_rc.setColumn(0, "FZIP", fn_addr1[1]);
        		} else if (fn_addr1[0] == "RZIP") {
        			//뒷자리우편번호
        			this.ds_rc.setColumn(0, "RZIP", fn_addr1[1]);
        		} else if (fn_addr1[0] == "ZIP_SQNO") {
        			//우편번호일련번호
        			this.ds_rc.setColumn(0, "ZIP_SQNO", fn_addr1[1]);
        		} else if ( fn_addr1[0] == "DONGUP") {
        			//동이상주소
        			this.ds_rc.setColumn(0, "DONGUP", fn_addr1[1]);
        		} else if ( fn_addr1[0] == "DONGBW") {
        			//동이하주소
        			this.ds_rc.setColumn(0, "DONGBW", fn_addr1[1]);
        		}
        	}
        }

        this.Button05_onclick = function(obj,e)
        {
        	system.execBrowser("http://www.kedkorea.com/ci/CIINT01R0.do");
        }

        this.Button06_onclick = function(obj,e)
        {
        	system.execBrowser("http://www.clipq.co.kr");
        }

        this.Button07_onclick = function(obj,e)
        {
        	system.execBrowser("https://www.srms.co.kr/srms/zsrms/mems/a200_MemberIns.jsp");
        }

        this.grd_file_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		this.gfn_setGridCheckAll(obj, e);
        	}
        }

        this.cbo_hope_dsc_onitemchanged = function(obj,e)
        {
        	if (!this.gfn_isNull(obj.value)) {
        		if (obj.value == "001") {
        			this.ds_ctg1.filter("NA_WRS_LCLC == '120'");
        		} else {
        			this.ds_ctg1.filter("NA_WRS_LCLC != '120'");
        		}
        		this.cbo_ctgr_lrg.set_enable(true);
        		this.cbo_ctgr_lrg.set_value("");
        		this.cbo_ctgr_mid.set_enable(false);
        		this.cbo_ctgr_mid.set_value("");
        	} else {
        		this.cbo_ctgr_lrg.set_enable(false);
        	}
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

        this.fn_setEnableUpload = function(enable,objEdt,objFile)
        {
        	objEdt.set_enable(enable);
        	objFile.set_enable(enable);
        	if (!enable) {
        		objFile.deleteItem(0);
        		objFile.appendItem();
        	}
        }

        /* 품질관리 수기입력 체크 */
        this.edt_a06_onkillfocus = function(obj,e)
        {
        	if (obj.id == "edt_a06") {
        		var val = nexacro.toNumber(obj.value);
        		if (val > 10) {
        			this.alert("공인인증 평가점수는 10점을 초과할 수 없습니다.");
        			obj.set_value("10");
        			val = 10;
        			return;
        		}
        		this.fn_setEnableUpload(val > 0, this.edt_down061, this.FileUpload061);
        		this.fn_setEnableUpload(val > 0, this.edt_down062, this.FileUpload062);
        		this.fn_setEnableUpload(val > 0, this.edt_down063, this.FileUpload063);
        		this.fn_setEnableUpload(val > 0, this.edt_down064, this.FileUpload064);
        		this.fn_setEnableUpload(val > 0, this.edt_down065, this.FileUpload065);
        	}
        	
        	this.fn_calcTable();
        }

        /* 평가표 선택(라디오 타입) */
        this.fn_rdo_onitemchanged = function(obj,e)
        {
        	// 같은 값을 한 번 더 선택할 경우 선택해제
        	if (e.postvalue == e.prevalue) {
        		obj.set_value("");
        	}
        	this.fn_calcTable(obj);
        }

        // 점수계산
        this.fn_calcTable = function(obj)
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
        	
        	if (!this.gfn_isNull(obj)) {
        		if (obj.id == "rdo_a01") {
        			this.fn_setEnableUpload(point01 > 0, this.edt_down01, this.FileUpload01);
        		} else if (obj.id == "rdo_a02") {
        			this.fn_setEnableUpload(!this.gfn_isNull(this.rdo_a02.value), this.edt_down02, this.FileUpload02); // 항목에 0점이 있어서 선택 여부를 확인
        		} else if (obj.id == "rdo_a03") {
        			this.fn_setEnableUpload(!this.gfn_isNull(this.rdo_a03.value), this.edt_down03, this.FileUpload03); // 항목에 0점이 있어서 선택 여부를 확인
        		} else if (obj.id == "chk_a041") {
        			this.fn_setEnableUpload(point041 > 0, this.edt_down041, this.FileUpload041);
        		} else if (obj.id == "chk_a042") {
        			this.fn_setEnableUpload(point042 > 0, this.edt_down042, this.FileUpload042);
        		} else if (obj.id == "chk_a051" || obj.id == "chk_a052") {
        			this.fn_setEnableUpload((point051 + point052) > 0, this.edt_down05, this.FileUpload05);
        		} else if (obj.id == "chk_a071") {
        			this.fn_setEnableUpload(point071 > 0, this.edt_down071, this.FileUpload071);
        		} else if (obj.id == "chk_a072") {
        			this.fn_setEnableUpload(point072 > 0, this.edt_down072, this.FileUpload072);
        		}
        	}
        	
        	tot2 = point01 + point02 + point03 + point041 + point042 + point051 + point052;
        	tot3 = point06 + point071 + point072;
        	tot1 = tot2 + tot3;
        	
        	this.sta_pt_total.set_text(tot2); // 평가표 합계
        	this.sta_add_total.set_text(tot3); // 가점 합계
        	this.mae_sum00.set_value(tot1); // 전체 합계
        	
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
        		this.div_privacy.btn_insert.set_enable(true);
        		this.div_privacy.btn_register01.set_enable(true);
        	} else {
        		this.btn_register.set_enable(false);
        		this.div_privacy.btn_insert.set_enable(false);
        		this.div_privacy.btn_register01.set_enable(false);
        	}
        }

        this.btn_clear_onclick = function(obj,e)
        {
        	this.reload();
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_uploadresult.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.ds_uploadresult00.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.ds_uploadresult01.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.ds_uploadresult02.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.addEventHandler("onload", this.OMG_DS_SC_1111_onload, this);
            this.btn_register.addEventHandler("onclick", this.btn_register_onclick, this);
            this.mae_bzno.addEventHandler("onlbuttonup", this.mae_bzno_onlbuttonup, this);
            this.btn_addr.addEventHandler("onclick", this.btn_addr_onclick, this);
            this.chk_chrMft.addEventHandler("onchanged", this.chk_chrMft_onchanged, this);
            this.grd_file.addEventHandler("onheadclick", this.grd_file_onheadclick, this);
            this.FileUpload01.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.FileUpload01.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload01.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload02.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.FileUpload02.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload02.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload05.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.FileUpload05.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload05.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload03.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.FileUpload03.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload03.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload041.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.FileUpload041.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload041.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload061.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.FileUpload061.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload061.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload062.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.FileUpload062.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload062.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload063.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.FileUpload063.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload063.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload064.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.FileUpload064.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload064.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload071.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.FileUpload071.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload071.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.rdo_a01.addEventHandler("onitemchanged", this.fn_rdo_onitemchanged, this);
            this.rdo_a02.addEventHandler("onitemchanged", this.fn_rdo_onitemchanged, this);
            this.rdo_a03.addEventHandler("onitemchanged", this.fn_rdo_onitemchanged, this);
            this.chk_a041.addEventHandler("onchanged", this.fn_calcTable, this);
            this.FileUploadCmpy.addEventHandler("onsuccess", this.FileUploadCmpy_onsuccess, this);
            this.FileUploadCmpy.addEventHandler("onerror", this.FileUploadCmpy_onerror, this);
            this.FileUploadCmpy.addEventHandler("onitemchanged", this.FileUploadCmpy_onitemchanged, this);
            this.btn_fileDel.addEventHandler("onclick", this.btn_fileDel_onclick, this);
            this.div_privacy.btn_register01.addEventHandler("onclick", this.btn_register_onclick, this);
            this.cbo_hope_dsc.addEventHandler("onitemchanged", this.cbo_hope_dsc_onitemchanged, this);
            this.cbo_ctgr_lrg.addEventHandler("onitemchanged", this.cbo_ctgr_lrg_onitemchanged, this);
            this.FileUpload042.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload042.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload042.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.chk_a042.addEventHandler("onchanged", this.fn_calcTable, this);
            this.edt_a06.addEventHandler("ontextchanged", this.edt_a06_onkillfocus, this);
            this.edt_a06.addEventHandler("onkillfocus", this.edt_a06_onkillfocus, this);
            this.FileUpload065.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload065.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload065.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.chk_a071.addEventHandler("onchanged", this.fn_calcTable, this);
            this.FileUpload072.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload072.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload072.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.chk_a072.addEventHandler("onchanged", this.fn_calcTable, this);
            this.chk_a051.addEventHandler("onchanged", this.fn_calcTable, this);
            this.chk_a052.addEventHandler("onchanged", this.fn_calcTable, this);
            this.btn_clear.addEventHandler("onclick", this.btn_clear_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_1111.xfdl");

       
    };
}
)();
