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
                this.set_name("OMG_DS_SC_1642");
                this.set_titletext("게시판등록");
                this.set_visible("true");
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
            obj._setContents("<ColumnInfo><Column id=\"BLBD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_TI\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"BLTN_ST_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BLTN_ED_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CKNL_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_INQ_CN\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_RGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_PUP_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_PUP_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_PUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_PUP_SYS_FLNM\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_PUP_APDFLNM\" type=\"STRING\" size=\"256\"/><Column id=\"PRET_BBRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_CLOSED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRET_CLOSED_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"BLBD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_TI\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"BLTN_ST_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BLTN_ED_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CKNL_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_INQ_CN\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_RGMNM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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

            obj = new Dataset("ds_uploadresult01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DCM_C\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static13", "absolute", "107", "44", null, "29", "17", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_file", "absolute", "15", null, null, "29", "17", "15", this);
            obj.set_taborder("157");
            obj.set_binddataset("ds_file");
            obj.set_scrollbars("autoboth");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"631\"/><Column size=\"81\"/></Columns><Rows><Row size=\"29\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:ORGFNAME\" expandshow=\"hide\"/><Cell col=\"2\" style=\"align:right;\" text=\"expr:comp.parent.parent.fn_getFileSize(FILESIZE)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_title", "absolute", "17", null, "301", "21", null, "28", this);
            obj.set_taborder("161");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delRow", "absolute", null, null, "72", "21", "17", "24", this);
            obj.set_taborder("162");
            obj.set_text("파일삭제");
            this.addChild(obj.name, obj);

            obj = new FileUpload("btn_file", "absolute", null, null, "72", "21", "91", "24", this);
            obj.set_taborder("163");
            obj.set_multiselect("true");
            obj.getSetter("timeout").set("0");
            obj.getSetter("retry").set("0");
            obj.getSetter("async").set("true");
            obj.getSetter("onload").set("FileUpload00_onload");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "15", "41", "21", "15", null, this);
            obj.set_taborder("3");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", null, "15", "41", "21", "58", null, this);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "376", "362", null, "10", "328", null, this);
            obj.set_taborder("137");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "664", "36", null, "8", "36", null, this);
            obj.set_taborder("138");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "17", "44", "110", "29", null, null, this);
            obj.set_taborder("141");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("st_boarder", "absolute", "118", "128", null, null, "17", "14", this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_content", "absolute", "143", "140", null, null, "32", "30", this);
            obj.set_taborder("148");
            obj.set_wordwrap("char");
            obj.set_readonly("false");
            obj.set_cssclass("txt_WF_file");
            obj.style.set_background("#ffffff00");
            obj.set_inputtype("number,english,full,half,dot,comma,sign,symbol,digit,alpha,space");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            this.addChild(obj.name, obj);

            obj = new Static("st_content", "absolute", "17", "128", "110", null, null, "14", this);
            obj.set_taborder("152");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_price", "absolute", "66", "16", "199", "21", null, null, this);
            obj.set_taborder("181");
            obj.set_inputtype("number");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_price", "absolute", "17", "16", "49", "21", null, null, this);
            obj.set_taborder("182");
            obj.set_text("금액");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_title", "absolute", "131", "48", null, "21", "22", null, this);
            obj.set_taborder("151");
            obj.set_maxlength("250");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            this.addChild(obj.name, obj);

            obj = new Static("st_closed_yn", "absolute", "585", "44", "71", "29", null, null, this);
            obj.set_taborder("184");
            obj.set_text("공개여부");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_closed_yn", "absolute", "666", "48", "109", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_closed_yn_innerdataset = new Dataset("rdo_closed_yn_innerdataset", this.rdo_closed_yn);
            rdo_closed_yn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">공개</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">비공개</Col></Row></Rows>");
            obj.set_innerdataset(rdo_closed_yn_innerdataset);
            obj.set_taborder("185");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("N");
            obj.set_direction("vertical");
            obj.set_visible("false");
            obj.set_index("0");

            obj = new Static("st_closed_yn_info", "absolute", "17", "16", "633", "21", null, null, this);
            obj.set_taborder("186");
            obj.set_text("* 공개여부 선택 기능이 추가되었습니다. (운영상에 저해되는 글은 삭제 또는 비공개로 전환될 수 있습니다.)");
            obj.set_cssclass("sta_WF_DescriptionE02");
            obj.style.set_padding("2 0 0 3");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_pop", "absolute", "17", "72", null, "58", "17", null, this);
            obj.set_taborder("183");
            obj.set_text("Div00");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "90", "0", null, "29", "0", null, this.div_pop);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_pop.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "0", "0", "110", "29", null, null, this.div_pop);
            obj.set_taborder("1");
            obj.set_text("팝업게시기간");
            obj.set_cssclass("sta_WF_Label");
            this.div_pop.addChild(obj.name, obj);
            obj = new Calendar("cal_to", "absolute", "225", "4", "100", "21", null, null, this.div_pop);
            this.div_pop.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("cal_from", "absolute", "114", "4", "100", "21", null, null, this.div_pop);
            this.div_pop.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static131", "absolute", "215", "4", "10", "21", null, null, this.div_pop);
            obj.set_taborder("4");
            obj.set_text("~");
            this.div_pop.addChild(obj.name, obj);
            obj = new FileUpload("FileUpload", "absolute", "270", "32", null, "24", "170", null, this.div_pop);
            obj.set_taborder("7");
            obj.getSetter("retry").set("0");
            obj.set_scrollbars("none");
            obj.set_index("0");
            this.div_pop.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "152", "28", "110", "29", null, null, this.div_pop);
            obj.set_taborder("8");
            obj.set_text("팝업이미지");
            obj.set_cssclass("sta_WF_Label");
            this.div_pop.addChild(obj.name, obj);
            obj = new CheckBox("chk_bbrdPupYn", "absolute", "16.08%", "32", "15", "21", null, null, this.div_pop);
            obj.set_taborder("9");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_pop.addChild(obj.name, obj);
            obj = new Button("btn_popup", "absolute", null, "32", "80", "21", "8", null, this.div_pop);
            obj.set_taborder("10");
            obj.set_text("미리보기");
            this.div_pop.addChild(obj.name, obj);
            obj = new Edit("edt_popup", "absolute", "272", "32", "260", "21", null, null, this.div_pop);
            obj.set_taborder("11");
            obj.set_inputtype("number");
            obj.set_visible("true");
            obj.style.set_background("#ffffffff");
            this.div_pop.addChild(obj.name, obj);
            obj = new Button("btn_delRow01", "absolute", null, null, "72", "21", "93", "5", this.div_pop);
            obj.set_taborder("12");
            obj.set_text("파일삭제");
            this.div_pop.addChild(obj.name, obj);
            obj = new Static("Static124", "absolute", "109", "28", null, "29", "0", null, this.div_pop);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_pop.addChild(obj.name, obj);
            obj = new Static("Static123", "absolute", "0", "28", "110", "29", null, null, this.div_pop);
            obj.set_taborder("14");
            obj.set_text("팝업");
            obj.set_cssclass("sta_WF_Label");
            this.div_pop.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "332", "0", "110", "29", null, null, this.div_pop);
            obj.set_taborder("15");
            obj.set_text("계약구분");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            this.div_pop.addChild(obj.name, obj);
            obj = new Combo("cbo_bsndsc", "absolute", "447", "4", "192", "21", null, null, this.div_pop);
            this.div_pop.addChild(obj.name, obj);
            var cbo_bsndsc_innerdataset = new Dataset("cbo_bsndsc_innerdataset", this.div_pop.cbo_bsndsc);
            cbo_bsndsc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">상시</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">단기행사</Col></Row></Rows>");
            obj.set_innerdataset(cbo_bsndsc_innerdataset);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displayrowcount("2");
            obj.set_visible("false");
            obj = new Edit("edt_naTrplC", "absolute", "115", "32", null, "21", "470", null, this.div_pop);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_visible("false");
            this.div_pop.addChild(obj.name, obj);
            obj = new Button("btn_naTrplC", "absolute", null, "32", "21", "21", "443", null, this.div_pop);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_Searchbtn");
            obj.set_visible("false");
            this.div_pop.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 58, this.div_pop,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("183");
            		p.set_text("Div00");
            		p.style.set_background("transparent");
            		p.set_visible("false");

            	}
            );
            this.div_pop.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("게시판등록");
            		p.set_visible("true");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item7","Static13","text","ds_bbs","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","txt_content","text","ds_bbs","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_title","value","ds_bbs","BBRD_TI");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_pop.chk_bbrdPupYn","value","ds_bbs","BBRD_PUP_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_pop.edt_popup","value","ds_bbs","BBRD_PUP_APDFLNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","div_pop.edt_naTrplC","value","ds_bbs","BBRD_PUP_APDFLNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_pop.cal_from","value","ds_bbs","BBRD_PUP_ST_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div_pop.cal_to","value","ds_bbs","BBRD_PUP_ED_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","txt_content","value","ds_bbs","BBRD_CNTN");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_4112.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("OMG_DS_SC_4112.xfdl", "lib::sz_fsp_nx.xjs");
        this.registerScript("OMG_DS_SC_4112.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::sz_fsp_nx.xjs", null, exports); }	//include "lib::sz_fsp_nx.xjs"; //push lib

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        this.blbdId = "";
        this.bbrdId = "";
        this.bbrdIdTemp = "";
        this.writeType = 0; //게시판 유형..등록0수정1답글2
        this.popupType = ""; //팝업 이미지 변경시 수정
        this.popupDel = ""; //팝업 이미지 변경시 수정

        var PUSH_STSC_A = ""; //푸시설정
        var PUSH_STSC_B = "";
        var PUSH_STSC_C = "";
        var PUSH_STSC_D = "";
        var PUSH_STSC_E = "";
        var PUSH_STSC_F = "";

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        	this.fsp_init();//푸시init
        }

        // eSCM공지사항
        this.position = function()
        {
        	if (application.gv_userTPC == "admin") {
        		// 팝업 설정
        		var toDay = this.gfn_today("yyyyMMdd");
        		this.chkDay = this.gfn_minusDate(toDay, -7);
        		this.div_pop.cal_from.set_value(toDay);
        		this.div_pop.cal_to.set_value(this.chkDay);
         		this.div_pop.set_visible(true);

         		this.div_pop.set_top(72);
        	 	this.st_content.set_top(128);
        		this.txt_content.set_top(140);
        		this.st_boarder.set_top(128);
        	} else {
        	 	this.st_content.set_top(72);
        		this.txt_content.set_top(84);
        		this.st_boarder.set_top(72);
        	}
        }

        // eSCM공지사항 외 화면
        this.position1 = function()
        {
        	this.st_content.set_top(72);
        	this.txt_content.set_top(84);
        	this.st_boarder.set_top(72);
        }

        this.fn_afterFormOnload = function()
        {
        	//페이지 로딩후 실행부분
        	try {
        		this.blbdId = this.getOwnerFrame().blbdId;
        		this.bbrdId = this.getOwnerFrame().bbrdId;
        		this.writeType = this.getOwnerFrame().writeType; //게시판 유형..등록0수정1답글2

        		if (this.gfn_isNull(this.blbdId)) {
        			this.bbrdId = null;
        		}
        	} catch(e) {
        	}

        	switch(this.blbdId) {
        		case "201506090001":
        			this.set_titletext("eSCM공지사항 등록");
        			this.position();
        			break;
        		case "201506090002":
        			this.set_titletext("자료실 등록");
        			this.position1();
        			break;
        		case "201506090003":
        			this.set_titletext("자료요청 등록");
        			this.position1();
        			break;
        		case "201506090004":
        			this.set_titletext("고객의소리 등록");
        			this.position1();
        			this.edt_title.set_width(448); // 제목 줄이기
        			this.st_closed_yn_info.set_visible(true);
        			this.st_closed_yn.set_visible(true); // 비공개여부 표시
        			this.rdo_closed_yn.set_visible(true);
        			break;
        		case "201506090005":
        			this.set_titletext("계약정보자료실");
        			this.position1();
        			break;
        		case "201506090006":
        			this.set_titletext("대납신청 등록");
        			this.position1();
        			break;
        		case "201506090007":
        			this.set_titletext("이용료문의 등록");
        			this.position1();
        			break;
        		case "201506090009":
        			this.set_titletext("1:1 상담게시판 등록");
        			this.position1();
        			break;
        		case "202107010001":
        			this.set_titletext("판촉사원파견약정서 등록");
        			this.position2();
        			break;
        		case "202108250001":
        			this.set_titletext("동반성장&공정거래 등록");
        			this.position1();
        			break;
        	}

        	if (this.blbdId == "202107010001") {
        		// 파일업로드 설정
        		var fileParam = {
        			form:this, 
        			param:[{//필요없는 프로퍼티는 주석처리
        					fileObj: this.btn_file, 
        					maxSize:20, 											//허용할 파일 사이즈(MB)
        					maxLength:1, 										//허용할 파일갯수
        					ext:['pdf'], 										//허용할 확장자명
        	// 				cancel_after:function(obj) {							//파일선택후, 취소버튼 눌렀을때 실행할 함수명 또는 함수
        	// 					this.form.div_search.txa_excel00.set_value(""); //this대신 this.form으로 접근
        	// 				}, 
        					valid_after_fail: 'FileUpload_onerror', 			//파일검사 실패후 호출할 함수명 또는 함수
        					upload_after_succ: 'FileUpload_onsuccess', 	//파일 업로드 성공후 호출할 함수명 또는 함수
        					upload_after_fail: 'FileUpload_onerror'  	    	//파일 업로드 실패후 호출할 함수명 또는 함수
        				}]
        		};
        	} else {
        		//게시판 유형..등록0수정1답글2
        		var fileParam = {
        			form:this, 
        			param:[{//필요없는 프로퍼티는 주석처리
        					fileObj: this.btn_file, 
        					maxSize:20, 											//허용할 파일 사이즈(MB)
        					//maxLength:1, 										//허용할 파일갯수
        					//ext:['xls', 'xlsx'], 									//허용할 확장자명
        	// 				cancel_after:function(obj) {							//파일선택후, 취소버튼 눌렀을때 실행할 함수명 또는 함수
        	// 					this.form.div_search.txa_excel00.set_value(""); //this대신 this.form으로 접근
        	// 				}, 
        					valid_after_fail: 'FileUpload_onerror', 			//파일검사 실패후 호출할 함수명 또는 함수
        					upload_after_succ: 'FileUpload_onsuccess', 	//파일 업로드 성공후 호출할 함수명 또는 함수
        					upload_after_fail: 'FileUpload_onerror'  	    	//파일 업로드 실패후 호출할 함수명 또는 함수
        				}]
        		};
        	}

        	this.gfn_addEventFileUpload(fileParam);
        	this.fn_setContentType();
        	this.gfn_createToken(this);
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_insertBlbd = function()
        {
        	var price = this.gfn_nullToEmpty(this.edt_price.value);
        	var today = this.gfn_today("yyyyMMdd");
        	var param = "PRC=" + price + " today=" + today;
        	param += " ptoken=" + this.gfn_getToken(); // CORS

        	var sSvcID        = "insertBlbd";
        	var sURL          = "svc::rest/pt/blbd/insertBlbd";
        	var sInDatasets   = "ds_bbs=ds_bbs ds_file=ds_file";
        	var sOutDatasets  = "";
        	var sArgument     = param;
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "U"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets , sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_updateblbdCntn = function()
        {
        	var price = this.gfn_nullToEmpty(this.edt_price.value);
        	var today = this.gfn_today("yyyyMMdd");
        	var param = "PRC=" + price +
        				" today=" + today +
        				" popupType=" + this.popupType +
        				" popupDel=" + this.popupDel;
        	param += " ptoken=" + this.gfn_getToken(); // CORS

        	var sSvcID        = "updateblbdCntn";
        	var sURL          = "svc::rest/pt/blbd/updateblbdCntn";
        	var sInDatasets   = "ds_bbs=ds_bbs ds_file=ds_file:U";
        	var sOutDatasets  = "";
        	var sArgument     = param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets , sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_retrieveBlbd = function()
        {
        	var sSvcID        = "retrieveBlbd";
        	var sURL          = "svc::rest/pt/blbd/retrieveBlbd";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_bbs=ds_bbs ds_file=ds_file";
        	var sArgument     = "BLBD_ID="+this.blbdId +
        	                    " BBRD_ID=" + this.bbrdId;

        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets , sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
         	if (ErrorCode < 0) { //에러
        		switch(svcID) {
        			case "insertBlbd":
        				alert("게시판 등록 중 에러가 발생하였습니다.");
        				break;
        		}
         	} else {
        		switch(svcID) {
        			case "insertBlbd":
        				//Push발송
        				if (this.blbdId == '201506090001') {
        					this.fn_retrievePushSendInfo();
        				}
        				alert("저장되었습니다.");

        				if (this.writeType == 0) {
        					this.close();
        				} else {
        					this.parent.close();
        				}

        				break;

        			case "updateblbdCntn":
        				alert("저장되었습니다.");

        				if (this.writeType == 0) {
        					this.close();
        				} else {
        					this.parent.close();
        				}
        				break;
        			case "retrieveBlbd":
        				if (this.rdo_closed_yn.visible) {
        					var val = (this.ds_bbs.getColumn(0, "BBRD_CLOSED_YN") == "Y") ? "Y" : "N";
        					this.rdo_closed_yn.set_value(val); // 비공개여부 (Y: 비공개, N: 공개)
        				}

        				//게시판 유형..등록0수정1답글2
        				this.fn_setDesign();
        				if (this.writeType == 1) {
        					switch(this.blbdId) {
        						case "201506090001":
        							this.parent.set_titletext("eSCM공지사항 수정");
        							break;
        						case "201506090002":
        							this.parent.set_titletext("자료실 수정");
        							break;
        						case "201506090003":
        							this.parent.set_titletext("자료요청 수정");
        							this.edt_price.set_visible(true);
        							this.st_price.set_visible(true);
        							this.edt_price.set_value(this.ds_prc.getColumn(0, "BLBD_UG_AM"));
        							break;
        						case "201506090004":
        							this.parent.set_titletext("고객의소리 수정");
        							break;
        						case "201506090006":
        							this.parent.set_titletext("대납신청 수정");
        							break;
        						case "201506090007":
        							this.parent.set_titletext("이용로문의 수정");
        							break;
        						case "202107010001":
        							this.parent.set_titletext("판촉사원파견약정서 수정");
        							this.div_pop.cbo_bsndsc.set_value(this.ds_bbs.getColumn(0, "BBRD_PUP_YN"));
        							break;
        						case "202108250001":
        							this.parent.set_titletext("동반성장&공정거래 수정");
        							break;
        					}
        				}
        				else if (this.writeType == 2)
        				{
        					this.ds_file.clearData();
        					switch(this.blbdId)
        					{
        						case "201506090001":
        							this.parent.set_titletext("eSCM공지사항 답글");

        							break;
        						case "201506090002":
        							this.parent.set_titletext("자료실 답글");
        							break;
        						case "201506090003":
        							this.parent.set_titletext("자료요청 답글");
        							this.edt_price.set_visible(true);
        							this.st_price.set_visible(true);
        							break;
        						case "201506090004":
        							this.parent.set_titletext("고객의소리 답글");
        							break;

        						case "201506090006":
        							this.parent.set_titletext("대납신청 답글");
        							break;

        						case "201506090007":
        							this.parent.set_titletext("이용료문의 답글");
        							break;
        					}
        					this.ds_bbs.setColumn(0, "BBRD_TI", "RE :: " + this.ds_bbs.getColumn(0, "BBRD_TI"));
        					this.ds_bbs.setColumn(0, "BBRD_CNTN", "\n\n======================================\n" + this.ds_bbs.getColumn(0, "BBRD_CNTN"));
        					this.ds_bbs.setColumn(0, "PRET_BBRD_ID", this.ds_bbs.getColumn(0, "BBRD_ID"));
        					this.ds_bbs.setColumn(0, "PRET_CLOSED_YN", this.ds_bbs.getColumn(0, "BBRD_CLOSED_YN"));
        				}
        				break;

        			case "retrievePushSendInfo":
        				if (ErrorCode < 0) {
        					this.gfn_getMessage("alert", "error.message.server.exception");
        				} else {
        					if (application.gds_pushInfo.rowcount != 0) {
        						//한개 row에 targetUsers (DVIC_ID) 만 Comma 구분이라 for문 필요없음
        						//for (var i = 0; i < application.gds_pushInfo.rowcount; i++) {
        							//Push 발송시 화면별로 분기처리
        							if (application.gds_pushInfo.getColumn(i, "PUSH_STSC_A") == 1) {
        								//application.gds_push.addRow();
        								//var mobileAppID = 10;
        								//var publishType = "T";
        								//var createUserID = "admin";
        								//var createUserName = "관리자";
        								var messageID = "";//자동으로 seq 생성됨
        								var messageType = "A";
        								var messageTitle = "공지사항 등록 알림";
        								var messageBody	= "공지사항이 등록 되었습니다.";
        								var targetUsersArr = [];
        								for (var i = 0; i < application.gds_pushInfo.rowcount; i++) {
        									targetUsersArr[i] = application.gds_pushInfo.getColumn(i, "DVIC_ID");
        								}
        								//application.gds_push.setColumn(0, "mobileAppID", mobileAppID);
        								//application.gds_push.setColumn(0, "publishType", publishType);
        								//application.gds_push.setColumn(0, "createUserID", createUserID);
        								//application.gds_push.setColumn(0, "createUserName", createUserName);
        								application.gds_push.setColumn(0, "messageID", messageID);
        								application.gds_push.setColumn(0, "messageType", messageType);
        								application.gds_push.setColumn(0, "messageTitle", messageTitle);
        								application.gds_push.setColumn(0, "messageBody", messageBody);
        								application.gds_push.setColumn(0, "targetUsers", targetUsersArr);
        							}
        						//}
        						//공지사항 푸시알림이(PUSH_STSC_A) 받기(1) 인경우 fn_send 발송
        						this.fn_send();
        					}
        				}
        			break;
        		}
         	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.common_onclick = function(obj,e)
        {
        	switch(obj.name) {
        		case "btn_save":
        			if (this.fn_checkValidation()) {
        				if (this.rdo_closed_yn.visible) {
        					this.ds_bbs.setColumn(0, "BBRD_CLOSED_YN", this.rdo_closed_yn.value); // 비공개여부
        				}

        				if (!this.gfn_isNull(this.txt_content.value)) {
        					//@특수문자제거 ESC(제어기능 추가, FS(파일경계할당), GS(레코드 그룹경계 할당), RS(코드경계 할당) 특수문자 제거
        					this.ds_bbs.setColumn(0, "BBRD_CNTN", this.ds_bbs.getColumn(0, "BBRD_CNTN").replace(/String.fromCharCode(31)/g, "").replace(/String.fromCharCode(30)/g, "").replace(/String.fromCharCode(29)/g, "").replace(/String.fromCharCode(28)/g, "").replace(/String.fromCharCode(27)/g, ""));
        				}

        				if (this.writeType == 0) { //등록
        					this.ds_bbs.setColumn(0, "FS_RGM", application.gv_userId);
        					this.ds_bbs.setColumn(0, "LS_CHGM", application.gv_userId);
        					this.ds_bbs.setColumn(0, "BBRD_RGM_NM", application.gv_userName);

        					if (this.gfn_nullToEmpty(this.div_pop.cal_from.value) !="") {
        						this.ds_bbs.setColumn(0, "BBRD_PUP_ST_DT", this.div_pop.cal_from.value);
        					}
        					if (this.gfn_nullToEmpty(this.div_pop.cal_to.value) != "") {
        						this.ds_bbs.setColumn(0, "BBRD_PUP_ED_DT", this.div_pop.cal_to.value);
        					}

        					this.ds_bbs.setColumn(0, "BLBD_ID", this.blbdId);
        					this.ds_bbs.setColumn(0, "PRET_BBRD_ID", null);
        					this.fn_insertBlbd();
        				} else if (this.writeType == 1) { //수정
        					this.ds_bbs.setColumn(0, "LS_CHGM", application.gv_userId);
        					this.ds_bbs.setColumn(0, "BLBD_ID", this.blbdId);

        					if (this.gfn_nullToEmpty(this.div_pop.cal_from.value) !="") {
        						this.ds_bbs.setColumn(0, "BBRD_PUP_ST_DT", this.div_pop.cal_from.value);
        					}
        					if (this.gfn_nullToEmpty(this.div_pop.cal_to.value) != "") {
        						this.ds_bbs.setColumn(0, "BBRD_PUP_ED_DT", this.div_pop.cal_to.value);
        					}
        					this.fn_updateblbdCntn();
        				} else if (this.writeType == 2) { //답글
        					this.ds_bbs.setColumn(0, "FS_RGM", application.gv_userId);
        					this.ds_bbs.setColumn(0, "LS_CHGM", application.gv_userId);
        					this.ds_bbs.setColumn(0, "BBRD_RGM_NM", application.gv_userName);
        					this.ds_bbs.setColumn(0, "BLBD_ID", this.blbdId);

        					this.fn_insertBlbd();
        				}
        			}
        			break;

        		case "btn_cancel":
        			this.close();
        			break;
        	}
        }

        this.btn_delRow_onclick = function(obj,e)
        {
        	var i = 0;
        	if (this.ds_file.findRow("CHK", "1") < 0) {
        		alert("선택된 파일이 없습니다.");
        		return;
        	}
        	var nRow = -1;
        	while(true) {
        		nRow = this.ds_file.findRow("CHK", "1");
        		if (nRow < 0) break;
        		this.ds_file.deleteRow(nRow);
        	}

        	this.fn_setDesign();
        }

        this.btn_cancel_onclick = function(obj,e)
        {
        	if (this.writeType == 0) {
        		this.close();
        	} else {
        		this.parent.close();
        	}
        }

        // 비공개여부 변경
        this.rdo_closed_yn_onitemchanged = function(obj,e)
        {
        	if (this.writeType == 1 && application.gv_userType != "99") {
        		obj.set_value(e.prevalue); // 변경 전 value 값으로 설정
        		alert("공개여부는 수정할 수 없습니다.");
        		return;
        	}

        	if (e.prevalue == "Y" && this.ds_bbs.getColumn(0, "PRET_CLOSED_YN") == "Y") { // 부모글이 비공개인 경우
        		obj.set_value("Y"); // 비공개
        		alert("부모글이 비공개이므로, 공개할 수 없습니다.");
        		return;
        	}
        }
        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_checkValidation = function()
        {
        	if (this.gfn_isNull(this.edt_title.value)) {
        		alert("제목을 입력해 주세요.");
        		return false;
        	}

        	if (this.blbdId == "202107010001") {
        		if (this.gfn_nullToEmpty(this.div_pop.cal_from.value) == "") {
        			alert("계약기간 시작일자를 입력해 주세요.");
        			this.div_pop.cal_from.setFocus();
        			return false;
        		}
        		if (this.gfn_nullToEmpty(this.div_pop.cal_to.value) == "") {
        			alert("계약기간 종료일자를 입력해 주세요.");
        			this.div_pop.cal_to.setFocus();
        			return false;
        		}
        		if (!this.gfn_nullToEmpty(this.div_pop.cal_to.value) == "") {
        			if (this.div_pop.cal_from.value >  this.div_pop.cal_to.value) {
        				alert("계약기간 종료일자는 시작일자 이전으로 할 수 없습니다.");
        				this.div_pop.cal_to.set_value("");
        				this.div_pop.cal_to.setFocus();
        				return false;
        			}
        		}
        		if (this.gfn_nullToEmpty(this.div_pop.edt_naTrplC.value) == "") {
        			alert("거래처를 선택하세요.");
        			return false;
        		}
        		if (this.ds_file.getRowCount() == 0) {
        			alert("첨부파일을 추가하세요.");
        			return false;
        		}

        		this.ds_bbs.setColumn(0, "BBRD_PUP_YN", this.div_pop.cbo_bsndsc.value);
        		this.ds_bbs.setColumn(0, "BBRD_PUP_SYS_FLNM", application.gv_glnCode);
        	} else {
        		if (this.gfn_isNull(this.txt_content.value)) {
        			if (this.ds_bbs.getColumn(0, "BBRD_PUP_YN") == "1") {
        				if (this.gfn_isNull(this.ds_bbs.getColumn(0, "BBRD_PUP_SYS_FLNM"))) {
        					alert("내용이나 팝업 첨부 파일을 입력 하세요.");
        					return false;
        				}
        			} else {
        				if (this.gfn_isNull(this.ds_bbs.getColumn(0, "BBRD_PUP_SYS_FLNM"))) {
        					alert("내용을 입력해 주세요.");
        					return false;
        				}
        			}
        		}

        		if (this.ds_bbs.getColumn(0, "BBRD_PUP_YN") == "1") {
        			if (this.gfn_nullToEmpty(this.div_pop.cal_from.value) == "") {
        				alert("팝업 게시 시작일자를 입력해주세요.");
        				return false;
        			}
        			if (this.gfn_nullToEmpty(this.div_pop.cal_to.value) == "") {
        				alert("팝업 게시 종료일자를 입력해주세요.");
        				return false;
        			}
        		}
        	}
        	return true;
        }

        this.fn_setContentType = function()
        {
        	switch(this.writeType) { //게시판 유형..등록0수정1답글2
        		case 0:
        			this.ds_bbs.clearData();
        			this.ds_bbs.addRow();
        			this.ds_bbs.setColumn(0, "BLBD_ID", this.blbdId);
        			this.ds_bbs.setColumn(0, "BBRD_ID", this.bbrdId);
        			this.fn_setDesign();//화면을 그린다.
        			break;
        		case 1:
        		case 2:
        			this.fn_retrieveBlbd();
        			break;
        	}
        }

        this.fn_setDesign = function()
        {
        	//첨부파일 유무에 따른 디자인
        	var grdHeight;
        	if (this.ds_file.rowcount < 3) {
        		grdHeight = nexacro.toNumber(this.grd_file.getRealRowSize(0)) * nexacro.toNumber(this.ds_file.rowcount);
        	} else {
        		grdHeight = nexacro.toNumber(this.grd_file.getRealRowSize(0)) * 2.5;
        	}
        	switch(this.blbdId) {
        		case "201506090002"://자료실조회
        		case "201506090005"://계약정보자료실조회
        		case "201506090001": //공지사항조회
        		case "201506090004"://고객의소리조회
        		case "201506090003"://자료요청
        		case "201506090006"://대납신청
        		case "201506090007"://이용료문의
        		case "201506090009"://1:1 상담게시판
        		case "202107010001"://판촉사원파견약정서
        		case "202108250001"://동반성장&공정거래
        			this.grd_file.set_height(grdHeight);
        			this.txt_content.set_bottom(60 + grdHeight);
        			this.st_boarder.set_bottom(60 + grdHeight);
        			this.st_content.set_bottom(60 + grdHeight);
        			this.btn_delRow.set_bottom(20 + grdHeight);
        			this.btn_file.set_bottom(20 + grdHeight);
        			this.st_title.set_bottom(22 + grdHeight);
        			break;

        		default:
        			this.txt_content.set_bottom(31);
        			this.st_boarder.set_bottom(15);
        			this.st_content.set_bottom(15);
        			break;
        	}
        }

        this.FileUpload_onsuccess = function(obj,e)
        {
        	if (e.datasets == null) {
        	} else {
        		var i = 0;

        		if (this.blbdId == "202107010001") {
        			if (this.grd_file.rowcount >0) {
        				alert("첨부파일 추가는 한개만 가능합니다.");
        				return;
        			}
        		}

        		this.ds_file.addRow();
        		this.ds_uploadresult.copyData(e.datasets[0]);
        		this.ds_file.copyRow(this.ds_file.rowposition, this.ds_uploadresult, 0);
        		this.ds_file.setColumn(this.ds_file.rowposition, "CHK", 0);
        		this.fn_setDesign();
        	}
        	this.btn_file.deleteItem(0);
        	this.btn_file.appendItem();
        }

        this.FileUpload_onerror = function(obj,e)
        {
        	// 	trace("FileUpload00_onerror");
        	// 	trace("e.errorcode: "+e.errorcode);
        	// 	trace("e.errormsg: "+e.errormsg);
        	this.btn_file.deleteItem(0);
        	this.btn_file.appendItem();
        }

        //UPLOAD
        this.FileUpload_onitemchanged = function(obj,e)
        {
        	this.gfn_callUpload(obj);
        }

        /*******************************************************************************
        * 기      능   : Push 조회 및 세팅
        * 설      명   : messageType A-F 별로 세팅해 발송
        A: 공지사항 등록시
        B: 수주내역 도착시
        C: 배송응답서 도착시
        D: 검수확정서 도착시
        E: 반품예정서 도착시
        F: 세금계산서 마감 알림
        Push 발송시 화면별로 분기처리
        PUSH_STSC_A ="1" 푸시발송, PUSH_STSC_A ="0" 푸시미발송
        ********************************************************************************/
        this.fn_retrievePushSendInfo = function()
        {
        	application.gds_pushInfo.clearData();
        	var sSvcID        = "retrievePushSendInfo";
        	var sURL          = "svc::rest/pt/comn/retrievePushSendInfo";
        	var sInDatasets   = "";
        	var sOutDatasets  = "gds_pushInfo=ds_pushInfo";
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets , sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /*******************************************************************************
        * 기      능   : Push 발송
        * 설      명   : gds_push에 세팅된 기기별 Push 발송
        ********************************************************************************/
        this.fn_send = function()
        {
        	// 서버 호출
        	this.fsp_callService(
        		"push#nMobilePushMessageAction"
        		, "sendMessage"
        		, "ds_push=gds_push"	// inDs
        		, ""	// outDs
        		, ""	// args
        		, "fn_afterSend"
        		, false
        	);
        }

        /*******************************************************************************
        * 기      능   : Save callback
        ********************************************************************************/
        this.fn_afterSend = function(ErrorCode,ErrorMsg)
        {
        }

        /*******************************************************************************
        * 기      능   : 팝업 이미지 업로드
        ********************************************************************************/
        this.popup_FileUpload_onerror = function(obj,e)
        {
        	// 	trace("FileUpload_onerror aaa");
        	// 	trace("e.errorcode: "+e.errorcode);
        	// 	trace("e.errormsg: "+e.errormsg);
        }

        this.popup_FileUpload_onitemchanged = function(obj,e)
        {
        	this.gfn_callUpload(obj);
        }

        this.div_pop_FileUpload_onfindclick = function(obj,e)
        {
        	if (this.gfn_isNull(this.txt_content.value) == false) {
        		if (application.confirm("내용을 삭제하고 팝업 이미지를 업로드 하겠습니다. ") == false) {
        			this.txt_content.set_value("");
        			this.popupType = "";
        			return false;
        		} else {
        			this.txt_content.set_value("");
        			this.popupType = "1";
        			this.bbrdIdTemp = "0";
        			return true;
        		}
        	} else {
        		this.txt_content.set_value("");
        		this.bbrdIdTemp = "0";
        		this.popupType = "1";
        		return true;
        	}
        }

        this.popup_FileUpload_onsuccess = function(obj,e)
        {
        	if (e.datasets == null) {
        	} else {
        		this.ds_uploadresult01.copyData(e.datasets[0]);
        		this.ds_bbs.setColumn(0, "BBRD_PUP_SYS_FLNM", this.ds_uploadresult01.getColumn(0, "SYSTEMFILENAME"));
        		this.ds_bbs.setColumn(0, "BBRD_PUP_APDFLNM", this.ds_uploadresult01.getColumn(0, "ORGFNAME"));
        		this.ds_bbs.setColumn(0, "BBRD_PUP_YN", "1");
        		this.txt_content.set_readonly(true);
        	}
        }

        this.btn_delRow01_onclick = function(obj,e)
        {
        	if (this.ds_uploadresult01.rowcount > 0) {
        		this.ds_uploadresult01.deleteRow(0);
        		this.txt_content.set_readonly(false);
        	} else {
        		if (this.gfn_isNull(this.ds_bbs.getColumn(0, "BBRD_PUP_SYS_FLNM")) != "") {
        			alert("삭제할 팝업 이미지가 없습니다. ") ;
        		}
        	}
        	this.popupType = "2";
        	this.popupDel = this.ds_bbs.getColumn(0, "BBRD_PUP_SYS_FLNM");

        	this.ds_bbs.setColumn(0, "BBRD_PUP_SYS_FLNM", "");
        	this.ds_bbs.setColumn(0, "BBRD_PUP_APDFLNM", "");
        	this.txt_content.set_readonly(false);
        }

        this.div_pop_btn_popup_onclick = function(obj,e)
        {
        	this.framename= "test09";
        	this.url="";
        	this.BlbdId="";
        	this.BbrdId="";
        	this.systemFileName = "";
        	this.bbrd_cntn = "";
        	this.BlbdId = this.ds_bbs.getColumn(0, "BLBD_ID");

        	this.popup_W = 50;
        	this.popup_h= 50;

        	if (this.gfn_isNull(this.ds_bbs.getColumn(0, "BBRD_CNTN")) == true) {
                if (this.bbrdIdTemp == "0") {
        			this.BbrdId = "";
        		} else {
        			this.BbrdId = this.ds_bbs.getColumn(0, "BBRD_ID");
        		}
        		this.bbrd_cntn= "";
        		if (this.gfn_isNull(this.ds_uploadresult01.getColumn(0, "SYSTEMFILENAME")) ==false) {
        			this.systemFileName  = this.ds_uploadresult01.getColumn(0, "SYSTEMFILENAME");
        		}
        	} else {
        		this.bbrd_cntn = this.ds_bbs.getColumn(0, "BBRD_CNTN") ;
        	}

        	try {
        		application.open(this.framename, "OMG.PT::OMG_DS_SC_9091.xfdl", this, {URL:this.url , FRAME_NAME:this.framename, BBRD_CNTN:this.bbrd_cntn, BLBD_ID:this.BlbdId , BBRD_ID:this.BbrdId , SYSTEMFILENAME:this.systemFileName }, "showtitlebar=true showstatusbar=true autosize=false", this.popup_W, this.popup_H , 600, 650);
        	} catch(e) {
        		application.popupframes["test09"].form.close();
        		application.open(this.framename, "OMG.PT::OMG_DS_SC_9091.xfdl", this, {URL:this.url , FRAME_NAME:this.framename, BBRD_CNTN:this.bbrd_cntn, BLBD_ID:this.BlbdId , BBRD_ID:this.BbrdId , SYSTEMFILENAME:this.systemFileName }, "showtitlebar=true showstatusbar=true autosize=false", this.popup_W, this.popup_H , 600, 650);
        	}
        }

        // 판촉사원파견약정서 화면
        this.position2 = function()
        {
        	this.div_pop.Static04.set_text("계약기간");
        	this.div_pop.Static00.set_visible(true);
        	this.div_pop.cbo_bsndsc.set_visible(true);
        	this.div_pop.cbo_bsndsc.set_index(0);
        	this.div_pop.Static123.set_text("거래처");
        	this.div_pop.edt_naTrplC.set_visible(true);
        	this.div_pop.btn_naTrplC.set_visible(true);
        	this.div_pop.set_visible(true);

        	this.div_pop.set_top(72);
        	this.st_content.set_top(128);
        	this.txt_content.set_top(140);
        	this.st_boarder.set_top(128);
        }

        this.btn_naTrplC_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"S", dsArg:this.ds_register, new_elt:true };
         	var sOption = "autosize=true";
         	var sPopupCallBack = "fn_popupAfter";
         	this.gfn_openPopup("naTrplC", "OMG.PT::OMG_DS_SC_9030.xfdl", oArg, sOption, sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	 if (strId == "naTrplC") {
        		//경재 통합 리턴 값
        		var naTrplCVal = strVal.split(",");

        		for (var i=0; i<naTrplCVal.length; i++) {
        			var naTrplCVal1 = naTrplCVal[i].split("#");

        			if (naTrplCVal1[0] == "NA_TRPL_C") {
        				//경제통합거래처코드
        				this.ds_bbs.setColumn(0, "BBRD_PUP_APDFLNM", naTrplCVal1[1]);
        			}
        		}
        	}
        }
        this.div_pop_Static03_onclick = function(obj,e)
        {
        	
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
            this.ds_uploadresult.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.ds_prc.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.ds_uploadresult01.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_delRow.addEventHandler("onclick", this.btn_delRow_onclick, this);
            this.btn_file.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.btn_file.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.btn_file.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.btn_save.addEventHandler("onclick", this.common_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);
            this.txt_content.addEventHandler("oneditclick", this.txt_content_oneditclick, this);
            this.rdo_closed_yn.addEventHandler("onitemchanged", this.rdo_closed_yn_onitemchanged, this);
            this.st_closed_yn_info.addEventHandler("onclick", this.Static138_onclick, this);
            this.div_pop.FileUpload.addEventHandler("onsuccess", this.popup_FileUpload_onsuccess, this);
            this.div_pop.FileUpload.addEventHandler("onerror", this.popup_FileUpload_onerror, this);
            this.div_pop.FileUpload.addEventHandler("onitemchanged", this.popup_FileUpload_onitemchanged, this);
            this.div_pop.FileUpload.addEventHandler("onfindclick", this.div_pop_FileUpload_onfindclick, this);
            this.div_pop.chk_bbrdPupYn.addEventHandler("onchanged", this.chk_bbrdPupYn_onchanged, this);
            this.div_pop.btn_popup.addEventHandler("onclick", this.div_pop_btn_popup_onclick, this);
            this.div_pop.btn_delRow01.addEventHandler("onclick", this.btn_delRow01_onclick, this);
            this.div_pop.btn_naTrplC.addEventHandler("onclick", this.btn_naTrplC_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_4112.xfdl", true);

       
    };
}
)();
