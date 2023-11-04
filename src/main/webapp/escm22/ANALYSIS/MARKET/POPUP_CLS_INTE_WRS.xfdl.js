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
                this.set_name("CLS_INTE_WRS");
                this.set_cssclass("frm_WF_PopupBg");
                this.set_titletext("상품 조회");
                this._setFormPosition(0,0,688,503);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_wrs", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"BOXPE_AQZ\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"VCBX_NA_WRS_C\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_searchType", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"s_code\" type=\"string\" size=\"13\"/><Column id=\"s_name\" type=\"string\" size=\"13\"/></ColumnInfo><Rows><Row><Col id=\"s_code\">name</Col><Col id=\"s_name\">상품명</Col></Row><Row><Col id=\"s_code\">code</Col><Col id=\"s_name\">상품코드</Col></Row></Rows>");
            this.addChild(obj.name, obj);

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


            
            // UI Components Initialize
            obj = new Button("btn_ok", "absolute", "290", "451", "54", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", "346", "451", "54", "29", null, null, this);
            obj.set_taborder("7");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "363", "480", "91", "17", null, null, this);
            obj.set_taborder("10");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "363", "441", "91", "10", null, null, this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "242", "32", "91", "15", null, null, this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "0", "37", "32", "0", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("16");
            obj.set_text("상품 조회");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_save", "absolute", "1.45%", "78", null, null, "2.47%", "64", this);
            obj.set_taborder("17");
            obj.set_binddataset("ds_saveList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"41\"/><Column size=\"93\"/><Column size=\"116\"/><Column size=\"104\"/><Column size=\"145\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"선택\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"세분류명\"/><Cell col=\"3\" text=\"업체명\"/><Cell col=\"4\" text=\"상품코드\"/><Cell col=\"5\" text=\"상품명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECK_BOX\"/><Cell col=\"1\" text=\"bind:NO\"/><Cell col=\"2\" text=\"bind:WRS_DTCFNM\"/><Cell col=\"3\" text=\"bind:INTE_TRPL_NM\"/><Cell col=\"4\" text=\"bind:WRS_C\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:WRSNM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del", "absolute", "88.37%", "46", null, "21", "2.91%", null, this);
            obj.set_taborder("18");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 688, 503, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_cssclass("frm_WF_PopupBg");
            		p.set_titletext("상품 조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("POPUP_CLS_INTE_WRS.xfdl", "lib::comLib.xjs");
        this.registerScript("POPUP_CLS_INTE_WRS.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.objRtnArr = new Array(2); //팝업창 close시 전달할 값을 위한 배열 선언

        var autoPop = this.parent.autoPop;

        var LCLC = '';
        var MCLC = '';
        var SCLC = '';
        var DTCF_C = '';
        	
        this.form_onload = function(obj,e)
        {

        	if(autoPop.autoType){
        	
        		LCLC = autoPop.LCLC;      // 대분류
        		MCLC = autoPop.MCLC;      // 중분류
        		SCLC = autoPop.SCLC;      // 소분류
        		DTCF_C = autoPop.DTCF_C;  // 세분류

        		this.btn_search_onclick();  // 조회
        	}
        }

        
        // 조회
        this.btn_search_onclick = function(obj,e)
        {
        		   this.fn_retrieveClsInteWrsList();  // 조회
        }

        
        /*
          등록 관심 상품조회
        */
        this.fn_retrieveClsInteWrsList = function() 
        {
        	// alert('fn_retrieveUsrConsentList');
        	
        	var bsnDsc = "sales_price";
        	var naTrplC =  application.gv_glnCode; // 관심상품 조회는 로그인 업체코드로 조회
        	var inteTrplC =  '';
        	
        	var params =  "bsnDsc=" + bsnDsc
        				 + " naTrplC=" + naTrplC
        				 + " inteTrplC=" + inteTrplC
        				 + " LCLC=" + LCLC
        				 + " MCLC=" + MCLC
        				 + " SCLC=" + SCLC
        				 + " DTCF_C=" + DTCF_C
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

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.btn_ok_onclick = function(obj,e)
        {
        	this.objRtnArr[0] = this.ds_wrs.getColumn(this.ds_wrs.rowposition,"NA_WRS_C");
        	this.objRtnArr[1] = this.ds_wrs.getColumn(this.ds_wrs.rowposition,"WRSNM");
        	trace(this.objRtnArr.toString());
        	this.close(this.objRtnArr.toString());
        }

        

        /* Validation Check */
        this.fn_validationCheck = function(){
        	

        	return true;
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", ErrorMsg);
        		return;
        	}else{
        		if(svcID == "searchWRS"){
        			if(this.ds_wrs.rowcount == 0){
        				this.grd_wrs.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        			}else if(this.ds_wrs.rowcount == 1){
        				if(autoPop.autoType == true){
        					this.grd_wrs.selectRow(0);
        					this.btn_ok_onclick();
        				}
        			}else{
        				this.grd_wrs.selectRow(0);
        				this.ds_wrs.setFocus();
        			}		
        		}else if(svcID == "delete"){
        		
        		    this.fn_retrieveClsInteWrsList();  // 조회
        		
        		}
        	}
        }

        
        this.grd_wrs_oncellclick = function(obj,e)
        {
        	this.objRtnArr[0] = this.ds_wrs.getColumn(e.row,"NA_WRS_C");
        	this.objRtnArr[1] = this.ds_wrs.getColumn(e.row,"WRSNM");
        	trace(this.objRtnArr.toString());
        	this.close(this.objRtnArr.toString());
        }

        this.grd_wrs_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.btn_ok_onclick();
        	}
        }

        
        //저장,삭제

        var isOthersWrs = false;
        				
        this.btn_del_onclick = function(obj,e){

        	trace("application.gv_userAuth "  + application.gv_userAuth);
        	
        	if (application.gv_userAuth.indexOf("1") < 0) { // 빌링권한이 없는 경우
        		alert("빌링권한이 있는 사용자만 사용할 수 있습니다.");
        		return;
        	}

        	var my_trpl_c = application.gv_glnCode;	
        	var isRowChecked = '0';
        	var isOthersWrs = false;
        	var sqlType = 'DEL';

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
        	
        	var selectCnt = this.checkIndexCnt(this.grd_save);
        	
        	if(selectCnt == 0){
        		this.alert(this.gfn_getTextMessage('msg.van_ds_sc_1850.alert.save3'));
        		return;
        	}

        	this.btn_save(sqlType, isOthersWrs);
        };

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
        	

        	if(sqlType == 'DEL'){
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
        	var trId = 'delete';

        	this.gfn_callService(
        						trId, 
        						"svc::rest/analysis/market/saveInteTrplWrsList",
        						ds, 
        						"", 
        						"analysis="+analysis+" sqlType="+sqlType, 
        						"fn_callBack",
        						'S'
        						);
        };

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_ok.addEventHandler("onclick", this.btn_ok_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_del.addEventHandler("onclick", this.btn_del_onclick, this);

        };

        this.loadIncludeScript("POPUP_CLS_INTE_WRS.xfdl", true);

       
    };
}
)();
