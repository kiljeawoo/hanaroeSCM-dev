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
                this.set_titletext("전자계약 신청화면(직매장)");
                this.set_visible("true");
                this._setFormPosition(0,0,818,490);
            }
            this.style.set_background("#ffffffff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_register", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\" sumtext=\"경제통합거래처코드\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\" sumtext=\"일련번호\"/><Column id=\"MN_CTRW_KD\" type=\"STRING\" size=\"256\" sumtext=\"메인계약서종류\"/><Column id=\"ADD_CTRW_YN\" type=\"STRING\" size=\"256\" sumtext=\"부가계약서\"/><Column id=\"PMIW_YN\" type=\"STRING\" size=\"256\" sumtext=\"약정서\"/><Column id=\"SCTRW_YN\" type=\"STRING\" size=\"256\" sumtext=\"특약서\"/><Column id=\"ETC_CTRW_YN\" type=\"STRING\" size=\"256\" sumtext=\"기타계약서\"/><Column id=\"BZNO\" type=\"STRING\" size=\"256\" sumtext=\"사업자등록번호\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\" sumtext=\"경제통합상품대분류코드\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\" sumtext=\"경제통합상품중분류코드\"/><Column id=\"NA_WRS_SCLC\" type=\"STRING\" size=\"256\" sumtext=\"경제통합상품소분류코드\"/><Column id=\"NA_WRS_DTCF_C\" type=\"STRING\" size=\"256\" sumtext=\"경제통합상품세분류코드\"/><Column id=\"BUYER_NA_TRPL_C\" type=\"STRING\" size=\"256\" sumtext=\"바이어경제통합거래처코드\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\" sumtext=\"전화번호\"/><Column id=\"MPNO\" type=\"STRING\" size=\"256\" sumtext=\"휴대전화번호\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\" sumtext=\"EMAIL\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\" sumtext=\"계약서양식버젼\"/><Column id=\"CTR_ST_DT\" type=\"STRING\" size=\"256\" sumtext=\"계약시작일자\"/><Column id=\"CTR_ED_DT\" type=\"STRING\" size=\"256\" sumtext=\"계약종료일자\"/><Column id=\"CTRW_DRUP_DT\" type=\"STRING\" size=\"256\" sumtext=\"계약서작성일자\"/><Column id=\"CEO\" type=\"STRING\" size=\"256\" sumtext=\"대표이사\"/><Column id=\"MTALNM\" type=\"STRING\" size=\"256\" sumtext=\"상호\"/><Column id=\"FZIP\" type=\"STRING\" size=\"256\" sumtext=\"앞자리우편번호\"/><Column id=\"RZIP\" type=\"STRING\" size=\"256\" sumtext=\"뒷자리우편번호\"/><Column id=\"ZIP_SQNO\" type=\"STRING\" size=\"256\" sumtext=\"우편번호일련번호\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"256\" sumtext=\"동이상주소\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"256\" sumtext=\"동이하주소\"/><Column id=\"BUYER_ENO\" type=\"STRING\" size=\"256\" sumtext=\"바이어개인번호\"/><Column id=\"BUYER_BLG\" type=\"STRING\" size=\"256\" sumtext=\"바이어소속\"/><Column id=\"BUYER_NM\" type=\"STRING\" size=\"256\" sumtext=\"바이어성명\"/><Column id=\"BUYER_TELNO\" type=\"STRING\" size=\"256\" sumtext=\"바이어 전화번호\"/><Column id=\"BUYER_MPNO\" type=\"STRING\" size=\"256\" sumtext=\"바이어 휴대전화\"/><Column id=\"BUYER_EMAIL\" type=\"STRING\" size=\"256\" sumtext=\"바이어 이메일\"/><Column id=\"CTR_CHRR_MTALNM\" type=\"STRING\" size=\"256\" sumtext=\"계약담당자 상호\"/><Column id=\"CTR_CHRR_REPMN\" type=\"STRING\" size=\"256\" sumtext=\"계약담당자 대표자\"/><Column id=\"CTR_CHRR\" type=\"STRING\" size=\"256\"/><Column id=\"LA_AGNT\" type=\"STRING\" size=\"256\" sumtext=\"법률상대리인\"/><Column id=\"CTR_CHRR_FZIP\" type=\"STRING\" size=\"256\" sumtext=\"계약담당자 앞자리우편번호\"/><Column id=\"CTR_CHRR_RZIP\" type=\"STRING\" size=\"256\" sumtext=\"계약담당자 뒷자리우편번호\"/><Column id=\"CTR_CHRR_ZIP_SQNO\" type=\"STRING\" size=\"256\" sumtext=\"계약담당자 우편번호일련번호\"/><Column id=\"CTR_CHRR_DONGUP\" type=\"STRING\" size=\"256\" sumtext=\"계약담당자 동이상주소\"/><Column id=\"CTR_CHRR_DONGBW\" type=\"STRING\" size=\"256\" sumtext=\"계약담당자 동이하주소\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\" sumtext=\"비고\"/><Column id=\"STS\" type=\"STRING\" size=\"256\" sumtext=\"상태\"/><Column id=\"COLB_COMP_SGNT\" type=\"STRING\" size=\"256\" sumtext=\"협력업체서명\"/><Column id=\"BUYER_APV_STS\" type=\"STRING\" size=\"256\" sumtext=\"바이어승인상태\"/><Column id=\"CTR_PRD_AUT_XTN_YN\" type=\"STRING\" size=\"256\" sumtext=\"계약기간 자동 연장여부\"/><Column id=\"FGAT_PRVT_C\" type=\"STRING\" size=\"256\" sumtext=\"위변조방지코드\"/><Column id=\"BF_CTR_NO\" type=\"STRING\" size=\"256\" sumtext=\"이전계약번호\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\" sumtext=\"최초등록일시\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\" sumtext=\"최초등록자\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\" sumtext=\"최종변경일시\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\" sumtext=\"최종변경자\"/><Column id=\"RRNO\" type=\"STRING\" size=\"256\" sumtext=\"주민등록번호\"/><Column id=\"COPNO\" type=\"STRING\" size=\"256\" sumtext=\"법인등록번호\"/><Column id=\"CTR_CHRR_REP_DTYNM\" type=\"STRING\" size=\"256\" sumtext=\"법인 대표자명\"/><Column id=\"LA_AGNT_DTYNM\" type=\"STRING\" size=\"256\" sumtext=\"법률상 대리인 직책명\"/><Column id=\"BUYER_SEAL_APDFLNM\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_SEAL_SYS_FLNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mnCtrwKdM", this);
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

            obj = new Dataset("ds_eltCtrwDtl", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"MN_CTRW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"메인계약서종류코드\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\" sumtext=\"계약서양식버젼\"/><Column id=\"CNR_DT\" type=\"STRING\" size=\"256\" sumtext=\"검수일\"/><Column id=\"PSG_MM\" type=\"STRING\" size=\"256\" sumtext=\"경과분/월\"/><Column id=\"PSG_DD\" type=\"STRING\" size=\"256\" sumtext=\"경과분/일\"/><Column id=\"ETR_FEE\" type=\"STRING\" size=\"256\" sumtext=\"수탁수수료\"/><Column id=\"PHD_FEERT\" type=\"STRING\" size=\"256\" sumtext=\"물류수수료율\"/><Column id=\"LIG_PLTPE\" type=\"STRING\" size=\"256\" sumtext=\"주류파렛트당\"/><Column id=\"MEXP_DD\" type=\"STRING\" size=\"256\" sumtext=\"관리비일\"/><Column id=\"RT\" type=\"STRING\" size=\"256\" sumtext=\"마진율\"/><Column id=\"BLM_GRMY\" type=\"STRING\" size=\"256\" sumtext=\"하자보증금\"/><Column id=\"WRS_PRM_PY\" type=\"STRING\" size=\"256\" sumtext=\"상품대금 지금\"/><Column id=\"GRMY\" type=\"STRING\" size=\"256\" sumtext=\"보증금\"/><Column id=\"WRS_SPYAM\" type=\"STRING\" size=\"256\" sumtext=\"상품공급액\"/><Column id=\"CTR_CLO\" type=\"STRING\" size=\"256\" sumtext=\"계약해지\"/><Column id=\"SCTR_SJT\" type=\"STRING\" size=\"256\" sumtext=\"특약사항\"/><Column id=\"CTRW_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일 이름\"/><Column id=\"CTRW_FL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일전체경로\"/><Column id=\"CTRW_FL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일크기\"/><Column id=\"APDFLNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일 이름\"/><Column id=\"APDFL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일전체경로\"/><Column id=\"APDFL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일크기\"/><Column id=\"SYS_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"시스템 파일이름\"/><Column id=\"CTRW_TINM\" type=\"STRING\" size=\"256\" sumtext=\"제목\"/><Column id=\"CTRW_CNTN\" type=\"STRING\" size=\"256\" sumtext=\"계약서내용\"/><Column id=\"CTRW_SGNT\" type=\"STRING\" size=\"256\" sumtext=\"계약서서명\"/><Column id=\"BRAND_N\" type=\"STRING\" size=\"256\" sumtext=\"브랜드명\"/><Column id=\"RETURN_DATE\" type=\"STRING\" size=\"256\" sumtext=\"반품기간\"/><Column id=\"PHD_FEERT1\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_FEERT2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"ETC4\" type=\"STRING\" size=\"256\"/><Column id=\"ETC5\" type=\"STRING\" size=\"256\"/><Column id=\"ETC6\" type=\"STRING\" size=\"256\"/><Column id=\"ETC7\" type=\"STRING\" size=\"256\"/><Column id=\"ETC8\" type=\"STRING\" size=\"256\"/><Column id=\"ETC9\" type=\"STRING\" size=\"256\"/><Column id=\"ETCA\" type=\"STRING\" size=\"256\"/><Column id=\"ETC10\" type=\"STRING\" size=\"256\" sumtext=\"우편번호1\"/><Column id=\"ETC11\" type=\"STRING\" size=\"256\" sumtext=\"우편번호2\"/><Column id=\"ETC12\" type=\"STRING\" size=\"256\" sumtext=\"주소1\"/><Column id=\"ETC13\" type=\"STRING\" size=\"256\" sumtext=\"주소2\"/><Column id=\"ETC14\" type=\"STRING\" size=\"256\" sumtext=\"점유면적\"/><Column id=\"ETC15\" type=\"STRING\" size=\"256\" sumtext=\"공유면적\"/><Column id=\"ETC16\" type=\"STRING\" size=\"256\" sumtext=\"면적 계\"/><Column id=\"ETC17\" type=\"STRING\" size=\"256\" sumtext=\"임대차기간 시작일\"/><Column id=\"ETC18\" type=\"STRING\" size=\"256\" sumtext=\"임대차기간 종료일\"/><Column id=\"ETC19\" type=\"STRING\" size=\"256\" sumtext=\"임대보증금\"/><Column id=\"ETC20\" type=\"STRING\" size=\"256\" sumtext=\"월임대료 금액\"/><Column id=\"ETC21\" type=\"STRING\" size=\"256\" sumtext=\"월임대료 %\"/><Column id=\"ETC22\" type=\"STRING\" size=\"256\" sumtext=\"업종\"/><Column id=\"ETC23\" type=\"STRING\" size=\"256\" sumtext=\"매장명\"/><Column id=\"ETC24\" type=\"STRING\" size=\"256\" sumtext=\"주요판매상품1 4000 바이트\"/><Column id=\"ETC25\" type=\"STRING\" size=\"256\" sumtext=\"주요판매상품2 4000 바이트\"/><Column id=\"ETC26\" type=\"STRING\" size=\"256\" sumtext=\"주요판매상품3 4000 바이트\"/><Column id=\"ETC27\" type=\"STRING\" size=\"256\" sumtext=\"주요판매상품4 4000 바이트\"/><Column id=\"ETC28\" type=\"STRING\" size=\"256\" sumtext=\"주요판매상품5 4000 바이트\"/><Column id=\"ETC29\" type=\"STRING\" size=\"256\" sumtext=\"임대보증금 납부일자\"/><Column id=\"ETC30\" type=\"STRING\" size=\"256\" sumtext=\"임대보증금 연체료율\"/><Column id=\"ETC31\" type=\"STRING\" size=\"256\" sumtext=\"보증금 공제\"/><Column id=\"ETC32\" type=\"STRING\" size=\"256\" sumtext=\"임대료 납부일\"/><Column id=\"ETC33\" type=\"STRING\" size=\"256\" sumtext=\"임대료 연체료율\"/><Column id=\"ETC34\" type=\"STRING\" size=\"256\" sumtext=\"판매대금 지급일\"/><Column id=\"ETC35\" type=\"STRING\" size=\"256\" sumtext=\"관리비 및 시설 이용료 납부\"/><Column id=\"ETC36\" type=\"STRING\" size=\"256\" sumtext=\"비밀유지기간\"/><Column id=\"ETC37\" type=\"STRING\" size=\"256\" sumtext=\"임대보증금\"/><Column id=\"ETC38\" type=\"STRING\" size=\"256\" sumtext=\"지연이자\"/><Column id=\"ETC39\" type=\"STRING\" size=\"256\" sumtext=\"임대료 위약벌\"/><Column id=\"ETC40\" type=\"STRING\" size=\"256\"/><Column id=\"ETC41\" type=\"STRING\" size=\"256\"/><Column id=\"ETC42\" type=\"STRING\" size=\"256\"/><Column id=\"ETC43\" type=\"STRING\" size=\"256\"/><Column id=\"ETC44\" type=\"STRING\" size=\"256\"/><Column id=\"ETC45\" type=\"STRING\" size=\"256\"/><Column id=\"ETC46\" type=\"STRING\" size=\"256\"/><Column id=\"ETC47\" type=\"STRING\" size=\"256\"/><Column id=\"ETC48\" type=\"STRING\" size=\"256\"/><Column id=\"ETC49\" type=\"STRING\" size=\"256\"/><Column id=\"ETC50\" type=\"STRING\" size=\"256\"/><Column id=\"ETC51\" type=\"STRING\" size=\"256\"/><Column id=\"ETC52\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_lgqtTrFeePmiw", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"PMIW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"약정서종류\"/><Column id=\"FEERT_HMW_UNDR\" type=\"STRING\" size=\"256\" sumtext=\"수수료율 1억미만\"/><Column id=\"FEERT_HMW1_HMW2\" type=\"STRING\" size=\"256\" sumtext=\"수수료율 1/2억\"/><Column id=\"FEERT_HMW2_HMW3\" type=\"STRING\" size=\"256\" sumtext=\"수수료율 2/3억\"/><Column id=\"FEERT_HMW3_HMW5\" type=\"STRING\" size=\"256\" sumtext=\"수수료율 3/5억\"/><Column id=\"FEERT_HMW5_HMW10\" type=\"STRING\" size=\"256\" sumtext=\"수수료율 5/10억\"/><Column id=\"FEERT_HMW10_OVR\" type=\"STRING\" size=\"256\" sumtext=\"수수료율 10억이상\"/><Column id=\"FEERT_HMW_UNDR_TINM\" type=\"STRING\" size=\"256\"/><Column id=\"FEERT_HMW1_HMW2_TINM\" type=\"STRING\" size=\"256\"/><Column id=\"FEERT_HMW2_HMW3_TINM\" type=\"STRING\" size=\"256\"/><Column id=\"FEERT_HMW3_HMW5_TINM\" type=\"STRING\" size=\"256\"/><Column id=\"FEERT_HMW5_HMW10_TINM\" type=\"STRING\" size=\"256\"/><Column id=\"FEERT_HMW10_OVR_TINM\" type=\"STRING\" size=\"256\"/><Column id=\"SCTR_SJT\" type=\"STRING\" size=\"256\" sumtext=\"특약사항\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sctrwNmlMrgnRt", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"SCTRW_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"SQNO\" type=\"STRING\" size=\"256\" sumtext=\"일련번호\"/><Column id=\"STORNM1\" type=\"STRING\" size=\"256\" sumtext=\"점포명\"/><Column id=\"NML_MRGN_RT\" type=\"STRING\" size=\"256\" sumtext=\"정상마진율\"/><Column id=\"EVT_MRGN_RT\" type=\"STRING\" size=\"256\" sumtext=\"행사마진율\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\" sumtext=\"비고\"/><Column id=\"chkbox\" type=\"STRING\" size=\"256\"/><Column id=\"SCTR_SJT\" type=\"STRING\" size=\"256\" sumtext=\"특약사항\"/><Column id=\"NML_MRGN_RTM\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_MRGN_RTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sctrwCtrMrgnRt", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"SCTRW_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"SQNO\" type=\"STRING\" size=\"256\" sumtext=\"일련번호\"/><Column id=\"STORNM1\" type=\"STRING\" size=\"256\" sumtext=\"점포명\"/><Column id=\"DC_SEL_MRGN_RT10\" type=\"STRING\" size=\"256\" sumtext=\"할인판매마진율 10\"/><Column id=\"DC_SEL_MRGN_RT20\" type=\"STRING\" size=\"256\" sumtext=\"할인판매마진율 20\"/><Column id=\"DC_SEL_MRGN_RT30\" type=\"STRING\" size=\"256\" sumtext=\"할인판매마진율 30\"/><Column id=\"DC_SEL_MRGN_RT40\" type=\"STRING\" size=\"256\" sumtext=\"할인판매마진율 40\"/><Column id=\"DC_SEL_MRGN_RT50\" type=\"STRING\" size=\"256\" sumtext=\"할인판매마진율 50\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\" sumtext=\"비고\"/><Column id=\"chkbox\" type=\"STRING\" size=\"256\"/><Column id=\"SCTR_SJT\" type=\"STRING\" size=\"256\" sumtext=\"특약사항\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sctrwAllXpcPmtnCst", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"chkbox\" type=\"STRING\" size=\"256\"/><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"SCTRW_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"SQNO\" type=\"STRING\" size=\"256\" sumtext=\"일련번호\"/><Column id=\"STORNM1\" type=\"STRING\" size=\"256\" sumtext=\"점포명1\"/><Column id=\"STOR_LY1\" type=\"STRING\" size=\"256\" sumtext=\"점포층1\"/><Column id=\"SELA_AREA_M1\" type=\"STRING\" size=\"256\" sumtext=\"매장면적 미터1\"/><Column id=\"SELA_AREA_PCN1\" type=\"STRING\" size=\"256\" sumtext=\"매장면적 평수1\"/><Column id=\"STORNM2\" type=\"STRING\" size=\"256\" sumtext=\"점포명2\"/><Column id=\"STOR_LY2\" type=\"STRING\" size=\"256\" sumtext=\"점포층2\"/><Column id=\"SELA_AREA_M2\" type=\"STRING\" size=\"256\" sumtext=\"매장면적 미터2\"/><Column id=\"SELA_AREA_PCN2\" type=\"STRING\" size=\"256\" sumtext=\"매장면적 평수2\"/><Column id=\"SCTR_SJT\" type=\"STRING\" size=\"256\" sumtext=\"특약사항\"/></ColumnInfo>");
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

            obj = new Dataset("ds_pmiwDtl", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"PMIW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"약정서종류코드\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\" sumtext=\"계약서양식버젼\"/><Column id=\"BUY_AM\" type=\"STRING\" size=\"256\" sumtext=\"구매금액\"/><Column id=\"EVT_TINM\" type=\"STRING\" size=\"256\" sumtext=\"행사제목\"/><Column id=\"EVT_PRD_ST_DT\" type=\"STRING\" size=\"256\" sumtext=\"행사기간 시작일자\"/><Column id=\"EVT_PRD_ED_DT\" type=\"STRING\" size=\"256\" sumtext=\"행사기간 종료일자\"/><Column id=\"CTRW_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일 이름\"/><Column id=\"CTRW_FL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일전체경로\"/><Column id=\"CTRW_FL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일크기\"/><Column id=\"APDFLNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일 이름\"/><Column id=\"APDFL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일전체경로\"/><Column id=\"APDFL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일크기\"/><Column id=\"SYS_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"시스템 파일이름\"/><Column id=\"CTRW_CNTN\" type=\"STRING\" size=\"256\" sumtext=\"계약서내용\"/><Column id=\"CTRW_SGNT\" type=\"STRING\" size=\"256\" sumtext=\"계약서서명\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC4\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC5\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC6\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC7\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC8\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC9\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETCA\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETCB\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETCC\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETCD\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETCE\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETCF\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETCG\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETCH\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"SCTR_SJT\" type=\"STRING\" size=\"256\" sumtext=\"특약사항\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sctrwDtl", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"SCTRW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"특약서종류코드\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\" sumtext=\"계약서양식버젼\"/><Column id=\"VLD_PRD_ST_DT\" type=\"STRING\" size=\"256\" sumtext=\"유효기간 시작일자\"/><Column id=\"VLD_PRD_ED_DT\" type=\"STRING\" size=\"256\" sumtext=\"유효기간 종료일자\"/><Column id=\"DSPC_PRD_ST_DT\" type=\"STRING\" size=\"256\" sumtext=\"파견기간 시작일자\"/><Column id=\"DSPC_PRD_ED_DT\" type=\"STRING\" size=\"256\" sumtext=\"파견기간 종료일자\"/><Column id=\"WRK_ST_HR\" type=\"STRING\" size=\"256\" sumtext=\"근무시간 시작시간\"/><Column id=\"WRK_ED_HR\" type=\"STRING\" size=\"256\" sumtext=\"근무시간 종료시간\"/><Column id=\"EVT_PRD_ST_DT\" type=\"STRING\" size=\"256\" sumtext=\"행사기간 시작일자\"/><Column id=\"EVT_PRD_ED_DT\" type=\"STRING\" size=\"256\" sumtext=\"행사기간 종료일자\"/><Column id=\"CTRW_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일 이름\"/><Column id=\"CTRW_FL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일전체경로\"/><Column id=\"CTRW_FL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일크기\"/><Column id=\"APDFLNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일 이름\"/><Column id=\"APDFL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일전체경로\"/><Column id=\"APDFL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일크기\"/><Column id=\"SYS_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"시스템 파일이름\"/><Column id=\"CTRW_CNTN\" type=\"STRING\" size=\"256\" sumtext=\"계약서내용\"/><Column id=\"PY_NT\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_SSDY_RTO\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_SPYAM\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_SGNT\" type=\"STRING\" size=\"256\" sumtext=\"계약서서명\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"SCTR_SJT\" type=\"STRING\" size=\"256\" sumtext=\"특약사항\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"KIND\" type=\"STRING\" size=\"256\"/><Column id=\"PURPOSE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_etcEltStylAmm", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CTRW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"계약서종류코드\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\" sumtext=\"계약서양식버전\"/></ColumnInfo>");
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

            obj = new Dataset("ds_mnCtrwKdMC", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TYPE\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CD_M\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CD_D\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서 번호\"/><Column id=\"MN_CTRW_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"DCM_C\" type=\"STRING\" size=\"256\"/><Column id=\"DCM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ESS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ESS_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILESIZE\" type=\"STRING\" size=\"256\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEAL\" type=\"STRING\" size=\"256\"/><Column id=\"SCTR_SJT\" type=\"STRING\" size=\"256\" sumtext=\"특약사항\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_evtAmPmiw", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"PMIW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"약정서종류\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_NM\" type=\"STRING\" size=\"256\" sumtext=\"행사명칭\"/><Column id=\"EVT_CNTN\" type=\"STRING\" size=\"256\" sumtext=\"행사내용\"/><Column id=\"EVT_PLCNM\" type=\"STRING\" size=\"256\" sumtext=\"행사장소\"/><Column id=\"EVT_WRS_NM\" type=\"STRING\" size=\"256\" sumtext=\"행사상품명\"/><Column id=\"EVT_RTO_CNTN\" type=\"STRING\" size=\"256\" sumtext=\"행사행사상품및행사율내용\"/><Column id=\"CTR_PATN_AM\" type=\"STRING\" size=\"256\" sumtext=\"계약상대자금액\"/><Column id=\"CTR_CHRR_AM\" type=\"STRING\" size=\"256\" sumtext=\"계약담당자금액\"/><Column id=\"AM_SS\" type=\"STRING\" size=\"256\" sumtext=\"금액계\"/><Column id=\"CTR_PATN_RTO\" type=\"STRING\" size=\"256\" sumtext=\"계약상대자비율\"/><Column id=\"CTR_CHRR_RTO\" type=\"STRING\" size=\"256\" sumtext=\"계약담당자비율\"/><Column id=\"RTO_SS\" type=\"STRING\" size=\"256\" sumtext=\"비율계\"/><Column id=\"CTR_PATN_ALOT_RTO\" type=\"STRING\" size=\"256\" sumtext=\"계약상대자비율\"/><Column id=\"ALL_XPC_PMTN_CST\" type=\"STRING\" size=\"256\" sumtext=\"전체 예상판촉비용\"/><Column id=\"CLCN_BASS\" type=\"STRING\" size=\"256\" sumtext=\"산출근거\"/><Column id=\"CTR_CHRR_ALOT_RTO\" type=\"STRING\" size=\"256\" sumtext=\"계약담당자비율\"/><Column id=\"ALOT_RTO_SS\" type=\"STRING\" size=\"256\" sumtext=\"비율(액수)계\"/><Column id=\"SCTR_SJT\" type=\"STRING\" size=\"256\" sumtext=\"특약사항\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dlvgCompEmpDspcPmiw", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"PMIW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"약정서종류\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"DSPC_BASS\" type=\"STRING\" size=\"256\" sumtext=\"파견근무\"/><Column id=\"LBRCS_DRTCS_CNTN1\" type=\"STRING\" size=\"256\" sumtext=\"인건비직정비내용1\"/><Column id=\"LBRCS_DRTCS_CNTN2\" type=\"STRING\" size=\"256\" sumtext=\"인건비직정비내용2\"/><Column id=\"LBRCS_DRTCS_AM1\" type=\"STRING\" size=\"256\" sumtext=\"인건비직정비소요액1\"/><Column id=\"LBRCS_DRTCS_AM2\" type=\"STRING\" size=\"256\" sumtext=\"인건비직정비소요액2\"/><Column id=\"LBRCS_DRTCS_RMK1\" type=\"STRING\" size=\"256\" sumtext=\"인건비직정비비고1\"/><Column id=\"LBRCS_DRTCS_RMK2\" type=\"STRING\" size=\"256\" sumtext=\"인건비직정비비고2\"/><Column id=\"LBRCS_OHCS_CNTN1\" type=\"STRING\" size=\"256\" sumtext=\"인건비간접비내용1\"/><Column id=\"LBRCS_OHCS_CNTN2\" type=\"STRING\" size=\"256\" sumtext=\"인건비간접비내용2\"/><Column id=\"LBRCS_OHCS_CNTN3\" type=\"STRING\" size=\"256\" sumtext=\"인건비간접비내용3\"/><Column id=\"LBRCS_OHCS_AM1\" type=\"STRING\" size=\"256\" sumtext=\"인건비간접비소용액1\"/><Column id=\"LBRCS_OHCS_AM2\" type=\"STRING\" size=\"256\" sumtext=\"인건비간접비소용액2\"/><Column id=\"LBRCS_OHCS_AM3\" type=\"STRING\" size=\"256\" sumtext=\"인건비간접비소용액3\"/><Column id=\"LBRCS_OHCS_RMK1\" type=\"STRING\" size=\"256\" sumtext=\"인건비간접비비고1\"/><Column id=\"LBRCS_OHCS_RMK2\" type=\"STRING\" size=\"256\" sumtext=\"인건비간접비비고2\"/><Column id=\"LBRCS_OHCS_RMK3\" type=\"STRING\" size=\"256\" sumtext=\"인건비간접비비고3\"/><Column id=\"FI_BNF_CNTN1\" type=\"STRING\" size=\"256\" sumtext=\"복리후생비내용1\"/><Column id=\"FI_BNF_CNTN2\" type=\"STRING\" size=\"256\" sumtext=\"복리후생비내용2\"/><Column id=\"FI_BNF_CNTN3\" type=\"STRING\" size=\"256\" sumtext=\"복리후생비내용3\"/><Column id=\"FI_BNF_AM1\" type=\"STRING\" size=\"256\" sumtext=\"복리후생비소용액1\"/><Column id=\"FI_BNF_AM2\" type=\"STRING\" size=\"256\" sumtext=\"복리후생비소용액2\"/><Column id=\"FI_BNF_AM3\" type=\"STRING\" size=\"256\" sumtext=\"복리후생비소용액3\"/><Column id=\"FI_BNF_RMK1\" type=\"STRING\" size=\"256\" sumtext=\"복리후생비비고1\"/><Column id=\"FI_BNF_RMK2\" type=\"STRING\" size=\"256\" sumtext=\"복리후생비비고2\"/><Column id=\"FI_BNF_RMK3\" type=\"STRING\" size=\"256\" sumtext=\"복리후생비비고3\"/><Column id=\"ETC_TXPN_CNTN\" type=\"STRING\" size=\"256\" sumtext=\"기타제경비내용\"/><Column id=\"CTR_CHRR_RTO\" type=\"STRING\" size=\"256\" sumtext=\"계약담당자비율\"/><Column id=\"CTR_PATN_RTO\" type=\"STRING\" size=\"256\" sumtext=\"계약상대자비율\"/><Column id=\"ETC_TXPN_AM\" type=\"STRING\" size=\"256\" sumtext=\"기타제경비소용액\"/><Column id=\"ETC_TXPN_RMK\" type=\"STRING\" size=\"256\" sumtext=\"기타제경비비고\"/><Column id=\"SCTR_SJT\" type=\"STRING\" size=\"256\" sumtext=\"특약사항\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dspcPerWrkPrdPmiw", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"PMIW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"약정서종류\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\" sumtext=\"변경일련번호\"/><Column id=\"SQNO\" type=\"STRING\" size=\"256\" sumtext=\"일련번호\"/><Column id=\"STORNM\" type=\"STRING\" size=\"256\" sumtext=\"매장명\"/><Column id=\"DSPC_PER\" type=\"STRING\" size=\"256\" sumtext=\"파견인원\"/><Column id=\"WRK_ST_DT\" type=\"STRING\" size=\"256\" sumtext=\"근무기간시작일자\"/><Column id=\"WRK_ED_DT\" type=\"STRING\" size=\"256\" sumtext=\"근무기간종료일자\"/><Column id=\"WRK_ST_HR\" type=\"STRING\" size=\"256\" sumtext=\"근무시작시간\"/><Column id=\"WRK_ED_HR\" type=\"STRING\" size=\"256\" sumtext=\"근무종료시간\"/><Column id=\"RCS_ST_HR\" type=\"STRING\" size=\"256\" sumtext=\"휴게시작시간\"/><Column id=\"RCS_ED_HR\" type=\"STRING\" size=\"256\" sumtext=\"휴게종료시간\"/><Column id=\"SCTR_SJT\" type=\"STRING\" size=\"256\" sumtext=\"특약사항\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_etcEltCtrw", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호   \"/><Column id=\"ETC_CTRW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"기타 계약서종류  \"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\" sumtext=\"계약서양식버젼   \"/><Column id=\"LBRCS\" type=\"STRING\" size=\"256\" sumtext=\"인건비\"/><Column id=\"LBRCS_CLCN_BASS\" type=\"STRING\" size=\"256\" sumtext=\"인건비 산출근거\"/><Column id=\"ETC\" type=\"STRING\" size=\"256\" sumtext=\"기타\"/><Column id=\"ETC_CLCN_BASS\" type=\"STRING\" size=\"256\" sumtext=\"기타 산출근거\"/><Column id=\"NED_BASS\" type=\"STRING\" size=\"256\" sumtext=\"소용비용 산출근거\"/><Column id=\"NED_SS\" type=\"STRING\" size=\"256\" sumtext=\"소용비용 계\"/><Column id=\"MSLAM\" type=\"STRING\" size=\"256\" sumtext=\"월매출액\"/><Column id=\"MSLAM_PFT\" type=\"STRING\" size=\"256\" sumtext=\"월매출액이익\"/><Column id=\"RLZ_XPC_PFT\" type=\"STRING\" size=\"256\" sumtext=\"실현예상이익\"/><Column id=\"SCTR_SJT\" type=\"STRING\" size=\"256\" sumtext=\"특약사항\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_temp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mnCtrwKdMC_Temp", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CD_TYPE\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CD_M\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CD_D\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_buyerCode", this);
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"32\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"32\"/><Column id=\"SIMP_C_EXPL\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_addEltCtrwDtl", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"ADD_CTRW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"부가계약서종류코드\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\" sumtext=\"계약서양식버젼\"/><Column id=\"PB_CTRW_TINM\" type=\"STRING\" size=\"256\" sumtext=\"PB계약서 제목\"/><Column id=\"CNR_DT\" type=\"STRING\" size=\"256\" sumtext=\"검수일\"/><Column id=\"PSG_MM\" type=\"STRING\" size=\"256\" sumtext=\"경과분/월\"/><Column id=\"PSG_DD\" type=\"STRING\" size=\"256\" sumtext=\"경과분/일\"/><Column id=\"CTRW_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일 이름\"/><Column id=\"CTRW_FL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일전체경로\"/><Column id=\"CTRW_FL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일크기\"/><Column id=\"APDFLNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일 이름\"/><Column id=\"APDFL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일전체경로\"/><Column id=\"APDFL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일크기\"/><Column id=\"SYS_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"시스템 파일이름\"/><Column id=\"CTRW_TINM\" type=\"STRING\" size=\"256\" sumtext=\"계약서제목\"/><Column id=\"CTRW_CNTN\" type=\"STRING\" size=\"256\" sumtext=\"계약서내용\"/><Column id=\"CTRW_SGNT\" type=\"STRING\" size=\"256\" sumtext=\"계약서서명\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"SCTR_SJT\" type=\"STRING\" size=\"256\" sumtext=\"특약사항\"/><Column id=\"ETC4\" type=\"STRING\" size=\"256\" sumtext=\"물류수수료율\"/><Column id=\"ETC5\" type=\"STRING\" size=\"256\"/><Column id=\"ETC6\" type=\"STRING\" size=\"256\"/><Column id=\"ETC7\" type=\"STRING\" size=\"256\" sumtext=\"주류파렛트당\"/><Column id=\"ETC8\" type=\"STRING\" size=\"256\" sumtext=\"관리비일\"/><Column id=\"ETC9\" type=\"STRING\" size=\"256\"/><Column id=\"ETCA\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ctEtcItemList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"STANDARD\" type=\"STRING\" size=\"256\"/><Column id=\"COUNTRY\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\"/><Column id=\"BRAND\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"UPR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_authBranch", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"AUTH_CHECK\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static07", "absolute", "15", "692", "803", "20", null, null, this);
            obj.set_taborder("254");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "17.48%", "611", null, "29", "15", null, this);
            obj.set_taborder("267");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", "17.48%", "555", null, "29", "15", null, this);
            obj.set_taborder("248");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "17.48%", "667", null, "29", "15", null, this);
            obj.set_taborder("263");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "17.48%", "639", null, "29", "15", null, this);
            obj.set_taborder("265");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "17.48%", "583", null, "29", "15", null, this);
            obj.set_taborder("269");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static66", "absolute", "17.5%", "527", null, "29", "15", null, this);
            obj.set_taborder("271");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "17", "37", "467", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_text("업체 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "15", "21", "803", "20", null, null, this);
            obj.set_taborder("46");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "803", "1", "15", "3887", null, null, this);
            obj.set_taborder("48");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff4f");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "0", "41", "21", "17", null, this);
            obj.set_taborder("49");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", null, "0", "41", "21", "-106", null, this);
            obj.set_taborder("50");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "15", "62", null, "29", "82.4%", null, this);
            obj.set_taborder("51");
            obj.set_text("계약자 업체");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "17.5%", "62", null, "29", "15", null, this);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "50%", "62", null, "29", "35.33%", null, this);
            obj.set_taborder("53");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "15", "118", null, "29", "82.4%", null, this);
            obj.set_taborder("54");
            obj.set_text("메인계약서종류");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "17.5%", "118", null, "29", "15", null, this);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_mnCtrwKdM", "absolute", "18%", "122", null, "21", "51%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_codecolumn("CD_D");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_innerdataset("@ds_mnCtrwKdMC_Temp");
            obj.set_enable("false");
            obj.set_index("-1");

            obj = new Static("Static09", "absolute", "50%", "118", null, "29", "35.33%", null, this);
            obj.set_taborder("56");
            obj.set_text("부가 계약서");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "15", "146", null, "29", "82.4%", null, this);
            obj.set_taborder("57");
            obj.set_text("계약기간");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "17.5%", "146", null, "29", "15", null, this);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "50%", "146", null, "29", "35.33%", null, this);
            obj.set_taborder("59");
            obj.set_text("계약일자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "15", "174", null, "29", "82.4%", null, this);
            obj.set_taborder("60");
            obj.set_text("사업자 등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "17.5%", "174", null, "29", "15", null, this);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "50%", "174", null, "29", "35.33%", null, this);
            obj.set_taborder("62");
            obj.set_text("대표이사");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "15", "318", null, "29", "82.4%", null, this);
            obj.set_taborder("63");
            obj.set_text("담당자 이름");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "17.5%", "318", null, "29", "15", null, this);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "50%", "318", null, "29", "35.33%", null, this);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("휴대전화번호");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "15", "230", null, "29", "82.4%", null, this);
            obj.set_taborder("66");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "17.5%", "230", null, "29", "15", null, this);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "15", "258", null, "29", "82.4%", null, this);
            obj.set_taborder("68");
            obj.set_text("회사주소");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "17.5%", "258", null, "29", "15", null, this);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "15", "410", null, "29", "82.4%", null, this);
            obj.set_taborder("70");
            obj.set_text("바이어소속");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "17.5%", "410", null, "29", "15", null, this);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "50%", "410", null, "29", "35.33%", null, this);
            obj.set_taborder("72");
            obj.set_text("바이어성명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "15", "438", null, "29", "82.4%", null, this);
            obj.set_taborder("73");
            obj.set_text("바이어전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "17.5%", "438", null, "29", "15", null, this);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "50%", "438", null, "29", "35.33%", null, this);
            obj.set_taborder("75");
            obj.set_text("바이어이메일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "15", "466", null, "29", "82.4%", null, this);
            obj.set_taborder("76");
            obj.set_text("바이어휴대전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "17.5%", "466", null, "29", "15", null, this);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_naTrplC", "absolute", null, "66", "21", "21", "50.49%", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_naTrplC", "absolute", "18%", "66", null, "21", "53.42%", null, this);
            obj.set_taborder("41");
            obj.set_positionstep("0");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static131", "absolute", "30.56%", "150", null, "21", "68.22%", null, this);
            obj.set_taborder("79");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_ctrEdDt", "absolute", "31.91%", "150", null, "21", "55.87%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Calendar("cal_ctrStDt", "absolute", "18%", "150", null, "21", "69.8%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static142", "absolute", "25.43%", "234", null, "21", "73.47%", null, this);
            obj.set_taborder("82");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_Fzip", "absolute", "18%", "234", null, "21", "74.94%", null, this);
            obj.set_taborder("83");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_readonly("true");
            obj.set_mask("000");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_Rzip", "absolute", "26.53%", "234", null, "21", "66.38%", null, this);
            obj.set_taborder("47");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_readonly("true");
            obj.set_mask("900");
            this.addChild(obj.name, obj);

            obj = new Static("Static96", "absolute", "71.64%", "233", null, "21", "27.26%", null, this);
            obj.set_taborder("84");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static97", "absolute", "78.85%", "233", null, "21", "20.05%", null, this);
            obj.set_taborder("85");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_atel", "absolute", "65.04%", "233", null, "21", "28.73%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("86");
            obj.set_value("010");
            obj.set_text("010");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_innerdataset("@ds_tel");
            obj.set_readonly("true");
            obj.set_index("0");

            obj = new MaskEdit("mae_bzNoF", "absolute", "18%", "178", null, "21", "65%", null, this);
            obj.set_taborder("87");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_mask("###-##-#####");
            obj.set_type("string");
            obj.set_trimtype("right");
            obj.set_limitbymask("integer");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dongUp", "absolute", "18%", "262", null, "21", "51%", null, this);
            obj.set_taborder("88");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dongBw", "absolute", "49.88%", "262", null, "21", "3.55%", null, this);
            obj.set_taborder("90");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_ctrwDrup_Dt", "absolute", "65%", "150", null, "21", "18%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Edit("edt_mtalNm", "absolute", "65%", "66", null, "21", "3.55%", null, this);
            obj.set_taborder("43");
            obj.set_readonly("true");
            obj.set_visible("true");
            obj.style.set_background("#ecececff");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ceo", "absolute", "65%", "178", null, "21", "3.42%", null, this);
            obj.set_taborder("89");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_buyerBlg", "absolute", "18%", "414", null, "21", "51%", null, this);
            obj.set_taborder("92");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_addCtrw", "absolute", "65%", "122", null, "21", "23.96%", null, this);
            obj.set_taborder("3");
            obj.set_text("부가계약서");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_sctrw", "absolute", "83.37%", "122", null, "21", "8.92%", null, this);
            obj.set_taborder("5");
            obj.set_text("특약서");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_etcCtrw", "absolute", "91.2%", "122", null, "21", "2.2%", null, this);
            obj.set_taborder("6");
            obj.set_text("기타");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_pmiw", "absolute", "75.55%", "122", null, "21", "16.75%", null, this);
            obj.set_taborder("4");
            obj.set_text("약정서");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_buyerNm", "absolute", "65.04%", "414", null, "21", "3.42%", null, this);
            obj.set_taborder("95");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_buyerEmail", "absolute", "65.04%", "442", null, "21", "3.42%", null, this);
            obj.set_taborder("96");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static99", "absolute", "24.57%", "442", null, "21", "74.33%", null, this);
            obj.set_taborder("99");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static100", "absolute", "31.78%", "442", null, "21", "67.11%", null, this);
            obj.set_taborder("100");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_buyerAtel", "absolute", "18%", "442", null, "21", "75.79%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("101");
            obj.set_value("010");
            obj.set_text("010");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_innerdataset("@ds_tel");
            obj.set_readonly("true");
            obj.set_index("0");

            obj = new Div("div_mnCtrwKd", "absolute", "839", "768", null, "92", "-58.56%", null, this);
            obj.set_taborder("102");
            obj.set_visible("false");
            obj.style.set_background("transparent");
            this.addChild(obj.name, obj);
            obj = new Static("Static51", "absolute", "-4", "13", "453", "21", null, null, this.div_mnCtrwKd);
            obj.set_taborder("7");
            obj.set_text("메인 계약서");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_mnCtrwKd.addChild(obj.name, obj);
            obj = new Static("Static50", "absolute", "0", "38", null, "29", "86.06%", null, this.div_mnCtrwKd);
            obj.set_taborder("8");
            obj.set_text("메인계약서종류");
            obj.set_cssclass("sta_WF_Label");
            this.div_mnCtrwKd.addChild(obj.name, obj);
            obj = new Static("Static52", "absolute", "13.94%", "38", null, "29", "0%", null, this.div_mnCtrwKd);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_mnCtrwKd.addChild(obj.name, obj);
            obj = new Radio("rdo_mnCtrwKdC", "absolute", "14.16%", "42", null, "21", "1.99%", null, this.div_mnCtrwKd);
            this.div_mnCtrwKd.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_direction("vertical");
            obj.set_innerdataset("@ds_mnCtrwKdMC_Temp");
            obj.set_value("1");
            obj.set_index("-1");

            obj = new Div("div_mnCtrwKd01", "absolute", "15", "712", null, "163", "1.83%", null, this);
            obj.set_taborder("26");
            obj.set_text("메인_물품구매(대행)공급계약서");
            obj.set_visible("false");
            obj.style.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Div("div_mnCtrwKd04", "absolute", "15", "1256", null, "163", "1.83%", null, this);
            obj.set_taborder("27");
            obj.set_text("메인_특약매입거래계약서");
            obj.set_visible("false");
            obj.style.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Div("div_addCtrw", "absolute", "15", "2016", null, "83", "1.83%", null, this);
            obj.set_taborder("28");
            obj.set_text("Div07");
            obj.set_scrollbars("none");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Static("Static50", "absolute", "0", "25", null, "57", "86.04%", null, this.div_addCtrw);
            obj.set_taborder("4");
            obj.set_text("부가계약서종류");
            obj.set_cssclass("sta_WF_Label");
            this.div_addCtrw.addChild(obj.name, obj);
            obj = new Static("Static51", "absolute", "0", "0", "467", "21", null, null, this.div_addCtrw);
            obj.set_taborder("3");
            obj.set_text("부가 계약서");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("URL('theme://images/sta_WF_Subtitle.png') left middle");
            obj.set_visible("true");
            this.div_addCtrw.addChild(obj.name, obj);
            obj = new Static("Static52", "absolute", "13.83%", "25", null, "29", "0%", null, this.div_addCtrw);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_addCtrw.addChild(obj.name, obj);
            obj = new CheckBox("chk_addCtrw01", "absolute", "14.97%", "30", null, "21", "62.82%", null, this.div_addCtrw);
            obj.set_taborder("6");
            obj.set_text("PB 상품공급 계약서");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_addCtrw.addChild(obj.name, obj);
            obj = new CheckBox("chk_addCtrw03", "absolute", "39.72%", "30", null, "21", "32.61%", null, this.div_addCtrw);
            obj.set_taborder("8");
            obj.set_text("선행물류센터 이용계약서");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_visible("false");
            this.div_addCtrw.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "13.83%", "53", null, "29", "0%", null, this.div_addCtrw);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_addCtrw.addChild(obj.name, obj);
            obj = new CheckBox("chk_addCtrw04", "absolute", "14.97%", "59", null, "21", "61.29%", null, this.div_addCtrw);
            obj.set_taborder("10");
            obj.set_text("물류센터 이용계약서(일반)");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_addCtrw.addChild(obj.name, obj);
            obj = new CheckBox("chk_addCtrw05", "absolute", "39.59%", "57", null, "21", "38.45%", null, this.div_addCtrw);
            obj.set_taborder("11");
            obj.set_text("물류센터 이용계약서(주류)");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_addCtrw.addChild(obj.name, obj);

            obj = new Div("div_addCtrw01", "absolute", "15", "2118", null, "203", "1.83%", null, this);
            obj.set_taborder("29");
            obj.set_text("부가 계약서 PB 상품공급 계약서");
            obj.set_visible("false");
            obj.style.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "15", "2098", "803", "20", null, null, this);
            obj.set_taborder("107");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_pmiw", "absolute", "15", "2798", null, "84", "1.83%", null, this);
            obj.set_taborder("30");
            obj.set_text("약정서");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Static("Static51", "absolute", "0", "0", null, "21", "336", null, this.div_pmiw);
            obj.set_taborder("6");
            obj.set_text("약정서");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.div_pmiw.addChild(obj.name, obj);
            obj = new Static("Static50", "absolute", "0", "25", null, "29", "85.91%", null, this.div_pmiw);
            obj.set_taborder("7");
            obj.set_text("약정서 종류");
            obj.set_cssclass("sta_WF_Label");
            this.div_pmiw.addChild(obj.name, obj);
            obj = new Static("Static52", "absolute", "14%", "25", null, "29", "0%", null, this.div_pmiw);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_pmiw.addChild(obj.name, obj);
            obj = new CheckBox("chk_pmiw02", "absolute", "36.55%", "29", null, "21", "46.83%", null, this.div_pmiw);
            obj.set_taborder("10");
            obj.set_text("ㅇㅇㅇ행사 약정서");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_visible("false");
            this.div_pmiw.addChild(obj.name, obj);
            obj = new CheckBox("chk_pmiw03", "absolute", "55.46%", "29", null, "21", "23.1%", null, this.div_pmiw);
            obj.set_taborder("11");
            obj.set_text("대량거래수수료 약정서");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_visible("false");
            this.div_pmiw.addChild(obj.name, obj);
            obj = new CheckBox("chk_pmiw04", "absolute", "74.49%", "29", null, "21", "1.78%", null, this.div_pmiw);
            obj.set_taborder("12");
            obj.set_text("납품업체종업원 파견 약정서");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_visible("false");
            this.div_pmiw.addChild(obj.name, obj);
            obj = new Static("Static53", "absolute", "14%", "53", null, "29", "0%", null, this.div_pmiw);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_visible("false");
            this.div_pmiw.addChild(obj.name, obj);
            obj = new CheckBox("chk_pmiw05", "absolute", "102.66%", "29", null, "21", "-22.59%", null, this.div_pmiw);
            obj.set_taborder("14");
            obj.set_text("혁신점포 기준율 약정서");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_visible("false");
            this.div_pmiw.addChild(obj.name, obj);
            obj = new CheckBox("chk_pmiw06", "absolute", "124.11%", "29", null, "21", "-41.88%", null, this.div_pmiw);
            obj.set_taborder("15");
            obj.set_text("상품공급 추가약정서");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_visible("false");
            this.div_pmiw.addChild(obj.name, obj);
            obj = new CheckBox("chk_pmiw07", "absolute", "14.85%", "29", null, "21", "65.48%", null, this.div_pmiw);
            obj.set_taborder("16");
            obj.set_text("추가 약정서 (직매장)");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_pmiw.addChild(obj.name, obj);
            obj = new CheckBox("chk_pmiw01", "absolute", "143.02%", "29", null, "21", "-59.52%", null, this.div_pmiw);
            obj.set_taborder("17");
            obj.set_text("판매장려금 약정서");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_visible("false");
            this.div_pmiw.addChild(obj.name, obj);

            obj = new Div("div_pmiw02", "absolute", "15", "3336", null, "595", "1.83%", null, this);
            obj.set_taborder("32");
            obj.set_text("약정서_ㅇㅇㅇ행사");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "15", "3161", "803", "20", null, null, this);
            obj.set_taborder("109");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_pmiw01", "absolute", "15", "3214", null, "104", "1.83%", null, this);
            obj.set_taborder("31");
            obj.set_text("약정서_판매장려금");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "15", "4936", "803", "20", null, null, this);
            obj.set_taborder("110");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_sctrw", "absolute", "15", "4969", null, "148", "1.83%", null, this);
            obj.set_taborder("34");
            obj.set_text("특약서");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Static("Static160", "absolute", "0", "76", "467", "21", null, null, this.div_sctrw);
            obj.set_taborder("9");
            obj.set_text("특약서");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_sctrw.addChild(obj.name, obj);
            obj = new Static("Static162", "absolute", "1", "101", null, "29", "85.91%", null, this.div_sctrw);
            obj.set_taborder("10");
            obj.set_text("특약서 종류");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center");
            this.div_sctrw.addChild(obj.name, obj);
            obj = new Static("Static163", "absolute", "13.96%", "101", null, "29", "0%", null, this.div_sctrw);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_sctrw.addChild(obj.name, obj);
            obj = new CheckBox("chk_sctrw01", "absolute", "62.06%", "105", null, "21", "22.34%", null, this.div_sctrw);
            obj.set_taborder("12");
            obj.set_text("특약서(마진율)");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_visible("false");
            this.div_sctrw.addChild(obj.name, obj);
            obj = new CheckBox("chk_sctrw15", "absolute", "14.85%", "105", null, "21", "63.83%", null, this.div_sctrw);
            obj.set_taborder("26");
            obj.set_text("특약서(원산지 등 ) 직매장");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_sctrw.addChild(obj.name, obj);
            obj = new CheckBox("chk_sctrw16", "absolute", "37.82%", "105", null, "21", "40.23%", null, this.div_sctrw);
            obj.set_taborder("27");
            obj.set_text("특약서(매장의철수) 직매장");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_sctrw.addChild(obj.name, obj);

            obj = new Static("Static50", "absolute", "15", "4209", "803", "20", null, null, this);
            obj.set_taborder("111");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_sctrw01", "absolute", "15", "5097", null, "487", "1.83%", null, this);
            obj.set_taborder("35");
            obj.set_text("특약서(마진율)");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "12", "5583", "803", "20", null, null, this);
            obj.set_taborder("112");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_sctrw03", "absolute", "15", "5603", null, "295", "1.83%", null, this);
            obj.set_taborder("36");
            obj.set_text("특약서(매장위치 및 면적)");
            obj.style.set_background("transparent");
            obj.set_scrollbars("autoboth");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static53", "absolute", "16", "5899", "803", "20", null, null, this);
            obj.set_taborder("114");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_sctrw16", "absolute", "15", "5920", null, "150", "1.83%", null, this);
            obj.set_taborder("37");
            obj.set_text("특약서(매장의 철수 등)");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static54", "absolute", "16", "6067", "803", "20", null, null, this);
            obj.set_taborder("115");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_sctrw15", "absolute", "15", "6087", null, "211", "1.83%", null, this);
            obj.set_taborder("38");
            obj.set_text(" 특약서(원산지 등)");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_etcCtrw", "absolute", "15", "6920", null, "54", "1.83%", null, this);
            obj.set_taborder("39");
            obj.set_text("Div09");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Static("Static24", "absolute", "0", "0", "467", "21", null, null, this.div_etcCtrw);
            obj.set_taborder("10");
            obj.set_text("기타");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.div_etcCtrw.addChild(obj.name, obj);
            obj = new Static("Static55", "absolute", "0", "25", null, "29", "86%", null, this.div_etcCtrw);
            obj.set_taborder("11");
            obj.set_text("종류");
            obj.set_cssclass("sta_WF_Label");
            this.div_etcCtrw.addChild(obj.name, obj);
            obj = new Static("Static56", "absolute", "14%", "25", null, "29", "0", null, this.div_etcCtrw);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_etcCtrw.addChild(obj.name, obj);
            obj = new CheckBox("chk_etcCtrw01", "absolute", "30.08%", "29", null, "21", "47.21%", null, this.div_etcCtrw);
            obj.set_taborder("13");
            obj.set_text("협력사원 매장근무 요청서");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_visible("false");
            this.div_etcCtrw.addChild(obj.name, obj);
            obj = new CheckBox("chk_etcCtrw02", "absolute", "14.47%", "29", null, "21", "62.82%", null, this.div_etcCtrw);
            obj.set_taborder("14");
            obj.set_text("품질보증 협정서");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_etcCtrw.addChild(obj.name, obj);

            obj = new Div("div_etcCtrw01", "absolute", "15", "7001", null, "220", "1.83%", null, this);
            obj.set_taborder("40");
            obj.set_text("협력사원 매장근무 요청서");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", "16", "7221", "803", "20", null, null, this);
            obj.set_taborder("117");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_etcCtrw02", "absolute", "15", "7241", null, "149", "1.83%", null, this);
            obj.set_taborder("42");
            obj.set_text("기타계약서_품질보증 협정서");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "-2", "49", "15", "3887", null, null, this);
            obj.set_taborder("119");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff4f");
            this.addChild(obj.name, obj);

            obj = new Div("div_space", "absolute", "15", "5189", "500", "0", null, null, this);
            obj.set_taborder("120");
            obj.set_text("div_space");
            obj.style.set_background("transparent");
            obj.style.set_color("black");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_pmiw03", "absolute", "15", "3960", null, "245", "1.83%", null, this);
            obj.set_taborder("33");
            obj.set_text("대량거래수수료 약정서");
            obj.set_visible("false");
            obj.style.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_htel", "absolute", "72.74%", "233", null, "21", "21.39%", null, this);
            obj.set_taborder("122");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_maxlength("4");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_stel", "absolute", "79.95%", "233", null, "21", "14.18%", null, this);
            obj.set_taborder("123");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_maxlength("4");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_buyerHtel", "absolute", "25.67%", "442", null, "21", "68.46%", null, this);
            obj.set_taborder("124");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_maxlength("4");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_buyerStel", "absolute", "32.89%", "442", null, "21", "61.25%", null, this);
            obj.set_taborder("125");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_maxlength("4");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "24.57%", "470", null, "21", "74.33%", null, this);
            obj.set_taborder("132");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static61", "absolute", "31.78%", "470", null, "21", "67.11%", null, this);
            obj.set_taborder("133");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_buyerHp", "absolute", "18%", "470", null, "21", "75.79%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("134");
            obj.set_readonly("true");
            obj.set_innerdataset("@ds_hp");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_cssclass("cmb_WF_Readonly");

            obj = new Edit("edt_buyerHp01", "absolute", "25.67%", "470", null, "21", "68.46%", null, this);
            obj.set_taborder("135");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_buyerHp02", "absolute", "32.89%", "470", null, "21", "61.25%", null, this);
            obj.set_taborder("136");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("Static62", "absolute", "71.88%", "322", null, "21", "27.02%", null, this);
            obj.set_taborder("137");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", "79.58%", "322", null, "21", "19.32%", null, this);
            obj.set_taborder("138");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_hp", "absolute", "65.04%", "322", null, "21", "28.73%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_innerdataset("@ds_hp");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");

            obj = new Edit("edt_hp01", "absolute", "73.23%", "322", null, "21", "20.9%", null, this);
            obj.set_taborder("13");
            obj.set_inputtype("number");
            obj.set_readonly("false");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_hp02", "absolute", "80.93%", "322", null, "21", "13.2%", null, this);
            obj.set_taborder("14");
            obj.set_inputtype("number");
            obj.set_readonly("false");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "0", "65", "21", "61", null, this);
            obj.set_taborder("142");
            obj.set_text("이전화면");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_modify", "absolute", null, "0", "41", "21", "-54", null, this);
            obj.set_taborder("143");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", "15", "202", null, "29", "82.4%", null, this);
            obj.set_taborder("144");
            obj.set_text("법인등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static65", "absolute", "17.5%", "202", null, "29", "15", null, this);
            obj.set_taborder("145");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "50%", "202", null, "29", "35.33%", null, this);
            obj.set_taborder("148");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static68", "absolute", "50%", "230", null, "29", "35.33%", null, this);
            obj.set_taborder("150");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_rrNo", "absolute", "65.04%", "206", null, "21", "18%", null, this);
            obj.set_taborder("25");
            obj.set_type("string");
            obj.set_mask("######-{#######}");
            obj.set_trimtype("right");
            obj.set_limitbymask("integer");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_copNo", "absolute", "18%", "206", null, "21", "65%", null, this);
            obj.set_taborder("24");
            obj.set_type("string");
            obj.set_mask("######-#######");
            obj.set_trimtype("right");
            obj.set_limitbymask("integer");
            this.addChild(obj.name, obj);

            obj = new Div("div_ctrwModCntn", "absolute", "15", "7423", null, "139", "1.83%", null, this);
            obj.set_taborder("44");
            obj.set_text("개별 수정 내용");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static69", "absolute", "16", "7388", "803", "20", null, null, this);
            obj.set_taborder("163");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "15", "346", null, "29", "82.4%", null, this);
            obj.set_taborder("164");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "17.5%", "346", null, "29", "15", null, this);
            obj.set_taborder("165");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static75", "absolute", "17", "294", "473", "21", null, null, this);
            obj.set_taborder("177");
            obj.set_text("업체 담당자");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_email", "absolute", "18%", "350", null, "21", "51%", null, this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ctrChrr", "absolute", "18%", "322", null, "21", "53.42%", null, this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static70", "absolute", "17", "382", "467", "21", null, null, this);
            obj.set_taborder("179");
            obj.set_text("담당 바이어");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_chrrSearch", "absolute", null, "322", "21", "21", "50.49%", null, this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static71", "absolute", "15", "3931", "803", "20", null, null, this);
            obj.set_taborder("184");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "15", "0", null, "21", "563", null, this);
            obj.set_taborder("186");
            obj.set_text("Div01");
            obj.set_visible("false");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_mnCtrwKd05", "absolute", "15", "1439", null, "187", "1.83%", null, this);
            obj.set_taborder("187");
            obj.set_text("메인_특약매입( )거래계약서");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "15", "1419", "803", "20", null, null, this);
            obj.set_taborder("188");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_pmiw04", "absolute", "15", "4232", null, "576", "1.83%", null, this);
            obj.set_taborder("189");
            obj.set_text("납품업체 종업원 파견 약정서");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_sctrw07", "absolute", "15", "6313", null, "259", "1.83%", null, this);
            obj.set_taborder("196");
            obj.set_text("특약서(판매장려금 등) 표준");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static59", "absolute", "16", "6289", "803", "20", null, null, this);
            obj.set_taborder("197");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static74", "absolute", "16", "6568", "803", "20", null, null, this);
            obj.set_taborder("198");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_mnCtrwKd07", "absolute", "15", "1650", null, "134", "1.83%", null, this);
            obj.set_taborder("201");
            obj.set_text("직매입_거래계약서(농협유통_표준)");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static78", "absolute", "15", "1806", "803", "20", null, null, this);
            obj.set_taborder("204");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_mnCtrwKd09", "absolute", "15", "1826", null, "192", "1.83%", null, this);
            obj.set_taborder("205");
            obj.set_text("특약매입_거래계약서(농협유통_표준)");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_sctrw08", "absolute", "15", "6593", null, "146", "1.83%", null, this);
            obj.set_taborder("206");
            obj.set_text("특약서(상품의 공급 등)");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static79", "absolute", "14", "6737", "803", "20", null, null, this);
            obj.set_taborder("207");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_sctrw09", "absolute", "15", "6756", null, "151", "0.61%", null, this);
            obj.set_taborder("208");
            obj.set_text("특약서(피해보상의 불청구)");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static80", "absolute", "15", "1630", "803", "20", null, null, this);
            obj.set_taborder("209");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static81", "absolute", "40.68%", "382", null, "23", "2.69%", null, this);
            obj.set_taborder("219");
            obj.set_text("바이어 정보의 수정이 필요한 경우 경제통합 시스템에서 변경하시기 바랍니다.");
            obj.set_visible("true");
            obj.style.set_color("blue");
            obj.style.set_align("right middle");
            obj.style.set_font("10 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static82", "absolute", "15", "90", null, "29", "82.4%", null, this);
            obj.set_taborder("220");
            obj.set_text("바이어 구분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static83", "absolute", "17.5%", "90", null, "29", "15", null, this);
            obj.set_taborder("221");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_mnCtrwKdM2", "absolute", "18%", "93", null, "21", "51%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("@ds_buyerCode");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_index("-1");

            obj = new Button("btn_preview", "absolute", null, "0", "65", "21", "63", null, this);
            obj.set_taborder("225");
            obj.set_text("미리보기");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static84", "absolute", "14", "2323", "803", "20", null, null, this);
            obj.set_taborder("223");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#dc143c5b");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_mnCtrwKd12", "absolute", "24", "871", null, "157", "2.08%", null, this);
            obj.set_taborder("224");
            obj.set_text("선행물류센터 이용계약서");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "15", "851", "803", "20", null, null, this);
            obj.set_taborder("229");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_addCtrw04", "absolute", "15", "2343", null, "230", "1.83%", null, this);
            obj.set_taborder("230");
            obj.set_text("물품센터이용계약서(일반)");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_addCtrw05", "absolute", "15", "2593", null, "170", "1.83%", null, this);
            obj.set_taborder("231");
            obj.set_text("물품센터이용계약서(주류)");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static85", "absolute", "15", "1236", "803", "20", null, null, this);
            obj.set_taborder("233");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", "14", "2573", "803", "20", null, null, this);
            obj.set_taborder("234");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "15", "2777", "803", "20", null, null, this);
            obj.set_taborder("235");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static89", "absolute", "15", "4825", "803", "20", null, null, this);
            obj.set_taborder("240");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_pmiw05", "absolute", "15", "4846", null, "90", "1.83%", null, this);
            obj.set_taborder("241");
            obj.set_text("혁신점포 기준율 약정서");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ctrChrrRepmn", "absolute", "17.97%", "559", null, "21", "50.98%", null, this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ctrChrrRepDtyNm", "absolute", "65.04%", "559", null, "21", "3.42%", null, this);
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Static("Static73", "absolute", "50%", "555", null, "29", "35.33%", null, this);
            obj.set_taborder("247");
            obj.set_text("법인대표자직책명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "15", "555", null, "29", "82.4%", null, this);
            obj.set_taborder("249");
            obj.set_text("법인대표자명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static72", "absolute", "17", "502", "467", "21", null, null, this);
            obj.set_taborder("250");
            obj.set_text("사업장 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_laAgntDtyNm", "absolute", "65.04%", "587", null, "21", "3.42%", null, this);
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ctrChrrMtalnm", "absolute", "18%", "531", null, "21", "51%", null, this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "50%", "583", null, "29", "35.33%", null, this);
            obj.set_taborder("253");
            obj.set_text("법률상대리직책명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_ctrPrdAutXtnYn", "absolute", "17.97%", "671", null, "21", "62.71%", null, this);
            this.addChild(obj.name, obj);
            var rdo_ctrPrdAutXtnYn_innerdataset = new Dataset("rdo_ctrPrdAutXtnYn_innerdataset", this.rdo_ctrPrdAutXtnYn);
            rdo_ctrPrdAutXtnYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">사용안함</Col></Row></Rows>");
            obj.set_innerdataset(rdo_ctrPrdAutXtnYn_innerdataset);
            obj.set_taborder("23");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("Y");
            obj.set_direction("vertical");
            obj.set_index("0");

            obj = new Edit("edt_ctrChrrDongbw", "absolute", "45.35%", "643", null, "21", "3.55%", null, this);
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ctrChrrDongup", "absolute", "17.97%", "643", null, "21", "55.13%", null, this);
            obj.set_taborder("257");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_laAgnt", "absolute", "17.97%", "587", null, "21", "50.98%", null, this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Button("btu_zip", "absolute", "33.99%", "615", null, "21", "63.45%", null, this);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_ctrChrrRzip", "absolute", "26.53%", "615", null, "21", "66.38%", null, this);
            obj.set_taborder("260");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_readonly("true");
            obj.set_mask("900");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_ctrChrrFzip", "absolute", "17.97%", "615", null, "21", "74.94%", null, this);
            obj.set_taborder("261");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_readonly("true");
            obj.set_mask("000");
            this.addChild(obj.name, obj);

            obj = new Static("Static98", "absolute", "25.43%", "615", null, "21", "73.47%", null, this);
            obj.set_taborder("262");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("sts_position", "absolute", "15", "667", null, "29", "82.4%", null, this);
            obj.set_taborder("264");
            obj.set_text("계약기간 자동연장");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "15", "639", null, "29", "82.4%", null, this);
            obj.set_taborder("266");
            obj.set_text("계약담당자주소");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "15", "611", null, "29", "82.4%", null, this);
            obj.set_taborder("268");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "15", "583", null, "29", "82.4%", null, this);
            obj.set_taborder("270");
            obj.set_text("법률상 대리인");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static67", "absolute", "15", "527", null, "29", "82.4%", null, this);
            obj.set_taborder("272");
            obj.set_text("법인명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static91", "absolute", "11", "1997", "803", "20", null, null, this);
            obj.set_taborder("273");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static90", "absolute", "13", "1034", "803", "20", null, null, this);
            obj.set_taborder("286");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_mnCtrwKd21", "absolute", "19", "1054", null, "163", "2.32%", null, this);
            obj.set_taborder("287");
            obj.set_text("임대차계약서");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_pmiw07", "absolute", "15", "2879", null, "280", "1.83%", null, this);
            obj.set_taborder("289");
            obj.set_text("추가약정서 (직매장)");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 457, 92, this.div_mnCtrwKd,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("102");
            		p.set_visible("false");
            		p.style.set_background("transparent");

            	}
            );
            this.div_mnCtrwKd.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 163, this.div_mnCtrwKd04,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("27");
            		p.set_text("메인_특약매입거래계약서");
            		p.set_visible("false");
            		p.style.set_background("transparent");

            	}
            );
            this.div_mnCtrwKd04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 83, this.div_addCtrw,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("28");
            		p.set_text("Div07");
            		p.set_scrollbars("none");
            		p.style.set_background("transparent");
            		p.set_visible("false");

            	}
            );
            this.div_addCtrw.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 203, this.div_addCtrw01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("29");
            		p.set_text("부가 계약서 PB 상품공급 계약서");
            		p.set_visible("false");
            		p.style.set_background("transparent");

            	}
            );
            this.div_addCtrw01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 84, this.div_pmiw,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("30");
            		p.set_text("약정서");
            		p.style.set_background("transparent");
            		p.set_visible("false");

            	}
            );
            this.div_pmiw.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 788, 619, this.div_pmiw02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("32");
            		p.set_text("약정서_ㅇㅇㅇ행사");
            		p.style.set_background("transparent");
            		p.set_visible("false");

            	}
            );
            this.div_pmiw02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 104, this.div_pmiw01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("31");
            		p.set_text("약정서_판매장려금");
            		p.style.set_background("transparent");
            		p.set_visible("false");

            	}
            );
            this.div_pmiw01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 148, this.div_sctrw,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("34");
            		p.set_text("특약서");
            		p.style.set_background("transparent");
            		p.set_visible("false");

            	}
            );
            this.div_sctrw.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 211, this.div_sctrw15,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("38");
            		p.set_text(" 특약서(원산지 등)");
            		p.style.set_background("transparent");
            		p.set_visible("false");

            	}
            );
            this.div_sctrw15.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 788, 54, this.div_etcCtrw,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("39");
            		p.set_text("Div09");
            		p.style.set_background("transparent");
            		p.set_visible("false");

            	}
            );
            this.div_etcCtrw.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 149, this.div_etcCtrw02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("42");
            		p.set_text("기타계약서_품질보증 협정서");
            		p.style.set_background("transparent");
            		p.set_visible("false");

            	}
            );
            this.div_etcCtrw02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 788, 259, this.div_sctrw07,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("196");
            		p.set_text("특약서(판매장려금 등) 표준");
            		p.style.set_background("transparent");
            		p.set_visible("false");

            	}
            );
            this.div_sctrw07.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 134, this.div_mnCtrwKd07,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("201");
            		p.set_text("직매입_거래계약서(농협유통_표준)");
            		p.style.set_background("transparent");
            		p.set_visible("false");

            	}
            );
            this.div_mnCtrwKd07.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 146, this.div_sctrw08,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("206");
            		p.set_text("특약서(상품의 공급 등)");
            		p.set_visible("false");

            	}
            );
            this.div_sctrw08.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 798, 26, this.div_sctrw09,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("208");
            		p.set_text("특약서(피해보상의 불청구)");
            		p.set_visible("false");

            	}
            );
            this.div_sctrw09.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 157, this.div_mnCtrwKd12,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("224");
            		p.set_text("선행물류센터 이용계약서");
            		p.set_visible("false");

            	}
            );
            this.div_mnCtrwKd12.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 230, this.div_addCtrw04,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("230");
            		p.set_text("물품센터이용계약서(일반)");
            		p.style.set_background("transparent");
            		p.set_visible("false");

            	}
            );
            this.div_addCtrw04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 170, this.div_addCtrw05,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("231");
            		p.set_text("물품센터이용계약서(주류)");
            		p.style.set_background("transparent");
            		p.set_visible("false");

            	}
            );
            this.div_addCtrw05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 818, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("전자계약 신청화면(직매장)");
            		p.style.set_background("#ffffffff");
            		p.set_visible("true");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item21","mae_ctrChrrFzip","value","ds_register","CTR_CHRR_FZIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","mae_ctrChrrRzip","value","ds_register","CTR_CHRR_RZIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","edt_laAgnt","value","ds_register","LA_AGNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","edt_ctrChrrDongup","value","ds_register","CTR_CHRR_DONGUP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","edt_ctrChrrDongbw","value","ds_register","CTR_CHRR_DONGBW");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","rdo_ctrPrdAutXtnYn","value","ds_register","CTR_PRD_AUT_XTN_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","edt_ctrChrrMtalnm","value","ds_register","CTR_CHRR_MTALNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","edt_laAgntDtyNm","value","ds_register","LA_AGNT_DTYNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","edt_ctrChrrRepDtyNm","value","ds_register","CTR_CHRR_REP_DTYNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","edt_ctrChrrRepmn","value","ds_register","CTR_CHRR_REPMN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edt_mtalNm","value","ds_register","MTALNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_naTrplC","value","ds_register","NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","mae_bzNoF","value","ds_register","BZNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edt_ceo","value","ds_register","CEO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","cbo_atel","value","ds_register","ATEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","mae_Fzip","value","ds_register","FZIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","mae_Rzip","value","ds_register","RZIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edt_dongUp","value","ds_register","DONGUP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edt_dongBw","value","ds_register","DONGBW");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","edt_buyerBlg","value","ds_register","BUYER_BLG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","edt_buyerNm","value","ds_register","BUYER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","cbo_buyerAtel","value","ds_register","BUYER_ATEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","edt_buyerEmail","value","ds_register","BUYER_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","div_mnCtrwKd.rdo_mnCtrwKdC","value","ds_eltCtrwDtl","MN_CTRW_KDC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","edt_htel","value","ds_register","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edt_stel","value","ds_register","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edt_buyerHtel","value","ds_register","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","edt_buyerStel","value","ds_register","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","cal_ctrStDt","value","ds_register","CTR_ST_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","cal_ctrEdDt","value","ds_register","CTR_ED_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","cal_ctrwDrup_Dt","value","ds_register","CTRW_DRUP_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","cbo_mnCtrwKdM","value","ds_register","MN_CTRW_KD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","chk_addCtrw","value","ds_register","ADD_CTRW_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","chk_pmiw","value","ds_register","PMIW_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","chk_sctrw","value","ds_register","SCTRW_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","chk_etcCtrw","value","ds_register","ETC_CTRW_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","cbo_buyerHp","value","ds_register","BUYER_ATEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","edt_buyerHp01","value","ds_register","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","edt_buyerHp02","value","ds_register","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","cbo_hp","value","ds_register","ATEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","edt_hp01","value","ds_register","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","edt_hp","value","ds_register","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","edt_email","value","ds_register","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","mae_rrNo","value","ds_register","RRNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item45","mae_copNo","value","ds_register","COPNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","edt_ctrChrr","value","ds_register","CTR_CHRR");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_3113X.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("OMG_DS_SC_3113X.xfdl", "lib::comDate.xjs");
        this.registerScript("OMG_DS_SC_3113X.xfdl", function() {
         //include "lib::comLib.xjs";
         //include "lib::comDate.xjs";
        var fv_mnCtrwKd = 0; //위치값
        var fv_ctrwChgObjChk =0;     // 3011_01 에서 호출할때 사용
        	//기본 =0
        	//재검토 요청상태일때  = 1
        	//전자 계약변경 대상 = 2
        var fv_CtrwChg = 0;
        this.new_elt = "";
        var buyerCD='';
        var ctrDSC='';
        var lct='';
        var dispOffset = 0;

        this.form_onload = function(obj,e)
        {
           this.codeLoad();
           this.getDS()			//데이터셋 가져오기

           this.gfn_setInitForm(obj, e); //공통
           var param = [
        	   {code:"MN_CTRW_KD"   ,     dsName:"ds_mnCtrwKdM", selecttype:""},
        //	   {code:"MN_CTRW_KDC"   ,    dsName:"ds_mnCtrwKdMC", selecttype:""},
        	   {code:"TEL"          ,     dsName:"ds_tel", selecttype:""},
        	   {code:"HP"           ,     dsName:"ds_hp",  selecttype:""}
        	];

        	this.gfn_setPortalCommonCode(param);
        	
        	// 직매장만 등록 권한 부여
        	this.btn_save.set_visible(false); // 등록버튼 감추기
        	this.fn_checkBranch();            // 직매장여부 체크 

        }

        //gfn_setCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload= function()
        {

        	//콤보에 최상단Row보이도록 설정
        	this.cbo_mnCtrwKdM.set_index(0);
        	this.div_mnCtrwKd.rdo_mnCtrwKdC.set_index(0);

        }

        
        this.fn_afterFormOnload = function()
        {
        	 //페이지 로딩후 실행부분
        	 //new_elt  ==  true   신규 계약서 작성시
        	 //new_elt  ==  false  계약서 수정시
        	this.new_elt = this.gfn_isNull(this.parent.edt_chk);
        	
        	if (!this.new_elt) {
        		fv_ctrwChgObjChk = "1";
        		fv_CtrwChg = this.parent.edt_CtrwChg.value;
        	}

        	if (fv_ctrwChgObjChk == 1) {
        		this.btn_close.set_visible(true);
        		this.btn_save.set_visible(false);
        		this.btn_preview.set_visible(false);
        		this.btn_modify.set_visible(true);
        		this.btn_modify.set_right(17);

        		this.search();  // 조회
        		this.cbo_mnCtrwKdM.setInnerDataset(this.ds_mnCtrwKdMC);

        		if (fv_CtrwChg ==2) {
        			this.Div01.set_visible(false);
        			this.disable();
        		}
        	} else {
        //		trace("시작") ;
        		this.Div01.set_visible(true);
        		this.initsearch();
        	}
        }

        // 상품본부, 축산 , 수산등 바이어 코드를 불러올 함수
        this.codeLoad = function()
        {
        	var sSvcID        = "codeLoad";
        	var sURL          = "svc::rest/ct/eltctrw/retrieveEltctrwCDList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_buyerCode=ds_buyerCode" ;
        	var sArgument     = "SIMP_TPC=ELT_DEPT_DSC";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        // 모든 계약서들의 데이터셋을 불러올 함수
        this.getDS = function()
        {
        	var sSvcID        = "getDS";
        	var sURL          = "svc::rest/ct/eltctrw/retrieveEltctrwDSList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_mnCtrwKdMC=ds_mnCtrwKdMC" ;
        	var sArgument     = "CD_TYPE=all";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        // 바이어 코드별 해당 데이터셋 뽑아오기
        this.fn_codeDSC = function(param1,param2)
        {
        	var ctype;
        	var cdm;
        	var cdd;
        	var simpcnm;
        	var curRow;
        	
        	//param1 : 11 (CD_M) , param2 : 'MN_CTRW_KDC' (CD_TYPE)
        	trace("fn_codeDSC param1: " + param1);
        	trace("fn_codeDSC param2: " + param2);
        	this.chkinit(param2); //체크박스 초기화시키기
        	
        	// 임시용
        	if (param1 == 'search') {

        	} else {
        		for (var i = 0; i < this.ds_mnCtrwKdMC.rowcount; i++) {
        		    curRow = this.ds_mnCtrwKdMC_Temp.rowposition;
        			cdm = this.ds_mnCtrwKdMC.getColumn(i, "CD_M");  /*Dataset 값을 가져옴. */
        			cdd = this.ds_mnCtrwKdMC.getColumn(i, "CD_D");
        			ctype = this.ds_mnCtrwKdMC.getColumn(i, "CD_TYPE");

        			if (cdm == param1 || fv_ctrwChgObjChk == 1) {
        				if (ctype == 'MN_CTRW_KD' && param2=='MN_CTRW_KD') {
        				    // 메인계약서 세팅
        					simpcnm = this.ds_mnCtrwKdMC.getColumn(i, "SIMP_CNM");

        					this.ds_mnCtrwKdMC_Temp.addRow();
        					this.ds_mnCtrwKdMC_Temp.setColumn(curRow, "CD_TYPE", ctype) /*Dataset 에 값을 셋팅함 */
        					this.ds_mnCtrwKdMC_Temp.setColumn(curRow, "CD_M", cdm)
        					this.ds_mnCtrwKdMC_Temp.setColumn(curRow, "CD_D", cdd)
        					this.ds_mnCtrwKdMC_Temp.setColumn(curRow, "SIMP_CNM", simpcnm)

        				} else if (ctype == 'ADD_CTRW_KDC' && param2=='ADD_CTRW_KDC') {
        					if (cdd == "201") {
        						this.div_addCtrw.chk_addCtrw01.set_enable(true);
        					}
        					if (cdd== '204') {
        						this.div_addCtrw.chk_addCtrw04.set_enable(true); // 부가계약서로 변경됨
        					}
        					if (cdd== '205') {
        						this.div_addCtrw.chk_addCtrw05.set_enable(true); // 부가계약서로 변경됨
        					}
        					this.position_chk();
        				} else if (ctype == 'PMIW_KDC' && param2=='PMIW_KDC') {
        					// 약정서
        					if (cdd == "301") {
        						this.div_pmiw.chk_pmiw01.set_enable(true);
        					}
        					if (cdd == "302") {
        						this.div_pmiw.chk_pmiw02.set_enable(true);
        					}
        					if (cdd == "303") {
        						this.div_pmiw.chk_pmiw03.set_enable(true);
        					}
        					// 304 현재 안씀
        					// if (cdd == "304") {
        					// 	this.div_pmiw.chk_pmiw04.set_enable(true);
        					// }
        					// 신규 약정서 2개
        					if (cdd == "305") {
        						this.div_pmiw.chk_pmiw05.set_enable(true);
        					}
        					if (cdd == "306") {
        						this.div_pmiw.chk_pmiw06.set_enable(true);
        					}
        					this.position_chk();

        					if (cdd == "307") {
        						this.div_pmiw.chk_pmiw07.set_enable(true);
        					}
        					this.position_chk();

        				} else if (ctype == 'SCTRW_KDC' && param2=='SCTRW_KDC') {
        					// 특약서 부분
        					if (cdd == "401") {
        						this.div_sctrw.chk_sctrw01.set_enable(true);
        					}
        					if (cdd == "415") {
        						this.div_sctrw.chk_sctrw15.set_enable(true);
        					}
        					if (cdd == "416") {
        						this.div_sctrw.chk_sctrw16.set_enable(true);
        					}
        					this.position_chk();

        				} else if (ctype == 'ETC_CTRW_KDC' && param2=='ETC_CTRW_KDC') {
        					this.div_etcCtrw.chk_etcCtrw01.set_enable(true);	// 이건 지금 안쓰임
        					this.div_etcCtrw.chk_etcCtrw02.set_enable(true);
        					this.div_etcCtrw.chk_etcCtrw03.set_enable(true);
        					this.position_chk();
        				}
        			}
        		} // for
        		trace("ds_mnCtrwKdMC_Temp.saveXML " + this.ds_mnCtrwKdMC_Temp.saveXML());
        	}
        }

        // 부가계약서 부분 enable 값 false로 바꾸기
        this.chkinit = function(param){
        	if(param == 'ADD_CTRW_KDC'){
        		this.div_addCtrw.chk_addCtrw01.set_enable(false);

        		this.div_addCtrw.chk_addCtrw04.set_enable(false);
        		this.div_addCtrw.chk_addCtrw05.set_enable(false);
        	}else if(param == 'PMIW_KDC'){
        		this.div_pmiw.chk_pmiw01.set_enable(false);
        		this.div_pmiw.chk_pmiw02.set_enable(false);
        		this.div_pmiw.chk_pmiw03.set_enable(false);
        //		this.div_pmiw.chk_pmiw04.set_enable(false);	4는 지금 안쓰임
        		this.div_pmiw.chk_pmiw05.set_enable(false);
        		this.div_pmiw.chk_pmiw06.set_enable(false);
        	}else if(param == 'SCTRW_KDC'){
        		this.div_sctrw.chk_sctrw01.set_enable(false);
        		this.div_sctrw.chk_sctrw15.set_enable(false);
        		this.div_sctrw.chk_sctrw16.set_enable(false);

        
        	}else if(param == 'ETC_CTRW_KDC'){
        		this.div_etcCtrw.chk_etcCtrw01.set_enable(false);	// 이건 지금 안쓰임
        		this.div_etcCtrw.chk_etcCtrw02.set_enable(false);
        		this.div_etcCtrw.chk_etcCtrw03.set_enable(false);
        	}
        }

        //체크박스 해제시 값 초기화
        this.unCHK = function(param){
        //	trace('체크박스 해제');
        	this.chk_addCtrw.set_enable(false);
        	this.chk_pmiw.set_enable(false);
        	this.chk_sctrw.set_enable(false);
        	this.chk_etcCtrw.set_enable(false);

        	if(param == 'all'){
        		this.chk_addCtrw.set_value(0);
        		this.chk_pmiw.set_value(0);
        		this.chk_sctrw.set_value(0);
        		this.chk_etcCtrw.set_value(0);

        		this.ds_addEltCtrwDtl.deleteAll();
        		this.div_addCtrw.set_visible(false);
        		this.div_addCtrw01.set_url("");
        		this.div_addCtrw01.set_visible(false);

        		this.div_addCtrw04.set_url("");
        		this.div_addCtrw04.set_visible(false);
        		this.div_addCtrw05.set_url("");
        		this.div_addCtrw05.set_visible(false);

        		this.div_addCtrw.chk_addCtrw01.set_value(0);

        		this.div_addCtrw.chk_addCtrw04.set_value(0);
        		this.div_addCtrw.chk_addCtrw05.set_value(0);

        		this.fn_addCtrw01();

        //		this.fn_addCtrw03();
        		this.fn_addCtrw04();
        		this.fn_addCtrw05();

        		this.position_chk();

        
        		this.ds_pmiwDtl.deleteAll();
        		this.ds_lgqtTrFeePmiw.deleteAll();
        		this.ds_evtAmPmiw.deleteAll();
        		this.div_pmiw.chk_pmiw01.set_value(0);
        		this.div_pmiw.chk_pmiw02.set_value(0);
        		this.div_pmiw.chk_pmiw03.set_value(0);
        //		this.div_pmiw.chk_pmiw04.set_value(0);
        		this.div_pmiw.chk_pmiw05.set_value(0);
        		this.div_pmiw.chk_pmiw06.set_value(0);
        		this.div_pmiw.set_visible(false);
        		this.div_pmiw01.set_url("");
        		this.div_pmiw01.set_visible(false);
        		this.div_pmiw02.set_url("");
        		this.div_pmiw02.set_visible(false);
        		this.div_pmiw03.set_url("");
        		this.div_pmiw03.set_visible(false);
        // 		this.div_pmiw04.set_url("");
        // 		this.div_pmiw04.set_visible(false);
        		this.div_pmiw05.set_url("");
        		this.div_pmiw05.set_visible(false);
        //		this.div_pmiw06.set_url("");
        //		this.div_pmiw06.set_visible(false);
        		this.div_pmiw07.set_url("");
        		this.div_pmiw07.set_visible(false);

        
        		this.fn_pmiw01();
        		this.fn_pmiw02();
        		this.fn_pmiw03();
        		this.fn_pmiw04();
        		this.fn_pmiw05();
        		this.fn_pmiw07();

        		this.div_pmiw.chk_pmiw06.set_value(0);
        		this.div_pmiw.chk_pmiw07.set_value(0);

        	//	this.fn_pmiw06();

        		this.position_chk();

        		this.div_sctrw.set_visible(false);
        		this.ds_sctrwDtl.deleteAll();
        		this.div_sctrw.chk_sctrw01.set_value(0);
        		this.div_sctrw.chk_sctrw15.set_value(0);
        		this.div_sctrw.chk_sctrw16.set_value(0);

        		this.div_sctrw.set_visible(false);

        		this.div_sctrw01.set_url("");
        		this.div_sctrw01.set_visible(false);

        		this.div_sctrw15.set_url("");
        		this.div_sctrw15.set_visible(false);

                this.div_sctrw16.set_url("");
        		this.div_sctrw16.set_visible(false);

        		this.fn_sctrw01();

        		this.fn_sctrw15();
        		this.fn_sctrw16();

        		this.position_chk();

        
        		this.ds_etcEltCtrw.deleteAll();
        		this.div_etcCtrw.chk_etcCtrw01.set_value(0);
        		this.div_etcCtrw.chk_etcCtrw02.set_value(0);
        		// this.div_etcCtrw.chk_etcCtrw03.set_value(0);
        		this.div_etcCtrw.set_visible(false);
        		this.div_etcCtrw01.set_url("");
        		this.div_etcCtrw01.set_visible(false);
        		this.div_etcCtrw02.set_url("");
        		this.div_etcCtrw02.set_visible(false);

        		this.fn_etcCtrw01();
        		this.fn_etcCtrw02();

        		this.position_chk();

        	}else if(param == 'main'){

        	}
        }

         /*초기 조회*/
        this.initsearch = function()
        {
        //trace("teset new " +application.gv_userId);
        	var sSvcID        = "initsearch";
        	var sURL          = "svc::rest/ct/eltctrw/retrieveInitEltctrwList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_register=ds_register ds_etcEltStylAmm=ds_etcEltStylAmm";  // 양식조회
        	var sArgument     = "BUYER_ENO="+ application.gv_userId;

        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

         /*조회*/
        this.search = function()
        {
        	var eltCtrwNo =  this.gfn_isEmpty(this.getOwnerFrame().ELT_CTRW_NO);
        	var chgSqno =  this.gfn_isEmpty(this.getOwnerFrame().CHG_SQNO);

        //	alert ("eltCtrwNo : "+ eltCtrwNo);
        //	alert ("chgSqno : "+ chgSqno);
        //	trace("eltCtrwNo : " +eltCtrwNo + "==   chgSqno :: " +  chgSqno);

        	 var sDataSet =	"ds_register=ds_register" ;
        		// 메인계약서
        		sDataSet += " ds_eltCtrwDtl=ds_eltCtrwDtl" ;
        		//부가 계약서
        		sDataSet += " ds_addEltCtrwDtl=ds_addEltCtrwDtl" ;
        		//약정서
        		sDataSet += " ds_pmiwDtl=ds_pmiwDtl" ;
        		sDataSet += " ds_evtAmPmiw=ds_evtAmPmiw" ;
        		sDataSet += " ds_lgqtTrFeePmiw=ds_lgqtTrFeePmiw" ;

        		sDataSet += " ds_dlvgCompEmpDspcPmiw=ds_dlvgCompEmpDspcPmiw" ;
        		sDataSet += " ds_dspcPerWrkPrdPmiw=ds_dspcPerWrkPrdPmiw" ;

        		//특약서
        		sDataSet += " ds_sctrwDtl=ds_sctrwDtl" ;
        		sDataSet += " ds_sctrwNmlMrgnRt=ds_sctrwNmlMrgnRt" ;
        		sDataSet += " ds_sctrwCtrMrgnRt=ds_sctrwCtrMrgnRt" ;
        		sDataSet += " ds_sctrwAllXpcPmtnCst=ds_sctrwAllXpcPmtnCst" ;
        		//기타 계약서
        		sDataSet += " ds_etcEltCtrw=ds_etcEltCtrw" ;
        		sDataSet += " ds_etcEltStylAmm=ds_etcEltStylAmm" ;

        
        	var sSvcID        = "search";
        	var sURL          = "svc::rest/ct/eltctrw/retrieveAnwEltCtrwDrupDscList";
        	var sInDatasets   = "ds_param=ds_param";
        	var sOutDatasets  = sDataSet;
        	var sArgument     = "eltCtrwNo="+ eltCtrwNo +" chgSqno="+ chgSqno;

        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);

        }

        
        /* 입력저장 */
        this.btn_save_onclick = function(obj,e)
        {
        	this.insert();
        }
        // 미리보기
        this.btn_preview_onclick = function(obj,e)
        {
        // 	trace("TEMP");
        	this.insert("TEMP");

        // 	var eltCtrwNo =  "20180628000002";
        // 	var chgSqNo =    "001";
        //
        // 	var ozParam = {
        // 		sId: 'OMG_DS_SC_211301',
        // 		sUrl: '/rest/oz/ct/eltctrw/osEltctrw',
        // 		paramType: 'param',
        // 		sParam: {ELT_CTRW_NO:eltCtrwNo, CHG_SQNO:chgSqNo, TEMP_YN:"Y"}
        // 	};
        // 	this.ozViewer(ozParam ,"ozViewerPotal");
        }

        
        /*
         *
         * 등록
         */
        this.insert = function(flag)
        {
        	trace("rdo_mnCtrwKdC  insert " + this.div_mnCtrwKd.rdo_mnCtrwKdC.value);

        	var validationCheck = false;

        	var strTelNo = this.cbo_atel.value ;
        	    strTelNo += this.edt_htel.value ;
        	    strTelNo += this.edt_stel.value ;

        	var strMpNo = this.cbo_hp.value ;
        	    strMpNo += this.edt_hp01.value ;
        	    strMpNo += this.edt_hp02.value ;

        	var strBuyerTelNo = this.cbo_buyerAtel.value ;
        		strBuyerTelNo += this.edt_buyerHtel.value ;
        		strBuyerTelNo += this.edt_buyerStel.value ;

        	var strBuyerMpNo = this.cbo_buyerHp.value ;
        		strBuyerMpNo += this.edt_buyerHp01.value ;
        		strBuyerMpNo += this.edt_buyerHp02.value ;

        	this.ds_register.setColumn(0, "TELNO" ,strTelNo) ;
        	this.ds_register.setColumn(0, "MPNO" ,strMpNo) ;
        	this.ds_register.setColumn(0, "BUYER_TELNO" ,strBuyerTelNo) ;
        	this.ds_register.setColumn(0, "BUYER_MPNO" ,strBuyerMpNo) ;
        	this.ds_register.setColumn(0, "ELT_CTRW_NO" ,"") ;

        	var sDataSet =	"ds_register=ds_register" ;
        	// 메인계약서
        	sDataSet += " ds_eltCtrwDtl=ds_eltCtrwDtl" ;

        	this.ds_register.set_updatecontrol(false);
        	this.ds_register.setRowType(0, Dataset.ROWTYPE_INSERT);
        	this.ds_register.set_updatecontrol(true);

        	this.ds_eltCtrwDtl.set_updatecontrol(false);
        	this.ds_eltCtrwDtl.setRowType(0, Dataset.ROWTYPE_INSERT);
        	this.ds_eltCtrwDtl.set_updatecontrol(true);

        	if (this.fn_validationCheck()) {
        		if (this.div_mnCtrwKd.rdo_mnCtrwKdC.value == "101") {
        			validationCheck = this.div_mnCtrwKd01.fn_validationCheck()  ;
        		} else if (this.div_mnCtrwKd.rdo_mnCtrwKdC.value == "104") {
        			validationCheck = this.div_mnCtrwKd04.fn_validationCheck();
        		} else if (this.div_mnCtrwKd.rdo_mnCtrwKdC.value == "105") {
        			validationCheck = this.div_mnCtrwKd05.fn_validationCheck();
        		} else if (this.div_mnCtrwKd.rdo_mnCtrwKdC.value == "107") {
        			// 106 직매입 수산
        			validationCheck = this.div_mnCtrwKd07.fn_validationCheck();
        		} else if (this.div_mnCtrwKd.rdo_mnCtrwKdC.value == "109") {
        			validationCheck = this.div_mnCtrwKd09.fn_validationCheck();
        		} else if (this.div_mnCtrwKd.rdo_mnCtrwKdC.value == "110") {
        			validationCheck = this.div_mnCtrwKd10.fn_validationCheck();
        		} else if (this.div_mnCtrwKd.rdo_mnCtrwKdC.value == "112") {
        			validationCheck = this.div_mnCtrwKd12.fn_validationCheck();
        		} else if (this.div_mnCtrwKd.rdo_mnCtrwKdC.value == "121") {
        			// 임대차 계약서 상품 리스트
        			sDataSet += " ds_ctEtcItemList=ds_ctEtcItemList" ;
        			trace( this.div_mnCtrwKd21.ds_ctEtcItemList.saveXML());
        			this.ds_ctEtcItemList.copyData(this.div_mnCtrwKd21.ds_ctEtcItemList);
        			validationCheck = this.div_mnCtrwKd21.fn_validationCheck();
        		}
        	}
        	
        	// 부가 계약서
        	if (this.chk_addCtrw.value == 1 && validationCheck) {
        		sDataSet += " ds_addEltCtrwDtl=ds_addEltCtrwDtl" ;

        		if (this.div_addCtrw.chk_addCtrw01.value == 1) {
        			validationCheck = this.div_addCtrw01.fn_validationCheck();
        		}

        		if (this.div_addCtrw.chk_addCtrw04.value == 1) {
        			validationCheck = this.div_addCtrw04.fn_validationCheck();
        		}
        		if (this.div_addCtrw.chk_addCtrw05.value == 1) {
        			validationCheck = this.div_addCtrw05.fn_validationCheck();
        		}

        		this.ds_addEltCtrwDtl.set_updatecontrol(false);
        		this.ds_addEltCtrwDtl.setRowType(0, Dataset.ROWTYPE_INSERT);
        		this.ds_addEltCtrwDtl.set_updatecontrol(true);
        	}

        	//약정서
        	if (this.chk_pmiw.value == 1 && validationCheck) {
        		sDataSet += " ds_pmiwDtl=ds_pmiwDtl" ;

        		this.ds_pmiwDtl.set_updatecontrol(false);
        		this.ds_pmiwDtl.setRowType(0, Dataset.ROWTYPE_INSERT);
        		this.ds_pmiwDtl.set_updatecontrol(true);

        		if (this.div_pmiw.chk_pmiw01.value == 1) {
        			validationCheck = this.div_pmiw01.fn_validationCheck();
        		}

        		if (this.div_pmiw.chk_pmiw02.value == 1 && validationCheck) {
        			sDataSet += " ds_evtAmPmiw=ds_evtAmPmiw";
        			validationCheck = this.div_pmiw02.fn_validationCheck();

        			this.ds_evtAmPmiw.set_updatecontrol(false);
        			this.ds_evtAmPmiw.setRowType(0, Dataset.ROWTYPE_INSERT);
        			this.ds_evtAmPmiw.set_updatecontrol(true);
        		}

        		if (this.div_pmiw.chk_pmiw03.value == 1 && validationCheck) {
        			sDataSet += " ds_lgqtTrFeePmiw=ds_lgqtTrFeePmiw";
        			validationCheck = this.div_pmiw03.fn_validationCheck();

        			this.ds_lgqtTrFeePmiw.set_updatecontrol(false);
        			this.ds_lgqtTrFeePmiw.setRowType(0, Dataset.ROWTYPE_INSERT);
        			this.ds_lgqtTrFeePmiw.set_updatecontrol(true);
        		}

        		if (this.div_pmiw.chk_pmiw04.value == 1 && validationCheck) {
        			sDataSet += " ds_dlvgCompEmpDspcPmiw=ds_dlvgCompEmpDspcPmiw";
        			sDataSet += " ds_dspcPerWrkPrdPmiw=ds_dspcPerWrkPrdPmiw";
        			validationCheck = this.div_pmiw04.fn_validationCheck();

        			this.ds_dlvgCompEmpDspcPmiw.set_updatecontrol(false);
        			this.ds_dlvgCompEmpDspcPmiw.setRowType(0, Dataset.ROWTYPE_INSERT);
        			this.ds_dlvgCompEmpDspcPmiw.set_updatecontrol(true);
        			this.ds_dspcPerWrkPrdPmiw.set_updatecontrol(false);
        			this.ds_dspcPerWrkPrdPmiw.setRowType(0, Dataset.ROWTYPE_INSERT);
        			this.ds_dspcPerWrkPrdPmiw.set_updatecontrol(true);
        		}

        		if (this.div_pmiw.chk_pmiw05.value == 1) {
        			validationCheck = this.div_pmiw05.fn_validationCheck();
        		}

        		if (this.div_pmiw.chk_pmiw07.value == 1 ) {
        			validationCheck = this.div_pmiw07.fn_validationCheck();
        		}

        		//307번 약정서
        		// this.fn_pmiw07();
        		// alert('insert 약정서 확인 ');
        		trace(this.ds_pmiwDtl.saveXML());
        	}

        	//특약서
        	if (this.chk_sctrw.value == 1 && validationCheck) {
        		sDataSet += " ds_sctrwDtl=ds_sctrwDtl";

        		this.ds_sctrwDtl.set_updatecontrol(false);
        		this.ds_sctrwDtl.setRowType(0, Dataset.ROWTYPE_INSERT);
        		this.ds_sctrwDtl.set_updatecontrol(true);
        	}

        	//기타 계약서
        	if (this.chk_etcCtrw.value == 1 && validationCheck) {
        		sDataSet += " ds_etcEltCtrw=ds_etcEltCtrw" ;

        		if (this.div_etcCtrw.chk_etcCtrw01.value == 1) {
        			validationCheck = this.div_etcCtrw01.fn_validationCheck();
        		}

        		this.ds_etcEltCtrw.set_updatecontrol(false);
        		this.ds_etcEltCtrw.setRowType(0, Dataset.ROWTYPE_INSERT);
        		this.ds_etcEltCtrw.set_updatecontrol(true);
        	}

        	trace(this.ds_sctrwDtl.saveXML());
        	trace(this.ds_etcEltCtrw.saveXML());

        	if (validationCheck) {
        		var sSvcID        = (flag == "TEMP") ? "insertTemp" : "insert";

        		var sURL          = "svc::rest/ct/eltctrw/insertAnwEltCtrwDrup";
        		var sInDatasets   = sDataSet ;
        		var sOutDatasets  = (flag == "TEMP") ? "ds_temp=ds_temp" : "";
        		var sArgument     = (flag == "TEMP") ? "tempYn=Y" : "";
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회

        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        	//trace("ds_register" + this.ds_dspcPerWrkPrdPmiw.saveXML());
        }

        this.btn_modify_onclick = function(obj,e)
        {
        	this.update();
        }

        /*수정*/
        this.update = function()
        {
        	var  validationCheck = false;

        	var strTelNo = this.cbo_atel.value ;
        	   strTelNo += this.edt_htel.value ;
        	   strTelNo += this.edt_stel.value ;

        	var strMpNo = this.cbo_hp.value ;
        	   strMpNo += this.edt_hp01.value ;
        	   strMpNo += this.edt_hp02.value ;

        	var strBuyerTelNo = this.cbo_buyerAtel.value ;
        		strBuyerTelNo += this.edt_buyerHtel.value ;
        		strBuyerTelNo += this.edt_buyerStel.value ;

        	var strBuyerMpNo = this.cbo_buyerHp.value ;
        		strBuyerMpNo += this.edt_buyerHp01.value ;
        		strBuyerMpNo += this.edt_buyerHp02.value ;

        	this.ds_register.setColumn(0, "TELNO" ,strTelNo) ;
        	this.ds_register.setColumn(0, "MPNO" ,strMpNo) ;
        	this.ds_register.setColumn(0, "BUYER_TELNO" ,strBuyerTelNo) ;
        	this.ds_register.setColumn(0, "BUYER_MPNO" ,strBuyerMpNo) ;

        	if (this.gfn_isNull(this.ds_register.getColumn(0, "COLB_COMP_SGNT"))) {
        		this.ds_register.setColumn(0, "COLB_COMP_SGNT" ,"") ;
        	}

        	if (this.fn_validationCheck()) {
        		if (this.div_mnCtrwKd.rdo_mnCtrwKdC.value == "101") {
        			validationCheck = this.div_mnCtrwKd01.fn_validationCheck()  ;
        		} else if(this.div_mnCtrwKd.rdo_mnCtrwKdC.value == "104"){
        			validationCheck = this.div_mnCtrwKd04.fn_validationCheck();
        		}else if(this.div_mnCtrwKd.rdo_mnCtrwKdC.value == "105"){
        			validationCheck = this.div_mnCtrwKd05.fn_validationCheck();
        		}else if(this.div_mnCtrwKd.rdo_mnCtrwKdC.value == "107"){
        			validationCheck = this.div_mnCtrwKd07.fn_validationCheck();
        		}else if(this.div_mnCtrwKd.rdo_mnCtrwKdC.value == "109"){
        			validationCheck = this.div_mnCtrwKd09.fn_validationCheck();
        		}else if(this.div_mnCtrwKd.rdo_mnCtrwKdC.value == "110"){
        			validationCheck = this.div_mnCtrwKd10.fn_validationCheck();
        		}else if(this.div_mnCtrwKd.rdo_mnCtrwKdC.value == "112"){
        			validationCheck = this.div_mnCtrwKd12.fn_validationCheck();
        		} else if(this.div_mnCtrwKd.rdo_mnCtrwKdC.value == "121"){
        			validationCheck = this.div_mnCtrwKd21.fn_validationCheck();
        		}
        	}

        
        	// 메인계약서 상세 삭제 관련
        	for (var i = 0; i < this.ds_eltCtrwDtl.getDeletedRowCount(); i++) {
        		// trace("삭제");
        		var nRowEltCtrwDtl = this.ds_eltCtrwDtl.addRow();
        		this.ds_eltCtrwDtl.setColumn( nRowEltCtrwDtl,"ELT_CTRW_NO",this.ds_eltCtrwDtl.getDeletedColumn(i,"ELT_CTRW_NO") );
        		/* 아마 여기가 정보 보내는 곳*/
        		this.ds_eltCtrwDtl.setColumn( nRowEltCtrwDtl,"MN_CTRW_KDC",this.ds_eltCtrwDtl.getDeletedColumn(i,"MN_CTRW_KDC") );
        		this.ds_eltCtrwDtl.setColumn( nRowEltCtrwDtl,"CTRW_STY_VER",this.ds_eltCtrwDtl.getDeletedColumn(i,"CTRW_STY_VER") );
        		this.ds_eltCtrwDtl.setColumn( nRowEltCtrwDtl,"CHG_SQNO",this.ds_eltCtrwDtl.getDeletedColumn(i,"CHG_SQNO") );
        		this.ds_eltCtrwDtl.setColumn( nRowEltCtrwDtl,"ISCHECKED","Y" );

        		this.ds_eltCtrwDtl.set_updatecontrol(false);
        		this.ds_eltCtrwDtl.setRowType(nRowEltCtrwDtl, Dataset.ROWTYPE_UPDATE);
        		this.ds_eltCtrwDtl.set_updatecontrol(true);
        	}

        	//부가 계약서
        	if (this.chk_addCtrw.value == 1 && validationCheck) {
        		if (this.div_addCtrw.chk_addCtrw01.value == 1) {
        			validationCheck = this.div_addCtrw01.fn_validationCheck();
        		}
        		if (this.div_addCtrw.chk_addCtrw04.value == 1) {
        			validationCheck = this.div_addCtrw04.fn_validationCheck();
        		}
        		if (this.div_addCtrw.chk_addCtrw05.value == 1) {
        			validationCheck = this.div_addCtrw05.fn_validationCheck();
        		}
        	}

        	//부가 계약서 상세 삭제 관련
        	for (var i = 0; i < this.ds_addEltCtrwDtl.getDeletedRowCount(); i++) {
        		var nRowAddEltCtrwDtl = this.ds_addEltCtrwDtl.addRow();

        		this.ds_addEltCtrwDtl.setColumn( nRowAddEltCtrwDtl,"ELT_CTRW_NO",this.ds_addEltCtrwDtl.getDeletedColumn(i,"ELT_CTRW_NO") );
        		this.ds_addEltCtrwDtl.setColumn( nRowAddEltCtrwDtl,"ADD_CTRW_KDC",this.ds_addEltCtrwDtl.getDeletedColumn(i,"ADD_CTRW_KDC") );
        		this.ds_addEltCtrwDtl.setColumn( nRowAddEltCtrwDtl,"CTRW_STY_VER",this.ds_addEltCtrwDtl.getDeletedColumn(i,"CTRW_STY_VER") );
        		this.ds_addEltCtrwDtl.setColumn( nRowAddEltCtrwDtl,"CHG_SQNO",this.ds_addEltCtrwDtl.getDeletedColumn(i,"CHG_SQNO") );
        		this.ds_addEltCtrwDtl.setColumn( nRowAddEltCtrwDtl,"ISCHECKED","Y" );

        		this.ds_addEltCtrwDtl.set_updatecontrol(false);
        		this.ds_addEltCtrwDtl.setRowType(nRowAddEltCtrwDtl, Dataset.ROWTYPE_UPDATE);
        		this.ds_addEltCtrwDtl.set_updatecontrol(true);
        	}
        	
        	//약정서
        	if (this.chk_pmiw.value == 1 && validationCheck) {
        		if (this.div_pmiw.chk_pmiw01.value == 1 && validationCheck) {
        			validationCheck = this.div_pmiw01.fn_validationCheck();
        		}
        		if (this.div_pmiw.chk_pmiw02.value == 1 && validationCheck) {
        			validationCheck = this.div_pmiw02.fn_validationCheck();
        		}
        		if (this.div_pmiw.chk_pmiw03.value == 1 && validationCheck) {
        			validationCheck = this.div_pmiw03.fn_validationCheck();
        		}
        		if (this.div_pmiw.chk_pmiw04.value == 1 && validationCheck) {
        			validationCheck = this.div_pmiw04.fn_validationCheck();
        		}
        		if (this.div_pmiw.chk_pmiw05.value == 1 && validationCheck) {
        			validationCheck = this.div_pmiw05.fn_validationCheck();
        		}
        		//306번 약정서
        		this.fn_pmiw06();

        		if (this.div_pmiw.chk_pmiw07.value == 1 && validationCheck) {
        			validationCheck = this.div_pmiw07.fn_validationCheck();
        		}
        	}

        	for (var i = 0; i < this.ds_pmiwDtl.getDeletedRowCount(); i++) {
        		var nRow1 = this.ds_pmiwDtl.addRow();

        		this.ds_pmiwDtl.setColumn(nRow1, "ELT_CTRW_NO", this.ds_pmiwDtl.getDeletedColumn(i,"ELT_CTRW_NO"));
        		this.ds_pmiwDtl.setColumn(nRow1, "PMIW_KDC", this.ds_pmiwDtl.getDeletedColumn(i,"PMIW_KDC"));
        		this.ds_pmiwDtl.setColumn(nRow1, "CHG_SQNO", this.ds_pmiwDtl.getDeletedColumn(i,"CHG_SQNO"));
        		this.ds_pmiwDtl.setColumn(nRow1, "ISCHECKED", "Y");

        		this.ds_pmiwDtl.set_updatecontrol(false);
        		this.ds_pmiwDtl.setRowType(nRow1, Dataset.ROWTYPE_UPDATE);
        		this.ds_pmiwDtl.set_updatecontrol(true);
        	}
        	
        	for (var i = 0; i < this.ds_evtAmPmiw.getDeletedRowCount(); i++) {
        		var nRow1 = this.ds_evtAmPmiw.addRow();

        		this.ds_evtAmPmiw.setColumn(nRow1, "ELT_CTRW_NO", this.ds_evtAmPmiw.getDeletedColumn(i,"ELT_CTRW_NO"));
        		this.ds_evtAmPmiw.setColumn(nRow1, "PMIW_KDC", this.ds_evtAmPmiw.getDeletedColumn(i,"PMIW_KDC"));
        		this.ds_evtAmPmiw.setColumn(nRow1, "CHG_SQNO", this.ds_evtAmPmiw.getDeletedColumn(i,"CHG_SQNO"));
        		this.ds_evtAmPmiw.setColumn(nRow1, "ISCHECKED", "Y");

        		this.ds_evtAmPmiw.set_updatecontrol(false);
        		this.ds_evtAmPmiw.setRowType(nRow1, Dataset.ROWTYPE_UPDATE);
        		this.ds_evtAmPmiw.set_updatecontrol(true);

        	}

        	for (var i = 0; i < this.ds_lgqtTrFeePmiw.getDeletedRowCount(); i++) {
        		var nRow1 = this.ds_lgqtTrFeePmiw.addRow();

        		this.ds_lgqtTrFeePmiw.setColumn(nRow1, "ELT_CTRW_NO", this.ds_lgqtTrFeePmiw.getDeletedColumn(i,"ELT_CTRW_NO") );
        		this.ds_lgqtTrFeePmiw.setColumn(nRow1, "PMIW_KDC", this.ds_lgqtTrFeePmiw.getDeletedColumn(i,"PMIW_KDC") );
        		this.ds_lgqtTrFeePmiw.setColumn(nRow1, "CHG_SQNO", this.ds_lgqtTrFeePmiw.getDeletedColumn(i,"CHG_SQNO") );
        		this.ds_lgqtTrFeePmiw.setColumn(nRow1, "ISCHECKED", "Y" );

        		this.ds_lgqtTrFeePmiw.set_updatecontrol(false);
        		this.ds_lgqtTrFeePmiw.setRowType(nRow1, Dataset.ROWTYPE_UPDATE);
        		this.ds_lgqtTrFeePmiw.set_updatecontrol(true);
        	}

        	for (var i = 0; i < this.ds_dlvgCompEmpDspcPmiw.getDeletedRowCount(); i++) {
        		var nRow1 = this.ds_dlvgCompEmpDspcPmiw.addRow();

        		this.ds_dlvgCompEmpDspcPmiw.setColumn(nRow1, "ELT_CTRW_NO", this.ds_dlvgCompEmpDspcPmiw.getDeletedColumn(i,"ELT_CTRW_NO") );
        		this.ds_dlvgCompEmpDspcPmiw.setColumn(nRow1, "PMIW_KDC", this.ds_dlvgCompEmpDspcPmiw.getDeletedColumn(i,"PMIW_KDC") );
        		this.ds_dlvgCompEmpDspcPmiw.setColumn(nRow1, "CHG_SQNO", this.ds_dlvgCompEmpDspcPmiw.getDeletedColumn(i,"CHG_SQNO") );
        		this.ds_dlvgCompEmpDspcPmiw.setColumn(nRow1, "ISCHECKED", "Y" );

        		this.ds_dlvgCompEmpDspcPmiw.set_updatecontrol(false);
        		this.ds_dlvgCompEmpDspcPmiw.setRowType(nRow1, Dataset.ROWTYPE_UPDATE);
        		this.ds_dlvgCompEmpDspcPmiw.set_updatecontrol(true);
        	}

        	for (var i = 0; i < this.ds_dspcPerWrkPrdPmiw.getDeletedRowCount(); i++) {
        		trace("getDeletedRowCount  ==>>   " + i);

        		var nRow1 = this.ds_dspcPerWrkPrdPmiw.addRow();

        		this.ds_dspcPerWrkPrdPmiw.setColumn(nRow1, "ELT_CTRW_NO", this.ds_dspcPerWrkPrdPmiw.getDeletedColumn(i,"ELT_CTRW_NO"));
        		this.ds_dspcPerWrkPrdPmiw.setColumn(nRow1, "PMIW_KDC", this.ds_dspcPerWrkPrdPmiw.getDeletedColumn(i,"PMIW_KDC"));
        		this.ds_dspcPerWrkPrdPmiw.setColumn(nRow1, "CHG_SQNO", this.ds_dspcPerWrkPrdPmiw.getDeletedColumn(i,"CHG_SQNO"));
        		this.ds_dspcPerWrkPrdPmiw.setColumn(nRow1, "ISCHECKED", "Y");

        		this.ds_dspcPerWrkPrdPmiw.set_updatecontrol(false);
        		this.ds_dspcPerWrkPrdPmiw.setRowType(nRow1, Dataset.ROWTYPE_UPDATE);
        		this.ds_dspcPerWrkPrdPmiw.set_updatecontrol(true);
        	}

        	//특약서
        	if (this.chk_sctrw.value == 1 && validationCheck) {
        		if(this.div_sctrw.chk_sctrw01.value == 1 && validationCheck) {
        			validationCheck = this.div_sctrw01.fn_validationCheck();
        		}

        		if(this.div_sctrw.chk_sctrw15.value == 1 && validationCheck) {
        			validationCheck = this.div_sctrw15.fn_validationCheck();
        		}

        		if(this.div_sctrw.chk_sctrw16.value == 1 && validationCheck) {
        			validationCheck = this.div_sctrw16.fn_validationCheck();
        		}
        	}

        	for (var i = 0; i < this.ds_sctrwDtl.getDeletedRowCount(); i++) {
        		var nRowSctrwDtl = this.ds_sctrwDtl.addRow();

        		this.ds_sctrwDtl.setColumn(nRowSctrwDtl, "ELT_CTRW_NO", this.ds_sctrwDtl.getDeletedColumn(i,"ELT_CTRW_NO"));
        		this.ds_sctrwDtl.setColumn(nRowSctrwDtl, "SCTRW_KDC", this.ds_sctrwDtl.getDeletedColumn(i,"SCTRW_KDC"));
        		this.ds_sctrwDtl.setColumn(nRowSctrwDtl, "CHG_SQNO", this.ds_sctrwDtl.getDeletedColumn(i,"CHG_SQNO"));
        		this.ds_sctrwDtl.setColumn(nRowSctrwDtl, "ISCHECKED", "Y");

        		this.ds_sctrwDtl.set_updatecontrol(false);
        		this.ds_sctrwDtl.setRowType(nRowSctrwDtl, Dataset.ROWTYPE_UPDATE);
        		this.ds_sctrwDtl.set_updatecontrol(true);
        	}

        	for (var i = 0; i < this.ds_sctrwNmlMrgnRt.getDeletedRowCount(); i++) {
        		var nRow1 = this.ds_sctrwNmlMrgnRt.addRow();

        		this.ds_sctrwNmlMrgnRt.setColumn(nRow1, "ELT_CTRW_NO", this.ds_sctrwNmlMrgnRt.getDeletedColumn(i,"ELT_CTRW_NO"));
        		this.ds_sctrwNmlMrgnRt.setColumn(nRow1, "SCTRW_KDC", this.ds_sctrwNmlMrgnRt.getDeletedColumn(i,"SCTRW_KDC"));
        		this.ds_sctrwNmlMrgnRt.setColumn(nRow1, "SQNO", this.ds_sctrwNmlMrgnRt.getDeletedColumn(i,"SQNO"));
        		this.ds_sctrwNmlMrgnRt.setColumn(nRow1, "CHG_SQNO", this.ds_sctrwNmlMrgnRt.getDeletedColumn(i,"CHG_SQNO"));
        		this.ds_sctrwNmlMrgnRt.setColumn(nRow1, "ISCHECKED", "Y");

        		this.ds_sctrwNmlMrgnRt.set_updatecontrol(false);
        		this.ds_sctrwNmlMrgnRt.setRowType(nRow1, Dataset.ROWTYPE_UPDATE);
        		this.ds_sctrwNmlMrgnRt.set_updatecontrol(true);
        	}

        	for (var i = 0; i < this.ds_sctrwCtrMrgnRt.getDeletedRowCount(); i++) {
        		var nRow2 = this.ds_sctrwCtrMrgnRt.addRow();

        		this.ds_sctrwCtrMrgnRt.setColumn(nRow2, "ELT_CTRW_NO", this.ds_sctrwCtrMrgnRt.getDeletedColumn(i,"ELT_CTRW_NO"));
        		this.ds_sctrwCtrMrgnRt.setColumn(nRow2, "SCTRW_KDC", this.ds_sctrwCtrMrgnRt.getDeletedColumn(i,"SCTRW_KDC"));
        		this.ds_sctrwCtrMrgnRt.setColumn(nRow2, "SQNO", this.ds_sctrwCtrMrgnRt.getDeletedColumn(i,"SQNO"));
        		this.ds_sctrwCtrMrgnRt.setColumn(nRow2, "CHG_SQNO", this.ds_sctrwCtrMrgnRt.getDeletedColumn(i,"CHG_SQNO"));
        		this.ds_sctrwCtrMrgnRt.setColumn(nRow2, "STORNM1", this.ds_sctrwCtrMrgnRt.getDeletedColumn(i,"STORNM1"));
        		this.ds_sctrwCtrMrgnRt.setColumn(nRow2, "ISCHECKED", "Y");

        		this.ds_sctrwCtrMrgnRt.set_updatecontrol(false);
        		this.ds_sctrwCtrMrgnRt.setRowType(nRow2, Dataset.ROWTYPE_UPDATE);
        		this.ds_sctrwCtrMrgnRt.set_updatecontrol(true);
        	}

        	for (var i = 0; i < this.ds_sctrwAllXpcPmtnCst.getDeletedRowCount(); i++) {
        		var nRowSctrwAllXpcPmtnCst= this.ds_sctrwAllXpcPmtnCst.addRow();

        		this.ds_sctrwAllXpcPmtnCst.setColumn(nRowSctrwAllXpcPmtnCst, "ELT_CTRW_NO", this.ds_sctrwAllXpcPmtnCst.getDeletedColumn(i,"ELT_CTRW_NO"));
        		this.ds_sctrwAllXpcPmtnCst.setColumn(nRowSctrwAllXpcPmtnCst, "SCTRW_KDC", this.ds_sctrwAllXpcPmtnCst.getDeletedColumn(i,"SCTRW_KDC"));
        		this.ds_sctrwAllXpcPmtnCst.setColumn(nRowSctrwAllXpcPmtnCst, "SQNO", this.ds_sctrwAllXpcPmtnCst.getDeletedColumn(i,"SQNO"));
        		this.ds_sctrwAllXpcPmtnCst.setColumn(nRowSctrwAllXpcPmtnCst, "CHG_SQNO", this.ds_sctrwAllXpcPmtnCst.getDeletedColumn(i,"CHG_SQNO"));
        		this.ds_sctrwAllXpcPmtnCst.setColumn(nRowSctrwAllXpcPmtnCst, "ISCHECKED", "Y");

        		this.ds_sctrwAllXpcPmtnCst.set_updatecontrol(false);
        		this.ds_sctrwAllXpcPmtnCst.setRowType(nRowSctrwAllXpcPmtnCst, Dataset.ROWTYPE_UPDATE);
        		this.ds_sctrwAllXpcPmtnCst.set_updatecontrol(true);
        	}

        	//trace("ds_etcEltCtrw  22" + this.ds_etcEltCtrw.saveXML());

        	//기타 계약서
        	if (this.chk_etcCtrw.value == 1 && validationCheck) {
        		if (this.div_etcCtrw.chk_etcCtrw01.value == 1) {
        			validationCheck = this.div_etcCtrw01.fn_validationCheck();
        		}
        	}

        	for (var i = 0 ; i < this.ds_etcEltCtrw.getDeletedRowCount(); i++) {
        		var nRowEtcEltCtrw = this.ds_etcEltCtrw.addRow();

        		this.ds_etcEltCtrw.setColumn(nRowEtcEltCtrw, "ELT_CTRW_NO", this.ds_etcEltCtrw.getDeletedColumn(i,"ELT_CTRW_NO"));
        		this.ds_etcEltCtrw.setColumn(nRowEtcEltCtrw, "ETC_CTRW_KDC", this.ds_etcEltCtrw.getDeletedColumn(i,"ETC_CTRW_KDC"));
        		this.ds_etcEltCtrw.setColumn(nRowEtcEltCtrw, "CTRW_STY_VER", this.ds_etcEltCtrw.getDeletedColumn(i,"CTRW_STY_VER"));
        		this.ds_etcEltCtrw.setColumn(nRowEtcEltCtrw, "CHG_SQNO", this.ds_etcEltCtrw.getDeletedColumn(i,"CHG_SQNO"));
        		this.ds_etcEltCtrw.setColumn(nRowEtcEltCtrw, "ISCHECKED", "Y");

        		this.ds_etcEltCtrw.set_updatecontrol(false);
        		this.ds_etcEltCtrw.setRowType(nRowEtcEltCtrw, Dataset.ROWTYPE_UPDATE);
        		this.ds_etcEltCtrw.set_updatecontrol(true);
        	}
        	
        	var sDataSet =	"ds_register=ds_register:A" ;
        	sDataSet += " ds_eltCtrwDtl=ds_eltCtrwDtl:A" ;
        	
        	// 부가 계약서
        	sDataSet += " ds_addEltCtrwDtl=ds_addEltCtrwDtl:A" ;
        	
        	// 약정서
        	sDataSet += " ds_pmiwDtl=ds_pmiwDtl:A" ;
        	sDataSet += " ds_evtAmPmiw=ds_evtAmPmiw:A" ;
        	sDataSet += " ds_lgqtTrFeePmiw=ds_lgqtTrFeePmiw:A" ;

        	sDataSet += " ds_dlvgCompEmpDspcPmiw=ds_dlvgCompEmpDspcPmiw:A" ;
        	sDataSet += " ds_dspcPerWrkPrdPmiw=ds_dspcPerWrkPrdPmiw:A" ;

        	// 특약서
        	sDataSet += " ds_sctrwDtl=ds_sctrwDtl:A" ;
        	sDataSet += " ds_sctrwNmlMrgnRt=ds_sctrwNmlMrgnRt:A" ;
        	sDataSet += " ds_sctrwCtrMrgnRt=ds_sctrwCtrMrgnRt:A" ;
        	sDataSet += " ds_sctrwAllXpcPmtnCst=ds_sctrwAllXpcPmtnCst:A" ;
        	
        	// 기타 계약서
        	sDataSet += " ds_etcEltCtrw=ds_etcEltCtrw:A" ;
        	sDataSet += " ds_fyn=ds_fyn" ;

        	// 계약서 수정 사항 보는 함수 로그
        	// this.fn_log();
        	// trace("ds_etcEltCtrw 333 " + this.ds_dlvgCompEmpDspcPmiw.saveXML());
        	// trace("fn_log 333 " + this.fn_log() );

        	var ctrwMod = "";
        	if (fv_CtrwChg == 2) {
        		if (!this.gfn_isNull(this.div_ctrwModCntn.txa_ctrwModCntn.value)) {
        			ctrwModCntn =this.div_ctrwModCntn.txa_ctrwModCntn.value;
        		}
        	}

        	var sParams = "CtrwChg="+fv_CtrwChg + " CTRW_MOD_CNTN="+ctrwModCntn;
        	//trace( "sParams =>  "  + sParams);
        	
        	if (validationCheck) {
        		var sSvcID        = "update";
        		var sURL          = "svc::rest/ct/eltctrw/saveAnwEltCtrwDrup";
        		var sInDatasets   = sDataSet ;
        		var sOutDatasets  = "";
        		var sArgument     = sParams;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회

        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        
        /* Validation Check */
        this.fn_validationCheck = function(){
        	var gln_Code = this.edt_naTrplC.value;

        	if (this.gfn_isNull(gln_Code)) {
        		this.alert("계약자 GLN 코드를 입력하세요. ");
        		return false;
        	}

        	// 부가 계약서 일때만 법인등록번호 및 주민번호 체크
        	if (this.chk_addCtrw.value == 1) {
        		if (this.div_addCtrw.chk_addCtrw01.value == "0" && this.div_addCtrw.chk_addCtrw04.value == "0" && this.div_addCtrw.chk_addCtrw05.value == "0") {
        			this.alert("부가 계약서를 선택하여 주세요. ");
        			this.div_addCtrw.chk_addCtrw01.setFocus();
        			return false;
        		}
        	}

        	// 약정서
        	if (this.chk_pmiw.value == 1) {
        		if (this.div_pmiw.chk_pmiw07.value == "0") {
        			this.alert("약정서를 선택하여 주세요.");
        			this.div_pmiw.chk_pmiw01.setFocus();
        			return false;
        		}
        	}
        	
        	// 특약서
        	if (this.chk_sctrw.value == 1) {
        		if(this.div_sctrw.chk_sctrw01.value == "0" && this.div_sctrw.chk_sctrw15.value == "0" && this.div_sctrw.chk_sctrw16.value == "0") {
        			this.alert("특약서를 선택하여 주세요. ");
        			this.div_sctrw.chk_sctrw01.setFocus();
        			return false;
        		}
        	}

        	// 기타계약서
        	if (this.chk_etcCtrw.value == 1) {
        		if (this.div_etcCtrw.chk_etcCtrw01.value == "0" && this.div_etcCtrw.chk_etcCtrw02.value == "0") {
        			this.alert("기타 계약서를 선택하여 주세요.");
        			this.div_etcCtrw.chk_etcCtrw01.setFocus();
        			return false;
        		}
        	}

        	if (this.gfn_isNull(this.edt_ctrChrr.value)) {
        		this.edt_ctrChrr.setFocus();
        		this.alert('업체 담당자 이름을 입력 하세요.');
        		return false;
        	}

        	if (this.gfn_isNull(this.cbo_hp.value)) {
        		this.cbo_hp.setFocus();
        		this.alert('업체 담당자 휴대전화서비스번호 값을 선택 하세요.');
        		return false;
        	}
        	if (this.gfn_isNull(this.edt_hp01.value)) {
        		this.edt_hp01.setFocus();
        		this.alert('업체 담당자 휴대전화국번호 값을 입력 하세요.');
        		return false;
        	}
        	if (this.gfn_isNull(this.edt_hp02.value)) {
        		this.edt_hp02.setFocus();
        		this.alert('업체 담당자 휴대전화일련번호 값을 입력 하세요.');
        		return false;
        	}
        	if (this.gfn_isNull(this.edt_email.value)) {
        		this.edt_email.setFocus();
        		this.alert('업체 담당자 Email 값을 입력 하세요.');
        		return false;
        	} else if (!this.gfn_checkEmail(this.edt_email.value)) {
        		this.edt_email.setFocus();
        		this.alert('업체 담당자  정확한 Email 값을 입력 하세요.');
        		return false;
        	}

        	if (this.gfn_isNull(this.edt_ctrChrrRepmn.value)) {
        		this.edt_ctrChrrRepmn.setFocus();
        		this.alert('사업장 정보 법인 대표자 직책명을  입력 하세요.');
        		return false;
        	}

        	if (this.gfn_isNull(this.edt_laAgnt.value) && application.gv_userTPC == "02") {
        		this.edt_laAgnt.setFocus();
        		this.alert('사업장 정보 법률상 대리인을  입력 하세요.');
        		return false;
        	}
        	if (this.gfn_isNull(this.edt_ctrChrrRepDtyNm.value)  && application.gv_userTPC == "02") {
        		this.edt_ctrChrrRepDtyNm.setFocus();
        		this.alert('사업장 정보 법률상 대리 직책명을 입력 하세요.');
        		return false;
        	}
        	if (this.gfn_isNull(this.edt_ctrChrrRepmn.value)) {
        		this.edt_ctrChrrRepmn.setFocus();
        		this.alert('사업장 정보 법인 대표자를  입력 하세요.');
        		return false;
        	}
        	if (this.gfn_isNull(this.edt_ctrChrrMtalnm.value)) {
        		this.edt_ctrChrrMtalnm.setFocus();
        		this.alert('사업장 정보 법인명을 입력 하세요.');
        		return false;
        	}

        	if (this.chk_addCtrw.value == 0) {
        		this.ds_addEltCtrwDtl.deleteAll();
        	}
        	if (this.chk_pmiw.value == 0 ) {
        		this.ds_pmiwDtl.deleteAll();
        		this.ds_lgqtTrFeePmiw.deleteAll();
        		this.ds_evtAmPmiw.deleteAll();
        	}
        	if (this.chk_sctrw.value == 0) {
        		this.ds_sctrwDtl.deleteAll();
        	}
        	if (this.chk_etcCtrw.value == 0) {
        		this.ds_etcEltCtrw.deleteAll();
        	}
        	return true;
        }

        //callback메소드
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "search") {
        			if (this.ds_register.rowcount == 0) {
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        		} else if (svcID == "initsearch") {
        			if (this.ds_register.rowcount == 0) {
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        		} else if (svcID == "insert") {
        			this.gfn_getMessage("alert", "result.message.save.success");
        			this.fn_close();
        		} else if (svcID == "insertTemp") {
        			// 미리보기(임시저장)
        			//this.gfn_getMessage("alert", "result.message.save.success");
        			//this.fn_close();
        			if (this.ds_temp.getRowCount() > 0) {
        				var eltCtrwNo =  this.ds_temp.getColumn(0, "ELT_CTRW_NO");
        				var chgSqNo =    "001";

        				var ozParam = {
        					sId: 'OMG_DS_SC_3113',
        					sUrl: '/rest/oz/ct/eltctrw/osEltctrw121',
        					paramType: 'param',
        					sParam: {ELT_CTRW_NO:eltCtrwNo, CHG_SQNO:chgSqNo, TEMP_YN:"Y"}
        				};
        				this.ozViewer(ozParam ,"ozViewerPotal");
        			}
        		} else if (svcID == "update") {
        			//trace("update");
        			this.gfn_getMessage("alert", "result.message.save.success");
        			this.fn_close();
        		} else if (svcID == "codeLoad") {
        			this.ds_buyerCode.insertRow(0);
        			this.ds_buyerCode.setColumn(0,"SIMP_C","");
        			this.ds_buyerCode.setColumn(0,"SIMP_CNM","=========선택=========");
        			this.cbo_mnCtrwKdM2.set_index(0);
        		} else if (svcID == "getDS") {
        			if (this.ds_register.rowcount == 0) {
        				this.gfn_getMessage("alert", "result.message.getDS.no.exist.data");
        			}
        		} else if(svcID == "branchCheck") {
        		
                     // alert(this.ds_authBranch.getColumn(0, "AUTH_CHECK"));
                    
                    /*
                     *  직매장 직원인 경우 
                     */
        			if (this.ds_authBranch.getColumn(0, "AUTH_CHECK") == "Y") {
        				 // alert('직매장 -> ' + this.ds_authBranch.getColumn(0, "AUTH_CHECK"));
        				 this.btn_save.set_visible(true);
        			} else {
        			    this.btn_save.set_visible(false);
        			
        			}
        			
        		} else {
        		    // 

        		} // if -- svcID
        		
        	} // ErrorCode >= 0

        	if (svcID == "initsearch") {
        		var toDay = this.gfn_today("yyyyMMdd");
        		var toEndDay =  this.gfn_today("yyyy") + '1231';
        		this.gfn_today('yyyy')+'0101'
        //		this.cal_ctrStDt.set_value(this.gfn_today('yyyy')+'0101');
        //		this.cal_ctrEdDt.set_value(toEndDay);
        		this.cal_ctrwDrup_Dt.set_value(toDay);
        		//계약기간 2019년으로 하드코딩 추후 수정
        		this.cal_ctrStDt.set_value('20190101');
        		this.cal_ctrEdDt.set_value('20191231');

        		if (application.gv_glnCode  == "8808983000015" ) {
        			this.edt_ctrChrrMtalnm.set_value("(주)농협하나로유통");  //법인명
        			this.edt_ctrChrrRepmn.set_value("김 성 광");   // 법인대표자명
        			this.edt_ctrChrrRepDtyNm.set_value("대표 이사");  // 법인 대표자 직책명
        			this.edt_laAgnt.set_value("임 관 빈");           //법률상 대리인
        			this.edt_laAgntDtyNm.set_value("상품본부장");      //법률상 대리 직책명
        		} else if ( application.gv_glnCode  == "8808983410142") {
        			this.edt_ctrChrrMtalnm.set_value("(주)농협유통 ");  //법인명
        			this.edt_ctrChrrRepmn.set_value("김 병 문");   // 법인대표자명
        			this.edt_ctrChrrRepDtyNm.set_value("대표 이사");  // 법인 대표자 직책명
        			this.edt_laAgnt.set_value("");           //법률상 대리인
        			this.edt_laAgntDtyNm.set_value(""); //법률상 대리 직책명
        		} else {
        			this.edt_ctrChrrMtalnm.set_value("(주)농협하나로유통");  //법인명
        			this.edt_ctrChrrRepmn.set_value("김 성 광");   // 법인대표자명
        			this.edt_ctrChrrRepDtyNm.set_value("대표 이사");  // 법인 대표자 직책명
        			this.edt_laAgnt.set_value("임 관 빈");           //법률상 대리인
        			this.edt_laAgntDtyNm.set_value("상품본부장");      //법률상 대리 직책명
        		}

        		if (this.ds_register.getColumn(0,"TELNO") != undefined) {
        			this.fn_telNo(this.ds_register.getColumn(0,"TELNO"), this.cbo_atel , this.edt_htel , this.edt_stel);
        		}
        		if (this.ds_register.getColumn(0,"MPNO") != undefined) {
        			this.fn_telNo(this.ds_register.getColumn(0,"MPNO"), this.cbo_hp , this.edt_hp01 , this.edt_hp02);
        		}
        		if (this.ds_register.getColumn(0,"BUYER_TELNO") != undefined) {
        			this.fn_telNo(this.ds_register.getColumn(0,"BUYER_TELNO"), this.cbo_buyerAtel , this.edt_buyerHtel , this.edt_buyerStel);
        		}
        		if (this.ds_register.getColumn(0,"BUYER_MPNO") != undefined) {
        			this.fn_telNo(this.ds_register.getColumn(0,"BUYER_MPNO"), this.cbo_buyerHp , this.edt_buyerHp01 , this.edt_buyerHp02);
        		}
        		
        // 		this.div_mnCtrwKd.rdo_mnCtrwKdC.set_value("121") ;
        // 		this.div_mnCtrwKd21.set_url("OMG.CT::OMG_DS_SC_311301.xfdl");
        // 		this.div_mnCtrwKd21.set_visible(true);
        // 		this.cbo_mnCtrwKdM.set_value(1) ;
        // 		this.btn_preview.set_visible(true);
        		this.ds_eltCtrwDtl.addRow();
        		this.position_chk();
        	 } else if(svcID == "search") {
        		// trace(this.ds_eltCtrwDtl.saveXML());
        		if (this.ds_register.getColumn(0,"TELNO") != undefined) {
        			this.fn_telNo(this.ds_register.getColumn(0,"TELNO"), this.cbo_atel , this.edt_htel , this.edt_stel);
        		}
        		if (this.ds_register.getColumn(0,"MPNO") != undefined) {
        			this.fn_telNo(this.ds_register.getColumn(0,"MPNO"), this.cbo_hp , this.edt_hp01 , this.edt_hp02);
        		}
        		if (this.ds_register.getColumn(0,"BUYER_TELNO") != undefined) {
        			this.fn_telNo(this.ds_register.getColumn(0,"BUYER_TELNO"), this.cbo_buyerAtel , this.edt_buyerHtel , this.edt_buyerStel);
        		}
        		if (this.ds_register.getColumn(0,"BUYER_MPNO") != undefined) {
        			this.fn_telNo(this.ds_register.getColumn(0,"BUYER_MPNO"), this.cbo_buyerHp , this.edt_buyerHp01 , this.edt_buyerHp02);
        		}
        		
        		this.cbo_mnCtrwKdM.set_readonly(true);

        		if (fv_ctrwChgObjChk == 0) {
        			this.div_mnCtrwKd.rdo_mnCtrwKdC.set_value("121") ;
        			this.div_mnCtrwKd21.set_url("OMG.CT::OMG_DS_SC_311301.xfdl");
        			this.div_mnCtrwKd21.set_visible(true);
        			this.cbo_mnCtrwKdM.set_value(1) ;

        			this.position_chk();
        		//	this.div_mnCtrwKd01.setFocus( true );
        		} else {
        			//  alert("작업시작");
        			this.Static82.set_visible(false);  // 바이어구분
        			this.cbo_mnCtrwKdM2.set_visible(false);

        			this.chk_addCtrw.set_enable(true);
        			this.chk_pmiw.set_enable(true);
        			this.chk_sctrw.set_enable(true);
        			this.chk_etcCtrw.set_enable(true);

        			var mainValue = this.ds_register.getColumn(0,'MN_CTRW_KD');
        	//		alert(this.ds_eltCtrwDtl.getColumn(0,'MN_CTRW_KDC'));
        			this.div_mnCtrwKd.rdo_mnCtrwKdC.set_value(this.ds_eltCtrwDtl.getColumn(0,'MN_CTRW_KDC'));

        			//메인계약서 상세
        			this.fn_mnCtrwKd();

        			//부가 계약서
        			if (this.ds_addEltCtrwDtl.rowcount > 0) {
        				for (var i = 0 ; i < this.ds_addEltCtrwDtl.rowcount; i++) {
        					if (this.ds_addEltCtrwDtl.getColumn(i, "ADD_CTRW_KDC") =="201") {
        						this.fn_addCtrwKd();
        						this.div_addCtrw.chk_addCtrw01.set_value(1);
        						this.fn_addCtrw01();
        					}
        					if (this.ds_addEltCtrwDtl.getColumn(i, "ADD_CTRW_KDC") =="204") {
        						this.fn_addCtrwKd();
        						this.div_addCtrw.chk_addCtrw04.set_value(1);
        						this.fn_addCtrw04();
        					}
        					if (this.ds_addEltCtrwDtl.getColumn(i, "ADD_CTRW_KDC") =="205") {
        						this.fn_addCtrwKd();
        						this.div_addCtrw.chk_addCtrw05.set_value(1);
        						this.fn_addCtrw05();
        					}
        				}
        			}

        			//약정서
        			if (this.ds_pmiwDtl.rowcount > 0) {
        			   for(var i = 0 ; i < this.ds_pmiwDtl.rowcount; i++){
        					if(this.ds_pmiwDtl.getColumn(i, "PMIW_KDC") =="301"){
        						this.fn_pmiwKd();
        						this.div_pmiw.chk_pmiw01.set_value(1);
        						this.fn_pmiw01();
        					}
        					if (this.ds_pmiwDtl.getColumn(i, "PMIW_KDC") =="302") {
        						this.fn_pmiwKd();
        						this.div_pmiw.chk_pmiw02.set_value(1);
        						this.fn_pmiw02();
        					}
        					if (this.ds_pmiwDtl.getColumn(i, "PMIW_KDC") =="303") {
        						this.fn_pmiwKd();
        						this.div_pmiw.chk_pmiw03.set_value(1);
        						this.fn_pmiw03();
        					}
        					if (this.ds_pmiwDtl.getColumn(i, "PMIW_KDC") =="304") {
        						this.fn_pmiwKd();
        						this.div_pmiw.chk_pmiw04.set_value(1);
        						this.fn_pmiw04();
        					}
        					if (this.ds_pmiwDtl.getColumn(i, "PMIW_KDC") =="305") {
        						this.fn_pmiwKd();
        						this.div_pmiw.chk_pmiw05.set_value(1);
        						this.fn_pmiw05();
        					}
        					if (this.ds_pmiwDtl.getColumn(i, "PMIW_KDC") =="306") {
        						this.fn_pmiwKd();
        						this.div_pmiw.chk_pmiw06.set_value(1);
        					//	this.fn_pmiw06();
        					}

        					if (this.ds_pmiwDtl.getColumn(i, "PMIW_KDC") =="307") {
        						this.fn_pmiwKd();
        						this.div_pmiw.chk_pmiw07.set_value(1);
        					//	this.fn_pmiw06();
        					}
        				}
        			}

        			// 특약서
        			// alert("특약서 행 " + this.ds_sctrwDtl.rowcount);
        			if (this.ds_sctrwDtl.rowcount > 0) {
        			   for(var i = 0 ; i < this.ds_sctrwDtl.rowcount; i++){
        					if (this.ds_sctrwDtl.getColumn(i, "SCTRW_KDC") =="401") {
        						this.fn_sctrwKd();
        						this.div_sctrw.chk_sctrw01.set_value(1);
        						this.fn_sctrw01();
        					}

        					if (this.ds_sctrwDtl.getColumn(i, "SCTRW_KDC") =="415") {
        						this.fn_sctrwKd();
        						this.div_sctrw.chk_sctrw15.set_value(1);
        						this.fn_sctrw15();
        					}

        					if (this.ds_sctrwDtl.getColumn(i, "SCTRW_KDC") =="416") {
        						this.fn_sctrwKd();
        						this.div_sctrw.chk_sctrw16.set_value(1);
        						this.fn_sctrw15();
        					}
        				}
        			}

        			if (this.ds_etcEltCtrw.rowcount > 0) {
        				for (var i = 0 ; i < this.ds_etcEltCtrw.rowcount; i++) {
        					if (this.ds_etcEltCtrw.getColumn(i, "ETC_CTRW_KDC") =="501") {
        						this.fn_etcCtrwKd();
        						this.div_etcCtrw.chk_etcCtrw01.set_value(1);
        						this.fn_etcCtrw01();
        					}

        					if (this.ds_etcEltCtrw.getColumn(i, "ETC_CTRW_KDC") =="502") {
        						this.fn_etcCtrwKd();
        						this.div_etcCtrw.chk_etcCtrw02.set_value(1);
        						this.fn_etcCtrw02();
        					}
        				}
        			}
        		}
        	}
        }

        //메인 계약서 초기화
        this.cbo_mnCtrwKdM_onitemchanged = function(obj,e)
        {
        	/*
        	 *  메인계약서 종류: MG_COMN_C_AMN 공통코드

        		MN_CTRW_KDC	101	물품구매(대행)공급계약서
        		MN_CTRW_KDC	102	물류센터 이용계약서(일반)  -- 삭제
        		MN_CTRW_KDC	103	물류센터 이용계약서(주류)  -- 삭제
        		MN_CTRW_KDC	104	특약매입 거래계약서
        		MN_CTRW_KDC	105	특약매입( ) 거래계약서
        		MN_CTRW_KDC	106	직매입_거래계약서(농협유통_수산)
        		MN_CTRW_KDC	107	직매입_거래계약서(농협유통_표준)
        		MN_CTRW_KDC	108	특약매입_거래계약서(농협유통_수산)  -- 삭제
        		MN_CTRW_KDC	109	특약매입_거래계약서(농협유통_표준)
        		MN_CTRW_KDC	110	직매입_거래계약서(농협유통_축산)   -- 삭제
        		MN_CTRW_KDC	111	특약매입_거래계약서(농협유통_축산) -- 삭제
        		MN_CTRW_KDC	112	선행물류센터 이용계약서

        		MN_CTRW_KDC	121	임대차 거래계약서(농산)
        	 *
        	 */

        	mainValue = this.cbo_mnCtrwKdM.value;	//메인계약서 선택

        	trace("mainValue  " + mainValue);

        //	alert("저장할 값 mainValue : "+ mainValue);
        	if (mainValue > 0) {
        		this.chk_addCtrw.set_enable(true);
        		this.chk_pmiw.set_enable(true);
        		this.chk_sctrw.set_enable(true);
        		this.chk_etcCtrw.set_enable(true);

        		this.ds_eltCtrwDtl.setColumn(0, "SCTR_SJT" , "");

        		if( mainValue == 1){
        			this.div_mnCtrwKd.rdo_mnCtrwKdC.set_value("101");  //MN_CTRW_KDC	101	물품구매(대행)공급계약서
        		}else if( mainValue == 4){
        			this.div_mnCtrwKd.rdo_mnCtrwKdC.set_value("104");  // MN_CTRW_KDC	104	특약매입 거래계약서
        		}else if(mainValue == 5){
        			this.div_mnCtrwKd.rdo_mnCtrwKdC.set_value("105");  // MN_CTRW_KDC	105	특약매입( ) 거래계약서
        		}else if(mainValue == 6){
        			this.div_mnCtrwKd.rdo_mnCtrwKdC.set_value("106");  // MN_CTRW_KDC	106	직매입_거래계약서(농협유통_수산)
        		}else if(mainValue == 7){
        			this.div_mnCtrwKd.rdo_mnCtrwKdC.set_value("107");
        		}else if(mainValue == 8){
        			this.div_mnCtrwKd.rdo_mnCtrwKdC.set_value("108");
        		}else if(mainValue == 9){
        			this.div_mnCtrwKd.rdo_mnCtrwKdC.set_value("109");
        		}else if(mainValue == 12){
        			this.div_mnCtrwKd.rdo_mnCtrwKdC.set_value("112"); // MN_CTRW_KDC	112	선행물류센터 이용계약서
        		}else if(mainValue == 21){
        			// alert(mainValue);
        			this.div_mnCtrwKd.rdo_mnCtrwKdC.set_value("121"); // 121	임대차 거래계약서
        			trace("rdo_mnCtrwKdC  " + this.div_mnCtrwKd.rdo_mnCtrwKdC.value);
        		}

        		// 메인계약서 종류에 따른 입력 양식 디스플레이
        		this.rdo_mnCtrwKd_onitemchanged();  // fn_mnCtrwKd() 콜
        	} else {
        		this.mnCtrwKd_init();
        		this.unCHK('all');
        	}
        }

        
         /*메인 계약서 div 초기화*/
        this.mnCtrwKd_init = function()
        {
        		this.div_mnCtrwKd01.set_url("");
        		this.div_mnCtrwKd04.set_url("");
        		this.div_mnCtrwKd05.set_url("");
        		this.div_mnCtrwKd07.set_url("");
        		this.div_mnCtrwKd09.set_url("");
        		this.div_mnCtrwKd12.set_url("");
        		this.div_mnCtrwKd21.set_url("");

        		this.div_mnCtrwKd01.set_visible(false);
        		this.div_mnCtrwKd04.set_visible(false);
        		this.div_mnCtrwKd05.set_visible(false);
        		this.div_mnCtrwKd07.set_visible(false);
        		this.div_mnCtrwKd09.set_visible(false);
        		this.div_mnCtrwKd12.set_visible(false);
        		this.div_mnCtrwKd21.set_visible(false);

        		this.btn_preview.set_visible(false);
        }

        //메인  계약서
        this.rdo_mnCtrwKd_onitemchanged = function(obj,e)
        {
        	// alert('rdo_mnCtrwKd_onitemchanged');
        	if (this.ds_eltCtrwDtl.rowcount >0) {
        		this.ds_eltCtrwDtl.setColumn(0, "CTRW_STY_VER", "");
        	}

        	// 메인계약서 종류에 따른 입력 양식 디스플레이
        	this.fn_mnCtrwKd();
        }

        /*
         *  메인계약서 종류에 따른 입력 양식 디스플레이
         *
         */
        this.fn_mnCtrwKd = function(){
        	// 여기 cbo_mnCtrwKdM.set_value(101) 셋벨류 값이 mn ctrw kd 값임
        	trace("fn_mnCtrwKd >> rdo_mnCtrwKdC " +  this.div_mnCtrwKd.rdo_mnCtrwKdC.value) ;
        	trace("this.ds_mnCtrwKdMC_Temp.saveXML  " +  this.ds_mnCtrwKdMC_Temp.saveXML()) ;

        	this.mnCtrwKd_init() ;
        	trace("rdo_mnCtrwKdC  초기화 후 " + this.div_mnCtrwKd.rdo_mnCtrwKdC.value);

        	//alert(this.div_mnCtrwKd.rdo_mnCtrwKdC.value);
        	if (this.div_mnCtrwKd.rdo_mnCtrwKdC.value  == "101") {
        		this.div_mnCtrwKd01.set_url("OMG.CT::OMG_DS_SC_211301.xfdl");
        		this.div_mnCtrwKd01.set_visible(true);
        		this.cbo_mnCtrwKdM.set_value(1);
        		//alert('현재값 : ' +this.cbo_mnCtrwKdM.value);
        		if(fv_ctrwChgObjChk == 0){
        			this.btn_preview.set_visible(true);
        		}
        		this.position_chk();
        		//	this.div_mnCtrwKd01.setFocus( true );
         	} else if (this.div_mnCtrwKd.rdo_mnCtrwKdC.value  == "104") {
        		this.div_mnCtrwKd04.set_url("OMG.CT::OMG_DS_SC_211304.xfdl");
        		this.div_mnCtrwKd04.set_visible(true);
        		this.cbo_mnCtrwKdM.set_value(4);
        		this.position_chk();
        	//	this.div_mnCtrwKd04.setFocus( true );
        	}else if (this.div_mnCtrwKd.rdo_mnCtrwKdC.value  == "105"){
        		this.div_mnCtrwKd05.set_url("OMG.CT::OMG_DS_SC_211305.xfdl");
        		this.div_mnCtrwKd05.set_visible(true);
        		this.cbo_mnCtrwKdM.set_value(5);
        		this.position_chk();
        	//	this.div_mnCtrwKd04.setFocus( true );
        	} else if (this.div_mnCtrwKd.rdo_mnCtrwKdC.value  == "107") {
        		this.div_mnCtrwKd07.set_url("OMG.CT::OMG_DS_SC_211307.xfdl");
        		this.div_mnCtrwKd07.set_visible(true);
        		this.cbo_mnCtrwKdM.set_value(7);
        		this.position_chk();
        	//	this.div_mnCtrwKd04.setFocus( true );
        	} else if (this.div_mnCtrwKd.rdo_mnCtrwKdC.value  == "109") {
        		this.div_mnCtrwKd09.set_url("OMG.CT::OMG_DS_SC_211309.xfdl");
        		this.div_mnCtrwKd09.set_visible(true);
        		this.cbo_mnCtrwKdM.set_value(9);
        		this.position_chk();
        	} else if (this.div_mnCtrwKd.rdo_mnCtrwKdC.value  == "112") {
        		this.div_mnCtrwKd12.set_url("OMG.CT::OMG_DS_SC_211314.xfdl"); //선행물류 계약서 14번
        		this.div_mnCtrwKd12.set_visible(true);
        		this.cbo_mnCtrwKdM.set_value(12);
        		this.position_chk();
        	} else if (this.div_mnCtrwKd.rdo_mnCtrwKdC.value  == "121") {
        		this.div_mnCtrwKd21.set_url("OMG.CT::OMG_DS_SC_311301.xfdl"); //임대차 계약서
        		this.div_mnCtrwKd21.set_visible(true);
        		this.cbo_mnCtrwKdM.set_value(21);    //
        		if(fv_ctrwChgObjChk == 0){
        			this.btn_preview.set_visible(true);
        		}
        		this.position_chk();
        	} else {
        		this.position_chk();
        	}
        	trace("rdo_mnCtrwKdC  최종  " + this.div_mnCtrwKd.rdo_mnCtrwKdC.value);
        }

        //메인 계약서 위치 체크
        this.position_chk = function()
        {
        	//sts_position  삭제하면 안돼 (계약서 기준 위치)

        	mnCtrwKd = nexacro.toNumber(this.sts_position.top)+nexacro.toNumber(this.sts_position.height) + 20 ;

        	if( this.gfn_isNull( this.div_mnCtrwKd.rdo_mnCtrwKdC.value)  == true){
        		this.div_mnCtrwKd01.set_top(mnCtrwKd);
        		mnCtrwKd = nexacro.toNumber(this.div_mnCtrwKd01.top)+nexacro.toNumber(this.div_mnCtrwKd01.height) + 20 ;
        	}

        	//trace("\n rdo_mnCtrwKdC " + this.div_mnCtrwKd.rdo_mnCtrwKdC.value + " - " + mnCtrwKd);
        	//trace("ctrw 101 position top " + mnCtrwKd);

            // 이값이 왜 다 101인지 알 수 없음 : 프로그램 오류
        	if(this.div_mnCtrwKd.rdo_mnCtrwKdC.value  == 101){
        		this.div_mnCtrwKd01.set_top(mnCtrwKd);
        		mnCtrwKd = nexacro.toNumber(this.div_mnCtrwKd01.top)+nexacro.toNumber(this.div_mnCtrwKd01.height) + 20 ;
        	}else if(this.div_mnCtrwKd.rdo_mnCtrwKdC.value  == 104){
        		this.div_mnCtrwKd04.set_top(mnCtrwKd);
        		mnCtrwKd = nexacro.toNumber(this.div_mnCtrwKd04.top)+nexacro.toNumber(this.div_mnCtrwKd04.height) +20 ;
        	}else if(this.div_mnCtrwKd.rdo_mnCtrwKdC.value  == 105){
        		this.div_mnCtrwKd05.set_top(mnCtrwKd);
        		mnCtrwKd = nexacro.toNumber(this.div_mnCtrwKd05.top)+nexacro.toNumber(this.div_mnCtrwKd05.height) +20 ;
        	}else if(this.div_mnCtrwKd.rdo_mnCtrwKdC.value  == 107){
        		this.div_mnCtrwKd07.set_top(mnCtrwKd);
        		mnCtrwKd = nexacro.toNumber(this.div_mnCtrwKd07.top)+nexacro.toNumber(this.div_mnCtrwKd07.height) +20 ;
        	}else if(this.div_mnCtrwKd.rdo_mnCtrwKdC.value  == 109){
        		this.div_mnCtrwKd09.set_top(mnCtrwKd);
        		mnCtrwKd = nexacro.toNumber(this.div_mnCtrwKd09.top)+nexacro.toNumber(this.div_mnCtrwKd09.height) +20 ;
        	}else if(this.div_mnCtrwKd.rdo_mnCtrwKdC.value  == 112){
        		this.div_mnCtrwKd12.set_top(mnCtrwKd);
        		mnCtrwKd = nexacro.toNumber(this.div_mnCtrwKd12.top)+nexacro.toNumber(this.div_mnCtrwKd12.height) +20 ;
        	}else if(this.div_mnCtrwKd.rdo_mnCtrwKdC.value  == 121){
        		// trace(this.div_mnCtrwKd.rdo_mnCtrwKdC.value + " - " + mnCtrwKd);
                dispOffset = 900*1; // 임대차 계약서 입력 항목 확장에 의한 높이 조정

        		this.div_mnCtrwKd21.set_top(mnCtrwKd);
        		this.div_mnCtrwKd21.set_height(1100); // 높이설정
        		// trace("height " + this.div_mnCtrwKd21.height);
                // this.div_mnCtrwKd21.set_left(0);
        		// this.div_mnCtrwKd01.set_top(712);
        		mnCtrwKd = nexacro.toNumber(this.div_mnCtrwKd21.top) + nexacro.toNumber(this.div_mnCtrwKd21.height) +20 ;
        	}
        	// 121 은
        	// 부가계약서 위치 보정
        	this.position_add_chk();
        }

        //부가 계약서
        this.chk_addCtrw_onchanged = function(obj,e)
        {
        	this.fn_addCtrwKd();
        }

        this.fn_addCtrwKd = function()
        {
        	buyerCD=this.cbo_mnCtrwKdM2.value;	//cd_m 값

        	if (this.chk_addCtrw.value == 1) {
        		this.div_addCtrw.set_visible(true);
        		this.fn_codeDSC(buyerCD,'ADD_CTRW_KDC');
        	} else {
        		this.div_addCtrw.chk_addCtrw01.set_value(0);
        		this.div_addCtrw.chk_addCtrw04.set_value(0);
        		this.div_addCtrw.chk_addCtrw05.set_value(0);

        		this.div_addCtrw.set_visible(false);
        		this.div_addCtrw01.set_url("");
        		this.div_addCtrw01.set_visible(false);

        		this.div_addCtrw04.set_url("");
        		this.div_addCtrw04.set_visible(false);
        		this.div_addCtrw05.set_url("");
        		this.div_addCtrw05.set_visible(false);
        		this.position_chk();

        	//	this.chk_pmiw.setFocus( true );
        	}
        }

        //약정서
        this.chk_pmiw_onchanged = function(obj,e)
        {
        	this.fn_pmiwKd();
        }

        this.fn_pmiwKd = function(){

        	buyerCD=this.cbo_mnCtrwKdM2.value;	//cd_m 값

        	if(this.chk_pmiw.value == 1){
        		this.div_pmiw.set_visible(true);
        		this.fn_codeDSC(buyerCD,'PMIW_KDC');

        	}else{
        		this.div_pmiw.chk_pmiw01.set_value(0);
        		this.div_pmiw.chk_pmiw02.set_value(0);
        		this.div_pmiw.chk_pmiw03.set_value(0);
        		this.div_pmiw.chk_pmiw05.set_value(0);
        		this.div_pmiw.chk_pmiw06.set_value(0);
        		this.div_pmiw.chk_pmiw07.set_value(0);

        
        		this.div_pmiw.set_visible(false);
        		this.div_pmiw01.set_url("");
        		this.div_pmiw01.set_visible(false);
        		this.div_pmiw02.set_url("");
        		this.div_pmiw02.set_visible(false);
        		this.div_pmiw03.set_url("");
        		this.div_pmiw03.set_visible(false);

        		this.div_pmiw05.set_url("");
        		this.div_pmiw05.set_visible(false);

        
        		this.div_pmiw07.set_url("");
        		this.div_pmiw07.set_visible(false);

        		this.position_chk();
        	}

        }

        //특약서
        this.chk_sctrw_onchanged = function(obj,e)
        {
        	this.fn_sctrwKd();
        }

        this.fn_sctrwKd = function(){

        // alert('특약서 위치 세팅');
        	buyerCD=this.cbo_mnCtrwKdM2.value;	//cd_m 값

        // alert('특약서 부분 buyerCD ' + buyerCD);

        	if(buyerCD > 0 && this.chk_sctrw.value == 1){// buyerCD가 존재할 때
        		this.fn_codeDSC(buyerCD,'SCTRW_KDC');
        	 }else{
        //		alert('특약서없음');
        	}

        	if(this.chk_sctrw.value == 1){
        		this.div_sctrw.set_visible(true);

        	}else{

        		this.div_sctrw.set_visible(false);
        	//	this.ds_sctrwDtl.deleteAll();
        		this.div_sctrw.chk_sctrw01.set_value(0);
        		this.div_sctrw.chk_sctrw15.set_value(0);
        		this.div_sctrw.chk_sctrw16.set_value(0);

        		this.div_sctrw15.set_url("");
        		this.div_sctrw15.set_visible(false);

        		this.div_sctrw16.set_url("");
        		this.div_sctrw16.set_visible(false);

        		this.position_chk();
        	}

        }

        

        //기타계약서
        this.chk_etcCtrw_onchanged = function(obj,e)
        {
        	this.fn_etcCtrwKd();
        }

        this.fn_etcCtrwKd = function(){

        	buyerCD=this.cbo_mnCtrwKdM2.value;	//cd_m 값

        	if(this.chk_etcCtrw.value == 1){
        		this.div_etcCtrw.set_visible(true);
        		this.fn_codeDSC(buyerCD,'ETC_CTRW_KDC');

        
        	}else{
        //		this.ds_etcEltCtrw.deleteAll();

        		this.div_etcCtrw.chk_etcCtrw01.set_value(0);
        		this.div_etcCtrw.chk_etcCtrw02.set_value(0);
        		this.div_etcCtrw.chk_etcCtrw03.set_value(0);
        		this.div_etcCtrw.set_visible(false);
        		this.div_etcCtrw01.set_url("");
        		this.div_etcCtrw01.set_visible(false);
        		this.div_etcCtrw02.set_url("");
        		this.div_etcCtrw02.set_visible(false);

        		this.position_chk();
        	}

        }

        this.fn_etcCtrwKd = function(){

        	if(this.chk_etcCtrw.value == 1){

        		this.div_etcCtrw.set_visible(true);

        		this.position_chk();

        		//this.div_etcCtrw.setFocus( true );

        	}else{

        		this.ds_etcEltCtrw.deleteAll();

        		this.div_etcCtrw.chk_etcCtrw01.set_value(0);
        		this.div_etcCtrw.chk_etcCtrw02.set_value(0);
        		this.div_etcCtrw.chk_etcCtrw03.set_value(0);
        		this.div_etcCtrw.set_visible(false);
        		this.div_etcCtrw01.set_url("");
        		this.div_etcCtrw01.set_visible(false);
        		this.div_etcCtrw02.set_url("");
        		this.div_etcCtrw02.set_visible(false);

        
        		this.position_chk();

        		//this.chk_etcCtrw.setFocus( true );

        	}
        }

        

        //부가 계약서 -> PB 상품공급 계약서
        this.chk_addCtrw01_onchanged = function(obj,e)
        {
        	this.fn_addCtrw01();
        }

        this.fn_addCtrw01 = function(){

        	if(this.div_addCtrw.chk_addCtrw01.value == 1)
        	{

        		this.div_addCtrw01.set_url("OMG.CT::OMG_DS_SC_211310.xfdl");
        		this.div_addCtrw01.set_visible(true);

        		this.position_chk();

        	//	this.div_addCtrw01.setFocus( true );

        	}else{

        		//dataset 삭제
        		var fv_position = 0;
        		fv_position = this.ds_addEltCtrwDtl.findRow("ADD_CTRW_KDC","201").toString(); //파일Row위치
        		this.ds_addEltCtrwDtl.deleteRow(fv_position);

        		this.div_addCtrw01.set_url("");
        		this.div_addCtrw01.set_visible(false);

        		this.position_chk();
        		//this.div_addCtrw.setFocus( true );

        	}

        }

        //물류센터 이용계약서 (일반)
        this.chk_addCtrw04_onchanged = function(obj,e)
        {
        	this.fn_addCtrw04();
        }

        this.fn_addCtrw04 = function(){

        	if(this.div_addCtrw.chk_addCtrw04.value == 1)
        	{

        		this.div_addCtrw04.set_url("OMG.CT::OMG_DS_SC_211302.xfdl");
        		this.div_addCtrw04.set_visible(true);

        		this.position_chk();

        	//	this.div_addCtrw01.setFocus( true );

        	}else{

        		//dataset 삭제
        		var fv_position = 0;
        		fv_position = this.ds_addEltCtrwDtl.findRow("ADD_CTRW_KDC","204").toString(); //파일Row위치
        		this.ds_addEltCtrwDtl.deleteRow(fv_position);

        		this.div_addCtrw04.set_url("");
        		this.div_addCtrw04.set_visible(false);

        		this.position_chk();
        		//this.div_addCtrw.setFocus( true );

        	}

        }

        //물류센터 이용계약서 (주류)

        this.chk_addCtrw05_onchanged = function(obj,e)
        {
        	this.fn_addCtrw05();
        }
        this.fn_addCtrw05 = function(){

        	if(this.div_addCtrw.chk_addCtrw05.value == 1)
        	{

        		this.div_addCtrw05.set_url("OMG.CT::OMG_DS_SC_211303.xfdl");
        		this.div_addCtrw05.set_visible(true);

        		this.position_chk();

        	//	this.div_addCtrw01.setFocus( true );

        	}else{

        		//dataset 삭제
        		var fv_position = 0;
        		fv_position = this.ds_addEltCtrwDtl.findRow("ADD_CTRW_KDC","205").toString(); //파일Row위치
        		this.ds_addEltCtrwDtl.deleteRow(fv_position);

        		this.div_addCtrw05.set_url("");
        		this.div_addCtrw05.set_visible(false);

        		this.position_chk();
        		//this.div_addCtrw.setFocus( true );

        	}

        }

        //약정서01 판매 장려금 약정서
        this.chk_pmiw01_onchanged = function(obj,e)
        {
        	this.fn_pmiw01();
        }

        this.fn_pmiw01 = function(){

        	if(this.div_pmiw.chk_pmiw01.value == 1)
        	{
        		this.div_pmiw01.set_url("OMG.CT::OMG_DS_SC_211320.xfdl");
        		this.div_pmiw01.set_visible(true);

        		this.position_chk();

        	//	this.div_pmiw01.setFocus( true );

        	}else{
        	//dataset 삭제
        		var fv_position = 0;
        		fv_position = this.ds_pmiwDtl.findRow("PMIW_KDC","301").toString(); //파일Row위치
        		this.ds_pmiwDtl.deleteRow(fv_position);

        		this.div_pmiw01.set_url("");
        		this.div_pmiw01.set_visible(false);

        		this.position_chk();

        	//	this.div_pmiw.setFocus( true );

        	}

        }

        //약정서02 ㅇㅇㅇ 행사 약정서
        this.chk_pmiw02_onchanged = function(obj,e)
        {
        	this.fn_pmiw02();
        }

        this.fn_pmiw02 = function(){

        	if(this.div_pmiw.chk_pmiw02.value == 1)	{

        		this.div_pmiw02.set_url("OMG.CT::OMG_DS_SC_211321.xfdl");
        		this.div_pmiw02.set_visible(true);
        		this.position_chk();
        	//	this.div_pmiw02.setFocus( true );
        	}else{
        //dataset 삭제
        		var fv_position = 0;
        		fv_position = this.ds_pmiwDtl.findRow("PMIW_KDC","302").toString(); //파일Row위치
        		this.ds_pmiwDtl.deleteRow(fv_position);
        		this.ds_evtAmPmiw.deleteAll();
        		this.div_pmiw02.set_url("");
        		this.div_pmiw02.set_visible(false);
        		this.position_chk();
        		//this.div_pmiw.setFocus( true );
        	}
        }

        

        //약정서03 대량거래수수료 약정서
        this.chk_pmiw03_onchanged = function(obj,e)
        {
        	this.fn_pmiw03();
        }

        
        this.fn_pmiw03 = function(){

        	if(this.div_pmiw.chk_pmiw03.value == 1)	{

        		this.div_pmiw03.set_url("OMG.CT::OMG_DS_SC_211322.xfdl");
        		this.div_pmiw03.set_visible(true);
        		this.position_chk();
        		//this.div_pmiw03.setFocus( true );

        	}else{

        	//dataset 삭제
        		var fv_position = 0;
        		fv_position = this.ds_pmiwDtl.findRow("PMIW_KDC","303").toString(); //파일Row위치
        		this.ds_pmiwDtl.deleteRow(fv_position);
        		this.ds_lgqtTrFeePmiw.deleteAll();
        		this.div_pmiw03.set_url("");
        		this.div_pmiw03.set_visible(false);
        		this.position_chk();
        	//	this.div_pmiw.setFocus( true );
        	}
        }

        //약정서04 납품업체종업원 파견약정서
        this.chk_pmiw04_onchanged = function(obj,e)
        {
        	this.fn_pmiw04();
        }

        this.fn_pmiw04 = function(){

        	if(this.div_pmiw.chk_pmiw04.value == 1)	{

        		this.div_pmiw04.set_url("OMG.CT::OMG_DS_SC_211323.xfdl");
        		this.div_pmiw04.set_visible(true);
        		this.position_chk();
        		//this.div_pmiw03.setFocus( true );

        	}else{

        	//dataset 삭제
        		var fv_position = 0;
        		fv_position = this.ds_pmiwDtl.findRow("PMIW_KDC","304").toString(); //파일Row위치
        		this.ds_pmiwDtl.deleteRow(fv_position);
        		this.ds_lgqtTrFeePmiw.deleteAll();
        		this.div_pmiw04.set_url("");
        		this.div_pmiw04.set_visible(false);
        		this.position_chk();
        	//	this.div_pmiw.setFocus( true );
        	}
        }

        //약정서5 혁신점포 기준율 약정서
        this.chk_pmiw05_onchanged = function(obj,e)
        {
        	this.fn_pmiw05();
        }

        this.fn_pmiw05 = function(){

        	if(this.div_pmiw.chk_pmiw05.value == 1)	{

        		this.div_pmiw05.set_url("OMG.CT::OMG_DS_SC_211324.xfdl");
        		this.div_pmiw05.set_visible(true);
        		this.position_chk();

        
        	}else{

        	//dataset 삭제
        		var fv_position = 0;
        		fv_position = this.ds_pmiwDtl.findRow("PMIW_KDC","305").toString(); //파일Row위치
        		this.ds_pmiwDtl.deleteRow(fv_position);
        //		this.ds_lgqtTrFeePmiw.deleteAll();
        		this.div_pmiw05.set_url("");
        		this.div_pmiw05.set_visible(false);
        		this.position_chk();

        	}
        }

        // 306번 상품공급 추가약정서는 별도화면 없이 등록, 수정 시에 ds값을 만들거나 삭제 해준다.
        this.fn_pmiw06 = function(){
        	var stylnum=0;

        	if(this.div_pmiw.chk_pmiw06.value == 1)	{

        		var fv_position = 0;
        		fv_position = this.ds_pmiwDtl.findRow("PMIW_KDC","306").toString(); //파일Row위치
        		if(fv_position != -1){		//ds에 306이 이미 들어있는 경우
        			return;
        		}

        	   for(var i = 0 ; i < this.ds_etcEltStylAmm.rowcount; i++){

        			if(this.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC") == "306"){
        				stylnum= i;
        			}
        		}

        		var nRow = this.ds_pmiwDtl.addRow();
        		fv_position = nRow;
        		this.ds_pmiwDtl.setColumn(fv_position, "PMIW_KDC" , "306") ;
        		this.ds_pmiwDtl.setColumn(fv_position, "CHG_SQNO" , this.ds_register.getColumn(0 ,"CHG_SQNO" ) ) ;
        		this.ds_pmiwDtl.setColumn(fv_position, "CTRW_STY_VER" , this.ds_etcEltStylAmm.getColumn(stylnum,"CTRW_STY_VER") ) ;

        
        	}else{

        	//dataset 삭제
        		var fv_position = 0;
        		// fv_position = this.ds_pmiwDtl.findRow("PMIW_KDC","306").toString(); //파일Row위치
        		// this.ds_pmiwDtl.deleteRow(fv_position);

        
        	}

        
        }

        //약정서 07 추가약정서
        this.chk_pmiw07_onchanged = function(obj,e)
        {
        	this.fn_pmiw07();
        }

        // 307
        this.fn_pmiw07 = function(){
        	var stylnum=0;
        	if(this.div_pmiw.chk_pmiw07.value == 1)	{

        		this.div_pmiw07.set_url("OMG.CT::OMG_DS_SC_311320.xfdl");
        		this.div_pmiw07.set_visible(true);

        	   for(var i = 0 ; i < this.ds_etcEltStylAmm.rowcount; i++){
        // alert("ds_etcEltStylAmm " + i + " --- " + this.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC"));
        			if(this.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC") == "307"){
        				stylnum= i;
        			}
        		}
        // alert("stylnum " + stylnum);
        		// var nRow = this.ds_pmiwDtl.addRow();
        		// fv_position = nRow;

        		this.ds_pmiwDtl.setColumn(fv_position, "PMIW_KDC" , "307") ;
        		this.ds_pmiwDtl.setColumn(fv_position, "CHG_SQNO" , this.ds_register.getColumn(0 ,"CHG_SQNO" ) ) ;
        		this.ds_pmiwDtl.setColumn(fv_position, "CTRW_STY_VER" , this.ds_etcEltStylAmm.getColumn(stylnum,"CTRW_STY_VER") ) ;

        
        		this.position_chk();

        
        	}else{

        	//dataset 삭제
        		var fv_position = 0;
        		fv_position = this.ds_pmiwDtl.findRow("PMIW_KDC","307").toString(); //파일Row위치
        		this.ds_pmiwDtl.deleteRow(fv_position);
        //		this.ds_lgqtTrFeePmiw.deleteAll();
        		this.div_pmiw07.set_url("");
        		this.div_pmiw07.set_visible(false);

        		this.position_chk();

        	}
        }

        
        //특약서01
        this.chk_sctrw01_onchanged = function(obj,e)
        {
        	this.fn_sctrw01();
        }

        this.fn_sctrw01 = function(){

        	if(this.div_sctrw.chk_sctrw01.value == 1){

        		this.div_sctrw01.set_url("OMG.CT::OMG_DS_SC_211330.xfdl");
        		this.div_sctrw01.set_visible(true);

        		this.position_chk();

        		//this.div_sctrw01.setFocus( true );

        	}else{

        		//dataset 삭제
        		var fv_position = 0;
        		fv_position = this.ds_sctrwDtl.findRow("SCTRW_KDC","401").toString(); //파일Row위치
        		this.ds_sctrwDtl.deleteRow(fv_position);
        		this.ds_sctrwNmlMrgnRt.deleteAll();
        		this.ds_sctrwCtrMrgnRt.deleteAll();

        		this.div_sctrw01.set_url("");
        		this.div_sctrw01.set_visible(false);

        		this.position_chk();

        		//this.div_sctrw.setFocus( true );

        	}
        }

        
        /*
         특약서(원산지 등 ) 직매장
         */
        this.chk_sctrw15_onchanged = function(obj,e)
        {
        	this.fn_sctrw15();
        }

        this.fn_sctrw15 = function(){

        	if(this.div_sctrw.chk_sctrw15.value == 1){

        		this.div_sctrw15.set_url("OMG.CT::OMG_DS_SC_311334.xfdl");
        		this.div_sctrw15.set_visible(true);

        		this.position_chk();

        		//this.div_sctrw15.setFocus( true );

        	}else{

        		//dataset 삭제
        		var fv_position = 0;
        		fv_position = this.ds_sctrwDtl.findRow("SCTRW_KDC","415").toString(); //파일Row위치

        		this.ds_sctrwDtl.deleteRow(fv_position);

        		this.div_sctrw15.set_url("");
        		this.div_sctrw15.set_visible(false);

        		this.position_chk();

        		//this.div_sctrw.setFocus( true );

        	}
        }

        /*
           특약서(매장의철수) 직매장
         */

        this.chk_sctrw16_onchanged = function(obj,e)
        {
        	this.fn_sctrw16();
        }

        this.fn_sctrw16 = function(){

        	if(this.div_sctrw.chk_sctrw16.value == 1){

        		this.div_sctrw16.set_url("OMG.CT::OMG_DS_SC_311333.xfdl");
        		this.div_sctrw16.set_visible(true);

        		this.position_chk();

        		//this.div_sctrw16.setFocus( true );

        	}else{

        		//dataset 삭제
        		var fv_position = 0;
        		fv_position = this.ds_sctrwDtl.findRow("SCTRW_KDC","416").toString(); //파일Row위치

        // alert(fv_position);
        		this.ds_sctrwDtl.deleteRow(fv_position);

        		this.div_sctrw16.set_url("");
        		this.div_sctrw16.set_visible(false);

        		this.position_chk();

        		//this.div_sctrw.setFocus( true );

        	}
        }

        

        

        //기타 계약서1
        this.chk_etcCtrw01_onchanged = function(obj,e)
        {
        	this.fn_etcCtrw01();

        }

        this.fn_etcCtrw01 = function(){

        	if(this.div_etcCtrw.chk_etcCtrw01.value == 1)
        	{
        		this.div_etcCtrw01.set_url("OMG.CT::OMG_DS_SC_211340.xfdl");
        		this.div_etcCtrw01.set_visible(true);

        		this.position_chk();

        	//	this.div_etcCtrw01.setFocus(true);

        	}else{

        	//dataset 삭제
        		var fv_position = 0;
        		fv_position = this.ds_etcEltCtrw.findRow("ETC_CTRW_KDC","501").toString(); //파일Row위치
        		this.ds_etcEltCtrw.deleteRow(fv_position);

        		this.div_etcCtrw01.set_url("");
        		this.div_etcCtrw01.set_visible(false);

        		this.position_chk();

        	//	this.div_etcCtrw.setFocus(true);

        	}
        	this.position_chk();

        }

        
        //기타 계약서2
        this.chk_etcCtrw02_onchanged = function(obj,e)
        {

        	this.fn_etcCtrw02();

        }

        this.fn_etcCtrw02 = function()
        {
        	if (this.div_etcCtrw.chk_etcCtrw02.value == 1) {
        		this.div_etcCtrw02.set_url("OMG.CT::OMG_DS_SC_211341.xfdl");
        		this.div_etcCtrw02.set_visible(true);
        		this.position_chk();
        		//this.div_etcCtrw02.setFocus(true);
        	} else {
        		//dataset 삭제
        		var fv_position = 0;
        		fv_position = this.ds_etcEltCtrw.findRow("ETC_CTRW_KDC","502").toString(); //파일Row위치
        		this.ds_etcEltCtrw.deleteRow(fv_position);

        		this.div_etcCtrw02.set_url("");
        		this.div_etcCtrw02.set_visible(false);
        		this.position_chk();
        	//	this.div_etcCtrw.setFocus(true);
        	}
        }

        //부가 계약서 위치 체크: 부가계약서, 약정서, 특약서, 기타
        this.position_add_chk = function()
        {
        	if (this.chk_addCtrw.value == 1) {
        		this.div_addCtrw.set_top(mnCtrwKd);
        		mnCtrwKd = nexacro.toNumber(this.div_addCtrw.top)+nexacro.toNumber(this.div_addCtrw.height) + 20   ; // + dispOffset

        		if (this.div_addCtrw.chk_addCtrw01.value == 1) {
        			this.div_addCtrw01.set_top(mnCtrwKd);
        			mnCtrwKd = nexacro.toNumber(this.div_addCtrw01.top)+nexacro.toNumber(this.div_addCtrw01.height) + 20 ;
        		}

        		if (this.div_addCtrw.chk_addCtrw04.value == 1) {
        			this.div_addCtrw04.set_top(mnCtrwKd);
        			mnCtrwKd = nexacro.toNumber(this.div_addCtrw04.top)+nexacro.toNumber(this.div_addCtrw04.height) + 20 ;
        		}
        		
        		if (this.div_addCtrw.chk_addCtrw05.value == 1) {
        			this.div_addCtrw05.set_top(mnCtrwKd);
        			mnCtrwKd = nexacro.toNumber(this.div_addCtrw05.top)+nexacro.toNumber(this.div_addCtrw05.height) + 20 ;
        		}
        	}
        	// 약정서 위치보정
        	this.position_div_pmiw();
        }

        //약정서 위치 체크
        this.position_div_pmiw = function()
        {
        	if (this.chk_pmiw.value == 1) {
        		this.div_pmiw.set_top(mnCtrwKd);
        		mnCtrwKd = nexacro.toNumber(this.div_pmiw.top)+nexacro.toNumber(this.div_pmiw.height) +20 ;

        		if (this.div_pmiw.chk_pmiw01.value == 1) {
        			this.div_pmiw01.set_top(mnCtrwKd);
        			mnCtrwKd = nexacro.toNumber(this.div_pmiw01.top)+nexacro.toNumber(this.div_pmiw01.height) +20 ;
        		}
        		if (this.div_pmiw.chk_pmiw02.value == 1) {
        			this.div_pmiw02.set_top(mnCtrwKd);
        			mnCtrwKd = nexacro.toNumber(this.div_pmiw02.top)+nexacro.toNumber(this.div_pmiw02.height) +20 ;
        		}
        		if (this.div_pmiw.chk_pmiw03.value == 1) {
        			this.div_pmiw03.set_top(mnCtrwKd);
        			mnCtrwKd = nexacro.toNumber(this.div_pmiw03.top)+nexacro.toNumber(this.div_pmiw03.height) +20 ;
         		}
        		if (this.div_pmiw.chk_pmiw05.value == 1) {
        			this.div_pmiw05.set_top(mnCtrwKd);
        			mnCtrwKd = nexacro.toNumber(this.div_pmiw05.top)+nexacro.toNumber(this.div_pmiw05.height) +20 ;
        		}
        		if (this.div_pmiw.chk_pmiw07.value == 1) {
        			this.div_pmiw07.set_top(mnCtrwKd);
        			mnCtrwKd = nexacro.toNumber(this.div_pmiw07.top)+nexacro.toNumber(this.div_pmiw07.height) +20 ;
        		}
        	}
        	// 특약서 체크
        	this.position_div_sctrw() ;
        }

        // 특약서 위치보정
        this.position_div_sctrw = function()
        {
        	if (this.chk_sctrw.value == 1) {
        		this.div_sctrw.set_top(mnCtrwKd);
        		mnCtrwKd = nexacro.toNumber(this.div_sctrw.top)+nexacro.toNumber(this.div_sctrw.height) +20 ;

        		if (this.div_sctrw.chk_sctrw01.value == 1) {
        			this.div_sctrw01.set_top(mnCtrwKd);
        			mnCtrwKd = nexacro.toNumber(this.div_sctrw01.top)+nexacro.toNumber(this.div_sctrw01.height) +20 ;
        		}
        		if (this.div_sctrw.chk_sctrw15.value == 1) {
        			this.div_sctrw15.set_top(mnCtrwKd);
        			mnCtrwKd = nexacro.toNumber(this.div_sctrw15.top)+nexacro.toNumber(this.div_sctrw15.height) +20 ;
        		}
        		if (this.div_sctrw.chk_sctrw16.value == 1) {
        			this.div_sctrw16.set_top(mnCtrwKd);
        			mnCtrwKd = nexacro.toNumber(this.div_sctrw16.top)+nexacro.toNumber(this.div_sctrw16.height) +20 ;
        		}
        	}
        	this.position_div_etcCtrw() ;
        }

        
        // 기타 계약서 위치
        this.position_div_etcCtrw = function()
        {
        	if (this.chk_etcCtrw.value == 1) {
        		this.div_etcCtrw.set_top(mnCtrwKd);
        		mnCtrwKd = nexacro.toNumber(this.div_etcCtrw.top)+nexacro.toNumber(this.div_etcCtrw.height) +20 ;

        		if (this.div_etcCtrw.chk_etcCtrw01.value == 1) {
        			this.div_etcCtrw01.set_top(mnCtrwKd);
        			mnCtrwKd = nexacro.toNumber(this.div_etcCtrw01.top)+nexacro.toNumber(this.div_etcCtrw01.height) +20 ;
        		}
        		if (this.div_etcCtrw.chk_etcCtrw02.value == 1) {
        			this.div_etcCtrw02.set_top(mnCtrwKd);
        			mnCtrwKd = nexacro.toNumber(this.div_etcCtrw02.top)+nexacro.toNumber(this.div_etcCtrw02.height) + 20 ;
        		}
        	}

        	if (fv_CtrwChg == "2") {
        		this.div_ctrwModCntn.set_url("OMG.CT::OMG_DS_SC_211350.xfdl");
        		this.div_ctrwModCntn.set_visible(true);
        		this.div_ctrwModCntn.set_top(mnCtrwKd);
        		mnCtrwKd = nexacro.toNumber(this.div_ctrwModCntn.top)+nexacro.toNumber(this.div_ctrwModCntn.height) + 20 ;
        	} else {
        //  		this.div_ctrwModCntn.set_url("");
        //
        //  		this.div_ctrwModCntn.set_visible(false);
        	}

        	//botton 20으로 고정
        	//trace("mnCtrwKd  : >> "   +mnCtrwKd  );

        	this.div_space.set_visible(true);
        	this.div_space.set_top(mnCtrwKd);

        	if (fv_ctrwChgObjChk == 1) {
        		var po1 = nexacro.toNumber(this.div_space.top) +20 ;
        		this.parent.div_ctrwBrk.set_height(po1);
        		this.parent.resetScroll() ;
        	}

        	this.resetScroll() ;
        }

        
        //경재 통합 div 컨트롤
        this.btn_naTrplC_onclick = function(obj,e)
        {
        	 //new_elt  ==  true   신규 계약서 작성시
        	 //new_elt  ==  false  계약서 수정시

        //	if(this.new_elt == true){

        		var oArg = {paramMode:"S", dsArg:this.ds_register, new_elt:this.new_elt };
        		var sOption = "autosize=true";
        		var sPopupCallBack = "fn_popupAfter";
        		this.gfn_openPopup("naTrplC","OMG.PT::OMG_DS_SC_9030.xfdl",oArg,sOption,sPopupCallBack);

        // 	}else{
        //
        // 		var nX = system.clientToScreenX(this.edt_naTrplC, 0) - system.clientToScreenX(this, 0) + 110;
        // 		var nY = system.clientToScreenY(this.edt_naTrplC, parseInt(this.edt_naTrplC.height)) - system.clientToScreenY(this, 0);
        //
        // 		this.div_naTrplC.set_url("OMG.PT::OMG_DS_SC_9030.xfdl");
        // 		this.div_naTrplC.move( nX, nY );
        // 		this.div_naTrplC.bringToFront();
        // 		this.div_naTrplC.set_visible(true);
        // 		this.div_naTrplC.div_search.edt_comp.setFocus();
        // 	}
        }

        //경재 통합 리턴 값
        this.fn_naTrplC = function(strVal)
        {
        	var naTrplCVal = strVal.split(",");

        	for (var i=0; i<naTrplCVal.length; i++) {
        		var naTrplCVal1 = naTrplCVal[i].split("#");

        		if (naTrplCVal1[0] == "NA_TRPL_C") {
        			//경제통합거래처코드
        			this.ds_register.setColumn(0,"NA_TRPL_C", naTrplCVal1[1]);
        		} else if (naTrplCVal1[0] == "BIZ_NUMBER") {
        			//사업자등록번호
        			this.ds_register.setColumn(0,"BZNO",  naTrplCVal1[1]);
        		} else if (naTrplCVal1[0] == "ATEL") {
        			//전화지역번호
        			this.cbo_atel.set_value(naTrplCVal1[1]);
        		} else if (naTrplCVal1[0] == "HTEL") {
        			//전화국번호
        			this.edt_htel.set_value( naTrplCVal1[1]);
        		} else if (naTrplCVal1[0] == "STEL") {
        			//전화일련번호
        			this.edt_stel.set_value(naTrplCVal1[1]);
        		} else if (naTrplCVal1[0] == "EMAIL") {
        			//EMAIL
        			this.ds_register.setColumn(0,"EMAIL", naTrplCVal1[1]);
        		} else if (naTrplCVal1[0] == "REPMNM") {
        			//대표이사
        			this.ds_register.setColumn(0,"CEO", naTrplCVal1[1]);
        		} else if (naTrplCVal1[0] == "CLNTNM") {
        			//상호
        			this.ds_register.setColumn(0,"MTALNM", naTrplCVal1[1]);
        		} else if (naTrplCVal1[0] == "FZIP") {
        			//앞자리우편번호
        			this.ds_register.setColumn(0,"FZIP", naTrplCVal1[1]);
        		} else if ( naTrplCVal1[0] == "RZIP") {
        			//뒷자리우편번호
        			this.ds_register.setColumn(0,"RZIP", naTrplCVal1[1]);
        		} else if ( naTrplCVal1[0] == "ZIP_SQNO") {
        			if (this.gfn_isNull(naTrplCVal1[1])) {

        			}else{
        				//우편번호일련번호
        				this.ds_register.setColumn(0, "ZIP_SQNO", naTrplCVal1[1]);
        			}
        		} else if (naTrplCVal1[0] == "DONGUP") {
        			//동이상주소
        			this.ds_register.setColumn(0,"DONGUP",  naTrplCVal1[1]) ;
        		} else if (naTrplCVal1[0] == "DONGBW") {
        			//동이하주소
        			this.ds_register.setColumn(0,"DONGBW",  naTrplCVal1[1]) ;
        		} else if (naTrplCVal1[0] == "COPNO_CIF_NO") {
        			//법인등록번호
        			this.ds_register.setColumn(0,"COPNO",  naTrplCVal1[1]) ;
        		}
        	}
        }

        //주소 리턴 값
        this.fn_addr = function(strVal)
        {
        	var fn_addr = strVal.split(",");

        	for(var i=0; i<fn_addr.length; i++) {
        		var fn_addr1 = fn_addr[i].split("#");
        		if (fn_addr1[0] == "FZIP") {
        			//앞자리우편번호
        			// trace("CTR_CHRR_FZIP == >>"  +  fn_addr1[1]  );
        			this.ds_register.setColumn(0, "CTR_CHRR_FZIP", fn_addr1[1]);
        		} else if (fn_addr1[0] == "RZIP") {
        			//뒷자리우편번호
        			this.ds_register.setColumn(0, "CTR_CHRR_RZIP", fn_addr1[1]);
        		} else if (fn_addr1[0] == "ZIP_SQNO") {
        			//우편번호일련번호
        			this.ds_register.setColumn(0,"ZIP_SQNO", fn_addr1[1]);
        		} else if (fn_addr1[0] == "DONGUP") {
        			//동이상주소
        			this.ds_register.setColumn(0,"CTR_CHRR_DONGUP", fn_addr1[1]);
        		} else if (fn_addr1[0] == "DONGBW") {
        			//동이하주소
        			this.ds_register.setColumn(0,"CTR_CHRR_DONGBW", fn_addr1[1]);
        		}
        	}
        }

        //전화 번호를 해당 위치로 값 세팅
        this.fn_telNo = function(strTelNo,strVal1,strVal2,strVal3){
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

        this.btu_zip_onclick = function(obj,e)
        {
        	//if(this.new_elt == true){
        		var oArg = {paramMode:"S", dsArg:this.ds_register, new_elt:this.new_elt};
        		var sOption = "autosize=true,title=true";
        		var sPopupCallBack = "fn_popupAfter";
        		this.gfn_openPopup("zipCode","OMG.PT::OMG_DS_SC_9010.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	 if (strId == "naTrplC") {
        		this.fn_naTrplC(strVal);
        	 } else if (strId == "zipCode") {
        		this.fn_addr(strVal);
        	 } else if (strId == "chrrSearch") {
        		this.fn_chrr(strVal);
        	 }
        }

        //업체 담당자 조회 리터값
        this.fn_chrr = function(strVal)
        {
        	var temp = strVal.split(",");
        	// trace(temp);
        	for (var i=0; i<temp.length; i++) {
        		var temp1 = temp[i].split("#");

        		if (temp1[0] == "CTR_CHRR") {
        			//경제통합거래처코드
        			this.ds_register.setColumn(0,"CTR_CHRR",  temp1[1]) ;
        		} else if ( temp1[0] == "MPNO") {
        			var temp2 = temp1[1].split("-");
        			var mpmo = "" ;

        			if (temp2.length == 3) {
        				this.cbo_hp.set_value(temp2[0]);
        				this.edt_hp01.set_value(temp2[1]);
        				this.edt_hp02.set_value(temp2[2]);
        				mpmo  = temp2[0] + temp2[1] +temp2[2]
        			}

        			this.ds_register.setColumn(0,"MPNO",  mpmo) ;
        		} else if (temp1[0] == "EMAIL") {
        			//EMAIL
        			this.ds_register.setColumn(0,"EMAIL",  temp1[1]) ;
        		}
        	}
        }

        this.btn_chrrSearch_onclick = function(obj,e)
        {
        	var NATRPIC = this.edt_naTrplC.value;

        	//if(this.new_elt == true){
        		var oArg = {paramMode:"S", dsArg:this.ds_register,new_elt:this.new_elt,NATRPIC:NATRPIC};
        		var sOption = "autosize=true";
        		var sPopupCallBack = "fn_popupAfter";
        		this.gfn_openPopup("chrrSearch","OMG.PT::OMG_DS_SC_9070.xfdl",oArg,sOption,sPopupCallBack);

        // 	}else{
        // 		var nX =nexacro.toNumber(278)
        // 		//var nY =nexacro.toNumber(this.edt_ctrChrr.top) - 5 - nexacro.toNumber(this.edt_ctrChrr.height)  ;
        // 		var nY =nexacro.toNumber(this.edt_ctrChrr.top) - 5  ;
        // 		this.div_chrr.set_url("OMG.PT::OMG_DS_SC_9070.xfdl");
        // 		this.div_chrr.move(nX, nY);
        // 		this.div_chrr.bringToFront();
        // 		this.div_chrr.set_visible(true);
        //
        // 	}
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.fn_close();
        }

        this.fn_close = function(){
        	//alert("fv_ctrwChgObjChk =>>"  + fv_ctrwChgObjChk +" /fv_CtrwChg =>>" + fv_CtrwChg  )  ;
        	if (fv_ctrwChgObjChk == 1 && fv_CtrwChg == 2) {
        		this.parent.close();
        	} else if(fv_ctrwChgObjChk == 1) {
        		var nX = 0;
        		var nY = 0;

        		this.parent.div_ctrwBrk.set_visible(false);
        		this.parent.div_ctrwBrk.set_url("");
        		this.parent.div_ctrwDsc.move(nX, nY);
        		this.parent.div_ctrwDsc.bringToFront();
        		this.parent.div_ctrwDsc.set_visible(true);
        		this.parent.div_ctrwDsc.search();
        		this.parent.resetScroll() ;
        	} else {
        		this.reload();
        		//this.close();
        	}
        }

        // 수정사항 확인하는 로그
        this.fn_log = function()
        {
        	for (var i = 0 ; i < this.ds_register.rowcount; i++) {
        		trace("ds_register             :   " + i + "   "  +this.ds_register.getRowType(i));
        	}

        	for (var i = 0 ; i < this.ds_addEltCtrwDtl.rowcount; i++) {
        		trace("ds_addEltCtrwDtl        :   " + i + "   "  +this.ds_addEltCtrwDtl.getRowType(i));
        	}

        	for (var i = 0 ; i < this.ds_eltCtrwDtl.rowcount; i++) {
        		trace("ds_eltCtrwDtl           :   " + i + "   "  +this.ds_eltCtrwDtl.getRowType(i));
        	}
        	//trace(this.ds_eltCtrwDtl.saveXML());

        	for (var i = 0 ; i < this.ds_pmiwDtl.rowcount; i++) {
        		trace("ds_pmiwDtl              :   " + i + "   "  +this.ds_pmiwDtl.getRowType(i));
        	}

        	for (var i = 0 ; i < this.ds_evtAmPmiw.rowcount; i++) {
        		trace("ds_evtAmPmiw            :   " + i + "   "  +this.ds_evtAmPmiw.getRowType(i));
        	}

        	for (var i = 0 ; i < this.ds_lgqtTrFeePmiw.rowcount; i++) {
        		trace("ds_lgqtTrFeePmiw        :   " + i + "   "  +this.ds_lgqtTrFeePmiw.getRowType(i));
        	}

        	for (var i = 0 ; i < this.ds_sctrwDtl.rowcount; i++) {
        		trace("ds_sctrwDtl             :   " + i + "   "  +this.ds_sctrwDtl.getRowType(i));
        	}

        	for (var i = 0 ; i < this.ds_sctrwNmlMrgnRt.rowcount; i++) {
        		trace("ds_sctrwNmlMrgnRt       :   " + i + "   "  +this.ds_sctrwNmlMrgnRt.getRowType(i));
        	}

        	for (var i = 0 ; i < this.ds_sctrwCtrMrgnRt.rowcount; i++) {
        		trace("ds_sctrwCtrMrgnRt       :   " + i + "   "  +this.ds_sctrwCtrMrgnRt.getRowType(i));
        	}
        // 	for(var i = 0 ; i < this.ds_sctrwPmtnEmpeDspcBrk.rowcount; i++){
        // 	trace("ds_sctrwPmtnEmpeDspcBrk :   " + i + "   "  +this.ds_sctrwPmtnEmpeDspcBrk.getRowType(i));
        // 	}

        	for (var i = 0 ; i < this.ds_sctrwAllXpcPmtnCst.rowcount; i++) {
        		trace("ds_sctrwAllXpcPmtnCst   :   " + i + "   "  +this.ds_sctrwAllXpcPmtnCst.getRowType(i));
        	}

        	for (var i = 0 ; i < this.ds_etcEltCtrw.rowcount; i++) {
        		trace("ds_etcEltCtrw           :   " + i + "   "  +this.ds_etcEltCtrw.getRowType(i));
        	}
        }

        this.disable = function()
        {
        	this.cbo_mnCtrwKdM.set_enable(false);
        	this.edt_ctrChrr.set_enable(false);
        	this.cbo_hp.set_enable(false);
        	this.edt_hp01.set_enable(false);
        	this.edt_hp02.set_enable(false);
        	this.edt_email.set_enable(false);
        	this.edt_laAgnt.set_enable(false);
        	this.edt_laAgntDtyNm.set_enable(false);
        	this.edt_ctrChrrRepmn.set_enable(false);
        	this.edt_ctrChrrMtalnm.set_enable(false);
        }

        //바이어 구분
        this.cbo_mnCtrwKdM2_onitemchanged = function(obj,e)
        {
        	this.ds_mnCtrwKdMC_Temp.clearData();
        	this.ds_mnCtrwKdMC_Temp.insertRow(0);
        	this.ds_mnCtrwKdMC_Temp.setColumn(0,"CD_D","");
        	this.ds_mnCtrwKdMC_Temp.setColumn(0,"SIMP_CNM","=========선택=========");

        	this.cbo_mnCtrwKdM.set_index(0);

        	buyerCD = this.cbo_mnCtrwKdM2.value;	//cd_m 값
        	trace("buyerCD : "+buyerCD);

        	if (buyerCD > 0 ) {
        		this.mnCtrwKd_init();
        //		ctrDSC='MN_CTRW_KDC';	//메인계약서
        		this.cbo_mnCtrwKdM.set_enable(true);
        		this.fn_codeDSC(buyerCD,'MN_CTRW_KD');
        		this.unCHK('all');
        	} else {
        		this.cbo_mnCtrwKdM.set_enable(false);
        		this.unCHK('all');
        	}
        }

        this.cal_ctrStDt_onchanged = function(obj,e)
        {
        	for(var i = 0 ; i < this.ds_eltCtrwDtl.rowcount; i++){
        		if(this.ds_eltCtrwDtl.getColumn(i, "MN_CTRW_KDC") == "121"){
        			this.ds_eltCtrwDtl.setColumn(i, "ETC17" , this.cal_ctrStDt.value) ; // [메인계약서] 임대차기간 시작일
        			this.div_mnCtrwKd21.edt_ETC17.set_value(this.cal_ctrStDt.value);
        		}
        	}
        	for(var i = 0 ; i < this.ds_pmiwDtl.rowcount; i++){
        		if(this.ds_pmiwDtl.getColumn(i, "PMIW_KDC") == "307"){
        			this.ds_pmiwDtl.setColumn(i, "ETC4" , this.cal_ctrStDt.value) ; // [약정서] 임대차기간 시작일
        			this.div_pmiw07.cal_evtPrdStDt.set_value(this.cal_ctrStDt.value);
        		}
        	}
        }

        this.cal_ctrEdDt_onchanged = function(obj,e)
        {
        	for(var i = 0 ; i < this.ds_eltCtrwDtl.rowcount; i++){
        		if(this.ds_eltCtrwDtl.getColumn(i, "MN_CTRW_KDC") == "121"){
        			this.ds_eltCtrwDtl.setColumn(i, "ETC18" , this.cal_ctrEdDt.value) ; // [메인계약서] 임대차기간 종료일
        			this.div_mnCtrwKd21.edt_ETC18.set_value(this.cal_ctrEdDt.value);
        		}
        	}
        	for(var i = 0 ; i < this.ds_pmiwDtl.rowcount; i++){
        		if(this.ds_pmiwDtl.getColumn(i, "PMIW_KDC") == "307"){
        			this.ds_pmiwDtl.setColumn(i, "ETC5" , this.cal_ctrEdDt.value) ; // [약정서] 임대차기간 종료일
        			this.div_pmiw07.cal_evtPrdEdDt.set_value(this.cal_ctrEdDt.value);
        		}
        	}
        }

        /*
         * 직매장 로그인 시 Y/N 리턴 
         */
        this.fn_checkBranch = function()
        {

        	var sParams = "branch_dsc="+ "01"  // 대리점 구분 01 직매장 
        				+ " mb_id=";
        	var sSvcID        = "branchCheck";
        	var sURL          = "svc::rest/pt/checkBranch";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_authBranch=ds_authBranch";  // 
        	var sArgument     =  sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_fyn.addEventHandler("canrowposchange", this.ds_ntc_onrowposchanged, this);
            this.ds_dlvgCompEmpDspcPmiw.addEventHandler("oncolumnchanged", this.ds_lgqtTrFeePmiw_oncolumnchanged, this);
            this.ds_dspcPerWrkPrdPmiw.addEventHandler("oncolumnchanged", this.ds_lgqtTrFeePmiw_oncolumnchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.Static42.addEventHandler("onclick", this.Static42_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.cbo_mnCtrwKdM.addEventHandler("onitemchanged", this.cbo_mnCtrwKdM_onitemchanged, this);
            this.btn_naTrplC.addEventHandler("onclick", this.btn_naTrplC_onclick, this);
            this.cal_ctrEdDt.addEventHandler("onchanged", this.cal_ctrEdDt_onchanged, this);
            this.cal_ctrStDt.addEventHandler("onchanged", this.cal_ctrStDt_onchanged, this);
            this.chk_addCtrw.addEventHandler("onchanged", this.chk_addCtrw_onchanged, this);
            this.chk_sctrw.addEventHandler("onchanged", this.chk_sctrw_onchanged, this);
            this.chk_etcCtrw.addEventHandler("onchanged", this.chk_etcCtrw_onchanged, this);
            this.chk_pmiw.addEventHandler("onchanged", this.chk_pmiw_onchanged, this);
            this.cbo_buyerAtel.addEventHandler("onitemchanged", this.cbo_buyerAtel_onitemchanged, this);
            this.div_mnCtrwKd.rdo_mnCtrwKdC.addEventHandler("onitemchanged", this.rdo_mnCtrwKd_onitemchanged, this);
            this.div_mnCtrwKd.rdo_mnCtrwKdC.addEventHandler("onitemclick", this.div_mnCtrwKd_rdo_mnCtrwKdC_onitemclick, this);
            this.div_addCtrw.Static51.addEventHandler("onclick", this.Div07_Static51_onclick, this);
            this.div_addCtrw.chk_addCtrw01.addEventHandler("onchanged", this.chk_addCtrw01_onchanged, this);
            this.div_addCtrw.chk_addCtrw03.addEventHandler("onchanged", this.chk_addCtrw03_onchanged, this);
            this.div_addCtrw.chk_addCtrw04.addEventHandler("onchanged", this.chk_addCtrw04_onchanged, this);
            this.div_addCtrw.chk_addCtrw05.addEventHandler("onchanged", this.chk_addCtrw05_onchanged, this);
            this.div_pmiw.Static51.addEventHandler("onclick", this.Div07_Static51_onclick, this);
            this.div_pmiw.chk_pmiw02.addEventHandler("onchanged", this.chk_pmiw02_onchanged, this);
            this.div_pmiw.chk_pmiw03.addEventHandler("onchanged", this.chk_pmiw03_onchanged, this);
            this.div_pmiw.chk_pmiw04.addEventHandler("onchanged", this.chk_pmiw04_onchanged, this);
            this.div_pmiw.chk_pmiw05.addEventHandler("onchanged", this.chk_pmiw05_onchanged, this);
            this.div_pmiw.chk_pmiw07.addEventHandler("onchanged", this.chk_pmiw07_onchanged, this);
            this.div_pmiw.chk_pmiw01.addEventHandler("onchanged", this.chk_pmiw01_onchanged, this);
            this.div_sctrw.Static160.addEventHandler("onclick", this.Div04_Static160_onclick, this);
            this.div_sctrw.chk_sctrw01.addEventHandler("onchanged", this.chk_sctrw01_onchanged, this);
            this.div_sctrw.chk_sctrw15.addEventHandler("onchanged", this.chk_sctrw15_onchanged, this);
            this.div_sctrw.chk_sctrw16.addEventHandler("onchanged", this.chk_sctrw16_onchanged, this);
            this.div_etcCtrw.chk_etcCtrw01.addEventHandler("onchanged", this.chk_etcCtrw01_onchanged, this);
            this.div_etcCtrw.chk_etcCtrw02.addEventHandler("onchanged", this.chk_etcCtrw02_onchanged, this);
            this.cbo_buyerHp.addEventHandler("onitemchanged", this.cbo_buyerAtel_onitemchanged, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_modify.addEventHandler("onclick", this.btn_modify_onclick, this);
            this.btn_chrrSearch.addEventHandler("onclick", this.btn_chrrSearch_onclick, this);
            this.cbo_mnCtrwKdM2.addEventHandler("onitemchanged", this.cbo_mnCtrwKdM2_onitemchanged, this);
            this.btn_preview.addEventHandler("onclick", this.btn_preview_onclick, this);
            this.edt_laAgntDtyNm.addEventHandler("onkeydown", this.edt_laAgntDtyNm_onkeydown, this);
            this.btu_zip.addEventHandler("onclick", this.btu_zip_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_3113X.xfdl");
        this.loadPreloadList();
       
    };
}
)();
