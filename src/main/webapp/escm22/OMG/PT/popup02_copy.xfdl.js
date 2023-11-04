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
                this.set_name("popup01");
                this.set_titletext("회원가입테스트");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,1056,774);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_officeInfo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BZNO1\" type=\"STRING\" size=\"30\"/><Column id=\"BZNO2\" type=\"STRING\" size=\"30\"/><Column id=\"BZNO3\" type=\"STRING\" size=\"30\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"30\"/><Column id=\"COMP_TPC\" type=\"STRING\" size=\"30\"/><Column id=\"USR_TELNO\" type=\"STRING\" size=\"30\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"30\"/><Column id=\"REPMNM\" type=\"STRING\" size=\"30\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"30\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"30\"/><Column id=\"FZIP\" type=\"STRING\" size=\"30\"/><Column id=\"RZIP\" type=\"STRING\" size=\"30\"/><Column id=\"TEL1\" type=\"STRING\" size=\"30\"/><Column id=\"TEL2\" type=\"STRING\" size=\"30\"/><Column id=\"TEL3\" type=\"STRING\" size=\"30\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_naTrplC", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div05", "absolute", "17", "16", "69.13%", "626", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.style.set_background("transparent");
            obj.set_scrollbars("autovert");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            obj = new Static("Static91", "absolute", "0", "87", "100%", "29", null, null, this.Div05);
            obj.set_taborder("89");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static103", "absolute", "0", "199", "100%", "58", null, null, this.Div05);
            obj.set_taborder("91");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static101", "absolute", "0", "171", "100%", "29", null, null, this.Div05);
            obj.set_taborder("92");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static98", "absolute", "0", "143", "100%", "29", null, null, this.Div05);
            obj.set_taborder("93");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static95", "absolute", "0", "115", "100%", "29", null, null, this.Div05);
            obj.set_taborder("94");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static89", "absolute", "0", "63", "18.99%", "21", null, null, this.Div05);
            obj.set_taborder("96");
            obj.set_text("회사 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static92", "absolute", "0", "87", "16.88%", "29", null, null, this.Div05);
            obj.set_taborder("97");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static94", "absolute", "0", "115", "16.88%", "29", null, null, this.Div05);
            obj.set_taborder("98");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static97", "absolute", "0", "143", "16.88%", "29", null, null, this.Div05);
            obj.set_taborder("99");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static100", "absolute", "0", "171", "16.88%", "29", null, null, this.Div05);
            obj.set_taborder("100");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static102", "absolute", "0", "199", "16.88%", "58", null, null, this.Div05);
            obj.set_taborder("101");
            obj.set_text("회사주소");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static93", "absolute", "336", "87", "18.99%", "29", null, null, this.Div05);
            obj.set_taborder("102");
            obj.set_text("거래처코드");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static99", "absolute", "336", "143", "18.99%", "29", null, null, this.Div05);
            obj.set_taborder("103");
            obj.set_text("업체유형");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static129", "absolute", "158", "91", "1.27%", "21", null, null, this.Div05);
            obj.set_taborder("104");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_BZNO02", "absolute", "167", "91", "4.22%", "21", null, null, this.Div05);
            obj.set_taborder("105");
            obj.set_value("23");
            obj.set_maxlength("2");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_REPMNM", "absolute", "123", "147", "25.32%", "21", null, null, this.Div05);
            obj.set_taborder("106");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_RZIP", "absolute", "167", "175", "4.92%", "21", null, null, this.Div05);
            obj.set_taborder("107");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static133", "absolute", "160", "174", "1.27%", "21", null, null, this.Div05);
            obj.set_taborder("108");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_FZIP", "absolute", "123", "175", "4.92%", "21", null, null, this.Div05);
            obj.set_taborder("109");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_DONGBW", "absolute", "123", "205", "82%", "21", null, null, this.Div05);
            obj.set_taborder("110");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_DONGUP", "absolute", "123", "230", "82%", "21", null, null, this.Div05);
            obj.set_taborder("111");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Radio("rdo_COMP_TPC", "absolute", "477", "148", "25.74%", "21", null, null, this.Div05);
            this.Div05.addChild(obj.name, obj);
            var rdo_COMP_TPC_innerdataset = new Dataset("rdo_COMP_TPC_innerdataset", this.Div05.rdo_COMP_TPC);
            rdo_COMP_TPC_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1010</Col><Col id=\"datacolumn\">공급업체</Col></Row><Row><Col id=\"codecolumn\">1020</Col><Col id=\"datacolumn\">쿠폰관리</Col></Row></Rows>");
            obj.set_innerdataset(rdo_COMP_TPC_innerdataset);
            obj.set_taborder("112");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj = new Static("Static00", "absolute", "197", "91", "1.27%", "21", null, null, this.Div05);
            obj.set_taborder("113");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static114", "absolute", "336", "115", "18.99%", "29", null, null, this.Div05);
            obj.set_taborder("121");
            obj.set_text("대표전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "583", "119", "1.27%", "21", null, null, this.Div05);
            obj.set_taborder("151");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_CLNTNM", "absolute", "123", "119", "25.32%", "21", null, null, this.Div05);
            obj.set_taborder("157");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Div("Div03", "absolute", "0", "697", "101.13%", "639", null, null, this.Div05);
            obj.set_taborder("159");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", "106", "98.89%", "29", null, null, this.Div05.Div03);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static121", "absolute", "1", "0", "18.78%", "21", null, null, this.Div05.Div03);
            obj.set_taborder("51");
            obj.set_text("서비스 이용");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static124", "absolute", "0", "21", "98.89%", "58", null, null, this.Div05.Div03);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "78", "98.89%", "29", null, null, this.Div05.Div03);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static123", "absolute", "0", "21", "16.69%", "58", null, null, this.Div05.Div03);
            obj.set_taborder("54");
            obj.set_text("기본서비스 이용");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "78", "16.69%", "29", null, null, this.Div05.Div03);
            obj.set_taborder("55");
            obj.set_text("부가정보 이용");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "106", "16.69%", "29", null, null, this.Div05.Div03);
            obj.set_taborder("56");
            obj.set_text("정보분석 이용");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "123", "27", "74.69%", "46", null, null, this.Div05.Div03);
            obj.set_taborder("57");
            obj.set_text("SCM업무, EDI서비스, 세금계산서는 기본서비스로 제공됩니다.\r\nEDI서비스, SCM업무는 이용량(KR)에 따라 청구됩니다. 상세정보는 <fc v='blue'>서비스이용료</fc>를 참조바랍니다.");
            obj.set_usedecorate("true");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Radio("rdo_SVC_ID", "absolute", "125", "83", "24.62%", "21", null, null, this.Div05.Div03);
            this.Div05.Div03.addChild(obj.name, obj);
            var rdo_SVC_ID_innerdataset = new Dataset("rdo_SVC_ID_innerdataset", this.Div05.Div03.rdo_SVC_ID);
            rdo_SVC_ID_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">22</Col><Col id=\"datacolumn\">종량제</Col></Row><Row><Col id=\"codecolumn\">21</Col><Col id=\"datacolumn\">정액제</Col></Row></Rows>");
            obj.set_innerdataset(rdo_SVC_ID_innerdataset);
            obj.set_taborder("58");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("22");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new CheckBox("cbk_SVC31", "absolute", "125", "111", "8.07%", "21", null, null, this.Div05.Div03);
            obj.set_taborder("59");
            obj.set_text("BI조회");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new CheckBox("cbk_SVC32", "absolute", "202", "111", "10.29%", "21", null, null, this.Div05.Div03);
            obj.set_taborder("60");
            obj.set_text("추이분석");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new CheckBox("cbk_SVC33", "absolute", "287", "111", "15.58%", "21", null, null, this.Div05.Div03);
            obj.set_taborder("61");
            obj.set_text("시장분석(자사)");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new CheckBox("cbk_SVC34", "absolute", "407", "111", "18.36%", "21", null, null, this.Div05.Div03);
            obj.set_taborder("62");
            obj.set_text("시장분석(경쟁사)");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "0", "171", "98.89%", "29", null, null, this.Div05.Div03);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "0", "199", "98.89%", "29", null, null, this.Div05.Div03);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static110", "absolute", "0", "227", "98.89%", "29", null, null, this.Div05.Div03);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "1", "151", "18.78%", "21", null, null, this.Div05.Div03);
            obj.set_taborder("66");
            obj.set_text("납부 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "0", "255", "98.89%", "29", null, null, this.Div05.Div03);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static111", "absolute", "336", "227", "18.78%", "29", null, null, this.Div05.Div03);
            obj.set_taborder("68");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "336", "255", "18.78%", "29", null, null, this.Div05.Div03);
            obj.set_taborder("69");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "339", "98.89%", "145", null, null, this.Div05.Div03);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "0", "339", "16.69%", "145", null, null, this.Div05.Div03);
            obj.set_taborder("71");
            obj.set_text("예금주의\r\n출금이체동의서");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "0", "171", "16.69%", "29", null, null, this.Div05.Div03);
            obj.set_taborder("72");
            obj.set_text("결제방식");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "0", "199", "16.69%", "29", null, null, this.Div05.Div03);
            obj.set_taborder("73");
            obj.set_text("희망출금일");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static109", "absolute", "0", "227", "16.69%", "29", null, null, this.Div05.Div03);
            obj.set_taborder("74");
            obj.set_text("예금주");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static23", "absolute", "0", "255", "16.69%", "29", null, null, this.Div05.Div03);
            obj.set_taborder("75");
            obj.set_text("거래은행");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Radio("rdo_STL_METH_DSC", "absolute", "125", "176", "61.2%", "21", null, null, this.Div05.Div03);
            this.Div05.Div03.addChild(obj.name, obj);
            var rdo_STL_METH_DSC_innerdataset = new Dataset("rdo_STL_METH_DSC_innerdataset", this.Div05.Div03.rdo_STL_METH_DSC);
            rdo_STL_METH_DSC_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">CMS계좌(농협)이체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">CMS계좌이체</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">가상계좌</Col></Row></Rows>");
            obj.set_innerdataset(rdo_STL_METH_DSC_innerdataset);
            obj.set_taborder("76");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj = new Radio("rdo_HOP_DRW_DD", "absolute", "125", "205", "40.75%", "21", null, null, this.Div05.Div03);
            this.Div05.Div03.addChild(obj.name, obj);
            var rdo_HOP_DRW_DD_innerdataset = new Dataset("rdo_HOP_DRW_DD_innerdataset", this.Div05.Div03.rdo_HOP_DRW_DD);
            rdo_HOP_DRW_DD_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">15</Col><Col id=\"datacolumn\">15일</Col></Row><Row><Col id=\"codecolumn\">25</Col><Col id=\"datacolumn\">25일</Col></Row></Rows>");
            obj.set_innerdataset(rdo_HOP_DRW_DD_innerdataset);
            obj.set_taborder("77");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj = new Edit("edt_DPRNM", "absolute", "123", "231", "12.38%", "21", null, null, this.Div05.Div03);
            obj.set_taborder("78");
            obj.set_maxlength("20");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Radio("rdo_PSCRP_DSC", "absolute", "218", "231", "14.88%", "21", null, null, this.Div05.Div03);
            this.Div05.Div03.addChild(obj.name, obj);
            var rdo_PSCRP_DSC_innerdataset = new Dataset("rdo_PSCRP_DSC_innerdataset", this.Div05.Div03.rdo_PSCRP_DSC);
            rdo_PSCRP_DSC_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">개인</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">법인</Col></Row></Rows>");
            obj.set_innerdataset(rdo_PSCRP_DSC_innerdataset);
            obj.set_taborder("79");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj = new Edit("edt_AC_NO", "absolute", "474", "259", "25.03%", "21", null, null, this.Div05.Div03);
            obj.set_taborder("80");
            obj.set_inputtype("number");
            obj.set_maxlength("15");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Combo("cbo_BNK_C", "absolute", "123", "259", "29.21%", "21", null, null, this.Div05.Div03);
            this.Div05.Div03.addChild(obj.name, obj);
            obj.set_taborder("81");
            obj.set_innerdataset("ds_bankCode");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new TextArea("txt_contents1", "absolute", "123", "343", "81.08%", "83", null, null, this.Div05.Div03);
            obj.set_taborder("82");
            obj.set_readonly("true");
            obj.style.set_padding("5 5 5 5");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new CheckBox("chk_DRW_FTR_AGR_YN", "absolute", "648", "432", "6.54%", "43", null, null, this.Div05.Div03);
            obj.set_taborder("83");
            obj.set_text("동의");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static122", "absolute", "0", "135", "99.72%", "20", null, null, this.Div05.Div03);
            obj.set_taborder("84");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new MaskEdit("mae_BZNO", "absolute", "475", "231", "12.52%", "21", null, null, this.Div05.Div03);
            obj.set_taborder("85");
            obj.set_type("string");
            obj.set_mask("###-##-#####");
            obj.set_visible("false");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Calendar("mae_BIRTH", "absolute", "475", "231", "15.3%", "21", null, null, this.Div05.Div03);
            this.Div05.Div03.addChild(obj.name, obj);
            obj.set_taborder("86");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static13", "absolute", "0", "283", "98.89%", "29", null, null, this.Div05.Div03);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "0", "311", "98.89%", "29", null, null, this.Div05.Div03);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "0", "283", "16.69%", "29", null, null, this.Div05.Div03);
            obj.set_taborder("89");
            obj.set_text("통장사본");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new FileUpload("FileUpload", "absolute", "121", "287", "81.36%", "24", null, null, this.Div05.Div03);
            obj.set_taborder("90");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new FileUpload("FileUpload00", "absolute", "121", "315", "81.36%", "24", null, null, this.Div05.Div03);
            obj.set_taborder("91");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "0", "311", "16.69%", "29", null, null, this.Div05.Div03);
            obj.set_taborder("92");
            obj.set_text("사업자등록증 사본");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("sta_contents01", "absolute", "126", "432", "71.21%", "43", null, null, this.Div05.Div03);
            obj.set_taborder("93");
            obj.set_text("본사는 상기 자동이체 약관을 준수하여 자동이체를 신청하며 본사가 개설한 결제 계좌를 통한 \r\n자동이체 출금처리에 동의 합니다.");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0", "483", "98.89%", "145", null, null, this.Div05.Div03);
            obj.set_taborder("94");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "0", "483", "16.69%", "145", null, null, this.Div05.Div03);
            obj.set_taborder("95");
            obj.set_text("금융거래 정보의\r\n제공동의서");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new TextArea("txt_contents2", "absolute", "123", "488", "81.08%", "83", null, null, this.Div05.Div03);
            obj.set_taborder("96");
            obj.set_readonly("true");
            obj.style.set_padding("5 5 5 5");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("sta_contents00", "absolute", "126", "577", "71.21%", "43", null, null, this.Div05.Div03);
            obj.set_taborder("97");
            obj.set_text("본사는 상기 기술된 내용에 대해 상세히 읽어 보았으며, 이를 이해하여 자발적인 의사로\r\n동의합니다.");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new CheckBox("chk_FNC_TR_INF_OFR_AGR_YN", "absolute", "648", "577", "6.54%", "43", null, null, this.Div05.Div03);
            obj.set_taborder("98");
            obj.set_text("동의");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Edit("edt_BZNO01", "absolute", "123", "91", "4.92%", "21", null, null, this.Div05);
            obj.set_taborder("165");
            obj.set_value("132");
            obj.set_maxlength("3");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_BZNO03", "absolute", "206", "91", "9.14%", "21", null, null, this.Div05);
            obj.set_taborder("169");
            obj.set_value("73696");
            obj.set_maxlength("5");
            this.Div05.addChild(obj.name, obj);
            obj = new Button("btn_search", "absolute", "286", "91", "5.77%", "21", null, null, this.Div05);
            obj.set_taborder("170");
            obj.set_text("찾기");
            this.Div05.addChild(obj.name, obj);
            obj = new Combo("cbo_NA_TRPL_C", "absolute", "473", "91", "32.77%", "21", null, null, this.Div05);
            this.Div05.addChild(obj.name, obj);
            obj.set_taborder("171");
            obj.set_innerdataset("@ds_naTrplC");
            obj.set_datacolumn("CLNTNM");
            obj.set_codecolumn("NA_TRPL_C");
            obj = new Button("Button00", "absolute", "106", "291", "16.44%", "21", null, null, this.Div05);
            obj.set_taborder("172");
            obj.set_text("Button00");
            this.Div05.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 639, this.Div05.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("159");
            		p.style.set_background("transparent");
            		p.set_visible("false");

            	}
            );
            this.Div05.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 711, 1139, this.Div05,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div01");
            		p.style.set_background("transparent");
            		p.set_scrollbars("autovert");
            		p.set_visible("true");

            	}
            );
            this.Div05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1056, 774, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("회원가입테스트");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("popup02_copy.xfdl", "lib::comLib.xjs");
        this.registerScript("popup02_copy.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	
        }

        /***************************************************
        	회원종류에 따른 화면 호출
        ****************************************************/

        this.Div05_btn_search_onclick = function(obj,e)
        {
        	var param =   "bzNo1="+this.Div05.edt_BZNO01.value 
        				+" bzNo2="+this.Div05.edt_BZNO02.value				
        				+" bzNo3="+this.Div05.edt_BZNO03.value	;
        	var sSvcID        = "retriveNaTrplCList";
        	var sURL          = "svc::rest/pt/retriveNaTrplCList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_naTrplC=ds_naTrplC";
        	var sArgument     =  param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회		 
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.Div05_cbo_NA_TRPL_C_onitemchanged = function(obj,e)
        {
        	this.fn_officeInfo(this.ds_naTrplC.getColumn(obj.index,"NA_TRPL_C"));
        }
        /***************************************************
        	회사정보조회
        ****************************************************/
        this.fn_officeInfo = function(naTrplC)
        {
        	
        	
        	if(this.gfn_isNull(this.Div05.edt_BZNO01.value) || this.Div05.edt_BZNO01.getLength() !=3){		
        		alert("사업자번호를 확인해주세요.");
        		this.Div05.edt_BZNO01.setFocus();
        		return;
        	}
        	if(this.gfn_isNull(this.Div05.edt_BZNO02.value) || this.Div05.edt_BZNO02.getLength() !=2){		
        		alert("사업자번호를 확인해주세요.");
        		this.Div05.edt_BZNO02.setFocus();
        		return;
        	}
        	if(this.gfn_isNull(this.Div05.edt_BZNO03.value) || this.Div05.edt_BZNO03.getLength() !=5){
        		alert("사업자번호를 확인해주세요.");
        		this.Div05.edt_BZNO03.setFocus();
        		return;
        	}
        	if(this.gfn_isNull(this.gfn_trim(this.Div05.cbo_NA_TRPL_C.value) )){
        		alert("경제통합거래처코드를 선택해주세요.");
        		this.Div05.cbo_NA_TRPL_C.setFocus();	
        		return;
        	}
         
        	var param =   "bzNo1="+this.Div05.edt_BZNO01.value 
        				+" bzNo2="+this.Div05.edt_BZNO02.value				
        				+" bzNo3="+this.Div05.edt_BZNO03.value				
        				+" naTrplC="+naTrplC	
        				+" usrTpc=01";
        	alert("fn_officeInfo param>>>"+param);
        	var sSvcID        = "certificateMb";
        	var sURL          = "svc::rest/pt/certificateMb";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_userInfo=ds_userInfo ds_svcAuth=ds_svcAuth";
        	var sArgument     =  param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회	
        	 
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /***************************************************
        	callback메소드
        ****************************************************/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(svcID =="certificateMb"){						
        		trace("certificateMb");
        		trace(this.ds_officeInfo.saveXML());
        		if(ErrorCode == -2 ){
        			this.gfn_getMessage("alert", "error.message.noUserCIF");			
        		}
        	}else if(svcID=="checkMbIdDup"){
        		if(ErrorCode < 0 ){
        			this.gfn_getMessage("alert", "error.message.server.exception");
        		}else if(ErrorCode==1){		
        		
        			this.gfn_getMessage("alert", "error.message.dupUserId");
        		}else{
        			alert("입력하신 회원ID를 사용할 수 있습니다.");			
        			this.div_hiddenArea.edt_finalMbId.set_value(this.Div05.edt_MB_ID.value);			
        		}
        	}else if(svcID =="sendSms"){		
        		if(ErrorCode < 0 ){
        			this.gfn_getMessage("alert", "error.message.server.exception");
        		}else{
        			alert("고객님의 휴대전화로 인증번호가 발송되었습니다.");
        			this.div_hiddenArea.edt_randomNumber.set_value(this.ds_certNum.getColumn(0,"CERT_NUM"));
        		}
        	}else if(svcID =="insertMB"){
        		if(ErrorCode < 0 ){
        			this.gfn_getMessage("alert", "error.message.server.exception");
        		}else{
        			alert("정상 처리 되었습니다.");
        			this.close();			
        		}
        	}else if(svcID =="retriveNaTrplCList"){
        		
        		if(ErrorCode < 0 ){
        			this.gfn_getMessage("alert", "error.message.server.exception");
        		}else{
        			if(this.ds_naTrplC.rowcount == 0 ){
        				alert("사업자번호에 해당하는 거래처코드가 존재하지 않습니다.");
        				this.ds_userInfo.clearData();
        				this.ds_userInfo.addRow();
        				this.ds_userInfo.setColumn(0,"BZNO1",this.div_hiddenArea.edt_BZNO1.value);
        				this.ds_userInfo.setColumn(0,"BZNO2",this.div_hiddenArea.edt_BZNO2.value);
        				this.ds_userInfo.setColumn(0,"BZNO3",this.div_hiddenArea.edt_BZNO3.value);
        			}else{
        				this.ds_naTrplC.insertRow(0);
        				this.ds_naTrplC.setColumn(0,"NA_TRPL_C"," ");
        				this.ds_naTrplC.setColumn(0,"CLNTNM","=========선택=========");
        				this.Div05.cbo_NA_TRPL_C.set_index(0);
        			}			
        		}
        	}
        }
        this.Div05_Button00_onclick = function(obj,e)
        {
        	var aa = "admin,dslfsjsdlfidsufldsj";	
        	var arrNumbers = aa.split(",");
        	alert(arrNumbers[0]);
        	alert(arrNumbers.length);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Div05.rdo_COMP_TPC.addEventHandler("onitemclick", this.Radio00_onitemclick, this);
            this.Div05.Div03.Static04.addEventHandler("onclick", this.Div05_Div03_Static04_onclick, this);
            this.Div05.Div03.rdo_SVC_ID.addEventHandler("onitemclick", this.Div05_Div03_rdo_SVC_ID_onitemclick, this);
            this.Div05.Div03.rdo_SVC_ID.addEventHandler("onitemchanged", this.Div05_Div03_rdo_SVC_ID_onitemchanged, this);
            this.Div05.Div03.cbk_SVC31.addEventHandler("onclick", this.Div03_cbk_SVC31_onclick, this);
            this.Div05.Div03.cbk_SVC32.addEventHandler("onclick", this.Div03_cbk_SVC32_onclick, this);
            this.Div05.Div03.cbk_SVC33.addEventHandler("onclick", this.Div03_cbk_SVC33_onclick, this);
            this.Div05.Div03.cbk_SVC34.addEventHandler("onclick", this.Div03_cbk_SVC34_onclick, this);
            this.Div05.Div03.rdo_STL_METH_DSC.addEventHandler("onitemchanged", this.Div05_Div03_rdo_STL_METH_DSC_onitemchanged, this);
            this.Div05.Div03.rdo_HOP_DRW_DD.addEventHandler("onitemclick", this.Div03_rdo_HOP_DRW_DD_onitemclick, this);
            this.Div05.Div03.rdo_PSCRP_DSC.addEventHandler("onitemchanged", this.PSCRP_DSC_onitemchanged, this);
            this.Div05.Div03.FileUpload.addEventHandler("onsuccess", this.Div03_FileUpload_onsuccess, this);
            this.Div05.Div03.FileUpload.addEventHandler("onerror", this.Div05_Div00_FileUpload_onerror, this);
            this.Div05.Div03.FileUpload.addEventHandler("onitemchanged", this.Div03_FileUpload_onitemchanged, this);
            this.Div05.Div03.FileUpload00.addEventHandler("onsuccess", this.Div03_FileUpload00_onsuccess, this);
            this.Div05.Div03.FileUpload00.addEventHandler("onerror", this.Div05_Div00_FileUpload_onerror, this);
            this.Div05.Div03.FileUpload00.addEventHandler("onitemchanged", this.Div03_FileUpload00_onitemchanged, this);
            this.Div05.btn_search.addEventHandler("onclick", this.Div05_btn_search_onclick, this);
            this.Div05.cbo_NA_TRPL_C.addEventHandler("onitemchanged", this.Div05_cbo_NA_TRPL_C_onitemchanged, this);
            this.Div05.Button00.addEventHandler("onclick", this.Div05_Button00_onclick, this);

        };

        this.loadIncludeScript("popup02_copy.xfdl", true);

       
    };
}
)();
