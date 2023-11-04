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
                this.set_name("OMG_DS_SC_6518");
                this.set_titletext("부가정보일별내역");
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
            obj._setContents("<ColumnInfo><Column id=\"RMS_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DLY_UGQT\" type=\"STRING\" size=\"256\"/><Column id=\"BL_DLY_UGQT\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj = new Static("Static91", "absolute", "12", "31", null, "29", "15", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "12", "9", "20.42%", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static92", "absolute", "405", "31", "134", "29", null, null, this);
            obj.set_taborder("2");
            obj.set_text("사업장코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "12", "60", "122.04%", "20", null, null, this);
            obj.set_taborder("3");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "12", "505", "125.65%", "20", null, null, this);
            obj.set_taborder("4");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "12", "685", "120.8%", "20", null, null, this);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_result", "absolute", "11", "81", null, null, "15", "20", this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_result");
            obj.set_readonly("true");
            obj.set_autofittype("col");
            obj.set_useselcolor("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"316\"/><Column size=\"130\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"생성일\"/><Cell col=\"1\" text=\"사업장\"/><Cell col=\"2\" text=\"실제사용량\"/><Cell col=\"3\" text=\"청구사용량\"/></Band><Band id=\"body\"><Cell style=\"align:center middle;\" text=\"bind:RMS_DT\" mask=\"####-##-##\"/><Cell col=\"1\" style=\"align:left middle;\" text=\"bind:CLNTNM\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:DLY_UGQT\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:BL_DLY_UGQT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static87", "absolute", "788", "1", "1.87%", "1195", null, null, this);
            obj.set_taborder("7");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "0", "1", "1.49%", "1195", null, null, this);
            obj.set_taborder("8");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_NA_TRPL_C", "absolute", "541", "35", "24.91%", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_naTrplc");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");

            obj = new Button("btn_search", "absolute", null, "5", "44", "21", "14", null, this);
            obj.set_taborder("10");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_NA_TRPL_C", "absolute", "12", "483", "17.43%", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "11", "31", "134", "29", null, null, this);
            obj.set_taborder("12");
            obj.set_text("수신일자기간");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Div("div_rms_mm", "absolute", "147", "35", "108", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_url("common::calendarMonth.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("부가정보일별내역");

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
        this.addIncludeScript("OMG_DS_SC_6518.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6518.xfdl", function() {
        //include "lib::comLib.xjs";

        /*******************************************************************************
        	전역변수 선언
        	sNaTrplC : 조회할 거래처번호
        	sMbcoDsc : 본지사구분코드
        	sRmsMM   : 조회월
        	sInit    : 처음 호출여부
        *******************************************************************************/
        this.sNaTrplC = "";
        this.sMbcoDsc = "";
        this.sRmsMM = "";
        this.sInit  = "";

        this.PRXP_COMP_TRPL_C = "";
        this.RMS_TRPL_C ;
        this.RMS_MM ;
        this.MASTER_SLAVE_CHK  ;

        /*******************************************************************************
        	거래처코드에 해당하는 테이터콤보박스  함수
        *******************************************************************************/
        this.form_onload = function(obj,e)
        {   	
        	this.gfn_setInitForm(obj, e); 						//공통
        	this.grd_result.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        }

        this.fn_afterFormOnload = function()
        {
        	//페이지 로딩후 실행부분         	
        	this.div_rms_mm._setValue(application.gv_today.substring(0,6));
        	this.sRmsMM = this.div_rms_mm._getValue();
        	this.fn_retrieveAdinfDtpBrkNaTrplCList(); 
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
        	거래처코드에 해당하는 콤보테이터 조회 함수
        *******************************************************************************/
        this.fn_retrieveAdinfDtpBrkNaTrplCList = function (){		

        // 	if(this.gfn_isNull(this.div_rms_mm._getValue())){
        // 		this.alert('수신일자 기간을 선택해 주세요');		
        // 		return false;
        // 	}	

        	var sParams =  "RMS_MM="+this.div_rms_mm._getValue()
        				+ " NA_TRPL_C="+this.sNaTrplC;
        				
        	var sSvcID        = "retrieveAdinfDtpBrkNaTrplCList";
        	var sURL          = "svc::rest/mg/mbcslt/retrieveAdinfDtpBrkNaTrplCList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_naTrplc=ds_naTrplc";	
        	var sArgument     = sParams;	
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회	
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	
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
        	

        	var sParam =  "RMS_MM="+this.RMS_MM
        			   + " RMS_TRPL_C="+this.RMS_TRPL_C 
        			   + " PRXP_COMP_TRPL_C="+this.PRXP_COMP_TRPL_C 
        			   + " MASTER_SLAVE_CHK="+this.MASTER_SLAVE_CHK 
        			   ;
        	trace("sParam   = >> "  +  sParam) ;
        		
        	var sSvcID        = "retrieveAdinfDtpBrkList";
        	var sURL          = "svc::rest/mg/mbcslt/retrieveAdinfDtpBrkList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_result=ds_result";	
        	var sArgument     = sParam;		
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	
        	
        	
        	
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }
        /*******************************************************************************
        	조회버튼메소드
        *******************************************************************************/
        this.btn_search_onclick = function(obj,e)
        {
        	sInit = "N";
        	this.fn_retrieveAdinfDtpBrk();
        }
        /*******************************************************************************
        	달력컴포넌트 사용시 값 변경 체크로직
        *******************************************************************************/
        // this.compareValue = function(){	
        // 	if( (this.sRmsMM != this.div_rms_mm._getValue()) && this.sMbcoDsc =="1"){		
        // 		this.fn_retrieveAdinfDtpBrkNaTrplCList();
        // 		this.sRmsMM = this.div_rms_mm._getValue();		
        // 	}
        // }
        /*******************************************************************************
        	콜백메소드
        *******************************************************************************/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {		
        	if(ErrorCode < 0){
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{	
        	 	if(svcID == "retrieveAdinfDtpBrkNaTrplCList"){		 		
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
        					this.fn_retrieveAdinfDtpBrk();
        				 
        				 

        				
        			}
        	 	}else if(svcID == "retrieveAdinfDtpBrkList"){			
        	 	
        	 	
        	 	
        			if(this.ds_result.rowcount == 0){
        		//		this.gfn_getMessage("alert", "result.message.search.no.exist.data");				
        			}			
        	 	}else{
        			alert("서비스ID매핑이 잘못되었습니다.");
        	 	}
        	 	
        	 	trace(this.ds_result.saveXML());
        	}		  
        	
        	
        	
        }
         

         

        

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_naTrplc.addEventHandler("onrowposchanged", this.ds_naTrplc_onrowposchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_rms_mm.addEventHandler("onclick", this.div_rms_mm_onclick, this);
            this.div_rms_mm.addEventHandler("onorientationchange", this.div_rms_mm_onorientationchange, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6518.xfdl");
        this.loadPreloadList();
       
    };
}
)();
