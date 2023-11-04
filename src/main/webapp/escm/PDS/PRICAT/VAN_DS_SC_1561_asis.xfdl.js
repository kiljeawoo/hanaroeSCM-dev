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
                this.set_name("VAN_DS_SC_1561");
                this.set_titletext("신규상품 등록내역 조회(신규)");
                this._setFormPosition(0,0,803,756);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_main_req", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RSP_C_CNTN\" type=\"string\" size=\"32\"/><Column id=\"BUYER_ENO\" type=\"string\" size=\"32\"/><Column id=\"NA_C_RQ_NO\" type=\"string\" size=\"32\"/><Column id=\"RES_DT\" type=\"string\" size=\"32\"/><Column id=\"RES_CODE\" type=\"string\" size=\"32\"/><Column id=\"BUYER_NM\" type=\"string\" size=\"32\"/><Column id=\"REQ_DT\" type=\"string\" size=\"32\"/><Column id=\"WRSNM\" type=\"string\" size=\"32\"/><Column id=\"APV_RQ_NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"VAN_C_RQ_NO\" type=\"string\" size=\"32\"/><Column id=\"FSRGMN_ENO\" type=\"string\" size=\"32\"/><Column id=\"RQ_NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"GBN\" type=\"string\" size=\"32\"/><Column id=\"RN\" type=\"string\" size=\"32\"/><Column id=\"FSRGMN_NA_BZPL_NM\" type=\"string\" size=\"32\"/><Column id=\"NA_C_RQ_STSC_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sub_req", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"VAN_C_RQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TOTAL_ROW_COUNT\">0</Col><Col id=\"PAGE_SIZE\">10</Col><Col id=\"CURRENT_PAGE\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sub_req_filter", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"INT\" size=\"256\"/><Column id=\"VAN_C_RQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEAL\" type=\"STRING\" size=\"256\"/><Column id=\"ATCHNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_download", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"SEAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_menu", "absolute", "0", "0", "323", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "160", null, this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("3");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear00", "absolute", null, "0", "53", "21", "118", null, this);
            obj.set_taborder("7");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "104", "15", null, this);
            obj.set_taborder("8");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "68", "100", "21", null, null, this.div_search);
            obj.set_taborder("44");
            obj.set_text("처리 바이어");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_buyerDsc", "absolute", "118", "68", "99", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_buyerDsc_innerdataset = new Dataset("cbo_buyerDsc_innerdataset", this.div_search.cbo_buyerDsc);
            cbo_buyerDsc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">NAME</Col><Col id=\"datacolumn\">바이어명</Col></Row><Row><Col id=\"codecolumn\">ENO</Col><Col id=\"datacolumn\">사번</Col></Row></Rows>");
            obj.set_innerdataset(cbo_buyerDsc_innerdataset);
            obj.set_taborder("45");
            obj.set_value("ENO");
            obj.set_text("사번");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("1");
            obj = new Static("Static02", "absolute", "15", "10", "100", "21", null, null, this.div_search);
            obj.set_taborder("46");
            obj.set_text("신청기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "379", "10", "100", "21", null, null, this.div_search);
            obj.set_taborder("47");
            obj.set_text("상품");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("dt_stdt", "absolute", "118", "10", "99", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("48");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_align("center middle");
            obj = new Static("Static01", "absolute", "379", "39", "100", "21", null, null, this.div_search);
            obj.set_taborder("51");
            obj.set_text("신청업체");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_corpDsc", "absolute", "486", "39", "99", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_corpDsc_innerdataset = new Dataset("cbo_corpDsc_innerdataset", this.div_search.cbo_corpDsc);
            cbo_corpDsc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">GLN</Col><Col id=\"datacolumn\">GLN</Col></Row><Row><Col id=\"codecolumn\">NAME</Col><Col id=\"datacolumn\">업체명</Col></Row><Row><Col id=\"codecolumn\">CORP</Col><Col id=\"datacolumn\">사업자코드</Col></Row></Rows>");
            obj.set_innerdataset(cbo_corpDsc_innerdataset);
            obj.set_taborder("52");
            obj.set_value("GLN");
            obj.set_text("GLN");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj = new Edit("edt_corp", "absolute", "589", "39", "140", "21", null, null, this.div_search);
            obj.set_taborder("53");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("dt_eddt", "absolute", "238", "10", "99", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("54");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_align("center middle");
            obj = new Static("Static04", "absolute", "217", "10", "21", "21", null, null, this.div_search);
            obj.set_taborder("55");
            obj.set_text("~");
            obj.style.set_align("center");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "15", "39", "100", "21", null, null, this.div_search);
            obj.set_taborder("56");
            obj.set_text("신청상태");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_resDsc", "absolute", "118", "39", "120", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_resDsc_innerdataset = new Dataset("cbo_resDsc_innerdataset", this.div_search.cbo_resDsc);
            cbo_resDsc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">all</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">신청</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">승인</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">반려</Col></Row></Rows>");
            obj.set_innerdataset(cbo_resDsc_innerdataset);
            obj.set_taborder("57");
            obj.set_value("all");
            obj.set_text("전체");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj = new Edit("edt_buyer", "absolute", "221", "68", "140", "21", null, null, this.div_search);
            obj.set_taborder("58");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_wrsDsc", "absolute", "486", "10", "99", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_wrsDsc_innerdataset = new Dataset("cbo_wrsDsc_innerdataset", this.div_search.cbo_wrsDsc);
            cbo_wrsDsc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">CODE</Col><Col id=\"datacolumn\">상품코드</Col></Row><Row><Col id=\"codecolumn\">NAME</Col><Col id=\"datacolumn\">상품명</Col></Row></Rows>");
            obj.set_innerdataset(cbo_wrsDsc_innerdataset);
            obj.set_taborder("59");
            obj.set_value("CODE");
            obj.set_text("상품코드");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj = new Edit("edt_wrs", "absolute", "589", "10", "140", "21", null, null, this.div_search);
            obj.set_taborder("60");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "132", null, null, "15", "15", this);
            obj.set_taborder("5");
            obj.set_text("<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<UxFormClipBoard version=\"1.5\">\r\n  <Dataset id=\"ds_pageVO\" firefirstcount=\"0\" firenextcount=\"0\" useclientlayout=\"false\" updatecontrol=\"true\" enableevent=\"true\" loadkeymode=\"keep\" loadfiltermode=\"keep\" reversesubsum=\"false\">\r\n    <ColumnInfo>\r\n      <Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/>\r\n      <Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/>\r\n      <Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/>\r\n    </ColumnInfo>\r\n    <Rows>\r\n      <Row>\r\n        <Col id=\"TOTAL_ROW_COUNT\">0</Col>\r\n        <Col id=\"PAGE_SIZE\">10</Col>\r\n        <Col id=\"CURRENT_PAGE\">1</Col>\r\n      </Row>\r\n    </Rows>\r\n  </Dataset>\r\n</UxFormClipBoard>\r\n");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_main", "absolute", "0", "42", null, "220", "0", null, this.div_list);
            obj.set_taborder("4");
            obj.set_visible("true");
            obj.set_binddataset("ds_main_req");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"54\"/><Column size=\"98\"/><Column size=\"181\"/><Column size=\"90\"/><Column size=\"94\"/><Column size=\"110\"/><Column size=\"87\"/><Column size=\"78\"/><Column size=\"86\"/><Column size=\"83\"/><Column size=\"304\"/><Column size=\"87\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"상품코드\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"신청일\"/><Cell col=\"4\" text=\"신청상태\"/><Cell col=\"5\" text=\"신청업체\"/><Cell col=\"6\" text=\"신청자\"/><Cell col=\"7\" text=\"처리일\"/><Cell col=\"8\" text=\"처리바이어\"/><Cell col=\"9\" text=\"전송결과\"/><Cell col=\"10\" text=\"처리결과\"/><Cell col=\"11\" text=\"상세내용\"/><Cell col=\"12\"/></Band><Band id=\"body\"><Cell text=\"bind:GBN\"/><Cell col=\"1\" text=\"bind:RQ_NA_WRS_C\"/><Cell col=\"2\" text=\"bind:WRSNM\"/><Cell col=\"3\" text=\"bind:REQ_DT\"/><Cell col=\"4\" text=\"bind:NA_C_RQ_STSC_NM\"/><Cell col=\"5\" text=\"bind:FSRGMN_NA_BZPL_NM\"/><Cell col=\"6\" text=\"bind:FSRGMN_ENO\"/><Cell col=\"7\" text=\"bind:RES_DT\"/><Cell col=\"8\" text=\"bind:BUYER_NM\"/><Cell col=\"9\" text=\"bind:RES_CODE\"/><Cell col=\"10\" text=\"bind:RSP_C_CNTN\"/><Cell col=\"11\" displaytype=\"button\" text=\"보기\"/><Cell col=\"12\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_detail", "absolute", "0", "328", null, null, "0", "0", this.div_list);
            obj.set_taborder("5");
            obj.set_binddataset("ds_sub_req_filter");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"198\"/><Column size=\"139\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"첨부서류\"/><Cell col=\"3\" text=\"제출여부\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:SYSTEMFILENAME == null ? &quot;none&quot; : &quot;checkbox&quot;\" edittype=\"expr:SYSTEMFILENAME == null ? &quot;none&quot; : &quot;checkbox&quot;\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:ATCHNAME\"/><Cell col=\"3\" displaytype=\"expr:SYSTEMFILENAME == null ? &quot;normal&quot; : &quot;button&quot;\" text=\"expr:SYSTEMFILENAME == null ? &quot;미첨부&quot; : &quot;다운로드&quot;\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_page", "absolute", "28.55%", "262", "338", "35", null, null, this.div_list);
            obj.set_taborder("6");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_excel01", "absolute", null, "294", "41", "21", "0", null, this.div_list);
            obj.set_taborder("7");
            obj.set_text("엑셀");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("web_downExcelM", "absolute", "78.3%", "10", null, "20", "16.88%", null, this.div_list);
            obj.set_taborder("8");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_toggle00", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_atch_zip", "absolute", "0", "294", "120", "21", null, null, this.div_list);
            obj.set_taborder("10");
            obj.set_text("ZIP 다운로드");
            this.div_list.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 965, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("8");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_text("<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<UxFormClipBoard version=\"1.5\">\r\n  <Dataset id=\"ds_pageVO\" firefirstcount=\"0\" firenextcount=\"0\" useclientlayout=\"false\" updatecontrol=\"true\" enableevent=\"true\" loadkeymode=\"keep\" loadfiltermode=\"keep\" reversesubsum=\"false\">\r\n    <ColumnInfo>\r\n      <Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/>\r\n      <Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/>\r\n      <Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/>\r\n    </ColumnInfo>\r\n    <Rows>\r\n      <Row>\r\n        <Col id=\"TOTAL_ROW_COUNT\">0</Col>\r\n        <Col id=\"PAGE_SIZE\">10</Col>\r\n        <Col id=\"CURRENT_PAGE\">1</Col>\r\n      </Row>\r\n    </Rows>\r\n  </Dataset>\r\n</UxFormClipBoard>\r\n");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 756, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1560");
            		p.set_titletext("신규상품 등록내역 조회(신규)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1561_asis.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1561_asis.xfdl", function() {
        //include "lib::comLib.xjs";
        var lsNowPage;

        this.form_onload = function(obj,e) 
        {
        	if (application.gv_userType == "02") {
        		this.div_auth.set_visible(false);
        	}
        	this.gfn_setInitForm(obj, e); //공통
        };

        this.fn_afterFormOnload = function() //onload
        {
        	//this.div_search.cbo_center_code00.set_value("");
            var today = this.gfn_today('yyyyMMdd');
        	this.div_search.dt_stdt.set_value(this.gfn_addDate(today, -7));	
        	this.div_search.dt_eddt.set_value(today);
        	
        	this.div_list.grd_main.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	this.div_list.grd_detail.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	//그리드클릭 이벤트 등록
        	//this.div_list.grd_main.addEventHandler("oncellclick", this.grd_afterFnc, this);
        }

        //조회버튼
        this.btn_search00_onclick = function(obj,e)
        {
        	this.fn_paging(1); //처음 조회 시 페이지를 확인한다.
        }

        //페이징 처리
        this.fn_paging = function(vPageNum)
        {
        	this.ds_main_req.clearData();     //Grid에 Binding된 Dataset명	
        	this.ds_sub_req.clearData();
        	
         	this.ds_pageVO.clearData();
        	this.ds_pageVO.addRow(); 
        	
        	var vPageSize   = 10; 	//Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        	var vTotalCount = 1; 	//전체건수. 화면조회후 리턴받아 사용
         	this.ds_pageVO.setColumn(0, "CURRENT_PAGE", vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0, "PAGE_SIZE", vPageSize);
         	this.ds_pageVO.setColumn(0, "TOTAL_ROW_COUNT", vTotalCount);
        	
        	lsNowPage = vPageNum;//현재페이지 설정 
        	
        	this.search();
        }

        /* 페이지 숫자 위치 설정*/
        this.div_list_onsize = function(obj,e)
        {
        	var nLeft = (e.cx/2)-(this.div_list.div_page.width/2);
        	this.div_list.div_page.set_left(nLeft);
        }

        //조회
        this.search = function()
        {
        	if (!this.validation()) return false;
        	
        	var trplC = this.getTrplCode();
        	
        	var dt_stdt = this.gfn_nullToEmpty(this.div_search.dt_stdt.value);
        	var dt_eddt = this.gfn_nullToEmpty(this.div_search.dt_eddt.value);
        	var cbo_resDsc = this.gfn_nullToEmpty(this.div_search.cbo_resDsc.value);
         	var cbo_wrsDsc = this.gfn_nullToEmpty(this.div_search.cbo_wrsDsc.value);
         	var edt_wrs = this.gfn_nullToEmpty(this.div_search.edt_wrs.value);
        	var cbo_corpDsc = this.gfn_nullToEmpty(this.div_search.cbo_corpDsc.value);
        	var edt_corp = this.gfn_nullToEmpty(this.div_search.edt_corp.value);
        	var cbo_buyerDsc = this.gfn_nullToEmpty(this.div_search.cbo_buyerDsc.value);
        	var edt_buyer = this.gfn_nullToEmpty(this.div_search.edt_buyer.value);
        	
        	var params = " dt_stdt="+dt_stdt
        					+ " dt_eddt="+dt_eddt
        					+ " cbo_resDsc="+cbo_resDsc
         					+ " cbo_wrsDsc="+cbo_wrsDsc
         					+ " edt_wrs="+edt_wrs
        					+ " cbo_corpDsc="+cbo_corpDsc
        					+ " edt_corp="+edt_corp
        					+ " cbo_buyerDsc="+cbo_buyerDsc
        					+ " edt_buyer="+edt_buyer
        					+ " kindval=1"
        					+ " TRPL_C="+trplC;
        					
        	var sSvcID        = "p_search";//통신아이디
        	var sURL          = "svc::rest/pds/pricat/Product/retrieveReturnNewGoodsbyKornet";// 호출할 서버 페이지 주소
        	var sInDatasets   = "ds_pageVO=ds_pageVO";//보내는데이터셋
        	var sOutDatasets  = "ds_main_req=ds_main_req ds_pageVO=ds_pageVO";
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType 	  = "U"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        // 메인 그리드 클릭 시 디테일 그리드를 조회, 보기 버튼 클릭 시 상세보기 팝업
        this.grd_afterFnc = function(obj,e)
        {
        	if (e.cell == 11) {
        		var GBN = "I";
        		if (this.ds_main_req.getColumn(e.row, "GBN") == "수정") {
        			GBN = "U";
        		}
        		var VAN_C_RQ_NO = this.ds_main_req.getColumn(e.row, "VAN_C_RQ_NO");
        		var FSRGMN_NA_BZPLC = this.ds_main_req.getColumn(e.row, "FSRGMN_NA_BZPLC");
        		var oArg = {rqno:VAN_C_RQ_NO, trplc:FSRGMN_NA_BZPLC, gbn:GBN};
        		var sOption = "autosize=false,width=880,height=550";
        		var sPopupCallBack = "fn_popupAfter";
        		this.gfn_openPopup("popId","PDS.PRICAT::VAN_DS_SC_1561_P01.xfdl",oArg,sOption,sPopupCallBack);
        	} else {
        		var GBN = "I";
        		if (this.ds_main_req.getColumn(e.row, "GBN") == "수정") {
        			GBN = "U";
        		}
        		var rowposition = this.ds_main_req.rowposition;
        		var params = "";
        		params = "VAN_C_RQ_NO="+this.ds_main_req.getColumn(rowposition,"VAN_C_RQ_NO")
        				+" GBN="+GBN
        				+" kindval=2";
        		var sSvcID        = "p_search_sub";//통신아이디
        		var sURL          = "svc::rest/pds/pricat/Product/retrieveReturnNewGoodsbyKornet";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_sub_req=ds_sub_req";
        		var sArgument     = params;// 파라미터
        		var sCallbackFunc = "fn_callback";//콜백
        		var tranType 	  = "U"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        	}
        }

        this.validation = function()
        {
        	return true;
        }

        this.fn_callback = function(svcID,nCD,sMSG)
        {
        	if (nCD < 0) {
        		if (svcID == "p_search_sub") {
        			this.alert("요청내역을 찾을 수 없습니다.");
        		} else {
        			this.gfn_getMessage("alert", sMSG);
        		}
        		return;
        	} else {
        		//페이징 처리 보고
        		if (svcID == "p_search") {
        			var p_sum = 0;
        			if (this.div_list.grd_main.rowcount > 0) {
        				var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        				var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        				
        				this.div_list.div_page.fn_pageSet(sTotal, sPagesize,"grd_main,div_page",lsNowPage);
        								
        				//trace(this.div_list.grd_main.rowcount);
        				p_sum = 100;				
        				//합계대비의 합계  100으로 설정
        				//this.div_list.grd_main.setCellProperty("Summ",3,"text",p_sum);
        				
        				//현재페이지							
        				var sCurrentPage = this.ds_pageVO.getColumn(0, "CURRENT_PAGE")
        			} else {
        				this.div_list.div_page.fn_pageSet(0, 0,"grd_main,div_page",lsNowPage);//페이징 설정				
        				
        // 				this.div_list.grd_main.setCellProperty("Summ",1,"text",0);
        // 				this.div_list.grd_main.setCellProperty("Summ",2,"text",0);
        // 				this.div_list.grd_main.setCellProperty("Summ",3,"text",0);
        				this.div_list.grd_main.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        			}
        		} else if (svcID == "p_search_sub") {
        			var gbn = this.ds_main_req.getColumn(this.ds_main_req.rowposition,"GBN");
        			this.ds_sub_req_filter.clearData();
        			
        			this.fn_addDefaultAtchRow(1);
        			this.fn_addDefaultAtchRow(2);
        			this.fn_addDefaultAtchRow(3);
        			this.fn_addDefaultAtchRow(4);
        			if (gbn == "신청") {
        				//trace("신청-파일목록생성");
        				this.fn_addDefaultAtchRow(8);
        				this.fn_addDefaultAtchRow(9);
        				this.fn_addDefaultAtchRow(10);
        				this.fn_addDefaultAtchRow(11);
        				this.fn_addDefaultAtchRow(12);
        			} else if (gbn == "수정") {
        				//trace("수정-파일목록생성");
        				this.fn_addDefaultAtchRow(5);
        				this.fn_addDefaultAtchRow(6);
        				this.fn_addDefaultAtchRow(7);
        			}
        			
        			for (var i=0; i<this.ds_sub_req.getRowCount(); i++) {
        				var seq = this.ds_sub_req.getColumn(i, "FILE_SEQ");
        				this.fn_setAtchDsRow(seq, i);
        			}
        		}
        	}
        }

        this.fn_addDefaultAtchRow = function(seq)
        {
        	// 1~4 상품이미지(공통), 5~7 기존상품, 8~12 신규상품
        	var seqName;
        	switch(seq) {
        		case 1 :
        			seqName = "대표 이미지";
        			break;
        		case 2 :
        			seqName = "부가 이미지1";
        			break;
        		case 3 :
        			seqName = "부가 이미지2";
        			break;
        		case 4 :
        			seqName = "부가 이미지3";
        			break;
        		case 5 :
        			seqName = "상품정보 변경요청서";
        			break;
        		case 6 :
        			seqName = "거래조건 변경요청서";
        			break;
        		case 7 :
        			seqName = "기타 서류";
        			break;
        		case 8 :
        			seqName = "상품소개서";
        			break;
        		case 9 :
        			seqName = "계약요청품목 제시 가격표";
        			break;
        		case 10 :
        			seqName = "R1 거래 조건표";
        			break;
        		case 11 :
        			seqName = "입접행사 제안서";
        			break;
        		case 12 :
        			seqName = "기타서류";
        			break;
        	}
        	this.ds_sub_req_filter.addRow();
        	var rowpos = this.ds_sub_req_filter.rowposition;
        	
        	this.ds_sub_req_filter.setColumn(rowpos, "CHK", 0);
        	this.ds_sub_req_filter.setColumn(rowpos, "FILE_SEQ", seq);
        	this.ds_sub_req_filter.setColumn(rowpos, "ATCHNAME", seqName);
        }

        this.fn_setAtchDsRow = function(seq,row)
        {
        	for (var i=0; i<this.ds_sub_req_filter.getRowCount(); i++) {
        		var seq2 = this.ds_sub_req_filter.getColumn(i, "FILE_SEQ");
        		if (seq == seq2) {
        			var name = this.ds_sub_req_filter.getColumn(i, "ATCHNAME");
        			this.ds_sub_req_filter.copyRow(i, this.ds_sub_req, row);
        			this.ds_sub_req_filter.setColumn(i, "ATCHNAME", name);
        		}
        	}
        }

        //조회 조건 숨김 여부 이벤트
        this.div_list_btn_toggle00_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        //마스터 엑셀 다운로드
        this.btn_excel_onclick = function(obj,e)
        {
        	this.fn_exceldown(1);
        }
        //디테일 엑셀 다운로드
        this.div_list_btn_excel01_onclick = function(obj,e)
        {
        	this.fn_exceldown(2);
        }

        // this.gfn_callDownload(this.ds_fyn);

        //엑셀다운로드
        this.fn_exceldown = function(val)
        {
        	if (val == 1) {
        		var trplC = this.getTrplCode();
        		
        		var dt_stdt = this.gfn_nullToEmpty(this.div_search.dt_stdt.value);
        		var dt_eddt = this.gfn_nullToEmpty(this.div_search.dt_eddt.value);
        		var cbo_resDsc = this.gfn_nullToEmpty(this.div_search.cbo_resDsc.value);
        		var cbo_wrsDsc = this.gfn_nullToEmpty(this.div_search.cbo_wrsDsc.value);
        		var edt_wrs = this.gfn_nullToEmpty(this.div_search.edt_wrs.value);
        		var cbo_corpDsc = this.gfn_nullToEmpty(this.div_search.cbo_corpDsc.value);
        		var edt_corp = this.gfn_nullToEmpty(this.div_search.edt_corp.value);
        		var cbo_buyerDsc = this.gfn_nullToEmpty(this.div_search.cbo_buyerDsc.value);
        		var edt_buyer = this.gfn_nullToEmpty(this.div_search.edt_buyer.value);
        		
        		var params = "&dt_stdt="+dt_stdt
        						+ "&dt_eddt="+dt_eddt
        						+ "&cbo_resDsc="+cbo_resDsc
        						+ "&cbo_wrsDsc="+cbo_wrsDsc
        						+ "&edt_wrs="+edt_wrs
        						+ "&cbo_corpDsc="+cbo_corpDsc
        						+ "&edt_corp="+edt_corp
        						+ "&cbo_buyerDsc="+cbo_buyerDsc
        						+ "&edt_buyer="+edt_buyer
        						+ "&TRPL_C="+trplC;
        		//this.div_list.web_downExcelM.set_url(application.gv_server_url+"rest/excel/downloadExcelMasterSearchNewGoods?"+params);
        		excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelNewGoodsKornet?"+params, this);
        	} else if (val == 2) {
        		var rowposition = this.ds_main_req.rowposition;
        		var params = "";
        		if(this.div_search.rdo_sep_value.value == "1"){
        			params = "VAN_C="+this.ds_main_req.getColumn(rowposition,"VAN_C_RQ_NO")
        					+"&RQ_TRPL="+this.ds_main_req.getColumn(rowposition,"RQ_NA_WRS_C")
        					+"&gubun="+this.div_search.rdo_sep_value.value;			//구분자
        		}else{
        			params = "VAN_C="+this.ds_main_req.getColumn(rowposition,"NA_C_RQ_NO")
        					+"&gubun="+this.div_search.rdo_sep_value.value;			//구분자
        		}
        		//this.div_list.web_downExcelM.set_url(application.gv_server_url+"rest/excel/downloadExcelDetailSearchNewGoods?"+params);
        		excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelDetailSearchNewGoods?"+params, this);
        	}	
        }

        this.btn_clear00_onclick = function(obj,e)
        {
        	this.reload();
        }

        this.div_list_grd_detail_oncellclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var chk = this.ds_sub_req_filter.getColumn(e.row, "CHK");
        		this.ds_sub_req_filter.setColumn(e.row, "CHK", chk == "0" ? "1" : "0");
        	} else if (e.cell == 3 && e.clickitem == "control") {
        		this.fn_atchDownload(e.row);
        	}
        }

        this.fn_atchDownload = function(row)
        {
        	this.ds_download.clearData();
        	this.ds_download.addRow();
        	this.ds_download.setColumn(0, "SEAL", "reqWrs");
        	this.ds_download.setColumn(0, "CHK", "1");	
        	this.ds_download.setColumn(0, "SYSTEMFILENAME", this.ds_sub_req_filter.getColumn(row, "SYSTEMFILENAME"));
        	this.ds_download.setColumn(0, "ORGFNAME", this.ds_sub_req_filter.getColumn(row, "ORGFNAME"));
        	
        	this.gfn_callDownload(this.ds_download, "CHK", this.ds_sub_req_filter.getColumn(row, "VAN_C_RQ_NO"));
        }

        this.div_list_btn_atch_zip_onclick = function(obj,e)
        {
        	if (!application.confirm('첨부된 모든 파일을 ZIP파일로 다운로드 하시겠습니까?')) {
        		return;
        	}
        	
        	var rowposition = this.ds_main_req.rowposition;
        	if (rowposition > -1) {
        		var existFile = false;
        		for (var i=0; i<this.ds_sub_req_filter.getRowCount(); i++) {
        			if (!this.gfn_isNull(this.ds_sub_req_filter.getColumn(i, "SYSTEMFILENAME"))) {
        				existFile = true;
        				break;
        			}
        		}
        		
        		if (existFile) {
        			var trplC = this.getTrplCode();
        			var GBN = "I";
        			if (this.ds_main_req.getColumn(rowposition, "GBN") == "수정") {
        				GBN = "U";
        			}
        			var param = "TRPL_C=" + trplC
        			 + "&VAN_C_RQ_NO=" + this.ds_main_req.getColumn(rowposition,"VAN_C_RQ_NO")
        			 + "&GBN="+GBN
        			;
        			
        			var _form = this;
        			_form.setWaitCursor();
        			$.fileDownload(application.gv_server_url+"/rest/pds/pricat/Product/downloadZipFile", {
        				successCallback: function (url) {
        					_form.setWaitCursor(false);
        				},
        				failCallback: function (responseHtml, url) {
        					_form.setWaitCursor(false);
        					alert("ZIP파일 다운로드를 실패하였습니다.\n개별 다운로드를 시도해보세요.");
        				},
        				httpMethod: "POST",
        				data: param
        			});
        		} else {
        			alert("다운로드 할 파일이 없습니다.");
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("onsize", this.div_list_onsize, this);
            this.btn_search00.addEventHandler("onclick", this.btn_search00_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_clear00.addEventHandler("onclick", this.btn_clear00_onclick, this);
            this.div_search.dt_stdt.addEventHandler("onchanged", this.Calendar_onchanged, this);
            this.div_search.cbo_corpDsc.addEventHandler("onitemchanged", this.div_search_cbo_displayYn_onitemchanged, this);
            this.div_search.dt_eddt.addEventHandler("onchanged", this.Calendar_onchanged, this);
            this.div_list.grd_main.addEventHandler("oncellclick", this.grd_afterFnc, this);
            this.div_list.grd_detail.addEventHandler("oncellclick", this.div_list_grd_detail_oncellclick, this);
            this.div_list.btn_excel01.addEventHandler("onclick", this.div_list_btn_excel01_onclick, this);
            this.div_list.btn_toggle00.addEventHandler("onclick", this.div_list_btn_toggle00_onclick, this);
            this.div_list.btn_atch_zip.addEventHandler("onclick", this.div_list_btn_atch_zip_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1561_asis.xfdl");
        this.loadPreloadList();
       
    };
}
)();
