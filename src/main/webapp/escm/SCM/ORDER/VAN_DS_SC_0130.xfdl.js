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
                this.set_name("VAN_DS_SC_0130");
                this.set_titletext("사업장별R1 수주조회");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dataM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RVOPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"RVOPL_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_WRS_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_QT\" type=\"STRING\" size=\"256\"/><Column id=\"BOXPE_AQZ\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_AM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rgn_c00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rgn_c01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dataD", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ODR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TEAM_N\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_RQR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_WRS_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_QT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_AM\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"DDLY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NA_RGN_N\" type=\"STRING\" size=\"256\"/><Column id=\"DVYAA_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"DVYAA_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"DVYAA_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"DVYAA_NA_TEAM_N\" type=\"STRING\" size=\"256\"/><Column id=\"ROGO_INF_CRT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"LGQT_TR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LGQT_TR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_menu", "absolute", "0", "0", "323", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "379", "21", "116", null, this);
            obj.set_taborder("1");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "75", "15", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "15", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("59");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "756", "-2", null, "69", "201", null, this.div_search);
            obj.set_taborder("60");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_search_period", "absolute", "120", "10", "227", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_search_period_innerdataset = new Dataset("rdo_search_period_innerdataset", this.div_search.rdo_search_period);
            rdo_search_period_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">수주일</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">배송요청일</Col></Row></Rows>");
            obj.set_innerdataset(rdo_search_period_innerdataset);
            obj.set_taborder("71");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_index("0");
            obj = new Calendar("cal_from", "absolute", "326", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("72");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static08", "absolute", "428", "10", "10", "21", null, null, this.div_search);
            obj.set_taborder("73");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_to", "absolute", "438", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("74");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static07", "absolute", "15", "37", "79", "21", null, null, this.div_search);
            obj.set_taborder("84");
            obj.set_text("지역코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_wmc_loc_rgn_dsc", "absolute", "118", "37", "81", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("85");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_innerdataset("@ds_rgn_c00");
            obj.set_index("0");
            obj = new Combo("cbo_ht_lov_rgn_c", "absolute", "201", "37", "85", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("86");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_innerdataset("@ds_rgn_c01");
            obj.set_readonly("false");

            obj = new Static("Static09", "absolute", "1", "30", null, "69", "977", null, this);
            obj.set_taborder("6");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "123", "30", null, "10", "790", null, this);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "123", "113", null, "10", "790", null, this);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "338", "61", null, "5", "575", null, this);
            obj.set_taborder("10");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "788", "0", "15", "490", null, null, this);
            obj.set_taborder("11");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("12");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel00", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("26");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "36", "408", null, this);
            obj.set_taborder("25");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "103", null, null, "15", "20", this);
            obj.set_taborder("14");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_divResize", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "21", null, "179", "0", null, this.div_list);
            obj.set_taborder("70");
            obj.set_binddataset("ds_dataM");
            obj.set_nodatatext("조회된 데이터가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"39\"/><Column size=\"80\"/><Column size=\"170\"/><Column size=\"80\"/><Column size=\"170\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"105\"/><Column size=\"110\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"수주처\"/><Cell col=\"2\" text=\"수주처명\"/><Cell col=\"3\" text=\"공급처\"/><Cell col=\"4\" text=\"공급처명\"/><Cell col=\"5\" text=\"수주상품건수\"/><Cell col=\"6\" text=\"수주수량\"/><Cell col=\"7\" text=\"BOX수량\"/><Cell col=\"8\" text=\"공병금액\"/><Cell col=\"9\" text=\"수주금액\"/><Cell col=\"10\"/><Cell col=\"11\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:RVOPL_NA_TRPL_C\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:RVOPL_NA_TRPL_N\"/><Cell col=\"3\" text=\"bind:SPYPL_NA_TRPL_C\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:SPYPL_NA_TRPL_N\"/><Cell col=\"5\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_WRS_CNT\"/><Cell col=\"6\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_QT\"/><Cell col=\"7\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BOXPE_AQZ\"/><Cell col=\"8\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:VCBT_AM\"/><Cell col=\"9\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_AM\"/><Cell col=\"10\"/><Cell col=\"11\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" style=\"align:center;\" text=\"합계\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\" displaytype=\"number\" text=\"expr:dataset.getSum('ODR_WRS_CNT')\" mask=\"9,999.99\" editlimitbymask=\"both\"/><Cell col=\"6\" displaytype=\"number\" text=\"expr:dataset.getSum('ODR_QT')\" mask=\"9,999.99\" editlimitbymask=\"both\"/><Cell col=\"7\" displaytype=\"number\" text=\"expr:dataset.getSum('BOXPE_AQZ')\" mask=\"9,999.99\" editlimitbymask=\"both\"/><Cell col=\"8\" displaytype=\"number\" text=\"expr:dataset.getSum('VCBT_AM')\"/><Cell col=\"9\" displaytype=\"number\" text=\"expr:dataset.getSum('ODR_AM')\"/><Cell col=\"10\"/><Cell col=\"11\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_detail", "absolute", "0", "227", null, null, "0", "1", this.div_list);
            obj.set_taborder("71");
            obj.set_binddataset("ds_dataD");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"39\"/><Column size=\"66\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"200\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/></Columns><Rows><Row size=\"41\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"대량발주\"/><Cell col=\"2\" text=\"수주일자\"/><Cell col=\"3\" text=\"발주번호\"/><Cell col=\"4\" text=\"발주처\"/><Cell col=\"5\" text=\"발주처명\"/><Cell col=\"6\" text=\"발주처팀\"/><Cell col=\"7\" text=\"배송요청일\"/><Cell col=\"8\" text=\"수주상품수량\"/><Cell col=\"9\" text=\"수주수량\"/><Cell col=\"10\" text=\"공병금액\"/><Cell col=\"11\" text=\"수주금액\"/><Cell col=\"12\" text=\"직송여부\"/><Cell col=\"13\" text=\"지역명\"/><Cell col=\"14\" text=\"배송처\"/><Cell col=\"15\" text=\"배송처명\"/><Cell col=\"16\" text=\"수발주정보생성&#13;&#10;구분코드\"/><Cell col=\"17\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:LGQT_TR_NM\"/><Cell col=\"2\" displaytype=\"date\" text=\"bind:ODR_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" text=\"bind:ODR_SLPNO\"/><Cell col=\"4\" text=\"bind:ODRPL_NA_TRPL_C\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:ODRPL_NA_TRPL_N\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:ODRPL_NA_TEAM_N\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:DVY_RQR_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ODR_WRS_CNT\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ODR_QT\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VCBT_AM\"/><Cell col=\"11\" displaytype=\"number\" text=\"bind:ODR_AM\"/><Cell col=\"12\" text=\"bind:DDLY_YN\"/><Cell col=\"13\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:NA_RGN_N\"/><Cell col=\"14\" text=\"bind:DVYAA_NA_TRPL_C\"/><Cell col=\"15\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:DVYAA_NA_TRPL_N\"/><Cell col=\"16\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:ROGO_INF_CRT_DSC\"/><Cell col=\"17\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" style=\"align:center;\" text=\"합계\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('ODR_WRS_CNT')\" mask=\"9,999.99\" editlimitbymask=\"both\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('ODR_QT')\" mask=\"9,999.99\" editlimitbymask=\"both\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('VCBT_AM')\" mask=\"9,999.99\" editlimitbymask=\"both\"/><Cell col=\"11\" displaytype=\"number\" text=\"expr:dataset.getSum('ODR_AM')\" mask=\"9,999.99\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 75, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("14");
            		p.set_text("Div02");
            		p.set_scrollbars("none");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("사업장별R1 수주조회");

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
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0130.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0130.xfdl", function() {
        //include "lib::comLib.xjs";

        var spyplNaTrplC ='';

        /* form load */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e);//공통
        	
        	this.div_search_cbo_wmc_loc_rgn_dsc();
        }

        
        //공통코드 데이터셋 onload후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	this.div_search.cbo_wmc_loc_rgn_dsc.set_index(0);
        	
        	trace("fn_commonAfterOnload");

        }

        

        this.form_init = function(obj,e)
        {	

        }

        
        /* 페이지 로딩후 실행부분 */
        this.fn_afterFormOnload = function()
        {
        	//날짜 SET
        	this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));

        	this.div_search.cal_from.set_value(this.gfn_today("yyyyMMdd"));	
        	this.div_search.cal_to.set_value(this.gfn_today("yyyyMMdd"));
        	
        	//this.div_search.cal_from.set_value(this.gfn_minusDate(this.gfn_today("yyyyMMdd"),3));	
        	//this.div_search.cal_to.set_value(this.gfn_today("yyyyMMdd"));

        	
        }

        //지역코드
        this.div_search_cbo_wmc_loc_rgn_dsc = function(){
        	var sSvcID        = "retrieveRgnCM";//통신아이디
        	var sURL          = "svc::/rest/common/getRgnCode";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_rgn_c00=ds_rgn_c00";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = "";// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        //상세지역코드
        this.div_search_cbo_wmc_loc_rgn_dsc_onitemchanged = function(obj,e)
        {

        	var wmc_loc_rgn_dsc = this.div_search.cbo_wmc_loc_rgn_dsc.value;
        	
        	var params = " simpC="+wmc_loc_rgn_dsc;
        	
        	var sSvcID        = "retrieveRgnC";//통신아이디
        	var sURL          = "svc::/rest/common/getRgnCodeD";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_rgn_c01=ds_rgn_c01";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        	this.div_search.cbo_ht_lov_rgn_c.set_enable(true);
        }

        this.fn_validationCheck = function(){
        	var cal_from  	= this.gfn_nullToEmpty(this.div_search.cal_from.value);
        	var cal_to  	= this.gfn_nullToEmpty(this.div_search.cal_to.value);
        	
        	if(cal_from == "" || cal_to == ""){
        		alert("조회기간을 선택해 주세요");
        		return false;
        	}
        	
        	if((cal_to - cal_from) <= -1){
        		alert("조회기간을 확인해 주세요");
        		return false;
        	}
        	
        	return true;
        }

        this.btn_search_onclick = function(obj,e){
        	//trace("------------------------");
        	//this.ds_dataM.clearData();
        	//this.ds_sum.clearData();
        	if(this.fn_validationCheck()) {
        		//권한사업장 코드
        		
        		var searchPeriod = this.gfn_nullToEmpty(this.div_search.rdo_search_period.value);
        		var calFrom = this.gfn_nullToEmpty(this.div_search.cal_from.value);
        		var calTo = this.gfn_nullToEmpty(this.div_search.cal_to.value);
        		var wmcLocRgnDsc = this.gfn_nullToEmpty(this.div_search.cbo_wmc_loc_rgn_dsc.value);
        		
        		if(wmcLocRgnDsc == 'all') {
        			wmcLocRgnDsc = '';
        		}
        		
        		var htLovRgnC = this.gfn_nullToEmpty(this.div_search.cbo_ht_lov_rgn_c.value);
        		
        		if(htLovRgnC == 'all') {
        			htLovRgnC = '';
        		}
        		
        		var trplC = this.gfn_nullToEmpty(this.getTrplCode());
        		var param = "searchPeriod="+searchPeriod
        					+" calFrom="+calFrom
        					+" calTo="+calTo
        					+" wmcLocRgnDsc="+wmcLocRgnDsc
        					+" htLovRgnC="+htLovRgnC
        					+" TRPL_C="+trplC;
        		var sSvcID        = "getOrderRSVMaster";
        		var sURL          = "svc::rest/scm/order/getOrderRSVMaster";
        		var sInDatasets   = "";
        		var sOutDatasets  = "ds_dataM=DATASET";
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callback";//콜백
        		var tranType 	  = "U"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        	}
        }

        this.div_list_grd_master_oncellclick = function(obj,e)
        {
        	//this.ds_detail.clearData();
        	if(this.fn_validationCheck()) {
        		var rvoplNaTrplC = this.ds_dataM.getColumn(e.row,"RVOPL_NA_TRPL_C");
        		spyplNaTrplC = this.ds_dataM.getColumn(e.row,"SPYPL_NA_TRPL_C");
        		var searchPeriod = this.gfn_nullToEmpty(this.div_search.rdo_search_period.value);
        		var calFrom = this.gfn_nullToEmpty(this.div_search.cal_from.value);
        		var calTo = this.gfn_nullToEmpty(this.div_search.cal_to.value);
        		var wmcLocRgnDsc = this.gfn_nullToEmpty(this.div_search.cbo_wmc_loc_rgn_dsc.value);
        		
        		if(wmcLocRgnDsc == 'all') {
        			wmcLocRgnDsc = '';
        		}
        		
        		var htLovRgnC = this.gfn_nullToEmpty(this.div_search.cbo_ht_lov_rgn_c.value);
        		
        		if(htLovRgnC == 'all') {
        			htLovRgnC = '';
        		}

        		
        		var param = "searchPeriod="+searchPeriod
        					+" calFrom="+calFrom
        					+" calTo="+calTo
        					+" rvoplNaTrplC="+rvoplNaTrplC
        					+" spyplNaTrplC="+spyplNaTrplC
        					+" wmcLocRgnDsc="+wmcLocRgnDsc
        					+" htLovRgnC="+htLovRgnC;
        		
        		var sSvcID        = "getOrderRSVDetail";//통신아이디
        		var sURL          = "svc::rest/scm/order/getOrderRSVDetail";
        		var sInDatasets   = "";
        		var sOutDatasets  = "ds_dataD=DATASET";
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callback";//콜백
        		var tranType 	  = "U"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        	}
        }

        
        this.fn_popupAfter = function(strId,strVal)
        {
        	trace(" strId : " + strId + " strVal : " + strVal);
        }

        this.div_list_grd_detail_oncellclick = function(obj,e)
        {
        	
        	var ODR_DT = this.ds_dataD.getColumn(e.row,"ODR_DT");
        	var ODR_SLPNO = this.ds_dataD.getColumn(e.row,"ODR_SLPNO");
        	var ODRPL_NA_TRPL_C = this.ds_dataD.getColumn(e.row,"ODRPL_NA_TRPL_C");
        	var ODRPL_NA_TEAM_C = this.ds_dataD.getColumn(e.row,"ODRPL_NA_TEAM_C");
        		
        	var oArg = {PODR_DT:ODR_DT, PODR_SLPNO:ODR_SLPNO, PODRPL_NA_TRPL_C:ODRPL_NA_TRPL_C, PODRPL_NA_TEAM_C:ODRPL_NA_TEAM_C
        	, PSPYPL_NA_TRPL_C:spyplNaTrplC};
        	trace(oArg);
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("popId","SCM.ORDER::VAN_DS_SC_0130_P01.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.btn_excel00_onclick = function(obj,e)
        {
        		if(this.fn_validationCheck()) {
        		
        		var searchPeriod = this.gfn_nullToEmpty(this.div_search.rdo_search_period.value);
        		var calFrom = this.gfn_nullToEmpty(this.div_search.cal_from.value);
        		var calTo = this.gfn_nullToEmpty(this.div_search.cal_to.value);
        		var wmcLocRgnDsc = this.gfn_nullToEmpty(this.div_search.cbo_wmc_loc_rgn_dsc.value);
        		var htLovRgnC = this.gfn_nullToEmpty(this.div_search.cbo_ht_lov_rgn_c.value);
        		
        		if(wmcLocRgnDsc == 'all') {
        			wmcLocRgnDsc = '';
        		}
        		
        		var htLovRgnC = this.gfn_nullToEmpty(this.div_search.cbo_ht_lov_rgn_c.value);
        		
        		if(htLovRgnC == 'all') {
        			htLovRgnC = '';
        		}
        		
        		var trplC = this.getTrplCode();
        		var param = "searchPeriod="+searchPeriod
        					+"&calFrom="+calFrom
        					+"&calTo="+calTo
        					+"&wmcLocRgnDsc="+wmcLocRgnDsc
        					+"&htLovRgnC="+htLovRgnC
        					+"&TRPL_C="+trplC;
        		var strDownUrl = application.gv_server_url+"rest/excel/scm/order/downloadExcel?"+param;
        		excelDownHandler(strDownUrl, this);	
        		//var wbs_dw     = this.gfn_createWebBorwserComponent(this);
        		//wbs_dw.set_url(strDownUrl);
        	}
        }
        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", ErrorMsg);
        		return;
        	}else{
        	
        		if(svcID == "retrieveRgnCM"){
        			if (this.ds_rgn_c00.insertRow(0) != -1){
        				this.ds_rgn_c00.setColumn(0,"SIMP_C","");
        				this.ds_rgn_c00.setColumn(0,"SIMP_CNM","- 전체 -");

        			};
        			this.div_search.cbo_wmc_loc_rgn_dsc.set_index(0);
        		}
        		
        		if(svcID == "retrieveRgnC"){
        			if (this.ds_rgn_c01.insertRow(0) != -1){
        				this.ds_rgn_c01.setColumn(0,"SIMP_C","");
        				this.ds_rgn_c01.setColumn(0,"SIMP_CNM","- 전체 -");

        			};
        			this.div_search.cbo_ht_lov_rgn_c.set_index(0);
        		}
        		
        		if(svcID == "getOrderRSVMaster"){
        			this.div_list.grd_detail.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        			this.ds_dataM.set_rowposition(1);
        			this.ds_dataM.set_rowposition(0);
        			if(this.ds_dataM.rowcount == 0){				
        				this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        			}	
        		}
        		if(svcID == "getOrderRSVDetail"){
        			this.ds_dataD.set_rowposition(1);
        			this.ds_dataD.set_rowposition(0);
        			if(this.ds_dataD.rowcount == 0){				
        				this.div_list.grd_detail.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        			}	
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.form_init, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.cbo_wmc_loc_rgn_dsc.addEventHandler("onitemchanged", this.div_search_cbo_wmc_loc_rgn_dsc_onitemchanged, this);
            this.div_search.cbo_ht_lov_rgn_c.addEventHandler("onitemchanged", this.div_search_cbo_ht_lov_rgn_c_onitemchanged, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_excel00.addEventHandler("onclick", this.btn_excel00_onclick, this);
            this.div_list.btn_divResize.addEventHandler("onclick", this.div_list_btn_divResize_onclick, this);
            this.div_list.grd_master.addEventHandler("oncellclick", this.div_list_grd_master_oncellclick, this);
            this.div_list.grd_detail.addEventHandler("oncellclick", this.div_list_grd_detail_oncellclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0130.xfdl");
        this.loadPreloadList();
       
    };
}
)();
