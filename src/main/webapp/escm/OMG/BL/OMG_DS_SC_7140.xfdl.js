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
                this.set_name("OMG_DS_SC_6120");
                this.set_titletext("할인적용업체 관리");
                this.set_name("OMG_DS_SC_6120");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dc_comp", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"DC_MM\" type=\"STRING\" size=\"256\"/><Column id=\"BL_DFN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_COMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"DC_BF_UG_AM\" type=\"STRING\" size=\"256\"/><Column id=\"DCRT\" type=\"STRING\" size=\"256\"/><Column id=\"DC_AM\" type=\"STRING\" size=\"256\"/><Column id=\"DC_AF_UG_AM\" type=\"STRING\" size=\"256\"/><Column id=\"DC_RSNCTT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"DC_MM\" type=\"STRING\" size=\"256\"/><Column id=\"BL_DFN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_COMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"DC_BF_UG_AM\" type=\"STRING\" size=\"256\"/><Column id=\"DCRT\" type=\"STRING\" size=\"256\"/><Column id=\"DC_AM\" type=\"STRING\" size=\"256\"/><Column id=\"DC_AF_UG_AM\" type=\"STRING\" size=\"256\"/><Column id=\"DC_RSNCTT\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "18", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "787", "0", "15", "490", null, null, this);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("6");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("10");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "222", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("11");
            obj.set_text("업체조회");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_NA_TRPL_C", "absolute", "301", "10", "151", "21", null, null, this.div_search);
            obj.set_taborder("12");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_CLNTNM", "absolute", "454", "10", "159", "21", null, null, this.div_search);
            obj.set_taborder("13");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_comname", "absolute", "616", "10", "21", "21", null, null, this.div_search);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "192", "1", "30", "43", null, null, this.div_search);
            obj.set_taborder("15");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "67", "21", null, null, this.div_search);
            obj.set_taborder("17");
            obj.set_text("할인월");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("cal_DC_MM", "absolute", "82", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("18");
            obj.set_url("common::calendarMonth.xfdl");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "0", "65", "21", "78", null, this);
            obj.set_taborder("13");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "71", null, null, "15", "1", this);
            obj.set_taborder("0");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_dc_comp_list", "absolute", "0", "42", null, null, "0", "29", this.div_list);
            obj.set_taborder("2");
            obj.set_binddataset("ds_dc_comp");
            obj.set_autofittype("none");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"130\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"160\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"할인월\"/><Cell col=\"2\" text=\"빌링확정\"/><Cell col=\"3\" text=\"거래처코드\"/><Cell col=\"4\" text=\"거래처명\"/><Cell col=\"5\" text=\"사업자번호\"/><Cell col=\"6\" text=\"할인전금액\"/><Cell col=\"7\" text=\"할인율(%)\"/><Cell col=\"8\" text=\"할인금액\"/><Cell col=\"9\" text=\"할인후금액\"/><Cell col=\"10\" text=\"할인사유\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"mask\" editfilter=\"number\" text=\"bind:DC_MM\" mask=\"####-##\"/><Cell col=\"2\" text=\"bind:BL_DFN_YN\"/><Cell col=\"3\" edittype=\"text\" text=\"bind:NA_TRPL_C\"/><Cell col=\"4\" edittype=\"none\" text=\"bind:PAY_COMP_NM\"/><Cell col=\"5\" edittype=\"none\" text=\"bind:BZNO\"/><Cell col=\"6\" edittype=\"none\" text=\"bind:DC_BF_UG_AM\"/><Cell col=\"7\" edittype=\"none\" text=\"bind:DCRT\"/><Cell col=\"8\" edittype=\"text\" text=\"bind:DC_AM\"/><Cell col=\"9\" edittype=\"none\" text=\"bind:DC_AF_UG_AM\"/><Cell col=\"10\" edittype=\"text\" text=\"bind:DC_RSNCTT\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "731", "1", "56", "41", null, null, this.div_list);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_flag", "absolute", "347", "0", null, "12", "363", null, this.div_list);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_add_row", "absolute", null, "16", "53", "21", "110", null, this.div_list);
            obj.set_taborder("8");
            obj.set_text("추가");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_cpy_row", "absolute", null, "16", "53", "21", "55", null, this.div_list);
            obj.set_taborder("9");
            obj.set_text("복사");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_dlt_row", "absolute", null, "16", "53", "21", "0", null, this.div_list);
            obj.set_taborder("10");
            obj.set_text("삭제");
            this.div_list.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "83.31%", "29", null, "43", "12.95%", null, this);
            obj.set_taborder("14");
            obj.set_text("43");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 965, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 965, 444, this.div_list,
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
            		p.set_titletext("할인적용업체 관리");

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
            this._addPreloadList("fdl", "common::calendarMonth.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_7140.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_7140.xfdl", function() {
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
            //페이지 로딩후 실행부분
            /*초기값세팅*/
        //     var now = new Date();
        //     var currentMonth = "";
        //     if (now.getMonth() < 9) {
        // 		currentMonth = "0" + (now.getMonth() + 1);
        //     } else {
        // 		currentMonth = "" + (now.getMonth() + 1);
        //     }
        // 	
        //     this.div_search.cal_DC_MM._setValue(now.getYear() +  currentMonth);
           
            /*조회 호출*/
            //this.btn_search.click();  
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
         
         /*조회버튼 이벤트*/
        this.btn_search_onclick = function(obj,e)
        {
        	var sParams = "DC_MM="+this.gfn_nullToEmpty(this.div_search.cal_DC_MM._getValue())
        				+ " NA_TRPL_C="+this.gfn_nullToEmpty(this.div_search.edt_NA_TRPL_C.value);
        	
        	var sSvcID        = "retrieve";
        	var sURL          = "svc::rest/bl/retrieveRqsDcCompList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_dc_comp=ds_dc_comp";
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /*수정버튼 이벤트*/
        this.btn_insert_onclick = function(obj,e)
        {
        	var checkCnt =0 ;	//선택된 체크박스 개수
        	var position =0 ;	//선택된 체크박스 위치
        	for(var i = 0 ; i < this.ds_auttr_ac.rowcount; i++){		
        		if(this.ds_auttr_ac.getColumn(i, "CHK") =="1"){
        			checkCnt = checkCnt +1;			
        			position = i;
        		}
        	}

        	if(checkCnt > 1){
        		alert("하나만 선택해주시기 바랍니다.");
        		this.ds_param.clearData();
        		return;
        	}else if(checkCnt == 0){
        		alert("등록해야할 데이터를 선택해 주시기 바랍니다.");
        		this.ds_param.clearData();
        		return;
        	}else{
        		this.ds_param.clearData();
        		this.ds_param.insertRow(0);
        		this.ds_param.copyRow(0,this.ds_auttr_ac,position);		

        		if (this.ds_param.getColumn(0, "PRC_ST_NM") != "미접수") {
        			alert("이미 자동이체 계좌 등록신청을 하였습니다.");
        			return;
        		}
        		var sParams = "";
        		
        		var sSvcID        = "insert";
        		var sURL          = "svc::rest/bl/insertAuttrAc"
        		var sInDatasets   = "ds_param=ds_param";
        		var sOutDatasets  = "";
        		var sArgument     = sParams;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회
        					
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
         /*팝업호출확인하기*/
        this.fn_popupAfter = function(strId,strVal)
        {	
        	if (strId == "POPUP_SRC_SPYPL_TRPL") {
        		var aryVal = strVal.split(",",2);
        		this.div_search.edt_NA_TRPL_C.set_value(aryVal[0]);
        		this.div_search.edt_CLNTNM.set_value(aryVal[1]);
        	}
        }

         /*상단 체크박스 선택 시 전체선택 및 해제하는 이벤트*/
        this.grd_dc_comp_list_onheadclick = function(obj,e)
        {	
        	if(e.cell == 0) {
        		this.gfn_setGridCheckAll(obj,e);
        	}
        }

         /*콜백메소드*/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {		
        	this.ds_dc_comp.addColumn("CHK", "string");
        	
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        	 	if(svcID == "retrieve"){
        			if(this.ds_dc_comp.rowcount == 0){
        	 			this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        	 		} else {
        				for(var i = 0; i<this.ds_dc_comp.rowcount; i++) {
        					this.ds_dc_comp.setColumn(i,"CHK",0);
        					this.ds_dc_comp.updatecontrol = false;
        					this.ds_dc_comp.setRowType(i, Dataset.ROWTYPE_NORMAL);
        					this.ds_dc_comp.updatecontrol = true;
        				}
        			}
        	 	}
        	 	else if (svcID == "save") {
        			this.ds_param.clearData();
        			this.btn_search.click();
        	 	}
        	 }	

        }

        this.btn_flag_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.btn_add_row_onclick = function(obj,e)
        {
        	var rowIndex = this.ds_dc_comp.addRow();
        	
        }

        this.btn_cpy_row_onclick = function(obj,e)
        {
        	for (var i = 0; i<this.ds_dc_comp.rowcount; i++) {
        		if (this.ds_dc_comp.getColumn(i, "CHK") == 1) {
        			var rowIndex = this.ds_dc_comp.addRow();
        			this.ds_dc_comp.copyRow(rowIndex, this.ds_dc_comp, i);
        			var nextMonth = this.gfn_addMonth(this.ds_dc_comp.getColumn(rowIndex, "DC_MM") + "01", 1).substr(0,6);
        			
        			this.ds_dc_comp.setColumn(i, "CHK", 0);
        			this.ds_dc_comp.updatecontrol = false;
        			this.ds_dc_comp.setRowType(i, Dataset.ROWTYPE_NORMAL);
        			this.ds_dc_comp.updatecontrol = true;
        			this.ds_dc_comp.setColumn(rowIndex, "CHK", 0);
        			this.ds_dc_comp.setColumn(rowIndex, "DC_MM", nextMonth);
        		}
        	}
        }

        this.ds_dc_comp_oncolumnchanged = function(obj,e)
        {
        	
        }

        
        this.btn_save_onclick = function(obj,e)
        {
        	for(var i=0; i<this.ds_dc_comp.rowcount; i++) {
        		var chk_DC_MM = this.ds_dc_comp.getColumn(i, "DC_MM");
        		var chk_NA_TRPL_C = this.ds_dc_comp.getColumn(i, "NA_TRPL_C");
        		trace("chk_DC_MM=" + chk_DC_MM);
        		trace("chk_NA_TRPL_C=" + chk_NA_TRPL_C);
        		if (this.gfn_nullToEmpty(chk_DC_MM) == "" || this.gfn_nullToEmpty(chk_NA_TRPL_C) == "") {
        			alert("데이터가 입력되지 않아 저장할 수 없습니다.");
        			this.div_list.grd_dc_comp_list.selectRow(i);
        			return;
        		}
        		
        		if (this.ds_dc_comp.getRowType(i) == Dataset.ROWTYPE_UPDATE) {
        			var addRowIndex = this.ds_param.addRow();
        			this.ds_param.copyRow(addRowIndex, this.ds_dc_comp, i);
        			this.ds_param.setColumn(addRowIndex, "ROW_TYPE", "U");
        		} else if (this.ds_dc_comp.getRowType(i) == Dataset.ROWTYPE_INSERT) {
        			var idx = 0;
        			for (; idx<this.ds_dc_comp.rowcount; idx++) {
        				if (idx == i) {
        					continue;
        				}
        				if (chk_DC_MM == this.ds_dc_comp.getColumn(idx, "DC_MM")
        					&& chk_NA_TRPL_C == this.ds_dc_comp.getColumn(idx, "NA_TRPL_C")) {
        					alert("이미 입력된 데이터가 있습니다. 데이터를 수정해주세요.");
        					this.div_list.grd_dc_comp_list.selectRow(i);
        					return;
        				}
        			}
        			var addRowIndex = this.ds_param.addRow();
        			this.ds_param.copyRow(addRowIndex, this.ds_dc_comp, i);
        			this.ds_param.setColumn(addRowIndex, "ROW_TYPE", "I");
        		}
        		
        	}
        	
        	for (var j=0; j<this.ds_param.rowcount; j++) {
        		trace("ROW_TYPE(" + j + ")=" + this.ds_param.getColumn(j, "ROW_TYPE"));
        	}
        	
        	if (this.ds_param.rowcount == 0) {
        		alert("변경된 사항이 없어 저장할 수 없습니다.");
        		return;
        	}
        	var sParams = "";
        	var sSvcID        = "save";
        	var sURL          = "svc::rest/bl/saveRqsDcCompList"
        	var sInDatasets   = "ds_param=ds_param";
        	var sOutDatasets  = "";
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	
        	//this.ds_param.clearData();
        }

        this.btn_dlt_row_onclick = function(obj,e)
        {
        	for (var i = 0; i<this.ds_dc_comp.rowcount; i++) {
        		if (this.ds_dc_comp.getColumn(i, "CHK") == 1) {
        			var chk_DC_MM = this.ds_dc_comp.getColumn(i, "DC_MM");
        			var chk_NA_TRPL_C = this.ds_dc_comp.getColumn(i, "NA_TRPL_C");
        			if (this.gfn_nullToEmpty(chk_DC_MM) != "" && this.gfn_nullToEmpty(chk_NA_TRPL_C) != "") {
        				var addRowIndex = this.ds_param.addRow();
        				this.ds_param.copyRow(addRowIndex, this.ds_dc_comp, i);
        				this.ds_param.setColumn(addRowIndex, "ROW_TYPE", "D");
        			}
        			trace("btn_dlt_row_onclick ds_param.rowcount=" + this.ds_param.rowcount);
        			this.ds_dc_comp.deleteRow(i);
        		}
        	}
        }

        this.btn_comname_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"U", dsArg:this.Dataset00};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("POPUP_SRC_SPYPL_TRPL","POPUP::POPUP_SRC_SPYPL_TRPL.xfdl",oArg,sOption,sPopupCallBack);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_dc_comp.addEventHandler("oncolumnchanged", this.ds_dc_comp_oncolumnchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_search.btn_comname.addEventHandler("onclick", this.btn_comname_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.div_list.grd_dc_comp_list.addEventHandler("onheadclick", this.grd_dc_comp_list_onheadclick, this);
            this.div_list.btn_flag.addEventHandler("onclick", this.btn_flag_onclick, this);
            this.div_list.btn_add_row.addEventHandler("onclick", this.btn_add_row_onclick, this);
            this.div_list.btn_cpy_row.addEventHandler("onclick", this.btn_cpy_row_onclick, this);
            this.div_list.btn_dlt_row.addEventHandler("onclick", this.btn_dlt_row_onclick, this);
            this.Static05.addEventHandler("onclick", this.Static04_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_7140.xfdl");
        this.loadPreloadList();
       
    };
}
)();
