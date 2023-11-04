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
                this.set_name("OMG_DS_SC_6513");
                this.set_titletext("EDI서비스 일별내역");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_result", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RMS_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ORDERS\" type=\"STRING\" size=\"256\"/><Column id=\"ORDRES\" type=\"STRING\" size=\"256\"/><Column id=\"DESRSP\" type=\"STRING\" size=\"256\"/><Column id=\"NACFCC\" type=\"STRING\" size=\"256\"/><Column id=\"CONRET\" type=\"STRING\" size=\"256\"/><Column id=\"SILRPT\" type=\"STRING\" size=\"256\"/><Column id=\"DLY_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"BL_DLY_SUM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_naTrplc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_C_EXPL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static91", "absolute", "11", "31", null, "29", "15", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "12", "60", "122.04%", "20", null, null, this);
            obj.set_taborder("2");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "12", "505", "125.65%", "20", null, null, this);
            obj.set_taborder("3");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "12", "685", "120.8%", "20", null, null, this);
            obj.set_taborder("4");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static87", "absolute", "788", "1", "1.87%", "1195", null, null, this);
            obj.set_taborder("5");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "0", "1", "1.49%", "1195", null, null, this);
            obj.set_taborder("6");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_result", "absolute", "11", "78", null, null, "15", "20", this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_result");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"49\"/><Column size=\"65\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"37\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" colspan=\"2\" text=\"수신일자\"/><Cell col=\"2\" rowspan=\"2\" text=\"주문서\"/><Cell col=\"3\" rowspan=\"2\" text=\"주문예정서\"/><Cell col=\"4\" rowspan=\"2\" text=\"배송예정&#13;&#10;응답서\"/><Cell col=\"5\" rowspan=\"2\" text=\"검수확정서\"/><Cell col=\"6\" rowspan=\"2\" text=\"반품확정서\"/><Cell col=\"7\" rowspan=\"2\" text=\"마트별&#13;&#10;공급실적\"/><Cell col=\"8\" colspan=\"2\" text=\"합계\"/><Cell row=\"1\" col=\"8\" text=\"수/발신&#13;&#10;Byte\"/><Cell row=\"1\" col=\"9\" text=\"빌링&#13;&#10;Byte\"/></Band><Band id=\"body\"><Cell colspan=\"2\" text=\"bind:RMS_DT\" mask=\"####-##-##\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:ORDERS\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right middle;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ORDRES\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right middle;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DESRSP\"/><Cell col=\"5\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:NACFCC\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:CONRET\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:SILRPT\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:DLY_SUM\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:BL_DLY_SUM\"/></Band><Band id=\"summary\"><Cell rowspan=\"2\" colspan=\"2\"><Cell rowspan=\"2\" style=\"align:right;\" text=\"합계\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left middle;font:bold 10 arial;\" text=\"(Byte)\"/><Cell row=\"1\" col=\"1\" style=\"align:left middle;font:bold 10 arial;\" text=\"(Kbyte)\"/></Cell><Cell col=\"2\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(ORDERS)&quot;)\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(ORDRES)&quot;)\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(DESRSP)&quot;)\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(NACFCC)&quot;)\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(CONRET)&quot;)\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(SILRPT)&quot;)\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(DLY_SUM)&quot;)\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(BL_DLY_SUM)&quot;)\"/><Cell row=\"1\" col=\"2\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:nexacro.round(dataset.getSum(&quot;nexacro.toNumber(ORDERS)&quot;)/1024)\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:nexacro.round(dataset.getSum(&quot;nexacro.toNumber(ORDRES)&quot;)/1024)\"/><Cell row=\"1\" col=\"4\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:nexacro.round(dataset.getSum(&quot;nexacro.toNumber(DESRSP)&quot;)/1024)\"/><Cell row=\"1\" col=\"5\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:nexacro.round(dataset.getSum(&quot;nexacro.toNumber(NACFCC)&quot;)/1024)\"/><Cell row=\"1\" col=\"6\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:nexacro.round(dataset.getSum(&quot;nexacro.toNumber(CONRET)&quot;)/1024)\"/><Cell row=\"1\" col=\"7\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:nexacro.round(dataset.getSum(&quot;nexacro.toNumber(SILRPT)&quot;)/1024)\"/><Cell row=\"1\" col=\"8\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:nexacro.round(dataset.getSum(&quot;nexacro.toNumber(DLY_SUM)&quot;)/1024)\"/><Cell row=\"1\" col=\"9\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:nexacro.round(dataset.getSum(&quot;nexacro.toNumber(BL_DLY_SUM)&quot;)/1024)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static92", "absolute", "11", "31", "134", "29", null, null, this);
            obj.set_taborder("8");
            obj.set_text("수신일자기간");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "5", "44", "21", "14", null, this);
            obj.set_taborder("9");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_rms_mm", "absolute", "147", "35", "108", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_url("common::calendarMonth.xfdl");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_NA_TRPL_C", "absolute", "42", "554", "17.43%", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_MBCO_DSC", "absolute", "192", "554", "17.43%", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "405", "31", "134", "29", null, null, this);
            obj.set_taborder("14");
            obj.set_text("사업장코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_NA_TRPL_C", "absolute", "541", "35", "24.91%", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_innerdataset("ds_naTrplc");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("EDI서비스 일별내역");

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

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::calendarMonth.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_6514.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6514.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /*******************************************************************
        	전역변수 선언
        	sNaTrplC : 조회할 거래처번호
        	sMbcoDsc : 본지사구분코드
        *******************************************************************/
        this.sNaTrplC = "";
        this.sMbcoDsc = "";

        this.PRXP_COMP_TRPL_C = "";
        this.RMS_TRPL_C ;
        this.RMS_MM ;
        this.MASTER_SLAVE_CHK  ;

        
        this.form_onload = function(obj,e)
        {   
           this.gfn_setInitForm(obj, e); //공통   
           this.grd_result.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        }

        this.fn_afterFormOnload = function()
        {
           //페이지 로딩후 실행부분   
           /*초기값세팅*/       
            
            this.div_rms_mm._setValue(application.gv_today.substring(0,6));
        	this.sRmsMM = this.div_rms_mm._getValue();
        	this.fn_retrieveEdiSvcDtpBrkNaTrplCList(); 
            
            
        	//this.fn_retrieveEdiSvcDtpBrk(); 
        }

        /*******************************************************************************
        	거래처코드에 해당하는 콤보테이터 조회 함수
        *******************************************************************************/
        this.fn_retrieveEdiSvcDtpBrkNaTrplCList = function (){		

        	var sParams =  "RMS_MM="+this.div_rms_mm._getValue()
        				+ " NA_TRPL_C="+this.sNaTrplC;
        				
        trace("sParams =>>"  + sParams)				;
        				
        	var sSvcID        = "NaTrplC";
        	var sURL          = "svc::rest/mg/mbcslt/retrieveAdinfDtpBrkNaTrplCList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_naTrplc=ds_naTrplc";	
        	var sArgument     = sParams;	
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회	
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	
        }

        
         
         
         /*******************************************************************************
        	TAB호출시 호출되는 함수
        *******************************************************************************/
        this.fn_retriveUsrInfo = function (naTrplC,mbcoDsc){				
        	trace("fn_retriveUsrInfo");
        	this.sNaTrplC = naTrplC;
        	this.sMbcoDsc = mbcoDsc;
        }
         
         
         /*조회*/
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_retrieveAdinfDtpBrk();// 처음조회시 1페이지를 조회한다.
        }

        

        
        /*******************************************************************************
        	부가정보일별내역조회
        *******************************************************************************/
        this.fn_retrieveAdinfDtpBrk = function(){

        trace("test") ;
        	this.RMS_MM =  this.div_rms_mm._getValue() ;
        	trace("test1") ;
        	this.RMS_TRPL_C =  this.cbo_NA_TRPL_C.value ;
        	trace("test2") ;

        	if (this.RMS_TRPL_C  == "A"  ){
        		for(var i = 0 ; i < this.ds_naTrplc.rowcount; i++){		

        			if(this.ds_naTrplc.getColumn(i, "SIMP_C_EXPL") == "M"){

        				this.PRXP_COMP_TRPL_C = this.ds_naTrplc.getColumn(i, "SIMP_C") ;
        				this.MASTER_SLAVE_CHK = "M" ;
        			}
        		}
        	}else { 
        		for(var i = 0 ; i < this.ds_naTrplc.rowcount; i++){		

        			if(this.ds_naTrplc.getColumn(i, "SIMP_C") == this.RMS_TRPL_C ){
        				this.PRXP_COMP_TRPL_C = this.ds_naTrplc.getColumn(i, "SIMP_C") ;
        				this.MASTER_SLAVE_CHK = this.ds_naTrplc.getColumn(i, "SIMP_C_EXPL") ;
        			}
        		}
        	}
        	

        	var sParams =  "RMS_MM="+this.RMS_MM
        			   + " RMS_TRPL_C="+this.RMS_TRPL_C 
        			   + " PRXP_COMP_TRPL_C="+this.PRXP_COMP_TRPL_C 
        			   + " MASTER_SLAVE_CHK="+this.MASTER_SLAVE_CHK 
        			   ;
        	trace("sParams   = >> "  +  sParams) ;
        	
        	var sSvcID        = "retrieveEdiSvcDtpBrkList";
        	var sURL          ="svc::rest/mg/mbcslt/retrieveEdiSvcDtpBrkList";		 	
        	var sInDatasets   = "";	
        	var sOutDatasets  = "ds_result=ds_result";
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }
         

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {		

        trace("svcID = >>   " +  svcID) ;
        	if(ErrorCode < 0){
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{	
        	 	if(svcID == "NaTrplC"){		 		
        			if(this.ds_naTrplc.rowcount == 0){
        		//		this.gfn_getMessage("alert", "result.message.search.no.exist.data");				
        			}else if(this.ds_naTrplc.rowcount > 0){
        			

        			
                          if (this.ds_naTrplc.rowcount ==1){  

        					this.cbo_NA_TRPL_C.set_readonly(true);
        					this.btn_search.set_visible(false);
        					
        				 }else if (this.ds_naTrplc.rowcount == 2){  
        					if(this.ds_naTrplc.getColumn(0, "SIMP_C") == "A"){
        								this.ds_naTrplc.deleteRow(0);
        					}
        				 }
         					this.cbo_NA_TRPL_C.set_index(0);
         					this.fn_retrieveAdinfDtpBrk();
        				 
        				 

        				
        			}
        	 	}else if(svcID == "retrieveEdiSvcDtpBrkList"){			
        	 	
        	 	
        	 	
        			if(this.ds_result.rowcount == 0){
        	//			this.gfn_getMessage("alert", "result.message.search.no.exist.data");				
        			}			
        	 	}else{
        			alert("서비스ID매핑이 잘못되었습니다.");
        	 	}
        	 	
        	// 	trace(this.ds_result.saveXML());
        	}		  
        	
        	
        	
        }

        

        

        
         
         
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_naTrplc.addEventHandler("onrowposchanged", this.ds_naTrplc_onrowposchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6514.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
