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
                this.set_name("VAN_DS_SC_1401");
                this.set_titletext("거래처정보 수정 신청");
                this._setFormPosition(0,0,803,800);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_infodata", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NAAC_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"TRPL_ABR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_MBCO_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"UP_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"UP_NA_TRPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FZIP\" type=\"STRING\" size=\"256\"/><Column id=\"RZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"256\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"256\"/><Column id=\"NA_RGN_C\" type=\"STRING\" size=\"256\"/><Column id=\"RGN_CNM\" type=\"STRING\" size=\"256\"/><Column id=\"UP_RGN_CNM\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NAT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ATEL\" type=\"STRING\" size=\"256\"/><Column id=\"HTEL\" type=\"STRING\" size=\"256\"/><Column id=\"STEL\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_RGNO\" type=\"STRING\" size=\"256\"/><Column id=\"HFAX\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"MPSVNO\" type=\"STRING\" size=\"256\"/><Column id=\"MPHNO\" type=\"STRING\" size=\"256\"/><Column id=\"MPSQNO\" type=\"STRING\" size=\"256\"/><Column id=\"FMACH_PATS_TRT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPL_TXBZ_RPT_FORM_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_USR_SYS_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"ELT_TXBIL_UYN\" type=\"STRING\" size=\"256\"/><Column id=\"TR_STOP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TR_STOP_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"TR_STOP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"COPNO_CIF_NO\" type=\"STRING\" size=\"256\"/><Column id=\"REPMNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZCCNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZTPNM\" type=\"STRING\" size=\"256\"/><Column id=\"LIQ_SEL_RPT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"LIQ_WHSL_COMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"LIQ_RTL_COMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TXBZ_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CMENO\" type=\"STRING\" size=\"256\"/><Column id=\"LS_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"LS_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_NEW_ADR_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BLD_AMNNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_combo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">8801099000016</Col><Col id=\"data\">[8801099000016] 대상에프앤에프(주)</Col></Row><Row><Col id=\"code\">8801099000023</Col><Col id=\"data\">[8801099000023] 대상에프앤에프(주)동부지점</Col></Row><Row><Col id=\"code\">8801099000030</Col><Col id=\"data\">[8801099000030] 대상에프앤에프(주)서부지점</Col></Row><Row><Col id=\"code\">8801099000047</Col><Col id=\"data\">[8801099000047] 대상에프앤에프(주)남부지점(안양)</Col></Row><Row><Col id=\"code\">2000000000004</Col><Col id=\"data\">[8801099000054] 대상에프앤에프(주)남부지점(강원)</Col></Row><Row><Col id=\"code\">2000000000005</Col><Col id=\"data\">[8801099000061] 대상에프앤에프(주)대전지점</Col></Row><Row><Col id=\"code\">2000000000006</Col><Col id=\"data\">[8801099000078] 대상에프앤에프(주)광주지점</Col></Row><Row><Col id=\"code\">2000000000007</Col><Col id=\"data\">[8801099000085] 대상에프앤에프(주)대구지점</Col></Row><Row><Col id=\"code\">2000000000008</Col><Col id=\"data\">[8801099000092] 대상에프앤에프(주)부산지점</Col></Row><Row><Col id=\"code\">2000000000009</Col><Col id=\"data\">[8801099000108] 대상에프앤에프(주)신선지점</Col></Row><Row><Col id=\"code\">2000000000010</Col><Col id=\"data\">[8801099000115] 대상에프앤에프(주)지호상사</Col></Row><Row><Col id=\"code\">11</Col><Col id=\"data\">[8801099000122] 대상에프앤에프(주)청원유통</Col></Row><Row><Col id=\"code\">12</Col><Col id=\"data\">[8801099000139] 대상에프앤에프(주)승진상사</Col></Row><Row><Col id=\"code\">13</Col><Col id=\"data\">[8801099000146] 대상에프앤에프(주)여주대상</Col></Row><Row><Col id=\"code\">14</Col><Col id=\"data\">[8801099000153] 대상에프앤에프(주)청정원상사(위탁)</Col></Row><Row><Col id=\"code\">15</Col><Col id=\"data\">[8801099000160] 대상에프앤에프(주)대성상사</Col></Row><Row><Col id=\"code\">16</Col><Col id=\"data\">[8801099000177] 대상에프앤에프(주)대상위탁상사</Col></Row><Row><Col id=\"code\">17</Col><Col id=\"data\">[8801099000184] 대상에프앤에프(주)청정원상사(홍성)</Col></Row><Row><Col id=\"code\">18</Col><Col id=\"data\">[8801099000191] 대상에프앤에프(주)홍성위탁</Col></Row><Row><Col id=\"code\">19</Col><Col id=\"data\">[8801099000207] 대상에프앤에프(주)해송유통</Col></Row><Row><Col id=\"code\">20</Col><Col id=\"data\">[8801099000214] 대상에프앤에프(주)청정원태안위탁</Col></Row><Row><Col id=\"code\">21</Col><Col id=\"data\">[8801099000221] 대상에프앤에프(주)송암상사</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mbco_dsc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rlno_cfc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_trpl_dsc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_whsl_comp_c", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rtl_comp_c", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_tr_stop_rsnc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_bzpl_txbz", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_usr_sys_kdc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_trpl_rq", this);
            obj._setContents("<ColumnInfo><Column id=\"TGRM_DSC\" type=\"STRING\" size=\"7\"/><Column id=\"TMS_DT\" type=\"STRING\" size=\"8\"/><Column id=\"TMS_SQNO\" type=\"STRING\" size=\"7\"/><Column id=\"SVC_NM\" type=\"STRING\" size=\"15\"/><Column id=\"NA_C_RQ_NO\" type=\"STRING\" size=\"10\"/><Column id=\"NA_C_RQ_OBJ_DSC\" type=\"STRING\" size=\"1\"/><Column id=\"CTCPL_TELNO\" type=\"STRING\" size=\"14\"/><Column id=\"RQ_CNTN\" type=\"STRING\" size=\"100\"/><Column id=\"APV_RQ_NA_TRPLC\" type=\"STRING\" size=\"13\"/><Column id=\"FSRGMN_ENO\" type=\"STRING\" size=\"9\"/><Column id=\"FSRGMN_NA_TRPLC\" type=\"STRING\" size=\"13\"/><Column id=\"NA_TRPL_DSC\" type=\"STRING\" size=\"2\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"50\"/><Column id=\"TRPL_ABR_NM\" type=\"STRING\" size=\"50\"/><Column id=\"ZIP\" type=\"STRING\" size=\"6\"/><Column id=\"ZIP_SQNO\" type=\"STRING\" size=\"5\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"300\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"100\"/><Column id=\"TEL_NAT_NO\" type=\"STRING\" size=\"3\"/><Column id=\"ATEL\" type=\"STRING\" size=\"4\"/><Column id=\"HTEL\" type=\"STRING\" size=\"4\"/><Column id=\"STEL\" type=\"STRING\" size=\"4\"/><Column id=\"FAX_RGNO\" type=\"STRING\" size=\"4\"/><Column id=\"HFAX\" type=\"STRING\" size=\"4\"/><Column id=\"FAX_SQNO\" type=\"STRING\" size=\"4\"/><Column id=\"MPSVNO\" type=\"STRING\" size=\"4\"/><Column id=\"MPHNO\" type=\"STRING\" size=\"4\"/><Column id=\"MPSQNO\" type=\"STRING\" size=\"4\"/><Column id=\"NA_RGN_C\" type=\"STRING\" size=\"4\"/><Column id=\"FMACH_PATS_TRT_YN\" type=\"STRING\" size=\"1\"/><Column id=\"NA_MBCO_DSC\" type=\"STRING\" size=\"1\"/><Column id=\"UP_NA_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"NA_USR_SYS_KDC\" type=\"STRING\" size=\"2\"/><Column id=\"NA_BZPL_TXBZ_RPT_FORM_C\" type=\"STRING\" size=\"1\"/><Column id=\"ELT_TXBIL_UYN\" type=\"STRING\" size=\"1\"/><Column id=\"TRPL_DTL_TPC\" type=\"STRING\" size=\"4\"/><Column id=\"SAT_BIZ_YN\" type=\"STRING\" size=\"1\"/><Column id=\"OLD_NEW_ADR_DSC\" type=\"STRING\" size=\"1\"/><Column id=\"BLD_SQNO\" type=\"STRING\" size=\"25\"/><Column id=\"RODNM_ZIP\" type=\"STRING\" size=\"6\"/><Column id=\"RODNM_POST_SQNO\" type=\"STRING\" size=\"5\"/><Column id=\"RODNM_DONGUP\" type=\"STRING\" size=\"300\"/><Column id=\"RODNM_DONGBW\" type=\"STRING\" size=\"100\"/><Column id=\"TR_STOP_YN\" type=\"STRING\" size=\"1\"/><Column id=\"TR_STOP_DT\" type=\"STRING\" size=\"8\"/><Column id=\"TR_STOP_RSNC\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"VAN_C_RQ_NO\" type=\"STRING\" size=\"32\"/><Column id=\"FILE_SEQ\" type=\"STRING\" size=\"32\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILE_SIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"FILE_SYSTEM_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_CIF_INFO", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ATEL\" type=\"STRING\" size=\"256\"/><Column id=\"HTEL\" type=\"STRING\" size=\"256\"/><Column id=\"STEL\" type=\"STRING\" size=\"256\"/><Column id=\"MPSVNO\" type=\"STRING\" size=\"256\"/><Column id=\"MPHNO\" type=\"STRING\" size=\"256\"/><Column id=\"MPSQNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static13", "absolute", "109", "541", null, "29", "15", null, this);
            obj.set_taborder("199");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "109", "485", null, "29", "15", null, this);
            obj.set_taborder("164");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Div("div_menu", "absolute", "0", "0", "397", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "109", "197", null, "29", "15", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "109", "141", null, "29", "15", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00", "absolute", "0", "141", "110", "29", null, null, this);
            obj.set_taborder("4");
            obj.set_text("GLN");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title01", "absolute", "0", "169", "110", "29", null, null, this);
            obj.set_taborder("5");
            obj.set_text("실명번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title02", "absolute", "0", "197", "110", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_text("고객명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "109", "169", null, "29", "15", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title08", "absolute", "453", "197", "110", "29", null, null, this);
            obj.set_taborder("8");
            obj.set_text("법인번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pagename00", "absolute", "0", "116", "135", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_text("기본정보 확인");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title03", "absolute", "0", "225", "110", "29", null, null, this);
            obj.set_taborder("11");
            obj.set_text("세무구분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "109", "225", null, "29", "15", null, this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title09", "absolute", "453", "225", "110", "29", null, null, this);
            obj.set_taborder("14");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title07", "absolute", "453", "169", "110", "29", null, null, this);
            obj.set_taborder("17");
            obj.set_text("사업자유형");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data01", "absolute", "267", "173", "183", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data02", "absolute", "113", "201", "151", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data00", "absolute", "113", "145", "151", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data06", "absolute", "566", "201", "151", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "109", "281", null, "53", "15", null, this);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title04", "absolute", "0", "253", "110", "29", null, null, this);
            obj.set_taborder("40");
            obj.set_text("업종");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title05", "absolute", "0", "281", "110", "53", null, null, this);
            obj.set_taborder("41");
            obj.set_text("주류\r\n도매업체구분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "109", "253", null, "29", "15", null, this);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title11", "absolute", "453", "281", "110", "53", null, null, this);
            obj.set_taborder("43");
            obj.set_text("주류\r\n소매업체구분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title06", "absolute", "0", "333", "110", "53", null, null, this);
            obj.set_taborder("45");
            obj.set_text("주류\r\n판매신고번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "109", "333", null, "53", "15", null, this);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title10", "absolute", "453", "253", "110", "29", null, null, this);
            obj.set_taborder("51");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data03", "absolute", "113", "257", "151", "21", null, null, this);
            obj.set_taborder("53");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data04", "absolute", "267", "257", "183", "21", null, null, this);
            obj.set_taborder("54");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data07", "absolute", "566", "229", "151", "21", null, null, this);
            obj.set_taborder("58");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data08", "absolute", "566", "257", "151", "21", null, null, this);
            obj.set_taborder("59");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_sel_item00", "absolute", "113", "173", "151", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("63");
            obj.set_innerdataset("@ds_rlno_cfc");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");
            obj.set_enable("false");

            obj = new Radio("rdo_wrs_chk00", "absolute", "116", "229", "334", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_wrs_chk00_innerdataset = new Dataset("rdo_wrs_chk00_innerdataset", this.rdo_wrs_chk00);
            rdo_wrs_chk00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">면세</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">과세</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">간이과세</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">없음</Col></Row></Rows>");
            obj.set_innerdataset(rdo_wrs_chk00_innerdataset);
            obj.set_taborder("64");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_index("0");

            obj = new Combo("cbo_sel_item02", "absolute", "566", "173", "151", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("65");
            obj.set_innerdataset("@ds_trpl_dsc");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");
            obj.set_enable("false");

            obj = new Combo("cbo_sel_item01", "absolute", "113", "297", "151", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("66");
            obj.set_innerdataset("@ds_whsl_comp_c");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");
            obj.set_enable("false");

            obj = new Combo("cbo_sel_item03", "absolute", "566", "297", "151", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("67");
            obj.set_innerdataset("@ds_rtl_comp_c");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");
            obj.set_enable("false");

            obj = new Static("Static03", "absolute", "109", "513", null, "29", "15", null, this);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "109", "429", null, "29", "15", null, this);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title12", "absolute", "0", "429", "110", "29", null, null, this);
            obj.set_taborder("70");
            obj.set_text("거래처명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title13", "absolute", "0", "457", "110", "29", null, null, this);
            obj.set_taborder("71");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title14", "absolute", "0", "513", "110", "29", null, null, this);
            obj.set_taborder("72");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "109", "457", null, "29", "15", null, this);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title21", "absolute", "388", "513", "110", "29", null, null, this);
            obj.set_taborder("74");
            obj.set_text("팩스번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pagename01", "absolute", "0", "404", "135", "21", null, null, this);
            obj.set_taborder("75");
            obj.set_text("거래처 기본정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title22", "absolute", "388", "541", "110", "29", null, null, this);
            obj.set_taborder("79");
            obj.set_text("지역코드");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title20", "absolute", "388", "429", "110", "29", null, null, this);
            obj.set_taborder("81");
            obj.set_text("단축거래처명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data12", "absolute", "113", "489", "250", "21", null, null, this);
            obj.set_taborder("82");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_trplabrnm", "absolute", "501", "433", "151", "21", null, null, this);
            obj.set_taborder("84");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data11", "absolute", "113", "461", "45", "21", null, null, this);
            obj.set_taborder("96");
            obj.set_enable("false");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data05", "absolute", "113", "349", "151", "21", null, null, this);
            obj.set_taborder("112");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data13", "absolute", "366", "489", "250", "21", null, null, this);
            obj.set_taborder("113");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_clntnm", "absolute", "113", "433", "246", "21", null, null, this);
            obj.set_taborder("116");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "164", "517", "9", "21", null, null, this);
            obj.set_taborder("118");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "228", "517", "9", "21", null, null, this);
            obj.set_taborder("120");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "552", "517", "9", "21", null, null, this);
            obj.set_taborder("128");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "616", "517", "9", "21", null, null, this);
            obj.set_taborder("130");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data14", "absolute", "501", "545", "90", "21", null, null, this);
            obj.set_taborder("136");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data15", "absolute", "594", "545", "98", "21", null, null, this);
            obj.set_taborder("137");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("140");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "178", null, this);
            obj.set_taborder("144");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data18", "absolute", "113", "517", "45", "21", null, null, this);
            obj.set_taborder("145");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data19", "absolute", "176", "517", "45", "21", null, null, this);
            obj.set_taborder("146");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data20", "absolute", "240", "517", "45", "21", null, null, this);
            obj.set_taborder("147");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data21", "absolute", "501", "517", "45", "21", null, null, this);
            obj.set_taborder("148");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data22", "absolute", "565", "517", "45", "21", null, null, this);
            obj.set_taborder("149");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data23", "absolute", "629", "517", "45", "21", null, null, this);
            obj.set_taborder("150");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear00", "absolute", null, "0", "53", "21", "136", null, this);
            obj.set_taborder("154");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addr", "absolute", "216", "461", "21", "21", null, null, this);
            obj.set_taborder("158");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data16", "absolute", "168", "461", "45", "21", null, null, this);
            obj.set_taborder("159");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "158", "461", "10", "21", null, null, this);
            obj.set_taborder("160");
            obj.set_text("-");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_road_dsc", "absolute", "501", "462", "162", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_road_dsc_innerdataset = new Dataset("rdo_road_dsc_innerdataset", this.rdo_road_dsc);
            rdo_road_dsc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(rdo_road_dsc_innerdataset);
            obj.set_taborder("161");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            obj.set_direction("vertical");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.set_index("-1");

            obj = new Static("sta_title17", "absolute", "388", "457", "110", "29", null, null, this);
            obj.set_taborder("162");
            obj.set_text("도로명주소여부");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title18", "absolute", "0", "485", "110", "29", null, null, this);
            obj.set_taborder("163");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "0", "53", "21", "78", null, this);
            obj.set_taborder("165");
            obj.set_text("신 청");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_rgn_c", "absolute", "695", "545", "21", "21", null, null, this);
            obj.set_taborder("174");
            obj.set_cssclass("btn_WF_Searchbtn");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "0", "646", null, "129", "0", null, this);
            obj.set_taborder("175");
            this.addChild(obj.name, obj);
            obj = new Static("sta_pagename02", "absolute", "0", "10", "135", "21", null, null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("첨부서류");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "0", "84", "160", "29", null, null, this.Div00);
            obj.set_taborder("1");
            obj.set_text("관련 서류");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "159", "84", null, "29", "15", null, this.Div00);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "0", "56", "160", "29", null, null, this.Div00);
            obj.set_taborder("3");
            obj.set_text("구 분");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("bold 9 Gulim");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "159", "56", null, "29", "15", null, this.Div00);
            obj.set_taborder("4");
            obj.set_text("파 일");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("bold 9 Gulim");
            this.Div00.addChild(obj.name, obj);
            obj = new FileUpload("FileUpload00", "absolute", "163", "88", "431", "21", null, null, this.Div00);
            obj.set_taborder("5");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btn_atch_del", "absolute", "598", "88", "51", "21", null, null, this.Div00);
            obj.set_taborder("6");
            obj.set_text("삭제");
            obj.style.set_imagealign("center middle");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "7", "31", "422", "21", null, null, this.Div00);
            obj.set_taborder("7");
            obj.set_text("※ 서류 파일이 다수일 경우, 압축 후 1개의 파일로 업로드 바랍니다.");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_zip_sqno", "absolute", "267", "461", "45", "21", null, null, this);
            obj.set_taborder("176");
            obj.set_visible("false");
            obj.style.set_background("beige");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bld_amnno", "absolute", "314", "461", "45", "21", null, null, this);
            obj.set_taborder("177");
            obj.set_visible("false");
            obj.style.set_background("beige");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pagename02", "absolute", "0", "45", "135", "21", null, null, this);
            obj.set_taborder("178");
            obj.set_text("신청정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title15", "absolute", "0", "70", "110", "29", null, null, this);
            obj.set_taborder("179");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data17", "absolute", "113", "74", "151", "21", null, null, this);
            obj.set_taborder("180");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "109", "70", null, "29", "15", null, this);
            obj.set_taborder("181");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title16", "absolute", "453", "70", "110", "29", null, null, this);
            obj.set_taborder("182");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fsrgmn_nm", "absolute", "113", "74", "151", "21", null, null, this);
            obj.set_taborder("184");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ctcpl_telno", "absolute", "566", "74", "151", "21", null, null, this);
            obj.set_taborder("185");
            obj.set_maxlength("14");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title19", "absolute", "0", "569", "110", "29", null, null, this);
            obj.set_taborder("186");
            obj.set_text("본지사구분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "109", "569", null, "29", "15", null, this);
            obj.set_taborder("187");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title23", "absolute", "388", "569", "110", "29", null, null, this);
            obj.set_taborder("188");
            obj.set_text("상위거래처");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_mbco_dsc", "absolute", "114", "573", "266", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_mbco_dsc_innerdataset = new Dataset("rdo_mbco_dsc_innerdataset", this.rdo_mbco_dsc);
            rdo_mbco_dsc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">본사</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">지사</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">위탁대리점</Col></Row></Rows>");
            obj.set_innerdataset(rdo_mbco_dsc_innerdataset);
            obj.set_taborder("189");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("false");

            obj = new Edit("edt_data24", "absolute", "501", "573", "110", "21", null, null, this);
            obj.set_taborder("190");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data25", "absolute", "614", "573", "131", "21", null, null, this);
            obj.set_taborder("191");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup02", "absolute", "748", "573", "21", "21", null, null, this);
            obj.set_taborder("192");
            obj.set_cssclass("btn_WF_Searchbtn");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title24", "absolute", "0", "541", "110", "29", null, null, this);
            obj.set_taborder("193");
            obj.set_text("휴대전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data09", "absolute", "113", "545", "45", "21", null, null, this);
            obj.set_taborder("194");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "164", "545", "9", "21", null, null, this);
            obj.set_taborder("195");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data10", "absolute", "176", "545", "45", "21", null, null, this);
            obj.set_taborder("196");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "228", "545", "9", "21", null, null, this);
            obj.set_taborder("197");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data26", "absolute", "240", "545", "45", "21", null, null, this);
            obj.set_taborder("198");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "7", "602", "758", "21", null, null, this);
            obj.set_taborder("200");
            obj.set_text("※ 주소/전화번호/팩스번호만 수정 요청이 가능하며, 주소 변경시 우편번호 검색을 먼저 해주시기 바랍니다.");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 129, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("175");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 800, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_130");
            		p.set_titletext("거래처정보 수정 신청");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edt_data00","value","ds_infodata","NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","rdo_wrs_chk00","value","ds_infodata","NA_TXBZ_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_data02","value","ds_infodata","CLNTNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edt_trplabrnm","value","ds_infodata","TRPL_ABR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edt_data11","value","ds_infodata","FZIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edt_data12","value","ds_infodata","DONGUP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edt_data13","value","ds_infodata","DONGBW");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","edt_data14","value","ds_infodata","NA_RGN_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","edt_data06","value","ds_infodata","COPNO_CIF_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","edt_data07","value","ds_infodata","REPMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","edt_data08","value","ds_infodata","BZTPNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","edt_data05","value","ds_infodata","LIQ_SEL_RPT_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","cbo_sel_item01","value","ds_infodata","LIQ_WHSL_COMP_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","cbo_sel_item03","value","ds_infodata","LIQ_RTL_COMP_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","edt_data04","value","ds_infodata","BZCCNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edt_data18","value","ds_infodata","ATEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edt_data19","value","ds_infodata","HTEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","edt_data20","value","ds_infodata","STEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","edt_data21","value","ds_infodata","FAX_RGNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","edt_data22","value","ds_infodata","HFAX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","edt_data23","value","ds_infodata","FAX_SQNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","edt_clntnm","value","ds_infodata","CLNTNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","edt_data01","value","ds_infodata","BIZ_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_data16","value","ds_infodata","RZIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","cbo_sel_item02","value","ds_infodata","NA_TRPL_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","rdo_road_dsc","value","ds_infodata","OLD_NEW_ADR_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","edt_zip_sqno","value","ds_infodata","ZIP_SQNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","edt_bld_amnno","value","ds_infodata","BLD_AMNNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","edt_data17","value","ds_infodata","NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","rdo_mbco_dsc","value","ds_infodata","NA_MBCO_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","edt_data24","value","ds_infodata","UP_NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","edt_data25","value","ds_infodata","UP_NA_TRPL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","edt_data09","value","ds_infodata","MPSVNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","edt_data10","value","ds_infodata","MPHNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","edt_data26","value","ds_infodata","MPSQNO");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1401.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1401.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        var TRPL_C = application.gv_glnCode;	//로그인 사업장 코드

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }
        this.fn_afterFormOnload = function()
        {
        	var param = [  
         		{code:"RLNO_CFC", dsName:"ds_rlno_cfc", selecttype:"N"}, 				// 0.실명번호분류코드
         		{code:"NA_TRPL_DSC", dsName:"ds_trpl_dsc", selecttype:"N"}, 			// 1.경제통합거래처구분코드
         		{code:"NA_MBCO_DSC",   dsName:"ds_mbco_dsc",   selecttype:"N"}, 		// 2.경제통합본지사구분코드
         		{code:"NA_USR_SYS_KDC", dsName:"ds_usr_sys_kdc", selecttype:"N"}, 		// 3.경제통합사용자시스템종류코드
         		{code:"LIQ_WHSL_COMP_C", dsName:"ds_whsl_comp_c", selecttype:"N"}, 		// 4.주류도매업체코드
         		{code:"LIQ_RTL_COMP_C", dsName:"ds_rtl_comp_c", selecttype:"N"}, 		// 5.주류소매업체코드
         		{code:"TR_STOP_RSNC", dsName:"ds_tr_stop_rsnc", selecttype:"N"}, 		// 6.거래중지사유코드
         		{code:"NA_BZPL_TXBZ_RPT_FORM_C", dsName:"ds_bzpl_txbz", selecttype:"N"} // 7.경제통합사업장세무신고형태코드
            ];
        	this.gfn_setCommonCode(param);
        	this.div_auth.chk_all.set_readonly(true);	// 전체체크 방지
        	this.div_auth.cbo_authorityWorkplace.set_displayrowcount("10");
        	
        	this.initcif();
        	this.edt_fsrgmn_nm.set_value(application.gv_userName);
        }

        //업체 정보
        this.initcif = function()
        {
        	var params		  = "TRPL_C="+TRPL_C
        						+" separator=0";
        	var sSvcID        = "p_initcif";//통신아이디
        	var sURL          = "svc::rest/pds/partner/Trade/retrieveDirectTrade";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_CIF_INFO=ds_CIF_INFO";
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType 	  = "U"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        //조회
        this.btn_search00_onclick = function(obj,e)
        {
        	var json = this.getParamJson(this.components);
        	json.TRPL_C=this.getTrplCode(); // 권한사업장(콤보박스,체크박스)
        	var params = this.getParamJsonToString(json);
        	
        	var sSvcID        = "p_search";//통신아이디
        	var sURL          = "svc::rest/pds/company/Company/Company";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_infodata=ds_infodata";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);	
        }

        this.fn_callback = function(svcID,nCD,sMSG)//첫번째 인자값은 통신 ID
        {
        	if (nCD < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "p_search") {
        			if (sMSG != "SUCCESS") {
        				this.alert(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        			} else {
        				this.btn_save.set_enable(true);
        				this.edt_data15.set_value(this.ds_infodata.getColumn(0,"UP_RGN_CNM")+"/"+this.ds_infodata.getColumn(0,"RGN_CNM"));	//지역코드
        			}
        		} else if (svcID == "p_save") {
        			this.alert("거래처 정보 변경 신청이 완료되었습니다.");
        			this.reload();
        		} else if (svcID == "p_initcif") {
        			this.edt_ctcpl_telno.set_value(this.ds_CIF_INFO.getColumn(0,"ATEL")
        				+"-"+this.ds_CIF_INFO.getColumn(0,"HTEL")
        				+"-"+this.ds_CIF_INFO.getColumn(0,"STEL"));
        				
        			this.btn_search00.click();
        		}
        	}
        }

        //초기화
        this.btn_clear00_onclick = function(obj,e)
        {
        	this.reload();
        }

        
        this.btn_addr_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"U", dsArg:this.ds_rsclist};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";       
        	this.gfn_openPopup("zipCode","OMG.PT::OMG_DS_SC_9010.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	if (strId == "zipCode") {
        		this.fn_addr(strVal);
        	} else if (strId == "rgnCode" && !this.gfn_isNull(strVal)) {
        		var splitStr = strVal.split("@#");
        	
        		this.ds_infodata.setColumn(0, "NA_RGN_C", splitStr[0]);
        		this.edt_data15.set_value(splitStr[1]);
        	} else if(strId == "trpl_search"){
        		this.edt_data24.set_value(arrVal[0]);
        		this.edt_data25.set_value(arrVal[1]);
        	}
        }

        //주소 리턴 값
        this.fn_addr = function(strVal)
        {
        	var fn_addr = strVal.split(",");
        	 for(var i=0; i<fn_addr.length; i++) {
        		var fn_addr1 = fn_addr[i].split("#");
        		
        		trace(fn_addr1[0] + " : " + fn_addr1[1]);
        		if (fn_addr1[0] == "FZIP") {
        			//앞자리우편번호
        			this.ds_infodata.setColumn(0,"FZIP",  fn_addr1[1]) ;
        		} else if ( fn_addr1[0] == "RZIP") {
        			//뒷자리우편번호
        			this.ds_infodata.setColumn(0,"RZIP",  fn_addr1[1]) ;
        		} else if( fn_addr1[0] == "ZIP_SQNO") {
        			//우편번호일련번호
        			this.ds_infodata.setColumn(0,"ZIP_SQNO",  fn_addr1[1]) ;
        		} else if( fn_addr1[0] == "DONGUP") {
        			//동이상주소
        			this.ds_infodata.setColumn(0,"DONGUP",  fn_addr1[1]) ;
        		} else if( fn_addr1[0] == "DONGBW") {
        			//동이하주소
        			this.ds_infodata.setColumn(0,"DONGBW",  fn_addr1[1]) ;
        			this.edt_data13.set_enable(true);
        		} else if( fn_addr1[0] == "GBN") {
        			//도로명주소여부
        			this.rdo_road_dsc.set_value(fn_addr1[1]);
        		} else if( fn_addr1[0] == "BLD_AMNNO") {
        			//건물관리번호
        			this.ds_infodata.setColumn(0,"BLD_AMNNO",  fn_addr1[1]) ;
        		}
        	}
        }

        this.fn_checkValidation = function()
        {
        	if (this.gfn_isNull(this.edt_ctcpl_telno.value)) {
        		this.alert("신청하는 분의 연락처를 입력해주세요.");
        		this.edt_ctcpl_telno.setFocus();
        		return false;
        	} else if (this.ds_infodata.getRowCount() == 0) {
        		this.alert("변경된 정보가 없으면 거래처 정보 변경 신청을 할 수 없습니다.");
        		return false;
        	} else if (this.ds_infodata.getRowType(0) != Dataset.ROWTYPE_UPDATE) {
        		this.alert("변경된 정보가 없으면 거래처 정보 변경 신청을 할 수 없습니다.");
        		return false;
        	}
        	return application.confirm("거래처 정보 변경 신청을 하시겠습니까?");
        }

        this.btn_save_onclick = function(obj,e)
        {
        	if (this.fn_checkValidation()) {
        	
        		var params = "CTCPL=" + this.edt_ctcpl_telno.value;
        	
        		var sSvcID        = "p_save";//통신아이디
        		var sURL          = "svc::rest/pds/company/companyModReq";// 호출할 서버 페이지 주소
        		var sInDatasets   = "ds_infodata=ds_infodata:A ds_upload=ds_uploadsave";//보내는데이터셋
        		var sOutDatasets  = "";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = params;// 파라미터
        		var sCallbackFunc = "fn_callback";//콜백
        		var tranType = "U"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        	}
        }

        this.div_search_FileUpload00_onitemchanged = function(obj,e)
        {
        	this.gfn_callUpload(obj);
        }

        this.FileUpload_onsuccess = function(obj,e)
        {
        	this.ds_uploadresult.clear();
        	this.ds_uploadresult.copyData(e.datasets[0]);		
        	//this.ds_uploadresult.addColumn("CHK", "string"); //멀티건 인경우 'CHK'컬럼추가

        	this.ds_uploadsave.clearData();
        	this.ds_uploadsave.addRow();
        	this.ds_uploadsave.setColumn(0, "FILE_SEQ", "1");
        	this.ds_uploadsave.setColumn(0, "FILE_NAME", this.ds_uploadresult.getColumn(0,"ORGFNAME"));
        	this.ds_uploadsave.setColumn(0, "FILE_SIZE", this.ds_uploadresult.getColumn(0,"FILESIZE"));
        	this.ds_uploadsave.setColumn(0, "FILE_SYSTEM_NAME", this.ds_uploadresult.getColumn(0,"SYSTEMFILENAME"));
        }

        this.FileUpload_onerror = function(obj,e)
        {
        	trace("FileUpload00_onerror");
        	trace("e.errorcode: "+e.errorcode);
        	trace("e.errormsg: "+e.errormsg);
        }

        this.btn_rgn_onclick = function(obj,e)
        {
        	var oArg = {};
        	var sOption = "autosize=true,title=false";
        	var sPopupCallBack = "fn_popupAfter";       
        	this.gfn_openPopup("rgnCode","POPUP::POPUP_RGN.xfdl",oArg,sOption,sPopupCallBack);	
        }

        this.btn_atch_del_onclick = function(obj,e)
        {
        	this.ds_uploadresult.clear();
        	this.ds_uploadsave.clearData();
        	
        	this.FileUpload00.deleteItem(0);
        	this.FileUpload00.appendItem();
        }

        this.btn_popup02_onclick = function(params)
        {
        	var code = this.edt_data24.value;
        	var textname = this.edt_data25.value;
        	var param = {
        				autoType:false,
        				searchCode:code,
        				searchText:textname
        	};
        	var sp_code = this.edt_data24.value;
        	var oArg = {paramMode:"U", spTrpl:sp_code, autoPop:param};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("trpl_search","PDS.PRICAT::VAN_DS_SC_1542.xfdl",oArg,sOption,sPopupCallBack);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.edt_data00.addEventHandler("oneditclick", this.edt_GLN_oneditclick, this);
            this.Static00.addEventHandler("onclick", this.Static00_onclick, this);
            this.btn_search00.addEventHandler("onclick", this.btn_search00_onclick, this);
            this.btn_clear00.addEventHandler("onclick", this.btn_clear00_onclick, this);
            this.btn_addr.addEventHandler("onclick", this.btn_addr_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_rgn_c.addEventHandler("onclick", this.btn_rgn_onclick, this);
            this.Div00.FileUpload00.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.Div00.FileUpload00.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.Div00.FileUpload00.addEventHandler("onitemchanged", this.div_search_FileUpload00_onitemchanged, this);
            this.Div00.btn_atch_del.addEventHandler("onclick", this.btn_atch_del_onclick, this);
            this.edt_data17.addEventHandler("oneditclick", this.edt_GLN_oneditclick, this);
            this.edt_fsrgmn_nm.addEventHandler("oneditclick", this.edt_GLN_oneditclick, this);
            this.edt_data24.addEventHandler("onkeydown", this.edt_data15_onkeydown, this);
            this.edt_data25.addEventHandler("onkeydown", this.edt_data16_onkeydown, this);
            this.btn_popup02.addEventHandler("onclick", this.btn_popup02_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1401.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
