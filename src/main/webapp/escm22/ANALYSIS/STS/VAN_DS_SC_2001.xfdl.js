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
                this.set_name("VAN_DS_SC_2001");
                this.set_titletext("납품율분석");
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
            obj._setContents("<ColumnInfo><Column id=\"SL_YM\" type=\"string\" size=\"32\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_QT\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_QT\" type=\"STRING\" size=\"8\"/><Column id=\"BYNG_QT\" type=\"STRING\" size=\"256\"/><Column id=\"RATIO\" type=\"float\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "67", "15", null, this);
            obj.set_taborder("103");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "15", "10", "95", "21", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("배송요청일");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_by_dt_fr", "absolute", "110", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("45");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("cal_by_dt_to", "absolute", "220", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("46");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static04", "absolute", "210", "10", "10", "21", null, null, this.div_search);
            obj.set_taborder("47");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "404", "7", "129", "21", null, null, this.div_search);
            obj.set_taborder("50");
            obj.set_text("발주대비기준수량");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_ratioDsc", "absolute", "541", "7", "20.48%", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_ratioDsc_innerdataset = new Dataset("rdo_ratioDsc_innerdataset", this.div_search.rdo_ratioDsc);
            rdo_ratioDsc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">매입수량</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">배송수량</Col></Row></Rows>");
            obj.set_innerdataset(rdo_ratioDsc_innerdataset);
            obj.set_taborder("51");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_visible("true");
            obj.set_value("1");
            obj.set_index("0");
            obj = new Static("Static00", "absolute", "15", "37", "103", "21", null, null, this.div_search);
            obj.set_taborder("52");
            obj.set_text("발주처");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_odrpl_na_trpl_c", "absolute", "110", "36", "122", "21", null, null, this.div_search);
            obj.set_taborder("53");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_odrpl_na_trpl_n", "absolute", "234", "36", "169", "21", null, null, this.div_search);
            obj.set_taborder("54");
            obj.set_readonly("true");
            obj.set_cssclass("WF_Essential");
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

            obj = new Div("div_list", "absolute", "0", "95", null, null, "15", "0", this);
            obj.set_taborder("64");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_divResize", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "41", null, null, "0", "24", this.div_list);
            obj.set_taborder("10");
            obj.set_binddataset("ds_dataM");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"83\"/><Column size=\"161\"/><Column size=\"76\"/><Column size=\"158\"/><Column size=\"65\"/><Column size=\"63\"/><Column size=\"64\"/><Column size=\"71\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"년월\"/><Cell col=\"1\" text=\"사업장코드\"/><Cell col=\"2\" text=\"사업장명\"/><Cell col=\"3\" text=\"상품코드\"/><Cell col=\"4\" text=\"상품명\"/><Cell col=\"5\" text=\"발주수량\"/><Cell col=\"6\" text=\"배송수량\"/><Cell col=\"7\" text=\"매입수량\"/><Cell col=\"8\" text=\"납품율(%)\"/></Band><Band id=\"body\"><Cell text=\"bind:SL_YM\"/><Cell col=\"1\" text=\"bind:NA_BZPLC\"/><Cell col=\"2\" text=\"bind:NA_BZPLNM\"/><Cell col=\"3\" text=\"bind:NA_WRS_C\"/><Cell col=\"4\" text=\"bind:WRSNM\"/><Cell col=\"5\" style=\"align:right;\" text=\"bind:ODR_QT\"/><Cell col=\"6\" style=\"align:right;\" text=\"bind:DLV_QT\"/><Cell col=\"7\" text=\"bind:BYNG_QT\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RATIO\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "733", "1", "55", "40", null, null, this.div_list);
            obj.set_taborder("13");
            obj.set_text("40");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_dateInfo", "absolute", null, "20", "200", "20", "5", null, this.div_list);
            obj.set_taborder("14");
            obj.style.set_align("right middle");
            this.div_list.addChild(obj.name, obj);

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

            obj = new Static("Static16", "absolute", "318", "28", "30", "44", null, null, this);
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

            obj = new WebBrowser("web_downExcel", "absolute", "723", "37", "53", "17", null, null, this);
            obj.set_taborder("111");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 67, this.div_search,
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
            		p.set_taborder("64");
            		p.set_scrollbars("none");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("납품율분석");

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
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_2001.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_2001.xfdl", function(exports) {
        /*##################################################################################
         화면명	: 기간별정보
         화면ID  	: VAN_DS_SC_1010
         작성자 	: swha
        ####################################################################################*/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        
        var chkDay;
        /* Form Load */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);
        	this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        }

        /* Form Init*/
        this.form_init = function(obj,e)
        {	
        	///페이지 로딩후 실행부분
        	var toDay = this.gfn_today("yyyyMMdd");
        	
        	//this.div_search.cal_by_dt_fr.set_value(this.gfn_firstDate(toDay));
        	//this.div_search.cal_by_dt_to.set_value(this.gfn_lastDate(toDay));
        	
        	this.div_search.cal_by_dt_fr.set_value(this.gfn_minusDate(toDay,11));
        	this.div_search.cal_by_dt_to.set_value(this.gfn_minusDate(toDay,1));
        	
        	chkDay = Number(this.gfn_minusMonth(toDay, 2));

        	//권한사업장 표시 여부(1:본사)
        	if(application.gv_mbcoType != '1'){
        		this.div_auth.visible = false;
        	}
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
        		
        		if(this.gfn_getDiffDay(byDtFr,byDtTo) > 31){
        			//기간을 31일 이내로 선택해 주세요
        			this.gfn_getMessage("alert", "validation.message.selectDateIn31Day");
        			return false;
        		}
        			
        	}
        	
        	/*
        	if(Number(byDtFr) - Number(chkDay) < 0){
        		this.alert("최근 3개월까지 조회 가능합니다.");
        		return false;
        	}
        	
        	if(Number(byDtTo) - Number(chkDay) < 0){
        		this.alert("최근 3개월까지 조회 가능합니다.");
        		return false;
        	}
        	*/
        	return true;
        }

        
        /* Search */
        this.btn_search_onclick = function(obj,e)
        {
        	this.ds_dataM.clearData();	
        	
        	if(this.fn_validationCheck()){
        	
        		var trplC = this.getTrplCode();
        		
        		var byDtFr   = this.gfn_nullToEmpty(this.div_search.cal_by_dt_fr.value);
        		var byDtTo   = this.gfn_nullToEmpty(this.div_search.cal_by_dt_to.value);		
        		var ratioDsc = this.gfn_nullToEmpty(this.div_search.rdo_ratioDsc.value);		
        		
        		
        		

        		var params =  "date_fr=" + byDtFr 
        					+ " date_to=" + byDtTo					
        					+ " ratioDsc=" + ratioDsc
        					+ " TRPL_C=" + trplC
        					
        					;
        					
        		trace(">>>>>>> params : " +  params);
        					
        		var sSvcID        = "retrieveDlvRatioList";//통신아이디
        		var sURL          = "svc::/rest/analysis/sts/retrieveDlvRatioList";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_dataM=ds_dataM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = params;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        			
        	}
        	
        	
        }

        /* Print */

        /* Excel */

        /* Event */

        

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "retrieveSalesPeriodSumList"){
        		
        			//최근 업데이트
        			var param = {
        				form: this,
        				table: 'IAS_SL_DD_ALL',
        				div: this.div_list.div_dateInfo
        			};
        			this.getInfoTableDt(param);
        				
        			var p_sum = 0;
        			if(this.ds_dataM.rowcount == 0){		
        				//this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        				this.div_list.grd_master.setCellProperty("Summ",3,"text",p_sum);
        			}else{		
        				trace(this.div_list.grd_master.rowcount);			
        				p_sum = 100;				
        				//합계대비의 합계  100으로 설정
        				this.div_list.grd_master.setCellProperty("Summ",3,"text",p_sum);
        			}
        		}
        	}
        }

        this.div_list_btn_divResize_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.btn_excel_onclick = function(obj,e)
        {
        	var trplC = this.getTrplCode();
        	
        	var date_fr   = this.gfn_nullToEmpty(this.div_search.cal_by_dt_fr.value);
        	var date_to   = this.gfn_nullToEmpty(this.div_search.cal_by_dt_to.value);		
        	var ratioDsc = this.gfn_nullToEmpty(this.div_search.rdo_ratioDsc.value);		
        	
        	var title = '납품율정보_'+this.parent.sNm;
        	title = title.replace(/ /gi, '');
        	var fileName = title + "_" + this.getDate() + ".xls";
        	
        	var params =  "date_fr=" + date_fr 
        				+ "&date_to=" + date_to		
        				+ "&ratioDsc=" + ratioDsc		
        				+ "&TRPL_C=" + trplC
        				+ "&fileName=" + fileName;;
        	
        	trace(">>>>>>> params : " +  params);
        	
        	params = encodeURI(encodeURI(params));
        	
        	//this.web_downExcel.set_url(application.gv_server_url+"rest/excel/downloadExcelSalesPeriodSumList?"+params);
        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelDlvRatioList?"+params, this);
        }

        this.div_list_grd_master_onheadclick = function(obj,e)
        {
        	if(e.cell != 3){ //정렬기능 적용할 컬럼 지정
        		this.gfn_gridSort(obj,e);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_dataM.addEventHandler("onrowposchanged", this.ds_event_priceM_onrowposchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_init, this);
            this.div_search.rdo_ratioDsc.addEventHandler("onitemclick", this.div_search_rdo_ratioDsc_onitemclick, this);
            this.div_search.edt_odrpl_na_trpl_c.addEventHandler("onkeyup", this.div_search_edt_odrpl_na_trpl_c_onkeyup, this);
            this.div_search.edt_odrpl_na_trpl_n.addEventHandler("onkeyup", this.div_search_edt_odrpl_na_trpl_n_onkeyup, this);
            this.div_list.btn_divResize.addEventHandler("onclick", this.div_list_btn_divResize_onclick, this);
            this.div_list.grd_master.addEventHandler("oncellclick", this.fn_grid01_search, this);
            this.div_list.grd_master.addEventHandler("onheadclick", this.div_list_grd_master_onheadclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_2001.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
