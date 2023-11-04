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
                this.set_name("VAN_DS_SC_1994");
                this.set_titletext("관심업체 상품 등록");
                this._setFormPosition(0,0,801,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_saveList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHECK_BOX\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_DTCFNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"INTE_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"INTE_TRPL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_saveTrplList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NAME_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_trplWrsList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHECK_BOX\" type=\"STRING\" size=\"256\"/><Column id=\"INTE_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_menu", "absolute", "0", "0", "282", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "786", "0", "15", "490", null, null, this);
            obj.set_taborder("39");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("58");
            obj.set_cssclass("div_WFSA_Searchbg");
            obj.set_applystyletype("cascade,keep");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Combo("cbo_nacode", "absolute", "14.03%", "8", null, "21", "54.21%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.set_innerdataset("@ds_saveTrplList");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME_YN");
            obj.set_displayrowcount("20");

            obj = new Div("div_list", "absolute", "0", "71", null, null, "15", "0", this);
            obj.set_taborder("61");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_save", "absolute", "45.8%", "42", null, null, "8", "0", this.div_list);
            obj.set_taborder("24");
            obj.set_binddataset("ds_saveList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\"/><Column size=\"41\"/><Column size=\"128\"/><Column size=\"89\"/><Column size=\"104\"/><Column size=\"145\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"업체명\"/><Cell col=\"3\" text=\"세분류명\"/><Cell col=\"4\" text=\"상품코드\"/><Cell col=\"5\" text=\"상품명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECK_BOX\"/><Cell col=\"1\" text=\"bind:NO\"/><Cell col=\"2\" text=\"bind:INTE_TRPL_NM\"/><Cell col=\"3\" text=\"bind:WRS_DTCFNM\"/><Cell col=\"4\" text=\"bind:WRS_C\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:WRSNM\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_select", "absolute", "0", "42", null, null, "59.03%", "0", this.div_list);
            obj.set_taborder("25");
            obj.set_binddataset("ds_trplWrsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\"/><Column size=\"120\"/><Column size=\"300\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"상품코드\"/><Cell col=\"2\" text=\"상품명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECK_BOX\"/><Cell col=\"1\" text=\"bind:NA_WRS_C\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:WRSNM\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("sta_select", "absolute", "0", "17", null, "21", "53.94%", null, this.div_list);
            obj.set_taborder("26");
            obj.set_text("선택목록");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("sta_save", "absolute", "45.93%", "17", null, "21", "8.4%", null, this.div_list);
            obj.set_taborder("27");
            obj.set_text("등록목록");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_leftMove", "absolute", "41.98%", "263", "22", "22", null, null, this.div_list);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_ShuttleL");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_rightMove", "absolute", "41.98%", "240", "22", "22", null, null, this.div_list);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_ShuttleR");
            obj.set_tabstop("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_show", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("edt_search", "absolute", "70", "15", "158", "22", null, null, this.div_list);
            obj.set_taborder("32");
            obj.set_readonly("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "273", "15", "49", "22", null, null, this.div_list);
            obj.set_taborder("33");
            obj.set_text("초기화");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("Button01", "absolute", "231", "15", "40", "22", null, null, this.div_list);
            obj.set_taborder("34");
            obj.set_text("검색");
            this.div_list.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "64.29%", "72", null, "42", "22.72%", null, this);
            obj.set_taborder("67");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "116", null, this);
            obj.set_taborder("68");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "39.83%", "311", "10", "42", null, null, this);
            obj.set_taborder("69");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "43.82%", "311", null, "42", "54.93%", null, this);
            obj.set_taborder("70");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("60");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("sta_searchType", "absolute", "1.87%", "41", null, "21", "88.01%", null, this);
            obj.set_taborder("72");
            obj.set_text("관심업체");
            obj.set_cssclass("sta_WFSA_Label");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("58");
            		p.set_cssclass("div_WFSA_Searchbg");
            		p.set_applystyletype("cascade,keep");
            		p.set_scrollbars("none");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("61");
            		p.set_text("Div02");
            		p.set_scrollbars("none");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 801, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("관심업체 상품 등록");

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
        this.addIncludeScript("VAN_DS_SC_1994.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1994.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e){
        	
        	this.gfn_setInitForm(obj, e); //공통
        };

        this.btn_show_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        };

        this.fn_afterFormOnload = function(){ //onload
        	
        	this.div_list.edt_search.set_value('조회후에 필터링 사용가능합니다.');
        	this.div_list.edt_search.set_readonly(true);
        	
        	var param = [this.div_list.grd_select, this.div_list.grd_save];
        	
        	this.ds_trplWrsList.addEventHandler("onload", function(ds, e){
        		if(ds.getRowCount() > 0){
        			this.div_list.edt_search.set_value('');
        			this.div_list.edt_search.set_readonly(false);
        			this.div_list.edt_search.setFocus();
        		}else{
        			this.div_list.edt_search.set_value('조회후에 필터링 사용가능합니다.');
        			this.div_list.edt_search.set_readonly(true);
        		}
        	}, this);	
        	//엔터키 검색 이벤트 등록
        	var searchParam =
        	{
        				form: this,
        				param:[{									
        						edit: this.div_list.edt_search,
        						fnc: 'ds_filter'
        				}]
        	};

        	this.addEventEnterSearch(searchParam);	
        	this.gridCheckboxInit([this.div_list.grd_save]); //체크박스 이벤트 등록	
        	this.div_list.grd_select.set_nodatatext(this.gfn_getTextMessage('msg.van_ds_sc_1850.view.grid.nodata1'));
        	this.div_list.grd_save.set_nodatatext(this.gfn_getTextMessage('msg.van_ds_sc_1850.view.grid.nodata2'));
        	this.gridSortInit(this.div_list.grd_select,[1,2]);
        	this.gridSortInit(this.div_list.grd_save,[1,2]);
        	this.authChkDisable();
        	this.addEventAuth();
        	this.search('init');
        	

        };

        this.divChange = function(obj,e){

        	this.search('div');
        };

        //조회
        this.search = function(trId){

        		if(trId == 'init'){
        		 /// 공급업체 콤보
        			this.fn_retrieveInteTrplList();
        		}else{
        		   // 상품코드
        		   
        		   this.fn_retrieveTrplWrsList();
        		   this.fn_retrieveClsInteWrsList();
        		   
        		}
        	
        };

        //관심업체 콤보
        this.fn_retrieveInteTrplList = function() 
        {
        //var glnCode =this.div_search.cbo_nacode.value;
        	// alert('fn_retrieveInteTrplList');
        	var glnCode = application.gv_glnCode;
        	var params =  "naTrplC=" + glnCode 
           	 ;

        	trace("##params >> " + params);
        	
        	var sSvcID        = "retrieveInteTrplList";
        	var sURL          = "svc::rest/analysis/market/retrieveInteTrplList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_saveTrplList=ds_saveList";	
        	var sArgument     = params;
        	var sCallbackFunc = "fn_callback";
        	var sTranType     = "S"; // 
        	
        	// application.set_usewaitcursor(false);
        	// alert('fn_retrieveUsrConsent');
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /*
          관심업체 상품조회
        */
        this.fn_retrieveTrplWrsList = function() 
        {
        	// alert('fn_retrieveUsrConsentList');
        	
        	var bsnDsc = "sales_price";
        	var naTrplC =  application.gv_glnCode;
        	var inteTrplC =  this.div_search.cbo_nacode.value;
        	
        	var params =  "bsnDsc=" + bsnDsc
        				 + " naTrplC=" + naTrplC
        				 + " inteTrplC=" + inteTrplC
        				   
        				 ;
        				
        	trace("##params >> " + params);
        	
        	var sSvcID        = "retrieveTrplWrsList";
        	var sURL          = "svc::rest/analysis/market/retrieveTrplWrsList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_trplWrsList=ds_trplWrsList";	
        	var sArgument     = params;
        	var sCallbackFunc = "fn_callback";
        	var sTranType     = "S"; // 
        	
        	// application.set_usewaitcursor(false);
        	// alert('fn_retrieveUsrConsent');
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /*
          등록 관심 상품조회
        */
        this.fn_retrieveClsInteWrsList = function() 
        {
        	// alert('fn_retrieveUsrConsentList');
        	
        	var bsnDsc = "sales_price";
        	var naTrplC =  application.gv_glnCode; // 관심상품 조회는 로그인 업체코드로 조회
        	var inteTrplC =  this.div_search.cbo_nacode.value;
        	
        	var params =  "bsnDsc=" + bsnDsc
        				 + " naTrplC=" + naTrplC
        				 + " inteTrplC=" + inteTrplC
        				   
        				 ;

        	trace("##params >> " + params);
        	
        	var sSvcID        = "retrieveClsInteWrsList";
        	var sURL          = "svc::rest/analysis/market/retrieveClsInteWrsList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_saveList=ds_saveList";	
        	var sArgument     = params;
        	var sCallbackFunc = "fn_callback";
        	var sTranType     = "S"; // 
        	
        	// application.set_usewaitcursor(false);
        	// alert('fn_retrieveUsrConsent');
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        //설정저장
        this.btn_save = function(sqlType,isOthersWrs){

        	var ds = "";
        	var confirmMsg = '';
        	var msgOthersWrs = '';

        	if(isOthersWrs == true) {
        		msgOthersWrs = ' 타사상품이 선택되었습니다. ';
        	}else {
        	    msgOthersWrs = '';
        	
        	}
        	
        	if(sqlType == 'INS'){ 
        		confirmMsg = 'msg.isInsert';
        		ds = 'ds_trplWrsList=ds_trplWrsList'; 
        	}else if(sqlType == 'DEL'){
        		confirmMsg = 'msg.isDelete';
        		ds = 'ds_saveList=ds_saveList'; 
        	}
        	//	trace(ds);
        	if(!this.confirm( msgOthersWrs + this.gfn_getTextMessage(confirmMsg))){
        		return;
        	}
        	
        	//파라미터
        	var analysis = '2';
        	
        	//트랜젝션 아이디
        	var trId = sqlType;

        	this.gfn_callService(
        						trId, 
        						"svc::rest/analysis/market/saveInteTrplWrsList",
        						ds, 
        						"", 
        						"analysis="+analysis+" sqlType="+sqlType, 
        						"fn_callback",
        						'S'
        						);
        };

        //저장,삭제

        var isOthersWrs = false;
        				
        this.btn_moveData_onclick = function(obj,e){

        	var trpl_c = this.getTrplCode();
        	var my_trpl_c = application.gv_glnCode;	
        	var isRowChecked = '0';
        	var isOthersWrs = false;
        	
        	trace("application.gv_userAuth "  + application.gv_userAuth);
        	
        	if (application.gv_userAuth.indexOf("1") < 0) { // 빌링권한이 없는 경우
        		alert("빌링권한이 있는 사용자만 저장할 수 있습니다.");
        		return;
        	}
        	
        	if(this.isHeadquarters()){ //상품코드
        		if(trpl_c != my_trpl_c){
        			this.alert(this.gfn_getTextMessage('msg.van_ds_sc_1850.alert.save1'));
        			return;
        		}
        	}
        	
        	var sqlType = '';
        	
        	if(obj.id == 'btn_rightMove') {
        		sqlType = 'INS';
        	} else {
        		sqlType = 'DEL';
        	}

        	if(sqlType == 'INS'){		
        		
        		var saveCnt = this.ds_trplWrsList.getRowCount();
        		var selectCnt = this.checkIndexCnt(this.div_list.grd_select);
        		
        		if(selectCnt == 0){
        			this.alert(this.gfn_getTextMessage('msg.van_ds_sc_1850.alert.save3'));
        			return;
        		}

        	}else{
        				
        		var curRowPos = -1;
        		
        	    for(var i =0; i < this.ds_saveList.getRowCount(); i++){
        	    
        	        //curRowPos = this.ds_saveList.rowposition;
        	        isRowChecked =  this.ds_saveList.getColumn(i, 'CHECK_BOX');

        	        if(isRowChecked == '1') {

        				var curTrplC =  this.ds_saveList.getColumn(i, 'INTE_TRPL_C');

                        // 권한사업장과 상품 제조처 코드가 다를 경우 타사상품 여부 세팅
        				if(curTrplC != my_trpl_c) {
        					isOthersWrs = true;
        				}
        	        } // if(isRowChecked 
        	    } // for
        	    
        	    /*
        	    if(isOthersWrs == true) {
        	        alert('타사상품이 선택되었습니다. ');
        	    }
        	    */
        	    
        		var selectCnt = this.checkIndexCnt(this.div_list.grd_save);
        		
        		if(selectCnt == 0){
        			this.alert(this.gfn_getTextMessage('msg.van_ds_sc_1850.alert.save3'));
        			return;
        		}
        	}

        	this.btn_save(sqlType, isOthersWrs);
        };

        //콜백
        this.fn_callback = function(trId,errCode,errMsg){

        	if(errCode < 0){
        		this.gfn_getMessage("alert", errMsg);
        		return;
        	}
        	
        	this.setNo(this);
        	
        	if(trId == 'init'){

        		return;
        	};

        
        	/*
        	 *
        	 */
        	if(trId == 'retrieveInteTrplList' || trId == 'div'){		//조회	
        	
        	    // 전체선택 추가
        		this.ds_saveTrplList.insertRow(0);
        		this.ds_saveTrplList.setColumn(0,'CODE','');
        		this.ds_saveTrplList.setColumn(0,'NAME_YN','-선택-');

        		this.div_search.cbo_nacode.setInnerDataset(this.ds_saveTrplList);
        		this.div_search.cbo_nacode.set_index(0);

        		return;
        	}
        	
        	if(trId == 'retrieveTrplWrsList' || trId == 'div'){		//조회		
        	    this.div_list.edt_search.set_readonly(false);
        	    
        		return;
        	}
        	
        	if(trId == 'INS'){
        		this.alert(this.gfn_getTextMessage('msg.comp.insert'));
        		this.search();
        		return;		
        	}
        	
        	if(trId == 'DEL'){
        		this.alert(this.gfn_getTextMessage('msg.comp.delete'));
        		this.search();
        		return;		
        	}
        	
        	//this.div_list.edt_search.set_readonly(true);
        };

        this.setNo = function(form){
        	
        	var ds = form.ds_saveList;
        	for(var i=0 ; i<ds.getRowCount();i++){
        		ds.setColumn(i,"NO",(i+1));
        	}
        };
        //최대 저장 갯수
        this.maxSaveCnt = function(){
        	return 10;
        };

        //데이터셋 필터링
        this.div_list_Button00_onclick = function(obj,e){
        	
        	this.div_list.edt_search.set_value('');
        	this.div_list.edt_search.setFocus();
        };

        this.ds_filter = function(obj,e){

        	var txt = this.div_list.edt_search.value;
        	if(txt != '' && !txt) return;
            var s = "WRSNM.indexOf('" + txt.replace("'","\\'") + "') != -1";
        	this.ds_trplWrsList.filter(s);
        };

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_list.btn_leftMove.addEventHandler("onclick", this.btn_moveData_onclick, this);
            this.div_list.btn_rightMove.addEventHandler("onclick", this.btn_moveData_onclick, this);
            this.div_list.btn_show.addEventHandler("onclick", this.btn_show_onclick, this);
            this.div_list.Button00.addEventHandler("onclick", this.div_list_Button00_onclick, this);
            this.div_list.Button01.addEventHandler("onclick", this.ds_filter, this);
            this.btn_search.addEventHandler("onclick", this.search, this);
            this.sta_searchType.addEventHandler("onclick", this.div_search_sta_searchType_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1994.xfdl");
        this.loadPreloadList();
       
    };
}
)();
