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
                this.set_name("OMG_DS_SC_5150");
                this.set_titletext("시장정보 카테고리 관리");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_result", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CRGR_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_SCLC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_LCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_MCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_SCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\"/><Column id=\"RN\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("6");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert", "absolute", null, "0", "41", "21", "125", null, this);
            obj.set_taborder("7");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "18", null, this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "91.16%", "21", null, "8", "1.87%", null, this);
            obj.set_taborder("10");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "45", "21", "78", null, this);
            obj.set_taborder("11");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0%", "29", null, "43", "1.87%", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("edt_SCLFNM", "absolute", "117", "10", "141", "21", null, null, this.div_search);
            obj.set_taborder("17");
            obj.set_maxlength("150");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "23", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("18");
            obj.set_text("소분류");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_comment", "absolute", "10", "83", "96.89%", "21", null, null, this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_result", "absolute", "0", "119", "98.13%", "347", null, null, this);
            obj.set_taborder("14");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_result");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"49\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"141\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"대분류\"/><Cell col=\"2\" text=\"중분류\"/><Cell col=\"3\" text=\"소분류\"/><Cell col=\"4\" displaytype=\"number\" text=\"등록일\"/><Cell col=\"5\" displaytype=\"number\" text=\"해지일\"/><Cell col=\"6\" text=\"최종변경자\"/><Cell col=\"7\" text=\"해지/재등록\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\"/><Cell col=\"1\" text=\"bind:WRS_LCLFNM\"/><Cell col=\"2\" text=\"bind:WRS_MCLFNM\"/><Cell col=\"3\" text=\"bind:WRS_SCLFNM\"/><Cell col=\"4\" displaytype=\"normal\" text=\"bind:SVC_ST_DT\" mask=\"####-##-##\"/><Cell col=\"5\" displaytype=\"normal\" text=\"bind:SVC_ED_DT\" mask=\"####-##-##\"/><Cell col=\"6\" text=\"bind:LS_CHGM_NM\"/><Cell col=\"7\" displaytype=\"button\" text=\"expr:comp.parent.gfn_length(SVC_ST_DT)== 0 &amp;&amp; comp.parent.gfn_length(SVC_ED_DT)== 0 ? '등록' : ( comp.parent.gfn_length(SVC_ED_DT)== 0 ? '해지':'재등록')\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "80.07%", "21", null, "14", "14.45%", null, this);
            obj.set_taborder("15");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("12");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1540");
            		p.set_titletext("시장정보 카테고리 관리");

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
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_5150.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_5150.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {	
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {   	
        	this.sta_comment.set_text("※ 등록/재등록 시에는 소분류 건당 월 20,000원(VAT 제외)의 금액이 과금 되오니 신중하게 선택해주세요.");
        	this.fn_retriveCtgrInfLst();
        }

        
        /*******************************************************************************************************************
         카테고리 조회
        ********************************************************************************************************************/
        this.fn_retriveCtgrInfLst = function()
        {
        	var sParams       = "sclfnm="+this.gfn_nullToEmpty(this.div_search.edt_SCLFNM.value);
        	var sSvcID        = "retriveCtgrInfLst";
        	var sURL          = "svc::rest/pt/usrinf/retriveCtgrInfLst";	
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_result=ds_result";	
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회  
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);	
        }
        /*******************************************************************************************************************
         등록/재등록/해지 트렌젝션
        ********************************************************************************************************************/
        this.fn_tran = function(status ,naTrplC,crgrSeq,lclc,mclc,sclc)
        {
         	
        	var sParams       = "status="+status+" naTrplC="+naTrplC +" crgrSeq="+crgrSeq+" lclc="+lclc+" mclc="+mclc+" sclc="+sclc;
        	var sSvcID        = "saveCtgrInf";
        	var sURL          = "svc::rest/pt/usrinf/saveCtgrInf";	
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_result=ds_result";	
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회  	
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);		
        }
        /*******************************************************************************************************************
         카테고리 조회버튼클릭
        ********************************************************************************************************************/
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_retriveCtgrInfLst();
        }
        /*******************************************************************************************************************
         엑셀다운로드
        ********************************************************************************************************************/
        this.btn_excel_onclick = function(obj,e)
        {		
        	var sParams       = "sclfnm="+this.gfn_nullToEmpty(this.div_search.edt_SCLFNM.value) +"&naTrplC="+application.gv_glnCode;	
        	this.web_downExcel.set_url(application.gv_server_url + "rest/excel/pt/downloadExcelRetriveCtgrInfLst?" + sParams);
        }
        /*******************************************************************************************************************
         카테고리추가 => 팝업화면[POPUP_SRC_WRS_CLF]
        ********************************************************************************************************************/
        this.btn_insert_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"U", dsArg:""};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("popId","POPUP::POPUP_SRC_WRS_CLF.xfdl",oArg,sOption,sPopupCallBack);	
        }

        /*******************************************************************************************************************
         그리드 버튼이벤트
        ********************************************************************************************************************/
        this.grd_result_oncellclick = function(obj,e)
        {	
        	
        	var stDt = this.gfn_nullToEmpty(this.ds_result.getColumn(e.row,"SVC_ST_DT")).length;
        	var edDt = this.gfn_nullToEmpty(this.ds_result.getColumn(e.row,"SVC_ED_DT")).length;
        	
        	
        	if(e.col == 7){
        		if(stDt == 0 && edDt ==0){			
        			this.fn_tran("I",this.ds_result.getColumn(e.row,"NA_TRPL_C"),this.ds_result.getColumn(e.row,"CRGR_SEQ"),this.ds_result.getColumn(e.row,"NA_WRS_LCLC"),this.ds_result.getColumn(e.row,"NA_WRS_MCLC"),this.ds_result.getColumn(e.row,"NA_WRS_SCLC"));
        		}
        		if(stDt > 0 && edDt ==0){
        			this.fn_tran("D",this.ds_result.getColumn(e.row,"NA_TRPL_C"),this.ds_result.getColumn(e.row,"CRGR_SEQ"),this.ds_result.getColumn(e.row,"NA_WRS_LCLC"),this.ds_result.getColumn(e.row,"NA_WRS_MCLC"),this.ds_result.getColumn(e.row,"NA_WRS_SCLC"));			
        		}
        		if(stDt > 0 && edDt >0){
        			this.fn_tran("R",this.ds_result.getColumn(e.row,"NA_TRPL_C"),this.ds_result.getColumn(e.row,"CRGR_SEQ"),this.ds_result.getColumn(e.row,"NA_WRS_LCLC"),this.ds_result.getColumn(e.row,"NA_WRS_MCLC"),this.ds_result.getColumn(e.row,"NA_WRS_SCLC"));			
        		}
        	}	
        	
        }  

        /*******************************************************************************************************************
         callback메소드
        ********************************************************************************************************************/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
          if(ErrorCode <0){
        	if(svcID == "saveCtgrInf"){
        		if(ErrorCode == "-99"){
        			alert("이미 등록된 카테고리입니다. 다른 종류의 카테고리를 선택해 주시기 바랍니다.");
        			this.fn_retriveCtgrInfLst();
        		}
        	}else{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        	}	
          }else{  
        	  if(svcID == "retriveCtgrInfLst"){
        		if(this.ds_result.rowcount == 0 ){
        			this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        		}		
        	  }else if(svcID == "saveCtgrInf"){
        		this.fn_retriveCtgrInfLst();
        	  }
          }
        	 
        }
        /*******************************************************************************************************************
         팝업 callback메소드
        ********************************************************************************************************************/
        this.fn_popupAfter = function(strId,strVal)
        {		
        	var str = strVal.split(',');
        	var NA_WRS_LCLC = str[0];
        	var NA_WRS_MCLC= str[1];
        	var NA_WRS_SCLC= str[2];
        	var NA_WRS_DTCF_C= str[3];
        	var WRS_LCLFNM= str[4];
        	var WRS_MCLFNM= str[5];
        	var WRS_SCLFNM= str[6];
        	var WRS_DTCFNM= str[7];
        	var WRS_ID_DSC= str[8];
        	
        	
        	this.ds_result.addRow();
        	this.ds_result.setColumn(this.ds_result.rowposition,"RN",(this.ds_result.rowposition+1));
        	this.ds_result.setColumn(this.ds_result.rowposition,"NA_TRPL_C",application.gv_glnCode);
        	this.ds_result.setColumn(this.ds_result.rowposition,"CRGR_SEQ","1");	
        	this.ds_result.setColumn(this.ds_result.rowposition,"NA_WRS_LCLC",NA_WRS_LCLC);
        	this.ds_result.setColumn(this.ds_result.rowposition,"NA_WRS_MCLC",NA_WRS_MCLC);
        	this.ds_result.setColumn(this.ds_result.rowposition,"NA_WRS_SCLC",NA_WRS_SCLC);
        	this.ds_result.setColumn(this.ds_result.rowposition,"WRS_LCLFNM",WRS_LCLFNM);
        	this.ds_result.setColumn(this.ds_result.rowposition,"WRS_MCLFNM",WRS_MCLFNM);
        	this.ds_result.setColumn(this.ds_result.rowposition,"WRS_SCLFNM",WRS_SCLFNM);	
        	
        }
         
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_insert.addEventHandler("onclick", this.btn_insert_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.div_search.edt_SCLFNM.addEventHandler("oneditclick", this.div_search_edt_menuId00_oneditclick, this);
            this.grd_result.addEventHandler("oncellclick", this.grd_result_oncellclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_5150.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
