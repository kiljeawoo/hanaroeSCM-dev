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
                this.set_name("OMG_DS_SC_8510");
                this.set_classname("OMG_DS_SC_7022");
                this.set_titletext("사업장/상품별 재고현황 조회");
                this._setFormPosition(0,0,540,680);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_daily_store", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_detail_store", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_authorityWorkplace", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"NA_MBCO_DSC\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_list", "absolute", "0", "216", "540", "464", null, null, this);
            obj.set_taborder("53");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_listSum", "absolute", "0", "16", "540", "95", null, null, this.div_list);
            obj.set_cssclass("grd_Wf_SumData");
            obj.set_taborder("0");
            obj.set_scrollbars("none");
            obj.set_autofittype("col");
            obj.set_summarytype("top");
            obj.set_binddataset("ds_daily_store");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"120\"/><Column size=\"338\"/></Columns><Rows><Row size=\"47\" band=\"head\"/><Row size=\"47\" band=\"summ\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"재고수량\"/><Cell col=\"2\" cssclass=\"grd_essential\" text=\"재고금액(만원)\"/></Band><Band id=\"summary\"><Cell style=\"align:center middle;color:#ffffffff;color2:#ffffffff;\" text=\"합계\"/><Cell col=\"1\" displaytype=\"number\" expr=\"expr:dataset.getSum('AMOUNT')\"/><Cell col=\"2\" displaytype=\"number\" expr=\"expr:dataset.getSum('QTY')\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_list", "absolute", "0", "111", "540", "353", null, null, this.div_list);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_summarytype("top");
            obj.set_binddataset("ds_daily_store");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"359\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"50\" band=\"head\"/><Row size=\"63\"/><Row size=\"63\"/></Rows><Band id=\"head\"><Cell text=\"사업장코드\"/><Cell col=\"1\" text=\"사업장명\"/><Cell row=\"1\" text=\"재고수량\"/><Cell row=\"1\" col=\"1\" text=\"재고금액(만원)\"/></Band><Band id=\"body\"><Cell style=\"align: ;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:CODE\"/><Cell col=\"1\" style=\"align:left middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:NAME\" wordwrap=\"char\"/><Cell row=\"1\" style=\"align:right middle;\" text=\"bind:AMOUNT\"/><Cell row=\"1\" col=\"1\" style=\"align:right middle;\" text=\"bind:QTY\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_searchControl", "absolute", "0", "0", "540", "16", null, null, this.div_list);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_SearchControlBtn");
            this.div_list.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "0", "540", "216", null, null, this);
            obj.set_taborder("44");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15", "16", "122", "54", null, null, this.div_search);
            obj.getSetter("taborder").set("85");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_search", "absolute", "15", "147", "510", "49", null, null, this.div_search);
            obj.set_taborder("86");
            obj.set_text("조회");
            obj.set_cssclass("btn_WFSA_SearchBtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_authorityWorkplace", "absolute", "39", "78", "486", "54", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("92");
            obj.set_codecolumn("NA_TRPL_C");
            obj.set_datacolumn("CLNTNM");
            obj.set_index("-1");
            obj.set_enable("true");
            obj.set_innerdataset("@ds_authorityWorkplace");
            obj.style.set_itemfont("14 Helvetica");
            obj = new Calendar("cal_start_date", "absolute", "137", "16", "184", "54", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("97");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj = new Calendar("cal_end_date", "absolute", "341", "16", "184", "54", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("98");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj = new Static("Static09", "absolute", "318", "16", "26", "54", null, null, this.div_search);
            obj.getSetter("taborder").set("99");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.div_search.addChild(obj.name, obj);
            obj = new CheckBox("chk_all", "absolute", "7", "78", "31", "54", null, null, this.div_search);
            obj.set_taborder("100");
            obj.set_text("CheckBox00");
            obj.set_cssclass("chk_WF_allSlct");
            obj.set_positionstep("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_detail", "absolute", "562", "0", "540", "690", null, null, this);
            obj.set_taborder("54");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_detail", "absolute", "0", "222", "540", "467", null, null, this.div_detail);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_summarytype("top");
            obj.set_binddataset("ds_detail_store");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"359\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"50\" band=\"head\"/><Row size=\"63\"/><Row size=\"63\"/></Rows><Band id=\"head\"><Cell text=\"상품코드\"/><Cell col=\"1\" text=\"상품명\"/><Cell row=\"1\" text=\"재고수량\"/><Cell row=\"1\" col=\"1\" text=\"재고금액(만원)\"/></Band><Band id=\"body\"><Cell style=\"align: ;\" text=\"bind:CODE\"/><Cell col=\"1\" style=\"align:left middle;\" text=\"bind:NAME\"/><Cell row=\"1\" style=\"align:right middle;\" text=\"bind:AMOUNT\"/><Cell row=\"1\" col=\"1\" style=\"align:right middle;\" text=\"bind:AMOUNTM\"/></Band></Format></Formats>");
            this.div_detail.addChild(obj.name, obj);
            obj = new Grid("grd_detailSum", "absolute", "0", "127", "540", "95", null, null, this.div_detail);
            obj.set_cssclass("grd_Wf_SumData");
            obj.set_taborder("1");
            obj.set_scrollbars("none");
            obj.set_autofittype("col");
            obj.set_summarytype("top");
            obj.set_binddataset("ds_detail_store");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"150\"/><Column size=\"307\"/></Columns><Rows><Row size=\"47\" band=\"head\"/><Row size=\"47\" band=\"summ\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"재고수량\"/><Cell col=\"2\" cssclass=\"grd_essential\" text=\"재고금액(만원)\"/></Band><Band id=\"summary\"><Cell style=\"align:center middle;color:#ffffffff;color2:#ffffffff;\" text=\"합계\"/><Cell col=\"1\" displaytype=\"number\" expr=\"expr:dataset.getSum('AMOUNT')\"/><Cell col=\"2\" displaytype=\"number\" expr=\"expr:dataset.getSum('AMOUNTM')\"/></Band></Format></Formats>");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", "0", "153", "64", null, null, this.div_detail);
            obj.getSetter("taborder").set("2");
            obj.set_text("사업장코드");
            obj.set_cssclass("sta_WF_Label");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "152", "0", "388", "64", null, null, this.div_detail);
            obj.getSetter("taborder").set("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div_detail.addChild(obj.name, obj);
            obj = new Edit("edt_infoCode", "absolute", "156", "5", "369", "54", null, null, this.div_detail);
            obj.set_taborder("4");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "63", "153", "64", null, null, this.div_detail);
            obj.getSetter("taborder").set("5");
            obj.set_text("사업장명");
            obj.set_cssclass("sta_WF_Label");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "152", "63", "388", "64", null, null, this.div_detail);
            obj.getSetter("taborder").set("6");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div_detail.addChild(obj.name, obj);
            obj = new Edit("edt_infoName", "absolute", "156", "68", "369", "54", null, null, this.div_detail);
            obj.set_taborder("7");
            this.div_detail.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 540, 464, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("53");
            		p.set_text("Div01");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 216, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("44");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 690, this.div_detail,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("54");
            		p.set_visible("false");

            	}
            );
            this.div_detail.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 680, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_7022");
            		p.set_titletext("사업장/상품별 재고현황 조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_8510.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_8510.xfdl", function() {
        //include "lib::comLib.xjs";

        var gFunctionName; //권한사업장 값이 변경될때 호출할 함수명

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e);
        	
        	this.div_search.cal_start_date.set_value(this.gfn_firstDate(this.gfn_today("yyyyMMdd")));
        	this.div_search.cal_end_date.set_value(this.gfn_today("YYYYMMdd"));
        	
        	this.div_list.grd_list.set_nodatatext("데이터가 없습니다.");
        	this.div_detail.grd_detail.set_nodatatext("데이터가 없습니다.");
        	
        	var code = "[" + application.gv_glnCode + "] " + application.gv_companyName
        	
        	if(application.gv_mbcoType != 1){
        		this.ds_authorityWorkplace.addRow();
        		this.ds_authorityWorkplace.setColumn(0,"CLNTNM",code)
        		this.div_search.cbo_authorityWorkplace.set_index(0);
        	}else{
        		this.ds_authorityWorkplace.copyData(application.gds_authorityWorkplace);
        		this.div_search.cbo_authorityWorkplace.set_index(0);
        	}
        	var trplC = this.getTrplCodeMobile();
        }

        this.fn_afterFormOnload = function()
        {
        	
        }

        this.search = function()
        {
        	if(this.fn_validationCheck()){
        		var trplC = this.getTrplCodeMobile();
        		var cal_from = this.div_search.cal_start_date.value;
        		var cal_to = this.div_search.cal_end_date.value;
        		var centercode = "";
        		var separator = 1;
        		
        		var params = "start_date="+cal_from
        					 +" end_date="+cal_to
        					 +" TRPL_C="+trplC
        					 +" centercode="+centercode
        					 +" separator="+separator;
        					 
        		trace(">>>>>>> params : " +  params);
        						
        		var sSvcID        = "search";//통신아이디
        		var sURL          = "svc::rest/pds/stock/Stock/retrievePeriodStoreSum";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";
        		var sOutDatasets  = "ds_daily_store=ds_daily_store";
        		var sArgument     = params;// 파라미터
        		var sCallbackFunc = "fn_callback";//콜백
        		var tranType = "U"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        	}
        }

        this.div_search_btn_search_onclick = function(obj,e)
        {
        	this.search();
        }

        this.div_list_grd_list_oncellclick = function(obj,e)
        {
        	var nLeft = 0;
        	this.div_detail.move(nLeft);
        	this.div_detail.bringToFront();
        	this.div_detail.set_visible(true);
        	
        	this.searchDetail();
        	this.gfn_callDetailMenu("div_detail", "사업장/상품별 재고정보 상세", "사업장/상품별 재고정보^^상품/사업장별;재고정보");
        }

        this.searchDetail = function()
        {
        	var trplC = this.getTrplCodeMobile();
        	var cal_from = this.div_search.cal_start_date.value;
        	var cal_to = this.div_search.cal_end_date.value;
        	var centercode = "";
        	var separator = 2;
        	
        	var position = this.ds_daily_store.rowposition;
        	var dtCode = this.ds_daily_store.getColumn(position, "CODE");
        	var dtName = this.ds_daily_store.getColumn(position, "NAME");
        	
        	this.div_detail.edt_infoCode.set_value(dtCode);
        	this.div_detail.edt_infoName.set_value(dtName);
        	
        	var params = "start_date="+cal_from
         				 +" end_date="+cal_to
         				 +" TRPL_C="+trplC
         				 +" centercode="+dtCode
         				 +" separator="+separator;
         				 
         	trace(">>>>>>> params : " +  params);
        	
        	var sSvcID        = "p_search";//통신아이디
        	var sURL          = "svc::rest/pds/stock/Stock/retrievePeriodStoreSum";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_detail_store=ds_detail_store";
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType = "U"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.fn_callback = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", ErrorMsg);
        		return;
        	}else{
        		if(svcID == "search"){
        			
        			trace(this.ds_daily_store.saveXML());						
        			
        			if(this.ds_daily_store.rowcount == 0){				
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");								
        			}else{							
        			}			
        		}else if(svcID == "p_search"){
        			
        			trace(this.ds_detail_store.saveXML());							
        			
        			if(this.ds_detail_store.rowcount == 0){				
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");								
        			}else{							
        			}			
        		}
        	}
        }

        /* Validation Check */
        this.fn_validationCheck = function(){
        	
        	var byDtFr = this.div_search.cal_start_date.value;
        	var byDtTo = this.div_search.cal_end_date.value;
        	if(this.gfn_isNull(byDtFr)){
        		this.gfn_getMessage("alert", "validation.message.fromDate.no.data");
        		return false;
        	}
        	
        	if(this.gfn_isNull(byDtTo)){
        		this.gfn_getMessage("alert", "validation.message.toDate.no.data");
        		return false;
        	}
        	
        	if(this.gfn_getDiffDay(byDtFr,byDtTo) < 0){
        		this.gfn_getMessage("alert", "validation.message.fromData.toDate.confirm");
        		return false;
        	}else{
        		if(this.gfn_getDiffDay(byDtFr,byDtTo) > 31){
        			this.alert('기간을 31일 이내로 선택 하세요');
        			return false;
        		}
        	}
        	
        	return true;
        }

        this.div_list_btn_searchControl_onclick = function(obj,e)
        {
        	this.gfn_mobileSearchDivResize(obj, this.div_search, this.div_list);
        }

        /* 권한사업장 */
        this.div_search_cbo_authorityWorkplace_onitemchanged = function(obj,e)
        {
        	this._callBindFunction(e.postvalue);
        }

        this.setFunctionName = function (sFunctionName) 
        {
        	gFunctionName = sFunctionName;
        }

        this._callBindFunction = function (sVal)
        {
        	if (!this.gfn_isNull(gFunctionName)) 
        	{	
        		try 
        		{
        			this.lookupFunc(gFunctionName).call(sVal);		
        			
        		} catch(e) 
        		{
        		}
        	}
        }
        /*
        this.AuthorityWorkplace_ontimer = function(obj:Form, e:nexacro.TimerEventInfo)
        {
        	if(e.timerid == 0){
        		var nCnt = application.gds_authorityWorkplace.rowcount;
        		if(nCnt >0){
        			this.ds_authorityWorkplace.copyData(application.gds_authorityWorkplace);
        			this.div_search.cbo_authorityWorkplace.set_index(0);
        			this.killTimer(0);
        		}
        	}
        }
        */

        /* 모바일 권한사업장 Combo 체크 */
        this.getTrplCodeMobile = function(combo,chkbox){

        	if(arguments.length != 0 && arguments.length != 2){
        		this.alert('Parameter length only 0 or 2');
        		return;
        	};
        	
        	var trpl_c = '';
        	
        	if(this.isHeadquarters()){ //본사인 경우에는 권한사업장 컴포넌트가 존재
        		var trplCode;
        		var allCheck;
        		try{
        			if(combo) trplCode = combo;
        			else trplCode = this.getAuthComp().combo;
        			if(chkbox) allCheck = this.getAuthComp().check;
        			else allCheck = this.div_search.chk_all;
        		}catch(e){
        			trace('ERROR: 권한사업장 또는 전체 체크박스 컴포넌트가 존재하지 않습니다.');
        			return;
        		}
        		
        		//권한사업장 전체 체크 
        		if(allCheck){
        			if(allCheck.value == true){ //전체 체크시
        				
        				var ds = trplCode.getInnerDataset();
        				var code = '';
        				for(var i=0 ; i<ds.getRowCount();i++){
        					code += ds.getColumn(i, 0) + ',';
        				}
        				if(code.indexOf(',') != -1){
        					code = code.substring(0, code.length-1);
        				}
        				trpl_c = code;
        			}else{
        				trpl_c = trplCode.value;
        			}
        		}
        	}else{ //지사
        		trpl_c = 'undefined';
        	}	
        	return trpl_c;
        };

        //본사 지사 확인(true 본사 / false 지사)
        this.isHeadquarters = function(){
        	return application.gv_mbcoType == 1 ? true : false;
        };

        //본사인 경우만 > 권한사업장 한개씩만 선택(체크박스 숨김)
        this.authChkDisable = function(){
        	
        	if(this.isHeadquarters()){
        		this.getAuthComp().check.set_visible(false);
        	}
        };

        //권한사업장 이벤트 등록
        this.addEventAuth = function(eventName,fnc){
        	
        	var eventName = eventName || 'onitemchanged';
        	var fnc = fnc || this.search;
        	this.getAuthComp().combo.addEventHandler(eventName, fnc, this);
        };

        //권한사업장 컴포넌트 
        this.getAuthComp = function(){

        	var comp = {};
        	comp.div = this.div_search;
        	comp.combo= comp.div.cbo_authorityWorkplace;
        	comp.check= comp.div.chk_all;
        	return comp;
        };
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_authorityWorkplace.addEventHandler("onload", this.ds_authorityWorkplace_onload, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.div_list.grd_list.addEventHandler("oncellclick", this.div_list_grd_list_oncellclick, this);
            this.div_list.btn_searchControl.addEventHandler("onclick", this.div_list_btn_searchControl_onclick, this);
            this.div_search.btn_search.addEventHandler("onclick", this.div_search_btn_search_onclick, this);
            this.div_search.cbo_authorityWorkplace.addEventHandler("onitemchanged", this.div_search_cbo_authorityWorkplace_onitemchanged, this);

        };

        this.loadIncludeScript("OMG_DS_SC_8510.xfdl");

       
    };
}
)();
