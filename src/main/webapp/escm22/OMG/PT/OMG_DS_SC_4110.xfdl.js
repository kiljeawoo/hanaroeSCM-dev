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
                this.set_name("OMG_DS_SC_4110");
                this.set_titletext("게시판(목록)");
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
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"string\" size=\"32\"/><Column id=\"BLBD_ID\" type=\"string\" size=\"32\"/><Column id=\"BBRD_ID\" type=\"string\" size=\"32\"/><Column id=\"BBRD_TI\" type=\"string\" size=\"32\"/><Column id=\"BBRD_CNTN\" type=\"string\" size=\"32\"/><Column id=\"BLTN_ST_DTM\" type=\"string\" size=\"32\"/><Column id=\"BLTN_ED_DTM\" type=\"string\" size=\"32\"/><Column id=\"CKNL_DSC\" type=\"string\" size=\"32\"/><Column id=\"BBRD_DEL_YN\" type=\"string\" size=\"32\"/><Column id=\"BBRD_INQ_CN\" type=\"string\" size=\"32\"/><Column id=\"BBRD_RGM_NM\" type=\"string\" size=\"32\"/><Column id=\"FSRG_DTM\" type=\"string\" size=\"32\"/><Column id=\"FS_RGM\" type=\"string\" size=\"32\"/><Column id=\"LSCHG_DTM\" type=\"string\" size=\"32\"/><Column id=\"LS_CHGM\" type=\"string\" size=\"32\"/><Column id=\"PRET_BBRD_ID\" type=\"string\" size=\"32\"/><Column id=\"NEW\" type=\"string\" size=\"32\"/><Column id=\"PAY_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"BLBD_UG_AM\" type=\"string\" size=\"32\"/><Column id=\"UPLOAD_DT\" type=\"string\" size=\"32\"/><Column id=\"BBRD_PUP_ST_DT\" type=\"string\" size=\"32\"/><Column id=\"BBRD_PUP_ED_DT\" type=\"string\" size=\"32\"/><Column id=\"BBRD_PUP_YN\" type=\"string\" size=\"32\"/><Column id=\"BBRD_PUP_SYS_FLNM\" type=\"string\" size=\"32\"/><Column id=\"BBRD_PUP_APDFLNM\" type=\"string\" size=\"32\"/><Column id=\"PICTURE\" type=\"blob\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_condition", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SEARCH\" type=\"STRING\" size=\"256\"/><Column id=\"CONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"BLBD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_copy", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_ID\" type=\"string\" size=\"32\"/><Column id=\"DOCUMENT_ID\" type=\"string\" size=\"32\"/><Column id=\"NOTICE_ED_DT\" type=\"string\" size=\"32\"/><Column id=\"TITLE\" type=\"string\" size=\"32\"/><Column id=\"DOC_START_DT\" type=\"string\" size=\"32\"/><Column id=\"DOC_END_DT\" type=\"string\" size=\"32\"/><Column id=\"NOTICE_YN\" type=\"string\" size=\"32\"/><Column id=\"DELETE_YN\" type=\"string\" size=\"32\"/><Column id=\"COUNT\" type=\"string\" size=\"32\"/><Column id=\"USER_NAME\" type=\"string\" size=\"32\"/><Column id=\"PARENT_DOC_ID\" type=\"string\" size=\"32\"/><Column id=\"INIT_REG_DT\" type=\"string\" size=\"32\"/><Column id=\"INIT_REG_USER\" type=\"string\" size=\"32\"/><Column id=\"LAST_CHG_DT\" type=\"string\" size=\"32\"/><Column id=\"LAST_CHG_USER\" type=\"string\" size=\"32\"/><Column id=\"REPALY\" type=\"STRING\" size=\"256\"/><Column id=\"REIMG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TITLE\">시스템 점검 안내(2015.04.15 19:00~2..</Col><Col id=\"DOCUMENT_ID\">2015-04-04</Col><Col id=\"REPALY\">0 0 0 20</Col><Col id=\"REIMG\"/></Row><Row><Col id=\"TITLE\">국세청전송중단안내(2015.02.17~02.23)</Col><Col id=\"DOCUMENT_ID\">2015-04-04</Col><Col id=\"REPALY\">0 0 0 60</Col><Col id=\"REIMG\">URL('img::btn_calMonthNext.png')</Col></Row><Row><Col id=\"TITLE\">개인정보취급방침 개정 안내</Col><Col id=\"DOCUMENT_ID\">2015-04-04</Col><Col id=\"REPALY\">0 0 0 20</Col></Row><Row><Col id=\"TITLE\">3월 서비스이용내역 발송 안내</Col><Col id=\"DOCUMENT_ID\">2015-04-04</Col><Col id=\"REPALY\">0 0 0 60</Col><Col id=\"REIMG\">URL('img::btn_calMonthNext.png')</Col></Row></Rows>");
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

            obj = new Dataset("ds_blbdId", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BLBD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_bbs00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"BLBD_ID\" type=\"string\" size=\"32\"/><Column id=\"BBRD_ID\" type=\"string\" size=\"32\"/><Column id=\"BBRD_TI\" type=\"string\" size=\"32\"/><Column id=\"BBRD_CNTN\" type=\"string\" size=\"32\"/><Column id=\"BLTN_ST_DTM\" type=\"string\" size=\"32\"/><Column id=\"BLTN_ED_DTM\" type=\"string\" size=\"32\"/><Column id=\"CKNL_DSC\" type=\"string\" size=\"32\"/><Column id=\"BBRD_DEL_YN\" type=\"string\" size=\"32\"/><Column id=\"BBRD_INQ_CN\" type=\"string\" size=\"32\"/><Column id=\"BBRD_RGMNM\" type=\"string\" size=\"32\"/><Column id=\"FSRG_DTM\" type=\"string\" size=\"32\"/><Column id=\"FS_RGM\" type=\"string\" size=\"32\"/><Column id=\"LSCHG_DTM\" type=\"string\" size=\"32\"/><Column id=\"LS_CHGM\" type=\"string\" size=\"32\"/></ColumnInfo>");
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
            obj = new Button("btn_delete", "absolute", null, "0", "41", "21", "120", null, this);
            obj.set_taborder("8");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_write", "absolute", null, "0", "41", "21", "76", null, this);
            obj.set_taborder("10");
            obj.set_text("쓰기");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("11");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "788", "0", "15", "490", null, null, this);
            obj.set_taborder("12");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("13");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("14");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("edt_search", "absolute", "118", "10", "249", "21", null, null, this.div_search);
            obj.set_taborder("96");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_search", "absolute", "15", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_search_innerdataset = new Dataset("cbo_search_innerdataset", this.div_search.cbo_search);
            cbo_search_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">제목</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">내용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">작성자</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">글번호</Col></Row></Rows>");
            obj.set_innerdataset(cbo_search_innerdataset);
            obj.set_taborder("97");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displayrowcount("5");
            obj.set_index("-1");
            obj = new Combo("cbo_num", "absolute", "524", "10", "55", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_num_innerdataset = new Dataset("cbo_num_innerdataset", this.div_search.cbo_num);
            cbo_num_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row></Rows>");
            obj.set_innerdataset(cbo_num_innerdataset);
            obj.set_taborder("98");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj = new Static("Static05", "absolute", "421", "10", "122", "21", null, null, this.div_search);
            obj.set_taborder("99");
            obj.set_text("출력할 갯수");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "1", "30", "15", "42", null, null, this);
            obj.set_taborder("16");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "732", "72", "56", "41", null, null, this);
            obj.set_taborder("17");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_temp", "absolute", "466", "-1", "162", "23", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_temp_innerdataset = new Dataset("cbo_temp_innerdataset", this.cbo_temp);
            cbo_temp_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">25005001</Col><Col id=\"datacolumn\">eSCM</Col></Row><Row><Col id=\"codecolumn\">25002001</Col><Col id=\"datacolumn\">자료실</Col></Row><Row><Col id=\"codecolumn\">25001001</Col><Col id=\"datacolumn\">잘의응답</Col></Row><Row><Col id=\"codecolumn\">25003001</Col><Col id=\"datacolumn\">고객의소리</Col></Row></Rows>");
            obj.set_innerdataset(cbo_temp_innerdataset);
            obj.set_taborder("18");
            obj.set_text("고객의소리");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_visible("false");
            obj.set_value("25005001");
            obj.set_index("3");

            obj = new Div("div_bbs", "absolute", "0", "71", null, null, "15", "0", this);
            obj.set_taborder("20");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Div("div_paging", "absolute", "226", null, "338", "29", null, "0", this.div_bbs);
            obj.set_taborder("11");
            obj.set_text("Div03");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_bbs.addChild(obj.name, obj);
            obj = new Button("Button75", "absolute", "363", "0", null, "12", "362", null, this.div_bbs);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_bbs.addChild(obj.name, obj);
            obj = new Grid("grd_bbs", "absolute", "0", "41", null, null, "0", "29", this.div_bbs);
            obj.set_taborder("13");
            obj.set_binddataset("ds_bbs");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.set_treeinitstatus("expand,all");
            obj.style.set_background("#ffffffff URL('theme://images/B_btn_Titlebar_close_O.png')");
            obj.set_nodatatext("조회된 건수가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\" band=\"left\"/><Column size=\"102\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"497\"/><Column size=\"100\" band=\"right\"/><Column size=\"100\" band=\"right\"/><Column size=\"100\" band=\"right\"/><Column size=\"60\" band=\"right\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"첨부\"/><Cell col=\"3\" text=\"제목\"/><Cell col=\"4\" text=\"작성자ID\"/><Cell col=\"5\" text=\"작성자\"/><Cell col=\"6\" text=\"날짜\"/><Cell col=\"7\" text=\"조회수\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" text=\"bind:BBRD_ID\"/><Cell col=\"2\" text=\"expr:APDFL_YN=='Y'?'@':''\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" style=\"padding:EXPR(NEWEST&lt;1&amp;&amp;PRET_BBRD_ID!=null?'0 0 0 95':NEWEST &lt; 1 ? '0 0 0 45' : comp.parent.parent.gfn_isNull(PRET_BBRD_ID)?'0 0 0 10':'0 0 0 60');backgroundimage:EXPR(NEWEST&lt;1&amp;&amp;PRET_BBRD_ID!=null?&quot;URL('theme://images\\\\new_reply_ico.png')&quot;:NEWEST &lt; 1 ? &quot;URL('theme://images\\\\img_new.png')&quot;:PRET_BBRD_ID==null?&quot;&quot;:&quot;URL('theme://images\\\\reply_ico.png')&quot;);\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:BBRD_TI\"/><Cell col=\"4\" text=\"bind:FS_RGM\"/><Cell col=\"5\" text=\"bind:USR_NM\"/><Cell col=\"6\" style=\"align:center;\" text=\"bind:LSCHG_DTM\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;padding:0 10 0 10;\" text=\"bind:BBRD_INQ_CN\"/></Band></Format><Format id=\"basic\"><Columns><Column size=\"0\" band=\"left\"/><Column size=\"102\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"497\"/><Column size=\"100\" band=\"right\"/><Column size=\"100\" band=\"right\"/><Column size=\"100\" band=\"right\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"구분\"/><Cell col=\"3\" text=\"첨부\"/><Cell col=\"4\" text=\"제목\"/><Cell col=\"5\" text=\"작성자ID\"/><Cell col=\"6\" text=\"작성자\"/><Cell col=\"7\" text=\"날짜\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" text=\"bind:BBRD_ID\" autosizerow=\"none\"/><Cell col=\"2\" text=\"expr:BBRD_PUP_YN == &quot;1&quot; ? &quot;상시&quot; : &quot;단기행사&quot;\" autosizerow=\"none\"/><Cell col=\"3\" text=\"expr:APDFL_YN=='Y'?'@':''\" autosizerow=\"none\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" style=\"padding:EXPR(NEWEST&lt;1&amp;&amp;PRET_BBRD_ID!=null?'0 0 0 95':NEWEST &lt; 1 ? '0 0 0 45' : comp.parent.parent.gfn_isNull(PRET_BBRD_ID)?'0 0 0 10':'0 0 0 60');backgroundimage:EXPR(NEWEST&lt;1&amp;&amp;PRET_BBRD_ID!=null?&quot;URL('theme://images\\\\new_reply_ico.png')&quot;:NEWEST &lt; 1 ? &quot;URL('theme://images\\\\img_new.png')&quot;:PRET_BBRD_ID==null?&quot;&quot;:&quot;URL('theme://images\\\\reply_ico.png')&quot;);\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:BBRD_TI\" autosizerow=\"none\"/><Cell col=\"5\" text=\"bind:FS_RGM\" autosizerow=\"none\"/><Cell col=\"6\" text=\"bind:USR_NM\" autosizerow=\"none\"/><Cell col=\"7\" style=\"align:center;\" text=\"bind:LSCHG_DTM\" autosizerow=\"none\"/></Band></Format></Formats>");
            this.div_bbs.addChild(obj.name, obj);

            obj = new Calendar("cal_start", "absolute", null, "89", "100", "21", "217", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("21");
            obj.set_value("20150504");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_visible("false");
            obj.style.set_align("center middle");

            obj = new Static("st_char", "absolute", null, "89", "12", "21", "204", null, this);
            obj.set_taborder("22");
            obj.set_text("~");
            obj.set_visible("false");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_end", "absolute", null, "89", "100", "21", "106", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("23");
            obj.set_value("20150716");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_visible("false");
            obj.style.set_align("center middle");

            obj = new Button("btn_excel", "absolute", null, "89", "89", "21", "15", null, this);
            obj.set_taborder("24");
            obj.set_text("엑셀다운로드");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("14");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 788, 419, this.div_bbs,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("20");
            		p.set_text("Div02");

            	}
            );
            this.div_bbs.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("게시판(목록)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_search.edt_search","value","ds_condition","SEARCH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_search.cbo_search","value","ds_condition","CONDITION");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_4110.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_4110.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        this.menuId = "";
        this.blbdId = "";
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
        	this.div_bbs.grd_bbs.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	this.div_search.edt_search.set_value("");
        	this.div_search.cbo_search.set_index(0);
        	this.div_search.cbo_num.set_index(0);

        	if (application.gv_userTPC == "admin") {
        		this.cal_start.set_value(this.gfn_firstDate(this.gfn_today("yyyyMMdd")));
        		this.cal_end.set_value(this.gfn_today("yyyyMMdd"));
        		this.cal_start.set_visible(true);
        		this.st_char.set_visible(true);
        		this.cal_end.set_visible(true);
        		this.btn_excel.set_visible(true);
        	}

        	try {
        		this.menuId = this.getOwnerFrame().arguments["FORM_ID"];
        	} catch(e) {
        		//부모화면 없을때 테스트
        		this.cbo_temp.set_index(0);
        		this.cbo_temp.set_visible(true);
        		this.menuId = this.cbo_temp.value;
        	}
        	this.fn_getBlbdID(); // 게시판 유형 조회 > 목록조회
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_retrieveBlbdList = function()
        {
        	var sSvcID        = "retrieveBlbdList";
        	var sURL          = "svc::rest/pt/blbd/retrieveBlbdList";
        	var sInDatasets   = "ds_condition=ds_condition ds_pageVO=ds_pageVO";
        	var sOutDatasets  = "ds_bbs=ds_bbs ds_pageVO=ds_pageVO";
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets , sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_getBlbdID = function()
        {
        	var sSvcID        = "getBbldID";
        	var sURL          = "svc::rest/pt/blbd/getBlbdID";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_blbdId=ds_blbdId";
        	var sArgument     = "menuId="+this.menuId;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets , sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_deleteBbs = function()
        {
        	var sSvcID        = "deleteBbs";
        	var sURL          = "svc::rest/portal/deleteBbs";
        	var sInDatasets   = "ds_bbs=ds_copy";
        	var sOutDatasets  = "";
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets , sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) { //에러
        		// trace(">>>>>>>>>>>>>>> svcID ::" +  svcID + ", ErrorCode :: " + ErrorCode + ", ErrorMsg :: " + ErrorMsg);
         	} else {
        		switch(svcID) {
        			case "retrieveBlbdList":
        				this.ds_copy.copyData(this.ds_bbs);
        				this.ds_copy.clearData();

        				if (this.ds_bbs.rowcount > 0) {
        					for (var i = 0; i < this.ds_bbs.rowcount; i++) {
        						if (this.blbdId == "201506090003" || this.blbdId == "201506090006") { // 자료요청, 대납신청
        							this.ds_bbs.setColumn(i, "BBRD_CLOSED_YN", "Y"); // 무조건 비공개
        						}

        						if (this.ds_bbs.getColumn(i, "BBRD_CLOSED_YN") == "Y") { // 비공개인 경우
        							this.ds_bbs.setColumn(i, "BBRD_TI", "(비공개) " + this.ds_bbs.getColumn(i, "BBRD_TI"));
        						}
        					}

        					var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        					var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");

        					this.div_bbs.div_paging.fn_pageSet(sTotal, sPagesize, "div_paging", lsNowPage); // 페이징 설정
        				} else if (this.ds_bbs.rowcount == 0) {
        					this.div_bbs.div_paging.fn_pageSet(0, 0, "div_paging", lsNowPage); // 페이징 설정
        				}
        				break;

        			case "deleteBbs":
        				alert("삭제되었습니다.");
        				this.fn_paging(1);
        				break;

        			case "getBbldID":
        				this.blbdId = this.ds_blbdId.getColumn(0, "BLBD_ID");

        				/* 작성 제한 게시판 */
        				// 201506090001 eSCM공지사항
        				// 201506090002 자료실
        				// 201506090005 계약정보 자료실
        				if ((this.blbdId == '201506090001' || this.blbdId == '201506090002' || this.blbdId == '201506090005') && application.gv_userType != '99') {
        					this.btn_write.set_visible(false);
        				} else {
        					this.btn_write.set_visible(true);
        				}

        				if (this.blbdId == '202107010001') {
        					// 202107010001 판촉사원파견약정서관리(전자계약)
        					this.div_bbs.grd_bbs.set_formatid("basic");
        					this.fn_checkBranch(); // 직매장여부 체크
        				}
        				/*
        				if (this.blbdId == '201506090009' && application.gv_userType == '99') {
        					this.cal_start.set_visible(false);
        					this.st_char.set_visible(false);
        					this.cal_end.set_visible(false);
        					this.btn_excel.set_visible(false);
        				}
        				*/
        				this.ds_condition.setColumn(0, "BLBD_ID", this.blbdId);
        				this.btn_search.click();
        				break;
        				
        			case "branchCheck":
        				if (application.gv_userType == "03" && this.ds_authBranch.getColumn(0, "AUTH_CHECK") != "Y") {
        					 alert("하나로유통 직매장만 사용 가능한 메뉴 입니다. ");
        					 this.set_enable(false);
        			
        				}
        				break;
        		}
         	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.btn_onclick = function(obj,e)
        {
        	switch(obj.name) {
        		case "btn_search":
        			this.fn_paging(1);
        			break;

        		case "btn_write":
        			this.fn_openBbsWrite();
        			break;

        		case "btn_delete":
        			this.ds_copy.clearData();
        			for (var i = 0; i < this.ds_bbs.rowcount; i++) {
        				if (this.ds_bbs.getColumn(i, "ISCHECKED") == 1) {
        					this.ds_copy.addRow();
        					this.ds_copy.copyRow(this.ds_copy.rowposition, this.ds_bbs, i);
        				}
        			}

        			if (this.ds_copy.rowcount > 0) {
        				this.fn_deleteBbs();
        			} else {
        				alert("선택해주세요.");
        			}
        			break;
        			
        		case "btn_excel" :
        			var fileNm;
        			switch (this.blbdId) {
        				case "201506090002" : fileNm = "자료실.xls"; break;					// 자료실
        				case "201506090003" : fileNm = "자료요청.xls"; break;					// 자료요청
        				case "201506090004" : fileNm = "Voc(고객의소리).xls"; break;		// Voc 고객의 소리
        				case "201506090005" : fileNm = "계약상담.xls"; break;					// 계약상담
        				case "201506090006" : fileNm = "대납신청.xls"; break;					// 대납신청
        				case "201506090009" : fileNm = "일대일상담게시판.xls"; break;		// 1:1 상담게시판
        				default : alert("이 게시판은 엑셀 다운로드를 지원하지 않습니다."); return;
        			}

        			if (this.ds_bbs.rowcount < 1) {
        				alert("조회내용이 없습니다.");
        				return;
        			}

        			var params = "BLBD_ID=" + this.blbdId
        						+ "&STARTDT="+this.cal_start.value
        						+ "&ENDDT=" +this.cal_end.value
        						+ "&FILENAME=" + fileNm;

        			excelDownHandler(application.gv_serverAdmin_url+"rest/excel/blbd/retrieveVocListExcel?"+params, this);
        			break;
        	}
        }

        this.grd_oncellclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		return;
        	}

        	var objDs = this.objects[obj.binddataset];

        	if (objDs.getColumn(e.row, "BBRD_CLOSED_YN") == "Y" && application.gv_userType != "99") { // 비공개인 경우

        		var auth = this.gfn_isNull(objDs.getColumn(e.row, "PRET_BBRD_ID")) // 부모게시물ID
        				? objDs.getColumn(e.row, "FS_RGM")       // 작성자ID
        				: objDs.getColumn(e.row, "PRET_FS_RGM"); // [답글] 부모글 작성자ID

        		if (application.gv_userId != auth) {
        			switch (this.blbdId) {
        				case "201506090003": alert("해당글은 자료 요청자만 확인할 수 있습니다."); break;
        				case "201506090006": alert("해당글은 대납 신청자만 확인할 수 있습니다."); break;
        				default            : alert("해당글은 작성자만 확인할 수 있습니다.");
        			}
        			return; // 조회불가
        		}
        	}

        	this.fn_openBbrd(e.row); // 조회
        }

        this.div_search_edt_search_onkeydown = function(obj,e)
        {
        	if (e.keycode == '13') {
        		this.div_search.edt_search.updateToDataset();
        		this.btn_search.click();
        	}
        }

        //부모화면 없을때 단위 테스트용
        this.cboTemp_onitemchanged = function(obj,e)
        {
        	this.menuId = this.cbo_temp.value;
        	this.fn_getBlbdID();
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_openBbrd = function(nRow)
        {
        	var oArg = {menuId:this.menuId, blbdId:this.ds_bbs.getColumn(nRow, "BLBD_ID"), bbrdId:this.ds_bbs.getColumn(nRow, "BBRD_ID")};
        	var sOption = "autosize=true, title=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("OMG_DS_SC_4111", "OMG.PT::OMG_DS_SC_4111.xfdl", oArg, sOption, sPopupCallBack);
        	//this.gfn_openPopup("OMG_DS_SC_4111", "POPUP::N1.xfdl", oArg, sOption, sPopupCallBack);
        }

        this.fn_openBbsWrite = function()
        {
        	var oArg = {blbdId:this.blbdId, bbrdId:null, writeType:0};//writeType : 등록0수정1답글2
        	var sOption = "autosize=true, title=true";
        	var sPopupCallBack = "fn_popupAfter";

        	if (application.gv_userTPC == "admin" && this.blbdId == '201506090001') {
        		// 공지사항&관리자 일 때 나모에디터 작성
        		this.gfn_openPopup("OMG_DS_SC_4114", "OMG.PT::OMG_DS_SC_4114.xfdl", oArg, sOption, sPopupCallBack);
        	} else {
        		this.gfn_openPopup("OMG_DS_SC_4112", "OMG.PT::OMG_DS_SC_4112.xfdl", oArg, sOption, sPopupCallBack);
        	}
        }

        
        this.fn_popupAfter = function(strId,strVal)
        {
        	switch(strId)
        	{
        		case "OMG_DS_SC_4111":
        		case "OMG_DS_SC_4112":
        		case "OMG_DS_SC_4114":
        			this.fn_retrieveBlbdList();
        			break;
        	}

        }

        /************************************************************************************************
         * 페이징처리
        ************************************************************************************************/
        this.fn_paging = function(vPageNum)
        {
        	this.ds_pageVO.clearData();
        	this.ds_bbs.clearData(); //Grid에 Binding된 Dataset명

        	this.ds_pageVO.addRow();

        	var vPageSize   = this.div_search.cbo_num.value; 	//Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        	var vTotalCount = 0; 	//전체건수. 화면조회후 리턴받아 사용

         	this.ds_pageVO.setColumn(0, "CURRENT_PAGE", vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0, "PAGE_SIZE", vPageSize);
         	this.ds_pageVO.setColumn(0, "TOTAL_ROW_COUNT", vTotalCount);

        	var argumentObj = "";

        	lsNowPage = vPageNum;//현재페이지 설정
        	this.fn_retrieveBlbdList();
        }

        this.div_bbs_btn_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_bbs);
        }

        this.div_bbs_Button00_onclick = function(obj,e)
        {
        //	trace(this.ds_bbs.saveXML());
        }

        this.fn_retrieveBlbdAuthList = function()
        {
        	var sSvcID        = "fn_retrieveBlbdAuthList";
        	var sURL          = "svc::rest/pt/blbd/fn_retrieveBlbdAuthList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_blbdId=ds_blbdId";
        	var sArgument     = "menuId="+this.menuId;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets , sOutDatasets , sArgument , sCallbackFunc, sTranType);
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
        	var sOutDatasets  = "ds_authBranch=ds_authBranch"; //
        	var sArgument     =  sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets , sOutDatasets , sArgument , sCallbackFunc, sTranType);

        
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_delete.addEventHandler("onclick", this.btn_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_onclick, this);
            this.btn_write.addEventHandler("onclick", this.btn_onclick, this);
            this.div_search.edt_search.addEventHandler("onkeydown", this.div_search_edt_search_onkeydown, this);
            this.div_search.cbo_num.addEventHandler("onitemchanged", this.div_search_cbo_num_onitemchanged, this);
            this.cbo_temp.addEventHandler("onitemchanged", this.cboTemp_onitemchanged, this);
            this.div_bbs.Button75.addEventHandler("onclick", this.div_bbs_btn_onclick, this);
            this.div_bbs.grd_bbs.addEventHandler("oncellclick", this.grd_oncellclick, this);
            this.cal_start.addEventHandler("onchanged", this.Calendar_onchanged, this);
            this.cal_end.addEventHandler("onchanged", this.Calendar_onchanged, this);
            this.btn_excel.addEventHandler("onclick", this.btn_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_4110.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
