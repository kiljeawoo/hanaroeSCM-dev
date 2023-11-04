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
                this.set_name("OMG_DS_SC_7160");
                this.set_titletext("사용료 청구내역");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rqbrk", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RMS_MM\" type=\"STRING\" size=\"6\"/><Column id=\"RMS_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"50\"/><Column id=\"NA_MBCO_DSC\" type=\"STRING\" size=\"10\"/><Column id=\"EDI_UGQT\" type=\"INT\"/><Column id=\"ADINF_UGQT\" type=\"INT\"/><Column id=\"SLAM\" type=\"INT\"/><Column id=\"FDAM_MSR_RT_C\" type=\"INT\"/><Column id=\"BASIC_RATE\" type=\"INT\"/><Column id=\"EDI_UG_AM\" type=\"INT\"/><Column id=\"ADINF_UG_AM\" type=\"INT\"/><Column id=\"IA_BI_UG_AM\" type=\"INT\"/><Column id=\"IA_PG_UG_AM\" type=\"INT\"/><Column id=\"IA_MA_UG_AM\" type=\"INT\"/><Column id=\"IA_CTGR_UG_AM\" type=\"INT\"/><Column id=\"SMS_UG_AM\" type=\"INT\"/><Column id=\"PAY_UNAPL_YN\" type=\"STRING\" size=\"10\"/><Column id=\"SPPR\" type=\"INT\"/><Column id=\"VAT_AM\" type=\"INT\"/><Column id=\"FS_RQS_AM\" type=\"INT\"/><Column id=\"PRXP_COMP_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"LS_RQS_AM\" type=\"INT\"/><Column id=\"PBC_SQNO\" type=\"STRING\" size=\"50\"/><Column id=\"PBC_SQNO_N\" type=\"INT\"/><Column id=\"REMARKS\" type=\"STRING\" size=\"100\"/><Column id=\"LATE_AM\" type=\"INT\"/><Column id=\"CTGR_SL_UGQT\" type=\"INT\"/><Column id=\"CTGR_SL_UG_AM\" type=\"INT\"/><Column id=\"BAD_DEBT_AM\" type=\"INT\" size=\"0\"/><Column id=\"XMLEDI_BASIC_RATE\" type=\"INT\" size=\"0\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mbco", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">본사</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"DATA\">지사</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_fdam", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">21</Col><Col id=\"DATA\">정액</Col></Row><Row><Col id=\"CODE\">22</Col><Col id=\"DATA\">종량</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_payDsc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">B</Col><Col id=\"DATA\">대손</Col></Row><Row><Col id=\"CODE\">C</Col><Col id=\"DATA\">완납</Col></Row><Row><Col id=\"CODE\">E</Col><Col id=\"DATA\">과납</Col></Row><Row><Col id=\"CODE\">M</Col><Col id=\"DATA\">오납</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"DATA\">미납</Col></Row><Row><Col id=\"CODE\">P</Col><Col id=\"DATA\">분납</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_cnf", "absolute", null, "0", "41", "21", "128", null, this);
            obj.set_taborder("11");
            obj.set_text("확정");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "17", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_create", "absolute", null, "0", "41", "21", "222", null, this);
            obj.set_taborder("37");
            obj.set_text("생성");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("68");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("103");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "15", "10", "67", "21", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("조회월");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("cal_by_dt", "absolute", "10.43%", "10", null, "21", "76.84%", null, this.div_search);
            obj.set_taborder("13");
            obj.set_url("common::calendarMonth.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "35.75%", "10", null, "21", "54.71%", null, this.div_search);
            obj.set_taborder("14");
            obj.set_text("업체조회");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit_comnum", "absolute", "44.27%", "10", null, "21", "46.82%", null, this.div_search);
            obj.set_taborder("15");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit_comname", "absolute", "53.44%", "10", null, "21", "37.15%", null, this.div_search);
            obj.set_taborder("16");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_comname", "absolute", "63.1%", "10", null, "21", "34.22%", null, this.div_search);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new CheckBox("chk_vndr_all", "absolute", "25.06%", "10", null, "21", "68.07%", null, this.div_search);
            obj.set_taborder("19");
            obj.set_text("전체");
            this.div_search.addChild(obj.name, obj);

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

            obj = new Div("Div02", "absolute", "0", "71", null, null, "15", "-1", this);
            obj.set_taborder("81");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0", "42", null, null, "0", "1", this.Div02);
            obj.set_taborder("2");
            obj.set_binddataset("ds_rqbrk");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("none");
            obj.set_summarytype("top");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"사용월\"/><Cell col=\"2\" text=\"업체명\"/><Cell col=\"3\" text=\"업체코드\"/><Cell col=\"4\" text=\"본지사\"/><Cell col=\"5\" text=\"최종청구금액\"/><Cell col=\"6\" text=\"대납업체코드\"/><Cell col=\"7\" text=\"발행일련번호\"/><Cell col=\"8\" text=\"전월매출금액\"/><Cell col=\"9\" text=\"EDI사용량\"/><Cell col=\"10\" text=\"부가정보사용량\"/><Cell col=\"11\" text=\"정액종량\"/><Cell col=\"12\" text=\"기본료\"/><Cell col=\"13\" text=\"XML/EDI기본료\"/><Cell col=\"14\" text=\"EDI사용금액\"/><Cell col=\"15\" text=\"부가정보금액\"/><Cell col=\"16\" text=\"BI조회금액\"/><Cell col=\"17\" text=\"추이분석금액\"/><Cell col=\"18\" text=\"시장분석자사금액\"/><Cell col=\"19\" text=\"시장분석타사금액\"/><Cell col=\"20\" text=\"판매상세정보 사용건수\"/><Cell col=\"21\" text=\"판매상세정보 사용금액\"/><Cell col=\"22\" text=\"SMS사용금액\"/><Cell col=\"23\" text=\"연체료\"/><Cell col=\"24\" text=\"납부미적용\"/><Cell col=\"25\" text=\"공급가\"/><Cell col=\"26\" text=\"부가세\"/><Cell col=\"27\" text=\"최초청구금액\"/><Cell col=\"28\" text=\"대손금액\"/><Cell col=\"29\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" expr=\"currow+1\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:RMS_MM\" mask=\"@@@@-@@\" tooltiptext=\"bind:RMS_MM\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:CLNTNM\" tooltiptext=\"bind:CLNTNM\"/><Cell col=\"3\" text=\"bind:RMS_TRPL_C\" tooltiptext=\"bind:RMS_TRPL_C\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:NA_MBCO_DSC\" combodataset=\"ds_mbco\" combocodecol=\"CODE\" combodatacol=\"DATA\" tooltiptext=\"bind:NA_MBCO_DSC\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:LS_RQS_AM\" tooltiptext=\"bind:LS_RQS_AM\"/><Cell col=\"6\" text=\"bind:PRXP_COMP_TRPL_C\" tooltiptext=\"bind:PRXP_COMP_TRPL_C\"/><Cell col=\"7\" text=\"bind:PBC_SQNO\" tooltiptext=\"bind:PBC_SQNO\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLAM\" tooltiptext=\"bind:SLAM\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:EDI_UGQT\" tooltiptext=\"bind:EDI_UGQT\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ADINF_UGQT\" tooltiptext=\"bind:ADINF_UGQT\"/><Cell col=\"11\" displaytype=\"combo\" text=\"bind:FDAM_MSR_RT_C\" combodataset=\"ds_fdam\" combocodecol=\"CODE\" combodatacol=\"DATA\" tooltiptext=\"bind:FDAM_MSR_RT_C\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BASIC_RATE\" tooltiptext=\"bind:BASIC_RATE\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"bind:XMLEDI_BASIC_RATE\" tooltiptext=\"bind:XMLEDI_BASIC_RATE\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"bind:EDI_UG_AM\" tooltiptext=\"bind:EDI_UG_AM\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ADINF_UG_AM\" tooltiptext=\"bind:ADINF_UG_AM\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;\" text=\"bind:IA_BI_UG_AM\" tooltiptext=\"bind:IA_BI_UG_AM\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right;\" text=\"bind:IA_PG_UG_AM\" tooltiptext=\"bind:IA_PG_UG_AM\"/><Cell col=\"18\" displaytype=\"number\" style=\"align:right;\" text=\"bind:IA_MA_UG_AM\" tooltiptext=\"bind:IA_MA_UG_AM\"/><Cell col=\"19\" displaytype=\"number\" style=\"align:right;\" text=\"bind:IA_CTGR_UG_AM\" tooltiptext=\"bind:IA_CTGR_UG_AM\"/><Cell col=\"20\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CTGR_SL_UGQT\" tooltiptext=\"bind:CTGR_SL_UG_AM\"/><Cell col=\"21\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CTGR_SL_UG_AM\" tooltiptext=\"bind:CTGR_SL_UG_AM\"/><Cell col=\"22\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SMS_UG_AM\" tooltiptext=\"bind:SMS_UG_AM\"/><Cell col=\"23\" displaytype=\"number\" style=\"align:right;\" text=\"bind:LATE_AM\" tooltiptext=\"bind:LATE_AM\"/><Cell col=\"24\" text=\"bind:PAY_UNAPL_YN\" tooltiptext=\"bind:PAY_UNAPL_YN\"/><Cell col=\"25\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPPR\" tooltiptext=\"bind:SPPR\"/><Cell col=\"26\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VAT_AM\" tooltiptext=\"bind:VAT_AM\"/><Cell col=\"27\" displaytype=\"number\" style=\"align:right;\" text=\"bind:FS_RQS_AM\" tooltiptext=\"bind:FS_RQS_AM\"/><Cell col=\"28\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BAD_DEBT_AM\" tooltiptext=\"bind:BAD_DEBT_AM\"/><Cell col=\"29\" style=\"align:left;\" text=\"bind:REMARKS\" tooltiptext=\"bind:REMARKS\"/></Band><Band id=\"summary\"><Cell style=\"align:center;\" text=\"합계\"/><Cell col=\"1\" style=\"align:center;\" expr=\"dataset.getColumn(0,0)\" mask=\"@@@@-@@\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:center;\" expr=\"dataset.getCountNF()\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:center;\" expr=\"dataset.getCountNF()\"/><Cell col=\"4\" style=\"align:center;\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:center;\" expr=\"dataset.getSum(&quot;LS_RQS_AM&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;LS_RQS_AM&quot;)\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:center;\" expr=\"dataset.getCaseCount(&quot;PRXP_COMP_TRPL_C.length &gt; 0&quot;)\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:center;\" expr=\"dataset.getCaseCount(&quot;PBC_SQNO.length &gt; 0&quot;)\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:center;\" expr=\"dataset.getSum(&quot;SLAM&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;SLAM&quot;)\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:center;\" expr=\"dataset.getSum(&quot;EDI_UGQT&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;EDI_UGQT&quot;)\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:center;\" expr=\"dataset.getSum(&quot;ADINF_UGQT&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;ADINF_UGQT&quot;)\"/><Cell col=\"11\" style=\"align:center;\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:center;\" expr=\"dataset.getSum(&quot;BASIC_RATE&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;BASIC_RATE&quot;)\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:center;\" expr=\"dataset.getSum(&quot;XMLEDI_BASIC_RATE&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;XMLEDI_BASIC_RATE&quot;)\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:center;\" expr=\"dataset.getSum(&quot;EDI_UG_AM&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;EDI_UG_AM&quot;)\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:center;\" expr=\"dataset.getSum(&quot;ADINF_UG_AM&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;ADINF_UG_AM&quot;)\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:center;\" expr=\"dataset.getSum(&quot;IA_BI_UG_AM&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;IA_BI_UG_AM&quot;)\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:center;\" expr=\"dataset.getSum(&quot;IA_PG_UG_AM&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;IA_PG_UG_AM&quot;)\"/><Cell col=\"18\" displaytype=\"number\" style=\"align:center;\" expr=\"dataset.getSum(&quot;IA_MA_UG_AM&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;IA_MA_UG_AM&quot;)\"/><Cell col=\"19\" displaytype=\"number\" style=\"align:center;\" expr=\"dataset.getSum(&quot;IA_CTGR_UG_AM&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;IA_CTGR_UG_AM&quot;)\"/><Cell col=\"20\" displaytype=\"number\" style=\"align:center;\" expr=\"dataset.getSum(&quot;CTGR_SL_UGQT&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;CTGR_SL_UGQT&quot;)\"/><Cell col=\"21\" displaytype=\"number\" style=\"align:center;\" expr=\"dataset.getSum(&quot;CTGR_SL_UG_AM&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;CTGR_SL_UG_AM&quot;)\"/><Cell col=\"22\" displaytype=\"number\" style=\"align:center;\" expr=\"dataset.getSum(&quot;SMS_UG_AM&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;SMS_UG_AM&quot;)\"/><Cell col=\"23\" displaytype=\"number\" style=\"align:center;\" expr=\"dataset.getSum(&quot;LATE_AM&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;LATE_AM&quot;)\"/><Cell col=\"24\" style=\"align:center;\" expr=\"dataset.getCaseCount(&quot;PAY_UNAPL_YN == 'Y' || PAY_UNAPL_YN == 'A'&quot;)\"/><Cell col=\"25\" displaytype=\"number\" style=\"align:center;\" expr=\"dataset.getSum(&quot;SPPR&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;SPPR&quot;)\"/><Cell col=\"26\" displaytype=\"number\" style=\"align:center;\" expr=\"dataset.getSum(&quot;VAT_AM&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;VAT_AM&quot;)\"/><Cell col=\"27\" displaytype=\"number\" style=\"align:center;\" expr=\"dataset.getSum(&quot;FS_RQS_AM&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;FS_RQS_AM&quot;)\"/><Cell col=\"28\" displaytype=\"number\" expr=\"dataset.getSum(&quot;BAD_DEBT_AM&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;BAD_DEBT_AM&quot;)\"/><Cell col=\"29\" displaytype=\"normal\" style=\"align:center;\"/></Band></Format></Formats>");
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
            obj = new Button("Button75", "absolute", "347", "0", null, "12", "363", null, this.Div02);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "732", "72", "56", "41", null, null, this);
            obj.set_taborder("87");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0.12%", "30", null, "42", "98.01%", null, this);
            obj.set_taborder("88");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "81", null, this);
            obj.set_taborder("104");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "80.07%", "21", null, "14", "14.45%", null, this);
            obj.set_taborder("105");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_verify", "absolute", null, "0", "41", "21", "175", null, this);
            obj.set_taborder("106");
            obj.set_text("검증");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("103");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

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
            		p.set_titletext("사용료 청구내역");

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
        this.addIncludeScript("OMG_DS_SC_7160.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_7160.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        var	byDt = "";
        var	vfDt = "";
        var	vfFlag = "N";
        var vfCfDt = "";

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        /* Form Init */
        this.form_init = function(obj,e)
        {	
        	// 페이지 로딩후 실행부분
        	var toDay = this.gfn_today("yyyyMMdd");	
        	this.div_search.cal_by_dt._setValue(this.gfn_firstDate(toDay).substr(0, 6));
        }

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }
        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        /* 콜백 함수 */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        //	trace(this.ds_rqbrk.saveXML());
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}
        	else
        	{
        		if(svcID == "retrieveUgfeRqBrkList")
        		{
        			if(this.ds_rqbrk.rowcount==0)
        			{
        				this.Div02.Grid01.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        			}
        		}
        		else if(svcID == "createUgfeRqBrk")
        		{
        			if(ErrorCode == 0) alert(byDt.substr(0, 4) + "년 " + byDt.substr(4, 2) + "월" + " 빌링생성을 완료하였습니다.");
        			else if(ErrorCode != 0) alert(byDt.substr(0, 4) + "년 " + byDt.substr(4, 2) + "월" + " 빌링생성을 실패하였습니다.(Cause:" + ErrorMsg + ")");
        		}
        	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/	

        /* 빌링 생성 */
        this.btn_create_onclick = function(obj,e)
        {
        	byDt = (this.div_search.cal_by_dt._getValue() + "").substr(0, 6);

        //	기확정여부 검사
        	var nRow = this.ds_rqbrk.findRow( "PBC_SQNO_N", 1 );
        //	trace("nRow:" + nRow);
        	if (nRow != -1)
        	{
        		alert(byDt.substr(0, 4) + "년 " + byDt.substr(4, 2) + "월" + " 빌링내역은 이미 확정되었습니다.");
        		return;
        	}

        	var strRtn = this.gfn_getMessage("confirm", "confirm.message.create.billing", byDt.substr(0, 4) + "년 " + byDt.substr(4, 2) + "월");
        	if (strRtn == false) return;

        	var sParams			= "BY_DT=" + byDt
        						+ " USER_ID=" + application.gv_userId
        						;
        	var sSvcID			= "createUgfeRqBrk";
        	var sURL			= "svc::rest/bl/createUgfeRqBrk";
        	var sInDatasets		= "";
        	var sOutDatasets	= "";
        	var sArgument		= sParams;
        	var sCallbackFunc	= "fn_callBack";
        	var sTranType		= "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* 빌링검증 팝업실행 */
        this.btn_verify_onclick = function(obj,e)
        {
        	vfDt = (this.div_search.cal_by_dt._getValue() + "").substr(0, 6);

        //	빌링검증 팝업
        	var oArg = {paramMode:vfDt};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("billDataVerifyPopup", "OMG.BL::OMG_DS_SC_7160_P02.xfdl", oArg ,sOption, sPopupCallBack);

        	vfFlag = "Y";
        }

        /* 빌링확정 팝업실행 */
        this.btn_confirm_onclick = function(obj,e)
        {
        	byDt = (this.div_search.cal_by_dt._getValue() + "").substr(0, 6);

        //	빌링검증여부 확인
        	if(byDt != vfDt && vfFlag != "Y")
        	{
        		alert(byDt.substr(0, 4) + "년 " + byDt.substr(4, 2) + "월" + " 빌링내역이 검증되지 않았습니다. \n검증을 실행해주세요.");
        		return;
        	}

        //	빌링 검증월과 확정월 동일여부 확인
        	if(vfCfDt != byDt)
        	{
        		alert("빌링 검증월(" + vfCfDt + ")과 확정월(" + byDt + ")은 동일해야 합니다.");
        		this.btn_cnf.set_enable(false);
        		return;
        	}

        //	확정할 데이터 존재여부 확인
        //	trace("this.ds_rqbrk.cnt:" + this.ds_rqbrk.rowcount);
        	if(this.ds_rqbrk.rowcount == 0)
        	{
        		alert("빌링 확정할 자료가 없습니다.");
        		return;
        	}

        //	기확정여부 검사
        //	trace("ds_rqbrk:" + this.ds_rqbrk.saveXML());
        	var nRow = this.ds_rqbrk.findRow( "PBC_SQNO_N", 1 );
        //	trace("nRow:" + nRow);
        	if (nRow != -1)
        	{
        		alert(byDt.substr(0, 4) + "년 " + byDt.substr(4, 2) + "월" + " 빌링내역은 이미 확정되었습니다.");
        		return;
        	}

        	var strRtn = this.gfn_getMessage("confirm", "confirm.message.confirm.billing", byDt.substr(0, 4) + "년 " + byDt.substr(4, 2) + "월");
        	if (strRtn == false) return;

        //	사용료세금계산서 발행 팝업실행
        	var oArg = {paramMode:byDt};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("cmsDateCnfPopup", "OMG.BL::OMG_DS_SC_7160_P01.xfdl", oArg ,sOption, sPopupCallBack);
        }

        /* 청구내역 조회 */
        this.btn_search_onclick = function(obj,e)
        {
        	byDt = (this.div_search.cal_by_dt._getValue() + "").substr(0, 6);
        	if(this.div_search.chk_vndr_all.value == true)
        	{
        		if( this.gfn_nullToEmpty(this.div_search.Edit_comnum.value) == "" &&
        		    this.gfn_nullToEmpty(this.div_search.Edit_comname.value) == "" )
        		{
        			alert("조회월을 전체로 선택한 경우에는 반드시 업체코드 또는 업체명을 입력해야 합니다.");
        			return 0;
        		}
        		else byDt = "";
        	}

        
        	var trplC			= this.gfn_nullToEmpty(this.div_search.Edit_comnum.value);
        	var clntNm			= this.gfn_nullToEmpty(this.div_search.Edit_comname.value);

        	var sParams			= "BY_DT=" + byDt
        						+ " TRPL_C=" + trplC
        						+ " CLNTNM=" + clntNm
        						;

        //	trace("sParams:" + sParams);
        	this.fn_search(sParams);
        }

        this.fn_search = function(sParams)
        {
        	var sSvcID			= "retrieveUgfeRqBrkList";
        	var sURL			= "svc::rest/bl/retrieveUgfeRqBrkList";
        	var sInDatasets		= "";
        	var sOutDatasets	= "ds_rqbrk=ds_rqbrk";
        	var sArgument		= sParams;
        	var sCallbackFunc	= "fn_callBack";
        	var sTranType		= "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.Div02_Button75_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.Div02);
        }

        // 엑셀 다운로드
        this.btn_excel_onclick = function(obj,e)
        {
        	byDt				= (this.div_search.cal_by_dt._getValue() + "").substr(0, 6);
        	if(this.div_search.chk_vndr_all.value == true)
        	{
        		if( this.gfn_nullToEmpty(this.div_search.Edit_comnum.value) == "" &&
        		    this.gfn_nullToEmpty(this.div_search.Edit_comname.value) == "" )
        		{
        			alert("조회월을 전체로 선택한 경우에는 반드시 업체코드 또는 업체명을 입력해야 합니다.");
        			return 0;
        		}
        		else byDt = "";
        	}
        	var trplC			= this.gfn_nullToEmpty(this.div_search.Edit_comnum.value);
        	var clntNm			= this.gfn_nullToEmpty(this.div_search.Edit_comname.value);

        	var sParams			= "BY_DT=" + byDt
        						+ "&TRPL_C=" + trplC
        						+ "&CLNTNM=" + clntNm
        						;

        //	trace("sParams:" + sParams);
        	this.fn_excel(sParams);
        }

        this.fn_excel = function(sParams)
        {
        //	trace("엑셀 다운로드 params >>> " + sParams);
        	this.web_downExcel.set_url(application.gv_serverAdmin_url + "rest/excel/bl/downloadExcelUgfeRqBrk?" + sParams);
        }

        // 업체 조회
        this.div_search_btn_comname_onclick = function(obj,e)
        {
        	var oArg = "";
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("trplSearchPopup", "OMG.BL::OMG_DS_SC_7230_P01.xfdl", oArg ,sOption, sPopupCallBack);
        }

        // 팝업작업 후 진행함수
        this.fn_popupAfter = function(strId,strVal)
        {
        //	trace("strId:" + strId);
        //	trace("strVal:" + strVal);
        	var retVal = this.gfn_nullToEmpty(strVal);
        	if(strId == "trplSearchPopup")
        	{
        		if(retVal != '')
        		{
        			var paramsArr = retVal.split(",");
        			this.div_search.Edit_comnum.set_value(paramsArr[0]);
        			this.div_search.Edit_comname.set_value(paramsArr[1]);
        		}
        	}
        	else if(strId == "billDataVerifyPopup")
        	{
        		if(retVal != '')
        		{
        			var paramsArr = retVal.split(",");
        			vfCfDt = paramsArr[0];
        		}
        	}
        	else if(strId == "cmsDateCnfPopup")
        	{
        		if(retVal != '')
        		{
        			var paramsArr = retVal.split(",");
        			this.btn_search_onclick();
        		}
        		else
        		{
        			alert("사용료세금계산서 발행작업이 취소되었습니다.");
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_init, this);
            this.btn_cnf.addEventHandler("onclick", this.btn_confirm_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_create.addEventHandler("onclick", this.btn_create_onclick, this);
            this.div_search.btn_comname.addEventHandler("onclick", this.div_search_btn_comname_onclick, this);
            this.Div02.Grid01.addEventHandler("onheadclick", this.Div02_Grid01_onheadclick, this);
            this.Div02.Button75.addEventHandler("onclick", this.Div02_Button75_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_verify.addEventHandler("onclick", this.btn_verify_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_7160.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
