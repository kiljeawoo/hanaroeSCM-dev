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
                this.set_name("frm_VAN_DS_SC_1400");
                this.set_titletext("자사정보조회");
                this._setFormPosition(0,0,803,490);
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
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NAAC_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"TRPL_ABR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_MBCO_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"UP_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"UP_NA_TRPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FZIP\" type=\"STRING\" size=\"256\"/><Column id=\"RZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"256\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"256\"/><Column id=\"NA_RGN_C\" type=\"STRING\" size=\"256\"/><Column id=\"RGN_CNM\" type=\"STRING\" size=\"256\"/><Column id=\"UP_RGN_CNM\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NAT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ATEL\" type=\"STRING\" size=\"256\"/><Column id=\"HTEL\" type=\"STRING\" size=\"256\"/><Column id=\"STEL\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_RGNO\" type=\"STRING\" size=\"256\"/><Column id=\"HFAX\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"MPSVNO\" type=\"STRING\" size=\"256\"/><Column id=\"MPHNO\" type=\"STRING\" size=\"256\"/><Column id=\"MPSQNO\" type=\"STRING\" size=\"256\"/><Column id=\"FMACH_PATS_TRT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPL_TXBZ_RPT_FORM_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_USR_SYS_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"ELT_TXBIL_UYN\" type=\"STRING\" size=\"256\"/><Column id=\"TR_STOP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TR_STOP_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"TR_STOP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"COPNO_CIF_NO\" type=\"STRING\" size=\"256\"/><Column id=\"REPMNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZCCNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZTPNM\" type=\"STRING\" size=\"256\"/><Column id=\"LIQ_SEL_RPT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"LIQ_WHSL_COMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"LIQ_RTL_COMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TXBZ_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CMENO\" type=\"STRING\" size=\"256\"/><Column id=\"LS_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"LS_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            
            // UI Components Initialize
            obj = new Div("div_menu", "absolute", "0", "0", "397", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "109", "122", null, "29", "15", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "109", "66", null, "29", "15", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00", "absolute", "0", "66", "110", "29", null, null, this);
            obj.set_taborder("4");
            obj.set_text("GLN");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title01", "absolute", "0", "94", "110", "29", null, null, this);
            obj.set_taborder("5");
            obj.set_text("실명번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title02", "absolute", "0", "122", "110", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_text("고객명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "109", "94", null, "29", "15", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title08", "absolute", "453", "122", "110", "29", null, null, this);
            obj.set_taborder("8");
            obj.set_text("법인번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pagename00", "absolute", "0", "41", "135", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_text("기본정보 확인");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title03", "absolute", "0", "150", "110", "29", null, null, this);
            obj.set_taborder("11");
            obj.set_text("세무구분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "109", "150", null, "29", "15", null, this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title09", "absolute", "453", "150", "110", "29", null, null, this);
            obj.set_taborder("14");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title07", "absolute", "453", "94", "110", "29", null, null, this);
            obj.set_taborder("17");
            obj.set_text("사업자유형");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data01", "absolute", "267", "98", "183", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data02", "absolute", "113", "126", "151", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data00", "absolute", "113", "70", "151", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data06", "absolute", "566", "126", "151", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "109", "206", null, "53", "15", null, this);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title04", "absolute", "0", "178", "110", "29", null, null, this);
            obj.set_taborder("40");
            obj.set_text("업종");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title05", "absolute", "0", "206", "110", "53", null, null, this);
            obj.set_taborder("41");
            obj.set_text("주류\r\n도매업체구분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "109", "178", null, "29", "15", null, this);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title11", "absolute", "453", "206", "110", "53", null, null, this);
            obj.set_taborder("43");
            obj.set_text("주류\r\n소매업체구분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title06", "absolute", "0", "258", "110", "53", null, null, this);
            obj.set_taborder("45");
            obj.set_text("주류\r\n판매신고번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "109", "258", null, "53", "15", null, this);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title10", "absolute", "453", "178", "110", "29", null, null, this);
            obj.set_taborder("51");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data03", "absolute", "113", "182", "151", "21", null, null, this);
            obj.set_taborder("53");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data04", "absolute", "267", "182", "183", "21", null, null, this);
            obj.set_taborder("54");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data07", "absolute", "566", "154", "151", "21", null, null, this);
            obj.set_taborder("58");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data08", "absolute", "566", "182", "151", "21", null, null, this);
            obj.set_taborder("59");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_sel_item00", "absolute", "113", "98", "151", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("63");
            obj.set_innerdataset("@ds_rlno_cfc");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");

            obj = new Radio("rdo_wrs_chk00", "absolute", "116", "154", "334", "21", null, null, this);
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
            obj.set_index("0");

            obj = new Combo("cbo_sel_item02", "absolute", "566", "98", "151", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("65");
            obj.set_innerdataset("@ds_trpl_dsc");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");

            obj = new Combo("cbo_sel_item01", "absolute", "113", "222", "151", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("66");
            obj.set_innerdataset("@ds_whsl_comp_c");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");

            obj = new Combo("cbo_sel_item03", "absolute", "566", "222", "151", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("67");
            obj.set_text("[1100] 서울");
            obj.set_innerdataset("@ds_rtl_comp_c");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");

            obj = new Static("Static03", "absolute", "109", "410", null, "29", "15", null, this);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "109", "354", null, "29", "15", null, this);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title12", "absolute", "0", "354", "110", "29", null, null, this);
            obj.set_taborder("70");
            obj.set_text("거래처명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title13", "absolute", "0", "382", "110", "29", null, null, this);
            obj.set_taborder("71");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title14", "absolute", "0", "410", "110", "29", null, null, this);
            obj.set_taborder("72");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "109", "382", null, "29", "15", null, this);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title21", "absolute", "453", "410", "110", "29", null, null, this);
            obj.set_taborder("74");
            obj.set_text("팩스번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pagename01", "absolute", "0", "329", "135", "21", null, null, this);
            obj.set_taborder("75");
            obj.set_text("거래처 기본정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title15", "absolute", "0", "438", "110", "29", null, null, this);
            obj.set_taborder("76");
            obj.set_text("휴대전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "109", "438", null, "29", "15", null, this);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title22", "absolute", "453", "438", "110", "29", null, null, this);
            obj.set_taborder("79");
            obj.set_text("지역코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title20", "absolute", "453", "354", "110", "29", null, null, this);
            obj.set_taborder("81");
            obj.set_text("단축거래처명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data12", "absolute", "267", "386", "183", "21", null, null, this);
            obj.set_taborder("82");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data10", "absolute", "566", "358", "151", "21", null, null, this);
            obj.set_taborder("84");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "109", "494", null, "53", "15", null, this);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title16", "absolute", "0", "466", "110", "29", null, null, this);
            obj.set_taborder("87");
            obj.set_text("본지사구분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title17", "absolute", "0", "494", "110", "53", null, null, this);
            obj.set_taborder("88");
            obj.set_text("사용시스템종류");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "109", "466", null, "29", "15", null, this);
            obj.set_taborder("89");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title24", "absolute", "453", "494", "110", "53", null, null, this);
            obj.set_taborder("90");
            obj.set_text("농기계부품\r\n취급여부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title18", "absolute", "0", "546", "110", "53", null, null, this);
            obj.set_taborder("91");
            obj.set_text("세무신고\r\n형태코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "109", "546", null, "53", "15", null, this);
            obj.set_taborder("93");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title25", "absolute", "453", "546", "110", "53", null, null, this);
            obj.set_taborder("94");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("전자세금계산서사용");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title23", "absolute", "453", "466", "110", "29", null, null, this);
            obj.set_taborder("95");
            obj.set_text("상위거래처");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data11", "absolute", "113", "386", "151", "21", null, null, this);
            obj.set_taborder("96");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title19", "absolute", "0", "598", "110", "29", null, null, this);
            obj.set_taborder("109");
            obj.set_text("거래중지");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "109", "598", null, "29", "15", null, this);
            obj.set_taborder("111");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data05", "absolute", "113", "274", "151", "21", null, null, this);
            obj.set_taborder("112");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data13", "absolute", "453", "386", "204", "21", null, null, this);
            obj.set_taborder("113");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data09", "absolute", "113", "358", "151", "21", null, null, this);
            obj.set_taborder("116");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "164", "414", "9", "21", null, null, this);
            obj.set_taborder("118");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "228", "414", "9", "21", null, null, this);
            obj.set_taborder("120");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "164", "442", "9", "21", null, null, this);
            obj.set_taborder("123");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "228", "442", "9", "21", null, null, this);
            obj.set_taborder("125");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "617", "414", "9", "21", null, null, this);
            obj.set_taborder("128");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "681", "414", "9", "21", null, null, this);
            obj.set_taborder("130");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_chk02", "absolute", "116", "602", "188", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_chk02_innerdataset = new Dataset("rdo_chk02_innerdataset", this.rdo_chk02);
            rdo_chk02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(rdo_chk02_innerdataset);
            obj.set_taborder("132");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            obj.set_index("0");

            obj = new Combo("cbo_sel_item07", "absolute", "304", "602", "151", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("133");
            obj.set_innerdataset("@ds_tr_stop_rsnc");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");

            obj = new Radio("rdo_chk00", "absolute", "569", "510", "188", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_chk00_innerdataset = new Dataset("rdo_chk00_innerdataset", this.rdo_chk00);
            rdo_chk00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(rdo_chk00_innerdataset);
            obj.set_taborder("134");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            obj.set_index("0");

            obj = new Radio("rdo_chk01", "absolute", "569", "562", "188", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_chk01_innerdataset = new Dataset("rdo_chk01_innerdataset", this.rdo_chk01);
            rdo_chk01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(rdo_chk01_innerdataset);
            obj.set_taborder("135");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            obj.set_index("0");

            obj = new Edit("edt_data14", "absolute", "566", "442", "90", "21", null, null, this);
            obj.set_taborder("136");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data15", "absolute", "659", "442", "98", "21", null, null, this);
            obj.set_taborder("137");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data16", "absolute", "566", "470", "90", "21", null, null, this);
            obj.set_taborder("138");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data17", "absolute", "659", "470", "98", "21", null, null, this);
            obj.set_taborder("139");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("140");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_sel_item04", "absolute", "113", "470", "240", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("141");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_innerdataset("@ds_mbco_dsc");
            obj.set_index("-1");

            obj = new Combo("cbo_sel_item05", "absolute", "113", "510", "240", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("142");
            obj.set_innerdataset("@ds_usr_sys_kdc");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");
            obj.set_index("-1");

            obj = new Combo("cbo_sel_item06", "absolute", "113", "562", "240", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("143");
            obj.set_innerdataset("@ds_bzpl_txbz");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");
            obj.set_index("-1");

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "117", null, this);
            obj.set_taborder("144");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data18", "absolute", "113", "414", "45", "21", null, null, this);
            obj.set_taborder("145");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data19", "absolute", "176", "414", "45", "21", null, null, this);
            obj.set_taborder("146");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data20", "absolute", "240", "414", "45", "21", null, null, this);
            obj.set_taborder("147");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data21", "absolute", "566", "414", "45", "21", null, null, this);
            obj.set_taborder("148");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data22", "absolute", "630", "414", "45", "21", null, null, this);
            obj.set_taborder("149");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data23", "absolute", "694", "414", "45", "21", null, null, this);
            obj.set_taborder("150");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data24", "absolute", "113", "442", "45", "21", null, null, this);
            obj.set_taborder("151");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data25", "absolute", "176", "442", "45", "21", null, null, this);
            obj.set_taborder("152");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data26", "absolute", "240", "442", "45", "21", null, null, this);
            obj.set_taborder("153");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear00", "absolute", null, "0", "53", "21", "75", null, this);
            obj.set_taborder("154");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_130");
            		p.set_titletext("자사정보조회");

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
            obj = new BindItem("item3","edt_data10","value","ds_infodata","TRPL_ABR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","cbo_sel_item04","value","ds_infodata","NA_MBCO_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edt_data16","value","ds_infodata","UP_NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edt_data11","value","ds_infodata","ZIP_SQNO");
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
            obj = new BindItem("item19","rdo_chk00","value","ds_infodata","FMACH_PATS_TRT_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","cbo_sel_item06","value","ds_infodata","NA_BZPL_TXBZ_RPT_FORM_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","cbo_sel_item05","value","ds_infodata","NA_USR_SYS_KDC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","rdo_chk01","value","ds_infodata","ELT_TXBIL_UYN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","rdo_chk02","value","ds_infodata","TR_STOP_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","cbo_sel_item07","value","ds_infodata","TR_STOP_RSNC");
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
            obj = new BindItem("item16","edt_data24","value","ds_infodata","MPSVNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","edt_data25","value","ds_infodata","MPHNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","edt_data26","value","ds_infodata","MPSQNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","edt_data09","value","ds_infodata","COPNO_CIF_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","edt_data01","value","ds_infodata","BIZ_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","edt_data17","value","ds_infodata","UP_NA_TRPL_NM");
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
        this.addIncludeScript("VAN_DS_SC_1400.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1400.xfdl", function(exports) {
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
        	if(nCD < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "p_search" && sMSG != "SUCCESS")
        		{
        			this.alert(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        		}else{
        			this.edt_data15.set_value(this.ds_infodata.getColumn(0,"UP_RGN_CNM")+"/"+this.ds_infodata.getColumn(0,"RGN_CNM"));	//지역코드 
        			this.cbo_sel_item02.set_value(01);
        			this.cbo_sel_item00.set_value(13);
        		}
        	}
        }

        //초기화
        this.btn_clear00_onclick = function(obj,e)
        {
        	this.reload();
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

        };

        this.loadIncludeScript("VAN_DS_SC_1400.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
