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
                this.set_name("OMG_DS_SC_3211");
                this.set_titletext("상담신청내역조회상세Tab");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_sum", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CSLT_RQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"CHRR\" type=\"STRING\" size=\"256\"/><Column id=\"CHRR_MPNO\" type=\"STRING\" size=\"256\"/><Column id=\"ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"STS\" type=\"STRING\" size=\"256\"/><Column id=\"STS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_DTCFNM\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ctrSts", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Tab("tab_search", "absolute", "0", "-32", null, null, "2", "2", this);
            obj.set_taborder("12");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.style.set_padding("15 0 15 0");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.tab_search);
            obj.set_text("신청내역조회");
            obj.set_url("OMG.BT::OMG_DS_SC_1210.xfdl");
            this.tab_search.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.tab_search);
            obj.set_text("신청내역상세");
            obj.set_url("OMG.BT::OMG_DS_SC_1212.xfdl");
            this.tab_search.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("상담신청내역조회상세Tab");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "OMG.BT::OMG_DS_SC_1210.xfdl");
            this._addPreloadList("fdl", "OMG.BT::OMG_DS_SC_1212.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_3211.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_3211.xfdl", function() {
        //include "lib::comLib.xjs";

        var fv_sts = "";

        this.OMG_DS_SC_3211_onload = function(obj,e)
        {
        	//this.tab_search.tabpage2.set_enable(false);
        	//this.tab_search.removeTabpage(1);
        	//this.tab_search.set_visible(false, 1);
        	this.gfn_setInitForm(obj,e);
        	
        	var toDay = this.gfn_today("yyyyMMdd");
        	chkDay = this.gfn_minusMonth(toDay, 1);
        	
        	//this.div_search.cal_from.set_value(this.gfn_firstDate(toDay));
        	//this.div_search.cal_to.set_value(this.gfn_lastDate(toDay));
        	this.tab_search.tabpage1.div_search.cal_from.set_value(chkDay);
        	this.tab_search.tabpage1.div_search.cal_to.set_value(toDay);
        	
        	var param = [  
               {code:"CTR_STS",     dsName:"ds_ctrSts",    selecttype:""}
            ];

        	this.gfn_setPortalCommonCode(param);
        	
        	this.tab_search.tabpage1.div_search.div_ctrSts._binddataset(this.ds_ctrSts,"SIMP_C","SIMP_CNM");
        	this.tab_search.tabpage1.div_search.div_ctrSts.setFunctionName("fn_afterCall"); //후처리함수 선언
        	//trace(this.ds_ctrSts.saveXML());
        	this.fn_requestSum();//최초전체조회
        }

        //멀티 콤보  - > 상태종류
        this.fn_afterCall = function (sVal)
        {
        	for(var i = 0 ; i < sVal.rowcount; i++){		
        	
        		if(i == 0 ){
        			fv_sts += sVal.getColumn(i, "SIMP_C");
        		}else{
        			fv_sts += "."+sVal.getColumn(i, "SIMP_C");
        		}
        	}
        }

        this.fn_requestSum = function()
        {
        	this.ds_sum.clearData();
        	
        	var maeBzno = this.gfn_nullToEmpty(this.parent.mae_bzno); //사업자등록번호
        	var edtChrr = this.gfn_nullToEmpty(this.parent.edt_chrr); //신청자
        	var chrr_mpno = this.gfn_nullToEmpty(this.parent.chrr_mpno); //휴대폰
        	
        	var calFrom = this.gfn_nullToEmpty(this.tab_search.tabpage1.div_search.cal_from.value);  //조회시작일
        	var calTo = this.gfn_nullToEmpty(this.tab_search.tabpage1.div_search.cal_to.value);  //조회종료일
        	var edtBuyer = this.gfn_nullToEmpty(this.tab_search.tabpage1.div_search.edt_buyer.value);  //담당바이어
        	
        	param = " mae_bzno="+maeBzno+
        			" edt_chrr="+edtChrr+
        			" chrr_mpno="+chrr_mpno+
        			" cal_from="+calFrom+
        			" cal_to="+calTo+
        			" cbo_sts="+fv_sts+
        			" edt_buyer="+edtBuyer;
        			
        	var sSvcID        = "search";//통신아이디
        	var sURL          = "svc::rest/bt/result/retrieveRequestSum";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_sum=ds_sum";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "retrievePeriodSum"){
        			if(this.ds_sum.rowcount == 0){
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        		}
        	}
        	
        	this.tab_search.tabpage1.ds_copy.copyData(this.ds_sum);
        	return true;
        }

        /* Validation Check */
        this.fn_validationCheck = function(){
        	
        	var calFrom = this.tab_search.tabpage1.div_search.cal_from.value;
        	var calTo = this.tab_search.tabpage1.div_search.cal_to.value;
        	if(this.gfn_isNull(calFrom)){
        		this.gfn_getMessage("alert", "validation.message.fromDate.no.data");
        		return false;
        	}
        	
        	if(this.gfn_isNull(calTo)){
        		this.gfn_getMessage("alert", "validation.message.toDate.no.data");
        		return false;
        	}
        	
        	if(this.gfn_getDiffDay(calFrom, calTo) < 0){
        		this.gfn_getMessage("alert", "validation.message.fromData.toDate.confirm");
        		return false;
        	}else{
        		/*
        		if(this.gfn_getDiffDay(this.div_search.cal_YMD_FR.value,this.div_search.cal_YMD_TO.value) > 31){
        			this.alert('기간을 31일 이내로 선택 하세요');
        			return false;
        		}
        		*/	
        	}
        	/*
        	if(Number(calFrom) - Number(chkDay) < 0){
        		this.alert("최근 3개월까지 조회 가능합니다.");
        		return false;
        	}
        	
        	if(Number(calTo) - Number(chkDay) < 0){
        		this.alert("최근 3개월까지 조회 가능합니다.");
        		return false;
        	}
        	*/
        	return true;
        }

        /*상담신청내역 조회*/
        this.tab_search.tabpage1.btn_search_onclick = function(obj,e)
        {
        	this.ds_copy.clearData();
        	this.parent.parent.ds_sum.clearData();
        	
        	if(this.parent.parent.fn_validationCheck()){
        		this.parent.parent.fn_requestSum();
        	}
        	this.div_search.div_ctrSts._clearValue();
        	fv_sts = "";
        }
        this.tab_search.tabpage1.btn_history_onclick = function(obj,e)
        {
        	if(this.ds_copy.rowcount > 0){
        		for(var i = 0; i < this.ds_copy.rowcount; i++){
        				cslt_rq_no = this.ds_copy.getColumn(i, "CSLT_RQ_NO");
        				//alert("cslt_rq_no==>"+cslt_rq_no);
        				if(!this.gfn_isNull(cslt_rq_no))
        				{
        					var oArg = {paramMode:"S", dsArg:this.ds_copy, cslt_rq_no:cslt_rq_no};
        					var sOption = "autosize=true,title=true";
        					var sPopupCallBack = "fn_popupAfter";
        					this.gfn_openPopup("popId","OMG.BT::OMG_DS_SC_1130.xfdl",oArg,sOption,sPopupCallBack);
        				}
        		}
        	}else{
        		alert("상담신청내역을 조회 하세요");
        		return false;
        	}
        }

        /*상담신청내역 상세 Cell Click 이동*/
        this.tab_search.tabpage1.div_list_Grid01_oncellclick = function(obj,e)
        {
        	var nPage = 1;
        	this.parent.set_tabindex(1);
        }

        this.OMG_DS_SC_3211_onbeforeclose = function(obj,e)
        {
        	if(e.fromobject.name == obj.name)
        	{ 
        		return("화면을 완전히 벗어나게 됩니다. 그래도 종료하시겠습니까?"); 
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.OMG_DS_SC_3211_onload, this);
            this.addEventHandler("onbeforeclose", this.OMG_DS_SC_3211_onbeforeclose, this);

        };

        this.loadIncludeScript("OMG_DS_SC_3211.xfdl");
        this.loadPreloadList();
       
    };
}
)();
