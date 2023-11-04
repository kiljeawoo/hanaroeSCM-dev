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
                this.set_name("OMG_DS_SC_6717");
                this.set_titletext("하나로유통사무소변경이력");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_hanaro", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"HST_RG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_HIGH\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"POS\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"APL_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CHIEF_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"WK_DS\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"BLG_NA_BZPLC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_page", this);
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


            
            // UI Components Initialize
            obj = new Div("div_menu", "absolute", "0", "0", "323", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "70", "15", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "15", "11", "97", "21", null, null, this.div_search);
            obj.set_taborder("9");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "104", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static131", "absolute", "205", "10", "10", "21", null, null, this.div_search);
            obj.set_taborder("11");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_to", "absolute", "215", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static05", "absolute", "337", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("13");
            obj.set_text("사무소코드");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_deptid", "absolute", "426", "10", "100", "21", null, null, this.div_search);
            obj.set_taborder("14");
            obj.set_maxlength("30");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "37", "103", "21", null, null, this.div_search);
            obj.set_taborder("15");
            obj.set_text("사업장코드");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_bzplc", "absolute", "104", "37", "140", "21", null, null, this.div_search);
            obj.set_taborder("16");
            obj.set_inputtype("number");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("13");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "547", "9", "103", "21", null, null, this.div_search);
            obj.set_taborder("17");
            obj.set_text("사무소명");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_deptnm", "absolute", "636", "9", "140", "21", null, null, this.div_search);
            obj.set_taborder("18");
            obj.set_maxlength("30");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "337", "37", "103", "21", null, null, this.div_search);
            obj.set_taborder("19");
            obj.set_text("사업자코드");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_bzno", "absolute", "426", "37", "100", "21", null, null, this.div_search);
            obj.set_taborder("20");
            obj.set_inputtype("number");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "98", null, null, "15", "10", this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);
            obj = new Button("btn_toggle00", "absolute", "46.07%", "0", null, "12", "45.94%", null, this.div_list);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_list", "absolute", "0", "47", null, null, "0", "45", this.div_list);
            obj.set_taborder("2");
            obj.set_binddataset("ds_hanaro");
            obj.getSetter("titletext").set("");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"133\"/><Column size=\"77\"/><Column size=\"97\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"77\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"75\"/><Column size=\"300\"/><Column size=\"75\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"처리구분\"/><Cell col=\"1\" text=\"처리일자\"/><Cell col=\"2\" text=\"사무소코드\"/><Cell col=\"3\" text=\"상위사무소코드\"/><Cell col=\"4\" text=\"사무소명\"/><Cell col=\"5\" text=\"사무소유형\"/><Cell col=\"6\" text=\"사업자번호\"/><Cell col=\"7\" text=\"점장사번\"/><Cell col=\"8\" text=\"사용여부\"/><Cell col=\"9\" text=\"대표사업장코드\"/><Cell col=\"10\" text=\"소속사업장코드\"/><Cell col=\"11\" text=\"처리상태\"/><Cell col=\"12\" text=\"수정부분\"/><Cell col=\"13\" text=\"처리자\"/></Band><Band id=\"body\" style=\"selectbackground:EXPR(STATE == 'NEW' ? '#ff9999ff' : STATE == 'MOD' ? '#ffff99ff' : STATE == 'ADD' ? '#99ff99ff' : '#e3f2f7ff');cellbackground:EXPR(STATE == 'NEW' ? '#ff5555ff' : STATE == 'MOD' ? '#ffff55ff' : STATE == 'ADD' ? '#55ff55ff' : '#ffffffff');cellbackground2:EXPR(STATE == 'NEW' ? '#ff5555ff' : STATE == 'MOD' ? '#ffff55ff' : STATE == 'ADD' ? '#55ff55ff' : '#fafafaff');\"><Cell style=\"color:EXPR(WK_DS == 'D' ? '#ff0000ff' : WK_DS == 'U' ? '#0000ffff' : '#000000ff');color2:EXPR(WK_DS == 'D' ? '#ff0000ff' : WK_DS == 'U' ? '#0000ffff' : '#000000ff');selectcolor:EXPR(WK_DS == 'D' ? '#ff0000ff' : WK_DS == 'U' ? '#0000ffff' : '#000000ff');\" text=\"expr:WK_DS == 'D' ? '삭제' : WK_DS == 'U' ? '수정' : '신규'\"/><Cell col=\"1\" text=\"bind:FSRG_DTM\"/><Cell col=\"2\" text=\"bind:DEPT_ID\"/><Cell col=\"3\" style=\"color:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));color2:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));selectcolor:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));\" text=\"bind:DEPT_HIGH\"/><Cell col=\"4\" style=\"color:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));color2:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));selectcolor:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));\" text=\"bind:DEPT_NAME\"/><Cell col=\"5\" style=\"color:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));color2:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));selectcolor:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));\" text=\"bind:DEPT_DSC\"/><Cell col=\"6\" style=\"color:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));color2:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));selectcolor:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));\" text=\"bind:BIZ_NUMBER\"/><Cell col=\"7\" style=\"color:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));color2:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));selectcolor:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));\" text=\"bind:CHIEF_ENO\"/><Cell col=\"8\" style=\"color:EXPR(dataset.parent.fn_chgCellColor(currow, this._col, 'USE_YN'));color2:EXPR(dataset.parent.fn_chgCellColor(currow, this._col, 'USE_YN'));selectcolor:EXPR(dataset.parent.fn_chgCellColor(currow, this._col, 'USE_YN'));\" text=\"expr:USE_YN == 'Y' ? '사용' : '사용안함'\"/><Cell col=\"9\" style=\"color:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));color2:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));selectcolor:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));\" text=\"bind:NA_BZPLC\"/><Cell col=\"10\" style=\"color:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));color2:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));selectcolor:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));\" text=\"bind:BLG_NA_BZPLC\"/><Cell col=\"11\" text=\"bind:APL_DESC\"/><Cell col=\"12\" style=\"align:left middle;\" text=\"expr:dataset.parent.fn_getChgItemName(CHG_CNTN)\"/><Cell col=\"13\" text=\"bind:FS_RGM\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_page01", "absolute", "28.43%", null, "340", "30", null, "10", this.div_list);
            obj.set_taborder("3");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "41", "21", "15", null, this);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "59", null, this);
            obj.set_taborder("4");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 70, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1550");
            		p.set_titletext("하나로유통사무소변경이력");

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
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_6718.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6718.xfdl", function() {
        //include "lib::comLib.xjs";

        var lsNowPage;

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        };

        this.fn_afterFormOnload = function() //onload
        {
        	this.div_list.grd_list.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	var toDay = this.gfn_today("yyyyMMdd");
        	var chkDay = this.gfn_minusMonth(toDay, 1);

        	this.div_search.cal_from.set_value(chkDay);
        	this.div_search.cal_to.set_value(toDay);
        	this.btn_search.click();
        }

        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_paging(1);
        }

        /* 페이징 */
        this.fn_paging = function(vPageNum)
        {
        	var oDs = this.ds_page;
        	var oBindDs = this.ds_hanaro;
        	var vPageSize = 20; //Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        	var vTotalCount = 0; //전체건수. 화면조회후 리턴받아 사용
        		
        	oBindDs.clearData(); //Grid에 Binding된 Dataset명
        	lsNowPage = vPageNum; //현재페이지 설정 
        	
         	this.ds_page.clearData();  
        	this.ds_page.addRow(); 
        	this.ds_page.setColumn(0, "CURRENT_PAGE", vPageNum); //현재 페이지
         	this.ds_page.setColumn(0, "PAGE_SIZE", vPageSize);
         	this.ds_page.setColumn(0, "TOTAL_ROW_COUNT", vTotalCount);
        	
        	this.div_list.div_page01.fn_pageSet(vTotalCount, vPageSize, "grd_list,div_page01", lsNowPage);
        	this.search();
        }

        this.search = function()
        {
        	if (this.fn_dateCheck()) {
        		var calFrom = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        		var calTo = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일
        		var di = this.gfn_nullToEmpty(this.div_search.edt_deptid.value);
        		var dn = this.gfn_nullToEmpty(this.div_search.edt_deptnm.value);
        		var gln = this.gfn_nullToEmpty(this.div_search.edt_bzplc.value);
        		var bz = this.gfn_nullToEmpty(this.div_search.edt_bzno.value);
        		
        		var param = "t=D"
        			 + " cal_from="+calFrom
        			 + " cal_to="+calTo
        			 + " di="+di
        			 + " dn="+dn
        			 + " gln="+gln
        			 + " bz="+bz;

        		var sSvcID        = "p_search";//통신아이디
        		var sURL          = "svc::rest/mg/nh/retrieveHanaroHstList";// 호출할 서버 페이지 주소
        		var sInDatasets   = "ds_page=ds_page";//보내는데이터셋
        		var sOutDatasets  = "ds_hanaro=ds_hanaro ds_page=ds_pageVO";
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var tranType 	  = "S"; // U:저장/삭제, S:조회

        		//API 호출
        		this.gfn_registerSvcDS(sSvcID, this.ds_hanaro, false);
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        	}
        }

        /* Validation Check */
        this.fn_dateCheck = function()
        {
        	var calFrom = this.div_search.cal_from.value;
        	var calTo = this.div_search.cal_to.value;

        	if (this.gfn_isNull(calFrom)) {
        		this.gfn_getMessage("alert", "validation.message.fromDate.no.data");
        		return false;
        	}

        	if (this.gfn_isNull(calTo)) {
        		this.gfn_getMessage("alert", "validation.message.toDate.no.data");
        		return false;
        	}

        	if (this.gfn_getDiffDay(calFrom, calTo) < 0) {
        		this.gfn_getMessage("alert", "validation.message.fromData.toDate.confirm");
        		return false;
        	}
        	return true;
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	this.gfn_svcDsToggle(svcID, true);
        	if (ErrorCode < 0) {
        		if (ErrorCode == "-999") {
        			this.alert(ErrorMsg);
        		} else {
        			this.gfn_getMessage("alert", ErrorMsg);
        		}
        		return;
        	} else {
        		if (svcID == "p_search") {
        			if (this.ds_hanaro.rowcount == 0) {
        				this.div_list.grd_list.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        				this.div_list.div_page01.fn_pageSet(0, 0, "grd_list,div_page01", lsNowPage);
        			} else {
        				var sTotal = this.ds_page.getColumn(0, "TOTAL_ROW_COUNT");
        				var sPagesize = this.ds_page.getColumn(0, "PAGE_SIZE");
        				this.div_list.div_page01.fn_pageSet(sTotal, sPagesize, "grd_list,div_page01", lsNowPage);
        			}
        		}
        	}
        }

        this.div_list_btn_toggle00_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.div_search_onkeydown = function(obj,e)
        {
        	if (e.keycode == "13" && this.gfn_nullToEmpty(obj.value) != "") {
        		this.btn_search.click();
        	}
        }

        /**
         * 수정항목 글자색상 변경
         * expr:dataset.parent.fn_chgCellColor(currow, this._col)
         */
        this.fn_chgCellColor = function(row,col,bind)
        {
        	var state = this.ds_hanaro.getColumn(row, "WK_DS");
        	if (state == "U") {
        		var bindCol;
        		if (bind != undefined) {
        			bindCol = bind;
        		} else {
        			var cell = this.div_list.grd_list.getCellProperty("body", col, "text");
        			bindCol = cell.substr(5);
        		}
        		var chgCol = this.ds_hanaro.getColumn(row, "CHG_CNTN");
        		var reg = new RegExp('\\b(?!_)('+bindCol+')', 'g');
        		if (reg.test(chgCol)) {
        			return "#0000ffff";
        		}
        	}
        	return "#000000ff";
        }

        /**
         * 수정항목 컬렴명 치환
         * expr:dataset.parent.fn_getChgItemName(CHG_CNTN)
         */
        this.fn_getChgItemName = function(str)
        {
        	if (!this.gfn_isNull(str)) {
        		str = str.replace(/\|/g, ", ");
        		str = str.replace("DEPT_ID", "사무소코드");
        		str = str.replace("DEPT_HIGH", "상위사무소코드");
        		str = str.replace("DEPT_DSC", "사무소유형");
        		str = str.replace("DEPT_NAME", "사무소명");
        		str = str.replace("BLG_NA_BZPLC", "소속사업장코드");
        		str = str.replace("NA_BZPLC", "대표사업장코드");
        		str = str.replace("BIZ_NUMBER", "사업자번호");
        		str = str.replace("CHIEF_ENO", "점장사번");
        		str = str.replace("USE_YN", "사용여부");
        		str = str.replace("USER_NAME", "성명");
        		str = str.replace("POS", "직급");
        		str = str.replace("GRADE", "직명");
        	}
        	return str;
        }

        this.btn_excel_onclick = function(obj,e)
        {
        	if (this.fn_dateCheck()) {
        		var calFrom = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        		var calTo = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일
        		var di = this.gfn_nullToEmpty(this.div_search.edt_deptid.value);
        		var dn = this.gfn_nullToEmpty(this.div_search.edt_deptnm.value);
        		var gln = this.gfn_nullToEmpty(this.div_search.edt_bzplc.value);
        		var bz = this.gfn_nullToEmpty(this.div_search.edt_bzno.value);
        		
        		var param = "t=D"
        			 + "&cal_from="+calFrom
        			 + "&cal_to="+calTo
        			 + "&di="+di
        			 + "&dn="+dn
        			 + "&gln="+gln
        			 + "&bz="+bz;
        		
        		var strDownUrl = application.gv_serverAdmin_url+"rest/mg/nh/excelHanaroHstData?" + param;
        		excelDownHandler(strDownUrl, this);
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.edt_deptid.addEventHandler("onkeydown", this.div_search_onkeydown, this);
            this.div_search.edt_bzplc.addEventHandler("onkeydown", this.div_search_onkeydown, this);
            this.div_search.edt_deptnm.addEventHandler("onkeydown", this.div_search_onkeydown, this);
            this.div_search.edt_bzno.addEventHandler("onkeydown", this.div_search_onkeydown, this);
            this.div_list.btn_toggle00.addEventHandler("onclick", this.div_list_btn_toggle00_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6718.xfdl");
        this.loadPreloadList();
       
    };
}
)();
