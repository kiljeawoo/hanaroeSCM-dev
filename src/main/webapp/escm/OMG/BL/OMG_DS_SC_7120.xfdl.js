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
                this.set_name("pattern_01");
                this.set_titletext("대납업체관리");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pay_p", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"check\" type=\"INT\" size=\"3\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"PAY_COMP_NM\" type=\"STRING\" size=\"50\"/><Column id=\"BZNO\" type=\"STRING\" size=\"10\"/><Column id=\"LSCHG_DAY\" type=\"STRING\" size=\"10\"/><Column id=\"LSCHG_TIME\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pay", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"check\" type=\"INT\" size=\"3\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"PAY_COMP_NM\" type=\"STRING\" size=\"50\"/><Column id=\"BZNO\" type=\"STRING\" size=\"10\"/><Column id=\"LSCHG_DAY\" type=\"STRING\" size=\"10\"/><Column id=\"LSCHG_TIME\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
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


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("6");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "733", "21", "55", "8", null, null, this);
            obj.set_taborder("4");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "788", "5", "15", "491", null, null, this);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "743", "315", null, "5", "15", null, this);
            obj.set_taborder("7");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "91.16%", "21", null, "8", "1.87%", null, this);
            obj.set_taborder("14");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "0%", "29", null, "43", "15", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("Edit_comnum", "absolute", "11.45%", "10", null, "21", "69.34%", null, this.Div00);
            obj.set_taborder("8");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit_comname", "absolute", "31.04%", "10", null, "21", "48.85%", null, this.Div00);
            obj.set_taborder("9");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btn_comname", "absolute", "51.53%", "10", null, "21", "45.8%", null, this.Div00);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "1.91%", "10", null, "21", "88.55%", null, this.Div00);
            obj.set_taborder("11");
            obj.set_text("업체조회");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "58.02%", "10", null, "21", "32.44%", null, this.Div00);
            obj.set_taborder("12");
            obj.set_text("사용유무");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "54.2%", "1", null, "43", "41.98%", null, this.Div00);
            obj.set_taborder("13");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.Div00.addChild(obj.name, obj);
            obj = new Combo("combo_use", "absolute", "67.56%", "10", null, "21", "20.74%", null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            var combo_use_innerdataset = new Dataset("combo_use_innerdataset", this.Div00.combo_use);
            combo_use_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(combo_use_innerdataset);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_align("left middle");
            obj.set_index("-1");

            obj = new Static("Static05", "absolute", "0.12%", "30", null, "42", "98.01%", null, this);
            obj.set_taborder("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add1", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("18");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("19");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "91.16%", "72", null, "41", "1.87%", null, this);
            obj.set_taborder("20");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "0", "71", null, "475", "15", null, this);
            obj.set_taborder("8");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0", "248", null, "170", "0", null, this.Div02);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_pay");
            obj.set_cellsizingtype("col");
            obj.set_selectscrollmode("default");
            obj.set_scrollbars("autoboth");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"51\"/><Column size=\"151\"/><Column size=\"145\"/><Column size=\"148\"/><Column size=\"175\"/><Column size=\"130\"/><Column size=\"130\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"협력업체 코드\"/><Cell col=\"3\" text=\"협력업체명\"/><Cell col=\"4\" text=\"사업자번호\"/><Cell col=\"5\" text=\"처리일자\"/><Cell col=\"6\" text=\"처리시간\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:check\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:NA_TRPL_C\" tooltiptext=\"bind:NA_TRPL_C\"/><Cell col=\"3\" text=\"bind:PAY_COMP_NM\" tooltiptext=\"bind:PAY_COMP_NM\"/><Cell col=\"4\" text=\"bind:BZNO\" tooltiptext=\"bind:BZNO\"/><Cell col=\"5\" text=\"bind:LSCHG_DAY\" editautoselect=\"false\" tooltiptext=\"bind:LSCHG_DAY\"/><Cell col=\"6\" text=\"bind:LSCHG_TIME\" tooltiptext=\"bind:LSCHG_TIME\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0", "41", null, "170", "0", null, this.Div02);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_pay_p");
            obj.set_useselcolor("false");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"51\"/><Column size=\"145\"/><Column size=\"148\"/><Column size=\"175\"/><Column size=\"130\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"협력업체 코드\"/><Cell col=\"2\" text=\"협력업체명\"/><Cell col=\"3\" text=\"사업자번호\"/><Cell col=\"4\" text=\"처리일자\"/><Cell col=\"5\" text=\"처리시간\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:check\"/><Cell col=\"1\" text=\"bind:NA_TRPL_C\" tooltiptext=\"bind:NA_TRPL_C\"/><Cell col=\"2\" text=\"bind:PAY_COMP_NM\" tooltiptext=\"bind:PAY_COMP_NM\"/><Cell col=\"3\" text=\"bind:BZNO\" tooltiptext=\"bind:BZNO\"/><Cell col=\"4\" text=\"bind:LSCHG_DAY\" tooltiptext=\"bind:LSCHG_DAY\"/><Cell col=\"5\" text=\"bind:LSCHG_TIME\" tooltiptext=\"bind:LSCHG_TIME\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static_edi", "absolute", "0%", "21", null, "21", "62.15%", null, this.Div02);
            obj.set_taborder("47");
            obj.set_text("대납업체리스트 (실제 요금 청구/납부 업체)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("btn_add2", "absolute", null, "222", "53", "21", "0", null, this.Div02);
            obj.set_taborder("7");
            obj.set_text("추가");
            obj.set_enable("false");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("btn_del2", "absolute", null, "222", "53", "21", "55", null, this.Div02);
            obj.set_taborder("8");
            obj.set_text("삭제");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static_edi00", "absolute", "0%", "226", null, "21", "53.81%", null, this.Div02);
            obj.set_taborder("48");
            obj.set_text("대납 대상업체 리스트 (타 사업자로 요금청구되는 업체)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "33.12%", "211", null, "15", "59.9%", null, this.Div02);
            obj.set_taborder("51");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "363", "0", null, "12", "362", null, this.Div02);
            obj.set_taborder("52");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("btn_excel", "absolute", null, "222", "53", "21", "110", null, this.Div02);
            obj.set_taborder("53");
            obj.set_text("엑셀");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static_edi01", "absolute", "346", "225", null, "21", "370", null, this.Div02);
            obj.set_taborder("54");
            obj.style.set_border("10 none #808080ff");
            obj.style.set_font("bold 9 Gulim");
            this.Div02.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("15");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 475, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("8");
            		p.set_text("Div02");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("대납업체관리");

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
        this.addIncludeScript("OMG_DS_SC_7120.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_7120.xfdl", function() {
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
        		if(svcID == "retrievePrxpCompList"){
        			if(this.ds_pay_p.rowcount==0)
        			{
        				this.alert("데이터가 없습니다.");
        			}
        			else{
        				this.ds_pay_p.addColumn("check", "INT");
        				for(var i = 0; i<this.ds_pay_p.rowcount; i++)
        				{
        					this.ds_pay_p.setColumn(i,"check",0);
        				}
        				return;
        			}
        		}
        		else if(svcID == "retrievePrxpCompSonList"){
        			this.ds_pay.addColumn("check", "INT");
        			for(var i = 0; i<this.ds_pay.rowcount; i++)
        			{
        				this.ds_pay.setColumn(i,"check",0);
        			}
        			this.Div02.Static_edi01.set_text(this.ds_pay.rowcount + " 건");
        			return;
        		}
        		else if(svcID == "deletePrxpComp"){
        			this.alert("정상적으로 삭제되었습니다.");
        			this.btn_search_onclick();
        			return;		
        		}
        		else if(svcID == "deletePrxpCompSon"){
        			this.gfn_getMessage("alert", "정상적으로 삭제되었습니다.");
        			
        			var sParams = "TRPL_C="+this.gfn_nullToEmpty(this.ds_pay_p.getColumn(this.Div02.Grid00.currentrow,"NA_TRPL_C"));
        			var sSvcID        = "retrievePrxpCompSonList";
        			var sURL          = "svc::rest/bl/retrievePrxpCompList";	
        			var sInDatasets   = "";
        			var sOutDatasets  = "ds_pay=ds_pay";	
        			var sArgument     = sParams;
        			var sCallbackFunc = "fn_callBack";
        			var sTranType     = "S"; // U:저장/삭제, S:조회  

        			this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        			
        			return;		
        		}
        	}	
        }

        /*대납업체 팝업콜백 함수*/
        this.fn_popupAfter = function(strId,strVal)
        {
        	var sParams = "COMPNAME="+this.gfn_nullToEmpty(this.Div00.Edit_comname.value)
        				+ " COMPGLN="+this.gfn_nullToEmpty(this.Div00.Edit_comnum.value)
        				+ " COMPUSE="+this.gfn_nullToEmpty(this.Div00.combo_use.value)
        				;
        	var sSvcID        = "retrievePrxpCompList";
        	var sURL          = "svc::rest/bl/retrievePrxpCompList";	
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_pay_p=ds_pay_p";	
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회  
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);

        	this.ds_pay.clearData();
        	this.Div02.btn_add2.set_enable(false);
        	this.ds_pay_p.set_rowposition(-1);
        }

        /*대납대상업체 팝업콜백 함수*/
        this.fn_popupAfter2 = function(strId,strVal)
        {
        	var sParams = "TRPL_C="+this.gfn_nullToEmpty(this.ds_pay_p.getColumn(this.Div02.Grid00.currentrow,"NA_TRPL_C"));
        	var sSvcID        = "retrievePrxpCompSonList";
        	var sURL          = "svc::rest/bl/retrievePrxpCompList";	
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_pay=ds_pay";	
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

        /*대납업체조회*/
        this.btn_search_onclick = function(obj,e)
        {
        	var sParams = "COMPNAME="+this.gfn_nullToEmpty(this.Div00.Edit_comname.value)
        				+ " COMPGLN="+this.gfn_nullToEmpty(this.Div00.Edit_comnum.value)
        				+ " COMPUSE="+this.gfn_nullToEmpty(this.Div00.combo_use.value)
        				;
        	var sSvcID        = "retrievePrxpCompList";
        	var sURL          = "svc::rest/bl/retrievePrxpCompList";	
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_pay_p=ds_pay_p";	
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회  
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	this.ds_pay.clearData();
        	this.Div02.btn_add2.set_enable(false);
        	this.ds_pay_p.set_rowposition(-1);
        }

        /*대납업체삭제*/
        this.btn_del_onclick = function(obj,e)
        {
        	var checkCnt = 0;
        	this.ds_delete.clearData();
        	for(var i=0; i<this.ds_pay_p.rowcount; i++)
        	{
        		if(this.ds_pay_p.getColumn(i,"check")==1)
        		{
        			this.ds_delete.insertRow(checkCnt);
        			this.ds_delete.copyRow(checkCnt++, this.ds_pay_p, i);
        		}
        	}
        	if (checkCnt > 0)
        	{
        		var sParams = "";
        		var sSvcID        = "deletePrxpComp";
        		var sURL          = "svc::rest/bl/deletePrxpComp";	
        		var sInDatasets   = "ds_delete=ds_delete";
        		var sOutDatasets  = "";	
        		var sArgument     = sParams;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회  

        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        		this.ds_pay.clearData();
        	}
        	else
        	{
        		alert("체크된 값이 없습니다.");
        	}
        	
        }

        /*대납 대상업체삭제*/
        this.Div02_btn_del2_onclick = function(obj,e)
        {
        	var checkCnt = 0;
        	this.ds_delete.clearData();
        	for(var i=0; i<this.ds_pay.rowcount; i++)
        	{
        		if(this.ds_pay.getColumn(i,"check")==1)
        		{
        			this.ds_delete.insertRow(checkCnt);
        			this.ds_delete.copyRow(checkCnt++, this.ds_pay, i);		
        		}
        	}
        	if (checkCnt > 0)
        	{
        		var sParams = "";
        		var sSvcID        = "deletePrxpCompSon";
        		var sURL          = "svc::rest/bl/deletePrxpComp";	
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

        /*대납 대상업체조회*/
        this.Div02_Grid00_oncellclick = function(obj,e)
        {	
        	obj.set_useselcolor(true);
        	this.Div02.btn_add2.set_enable(true);
        	if(e.col!=0){
        		this.ds_pay_p.set_enableevent(false);
        		this.ds_pay_p.set_rowposition(e.row);
        		
        		var sParams = "TRPL_C="+this.gfn_nullToEmpty(this.ds_pay_p.getColumn(e.row,"NA_TRPL_C"));
        		var sSvcID        = "retrievePrxpCompSonList";
        		var sURL          = "svc::rest/bl/retrievePrxpCompList";	
        		var sInDatasets   = "";
        		var sOutDatasets  = "ds_pay=ds_pay";	
        		var sArgument     = sParams;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "S"; // U:저장/삭제, S:조회  

        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        	this.ds_pay_p.set_enableevent(true);
        }

        this.ds_pay_p_canrowposchange = function(obj,e)
        {
        	return false;
        }

        /*대납업체 추가 클릭*/
        this.btn_add_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"I", dsArg:this.ds_pay_p};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("popId","OMG.BL::OMG_DS_SC_7121.xfdl",oArg,sOption,sPopupCallBack);
        }

        /*대납 대상업체 추가 클릭*/
        this.Div02_btn_add2_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"I", dsArg:this.ds_pay, gln:this.ds_pay_p.getColumn(this.Div02.Grid00.currentrow,"NA_TRPL_C")
        				, compname:this.ds_pay_p.getColumn(this.Div02.Grid00.currentrow,"PAY_COMP_NM")};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter2";
        	this.gfn_openPopup("popId","OMG.BL::OMG_DS_SC_7122.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.Div02_Grid00_onheadclick = function(obj,e)
        {
        	if(e.cell == 0) {
        		this.gfn_setGridCheckAll(obj,e);
        	}
        }

        this.Div02_Grid01_onheadclick = function(obj,e)
        {
        	if(e.cell == 0) {
        		this.gfn_setGridCheckAll(obj,e);
        	}
        }

        this.Div02_Button75_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.Div00, this.Div02);
        }

        this.Div00_btn_comname_onclick = function(obj,e)
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
        			this.Div00.Edit_comnum.set_value(paramsArr[0]);
        			this.Div00.Edit_comname.set_value(paramsArr[1]);
        		}
        	}
        }

        this.Div02_btn_excel_onclick = function(obj,e)
        {
        		//gfn_exportExcel(Export할 Grid, 생성될 Excel파일명)
        	//파일명은 뒤에 "_년월일분초" 추가됨 (런쳐실행시만)
        	this.gfn_exportExcel(this.Div02.Grid01,"data");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_pay_p.addEventHandler("canrowposchange", this.ds_pay_p_canrowposchange, this);
            this.ds_pay_p.addEventHandler("onrowposchanged", this.ds_pay_p_onrowposchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.Div00.btn_comname.addEventHandler("onclick", this.Div00_btn_comname_onclick, this);
            this.btn_add1.addEventHandler("onclick", this.btn_add_onclick, this);
            this.btn_del.addEventHandler("onclick", this.btn_del_onclick, this);
            this.Div02.Grid01.addEventHandler("onheadclick", this.Div02_Grid01_onheadclick, this);
            this.Div02.Grid01.addEventHandler("oncellclick", this.Div02_Grid01_oncellclick, this);
            this.Div02.Grid00.addEventHandler("oncellclick", this.Div02_Grid00_oncellclick, this);
            this.Div02.Grid00.addEventHandler("onheadclick", this.Div02_Grid00_onheadclick, this);
            this.Div02.btn_add2.addEventHandler("onclick", this.Div02_btn_add2_onclick, this);
            this.Div02.btn_del2.addEventHandler("onclick", this.Div02_btn_del2_onclick, this);
            this.Div02.Button00.addEventHandler("onclick", this.Div02_Button75_onclick, this);
            this.Div02.btn_excel.addEventHandler("onclick", this.Div02_btn_excel_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_7120.xfdl");
        this.loadPreloadList();
       
    };
}
)();
