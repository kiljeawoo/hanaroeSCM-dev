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
                this.set_name("Potal");
                this._setFormPosition(0,0,1008,552);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_bbs", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"BLBD_ID\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"BBRD_ID\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"BBRD_TI\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"BBRD_CNTN\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"BLTN_ST_DTM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"BLTN_ED_DTM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CKNL_DSC\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"BBRD_DEL_YN\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"BBRD_INQ_CN\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"BBRD_RGMNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"FSRG_DTM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"FS_RGM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"LSCHG_DTM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"LS_CHGM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"PRET_BBRD_ID\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_notice", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BBRD_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"BLTN_ST_DTM\" type=\"string\" size=\"32\"/><Column id=\"BLTN_ED_DTM\" type=\"string\" size=\"32\"/><Column id=\"OFANC_TINM\" type=\"STRING\" size=\"256\"/><Column id=\"OFANC_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"OFANC_PRU_NT\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CKNL_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_tax", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cnt01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cnt02", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cnt03", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cnt04", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cnt05", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cnt06", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_usrConsent", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BSN_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSENT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_usrConsentCount", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CONSENT_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_survey", this);
            obj._setContents("<ColumnInfo><Column id=\"BSN_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBTITLE\" type=\"STRING\" size=\"256\"/><Column id=\"INTRO\" type=\"STRING\" size=\"256\"/><Column id=\"APL_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"APL_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RMK_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CMENO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cnt07", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static08", "absolute", "0", "0", null, "330", "0", null, this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_PORTAL_Image");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "1149", "25", "21", "40", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("#dc143c66");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "0", "485", null, "66", "0", null, this);
            obj.set_taborder("29");
            obj.set_text("Div03");
            obj.set_url("frame::main_bottom.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "335", "330", "337", "156", null, null, this);
            obj.set_taborder("30");
            obj.set_text("Div00");
            obj.set_cssclass("div_INTRO_ContentsBg02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "20", "13", "109", "23", null, null, this.Div00);
            obj.set_taborder("0");
            obj.set_cssclass("sta_PORTAL_ContentsTitle01");
            this.Div00.addChild(obj.name, obj);
            obj = new Grid("grd_notice", "absolute", "20", "44", "301", "102", null, null, this.Div00);
            obj.set_cssclass("grd_INTRO_Notice");
            obj.set_taborder("1");
            obj.set_binddataset("ds_notice");
            obj.set_scrollbars("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"15\"/><Column size=\"200\"/><Column size=\"9\"/><Column size=\"80\"/></Columns><Rows><Row size=\"25\"/></Rows><Band id=\"body\"><Cell displaytype=\"image\" style=\"padding: ;\" text=\"URL('theme://images/grdIco_INTRO_Notice.png')\"/><Cell col=\"1\" style=\"padding:0 0 0 0;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:OFANC_TINM\"/><Cell col=\"2\"/><Cell col=\"3\" displaytype=\"normal\" style=\"align: ;color:#8f8f8fff;color2:#8f8f8fff;selectcolor:#8f8f8fff;selectfont:9 Gulim;\" text=\"bind:FSRG_DTM\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btn_NHmore", "absolute", "303", "14", "18", "18", null, null, this.Div00);
            obj.set_taborder("2");
            obj.set_cssclass("btn_INTRO_Plus");
            obj.style.set_cursor("hand");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "0", "330", "336", "156", null, null, this);
            obj.set_taborder("14");
            obj.set_text("Div02");
            obj.set_cssclass("div_INTRO_ContentsBg01");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "20", "68", "305", "1", null, null, this.Div02);
            obj.set_taborder("3");
            obj.set_cssclass("sta_INTRO_ContentsLine");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("btn_counsel", "absolute", "14", "15", "147", "42", null, null, this.Div02);
            obj.set_taborder("14");
            obj.set_cssclass("btn_INTRO_CS01");
            obj.style.set_cursor("hand");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "335", "0", "1", "156", null, null, this.Div02);
            obj.set_taborder("15");
            obj.set_cssclass("sta_INTRO_ContentsLine");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "25.3%", "75", null, "25", "9.52%", null, this.Div02);
            obj.set_taborder("16");
            obj.set_text("02) 1522 - 1211");
            obj.set_cssclass("sta_PORTAL_CSNum");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "4.46%", "82", null, "45", "82.14%", null, this.Div02);
            obj.set_taborder("17");
            obj.set_cssclass("sta_PORTAL_CSImage");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "20.83%", "102", null, "33", "42.86%", null, this.Div02);
            obj.set_taborder("18");
            obj.set_text("[평일] 09:00 ~ 18:00\r\n[점심] 12:00 ~ 13:00");
            obj.set_cssclass("sta_INTRO_CSTime");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("btn_remote", "absolute", "54.46%", "104", null, "25", "24.4%", null, this.Div02);
            obj.set_taborder("19");
            obj.set_cssclass("btn_INTRO_Remote");
            obj.style.set_cursor("hand");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("btn_03", "absolute", "173", "6", "60", "60", null, null, this.Div02);
            obj.set_taborder("20");
            obj.set_cssclass("btn_INTRO_Info03");
            obj.style.set_background("URL('theme://images/btn_INTRO_Info03.png') stretch center middle");
            obj.style.set_cursor("hand");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("btn_04", "absolute", "258", "6", "60", "60", null, null, this.Div02);
            obj.set_taborder("21");
            obj.set_cssclass("btn_INTRO_Info04");
            obj.style.set_background("URL('theme://images/btn_INTRO_Info04.png') stretch center middle");
            obj.style.set_cursor("hand");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "245", "4", "1", "58", null, null, this.Div02);
            obj.set_taborder("22");
            obj.set_cssclass("sta_INTRO_ContentsLine");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("btn_sms", "absolute", "76.19%", "104", null, "25", "1.19%", null, this.Div02);
            obj.set_taborder("23");
            obj.set_cssclass("btn_INTRO_Remote");
            obj.style.set_background("URL('theme://images/btn_INTRO_SMS.png') center middle");
            obj.style.set_cursor("hand");
            obj.set_visible("true");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "20.83%", "133", null, "21", "12.2%", null, this.Div02);
            obj.set_taborder("24");
            obj.set_text("* 하나로eSCM 고객센터 : 02) 1522 - 1211");
            obj.set_cssclass("sta_INTRO_CSTime");
            obj.style.set_color("#818181ff");
            obj.style.set_padding("2 0 0 3");
            obj.style.set_font("8 Dotum");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "671", "330", null, "156", "0", null, this);
            obj.set_taborder("13");
            obj.set_text("Div01");
            obj.set_cssclass("div_INTRO_ContentsBg02");
            this.addChild(obj.name, obj);
            obj = new Button("btn_more", "absolute", "303", "14", "18", "18", null, null, this.Div01);
            obj.set_taborder("0");
            obj.set_cssclass("btn_INTRO_Plus");
            obj.style.set_cursor("hand");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "20", "13", "109", "23", null, null, this.Div01);
            obj.set_taborder("1");
            obj.set_cssclass("sta_PORTAL_ContentsTitle02");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0", "0", "1", "154", null, null, this.Div01);
            obj.set_taborder("3");
            obj.set_cssclass("sta_INTRO_ContentsLine");
            this.Div01.addChild(obj.name, obj);
            obj = new Grid("grd_bbs", "absolute", "20", "44", "301", "102", null, null, this.Div01);
            obj.set_cssclass("grd_INTRO_Notice");
            obj.set_taborder("4");
            obj.set_binddataset("ds_bbs");
            obj.set_scrollbars("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"15\"/><Column size=\"200\"/><Column size=\"9\"/><Column size=\"80\"/></Columns><Rows><Row size=\"25\"/></Rows><Band id=\"body\"><Cell displaytype=\"image\" style=\"padding: ;\" text=\"URL('theme://images/grdIco_INTRO_Notice.png')\"/><Cell col=\"1\" style=\"padding:0 0 0 0;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:BBRD_TI\"/><Cell col=\"2\"/><Cell col=\"3\" style=\"color:#8f8f8fff;color2:#8f8f8fff;selectcolor:#8f8f8fff;selectfont:9 Gulim;\" text=\"bind:FSRG_DTM\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "1111", "25", "8", "40", null, null, this);
            obj.set_taborder("26");
            obj.set_visible("false");
            obj.style.set_background("#dc143c66");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "1007", "0", null, "330", "0", null, this);
            obj.set_taborder("33");
            obj.set_cssclass("sta_PORTAL_ImageBg");
            this.addChild(obj.name, obj);

            obj = new Div("Div05", "absolute", "142", "85", "724", "190", null, null, this);
            obj.set_taborder("34");
            obj.set_text("Div05");
            obj.set_cssclass("div_PORTAL_TodoBg");
            this.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "139", "10", "185", "21", null, null, this.Div05);
            obj.set_taborder("31");
            obj.set_cssclass("sta_PORTAL_TodoDate");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "4.43%", "12", null, "16", "81.86%", null, this.Div05);
            obj.set_taborder("32");
            obj.set_cssclass("sta_PORTAL_TodoTitle");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "3.74%", "56", null, "21", "60.11%", null, this.Div05);
            obj.set_taborder("33");
            obj.set_text("수주 미확인 건수");
            obj.set_cssclass("sta_PORTAL_TodoCountTitle");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "50.14%", "55", null, "120", "49.72%", null, this.Div05);
            obj.set_taborder("34");
            obj.set_cssclass("sta_PORTAL_TodoLine");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "3.74%", "86", null, "21", "60.11%", null, this.Div05);
            obj.set_taborder("35");
            obj.set_text("배송예정서 미작성 건수");
            obj.set_cssclass("sta_PORTAL_TodoCountTitle");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "3.74%", "116", null, "21", "62.19%", null, this.Div05);
            obj.set_taborder("36");
            obj.set_text("반품 미확인 건수");
            obj.set_cssclass("sta_PORTAL_TodoCountTitle");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "53.74%", "56", null, "21", "12.19%", null, this.Div05);
            obj.set_taborder("37");
            obj.set_text("반품확인서 미작성 건수");
            obj.set_cssclass("sta_PORTAL_TodoCountTitle");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "53.74%", "86", null, "21", "12.19%", null, this.Div05);
            obj.set_taborder("38");
            obj.set_text("검수 미확인 건수");
            obj.set_cssclass("sta_PORTAL_TodoCountTitle");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "53.74%", "116", null, "21", "12.19%", null, this.Div05);
            obj.set_taborder("39");
            obj.set_text("세금계산서 역발행 미발행 건수");
            obj.set_cssclass("sta_PORTAL_TodoCountTitle");
            this.Div05.addChild(obj.name, obj);
            obj = new Button("btn03", "absolute", "37.4%", "112", null, "30", "51.8%", null, this.Div05);
            obj.set_taborder("40");
            obj.set_cssclass("btn_PORTAL_TodoCount");
            obj.style.set_cursor("hand");
            this.Div05.addChild(obj.name, obj);
            obj = new Button("btn02", "absolute", "38.64%", "82", null, "30", "51.8%", null, this.Div05);
            obj.set_taborder("41");
            obj.set_cssclass("btn_PORTAL_TodoCount");
            obj.style.set_cursor("hand");
            this.Div05.addChild(obj.name, obj);
            obj = new Button("btn06", "absolute", "86.98%", "112", null, "30", "2.22%", null, this.Div05);
            obj.set_taborder("42");
            obj.set_cssclass("btn_PORTAL_TodoCount");
            obj.style.set_cursor("hand");
            this.Div05.addChild(obj.name, obj);
            obj = new Button("btn04", "absolute", "86.84%", "51", null, "30", "2.22%", null, this.Div05);
            obj.set_taborder("43");
            obj.set_cssclass("btn_PORTAL_TodoCount");
            obj.style.set_cursor("hand");
            this.Div05.addChild(obj.name, obj);
            obj = new Button("btn05", "absolute", "88.23%", "82", null, "30", "2.22%", null, this.Div05);
            obj.set_taborder("44");
            obj.set_cssclass("btn_PORTAL_TodoCount");
            obj.style.set_cursor("hand");
            this.Div05.addChild(obj.name, obj);
            obj = new Button("btn01", "absolute", "37.26%", "51", null, "30", "51.8%", null, this.Div05);
            obj.set_taborder("45");
            obj.set_cssclass("btn_PORTAL_TodoCount");
            obj.style.set_cursor("hand");
            this.Div05.addChild(obj.name, obj);
            obj = new Button("btn_popupClose", "absolute", "94.74%", "3", null, "32", "0.14%", null, this.Div05);
            obj.set_taborder("46");
            obj.set_cssclass("btn_WF_PopupClose");
            obj.style.set_cursor("hand");
            this.Div05.addChild(obj.name, obj);
            obj = new Button("btn07", "absolute", "37.4%", "142", null, "30", "51.8%", null, this.Div05);
            obj.set_taborder("47");
            obj.set_cssclass("btn_PORTAL_TodoCount");
            obj.style.set_cursor("hand");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "3.74%", "146", null, "21", "62.19%", null, this.Div05);
            obj.set_taborder("48");
            obj.set_text("마트장비 배송예정서 미작성 건수");
            obj.set_cssclass("sta_PORTAL_TodoCountTitle");
            this.Div05.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 337, 156, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("30");
            		p.set_text("Div00");
            		p.set_cssclass("div_INTRO_ContentsBg02");
            		p.set_scrollbars("none");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 336, 156, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("14");
            		p.set_text("Div02");
            		p.set_cssclass("div_INTRO_ContentsBg01");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 156, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("13");
            		p.set_text("Div01");
            		p.set_cssclass("div_INTRO_ContentsBg02");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 724, 190, this.Div05,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("34");
            		p.set_text("Div05");
            		p.set_cssclass("div_PORTAL_TodoBg");

            	}
            );
            this.Div05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1008, 552, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Intro");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "frame::main_bottom.xfdl");
        };
        
        // User Script
        this.addIncludeScript("Potal_old.xfdl", "lib::comLib.xjs");
        this.registerScript("Potal_old.xfdl", function(exports) {

        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        
        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        var xPos,yPos, Xscreen, Yscreen;
        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        	//this.fn_popupUnconfirmedDiv();
        }

        this.fn_afterFormOnload = function()
        {

        	if(application.gv_userType == '01' && application.gv_mbcoType == '1'){ /*협력업체일때 && 본사  설문조사 루트 탐*/
        		var mbco = application.gv_mbcoType;
        		
        		this.surveyCheck();

        		// TRPL_DTL_TPC : 0002, 0003, 0004 농업인생산기업 팝업
        		if (application.gv_trplDtlTpc == '0002' || application.gv_trplDtlTpc == '0003' || application.gv_trplDtlTpc == '0004') {			
        			this.gfn_popupMsg(
        				"NAHHJOIN", // id
        				"농협하나로앱을 통하여 농협에서의 판매실적이나 재고현황을\n실시간으로 편리하게 확인하실 수 있습니다.\n농협하나로앱 가입화면으로 이동하시겠습니까?", // msg
        				"LINK", // type
        				"https://www.nhhanaro.co.kr/nahh_join.jsp" // action
        			);
        		}
        	}
        	// 신규계약상담
        	if (application.gv_userType == '02' || application.gv_userType == '03') {
        		this.Div02.btn_counsel.set_visible(false);
        	}
        	 
        	this.fn_retrieveBlbdOfancMainList();
        	this.fn_retrieveNacfOfancMainList();
        	
        	var today = this.gfn_today('yyyyMMdd');
        	var dayBefore = this.gfn_minusDate(today, 2);
        	this.Div05.Static01.set_text("("+ this.gfn_getFormat(dayBefore, "@@@@-@@-@@")+" ~ "+ this.gfn_getFormat(today, "@@@@-@@-@@")+")");
        	
        	if (application.gv_userType != '04' && application.gv_userType != '81') this.fn_retrieveUnCnfCnInqCnt(); // 미확인건수
        	else if (application.gv_userType == '04' || application.gv_userType == '81') this.Div05.set_visible(false);
        	
        //	this.fn_checkOpenSMS(); // SMS 상시적용
        	//this.fn_retrieveUsrConsent(); // 사용자 정보 제공 동의
        }
        /*
         * 자사 판매정보 제공동의 
         */
        this.consentPopup = function()
        {

        	var oArg = {paramMode:"U", dsArg:this.ds_notice};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";    
           	this.gfn_openPopup("popId","OMG.PT::OMG_DS_SC_4513.xfdl",oArg,sOption,sPopupCallBack);	    
        }
        /*
        사용자 만족도 설문조사 (협력업체 해당)
        */
        this.surveyCheck = function()
        {

        	var sSvcID        = "retrievePopupsurvey";
        	var sURL          = "svc::rest/pt/survey/retrievePopupsurvey";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_survey=ds_survey";
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }
        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_retrieveBlbdOfancMainList = function()
        {
        	var sSvcID        = "retrieveBlbdOfancMainList";
        	var sURL          = "svc::rest/pt/blbd/retrieveBlbdOfancMainList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_bbs=ds_bbs";	
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	application.set_usewaitcursor(false);
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        
        this.fn_retrieveNacfOfancMainList = function()
        {
        	var sSvcID        = "retrieveNacfOfancMainList";
        	var sURL          = "svc::rest/pt/blbd/retrieveNacfOfancMainList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_notice=ds_notice";	
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	application.set_usewaitcursor(false);
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_retrieveUnCnfCnInqCnt = function() 
        {
        	var today = this.gfn_today('yyyyMMdd');
        	var dayBefore = this.gfn_minusDate(today, 2);
        	var glnCode = application.gv_glnCode;
        	
        	var params = 	"to="+today
        					+" from="+dayBefore
        					+" glnCode2="+glnCode
        					+" userTPC="+application.gv_userType;
        					
        	trace("##params >> " + params);
        	
        	var sSvcID        = "retrieveUnCnfCnInqCnt";
        	var sURL          = "svc::rest/pt/comn/retrieveUnCnfCnInqCnt";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_cnt01=ds_cnt01 ds_cnt02=ds_cnt02 ds_cnt03=ds_cnt03 ds_cnt04=ds_cnt04 ds_cnt05=ds_cnt05 ds_cnt06=ds_cnt06 ds_cnt07=ds_cnt07";	
        	var sArgument     = params;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // 
        	
        	application.set_usewaitcursor(false);
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_retrieveUsrConsent = function() 
        {
        	var bsnDsc = "sales_price";
        	var glnCode = application.gv_glnCode;
        	
        	var params =  "bsnDsc=" + bsnDsc
        				 + " naTrplC=" + glnCode 
        				 ;

        					
        	trace("##params >> " + params);
        	
        	var sSvcID        = "retrieveUsrConsentCount";
        	var sURL          = "svc::rest/pt/usrinf/retrieveUsrConsentCount";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_usrConsentCount=ds_usrConsentCount";	
        	var sArgument     = params;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // 
        	
        	application.set_usewaitcursor(false);
        	// alert('fn_retrieveUsrConsent');
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	if(svcID == "checkOpenSMS"){
        		trace("checkOpenSMS : " + ErrorCode);
        	}
         	if(ErrorCode > -1)
         	{
        		application.set_usewaitcursor(true);
        		
        		switch(svcID)
        		{
        			case "retrieveBlbdOfancMainList":
        				break;
        			case "retrieveNacfOfancMainList":
        				break;
        			case "retrieveUnCnfCnInqCnt":
        				if(application.gv_userType != '04')
        				{
        					this.Div05.btn01.set_text(this.ds_cnt01.getColumn(0, "CNT"));
        					this.Div05.btn02.set_text(this.ds_cnt02.getColumn(0, "CNT"));
        					this.Div05.btn03.set_text(this.ds_cnt03.getColumn(0, "CNT"));
        					this.Div05.btn04.set_text(this.ds_cnt04.getColumn(0, "CNT"));
        					this.Div05.btn05.set_text(this.ds_cnt05.getColumn(0, "CNT"));
        					this.Div05.btn06.set_text(this.ds_cnt06.getColumn(0, "CNT"));
        					this.Div05.btn07.set_text(this.ds_cnt07.getColumn(0, "CNT"));
        				}
        				else if(application.gv_userType == '04')
        				{
        					this.Div05.btn01.set_text("0");
        					this.Div05.btn02.set_text("0");
        					this.Div05.btn03.set_text("0");
        					this.Div05.btn04.set_text("0");
        					this.Div05.btn05.set_text("0");
        					this.Div05.btn06.set_text(this.ds_cnt06.getColumn(0, "CNT"));
        					this.Div05.btn07.set_text("0");
        				}
        				break;
        			case "checkOpenSMS":
        				this.Div02.Static07.set_text("긴급 SMS");
        				this.Div02.Static07.style.set_font("antialias bold 15 Arial");
        				this.Div02.Static08.style.set_font("8 Dotum");
        				this.Div02.Static08.set_text("[평일] 18:00 ~ 09:00\n[휴일] 00:00 ~ 23:59");
        				this.Div02.btn_remote.set_visible(false);
        				this.Div02.btn_sms.set_visible(true);
        				this.Div02.btn_sms.set_left(200);
        				this.Div02.btn_sms.set_top(108);
        				this.Div02.btn_sms.set_position("absolute");
        			
        				
        				
        				
        				
        				
        				//this.Div02.Static08.set_text("[평일] 09:00 ~ 18:00[점심] 12:00 ~ 13:00");
        				//this.fn_openSMS();
        			break;

        			case "retrieveUsrConsentCount":
        			    // alert('fn_retrieveUsrConsent callback');

        			   // alert("getRowCount " + this.ds_usrConsent.getRowCount());
        			   var CONSENT_COUNT = this.ds_usrConsentCount.getColumn(0,"CONSENT_COUNT");
        			   trace("CONSENT_COUNT >> " + CONSENT_COUNT);
        			   /*
        			    trace("getRowCount >> " + this.ds_usrConsentCount.getRowCount());
        			    
        			    trace("1 >> " + this.ds_usrConsentCount.getColumn(0,1));
        			    trace("application.gv_userAuth >> " + application.gv_userAuth);
        			    trace("application.gv_userAuth.indexOf('1') >> " + application.gv_userAuth.indexOf('1'));
        			    
        			    trace("application.gv_userType >> " + application.gv_userType);
        			    trace("application.gv_mbcoType >> " + application.gv_mbcoType);
        			    
        			   */
        			   
        				   // application.gv_userType != '01' -- 협력업체 
        				   // 본사 && application.gv_mbcoType ; // 1 본사. 
        				   // 빌링권한application.gv_userAuth     = this.gfn_nvl(this.ds_login.getColumn(0,"userAuth"),"");
        				   // indexof('1');
        				   
        			       // if(this.ds_cnt01.getColumn(0, "CONSENT_YN") != 'Y')
        			   
        			   
        			   if (application.gv_userType == '01' && application.gv_mbcoType == '1' && CONSENT_COUNT == '0' )
        			    {
        			        this.consentPopup();
        			    }
        			break;
        			
        			case "retrievePopupsurvey": 
        			this.popup();
        			break;

        		}
         	}else
         	{	
        		switch(svcID){
        			case "checkOpenSMS":
        				
        			break;
        			
        		}	
        		
         	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.button_onclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_03":
        			this.gfn_openIntroMenu(30100000);
        			break;
        			
        		case "btn_04":
        			this.gfn_openIntroMenu(40100000);
        			break;
        			
        		case "btn_counsel":
        			application.afrm_TopFrame.set_formurl("");
        			application.afrm_LeftFrame.set_formurl("frame::LeftFrame_serviceBT.xfdl");
        			application.afrm_PotalFrame.set_formurl("");
        			application.afrm_TopFrame.set_formurl("frame::TopFrame_serviceBT.xfdl");
        			application.afrm_VFrameSet0.set_separatesize("0,65,*");
        			application.afrm_HFrameSet0.set_separatesize("190,*,0");
        			application.afrm_VFrameSet1.set_separatesize("0,*");
        			
        			this.gfn_OpenMenuId("10100000","","BT"); 
        			break;
        		case "btn_more":
        			switch( application.gv_userType)
        			{
        				case "01":
        					this.fn_openMenu("16004003");
        					break;
        				case "02":
        					this.fn_openMenu("26004003");
        					break;
        				case "03":
        					this.fn_openMenu("36004003");
        					break;
        			}
        			
        			break;
        		case "btn_NHmore":	
        			switch( application.gv_userType)
        			{
        				case "01":
        					this.fn_openMenu("16004001");
        					break;
        				case "02":
        					this.fn_openMenu("26004001");
        					break;
        				case "03":
        					this.fn_openMenu("36004001");
        					break;
        			}
        			break;
        			
        		case "btn_remote":
        			window.open("http://939.co.kr/nhescm/");
        			break;
        		case "btn_sms" :
        			this.fn_openSMS();
        			break;
        		
        	}
        }
        this.popup = function()
        {

        	this.url="";
        	this.popup_W= 0 ;
        	this.popup_H= 0;
        	this.BlbdId="";
        	this.framename = "popu0p";
                
        	for(var i = 0 ; i < this.ds_survey.rowcount; i++){		
        	 
        	    this.TITLE = this.ds_survey.getColumn(i, "TITLE")  ;
        	    this.SUBTITLE = this.ds_survey.getColumn(i, "SUBTITLE")  ;
        	    this.INTRO = this.ds_survey.getColumn(i, "INTRO")  ;
        	    this.SRV_SEQ = this.ds_survey.getColumn(i, "SRV_SEQ")  ;
        		
         		application.open(this.framename, "OMG.MG::OMG_DS_SC_8331.xfdl", this,{URL:this.url,TITLE:this.TITLE,SUBTITLE:this.SUBTITLE,INTRO:this.INTRO,SRV_SEQ:this.SRV_SEQ}, "showtitlebar=false showstatusbar=true autosize=false resizable=true", this.popup_W, this.popup_H , 800,740);
         		this.popup_W = this.popup_W  + 40 ;
        		this.popup_H= this.popup_H + 40;	
         
        	} 			
        }
        this.common_cnt_onclick = function(obj,e)
        {
        	var moveToMenu = "";
        	
        	switch(obj.name)
        	{
        		case "btn01"://수주미확인건수:수주내역조회
        			if(application.gv_userType == '04')
        			 {
        			 alert("화면 권한이 없습니다.");
        			 return;
        			 }
        			 moveToMenu = "01001002";
        			break;
        		
        		case "btn02"://배송예정서:수주내역조회
        			if(application.gv_userType == '04')
        			 {
        			 alert("화면 권한이 없습니다.");
        			 return;
        			 }
        			moveToMenu = "01001002";
        			break;
        			
        		case "btn03"://반품미확인:검수실적_전표별
        			if(application.gv_userType == '04')
        			 {
        			 alert("화면 권한이 없습니다.");
        			 return;
        			 }
        			moveToMenu = "01005001";
        			break;
        			
        		case "btn04"://반품확인서미작성:반품입고확인등록
        			if(application.gv_userType == '04')
        			 {
        			 alert("화면 권한이 없습니다.");
        			 return;
        			 }
        			moveToMenu = "01006002";
        			break;
        			
        		case "btn05"://검수미확인건수:검수실적_전표별
        			if(application.gv_userType == '04')
        			 {
        			 alert("화면 권한이 없습니다.");
        			 return;
        			 }
        			moveToMenu = "01005001";
        			break;
        			
        		case "btn06"://세금계산서역발행:매출세금계산서(역발행)
        			switch( application.gv_userType)
        			{
        				case "01":
        					moveToMenu = "12002002";
        					break;
        				case "02":
        					moveToMenu = "22002002";
        					break;
        				case "03":
        					moveToMenu = "32002002";
        					break;
        				case "04":
        					moveToMenu = "42002002";
        					break;
        			}
        			break;
        			
        		case "btn07"://마트장비 배송예정서
        			if(application.gv_userType == '04')
        			 {
        			 alert("화면 권한이 없습니다.");
        			 return;
        			 }
        			moveToMenu = "01003017";
        			break;
        	}
        	
        	this.fn_openMenu(moveToMenu);
        }

        this.grd_oncellclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "grd_notice":
        			this.fn_openNhNotice(e.row);
        			break;
        		case "grd_bbs":
        			this.fn_openBbsNotice(e.row);
        			break;
        	}
        }

        
        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_openSMS = function()
        {
        	var oArg = {};
        	var sOption = "autosize=true,title=true,modeless=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("POP_SMS","POPUP::POPUP_SMS.xfdl",oArg,sOption,sPopupCallBack);	
        }

        this.fn_checkOpenSMS = function(){
        	var sSvcID        = "checkOpenSMS";      
        	var sURL          = "svc::rest/pt/checkOpenSMS";
        	var sInDatasets   = "";
        	var sOutDatasets  = "";   
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회         
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_openNhNotice = function(nRow)
        {
        	var oArg = {noticeSeq:this.ds_notice.getColumn(nRow, "BBRD_SQNO")};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("OMG_DS_SC_4511","OMG.PT::OMG_DS_SC_4511.xfdl",oArg,sOption,sPopupCallBack);	
        }

        this.fn_openBbsNotice = function(nRow)
        {
        	var oArg = {blbdId:this.ds_bbs.getColumn(nRow, "BLBD_ID"), bbrdId:this.ds_bbs.getColumn(nRow, "BBRD_ID")};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("OMG_DS_SC_4111","OMG.PT::OMG_DS_SC_4111.xfdl",oArg,sOption,sPopupCallBack);	
        }

        this.fn_popupUnconfirmedDiv = function()
        {
        	var oArg = "";
        	var sOption = "autosize=true"; //,modeless=true
        	var sPopupCallBack = "fn_popupUnconfirmedDiv";    
        	this.gfn_openPopup("popupUnconfirmedDiv","frame::portal_unconfirmedDiv.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.Div05_ondragmove = function(obj,e)
        {
        	Xscreen = e.screenX;
        	Yscreen = e.screenY;
        }

        this.Div05_ondrag = function(obj,e)
        {
        	xPos = obj.left - e.screenX;
        	yPos = obj.top - e.screenY;

        	this.setTimer(1,5);
        	return true;
        }

        this.Intro_ontimer = function(obj,e)
        {
        	this.Div05.move(Xscreen + xPos, Yscreen + yPos);
        }

        this.Div05_ondrop = function(obj,e)
        {
        	this.killTimer(1);
        }

        this.Div05_btn_popupClose_onclick = function(obj,e)
        {
        	this.Div05.set_visible(false);
        }

        this.common_onclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "Button03":
        			this.fn_openMenu("22001001");
        			break;
        	}
        }

        this.fn_openMenu = function(menuId) //26004003
        {
        	var sMenuId = menuId.substr(0,2);//26
        	application.afrm_HFrameSet0.set_separatesize("190,*,0");
        	application.afrm_VFrameSet1.set_separatesize("32,*");
        	application.afrm_LeftFrame.form.ds_menu.filter("MENU_LEVEL >= 1 && MENU_ID.substr(0,2)=='"+sMenuId+"' && DISPLAY_YN!='N'");
        	
        	var nRow    = application.afrm_LeftFrame.form.ds_menu.findRow("MENU_ID",menuId);
        	var objGrid = application.afrm_LeftFrame.form.div_menu.grd_menu;
        	
        	var nTopRow      = application.gds_menu.findRow("MENU_ID", sMenuId+"000000");
        	
        	var sLFTitleText = application.gds_menu.getColumn(nTopRow,"MENU_NAME");
        	
        	application.afrm_LeftFrame.form.btn_menuList.set_text(sLFTitleText);
        	
        	//중메뉴의 첫번째 소메뉴 선택
        	var nRow2   = application.afrm_LeftFrame.form.ds_menu.findRow("MENU_ID",menuId.substr(0,5) + '000');
        	objGrid.setTreeStatus(objGrid.getTreeRow(nRow2),true);//26004000
        	application.afrm_LeftFrame.form.ds_menu.set_rowposition(nRow);
        	
        	var sMId =application.afrm_LeftFrame.form.ds_menu.getColumn(nRow,"MENU_ID");
        	
        	//해당Grid visible처리
        	application.afrm_LeftFrame.form.div_menu.grd_menu.set_visible(true);
        	application.afrm_LeftFrame.form.div_menu.grd_myInfo.set_visible(false);
        	
        	this.gfn_OpenMenuId(sMId);
        }
        this.Button00_onclick = function(obj,e)
        {
        	this.fn_openMenu("22004003");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("ontimer", this.Intro_ontimer, this);
            this.Div00.grd_notice.addEventHandler("oncellclick", this.grd_oncellclick, this);
            this.Div00.btn_NHmore.addEventHandler("onclick", this.button_onclick, this);
            this.Div02.btn_counsel.addEventHandler("onclick", this.button_onclick, this);
            this.Div02.btn_remote.addEventHandler("onclick", this.button_onclick, this);
            this.Div02.btn_03.addEventHandler("onclick", this.button_onclick, this);
            this.Div02.btn_04.addEventHandler("onclick", this.button_onclick, this);
            this.Div02.btn_sms.addEventHandler("onclick", this.button_onclick, this);
            this.Div01.btn_more.addEventHandler("onclick", this.button_onclick, this);
            this.Div01.grd_bbs.addEventHandler("oncellclick", this.grd_oncellclick, this);
            this.Div05.addEventHandler("ondragmove", this.Div05_ondragmove, this);
            this.Div05.addEventHandler("ondrag", this.Div05_ondrag, this);
            this.Div05.addEventHandler("ondrop", this.Div05_ondrop, this);
            this.Div05.btn03.addEventHandler("onclick", this.common_cnt_onclick, this);
            this.Div05.btn02.addEventHandler("onclick", this.common_cnt_onclick, this);
            this.Div05.btn06.addEventHandler("onclick", this.common_cnt_onclick, this);
            this.Div05.btn04.addEventHandler("onclick", this.common_cnt_onclick, this);
            this.Div05.btn05.addEventHandler("onclick", this.common_cnt_onclick, this);
            this.Div05.btn01.addEventHandler("onclick", this.common_cnt_onclick, this);
            this.Div05.btn_popupClose.addEventHandler("onclick", this.Div05_btn_popupClose_onclick, this);
            this.Div05.btn07.addEventHandler("onclick", this.common_cnt_onclick, this);

        };

        this.loadIncludeScript("Potal_old.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
