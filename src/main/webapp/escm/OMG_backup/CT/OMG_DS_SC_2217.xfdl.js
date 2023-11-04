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
                this.set_name("OMG_DS_SC_2217");
                this.set_titletext("전자계약파견약정서관리");
                this.set_enable("true");
                this._setFormPosition(0,0,800,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"32\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC\" type=\"STRING\" size=\"200\"/><Column id=\"BZPLNM\" type=\"STRING\" size=\"9\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_list_excel", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"32\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC\" type=\"STRING\" size=\"200\"/><Column id=\"BZPLNM\" type=\"STRING\" size=\"9\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_list_org", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"32\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC\" type=\"STRING\" size=\"200\"/><Column id=\"BZPLNM\" type=\"STRING\" size=\"9\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "28", null, "42", "15", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "16", "10", "118", "21", null, null, this.div_search);
            obj.set_taborder("44");
            obj.set_text("사업자 번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new MaskEdit("edt_bzno", "absolute", "141", "10", "211", "21", null, null, this.div_search);
            obj.set_taborder("46");
            obj.getSetter("lengthunit").set("ascii");
            obj.getSetter("maxlength").set("50");
            obj.set_maskchar("_");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "390", "10", "118", "21", null, null, this.div_search);
            obj.set_taborder("51");
            obj.set_text("GLN");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_gln", "absolute", "483", "10", "211", "21", null, null, this.div_search);
            obj.set_taborder("52");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("7");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "69", null, null, "15", "10", this);
            obj.set_taborder("6");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Button("btn_flag", "absolute", "347", "0", null, "12", "363", null, this.div_list);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_main01", "absolute", "0", "42", null, null, "0", "30", this.div_list);
            obj.set_taborder("12");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_formatid("basic");
            obj._setContents("<Formats><Format id=\"basic\"><Columns><Column size=\"150\" band=\"left\"/><Column size=\"400\"/><Column size=\"150\" band=\"right\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"사업자번호\"/><Cell col=\"1\" text=\"대표 사업장명\"/><Cell col=\"2\" text=\"등록건수\"/></Band><Band id=\"body\"><Cell style=\"background:#ffffffff;background2:#ffffffff;selectbackground:#ffffffff;\" text=\"bind:BIZ_NUMBER\" mask=\"@@@-@@-@@@@@\"/><Cell col=\"1\" text=\"bind:CLNTNM\"/><Cell col=\"2\" text=\"expr:comp.parent.parent.fn_getCnt(BIZ_NUMBER, 'Y')\"/></Band></Format><Format id=\"detail\"><Columns><Column size=\"0\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"400\"/><Column size=\"150\" band=\"right\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"사업자번호\"/><Cell col=\"2\" text=\"관련 사업장코드\"/><Cell col=\"3\" text=\"사업장명\"/><Cell col=\"4\" text=\"등록건수\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" style=\"background:#ffffffff;background2:#ffffffff;\" suppress=\"bind:BIZ_NUMBER\" suppressalign=\"middle\" autosizecol=\"none\"/><Cell col=\"1\" style=\"background:#ffffffff;background2:#ffffffff;selectbackground:#ffffffff;\" text=\"bind:BIZ_NUMBER\" mask=\"@@@-@@-@@@@@\" suppress=\"1\" suppressalign=\"middle,over\" autosizerow=\"none\"/><Cell col=\"2\" text=\"bind:BZPLC\" autosizerow=\"none\"/><Cell col=\"3\" text=\"bind:BZPLNM\" autosizerow=\"none\"/><Cell col=\"4\" text=\"expr:comp.parent.parent.fn_getCnt(BIZ_NUMBER, 'N', CNT)\" autosizerow=\"none\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_swap", "absolute", null, "16", "112", "21", "0", null, this.div_list);
            obj.set_taborder("13");
            obj.set_text("모든 사업장 보기");
            obj.set_cssclass("btn_WF_CRUD");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("sta_result01", "absolute", "0", null, "350", "21", null, "5", this.div_list);
            obj.set_taborder("14");
            obj.set_text("항목을 더블클릭하면 상세내용을 확인하실 수 있습니다.");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("sta_refday", "absolute", null, "16", "300", "21", "129", null, this.div_list);
            obj.set_taborder("15");
            obj.set_text("2021. 12. 30. 현재");
            obj.style.set_align("right middle");
            obj.style.set_font("bold 9 Gulim");
            this.div_list.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("11");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("0");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_excel", "absolute", "0", "513", null, "100", "15", null, this);
            obj.set_taborder("19");
            obj.set_binddataset("ds_list_excel");
            obj.set_formatid("basic");
            obj.set_autofittype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"basic\"><Columns><Column size=\"0\"/><Column size=\"100\"/><Column size=\"207\"/><Column size=\"130\"/><Column size=\"299\"/><Column size=\"90\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" style=\"font:bold 11 arial;linespace:12;\" text=\"사업자번호\"/><Cell col=\"2\" style=\"font:bold 11 arial;linespace:12;\" text=\"대표 사업장명\"/><Cell col=\"3\" style=\"font:bold 11 arial;linespace:12;\" text=\"관련 사업장코드\"/><Cell col=\"4\" style=\"font:bold 11 arial;linespace:12;\" text=\"사업장명\"/><Cell col=\"5\" style=\"font:bold 11 arial;linespace:12;\" text=\"등록건수\"/></Band><Band id=\"body\" style=\"border:1 solid #d6d6d6ff ;\"><Cell displaytype=\"normal\" style=\"background:#ffffffff;background2:#ffffffff;\" suppress=\"bind:BIZ_NUMBER\" suppressalign=\"middle\" autosizecol=\"none\"/><Cell col=\"1\" style=\"background:#ffffffff;background2:#ffffffff;\" text=\"bind:BIZ_NUMBER\" mask=\"@@@-@@-@@@@@\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"2\" style=\"background:#ffffffff;background2:#ffffffff;\" text=\"bind:CLNTNM\" suppress=\"2\" suppressalign=\"middle\"/><Cell col=\"3\" text=\"bind:BZPLC\"/><Cell col=\"4\" text=\"bind:BZPLNM\"/><Cell col=\"5\" style=\"background:#ffffffff;background2:#ffffffff;color:expr:CHIEF_ENO == null ? &quot;#999999FF&quot; : &quot;&quot;;color2:expr:CHIEF_ENO == null ? &quot;#999999FF&quot; : &quot;&quot;;selectcolor:expr:CHIEF_ENO == null ? &quot;#999999FF&quot; : &quot;&quot;;\" text=\"bind:CNT\" suppress=\"3\" suppressalign=\"middle\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 965, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 965, 444, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_text("Div02");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 800, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_5160");
            		p.set_titletext("전자계약파견약정서관리");
            		p.set_enable("true");

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
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_2217.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("OMG_DS_SC_2217.xfdl", "lib::comElt.xjs");
        this.registerScript("OMG_DS_SC_2217.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";
        //include "lib::comElt.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        this.gridMode = "basic";

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        	// 본부회원 메뉴 오픈 시 아래 if문 주석 해제
        // 	if (application.gv_userTPC != "admin") {
        // 		this.gfn_checkEltAuth(obj, "eltCallback"); // 전자계약 권한체크(comElt.xjs)
        // 	} else {
        		/*조회 호출*/
        		//this.btn_search.click(); // 2021년 임시 자료 생성
        // 	}
        }

        this.fn_afterFormOnload = function()
        {
        	// 2021년 결산용
        	this.fn_addList("2908500013", "성남유통센터", "8808983120010", "(주)농협하나로유통 성남점(소매)", "90");
        	this.fn_addList("5388500007", "광주유통센터", "8808983305783", "(주)농협하나로유통 광주점(소매)", "80");
        	this.fn_addList("3508500009", "삼송유통센터(소매)", "8808983324197", "(주)농협하나로유통 삼송점(소매)", "170");
        	this.fn_addList("7618500024", "울산유통센터", "8808983301235", "울산유통센터(소매)", "3");
        	this.fn_addList("5148527844", "달성유통센터", "8808983120218", "(주)농협하나로유통 달성점(소매)", "5");
        	this.fn_addList("5198500383", "양주유통센터", "8808983327662", "양주유통센터(소매)", "30");
        	this.fn_addList("7738500013", "고양유통센터(소매)", "8808983120119", "(주)농협하나로유통 고양점(소매)", "204");
        	this.fn_addList("1248585296", "수원유통센터", "8808983120317", "(주)농협하나로유통 수원점(소매)", "98");
        	this.fn_addList("6448500020", "김해유통센터", "8808983120614", "(주)농협하나로유통 김해점(소매)", "51");
        	this.fn_addList("6948500011", "목포유통센터", "8808983120416", "(주)농협하나로유통 목포점(소매)", "65");
        	this.fn_addList("1668501140", "동탄유통센터", "8808983331041", "(주)농협하나로유통 동탄점(소매)", "15");
        	this.fn_addList("2668500010", "군위유통센터(소매)", "8808983421216", "(주)농협하나로유통 군위점(소매)", "2");
        	this.fn_addList("3368500018", "하나로마트 포항점", "8808983307039", "(주)농협하나로유통 포항점(소매)", "4");
        	this.fn_addList("4488501004", "하나로마트 봉담점", "8808983330242", "(주)농협하나로유통 봉담점", "4");
        	this.fn_addList("8278501075", "하나로마트 양산점", "8808983330327", "(주)농협하나로유통 양산점", "10");
        	this.fn_addList("1058541583", "하나로마트 신촌점", "8808983120140", "(주)농협하나로유통 신촌점(소매)", "2");
        	this.fn_addList("4118521411", "하나로마트 남악점", "8808983320274", "농협하나로마트남악점", "3");
        	this.fn_addList("6098544836", "하나로마트 창원점", "8808983300801", "(주)농협하나로유통 창원점(소매)", "1");
        	this.fn_addList("6098544821", "하나로마트 반림점", "8808983308074", "(주)농협하나로유통 반림점", "5");
        	this.fn_addList("5878500014", "하나로마트 성서점", "8808983120232", "(주)농협하나로유통 성서점", "19");
        	this.fn_addList("6098544802", "하나로마트 남양점", "8808983308081", "(주)농협하나로유통 남양점", "3");
        	this.fn_addList("6098544817", "하나로마트 사파점", "8808983308098", "(주)농협하나로유통 사파점", "2");
        	this.fn_addList("5378500023", "하나로마트 옥동점", "8808983301624", "(주)농협하나로유통 옥동점", "10");
        	this.fn_addList("2288501147", "하나로마트 서대문점", "8808983120157", "(주)농협하나로유통 서대문점", "2");
        	this.fn_addList("1538500112", "하나로마트 세종청사점", "8808983327457", "(주)농협하나로유통 세종청사점", "0");
        	this.fn_addList("7428500611", "하나로마트 청라점", "8808983328515", "(주)농협하나로유통 청라점", "0");
        	this.ds_list_org.copyData(this.ds_list);
        	this.fn_drawGrid();
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

         /*조회버튼 이벤트*/
        this.btn_search_onclick = function(obj,e)
        {
        	return;
        	
        	this.ds_list.clearData();
        	
        	var params = "bzno=" + this.gfn_nullToEmpty(this.div_search.edt_bzno.value)	// 사업자번호 조회값
        			+ " gln=" + this.gfn_nullToEmpty(this.div_search.edt_gln.value);	// GLN 조회값
        	
        	var sSvcID        = "retrieveEltPmiwList";
        	var sURL          = "svc::rest/ct/eltctrw/retrieveEltPmiwList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_list=ds_list";
        	var sArgument     = params;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_registerSvcDS(sSvcID, this.ds_list, false);
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        /*
         * 전자계약 권한체크
         */
        this.eltCallback = function()
        {
        	if (!this.gfn_hasEltAuth("ELT_99")) {
        		this.alert("최고권한 보유자만 사용 가능한 메뉴 입니다.");
        		this.set_enable(false);
        	} else {
        		/*조회 호출*/
        		this.btn_search.click();
        	}
        }

         /*팝업호출확인하기*/
        this.fn_popupAfter = function(strId,strVal)
        {
        }

         /*상단 전체 선택/해제 체크박스 및 컬럼 정렬 이벤트*/
        this.div_list_grd_main01_onheadclick = function(obj,e)
        {
        	/*
        	if (this.gridMode == "basic") {
        		if (e.cell == 0) {
        			this.gfn_setGridCheckAll(obj,e);
        		} else {
        			this.gfn_gridSort(obj, e);
        		}
        	}
        	*/
        }

         /*콜백메소드*/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	this.gfn_svcDsToggle(svcID, true);
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        	 	if (svcID == "retrieveEltPmiwList") {
        			this.fn_addList("7428500611", "하나로마트 청라점", "8808983328515", "하나로마트 청라점", "0");
        			this.fn_addList("1538500112", "하나로마트 세종청사점", "8808990666402", "하나로마트 세종청사점", "0");
        	 	
        			this.ds_list_org.copyData(this.ds_list);
        			this.fn_drawGrid();
        	 	}
        	 }
        }

        this.fn_addList = function(bzno,clntnm,bzplc,bzplnm,val)
        {
        	var row = this.ds_list.addRow();
        	this.ds_list.setColumn(row, "BIZ_NUMBER", bzno);
        	this.ds_list.setColumn(row, "CLNTNM", clntnm);
        	this.ds_list.setColumn(row, "BZPLC", bzplc);
        	this.ds_list.setColumn(row, "BZPLNM", bzplnm);
        	this.ds_list.setColumn(row, "CNT", val);
        }

        this.list_empty_check = function(isEmpty) {
        	this.btn_excel.set_enable(!isEmpty);
        	if (isEmpty) {
        		this.div_list.grd_main01.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	}
        }

        this.btn_flag_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.div_list_grd_main01_oncellclick = function(obj,e)
        {
        	if (this.ds_list.getColumn(this.ds_list.rowposition, "CNT") == "0") {
        		this.alert("등록건수가 없습니다.");
        		return;
        	}
        	var bzno = this.ds_list.getColumn(this.ds_list.rowposition, "BIZ_NUMBER");
        	var clntnm = this.ds_list.getColumn(this.ds_list.rowposition, "CLNTNM");
        	if (this.gridMode == "detail") {
        		var gln = this.ds_list.getColumn(this.ds_list.rowposition, "BZPLC");
        		clntnm = this.ds_list.getColumn(this.ds_list.rowposition, "BZPLNM");
        	}
        	
        	var oArg = {bzno:bzno, gln:gln, clntnm:clntnm};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("detailPop", "OMG.CT::OMG_DS_SC_2217_P01.xfdl", oArg, sOption, sPopupCallBack);
        }

        this.div_list_btn_swap_onclick = function(obj,e)
        {
        	if (this.gridMode == "basic") {
        		this.gridMode = "detail";
        	} else {
        		this.gridMode = "basic";
        	}
        	this.fn_drawGrid();
        }

        this.fn_drawGrid = function()
        {
        	var sExpr = ""; 
        	if (this.gridMode == "detail") {
        		this.div_list.btn_swap.set_text("대표 사업장 보기");
        	} else {
        		this.div_list.btn_swap.set_text("모든 사업장 보기");
        		sExpr = "rowidx==dataset.findRowExpr(\"BIZ_NUMBER=='\" + BIZ_NUMBER + \"'\")";
        		this.list_empty_check(this.ds_list.rowcount == 0);
        	}
        	this.div_list.grd_main01.set_formatid(this.gridMode);
        	this.ds_list.filter(sExpr); 
        }
        // expr:comp.parent.parent.fn_getTotalCnt(BIZ_NUMBER)
        // expr:dataset.getCaseSum('BIZ_NUMBER==\''+BIZ_NUMBER+'\'', 'CNT')

        /**
         * 등록건수 표시(일부 사업자번호는 등록제외 표시 우선)
         * isSum == Y : cnt 필요없음
         * isSum != Y : cnt 필수
         */
        this.fn_getCnt = function(bzno,isSum,cnt)
        {
        	if (bzno == "7428500611" || bzno == "1538500112") {
        		return "등록제외(0건)";
        	} else if (isSum == "Y") {
        		return this.ds_list_org.getCaseSum("BIZ_NUMBER=='" + bzno + "'", "CNT") + " 건";
        	}
        	return cnt + " 건";
        }

        this.btn_excel_onclick = function(obj,e)
        {
        	this.ds_list_excel.copyData(this.ds_list);
        	var today = this.gfn_today("yyyyMMdd");

        	this.exportObj = new ExcelExportObject("Export00", this);
        	this.exportObj.addEventHandler("onsuccess" , this.fn_excelDownload_onsuccess , this);
        	this.exportObj.addEventHandler("onerror", this.fn_excelDownload_onerror, this);

        	this.exportObj.set_exportfilename("EltAgreement"+today);
        	this.exportObj.set_exporturl(application.gv_server_url + "XExportImport");
        	this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_excel, "파견약정서!A1", "", "", "merge", "", "", "", "both", "cellline");
        	this.exportObj.exportData();
        }

        // 엑셀 다운로드 성공
        this.fn_excelDownload_onsuccess = function(obj,e)
        {
        	//trace("excel download : success");
        	this.ds_list_excel.clearData();
        }

        // 엑셀 다운로드 실패
        this.fn_excelDownload_onerror = function(obj,e)
        {
        	//trace("excel download : error");
        }

        this.div_search_onkeydown = function(obj,e)
        {
        	if (e.keycode == '13') {
        		this.btn_search_onclick();
        	}
        }

        this.div_list_sta_refday_onclick = function(obj,e)
        {
        	var result = prompt("변경할 메시지를 입력하세요.", obj.text)
        	obj.set_text(result);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.edt_bzno.addEventHandler("onkeydown", this.div_search_onkeydown, this);
            this.div_search.edt_gln.addEventHandler("onkeydown", this.div_search_onkeydown, this);
            this.div_list.btn_flag.addEventHandler("onclick", this.btn_flag_onclick, this);
            this.div_list.grd_main01.addEventHandler("onheadclick", this.div_list_grd_main01_onheadclick, this);
            this.div_list.grd_main01.addEventHandler("oncelldblclick", this.div_list_grd_main01_oncellclick, this);
            this.div_list.btn_swap.addEventHandler("onclick", this.div_list_btn_swap_onclick, this);
            this.div_list.sta_refday.addEventHandler("onclick", this.div_list_sta_refday_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.grd_excel.addEventHandler("oncellclick", this.div_list_grd_main01_oncellclick, this);
            this.grd_excel.addEventHandler("onheadclick", this.div_list_grd_main01_onheadclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_2217.xfdl");
        this.loadPreloadList();
       
    };
}
)();
