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
                this.set_name("VAN_DS_SC_1592");
                this.set_titletext("온라인 취급상품 조회");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_online", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"PDM_MFTCO\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPL_NATCD\" type=\"STRING\" size=\"256\"/><Column id=\"PD_RGN\" type=\"STRING\" size=\"256\"/><Column id=\"AGLVPD_MFCPD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MTR_AGLVPD_ORG_ORGPL\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_CAP\" type=\"STRING\" size=\"256\"/><Column id=\"UNT_CAP\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_UNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"ADLT_ATTC_REQUIRED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FIR_RG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHG_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_excel", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"PDM_MFTCO\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPL_NATCD\" type=\"STRING\" size=\"256\"/><Column id=\"PD_RGN\" type=\"STRING\" size=\"256\"/><Column id=\"AGLVPD_MFCPD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MTR_AGLVPD_ORG_ORGPL\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_CAP\" type=\"STRING\" size=\"256\"/><Column id=\"UNT_CAP\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_UNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"ADLT_ATTC_REQUIRED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FIR_RG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHG_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0", "0", "397", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel00", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("5");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "26", null, "65", "15", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_00", "absolute", "9", "8", "79", "21", null, null, this.div_search);
            obj.set_taborder("1");
            obj.set_text("상품코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_02", "absolute", "9", "34", "79", "21", null, null, this.div_search);
            obj.set_taborder("8");
            obj.set_text("일자구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_daily_sel", "absolute", "340", "34", "158", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_daily_sel_innerdataset = new Dataset("rdo_daily_sel_innerdataset", this.div_search.rdo_daily_sel);
            rdo_daily_sel_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">등록일</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">변경일</Col></Row></Rows>");
            obj.set_innerdataset(rdo_daily_sel_innerdataset);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Calendar("cal_lschg00", "absolute", "88", "34", "110", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("cal_lschg01", "absolute", "221", "34", "110", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static04", "absolute", "205", "34", "10", "21", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data00", "absolute", "88", "8", "110", "21", null, null, this.div_search);
            obj.set_taborder("3");
            obj.set_cssclass("WF_Essential");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data01", "absolute", "201", "8", "131", "21", null, null, this.div_search);
            obj.set_taborder("4");
            obj.set_cssclass("WF_Essential");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup00", "absolute", "335", "8", "21", "21", null, null, this.div_search);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "90", null, null, "15", "0", this);
            obj.set_taborder("8");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_main00", "absolute", "0", "42", null, null, "0", "44", this.div_list);
            obj.set_taborder("11");
            obj.set_binddataset("ds_online");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"256\"/><Column size=\"95\"/><Column size=\"82\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"상품코드\"/><Cell col=\"1\" text=\"상품명\"/><Cell col=\"2\" text=\"상품단위코드\"/><Cell col=\"3\" text=\"상세\"/><Cell col=\"4\" text=\"등록일시\"/><Cell col=\"5\" text=\"변경일시\"/></Band><Band id=\"body\"><Cell text=\"bind:NA_WRS_C\"/><Cell col=\"1\" text=\"bind:WRSNM\"/><Cell col=\"2\" text=\"bind:WRS_UNT_C\"/><Cell col=\"3\" displaytype=\"button\" text=\"상세보기\"/><Cell col=\"4\" text=\"bind:FIR_RG_DTM\"/><Cell col=\"5\" text=\"bind:LS_CHG_DTM\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_toggle00", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_page", "absolute", "28.55%", null, "338", "44", null, "0", this.div_list);
            obj.set_taborder("13");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "123", null, this);
            obj.set_taborder("9");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_excel", "absolute", "0", "515", null, null, "15", "-109", this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_excel");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"130\"/><Column size=\"124\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"153\"/><Column size=\"173\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"118\"/><Column size=\"161\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell style=\"font:bold 11 arial;linespace:12;\" text=\"상품코드\"/><Cell col=\"1\" style=\"font:bold 11 arial;linespace:12;\" text=\"상품명\"/><Cell col=\"2\" style=\"font:bold 11 arial;linespace:12;\" text=\"생산자/제조원\"/><Cell col=\"3\" style=\"font:bold 11 arial;linespace:12;\" text=\"국가코드\"/><Cell col=\"4\" style=\"font:bold 11 arial;linespace:12;\" text=\"생산지역\"/><Cell col=\"5\" style=\"font:bold 11 arial;linespace:12;\" text=\"원료농축산물원산지\"/><Cell col=\"6\" style=\"font:bold 11 arial;linespace:12;\" text=\"농축산물가공품여부\"/><Cell col=\"7\" style=\"font:bold 11 arial;linespace:12;\" text=\"판매단위총용량\"/><Cell col=\"8\" style=\"font:bold 11 arial;linespace:12;\" text=\"기준용량\"/><Cell col=\"9\" style=\"font:bold 11 arial;linespace:12;\" text=\"상품단위코드\"/><Cell col=\"10\" style=\"font:bold 11 arial;linespace:12;\" text=\"성인인증필수여부\"/><Cell col=\"11\" style=\"font:bold 11 arial;linespace:12;\" text=\"등록일시\"/><Cell col=\"12\" style=\"font:bold 11 arial;linespace:12;\" text=\"변경일시\"/></Band><Band id=\"body\"><Cell style=\"line:1 solid #808080ff ;font:10 arial;selectline:1 solid #808080ff ;\" text=\"bind:NA_WRS_C\"/><Cell col=\"1\" style=\"line:1 solid #808080ff ;font:10 arial;selectline:1 solid #808080ff ;\" text=\"bind:WRSNM\"/><Cell col=\"2\" style=\"line:1 solid #808080ff ;font:10 arial;selectline:1 solid #808080ff ;\" text=\"bind:PDM_MFTCO\"/><Cell col=\"3\" style=\"line:1 solid #808080ff ;font:10 arial;selectline:1 solid #808080ff ;\" text=\"bind:ORGPL_NATCD\"/><Cell col=\"4\" style=\"line:1 solid #808080ff ;font:10 arial;selectline:1 solid #808080ff ;\" text=\"bind:PD_RGN\"/><Cell col=\"5\" style=\"line:1 solid #808080ff ;font:10 arial;selectline:1 solid #808080ff ;\" text=\"bind:MTR_AGLVPD_ORG_ORGPL\"/><Cell col=\"6\" style=\"line:1 solid #808080ff ;font:10 arial;selectline:1 solid #808080ff ;\" text=\"bind:AGLVPD_MFCPD_YN\"/><Cell col=\"7\" style=\"line:1 solid #808080ff ;font:10 arial;selectline:1 solid #808080ff ;\" text=\"bind:TOT_CAP\"/><Cell col=\"8\" style=\"line:1 solid #808080ff ;font:10 arial;selectline:1 solid #808080ff ;\" text=\"bind:UNT_CAP\"/><Cell col=\"9\" style=\"line:1 solid #808080ff ;font:10 arial;selectline:1 solid #808080ff ;\" text=\"bind:WRS_UNT_C\"/><Cell col=\"10\" style=\"line:1 solid #808080ff ;font:10 arial;selectline:1 solid #808080ff ;\" text=\"bind:ADLT_ATTC_REQUIRED_YN\"/><Cell col=\"11\" style=\"line:1 solid #808080ff ;font:10 arial;selectline:1 solid #808080ff ;\" text=\"bind:FIR_RG_DTM\"/><Cell col=\"12\" style=\"line:1 solid #808080ff ;font:10 arial;selectline:1 solid #808080ff ;\" text=\"bind:LS_CHG_DTM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 65, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("7");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("8");
            		p.set_text("Div02");
            		p.set_scrollbars("none");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1510");
            		p.set_titletext("온라인 취급상품 조회");

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
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1592.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1592.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
           this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	var toDay = this.gfn_today("yyyyMMdd");
        	this.chkDay = this.gfn_minusMonth(toDay, 1);

        	this.div_search.cal_lschg00.set_value(this.chkDay);
        	this.div_search.cal_lschg01.set_value(toDay);
        	this.div_list.grd_main00.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));

        	if (application.gv_userType == "02") {
        		this.div_auth.set_visible(false);
        	}
        }

        //조회버튼
        this.btn_search00_onclick = function(obj,e)
        {
        	this.fn_paging(1);
        }

        /* 페이지 숫자 위치 설정*/
        this.div_list_onsize = function(obj,e)
        {	
        	var nLeft = (e.cx/2)-(this.div_list.div_page.width/2);
        	this.div_list.div_page.set_left(nLeft);
        }

        //페이징 처리
        this.fn_paging = function(vPageNum)
        {
        	this.ds_pageVO.clearData();  
        	this.ds_online.clearData();     //Grid에 Binding된 Dataset명	
        	
        	this.ds_pageVO.addRow(); 
        	
        	var vPageSize   = 20; 	//Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        	var vTotalCount = 1; 	//전체건수. 화면조회후 리턴받아 사용
         	this.ds_pageVO.setColumn(0,"CURRENT_PAGE"   , vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0,"PAGE_SIZE"      , vPageSize);
         	this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT", vTotalCount);
        	 
        	var argumentObj = "";
        	
        	lsNowPage = vPageNum;//현재페이지 설정 
        	
        	this.search();
        }

        //조회구간
        this.search = function(type)
        {
        	var trplC = this.getTrplCode();
        	var edt00 = this.gfn_nullToEmpty(this.div_search.edt_data00.value); // 1.상품코드
        	var datesel = this.div_search.rdo_daily_sel.value; // 2.일자구분 radio 코드 값(등록일, 변경일)
        	var date1   = this.gfn_nullToEmpty(this.div_search.cal_lschg00.value); // 3.일자구분 시작일
        	var date2   = this.gfn_nullToEmpty(this.div_search.cal_lschg01.value); // 4.일자구분 종료일

        	// 일자구분 Validation CHECK
        	if (date1 != "" && date2 != "") {
        		if (this.gfn_getDiffDay(this.div_search.cal_lschg00.value, this.div_search.cal_lschg01.value) < 0) {
        			this.alert(this.gfn_getTextMessage('validation.message.fromDate.toDate.reConfirm'));
        			return false;
        		}
        	} else if (date1 != "" && date2 == "") {
        		this.alert("종료일이 설정되지 않았습니다.");
        		return false;
        	} else if(date1 == "" && date2 != "") {
        		this.alert("시작일이 설정되지 않았습니다.");
        		return false;
        	}
        	
        	var sVal = "sto_code="+edt00
        				+" datesel="+datesel
        				+" date1="+date1
        				+" date2="+date2
        				+" TRPL_C="+trplC
        				;

        	// 조회/엑셀 분기
        	var callback = "p_search";
        	var outDs = "ds_pageVO=ds_pageVO ds_online=ds_online";
        	if (this.gfn_nullToEmpty(type) == "excel") {
        		callback = "p_excel";
        		outDs = "ds_excel=ds_online";
        		sVal += " type=excel";
        	}

        	var sSvcID        = callback;												//통신아이디
        	var sURL          = "svc::rest/pds/pricat/Product/retrievePricatOnLineModyWrs";	//호출할 서버 페이지 주소
        	var sInDatasets   = "ds_pageVO=ds_pageVO";									//보내는데이터셋
        	var sOutDatasets  = outDs;				//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = sVal;													//파라미터
        	var sCallbackFunc = "fn_callback";											//콜백
        	var tranType      = "S";													// U:저장/삭제, S:조회
        	
        	//API 호출 
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.fn_callback = function(svcID,nCD,sMSG)
        {
        	if (nCD < 0) {
        		this.gfn_getMessage("alert", sMSG);
        		return;
        	} else {
        		//페이징 처리 보고
        		if (svcID == "p_search") {
        			var p_sum = 0;
        			if (this.div_list.grd_main00.rowcount > 0) {
        				var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        				var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        				
        				this.div_list.div_page.fn_pageSet(sTotal, sPagesize, "grd_main00,div_page", lsNowPage);
        				
        				//현재페이지							
        				var sCurrentPage = this.ds_pageVO.getColumn(0, "CURRENT_PAGE")
        			} else {
        				this.div_list.div_page.fn_pageSet(0, 0, "grd_main00,div_page", lsNowPage);//페이징 설정
        				this.div_list.grd_main00.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        			}
        		} else if (svcID == "p_excel") {
        			if (this.ds_excel.rowcount == 0) {
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			} else if (this.ds_excel.rowcount > 0) {
        				var today = this.gfn_today("yyyyMMdd");

        				this.exportObj = new ExcelExportObject("Export00", this);
        				this.exportObj.addEventHandler("onsuccess" , this.fn_excelDownload_onsuccess , this);
        				this.exportObj.addEventHandler("onerror", this.fn_excelDownload_onerror, this);

        				this.exportObj.set_exportfilename("excelOnline"+today);
        				this.exportObj.set_exporturl(application.gv_server_url + "XExportImport");
        				this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_excel, "Sheet1!A1");
        				this.exportObj.exportData();
        			}
        		}
        	}
        }

        // 엑셀 다운로드 성공
        this.fn_excelDownload_onsuccess = function(obj,e)
        {
        	//trace("excel download : success");
        }

        // 엑셀 다운로드 실패
        this.fn_excelDownload_onerror = function(obj,e)
        {
        	//trace("excel download : error");
        }

        //조회 조건 숨김 여부 이벤트
        this.div_list_btn_toggle00_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        //상품 조회
        this.div_search_btn_popup00_onclick = function(params)
        {
        	if (params) {
        		if (this.gfn_nullToEmpty(this.div_search.edt_data00.value).length > 0 && this.gfn_nullToEmpty(this.div_search.edt_data00.value).length < 7) {
        			this.gfn_getMessage('alert','msg.van_ds_sc_1530.view.wrsc.moredata');
        			return;
        		}
        		if (this.gfn_nullToEmpty(this.div_search.edt_data01.value).length == 1) {
        			this.gfn_getMessage('alert','msg.van_ds_sc_1530.view.wrsnm.moredata');
        			return;
        		}
        	}

        	var code = this.div_search.edt_data00.value;
        	var textname = this.div_search.edt_data01.value;
        	var param = {
        				autoType:params,
        				searchCode:code,
        				searchText:textname
        	};
        	if (typeof params == "boolean") {
        		if (!this.searPopValue(param)) { return };
        	}
        	
        	var oArg = {paramMode:"U", dsArg:this.Dataset00, autoPop:param};
        	var sOption = "autosize=true, titleText=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("src_wrs","POPUP::POPUP_SRC_WRS.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	if (strVal != undefined) {
        		var arrVal = strVal.split(",");
        		
        		if (strId == "src_wrs") {
        			this.div_search.edt_data00.set_value(arrVal[0]);
        			this.div_search.edt_data01.set_value(arrVal[1]);
        		}
        	}
        }

        //엑셀 다운로드 버튼
        this.btn_excel_onclick = function(obj,e)
        {
        	this.search("excel");
        }

        //상품코드 이벤트
        this.div_search_edt_data00_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.div_search_btn_popup00_onclick(true);
        	}
        }

        this.div_list_grd_main00_oncellclick = function(obj,e)
        {
        	if (e.cell == 3) {
        		var wrs = this.ds_online.getColumn(e.row, "NA_WRS_C");
        		//application.amarket = wrs;
        		
        		var menuId = "02009010";
        		if (application.gv_userType == "02") {
        			menuId = "30001004";
        		}
        		this.gfn_OpenMenuId(menuId, wrs);
        		//this.fn_openMenu(menuId, wrs);
        	}
        }

        this.fn_openMenu = function(menuId,paObjList) //26004003
        {
        	var sMenuId = menuId.substr(0, 2);
        	application.afrm_HFrameSet0.set_separatesize("190,*,0");
        	application.afrm_VFrameSet1.set_separatesize("32,*");
        	application.afrm_LeftFrame.form.ds_menu.filter("MENU_LEVEL >= 1 && MENU_ID.substr(0,2)=='"+sMenuId+"' && DISPLAY_YN!='N'");
        	
        	var nRow    = application.afrm_LeftFrame.form.ds_menu.findRow("MENU_ID", menuId);
        	var objGrid = application.afrm_LeftFrame.form.div_menu.grd_menu;
        	
        	var nTopRow      = application.gds_menu.findRow("MENU_ID", sMenuId+"000000");
        	
        	var sLFTitleText = application.gds_menu.getColumn(nTopRow,"MENU_NAME");
        	
        	application.afrm_LeftFrame.form.btn_menuList.set_text(sLFTitleText);
        	
        	//중메뉴의 첫번째 소메뉴 선택
        	var nRow2   = application.afrm_LeftFrame.form.ds_menu.findRow("MENU_ID", menuId.substr(0,5) + '000');
        	objGrid.setTreeStatus(objGrid.getTreeRow(nRow2), true);
        	application.afrm_LeftFrame.form.ds_menu.set_rowposition(nRow);
        	
        	var sMId =application.afrm_LeftFrame.form.ds_menu.getColumn(nRow, "MENU_ID");
        	
        	//해당Grid visible처리
        	application.afrm_LeftFrame.form.div_menu.grd_menu.set_visible(true);
        	application.afrm_LeftFrame.form.div_menu.grd_myInfo.set_visible(false);
        	
        	this.gfn_OpenMenuId(sMId, paObjList);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("onsize", this.div_list_onsize, this);
            this.btn_search00.addEventHandler("onclick", this.btn_search00_onclick, this);
            this.btn_excel00.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.div_search.edt_data00.addEventHandler("onkeydown", this.div_search_edt_data00_onkeydown, this);
            this.div_search.edt_data01.addEventHandler("onkeydown", this.div_search_edt_data01_onkeydown, this);
            this.div_search.btn_popup00.addEventHandler("onclick", this.div_search_btn_popup00_onclick, this);
            this.div_list.grd_main00.addEventHandler("oncellclick", this.div_list_grd_main00_oncellclick, this);
            this.div_list.btn_toggle00.addEventHandler("onclick", this.div_list_btn_toggle00_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1592.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
