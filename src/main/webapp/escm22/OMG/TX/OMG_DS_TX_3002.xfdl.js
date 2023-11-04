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
                this.set_name("OMG_DS_TX_3002");
                this.set_titletext("매입합계표(이용료)");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_sum", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"COUNT_BUY_BZNO\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SUM_BUY_BZNO\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SPRTT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"TXA_TT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"TOT_AM\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sum2", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sum3", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_condition", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"START\" type=\"STRING\" size=\"256\"/><Column id=\"END\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_STSC_01\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_STSC_02\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_STSC_04\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_STSC_05\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_STSC_99\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_STSC_00\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_STSC_07\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"RPBC_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"OCU_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NA_TRPL_C\"/><Col id=\"TXBIL_STSC_01\">01</Col><Col id=\"TXBIL_STSC_02\">02</Col><Col id=\"TXBIL_STSC_04\">04</Col><Col id=\"TXBIL_STSC_05\">05</Col><Col id=\"TXBIL_STSC_07\">07</Col><Col id=\"RPBC_DSC\">1</Col><Col id=\"TXBIL_STSC_99\">99</Col><Col id=\"TXBIL_STSC_00\">00</Col><Col id=\"OCU_DSC\">02</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("47");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "30", null, "93", "787", null, this);
            obj.set_taborder("48");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "832", "71", null, "122", "-54", null, this);
            obj.set_taborder("53");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "788", "5", "15", "490", null, null, this);
            obj.set_taborder("58");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("69");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "180", "255", "56", "10", null, null, this);
            obj.set_taborder("74");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "136", "420", "56", "10", null, null, this);
            obj.set_taborder("75");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "72", null, this);
            obj.set_taborder("77");
            obj.set_text("div_auth");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "69", "15", null, this);
            obj.set_taborder("76");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Div("div_month", "absolute", "123", "36", "221", "21", null, null, this.div_search);
            obj.set_taborder("47");
            obj.style.set_background("#f6f6f6ff");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("cal_monS", "absolute", "0", "0", null, "21", "143", null, this.div_search.div_month);
            obj.set_taborder("0");
            obj.set_scrollbars("none");
            obj.set_url("common::calendarMonth.xfdl");
            this.div_search.div_month.addChild(obj.name, obj);
            obj = new Div("div_quarter", "absolute", "123", "36", "221", "21", null, null, this.div_search);
            obj.set_taborder("48");
            obj.set_text("             년");
            obj.style.set_align("left middle");
            obj.style.set_background("#f6f6f6ff");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_year", "absolute", "0", "0", "71", "21", null, null, this.div_search.div_quarter);
            this.div_search.div_quarter.addChild(obj.name, obj);
            var cbo_year_innerdataset = new Dataset("cbo_year_innerdataset", this.div_search.div_quarter.cbo_year);
            cbo_year_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">2011</Col><Col id=\"datacolumn\">2011 년</Col></Row><Row><Col id=\"codecolumn\">2012</Col><Col id=\"datacolumn\">2012 년</Col></Row><Row><Col id=\"codecolumn\">2013</Col><Col id=\"datacolumn\">2013 년</Col></Row><Row><Col id=\"codecolumn\">2014</Col><Col id=\"datacolumn\">2014 년</Col></Row><Row><Col id=\"codecolumn\">2015</Col><Col id=\"datacolumn\">2015 년</Col></Row><Row><Col id=\"codecolumn\">2016</Col><Col id=\"datacolumn\">2016 년</Col></Row><Row><Col id=\"codecolumn\">2017</Col><Col id=\"datacolumn\">2017 년</Col></Row><Row><Col id=\"codecolumn\">2018</Col><Col id=\"datacolumn\">2018 년</Col></Row><Row><Col id=\"codecolumn\">2019</Col><Col id=\"datacolumn\">2019 년</Col></Row></Rows>");
            obj.set_innerdataset(cbo_year_innerdataset);
            obj.set_taborder("2");
            obj.set_value("2011");
            obj.set_text("2011 년");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj = new Combo("cbo_quarter", "absolute", "73", "0", "67", "21", null, null, this.div_search.div_quarter);
            this.div_search.div_quarter.addChild(obj.name, obj);
            var cbo_quarter_innerdataset = new Dataset("cbo_quarter_innerdataset", this.div_search.div_quarter.cbo_quarter);
            cbo_quarter_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1분기</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2분기</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3분기</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4분기</Col></Row></Rows>");
            obj.set_innerdataset(cbo_quarter_innerdataset);
            obj.set_taborder("3");
            obj.set_value("1");
            obj.set_text("1분기");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj = new Div("div_date", "absolute", "123", "36", "221", "21", null, null, this.div_search);
            obj.set_taborder("49");
            obj.style.set_background("#f6f6f6ff");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_start", "absolute", "0", "0", "100", "21", null, null, this.div_search.div_date);
            this.div_search.div_date.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_value("20150504");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("st_char", "absolute", "104", "0", "12", "21", null, null, this.div_search.div_date);
            obj.set_taborder("4");
            obj.set_text("~");
            this.div_search.div_date.addChild(obj.name, obj);
            obj = new Calendar("cal_end", "absolute", "119", "0", "100", "21", null, null, this.div_search.div_date);
            this.div_search.div_date.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_value("20150716");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static00", "absolute", "15", "10", "91", "21", null, null, this.div_search);
            obj.set_taborder("50");
            obj.set_text("구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "394", "36", "115", "21", null, null, this.div_search);
            obj.set_taborder("51");
            obj.set_text("거래기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "394", "10", "115", "21", null, null, this.div_search);
            obj.set_taborder("52");
            obj.set_text("관리업체");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("st_date", "absolute", "15", "36", "118", "21", null, null, this.div_search);
            obj.set_taborder("53");
            obj.set_text("작성일(일자별)");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_sort", "absolute", "123", "10", "227", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_sort_innerdataset = new Dataset("rdo_sort_innerdataset", this.div_search.rdo_sort);
            rdo_sort_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">일자별</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">월별</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">분기별</Col></Row></Rows>");
            obj.set_innerdataset(rdo_sort_innerdataset);
            obj.set_taborder("61");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Static("st_period", "absolute", "468", "36", "232", "21", null, null, this.div_search);
            obj.set_taborder("62");
            obj.set_text("2015-05-04 ~ 2015-05-31");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_company", "absolute", "468", "10", "287", "21", null, null, this.div_search);
            obj.set_taborder("64");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_table", "absolute", "0", "97", null, null, "15", "0", this);
            obj.set_taborder("64");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0", "142", null, "107", "0", null, this.div_table);
            obj.set_taborder("3");
            obj.set_binddataset("ds_sum2");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"매입처수\"/><Cell col=\"2\" text=\"건수\"/><Cell col=\"3\" text=\"공급가액\"/><Cell col=\"4\" text=\"세액\"/><Cell col=\"5\" text=\"합계금액\"/></Band><Band id=\"body\"><Cell text=\"사업자등록증발행분\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"bind:COUNT_BUY_BZNO\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUM_BUY_BZNO\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPRTT\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TXA_TT\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOT_AM\"/><Cell row=\"1\" text=\"주민등록증발행분\"/><Cell row=\"1\" col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"bind:COUNT_BUY_BZNO2\"/><Cell row=\"1\" col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUM_BUY_BZNO2\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPRTT2\"/><Cell row=\"1\" col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TXA_TT2\"/><Cell row=\"1\" col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOT_AM2\"/></Band><Band id=\"summary\"><Cell style=\"align:center;\" text=\"소계\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(COUNT_BUY_BZNO)+nexacro.toNumber(COUNT_BUY_BZNO2)&quot;)\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(SUM_BUY_BZNO)+nexacro.toNumber(SUM_BUY_BZNO2)&quot;)\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(SPRTT)+nexacro.toNumber(SPRTT2)&quot;)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(TXA_TT)+nexacro.toNumber(TXA_TT2)&quot;)\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(TOT_AM)+nexacro.toNumber(TOT_AM2)&quot;)\"/></Band></Format></Formats>");
            this.div_table.addChild(obj.name, obj);
            obj = new Grid("Grid02", "absolute", "0", "42", null, "59", "0", null, this.div_table);
            obj.set_taborder("4");
            obj.set_binddataset("ds_sum");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"매입처수\"/><Cell col=\"2\" text=\"건수\"/><Cell col=\"3\" text=\"공급가액\"/><Cell col=\"4\" text=\"세액\"/><Cell col=\"5\" text=\"합계금액\"/></Band><Band id=\"body\"><Cell text=\"합계\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"bind:COUNT_BUY_BZNO\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUM_BUY_BZNO\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPRTT\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TXA_TT\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOT_AM\"/></Band></Format></Formats>");
            this.div_table.addChild(obj.name, obj);
            obj = new Static("Static47", "absolute", "0", "17", "196", "21", null, null, this.div_table);
            obj.set_taborder("10");
            obj.set_text("매입(세금)계산서 총합계");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_table.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "620", "1", "56", "41", null, null, this.div_table);
            obj.set_taborder("11");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_table.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0", "101", null, "20", "11", null, this.div_table);
            obj.set_taborder("12");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_table.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "117", "275", "21", null, null, this.div_table);
            obj.set_taborder("13");
            obj.set_text("국세청 신고된 전자(세금)계산서 현황");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_table.addChild(obj.name, obj);
            obj = new Static("st_info", "absolute", "0", "250", "447", "21", null, null, this.div_table);
            obj.set_taborder("14");
            obj.set_text("* 2015년 06월 26일까지 집계된 자료 입니다.");
            obj.set_cssclass("sta_WF_DescriptionE02");
            obj.set_visible("true");
            this.div_table.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", null, "250", "447", "21", "0", null, this.div_table);
            obj.set_taborder("15");
            obj.set_text("( * 오늘 발행분과 국세청 신고문서는 다음날 합계표에 반영됩니다.)");
            obj.set_cssclass("sta_WF_DescriptionE02");
            obj.style.set_align("right middle");
            this.div_table.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", "282", "275", "21", null, null, this.div_table);
            obj.set_taborder("16");
            obj.set_text("국세청 미신고된 전자(세금)계산서 현황");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_table.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "0", "266", null, "20", "11", null, this.div_table);
            obj.set_taborder("17");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_table.addChild(obj.name, obj);
            obj = new Button("Button75", "absolute", "361", "0", null, "12", "361", null, this.div_table);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_table.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0", "307", null, "107", "0", null, this.div_table);
            obj.set_taborder("18");
            obj.set_binddataset("ds_sum3");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"매입처수\"/><Cell col=\"2\" text=\"건수\"/><Cell col=\"3\" text=\"공급가액\"/><Cell col=\"4\" text=\"세액\"/><Cell col=\"5\" text=\"합계금액\"/></Band><Band id=\"body\"><Cell text=\"사업자등록증발행분\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"bind:COUNT_BUY_BZNO\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUM_BUY_BZNO\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPRTT\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TXA_TT\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOT_AM\"/><Cell row=\"1\" text=\"주민등록증발행분\"/><Cell row=\"1\" col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"bind:COUNT_BUY_BZNO2\"/><Cell row=\"1\" col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUM_BUY_BZNO2\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPRTT2\"/><Cell row=\"1\" col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TXA_TT2\"/><Cell row=\"1\" col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOT_AM2\"/></Band><Band id=\"summary\"><Cell style=\"align:center;\" text=\"소계\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(COUNT_BUY_BZNO)+nexacro.toNumber(COUNT_BUY_BZNO2)&quot;)\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(SUM_BUY_BZNO)+nexacro.toNumber(SUM_BUY_BZNO2)&quot;)\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(SPRTT)+nexacro.toNumber(SPRTT2)&quot;)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(TXA_TT)+nexacro.toNumber(TXA_TT2)&quot;)\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(TOT_AM)+nexacro.toNumber(TOT_AM2)&quot;)\"/></Band></Format></Formats>");
            this.div_table.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 221, 21, this.div_search.div_month,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("47");
            		p.style.set_background("#f6f6f6ff");

            	}
            );
            this.div_search.div_month.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 221, 21, this.div_search.div_quarter,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("48");
            		p.set_text("             년");
            		p.style.set_align("left middle");
            		p.style.set_background("#f6f6f6ff");

            	}
            );
            this.div_search.div_quarter.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 221, 21, this.div_search.div_date,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("49");
            		p.style.set_background("#f6f6f6ff");

            	}
            );
            this.div_search.div_date.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 69, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("76");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 788, 450, this.div_table,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("64");
            		p.set_text("Div02");

            	}
            );
            this.div_table.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("매입합계표(이용료)");

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
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
            this._addPreloadList("fdl", "common::calendarMonth.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_TX_3002.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_TX_3002.xfdl", function(exports) {
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
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
           //페이지 로딩후 실행부분
        	this.div_search.div_date.cal_start.set_value(this.gfn_firstDate(this.gfn_today("yyyyMMdd")));
            this.div_search.div_date.cal_end.set_value(this.gfn_today("yyyyMMdd"));
            this.div_search.div_month.cal_monS._setValue(this.gfn_today("yyyyMMdd").substr(0,6));
            this.div_search.div_month.cal_monS.setFunctionName("fn_monthChanged");
            this.fn_dayChanged();
            this.div_search.div_quarter.cbo_year.set_value(this.gfn_today("yyyyMMdd").substr(0,4));
            this.ds_condition.setColumn(0,"NA_TRPL_C", application.gv_glnCode);
            this.ds_condition.setColumn(0,"NA_BZPLC", "1148164826000");//사업장코드
            this.ds_condition.setColumn(0,"OCU_DSC", "02");//발생구분코드 02 하나로eSCM
            
            this.div_search.edt_company.set_value(application.gv_companyName);
        	var today = this.gfn_today("yyyyMMdd");
            this.div_table.st_info.set_text("* " + today.substr(0,4) + "년 " +  today.substr(4,2) + "월 " +  today.substr(6,2) + "일까지 집계된 자료입니다.");
           
            switch(this.gfn_today("yyyyMMdd").substr(4,2))
            {
        		case "01": case "02": case "03":
        			this.div_search.div_quarter.cbo_quarter.set_value('1');
        			break;
        		case "04": case "05": case "06":
        			this.div_search.div_quarter.cbo_quarter.set_value('2');
        			break;
        		case "07": case "08": case "09":
        			this.div_search.div_quarter.cbo_quarter.set_value('3');
        			break;
        		case "10": case "11": case "12":
        			this.div_search.div_quarter.cbo_quarter.set_value('4');
        			break;
            }
            
            this.fn_retrieveByngsltttbl();
        }

        //gfn_setCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload = function()
        {
        	trace("fn_commonAfterOnload");
        	
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/

        this.fn_retrieveByngsltttbl = function()
        {
        	if(this.div_auth.chk_all.value == true)
        	{
        		//권한사업장 코드
        		this.ds_condition.setColumn(0,"NA_TRPL_C", this.getTrplCode());
        	}
        	else
        	{
        		if(this.div_auth.visible == true)
        		{
        			this.ds_condition.setColumn(0,"NA_TRPL_C", this.div_auth.cbo_authorityWorkplace.value);
        		}
        	}
        	var sSvcID        = "retrieveByngsltttbl";
        	var sURL          = "svc::rest/tx/retrieveByngsltttbl";
        	var sInDatasets   = "ds_condition=ds_condition";
        	var sOutDatasets  = "ds_sum=ds_sum ds_sum2=ds_sum2 ds_sum3=ds_sum3";	
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
        			case "retrieveByngsltttbl":
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
        			this.fn_retrieveByngsltttbl();
        			break;
        	}
        }

        
        this.div_table_btn_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_table);
        }

        this.div_search_rdo_sort_onitemchanged = function(obj,e)
        {	
        	switch(e.postvalue)
        	{
        		case "1":
        			this.fn_dayChanged();
        			this.div_search.st_date.set_text("작성일(일자별)");
        			this.div_search.div_date.bringToFront();
        			break;
        		case "2":
        			this.fn_monthChanged();
        			this.div_search.st_date.set_text("작성일(월별)");
        			this.div_search.div_month.bringToFront();
        			break;
        		case "3":
        			this.fn_quarterChanged();
        			this.div_search.st_date.set_text("작성일(분기별)");
        			this.div_search.div_quarter.bringToFront();
        			break;
        	}
        }

        
        this.Calendar_onchanged = function(obj,e)
        {
        	this.fn_dayChanged();
        }

        this.Combo_onitemchanged = function(obj,e)
        {
        	this.fn_quarterChanged();
        }
        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_monthChanged = function()
        {
        	var period = "";
        	var sDate = this.gfn_firstDate(this.div_search.div_month.cal_monS._getValue()+ "15");
        	var eDate = this.gfn_lastDate(this.div_search.div_month.cal_monS._getValue() + "15");
        	
        	period += sDate.substr(0,4) + "-" + sDate.substr(4,2) + "-" +  sDate.substr(6,2);
        	period += " ~ ";
        	period += eDate.substr(0,4) + "-" + eDate.substr(4,2) + "-" +  eDate.substr(6,2);
        	this.div_search.st_period.set_text(period);
        	
        	this.ds_condition.setColumn(0, "START", sDate);
        	this.ds_condition.setColumn(0, "END", eDate);
        }

        this.fn_dayChanged = function()
        {
        	var period = "";
        	var sDate = String(this.div_search.div_date.cal_start.value);
        	var eDate = String(this.div_search.div_date.cal_end.value);

        	period += sDate.substr(0,4) + "-" + sDate.substr(4,2) + "-" +  sDate.substr(6,2);
        	period += " ~ ";
        	period += eDate.substr(0,4) + "-" + eDate.substr(4,2) + "-" +  eDate.substr(6,2);
        	this.div_search.st_period.set_text(period);
        	
        	this.ds_condition.setColumn(0, "START", sDate);
        	this.ds_condition.setColumn(0, "END", eDate);
        }

        this.fn_quarterChanged = function()
        {
        	var period = this.div_search.div_quarter.cbo_year.value + "-";
        	var sDate = this.div_search.div_quarter.cbo_year.value;
        	var eDate = this.div_search.div_quarter.cbo_year.value;
        	
        	switch(this.div_search.div_quarter.cbo_quarter.value)
        	{
        		case "1":
        			period += "01-01 ~ " + this.div_search.div_quarter.cbo_year.value + "-03-31";
        			sDate += "0101";
        			eDate += "0331"
        			break;
        		case "2":
        			period += "04-01 ~ " + this.div_search.div_quarter.cbo_year.value + "-06-30";
        			sDate += "0401";
        			eDate += "0630"
        			break;
        		case "3":
        			period += "07-01 ~ " + this.div_search.div_quarter.cbo_year.value + "-09-31";
        			sDate += "0701";
        			eDate += "0931"
        			break;
        		case "4":
        			period += "10-01 ~ " + this.div_search.div_quarter.cbo_year.value + "-12-31";
        			sDate += "1001";
        			eDate += "1231"
        			break;
        	}
        	this.div_search.st_period.set_text(period);
        	
        	this.ds_condition.setColumn(0, "START", sDate);
        	this.ds_condition.setColumn(0, "END", eDate);
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.common_onclick, this);
            this.div_search.div_quarter.cbo_year.addEventHandler("onitemchanged", this.Combo_onitemchanged, this);
            this.div_search.div_quarter.cbo_quarter.addEventHandler("onitemchanged", this.Combo_onitemchanged, this);
            this.div_search.div_date.cal_start.addEventHandler("onchanged", this.Calendar_onchanged, this);
            this.div_search.div_date.cal_end.addEventHandler("onchanged", this.Calendar_onchanged, this);
            this.div_search.rdo_sort.addEventHandler("onitemchanged", this.div_search_rdo_sort_onitemchanged, this);
            this.div_table.Button75.addEventHandler("onclick", this.div_table_btn_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_TX_3002.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
