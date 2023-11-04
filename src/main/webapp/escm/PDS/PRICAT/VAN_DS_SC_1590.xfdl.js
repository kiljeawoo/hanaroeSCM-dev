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
                this.set_name("VAN_DS_SC_1590");
                this.set_titletext("온라인 취급상품 등록");
                this._setFormPosition(0,0,900,1425);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_uploadresult", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILEPATH\" type=\"STRING\" size=\"256\"/><Column id=\"ERR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ERR_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_uploadsave", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"VAN_C_RQ_NO\" type=\"STRING\" size=\"32\"/><Column id=\"FILE_SEQ\" type=\"STRING\" size=\"32\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILE_SIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"FILE_SYSTEM_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_trtwrs", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"25\"/><Column id=\"PDM_MFTCO\" type=\"STRING\" size=\"50\"/><Column id=\"WRS_STD\" type=\"STRING\" size=\"100\"/><Column id=\"ORGPL_NATCD\" type=\"STRING\" size=\"3\"/><Column id=\"PD_RGN\" type=\"STRING\" size=\"250\"/><Column id=\"AGLVPD_MFCPD_YN\" type=\"STRING\" size=\"1\"/><Column id=\"MTR_AGLVPD_ORG_ORGPL\" type=\"STRING\" size=\"250\"/><Column id=\"TOT_CAP\" type=\"BIGDECIMAL\" size=\"8\"/><Column id=\"UNT_CAP\" type=\"BIGDECIMAL\" size=\"8\"/><Column id=\"WRS_UNT_C\" type=\"STRING\" size=\"3\"/><Column id=\"ADLT_ATTC_REQUIRED_YN\" type=\"STRING\" size=\"1\"/><Column id=\"IMG_EXPL_FL_NM\" type=\"STRING\" size=\"40\"/><Column id=\"IMG_FL0_NM\" type=\"STRING\" size=\"40\"/><Column id=\"IMG_FL1_NM\" type=\"STRING\" size=\"40\"/><Column id=\"IMG_FL2_NM\" type=\"STRING\" size=\"40\"/><Column id=\"IMG_FL3_NM\" type=\"STRING\" size=\"40\"/><Column id=\"IMG_DTL1_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_DTL2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_DTL3_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_DTL4_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_DTL5_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_wrs_img", this);
            obj._setContents("<ColumnInfo><Column id=\"xRowStatusType\" type=\"STRING\" size=\"1\"/><Column id=\"WRS_IMG_SEQ\" type=\"BIGDECIMAL\" size=\"18\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"25\"/><Column id=\"IMG_PATH\" type=\"STRING\" size=\"200\"/><Column id=\"IMG_NM\" type=\"STRING\" size=\"50\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_wrs_nfty_hdng", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_NTFY_C\" type=\"STRING\" size=\"4\"/><Column id=\"WRS_NTFY_HDNG_C\" type=\"STRING\" size=\"2\"/><Column id=\"WRS_NTFY_HDNG_CNTN\" type=\"STRING\" size=\"4000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_txt_dsc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rgn_c", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_trtwrs_sel", this);
            obj._setContents("<ColumnInfo><Column id=\"ON_REG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"25\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"3\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"3\"/><Column id=\"NA_WRS_SCLC\" type=\"STRING\" size=\"3\"/><Column id=\"NA_WRS_DTCF_C\" type=\"STRING\" size=\"3\"/><Column id=\"WRS_LFNM\" type=\"STRING\" size=\"256\"/><Column id=\"SL_UPR\" type=\"BIGDECIMAL\" size=\"18\"/><Column id=\"TXT_DSC\" type=\"STRING\" size=\"1\"/><Column id=\"PDM_MFTCO\" type=\"STRING\" size=\"50\"/><Column id=\"WRS_STD\" type=\"STRING\" size=\"100\"/><Column id=\"ORGPL_NATCD\" type=\"STRING\" size=\"3\"/><Column id=\"PD_RGN\" type=\"STRING\" size=\"250\"/><Column id=\"AGLVPD_MFCPD_YN\" type=\"STRING\" size=\"1\"/><Column id=\"MTR_AGLVPD_ORG_ORGPL\" type=\"STRING\" size=\"250\"/><Column id=\"TOT_CAP\" type=\"BIGDECIMAL\" size=\"18\"/><Column id=\"UNT_CAP\" type=\"BIGDECIMAL\" size=\"18\"/><Column id=\"WRS_UNT_C\" type=\"STRING\" size=\"3\"/><Column id=\"ADLT_ATTC_REQUIRED_YN\" type=\"STRING\" size=\"1\"/><Column id=\"WRS_NTFY_C\" type=\"STRING\" size=\"4\"/><Column id=\"IMG_EXPL_FL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_FL0_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_FL1_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_FL2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_FL3_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HTML_DATA\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_DTL1_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_DTL2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_DTL3_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_DTL4_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_DTL5_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_wrs_nfty_hdng_sel", this);
            obj._setContents("<ColumnInfo><Column id=\"SORT_SEQ\" type=\"BIGDECIMAL\" size=\"5\"/><Column id=\"WRS_NTFY_C\" type=\"STRING\" size=\"4\"/><Column id=\"WRS_NTFY_HDNG_C\" type=\"STRING\" size=\"2\"/><Column id=\"WRS_NTFY_HDNG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"WRS_NTFY_HDNG_EXPL\" type=\"STRING\" size=\"4000\"/><Column id=\"WRS_NTFY_HDNG_CNTN\" type=\"STRING\" size=\"4000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_wrs_nfty_sel", this);
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"STRING\" size=\"25\"/><Column id=\"WRS_NTFY_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_NTFY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NTFY_RMK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_wrs_unt_c", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_namo_editor", this);
            obj._setContents("<ColumnInfo><Column id=\"ORG_FILENM\" type=\"STRING\" size=\"256\"/><Column id=\"MHT_DATA\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ban_word", this);
            obj._setContents("<ColumnInfo><Column id=\"BANNED_WORD_NO\" type=\"STRING\" size=\"10\"/><Column id=\"BANNED_WORD_NM\" type=\"STRING\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stc_namo_msg03", "absolute", "487", "23", null, "36", "7", null, this);
            obj.set_taborder("99");
            obj.set_text("※ 업무처리 관련 문의 : 02) 2022 - 3473, 3477, 3478, 3444\r\n※ 시스템 관련 문의 : 02) 1522-1211");
            obj.style.set_color("blue");
            obj.style.set_align("right middle");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "793", "1412", null, "24", "15", null, this);
            obj.set_taborder("98");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ad_b01", "absolute", "1025", "214", null, "29", "-901", null, this);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ad_b02", "absolute", "1025", "242", null, "29", "-901", null, this);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ad_b03", "absolute", "1025", "270", null, "29", "-901", null, this);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ad_b04", "absolute", "1025", "298", null, "29", "-901", null, this);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_bs_b02", "absolute", "109", "88", null, "29", "15", null, this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_bs_b00", "absolute", "109", "60", null, "29", "15", null, this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Div("div_menu", "absolute", "0", "0", "397", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "58", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear", "absolute", null, "0", "53", "21", "118", null, this);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "0", "41", "21", "15", null, this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("stc_bs_info", "absolute", "0", "37", "135", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("stc_bs_info_03", "absolute", "0", "88", "150", "29", null, null, this);
            obj.set_taborder("15");
            obj.set_text("상품분류");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("stc_bs_b03", "absolute", "109", "116", null, "29", "15", null, this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_bs_info_06", "absolute", "0", "116", "150", "29", null, null, this);
            obj.set_taborder("25");
            obj.set_text("과세구분코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("stc_bs_info_07", "absolute", "917", "144", "150", "29", null, null, this);
            obj.set_taborder("28");
            obj.set_text("생산자/제조원 (필수)");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_color("#ff2222ff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_bs_info_08", "absolute", "310", "116", "150", "29", null, null, this);
            obj.set_taborder("30");
            obj.set_text("상품규격");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "916", "189", "135", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("부가정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ad_info_02", "absolute", "1342", "270", "150", "29", null, null, this);
            obj.set_taborder("44");
            obj.set_text("판매단위총용량");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ad_info_03", "absolute", "1342", "298", "150", "29", null, null, this);
            obj.set_taborder("46");
            obj.set_text("기준용량");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ad_info_04", "absolute", "916", "298", "150", "29", null, null, this);
            obj.set_taborder("49");
            obj.set_text("표시단위");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ad_info_05", "absolute", "1342", "242", "150", "29", null, null, this);
            obj.set_taborder("51");
            obj.set_text("성인인증필수여부");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ad_info_01_d4", "absolute", "916", "242", "150", "29", null, null, this);
            obj.set_taborder("41");
            obj.set_text("원료농축산물원산지");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ad_info_01_d3", "absolute", "1342", "214", "150", "29", null, null, this);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("농축산물가공품여부");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ad_info_01_d2", "absolute", "916", "270", "150", "29", null, null, this);
            obj.set_taborder("39");
            obj.set_text("생산지역");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ad_info_01_d1", "absolute", "916", "214", "150", "29", null, null, this);
            obj.set_taborder("34");
            obj.set_text("국가 (필수)");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_color("#ff2222ff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "0", "164", "150", "21", null, null, this);
            obj.set_taborder("54");
            obj.set_text("상품고시정보 (필수)");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_color("#ff2222ff");
            this.addChild(obj.name, obj);

            obj = new Static("stc_no_info_01", "absolute", "0", "189", "110", "29", null, null, this);
            obj.set_taborder("55");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_color("#222222ff");
            this.addChild(obj.name, obj);

            obj = new Static("stc_no_b01", "absolute", "109", "189", null, "29", "15", null, this);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_wrs_ntfy", "absolute", "115", "193", "365", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("56");
            obj.set_innerdataset("@ds_wrs_nfty_sel");
            obj.set_codecolumn("WRS_NTFY_C");
            obj.set_datacolumn("WRS_NTFY_NM");
            obj.set_type("dropdown");
            obj.set_displayrowcount("10");

            obj = new Grid("grd_wrs_nfty_hdng", "absolute", "0", "217", null, "196", "15", null, this);
            obj.set_taborder("58");
            obj.set_binddataset("ds_wrs_nfty_hdng_sel");
            obj.set_autosizingtype("none");
            obj.set_extendsizetype("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"240\" band=\"left\"/><Column size=\"240\"/><Column size=\"240\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순서\"/><Cell col=\"1\" text=\"품목명\"/><Cell col=\"2\" text=\"품목내용 입력\"/><Cell col=\"3\" text=\"항목설명\"/></Band><Band id=\"body\"><Cell text=\"bind:SORT_SEQ\"/><Cell col=\"1\" style=\"align:left middle;\" text=\"bind:WRS_NTFY_HDNG_NM\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"expr:comp.parent.setNtfyCustomerInfoFix(currow)\" style=\"align:left middle;\" text=\"bind:WRS_NTFY_HDNG_CNTN\" editlimit=\"4000\" editlengthunit=\"ascii\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" style=\"align:left middle;\" text=\"bind:WRS_NTFY_HDNG_EXPL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "0", "449", "180", "21", null, null, this);
            obj.set_taborder("59");
            obj.set_text("상품이미지");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("stc_wrs_img_01", "absolute", "0", "474", "137", "29", null, null, this);
            obj.set_taborder("60");
            obj.set_text("대표이미지 (필수)");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_color("#ff2222ff");
            this.addChild(obj.name, obj);

            obj = new Static("stc_img_b01", "absolute", "136", "474", null, "29", "15", null, this);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "0", "676", "248", "21", null, null, this);
            obj.set_taborder("88");
            obj.set_text("상품상세내용 (필수)");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_color("#ff2222ff");
            this.addChild(obj.name, obj);

            obj = new FileUpload("fu_img_upload_rep", "absolute", "139", "478", "253", "21", null, null, this);
            obj.set_taborder("61");
            obj.set_multiselect("false");
            obj.getSetter("timeout").set("0");
            obj.getSetter("retry").set("0");
            obj.getSetter("async").set("true");
            obj.getSetter("onload").set("fu_img_upload_onload");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel_rep", "absolute", "393", "478", "51", "21", null, null, this);
            obj.set_taborder("62");
            obj.set_text("취소 ");
            this.addChild(obj.name, obj);

            obj = new Static("stc_bs_info_02", "absolute", "0", "60", "150", "29", null, null, this);
            obj.set_taborder("10");
            obj.set_text("상품 (필수)");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_color("#ff2222ff");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_na_wrs_lclc", "absolute", "154", "92", "40", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_maxlength("3");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_na_wrs_mclc", "absolute", "199", "92", "40", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_maxlength("3");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_na_wrs_sclc", "absolute", "244", "92", "40", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_maxlength("3");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_na_wrs_dtcf_c", "absolute", "289", "92", "40", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_maxlength("3");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_na_wrs_lcnm", "absolute", "334", "92", "363", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_txt_dsc", "absolute", "154", "120", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("26");
            obj.set_enable("false");
            obj.set_innerdataset("@ds_txt_dsc");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");

            obj = new Edit("edt_pdm_mftco", "absolute", "1071", "148", "235", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_maxlength("50");
            obj.set_lengthunit("ascii");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_orgpl_natcd", "absolute", "1070", "218", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("35");
            obj.set_innerdataset("@ds_rgn_c");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_displayrowcount("10");
            obj.set_visible("false");

            obj = new Edit("edt_pd_rgn", "absolute", "1070", "274", "235", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_maxlength("250");
            obj.set_visible("false");
            obj.set_enable("false");
            obj.set_lengthunit("ascii");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_aplvpd_mfcpd_yn", "absolute", "1501", "218", "150", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_value("0");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mtr_aglvpd_org_orgpl", "absolute", "1070", "246", "235", "21", null, null, this);
            obj.set_taborder("42");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("250");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_tot_cap", "absolute", "1496", "274", "235", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_mask("##,###,###");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_unt_cap", "absolute", "1496", "302", "235", "21", null, null, this);
            obj.set_taborder("47");
            obj.set_mask("##,###,###");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_wrs_unt_c", "absolute", "1070", "302", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("50");
            obj.set_innerdataset("@ds_wrs_unt_c");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.set_index("-1");

            obj = new CheckBox("chk_adlt_attc_required_yn", "absolute", "1501", "246", "150", "21", null, null, this);
            obj.set_taborder("52");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_wrs_img_02", "absolute", "0", "502", "137", "29", null, null, this);
            obj.set_taborder("67");
            obj.set_text("추가이미지1");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("stc_img_b02", "absolute", "136", "502", null, "29", "15", null, this);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new FileUpload("fu_img_upload_add1", "absolute", "139", "506", "253", "21", null, null, this);
            obj.set_taborder("68");
            obj.set_multiselect("false");
            obj.getSetter("timeout").set("0");
            obj.getSetter("retry").set("0");
            obj.getSetter("async").set("true");
            obj.getSetter("onload").set("fu_img_upload_onload");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel_add1", "absolute", "393", "506", "51", "21", null, null, this);
            obj.set_taborder("69");
            obj.set_text("취소 ");
            this.addChild(obj.name, obj);

            obj = new Static("stc_wrs_img_03", "absolute", "0", "530", "137", "29", null, null, this);
            obj.set_taborder("74");
            obj.set_text("추가이미지2");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("stc_img_b03", "absolute", "136", "530", null, "29", "15", null, this);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new FileUpload("fu_img_upload_add2", "absolute", "139", "534", "253", "21", null, null, this);
            obj.set_taborder("75");
            obj.set_multiselect("false");
            obj.getSetter("timeout").set("0");
            obj.getSetter("retry").set("0");
            obj.getSetter("async").set("true");
            obj.getSetter("onload").set("fu_img_upload_onload");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel_add2", "absolute", "393", "534", "51", "21", null, null, this);
            obj.set_taborder("76");
            obj.set_text("취소 ");
            this.addChild(obj.name, obj);

            obj = new Static("stc_wrs_img_04", "absolute", "0", "621", "137", "29", null, null, this);
            obj.set_taborder("81");
            obj.set_text("라벨이미지 (필수)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_wordwrap("none");
            obj.style.set_color("#ff2222ff");
            this.addChild(obj.name, obj);

            obj = new Static("stc_img_b04", "absolute", "136", "621", null, "29", "15", null, this);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new FileUpload("fu_img_upload_add3", "absolute", "139", "625", "253", "21", null, null, this);
            obj.set_taborder("82");
            obj.set_multiselect("false");
            obj.getSetter("timeout").set("0");
            obj.getSetter("retry").set("0");
            obj.getSetter("async").set("true");
            obj.getSetter("onload").set("fu_img_upload_onload");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel_add3", "absolute", "393", "625", "51", "21", null, null, this);
            obj.set_taborder("83");
            obj.set_text("취소 ");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_wrs_std", "absolute", "465", "120", "232", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_maxlength("100");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_showimage_rep", "absolute", "722", "478", "56", "21", null, null, this);
            obj.set_taborder("65");
            obj.set_text("보기");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_reg_img_rep", "absolute", "455", "478", "202", "21", null, null, this);
            obj.set_taborder("63");
            obj.set_text("등록이미지 :");
            obj.set_visible("false");
            obj.style.set_color("#333333ff");
            this.addChild(obj.name, obj);

            obj = new Static("stc_reg_img_add1", "absolute", "455", "506", "202", "21", null, null, this);
            obj.set_taborder("70");
            obj.set_text("등록이미지 :");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_showimage_add1", "absolute", "722", "506", "56", "21", null, null, this);
            obj.set_taborder("72");
            obj.set_text("보기");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_reg_img_add2", "absolute", "455", "534", "202", "21", null, null, this);
            obj.set_taborder("77");
            obj.set_text("등록이미지 :");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_showimage_add2", "absolute", "722", "534", "56", "21", null, null, this);
            obj.set_taborder("79");
            obj.set_text("보기");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_reg_img_add3", "absolute", "455", "625", "202", "21", null, null, this);
            obj.set_taborder("85");
            obj.set_text("등록이미지 :");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_showimage_add3", "absolute", "722", "625", "56", "21", null, null, this);
            obj.set_taborder("87");
            obj.set_text("보기");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete_add3", "absolute", "666", "625", "56", "21", null, null, this);
            obj.set_taborder("86");
            obj.set_text("삭제");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete_add2", "absolute", "666", "534", "56", "21", null, null, this);
            obj.set_taborder("78");
            obj.set_text("삭제");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete_add1", "absolute", "666", "506", "56", "21", null, null, this);
            obj.set_taborder("71");
            obj.set_text("삭제");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete_rep", "absolute", "666", "478", "56", "21", null, null, this);
            obj.set_taborder("64");
            obj.set_text("삭제");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_na_wrs_c", "absolute", "154", "64", "160", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_wrsnm", "absolute", "319", "64", "181", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_cssclass("WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup_na_wrs_c", "absolute", "505", "64", "21", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_show", "absolute", "927", "497", "150", "114", null, null, this);
            obj.set_taborder("90");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_mny_unit", "absolute", "1195", "120", "20", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("원");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_bs_info_05", "absolute", "917", "116", "150", "29", null, null, this);
            obj.set_taborder("22");
            obj.set_text("판매단가");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_sel_upr", "absolute", "1072", "120", "119", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_mask("#,###");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_namo_msg", "absolute", "0", "697", "685", "21", null, null, this);
            obj.set_taborder("93");
            obj.set_text("※ 툴바(도구모음)의 그림 버튼을 선택하여 업로드 할 수 있습니다. 상세내용 이미지는 최대 5개까지 업로드 가능합니다.");
            obj.style.set_color("darkblue");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save00", "absolute", null, "1394", "92", "21", "15", null, this);
            obj.set_taborder("94");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("stc_namo_msg00", "absolute", "205", "434", "650", "42", null, null, this);
            obj.set_taborder("95");
            obj.set_text("※ 이미지 사이즈 : <b v='true'>가로800픽셀*세로800픽셀</b> / 이미지 용량 : 1MB 미만 / RGB 이미지(jpg, jpeg) 등록\r\n※ 상품 이미지는 (농협몰 시스템에서 600*600으로) 자동 리사이징 처리됩니다.");
            obj.style.set_color("blue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_namo_msg01", "absolute", "495", "193", "258", "21", null, null, this);
            obj.set_taborder("96");
            obj.set_text("※ 취급 상품에 해당하는 고시 품목을 선택");
            obj.style.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("stc_namo_msg02", "absolute", "153", "676", "232", "21", null, null, this);
            obj.set_taborder("97");
            obj.set_text("※ 이미지 사이즈 : 900~1000*무제한");
            obj.style.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "595", "180", "21", null, null, this);
            obj.set_taborder("100");
            obj.set_text("라벨(상품표시사항) 이미지");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("stc_namo_msg04", "absolute", "205", "580", "650", "42", null, null, this);
            obj.set_taborder("101");
            obj.set_text("※ 이미지 사이즈 : <b v='true'>가로1000픽셀*<fc v='#ff0000'>세로제한없음</fc></b> / 이미지 용량 : 1MB 미만 / RGB 이미지(jpg, jpeg) 등록\r\n※ 라벨 이미지는 자동 리사이징을 지원하지 않습니다.(등록한 이미지가 그대로 온라인 반영)");
            obj.style.set_color("blue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("wb_namo", "absolute", "0", "730", null, "650", "15", null, this);
            obj.set_taborder("102");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 900, 1425, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1590");
            		p.set_titletext("온라인 취급상품 등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","div_edit.Radio00","value","ds_wrs","WRS_DSC");
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
        this.addIncludeScript("VAN_DS_SC_1590.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1590.xfdl", function() {
        /******************************************************************************/
        /* filename  : VAN_DS_SC_1590.xfdl                                            */
        /* comments  : 온라인취급상품등록                                          */
        /* developer : mjkang                                                         */
        /* add date  : 2017-09-04                                                     */
        /******************************************************************************/
        //include "lib::comLib.xjs";

        var arrCompWrsBase = [ this.div_menu
                             , this.edt_na_wrs_c
                             , this.edt_wrsnm
                             , this.edt_na_wrs_lclc
                             , this.edt_na_wrs_mclc
                             , this.edt_na_wrs_sclc
                             , this.edt_na_wrs_dtcf_c
                             , this.edt_na_wrs_lcnm
                             , this.mae_sel_upr
                             , this.cbo_txt_dsc
        					 , this.edt_wrs_std
                             , this.btn_clear
                             , this.btn_search
                             , this.btn_save
                             , this.btn_save00
                             , this.btn_popup_na_wrs_c
                             , this.mae_tot_cap
                             , this.mae_unt_cap
                             , this.cbo_wrs_unt_c
                             ]
        ;

        this.NAMO_DATA;
        this.NAMO_IMG;
        this.CHK_BODY;
        this.CHK_IMG;

        //개발. 상품상세내용 접근경로
        //var aMarketPath = "http://121.156.58.242/escm/amarket";
        //var aMarketPath = "C:/NHVANDATA/amarket";

        /******************************************************************************/
        /* function : btn_clear_onclick                                               */
        /* comments : init button onclick event                                       */
        /******************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        /******************************************************************************/
        /* function : fn_afterFormOnload                                              */
        /* comments : onload 처리후 처리 로직                                       */
        /******************************************************************************/
        this.fn_afterFormOnload = function()
        {
        	var param = [
         		{code:"TXT_DSC", dsName:"ds_txt_dsc", selecttype:"S"} // 과세구분코드
            ];
        	this.gfn_setCommonCode(param);
        	this.fn_getCommCode_1590();
        	this.fn_frmCompsEnable(false);
        	
        	var parent = this.getOwnerFrame();
        	if (parent.findEventHandler("onactivate", this.VAN_DS_SC_1590_onactivate, this) < 0) {
        		parent.setEventHandler("onactivate", this.VAN_DS_SC_1590_onactivate, this);
        	}

        	// 크로스에디터 로드
         	var ceUrl = "ce/blbdNamo.html?type=nhm";
         	if (application.gv_serverType != "LOCAL") {
        		ceUrl = "nhvan/ce/blbdNamo.html?type=nhm";
         	}

        	this.wb_namo.set_url(application.gv_serviceHtml_url + ceUrl);
        }

        this.fn_postOnLoad = function()
        {
        	// 조회에서 상세보기
        	var WRS_C = this.getOwnerFrame().arguments["FORM_PARAM"];
        	if (!this.gfn_isNull(WRS_C)) {
        		this.edt_na_wrs_c.set_value(WRS_C);
        		this.fn_callPopupNaWrsC(true);
        	}
        }

        /******************************************************************************/
        /* function : fn_getCommCode_1590                                             */
        /* comments : 공통코드조회                                                  */
        /******************************************************************************/
        this.fn_getCommCode_1590 = function()
        {
        	var sSvcID        = "searchCommCode1590";//통신아이디
        	var sURL          = "svc::rest/pds/pricat/Product/retrieveCommCode1590";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_rgn_c=ds_rgn_c ds_wrs_unt_c=ds_wrs_unt_c ds_wrs_nfty_sel=ds_wrs_nfty_sel ds_ban_word=ds_ban_word";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = "rgn_c='CM0025' txt_dsc='GD0001' wrs_unt_c='GD0017'";// 파라미터
        	var sCallbackFunc = "fn_callback_commcode";//콜백
        	var tranType      = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출 
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType, true);
        }

        /******************************************************************************/
        /* function : fn_callback_ntfy                                                */
        /* comments : 공통코드조회콜백                                             */
        /******************************************************************************/
        this.fn_callback_commcode = function(svcID,nCD,sMSG)
        {
        	if (nCD < 0) {
        		this.gfn_getMessage("alert", sMSG);
        		return;
        	} else {
        		//테스트용 임시데이터 셋팅
        		if (this.ds_rgn_c.rowcount == 0) {
        			var param = [  
        			    {code:"ETR_IV_RGN_C", dsName:"ds_rgn_c"    , selecttype:"N"} //국가코드
        			];
        			this.gfn_setCommonCode(param);
        		}
        		/*
        		if (this.ds_txt_dsc.rowcount == 0) {
        			var param = [  
        			    {code:"TXT_DSC"     , dsName:"ds_txt_dsc"  , selecttype:"N"} //과세구분
        			];
        			this.gfn_setCommonCode(param);
        		}
        		*/
        		if (this.ds_wrs_unt_c.rowcount == 0) {
        			var param = [  
        			    {code:"NA_WRS_UNT_C", dsName:"ds_wrs_unt_c", selecttype:"N"} //상품단위코드
        			];
        			this.gfn_setCommonCode(param);
        		}
        	}
        }

        /******************************************************************************/
        /* function : fn_frmCompsEnable                                               */
        /* comments : component enable / disable                                      */
        /******************************************************************************/
        this.fn_frmCompsEnable = function(bParam)
        {
        	try {
        	var arrFrmComps = this.components;
        	var iChk = 0;
        	for (var i = 0 ; i < arrFrmComps.length ; i++) {
        		iChk = 0;
        		if (arrFrmComps[i].valueOf() != "[object Static]") {
        			for (var j = 0 ; j < arrCompWrsBase.length ; j++) {
        				if (arrFrmComps[i].name == arrCompWrsBase[j].name) {
        					iChk++;
        					break;
        				}
        			}
        			if (iChk == 0) {
        				arrFrmComps[i].set_enable(bParam);
        			}
        		}
        	}
        	}catch(e) {trace(e);}
        }

        /******************************************************************************/
        /* function : btn_clear_onclick                                               */
        /* comments : init button onclick event                                       */
        /* argument : obj : Button object                                             */
        /*              e : ClickEventInfo                                            */
        /******************************************************************************/
        this.btn_clear_onclick = function(obj,e)
        {
        	this.reload();
        }

        /******************************************************************************/
        /* function : btn_search_onclick                                              */
        /* comments : search button onclick event                                     */
        /******************************************************************************/
        this.btn_search_onclick = function(obj,e)
        {
        	if (!this.fn_validationSearch()) {
        		return;
        	}

        	var fv_na_wrs_c = this.gfn_nullToEmpty(this.edt_na_wrs_c.value); 	// 1.상품코드

        	var params = "na_wrs_c='"+fv_na_wrs_c+"'";
        		
        	var sSvcID        = "retrieveOnWrsInfo";                              //통신아이디
        	var sURL          = "svc::rest/pds/pricat/Product/retrieveOnWrsInfo"; //호출할 서버 페이지 주소
        	var sInDatasets   = "";                             //보내는데이터셋
        	var sOutDatasets  = "ds_trtwrs_sel=ds_trtwrs_sel";  //화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;                                           //파라미터
        	var sCallbackFunc = "fn_callback_search";                             //콜백
        	var tranType      = "S";                                              // U:저장/삭제, S:조회
        	
        	//API 호출 
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType, true);
        }

        /******************************************************************************/
        /* function : fn_validationSearch                                             */
        /* comments : 조회전 유효성 체크                                            */
        /******************************************************************************/
        this.fn_validationSearch = function()
        {
        	if(this.gfn_isNull(this.edt_na_wrs_c.value))
        	{
        		//this.gfn_getMessage('alert','상품은 필수입력항목입니다.');
        		this.alert("상품은 필수입력항목입니다.");
        		this.edt_na_wrs_c.setFocus();
        		return false;
        	}
        	return true;
        }

        /******************************************************************************/
        /* function : fn_callback_search                                              */
        /* comments : 조회 콜백                                                      */
        /******************************************************************************/
        this.fn_callback_search = function(svcID,nCD,sMSG)
        {
        	if (nCD < 0) {
        		this.gfn_getMessage("alert", sMSG);
        		return;
        	} else {
        		if (this.ds_trtwrs_sel.rowcount > 0) {
        			this.fn_frmCompsEnable(true);
        			this.edt_na_wrs_c.set_enable(false);
        			this.edt_wrsnm.set_enable(false);
        			this.btn_popup_na_wrs_c.set_enable(false);
        			this.fn_setSelectDataWrsTrtWrs(this.ds_trtwrs_sel);
        			this.fn_setSelectDataWrsImg(this.ds_trtwrs_sel);
        		} else {
        			var alertMsg = "상품["  + this.edt_na_wrs_c.value +  " " + this.edt_wrsnm.value + "] \n"
        			             + "상품 정보에 상품의 정보가 존재하지 않습니다.";
        			alert(alertMsg);
        		}
        	}
        }

        /******************************************************************************/
        /* function : fn_setSelectDataWrsTrtWrs                                       */
        /* comments : 조회된 내용을 component에 셋팅                                */
        /******************************************************************************/
        this.fn_setSelectDataWrsTrtWrs = function(ds)
        {
        	//상품기본정보 값셋팅
        	this.edt_na_wrs_lclc.set_value(ds.getColumn(0, "NA_WRS_LCLC"));                       //경제통합상품대분류코드
        	this.edt_na_wrs_mclc.set_value(ds.getColumn(0, "NA_WRS_MCLC"));                       //경제통합상품중분류코드
        	this.edt_na_wrs_sclc.set_value(ds.getColumn(0, "NA_WRS_SCLC"));                       //경제통합상품소분류코드
        	this.edt_na_wrs_dtcf_c.set_value(ds.getColumn(0, "NA_WRS_DTCF_C"));                   //경제통합상품세분류코드
        	this.edt_na_wrs_lcnm.set_value(ds.getColumn(0, "WRS_LFNM"))                           //경제통합상품분류명
        	this.mae_sel_upr.set_value(ds.getColumn(0, "SL_UPR"));                                //판매단가
        	this.cbo_txt_dsc.set_value(ds.getColumn(0, "TXT_DSC"));                               //과세구분코드
        	this.edt_pdm_mftco.set_value(ds.getColumn(0, "PDM_MFTCO"));                           //생산자/제조원
        	this.edt_wrs_std.set_value(ds.getColumn(0, "WRS_STD"));                               //상품규격
        	this.cbo_orgpl_natcd.set_value(ds.getColumn(0, "ORGPL_NATCD"));                       //국가코드
        	this.edt_pd_rgn.set_value(ds.getColumn(0, "PD_RGN"));                                 //생산지역
        	this.chk_aplvpd_mfcpd_yn.set_value(ds.getColumn(0, "AGLVPD_MFCPD_YN"));               //농축상물가공품여부
        	this.edt_mtr_aglvpd_org_orgpl.set_value(ds.getColumn(0, "MTR_AGLVPD_ORG_ORGPL"));     //원료농축산물원산지
        	this.mae_tot_cap.set_value(ds.getColumn(0, "TOT_CAP"));                               //판매단위총용량
        	this.mae_unt_cap.set_value(ds.getColumn(0, "UNT_CAP"));                               //기준용량
        	this.cbo_wrs_unt_c.set_value(ds.getColumn(0, "WRS_UNT_C"));                           //상품단위코드
        	this.chk_adlt_attc_required_yn.set_value(ds.getColumn(0, "ADLT_ATTC_REQUIRED_YN"));   //성인인증필수여부
        	this.cbo_wrs_ntfy.set_value(ds.getColumn(0, "WRS_NTFY_C"));                           //상품고시코드
        	if (!this.gfn_isNull(ds.getColumn(0, "WRS_NTFY_C"))) {                                  //상품고시항목조회
        		this.cbo_wrs_ntfy_onitemchanged(this.cbo_wrs_ntfy);
        	}
        	
        	//온라인취급상품상세내용
        	if (!this.gfn_isNull(ds.getColumn(0, "IMG_EXPL_FL_NM"))) {
        		/*
        		 * 운영서버 설정문제로 was의 컨트롤러에서 mht파일을 제공하는 형태
        		 * 추후 문제가 수정되면 webtob방식으로 변경
        		 */
        		 
        		// PATH방식(webtob)
        		// var mftUrl = aMarketPath + "/" + this.edt_na_wrs_c.value + "/" + ds.getColumn(0, "IMG_EXPL_FL_NM");
        		// URL방식(was)
        		// 웹캐시를 방지하기 위한 현재시간 파라매터 포함
        		// 확장자(.mht)가 URL끝에 위치하지 않으면 나모에디터가 mht파일로 인식하지 못함 (주의점)
        		//var mftUrl = application.gv_server_url+"rest/pds/pricat/Product/onWrsInfoDtlConts?na_wrs_c="+this.edt_na_wrs_c.value+ "&t=" + Date.now() + "&fileName="+ds.getColumn(0, "IMG_EXPL_FL_NM");
          		//this.namoEditor.callMethod("OpenFile", mftUrl);
          		if (ds.getColumn(0, "IMG_EXPL_FL_NM").indexOf(".html") != -1) {
        			this.wb_namo.callMethod("setValue", ds.getColumn(0, "HTML_DATA"));
        		}
        	}
        }

        /******************************************************************************/
        /* function : fn_setSelectDataWrsImg                                          */
        /* comments : 조회된 내용을 component에 셋팅(image)                        */
        /******************************************************************************/
        this.fn_setSelectDataWrsImg = function(ds)
        {
        	var strReqImgInfo;
        	if (!this.gfn_isNull(ds.getColumn(0, "IMG_FL0_NM")) && ds.getColumn(0, "IMG_FL0_NM").valueOf() != "undefined") {
        		strReqImgInfo = "등록이미지 : " + ds.getColumn(0, "IMG_FL0_NM");
        		this.stc_reg_img_rep.set_text(strReqImgInfo);
        		this.stc_reg_img_rep.set_visible(true);
        		this.btn_showimage_rep.set_visible(true);
        		//this.btn_delete_rep.set_visible(true);
        	} else {
        		this.stc_reg_img_rep.set_text("");
        		this.stc_reg_img_rep.set_visible(false);
        		this.btn_showimage_rep.set_visible(false);
        		//this.btn_delete_rep.set_visible(false);
        	}

         	if (!this.gfn_isNull(ds.getColumn(0, "IMG_FL1_NM")) && ds.getColumn(0, "IMG_FL1_NM").valueOf() != "undefined") {
         		strReqImgInfo = "등록이미지 : " + ds.getColumn(0, "IMG_FL1_NM");
        		this.stc_reg_img_add1.set_text(strReqImgInfo);
        		this.stc_reg_img_add1.set_visible(true);
        		this.btn_showimage_add1.set_visible(true);
        		this.btn_delete_add1.set_visible(true);
         	} else {
        		this.stc_reg_img_add1.set_text("");
        		this.stc_reg_img_add1.set_visible(false);
        		this.btn_showimage_add1.set_visible(false);
        		this.btn_delete_add1.set_visible(false);
        	}

         	if (!this.gfn_isNull(ds.getColumn(0, "IMG_FL2_NM")) && ds.getColumn(0, "IMG_FL2_NM").valueOf() != "undefined") {
         		strReqImgInfo = "등록이미지 : " + ds.getColumn(0, "IMG_FL2_NM");
        		this.stc_reg_img_add2.set_text(strReqImgInfo);
        		this.stc_reg_img_add2.set_visible(true);
        		this.btn_showimage_add2.set_visible(true);
        		this.btn_delete_add2.set_visible(true);
         	} else {
        		this.stc_reg_img_add2.set_text("");
        		this.stc_reg_img_add2.set_visible(false);
        		this.btn_showimage_add2.set_visible(false);
        		this.btn_delete_add2.set_visible(false);
        	}

         	if (!this.gfn_isNull(ds.getColumn(0, "IMG_FL3_NM")) && ds.getColumn(0, "IMG_FL3_NM").valueOf() != "undefined") {
         		strReqImgInfo = "등록이미지 : " + ds.getColumn(0, "IMG_FL3_NM");
        		this.stc_reg_img_add3.set_text(strReqImgInfo);
        		this.stc_reg_img_add3.set_visible(true);
        		this.btn_showimage_add3.set_visible(true);
        		//this.btn_delete_add3.set_visible(true);
         	} else {
        		this.stc_reg_img_add3.set_text("");
        		this.stc_reg_img_add3.set_visible(false);
        		this.btn_showimage_add3.set_visible(false);
        		//this.btn_delete_add3.set_visible(false);
        	}

        	this.ds_wrs_img.clearData();
        	for (var i = 0 ; i < 4 ; i++) {
        		var strColumn = "IMG_FL"+i.toString()+"_NM";
        		if (!this.gfn_isNull(ds.getColumn(0, strColumn)) && ds.getColumn(0, strColumn).valueOf() != "undefined") {
        			var aRow = this.ds_wrs_img.addRow();
        			this.ds_wrs_img.setColumn(aRow, "xRowStatusType", "A");
        			this.ds_wrs_img.setColumn(aRow, "WRS_IMG_SEQ", i + 1);
        			this.ds_wrs_img.setColumn(aRow, "NA_WRS_C", ds.getColumn(0, "NA_WRS_C"));
        			this.ds_wrs_img.setColumn(aRow, "IMG_PATH", ds.getColumn(0, "FILE_PATH"));
        			this.ds_wrs_img.setColumn(aRow, "IMG_NM", ds.getColumn(0, strColumn));
        		}
        	}
        }

        /******************************************************************************/
        /* function : fn_downloadWrsImg                                               */
        /* comments : 이미지 local에 download                                        */
        /******************************************************************************/
        this.fn_downloadWrsImg = function(strSYSNM,strORGNM)
        {
        	var strDownUrl = application.gv_server_url+"rest/common/fileDownload?systemFileName="+strSYSNM+"&fileName="+strORGNM+"&isSampleFile=Y";
        	var wbs_dw     = this.gfn_createWebBorwserComponent(this);
        	
        	wbs_dw.set_url(strDownUrl);
        }

        
        /******************************************************************************/
        /* function : btn_save_onclick                                                */
        /* comments : save button onclick event                                       */
        /******************************************************************************/
        this.btn_save_onclick = function(obj,e)
        {
        	trace("btn_save_onclick 시작");
        	this.CHK_BODY = false;
        	this.CHK_IMG = false;
        	this.wb_namo.callMethod("getEditorInput", "Y"); // 크로스에디터 입력 값 체크
        }

        this.fn_save = function()
        {
        	if (!this.fn_validationSave()) {
        		return;
        	}
        	
        	this.fn_setSaveData();
        	
        	// alert("현재는 시범운영 기간이며, 등록하신 정보는 농협몰에서 확인을 하실 수 없음을 알려드립니다.");
        	if (application.confirm('[온라인 취급상품 등록 / 수정]저장하시겠습니까?')) {
        		var params 		  = "";
        		var sSvcID        = "insertOnWrsInfo";                                                            //통신아이디
        		var sURL          = "svc::rest/pds/pricat/Product/insertOnWrsInfo";                               // 호출할 서버 페이지 주소
        		var sInDatasets   = "ds_trtwrs=ds_trtwrs ds_wrs_nfty_hdng=ds_wrs_nfty_hdng ds_wrs_img=ds_wrs_img ds_namo_editor=ds_namo_editor";//보내는데이터셋
        		var sOutDatasets  = "";
        		var sArgument     = params;                                                                       // 파라미터
        		var sCallbackFunc = "fn_callback_save";                                                           //콜백
        		var tranType 	  = "U";                                                                          // U:저장/삭제, S:조회
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        	} else {
        		return false;
        	}
        }

        /******************************************************************************/
        /* function : fn_callback_save                                                */
        /* comments : 저장 callback                                                  */
        /******************************************************************************/
        this.fn_callback_save = function(svcID,nCD,sMSG)
        {
        	if (nCD < 0) {
        		this.gfn_getMessage("alert", sMSG);
        		return;
        	}
        	alert("저장 되었습니다.");
        	this.reload();
        }

        /******************************************************************************/
        /* function : fn_validationSave                                               */
        /* comments : 저장 전 유효성 체크                                           */
        /******************************************************************************/
        this.fn_validationSave = function()
        {
        	// 기본정보
        	if (this.gfn_isNull(this.edt_na_wrs_c.value)) {
        		alert("상품은 필수입력항목입니다.");
        		this.edt_na_wrs_c.setFocus();
        		return false;
        	}
        	/*
        	if (this.gfn_isNull(this.edt_pdm_mftco.value)) {
        		alert("생산자/제조원은 필수입력항목입니다.");
        		this.edt_pdm_mftco.setFocus();
        		return false;
        	}
        	
        	// 부가정보
        	if (this.gfn_isNull(this.cbo_orgpl_natcd.value)) {
        		alert("국가는 필수선택항목입니다.");
        		this.cbo_orgpl_natcd.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.edt_pd_rgn.value)) {
        		alert("생산지역은 필수입력항목입니다.");
        		this.edt_pd_rgn.setFocus();
        		return false;
        	}
        	*/
        	
        	// 고시정보
        	if (this.gfn_isNull(this.cbo_wrs_ntfy.value)) {
        		alert("상품고시정보는 필수선택항목입니다.");
        		this.cbo_wrs_ntfy.setFocus();
        		return false;
        	}
         	
         	//고시정보 및 금칙어관련
         	var strBanWord = "";
         	var strBanWordMsg = "";
         	var strNtfyData = "";
         	var bChk = true; 	
         	
         	for (var j = 0; j < this.ds_wrs_nfty_hdng_sel.rowcount; j++) {
        		var cntn = this.ds_wrs_nfty_hdng_sel.getColumn(j, "WRS_NTFY_HDNG_CNTN");
        		if (this.gfn_isNull(cntn)) {
        			this.alert("상품고시정보 [" + this.ds_wrs_nfty_hdng_sel.getColumn(j, "WRS_NTFY_HDNG_NM") + "] 를 입력해주세요.");
        			return;
        		}
        		strNtfyData += this.ds_wrs_nfty_hdng_sel.getColumn(j, "WRS_NTFY_HDNG_CNTN") + "\n";
         	}
         	
         	var strNamoData = this.NAMO_DATA;
         	
         	if (this.ds_ban_word.rowcount > 0) {
        		for (var i = 0; i < this.ds_ban_word.rowcount; i++) {
        			strBanWord = this.ds_ban_word.getColumn(i, "BANNED_WORD_NM");
        			if (strNtfyData.indexOf(strBanWord) > -1) {
        				bChk = false;
        				strBanWordMsg = "상품고시정보 품목내용 중 금칙어 '" + strBanWord + "'가 포함되어 있습니다.";
        				break;
        			}
        			if (strNamoData.indexOf(strBanWord) > -1) {
        				bChk = false;
        				strBanWordMsg = "상품상세설명 내용 중 금칙어 '" + strBanWord + "'가 포함되어 있습니다.";
        				break;
        			}
        		}
         	}
         	
        	if (!bChk) {
        		alert(strBanWordMsg);
        		return false;
        	}

        	// 이미지 (대표, 라벨)
        	var imgChkRep1 = this.ds_uploadsave.findRow("FILE_SEQ", "1"); // 업로드한 파일
        	var imgChkRep2 = this.ds_wrs_img.findRow("WRS_IMG_SEQ", 1); // 기등록된 파일
         	if (imgChkRep1 == -1 && imgChkRep2 == -1) {
         		this.alert("대표이미지는 필수입력항목입니다.");
         		this.fu_img_upload_rep.setFocus();
         		return false;
         	}
        	var imgChkAdd1 = this.ds_uploadsave.findRow("FILE_SEQ", "4"); // 업로드한 파일
        	var imgChkAdd2 = this.ds_wrs_img.findRow("WRS_IMG_SEQ", 4); // 기등록된 파일
         	if (imgChkAdd1 == -1 && imgChkAdd2 == -1) {
         		this.alert("라벨이미지는 필수입력항목입니다.");
         		this.fu_img_upload_add3.setFocus();
         		return false;
         	}
         	
        	return true;
        }

        /******************************************************************************/
        /* function : fn_setSaveData                                                  */
        /* comments : 저장할 값을 param dataset에 셋팅                              */
        /******************************************************************************/
        this.fn_setSaveData = function()
        {
        	this.ds_trtwrs.clearData();
        	this.ds_namo_editor.clearData();
        	this.ds_wrs_nfty_hdng.clearData();
        	
        	// 기준용량, 총용량, 표시단위 비활성화로 기본값 설정
        	this.mae_tot_cap.set_value("0");
        	this.mae_unt_cap.set_value("0");
        	this.cbo_wrs_unt_c.set_value("000");
        	
        	//기본정보셋팅
        	var aRow = this.ds_trtwrs.addRow();
        	this.ds_trtwrs.setColumn(aRow, "NA_WRS_C", this.edt_na_wrs_c.value); //경제통합상품코드
        	this.ds_trtwrs.setColumn(aRow, "PDM_MFTCO", this.edt_pdm_mftco.value); //생산자제조사
        	this.ds_trtwrs.setColumn(aRow, "WRS_STD", this.edt_wrs_std.value); //상품규격
        	this.ds_trtwrs.setColumn(aRow, "ORGPL_NATCD", this.cbo_orgpl_natcd.value); //원산지국가코드
        	this.ds_trtwrs.setColumn(aRow, "PD_RGN", this.edt_pd_rgn.value); //생산지역
        	this.ds_trtwrs.setColumn(aRow, "AGLVPD_MFCPD_YN", this.chk_aplvpd_mfcpd_yn.value); //농축산물가공품여부
        	this.ds_trtwrs.setColumn(aRow, "MTR_AGLVPD_ORG_ORGPL", this.edt_mtr_aglvpd_org_orgpl.value); //원료농축산물원산지
        	this.ds_trtwrs.setColumn(aRow, "ADLT_ATTC_REQUIRED_YN", String(this.chk_adlt_attc_required_yn.value)); //성인인증필수여부
        	
        	// 사용안함
        	this.ds_trtwrs.setColumn(aRow, "TOT_CAP", this.mae_tot_cap.value); //총용량(비활성화)
        	this.ds_trtwrs.setColumn(aRow, "UNT_CAP", this.mae_unt_cap.value); //단위용량(비활성화)
        	this.ds_trtwrs.setColumn(aRow, "WRS_UNT_C", this.cbo_wrs_unt_c.value); //상품단위코드(비활성화)
        	
        	//나모웹에디터MIMEValue 데이터 셋팅
        	this.NAMO_DATA = this.NAMO_DATA.replace(/(\/ce\/image\/)/gm, "/ce/nhmimg/" + this.edt_na_wrs_c.value + "/"); // 이미지 경로 변경
        	trace("this.NAMO_DATA111======================>"+this.NAMO_DATA);
        	aRow = this.ds_namo_editor.addRow();
        	this.ds_namo_editor.setColumn(aRow, "ORG_FILENM", this.edt_na_wrs_c.value + ".html");
        	this.ds_namo_editor.setColumn(aRow, "MHT_DATA", this.NAMO_DATA);
        	this.ds_namo_editor.setColumn(aRow, "IMG_DATA", this.NAMO_IMG);
        	
        	//상품고시항목상세정보셋팅
         	for (var i = 0 ; i < this.ds_wrs_nfty_hdng_sel.rowcount ; i++) {
         		aRow = this.ds_wrs_nfty_hdng.addRow();
         		this.ds_wrs_nfty_hdng.setColumn(aRow, "NA_WRS_C", this.edt_na_wrs_c.value);  //경제통합상품코드
         		this.ds_wrs_nfty_hdng.setColumn(aRow, "WRS_NTFY_C", this.cbo_wrs_ntfy.value);  //상품고시코드
         		this.ds_wrs_nfty_hdng.setColumn(aRow, "WRS_NTFY_HDNG_C", this.ds_wrs_nfty_hdng_sel.getColumn(i, "WRS_NTFY_HDNG_C"));  //상품고시항목코드
         		this.ds_wrs_nfty_hdng.setColumn(aRow, "WRS_NTFY_HDNG_CNTN", this.ds_wrs_nfty_hdng_sel.getColumn(i, "WRS_NTFY_HDNG_CNTN"));  //상품고시항목내용
         	}
         	
         	//이미지정보셋팅
         	for (var j = 0 ; j < this.ds_uploadsave.rowcount ; j++) {
        		if (this.ds_wrs_img.findRow("WRS_IMG_SEQ", this.ds_uploadsave.getColumn(j, "FILE_SEQ")) > -1) {
        			aRow = this.ds_wrs_img.findRow("WRS_IMG_SEQ", nexacro.toNumber(this.ds_uploadsave.getColumn(j, "FILE_SEQ")));

        			if (this.ds_uploadsave.getColumn(j, "FILE_STATUS") != "C") {
        				this.ds_wrs_img.setColumn(aRow, "xRowStatusType", "U");
        			} else {
        				this.ds_wrs_img.setColumn(aRow, "xRowStatusType", "C");
        			}
        		} else {
        			aRow = this.ds_wrs_img.addRow();
        			if (this.ds_uploadsave.getColumn(j, "FILE_STATUS") != "C") {
        				this.ds_wrs_img.setColumn(aRow, "xRowStatusType", "I");
        			} else {
        				this.ds_wrs_img.setColumn(aRow, "xRowStatusType", "C");
        			}
        			this.ds_wrs_img.setColumn(aRow, "WRS_IMG_SEQ", nexacro.toNumber(this.ds_uploadsave.getColumn(j, "FILE_SEQ"))); //상품이미지순번
        			this.ds_wrs_img.setColumn(aRow, "NA_WRS_C", this.edt_na_wrs_c.value); //경제통합상품코드
        		}

         		this.ds_wrs_img.setColumn(aRow, "IMG_NM", this.ds_uploadsave.getColumn(j, "FILE_SYSTEM_NAME").replace("temp_", "")); //이미지명
         		this.ds_wrs_img.setColumn(aRow, "IMG_PATH", this.ds_uploadsave.getColumn(j, "FILE_PATH")); //이미지명
         	}
         	
         	// 이미지 파일명 셋팅
         	this.ds_trtwrs.setColumn(0, "IMG_FL0_NM", this.ds_trtwrs_sel.getColumn(0, "IMG_FL0_NM"));
         	this.ds_trtwrs.setColumn(0, "IMG_FL1_NM", this.ds_trtwrs_sel.getColumn(0, "IMG_FL1_NM"));
         	this.ds_trtwrs.setColumn(0, "IMG_FL2_NM", this.ds_trtwrs_sel.getColumn(0, "IMG_FL2_NM"));
         	this.ds_trtwrs.setColumn(0, "IMG_FL3_NM", this.ds_trtwrs_sel.getColumn(0, "IMG_FL3_NM"));
         	
         	// 상세이미지 파일명 세팅
         	this.ds_trtwrs.setColumn(0, "IMG_DTL1_NM", this.ds_trtwrs_sel.getColumn(0, "IMG_DTL1_NM"));
         	this.ds_trtwrs.setColumn(0, "IMG_DTL2_NM", this.ds_trtwrs_sel.getColumn(0, "IMG_DTL2_NM"));
         	this.ds_trtwrs.setColumn(0, "IMG_DTL3_NM", this.ds_trtwrs_sel.getColumn(0, "IMG_DTL3_NM"));
         	this.ds_trtwrs.setColumn(0, "IMG_DTL4_NM", this.ds_trtwrs_sel.getColumn(0, "IMG_DTL4_NM"));
         	this.ds_trtwrs.setColumn(0, "IMG_DTL5_NM", this.ds_trtwrs_sel.getColumn(0, "IMG_DTL5_NM"));
         	
         	for (var k = 0 ; k < this.ds_wrs_img.rowcount ; k++) {
        		var i_img_seq = this.ds_wrs_img.getColumn(k, "WRS_IMG_SEQ");
        		var p_img_sts = this.ds_wrs_img.getColumn(k, "xRowStatusType");
        		
        		if (p_img_sts == "I" || p_img_sts == "U") {
        			this.ds_trtwrs.setColumn(0, "IMG_FL" +  String(i_img_seq - 1) + "_NM", this.ds_wrs_img.getColumn(k, "IMG_NM"));
        		} else if (p_img_sts == "D") {
        			this.ds_trtwrs.setColumn(0, "IMG_FL" +  String(i_img_seq - 1) + "_NM", "");
        		}
         	}
        }

        /******************************************************************************/
        /* function : btn_cancel_onclick                                              */
        /* comments : fileupload cancel event                                         */
        /******************************************************************************/
        this.btn_cancel_onclick = function(obj,e)
        {
        	var objnum;
        	var objFu;
         	switch (obj.name) {
         		case "btn_cancel_rep"  : objnum = "1";
         		                         objFu  = this.fu_img_upload_rep;
         		                         break;
         		case "btn_cancel_add1" : objnum = "2";
         		                         objFu  = this.fu_img_upload_add1;
         		                         break;
         		case "btn_cancel_add2" : objnum = "3";
         		                         objFu  = this.fu_img_upload_add2;
         		                         break;
         		case "btn_cancel_add3" : objnum = "4";
         		                         objFu  = this.fu_img_upload_add3;
         		                         break;
         		default                : objnum = "X";
         		                         objFu  = null;
         		                         break;
         	}
         	
         	if (objnum == "X") return;
         	
         	var fRow = this.ds_uploadsave.findRow("FILE_SEQ", objnum);
         	var bRet;
        	
        	if (fRow > -1) {
        		objFu.deleteItem(0);
        		objFu.appendItem();
        		bRet = this.ds_uploadsave.setColumn(fRow, "FILE_STATUS", "C");
        	}
        }

        /******************************************************************************/
        /* function : btn_delete_onclick                                              */
        /* comments : 등록이미지삭제버튼 onclick event                             */
        /******************************************************************************/
        this.btn_delete_onclick = function(obj,e)
        {
        	var objnum;
        	var objFu;
        	var objStc;
        	var objBtn;
        	
         	switch (obj.name) {
         		case "btn_delete_rep"  : objnum = "1";
         		                         objFu  = this.fu_img_upload_rep;
         		                         objStc = this.stc_reg_img_rep;
         		                         objBtn = this.btn_cancel_rep;
         		                         break;
         		case "btn_delete_add1" : objnum = "2";
         		                         objFu  = this.fu_img_upload_add1;
         		                         objStc = this.stc_reg_img_add1;
         		                         objBtn = this.btn_cancel_add1;
         		                         break;
         		case "btn_delete_add2" : objnum = "3";
         		                         objFu  = this.fu_img_upload_add2;
         		                         objStc = this.stc_reg_img_add2;
         		                         objBtn = this.btn_cancel_add2;
         		                         break;
         		case "btn_delete_add3" : objnum = "4";
         		                         objFu  = this.fu_img_upload_add3;
         		                         objStc = this.stc_reg_img_add3;
         		                         objBtn = this.btn_cancel_add3;
         		                         break;
         		default                : objnum = "X";
         		                         objFu  = null;
         		                         objStc = null;
         		                         objBtn = null;
         		                         break;
         	}
         	if (objnum == "X") return;
         	
         	var fRow = this.ds_uploadsave.findRow("FILE_SEQ", objnum);
         	var bRet;
        	
        	if (fRow > -1) {
        		objFu.deleteItem(0);
        		objFu.appendItem();
        		bRet = this.ds_uploadsave.deleteRow(fRow);
        	}

        	fRow = this.ds_wrs_img.findRow("WRS_IMG_SEQ", nexacro.toNumber(objnum));

        	if (fRow > -1) {
        		this.ds_wrs_img.setColumn(fRow, "xRowStatusType", "D");
        	}
        	
        	objFu.set_enable(!objFu.enable);
        	objBtn.set_enable(!objBtn.enable);
        	
        	if (obj.text == "삭제") {
        		objStc.style.set_color("red");
        		objStc.set_text(objStc.text.replace("등록이미지", "삭제예정이미지"));
        		obj.set_text("삭제취소");
        	} else {
        		objStc.style.set_color("333333ff");
        		objStc.set_text(objStc.text.replace("삭제예정이미지", "등록이미지"));
        		obj.set_text("삭제");
        	}
        }

        /******************************************************************************/
        /* function : fn_callPopupNaWrsC                                              */
        /* comments : call 상품조회팝업                                             */
        /******************************************************************************/
        this.fn_callPopupNaWrsC = function(params)
        {
        	if (params == true) {
        		if (this.gfn_nullToEmpty(this.edt_na_wrs_c.value).length > 0 && this.gfn_nullToEmpty(this.edt_na_wrs_c.value).length < 7) {
        			this.alert("상품코드 7자리 이상 입력하시기 바랍니다.");
        			return;
        		}
        		if (this.gfn_nullToEmpty(this.edt_wrsnm.value).length == 1) {
        			this.alert("상품명 2자이상 입력하시기 바랍니다.");
        			return;
        		}
        	}

        	var code = this.edt_na_wrs_c.value;
        	var textname = this.edt_wrsnm.value;
        	var param = {
        				autoType:params,
        				searchCode:code,
        				searchText:textname,
        				chkUsrTpc:'Y'
        	};
        	if (typeof params == "boolean") {
        		//if(!this.searPopValue(param)){return};
        	}
        	
        	var oArg = {paramMode:"U", dsArg:this.Dataset00, autoPop:param};
        	var sOption = "autosize=true, titleText=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("na_wrs_c","POPUP::POPUP_SRC_WRS.xfdl",oArg,sOption,sPopupCallBack);
        }

        /******************************************************************************/
        /* function : fn_popupAfter                                                   */
        /* comments : 상품조회 return popup                                          */
        /******************************************************************************/
        this.fn_popupAfter = function(strId,strVal)
        {
        	if (strVal != undefined) {
        		var arrVal = strVal.split(",");
        		if (strId == "na_wrs_c") {
        			this.edt_na_wrs_c.set_value(arrVal[0]);
        			this.edt_wrsnm.set_value(arrVal[1]);
        			this.btn_search_onclick();
        		}
        	}
        }

        /******************************************************************************/
        /* function : cbo_wrs_ntfy_onitemchanged                                      */
        /* comments : 고시품목 combo onitemchanged event                             */
        /******************************************************************************/
        this.cbo_wrs_ntfy_onitemchanged = function(obj,e)
        {
        	if (!this.gfn_isNull(obj.value)) {
        		this.fn_getWrsNtfyDtl();
        	} else {
        		this.ds_wrs_nfty_hdng_sel.clearData();
        	}
        }

        /******************************************************************************/
        /* function : fn_getWrsNtfyDtl                                                */
        /* comments : 고시항목상세조회                                              */
        /******************************************************************************/
        this.fn_getWrsNtfyDtl = function()
        {
        	var sSvcID        = "searchGdWrsNtfyDtl";//통신아이디
        	var sURL          = "svc::rest/pds/pricat/Product/retrieveGdWrsNtfyDtl";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_wrs_nfty_hdng_sel=ds_wrs_nfty_hdng_sel";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = "na_wrs_c='"+ this.edt_na_wrs_c.value +"' wrs_ntfy_c='"+this.cbo_wrs_ntfy.value+"'";// 파라미터
        	var sCallbackFunc = "fn_callback_ntfy_dtl";//콜백
        	var tranType      = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출 
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType, true);
        }

        this.fn_callback_ntfy_dtl = function(svcID,nCD,sMSG)
        {
        	if (nCD < 0) {
        		this.gfn_getMessage("alert", sMSG);
        		return;
        	} else {
        		// 아래 고시 정보 마지막이 AS유형이어야 함, 농협몰 고객센터만 입력하도록
        		var last = this.ds_wrs_nfty_hdng_sel.rowcount-1;
        		if (this.gfn_nullToEmpty(this.ds_wrs_nfty_hdng_sel.getColumn(last, "WRS_NTFY_HDNG_CNTN")) != "농협몰 고객센터/1588-0028") {
        			this.ds_wrs_nfty_hdng_sel.setColumn(last, "WRS_NTFY_HDNG_CNTN", "농협몰 고객센터/1588-0028");
        		}
        		if (!this.cbo_wrs_ntfy.enable) {
        			this.ds_wrs_nfty_hdng_sel.clearData();
        		}
        	}
        }

        // 고시 정보 마지막 행 입력 잠금(고객지원 관련 항목 고정값 사용 위함)
        this.setNtfyCustomerInfoFix = function(idx){
        	var last = this.ds_wrs_nfty_hdng_sel.rowcount-1;
        	if (last > -1 && idx == last) {
        		return "none";
        	}
        	return "text";
        }

        /******************************************************************************/
        /* function : fn_wrs_onkeydown                                                */
        /* comments : 상품코드 및 상품명 edit onkeydown event, 상품조회 call       */
        /******************************************************************************/
        this.fn_wrs_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13) {	
        		this.fn_callPopupNaWrsC(true);
        	}
        }

        /******************************************************************************/
        /* function : fn_bzpl_onkeydown                                               */
        /* comments : 사업장코드 및 사업장명 edit onkeydown event, 사업장팝업call */
        /******************************************************************************/
        this.fn_bzpl_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.fn_callPopupNaBzplC(true);
        	}
        }

        /******************************************************************************/
        /* function : fn_fileupload_onitemchanged                                     */
        /* comments : 상품이미지upload ,temp_상품코드_이미지구분 형태로 저장됨  */
        /******************************************************************************/
        this.fn_fileupload_onitemchanged = function(obj,e)
        {
        	var permExt   =  ["jpg", "jpeg"];                                        //허용확장자셋팅
        	var fileValue = String(obj.value);                                              //image path + name
        	var fileExt   = fileValue.substr(fileValue.lastIndexOf(".") + 1).toLowerCase(); //선택이미지 확장자(소문자로변환한형태)
        	var chkValid  = false;                                                          //허용확장자여부 flag
        	var fileList  = obj.filelist;                                                   //해당components의 filelist(virtual file 형태라 HTML5 ver에선 지원 되지 않는 듯 함)
        	
        	if (this.gfn_isNull(fileValue)) return;                                          //선택파일이 없으면 return;
        	
        	/*선택파일확장자가 없으면 return 처리*/
        	if (fileValue.indexOf(".") == -1) {
        		alert("잘못된 형식의 파일 확장자 입니다.");
        		obj.deleteItem(0);
        		obj.appendItem();
        		return;
        	}
        	
        	/*선택파일의 확장자가 허용되는 확장자인지 check*/
        	for (var i = 0; i < permExt.length; i++) {
        		if (permExt[i] == fileExt) {
        			chkValid = true;
        			break;
        		}
        	}
        	
        	if (!chkValid) {
        		alert("지원하지 않는 파일 형식입니다. 지원파일(jpg, jpeg");
        		obj.deleteItem(0);
        		obj.appendItem();
        		return;
        	}
        	
        	try{
        		/*파일허용갯수가 몇개인지 확인, filelist가 virtual file 형태로 들어오기 때문에 제대로 처리하지 못하는 듯 함.*/
        		if (fileList.length > 1) { 
        			alert("파일 최대 허용 갯수를 초과하였습니다. 최대(1개)");
        			obj.deleteItem(0);
        			obj.appendItem();
        			return;
        		}
        		
        		//파일사이즈 검사
        		var fileSize = fileList[0].getFileSize();
        		if (fileSize > (1*1048576)) {
        			alert('최대 파일용량을 초과하였습니다.\n(최대: 1MB)');
        			obj.deleteItem(0);
        			obj.appendItem();
        			return;
        		}
        	}catch(e){
        		fileList = '';
        	}
        	
        	var objName;
         	switch (obj.name) {
         		case "fu_img_upload_rep"  : objName = "rep";
         		                            break;
         		case "fu_img_upload_add1" : objName = "add1";
         		                            break;
         		case "fu_img_upload_add2" : objName = "add2";
         		                            break;
         		case "fu_img_upload_add3" : objName = "add3";
         		                            break;
         		default                   : objName = "X";
         		                            break;
         	}
         	
         	if (objName == "X") return;
         	
         	/*해당파일 upload 처리, 서버 해당 경로에 'temp_상품코드'으로 저장됨*/
        	obj.callUpload    = true;
        	var fileUploadUrl = application.gv_server_url + "rest/pds/pricat/Product/onWrsImgFileUpload"
        	                  + "?filepath=" + this.edt_na_wrs_c.value
        	                  + "&filename=temp_" + this.edt_na_wrs_c.value + "_" + objName + "." + fileExt;
        	var result = obj.upload(fileUploadUrl);
        }

        /******************************************************************************/
        /* function : fn_fileupload_onerror                                           */
        /* comments : 상품이미지upload ,temp_상품코드_이미지구분 형태로 저장됨  */
        /******************************************************************************/
        this.fn_fileupload_onerror = function(obj,e)
        {
        	alert(e.errormsg);
        	//obj.find('input').val('');
        }

        /******************************************************************************/
        /* function : fn_fileupload_onsuccess                                         */
        /* comments : image upload onsuccess event                                    */
        /******************************************************************************/
        this.fn_fileupload_onsuccess = function(obj,e)
        {
        	if (e.datasets != null) {
        		this.ds_uploadresult.clearData();
        		this.ds_uploadresult.copyData(e.datasets[0]);
        		if (this.ds_uploadresult.getColumn(0, "ERR_YN") == "1") {
        			alert(this.ds_uploadresult.getColumn(0, "ERR_MSG"));
        			obj.deleteItem(0);
        			obj.appendItem();
        			return;
        		}
        		this.fn_setWrsImageData(obj, this.ds_uploadresult);
        	}	
        }

        /******************************************************************************/
        /* function : fn_setWrsImageData                                              */
        /* comments : 이미지 업로드 처리후 이미지 정보를 하나의 데이터셋에 취합*/
        /******************************************************************************/
        this.fn_setWrsImageData = function(obj,ds)
        {
        	var objnum;
         	switch (obj.name) {
         		case "fu_img_upload_rep"  : objnum = "1";
         		                            break;
         		case "fu_img_upload_add1" : objnum = "2";
         		                            break;
         		case "fu_img_upload_add2" : objnum = "3";
         		                            break;
         		case "fu_img_upload_add3" : objnum = "4";
         		                            break;
         		default                   : objnum = "X";
         		                            break;
         	}
         	
         	if (objnum == "X") return;
         	
         	var fRow = this.ds_uploadsave.findRow("FILE_SEQ", objnum);
         	var aRow;
         	if (fRow > -1) {
         		aRow = fRow;
         	} else {
         		aRow = this.ds_uploadsave.addRow();
         	}
         		
         	this.ds_uploadsave.setColumn(aRow, "FILE_SEQ", objnum);
         	this.ds_uploadsave.setColumn(aRow, "FILE_NAME", ds.getColumn(0, "ORGFNAME"));
         	this.ds_uploadsave.setColumn(aRow, "FILE_SIZE", ds.getColumn(0, "FILESIZE"));
         	this.ds_uploadsave.setColumn(aRow, "FILE_SYSTEM_NAME", ds.getColumn(0, "SYSTEMFILENAME"));
         	this.ds_uploadsave.setColumn(aRow, "FILE_PATH", ds.getColumn(0, "FILEPATH"));
         	this.ds_uploadsave.setColumn(aRow, "FILE_STATUS", "N");
         	
         	ds.clearData();
        }

        /******************************************************************************/
        /* function : fn_showImage_onclick                                            */
        /* comments : 보기 버튼 onclick event, 이미지 show                          */
        /******************************************************************************/
        this.fn_showImage_onclick = function(obj,e)
        {
        	var objnum;
         	switch (obj.name) {
         		case "btn_showimage_rep"  : objnum = "0";
         		                            break;
         		case "btn_showimage_add1" : objnum = "1";
         		                            break;
         		case "btn_showimage_add2" : objnum = "2";
         		                            break;
         		case "btn_showimage_add3" : objnum = "3";
         		                            break;
         		default                   : objnum = "X";
         		                            break;
         	}
         	
         	if (objnum == "X") return;
        	
        	//파일다운로드시
         	var fv_na_wrs_c  = this.edt_na_wrs_c.value;
         	var fv_file_name = this.ds_trtwrs_sel.getColumn(0, "IMG_FL" + objnum + "_NM");
         	var strDownUrl = application.gv_server_url+"rest/pds/pricat/Product/onWrsInfoFileDownload?na_wrs_c="+fv_na_wrs_c+"&fileName="+fv_file_name;
         	var wbs_dw     = this.gfn_createWebBorwserComponent(this);
         	
         	wbs_dw.set_url(strDownUrl);

        	//이미지 뷰어로 보여줄때
        	//  	this.img_show.move(obj.getPixelLeft(), this.stc_img_b01.getPixelTop());
        	//  	
        	//  	var strImgColName = "IMG_FL" + objnum + "_NM";
        	//  	var strImgURL     = aMarketPath + "/" + this.edt_na_wrs_c.value + "/" + this.ds_trtwrs_sel.getColumn(0, strImgColName);
        	//  	alert(strImgURL);
        	//  	this.img_show.set_image(strImgURL);
        	//  	this.img_show.set_visible(true);
        }

        /******************************************************************************/
        /* function : img_show_onmouseleave                                           */
        /* comments : 이미지 visible false                                           */
        /******************************************************************************/
        this.img_show_onmouseleave = function(obj,e)
        {
        	obj.set_visible(false);
        	this.img_show.set_image("");
        }

        /******************************************************************************/
        /* function : img_show_onclick                                                */
        /* comments : 이미지 visible false                                           */
        /******************************************************************************/
        this.img_show_onclick = function(obj,e)
        {
        	obj.set_visible(false);
        	this.img_show.set_image("");
        }

        this.edt_na_wrs_c_ontextchanged = function(obj,e)
        {
        	this.edt_wrsnm.set_value("");
        }

        this.VAN_DS_SC_1590_onactivate = function(obj,e)
        {
        	if (!this.gfn_isNull(application.amarket)) {
        		obj.clearEventHandler("onactivate");
        		obj.form.reload();
        	}
        }

        this.wb_namo_onusernotify = function(obj,e)
        {
        	var result = e.userdata;
        	if (!this.gfn_isNull(result)) {
        		var key = result.substring(0, 6);
        		var value = result.substring(6);
        		
        		if (key == "#INIT@") {
        			this.edt_na_wrs_c.setFocus();
        			this.div_load.set_visible(false);
        			
        			// 조회에서 상세보기
        			var WRS_C = this.getOwnerFrame().arguments["FORM_PARAM"];
        			//var WRS_C = this.getOwnerFrame().arguments["FORM_PARAM"] || application.amarket;
        			if (!this.gfn_isNull(WRS_C)) {
        		// 		application.amarket = "";
        		// 		this.getOwnerFrame().arguments["FORM_PARAM"] = "";
        				this.edt_na_wrs_c.set_value(WRS_C);
        				this.fn_callPopupNaWrsC(true);
        			}
        		} else if (key == "#EDIT@") {
        			// 입력 값 체크 후 데이터 가져옴(텍스트 수 + 이미지 수)
        			var lens = value.split(",");
        			var textL = Number(lens[0]);
        			var imgL = Number(lens[1]);
        			
        			if ((textL + imgL) == 0) {
        				this.alert("상품상세내용은 필수입력항목입니다.\n이미지 업로드 시 '900~1000(가로) * 무제한(세로)' 사이즈로 업로드 해주세요.");
        				return;
        			} else if (imgL > 5) {
        				this.alert("상품상세내용 내 이미지는 5개까지 등록할 수 있습니다.");
        				return;
        			} else {
        				this.wb_namo.callMethod("getImgList");
        				this.wb_namo.callMethod("getValue", false); // true : body값만 가져옴
        			}
        		} else if (key == "#IMGS@") {
        			this.CHK_IMG = true;
        			this.NAMO_IMG = value;
        			trace("thisNAMO_IMG======================>"+this.NAMO_IMG);
        	
        			if (this.CHK_BODY && this.CHK_IMG) {
        				this.fn_save();
        			}
        		} else if (key == "#HTML@") {
        			this.CHK_BODY = true;
        			this.NAMO_DATA = value;
        			trace("thisNAMO_DATA======================>"+this.NAMO_DATA);
        			
        			if (this.CHK_BODY && this.CHK_IMG) {
        				this.fn_save();
        			}
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("onsize", this.div_list_onsize, this);
            this.addEventHandler("onactivate", this.VAN_DS_SC_1590_onactivate, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_clear.addEventHandler("onclick", this.btn_clear_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.cbo_wrs_ntfy.addEventHandler("onitemchanged", this.cbo_wrs_ntfy_onitemchanged, this);
            this.fu_img_upload_rep.addEventHandler("onsuccess", this.fn_fileupload_onsuccess, this);
            this.fu_img_upload_rep.addEventHandler("onerror", this.fn_fileupload_onerror, this);
            this.fu_img_upload_rep.addEventHandler("onitemchanged", this.fn_fileupload_onitemchanged, this);
            this.btn_cancel_rep.addEventHandler("onclick", this.btn_cancel_onclick, this);
            this.fu_img_upload_add1.addEventHandler("onsuccess", this.fn_fileupload_onsuccess, this);
            this.fu_img_upload_add1.addEventHandler("onerror", this.fn_fileupload_onerror, this);
            this.fu_img_upload_add1.addEventHandler("onitemchanged", this.fn_fileupload_onitemchanged, this);
            this.btn_cancel_add1.addEventHandler("onclick", this.btn_cancel_onclick, this);
            this.fu_img_upload_add2.addEventHandler("onsuccess", this.fn_fileupload_onsuccess, this);
            this.fu_img_upload_add2.addEventHandler("onerror", this.fn_fileupload_onerror, this);
            this.fu_img_upload_add2.addEventHandler("onitemchanged", this.fn_fileupload_onitemchanged, this);
            this.btn_cancel_add2.addEventHandler("onclick", this.btn_cancel_onclick, this);
            this.fu_img_upload_add3.addEventHandler("onsuccess", this.fn_fileupload_onsuccess, this);
            this.fu_img_upload_add3.addEventHandler("onerror", this.fn_fileupload_onerror, this);
            this.fu_img_upload_add3.addEventHandler("onitemchanged", this.fn_fileupload_onitemchanged, this);
            this.btn_cancel_add3.addEventHandler("onclick", this.btn_cancel_onclick, this);
            this.btn_showimage_rep.addEventHandler("onclick", this.fn_showImage_onclick, this);
            this.btn_showimage_add1.addEventHandler("onclick", this.fn_showImage_onclick, this);
            this.btn_showimage_add2.addEventHandler("onclick", this.fn_showImage_onclick, this);
            this.btn_showimage_add3.addEventHandler("onclick", this.fn_showImage_onclick, this);
            this.btn_delete_add3.addEventHandler("onclick", this.btn_delete_onclick, this);
            this.btn_delete_add2.addEventHandler("onclick", this.btn_delete_onclick, this);
            this.btn_delete_add1.addEventHandler("onclick", this.btn_delete_onclick, this);
            this.btn_delete_rep.addEventHandler("onclick", this.btn_delete_onclick, this);
            this.edt_na_wrs_c.addEventHandler("onkeydown", this.fn_wrs_onkeydown, this);
            this.edt_na_wrs_c.addEventHandler("ontextchanged", this.edt_na_wrs_c_ontextchanged, this);
            this.edt_wrsnm.addEventHandler("onkeydown", this.fn_wrs_onkeydown, this);
            this.btn_popup_na_wrs_c.addEventHandler("onclick", this.fn_callPopupNaWrsC, this);
            this.img_show.addEventHandler("onmouseleave", this.img_show_onmouseleave, this);
            this.img_show.addEventHandler("onclick", this.img_show_onclick, this);
            this.btn_save00.addEventHandler("onclick", this.btn_save_onclick, this);
            this.wb_namo.addEventHandler("onusernotify", this.wb_namo_onusernotify, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1590.xfdl");
        this.loadPreloadList();
       
    };
}
)();
