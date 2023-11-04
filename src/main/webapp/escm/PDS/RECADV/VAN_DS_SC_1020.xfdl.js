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
                this.set_name("frm_van_ds_sc_1020");
                this.set_titletext("기간별점포별/상품별정보조회");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dataM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"BY_QT\" type=\"INT\" size=\"256\"/><Column id=\"BY_AM\" type=\"INT\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CURRENT_PAGE\">1</Col><Col id=\"PAGE_SIZE\">10</Col><Col id=\"TOTAL_ROW_COUNT\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dataM_TOT", this);
            obj._setContents("<ColumnInfo><Column id=\"TOT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_QT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("103");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "15", "11", "79", "21", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_by_dt_fr", "absolute", "94", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("45");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("cal_by_dt_to", "absolute", "221", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("46");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("true");
            obj = new Static("Static04", "absolute", "203", "10", "10", "21", null, null, this.div_search);
            obj.set_taborder("47");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_bzplc", "absolute", "352", "10", "105", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_bzplc_innerdataset = new Dataset("cbo_bzplc_innerdataset", this.div_search.cbo_bzplc);
            cbo_bzplc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">사업장명</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">사업장코드</Col></Row></Rows>");
            obj.set_innerdataset(cbo_bzplc_innerdataset);
            obj.set_taborder("48");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("-1");
            obj = new Edit("edt_bzplc", "absolute", "458", "10", "200", "21", null, null, this.div_search);
            obj.set_taborder("49");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup", "absolute", "659", "10", "21", "21", null, null, this.div_search);
            obj.set_taborder("50");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "1", "22", "15", "141", null, null, this);
            obj.set_taborder("102");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "97", "30", "103", "10", null, null, this);
            obj.set_taborder("100");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "135", "62", "103", "10", null, null, this);
            obj.set_taborder("101");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "539", null, this);
            obj.set_taborder("47");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "788", "0", "15", "490", null, null, this);
            obj.set_taborder("58");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("83");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "733", "21", "55", "8", null, null, this);
            obj.set_taborder("104");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("106");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "323", "28", "30", "44", null, null, this);
            obj.set_taborder("108");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "116", null, this);
            obj.set_taborder("109");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("110");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "71", null, null, "15", "0", this);
            obj.set_taborder("111");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("Button10", "absolute", "365", "0", null, "12", "360", null, this.div_list);
            obj.set_taborder("37");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "733", "1", "55", "40", null, null, this.div_list);
            obj.set_taborder("39");
            obj.set_text("40");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "41", null, null, "0", "50", this.div_list);
            obj.set_taborder("55");
            obj.set_binddataset("ds_dataM");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"200\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"사업장코드\"/><Cell col=\"1\" text=\"사업장명\"/><Cell col=\"2\" text=\"수량\"/><Cell col=\"3\" text=\"금액\"/><Cell col=\"4\" text=\"조회시작일\"/><Cell col=\"5\" text=\"조회종료일\"/><Cell col=\"6\" text=\"전체체크\"/><Cell col=\"7\" text=\"거래처\"/></Band><Band id=\"body\"><Cell text=\"bind:BZPLC\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:BZPLCNM\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BY_QT\" mask=\"#,##0\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BY_AM\" mask=\"#,##0\"/><Cell col=\"4\" text=\"bind:SRH_BY_DT_FR\"/><Cell col=\"5\" text=\"bind:SRH_BY_DT_TO\"/><Cell col=\"6\" text=\"bind:SRH_CHK_ALL\"/><Cell col=\"7\" text=\"bind:SRH_TRPL_C\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" style=\"align:center;\" text=\"합   계\"/><Cell col=\"2\" displaytype=\"number\" mask=\"#,##0\"/><Cell col=\"3\" displaytype=\"number\" mask=\"#,##0\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_page", "absolute", null, null, "338", "44", "221", "10", this.div_list);
            obj.set_taborder("56");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_dateInfo", "absolute", null, "20", "200", "20", "5", null, this.div_list);
            obj.set_taborder("57");
            obj.style.set_align("right middle");
            this.div_list.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "684", "25", "44", "14", null, null, this);
            obj.set_taborder("112");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("103");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 978, 503, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("111");
            		p.set_scrollbars("none");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("기간별점포별/상품별정보조회");

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
        this.addIncludeScript("VAN_DS_SC_1020.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1020.xfdl", function() {
        /*##################################################################################
         화면명	: 기간별 점포별/상품별 정보조회
         화면ID  	: VAN_DS_SC_1020
         작성자 	: swha
        ####################################################################################*/
        //include "lib::comLib.xjs";

        
        /* Form Load */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);
        	this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        }

        
        /* Form Init*/
        this.fn_afterFormOnload = function()
        {	
        	//페이지 로딩후 실행부분
        	var toDay = this.gfn_today("yyyyMMdd");
        	this.div_search.cal_by_dt_fr.set_value(this.gfn_firstDate(toDay));
        	this.div_search.cal_by_dt_to.set_value(this.gfn_addDate(toDay, -1));
        	this.div_search.cbo_bzplc.set_index(0);
        	
        	 var searchParam ={
                		form: this,									
                		param:[{									
                			edit: this.div_search.edt_bzplc,
                			fnc: 'btn_search_onclick'
                		}]
                	};
           	this.addEventEnterSearch(searchParam);
        }

        /* Validation Check */
        this.fn_validationCheck = function(){
        	
        	
        	var byDtFr = this.div_search.cal_by_dt_fr.value;
        	var byDtTo = this.div_search.cal_by_dt_to.value;
        	if(this.gfn_isNull(byDtFr)){
        		this.gfn_getMessage("alert", "validation.message.fromDate.no.data");
        		return false;
        	}
        	
        	if(this.gfn_isNull(byDtTo)){
        		this.gfn_getMessage("alert", "validation.message.toDate.no.data");
        		return false;
        	}
        	
        	if(this.gfn_getDiffDay(byDtFr,byDtTo) < 0){
        		this.gfn_getMessage("alert", "validation.message.fromDate.toDate.reConfirm");
        		return false;
        	}else{
        		
        		if(this.gfn_getDiffDay(this.div_search.cal_by_dt_fr.value,this.div_search.cal_by_dt_to.value) > 31){
        			this.alert('기간을 31일 이내로 선택 하세요');
        			return false;
        		}
        	}
        	
        	var preMonth = this.getTodayStr(0, -3, 0);
        	
        	if(byDtFr < preMonth){
        		this.alert("최근 3개월까지 조회 가능합니다.");
        		return false;
        	}
        	
        	return true;
        }

        
        /* Search */
        this.btn_search_onclick = function(obj,e)
        {
        	this.ds_dataM.clearData();
        	if(this.fn_validationCheck())
        		this.fn_paging(1);// 처음조회시 1페이지를 조회한다.
        }

        this.fn_search = function(){
        		var byDtFr = this.gfn_nullToEmpty(this.div_search.cal_by_dt_fr.value);
        		var byDtTo = this.gfn_nullToEmpty(this.div_search.cal_by_dt_to.value);
        		
        		var searchType = this.div_search.cbo_bzplc.value;
        		var searchStr = this.div_search.edt_bzplc.text;
        		
        		//권한사업장 코드
        		var trplC = this.getTrplCode();
        		
        		var params =  "BY_DT_FR=" + byDtFr 
        					+ " BY_DT_TO=" + byDtTo
        					+ " TRPL_C=" + trplC
        					+ " searchType=" + searchType
        					+ " searchStr=" + searchStr;
        					
        					
        		var sSvcID        = "retrievePeriodStoreSum";//통신아이디
        		var sURL          = "svc::/rest/pds/retrievePeriodStoreSum";// 호출할 서버 페이지 주소
        		var sInDatasets   = " ds_pageVO=ds_pageVO";//보내는데이터셋
        		var sOutDatasets  = "ds_dataM=ds_dataM ds_pageVO=ds_pageVO ds_dataM_TOT=ds_dataM_TOT";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = params;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);

        }

        /* Event */
        this.div_list_grd_master_oncellclick = function(obj,e)
        {
        	/*
        	trace("start################################");
        	trace("점포코드 : " + this.ds_dataM.getColumn(this.ds_dataM.rowposition, "BZPLC"));
        	trace("점포명 : " + this.ds_dataM.getColumn(this.ds_dataM.rowposition, "BZPLCNM"));
        	trace("조회시작일 : " + this.ds_dataM.getColumn(this.ds_dataM.rowposition, "SRH_BY_DT_FR"));
        	trace("조회종료일 : " + this.ds_dataM.getColumn(this.ds_dataM.rowposition, "SRH_BY_DT_TO"));
        	trace("end################################");
        	*/
        	var bzplc = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "BZPLC");
        	var bzplcnm = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "BZPLCNM");
        	var srhByDtFr = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "SRH_BY_DT_FR");
        	var srhByDtTo = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "SRH_BY_DT_TO");
        	//권한사업장 코드
        	var trplC = this.getTrplCode();
        	var ds = this.ds_dataM;
        	
        	var tot_am = ds.getColumn(e.row,'BY_AM');
        	var tot_qt = ds.getColumn(e.row,'BY_QT');
        	var oArg = {BZPLC:bzplc, BZPLCNM:bzplcnm, SRH_BY_DT_FR:srhByDtFr, SRH_BY_DT_TO:srhByDtTo, trplC:trplC, TOT_AM:tot_am,TOT_QT:tot_qt};
        	var sOption = "autosize=true ,title=true";
        	var sPopupCallBack = "";
        	this.gfn_openPopup("popId","PDS.RECADV::VAN_DS_SC_1021.xfdl",oArg,sOption,sPopupCallBack);
        	
        }

        
        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg){
        	
        	if(ErrorCode < 0){
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "retrievePeriodStoreSum"){
        			if(this.ds_dataM.rowcount > 0){
        				var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        				var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        				//trace("sTotal : " + sTotal);
        				//trace("sPagesize : " + sPagesize);
        				//trace("lsNowPage: "+lsNowPage);
        				this.div_list.div_page.fn_pageSet(sTotal, sPagesize,"grd_master,div_page",lsNowPage);
        				
        			}else{
        				this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        				this.div_list.div_page.fn_pageSet(0, 0,"grd_master,div_page",lsNowPage);//페이징 설정
        			}
        			var ds = this.ds_dataM_TOT;
        			var tot_qt = ds.getColumn(0,'TOT_QT');
        			var tot_am = ds.getColumn(0,'TOT_AM');
        			this.div_list.grd_master.setCellProperty('Summ',1,'text',tot_qt);
        			this.div_list.grd_master.setCellProperty('Summ',2,'text',tot_am);
        			//최근 업데이트
        			var param = {
        				form: this,
        				table: 'IAS_BY_DD_BZPLC',
        				div: this.div_list.div_dateInfo
        			};
        			//this.getInfoTableDt(param);
        		}
        	}
        };

        /*-----------------------------------------------------------------------------------------*/
        // 페이징처리
        /*-----------------------------------------------------------------------------------------*/
        this.fn_paging = function(vPageNum)
        { 	  	 
        	this.ds_pageVO.clearData();  
        	this.ds_dataM.clearData();     //Grid에 Binding된 Dataset명	
        	
        	this.ds_pageVO.addRow(); 
        	
        	var vPageSize   = 10; 	//Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        	var vTotalCount = 1; 	//전체건수. 화면조회후 리턴받아 사용
         	this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
         	this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);
        	 
        	var argumentObj = "";
        	
        	lsNowPage = vPageNum;//현재페이지 설정 
        	
        	//trace(this.ds_pageVO.saveXML());
        	this.fn_search();
        }

        this.div_list_Button10_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list)
        }

        this.btn_excel_onclick = function(obj,e)
        {
        	var byDtFr = this.gfn_nullToEmpty(this.div_search.cal_by_dt_fr.value);
        	var byDtTo = this.gfn_nullToEmpty(this.div_search.cal_by_dt_to.value);
        	var searchType = this.div_search.cbo_bzplc.value;
        	var searchStr = this.div_search.edt_bzplc.text;
        	
        	//권한사업장 코드
        	var trplC = this.getTrplCode();
        	var fileName = this.getExcelFileName("납품정보_사업장상품별_정보");
        	//권한사업장 코드
        	var trplC = this.getTrplCode();
        	
        	var params =  "BY_DT_FR=" + byDtFr 
        				+ "&BY_DT_TO=" + byDtTo
        				+ "&TRPL_C=" + trplC
        				+ "&fileName=" + fileName
        				+ "&searchType=" + searchType
        				+ "&searchStr=" + searchStr;
        				
        	excelDownHandler(application.gv_server_url+"rest/excel/pds/downloadExcelPeriodStoreSum?"+params, this);
        }

        this.btn_popup00_onclick = function(obj,e){

        	var oArg = {form_id:"frm_van_ds_sc_1020"};
        	var sOption = "autosize=true,title=false";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("popup","PDS.RECADV::VAN_DS_SC_1020_POPUP.xfdl",oArg,sOption,sPopupCallBack);
        };

        this.fn_popupAfter = function(str1,str2){
        	
        	var s = str2.split(',')[0];
        	var t = str2.split(',')[1];
        	if(t=='name') this.div_search.cbo_bzplc.set_index(0);
        	else this.div_search.cbo_bzplc.set_index(1);
        	this.div_search.edt_bzplc.set_value(s);
        };
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.cbo_bzplc.addEventHandler("onitemchanged", this.div_search_cbo_PRGR_C_onitemchanged, this);
            this.div_search.btn_popup.addEventHandler("onclick", this.btn_popup00_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.div_list.Button10.addEventHandler("onclick", this.div_list_Button10_onclick, this);
            this.div_list.grd_master.addEventHandler("oncellclick", this.div_list_grd_master_oncellclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
