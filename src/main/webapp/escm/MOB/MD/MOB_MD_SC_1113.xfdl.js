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
                this.set_name("OMG_DS_SC_6130");
                this.set_titletext("유형코드조회");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_mdUsrSig", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STAT\" type=\"STRING\" size=\"256\"/><Column id=\"CRUD\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"32\"/><Column id=\"SIG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"SIG_ORD\" type=\"STRING\" size=\"30\"/><Column id=\"TITLE\" type=\"STRING\" size=\"60\"/><Column id=\"FSRG_DTM\" type=\"DATE\" size=\"30\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"16\"/><Column id=\"LSCHG_DTM\" type=\"DATE\" size=\"30\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"16\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_param", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NUMBER\" type=\"STRING\" size=\"32\"/><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"SIMP_TPC\" type=\"STRING\" size=\"30\"/><Column id=\"SIMP_TPCNM\" type=\"STRING\" size=\"150\"/><Column id=\"SYSNM\" type=\"STRING\" size=\"150\"/><Column id=\"SIMP_T_EXPL\" type=\"STRING\" size=\"100\"/><Column id=\"UYN\" type=\"STRING\" size=\"1\"/><Column id=\"FSRG_DTM\" type=\"DATE\" size=\"30\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"16\"/><Column id=\"LSCHG_DTM\" type=\"DATE\" size=\"30\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"16\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mdUsrSig_Struct", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STAT\" type=\"STRING\" size=\"256\"/><Column id=\"CRUD\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"32\"/><Column id=\"SIG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"SIG_ORD\" type=\"STRING\" size=\"30\"/><Column id=\"TITLE\" type=\"STRING\" size=\"60\"/><Column id=\"FSRG_DTM\" type=\"DATE\" size=\"30\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"16\"/><Column id=\"LSCHG_DTM\" type=\"DATE\" size=\"30\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"16\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("68");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "788", "0", "15", "490", null, null, this);
            obj.set_taborder("71");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_update", "absolute", null, "0", "41", "21", "77", null, this);
            obj.set_taborder("72");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "18", null, this);
            obj.set_taborder("73");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert", "absolute", null, "0", "41", "21", "167", null, this);
            obj.set_taborder("74");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "98.01%", "0", null, "490", "0.12%", null, this);
            obj.set_taborder("75");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "91.16%", "21", null, "8", "1.87%", null, this);
            obj.set_taborder("76");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete", "absolute", null, "0", "45", "21", "120", null, this);
            obj.set_taborder("78");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0%", "25", null, null, "15", "1", this);
            obj.set_taborder("80");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_mdUsrSigList", "absolute", "0%", "42", null, null, "0%", "29", this.div_list);
            obj.set_taborder("0");
            obj.set_binddataset("ds_mdUsrSig");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"102\"/><Column size=\"241\"/><Column size=\"170\"/><Column size=\"68\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"서명자\"/><Cell col=\"2\" text=\"최종변경일\"/><Cell col=\"3\" text=\"상태\"/></Band><Band id=\"body\"><Cell edittype=\"text\" style=\"align:center;\" text=\"bind:SIG_ORD\" autosizecol=\"none\"/><Cell col=\"1\" edittype=\"text\" style=\"align:center;\" text=\"bind:TITLE\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:LSCHG_DTM\"/><Cell col=\"3\" text=\"bind:STAT\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_paging", "absolute", "28.55%", null, "338", "29", null, "-2", this.div_list);
            obj.set_taborder("2");
            obj.style.set_align("center middle");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "92.77%", "1", null, "41", "0.13%", null, this.div_list);
            obj.set_taborder("3");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("80");
            		p.set_text("Div02");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("유형코드조회");

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
            this._addPreloadList("fdl", "common::location.xfdl");
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("MOB_MD_SC_1113.xfdl", "lib::comLib.xjs");
        this.registerScript("MOB_MD_SC_1113.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }
        this.fn_afterFormOnload = function()
        {

            /*조회 호출*/
           this.btn_search.click();  
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
         
         /*조회버튼 이벤트*/
        this.btn_search_onclick = function(obj,e)
        {

        	var param	=  "MD_ID="	+ ""
        				;

        	var sSvcID			= "retrieveMdUsrSigList";
        	var sURL			= "svc::rest/mob/retrieveMdUsrSigList";
        	var sInDatasets		= "";				   	     // 보내는데이터셋
        	var sOutDatasets	= "ds_mdUsrSig=ds_mdUsrSig"; // 화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument		= param;
        	var sCallbackFunc	= "fn_callBack";
        	var sTranType		= "S";										// U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /*
         *  등록정보 없을때 데이터셋 구조생성
         */
        this.addFirstRow = function(){
            var ds = this.ds_mdUsrSig ;
            this.ds_mdUsrSig.addColumn("STAT");
            this.ds_mdUsrSig.addColumn("CRUD");
            this.ds_mdUsrSig.addColumn("CHK");
            this.ds_mdUsrSig.addColumn("MB_ID");
            this.ds_mdUsrSig.addColumn("SIG_ID");
            this.ds_mdUsrSig.addColumn("SIG_ORD");
            this.ds_mdUsrSig.addColumn("TITLE");
            this.ds_mdUsrSig.addColumn("FSRG_DTM");
            this.ds_mdUsrSig.addColumn("FS_RGM");
            this.ds_mdUsrSig.addColumn("LSCHG_DTM");
            this.ds_mdUsrSig.addColumn("LS_CHGM");
            this.ds_mdUsrSig.addRow();

        }
         /*등록버튼 이벤트*/
        this.btn_insert_onclick = function(obj,e)
        {
            if(this.ds_mdUsrSig.rowcount<1){
                // 구조생성
                this.addFirstRow();
                // ds_mdUsrSig_Struct
                // this.ds_mdUsrSig = this.ds_mdUsrSig_Struct;
            }else{
                this.ds_mdUsrSig.addRow();
            }
            
            var rowPos = this.ds_mdUsrSig.rowcount-1;
            // alert( rowPos);
            
            this.ds_mdUsrSig.setColumn(rowPos, "CRUD", "C");
            this.ds_mdUsrSig.setColumn(rowPos, "CRUD", "C");
            this.ds_mdUsrSig.setColumn(rowPos, "SIG_ID",rowPos*1+1);
            this.ds_mdUsrSig.setColumn(rowPos, "SIG_ORD",rowPos*1+1);

            
        }

         /* 값 수정시 CRUD 변경 */
        this.ds_mdUsrSig_oncolumnchanged = function(obj,e)
        {
            // alert(e.row);

           if(e.columnid != "CRUD")
           {
              // obj:Dataset  ds_mdUsrSig
              // this.ds_mdUsrSig.setColumn(this.ds_mdUsrSig.rowposition, "CRUD", "U");
               
               if( obj.getColumn(e.row, "CRUD") != "C"
                   &&
                   obj.getColumn(e.row, "CRUD") != "D"
                   )
                   {
                       obj.setColumn( obj.rowposition, "CRUD", "U");
                   }
                
           }else{
               // alert(e.columnid);
               // alert(e.row);
           }
           
        }

        /* 수정버튼 이벤트 */
        this.btn_update_onclick = function(obj,e)
        {
        	var checkCnt =0 ;	//선택된 체크박스 개수
        	
        	for(var i = 0 ; i < this.ds_mdUsrSig.rowcount; i++){		
        	
        		if(this.ds_mdUsrSig.getColumn(i, "CHK") == "1"){
        		  checkCnt = checkCnt +1;
        		}	
        	}

            // validation
            
        	if(this.ds_mdUsrSig.rowcount > 0){

        		var sParams       = "";
        		var sSvcID        = "saveMdUsrSigList";
        		var sURL          = "svc::rest/mob/saveMdUsrSigList"
        		var sInDatasets   = "ds_mdUsrSig=ds_mdUsrSig";
        		var sOutDatasets  = "";	
        		var sArgument     = "";
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회

        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);

        	}else {
        		alert("삭제할 데이터를 선택해 주시기 바랍니다.");
        		this.ds_param.clearData();
        		return;
        	 } 
        }

        /*삭제버튼 이벤트*/
        this.btn_delete_onclick = function(obj,e)
        {
            var ds = this.ds_mdUsrSig ;
            var rowpos = ds.rowposition;
            var curCrud = this.ds_mdUsrSig.getColumn(rowpos, "CRUD") ;
            trace("rowpos: " + rowpos);
            trace("curCrud: " + curCrud);
            
           if( curCrud == "C" )
           {
               this.ds_mdUsrSig.deleteRow(rowpos);
               //setColumn(this.ds_mdUsrSig.rowposition, "CRUD", "D");
           }else{
               this.ds_mdUsrSig.setColumn(rowpos, "CRUD", "D");
               this.ds_mdUsrSig.setColumn(rowpos, "STAT", "삭제");
               
           }
        	

        }

        
         /*팝업호출확인하기*/
        this.fn_popupAfter = function(strId,strVal)
        {	
        	this.btn_search.click();
        }

         /*상단 체크박스 선택 시 전체선택 및 해제하는 이벤트*/
        this.Div02_Grid01_onheadclick = function(obj,e)
        {	
        	if(e.cell == 0) {
        		this.gfn_setGridCheckAll(obj,e);
        	}
        }

         /*콜백메소드*/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {		
        	//var current_page = this.ds_pageVO.getColumn(0, "CURRENT_PAGE");
        	//var page_size    = this.ds_pageVO.getColumn(0,"PAGE_SIZE");
        	//var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        	trace("ErrorCode: " + ErrorCode);
        	trace("svcID: " + svcID);
        	
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        			
        	}else{
        	 	if(svcID == "retrieveMdUsrSigList"){		
        	 		if(this.ds_mdUsrSig.rowcount == 0){
        	 			this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        	 			//this.div_list.div_paging.fn_pageSet(0, 0,"div_paging",current_page);
        	 		}
        	 	}
        	 	else if(svcID=="saveMdUsrSigList"){		

        			this.gfn_getMessage("alert", "result.message.save.success");		
        			
        			// 저장 시 자동조회
        			this.btn_search.click();
        	 	}
        	 	else{
        	 		if(this.ds_mdUsrSig.rowcount == 0){
        	 			this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        	 		}
        	 	}
        	 }	
        			

        }

        this.btn_flag_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_mdUsrSig.addEventHandler("oncolumnchanged", this.ds_mdUsrSig_oncolumnchanged, this);
            this.ds_mdUsrSig_Struct.addEventHandler("oncolumnchanged", this.ds_mdUsrSig_oncolumnchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_update.addEventHandler("onclick", this.btn_update_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_insert.addEventHandler("onclick", this.btn_insert_onclick, this);
            this.btn_delete.addEventHandler("onclick", this.btn_delete_onclick, this);
            this.div_list.grd_mdUsrSigList.addEventHandler("onheadclick", this.Div02_Grid01_onheadclick, this);

        };

        this.loadIncludeScript("MOB_MD_SC_1113.xfdl");
        this.loadPreloadList();
       
    };
}
)();
