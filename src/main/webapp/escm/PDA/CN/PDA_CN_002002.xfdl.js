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
                this.set_name("popupM1");
                this.set_cssclass("sta_WF_PopupTitle");
                this.set_titletext("검수내역상세");
                this._setFormPosition(0,0,950,636);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("pda_mst", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SLP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NA_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"WHSE_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRMNO\" type=\"STRING\" size=\"256\"/><Column id=\"CNR_WRS_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BUYPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"BUYPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"BUYPL_TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_REF_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_REF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TR_BASS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NA_CRC_CAN_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"RMK_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"CNR_STS_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"CNR_FIX_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"CNR_FIX_USR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CNR_FIX_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CNR_CMPL_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"CNR_CMPL_USR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CNR_CMPL_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"CNR_CMPL_SIGN_FN\" type=\"STRING\" size=\"256\"/><Column id=\"CNR_CMPL_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RSP_C_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"NH_SLP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NH_NA_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"EDI_IF_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("pda_detail", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"SLP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NA_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SLP_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_QT\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_UPR\" type=\"STRING\" size=\"256\"/><Column id=\"CNR_MTHD_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"CNR_USR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CNR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRMNO\" type=\"STRING\" size=\"256\"/><Column id=\"DQPD_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_img", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PICTURE\" type=\"BLOB\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_confirm", "absolute", null, "8", "55", "21", "79", null, this);
            obj.set_taborder("4");
            obj.set_text("검수확인");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_finish", "absolute", null, "8", "55", "21", "79", null, this);
            obj.set_taborder("1");
            obj.set_text("검수완료");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancle", "absolute", null, "8", "55", "21", "79", null, this);
            obj.set_taborder("2");
            obj.set_text("완료취소");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_init", "absolute", null, "8", "55", "21", "18", null, this);
            obj.set_taborder("3");
            obj.set_text("확인취소");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_CNR_CMPL_NA_BZPLC", "absolute", "146", "244", "156", "29", null, null, this);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_NA_TEAM_C", "absolute", "778", "93", "155", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_tooltiptype("inplace");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_BUYPL_NA_TEAM_C", "absolute", "778", "121", "155", "29", null, null, this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "17", "121", "130", "29", null, null, this);
            obj.set_taborder("12");
            obj.set_text("매입처거래처코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("st_BUYPL_NA_TRPL_C", "absolute", "146", "121", "156", "29", null, null, this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_NA_BZPLC", "absolute", "146", "93", "156", "29", null, null, this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_NA_SLPNO", "absolute", "430", "37", "220", "29", null, null, this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_CNR_WRS_DSC", "absolute", "778", "65", "155", "29", null, null, this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_BYNG_REF_DSC", "absolute", "430", "65", "220", "29", null, null, this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_TR_BASS_NO", "absolute", "430", "149", "220", "29", null, null, this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "17", "328", "130", "29", null, null, this);
            obj.set_taborder("30");
            obj.set_text("등록일시");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("st_RMK_CNTN", "absolute", "430", "300", "349", "29", null, null, this);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            obj.set_tooltiptype("default");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("st_CNR_STS_DSC", "absolute", "778", "37", "155", "29", null, null, this);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_CNR_FIX_NA_BZPLC", "absolute", "146", "216", "156", "29", null, null, this);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_CNR_FIX_USR_ID", "absolute", "430", "216", "220", "29", null, null, this);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_CNR_FIX_DTM", "absolute", "778", "216", "155", "29", null, null, this);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static7", "absolute", "17", "244", "130", "29", null, null, this);
            obj.set_taborder("45");
            obj.set_text("검수완료사업장코드");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_linespace("5");
            this.addChild(obj.name, obj);

            obj = new Static("st_CNR_CMPL_USR_ID", "absolute", "430", "244", "220", "29", null, null, this);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_CNR_CMPL_SIGN_FN", "absolute", "430", "272", "349", "29", null, null, this);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "17", "93", "130", "29", null, null, this);
            obj.set_taborder("55");
            obj.set_text("사업장코드");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_linespace("5");
            this.addChild(obj.name, obj);

            obj = new Static("st_CNR_CMPL_DTM", "absolute", "778", "244", "155", "29", null, null, this);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_SLP_DT", "absolute", "146", "37", "156", "29", null, null, this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_ODR_DT", "absolute", "146", "149", "156", "29", null, null, this);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "17", "37", "130", "29", null, null, this);
            obj.set_taborder("16");
            obj.set_text("검수일자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static6", "absolute", "17", "149", "130", "29", null, null, this);
            obj.set_taborder("27");
            obj.set_text("근거전표일자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "649", "65", "130", "29", null, null, this);
            obj.set_taborder("15");
            obj.set_text("검수상품구분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "649", "37", "130", "29", null, null, this);
            obj.set_taborder("35");
            obj.set_text("검수상태");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static9", "absolute", "649", "244", "130", "29", null, null, this);
            obj.set_taborder("53");
            obj.set_text("검수완료일시");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_linespace("5");
            this.addChild(obj.name, obj);

            obj = new Static("st_NA_TRMNO", "absolute", "146", "65", "156", "29", null, null, this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_pdaD", "absolute", "17", "416", null, null, "17", "17", this);
            obj.set_taborder("0");
            obj.set_binddataset("pda_detail");
            obj.set_cellmovingtype("col");
            obj.set_scrollbars("alwaysvert");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"75\"/><Column size=\"85\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"검수일자\"/><Cell col=\"1\" text=\"검수번호\"/><Cell col=\"2\" text=\"상세일련번호\"/><Cell col=\"3\" text=\"상품코드\"/><Cell col=\"4\" text=\"상품명\"/><Cell col=\"5\" text=\"검수수량\"/><Cell col=\"6\" text=\"매입단가\"/><Cell col=\"7\" text=\"검수방법구분\"/><Cell col=\"8\" text=\"단말기번호\"/><Cell col=\"9\" text=\"검수사용자ID\"/><Cell col=\"10\" text=\"검수일시\"/><Cell col=\"11\" text=\"결품사유\"/></Band><Band id=\"body\"><Cell text=\"bind:SLP_DT\" mask=\"####-##-##\"/><Cell col=\"1\" text=\"bind:NA_SLPNO\"/><Cell col=\"2\" text=\"bind:SLP_SQNO\"/><Cell col=\"3\" text=\"bind:NA_WRS_C\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:WRSNM\"/><Cell col=\"5\" text=\"bind:BYNG_QT\"/><Cell col=\"6\" style=\"align:right;padding:2 7 2 7;\" text=\"bind:BYNG_UPR\" mask=\"#,###\"/><Cell col=\"7\" text=\"bind:CNR_MTHD_DSC\" expr=\"expr:(CNR_MTHD_DSC == '0')? '상품건별' : (CNR_MTHD_DSC == '1')? '상품바코드' : (CNR_MTHD_DSC == '2')? 'PLT바코드' : (CNR_MTHD_DSC == '3')? '전표일괄' : (CNR_MTHD_DSC == '4')? '확인' : ''\"/><Cell col=\"8\" text=\"bind:NA_TRMNO\"/><Cell col=\"9\" text=\"bind:CNR_USR_ID\"/><Cell col=\"10\" text=\"bind:CNR_DTM\"/><Cell col=\"11\" text=\"bind:DQPD_RSN_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static4", "absolute", "17", "65", "130", "29", null, null, this);
            obj.set_taborder("20");
            obj.set_text("단말기번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "649", "216", "130", "29", null, null, this);
            obj.set_taborder("43");
            obj.set_text("검수확인일시");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_linespace("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "17", "272", "130", "29", null, null, this);
            obj.set_taborder("49");
            obj.set_text("검수완료개인번호");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_linespace("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "301", "149", "130", "29", null, null, this);
            obj.set_taborder("34");
            obj.set_text("거래근거번호");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_linespace("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "17", "216", "130", "29", null, null, this);
            obj.set_taborder("37");
            obj.set_text("검수확인사업장코드");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_linespace("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "301", "216", "130", "29", null, null, this);
            obj.set_taborder("39");
            obj.set_text("검수확인사용자ID");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_linespace("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "649", "93", "130", "29", null, null, this);
            obj.set_taborder("7");
            obj.set_text("사업장팀코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "301", "244", "130", "29", null, null, this);
            obj.set_taborder("47");
            obj.set_text("검수완료사용자ID");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_linespace("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "301", "65", "130", "29", null, null, this);
            obj.set_taborder("25");
            obj.set_text("매입참조구분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static8", "absolute", "649", "121", "130", "29", null, null, this);
            obj.set_taborder("9");
            obj.set_text("매입처팀코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "301", "37", "130", "29", null, null, this);
            obj.set_taborder("18");
            obj.set_text("검수번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "301", "300", "130", "29", null, null, this);
            obj.set_taborder("32");
            obj.set_text("비고내용");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "301", "272", "130", "29", null, null, this);
            obj.set_taborder("51");
            obj.set_text("검수완료서명파일");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_linespace("5");
            this.addChild(obj.name, obj);

            obj = new Static("btn_status", "absolute", "631", "14", null, "21", "136", null, this);
            obj.set_taborder("5");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_refresh", "absolute", null, "8", "55", "21", "18", null, this);
            obj.set_taborder("56");
            obj.set_text("새로고침");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_NH_SLP_DT", "absolute", "146", "188", "156", "29", null, null, this);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "301", "188", "130", "29", null, null, this);
            obj.set_taborder("59");
            obj.set_text("경제통합전표번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("st_NH_NA_SLPNO", "absolute", "430", "188", "220", "29", null, null, this);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "17", "188", "130", "29", null, null, this);
            obj.set_taborder("57");
            obj.set_text("경제통합전표일자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "17", "300", "130", "29", null, null, this);
            obj.set_taborder("61");
            obj.set_text("EDI인터페이스ID");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_linespace("5");
            this.addChild(obj.name, obj);

            obj = new Static("st_EDI_IF_ID", "absolute", "146", "300", "156", "29", null, null, this);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "301", "328", "130", "29", null, null, this);
            obj.set_taborder("63");
            obj.set_text("변경일시");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("st_LSCHG_DTM", "absolute", "430", "328", "349", "29", null, null, this);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "17", "356", "130", "29", null, null, this);
            obj.set_taborder("67");
            obj.set_text("결과수신");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_linespace("5");
            this.addChild(obj.name, obj);

            obj = new Static("st_RSP_C_CNTN", "absolute", "146", "356", "787", "29", null, null, this);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            obj.set_wordwrap("none");
            this.addChild(obj.name, obj);

            obj = new Static("st_FSRG_DTM", "absolute", "146", "328", "156", "29", null, null, this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_CNR_CMPL_ENO", "absolute", "146", "272", "156", "29", null, null, this);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "130", "17", "67", null, null, this);
            obj.set_taborder("70");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "301", "93", "130", "29", null, null, this);
            obj.set_taborder("71");
            obj.set_text("사업장명");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_linespace("5");
            this.addChild(obj.name, obj);

            obj = new Static("st_CLNTNM", "absolute", "430", "93", "220", "29", null, null, this);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "933", "123", null, "67", "0", null, this);
            obj.set_taborder("75");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "301", "121", "130", "29", null, null, this);
            obj.set_taborder("76");
            obj.set_text("매입처거래처명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("st_BUYPL_CLNTNM", "absolute", "430", "121", "220", "29", null, null, this);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "7", "178", null, "10", "4", null, this);
            obj.set_taborder("78");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "649", "188", "130", "29", null, null, this);
            obj.set_taborder("79");
            obj.set_text("경제통합전송상태");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("st_PRC_YN", "absolute", "778", "188", "155", "29", null, null, this);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "876", "29", "56", "8", null, null, this);
            obj.set_taborder("82");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "876", "0", "56", "8", null, null, this);
            obj.set_taborder("83");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static152", "absolute", "15", "394", "301", "21", null, null, this);
            obj.set_taborder("84");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "649", "149", "130", "29", null, null, this);
            obj.set_taborder("85");
            obj.set_text("경제통합정정구분");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_linespace("5");
            this.addChild(obj.name, obj);

            obj = new Static("st_NA_CRC_CAN_DSC", "absolute", "778", "149", "155", "29", null, null, this);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgView", "absolute", "778", "272", "155", "85", null, null, this);
            obj.set_taborder("87");
            obj.set_stretch("fixaspectratio");
            obj.style.set_border("1 solid #ccd3d5ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "15", "14", "88", "21", null, null, this);
            obj.set_taborder("88");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 950, 636, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popupPda");
            		p.set_cssclass("sta_WF_PopupTitle");
            		p.set_titletext("검수내역상세");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","st_NA_BZPLC","text","pda_mst","NA_BZPLC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","st_NA_TEAM_C","text","pda_mst","TEAM_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","st_NA_SLPNO","text","pda_mst","NA_SLPNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","st_CLNTNM","text","pda_mst","NA_BZPLC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","st_RSP_C_CNTN","text","pda_mst","RSP_C_CNTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","st_NA_TRMNO","text","pda_mst","NA_TRMNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","st_CNR_WRS_DSC","text","pda_mst","CNR_WRS_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","st_BUYPL_NA_TRPL_C","text","pda_mst","BUYPL_NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","st_BUYPL_NA_TEAM_C","text","pda_mst","BUYPL_TEAM_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","st_BYNG_REF_DSC","text","pda_mst","BYNG_REF_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","st_TR_BASS_NO","text","pda_mst","TR_BASS_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","st_FSRG_DTM","text","pda_mst","FSRG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","st_RMK_CNTN","text","pda_mst","RMK_CNTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","st_CNR_STS_DSC","text","pda_mst","CNR_STS_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","st_CNR_FIX_NA_BZPLC","text","pda_mst","CNR_FIX_NA_BZPLC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","st_CNR_FIX_USR_ID","text","pda_mst","CNR_FIX_USR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","st_CNR_FIX_DTM","text","pda_mst","CNR_FIX_DTM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","st_CNR_CMPL_NA_BZPLC","text","pda_mst","CNR_CMPL_NA_BZPLC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","st_CNR_CMPL_USR_ID","text","pda_mst","CNR_CMPL_USR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","st_CNR_CMPL_ENO","text","pda_mst","CNR_CMPL_ENO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","st_CNR_CMPL_SIGN_FN","text","pda_mst","CNR_CMPL_SIGN_FN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","st_CNR_CMPL_DTM","text","pda_mst","CNR_CMPL_DTM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","st_BUYPL_CLNTNM","text","pda_mst","BUYPL_NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","st_NH_NA_SLPNO","text","pda_mst","NH_NA_SLPNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","st_EDI_IF_ID","text","pda_mst","EDI_IF_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","st_LSCHG_DTM","text","pda_mst","LSCHG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","st_BUYPL_CLNTNM","text","pda_mst","BUYPL_CLNTNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","st_CLNTNM","text","pda_mst","CLNTNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","st_PRC_YN","text","pda_mst","PRC_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","st_NA_CRC_CAN_DSC","text","pda_mst","NA_CRC_CAN_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","st_RSP_C_CNTN","tooltiptext","pda_mst","RSP_C_CNTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","imgView","image","ds_img","PICTURE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("PDA_CN_002002.xfdl", "lib::comLib.xjs");
        this.registerScript("PDA_CN_002002.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        var NA_BZPLC = "";
        var NA_TEAM_C = "";
        var SLP_DT = "";
        var NA_SLPNO = "";
        var CNR_STS_DSC = ""; //검수상태
        var CNR_WRS_DSC = ""; //검수상품구분
        var NA_CRC_CAN_DSC = ""; //경제통합매입정정코드구분
        var status = "";
        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        	this.NA_BZPLC = this.parent.NA_BZPLC;
        	this.NA_TEAM_C = this.parent.NA_TEAM_C;
        	this.SLP_DT = this.parent.SLP_DT;
        	this.NA_SLPNO = this.parent.NA_SLPNO;
        	
        	this.fn_pdaSearch();
        }

        this.fn_afterFormOnload = function()
        {
        	//페이지 로딩후 실행부분
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        /* 검색 */
        this.fn_pdaSearch = function()
        {
        	var sSvcID        = "InspectionDetail";
        	var sURL          = "svc::rest/pda/InspectionDetail";
        //	var sInDatasets   = "ds_pageVO=ds_pageVO";
        	var sInDatasets   = "";
        	var sOutDatasets  = "pda_mst=pda_mst pda_detail=pda_detail ds_img=ds_img";
        	var sArgument     = "NA_BZPLC="+ this.NA_BZPLC +
        	                    " NA_TEAM_C=" + this.NA_TEAM_C +
        	                    " SLP_DT=" + this.SLP_DT +
        	                    " NA_SLPNO=" + this.NA_SLPNO;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* 새로고침 */
        this.fn_pdaRefresh = function()
        {
        	var sSvcID        = "InspectionRefresh";
        	var sURL          = "svc::rest/pda/InspectionDetail";
        //	var sInDatasets   = "ds_pageVO=ds_pageVO";
        	var sInDatasets   = "";
        	var sOutDatasets  = "pda_mst=pda_mst pda_detail=pda_detail ds_img=ds_img";
        	var sArgument     = "NA_BZPLC="+ this.NA_BZPLC +
        	                    " NA_TEAM_C=" + this.NA_TEAM_C +
        	                    " SLP_DT=" + this.SLP_DT +
        	                    " NA_SLPNO=" + this.NA_SLPNO;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_updatePdaResult = function(status)
        {       
            var sSvcID        = "updatePdaResult";
        	var sURL          = "svc::rest/pda/UpdateDetail";
        	var sInDatasets   = "pda_mst=pda_mst pda_detail=pda_detail";
        	var sOutDatasets  = "";
        	var sArgument     = "status=" + this.status;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_formatDate = function(dateStr)
        {
        	if (dateStr && dateStr.length == 8) {
        		dateStr = dateStr.substring(0, 4) + "-" + dateStr.substring(4, 6) + "-" + dateStr.substring(6, 8)
        	}
        	return dateStr;
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
         	if(ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}
        	
        	if(svcID == "InspectionDetail"){
         		if(this.pda_mst.rowcount == 0){
        			this.grd_master.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));	
        			alert("데이터가 없습니다.");
        			this.close();
        			return;
        		}
        		
        		//검수일자
        		this.st_SLP_DT.set_text(this.fn_formatDate(this.pda_mst.getColumn(0, "SLP_DT")));
        		
        		//근거전표일자
        		this.st_ODR_DT.set_text(this.fn_formatDate(this.pda_mst.getColumn(0, "ODR_DT")));
        		
        		//경제통합전표일자
        		this.st_NH_SLP_DT.set_text(this.fn_formatDate(this.pda_mst.getColumn(0, "NH_SLP_DT")));
        		
        		//서명이미지보이기
        		if(this.ds_img.rowcount == 0) {
        			this.imgView.set_text("서명 이미지 없음");
        		}
        		
        		CNR_STS_DSC = this.pda_mst.getColumn(0, "CNR_STS_DSC");
        		PRC_YN = this.pda_mst.getColumn(0, "PRC_YN");
        		CNR_WRS_DSC = this.pda_mst.getColumn(0, "CNR_WRS_DSC");
        		NA_CRC_CAN_DSC = this.pda_mst.getColumn(0, "NA_CRC_CAN_DSC");
        		
        		//검수상품구분코드
        		if (CNR_WRS_DSC == '1') {
        			this.st_CNR_WRS_DSC.set_text("상품");
        		} else if (CNR_WRS_DSC == '2') {
        			this.st_CNR_WRS_DSC.set_text("덤");
        		}
        		
        		//경제통합정정취소구분코드
         		if (NA_CRC_CAN_DSC == '0') {
         			this.st_NA_CRC_CAN_DSC.set_text("등록");
         		} else if (NA_CRC_CAN_DSC == '9') {
         			this.st_NA_CRC_CAN_DSC.set_text("취소");
         		}
        			
        		switch(CNR_STS_DSC) {
        		case "1":
        			this.btn_status.set_text("검수상태 : 진행");
        			this.btn_status.set_visible(true);
        			this.btn_confirm.set_visible(true);
        			this.btn_refresh.set_visible(false);
        			this.st_CNR_STS_DSC.set_text("진행");
        			break;
        		case "2":
        			if(PRC_YN == "N" || PRC_YN == "P" ){
        				//alert("검수완료 : 상태변경 처리중입니다.");
        				this.btn_status.set_visible(true);
        				this.btn_status.set_text("검수상태 : 완료 처리중...");
        				this.btn_status.set_visible(true);
        				this.st_CNR_STS_DSC.set_text("완료 처리중");
        				this.btn_refresh.set_visible(true);
        				break;
        			}
        			this.btn_status.set_text("검수상태 : 확인");
        			this.btn_status.set_visible(true);
        			this.btn_finish.set_visible(true);
        			this.btn_init.set_visible(true);
        			this.btn_refresh.set_visible(false);
        			this.st_CNR_STS_DSC.set_text("확인");
        			break;
        		case "3":
        			if(PRC_YN == "N" || PRC_YN == "P" ){
        				//alert("검수완료취소 : 상태변경 처리중입니다.");
        				this.btn_status.set_text("검수상태 : 완료취소 처리중...");
        				this.btn_status.set_visible(true);
        				this.st_CNR_STS_DSC.set_text("완료취소 처리중");
        				this.btn_refresh.set_visible(true);
        				break;
        			}
        			this.btn_status.set_text("검수상태 : 완료");
        			this.btn_status.set_visible(true);
        			this.btn_cancle.set_visible(true);
        			this.btn_refresh.set_visible(false);
        			this.st_CNR_STS_DSC.set_text("완료");
        			break;
        		}
        		
        		if (CNR_STS_DSC == "1") { //셀 정보 변경함.
        			this.grd_pdaD.setCellProperty("Body", 5, "displaytype", "number");
        			this.grd_pdaD.setCellProperty("Body", 5, "editdisplay", "display");
        			this.grd_pdaD.setCellProperty("Body", 5, "edittype", "text");
        		}
        		
        	} else if(svcID == "updatePdaResult"){
        		if (this.status == "3") {
        			alert("검수완료 : 상태변경 처리중입니다.");
        		} else if (this.status == "2") {
        			alert("검수완료취소 : 상태변경 처리중입니다.");
        		}
        		this.reload();
        	} else if(svcID == "InspectionRefresh"){
        		this.reload();
        	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.common_onclick = function(obj,e)
        {
             switch (obj.id) {
        		case "btn_confirm":
                 this.status = "2";
        			break;
        		case "btn_finish":
        		 this.status = "3";
        			break;
        		case "btn_cancle":
        		 this.status = "2";
        			break;
        		case "btn_init":
        		 this.status = "1";
        			break;
        	}
            
            this.fn_updatePdaResult(status);
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_confirm.addEventHandler("onclick", this.common_onclick, this);
            this.btn_finish.addEventHandler("onclick", this.common_onclick, this);
            this.btn_cancle.addEventHandler("onclick", this.common_onclick, this);
            this.btn_init.addEventHandler("onclick", this.common_onclick, this);
            this.st_CNR_FIX_NA_BZPLC.addEventHandler("onclick", this.st_CNR_FIX_NA_BZPLC_onclick, this);
            this.grd_pdaD.addEventHandler("onkeydown", this.grd_master_onkeydown, this);
            this.grd_pdaD.addEventHandler("oncellclick", this.grd_master_oncellclick, this);
            this.btn_refresh.addEventHandler("onclick", this.fn_pdaSearch, this);

        };

        this.loadIncludeScript("PDA_CN_002002.xfdl");

       
    };
}
)();
