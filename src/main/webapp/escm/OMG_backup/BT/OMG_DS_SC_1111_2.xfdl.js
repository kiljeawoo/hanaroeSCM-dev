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
                this.set_name("OMG_DS_SC_1111_1");
                this.set_titletext("상품분류확인");
                this._setFormPosition(0,0,560,353);
            }
            this.style.set_border("2 solid #067394ff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_productL", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_LCLFNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_productM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_MCLFNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_productS", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_SCLC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_SCLFNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_productD", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_DTCF_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_DTCFNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_buyer", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_ENO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("btn_newTop", "absolute", "0", "0", "560", "30", null, null, this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Menulist");
            this.addChild(obj.name, obj);

            obj = new Button("btn_newClose", "absolute", "523", "0", "37", "30", null, null, this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Button("btn_confirm", "absolute", "430", "307", "54", "29", null, null, this);
            obj.set_taborder("20");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", "486", "307", "54", "29", null, null, this);
            obj.set_taborder("21");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_productL", "absolute", "20", "48", "130", "228", null, null, this);
            obj.set_taborder("27");
            obj.set_binddataset("ds_productL");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_cssclass("grd_WF_pdiv");
            obj.style.set_background("white");
            obj.style.set_align("left");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"105\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"상품대분류명\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" style=\"align:left;padding:0 0 0 7;\" text=\"bind:WRS_LCLFNM\" treelevel=\"bind:Lev\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_productM", "absolute", "150", "48", "130", "228", null, null, this);
            obj.set_taborder("28");
            obj.set_binddataset("ds_productM");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_cssclass("grd_WF_pdiv");
            obj.style.set_background("white");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"105\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"상품중분류명\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" style=\"align:left;padding:0 0 0 7;\" text=\"bind:WRS_MCLFNM\" treelevel=\"bind:Lev\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_productS", "absolute", "280", "48", "130", "228", null, null, this);
            obj.set_taborder("29");
            obj.set_binddataset("ds_productS");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_cssclass("grd_WF_pdiv");
            obj.style.set_background("white");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"105\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"상품소분류명\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" style=\"align:left;padding:0 0 0 7;\" text=\"bind:WRS_SCLFNM\" treelevel=\"bind:Lev\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_productD", "absolute", "410", "48", "130", "228", null, null, this);
            obj.set_taborder("30");
            obj.set_binddataset("ds_productD");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_cssclass("grd_WF_pdiv");
            obj.style.set_background("white");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"105\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"상품세분류명\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" style=\"align:left;padding:0 0 0 7;\" text=\"bind:WRS_DTCFNM\" treelevel=\"bind:Lev\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 560, 353, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_3212");
            		p.set_titletext("상품분류확인");
            		p.style.set_border("2 solid #067394ff");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_1111_2.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_1111_2.xfdl", function() {
        //include "lib::comLib.xjs"

        this.OMG_DS_SC_1111_1_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.searchL = function(){
        	this.ds_productL.clearData();
        	this.ds_productM.clearData();
        	this.ds_productS.clearData();
        	this.ds_productD.clearData();
        	
        	if(this.fn_validationCheck()){
        		
        		var sSvcID        = "searchL";//통신아이디
        		var sURL          = "svc::rest/bt/apply/retrieveProductListL";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_productL=ds_productL";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = "";// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        this.searchM = function(){
        	this.ds_productM.clearData();
        	this.ds_productS.clearData();
        	this.ds_productD.clearData();
        	
        	if(this.fn_validationCheck()){
        	
        		param = " product_l="+proL;
        		//trace(param);
        		var sSvcID        = "searchM";//통신아이디
        		var sURL          = "svc::rest/bt/apply/retrieveProductListM";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_productM=ds_productM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        this.searchS = function(){
        	this.ds_productS.clearData();
        	this.ds_productD.clearData();
        	
        	if(this.fn_validationCheck()){
        	
        		param = " product_l="+proL+
        				" product_m="+proM;
        		//trace(param);
        		var sSvcID        = "searchS";//통신아이디
        		var sURL          = "svc::rest/bt/apply/retrieveProductListS";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_productS=ds_productS";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        this.searchD = function(){
        	this.ds_productD.clearData();
        	
        	if(this.fn_validationCheck()){
        	
        		param = " product_l="+proL+
        				" product_m="+proM+
        				" product_s="+proS;
        		//trace(param);
        		var sSvcID        = "searchD";//통신아이디
        		var sURL          = "svc::rest/bt/apply/retrieveProductListD";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_productD=ds_productD";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        this.searchBuyer = function(){
        	this.ds_buyer.clearData();
        	
        	if(this.fn_validationCheck()){
        	
        		param = " product_l="+proL+
        				" product_m="+proM+
        				" product_s="+proS+
        				" product_d="+proD;
        		//trace(param);
        		var sSvcID        = "searchBuyer";//통신아이디
        		var sURL          = "svc::rest/bt/apply/retrieveProductListBuyer";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_buyer=ds_buyer";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        /* Validation Check */
        this.fn_validationCheck = function(){
        	/*
        	if(this.gfn_isNull(this.div_search.edt_search.value)){
        		//this.div_search.edt_search.setFocus();
        		this.alert('입력할 상품분류 값을 선택 하세요.');
        		return false;
        	}
        	*/
        	return true;
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "searchL"){
        			if(this.ds_productL.rowcount == 0){
        				//this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        				alert("조회된 건수가 없습니다");
        				return false;
        			}else{
        				trace(this.ds_productL.saveXML());
        			}
        		}
        		if(svcID == "searchM"){
        			if(this.ds_productM.rowcount == 0){
        				//this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        				alert("조회된 건수가 없습니다");
        				return false;
        			}else{
        				trace(this.ds_productM.saveXML());
        			}
        		}
        		if(svcID == "searchS"){
        			if(this.ds_productS.rowcount == 0){
        				//this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        				alert("조회된 건수가 없습니다");
        				return false;
        			}else{
        				trace(this.ds_productS.saveXML());
        			}
        		}
        		if(svcID == "searchD"){
        			if(this.ds_productD.rowcount == 0){
        				//this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        				alert("조회된 건수가 없습니다");
        				return false;
        			}else{
        				trace(this.ds_productD.saveXML());
        			}
        		}
        		if(svcID == "searchBuyer"){
        			if(this.ds_buyer.rowcount == 0){
        				//this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        				alert("조회된 건수가 없습니다");
        				return false;
        			}else{
        				trace(this.ds_buyer.saveXML());
        				naBzplc = this.gfn_isEmpty(this.ds_buyer.getColumn(this.ds_buyer.rowposition, "NA_BZPLC"));
        				this.parent.edt_naBzplc.set_value(naBzplc);
        				//buyerEno = this.gfn_isEmpty(this.ds_buyer.getColumn(this.ds_buyer.rowposition, "BUYER_ENO"));
        				//this.parent.edt_buyerEno.set_value(buyerEno);
        			}
        		}
        	}
        }
        /*
        this.fn_openRequestSum = function()
        {
        	" mae_bzno="+maeBzno;
        	" edt_chrr="+edtChrr;
        	" chrr_hp="+chrr_hp;
        	
        	var oArg = {paramMode:"S", dsArg:this.ds_new, mae_bzno:maeBzno, edt_chrr:edtChrr, chrr_hp:chrr_hp};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";       
        	this.gfn_openPopup("popIdCheck","OMG.BT::OMG_DS_SC_3211.xfdl",oArg,sOption,sPopupCallBack);
        }
        */
        this.fn_popupAfter = function(strId,strVal)
        {
        	trace(" strId : " + strId + " strVal : " + strVal);
        }

        this.fn_afterFormOnload = function()
        {
        	trace("fn_afterFormOnload");
        }

        this.btn_newClose_onclick = function(obj,e)
        {
        	this.parent.div_product.set_visible(false);
        }

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.parent.div_product.set_visible(false);
        }

        this.btn_confirm_onclick = function(obj,e)
        {
        	proL = this.gfn_isEmpty(this.ds_productL.getColumn(this.ds_productL.rowposition, "NA_WRS_LCLC"));
        	proM = this.gfn_isEmpty(this.ds_productM.getColumn(this.ds_productM.rowposition, "NA_WRS_MCLC"));
        	proS = this.gfn_isEmpty(this.ds_productS.getColumn(this.ds_productS.rowposition, "NA_WRS_SCLC"));
        	proD = this.gfn_isEmpty(this.ds_productD.getColumn(this.ds_productD.rowposition, "NA_WRS_DTCF_C"));
        	
        	proLm = this.gfn_isEmpty(this.ds_productL.getColumn(this.ds_productL.rowposition, "WRS_LCLFNM"));
        	proMm = this.gfn_isEmpty(this.ds_productM.getColumn(this.ds_productM.rowposition, "WRS_MCLFNM"));
        	proSm = this.gfn_isEmpty(this.ds_productS.getColumn(this.ds_productS.rowposition, "WRS_SCLFNM"));
        	proDm = this.gfn_isEmpty(this.ds_productD.getColumn(this.ds_productD.rowposition, "WRS_DTCFNM"));
        	
        	this.send();
        }

        this.send = function()
        {
        	if(this.gfn_isEmpty(proD)){
        		/*최종 선택값 보여줌*/
        		/*
        		if(!this.gfn_isEmpty(proD)){
        		
        			this.parent.edt_category00.set_value(proS);
        			this.parent.edt_category01.set_value(proSm);
        			
        			if(!this.gfn_isEmpty(proS)){
        				this.parent.edt_category00.set_value(proM);
        				this.parent.edt_category01.set_value(proMm);
        				
        				if(!this.gfn_isEmpty(proM)){
        					this.parent.edt_category00.set_value(proL);
        					this.parent.edt_category01.set_value(proLm);
        				}
        			}
        		}else{
        			this.parent.edt_category00.set_value(proD);
        			this.parent.edt_category01.set_value(proDm);
        		}
        		*/
        		this.searchBuyer();
        		
        		this.parent.edt_category00.set_value(proD);
        		this.parent.edt_category01.set_value(proDm);
        		
        		this.parent.edt_proL.set_value(proL);
        		this.parent.edt_proM.set_value(proM);
        		this.parent.edt_proS.set_value(proS);
        		this.parent.edt_proD.set_value(proD);
        		
        		this.parent.div_product.set_visible(false);
        	}else{
        		alert("선택된 상품세분류가 없습니다");
        	}
        }

        var proL;
        var proM;
        var proS;
        var proD;
        var naBzplc;
        this.grd_productL_oncellclick = function(obj,e)
        {
        	
        	if(this.ds_productL.rowcount > 0){
        		proL = this.gfn_isEmpty(this.ds_productL.getColumn(this.ds_productL.rowposition, "NA_WRS_LCLC"));
        		this.searchM();
        	}
        }

        this.grd_productM_oncellclick = function(obj,e)
        {
        	if(this.ds_productM.rowcount > 0){
        		proM = this.gfn_isEmpty(this.ds_productM.getColumn(this.ds_productM.rowposition, "NA_WRS_MCLC"));
        		this.searchS();
        	}
        }

        this.grd_productS_oncellclick = function(obj,e)
        {
        	if(this.ds_productS.rowcount > 0){
        		proS = this.gfn_isEmpty(this.ds_productS.getColumn(this.ds_productS.rowposition, "NA_WRS_SCLC"));
        		this.searchD();
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.OMG_DS_SC_1111_1_onload, this);
            this.btn_newClose.addEventHandler("onclick", this.btn_newClose_onclick, this);
            this.btn_confirm.addEventHandler("onclick", this.btn_confirm_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);
            this.grd_productL.addEventHandler("oncellclick", this.grd_productL_oncellclick, this);
            this.grd_productM.addEventHandler("oncellclick", this.grd_productM_oncellclick, this);
            this.grd_productS.addEventHandler("oncellclick", this.grd_productS_oncellclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_1111_2.xfdl");

       
    };
}
)();
