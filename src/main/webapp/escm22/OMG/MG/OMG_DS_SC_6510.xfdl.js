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
                this.set_name("OMG_DS_SC_5060");
                this.set_titletext("회원조회");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

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

            obj = new Static("Static02", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("72");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "42", "15", null, this);
            obj.set_taborder("85");
            obj.set_cssclass("div_WFSA_Searchbg");
            obj.set_enable("true");
            this.addChild(obj.name, obj);
            obj = new Edit("edt_MB_ID", "absolute", "106", "10", "140", "21", null, null, this.div_search);
            obj.set_taborder("76");
            obj.set_maxlength("9");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "91", "21", null, null, this.div_search);
            obj.set_taborder("77");
            obj.set_text("회원ID");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "507", "31", "30", "40", null, null, this);
            obj.set_taborder("84");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "1", "30", "15", "40", null, null, this);
            obj.set_taborder("86");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "246", "29", "30", "40", null, null, this);
            obj.set_taborder("88");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "70", null, null, "9", "2", this);
            obj.set_taborder("0");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Button("Button", "absolute", "363", "0", null, "12", "362", null, this.div_list);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "922", "1", "56", "15", null, null, this.div_list);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Tab("Tab00", "absolute", "0", "23", "99.11%", null, null, "8", this.div_list);
            obj.set_taborder("6");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.style.set_showextrabutton("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.div_list.Tab00);
            obj.set_text("회원정보");
            obj.set_url("OMG.MG::OMG_DS_SC_6511.xfdl");
            this.div_list.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.div_list.Tab00);
            obj.set_text("응답내역등록");
            obj.set_async("false");
            this.div_list.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage3", this.div_list.Tab00);
            obj.set_text("청구및납부내역");
            obj.set_async("false");
            this.div_list.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage4", this.div_list.Tab00);
            obj.set_text("EDI서비스일별내역");
            obj.set_async("false");
            this.div_list.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage5", this.div_list.Tab00);
            obj.set_text("세금계산서발행내역");
            obj.set_async("false");
            this.div_list.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage6", this.div_list.Tab00);
            obj.set_text("매출조회");
            obj.set_async("false");
            this.div_list.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage7", this.div_list.Tab00);
            obj.set_text("서비스변경현황");
            obj.set_async("false");
            this.div_list.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage8", this.div_list.Tab00);
            obj.set_text("부가정보일별내역");
            obj.set_async("false");
            this.div_list.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage9", this.div_list.Tab00);
            obj.set_text("정보분석조회");
            obj.set_async("false");
            this.div_list.Tab00.addChild(obj.name, obj);

            obj = new Edit("edt_org_mb_id", "absolute", "70", "514", "17.43%", "21", null, null, this);
            obj.set_taborder("92");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 42, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("85");
            		p.set_cssclass("div_WFSA_Searchbg");
            		p.set_enable("true");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div02");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("회원조회");

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
            this._addPreloadList("fdl", "OMG.MG::OMG_DS_SC_6511.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_6510.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6510.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {   
           this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
           //페이지 로딩후 실행부분         
        }
         

        
        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        /*조회*/
        this.btn_search_onclick = function(obj,e)
        {
        	this.edt_org_mb_id.set_value(this.div_search.edt_MB_ID.value);
        	this.div_list.Tab00.tabpage1.fn_retriveUsrInfo(this.div_search.edt_MB_ID.value,'' ,'');	 
        	
        	if(!this.gfn_isNull(this.edt_org_mb_id.value) &&(this.div_search.edt_MB_ID.value != this.div_list.Tab00.tabpage1.edt_MB_ID.value)){
        		this.div_list.Tab00.set_tabindex(0);			
        	}
        }

        /*tabpage 및 데이터셋 초기화*/
        this.fn_initTabUrl = function (){		

        	this.div_list.Tab00.tabpage1.fn_clearDataSet();		
        	this.div_list.Tab00.tabpage2.set_url("");
        	this.div_list.Tab00.tabpage3.set_url("");
        	this.div_list.Tab00.tabpage4.set_url("");
        	this.div_list.Tab00.tabpage5.set_url("");
        	this.div_list.Tab00.tabpage6.set_url("");
        	this.div_list.Tab00.tabpage7.set_url("");
        	this.div_list.Tab00.tabpage8.set_url("");
        	this.div_list.Tab00.tabpage9.set_url("");
        	this.div_list.Tab00.set_tabindex(0);
        }

        /*tabpage 조회 */
        this.Tab00_onchanged = function(obj,e){	
        	
        	if(e.preindex >=0 ){ 		
        		if(this.gfn_isNull(this.div_search.edt_MB_ID.value) || this.gfn_isNull(this.div_list.Tab00.tabpage1.ds_usrInfo.getColumn(0,"MB_ID"))){			
        			if(e.postindex !=0){
        				alert("회원ID로 조회 후 회원정보를 확인해주시기 바랍니다.");	
        			}
        			this.div_list.Tab00.set_tabindex(0);	
        			return false;
        		}
        			
        		if(this.div_list.Tab00.tabpage1.ds_usrInfo.getColumn(0,"MB_ID") != this.div_search.edt_MB_ID.value){
        			if(e.postindex ==0){				
        				this.fn_initTabUrl();
        			}else{
        				alert("회원ID값이 변경되었습니다. 회원ID로 조회 후 회원정보를 확인해주시기 바랍니다.");
        			}
        			this.div_list.Tab00.set_tabindex(0);	
        			return false;
        		}
        		 
        		if(e.postindex ==0){		
        		
        		}else if(e.postindex ==1){
        			//응대내역등록
        			if(this.gfn_isNull(this.div_list.Tab00.tabpage2.url)){
        				this.div_list.Tab00.tabpage2.set_url("OMG.MG::OMG_DS_SC_6512.xfdl");
        				this.div_list.Tab00.tabpage2.ds_qstIns.setColumn(0, "MB_ID", this.div_search.edt_MB_ID.value);
        				this.div_list.Tab00.tabpage2.edt_NA_TRPL_C.set_value(this.div_list.Tab00.tabpage1.edt_NA_TRPL_C.value);
        				this.div_list.Tab00.tabpage2.Edit_comnum.set_value(this.div_list.Tab00.tabpage1.edt_NA_TRPL_C.value);
        				this.div_list.Tab00.tabpage2.edt_CLNTNM.set_value(this.div_list.Tab00.tabpage1.edt_CLNTNM.value);
        				this.div_list.Tab00.tabpage2.edt_USR_NM.set_value(this.div_list.Tab00.tabpage1.edt_USR_NM.value);
        				this.div_list.Tab00.tabpage2.cbo_HP.set_value(this.div_list.Tab00.tabpage1.cbo_HP.value);
        				this.div_list.Tab00.tabpage2.edt_HP01.set_value(this.div_list.Tab00.tabpage1.edt_HP01.value);
        				this.div_list.Tab00.tabpage2.edt_HP02.set_value(this.div_list.Tab00.tabpage1.edt_HP02.value);
        			}
        		}else if(e.postindex ==2){
        			//청구및납부내역		
        			if(this.gfn_isNull(this.div_list.Tab00.tabpage3.url)){			
        				this.div_list.Tab00.tabpage3.set_url("OMG.MG::OMG_DS_SC_6513.xfdl");
        			}
        		}else if(e.postindex ==3){
        			//EDI서비스 일별내역
        			if(this.gfn_isNull(this.div_list.Tab00.tabpage4.url)){				
        				this.div_list.Tab00.tabpage4.set_url("OMG.MG::OMG_DS_SC_6514.xfdl");
        				var mbcoDsc = this.div_list.Tab00.tabpage1.ds_usrInfo.getColumn(0,"NA_MBCO_DSC");								
        				this.div_list.Tab00.tabpage4.fn_retriveUsrInfo(this.div_list.Tab00.tabpage1.edt_NA_TRPL_C.value , mbcoDsc);				
        			}
        		}else if(e.postindex ==4){
        			//세금계산서발행내역
        			if(this.gfn_isNull(this.div_list.Tab00.tabpage5.url)){				
        				this.div_list.Tab00.tabpage5.set_url("OMG.MG::OMG_DS_SC_6515.xfdl");				
        				this.div_list.Tab00.tabpage5.fn_retriveUsrInfo(this.div_list.Tab00.tabpage1.edt_MB_ID.value);
        			}
        		}else if(e.postindex ==5){
        			//매출조회
        			if(this.gfn_isNull(this.div_list.Tab00.tabpage6.url)){				
        				this.div_list.Tab00.tabpage6.set_url("OMG.MG::OMG_DS_SC_6516.xfdl");				
        				this.div_list.Tab00.tabpage6.fn_retriveUsrInfo(this.div_list.Tab00.tabpage1.edt_NA_TRPL_C.value,"Y");
        			}
        		}else if(e.postindex ==6){			
        			//서비스변경현황
        			if(this.gfn_isNull(this.div_list.Tab00.tabpage7.url)){				
        				this.div_list.Tab00.tabpage7.set_url("OMG.MG::OMG_DS_SC_6517.xfdl");						
        				this.div_list.Tab00.tabpage7.fn_retriveUsrInfo(this.div_list.Tab00.tabpage1.edt_NA_TRPL_C.value);
        			}
        		}else if(e.postindex ==7){			
        			//부가정보일별내역		
        			if(this.gfn_isNull(this.div_list.Tab00.tabpage8.url)){				
        				this.div_list.Tab00.tabpage8.set_url("OMG.MG::OMG_DS_SC_6518.xfdl");									 
        				var mbcoDsc = this.div_list.Tab00.tabpage1.ds_usrInfo.getColumn(0,"NA_MBCO_DSC");
        				var initParam ="Y";
        				this.div_list.Tab00.tabpage8.fn_retriveUsrInfo(this.div_list.Tab00.tabpage1.edt_NA_TRPL_C.value,mbcoDsc,initParam);				
        			}
        		}else if(e.postindex ==8){			
        			//정보분석조회		
        			if(this.gfn_isNull(this.div_list.Tab00.tabpage9.url)){				
        				this.div_list.Tab00.tabpage9.set_url("OMG.MG::OMG_DS_SC_6519.xfdl");									 
        				var mbcoDsc = this.div_list.Tab00.tabpage1.ds_usrInfo.getColumn(0,"NA_MBCO_DSC");
        				var initParam ="Y";
        				
        				trace("mbcoDsc =>>  "+mbcoDsc   +":::  initParam =>>   "+initParam );
        				this.div_list.Tab00.tabpage9.fn_test(this.div_list.Tab00.tabpage1.edt_NA_TRPL_C.value,mbcoDsc,initParam);	
        				
        			}
        		}						
        	}
        }
         

        this.div_list_Button_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.Static04.addEventHandler("onclick", this.Static04_onclick, this);
            this.div_list.Button.addEventHandler("onclick", this.div_list_Button_onclick, this);
            this.div_list.Tab00.addEventHandler("onchanged", this.Tab00_onchanged, this);
            this.div_list.Tab00.tabpage1.addEventHandler("onclick", this.div_list_Tab00_tabpage1_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6510.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
