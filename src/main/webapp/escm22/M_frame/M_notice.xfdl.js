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
                this.set_name("M_setting");
                this.set_classname("M_setting");
                this.set_titletext("공지사항_List");
                this._setFormPosition(0,0,540,820);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_bbs", this);
            obj.set_firefirstcount("0");
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
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BBRD_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"BLTN_ST_DTM\" type=\"string\" size=\"32\"/><Column id=\"BLTN_ED_DTM\" type=\"string\" size=\"32\"/><Column id=\"OFANC_TINM\" type=\"STRING\" size=\"256\"/><Column id=\"OFANC_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"OFANC_PRU_NT\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CKNL_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pageVO", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TOTAL_ROW_COUNT\">13</Col><Col id=\"PAGE_SIZE\">10</Col><Col id=\"CURRENT_PAGE\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_copy", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_ID\" type=\"string\" size=\"32\"/><Column id=\"DOCUMENT_ID\" type=\"string\" size=\"32\"/><Column id=\"NOTICE_ED_DT\" type=\"string\" size=\"32\"/><Column id=\"TITLE\" type=\"string\" size=\"32\"/><Column id=\"DOC_START_DT\" type=\"string\" size=\"32\"/><Column id=\"DOC_END_DT\" type=\"string\" size=\"32\"/><Column id=\"NOTICE_YN\" type=\"string\" size=\"32\"/><Column id=\"DELETE_YN\" type=\"string\" size=\"32\"/><Column id=\"COUNT\" type=\"string\" size=\"32\"/><Column id=\"USER_NAME\" type=\"string\" size=\"32\"/><Column id=\"PARENT_DOC_ID\" type=\"string\" size=\"32\"/><Column id=\"INIT_REG_DT\" type=\"string\" size=\"32\"/><Column id=\"INIT_REG_USER\" type=\"string\" size=\"32\"/><Column id=\"LAST_CHG_DT\" type=\"string\" size=\"32\"/><Column id=\"LAST_CHG_USER\" type=\"string\" size=\"32\"/><Column id=\"REPALY\" type=\"STRING\" size=\"256\"/><Column id=\"REIMG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TITLE\">시스템 점검 안내(2015.04.15 19:00~2..</Col><Col id=\"DOCUMENT_ID\">2015-04-04</Col><Col id=\"REPALY\">0 0 0 20</Col><Col id=\"REIMG\"/></Row><Row><Col id=\"TITLE\">국세청전송중단안내(2015.02.17~02.23)</Col><Col id=\"DOCUMENT_ID\">2015-04-04</Col><Col id=\"REPALY\">0 0 0 60</Col><Col id=\"REIMG\">URL('img::btn_calMonthNext.png')</Col></Row><Row><Col id=\"TITLE\">개인정보취급방침 개정 안내</Col><Col id=\"DOCUMENT_ID\">2015-04-04</Col><Col id=\"REPALY\">0 0 0 20</Col></Row><Row><Col id=\"TITLE\">3월 서비스이용내역 발송 안내</Col><Col id=\"DOCUMENT_ID\">2015-04-04</Col><Col id=\"REPALY\">0 0 0 60</Col><Col id=\"REIMG\">URL('img::btn_calMonthNext.png')</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_condition", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SEARCH\" type=\"STRING\" size=\"256\"/><Column id=\"CONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"BLBD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CONDITION\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_blbdId", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BLBD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BLBD_ID\">201506090001</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_bbsDetail", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BLBD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_TI\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"BLTN_ST_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BLTN_ED_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CKNL_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_INQ_CN\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_RGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BLBD_ID\"/><Col id=\"BBRD_ID\"/><Col id=\"BBRD_TI\"/><Col id=\"BBRD_CNTN\"/><Col id=\"BLTN_ST_DTM\"/><Col id=\"BLTN_ED_DTM\"/><Col id=\"CKNL_DSC\"/><Col id=\"BBRD_DEL_YN\"/><Col id=\"BBRD_INQ_CN\"/><Col id=\"BBRD_RGM_NM\"/><Col id=\"FSRG_DTM\"/><Col id=\"FS_RGM\"/><Col id=\"LSCHG_DTM\"/><Col id=\"LS_CHGM\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_file", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_noticeDetail", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_SQNO\" type=\"string\" size=\"32\"/><Column id=\"BLTN_ST_DTM\" type=\"string\" size=\"32\"/><Column id=\"BLTN_ED_DTM\" type=\"string\" size=\"32\"/><Column id=\"OFANC_TINM\" type=\"string\" size=\"32\"/><Column id=\"OFANC_CNTN\" type=\"string\" size=\"32\"/><Column id=\"OFANC_PRU_NT\" type=\"string\" size=\"32\"/><Column id=\"BBRD_DEL_YN\" type=\"string\" size=\"32\"/><Column id=\"CKNL_DSC\" type=\"string\" size=\"32\"/><Column id=\"FSRG_DTM\" type=\"string\" size=\"32\"/><Column id=\"FS_RGM\" type=\"string\" size=\"32\"/><Column id=\"FSRGMN_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"INIT_REG_DT\" type=\"string\" size=\"32\"/><Column id=\"INIT_REG_USER\" type=\"string\" size=\"32\"/><Column id=\"LAST_CHG_DT\" type=\"string\" size=\"32\"/><Column id=\"LAST_CHG_USER\" type=\"string\" size=\"32\"/><Column id=\"REPALY\" type=\"STRING\" size=\"256\"/><Column id=\"REIMG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"OFANC_TINM\">시스템 점검 안내(2015.04.15 19:00~2..</Col><Col id=\"BLTN_ST_DTM\">2015-04-04</Col><Col id=\"REPALY\">0 0 0 20</Col><Col id=\"REIMG\"/></Row><Row><Col id=\"OFANC_TINM\">국세청전송중단안내(2015.02.17~02.23)</Col><Col id=\"BLTN_ST_DTM\">2015-04-04</Col><Col id=\"REPALY\">0 0 0 60</Col><Col id=\"REIMG\">URL('img::btn_calMonthNext.png')</Col></Row><Row><Col id=\"OFANC_TINM\">개인정보취급방침 개정 안내</Col><Col id=\"BLTN_ST_DTM\">2015-04-04</Col><Col id=\"REPALY\">0 0 0 20</Col></Row><Row><Col id=\"OFANC_TINM\">3월 서비스이용내역 발송 안내</Col><Col id=\"BLTN_ST_DTM\">2015-04-04</Col><Col id=\"REPALY\">0 0 0 60</Col><Col id=\"REIMG\">URL('img::btn_calMonthNext.png')</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_noticeFile", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BBRD_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"APDFL_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"APDFLNM\" type=\"STRING\" size=\"256\"/><Column id=\"APDFL_PATHNM\" type=\"STRING\" size=\"256\"/><Column id=\"APDFL_XCRNM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_conditionNH", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SEARCH\" type=\"STRING\" size=\"256\"/><Column id=\"CONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"BLBD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CONDITION\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_notice", "absolute", "547", "134", "540", "639", null, null, this);
            obj.set_taborder("27");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "0", "540", "94", null, null, this.div_notice);
            obj.getSetter("taborder").set("3");
            obj.set_cssclass("sta_WF_Noticeshrchbg");
            this.div_notice.addChild(obj.name, obj);
            obj = new Edit("edt_searchNH", "absolute", "15", "20", "452", "54", null, null, this.div_notice);
            obj.set_taborder("0");
            obj.set_tabstop("false");
            obj.set_visible("true");
            this.div_notice.addChild(obj.name, obj);
            obj = new Grid("grd_notice", "absolute", "0", "94", "540", "545", null, null, this.div_notice);
            obj.set_taborder("1");
            obj.set_binddataset("ds_notice");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"537\"/></Columns><Rows><Row size=\"63\"/><Row size=\"63\"/></Rows><Band id=\"body\"><Cell style=\"align:left middle;padding:0 15 0 20;\" text=\"bind:OFANC_TINM\"/><Cell row=\"1\" displaytype=\"date\" style=\"align:left middle;padding:0 15 0 20;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:BLTN_ST_DTM\"/></Band></Format></Formats>");
            this.div_notice.addChild(obj.name, obj);
            obj = new Button("btn_searchEscm", "absolute", "470", "20", "55", "54", null, null, this.div_notice);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_SearchBtn");
            this.div_notice.addChild(obj.name, obj);

            obj = new Div("div_top", "absolute", "0", "0", "540", "135", null, null, this);
            obj.set_taborder("26");
            this.addChild(obj.name, obj);
            obj = new Static("st_top_title00", "absolute", "0%", "0", null, "65", "0%", null, this.div_top);
            obj.getSetter("taborder").set("0");
            obj.set_text("공지사항");
            obj.set_cssclass("sta_WF_Toptitle");
            this.div_top.addChild(obj.name, obj);
            obj = new Button("btn_bbs", "absolute", "0%", "64", null, "70", "50%", null, this.div_top);
            obj.set_taborder("1");
            obj.set_text("eSCM");
            obj.set_cssclass("btn_WF_NoticeS");
            this.div_top.addChild(obj.name, obj);
            obj = new Button("btn_notice", "absolute", "49.81%", "64", null, "70", "0%", null, this.div_top);
            obj.set_taborder("2");
            obj.set_text("농협");
            obj.set_cssclass("btn_WF_Notice");
            this.div_top.addChild(obj.name, obj);

            obj = new Div("div_bbs", "absolute", "0", "134", "540", "639", null, null, this);
            obj.set_taborder("24");
            obj.style.set_background("transparent");
            this.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0%", "0", null, "94", "0%", null, this.div_bbs);
            obj.getSetter("taborder").set("2");
            obj.set_cssclass("sta_WF_Noticeshrchbg");
            this.div_bbs.addChild(obj.name, obj);
            obj = new Edit("edt_search", "absolute", "15", "20", "452", "54", null, null, this.div_bbs);
            obj.set_taborder("0");
            obj.set_tabstop("false");
            this.div_bbs.addChild(obj.name, obj);
            obj = new Button("btn_searchNh", "absolute", "470", "20", "55", "54", null, null, this.div_bbs);
            obj.set_taborder("1");
            obj.set_tabstop("false");
            obj.set_cssclass("btn_WF_SearchBtn");
            obj.set_visible("true");
            this.div_bbs.addChild(obj.name, obj);
            obj = new Grid("grd_bbs", "absolute", "0%", "94", null, "545", "0%", null, this.div_bbs);
            obj.set_taborder("4");
            obj.set_binddataset("ds_bbs");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"537\"/></Columns><Rows><Row size=\"63\"/><Row size=\"63\"/></Rows><Band id=\"body\"><Cell style=\"align:left middle;padding:0 15 0 20;\" text=\"bind:BBRD_TI\"/><Cell row=\"1\" style=\"align:left middle;padding:0 15 0 20;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:FSRG_DTM\"/></Band></Format></Formats>");
            this.div_bbs.addChild(obj.name, obj);

            obj = new Div("cmt_div_escm_detail", "absolute", "1098", "0", "540", "820", null, null, this);
            obj.set_taborder("18");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Static("st_top_title01", "absolute", "0", "0", "540", "65", null, null, this.cmt_div_escm_detail);
            obj.getSetter("taborder").set("0");
            obj.set_text("공지사항 상세");
            obj.set_cssclass("sta_WF_Toptitle");
            this.cmt_div_escm_detail.addChild(obj.name, obj);
            obj = new Static("st_escm_title", "absolute", "0", "64", "540", "94", null, null, this.cmt_div_escm_detail);
            obj.getSetter("taborder").set("1");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Noticetitle");
            obj.set_wordwrap("char");
            this.cmt_div_escm_detail.addChild(obj.name, obj);
            obj = new Static("ta_escm_cont_bg", "absolute", "0", "158", "540", "662", null, null, this.cmt_div_escm_detail);
            obj.getSetter("taborder").set("2");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #bfbfbfff,0 none #808080");
            this.cmt_div_escm_detail.addChild(obj.name, obj);
            obj = new TextArea("ta_escm_cont", "absolute", "17", "179", "508", "620", null, null, this.cmt_div_escm_detail);
            obj.set_taborder("3");
            obj.set_cssclass("txt_WF_Notice");
            obj.set_wordwrap("char");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.cmt_div_escm_detail.addChild(obj.name, obj);
            obj = new Static("st_escm_ico", "absolute", "15", "89", "66", "49", null, null, this.cmt_div_escm_detail);
            obj.getSetter("taborder").set("4");
            obj.set_cssclass("sta_WF_Noticeico01");
            this.cmt_div_escm_detail.addChild(obj.name, obj);

            obj = new Div("cmt_div_nh_detail", "absolute", "1673", "0", "540", "820", null, null, this);
            obj.set_taborder("19");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Static("st_top_title02", "absolute", "0", "0", "540", "65", null, null, this.cmt_div_nh_detail);
            obj.getSetter("taborder").set("0");
            obj.set_text("공지사항 상세");
            obj.set_cssclass("sta_WF_Toptitle");
            this.cmt_div_nh_detail.addChild(obj.name, obj);
            obj = new Static("st_nh_title", "absolute", "0", "64", "540", "94", null, null, this.cmt_div_nh_detail);
            obj.getSetter("taborder").set("1");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Noticetitle");
            obj.set_wordwrap("char");
            this.cmt_div_nh_detail.addChild(obj.name, obj);
            obj = new Static("ta_nh_cont_bg", "absolute", "0", "158", "540", "662", null, null, this.cmt_div_nh_detail);
            obj.getSetter("taborder").set("2");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #bfbfbfff,0 none #808080");
            this.cmt_div_nh_detail.addChild(obj.name, obj);
            obj = new TextArea("ta_nh_cont", "absolute", "17", "179", "508", "620", null, null, this.cmt_div_nh_detail);
            obj.set_taborder("3");
            obj.set_cssclass("txt_WF_Notice");
            obj.set_wordwrap("char");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.cmt_div_nh_detail.addChild(obj.name, obj);
            obj = new Static("st_nh_ico", "absolute", "15", "89", "66", "49", null, null, this.cmt_div_nh_detail);
            obj.getSetter("taborder").set("5");
            obj.set_cssclass("sta_WF_Noticeico02");
            this.cmt_div_nh_detail.addChild(obj.name, obj);

            obj = new Div("div_page", "absolute", "15.74%", null, null, "29", "21.3%", "7", this);
            obj.set_taborder("25");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "86.18%", "10", null, "15", "10%", null, this.div_page);
            obj.getSetter("taborder").set("13");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "0%", "0", null, "10", "32.65%", null, this.div_page);
            obj.getSetter("taborder").set("14");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_page.addChild(obj.name, obj);
            obj = new Button("btn_next", "absolute", "90%", "8", null, "14", "5.59%", null, this.div_page);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PageNext");
            this.div_page.addChild(obj.name, obj);
            obj = new Button("btn_previous", "absolute", "5%", "8", null, "14", "90.59%", null, this.div_page);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_PagePrevious");
            this.div_page.addChild(obj.name, obj);
            obj = new Button("btn_end", "absolute", "95%", "8", null, "14", "0.59%", null, this.div_page);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_PageNextP");
            this.div_page.addChild(obj.name, obj);
            obj = new Button("btn_first", "absolute", "0%", "8", null, "14", "95.59%", null, this.div_page);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_PagePreviousP");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "0%", "24", null, "5", "32.65%", null, this.div_page);
            obj.getSetter("taborder").set("19");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "9.12%", "9", null, "15", "87.06%", null, this.div_page);
            obj.getSetter("taborder").set("20");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("sta_page4", "absolute", "74.71%", "0", null, "29", "12.65%", null, this.div_page);
            obj.getSetter("taborder").set("21");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Page");
            obj.style.set_align("center middle");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("sta_page3", "absolute", "58.53%", "0", null, "29", "28.53%", null, this.div_page);
            obj.getSetter("taborder").set("22");
            obj.set_text("4");
            obj.set_cssclass("sta_WF_Page");
            obj.style.set_align("center middle");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("sta_page2", "absolute", "42.65%", "0", null, "29", "44.12%", null, this.div_page);
            obj.getSetter("taborder").set("23");
            obj.set_text("3");
            obj.set_cssclass("sta_WF_Page");
            obj.style.set_align("center middle");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("sta_page1", "absolute", "27.06%", "0", null, "29", "60%", null, this.div_page);
            obj.getSetter("taborder").set("24");
            obj.set_text("2");
            obj.set_cssclass("sta_WF_Page");
            obj.style.set_align("center middle");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("sta_page0", "absolute", "11.18%", "0", null, "29", "76.18%", null, this.div_page);
            obj.getSetter("taborder").set("25");
            obj.set_text("1");
            obj.set_cssclass("sta_WF_PageS");
            obj.style.set_align("center middle");
            this.div_page.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 540, 639, this.div_notice,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("27");
            		p.set_visible("false");

            	}
            );
            this.div_notice.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 135, this.div_top,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("26");

            	}
            );
            this.div_top.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 639, this.div_bbs,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("24");
            		p.style.set_background("transparent");

            	}
            );
            this.div_bbs.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 820, this.cmt_div_escm_detail,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("18");
            		p.set_visible("false");

            	}
            );
            this.cmt_div_escm_detail.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 820, this.cmt_div_nh_detail,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("19");
            		p.set_visible("false");

            	}
            );
            this.cmt_div_nh_detail.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 29, this.div_page,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("25");
            		p.style.set_background("transparent");
            		p.set_visible("false");

            	}
            );
            this.div_page.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 820, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("M_setting");
            		p.set_titletext("공지사항_List");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","cmt_div_escm_detail.ta_escm_cont","value","ds_bbsDetail","BBRD_CNTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","cmt_div_nh_detail.ta_nh_cont","value","ds_noticeDetail","OFANC_CNTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_bbs.edt_search","value","ds_condition","SEARCH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_notice.edt_searchNH","value","ds_conditionNH","SEARCH");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("M_notice.xfdl", "lib::comLib.xjs");
        this.registerScript("M_notice.xfdl", function() {
        //include "lib::comLib.xjs";

        	var iStartPageNo    = 0;   // 전체 페이지 순서
        	var iUnitSelRowNo   = 0;  // 한번 Server호출시 가져올 row갯수
        	var iStartSelRowNo  = 1;   // Server호출시 시작할 row no
        	var iMaxPageNum     = 5;  // 화면에 보여줄 최대 Page번호 갯수
        	//var iServerRowCount = 30;   // 서버에서 넘어온 Row갯수(100건이 안될 수 있음)
        	var iTotCnt = 0;
        	var lsDivPage = "";//페이지 컴포넌트 경로
        	var lsDivPageNum = "";//총건수 컴포넌트 경로
        	var lsTotCntDst = "";//총건수 사용여부
        	var lsFuncNm = "";//화면호출변수명

        	var blbdId = this.ds_blbdId.getColumn(0,"BLBD_ID");
        	this.ds_condition.setColumn(0,"BLBD_ID",blbdId);
        	this.ds_conditionNH.setColumn(0,"BLBD_ID",blbdId);
        	var bbrdId = ""

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	this.div_notice_btn_searchEscm_onclick();
        }

        /* eSCM 공지사항 */
        this.fn_retrieveBlbdList = function()
        {
        	var sSvcID        = "retrieveBlbdList";
        	var sURL          = "svc::rest/pt/blbd/retrieveBlbdList";
        	var sInDatasets   = "ds_condition=ds_condition ds_pageVO=ds_pageVO";
        	var sOutDatasets  = "ds_bbs=ds_bbs ds_pageVO=ds_pageVO";	
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* 농협 공지사항 */
        this.fn_retrieveNacfOfancList = function()
        {
        	var sSvcID        = "retrieveNacfOfancList";
        	var sURL          = "svc::rest/pt/blbd/retrieveNacfOfancList";
        	var sInDatasets   = "ds_condition=ds_conditionNH ds_pageVO=ds_pageVO";
        	var sOutDatasets  = "ds_notice=ds_notice ds_pageVO=ds_pageVO";	
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }
        /*
        this.fn_getBbldID = function()
        {
        	var sSvcID        = "getBbldID";
        	var sURL          = "svc::rest/pt/blbd/getBlbdID";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_blbdId=ds_blbdId";	
        	var sArgument     = "menuId="
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }
        */

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
         	if(ErrorCode < 0) //에러
         	{
        		trace(">>>>>>>>>>>>>>> svcID ::" +  svcID + ",  ErrorCode :: " + ErrorCode + ",  ErrorMsg :: " + ErrorMsg);
         	}
         	else 
         	{
        		switch(svcID)
        		{
        			case "retrieveBlbdList":
        				this.ds_copy.copyData(this.ds_bbs);
        				this.ds_copy.clearData();
        				
        				if(this.ds_bbs.rowcount > 0)
        				{ 
        					var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        					var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        					
        					this.div_page.set_visible(true);
        					this.fn_pageSet(sTotal, sPagesize,"div_page",lsNowPage);	
        									  
        				}
        				else if(this.ds_bbs.rowcount == 0)
        				{
        					alert("조회할 내용이 없습니다.");
        					this.fn_pageSet(0, 0,"div_page",lsNowPage);//페이징 설정			
        				}
        				trace(this.ds_bbs.saveXML());
        				break;
        			
        			case "retrieveBlbd":
        				if(this.ds_bbsDetail.rowcount > 0)
        				{ 
        					var bbrdTi = this.ds_bbsDetail.getColumn(this.ds_bbsDetail.rowposition, "BBRD_TI");
        					var lschgDtm = this.ds_bbsDetail.getColumn(this.ds_bbsDetail.rowposition, "LSCHG_DTM").substring(0,10);
        					
        					this.cmt_div_escm_detail.st_escm_title.set_text(bbrdTi + " " + "<fs v='14'>" + lschgDtm + "</fs>");
        					trace(this.ds_bbsDetail.saveXML());
        				}
        				break;
        			
        			case "retrieveNacfOfancList":
        				if(this.ds_notice.rowcount > 0)
        				{ 
        					var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        					var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        								
        					this.fn_pageSet(sTotal, sPagesize,"div_page",lsNowPage);	
        					trace(this.ds_notice.saveXML());
        				}
        				else if(this.ds_notice.rowcount == 0)
        				{
        					alert("조회할 내용이 없습니다.");
        					this.fn_pageSet(0, 0,"div_page",lsNowPage);//페이징 설정			
        				}
        				break;
        				
        			case "retrieveNacfOfanc":
        				if(this.ds_noticeDetail.rowcount > 0)
        				{ 
        					var ofancTinm = this.ds_noticeDetail.getColumn(this.ds_noticeDetail.rowposition, "OFANC_TINM");
        					var fsrgDtm = this.ds_noticeDetail.getColumn(this.ds_noticeDetail.rowposition, "FSRG_DTM").substring(0,10);
        					
        					this.cmt_div_nh_detail.st_nh_title.set_text(ofancTinm + " " + "<fs v='14'>" + fsrgDtm + "</fs>");
        					trace(this.ds_noticeDetail.saveXML());
        				}
        				break;
        		}
         	}
        }

        this.div_top_btn_bbs_onclick = function(obj,e)
        {
        	//this.ds_condition.setColumn(0,"SEARCH","");
        	
        	this.div_top.btn_bbs.set_cssclass("btn_WF_NoticeS");
        	this.div_top.btn_notice.set_cssclass("btn_WF_Notice");
        	
        	var nLeft = 0;
        	this.div_bbs.move(nLeft);
        	this.div_bbs.bringToFront();
        	this.div_bbs.set_visible(true);
        	
        	this.div_notice.bringToPrev();
        	this.div_notice.set_visible(false);
        	
        	this.fn_paging(1);
        }

        this.div_top_btn_notice_onclick = function(obj,e)
        {
        	//this.ds_condition.setColumn(0,"SEARCH","");
        	
        	this.div_top.btn_bbs.set_cssclass("btn_WF_Notice");
        	this.div_top.btn_notice.set_cssclass("btn_WF_NoticeS");
        	
        	var nLeft = 0;
        	this.div_notice.move(nLeft);
        	this.div_notice.bringToFront();
        	this.div_notice.set_visible(true);
        	
        	this.div_bbs.bringToPrev();
        	this.div_bbs.set_visible(false);
        	
        	this.fn_paging(1);
        }

        /************************************************************************************************
         * 페이징처리
        ************************************************************************************************/
        this.fn_paging = function(vPageNum)
        { 	  	 
        	this.ds_pageVO.clearData();  
        	this.ds_bbs.clearData();     //Grid에 Binding된 Dataset명
        	
        	this.ds_pageVO.addRow(); 
        	
        	var vPageSize   = 10; 	//Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        	var vTotalCount = 0; 	//전체건수. 화면조회후 리턴받아 사용
        	
         	this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
         	this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);	 
        	 
        	var argumentObj = "";
        		
        	lsNowPage = vPageNum;//현재페이지 설정 
        	
        	if(this.div_bbs.visible == true){
        		this.fn_retrieveBlbdList();
        	}else{
        		this.fn_retrieveNacfOfancList();
        	}
        }

        this.div_notice_btn_searchEscm_onclick = function(obj,e)
        {
        	this.fn_paging(1);
        }

        this.div_bbs_btn_searchNh_onclick = function(obj,e)
        {
        	this.fn_paging(1);
        }

        this.div_bbs_grd_bbs_oncellclick = function(obj,e)
        {

        	this.cmt_div_nh_detail.set_visible(false);
        	this.cmt_div_nh_detail.bringToPrev();
        	var nLeft = 0;
        	var nTop = 0;
        	
        	this.cmt_div_escm_detail.move(nLeft, nTop);
        	this.cmt_div_escm_detail.bringToFront();
        	this.cmt_div_escm_detail.set_visible(true);

        	this.fn_retrieveBlbd(e.row);
        	
        	this.gfn_callDetailMenu("cmt_div_escm_detail", "", "");

        }

        this.div_notice_grd_notice_oncellclick = function(obj,e)
        {
        	this.cmt_div_escm_detail.set_visible(false);
        	this.cmt_div_escm_detail.bringToPrev();
        	var nLeft = 0;
        	var nTop = 0;
        	
        	this.cmt_div_nh_detail.move(nLeft, nTop);
        	this.cmt_div_nh_detail.bringToFront();
        	this.cmt_div_nh_detail.set_visible(true);

        	this.fn_retrieveNacfOfanc(e.row);
        	
        	this.gfn_callDetailMenu("cmt_div_nh_detail", "", "");
        }

        /* eSCM 공지사항 상세 */
        this.fn_retrieveBlbd = function()
        {
        	blbdId = this.ds_bbs.getColumn(this.ds_bbs.rowposition, "BLBD_ID");
        	bbrdId = this.ds_bbs.getColumn(this.ds_bbs.rowposition, "BBRD_ID");
        	
        	var sSvcID        = "retrieveBlbd";
        	var sURL          = "svc::rest/pt/blbd/retrieveBlbd";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_bbsDetail=ds_bbs";	
        	var sArgument     = "BLBD_ID="+ blbdId +
        	                    " BBRD_ID=" + bbrdId;
        	                    
        	                    trace(sArgument);
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* 농협 공지사항 상세 */
        this.fn_retrieveNacfOfanc = function()
        {
        	noticeSeq = this.ds_notice.getColumn(this.ds_notice.rowposition, "BBRD_SQNO");
        	
        	var sSvcID        = "retrieveNacfOfanc";
        	var sURL          = "svc::rest/pt/blbd/retrieveNacfOfanc";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_noticeDetail=ds_notice";
        	var sArgument     = "noticeSeq="+ noticeSeq;
        						
        						trace(noticeSeq);
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.btn_page_onclick = function(obj,e)
        {
        	var iNo = new Number(obj.text);
        	var iPageNo = iNo % 5;

        	objDivNm = obj.parent.name;
        	
        	if (iPageNo == 0)
        	{
        		iPageNo = 5;
        	}
        	//호출되는 함수명 추가
        	if (!this.gfn_isNull(lsFuncNm))
        	{
        		//eval(lsFuncNm + "(" +  iNo + ")");
        		this.lookupFunc(lsFuncNm + "(" +  iNo + ")").call();
        	} else	{
        		this.lookupFunc("fn_paging").call(iNo,objDivNm);
        	}
        	
        	this.fn_btnColorSet(iPageNo-1);
           
        }

        //-------------------------------------------------------------------------------------------------
        // Page번호 Setting
        //-------------------------------------------------------------------------------------------------
        this.fn_SetPageNo = function(iVStartPageNo){

        	var sPage   = iVStartPageNo*iMaxPageNum;
        	var iPageNo = 0;	//페이지번호

        	// 이전버튼 처리
        	if(iVStartPageNo < 1){
        		this.div_page.btn_first.set_visible(false);
        		this.div_page.btn_previous.set_visible(false);
        	} else {
        		this.div_page.btn_first.set_visible(true);
        		this.div_page.btn_previous.set_visible(true);
        	}

        	// 마지막 버튼 처리
        	if(iTotCnt <= ((sPage + 5 )*iUnitSelRowNo)){
        		this.div_page.btn_next.set_visible(false);
        		this.div_page.btn_end.set_visible(false);		
        	}else{
        		this.div_page.btn_next.set_visible(true);
        		this.div_page.btn_end.set_visible(true);	
        	}

        	var nCnt = "";
        	// 인덱스 번호 처리
        	for(var i=0; i<iMaxPageNum; i++){
        		iPageNo = sPage+i+1;
        		this.div_page.all["sta_page"+i].set_visible(true);
        		trace(this.div_page.all["sta_page"+i].visible);
        		trace("i=== "+i);
        		this.div_page.all["sta_page"+i].set_text(iPageNo);
        		this.div_page.all["sta_page"+i].set_tooltiptext(iPageNo);
        		
        		if (iTotCnt > ((iPageNo - 1 )*iUnitSelRowNo))
        		{
        			this.div_page.all["sta_page"+i].set_visible(true);
        			nCnt = i;			
        		}else
        		{
        			this.div_page.all["sta_page"+i].set_visible(false);
        		}
        	}
        	
        	this.fn_setButtonOrder(nCnt+1);
        }

        this.btn_next_onclick = function(obj,e)
        {
        	iStartPageNo=iStartPageNo+1;
        	
        	this.fn_SetPageNo(iStartPageNo);
        	this.fn_btnColorSet(0);//버튼색상설정	
        	objDivNm   = obj.parent.name;
        	var iValue = (iStartPageNo*iMaxPageNum) + 1;
        	
        	//호출되는 함수명 추가
        	if (!this.gfn_isNull(lsFuncNm))
        	{
        		this.all[lsFuncNm + "(" +  iValue + ")"];
        	} else
        	{
        		this.lookupFunc("fn_paging").call(iValue, objDivNm);
        	}
        }

        this.btn_previous_onclick = function(obj,e)
        {
        	iStartPageNo=iStartPageNo-1;
        	this.fn_SetPageNo(iStartPageNo);	
        	this.fn_btnColorSet(9);//버튼색상설정
        	objDivNm = obj.parent.name;
        	var iValue = ((iStartPageNo + 1)*iMaxPageNum);
        	
        	//호출되는 함수명 추가
        	if (!this.gfn_isNull(lsFuncNm))
        	{
        		this.all[lsFuncNm + "(" +  iValue + ")"];
        	} else
        	{
        		this.lookupFunc("fn_paging").call(iValue, objDivNm);
        	}	
        }

        this.btn_first_onclick = function(obj,e)
        {
        	iStartPageNo=0;
        	this.fn_SetPageNo(iStartPageNo);	
        	this.fn_btnColorSet(0);//버튼색상설정
        	objDivNm = obj.parent.name;
        	//호출되는 함수명 추가
        	if (!this.gfn_isNull(lsFuncNm))
        	{
        		this.all[lsFuncNm + "(" +  1 + ")"];
        	} else
        	{
        		this.lookupFunc("fn_paging").call(1, objDivNm);
        	}		

        }

        this.btn_end_onclick = function(obj,e)
        {
        	iStartPageNo = parseInt(iTotCnt / (iUnitSelRowNo * 5));
        	
            var iNam = iTotCnt % iUnitSelRowNo;//나머지

        	var iValue = parseInt((iTotCnt/iUnitSelRowNo)) % 5;

        	var jValue = parseInt((iTotCnt / iUnitSelRowNo)) + 1;	
        	var jTValue = parseInt(jValue % 5);//페이지 끝번호
        	
        	
        	
        	objDivNm = obj.parent.name;

        	if (iNam == 0)
        	{
        		iValue = iValue - 1;
        		jValue = jValue - 1;
        		//iStartPageNo = iStartPageNo -1;
        	}
        	
        	if (iValue == -1)
        	{
        		iValue = 9;
        	}

        	if (iNam == 0)
        	{
        		jTValue = parseInt(jValue % 5);//페이지 끝번호
        		
        		if (jTValue == 0)
        		{
        			iStartPageNo = iStartPageNo-1;
        			this.fn_SetPageNo(iStartPageNo);			
        		} else
        		{
        			this.fn_SetPageNo(iStartPageNo);			
        		}
        	} else
        	{
        		this.fn_SetPageNo(iStartPageNo);	
        	}
        	
        	this.fn_btnColorSet(iValue);//버튼색상설정

        
        	//호출되는 함수명 추가
        	if (!this.gfn_isNull(lsFuncNm))
        	{
        		this.all[lsFuncNm + "(" +  jValue + ")"];
        	} else
        	{
        		this.lookupFunc("fn_paging").call(jValue,objDivNm);
        	}	
        }

        //업무화면에서 호출
        this.fn_pageSet = function(sTotalRowCnt,sPageSize,sdivPage,sNowPage,sCalFuncNm,sTotCntDst,sDivPageNum)
        {
        	iTotCnt = sTotalRowCnt;
        	
        	//호출되는 함수명 추가
        	if (!this.gfn_isNull(sCalFuncNm))
        	{
        		lsFuncNm = sCalFuncNm;
        	}
        		
        	if (iTotCnt > 0)
        	{
        		//this.all[sdivPage].visible = true; //2015
        		this.div_page.set_visible(true);
        		 
        	} else
        	{

        		if (this.gfn_isNull(sTotalRowCnt))
        		{	
        			
        		}	
        		//this.all[sdivPage].visible = false; //2015
        		this.div_page.set_visible(false);
        	}
        	
        	iUnitSelRowNo = sPageSize;
        	
        	//현재페이지가 첫 페이지 일경우
        	if (sNowPage == 1)
        	{
        		iStartPageNo=0;	
        	}
        	
        	this.fn_SetPageNo(iStartPageNo);	
        		
        	//현재페이지가 첫 페이지 일경우
        	if (sNowPage == 1)
        	{
        		this.fn_btnColorSet(0);
        	}		
        }

        //버튼색상설정
        this.fn_btnColorSet = function(sNo)
        {	
            
        	for (var iLoop=0;iLoop < 5; iLoop++)
        	{
        		if (iLoop == sNo)
        		{
        			this.div_page.all["sta_page"+iLoop].set_cssclass("sta_WF_PageS");
        		} else
        		{
        			this.div_page.all["sta_page"+iLoop].set_cssclass("sta_WF_Page");		
        		}
        	}
        	
        	this.fn_setButtonPos();//버튼위치조정	
        }

        /***********************************************************************************************
         * 함수명     : this.fn_setButtonPos()
         * 설명       : 버튼위치 세팅
         * parameter   : void
         * return      : void
        ***********************************************************************************************/ 
        this.fn_setButtonPos = function() {
        	
        	var iPos = 5;
        	
        	for (var iLoop=0;iLoop < 5; iLoop++)
        	{
        		if (this.div_page.all["sta_page"+iLoop].visible == false)
        		{
        			iPos = iLoop;
        			break;
        		} 
        	}
        	
        	this.fn_setButtonOrder(iPos);
        }

        /***********************************************************************************************
         * 함수명     : fn_setButtonOrder()
         * 설명       : 버튼위치 정렬
         * parameter   : iPos - 안보이는 버튼 시작위치
         * return      : void
        ***********************************************************************************************/ 
        this.fn_setButtonOrder = function(iPos) 
        {
        	if (iPos == 5)
        	{
        		this.div_page.btn_first.set_left(0);
        		this.div_page.btn_previous.set_left(18);
        		this.div_page.btn_next.set_left(306);
        		this.div_page.btn_end.set_left(324);
        		
        		this.div_page.sta_page0.set_left(38);
        		this.div_page.sta_page1.set_left(92);
        		this.div_page.sta_page2.set_left(146);
        		this.div_page.sta_page3.set_left(200);
        		this.div_page.sta_page4.set_left(254);		
        		
        	} else if (iPos == 1)
        	{
        		this.div_page.btn_first.set_left(102);//18
        		this.div_page.btn_previous.set_left(120);//26
        		
        		this.div_page.sta_page0.set_left(146);
        		
        	} else if (iPos == 2)
        	{
        		this.div_page.btn_first.set_left(75);
        		this.div_page.btn_previous.set_left(93);
        		
        		this.div_page.sta_page0.set_left(119);
        		this.div_page.sta_page1.set_left(173);
        		
        	} else if (iPos == 3)
        	{
        		this.div_page.btn_first.set_left(48);
        		this.div_page.btn_previous.set_left(66);
        		
        		this.div_page.sta_page0.set_left(92);
        		this.div_page.sta_page1.set_left(146);
        		this.div_page.sta_page2.set_left(200);
        					
        	} else if (iPos == 4)
        	{
        		this.div_page.btn_first.set_left(21);
        		this.div_page.btn_previous.set_left(39);
        		
        		this.div_page.sta_page0.set_left(65);
        		this.div_page.sta_page1.set_left(119);
        		this.div_page.sta_page2.set_left(173);
        		this.div_page.sta_page3.set_left(227);
        	}		
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_file.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.div_notice.grd_notice.addEventHandler("oncellclick", this.div_notice_grd_notice_oncellclick, this);
            this.div_notice.btn_searchEscm.addEventHandler("onclick", this.div_notice_btn_searchEscm_onclick, this);
            this.div_top.btn_bbs.addEventHandler("onclick", this.div_top_btn_bbs_onclick, this);
            this.div_top.btn_notice.addEventHandler("onclick", this.div_top_btn_notice_onclick, this);
            this.div_bbs.btn_searchNh.addEventHandler("onclick", this.div_bbs_btn_searchNh_onclick, this);
            this.div_bbs.grd_bbs.addEventHandler("oncellclick", this.div_bbs_grd_bbs_oncellclick, this);
            this.div_page.btn_next.addEventHandler("onclick", this.btn_next_onclick, this);
            this.div_page.btn_previous.addEventHandler("onclick", this.btn_previous_onclick, this);
            this.div_page.btn_end.addEventHandler("onclick", this.btn_end_onclick, this);
            this.div_page.btn_first.addEventHandler("onclick", this.btn_first_onclick, this);
            this.div_page.sta_page4.addEventHandler("onclick", this.btn_page_onclick, this);
            this.div_page.sta_page3.addEventHandler("onclick", this.btn_page_onclick, this);
            this.div_page.sta_page2.addEventHandler("onclick", this.btn_page_onclick, this);
            this.div_page.sta_page1.addEventHandler("onclick", this.btn_page_onclick, this);
            this.div_page.sta_page0.addEventHandler("onclick", this.btn_page_onclick, this);

        };

        this.loadIncludeScript("M_notice.xfdl");

       
    };
}
)();
