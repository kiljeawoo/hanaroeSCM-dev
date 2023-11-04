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
                this.set_name("OMG_DS_SC_6810");
                this.set_titletext("회원가입탈퇴현황");
                this._setFormPosition(0,0,799,694);
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
            obj._setContents("<ColumnInfo><Column id=\"USR_TPCNM\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_PRE\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_2016\" type=\"STRING\" size=\"256\"/><Column id=\"MON_01\" type=\"STRING\" size=\"256\"/><Column id=\"MON_02\" type=\"STRING\" size=\"256\"/><Column id=\"MON_03\" type=\"STRING\" size=\"256\"/><Column id=\"MON_04\" type=\"STRING\" size=\"256\"/><Column id=\"MON_05\" type=\"STRING\" size=\"256\"/><Column id=\"MON_06\" type=\"STRING\" size=\"256\"/><Column id=\"MON_07\" type=\"STRING\" size=\"256\"/><Column id=\"MON_08\" type=\"STRING\" size=\"256\"/><Column id=\"MON_09\" type=\"STRING\" size=\"256\"/><Column id=\"MON_10\" type=\"STRING\" size=\"256\"/><Column id=\"MON_11\" type=\"STRING\" size=\"256\"/><Column id=\"MON_12\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"BON\" type=\"STRING\" size=\"256\"/><Column id=\"GEE\" type=\"STRING\" size=\"256\"/><Column id=\"TAK\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_YEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_PRG_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_outresult", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"USR_TPCNM\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_PRE\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_2016\" type=\"STRING\" size=\"256\"/><Column id=\"MON_01\" type=\"STRING\" size=\"256\"/><Column id=\"MON_02\" type=\"STRING\" size=\"256\"/><Column id=\"MON_03\" type=\"STRING\" size=\"256\"/><Column id=\"MON_04\" type=\"STRING\" size=\"256\"/><Column id=\"MON_05\" type=\"STRING\" size=\"256\"/><Column id=\"MON_06\" type=\"STRING\" size=\"256\"/><Column id=\"MON_07\" type=\"STRING\" size=\"256\"/><Column id=\"MON_08\" type=\"STRING\" size=\"256\"/><Column id=\"MON_09\" type=\"STRING\" size=\"256\"/><Column id=\"MON_10\" type=\"STRING\" size=\"256\"/><Column id=\"MON_11\" type=\"STRING\" size=\"256\"/><Column id=\"MON_12\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"BON\" type=\"STRING\" size=\"256\"/><Column id=\"GEE\" type=\"STRING\" size=\"256\"/><Column id=\"TAK\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_YEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_price", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"USR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_MBCO_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"SL_AM0\" type=\"STRING\" size=\"256\"/><Column id=\"SL_AM1\" type=\"STRING\" size=\"256\"/><Column id=\"SL_AM2\" type=\"STRING\" size=\"256\"/><Column id=\"SL_AM3\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_YEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_result", "absolute", "0", "120", null, null, "15", "0", this);
            obj.set_taborder("4");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Button("Button75", "absolute", "36.8%", "0", null, "12", "36.68%", null, this.div_result);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_result.addChild(obj.name, obj);
            obj = new Grid("grd_mbApvrqrList00", "absolute", "1.03%", "250", null, "172", "0%", null, this.div_result);
            obj.set_taborder("12");
            obj.set_binddataset("ds_outresult");
            obj.set_autofittype("none");
            obj.set_nodatatext("조회된 건수가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"250\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"19\"/><Cell row=\"1\" style=\"align:left;font:13 Aharoni,HY견고딕;\" text=\"나. 회원탈퇴 현황(GLN기준)\"/><Cell row=\"1\" col=\"1\" colspan=\"18\" style=\"align:right;font:13 Aharoni,HY견고딕;\"/><Cell row=\"2\" text=\"구분\"/><Cell row=\"2\" col=\"1\" text=\"사용전환\"/><Cell row=\"2\" col=\"2\" text=\"전년도 합계\"/><Cell row=\"2\" col=\"3\" text=\"1월\"/><Cell row=\"2\" col=\"4\" text=\"2월\"/><Cell row=\"2\" col=\"5\" text=\"3월\"/><Cell row=\"2\" col=\"6\" text=\"4월\"/><Cell row=\"2\" col=\"7\" text=\"5월\"/><Cell row=\"2\" col=\"8\" text=\"6월\"/><Cell row=\"2\" col=\"9\" text=\"7월\"/><Cell row=\"2\" col=\"10\" text=\"8월\"/><Cell row=\"2\" col=\"11\" text=\"9월\"/><Cell row=\"2\" col=\"12\" text=\"10월\"/><Cell row=\"2\" col=\"13\" text=\"11월\"/><Cell row=\"2\" col=\"14\" text=\"12월\"/><Cell row=\"2\" col=\"15\" text=\"합계\"/><Cell row=\"2\" col=\"16\" text=\"본사\"/><Cell row=\"2\" col=\"17\" text=\"지사\"/><Cell row=\"2\" col=\"18\" text=\"위탁\"/></Band><Band id=\"body\"><Cell text=\"bind:USR_TPCNM\"/><Cell col=\"1\" displaytype=\"number\" text=\"bind:SUM_PRE\"/><Cell col=\"2\" displaytype=\"number\" text=\"bind:SUM_2016\"/><Cell col=\"3\" displaytype=\"number\" text=\"bind:MON_01\"/><Cell col=\"4\" displaytype=\"number\" text=\"bind:MON_02\"/><Cell col=\"5\" displaytype=\"number\" text=\"bind:MON_03\"/><Cell col=\"6\" displaytype=\"number\" text=\"bind:MON_04\"/><Cell col=\"7\" displaytype=\"number\" text=\"bind:MON_05\"/><Cell col=\"8\" displaytype=\"number\" text=\"bind:MON_06\"/><Cell col=\"9\" displaytype=\"number\" text=\"bind:MON_07\"/><Cell col=\"10\" displaytype=\"number\" text=\"bind:MON_08\"/><Cell col=\"11\" displaytype=\"number\" text=\"bind:MON_09\"/><Cell col=\"12\" displaytype=\"number\" text=\"bind:MON_10\"/><Cell col=\"13\" displaytype=\"number\" text=\"bind:MON_11\"/><Cell col=\"14\" displaytype=\"number\" text=\"bind:MON_12\"/><Cell col=\"15\" displaytype=\"number\" text=\"bind:TOTAL\"/><Cell col=\"16\" displaytype=\"number\" text=\"bind:BON\"/><Cell col=\"17\" displaytype=\"number\" text=\"bind:GEE\"/><Cell col=\"18\" displaytype=\"number\" text=\"bind:TAK\"/></Band><Band id=\"summary\"><Cell style=\"align:center;\" text=\"합계\"/><Cell col=\"1\" displaytype=\"number\" text=\"expr:dataset.getSum('SUM_PRE')\"/><Cell col=\"2\" displaytype=\"number\" text=\"expr:dataset.getSum('SUM_2016')\"/><Cell col=\"3\" displaytype=\"number\" text=\"expr:dataset.getSum('MON_01')\"/><Cell col=\"4\" displaytype=\"number\" text=\"expr:dataset.getSum('MON_02')\"/><Cell col=\"5\" displaytype=\"number\" text=\"expr:dataset.getSum('MON_03')\"/><Cell col=\"6\" displaytype=\"number\" text=\"expr:dataset.getSum('MON_04')\"/><Cell col=\"7\" displaytype=\"number\" text=\"expr:dataset.getSum('MON_05')\"/><Cell col=\"8\" displaytype=\"number\" text=\"expr:dataset.getSum('MON_06')\"/><Cell col=\"9\" displaytype=\"number\" text=\"expr:dataset.getSum('MON_07')\"/><Cell col=\"10\" displaytype=\"number\" text=\"expr:dataset.getSum('MON_08')\"/><Cell col=\"11\" displaytype=\"number\" text=\"expr:dataset.getSum('MON_09')\"/><Cell col=\"12\" displaytype=\"number\" text=\"expr:dataset.getSum('MON_10')\"/><Cell col=\"13\" displaytype=\"number\" text=\"expr:dataset.getSum('MON_11')\"/><Cell col=\"14\" displaytype=\"number\" text=\"expr:dataset.getSum('MON_12')\"/><Cell col=\"15\" displaytype=\"number\" text=\"expr:dataset.getSum('TOTAL')\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/></Band></Format></Formats>");
            this.div_result.addChild(obj.name, obj);
            obj = new Grid("grd_mbApvrqrList", "absolute", "1.16%", "40", null, "199", "0.26%", null, this.div_result);
            obj.set_taborder("9");
            obj.set_binddataset("ds_result");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_nodatatext("조회된 건수가 없습니다.");
            obj.set_autoenter("none");
            obj.set_scrollbars("autoboth");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"250\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"19\" text=\"expr:this.gfn_getClientTime(&quot;YYYY-MM-DD&quot;)\"/><Cell row=\"1\" style=\"align:left;font:13 Aharoni,HY견고딕;\" text=\"가. 회원가입 현황(GLN기준)\"/><Cell row=\"1\" col=\"1\" colspan=\"18\" style=\"align:right;font:13 Aharoni,HY견고딕;\"/><Cell row=\"2\" text=\"구분\"/><Cell row=\"2\" col=\"1\" text=\"사용전환\"/><Cell row=\"2\" col=\"2\" text=\"전년도 합계\"/><Cell row=\"2\" col=\"3\" text=\"1월\"/><Cell row=\"2\" col=\"4\" text=\"2월\"/><Cell row=\"2\" col=\"5\" text=\"3월\"/><Cell row=\"2\" col=\"6\" text=\"4월\"/><Cell row=\"2\" col=\"7\" text=\"5월\"/><Cell row=\"2\" col=\"8\" text=\"6월\"/><Cell row=\"2\" col=\"9\" text=\"7월\"/><Cell row=\"2\" col=\"10\" text=\"8월\"/><Cell row=\"2\" col=\"11\" text=\"9월\"/><Cell row=\"2\" col=\"12\" text=\"10월\"/><Cell row=\"2\" col=\"13\" text=\"11월\"/><Cell row=\"2\" col=\"14\" text=\"12월\"/><Cell row=\"2\" col=\"15\" text=\"합계\"/><Cell row=\"2\" col=\"16\" text=\"본사\"/><Cell row=\"2\" col=\"17\" text=\"지사\"/><Cell row=\"2\" col=\"18\" text=\"위탁\"/></Band><Band id=\"body\"><Cell text=\"bind:USR_TPCNM\"/><Cell col=\"1\" displaytype=\"number\" text=\"bind:SUM_PRE\"/><Cell col=\"2\" displaytype=\"number\" text=\"bind:SUM_2016\"/><Cell col=\"3\" displaytype=\"number\" text=\"bind:MON_01\"/><Cell col=\"4\" displaytype=\"number\" text=\"bind:MON_02\"/><Cell col=\"5\" displaytype=\"number\" text=\"bind:MON_03\"/><Cell col=\"6\" displaytype=\"number\" text=\"bind:MON_04\"/><Cell col=\"7\" displaytype=\"number\" text=\"bind:MON_05\"/><Cell col=\"8\" displaytype=\"number\" text=\"bind:MON_06\"/><Cell col=\"9\" displaytype=\"number\" text=\"bind:MON_07\"/><Cell col=\"10\" displaytype=\"number\" text=\"bind:MON_08\"/><Cell col=\"11\" displaytype=\"number\" text=\"bind:MON_09\"/><Cell col=\"12\" displaytype=\"number\" text=\"bind:MON_10\"/><Cell col=\"13\" displaytype=\"number\" text=\"bind:MON_11\"/><Cell col=\"14\" displaytype=\"number\" text=\"bind:MON_12\"/><Cell col=\"15\" displaytype=\"number\" text=\"bind:TOTAL\"/><Cell col=\"16\" displaytype=\"number\" text=\"bind:BON\"/><Cell col=\"17\" displaytype=\"number\" text=\"bind:GEE\"/><Cell col=\"18\" displaytype=\"number\" text=\"bind:TAK\"/></Band><Band id=\"summary\"><Cell style=\"align:center;\" text=\"합계\"/><Cell col=\"1\" displaytype=\"number\" text=\"expr:dataset.getSum('SUM_PRE')\"/><Cell col=\"2\" displaytype=\"number\" text=\"expr:dataset.getSum('SUM_2016')\"/><Cell col=\"3\" displaytype=\"number\" text=\"expr:dataset.getSum('MON_01')\"/><Cell col=\"4\" displaytype=\"number\" text=\"expr:dataset.getSum('MON_02')\"/><Cell col=\"5\" displaytype=\"number\" text=\"expr:dataset.getSum('MON_03')\"/><Cell col=\"6\" displaytype=\"number\" text=\"expr:dataset.getSum('MON_04')\"/><Cell col=\"7\" displaytype=\"number\" text=\"expr:dataset.getSum('MON_05')\"/><Cell col=\"8\" displaytype=\"number\" text=\"expr:dataset.getSum('MON_06')\"/><Cell col=\"9\" displaytype=\"number\" text=\"expr:dataset.getSum('MON_07')\"/><Cell col=\"10\" displaytype=\"number\" text=\"expr:dataset.getSum('MON_08')\"/><Cell col=\"11\" displaytype=\"number\" text=\"expr:dataset.getSum('MON_09')\"/><Cell col=\"12\" displaytype=\"number\" text=\"expr:dataset.getSum('MON_10')\"/><Cell col=\"13\" displaytype=\"number\" text=\"expr:dataset.getSum('MON_11')\"/><Cell col=\"14\" displaytype=\"number\" text=\"expr:dataset.getSum('MON_12')\"/><Cell col=\"15\" displaytype=\"number\" text=\"expr:dataset.getSum('TOTAL')\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/></Band></Format></Formats>");
            this.div_result.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "14", "435", "1141", "380", null, null, this.div_result);
            obj.set_taborder("13");
            obj.set_binddataset("ds_price");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"80\"/><Column size=\"135\"/><Column size=\"212\"/><Column size=\"93\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"9\"/><Cell row=\"1\" style=\"align:left;background: ;font:13 arial,HY견고딕;\" text=\"다. 기업탈퇴 상세\" editlimitbymask=\"both\"/><Cell row=\"1\" col=\"1\" colspan=\"8\" style=\"align:right;font:13 arial,HY견고딕;\" editlimitbymask=\"both\"/><Cell row=\"2\" text=\"거래처 코드\"/><Cell row=\"2\" col=\"1\"/><Cell row=\"2\" col=\"2\" text=\"해지일\"/><Cell row=\"2\" col=\"3\" text=\"거래처명\"/><Cell row=\"2\" col=\"4\"/><Cell row=\"2\" col=\"5\"/><Cell row=\"2\" col=\"6\" text=\"1개월전 매출\"/><Cell row=\"2\" col=\"7\" text=\"2개월전 매출\"/><Cell row=\"2\" col=\"8\" text=\"3개월전 매출\"/></Band><Band id=\"body\"><Cell text=\"bind:NA_TRPL_C\"/><Cell col=\"1\" text=\"bind:USR_TPC\"/><Cell col=\"2\" text=\"bind:LSCHG_DTM\" mask=\"####/##/##\"/><Cell col=\"3\" text=\"bind:CLNTNM\"/><Cell col=\"4\" text=\"bind:NA_MBCO_DSC\"/><Cell col=\"5\" displaytype=\"number\" text=\"bind:SL_AM0\"/><Cell col=\"6\" displaytype=\"number\" text=\"bind:SL_AM1\"/><Cell col=\"7\" displaytype=\"number\" text=\"bind:SL_AM2\"/><Cell col=\"8\" displaytype=\"number\" text=\"bind:SL_AM3\"/></Band></Format></Formats>");
            this.div_result.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "91.91%", "120", null, "41", "2.49%", null, this);
            obj.set_taborder("0");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "98.38%", "0", null, "490", "0.12%", null, this);
            obj.set_taborder("6");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0%", "0", null, "21", "56.13%", null, this);
            obj.set_taborder("7");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0.12%", "45", null, "91", "1.74%", null, this);
            obj.set_taborder("11");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "16", "20", null, "21", "678", null, this.div_search);
            obj.set_taborder("43");
            obj.set_text("탈퇴기준 월");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("cal_ym", "absolute", "100", "65", "119", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_dragscrolltype("both");
            obj.set_url("common::calendarMonth.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "18", "41", "21", "73", null, this);
            obj.set_taborder("14");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "18", "47", "21", "20", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_result,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_text("Div02");

            	}
            );
            this.div_result.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 91, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("11");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 799, 694, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("회원가입탈퇴현황");

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
        this.addIncludeScript("OMG_DS_SC_6910.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6910.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {  
        	var toDay = this.gfn_today("yyyyMMdd");
        	
        	this.cal_ym._setValue(this.gfn_firstDate(toDay).substr(0, 6));
        	
        	var toYear = this.cal_ym._getValue()

        	var objDate = new Date();
        	
           this.gfn_setInitForm(obj, e); //공통
           this.div_result.grd_mbApvrqrList.setCellProperty("head", 2, "text", this.getThisYear()+" 기준");
           this.div_result.grd_mbApvrqrList00.setCellProperty("head", 2, "text", this.getThisYear()+" 기준");
           this.div_result.Grid00.setCellProperty("head", 8, "text", objDate.getMonth()+1+"월매출");
           this.div_result.Grid00.setCellProperty("head", 9, "text", objDate.getMonth()+"월매출");
           this.div_result.Grid00.setCellProperty("head", 10, "text", objDate.getMonth()-1+"월매출");
           this.div_result.Grid00.setCellProperty("head", 11, "text", objDate.getMonth()-2+"월매출");

        }
        this.getThisYear = function ()
        {
           return this.gfn_today('yyyyMMdd').substr(0, 4);
        }

        this.getThisYearMonth = function ()
        {
           return this.gfn_today('yyyyMMdd').substr(0, 6);
        }
        this.getMonth = function ()
        {
           return this.gfn_today('yyyyMMdd').substr(4,5);
        }
        this.fn_afterFormOnload = function()
        {  
           /*조회 호출*/
        /*   this.btn_search.click();*/
         
        }
         
         
         /*조회*/
        this.btn_search_onclick = function(obj,e)
        {	
        	var toYear = this.cal_ym._getValue()
        	this.div_result.Grid00.setCellProperty("head", 2, "text", toYear+" 기준");
        	this.fn_search();// 처음조회시 1페이지를 조회한다.	

        }

        
        this.fn_search = function(vPageNum)
        { 	  
        	
        	var calcal_ym = this.gfn_nullToEmpty(this.cal_ym._getValue()) ;
        	var cal_ym = calcal_ym 
        	
        	var sParam = "cal_ym=" + calcal_ym
        				;
        	var sSvcID        = "member";
        	var sURL          = "svc::rest/mg/membership/membershiplist";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_result=ds_result ds_outresult=ds_outresult ds_price=ds_price";	
        	var sArgument     = sParam;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        
        /*팝업호출확인하기*/
        this.fn_popupAfter = function(strId,strVal)
        {	
        	this.btn_search.click();  
        }

        /*콜백메소드*/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{	
        		if(svcID == "Excelmember"){
        			
        			if(this.ds_result.rowcount == 0){
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");	
        			}
        			else if(this.ds_result.rowcount > 0){
        				var today = this.gfn_today("yyyyMMdd");
        				
        				
        				this.exportObj = new ExcelExportObject("Export00", this);
        				this.exportObj.addEventHandler("onsuccess" , this.fn_excelDownload_onsuccess , this);
        				this.exportObj.addEventHandler("onerror", this.fn_excelDownload_onerror, this);
        				
        				this.exportObj.set_exportfilename("List" + today);
        				this.exportObj.set_exporturl(application.gv_server_url + "XExportImport");
        				this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.div_result.grd_mbApvrqrList, "Sheet1!B2");
        				this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.div_result.grd_mbApvrqrList00, "Sheet1!B15");
        				this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.div_result.Grid00, "Sheet2!B2");
        				this.exportObj.exportData();
        			}
        			
        		}
        	}
        }
         

        /*엑셀 출력*/
        this.btn_excel_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.cal_ym._getValue())){
        		alert("기업 탈퇴 조회기준 날짜를 선택하세요");
        	}
        	else{
        			var toYear = this.cal_ym._getValue()
        			this.div_result.Grid00.setCellProperty("head", 2, "text", toYear+" 기준");
        			var calcal_ym = this.gfn_nullToEmpty(this.cal_ym._getValue()) ;
        			var cal_ym = calcal_ym 
        			
        			var sParam = "cal_ym=" + calcal_ym;
        			var sSvcID        = "Excelmember";
        			var sURL          = "svc::rest/mg/membership/membershiplist";
        			var sInDatasets   = "";
        			var sOutDatasets  = "ds_result=ds_result ds_outresult=ds_outresult ds_price=ds_price";	
        			var sArgument     = sParam;
        			var sCallbackFunc = "fn_callBack";
        			var sTranType     = "S"; // U:저장/삭제, S:조회
        			
        			this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        // 엑셀 다운로드 성공
        this.fn_excelDownload_onsuccess = function(obj,e)
        {
        	trace("excel download : success");
        }
        // 엑셀 다운로드 실패
        this.fn_excelDownload_onerror = function(obj,e)
        {
        	trace("excel download : error");
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_result.grd_mbApvrqrList00.addEventHandler("oncellclick", this.div_result_grd_mbApvrqrList_oncellclick, this);
            this.div_result.grd_mbApvrqrList.addEventHandler("oncellclick", this.div_result_grd_mbApvrqrList_oncellclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6910.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
