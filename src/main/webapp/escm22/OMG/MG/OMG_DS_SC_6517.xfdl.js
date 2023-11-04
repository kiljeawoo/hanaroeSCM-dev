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
                this.set_name("OMG_DS_SC_6517");
                this.set_titletext("서비스변경현황");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_resultMst", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC21\" type=\"STRING\" size=\"256\"/><Column id=\"SVC22\" type=\"STRING\" size=\"256\"/><Column id=\"SVC31\" type=\"STRING\" size=\"256\"/><Column id=\"SVC32\" type=\"STRING\" size=\"256\"/><Column id=\"SVC33\" type=\"STRING\" size=\"256\"/><Column id=\"SVC34\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SVC21\">0</Col><Col id=\"SVC22\">0</Col><Col id=\"SVC31\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_resultDtl", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_ENT_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RQ_DSC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_PRG_STSC_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static87", "absolute", "98.13%", "1", "15", "1195", null, null, this);
            obj.set_taborder("1");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "2.86%", "697", null, "20", "-24.53%", null, this);
            obj.set_taborder("10");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static89", "absolute", "1.49%", "17", null, "21", "77.09%", null, this);
            obj.set_taborder("13");
            obj.set_text("서비스변경현황");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0%", "1", null, "1195", "98.51%", null, this);
            obj.set_taborder("66");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_svcChgPsttList", "absolute", "1.49%", "125", null, "355", "16", null, this);
            obj.set_taborder("74");
            obj.set_binddataset("ds_resultDtl");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"47\"/><Column size=\"120\"/><Column size=\"147\"/><Column size=\"91\"/><Column size=\"115\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"서비스가입일시\"/><Cell col=\"2\" text=\"신청서비스\"/><Cell col=\"3\" text=\"요청구분\"/><Cell col=\"4\" text=\"처리상태\"/></Band><Band id=\"body\"><Cell style=\"align:center middle;\" text=\"bind:RN\"/><Cell col=\"1\" style=\"align:center middle;\" text=\"bind:SVC_ENT_DTM\" mask=\"####-##-## ##:##:##\"/><Cell col=\"2\" style=\"align:left middle;\" text=\"bind:SVC_ID_NM\"/><Cell col=\"3\" style=\"align:left middle;\" text=\"bind:RQ_DSC_NM\"/><Cell col=\"4\" style=\"align:left middle;\" text=\"bind:ENT_PRG_STSC_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mst", "absolute", "12", "47", "775", "49", null, null, this);
            obj.set_taborder("75");
            obj.set_binddataset("ds_resultMst");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"111\"/><Column size=\"111\"/><Column size=\"111\"/><Column size=\"111\"/><Column size=\"111\"/><Column size=\"111\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"정액제\"/><Cell col=\"1\" text=\"종량제\"/><Cell col=\"2\" text=\"BI조회\"/><Cell col=\"3\" text=\"추이분석\"/><Cell col=\"4\" text=\"시장분석(자사)\"/><Cell col=\"5\" text=\"시장분석(타사)\"/></Band><Band id=\"body\"><Cell text=\"expr:SVC21 == 0?'미사용':'사용'\"/><Cell col=\"1\" text=\"expr:SVC22 == 0?'미사용':'사용'\"/><Cell col=\"2\" text=\"expr:SVC31 == 0?'미사용':'사용'\"/><Cell col=\"3\" text=\"expr:SVC32 == 0?'미사용':'사용'\"/><Cell col=\"4\" text=\"expr:SVC33 == 0?'미사용':'사용'\"/><Cell col=\"5\" text=\"expr:SVC34 == 0?'미사용':'사용'\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("서비스변경현황");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","divSearch.edt_menuId","value","ds_in","MENU_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divSearch.cbo_menuLevel","value","ds_in","MENU_LEVEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divSearch.edt_menuName","value","ds_in","MENU_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divSearch.edt_svcGroup","value","ds_in","SVC_GROUP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divSearch.edt_fileName","value","ds_in","FILE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divSearch.edt_fileType","value","ds_in","FILE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divSearch.cbo_displayYn","value","ds_in","DISPLAY_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divSearch.cbo_useYn","value","ds_in","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","grd_svcChgPsttList","binddataset","ds_result","");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_6517.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6517.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";
        /*******************************************************************
        	전역변수 선언
        	sNaTrplC : 조회할 거래처번호	
        *******************************************************************/
        this.sNaTrplC = "";

        this.form_onload = function(obj,e)
        {   
           this.gfn_setInitForm(obj, e); //공통
           this.grd_svcChgPsttList.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        }

        this.fn_afterFormOnload = function()
        {
           //페이지 로딩후 실행부분            
           this.fn_retrieveSvcChgPsttMaster();   
        }

        
        /*******************************************************************************
        	TAB호출시 호출되는 함수
        *******************************************************************************/
        this.fn_retriveUsrInfo = function (naTrplC){		
        	//this.edt_NA_TRPL_C.set_value(na_trpl_c);
        	//this.fn_retrieveSvcChgPsttMaster();
        	this.sNaTrplC = naTrplC;
        	
        }

        
        /*******************************************************************************
        	그리드셀 호출
        *******************************************************************************/
        this.Div00_grd_mst_oncellclick = function(obj,e)
        {	
        	var svcId ;
        	if(e.cell == 0 ){
        		svcId = '21';
        	}else if(e.cell == 1 ){
        		svcId = '22';
        	}else if(e.cell == 2 ){
        		svcId = '31';
        	}else if(e.cell == 3 ){
        		svcId = '32';
        	}else if(e.cell == 4 ){
        		svcId = '33';
        	}else if(e.cell == 5 ){
        		svcId = '34';
        	}	
        	this.fn_retrieveSvcChgPsttDetail(svcId);
        	
        }

        /*******************************************************************************
        	조회메소드
        *******************************************************************************/
        this.fn_retrieveSvcChgPsttMaster = function(){
        	var sParams 	  = "NA_TRPL_C="+this.sNaTrplC;				
        	var sSvcID        = "retrieveSvcChgPsttMaster";
        	var sURL          = "svc::rest/mg/mbcslt/retrieveSvcChgPsttMaster";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_resultMst=ds_resultMst";	
        	var sArgument     = sParams;	
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        

        this.fn_retrieveSvcChgPsttDetail = function(svcId){
        	var sParams 	  = "SVC_ID="+svcId +" NA_TRPL_C="+this.sNaTrplC;
        	var sSvcID        = "retrieveSvcChgPsttDetail";
        	var sURL          = "svc::rest/mg/mbcslt/retrieveSvcChgPsttDetail";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_resultDtl=ds_resultDtl";	
        	var sArgument     = sParams;	
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }
        /*******************************************************************************
        	콜백메소드
        *******************************************************************************/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	
        	if(ErrorCode < 0){
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{	
        	 	if(svcID == "retrieveSvcChgPsttMaster"){
        			if(this.ds_resultMst.rowcount == 0){
        			//	this.gfn_getMessage("alert", "result.message.search.no.exist.data");				
        			} 
        	 	}
        	 	else if(svcID == "retrieveSvcChgPsttDetail"){
        			if(this.ds_resultDtl.rowcount == 0){
        			//	this.gfn_getMessage("alert", "result.message.search.no.exist.data");				
        			} 
        	 	}else{
        			alert("서비스ID매핑이 잘못되었습니다.");
        	 	}	 	
        	}		  
        }
         

         

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.grd_svcChgPsttList.addEventHandler("oncellclick", this.div_result_grd_mbApvrqrList_oncellclick, this);
            this.grd_mst.addEventHandler("oncellclick", this.Div00_grd_mst_oncellclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6517.xfdl", true);

       
    };
}
)();
