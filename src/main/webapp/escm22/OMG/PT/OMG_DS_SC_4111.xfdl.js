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
                this.set_name("OMG_DS_SC_4111");
                this.set_titletext("게시판상세");
                this.set_scrollbars("autoboth");
                this._setFormPosition(0,0,803,490);
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
            obj._setContents("<ColumnInfo><Column id=\"BLBD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_TI\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"BLTN_ST_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BLTN_ED_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CKNL_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_INQ_CN\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_RGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\"/><Column id=\"MOB_PUSH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PICTURE\" type=\"BLOB\" size=\"256\"/><Column id=\"BBRD_PUP_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_PUP_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_PUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_PUP_APDFLNM\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_PUP_SYS_FLNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BLBD_ID\"/><Col id=\"BBRD_ID\"/><Col id=\"BBRD_TI\"/><Col id=\"BBRD_CNTN\"/><Col id=\"BLTN_ST_DTM\"/><Col id=\"BLTN_ED_DTM\"/><Col id=\"CKNL_DSC\"/><Col id=\"BBRD_DEL_YN\"/><Col id=\"BBRD_INQ_CN\"/><Col id=\"BBRD_RGM_NM\"/><Col id=\"FSRG_DTM\"/><Col id=\"FS_RGM\"/><Col id=\"LSCHG_DTM\"/><Col id=\"LS_CHGM\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_bbsList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHECK\" type=\"STRING\" size=\"256\"/><Column id=\"BLBD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_TI\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"BLTN_ST_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BLTN_ED_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CKNL_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_INQ_CN\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_RGMNM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CHECK\">1</Col><Col id=\"BLBD_ID\">가나다라마바</Col><Col id=\"BBRD_ID\">20150202</Col><Col id=\"BBRD_TI\">200243</Col><Col id=\"BBRD_CNTN\">가나다라마바아자</Col><Col id=\"BLTN_ST_DTM\">ABC123456789</Col><Col id=\"BLTN_ED_DTM\">가나다라마바아자</Col><Col id=\"CKNL_DSC\">가나다라마바아자</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_radio", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">a</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">b</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_radioBind", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pageVO", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TOTAL_ROW_COUNT\">13</Col><Col id=\"PAGE_SIZE\">10</Col><Col id=\"CURRENT_PAGE\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_file", this);
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

            obj = new Dataset("ds_prc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"UPLOAD_DT\" type=\"STRING\" size=\"32\"/><Column id=\"PAY_TRPL_C\" type=\"STRING\" size=\"32\"/><Column id=\"BBRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BLBD_UG_AM\" type=\"STRING\" size=\"32\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"32\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_result", this);
            obj._setContents("<ColumnInfo><Column id=\"COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_namo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ORG_FILENM\" type=\"STRING\" size=\"250\"/></ColumnInfo>");
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
            obj = new Div("div_pop", "absolute", "17", "72", null, "113", "17", null, this);
            obj.set_taborder("182");
            obj.set_text("Div00");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "90", "0", null, "29", "0", null, this.div_pop);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_pop.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "0", "0", "110", "29", null, null, this.div_pop);
            obj.set_taborder("21");
            obj.set_text("계약기간");
            obj.set_cssclass("sta_WF_Label");
            this.div_pop.addChild(obj.name, obj);
            obj = new Calendar("cal_to", "absolute", "225", "4", "100", "21", null, null, this.div_pop);
            this.div_pop.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj = new Calendar("cal_from", "absolute", "114", "4", "100", "21", null, null, this.div_pop);
            this.div_pop.addChild(obj.name, obj);
            obj.set_taborder("23");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj = new Static("Static131", "absolute", "215", "4", "10", "21", null, null, this.div_pop);
            obj.set_taborder("24");
            obj.set_text("~");
            this.div_pop.addChild(obj.name, obj);
            obj = new Static("Static124", "absolute", "109", "28", null, "29", "389", null, this.div_pop);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_pop.addChild(obj.name, obj);
            obj = new Static("Static123", "absolute", "0", "28", "110", "29", null, null, this.div_pop);
            obj.set_taborder("32");
            obj.set_text("거래처 GLN");
            obj.set_cssclass("sta_WF_Label");
            this.div_pop.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "379", "0", "120", "29", null, null, this.div_pop);
            obj.set_taborder("33");
            obj.set_text("계약구분");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("true");
            this.div_pop.addChild(obj.name, obj);
            obj = new Combo("cbo_bsndsc", "absolute", "506", "4", "192", "21", null, null, this.div_pop);
            this.div_pop.addChild(obj.name, obj);
            var cbo_bsndsc_innerdataset = new Dataset("cbo_bsndsc_innerdataset", this.div_pop.cbo_bsndsc);
            cbo_bsndsc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">상시</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">단기행사</Col></Row></Rows>");
            obj.set_innerdataset(cbo_bsndsc_innerdataset);
            obj.set_taborder("34");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displayrowcount("2");
            obj.set_visible("true");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj = new Static("Static17", "absolute", "379", "28", "120", "29", null, null, this.div_pop);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("거래처명");
            this.div_pop.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "84", "110", "29", null, null, this.div_pop);
            obj.set_taborder("37");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_Label");
            this.div_pop.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "109", "84", "271", "29", null, null, this.div_pop);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_pop.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "379", "84", "120", "29", null, null, this.div_pop);
            obj.set_taborder("39");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WF_Label");
            this.div_pop.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "498", "84", null, "29", "0", null, this.div_pop);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_pop.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "498", "28", null, "29", "0", null, this.div_pop);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_pop.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0", "56", "110", "29", null, null, this.div_pop);
            obj.set_taborder("42");
            obj.set_text("작성자 GLN");
            obj.set_cssclass("sta_WF_Label");
            this.div_pop.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "109", "56", "271", "29", null, null, this.div_pop);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_pop.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "379", "56", "120", "29", null, null, this.div_pop);
            obj.set_taborder("44");
            obj.set_text("작성자소속");
            obj.set_cssclass("sta_WF_Label");
            this.div_pop.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "498", "56", null, "29", "0", null, this.div_pop);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_pop.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00", "absolute", "713", "72", null, "29", "17", null, this);
            obj.set_taborder("166");
            obj.set_readonly("true");
            obj.set_enable("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "126", "44", null, "29", "17", null, this);
            obj.set_taborder("173");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reply", "absolute", null, "15", "41", "21", "17", null, this);
            obj.set_taborder("151");
            obj.set_text("답글");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_title", "absolute", "17", null, "301", "21", null, "52", this);
            obj.set_taborder("153");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down", "absolute", null, null, "72", "21", "17", "48", this);
            obj.set_taborder("154");
            obj.set_text("다운로드");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_file", "absolute", "17", null, null, "29", "17", "15", this);
            obj.set_taborder("157");
            obj.set_binddataset("ds_file");
            obj.set_scrollbars("autoboth");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"631\"/><Column size=\"81\"/></Columns><Rows><Row size=\"29\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:ORGFNAME\" expandshow=\"hide\"/><Cell col=\"2\" style=\"align:right;\" text=\"expr:comp.parent.fn_getFileSize(FILESIZE)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_modify", "absolute", null, "15", "41", "21", "60", null, this);
            obj.set_taborder("132");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete", "absolute", null, "15", "41", "21", "103", null, this);
            obj.set_taborder("133");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "376", "366", null, "10", "328", null, this);
            obj.set_taborder("137");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "126", "100", "271", "29", null, null, this);
            obj.set_taborder("139");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "17", "44", "110", "29", null, null, this);
            obj.set_taborder("141");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "17", "100", "110", "29", null, null, this);
            obj.set_taborder("142");
            obj.set_text("최초등록일시");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "17", "72", "110", "29", null, null, this);
            obj.set_taborder("144");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "126", "72", "518", "29", null, null, this);
            obj.set_taborder("146");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("st_boarder", "absolute", "17", "128", null, null, "17", "15", this);
            obj.set_taborder("147");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_content", "absolute", "32", "146", null, null, "32", "30", this);
            obj.set_taborder("148");
            obj.set_wordwrap("char");
            obj.set_readonly("true");
            obj.set_cssclass("txt_WF_file");
            obj.getSetter("mask").set("###,###");
            obj.style.set_linespace("15");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "396", "100", "120", "29", null, null, this);
            obj.set_taborder("168");
            obj.set_text("최종변경일시");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "515", "100", null, "29", "17", null, this);
            obj.set_taborder("169");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_price2", "absolute", "66", "16", "199", "21", null, null, this);
            obj.set_taborder("170");
            obj.set_visible("false");
            obj.set_readonly("false");
            obj.set_inputtype("number");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_price2", "absolute", "17", "16", "49", "21", null, null, this);
            obj.set_taborder("171");
            obj.set_text("금액");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "127", "46", null, "26", "22", null, this);
            obj.set_taborder("172");
            obj.set_readonly("true");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print", "absolute", null, "15", "41", "21", "146", null, this);
            obj.set_taborder("174");
            obj.set_text("출력");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_closed_yn", "absolute", "643", "44", "71", "29", null, null, this);
            obj.set_taborder("175");
            obj.set_text("공개여부");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_closed_yn_str", "absolute", "713", "44", null, "29", "17", null, this);
            obj.set_taborder("176");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_visible("false");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("wb_namo", "absolute", "18", "129", null, null, "17", "15", this);
            obj.set_taborder("177");
            obj.set_tabstop("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("st_mob_push_yn", "absolute", "515", "72", null, "29", "159", null, this);
            obj.set_taborder("178");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "396", "72", "120", "29", null, null, this);
            obj.set_taborder("179");
            obj.set_text("모바일알림");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Div("div_img", "absolute", "24", "136", null, null, "24", "30", this);
            obj.set_taborder("180");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new ImageViewer("imgView", "absolute", "0", "10", null, "600", "0", null, this.div_img);
            obj.set_taborder("0");
            obj.style.set_background("transparent");
            obj.style.set_border("0 solid #bfbfbfff");
            this.div_img.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "643", "72", "71", "29", null, null, this);
            obj.set_taborder("181");
            obj.set_text("조회수");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Div("div_write", "absolute", "832", "0", "803", "490", null, null, this);
            obj.set_taborder("163");
            obj.set_visible("false");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 113, this.div_pop,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("182");
            		p.set_text("Div00");
            		p.style.set_background("transparent");
            		p.set_visible("false");

            	}
            );
            this.div_pop.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_img,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("180");
            		p.style.set_background("transparent");
            		p.set_visible("false");

            	}
            );
            this.div_img.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("게시판상세");
            		p.set_scrollbars("autoboth");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item9","Static12","text","ds_bbs","FSRG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Static19","text","ds_bbs","BBRD_RGM_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","txt_content","text","ds_bbs","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","txt_content","value","ds_bbs","BBRD_CNTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","OMG_DS_SC_4111","","ds_bbs","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","MaskEdit00","value","ds_bbs","BBRD_INQ_CN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Static04","text","ds_bbs","LSCHG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_price2","value","ds_prc","BLBD_UG_AM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Edit00","value","ds_bbs","BBRD_TI");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","st_mob_push_yn","value","ds_bbs","MOB_PUSH_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","div_img.imgView","image","ds_bbs","PICTURE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","div_pop.cal_from","value","ds_bbs","BBRD_PUP_ST_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","div_pop.cal_to","value","ds_bbs","BBRD_PUP_ED_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","div_pop.Static12","text","ds_bbs","BBRD_RGM_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","div_pop.Static02","text","ds_bbs","FSRG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","div_pop.Static19","text","ds_bbs","CLNTNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","div_pop.Static124","text","ds_bbs","BBRD_PUP_APDFLNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","div_pop.cbo_bsndsc","value","ds_bbs","BBRD_PUP_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","div_pop.Static06","text","ds_bbs","BBRD_PUP_SYS_FLNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","div_pop.Static08","text","ds_bbs","FS_CLNTNM");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_4111.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_4111.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        this.blbdId = "";
        this.bbrdId = "";
        this.noticeYn = 'N';
        this.fileYn = 'N';
        // this.bbsType = E_SCM;
        // this.noticeYn = 'N';
        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        
        this.fn_afterFormOnload = function()
        {
        	//페이지 로딩후 실행부분
           try {
        		this.blbdId = this.parent.blbdId;
        		this.bbrdId = this.parent.bbrdId;
        	} catch(e) {
        	}
        	
        	switch(this.blbdId) {
        		case "201506090001":
        			this.set_titletext("eSCM공지사항 상세");
        			this.btn_print.set_visible(true);
        			break;
        		case "201506090002":
        			this.set_titletext("자료실 상세");
        			break;
        		case "201506090003":
        			this.set_titletext("자료요청 상세");
        			break;
        		case "201506090004":
        			this.set_titletext("고객의소리 상세");
        			this.Edit00.set_width(516); // 제목 줄이기
        			this.st_closed_yn.set_visible(true); // 비공개여부 표시
        			this.st_closed_yn_str.set_visible(true);
        			break;
        		case "201506090005":
        			this.set_titletext("계약정보자료실");
        			break;
        			
        		case "201506090006":
        			this.set_titletext("대납신청 상세");
        			break;
        		case "201506090007":
        			this.set_titletext("이용료문의 상세");
        			break;
        		case "201506090009":
        			this.set_titletext("1:1 상담게시판 상세");
        			break;
        		case "202107010001":
        			this.set_titletext("판촉사원파견약정서 상세");
        			this.Static17.set_visible(false);
        			this.Static19.set_visible(false);
        			this.Static01.set_visible(false);
        			this.st_mob_push_yn.set_visible(false);
        			this.Static18.set_visible(false);
        			this.MaskEdit00.set_visible(false);
        			this.Static15.set_visible(false);
        			this.Static12.set_visible(false);
        			this.Static03.set_visible(false);
        			this.Static04.set_visible(false);
        			this.div_pop.set_visible(true);
        			break;	
        		case "202108250001":
        			this.set_titletext("동반성장&공정거래 상세");
        			break;	
        	}
        	
        	if (!this.gfn_isNull(application.gv_userId)) {	
        		if (application.gv_userTPC == "admin" && this.blbdId == '201506090001') {
        			this.div_write.set_url("OMG.PT::OMG_DS_SC_4114.xfdl");
        		} else {
        			this.div_write.set_url("OMG.PT::OMG_DS_SC_4112.xfdl");
        		}
        	}
        	this.fn_retrieveBlbd();
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_getDocId = function()
        {
        	var sSvcID        = "retrieveBlbdList";
        	var sURL          = "svc::rest/pt/blbd/retrieveBlbdList";
        	var sInDatasets   = "ds_pageVO=ds_pageVO";
        	var sOutDatasets  = "ds_bbsList=ds_bbs ds_pageVO=ds_pageVO";
        	var sArgument     = "title="+"" + " boardId="+ this.blbdId + " noticeYn=" + this.noticeYn;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_retrieveBlbd = function()
        {
        	var sSvcID        = "retrieveBlbd";
        	var sURL          = "svc::rest/pt/blbd/retrieveBlbd";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_bbs=ds_bbs ds_file=ds_file ds_prc=ds_prc ds_namo=ds_namo";	
        	var sArgument     = "BLBD_ID="+ this.blbdId +
        	                    " BBRD_ID=" + this.bbrdId;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_deleteBlbd = function()
        {
        	var sSvcID        = "deleteBlbd";
        	var sURL          = "svc::rest/pt/blbd/deleteBlbd";
        	var sInDatasets   = "ds_bbs=ds_bbs";
        	var sOutDatasets  = "";
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_canDelete = function()
        {
        	var sSvcID        = "canDelete";
        	var sURL          = "svc::rest/pt/blbd/canDelete";
        	var sInDatasets   = "ds_bbs=ds_bbs";
        	var sOutDatasets  = "ds_result=ds_result";
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
         	if (ErrorCode < 0) {
        		if (svcID == "deleteBlbd") {
        			alert("댓글이 있는 글은 삭제할 수 없습니다.");
        			this.close();
        		} else if (svcID == "retrieveBlbd") {
        			alert(ErrorMsg);
        			this.close();
        		}
         	} else {
        		if (svcID == "retrieveBlbd") {
        			if (this.st_closed_yn_str.visible) {
        				var str = (this.ds_bbs.getColumn(0, "BBRD_CLOSED_YN") == "Y") ? "비공개" : "공개";
        				this.st_closed_yn_str.set_text(str); // 비공개여부
        			}
        			
        			var strMob = (this.ds_bbs.getColumn(0, "MOB_PUSH_YN") == "1") ? "여" : "부";
        			this.st_mob_push_yn.set_text(strMob); // 모바일푸시여부
        			
        			if (this.ds_file.rowcount > 0) {
        				this.fileYn = 'Y';
        				this.ds_file.addColumn("ISCHECKED", "string");
        				this.ds_file.addColumn("SEAL", "string");
        				for (var i = 0 ; i < this.ds_file.rowcount; i++) {
        					this.ds_file.setColumn(i, "ISCHECKED", 0);
        					this.ds_file.setColumn(i, "SEAL", "refBbsN"); // 모든 게시판 통합
        				}
        			}
        			
        			if (this.blbdId != "202107010001") {
        				if (this.ds_bbs.getColumn(0, "BBRD_PUP_SYS_FLNM") != "N") {
        					this.txt_content.set_visible(false);
        					this.div_img.set_visible(true);
        					this.parent.set_top(this.parent.top-100);
        					this.parent.set_height(690);
        					this.div_write.set_height(658);
        					this.setTimer(0,500);
        				} else {
        					if (this.ds_namo.rowcount > 0) {
        						this.txt_content.set_visible(false);
        						this.wb_namo.set_visible(true);
        						var vHtml = this.wb_namo.getProperty("document").getProperty("body");
        						this.xmlData = this.ds_bbs.getColumn(0, "BBRD_CNTN");	
        				   
        						vHtml.setProperty("innerHTML", this.xmlData);
        					}
        				}
        			}
        			if (this.blbdId == "202108250001") {
        				this.Static01.set_visible(false);
        				this.st_mob_push_yn.set_visible(false);
        				this.Static19.set_text("운영자");
        			}
        			this.setButtonVisible();
        			this.fn_reDraw();
        		} else if (svcID == "deleteBlbd") {
        			alert("삭제되었습니다.");
        			this.close();
        		} else if (svcID == "canDelete") {
        			if (this.ds_result.rowcount > 0) {
        				if (this.ds_result.getColumn(0, "COUNT") == 0) {
        					if (confirm("삭제하시겠습니까?")) {
        						this.fn_deleteBlbd();
        					}
        				} else {
        					alert("댓글 삭제 후 삭제해 주십시오.");
        				}
        			}
        		}
         	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.common_onclick = function(obj,e)
        {
        	switch(obj.name) {
        		case "btn_modify":
        			this.wb_namo.set_visible(false);
        			this.div_img.set_visible(false);
        			this.div_write.move(0, 0);			
        			this.div_write.blbdId = this.blbdId;
        			this.div_write.bbrdId = this.bbrdId;
        			this.div_write.writeType = 1;//게시판 유형..등록0수정1답글2 			
        			this.div_write.fn_setContentType();//화면을 그린다.   
        			this.div_write.set_visible(true);
        			this.div_write.ds_prc = this.ds_prc;
        			
        			this.st_mob_push_yn.set_visible(false);
        			this.Static01.set_visible(false);
        			
        			break;
        			
        		case "btn_reply": 
        			this.wb_namo.set_visible(false);
        			this.div_img.set_visible(false);
        			this.div_write.move(0, 0);
        			this.div_write.blbdId = this.blbdId;
        			this.div_write.bbrdId = this.bbrdId;
        			this.div_write.writeType = 2;//게시판 유형..등록0수정1답글2
        			this.div_write.fn_setContentType();//화면을 그린다.   
        			this.div_write.set_visible(true);
        			break;
        			
        		case "btn_down":
        			if (this.ds_file.findRow("ISCHECKED", "1") < 0) {
        				alert("선택된 파일이 없습니다.");
        				return;
        			}
        			this.gfn_callDownload(this.ds_file, "ISCHECKED", this.blbdId, this.bbrdId);
        			break;
        			
        		case "btn_delete":
        			this.fn_canDelete();
        			break;
        		
        		case "btn_print":
        			var nRow;
        			var ozfile = "escm_notice";
        			
        			var param = {
        				blbdId:this.ds_bbs.getColumn(0, "BLBD_ID"),
        				bbrdId:this.ds_bbs.getColumn(0, "BBRD_ID")
        			}
        			var ozParam = {
        				sId: ozfile,
        				sUrl: '/rest/oz/pt/blbd/retrieveBlbdForOz',
        				paramType: 'param',
        				sParam: param
        			};
        			this.ozViewer(ozParam, "ozViewerPotal");
        			break;
        	}
        }

        
        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_reDraw = function()
        {
        	var grdHeight;
        	if (this.ds_file.rowcount < 3) {
        		grdHeight = nexacro.toNumber(this.grd_file.getRealRowSize(0)) * nexacro.toNumber(this.ds_file.rowcount);
        	} else {
        		grdHeight = nexacro.toNumber(this.grd_file.getRealRowSize(0)) * 2.5;
        	}
        	
        	if(this.blbdId == "202107010001"){
        		this.grd_file.set_height(grdHeight);
        		this.txt_content.set_top(202);
        		this.txt_content.set_bottom(61 + grdHeight);
        		this.st_boarder.set_top(184);
        		this.st_boarder.set_bottom(60 + grdHeight);
        		this.btn_down.set_bottom(20 + grdHeight);
        		this.st_title.set_bottom(22 + grdHeight);
        	} else {
        		if (this.fileYn == 'Y') {
        			this.grd_file.set_height(grdHeight);
        			this.txt_content.set_bottom(61 + grdHeight);
        			this.div_img.set_bottom(61 + grdHeight);
        			this.st_boarder.set_bottom(60 + grdHeight);
        			this.btn_down.set_bottom(20 + grdHeight);
        			this.st_title.set_bottom(22 + grdHeight);
        			this.wb_namo.set_bottom(61 + grdHeight);
        		} else {
        			this.st_boarder.set_bottom(15);
        			this.txt_content.set_bottom(31);
        			this.div_img.set_bottom(31);
        			this.wb_namo.set_bottom(16);
        		}
        	}	
        }

        this.setButtonVisible = function()
        {
        	if ((application.gv_userType == '99')  &&  this.gfn_isNull(this.ds_bbs.getColumn(0, "PRET_BBRD_ID")) && this.blbdId != '201506090001') {
        		this.btn_reply.set_visible(true);
        	} else {
        		this.btn_reply.set_visible(false);
        	}
        	
        	if (application.gv_userId == this.ds_bbs.getColumn(0, "FS_RGM") || application.gv_userType == '99') {
        		this.btn_delete.set_visible(true);
        		this.btn_modify.set_visible(true);
        	} else {
        		this.btn_delete.set_visible(false);
        		this.btn_modify.set_visible(false);
        	}
        	
        	//자료요청 게시판 이면서
        	//빌링정보가 있거나 운영자일경우.
        	if (this.blbdId == "201506090003" && (application.gv_userType == '99' || this.ds_prc.rowcount > 0) && !this.gfn_isNull(this.ds_bbs.getColumn(0, "PRET_BBRD_ID"))) {
        		this.edt_price2.set_visible(true);
        		this.st_price2.set_visible(true);
        	}
        }

        this.OMG_DS_SC_4111_ontimer = function(obj,e)
        {
        	if (this.div_img.imgView.imageheight > 0) {
         		this.killTimer(0);
         		var width = (this.div_img.imgView.imagewidth);
        		var height = (this.div_img.imgView.imageheight);
        		
        		this.div_img.imgView.set_width(width);
        		this.div_img.imgView.set_height(height);
        		this.div_img.resetScroll();
         	} 
        }

        // 첨부파일 용량 표시
        this.fn_getFileSize = function(fileByte)
        {
        	// expr:comp.parent.parent.fn_getFileSize(FILESIZE)
        	var fileKB;
        	var strKB;
        	if (fileByte < 500) {
        		strKB = fileByte + " Byte";
        	} else {
        		fileKB = Math.round(fileByte / 1024);
        		strKB = this.gfn_setComma(fileKB) + " KB";
        	}
        	
        	return strKB;
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_file.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.ds_prc.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("ontimer", this.OMG_DS_SC_4111_ontimer, this);
            this.btn_reply.addEventHandler("onclick", this.common_onclick, this);
            this.btn_down.addEventHandler("onclick", this.common_onclick, this);
            this.btn_modify.addEventHandler("onclick", this.common_onclick, this);
            this.btn_delete.addEventHandler("onclick", this.common_onclick, this);
            this.txt_content.addEventHandler("oneditclick", this.txt_content_oneditclick, this);
            this.btn_print.addEventHandler("onclick", this.common_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_4111.xfdl", true);

       
    };
}
)();
