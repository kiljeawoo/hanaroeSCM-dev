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
                this.set_name("OMG_DS_SC_3220");
                this.set_classname("pattern_01");
                this.set_titletext("국세청신고현황");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rptPstt", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SOAC_PBC_STSC\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SPRTT_SUM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SPRTT_SUM01\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SPRTT_SUM023\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SPRTT_SUM00\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SPRTT_SUM02\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SPRTT_SUM03\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SPRTT_COUNT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SPRTT_COUNT01\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SPRTT_COUNT023\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SPRTT_COUNT00\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SPRTT_COUNT02\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SPRTT_COUNT03\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo><Rows><Row><Col id=\"SOAC_PBC_STSC\">01</Col><Col id=\"SPRTT_SUM\">0</Col><Col id=\"SPRTT_SUM01\">0</Col><Col id=\"SPRTT_SUM023\">0</Col><Col id=\"SPRTT_SUM00\">0</Col><Col id=\"SPRTT_SUM02\">0</Col><Col id=\"SPRTT_SUM03\">0</Col><Col id=\"SPRTT_COUNT\">0</Col><Col id=\"SPRTT_COUNT01\">0</Col><Col id=\"SPRTT_COUNT023\">0</Col><Col id=\"SPRTT_COUNT00\">0</Col><Col id=\"SPRTT_COUNT02\">0</Col><Col id=\"SPRTT_COUNT03\">0</Col></Row><Row><Col id=\"SOAC_PBC_STSC\">02</Col><Col id=\"SPRTT_SUM\">0</Col><Col id=\"SPRTT_SUM01\">0</Col><Col id=\"SPRTT_SUM023\">0</Col><Col id=\"SPRTT_SUM00\">0</Col><Col id=\"SPRTT_SUM02\">0</Col><Col id=\"SPRTT_SUM03\">0</Col><Col id=\"SPRTT_COUNT\">0</Col><Col id=\"SPRTT_COUNT01\">0</Col><Col id=\"SPRTT_COUNT023\">0</Col><Col id=\"SPRTT_COUNT00\">0</Col><Col id=\"SPRTT_COUNT02\">0</Col><Col id=\"SPRTT_COUNT03\">0</Col></Row><Row><Col id=\"SOAC_PBC_STSC\">03</Col><Col id=\"SPRTT_SUM\">0</Col><Col id=\"SPRTT_SUM01\">0</Col><Col id=\"SPRTT_SUM023\">0</Col><Col id=\"SPRTT_SUM00\">0</Col><Col id=\"SPRTT_SUM02\">0</Col><Col id=\"SPRTT_SUM03\">0</Col><Col id=\"SPRTT_COUNT\">0</Col><Col id=\"SPRTT_COUNT01\">0</Col><Col id=\"SPRTT_COUNT023\">0</Col><Col id=\"SPRTT_COUNT00\">0</Col><Col id=\"SPRTT_COUNT02\">0</Col><Col id=\"SPRTT_COUNT03\">0</Col></Row><Row><Col id=\"SOAC_PBC_STSC\">04</Col><Col id=\"SPRTT_SUM\">0</Col><Col id=\"SPRTT_SUM01\">0</Col><Col id=\"SPRTT_SUM023\">0</Col><Col id=\"SPRTT_SUM00\">0</Col><Col id=\"SPRTT_SUM02\">0</Col><Col id=\"SPRTT_SUM03\">0</Col><Col id=\"SPRTT_COUNT\">0</Col><Col id=\"SPRTT_COUNT01\">0</Col><Col id=\"SPRTT_COUNT023\">0</Col><Col id=\"SPRTT_COUNT00\">0</Col><Col id=\"SPRTT_COUNT02\">0</Col><Col id=\"SPRTT_COUNT03\">0</Col></Row><Row><Col id=\"SOAC_PBC_STSC\">05</Col><Col id=\"SPRTT_SUM\">0</Col><Col id=\"SPRTT_SUM01\">0</Col><Col id=\"SPRTT_SUM023\">0</Col><Col id=\"SPRTT_SUM00\">0</Col><Col id=\"SPRTT_SUM02\">0</Col><Col id=\"SPRTT_SUM03\">0</Col><Col id=\"SPRTT_COUNT\">0</Col><Col id=\"SPRTT_COUNT01\">0</Col><Col id=\"SPRTT_COUNT023\">0</Col><Col id=\"SPRTT_COUNT00\">0</Col><Col id=\"SPRTT_COUNT02\">0</Col><Col id=\"SPRTT_COUNT03\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_condition", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"START\" type=\"STRING\" size=\"256\"/><Column id=\"END\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH\" type=\"STRING\" size=\"256\"/><Column id=\"DT\" type=\"STRING\" size=\"256\"/><Column id=\"CONDITION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SEARCH\"/><Col id=\"CONDITION\">BUY</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_combo", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "69", "15", null, this);
            obj.set_taborder("0");
            obj.set_scrollbars("none");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "127", "21", null, null, this.div_search);
            obj.getSetter("taborder").set("21");
            obj.set_text("검색기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "36", "130", "21", null, null, this.div_search);
            obj.getSetter("taborder").set("22");
            obj.set_text("조건별검색");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_suppliee", "absolute", "267", "36", "292", "21", null, null, this.div_search);
            obj.set_taborder("23");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_start", "absolute", "142", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("24");
            obj.set_value("20150504");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static06", "absolute", "248", "10", "12", "21", null, null, this.div_search);
            obj.getSetter("taborder").set("25");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_end", "absolute", "263", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("26");
            obj.set_value("20150716");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static04", "absolute", "0", null, null, "10", "0", "0", this.div_search);
            obj.getSetter("taborder").set("27");
            obj.style.set_background("#f6f6f6ff");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_dt", "absolute", "365", "10", "75", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_dt_innerdataset = new Dataset("cbo_dt_innerdataset", this.div_search.cbo_dt);
            cbo_dt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">작성일</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">발행일</Col></Row></Rows>");
            obj.set_innerdataset(cbo_dt_innerdataset);
            obj.set_taborder("28");
            obj.set_value("1");
            obj.set_text("작성일");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj = new Combo("cbo_condition", "absolute", "142", "36", "122", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_condition_innerdataset = new Dataset("cbo_condition_innerdataset", this.div_search.cbo_condition);
            cbo_condition_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">사업자등록번호</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사업장명</Col></Row></Rows>");
            obj.set_innerdataset(cbo_condition_innerdataset);
            obj.set_taborder("29");
            obj.set_value("1");
            obj.set_text("사업자등록번호");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", null, "1", "15", "491", "0", null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "1", "30", "15", "67", null, null, this);
            obj.getSetter("taborder").set("3");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_grd", "absolute", "0", "97", null, null, "15", "0", this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);
            obj = new Button("btn_flag", "absolute", "329", "0", null, "12", "332", null, this.div_grd);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_grd.addChild(obj.name, obj);
            obj = new Grid("grd_rptPstt", "absolute", "0", "42", null, null, "0", "0", this.div_grd);
            obj.set_taborder("7");
            obj.set_binddataset("ds_rptPstt");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_summarytype("top");
            obj.set_useselcolor("false");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"70\"/><Column size=\"105\"/><Column size=\"105\"/><Column size=\"105\"/><Column size=\"105\"/><Column size=\"105\"/><Column size=\"105\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" colspan=\"2\" text=\"문서상태\"/><Cell col=\"2\" rowspan=\"2\" text=\"발행건수&#13;&#10;(전자서명)\"/><Cell col=\"3\" rowspan=\"2\" text=\"신고완료\"/><Cell col=\"4\" rowspan=\"2\" text=\"신고미완료\"/><Cell col=\"5\" colspan=\"3\" text=\"신고 미완료 상세\"/><Cell row=\"1\" col=\"5\" text=\"미신고\"/><Cell row=\"1\" col=\"6\" text=\"신고중\"/><Cell row=\"1\" col=\"7\" text=\"신고실패\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" displaytype=\"combo\" style=\"background:whitesmoke;background2:whitesmoke;\" text=\"bind:SOAC_PBC_STSC\" combodataset=\"ds_combo\" combocodecol=\"SIMP_C\" combodatacol=\"SIMP_CNM\"/><Cell col=\"1\" style=\"background:whitesmoke;background2:whitesmoke;\" text=\"건수\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPRTT_COUNT\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPRTT_COUNT01\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPRTT_COUNT023\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPRTT_COUNT00\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPRTT_COUNT02\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPRTT_COUNT03\"/><Cell row=\"1\" col=\"1\" style=\"background:whitesmoke;background2:whitesmoke;\" text=\"공급가액\"/><Cell row=\"1\" col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPRTT_SUM\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPRTT_SUM01\"/><Cell row=\"1\" col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPRTT_SUM023\"/><Cell row=\"1\" col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPRTT_SUM00\"/><Cell row=\"1\" col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPRTT_SUM02\"/><Cell row=\"1\" col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPRTT_SUM03\"/></Band><Band id=\"summary\"><Cell rowspan=\"2\" style=\"align:center;background:transparent;\" text=\"합계\"/><Cell col=\"1\" style=\"align:center;background:transparent;\" text=\"건수\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;background:transparent;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(SPRTT_COUNT)&quot;)\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;background:transparent;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(SPRTT_COUNT01)&quot;)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;background:transparent;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(SPRTT_COUNT023)&quot;)\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;background:transparent;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(SPRTT_COUNT00)&quot;)\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;background:transparent;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(SPRTT_COUNT02)&quot;)\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;background:transparent;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(SPRTT_COUNT03)&quot;)\"/><Cell row=\"1\" col=\"1\" style=\"align:center;background:transparent;\" text=\"공급가액\"/><Cell row=\"1\" col=\"2\" displaytype=\"number\" style=\"align:right;background:transparent;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(SPRTT_SUM)&quot;)\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" style=\"align:right;background:transparent;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(SPRTT_SUM01)&quot;)\"/><Cell row=\"1\" col=\"4\" displaytype=\"number\" style=\"align:right;background:transparent;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(SPRTT_SUM023)&quot;)\"/><Cell row=\"1\" col=\"5\" displaytype=\"number\" style=\"align:right;background:transparent;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(SPRTT_SUM00)&quot;)\"/><Cell row=\"1\" col=\"6\" displaytype=\"number\" style=\"align:right;background:transparent;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(SPRTT_SUM02)&quot;)\"/><Cell row=\"1\" col=\"7\" displaytype=\"number\" style=\"align:right;background:transparent;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(SPRTT_SUM03)&quot;)\"/></Band></Format></Formats>");
            this.div_grd.addChild(obj.name, obj);
            obj = new Button("btn_excel", "absolute", null, "16", "89", "21", "0", null, this.div_grd);
            obj.set_taborder("10");
            obj.set_text("엑셀다운로드");
            this.div_grd.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "724", "98", "56", "41", null, null, this);
            obj.getSetter("taborder").set("5");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("6");
            obj.set_url("common::location.xfdl");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Static("st_info", "absolute", "0", "117", "547", "21", null, null, this);
            obj.getSetter("taborder").set("7");
            obj.set_text("* 문서종류 : 기업(세금)계산서(회원/비회원), 개인(세금)계산서, 위수탁(세금)계산서(회원/비회원)");
            obj.set_cssclass("sta_WF_DescriptionE02");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 69, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_scrollbars("none");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 788, 367, this.div_grd,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");

            	}
            );
            this.div_grd.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("국세청신고현황");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_search.cal_start","value","ds_condition","START");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_search.cal_end","value","ds_condition","END");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_search.cbo_dt","value","ds_condition","DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_search.cbo_condition","value","ds_condition","CONDITION");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_search.edt_suppliee","value","ds_condition","SEARCH");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_3310.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_3310.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        this.flag = true;
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
           var param = [  
         		{code:"SOAC_PBC_STSC",   dsName:"ds_combo",   selecttype:"N"}
            ];
            
        	this.gfn_setPortalCommonCode(param);
        	
        	this.div_search.cal_start.set_value(this.gfn_firstDate(this.gfn_today("yyyyMMdd")));
            this.div_search.cal_end.set_value(this.gfn_today("yyyyMMdd"));
            
            this.div_search.cbo_dt.set_index(0);
            this.div_search.cbo_condition.set_index(0);
            
            this.fn_retrieveRptPstt();
        }

        //gfn_setCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	trace("fn_commonAfterOnload");
        	//콤보에 최상단Row보이도록 설정
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_retrieveRptPstt = function()
        {
        	var sSvcID        = "retrieveRptPstt";
        	var sURL          = "svc::rest/tx/retrieveRptPstt";
        	var sInDatasets   = "ds_condition=ds_condition";
        	var sOutDatasets  = "ds_rptPstt=ds_rptPstt";	
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0) //에러
         	{
        		trace(">>>>>>>>>>>>>>> svcID ::" +  svcID + ",  ErrorCode :: " + ErrorCode + ",  ErrorMsg :: " + ErrorMsg);
         	}
         	else 
         	{
        		switch(svcID)
        		{
        			case "retrieveRptPstt":
        				break;
        		}
         	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.common_onclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_search":	
        			this.fn_retrieveRptPstt();
        			break;
        			
        		case "btn_excel": 
        			//gfn_exportExcel(Export할 Grid, 생성될 Excel파일명)
        			//파일명은 뒤에 "_년월일분초" 추가됨 (런쳐실행시만)
        			if(this.ds_rptPstt.rowcount < 1)
        			{
        				alert("조회내용이 없습니다.");
        				return;
        			}
        			this.gfn_exportExcel(this.div_grd.grd_rptPstt,"매출(세금)계산서조회");
        			break;
        	}
        }

        
        this.div_search_edt_suppliee_onkeydown = function(obj,e)
        {
        	if(e.keycode == '13')
        	{
        		this.fn_retrieveRptPstt();
        	}
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/

        
        /************************************************************************************************
         * 페이징처리
        ************************************************************************************************/

        this.btn_flag_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_grd);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.edt_suppliee.addEventHandler("onkeydown", this.div_search_edt_suppliee_onkeydown, this);
            this.btn_search.addEventHandler("onclick", this.common_onclick, this);
            this.div_grd.btn_flag.addEventHandler("onclick", this.btn_flag_onclick, this);
            this.div_grd.grd_rptPstt.addEventHandler("oncellclick", this.div_grd_grd_tax_oncellclick, this);
            this.div_grd.grd_rptPstt.addEventHandler("onheadclick", this.div_grd_grd_tax_onheadclick, this);
            this.div_grd.grd_rptPstt.addEventHandler("oncelldblclick", this.div_grd_grd_tax_oncelldblclick, this);
            this.div_grd.btn_excel.addEventHandler("onclick", this.common_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_3310.xfdl");
        this.loadPreloadList();
       
    };
}
)();
