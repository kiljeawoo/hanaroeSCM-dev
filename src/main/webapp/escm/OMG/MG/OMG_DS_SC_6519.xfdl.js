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
                this.set_titletext("정보분석조회");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
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

            obj = new Dataset("ds_result", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RMS_MM\" type=\"STRING\" size=\"256\"/><Column id=\"IA_SVC\" type=\"STRING\" size=\"256\"/><Column id=\"IA_SVC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UGQT\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("Static92", "absolute", "11", "31", "134", "29", null, null, this);
            obj.set_taborder("8");
            obj.set_text("수신일자기간");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "5", "44", "21", "15", null, this);
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

            obj = new Grid("grd_result", "absolute", "10", "80", null, null, "15", "20", this);
            obj.set_taborder("16");
            obj.set_binddataset("ds_result");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"286\"/><Column size=\"176\"/><Column size=\"175\"/><Column size=\"304\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"업체명\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"사용량\"/><Cell col=\"3\" text=\"금액(원)\"/></Band><Band id=\"body\"><Cell text=\"bind:CLNTNM\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:IA_SVC_NM\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:UGQT\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right middle;padding:2 5 0 5;\" text=\"bind:AMOUNT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("정보분석조회");

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
        this.addIncludeScript("OMG_DS_SC_6519.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6519.xfdl", function() {
        //include "lib::comLib.xjs";

        /*******************************************************************
        	전역변수 선언
        	sNaTrplC : 조회할 거래처번호
        	sMbcoDsc : 본지사구분코드
        *******************************************************************/

        this.sNaTrplC = "";
        this.sMbcoDsc = "";
        this.sRmsMM = "";
        this.sInit  = "";

        

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
        this.fn_retriveUsrInfo = function (naTrplC,mbcoDsc,initParam){					
        	this.sNaTrplC = naTrplC;
        	this.sMbcoDsc = mbcoDsc;
        	this.sInit = initParam;
        }

        /*******************************************************************************
        	TAB호출시 호출되는 함수
        *******************************************************************************/
        this.fn_test = function (naTrplC,mbcoDsc,initParam){					
        	this.sNaTrplC = naTrplC;
        	this.sMbcoDsc = mbcoDsc;
        	this.sInit = initParam;
        } 
         

        
         
         
         /*조회*/
        this.btn_search_onclick = function(obj,e)
        {
        	sInit = "N";
        	this.fn_retrieveInfAnss();// 처음조회시 1페이지를 조회한다.
        }

        

        
        /*******************************************************************************
        	부가정보일별내역조회
        *******************************************************************************/
        this.fn_retrieveInfAnss = function(){

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
        	
        	var sSvcID        = "retrieveInfAnss";
        	var sURL          ="svc::rest/mg/mbcslt/retrieveInfAnssList";		 	
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
        				//this.gfn_getMessage("alert", "result.message.search.no.exist.data");				
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
         					this.fn_retrieveInfAnss();
        				 
        				 

        				
        			}
        	 	}else if(svcID == "retrieveInfAnss"){			
        	 	
        	 	
        	 	
        			if(this.ds_result.rowcount == 0){
        	//			this.gfn_getMessage("alert", "result.message.search.no.exist.data");				
        			}			
        	 	}else{
        			alert("서비스ID매핑이 잘못되었습니다.");
        	 	}
        	 	
        //	 	trace(this.ds_result.saveXML());
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

        this.loadIncludeScript("OMG_DS_SC_6519.xfdl");
        this.loadPreloadList();
       
    };
}
)();
