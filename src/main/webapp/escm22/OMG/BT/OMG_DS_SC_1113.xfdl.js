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
                this.set_name("OMG_DS_SC_1113");
                this.set_titletext("상담신청내역팝업");
                this.set_scrollbars("autovert");
                this._setFormPosition(0,0,950,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rdo00", this);
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

            obj = new Dataset("ds_rdo01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"point\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"level\">0</Col><Col id=\"point\"/></Row><Row><Col id=\"level\">5</Col><Col id=\"point\"/></Row><Row><Col id=\"level\">10</Col><Col id=\"point\"/></Row><Row><Col id=\"level\">15</Col></Row><Row><Col id=\"level\">20</Col></Row></Rows>");
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

            obj = new Dataset("ds_rdo03", this);
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

            obj = new Dataset("ds_rdo04", this);
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

            obj = new Dataset("ds_rdo05", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"point\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"level\">10</Col><Col id=\"point\"/></Row><Row><Col id=\"level\">5</Col><Col id=\"point\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rdo06", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"point\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"level\">5</Col><Col id=\"point\"/></Row><Row><Col id=\"level\">10</Col><Col id=\"point\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rdo07", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"point\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"level\">5</Col><Col id=\"point\"/></Row><Row><Col id=\"level\">10</Col><Col id=\"point\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cbo02", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"point\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"level\">0</Col><Col id=\"point\">0건</Col></Row><Row><Col id=\"level\">5</Col><Col id=\"point\">1건</Col></Row><Row><Col id=\"level\">10</Col><Col id=\"point\">2건</Col></Row></Rows>");
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

            obj = new Dataset("ds_test", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"UPSTS\" type=\"STRING\" size=\"32\"/><Column id=\"SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"BIGDECIMAL\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYS_FLNM\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"ISCHECKED\">0</Col><Col id=\"UPSTS\">1</Col><Col id=\"SQNO\">1</Col><Col id=\"FILENAME\">upfile0</Col><Col id=\"FILESIZE\">325</Col><Col id=\"ORGFNAME\">Migrator.ini</Col><Col id=\"SYSTEMFILENAME\">FcOjweHbYK1436342335911</Col></Row><Row><Col id=\"ISCHECKED\">0</Col><Col id=\"UPSTS\">1</Col><Col id=\"SQNO\">2</Col><Col id=\"FILENAME\">upfile0</Col><Col id=\"FILESIZE\">595284</Col><Col id=\"ORGFNAME\">Hydrangeas.jpg</Col><Col id=\"SYSTEMFILENAME\">rlOaTmyXmm1436403313833</Col></Row><Row><Col id=\"ISCHECKED\">0</Col><Col id=\"UPSTS\">2</Col><Col id=\"FILENAME\">upfile0</Col><Col id=\"FILETYPE\">i</Col><Col id=\"FILESIZE\">809304</Col><Col id=\"ORGFNAME\">avengers_age_of_ultron_4k-wallpaper-1920x1080.jpg</Col><Col id=\"SYSTEMFILENAME\">SezzbYFFVx1436406864882</Col></Row></Rows>");
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

            obj = new Static("Static45", "absolute", "132", "897", "246", "29", null, null, this);
            obj.set_taborder("340");
            obj.set_text("평가기준");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "132", "1177", "246", "29", null, null, this);
            obj.set_taborder("341");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("전년 세금계산서(월별,매월) 첨부파일");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "132", "1037", "246", "141", null, null, this);
            obj.set_taborder("342");
            obj.set_text("매출규모(직전년)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "132", "925", "246", "85", null, null, this);
            obj.set_taborder("343");
            obj.set_text("동종업계 업력");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", "13", "897", "120", "29", null, null, this);
            obj.set_taborder("346");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", "13", "1037", "120", "169", null, null, this);
            obj.set_taborder("348");
            obj.set_text("실적");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "13", "925", "120", "113", null, null, this);
            obj.set_taborder("349");
            obj.set_text("업력");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static62", "absolute", "377", "897", "440", "29", null, null, this);
            obj.set_taborder("352");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", "816", "897", "60", "29", null, null, this);
            obj.set_taborder("353");
            obj.set_text("배점");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", "875", "897", null, "29", "15", null, this);
            obj.set_taborder("354");
            obj.set_text("득점");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static65", "absolute", "377", "925", "440", "29", null, null, this);
            obj.set_taborder("355");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_text("개업 1년 이상 ~ 3년 미만");
            this.addChild(obj.name, obj);

            obj = new Static("Static66", "absolute", "816", "925", "60", "29", null, null, this);
            obj.set_taborder("356");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static67", "absolute", "875", "925", null, "29", "15", null, this);
            obj.set_taborder("357");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static69", "absolute", "377", "953", "440", "29", null, null, this);
            obj.set_taborder("358");
            obj.set_text("3년 이상 ~ 10년 미만");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static70", "absolute", "816", "953", "60", "29", null, null, this);
            obj.set_taborder("359");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static71", "absolute", "875", "953", null, "29", "15", null, this);
            obj.set_taborder("360");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static72", "absolute", "377", "981", "440", "29", null, null, this);
            obj.set_taborder("361");
            obj.set_text("10년 이상");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static73", "absolute", "816", "981", "60", "29", null, null, this);
            obj.set_taborder("362");
            obj.set_text("15");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static74", "absolute", "875", "981", null, "29", "15", null, this);
            obj.set_taborder("363");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static77", "absolute", "132", "1009", "246", "29", null, null, this);
            obj.set_taborder("364");
            obj.set_text("사업장 등록증 첨부파일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static78", "absolute", "377", "1009", null, "29", "15", null, this);
            obj.set_taborder("365");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", "377", "1037", "440", "29", null, null, this);
            obj.set_taborder("367");
            obj.set_text("1억원 미만");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static79", "absolute", "816", "1037", "60", "29", null, null, this);
            obj.set_taborder("368");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static80", "absolute", "875", "1037", null, "29", "15", null, this);
            obj.set_taborder("369");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static81", "absolute", "377", "1065", "440", "29", null, null, this);
            obj.set_taborder("370");
            obj.set_text("1억원 이상 ~ 3억원 미만");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static82", "absolute", "816", "1065", "60", "29", null, null, this);
            obj.set_taborder("371");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static83", "absolute", "875", "1065", null, "29", "15", null, this);
            obj.set_taborder("372");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static84", "absolute", "377", "1093", "440", "29", null, null, this);
            obj.set_taborder("373");
            obj.set_text("3억원 이상 ~ 10억원 미만");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static85", "absolute", "816", "1093", "60", "29", null, null, this);
            obj.set_taborder("374");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", "875", "1093", null, "29", "15", null, this);
            obj.set_taborder("375");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static87", "absolute", "377", "1121", "440", "29", null, null, this);
            obj.set_taborder("376");
            obj.set_text("10억원 이상 ~ 50억원 미만");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static88", "absolute", "816", "1121", "60", "29", null, null, this);
            obj.set_taborder("377");
            obj.set_text("15");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static89", "absolute", "875", "1121", null, "29", "15", null, this);
            obj.set_taborder("378");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static90", "absolute", "377", "1149", "440", "29", null, null, this);
            obj.set_taborder("379");
            obj.set_text("50억원 이상");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static91", "absolute", "816", "1149", "60", "29", null, null, this);
            obj.set_taborder("380");
            obj.set_text("20");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static92", "absolute", "875", "1149", null, "29", "15", null, this);
            obj.set_taborder("381");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "377", "1177", null, "29", "15", null, this);
            obj.set_taborder("382");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static53", "absolute", "132", "1373", "246", "29", null, null, this);
            obj.set_taborder("384");
            obj.set_text("할인점 거래 세금계산서 첨부파일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static54", "absolute", "132", "1205", "246", "85", null, null, this);
            obj.set_taborder("385");
            obj.set_text("당기순이익(최근 3년)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static59", "absolute", "13", "1205", "120", "85", null, null, this);
            obj.set_taborder("386");
            obj.set_text("성과");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "377", "1205", "440", "29", null, null, this);
            obj.set_taborder("387");
            obj.set_text("최근 1년 흑자");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "816", "1205", "60", "29", null, null, this);
            obj.set_taborder("388");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static95", "absolute", "875", "1205", null, "29", "15", null, this);
            obj.set_taborder("389");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static96", "absolute", "377", "1233", "440", "29", null, null, this);
            obj.set_taborder("390");
            obj.set_text("최근 2년 연속 흑자");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static97", "absolute", "816", "1233", "60", "29", null, null, this);
            obj.set_taborder("391");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static98", "absolute", "875", "1233", null, "29", "15", null, this);
            obj.set_taborder("392");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static99", "absolute", "377", "1261", "440", "29", null, null, this);
            obj.set_taborder("393");
            obj.set_text("3년 연속 흑자");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static100", "absolute", "816", "1261", "60", "29", null, null, this);
            obj.set_taborder("394");
            obj.set_text("15");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static101", "absolute", "875", "1261", null, "29", "15", null, this);
            obj.set_taborder("395");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static108", "absolute", "377", "1373", null, "29", "15", null, this);
            obj.set_taborder("402");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static102", "absolute", "132", "1289", "246", "85", null, null, this);
            obj.set_taborder("404");
            obj.set_text("4대 할인점 거래");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static103", "absolute", "377", "1289", "440", "29", null, null, this);
            obj.set_taborder("405");
            obj.set_text("거래실적 연간 1억원 미만");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static104", "absolute", "816", "1289", "60", "29", null, null, this);
            obj.set_taborder("406");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static105", "absolute", "875", "1289", null, "29", "15", null, this);
            obj.set_taborder("407");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static106", "absolute", "377", "1317", "440", "29", null, null, this);
            obj.set_taborder("408");
            obj.set_text("거래실적 연간 1억원 이상 ~ 2억 미만");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static107", "absolute", "816", "1317", "60", "29", null, null, this);
            obj.set_taborder("409");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static109", "absolute", "875", "1317", null, "29", "15", null, this);
            obj.set_taborder("410");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static110", "absolute", "377", "1345", "440", "29", null, null, this);
            obj.set_taborder("411");
            obj.set_text("거래실적 연간 2억원 이상");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static111", "absolute", "816", "1345", "60", "29", null, null, this);
            obj.set_taborder("412");
            obj.set_text("15");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static112", "absolute", "875", "1345", null, "29", "15", null, this);
            obj.set_taborder("413");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static113", "absolute", "13", "1289", "120", "113", null, null, this);
            obj.set_taborder("414");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static114", "absolute", "132", "1541", "246", "29", null, null, this);
            obj.set_taborder("415");
            obj.set_text("신용평가서 첨부파일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static115", "absolute", "132", "1401", "246", "141", null, null, this);
            obj.set_taborder("416");
            obj.set_text("기업신용등급");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static116", "absolute", "13", "1401", "120", "169", null, null, this);
            obj.set_taborder("417");
            obj.set_text("신용평가");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static117", "absolute", "377", "1401", "440", "29", null, null, this);
            obj.set_taborder("418");
            obj.set_text("D ~ CCC");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static118", "absolute", "816", "1401", "60", "29", null, null, this);
            obj.set_taborder("419");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static119", "absolute", "875", "1401", null, "29", "15", null, this);
            obj.set_taborder("420");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static120", "absolute", "377", "1429", "440", "29", null, null, this);
            obj.set_taborder("421");
            obj.set_text("CCC+ ~ B");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static121", "absolute", "816", "1429", "60", "29", null, null, this);
            obj.set_taborder("422");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static122", "absolute", "875", "1429", null, "29", "15", null, this);
            obj.set_taborder("423");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static123", "absolute", "377", "1457", "440", "29", null, null, this);
            obj.set_taborder("424");
            obj.set_text("B+ ~ BB+");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static124", "absolute", "816", "1457", "60", "29", null, null, this);
            obj.set_taborder("425");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static125", "absolute", "875", "1457", null, "29", "15", null, this);
            obj.set_taborder("426");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static126", "absolute", "377", "1485", "440", "29", null, null, this);
            obj.set_taborder("427");
            obj.set_text("BBB- ~ BBB+");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static127", "absolute", "816", "1485", "60", "29", null, null, this);
            obj.set_taborder("428");
            obj.set_text("15");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static128", "absolute", "875", "1485", null, "29", "15", null, this);
            obj.set_taborder("429");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static132", "absolute", "377", "1541", null, "29", "15", null, this);
            obj.set_taborder("433");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static129", "absolute", "377", "1569", null, "29", "133", null, this);
            obj.set_taborder("436");
            obj.set_text("공장등록증 (사업자등록증과 일치여부 확인)");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static130", "absolute", null, "1569", "60", "29", "74", null, this);
            obj.set_taborder("437");
            obj.set_text("15");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static131", "absolute", null, "1569", "60", "29", "15", null, this);
            obj.set_taborder("438");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static133", "absolute", "132", "1569", "246", "29", null, null, this);
            obj.set_taborder("439");
            obj.set_text("해당품목 제조 시설 보유");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static134", "absolute", "13", "1569", "120", "29", null, null, this);
            obj.set_taborder("440");
            obj.set_text("제조여부");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static138", "absolute", "132", "1597", "246", "29", null, null, this);
            obj.set_taborder("444");
            obj.set_text("공장등록증 첨부파일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static139", "absolute", "13", "1597", "120", "29", null, null, this);
            obj.set_taborder("445");
            obj.set_text("공장등록증");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static135", "absolute", "377", "1597", null, "29", "15", null, this);
            obj.set_taborder("446");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static136", "absolute", "132", "1722", "246", "29", null, null, this);
            obj.set_taborder("448");
            obj.set_text("특허보유(10점 한도)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static137", "absolute", "13", "1722", "120", "309", null, null, this);
            obj.set_taborder("449");
            obj.set_text("공통");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static140", "absolute", "377", "1722", null, "29", "133", null, this);
            obj.set_taborder("450");
            obj.set_text("건당 5점  (실용신안포함)");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static141", "absolute", null, "1722", "60", "29", "74", null, this);
            obj.set_taborder("451");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static143", "absolute", null, "1722", "60", "29", "15", null, this);
            obj.set_taborder("452");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static150", "absolute", "132", "1750", "246", "29", null, null, this);
            obj.set_taborder("459");
            obj.set_text("특허증서1 파일첨부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static151", "absolute", "377", "1750", null, "29", "15", null, this);
            obj.set_taborder("460");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static144", "absolute", "132", "1778", "246", "29", null, null, this);
            obj.set_taborder("462");
            obj.set_text("특허증서2 파일첨부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static145", "absolute", "377", "1778", null, "29", "15", null, this);
            obj.set_taborder("463");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static146", "absolute", "132", "1806", "246", "57", null, null, this);
            obj.set_taborder("465");
            obj.set_text("정책연관도(10점 한도)\r\n(정부정책 관련 문서 파일첨부)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static147", "absolute", "377", "1806", "440", "29", null, null, this);
            obj.set_taborder("466");
            obj.set_text("정부정책사업 지원");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static148", "absolute", "816", "1806", "60", "29", null, null, this);
            obj.set_taborder("467");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static149", "absolute", "875", "1806", null, "29", "15", null, this);
            obj.set_taborder("468");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static153", "absolute", "377", "1834", null, "29", "15", null, this);
            obj.set_taborder("470");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static154", "absolute", "377", "1862", "440", "29", null, null, this);
            obj.set_taborder("472");
            obj.set_text("농협지원사업");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static155", "absolute", "816", "1862", "60", "29", null, null, this);
            obj.set_taborder("473");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static156", "absolute", "875", "1862", null, "29", "15", null, this);
            obj.set_taborder("474");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static157", "absolute", "132", "1862", "246", "61", null, null, this);
            obj.set_taborder("475");
            obj.set_text("정책연관도(10점 한도)\r\n(농협지원사업 관련 문서 파일첨부)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static159", "absolute", "377", "1890", null, "29", "15", null, this);
            obj.set_taborder("477");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static160", "absolute", "132", "1918", "246", "57", null, null, this);
            obj.set_taborder("479");
            obj.set_text("유사상품 농협취급 여부\r\n(업체 주력 상품 기준)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static161", "absolute", "377", "1918", "440", "29", null, null, this);
            obj.set_taborder("480");
            obj.set_text("유사상품 6개 업체 이상 취급");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static162", "absolute", "816", "1918", "60", "29", null, null, this);
            obj.set_taborder("481");
            obj.set_text("-10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static163", "absolute", "875", "1918", null, "29", "15", null, this);
            obj.set_taborder("482");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static164", "absolute", "377", "1946", "440", "29", null, null, this);
            obj.set_taborder("483");
            obj.set_text("유사상품 6개 업체 미만 취급");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static165", "absolute", "816", "1946", "60", "29", null, null, this);
            obj.set_taborder("484");
            obj.set_text("-5");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static166", "absolute", "875", "1946", null, "29", "15", null, this);
            obj.set_taborder("485");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static167", "absolute", "132", "1974", "246", "57", null, null, this);
            obj.set_taborder("486");
            obj.set_text("농협기여도(10점 한도)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static168", "absolute", "377", "1974", "440", "29", null, null, this);
            obj.set_taborder("487");
            obj.set_text("연간 추정매출액 5억원이상 ~ 10억원 미만");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static169", "absolute", "816", "1974", "60", "29", null, null, this);
            obj.set_taborder("488");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static170", "absolute", "875", "1974", null, "29", "15", null, this);
            obj.set_taborder("489");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static171", "absolute", "377", "2002", "440", "29", null, null, this);
            obj.set_taborder("490");
            obj.set_text("연간 추정 매출액 10억원 이상");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static172", "absolute", "816", "2002", "60", "29", null, null, this);
            obj.set_taborder("491");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static173", "absolute", "875", "2002", null, "29", "15", null, this);
            obj.set_taborder("492");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static174", "absolute", "13", "2030", "120", "85", null, null, this);
            obj.set_taborder("493");
            obj.set_text("가공식품\r\n신선식품");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static175", "absolute", "132", "2030", "246", "57", null, null, this);
            obj.set_taborder("494");
            obj.set_text("품질관리 공인인중");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static176", "absolute", "377", "2030", "440", "29", null, null, this);
            obj.set_taborder("495");
            obj.set_text("소규모 HACCP");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static177", "absolute", "816", "2030", "60", "29", null, null, this);
            obj.set_taborder("496");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static178", "absolute", "875", "2030", null, "29", "15", null, this);
            obj.set_taborder("497");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static179", "absolute", "377", "2058", "440", "29", null, null, this);
            obj.set_taborder("498");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_text("일반 HACCP, GMP(건강식품), 축산물 HACCP");
            this.addChild(obj.name, obj);

            obj = new Static("Static180", "absolute", "816", "2058", "60", "29", null, null, this);
            obj.set_taborder("499");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static181", "absolute", "875", "2058", null, "29", "15", null, this);
            obj.set_taborder("500");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static182", "absolute", "132", "2086", "246", "29", null, null, this);
            obj.set_taborder("501");
            obj.set_text("관련 문서 파일첨부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static183", "absolute", "377", "2086", null, "29", "15", null, this);
            obj.set_taborder("502");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static184", "absolute", "13", "2114", "120", "29", null, null, this);
            obj.set_taborder("504");
            obj.set_cssclass("sta_WF_Label_c");
            obj.set_text("소계");
            this.addChild(obj.name, obj);

            obj = new Static("Static185", "absolute", "132", "2114", "246", "29", null, null, this);
            obj.set_taborder("505");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static186", "absolute", "377", "2114", "440", "29", null, null, this);
            obj.set_taborder("506");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static187", "absolute", "816", "2114", null, "29", "15", null, this);
            obj.set_taborder("507");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static188", "absolute", "13", "2181", null, "21", "364", null, this);
            obj.set_taborder("508");
            obj.set_text("4대 할인점(이마트, 홈플러스, 롯데마트 코스트코)의 최근 1년 기준일");
            obj.set_cssclass("sta_WF_DescriptionB01");
            this.addChild(obj.name, obj);

            obj = new Static("Static189", "absolute", "13", "2202", null, "21", "188", null, this);
            obj.set_taborder("509");
            obj.set_text("신용등급(상 -> 하) : AAA, AA, A+, A, A-, BBB+, BBB, BB+, BB, B+,B, B-, CCC+,CCC, CCC-, CC, C, D");
            obj.set_cssclass("sta_WF_DescriptionB01");
            this.addChild(obj.name, obj);

            obj = new Static("Static190", "absolute", "13", "2223", null, "21", "364", null, this);
            obj.set_taborder("510");
            obj.set_text("계약종료 후 2년 내 계약상담 불가");
            obj.set_cssclass("sta_WF_DescriptionB01");
            this.addChild(obj.name, obj);

            obj = new Static("Static191", "absolute", "13", "2244", null, "21", "364", null, this);
            obj.set_taborder("511");
            obj.set_text("정책연관도 : 정부기관, 농협의 문서에 의한 사업지원요청 등");
            obj.set_cssclass("sta_WF_DescriptionB01");
            this.addChild(obj.name, obj);

            obj = new Static("Static192", "absolute", "13", "2265", null, "21", "364", null, this);
            obj.set_taborder("512");
            obj.set_text("유사상품 농협취급 여부는 최근 1년 세분류 공급실적 기준임");
            obj.set_cssclass("sta_WF_DescriptionB01");
            this.addChild(obj.name, obj);

            obj = new Static("Static193", "absolute", "13", "2286", null, "21", "364", null, this);
            obj.set_taborder("513");
            obj.set_text("HACCP/GMP 인증은 식약처 및 HACCP 기준원에서 인증한 것에 한함");
            obj.set_cssclass("sta_WF_DescriptionB01");
            this.addChild(obj.name, obj);

            obj = new Static("Static194", "absolute", "13", "2307", null, "21", "364", null, this);
            obj.set_taborder("514");
            obj.set_text("70점 이상 획득업체 상담 가능");
            obj.set_cssclass("sta_WF_DescriptionB01");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_b01", "absolute", null, "1726", "52", "21", "19", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("515");
            obj.set_codecolumn("level");
            obj.set_datacolumn("point");
            obj.set_innerdataset("@ds_cbo02");
            obj.set_value("1");
            obj.set_text("0건");
            obj.set_index("0");

            obj = new Radio("rdo_a01", "absolute", "899", "927", "20", "83", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_a01_innerdataset = new Dataset("rdo_a01_innerdataset", this.rdo_a01);
            rdo_a01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">15</Col><Col id=\"datacolumn\">15</Col></Row></Rows>");
            obj.set_innerdataset(rdo_a01_innerdataset);
            obj.set_taborder("516");
            obj.set_codecolumn("level");
            obj.set_datacolumn("point");
            obj.set_innerdataset("@ds_rdo00");
            obj.set_index("-1");

            obj = new Radio("rdo_a02", "absolute", "899", "1038", "20", "141", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("517");
            obj.set_codecolumn("level");
            obj.set_datacolumn("point");
            obj.set_innerdataset("@ds_rdo01");

            obj = new Static("Static195", "absolute", "377", "1513", "440", "29", null, null, this);
            obj.set_taborder("518");
            obj.set_text("A- ~ AAA");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static196", "absolute", "816", "1513", "60", "29", null, null, this);
            obj.set_taborder("519");
            obj.set_text("20");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static197", "absolute", "875", "1513", null, "29", "15", null, this);
            obj.set_taborder("520");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_a05", "absolute", "899", "1402", "20", "141", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("521");
            obj.set_codecolumn("level");
            obj.set_datacolumn("point");
            obj.set_innerdataset("@ds_rdo02");
            obj.set_enable("true");
            obj.set_index("-1");

            obj = new Radio("rdo_a03", "absolute", "899", "1205", "20", "86", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_a03_innerdataset = new Dataset("rdo_a03_innerdataset", this.rdo_a03);
            rdo_a03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\"/></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\"/></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\"/></Row></Rows>");
            obj.set_innerdataset(rdo_a03_innerdataset);
            obj.set_taborder("522");
            obj.set_codecolumn("level");
            obj.set_datacolumn("point");
            obj.set_innerdataset("@ds_rdo03");

            obj = new Radio("rdo_a04", "absolute", "899", "1290", "20", "86", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("523");
            obj.set_codecolumn("level");
            obj.set_datacolumn("point");
            obj.set_innerdataset("@ds_rdo04");

            obj = new CheckBox("chk_a06", "absolute", "899", "1573", "25", "21", null, null, this);
            obj.set_taborder("524");
            obj.set_value("false");
            obj.set_truevalue("15");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_b11", "absolute", "899", "1810", "25", "21", null, null, this);
            obj.set_taborder("525");
            obj.set_truevalue("10");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_b02", "absolute", "899", "1866", "25", "21", null, null, this);
            obj.set_taborder("526");
            obj.set_truevalue("10");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_b03", "absolute", "899", "1918", "20", "59", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("527");
            obj.set_codecolumn("level");
            obj.set_datacolumn("point");
            obj.set_innerdataset("@ds_rdo05");

            obj = new Radio("rdo_b04", "absolute", "899", "1974", "20", "59", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("528");
            obj.set_codecolumn("level");
            obj.set_datacolumn("point");
            obj.set_innerdataset("@ds_rdo06");
            obj.set_enable("true");

            obj = new Radio("rdo_b05", "absolute", "899", "2031", "20", "59", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("529");
            obj.set_codecolumn("level");
            obj.set_datacolumn("point");
            obj.set_innerdataset("@ds_rdo07");

            obj = new Static("Static198", "absolute", "107", "2322", "279", "15", null, null, this);
            obj.set_taborder("530");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.addChild(obj.name, obj);

            obj = new Static("Static199", "absolute", "12", "2143", null, "20", "-1", null, this);
            obj.set_taborder("532");
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

            obj = new Button("btn_down00", "absolute", null, "1013", "70", "21", "19", null, this);
            obj.set_taborder("555");
            obj.set_text("파일다운");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00", "absolute", "906", "884", "21", "12", null, null, this);
            obj.set_taborder("556");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down01", "absolute", null, "1181", "70", "21", "19", null, this);
            obj.set_taborder("557");
            obj.set_text("파일다운");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down02", "absolute", null, "1377", "70", "21", "19", null, this);
            obj.set_taborder("558");
            obj.set_text("파일다운");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down03", "absolute", null, "1545", "70", "21", "19", null, this);
            obj.set_taborder("559");
            obj.set_text("파일다운");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down04", "absolute", null, "1601", "70", "21", "19", null, this);
            obj.set_taborder("560");
            obj.set_text("파일다운");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down05", "absolute", null, "1754", "70", "21", "19", null, this);
            obj.set_taborder("561");
            obj.set_text("파일다운");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down06", "absolute", null, "1782", "70", "21", "19", null, this);
            obj.set_taborder("562");
            obj.set_text("파일다운");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down07", "absolute", null, "1838", "70", "21", "19", null, this);
            obj.set_taborder("563");
            obj.set_text("파일다운");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down08", "absolute", null, "1894", "70", "21", "19", null, this);
            obj.set_taborder("564");
            obj.set_text("파일다운");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down09", "absolute", null, "2090", "70", "21", "19", null, this);
            obj.set_taborder("565");
            obj.set_text("파일다운");
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

            obj = new Edit("edt_down00", "absolute", "381", "1013", null, "21", "89", null, this);
            obj.set_taborder("569");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload00", "absolute", null, "1013", "72", "21", "17", null, this);
            obj.set_taborder("570");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down01", "absolute", "381", "1181", null, "21", "89", null, this);
            obj.set_taborder("571");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload01", "absolute", null, "1181", "72", "21", "19", null, this);
            obj.set_taborder("572");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down02", "absolute", "381", "1377", null, "21", "89", null, this);
            obj.set_taborder("573");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload02", "absolute", null, "1377", "72", "21", "19", null, this);
            obj.set_taborder("574");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down03", "absolute", "381", "1545", null, "21", "89", null, this);
            obj.set_taborder("575");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload03", "absolute", null, "1545", "72", "21", "19", null, this);
            obj.set_taborder("576");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down04", "absolute", "381", "1601", null, "21", "89", null, this);
            obj.set_taborder("577");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload04", "absolute", null, "1601", "72", "21", "19", null, this);
            obj.set_taborder("578");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down05", "absolute", "381", "1754", null, "21", "89", null, this);
            obj.set_taborder("579");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload05", "absolute", null, "1754", "72", "21", "19", null, this);
            obj.set_taborder("580");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down06", "absolute", "381", "1782", null, "21", "89", null, this);
            obj.set_taborder("581");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload06", "absolute", null, "1782", "72", "21", "19", null, this);
            obj.set_taborder("582");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down07", "absolute", "381", "1838", null, "21", "89", null, this);
            obj.set_taborder("583");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload07", "absolute", null, "1838", "72", "21", "19", null, this);
            obj.set_taborder("584");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down08", "absolute", "381", "1894", null, "21", "89", null, this);
            obj.set_taborder("585");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload08", "absolute", null, "1894", "72", "21", "19", null, this);
            obj.set_taborder("586");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_down09", "absolute", "381", "2090", null, "21", "89", null, this);
            obj.set_taborder("587");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload09", "absolute", null, "2090", "72", "21", "19", null, this);
            obj.set_taborder("588");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_index("0");
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

            obj = new Button("btn_register01", "absolute", null, "2163", "41", "21", "15", null, this);
            obj.set_taborder("604");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "13", "1625", "120", "29", null, null, this);
            obj.set_taborder("605");
            obj.set_text("소계");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "132", "1625", "246", "29", null, null, this);
            obj.set_taborder("606");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static204", "absolute", "377", "1625", "440", "29", null, null, this);
            obj.set_taborder("607");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static207", "absolute", "816", "1625", null, "29", "15", null, this);
            obj.set_taborder("608");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print", "absolute", null, "15", "41", "21", "64", null, this);
            obj.set_taborder("609");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new PopupMenu("PopupMenu00", "absolute", "1035", "117", "220", "100", null, null, this);
            this.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", "144", "1483", "101", "21", null, null, this);
            obj.set_taborder("610");
            obj.set_text("(주)나이스디앤비");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "251", "1483", "85", "21", null, null, this);
            obj.set_taborder("611");
            obj.set_text("(주)이크레더블");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "144", "1509", "125", "21", null, null, this);
            obj.set_taborder("612");
            obj.set_text("한국기업데이터(KED)");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "12", "1672", null, "20", "4.42%", null, this);
            obj.set_taborder("613");
            obj.set_text("□ 가점 및 감점(항목구분)");
            obj.style.set_align("left top");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static208", "absolute", "13", "1694", "120", "29", null, null, this);
            obj.set_taborder("614");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static209", "absolute", "132", "1694", "246", "29", null, null, this);
            obj.set_taborder("615");
            obj.set_text("평가기준");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static210", "absolute", "377", "1694", "440", "29", null, null, this);
            obj.set_taborder("616");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static211", "absolute", "816", "1694", "60", "29", null, null, this);
            obj.set_taborder("617");
            obj.set_text("배점");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static212", "absolute", "875", "1694", null, "29", "15", null, this);
            obj.set_taborder("618");
            obj.set_text("득점");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static152", "absolute", "15", "295", "301", "21", null, null, this);
            obj.set_taborder("619");
            obj.set_text("회사 기본정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static158", "absolute", "12", "1654", null, "20", "-1", null, this);
            obj.set_taborder("620");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
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

            obj = new Button("btn_down_zip", "absolute", null, "15", "72", "21", "64", null, this);
            obj.set_taborder("625");
            obj.set_text("ZIP다운");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("true");
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
            obj = new BindItem("item30","rdo_a01","value","ds_registerList","EVL_HDNG_A1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","rdo_a02","value","ds_registerList","EVL_HDNG_A2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","rdo_a03","value","ds_registerList","EVL_HDNG_A3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","rdo_a04","value","ds_registerList","EVL_HDNG_A4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","rdo_a05","value","ds_registerList","EVL_HDNG_A5");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","chk_a06","value","ds_registerList","EVL_HDNG_A6");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","cbo_b01","value","ds_registerList","EVL_HDNG_B1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","chk_b11","value","ds_registerList","EVL_HDNG_B11");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","chk_b02","value","ds_registerList","EVL_HDNG_B2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","rdo_b03","value","ds_registerList","EVL_HDNG_B3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","rdo_b04","value","ds_registerList","EVL_HDNG_B4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","rdo_b05","value","ds_registerList","EVL_HDNG_B5");
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

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "OMG.PT::OMG_DS_SC_9010.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_1113.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_1113.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

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
        	
        	this.Static207.set_text(tot2);
        	this.Static187.set_text(tot3);
        	
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
        	if(this.edt_down00.enable == true && this.gfn_isNull(this.edt_down00.value)){
        		this.edt_down00.setFocus();
        		this.alert('사업장 등록증을 첨부 하세요.');
        		return false;
        	}
        	if(this.edt_down01.enable == true && this.gfn_isNull(this.edt_down01.value)){
        		this.edt_down01.setFocus();
        		this.alert('전년 세금계산서를 첨부 하세요.');
        		return false;
        	}
        	if(this.edt_down02.enable == true && this.gfn_isNull(this.edt_down02.value)){
        		this.edt_down02.setFocus();
        		this.alert('할인점 거래 세금계산서를 첨부 하세요.');
        		return false;
        	}
        	if(this.edt_down03.enable == true && this.gfn_isNull(this.edt_down03.value)){
        		this.edt_down03.setFocus();
        		this.alert('신용평가서를 첨부 하세요.');
        		return false;
        	}
        	if(this.edt_down04.enable == true && this.gfn_isNull(this.edt_down04.value)){
        		this.edt_down04.setFocus();
        		this.alert('공장등록증을 첨부 하세요.');
        		return false;
        	}
        	if(this.edt_down05.enable == true && this.gfn_isNull(this.edt_down05.value)){
        		this.edt_down05.setFocus();
        		this.alert('특허증서1을 첨부 하세요.');
        		return false;
        	}
        	if(this.edt_down06.enable == true && this.gfn_isNull(this.edt_down06.value)){
        		this.edt_down06.setFocus();
        		this.alert('특허증서2를 첨부 하세요.');
        		return false;
        	}
        	if(this.edt_down07.enable == true && this.gfn_isNull(this.edt_down07.value)){
        		this.edt_down07.setFocus();
        		this.alert('MOU증서를 첨부 하세요.');
        		return false;
        	}
        	if(this.edt_down08.enable == true && this.gfn_isNull(this.edt_down08.value)){
        		this.edt_down08.setFocus();
        		this.alert('MOU채결문서를 첨부 하세요.');
        		return false;
        	}
        	if(this.edt_down09.enable == true && this.gfn_isNull(this.edt_down09.value)){
        		this.edt_down09.setFocus();
        		this.alert('HARD 증명서를 첨부 하세요.');
        		return false;
        	}
        	
        	return true;
        }

        this.mae_bzno_onlbuttonup = function(obj,e)
        {
        	if(this.gfn_isNull(obj.value)){
        		this.mae_bzno.setCaretPos(0);
        		//trace(this.mae_bzno.value);
        	}
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        /* 비활성화 */
        this.disable = function(obj,e)
        {
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
        		this.rdo_a01.set_readonly(true);
        		this.rdo_a02.set_readonly(true);
        		this.rdo_a03.set_readonly(true);
        		this.rdo_a04.set_readonly(true);
        		this.rdo_a05.set_readonly(true);
        		this.chk_a06.set_readonly(true);
        		this.cbo_b01.set_readonly(true);
        		this.chk_b11.set_readonly(true);
        		this.chk_b02.set_readonly(true);
        		this.rdo_b03.set_readonly(true);
        		this.rdo_b04.set_readonly(true);
        		this.rdo_b05.set_readonly(true);
        		
        		this.btn_down00.set_visible(true);
        		this.btn_down01.set_visible(true);
        		this.btn_down02.set_visible(true);
        		this.btn_down03.set_visible(true);
        		this.btn_down04.set_visible(true);
        		this.btn_down05.set_visible(true);
        		this.btn_down06.set_visible(true);
        		this.btn_down07.set_visible(true);
        		this.btn_down08.set_visible(true);
        		this.btn_down09.set_visible(true);
        		this.btn_down10.set_visible(true);
        		this.btn_down10.set_right(15);
        		
        		
        		
        		
        		this.btn_fileDel.set_visible(false);
        		this.FileUpload10.set_visible(false);
        		
        		this.FileUpload00.set_visible(false);
        		this.FileUpload01.set_visible(false);
        		this.FileUpload02.set_visible(false);
        		this.FileUpload03.set_visible(false);
        		this.FileUpload04.set_visible(false);
        		this.FileUpload05.set_visible(false);
        		this.FileUpload06.set_visible(false);
        		this.FileUpload07.set_visible(false);
        		this.FileUpload08.set_visible(false);
        		this.FileUpload09.set_visible(false);
        		
        		this.edt_down00.set_enable(false);
        		this.edt_down01.set_enable(false);
        		this.edt_down02.set_enable(false);
        		this.edt_down03.set_enable(false);
        		this.edt_down04.set_enable(false);
        		this.edt_down05.set_enable(false);
        		this.edt_down06.set_enable(false);
        		this.edt_down07.set_enable(false);
        		this.edt_down08.set_enable(false);
        		this.edt_down09.set_enable(false);
        		
        		this.btn_register.set_enable(false);
        		this.btn_register01.set_enable(false);
        	}
        }

        /*sts2 보완수정 파일업로드 점수입력 비활성화*/
        this.disable2 = function(obj,e)
        {
        	{
        		this.rdo_a01.set_readonly(true);
        		this.rdo_a02.set_readonly(true);
        		this.rdo_a03.set_readonly(true);
        		this.rdo_a04.set_readonly(true);
        		this.rdo_a05.set_readonly(true);
        		this.chk_a06.set_readonly(true);
        		this.cbo_b01.set_readonly(true);
        		this.chk_b11.set_readonly(true);
        		this.chk_b02.set_readonly(true);
        		this.rdo_b03.set_readonly(true);
        		this.rdo_b04.set_readonly(true);
        		this.rdo_b05.set_readonly(true);
        		
        		//파일업로드 활성화
        		if(!this.gfn_isNull(this.edt_down00.value))
        		{
        			this.edt_down00.set_enable(true);
        		}
        		if(!this.gfn_isNull(this.edt_down01.value))
        		{
        			this.edt_down01.set_enable(true);
        		}
        		if(!this.gfn_isNull(this.edt_down02.value))
        		{
        			this.edt_down02.set_enable(true);
        		}
        		if(!this.gfn_isNull(this.edt_down03.value))
        		{
        			this.edt_down03.set_enable(true);
        		}
        		if(!this.gfn_isNull(this.edt_down04.value))
        		{
        			this.edt_down04.set_enable(true);
        		}
        		if(!this.gfn_isNull(this.edt_down05.value))
        		{
        			this.edt_down05.set_enable(true);
        		}
        		if(!this.gfn_isNull(this.edt_down06.value))
        		{
        			this.edt_down06.set_enable(true);
        		}
        		if(!this.gfn_isNull(this.edt_down07.value))
        		{
        			this.edt_down07.set_enable(true);
        		}
        		if(!this.gfn_isNull(this.edt_down08.value))
        		{
        			this.edt_down08.set_enable(true);
        		}
        		if(!this.gfn_isNull(this.edt_down09.value))
        		{
        			this.edt_down09.set_enable(true);
        		}
        	}
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
        	} else if (svcID == "update" || svcID == "updateBuyer") {
        		this.gfn_getMessage("alert", "result.message.save.success");
        		this.close("SUCCESS");
        		return;
        	}
        	
        	//trace(this.ds_uploadresult.saveXML());
        	
        	/*서류첨부*/
        	if(!this.gfn_isNull(this.ds_uploadresult.rowcount))
        	{
        		for(var i = 0 ; i < this.ds_uploadresult.rowcount; i++){
        			
        			if(this.ds_uploadresult.getColumn(i, "DCM_C") == "00"){
        				this.edt_down00.set_value(this.ds_uploadresult.getColumn(i, "ORGFNAME"));
        			}
        			if(this.ds_uploadresult.getColumn(i, "DCM_C") == "01"){
        				this.edt_down01.set_value(this.ds_uploadresult.getColumn(i, "ORGFNAME"));
        			}
        			if(this.ds_uploadresult.getColumn(i, "DCM_C") == "02"){
        				this.edt_down02.set_value(this.ds_uploadresult.getColumn(i, "ORGFNAME"));
        			}
        			if(this.ds_uploadresult.getColumn(i, "DCM_C") == "03"){
        				this.edt_down03.set_value(this.ds_uploadresult.getColumn(i, "ORGFNAME"));
        			}
        			if(this.ds_uploadresult.getColumn(i, "DCM_C") == "04"){
        				this.edt_down04.set_value(this.ds_uploadresult.getColumn(i, "ORGFNAME"));
        			}
        			if(this.ds_uploadresult.getColumn(i, "DCM_C") == "05"){
        				this.edt_down05.set_value(this.ds_uploadresult.getColumn(i, "ORGFNAME"));
        			}
        			if(this.ds_uploadresult.getColumn(i, "DCM_C") == "06"){
        				this.edt_down06.set_value(this.ds_uploadresult.getColumn(i, "ORGFNAME"));
        			}
        			if(this.ds_uploadresult.getColumn(i, "DCM_C") == "07"){
        				this.edt_down07.set_value(this.ds_uploadresult.getColumn(i, "ORGFNAME"));
        			}
        			if(this.ds_uploadresult.getColumn(i, "DCM_C") == "08"){
        				this.edt_down08.set_value(this.ds_uploadresult.getColumn(i, "ORGFNAME"));
        			}
        			if(this.ds_uploadresult.getColumn(i, "DCM_C") == "09"){
        				this.edt_down09.set_value(this.ds_uploadresult.getColumn(i, "ORGFNAME"));
        			}
        		}
        	}
        	
        	//trace(this.ds_registerList.saveXML());
        	//trace(this.ds_uploadresult.saveXML());
        	//trace(this.ds_uploadresult00.saveXML());
        	
        	/*retrieve합계호출*/
        	this.retrieveSum();
        	
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
        		this.btn_down_zip.set_right(111);
        	}
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
        var dmc;
        var name;
        this.FileUpload_onsuccess = function(obj,e)
        {	
        	name = obj.name.substring(10,12); //첨부파일코드00~09
        	dmc = this.ds_uploadresult.findRow("DCM_C",name).toString(); //파일Row위치
        	//alert("obj.name==> "+obj.name+"e.eventid==> "+e.eventid+"e.fromobject==> "+e.fromobject.name);
        	
        	if(dmc == -1){
        		if( e.datasets == null )
        		{
        			//trace("업로드 실패");
        			this.alert(e.errormsg);
        			return;
        		} else {
        			//trace("업로드 성공");
        			this.ds_uploadresult.appendData(e.datasets[0],false,false);
        			this.ds_uploadresult.setColumn(this.ds_uploadresult.rowcount -1 ,"DCM_C", name);
        			
        			//trace(this.ds_uploadresult.saveXML());
        			//this.edt_down00.set_value(e.datasets[0].getColumn(0,"ORGFNAME"));
        			this.all["edt_down"+name].set_value(e.datasets[0].getColumn(0,"ORGFNAME"));
        // 			trace("name"+name);
        // 			trace("dmc"+dmc);
        		}
        	}else{
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
        		//trace(e.datasets[0].saveXML());
        		//trace(this.ds_uploadresult.saveXML());
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
        	if( e.datasets == null )
        	{
        		//trace("업로드 실패");
        		this.alert(e.errormsg);
        	} else {
        		//trace("업로드 성공");
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
        		//trace(this.ds_uploadresult00.saveXML());
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
        	//alert(this.ds_uploadresult00.getRowCount());
        	for(var i = this.ds_uploadresult00.getRowCount()-1; i >= 0; i--) {
        	//alert(this.ds_uploadresult00.getColumn("ISCHECKED", i));
        		if(this.ds_uploadresult00.getColumn(i, "ISCHECKED") == 1)
        		{
        			this.ds_uploadresult00.deleteRow(i);
        			//alert(this.ds_uploadresult00.getRowType(i));
        		}
        	}
        }

        this.btn_down00_onclick = function(obj,e)
        {
        	if(!this.gfn_isNull(this.edt_down00.value)){
        		var dmc = this.ds_uploadresult.findRow("DCM_C","00");
        		this.ds_uploadresult.set_rowposition(dmc);
        		
        // 		this.ds_uploadresult01.setColumn(0 ,"DCM_C", this.ds_uploadresult.getColumn(dmc,"DCM_C"));
        // 		this.ds_uploadresult01.setColumn(0,"FILENAME",this.ds_uploadresult.getColumn(dmc,"FILENAME"));
        // 		this.ds_uploadresult01.setColumn(0,"FILESIZE",this.ds_uploadresult.getColumn(dmc,"FILESIZE"));
        // 		this.ds_uploadresult01.setColumn(0,"ORGFNAME",this.ds_uploadresult.getColumn(dmc,"ORGFNAME"));
        // 		this.ds_uploadresult01.setColumn(0,"SYSTEMFILENAME",this.ds_uploadresult.getColumn(dmc,"SYSTEMFILENAME"));
        // 		this.ds_uploadresult01.setColumn(0,"SEAL",this.ds_uploadresult.getColumn(dmc,"SEAL"));
        		
        		this.ds_uploadresult01.copyRow(0, this.ds_uploadresult ,dmc);
        		
        		trace("ssss =>>>  " +this.ds_uploadresult01.saveXML());
        		this.gfn_callDownload(this.ds_uploadresult01);
        	}
        }

        this.btn_down01_onclick = function(obj,e)
        {
        	if(!this.gfn_isNull(this.edt_down01.value)){
        		var dmc = this.ds_uploadresult.findRow("DCM_C","01");
        		this.ds_uploadresult.set_rowposition(dmc);
        		//this.gfn_callDownload(this.ds_uploadresult);
        		
        		this.ds_uploadresult01.copyRow(0, this.ds_uploadresult ,dmc);
        		
        		//trace("ssss =>>>  " +this.ds_uploadresult01.saveXML());
        		this.gfn_callDownload(this.ds_uploadresult01);
        		
        		
        	}
        }

        this.btn_down02_onclick = function(obj,e)
        {
        	if(!this.gfn_isNull(this.edt_down02.value)){
        		var dmc = this.ds_uploadresult.findRow("DCM_C","02");
        		this.ds_uploadresult.set_rowposition(dmc);
        		this.gfn_callDownload(this.ds_uploadresult);
        	}
        }

        this.btn_down03_onclick = function(obj,e)
        {
        	if(!this.gfn_isNull(this.edt_down03.value)){
        		var dmc = this.ds_uploadresult.findRow("DCM_C","03");
        		this.ds_uploadresult.set_rowposition(dmc);
        		this.gfn_callDownload(this.ds_uploadresult);
        	}
        }

        this.btn_down04_onclick = function(obj,e)
        {
        	if(!this.gfn_isNull(this.edt_down04.value)){
        		var dmc = this.ds_uploadresult.findRow("DCM_C","04");
        		this.ds_uploadresult.set_rowposition(dmc);
        		this.gfn_callDownload(this.ds_uploadresult);
        	}
        }

        this.btn_down05_onclick = function(obj,e)
        {
        	if(!this.gfn_isNull(this.edt_down05.value)){
        		var dmc = this.ds_uploadresult.findRow("DCM_C","05");
        		this.ds_uploadresult.set_rowposition(dmc);
        		this.gfn_callDownload(this.ds_uploadresult);
        	}
        }

        this.btn_down06_onclick = function(obj,e)
        {
        	if(!this.gfn_isNull(this.edt_down06.value)){
        		var dmc = this.ds_uploadresult.findRow("DCM_C","06");
        		this.ds_uploadresult.set_rowposition(dmc);
        		this.gfn_callDownload(this.ds_uploadresult);
        	}
        }

        this.btn_down07_onclick = function(obj,e)
        {
        	if(!this.gfn_isNull(this.edt_down07.value)){
        		var dmc = this.ds_uploadresult.findRow("DCM_C","07");
        		this.ds_uploadresult.set_rowposition(dmc);
        		this.gfn_callDownload(this.ds_uploadresult);
        	}
        }

        this.btn_down08_onclick = function(obj,e)
        {
        	if(!this.gfn_isNull(this.edt_down08.value)){
        		var dmc = this.ds_uploadresult.findRow("DCM_C","08");
        		this.ds_uploadresult.set_rowposition(dmc);
        		this.gfn_callDownload(this.ds_uploadresult);
        	}
        }

        this.btn_down09_onclick = function(obj,e)
        {
        	if(!this.gfn_isNull(this.edt_down09.value)){
        		var dmc = this.ds_uploadresult.findRow("DCM_C","09");
        		this.ds_uploadresult.set_rowposition(dmc);
        		this.gfn_callDownload(this.ds_uploadresult);
        	}
        }

        this.btn_down10_onclick = function(obj,e)
        {
        	//this.gfn_callDownload(this.ds_uploadresult00);
        	//trace(this.ds_uploadresult00.saveXML());
        	this.gfn_callDownload(this.ds_uploadresult00, "ISCHECKED")
        	
        	
        	
        	
        	/*
        	if(this.ds_uploadresult00.getColumn(this.ds_uploadresult00, "ISCHECKED") == 0)
        	{
        		alert("파일을 다운할 서류를 선택 하세요.");
        	}else{
        		this.gfn_callDownload(this.ds_uploadresult00);
        	}
        	*/
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

        this.PopupMenu00_onmenuclick = function(obj,e)
        {
        	
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
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_uploadresult00.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.ds_uploadresult.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.ds_test.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.ds_uploadresult01.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.addEventHandler("onload", this.OMG_DS_SC_1113_onload, this);
            this.btn_register.addEventHandler("onclick", this.btn_register_onclick, this);
            this.mae_bzno.addEventHandler("onlbuttonup", this.mae_bzno_onlbuttonup, this);
            this.btn_addr.addEventHandler("onclick", this.btn_addr_onclick, this);
            this.chk_chrMft.addEventHandler("onchanged", this.chk_chrMft_onchanged, this);
            this.Static192.addEventHandler("onclick", this.Static192_onclick, this);
            this.cbo_b01.addEventHandler("onitemchanged", this.cbo_b01_onitemchanged, this);
            this.rdo_a01.addEventHandler("onitemchanged", this.rdo_a01_onitemchanged, this);
            this.rdo_a02.addEventHandler("onitemchanged", this.rdo_a02_onitemchanged, this);
            this.rdo_a05.addEventHandler("onitemchanged", this.rdo_a05_onitemchanged, this);
            this.rdo_a03.addEventHandler("onitemchanged", this.rdo_a03_onitemchanged, this);
            this.rdo_a04.addEventHandler("onitemchanged", this.rdo_a04_onitemchanged, this);
            this.chk_a06.addEventHandler("onchanged", this.chk_a06_onchanged, this);
            this.chk_b11.addEventHandler("onchanged", this.chk_b11_onchanged, this);
            this.chk_b02.addEventHandler("onchanged", this.chk_b02_onchanged, this);
            this.rdo_b03.addEventHandler("onitemchanged", this.rdo_b03_onitemchanged, this);
            this.rdo_b04.addEventHandler("onitemchanged", this.rdo_b04_onitemchanged, this);
            this.rdo_b05.addEventHandler("onitemchanged", this.rdo_b05_onitemchanged, this);
            this.btn_down00.addEventHandler("onclick", this.btn_down00_onclick, this);
            this.btn_down01.addEventHandler("onclick", this.btn_down01_onclick, this);
            this.btn_down02.addEventHandler("onclick", this.btn_down02_onclick, this);
            this.btn_down03.addEventHandler("onclick", this.btn_down03_onclick, this);
            this.btn_down04.addEventHandler("onclick", this.btn_down04_onclick, this);
            this.btn_down05.addEventHandler("onclick", this.btn_down05_onclick, this);
            this.btn_down06.addEventHandler("onclick", this.btn_down06_onclick, this);
            this.btn_down07.addEventHandler("onclick", this.btn_down07_onclick, this);
            this.btn_down08.addEventHandler("onclick", this.btn_down08_onclick, this);
            this.btn_down09.addEventHandler("onclick", this.btn_down09_onclick, this);
            this.grd_file.addEventHandler("onheadclick", this.grd_file_onheadclick, this);
            this.FileUpload10.addEventHandler("onsuccess", this.FileUpload10_onsuccess, this);
            this.FileUpload10.addEventHandler("onerror", this.FileUpload10_onerror, this);
            this.FileUpload10.addEventHandler("onitemchanged", this.FileUpload10_onitemchanged, this);
            this.btn_fileDel.addEventHandler("onclick", this.btn_fileDel_onclick, this);
            this.FileUpload00.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload00.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload00.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.FileUpload01.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload01.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload01.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.FileUpload02.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload02.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload02.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.FileUpload03.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload03.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload03.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.FileUpload04.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload04.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload04.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.FileUpload05.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload05.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload05.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.FileUpload06.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload06.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload06.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.FileUpload07.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload07.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload07.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.FileUpload08.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload08.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload08.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.FileUpload09.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload09.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload09.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.btn_down10.addEventHandler("onclick", this.btn_down10_onclick, this);
            this.btn_buyer.addEventHandler("onclick", this.btn_buyer_onclick, this);
            this.btn_register01.addEventHandler("onclick", this.btn_register_onclick, this);
            this.btn_print.addEventHandler("onclick", this.btn_print_onclick, this);
            this.PopupMenu00.addEventHandler("onmenuclick", this.PopupMenu00_onmenuclick, this);
            this.Button05.addEventHandler("onclick", this.Button06_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button07_onclick, this);
            this.Button00.addEventHandler("onclick", this.Button05_onclick, this);
            this.btn_updateBuyer.addEventHandler("onclick", this.btn_updateBuyer_onclick, this);
            this.btn_down_zip.addEventHandler("onclick", this.btn_down_zip_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_1113.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
