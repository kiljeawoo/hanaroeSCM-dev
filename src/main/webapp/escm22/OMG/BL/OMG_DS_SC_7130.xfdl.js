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
                this.set_name("OMG_DS_SC_1165");
                this.set_titletext("청구 미적용업체");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_unapl", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"check\" type=\"INT\" size=\"1\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"PAY_COMP_NM\" type=\"STRING\" size=\"50\"/><Column id=\"BZNO\" type=\"STRING\" size=\"10\"/><Column id=\"UNAPL_RSNCTT\" type=\"STRING\" size=\"500\"/><Column id=\"UYN\" type=\"STRING\" size=\"3\"/><Column id=\"ST_DT\" type=\"STRING\" size=\"8\"/><Column id=\"ED_DT\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_delete", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"13\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"check\" type=\"INT\" size=\"1\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"PAY_COMP_NM\" type=\"STRING\" size=\"50\"/><Column id=\"BZNO\" type=\"STRING\" size=\"10\"/><Column id=\"UYN\" type=\"STRING\" size=\"3\"/><Column id=\"UNAPL_RSNCTT\" type=\"STRING\" size=\"500\"/><Column id=\"ST_DT\" type=\"STRING\" size=\"8\"/><Column id=\"ED_DT\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_del", "absolute", null, "0", "41", "21", "120", null, this);
            obj.set_taborder("11");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add", "absolute", null, "0", "41", "21", "164", null, this);
            obj.set_taborder("37");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_CRUD");
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

            obj = new Div("Div00", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("85");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("edit_gln", "absolute", "242", "10", "151", "21", null, null, this.Div00);
            obj.set_taborder("0");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("edit_compname", "absolute", "396", "10", "158", "21", null, null, this.Div00);
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btn_compname", "absolute", "557", "10", "21", "21", null, null, this.Div00);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "167", "10", "75", "21", null, null, this.Div00);
            obj.set_taborder("3");
            obj.set_text("업체조회");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "77.35%", "10", "75", "21", null, null, this.Div00);
            obj.set_taborder("4");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Combo("combo_use", "absolute", "86.9%", "10", null, "21", "1.4%", null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            var combo_use_innerdataset = new Dataset("combo_use_innerdataset", this.Div00.combo_use);
            combo_use_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(combo_use_innerdataset);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_align("left middle");
            obj.set_index("-1");
            obj = new Static("Static03", "absolute", "15", "10", "67", "21", null, null, this.Div00);
            obj.set_taborder("8");
            obj.set_text("시작월");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Div("cal_st", "absolute", "82", "10", "79", "21", null, null, this.Div00);
            obj.set_taborder("9");
            obj.set_url("common::calendarMonth.xfdl");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "0", "71", null, null, "15", "-1", this);
            obj.set_taborder("81");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Button("Button75", "absolute", "363", "0", null, "12", "362", null, this.Div02);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.Div02.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0", "42", null, null, "0", "1", this.Div02);
            obj.set_taborder("2");
            obj.set_binddataset("ds_unapl");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"65\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"협력업체 코드\"/><Cell col=\"2\" text=\"협력업체명\"/><Cell col=\"3\" text=\"미적용사유\"/><Cell col=\"4\" text=\"시작월\"/><Cell col=\"5\" text=\"종료월\"/><Cell col=\"6\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:check\"/><Cell col=\"1\" text=\"bind:NA_TRPL_C\" tooltiptext=\"bind:NA_TRPL_C\"/><Cell col=\"2\" text=\"bind:PAY_COMP_NM\" tooltiptext=\"bind:PAY_COMP_NM\"/><Cell col=\"3\" text=\"bind:UNAPL_RSNCTT\" tooltiptext=\"bind:UNAPL_RSNCTT\"/><Cell col=\"4\" text=\"bind:ST_DT\" tooltiptext=\"bind:ST_DT\"/><Cell col=\"5\" text=\"bind:ED_DT\" tooltiptext=\"bind:ED_DT\"/><Cell col=\"6\" text=\"bind:UYN\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "922", "1", "56", "15", null, null, this.Div02);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "922", "37", "56", "5", null, null, this.Div02);
            obj.set_taborder("6");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "1", "30", "15", "42", null, null, this);
            obj.set_taborder("86");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "732", "72", "56", "41", null, null, this);
            obj.set_taborder("87");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "76", null, this);
            obj.set_taborder("88");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "85.06%", "21", null, "14", "9.46%", null, this);
            obj.set_taborder("105");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("85");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("81");
            		p.set_text("Div02");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("청구 미적용업체");

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
            this._addPreloadList("fdl", "common::calendarMonth.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_7130.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_7130.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        var userposition = 0;
        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        /* Form Init */
        this.form_init = function(obj,e)
        {	
        	// 페이지 로딩후 실행부분
        	var toDay = this.gfn_today("yyyyMMdd");
        	this.Div00.cal_st._setValue(this.gfn_firstDate(toDay).substr(0, 6));
        }

        this.form_onload = function(obj,e)
        {	
        	this.gfn_setInitForm(obj, e); //공통
        	this.Div00.combo_use.set_value("1");
        	this.Div00.combo_use.set_index(0);
        }

        this.fn_afterFormOnload = function()
        {

        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        /*콜백 함수*/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "retrieveRqsUnaplCompList"){
        			if(this.ds_unapl.rowcount==0)
        			{
        				this.alert("데이터가 없습니다.");
        			}
        			else{
        				this.ds_unapl.addColumn("check", "INT");
        				for(var i = 0; i<this.ds_unapl.rowcount; i++)
        				{
        					this.ds_unapl.setColumn(i,"check",0);
        				}
        				return;
        			}
        		}
        		else if(svcID == "deleteRqsUnaplComp"){
        			this.alert("정상적으로 삭제되었습니다.");
        			this.btn_search_onclick();
        			return;
        		}
        	}

        }
        /*팝업콜백 함수*/
        this.fn_popupAfter = function(strId,strVal)
        {
        	var sParams = "NA_TRPL_C="+this.gfn_nullToEmpty(this.Div00.edit_gln.value)
        				+ " PAY_COMP_NM="+this.gfn_nullToEmpty(this.Div00.edit_compname.value)
        				+ " UYN="+this.gfn_nullToEmpty(this.Div00.combo_use.value)
        				+ " ST_DT="+this.gfn_nullToEmpty(this.Div00.cal_st._getValue())
        				;
        	var sSvcID        = "retrieveRqsUnaplCompList";
        	var sURL          = "svc::rest/bl/retrieveRqsUnaplCompList";	
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_unapl=ds_unapl";	
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회  
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }
        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        
        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/	

        /*청구 미적용업체 조회*/

        this.btn_search_onclick = function(obj,e)
        {
        	var sParams = "NA_TRPL_C="+this.gfn_nullToEmpty(this.Div00.edit_gln.value)
        				+ " PAY_COMP_NM="+this.gfn_nullToEmpty(this.Div00.edit_compname.value)
        				+ " UYN="+this.gfn_nullToEmpty(this.Div00.combo_use.value)
        				+ " ST_DT="+this.gfn_nullToEmpty(this.Div00.cal_st._getValue())
        				;		
        				
        	var sSvcID        = "retrieveRqsUnaplCompList";
        	var sURL          = "svc::rest/bl/retrieveRqsUnaplCompList";	
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_unapl=ds_unapl";
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회  
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);

        }

        this.Div02_Button75_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.Div00, this.Div02);
        }

        this.Div02_Grid01_onheadclick = function(obj,e)
        {
        	if(e.cell == 0) {
        		this.gfn_setGridCheckAll(obj,e);
        	}
        }

        /*청구 미적용업체 삭제*/
        this.btn_del_onclick = function(obj,e)
        {
        	var checkCnt = 0;
        	this.ds_delete.clearData();
        	for(var i=0; i<this.ds_unapl.rowcount; i++)
        	{
        		if(this.ds_unapl.getColumn(i,"check")==1)
        		{
        			this.ds_delete.insertRow(checkCnt);
        			this.ds_delete.copyRow(checkCnt++, this.ds_unapl, i);
        		}
        	}
        	if (checkCnt > 0)
        	{
        		var sParams = "";
        		var sSvcID        = "deleteRqsUnaplComp";
        		var sURL          = "svc::rest/bl/deleteRqsUnaplComp";	
        		var sInDatasets   = "ds_delete=ds_delete";
        		var sOutDatasets  = "";	
        		var sArgument     = sParams;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회  

        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        	else
        	{
        		alert("체크된 값이 없습니다.");
        	}
        }

        /*미적용업체 추가*/
        this.btn_add_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"I"};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("popId","OMG.BL::OMG_DS_SC_7131.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.Div00_btn_compname_onclick = function(obj,e)
        {
        	var oArg = "";
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_compopupAfter";    
        	this.gfn_openPopup("trplSearchPopup","OMG.BL::OMG_DS_SC_7230_P01.xfdl",oArg,sOption,sPopupCallBack);
        }

        /*업체조회 팝업콜백 함수*/
        this.fn_compopupAfter = function(strId,strVal)
        {
        	if(strVal != ''){
        		var paramsArr = strVal.split(",");
        	
        		if(strId == "trplSearchPopup"){
        			this.Div00.edit_gln.set_value(paramsArr[0]);
        			this.Div00.edit_compname.set_value(paramsArr[1]);
        		}
        	}
        }

        this.btn_update_onclick = function(obj,e)
        {
        	this.ds_param.clearData();
        	this.ds_param.insertRow(0);
        	this.ds_param.copyRow(0,this.ds_unapl,userposition);
        	
        	var oArg = {paramMode:"U", dsArg:this.ds_param};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("popId","OMG.BL::OMG_DS_SC_7131.xfdl",oArg,sOption,sPopupCallBack);
        }

        // 엑셀 다운로드
        this.btn_excel_onclick = function(obj,e)
        {
        	var sParams = "NA_TRPL_C="+this.gfn_nullToEmpty(this.Div00.edit_gln.value)
        				+ "&PAY_COMP_NM="+this.gfn_nullToEmpty(this.Div00.edit_compname.value)
        				+ "&UYN="+this.gfn_nullToEmpty(this.Div00.combo_use.value)
        				+ "&ST_DT="+this.gfn_nullToEmpty(this.Div00.cal_st._getValue())
        				;

        	//this.fn_excel(sParams);
        	this.web_downExcel.set_url(application.gv_serverAdmin_url + "rest/excel/bl/downloadExcelRqsUnaplComp?" + sParams);
        }

        
        this.ds_unapl_onrowposchanged = function(obj,e)
        {
        	userposition = e.newrow;
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_unapl.addEventHandler("onrowposchanged", this.ds_unapl_onrowposchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_init, this);
            this.btn_del.addEventHandler("onclick", this.btn_update_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_add.addEventHandler("onclick", this.btn_add_onclick, this);
            this.Div00.btn_compname.addEventHandler("onclick", this.Div00_btn_compname_onclick, this);
            this.Div02.Button75.addEventHandler("onclick", this.Div02_Button75_onclick, this);
            this.Div02.Grid01.addEventHandler("onheadclick", this.Div02_Grid01_onheadclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_7130.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
