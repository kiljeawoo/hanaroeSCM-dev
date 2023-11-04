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
                this.set_name("VAN_DS_SC_1995");
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
            obj._setContents("<ColumnInfo><Column id=\"CHECK_BOX\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_DTCFNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"INTE_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"INTE_TRPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RG_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Div("div_list", "absolute", "0", "31", null, null, "15", "40", this);
            obj.set_taborder("61");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_save", "absolute", "2.04%", "42", null, null, "0", "-22", this.div_list);
            obj.set_taborder("24");
            obj.set_binddataset("ds_saveList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\"/><Column size=\"60\"/><Column size=\"161\"/><Column size=\"179\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"세분류명\"/><Cell col=\"3\" text=\"업체명\"/><Cell col=\"4\" text=\"상품코드\"/><Cell col=\"5\" text=\"상품명\"/><Cell col=\"6\" text=\"등록일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECK_BOX\"/><Cell col=\"1\" text=\"bind:NO\"/><Cell col=\"2\" text=\"bind:WRS_DTCFNM\"/><Cell col=\"3\" text=\"bind:INTE_TRPL_NM\"/><Cell col=\"4\" text=\"bind:WRS_C\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:WRSNM\"/><Cell col=\"6\" text=\"bind:RG_DTM\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("sta_select", "absolute", "0", "17", null, "21", "53.94%", null, this.div_list);
            obj.set_taborder("26");
            obj.set_text("관심상품목록");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_del", "absolute", "88.68%", "9", null, "22", "0.64%", null, this.div_list);
            obj.set_taborder("36");
            obj.set_text("관심상품삭제");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_save", "absolute", "77.48%", "9", null, "22", "12.09%", null, this.div_list);
            obj.set_taborder("37");
            obj.set_text("관심상품등록");
            this.div_list.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "61.3%", "32", null, "42", "25.72%", null, this);
            obj.set_taborder("67");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "196", null, this);
            obj.set_taborder("68");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "23", null, this);
            obj.set_taborder("60");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
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
        this.addIncludeScript("VAN_DS_SC_1995.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1995.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e){
        	
        	this.gfn_setInitForm(obj, e); //공통
        };

        this.btn_show_onclick = function(obj,e)
        {
        	// this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        };

        this.fn_afterFormOnload = function(){ //onload

        	this.gridCheckboxInit([this.div_list.grd_save]); //체크박스 이벤트 등록	
        	this.div_list.grd_save.set_nodatatext(this.gfn_getTextMessage('msg.van_ds_sc_1850.view.grid.nodata2'));
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
        		   //this.fn_retrieveTrplWrsList();
        		   
        		   // 관심상품 조회
        		   this.fn_retrieveClsInteWrsList();
        		   
        		}
        	
        };

        //관심업체 콤보
        this.fn_retrieveInteTrplList = function() 
        {

        	var glnCode = application.gv_glnCode;
        	var params =  "naTrplC=" + glnCode 
           	 ;

        	trace("##params >> " + params);
        	
        	var sSvcID        = "retrieveInteTrplList";
        	var sURL          = "svc::rest/analysis/market/retrieveInteTrplList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_saveTrplList=ds_saveList";	
        	var sArgument     = params;
        	var sCallbackFunc = "fn_callBack";
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
        	// var inteTrplC =  this.div_search.cbo_nacode.value;
        	
        	var params =  "bsnDsc=" + bsnDsc
        				 + " naTrplC=" + naTrplC
        				 // + " inteTrplC=" + inteTrplC
        				   
        				 ;
        				
        	trace("##params >> " + params);
        	
        	var sSvcID        = "retrieveTrplWrsList";
        	var sURL          = "svc::rest/analysis/market/retrieveTrplWrsList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_trplWrsList=ds_trplWrsList";	
        	var sArgument     = params;
        	var sCallbackFunc = "fn_callBack";
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
        	// var inteTrplC =  this.div_search.cbo_nacode.value;
        	
        	var params =  "bsnDsc=" + bsnDsc
        				 + " naTrplC=" + naTrplC
        				 // + " inteTrplC=" + inteTrplC
        				   
        				 ;

        	trace("##params >> " + params);
        	
        	var sSvcID        = "retrieveClsInteWrsList";
        	var sURL          = "svc::rest/analysis/market/retrieveClsInteWrsList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_saveList=ds_saveList";	
        	var sArgument     = params;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // 
        	
        	// application.set_usewaitcursor(false);
        	// alert('fn_retrieveUsrConsent');
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        //설정저장
        this.btn_save = function(sqlType){

        	var ds = "";
        	var confirmMsg = '';
        	if(sqlType == 'INS'){ 
        		confirmMsg = 'msg.isInsert';
        		ds = 'ds_trplWrsList=ds_trplWrsList'; 
        	}else if(sqlType == 'DEL'){
        		confirmMsg = 'msg.isDelete';
        		ds = 'ds_saveList=ds_saveList'; 
        	}
        	//	trace(ds);
        	if(!this.confirm(this.gfn_getTextMessage(confirmMsg))){
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

        /*
          관심상품 삭제
         */

        this.div_list_btn_del_onclick = function(obj,e)
        {
        	trace("application.gv_userAuth "  + application.gv_userAuth);
        	
        	if (application.gv_userAuth.indexOf("1") < 0) { // 빌링권한이 없는 경우
        		alert("빌링권한이 있는 사용자만 저장할 수 있습니다.");
        		return;
        	}
        	
        	var trpl_c = this.getTrplCode();
        	var my_trpl_c = application.gv_glnCode;	

        	var sqlType = 'DEL';

        	var selectCnt = this.checkIndexCnt(this.div_list.grd_save);
        	
        	if(selectCnt == 0){
        		this.alert(this.gfn_getTextMessage('msg.van_ds_sc_1850.alert.save3'));
        		return;
        	}

        	this.btn_save(sqlType);
        }

        
        //콜백
        this.fn_callback = function(trId,errCode,errMsg){
        // alert('fn_callback');

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
        		this.ds_saveTrplList.setColumn(0,'NAME','-ALL-');
        		

        		// this.div_search.cbo_nacode.setInnerDataset(this.ds_saveTrplList);
        		// this.div_search.cbo_nacode.set_index(0);

        		return;
        	}
        	
        	if(trId == 'retrieveTrplWrsList' || trId == 'div'){		//조회		

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

        
        this.btn_popup01_onclick = function(obj,e)
        {

        	trace("application.gv_userAuth "  + application.gv_userAuth);
        	
        	if (application.gv_userAuth.indexOf("1") < 0) { // 빌링권한이 없는 경우
        		alert("빌링권한이 있는 사용자만 저장할 수 있습니다.");
        		return;
        	}
        	
        	var param = "";
        	var trplC = this.getTrplCode();//권한사업장

        	var oArg = {AuthorityNo:param, temp_yn:'', trplC:trplC};
        	var sOption = "autosize=true,title=false";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("deliveryNoticePopup","ANALYSIS.MARKET::VAN_DS_SC_1995_P01.xfdl",oArg,sOption,sPopupCallBack);
        }

        
        this.fn_popupAfter = function(strId,strVal)
        {
            
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_list.btn_del.addEventHandler("onclick", this.div_list_btn_del_onclick, this);
            this.div_list.btn_save.addEventHandler("onclick", this.btn_popup01_onclick, this);
            this.btn_search.addEventHandler("onclick", this.search, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1995.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
