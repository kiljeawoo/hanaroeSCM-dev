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
                this.set_name("OMG_DS_SC_7280");
                this.set_titletext("환불 관리");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_prcStat", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"STRING\" size=\"32\" prop=\"\"/></ColumnInfo><Rows><Row><Col id=\"SIMP_C\">0</Col><Col id=\"SIMP_CNM\">접수</Col></Row><Row><Col id=\"SIMP_C\">1</Col><Col id=\"SIMP_CNM\">완료</Col></Row><Row><Col id=\"SIMP_C\">2</Col><Col id=\"SIMP_CNM\">삭제</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rfInq", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"REQ_DT\" type=\"STRING\" size=\"8\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"50\"/><Column id=\"RF_AM\" type=\"INT\" size=\"256\"/><Column id=\"PRC_ST\" type=\"STRING\" size=\"10\"/><Column id=\"RF_CD\" type=\"STRING\" size=\"20\"/><Column id=\"BNK_C\" type=\"STRING\" size=\"3\"/><Column id=\"ACNO\" type=\"STRING\" size=\"16\"/><Column id=\"ACNM\" type=\"STRING\" size=\"50\"/><Column id=\"RF_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BZNO\" type=\"STRING\" size=\"12\"/><Column id=\"REMARK\" type=\"STRING\" size=\"100\"/></ColumnInfo><Rows><Row><Col id=\"REQ_DT\">20170203</Col><Col id=\"NA_TRPL_C\">2910000114691</Col><Col id=\"CLNTNM\">해태제과식품(주)포항</Col><Col id=\"RF_AM\">1100</Col><Col id=\"PRC_ST\">1</Col><Col id=\"RF_CD\">01</Col><Col id=\"BNK_C\">011</Col><Col id=\"ACNO\">1002955446852</Col><Col id=\"ACNM\">김청정</Col><Col id=\"RF_DT\">20170204</Col><Col id=\"BZNO\">5068512919</Col><Col id=\"REMARK\">정보분석 2개월 환불</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_bnkC", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"STRING\" size=\"32\" prop=\"\"/></ColumnInfo><Rows><Row><Col id=\"SIMP_C\">011</Col><Col id=\"SIMP_CNM\">농협</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rfRsn", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"STRING\" size=\"32\" prop=\"\"/></ColumnInfo><Rows><Row><Col id=\"SIMP_C\">01</Col><Col id=\"SIMP_CNM\">과납환불</Col></Row><Row><Col id=\"SIMP_C\">02</Col><Col id=\"SIMP_CNM\">본사대납</Col></Row><Row><Col id=\"SIMP_C\">03</Col><Col id=\"SIMP_CNM\">이중납부</Col></Row><Row><Col id=\"SIMP_C\">04</Col><Col id=\"SIMP_CNM\">폐업</Col></Row><Row><Col id=\"SIMP_C\">05</Col><Col id=\"SIMP_CNM\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rfAdd", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"REQ_DT\" type=\"STRING\" size=\"8\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"50\"/><Column id=\"RF_AM\" type=\"INT\" size=\"256\"/><Column id=\"PRC_ST\" type=\"STRING\" size=\"10\"/><Column id=\"RF_CD\" type=\"STRING\" size=\"20\"/><Column id=\"BNK_C\" type=\"STRING\" size=\"3\"/><Column id=\"ACNO\" type=\"STRING\" size=\"16\"/><Column id=\"ACNM\" type=\"STRING\" size=\"50\"/><Column id=\"RF_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BZNO\" type=\"STRING\" size=\"12\"/><Column id=\"REMARK\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rfUpd", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"REQ_DT\" type=\"STRING\" size=\"8\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"50\"/><Column id=\"RF_AM\" type=\"INT\" size=\"256\"/><Column id=\"PRC_ST\" type=\"STRING\" size=\"10\"/><Column id=\"RF_CD\" type=\"STRING\" size=\"20\"/><Column id=\"BNK_C\" type=\"STRING\" size=\"3\"/><Column id=\"ACNO\" type=\"STRING\" size=\"16\"/><Column id=\"ACNM\" type=\"STRING\" size=\"50\"/><Column id=\"RF_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BZNO\" type=\"STRING\" size=\"12\"/><Column id=\"REMARK\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rfDel", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"REQ_DT\" type=\"STRING\" size=\"8\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"50\"/><Column id=\"RF_AM\" type=\"INT\" size=\"256\"/><Column id=\"PRC_ST\" type=\"STRING\" size=\"10\"/><Column id=\"RF_CD\" type=\"STRING\" size=\"20\"/><Column id=\"BNK_C\" type=\"STRING\" size=\"3\"/><Column id=\"ACNO\" type=\"STRING\" size=\"16\"/><Column id=\"ACNM\" type=\"STRING\" size=\"50\"/><Column id=\"RF_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BZNO\" type=\"STRING\" size=\"12\"/><Column id=\"REMARK\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelListDown", "absolute", null, "0", "41", "21", "78", null, this);
            obj.set_taborder("37");
            obj.set_text("엑셀");
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

            obj = new Div("Div02", "absolute", "0", "102", null, null, "15", "-1", this);
            obj.set_taborder("81");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0", "17", null, null, "0", "8", this.Div02);
            obj.set_taborder("2");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_summarytype("top");
            obj.set_binddataset("ds_rfInq");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"접수일\"/><Cell col=\"2\" text=\"거래처코드\"/><Cell col=\"3\" text=\"업체명\"/><Cell col=\"4\" text=\"환불금액\"/><Cell col=\"5\" text=\"진행상태\"/><Cell col=\"6\" text=\"환불사유\"/><Cell col=\"7\" text=\"환불은행\"/><Cell col=\"8\" text=\"계좌번호\"/><Cell col=\"9\" text=\"예금주명\"/><Cell col=\"10\" text=\"환불일\"/><Cell col=\"11\" text=\"사업자번호\"/><Cell col=\"12\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: ;\" expr=\"currow+1\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"date\" text=\"bind:REQ_DT\" tooltiptext=\"bind:REQ_DT\"/><Cell col=\"2\" edittype=\"normal\" editfilter=\"integer\" text=\"bind:NA_TRPL_C\" tooltiptext=\"bind:NA_TRPL_C\"/><Cell col=\"3\" text=\"bind:CLNTNM\" tooltiptext=\"bind:CLNTNM\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"normal\" editfilter=\"integer\" text=\"bind:RF_AM\" tooltiptext=\"bind:RF_AM\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"combo\" editfilter=\"none\" text=\"bind:PRC_ST\" combodataset=\"ds_prcStat\" combocodecol=\"SIMP_C\" combodatacol=\"SIMP_CNM\" tooltiptext=\"bind:PRC_ST\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:RF_CD\" combodataset=\"ds_rfRsn\" combocodecol=\"SIMP_C\" combodatacol=\"SIMP_CNM\" tooltiptext=\"bind:RF_CD\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:BNK_C\" combodataset=\"ds_bnkC\" combocodecol=\"SIMP_C\" combodatacol=\"SIMP_CNM\" combodisplay=\"edit\" tooltiptext=\"bind:BNK_C\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"normal\" editfilter=\"integer\" text=\"bind:ACNO\" combodisplay=\"edit\" tooltiptext=\"bind:ACNO\"/><Cell col=\"9\" edittype=\"normal\" text=\"bind:ACNM\" tooltiptext=\"bind:ACNM\"/><Cell col=\"10\" displaytype=\"date\" edittype=\"date\" text=\"bind:RF_DT\" tooltiptext=\"bind:RF_DT\"/><Cell col=\"11\" displaytype=\"normal\" edittype=\"normal\" editfilter=\"integer\" text=\"bind:BZNO\" tooltiptext=\"bind:BZNO\"/><Cell col=\"12\" edittype=\"normal\" text=\"bind:REMARK\" tooltiptext=\"bind:REMARK\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" style=\"align:center middle;\" text=\"합계\"/><Cell col=\"2\" expr=\"dataset.getCountNF()\"/><Cell col=\"3\"/><Cell col=\"4\" displaytype=\"number\" expr=\"dataset.getSum(&quot;RF_AM&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;RF_AM&quot;)\"/><Cell col=\"5\" displaytype=\"number\"/><Cell col=\"6\" displaytype=\"number\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:center;\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button75", "absolute", "363", "1", null, "12", "362", null, this.Div02);
            obj.set_taborder("1");
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

            obj = new Div("div_search", "absolute", "0", "29", null, "75", "15", null, this);
            obj.set_taborder("103");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "15", "10", "72", "21", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("접수일");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "10.81%", "10", null, "21", "76.84%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static08", "absolute", "23.41%", "10", null, "21", "75.32%", null, this.div_search);
            obj.set_taborder("14");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_to", "absolute", "24.68%", "10", null, "21", "62.85%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static00", "absolute", "39.82%", "10", null, "21", "50.64%", null, this.div_search);
            obj.set_taborder("16");
            obj.set_text("업체조회");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit_comnum", "absolute", "48.35%", "10", null, "21", "42.75%", null, this.div_search);
            obj.set_taborder("17");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit_comname", "absolute", "57.51%", "10", null, "21", "33.08%", null, this.div_search);
            obj.set_taborder("18");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_comname", "absolute", "67.18%", "10", null, "21", "30.15%", null, this.div_search);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cb_prcStat", "absolute", "80.66%", "10", null, "21", "7.63%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cb_prcStat_innerdataset = new Dataset("cb_prcStat_innerdataset", this.div_search.cb_prcStat);
            cb_prcStat_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">접수</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">완료</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">삭제</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(cb_prcStat_innerdataset);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_align("left middle");
            obj.set_index("-1");
            obj = new Static("Static01", "absolute", "71.63%", "10", "72", "21", null, null, this.div_search);
            obj.set_taborder("21");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_rf_insert", "absolute", null, "0", "41", "21", "222", null, this);
            obj.set_taborder("105");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_na_delete", "absolute", null, "0", "41", "21", "174", null, this);
            obj.set_taborder("106");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_na_save", "absolute", null, "0", "41", "21", "126", null, this);
            obj.set_taborder("107");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 420, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("81");
            		p.set_text("Div02");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 75, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("103");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("환불 관리");

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
        this.addIncludeScript("OMG_DS_SC_7280.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_7280.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        /* Form Init: 페이지 호출 후 실행 */
        this.form_init = function(obj,e)
        {
        	var toDay = this.gfn_today("yyyyMMdd");
        	this.div_search.cal_from.set_value(this.gfn_firstDate(toDay));
        	this.div_search.cal_to.set_value(this.gfn_lastDate(toDay));
        }

        /* Form Onload: DataSet 로딩 후 실행 */
        this.form_onload = function(obj,e)
        {	// 페이지 로딩후 실행부분
        	this.gfn_setInitForm(obj, e); //공통

            var param = [
        		{code:"BNK_RF"		, dsName:"ds_bnkC"		, selecttype:""}
            ];

        	this.gfn_setPortalCommonCode(param); 
        }

        this.fn_afterFormOnload = function() //onload
        {

        }

        // gfn_setCommonCode, gfn_setPortalCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	this.div_search.cb_prcStat.set_index(3);
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        /* 콜백 함수 */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {

        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /* 조회조건 영역 펼치기, 접기 */
        this.Div02_Button75_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.Div02);
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/

        this.btn_rf_insert_onclick = function(obj,e)
        {
        	var rownum;
        	rownum = this.ds_rfInq.addRow();
        	// 행 추가시 초기값 설정
        	this.ds_rfInq.setColumn(rownum, "REQ_DT",	this.gfn_today("yyyyMMdd"));
        	this.ds_rfInq.setColumn(rownum, "PRC_ST",	'0');
        	this.ds_rfInq.setColumn(rownum, "RF_CD",	'01');
        	this.ds_rfInq.setColumn(rownum, "BNK_C",	'011');
        }

        this.btn_rf_delete_onclick = function(obj,e)
        {
        	if( this.ds_rfInq.getRowType(this.ds_rfInq.rowposition) != Dataset.ROWTYPE_INSERT )
        	{
        		alert("추가한 행만 삭제가 가능합니다.");
        		return;
        	}
        	else
        	{
        		this.ds_rfInq.deleteRow(this.ds_rfInq.rowposition);
        	}
        }

        this.btn_rf_search_onclick = function(obj,e)
        {
        	var fromDt			= this.div_search.cal_from.value;
        	var toDt			= this.div_search.cal_to.value;
        	var trplC			= this.gfn_nullToEmpty(this.div_search.Edit_comnum.value);
        	var clntNm			= this.gfn_nullToEmpty(this.div_search.Edit_comname.value);
        	var prcStat			= this.gfn_nullToEmpty(this.div_search.cb_prcStat.value);

        	var sParams			= "FROM_DT=" + fromDt
        						+ " TO_DT="  + toDt
        						+ " TRPL_C=" + trplC
        						+ " CLNTNM=" + clntNm
        						+ " PRC_ST=" + prcStat
        						;
        	trace("sParams:" + sParams);
        	this.fn_search(sParams);
        }

        this.fn_search = function(sParams)
        {
        	var sSvcID			= "retrieveRfInqList";
        	var sURL			= "svc::rest/bl/retrieveRfInqList";
        	var sInDatasets		= "";
        	var sOutDatasets	= "ds_rfInq=ds_rfInq";
        	var sArgument		= sParams;
        	var sCallbackFunc	= "fn_callBack";
        	var sTranType		= "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        // 업체 조회
        this.div_search_btn_comname_onclick = function(obj,e)
        {
        	var oArg = "";
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("trplSearchPopup","OMG.BL::OMG_DS_SC_7230_P01.xfdl",oArg,sOption,sPopupCallBack);
        }

        // 팝업작업 후 진행함수
        this.fn_popupAfter = function(strId,strVal)
        {
        	// trace(" strId : " + strId + " strVal : " + strVal);
        	if(strVal != ''){
        		var paramsArr = strVal.split(",");
        	
        		if(strId == "trplSearchPopup"){
        			this.div_search.Edit_comnum.set_value(paramsArr[0]);
        			this.div_search.Edit_comname.set_value(paramsArr[1]);
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_init, this);
            this.btn_search.addEventHandler("onclick", this.btn_rf_search_onclick, this);
            this.btn_excelListDown.addEventHandler("onclick", this.btn_rf_excelListDown_onclick, this);
            this.Div02.Grid01.addEventHandler("onheadclick", this.Div02_Grid01_onheadclick, this);
            this.Div02.Button75.addEventHandler("onclick", this.Div02_Button75_onclick, this);
            this.div_search.Static05.addEventHandler("onclick", this.div_search_Static05_onclick, this);
            this.div_search.cal_from.addEventHandler("oneditclick", this.div_search_cal_from_oneditclick, this);
            this.div_search.btn_comname.addEventHandler("onclick", this.div_search_btn_comname_onclick, this);
            this.div_search.cb_prcStat.addEventHandler("onitemchanged", this.div_search_cb_prcStat_onitemchanged, this);
            this.div_search.Static01.addEventHandler("onclick", this.div_search_Static05_onclick, this);
            this.btn_rf_insert.addEventHandler("onclick", this.btn_rf_insert_onclick, this);
            this.btn_na_delete.addEventHandler("onclick", this.btn_rf_delete_onclick, this);
            this.btn_na_save.addEventHandler("onclick", this.btn_rf_save_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_7280.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
