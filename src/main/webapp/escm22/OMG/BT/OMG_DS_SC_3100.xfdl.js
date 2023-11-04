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
                this.set_name("OMG_DS_SC_3110");
                this.set_classname("pattern_01");
                this.set_titletext("상담신청등록");
                this._setFormPosition(0,0,950,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_file", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">1ABC123456789</Col><Col id=\"Column4\">1ABC123456789</Col><Col id=\"Column5\">2015-04-04</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column8\">1</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">2ABC123456789</Col><Col id=\"Column4\">2ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col><Col id=\"Column8\">1</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">3ABC123456789</Col><Col id=\"Column4\">3ABC123456789</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col><Col id=\"Column8\">1</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">4ABC123456789</Col><Col id=\"Column4\">4ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col><Col id=\"Column8\">1</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">5ABC123456789</Col><Col id=\"Column4\">5ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col><Col id=\"Column8\">1</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">6ABC123456789</Col><Col id=\"Column4\">6ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col><Col id=\"Column8\">1</Col></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">7ABC123456789</Col><Col id=\"Column4\">7ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col><Col id=\"Column8\">1</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">8ABC123456789</Col><Col id=\"Column4\">8ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col><Col id=\"Column8\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rdo00", this);
            obj.set_firefirstcount("0");
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
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CSLT_RQ_NO\" type=\"STRING\" size=\"256\" sumtext=\"상담신청번호\"/><Column id=\"BZNO\" type=\"STRING\" size=\"256\" sumtext=\"사업자등록번호\"/><Column id=\"ST_DT\" type=\"STRING\" size=\"256\" sumtext=\"신청일자\"/><Column id=\"CHRR\" type=\"STRING\" size=\"256\" sumtext=\"담당자\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\" sumtext=\"경제통합상품대분류코드\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\" sumtext=\"경제통합상품중분류코드\"/><Column id=\"NA_WRS_SCLC\" type=\"STRING\" size=\"256\" sumtext=\"경제통합상품소분류코드\"/><Column id=\"NA_WRS_DTCF_C\" type=\"STRING\" size=\"256\" sumtext=\"경제통합상품세분류코드\"/><Column id=\"CHRW_ATEL\" type=\"STRING\" size=\"256\" sumtext=\"담당자 전화지역번호\"/><Column id=\"CHRW_HTEL\" type=\"STRING\" size=\"256\" sumtext=\"담당자 전화국번호\"/><Column id=\"CHRW_STEL\" type=\"STRING\" size=\"256\" sumtext=\"담당자 전화일련번호\"/><Column id=\"CHRR_EMAIL\" type=\"STRING\" size=\"256\" sumtext=\"담당자 Email\"/><Column id=\"CHRR_MPNO\" type=\"STRING\" size=\"256\" sumtext=\"담당자 휴대전화\"/><Column id=\"CHRW_MPSVNO\" type=\"STRING\" size=\"256\" sumtext=\"담당자 휴대전화서비스번호\"/><Column id=\"CHRW_MPHNO\" type=\"STRING\" size=\"256\" sumtext=\"담당자 휴대전화국번호\"/><Column id=\"CHRW_MPSQNO\" type=\"STRING\" size=\"256\" sumtext=\"담당자 휴대전화일련번호\"/><Column id=\"CONM\" type=\"STRING\" size=\"256\" sumtext=\"업체명\"/><Column id=\"REPM\" type=\"STRING\" size=\"256\" sumtext=\"대표자\"/><Column id=\"REPM_ATEL\" type=\"STRING\" size=\"256\" sumtext=\"대표자 전화지역번호\"/><Column id=\"REPM_HTEL\" type=\"STRING\" size=\"256\" sumtext=\"대표자 전화국번호\"/><Column id=\"REPM_STEL\" type=\"STRING\" size=\"256\" sumtext=\"대표자 전화일련번호\"/><Column id=\"BIZTP\" type=\"STRING\" size=\"256\" sumtext=\"업태\"/><Column id=\"ITM\" type=\"STRING\" size=\"256\" sumtext=\"종목\"/><Column id=\"FZIP\" type=\"STRING\" size=\"256\" sumtext=\"앞자리우편번호\"/><Column id=\"RZIP\" type=\"STRING\" size=\"256\" sumtext=\"뒷자리우편번호\"/><Column id=\"ZIP_SQNO\" type=\"STRING\" size=\"256\" sumtext=\"우편번호일련번호\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"256\" sumtext=\"동이상주소\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"256\" sumtext=\"동이하주소\"/><Column id=\"BYR_SLAM\" type=\"STRING\" size=\"256\" sumtext=\"연간매출금액\"/><Column id=\"MSELPL\" type=\"STRING\" size=\"256\" sumtext=\"주판매처\"/><Column id=\"MFO_LATC\" type=\"STRING\" size=\"256\" sumtext=\"주력품목\"/><Column id=\"CO_CHR_MFT\" type=\"STRING\" size=\"256\" sumtext=\"회사성격 제조\"/><Column id=\"CO_CHR_REV\" type=\"STRING\" size=\"256\" sumtext=\"회사성격 수입\"/><Column id=\"CO_CHR_TOT_AGCY\" type=\"STRING\" size=\"256\" sumtext=\"회사성격 총판/대리점\"/><Column id=\"CO_CHR_VD\" type=\"STRING\" size=\"256\" sumtext=\"회사성격 벤더\"/><Column id=\"MAJ_LATC\" type=\"STRING\" size=\"256\" sumtext=\"주요품목\"/><Column id=\"CSLT_RQ_CNTN\" type=\"STRING\" size=\"256\" sumtext=\"상담신청내용\"/><Column id=\"STS\" type=\"STRING\" size=\"256\" sumtext=\"상태\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\" sumtext=\"비고\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\" sumtext=\"최초등록일시\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\" sumtext=\"최초등록자\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\" sumtext=\"최종변경일시\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\" sumtext=\"최종변경자\"/></ColumnInfo><Rows><Row><Col id=\"BZNO\"/><Col id=\"CSLT_RQ_NO\"/><Col id=\"ST_DT\"/><Col id=\"CHRR\"/><Col id=\"NA_WRS_LCLC\"/><Col id=\"NA_WRS_MCLC\"/><Col id=\"NA_WRS_SCLC\"/><Col id=\"NA_WRS_DTCF_C\"/><Col id=\"CHRW_ATEL\"/><Col id=\"CHRW_HTEL\"/><Col id=\"CHRW_STEL\"/><Col id=\"CHRR_EMAIL\"/><Col id=\"CHRR_MPNO\"/><Col id=\"CHRW_MPSVNO\"/><Col id=\"CHRW_MPHNO\"/><Col id=\"CHRW_MPSQNO\"/><Col id=\"CONM\"/><Col id=\"REPM\"/><Col id=\"REPM_ATEL\"/><Col id=\"REPM_HTEL\"/><Col id=\"REPM_STEL\"/><Col id=\"BIZTP\"/><Col id=\"ITM\"/><Col id=\"FZIP\"/><Col id=\"RZIP\"/><Col id=\"ZIP_SQNO\"/><Col id=\"DONGUP\"/><Col id=\"DONGBW\"/><Col id=\"BYR_SLAM\"/><Col id=\"MSELPL\"/><Col id=\"MFO_LATC\"/><Col id=\"CO_CHR_MFT\"/><Col id=\"CO_CHR_REV\"/><Col id=\"CO_CHR_TOT_AGCY\"/><Col id=\"CO_CHR_VD\"/><Col id=\"MAJ_LATC\"/><Col id=\"CSLT_RQ_CNTN\"/><Col id=\"STS\"/><Col id=\"RMK\"/><Col id=\"FSRG_DTM\"/><Col id=\"FS_RGM\"/><Col id=\"LSCHG_DTM\"/><Col id=\"LS_CHGM\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rcev", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CSLT_RQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_A1\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_A2\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_A3\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_A4\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_A5\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_A6\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_B1\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_B11\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_B2\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_B3\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_B4\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNG_B5\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNGCN\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static200", "absolute", "124", "280", "811", "29", null, null, this);
            obj.getSetter("taborder").set("533");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "124", "462", "811", "29", null, null, this);
            obj.getSetter("taborder").set("167");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "124", "518", "811", "45", null, null, this);
            obj.getSetter("taborder").set("171");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "124", "490", "811", "29", null, null, this);
            obj.getSetter("taborder").set("170");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static50", "absolute", "124", "336", "811", "29", null, null, this);
            obj.getSetter("taborder").set("284");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "124", "252", "811", "29", null, null, this);
            obj.getSetter("taborder").set("283");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "124", "56", "811", "29", null, null, this);
            obj.getSetter("taborder").set("54");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Button("Button08", "absolute", "894", "15", "41", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "15", "56", "110", "29", null, null, this);
            obj.getSetter("taborder").set("45");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("입력결과");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "15", "36", "871", "20", null, null, this);
            obj.getSetter("taborder").set("97");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "15", "101", "301", "21", null, null, this);
            obj.getSetter("taborder").set("106");
            obj.set_text("신청자 기본정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "124", "126", "811", "29", null, null, this);
            obj.getSetter("taborder").set("107");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "15", "126", "110", "29", null, null, this);
            obj.getSetter("taborder").set("108");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "124", "154", "811", "29", null, null, this);
            obj.getSetter("taborder").set("113");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "15", "154", "110", "29", null, null, this);
            obj.getSetter("taborder").set("114");
            obj.set_text("E-Mail");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_chrrEmail", "absolute", "128", "158", "292", "21", null, null, this);
            obj.set_taborder("119");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "15", "199", "301", "21", null, null, this);
            obj.getSetter("taborder").set("130");
            obj.set_text("회사 기본정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "124", "224", "811", "29", null, null, this);
            obj.getSetter("taborder").set("131");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "15", "224", "110", "29", null, null, this);
            obj.getSetter("taborder").set("132");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "15", "252", "110", "29", null, null, this);
            obj.getSetter("taborder").set("133");
            obj.set_text("대표자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "124", "308", "811", "29", null, null, this);
            obj.getSetter("taborder").set("135");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "423", "280", "110", "29", null, null, this);
            obj.getSetter("taborder").set("136");
            obj.set_text("종목");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_itm", "absolute", "536", "284", "395", "21", null, null, this);
            obj.set_taborder("138");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "15", "336", "110", "57", null, null, this);
            obj.getSetter("taborder").set("153");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "15", "409", "301", "21", null, null, this);
            obj.getSetter("taborder").set("157");
            obj.set_text("계약상담 신청정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "15", "434", "110", "29", null, null, this);
            obj.getSetter("taborder").set("164");
            obj.set_text("상품분류");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "423", "462", "110", "29", null, null, this);
            obj.getSetter("taborder").set("165");
            obj.set_text("주판매처");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "124", "434", "811", "29", null, null, this);
            obj.getSetter("taborder").set("166");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static61", "absolute", "15", "518", "110", "45", null, null, this);
            obj.getSetter("taborder").set("191");
            obj.set_text("제목\r\n(업체명,주품목)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "552", "438", "128", "21", null, null, this);
            obj.set_taborder("205");
            this.addChild(obj.name, obj);

            obj = new Static("Static68", "absolute", "15", "490", "110", "29", null, null, this);
            obj.getSetter("taborder").set("207");
            obj.set_text("주력품목");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static75", "absolute", "15", "462", "110", "29", null, null, this);
            obj.getSetter("taborder").set("223");
            obj.set_text("연간매출");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static76", "absolute", "423", "490", "110", "29", null, null, this);
            obj.getSetter("taborder").set("224");
            obj.set_text("회사성격");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "15", "85", null, "20", "-4", null, this);
            obj.getSetter("taborder").set("242");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "15", "183", null, "20", "-4", null, this);
            obj.getSetter("taborder").set("243");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "15", "393", null, "20", "-4", null, this);
            obj.getSetter("taborder").set("244");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "851", "15", "41", "21", null, null, this);
            obj.set_taborder("288");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_sum00", "absolute", "128", "60", "100", "21", null, null, this);
            obj.set_taborder("289");
            obj.set_enable("false");
            obj.set_displaynulltext("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "232", "60", "28", "21", null, null, this);
            obj.getSetter("taborder").set("290");
            obj.set_text("점");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_chrr", "absolute", "128", "130", "292", "21", null, null, this);
            obj.set_taborder("291");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "423", "224", "110", "29", null, null, this);
            obj.getSetter("taborder").set("297");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_bzno", "absolute", "128", "228", "151", "21", null, null, this);
            obj.set_taborder("298");
            obj.set_type("string");
            obj.set_mask("###-##-#####");
            obj.set_limitbymask("integer");
            obj.set_trimtype("right");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "423", "252", "110", "29", null, null, this);
            obj.getSetter("taborder").set("299");
            obj.set_text("대표자연락처");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "15", "280", "110", "29", null, null, this);
            obj.getSetter("taborder").set("300");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_repmAtel", "absolute", "536", "256", "51", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_repmAtel_innerdataset = new Dataset("cbo_repmAtel_innerdataset", this.cbo_repmAtel);
            cbo_repmAtel_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">010</Col><Col id=\"datacolumn\">010</Col></Row><Row><Col id=\"codecolumn\">011</Col><Col id=\"datacolumn\">011</Col></Row></Rows>");
            obj.set_innerdataset(cbo_repmAtel_innerdataset);
            obj.set_taborder("301");
            obj.set_value("1");
            obj.set_text("010");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");

            obj = new Static("Static27", "absolute", "648", "256", "9", "21", null, null, this);
            obj.getSetter("taborder").set("302");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "589", "256", "9", "21", null, null, this);
            obj.getSetter("taborder").set("303");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_conm", "absolute", "536", "228", "395", "21", null, null, this);
            obj.set_taborder("306");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_repm", "absolute", "128", "256", "292", "21", null, null, this);
            obj.set_taborder("307");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_biztp", "absolute", "128", "284", "292", "21", null, null, this);
            obj.set_taborder("308");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "15", "308", "110", "29", null, null, this);
            obj.getSetter("taborder").set("309");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dongUp", "absolute", "128", "340", "803", "21", null, null, this);
            obj.set_taborder("310");
            obj.set_enable("false");
            obj.set_value("서울시 중구");
            this.addChild(obj.name, obj);

            obj = new Static("Static142", "absolute", "188", "312", "9", "21", null, null, this);
            obj.getSetter("taborder").set("313");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00", "absolute", "258", "312", "21", "21", null, null, this);
            obj.set_taborder("315");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_chrwAtel", "absolute", "536", "130", "51", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_chrwAtel_innerdataset = new Dataset("cbo_chrwAtel_innerdataset", this.cbo_chrwAtel);
            cbo_chrwAtel_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">010</Col><Col id=\"datacolumn\">010</Col></Row><Row><Col id=\"codecolumn\">011</Col><Col id=\"datacolumn\">011</Col></Row></Rows>");
            obj.set_innerdataset(cbo_chrwAtel_innerdataset);
            obj.set_taborder("265");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj.set_value("1");
            obj.set_text("010");

            obj = new Static("Static31", "absolute", "648", "130", "9", "21", null, null, this);
            obj.getSetter("taborder").set("266");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "589", "130", "9", "21", null, null, this);
            obj.getSetter("taborder").set("267");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_chrwMpsvno", "absolute", "536", "158", "51", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_chrwMpsvno_innerdataset = new Dataset("cbo_chrwMpsvno_innerdataset", this.cbo_chrwMpsvno);
            cbo_chrwMpsvno_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">010</Col><Col id=\"datacolumn\">010</Col></Row><Row><Col id=\"codecolumn\">011</Col><Col id=\"datacolumn\">011</Col></Row></Rows>");
            obj.set_innerdataset(cbo_chrwMpsvno_innerdataset);
            obj.set_taborder("292");
            obj.set_value("1");
            obj.set_text("010");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");

            obj = new Static("Static02", "absolute", "648", "158", "9", "21", null, null, this);
            obj.getSetter("taborder").set("293");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "589", "158", "9", "21", null, null, this);
            obj.getSetter("taborder").set("294");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "423", "126", "110", "29", null, null, this);
            obj.getSetter("taborder").set("109");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "423", "154", "110", "29", null, null, this);
            obj.getSetter("taborder").set("115");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_category00", "absolute", "128", "438", "222", "21", null, null, this);
            obj.set_taborder("316");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_category01", "absolute", "353", "438", "554", "21", null, null, this);
            obj.set_taborder("317");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search01", "absolute", "910", "438", "21", "21", null, null, this);
            obj.set_taborder("318");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_byrSlam", "absolute", "128", "466", "150", "21", null, null, this);
            obj.set_taborder("319");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "283", "466", "82", "21", null, null, this);
            obj.getSetter("taborder").set("320");
            obj.set_text("(단위 : 억원)");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mSelPl", "absolute", "536", "466", "395", "21", null, null, this);
            obj.set_taborder("321");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mProduct", "absolute", "128", "494", "292", "21", null, null, this);
            obj.set_taborder("322");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_chrMft", "absolute", "540", "494", "53", "21", null, null, this);
            obj.set_taborder("323");
            obj.set_text("제조");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_chrRev", "absolute", "598", "494", "53", "21", null, null, this);
            obj.set_taborder("324");
            obj.set_text("수입");
            obj.set_truevalue("2");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_chrTotAgcy", "absolute", "655", "494", "97", "21", null, null, this);
            obj.set_taborder("325");
            obj.set_text("총판/대리점");
            obj.set_truevalue("3");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_chrVd", "absolute", "754", "494", "57", "21", null, null, this);
            obj.set_taborder("326");
            obj.set_text("벤더");
            obj.set_truevalue("4");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "15", "562", "110", "100", null, null, this);
            obj.getSetter("taborder").set("327");
            obj.set_text("상담신청내용\r\n(업체 및 상품\r\n소개)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "124", "562", "811", "100", null, null, this);
            obj.getSetter("taborder").set("328");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new TextArea("ta_cslt", "absolute", "128", "566", "803", "92", null, null, this);
            obj.set_taborder("329");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "15", "661", "110", "45", null, null, this);
            obj.getSetter("taborder").set("330");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "124", "661", "811", "45", null, null, this);
            obj.getSetter("taborder").set("331");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new TextArea("ta_rmk", "absolute", "128", "665", "803", "37", null, null, this);
            obj.set_taborder("332");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "12", "706", null, "20", "-1", null, this);
            obj.getSetter("taborder").set("333");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "15", "722", "301", "21", null, null, this);
            obj.getSetter("taborder").set("334");
            obj.set_text("회사설명 첨부파일");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delRow", "absolute", "882", "726", "53", "21", null, null, this);
            obj.set_taborder("335");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addRow", "absolute", "827", "726", "53", "21", null, null, this);
            obj.set_taborder("336");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_file", "absolute", "15", "752", "920", "86", null, null, this);
            obj.set_taborder("337");
            obj.set_binddataset("ds_file");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"270\"/><Column size=\"506\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"파일명\"/><Cell col=\"2\" text=\"UPLOAD 파일\"/><Cell col=\"3\" text=\"파일찾기\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column8\"/><Cell col=\"1\" text=\"bind:Column3\"/><Cell col=\"2\" text=\"bind:Column4\"/><Cell col=\"3\" displaytype=\"button\" edittype=\"button\" text=\"파일찾기\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "15", "854", "301", "21", null, null, this);
            obj.getSetter("taborder").set("338");
            obj.set_text("평가표");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "12", "838", null, "20", "-1", null, this);
            obj.getSetter("taborder").set("339");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "132", "883", "246", "29", null, null, this);
            obj.getSetter("taborder").set("340");
            obj.set_text("평가기준");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "132", "1163", "246", "29", null, null, this);
            obj.getSetter("taborder").set("341");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("전년 세금계산서(월별,매월) 첨부파일");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "132", "1023", "246", "141", null, null, this);
            obj.getSetter("taborder").set("342");
            obj.set_text("매출규모(직전년)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "132", "911", "246", "85", null, null, this);
            obj.getSetter("taborder").set("343");
            obj.set_text("동종업계 입력");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", "13", "883", "120", "29", null, null, this);
            obj.getSetter("taborder").set("346");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", "13", "1023", "120", "169", null, null, this);
            obj.getSetter("taborder").set("348");
            obj.set_text("실적");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "13", "911", "120", "113", null, null, this);
            obj.getSetter("taborder").set("349");
            obj.set_text("입력");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static62", "absolute", "377", "883", "440", "29", null, null, this);
            obj.getSetter("taborder").set("352");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", "816", "883", "60", "29", null, null, this);
            obj.getSetter("taborder").set("353");
            obj.set_text("배점");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", "875", "883", "60", "29", null, null, this);
            obj.getSetter("taborder").set("354");
            obj.set_text("득점");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static65", "absolute", "377", "911", "440", "29", null, null, this);
            obj.getSetter("taborder").set("355");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_text("개업 1년 이상 ~ 3년 미만");
            this.addChild(obj.name, obj);

            obj = new Static("Static66", "absolute", "816", "911", "60", "29", null, null, this);
            obj.getSetter("taborder").set("356");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static67", "absolute", "875", "911", "60", "29", null, null, this);
            obj.getSetter("taborder").set("357");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static69", "absolute", "377", "939", "440", "29", null, null, this);
            obj.getSetter("taborder").set("358");
            obj.set_text("3년 이상 ~ 10년 미만");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static70", "absolute", "816", "939", "60", "29", null, null, this);
            obj.getSetter("taborder").set("359");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static71", "absolute", "875", "939", "60", "29", null, null, this);
            obj.getSetter("taborder").set("360");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static72", "absolute", "377", "967", "440", "29", null, null, this);
            obj.getSetter("taborder").set("361");
            obj.set_text("10년 이상");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static73", "absolute", "816", "967", "60", "29", null, null, this);
            obj.getSetter("taborder").set("362");
            obj.set_text("15");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static74", "absolute", "875", "967", "60", "29", null, null, this);
            obj.getSetter("taborder").set("363");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static77", "absolute", "132", "995", "246", "29", null, null, this);
            obj.getSetter("taborder").set("364");
            obj.set_text("사업장 등록증 첨부파일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static78", "absolute", "377", "995", "558", "29", null, null, this);
            obj.getSetter("taborder").set("365");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload00", "absolute", "379", "999", "552", "21", null, null, this);
            obj.set_taborder("366");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            obj.set_visible("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", "377", "1023", "440", "29", null, null, this);
            obj.getSetter("taborder").set("367");
            obj.set_text("1억원 미만");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static79", "absolute", "816", "1023", "60", "29", null, null, this);
            obj.getSetter("taborder").set("368");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static80", "absolute", "875", "1023", "60", "29", null, null, this);
            obj.getSetter("taborder").set("369");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static81", "absolute", "377", "1051", "440", "29", null, null, this);
            obj.getSetter("taborder").set("370");
            obj.set_text("1억원 이상 ~ 3억원 미만");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static82", "absolute", "816", "1051", "60", "29", null, null, this);
            obj.getSetter("taborder").set("371");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static83", "absolute", "875", "1051", "60", "29", null, null, this);
            obj.getSetter("taborder").set("372");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static84", "absolute", "377", "1079", "440", "29", null, null, this);
            obj.getSetter("taborder").set("373");
            obj.set_text("3억원 이상 ~ 10억원 미만");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static85", "absolute", "816", "1079", "60", "29", null, null, this);
            obj.getSetter("taborder").set("374");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", "875", "1079", "60", "29", null, null, this);
            obj.getSetter("taborder").set("375");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static87", "absolute", "377", "1107", "440", "29", null, null, this);
            obj.getSetter("taborder").set("376");
            obj.set_text("10억원 이상 ~ 50억원 미만");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static88", "absolute", "816", "1107", "60", "29", null, null, this);
            obj.getSetter("taborder").set("377");
            obj.set_text("15");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static89", "absolute", "875", "1107", "60", "29", null, null, this);
            obj.getSetter("taborder").set("378");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static90", "absolute", "377", "1135", "440", "29", null, null, this);
            obj.getSetter("taborder").set("379");
            obj.set_text("50억원 이상");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static91", "absolute", "816", "1135", "60", "29", null, null, this);
            obj.getSetter("taborder").set("380");
            obj.set_text("20");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static92", "absolute", "875", "1135", "60", "29", null, null, this);
            obj.getSetter("taborder").set("381");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "377", "1163", "558", "29", null, null, this);
            obj.getSetter("taborder").set("382");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload01", "absolute", "379", "1167", "552", "21", null, null, this);
            obj.set_taborder("383");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            obj.set_visible("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static53", "absolute", "132", "1359", "246", "29", null, null, this);
            obj.getSetter("taborder").set("384");
            obj.set_text("할인점 거래 세금계산서 첨부파일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static54", "absolute", "132", "1191", "246", "85", null, null, this);
            obj.getSetter("taborder").set("385");
            obj.set_text("당기순이익(최근 3년)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static59", "absolute", "13", "1191", "120", "85", null, null, this);
            obj.getSetter("taborder").set("386");
            obj.set_text("성과");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "377", "1191", "440", "29", null, null, this);
            obj.getSetter("taborder").set("387");
            obj.set_text("최근 1년 흑자");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "816", "1191", "60", "29", null, null, this);
            obj.getSetter("taborder").set("388");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static95", "absolute", "875", "1191", "60", "29", null, null, this);
            obj.getSetter("taborder").set("389");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static96", "absolute", "377", "1219", "440", "29", null, null, this);
            obj.getSetter("taborder").set("390");
            obj.set_text("최근 2년 연속 흑자");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static97", "absolute", "816", "1219", "60", "29", null, null, this);
            obj.getSetter("taborder").set("391");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static98", "absolute", "875", "1219", "60", "29", null, null, this);
            obj.getSetter("taborder").set("392");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static99", "absolute", "377", "1247", "440", "29", null, null, this);
            obj.getSetter("taborder").set("393");
            obj.set_text("3년 연속 흑자");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static100", "absolute", "816", "1247", "60", "29", null, null, this);
            obj.getSetter("taborder").set("394");
            obj.set_text("15");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static101", "absolute", "875", "1247", "60", "29", null, null, this);
            obj.getSetter("taborder").set("395");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static108", "absolute", "377", "1359", "558", "29", null, null, this);
            obj.getSetter("taborder").set("402");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload02", "absolute", "379", "1363", "552", "21", null, null, this);
            obj.set_taborder("403");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            obj.set_visible("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static102", "absolute", "132", "1275", "246", "85", null, null, this);
            obj.getSetter("taborder").set("404");
            obj.set_text("4대 할인점 거래");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static103", "absolute", "377", "1275", "440", "29", null, null, this);
            obj.getSetter("taborder").set("405");
            obj.set_text("거래실적 연간 1억원 미만");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static104", "absolute", "816", "1275", "60", "29", null, null, this);
            obj.getSetter("taborder").set("406");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static105", "absolute", "875", "1275", "60", "29", null, null, this);
            obj.getSetter("taborder").set("407");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static106", "absolute", "377", "1303", "440", "29", null, null, this);
            obj.getSetter("taborder").set("408");
            obj.set_text("거래실적 연간 1억원 이상 ~ 2억 미만");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static107", "absolute", "816", "1303", "60", "29", null, null, this);
            obj.getSetter("taborder").set("409");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static109", "absolute", "875", "1303", "60", "29", null, null, this);
            obj.getSetter("taborder").set("410");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static110", "absolute", "377", "1331", "440", "29", null, null, this);
            obj.getSetter("taborder").set("411");
            obj.set_text("거래실적 연간 2억원 이상");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static111", "absolute", "816", "1331", "60", "29", null, null, this);
            obj.getSetter("taborder").set("412");
            obj.set_text("15");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static112", "absolute", "875", "1331", "60", "29", null, null, this);
            obj.getSetter("taborder").set("413");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static113", "absolute", "13", "1275", "120", "113", null, null, this);
            obj.getSetter("taborder").set("414");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static114", "absolute", "132", "1527", "246", "29", null, null, this);
            obj.getSetter("taborder").set("415");
            obj.set_text("신용평가서 첨부파일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static115", "absolute", "132", "1387", "246", "141", null, null, this);
            obj.getSetter("taborder").set("416");
            obj.set_text("기업신용등급");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static116", "absolute", "13", "1387", "120", "169", null, null, this);
            obj.getSetter("taborder").set("417");
            obj.set_text("신용평가");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static117", "absolute", "377", "1387", "440", "29", null, null, this);
            obj.getSetter("taborder").set("418");
            obj.set_text("D ~ CCC");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static118", "absolute", "816", "1387", "60", "29", null, null, this);
            obj.getSetter("taborder").set("419");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static119", "absolute", "875", "1387", "60", "29", null, null, this);
            obj.getSetter("taborder").set("420");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static120", "absolute", "377", "1415", "440", "29", null, null, this);
            obj.getSetter("taborder").set("421");
            obj.set_text("CCC+ ~ B");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static121", "absolute", "816", "1415", "60", "29", null, null, this);
            obj.getSetter("taborder").set("422");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static122", "absolute", "875", "1415", "60", "29", null, null, this);
            obj.getSetter("taborder").set("423");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static123", "absolute", "377", "1443", "440", "29", null, null, this);
            obj.getSetter("taborder").set("424");
            obj.set_text("B+ ~ BBB+");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static124", "absolute", "816", "1443", "60", "29", null, null, this);
            obj.getSetter("taborder").set("425");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static125", "absolute", "875", "1443", "60", "29", null, null, this);
            obj.getSetter("taborder").set("426");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static126", "absolute", "377", "1471", "440", "29", null, null, this);
            obj.getSetter("taborder").set("427");
            obj.set_text("BBB ~ BBB+");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static127", "absolute", "816", "1471", "60", "29", null, null, this);
            obj.getSetter("taborder").set("428");
            obj.set_text("15");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static128", "absolute", "875", "1471", "60", "29", null, null, this);
            obj.getSetter("taborder").set("429");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static132", "absolute", "377", "1527", "558", "29", null, null, this);
            obj.getSetter("taborder").set("433");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload03", "absolute", "379", "1531", "552", "21", null, null, this);
            obj.set_taborder("434");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", "144", "1470", "125", "21", null, null, this);
            obj.set_taborder("435");
            obj.set_text("한국신용평가 사이트");
            this.addChild(obj.name, obj);

            obj = new Static("Static129", "absolute", "377", "1555", "440", "29", null, null, this);
            obj.getSetter("taborder").set("436");
            obj.set_text("공장등록증 (사업자등록증과 일치여부 확인)");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static130", "absolute", "816", "1555", "60", "29", null, null, this);
            obj.getSetter("taborder").set("437");
            obj.set_text("15");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static131", "absolute", "875", "1555", "60", "29", null, null, this);
            obj.getSetter("taborder").set("438");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static133", "absolute", "132", "1555", "246", "29", null, null, this);
            obj.getSetter("taborder").set("439");
            obj.set_text("해당품목 제조 시설 보유");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static134", "absolute", "13", "1555", "120", "29", null, null, this);
            obj.getSetter("taborder").set("440");
            obj.set_text("제조여부");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static138", "absolute", "132", "1583", "246", "29", null, null, this);
            obj.getSetter("taborder").set("444");
            obj.set_text("공장등록증 첨부파일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static139", "absolute", "13", "1583", "120", "29", null, null, this);
            obj.getSetter("taborder").set("445");
            obj.set_text("공장등록증");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static135", "absolute", "377", "1583", "558", "29", null, null, this);
            obj.getSetter("taborder").set("446");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload04", "absolute", "379", "1587", "552", "21", null, null, this);
            obj.set_taborder("447");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            obj.set_visible("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static136", "absolute", "132", "1611", "246", "29", null, null, this);
            obj.getSetter("taborder").set("448");
            obj.set_text("특허보유(10점 한도)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static137", "absolute", "13", "1611", "120", "309", null, null, this);
            obj.getSetter("taborder").set("449");
            obj.set_text("공통");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static140", "absolute", "377", "1611", "440", "29", null, null, this);
            obj.getSetter("taborder").set("450");
            obj.set_text("건당 5점  (실용신안폼함)");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static141", "absolute", "816", "1611", "60", "29", null, null, this);
            obj.getSetter("taborder").set("451");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static143", "absolute", "875", "1611", "60", "29", null, null, this);
            obj.getSetter("taborder").set("452");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static150", "absolute", "132", "1639", "246", "29", null, null, this);
            obj.getSetter("taborder").set("459");
            obj.set_text("특허증서1 파일첨부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static151", "absolute", "377", "1639", "558", "29", null, null, this);
            obj.getSetter("taborder").set("460");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload05", "absolute", "379", "1643", "552", "21", null, null, this);
            obj.set_taborder("461");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            obj.set_enable("false");
            obj.set_multiselect("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static144", "absolute", "132", "1667", "246", "29", null, null, this);
            obj.getSetter("taborder").set("462");
            obj.set_text("특허증서2 파일첨부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static145", "absolute", "377", "1667", "558", "29", null, null, this);
            obj.getSetter("taborder").set("463");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload06", "absolute", "379", "1671", "552", "21", null, null, this);
            obj.set_taborder("464");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static146", "absolute", "132", "1695", "246", "29", null, null, this);
            obj.getSetter("taborder").set("465");
            obj.set_text("정책연관도(10점 한도)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static147", "absolute", "377", "1695", "440", "29", null, null, this);
            obj.getSetter("taborder").set("466");
            obj.set_text("정부정책사업 지원");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static148", "absolute", "816", "1695", "60", "29", null, null, this);
            obj.getSetter("taborder").set("467");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static149", "absolute", "875", "1695", "60", "29", null, null, this);
            obj.getSetter("taborder").set("468");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static152", "absolute", "132", "1723", "246", "29", null, null, this);
            obj.getSetter("taborder").set("469");
            obj.set_text("MOU증서 파일첨부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static153", "absolute", "377", "1723", "558", "29", null, null, this);
            obj.getSetter("taborder").set("470");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload07", "absolute", "379", "1727", "552", "21", null, null, this);
            obj.set_taborder("471");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static154", "absolute", "377", "1751", "440", "29", null, null, this);
            obj.getSetter("taborder").set("472");
            obj.set_text("농협사업기원");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static155", "absolute", "816", "1751", "60", "29", null, null, this);
            obj.getSetter("taborder").set("473");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static156", "absolute", "875", "1751", "60", "29", null, null, this);
            obj.getSetter("taborder").set("474");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static157", "absolute", "132", "1751", "246", "29", null, null, this);
            obj.getSetter("taborder").set("475");
            obj.set_text("정책연관도(10점 한도)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static158", "absolute", "132", "1779", "246", "29", null, null, this);
            obj.getSetter("taborder").set("476");
            obj.set_text("MOU채결문서 파일첨부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static159", "absolute", "377", "1779", "558", "29", null, null, this);
            obj.getSetter("taborder").set("477");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload08", "absolute", "379", "1783", "552", "21", null, null, this);
            obj.set_taborder("478");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static160", "absolute", "132", "1807", "246", "57", null, null, this);
            obj.getSetter("taborder").set("479");
            obj.set_text("유사상품 농협취급 여부\r\n(업체 주력 상품 기준)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static161", "absolute", "377", "1807", "440", "29", null, null, this);
            obj.getSetter("taborder").set("480");
            obj.set_text("유사상품 6개 업체 이상 취급");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static162", "absolute", "816", "1807", "60", "29", null, null, this);
            obj.getSetter("taborder").set("481");
            obj.set_text("-10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static163", "absolute", "875", "1807", "60", "29", null, null, this);
            obj.getSetter("taborder").set("482");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static164", "absolute", "377", "1835", "440", "29", null, null, this);
            obj.getSetter("taborder").set("483");
            obj.set_text("유사상품 6개 업체 미만 취급");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static165", "absolute", "816", "1835", "60", "29", null, null, this);
            obj.getSetter("taborder").set("484");
            obj.set_text("-5");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static166", "absolute", "875", "1835", "60", "29", null, null, this);
            obj.getSetter("taborder").set("485");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static167", "absolute", "132", "1863", "246", "57", null, null, this);
            obj.getSetter("taborder").set("486");
            obj.set_text("농협기여도(10점 한도)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static168", "absolute", "377", "1863", "440", "29", null, null, this);
            obj.getSetter("taborder").set("487");
            obj.set_text("연간 추정매출액 5억원이상 ~ 10억원 미만");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static169", "absolute", "816", "1863", "60", "29", null, null, this);
            obj.getSetter("taborder").set("488");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static170", "absolute", "875", "1863", "60", "29", null, null, this);
            obj.getSetter("taborder").set("489");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static171", "absolute", "377", "1891", "440", "29", null, null, this);
            obj.getSetter("taborder").set("490");
            obj.set_text("연간 추정 매출액 10억원 이상");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static172", "absolute", "816", "1891", "60", "29", null, null, this);
            obj.getSetter("taborder").set("491");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static173", "absolute", "875", "1891", "60", "29", null, null, this);
            obj.getSetter("taborder").set("492");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static174", "absolute", "13", "1919", "120", "85", null, null, this);
            obj.getSetter("taborder").set("493");
            obj.set_text("가공식품\r\n신선식품");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static175", "absolute", "132", "1919", "246", "57", null, null, this);
            obj.getSetter("taborder").set("494");
            obj.set_text("품질관리 공인인중");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static176", "absolute", "377", "1919", "440", "29", null, null, this);
            obj.getSetter("taborder").set("495");
            obj.set_text("소규모 HACCP");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static177", "absolute", "816", "1919", "60", "29", null, null, this);
            obj.getSetter("taborder").set("496");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static178", "absolute", "875", "1919", "60", "29", null, null, this);
            obj.getSetter("taborder").set("497");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static179", "absolute", "377", "1947", "440", "29", null, null, this);
            obj.getSetter("taborder").set("498");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_text("일반 HACCP, GMP(건강식품), 축산물 HACCP");
            this.addChild(obj.name, obj);

            obj = new Static("Static180", "absolute", "816", "1947", "60", "29", null, null, this);
            obj.getSetter("taborder").set("499");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static181", "absolute", "875", "1947", "60", "29", null, null, this);
            obj.getSetter("taborder").set("500");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static182", "absolute", "132", "1975", "246", "29", null, null, this);
            obj.getSetter("taborder").set("501");
            obj.set_text("HARD 증명서 첨부파일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static183", "absolute", "377", "1975", "558", "29", null, null, this);
            obj.getSetter("taborder").set("502");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload09", "absolute", "379", "1979", "552", "21", null, null, this);
            obj.set_taborder("503");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static184", "absolute", "13", "2003", "120", "29", null, null, this);
            obj.getSetter("taborder").set("504");
            obj.set_cssclass("sta_WF_Label_c");
            obj.set_text("소계");
            this.addChild(obj.name, obj);

            obj = new Static("Static185", "absolute", "132", "2003", "246", "29", null, null, this);
            obj.getSetter("taborder").set("505");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static186", "absolute", "377", "2003", "440", "29", null, null, this);
            obj.getSetter("taborder").set("506");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static187", "absolute", "816", "2003", "119", "29", null, null, this);
            obj.getSetter("taborder").set("507");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static188", "absolute", "13", "2070", null, "21", "364", null, this);
            obj.getSetter("taborder").set("508");
            obj.set_text("4대 할인점(이마트, 홈플러스, 롯데마트 코스트코)의 최근 1년 기준일");
            obj.set_cssclass("sta_WF_DescriptionB01");
            this.addChild(obj.name, obj);

            obj = new Static("Static189", "absolute", "13", "2091", null, "21", "188", null, this);
            obj.getSetter("taborder").set("509");
            obj.set_text("신용등급(상 -> 하) : AAA, AA, A+, A, A-, BBB+, BBB, BB+, BB, B+,B, B-, CCC+,CCC, CCC-, CC, C, D");
            obj.set_cssclass("sta_WF_DescriptionB01");
            this.addChild(obj.name, obj);

            obj = new Static("Static190", "absolute", "13", "2112", null, "21", "364", null, this);
            obj.getSetter("taborder").set("510");
            obj.set_text("계약종료 후 2년 내 계약상담 불가");
            obj.set_cssclass("sta_WF_DescriptionB01");
            this.addChild(obj.name, obj);

            obj = new Static("Static191", "absolute", "13", "2133", null, "21", "364", null, this);
            obj.getSetter("taborder").set("511");
            obj.set_text("정책연관도 : 정부기관, 농협의 문서에 의한 사업지원요청 등");
            obj.set_cssclass("sta_WF_DescriptionB01");
            this.addChild(obj.name, obj);

            obj = new Static("Static192", "absolute", "13", "2154", null, "21", "364", null, this);
            obj.getSetter("taborder").set("512");
            obj.set_text("유사상품 농협취급 여부는 최근 1년 세분류 공급실적 기준임");
            obj.set_cssclass("sta_WF_DescriptionB01");
            this.addChild(obj.name, obj);

            obj = new Static("Static193", "absolute", "13", "2175", null, "21", "364", null, this);
            obj.getSetter("taborder").set("513");
            obj.set_text("HACCP/GMP 인증은 식약처 및 HACCP 기준원에서 인증한 것에 한함");
            obj.set_cssclass("sta_WF_DescriptionB01");
            this.addChild(obj.name, obj);

            obj = new Static("Static194", "absolute", "13", "2196", null, "21", "364", null, this);
            obj.getSetter("taborder").set("514");
            obj.set_text("70점 이상 획득업체 상담 가능");
            obj.set_cssclass("sta_WF_DescriptionB01");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_b01", "absolute", "879", "1615", "52", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("515");
            obj.set_codecolumn("level");
            obj.set_datacolumn("point");
            obj.set_index("0");
            obj.set_innerdataset("@ds_cbo02");
            obj.set_value("1");
            obj.set_text("0건");

            obj = new Radio("rdo_a01", "absolute", "899", "913", "20", "83", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("516");
            obj.set_codecolumn("level");
            obj.set_datacolumn("point");
            obj.set_innerdataset("@ds_rdo00");
            obj.set_index("-1");

            obj = new Radio("rdo_a02", "absolute", "899", "1024", "20", "141", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("517");
            obj.set_codecolumn("level");
            obj.set_datacolumn("point");
            obj.set_innerdataset("@ds_rdo01");

            obj = new Static("Static195", "absolute", "377", "1499", "440", "29", null, null, this);
            obj.getSetter("taborder").set("518");
            obj.set_text("A- ~ AAA");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static196", "absolute", "816", "1499", "60", "29", null, null, this);
            obj.getSetter("taborder").set("519");
            obj.set_text("20");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static197", "absolute", "875", "1499", "60", "29", null, null, this);
            obj.getSetter("taborder").set("520");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_a05", "absolute", "899", "1388", "20", "141", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("521");
            obj.set_codecolumn("level");
            obj.set_datacolumn("point");
            obj.set_innerdataset("@ds_rdo02");
            obj.set_enable("true");
            obj.set_index("-1");

            obj = new Radio("rdo_a03", "absolute", "899", "1191", "20", "86", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_a03_innerdataset = new Dataset("rdo_a03_innerdataset", this.rdo_a03);
            rdo_a03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\"/></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\"/></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\"/></Row></Rows>");
            obj.set_innerdataset(rdo_a03_innerdataset);
            obj.set_taborder("522");
            obj.set_codecolumn("level");
            obj.set_datacolumn("point");
            obj.set_innerdataset("@ds_rdo03");

            obj = new Radio("rdo_a04", "absolute", "899", "1276", "20", "86", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("523");
            obj.set_codecolumn("level");
            obj.set_datacolumn("point");
            obj.set_innerdataset("@ds_rdo04");

            obj = new CheckBox("chk_a06", "absolute", "899", "1559", "25", "21", null, null, this);
            obj.set_taborder("524");
            obj.set_value("false");
            obj.set_truevalue("15");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_b11", "absolute", "899", "1699", "25", "21", null, null, this);
            obj.set_taborder("525");
            obj.set_truevalue("10");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_b02", "absolute", "899", "1755", "25", "21", null, null, this);
            obj.set_taborder("526");
            obj.set_truevalue("10");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_b03", "absolute", "899", "1807", "20", "59", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("527");
            obj.set_codecolumn("level");
            obj.set_datacolumn("point");
            obj.set_innerdataset("@ds_rdo05");

            obj = new Radio("rdo_b04", "absolute", "899", "1863", "20", "59", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("528");
            obj.set_codecolumn("level");
            obj.set_datacolumn("point");
            obj.set_innerdataset("@ds_rdo06");
            obj.set_enable("false");

            obj = new Radio("rdo_b05", "absolute", "899", "1920", "20", "59", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("529");
            obj.set_codecolumn("level");
            obj.set_datacolumn("point");
            obj.set_innerdataset("@ds_rdo07");

            obj = new Static("Static198", "absolute", "107", "2211", "279", "15", null, null, this);
            obj.getSetter("taborder").set("530");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.addChild(obj.name, obj);

            obj = new Button("Button06", "absolute", "851", "2051", "84", "21", null, null, this);
            obj.set_taborder("531");
            obj.set_text("입력완료");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static199", "absolute", "12", "2031", null, "20", "-1", null, this);
            obj.getSetter("taborder").set("532");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static201", "absolute", "124", "364", "811", "29", null, null, this);
            obj.getSetter("taborder").set("534");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dongBw", "absolute", "128", "368", "803", "21", null, null, this);
            obj.set_taborder("535");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_majLatc", "absolute", "128", "530", "803", "21", null, null, this);
            obj.set_taborder("536");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_chrwHtel", "absolute", "598", "130", "48", "21", null, null, this);
            obj.set_taborder("537");
            obj.set_maxlength("4");
            obj.set_inputtype("number");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_chrwStel", "absolute", "657", "130", "48", "21", null, null, this);
            obj.set_taborder("538");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_chrwMphno", "absolute", "598", "158", "48", "21", null, null, this);
            obj.set_taborder("539");
            obj.set_maxlength("4");
            obj.set_inputtype("number");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_chrwMpsqno", "absolute", "657", "158", "48", "21", null, null, this);
            obj.set_taborder("540");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_repmHtel", "absolute", "598", "256", "48", "21", null, null, this);
            obj.set_taborder("541");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_repmStel", "absolute", "657", "256", "48", "21", null, null, this);
            obj.set_taborder("542");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fZip", "absolute", "128", "312", "58", "21", null, null, this);
            obj.set_taborder("543");
            obj.set_inputtype("number");
            obj.set_maxlength("3");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_rZip", "absolute", "197", "312", "58", "21", null, null, this);
            obj.set_taborder("544");
            obj.set_inputtype("number");
            obj.set_maxlength("3");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_buyer", "absolute", "767", "15", "82", "21", null, null, this);
            obj.set_taborder("545");
            obj.set_text("Buyer 테스트");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("true");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 950, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("상담신청등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edt_chrr","value","ds_rc","CHRR");
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
            obj = new BindItem("item32","rdo_a03","value","ds_rcev","EVL_HDNG_A3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","rdo_a04","value","ds_rcev","EVL_HDNG_A4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","rdo_a05","value","ds_rcev","EVL_HDNG_A5");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","chk_a06","value","ds_rcev","EVL_HDNG_A6");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","cbo_b01","value","ds_rcev","EVL_HDNG_B1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","chk_b11","value","ds_rcev","EVL_HDNG_B11");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","chk_b02","value","ds_rcev","EVL_HDNG_B2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","rdo_b03","value","ds_rcev","EVL_HDNG_B3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","rdo_b04","value","ds_rcev","EVL_HDNG_B4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","rdo_b05","value","ds_rcev","EVL_HDNG_B5");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","mae_sum00","value","ds_rcev","EVL_HDNGCN");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_3100.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_3100.xfdl", function() {
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
        	this.fn_sum();
        	//alert('this.rdo_a05.value'+rdoA05);
        }

        this.Button05_onclick = function(obj,e)
        {
        	system.execBrowser("http://www.kisrating.com/");
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
        	}
        	if(this.chk_a06.value == 0)
        	{
        		chkA06 = 0;
        		//alert('chk_a06 false => '+chkA06);
        		this.fn_sum();
        		this.FileUpload04.set_enable(false);
        		var upld04 = "";
        		this.FileUpload04.set_value(upld04);
        		//alert("FileUpload04=> "+upld04);
        	}
        }

        //평가항목B1
        this.cbo_b01_onitemchanged = function(obj,e)
        {
        	if(this.cbo_b01.index == 1)
        	{
        		cboB01 = 5;
        		//alert('cbo_b01 1 => '+cboB01);
        		this.fn_sum();
        		this.FileUpload05.set_enable(true);
        		this.FileUpload06.set_enable(false);
        		var upld06 = "";
        		this.FileUpload06.set_value(upld06);
        		//alert("FileUpload06=> "+upld06);
        	}
        	else if(this.cbo_b01.index == 2)
        	{
        		cboB01 = 10;
        		//alert('cbo_b01 2 => '+cboB01);
        		this.fn_sum();
        		this.FileUpload05.set_enable(true);
        		this.FileUpload06.set_enable(true);
        	}
        	else
        	{
        		cboB01 = 0;
        		//alert('cbo_b01 0 => '+cboB01);
        		this.fn_sum();
        		this.FileUpload05.set_enable(false);
        		this.FileUpload06.set_enable(false);
        		var upld05 = "";
        		var upld06 = "";
        		this.FileUpload05.set_value(upld05);
        		this.FileUpload06.set_value(upld06);
        		//alert("FileUpload05=> "+upld05);
        		//alert("FileUpload06=> "+upld06);
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
        	}
        	if(this.chk_b11.value == 0)
        	{
        		chkB11 = 0;
        		//alert('chk_b11 false => '+chkB11);
        		this.fn_sum();
        		this.FileUpload07.set_enable(false);
        		var upld07 = "";
        		this.FileUpload07.set_value(upld07);
        		//alert("FileUpload07=> "+upld07);
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
        	}
        	if(this.chk_b02.value == 0)
        	{
        		chkB02 = 0;
        		//alert('chk_b02 false => '+chkB02);
        		this.fn_sum();
        		this.FileUpload08.set_enable(false);
        		var upld08 = "";
        		this.FileUpload08.set_value(upld08);
        		//alert("FileUpload08=> "+upld08);
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
        	this.fn_sum();
        	//alert('this.rdo_b05.value'+rdoB05);
        }

        this.Button01_onclick = function(obj,e)
        {
        	alert("등록 전 입력완료를 눌러 저장을 먼저 하세요");
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
        	
        	var tot = num01 + num02 + num03 + num04 + num05 - num06 + num07 + num08 + num09 + num10 + num11 + num12;
        	
        	this.mae_sum00.set_value(tot);
        	this.Static187.set_text(tot);
        	
        	if(tot >= 70)
        	{
        		this.Button01.set_enable(true);
        		this.Button06.set_enable(true);
        	}
        	else
        	{
        		this.Button01.set_enable(false);
        		this.Button06.set_enable(false);
        	}
        }

        this.btn_addRow_onclick = function(obj,e)
        {
        	this.ds_file.addRow();
        }

        this.btn_delRow_onclick = function(obj,e)
        {
        	for(var i = this.ds_file.rowcount ; i > -1; i--)
        	{
        		var nCheck = this.ds_file.getColumn(i, "Column8");
        		if (nCheck == 1) 
        		{
        			this.ds_file.deleteRow(i);
        		}
        	}
        }

        this.grd_file_onheadclick = function(obj,e)
        {
        	if(e.cell == 0) {
        		this.gfn_setGridCheckAll(obj,e);
        	}
        }

        /* 입력저장 */
        this.Button06_onclick = function(obj,e)
        {
        	this.insert();
        }

        /*등록*/
        this.insert = function()
        {
        	if(this.fn_validationCheck()){
        	trace(this.ds_rc.saveXML());
        		var sSvcID        = "insert";
        		var sURL          = "svc::rest/bt/apply/insertRequestCounseling";							     
        		var sInDatasets   = "ds_rc=ds_rc ds_rcev=ds_rcev";
        		var sOutDatasets  = "";	
        		var sArgument     = "";
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회
        			
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        /* Validation Check */
        this.fn_validationCheck = function(){
        	
        	if(this.gfn_isNull(this.edt_chrr.value)){
        		this.edt_chrr.setFocus();
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
        		//trace(this.mae_bzno.value);
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
        	if(this.gfn_isNull(this.edt_fZip.value)){
        		this.edt_fZip.setFocus();
        		this.alert('회사 기본정보중 우편번호 첫번째 값을 입력 하세요.');
        		return false;
        	}
        	if(this.gfn_isNull(this.edt_rZip.value)){
        		this.edt_rZip.setFocus();
        		this.alert('회사 기본정보중 우편번호 두번째 값을 입력 하세요.');
        		return false;
        	}
        	/*
        	if(this.gfn_isNull(this.edt_dongUp.value)){
        		this.edt_dongUp.setFocus();
        		this.alert('회사 기본정보중 주소 값을 입력 하세요.');
        		return false;
        	}
        	*/
        	if(this.gfn_isNull(this.edt_dongBw.value)){
        		this.edt_dongBw.setFocus();
        		this.alert('회사 기본정보중 상세주소 값을 입력 하세요.');
        		return false;
        	}
        	/*
        	if(this.gfn_isNull(this.상품분류.value)){
        		this.상품분류.setFocus();
        		this.alert('계약상담 신청정보중 상품분류 값을 입력 하세요.');
        		return false;
        	}
        	*/
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
        	return true;
        }

        //callback메소드
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	if(ErrorCode < 0){
        		//this.gfn_getMessage("alert", "error.message.server.exception");
        		alert("서버 API 실행중 오류가 발생하였습니다. 관리자에 문의하세요.");
        		return;
        	}else{
        		//this.gfn_getMessage("alert", "result.message.save.success");
        		alert("정상적으로 처리되었습니다.");
        		return;
        	}
        }

        
        this.mae_bzno_onlbuttonup = function(obj,e)
        {
        	if(this.gfn_isNull(obj.value)){
        		this.mae_bzno.setCaretPos(0);
        		//trace(this.mae_bzno.value);
        	}
        }

        this.Button08_onclick = function(obj,e)
        {
        	this.close();
        }

        //buyer 비활성화
        this.btn_buyer_onclick = function(obj,e)
        {
        	var buyer = 1;
        	if(buyer == 1)
        	{
        		this.edt_chrr.set_enable(false);
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
        		this.edt_category00.set_enable(false);
        		this.edt_category01.set_enable(false);
        		this.btn_search00.set_enable(false);
        		this.btn_search01.set_enable(false);
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
        		this.btn_addRow.set_enable(false);
        		this.btn_delRow.set_enable(false);
        		this.rdo_a01.set_enable(false);
        		this.rdo_a02.set_enable(false);
        		this.rdo_a03.set_enable(false);
        		this.rdo_a04.set_enable(false);
        		this.rdo_a05.set_enable(false);
        		this.chk_a06.set_enable(false);
        		this.cbo_b01.set_enable(false);
        		this.chk_b11.set_enable(false);
        		this.chk_b02.set_enable(false);
        		this.rdo_b03.set_enable(false);
        		this.rdo_b04.set_enable(false);
        		this.rdo_b05.set_enable(false);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.OMG_DS_SC_3110_onload, this);
            this.Button08.addEventHandler("onclick", this.Button08_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.mae_bzno.addEventHandler("onlbuttonup", this.mae_bzno_onlbuttonup, this);
            this.chk_chrMft.addEventHandler("onchanged", this.chk_chrMft_onchanged, this);
            this.btn_delRow.addEventHandler("onclick", this.btn_delRow_onclick, this);
            this.btn_addRow.addEventHandler("onclick", this.btn_addRow_onclick, this);
            this.grd_file.addEventHandler("onheadclick", this.grd_file_onheadclick, this);
            this.Button05.addEventHandler("onclick", this.Button05_onclick, this);
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
            this.Button06.addEventHandler("onclick", this.Button06_onclick, this);
            this.btn_buyer.addEventHandler("onclick", this.btn_buyer_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_3100.xfdl");

       
    };
}
)();
