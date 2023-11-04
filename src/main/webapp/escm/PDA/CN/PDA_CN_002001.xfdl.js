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
                this.set_name("PDA_CN_002001");
                this.set_titletext("검수내역조회(목록)");
                this.set_scrollbars("fixedhorz");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dataTotal", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"bigdecimal\" size=\"8\"/><Column id=\"NA_TEAM_C\" type=\"bigdecimal\" size=\"8\"/><Column id=\"SLP_DT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"NA_SLPNO\" type=\"bigdecimal\" size=\"8\"/><Column id=\"CNR_STS_DSC\" type=\"bigdecimal\" size=\"8\"/><Column id=\"WHSE_C\" type=\"bigdecimal\" size=\"8\"/><Column id=\"NA_TRMNO\" type=\"bigdecimal\" size=\"8\"/><Column id=\"CNR_WRS_DSC\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BUYPL_NA_TRPL_C\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BUYPL_NA_TEAM_C\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BYNG_REF_DSC\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ODR_DT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TR_BASS_NO\" type=\"bigdecimal\" size=\"8\"/><Column id=\"NA_CRC_CAN_DSC\" type=\"bigdecimal\" size=\"8\"/><Column id=\"RMK_CNTN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"CNR_FIX_NA_BZPLC\" type=\"bigdecimal\" size=\"8\"/><Column id=\"CNR_FIX_USR_ID\" type=\"bigdecimal\" size=\"8\"/><Column id=\"CNR_FIX_DTM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"CNR_CMPL_NA_BZPLC\" type=\"bigdecimal\" size=\"8\"/><Column id=\"CNR_CMPL_USR_ID\" type=\"bigdecimal\" size=\"8\"/><Column id=\"CNR_CMPL_ENO\" type=\"bigdecimal\" size=\"8\"/><Column id=\"CNR_CMPL_SIGN_FN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"CNR_CMPL_DTM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TEAM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"REFERENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pageVO", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CURRENT_PAGE\">0</Col><Col id=\"PAGE_SIZE\">0</Col><Col id=\"TOTAL_ROW_COUNT\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("11");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "788", "0", "15", "490", null, null, this);
            obj.set_taborder("12");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("13");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "99", "15", null, this);
            obj.set_taborder("14");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "15", "7", "103", "21", null, null, this.div_search);
            obj.set_taborder("23");
            obj.set_text("검수일자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "103", "7", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("21");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("true");
            obj = new Static("Static05", "absolute", "205", "7", "10", "21", null, null, this.div_search);
            obj.set_taborder("73");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_to", "absolute", "215", "7", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("true");
            obj = new Static("Static07", "absolute", "335", "7", "135", "21", null, null, this.div_search);
            obj.set_taborder("24");
            obj.set_text("검수상태");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_cnr_sts_dsc", "absolute", "424", "7", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_cnr_sts_dsc_innerdataset = new Dataset("cbo_cnr_sts_dsc_innerdataset", this.div_search.cbo_cnr_sts_dsc);
            cbo_cnr_sts_dsc_innerdataset._setContents("<ColumnInfo><Column id=\"cc_byng_ref_dsc\" size=\"256\"/><Column id=\"dc_byng_ref_dsc\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cc_byng_ref_dsc\">0</Col><Col id=\"dc_byng_ref_dsc\">전체</Col></Row><Row><Col id=\"cc_byng_ref_dsc\">1</Col><Col id=\"dc_byng_ref_dsc\">진행</Col></Row><Row><Col id=\"cc_byng_ref_dsc\">2</Col><Col id=\"dc_byng_ref_dsc\">확인</Col></Row><Row><Col id=\"cc_byng_ref_dsc\">3</Col><Col id=\"dc_byng_ref_dsc\">완료</Col></Row></Rows>");
            obj.set_innerdataset(cbo_cnr_sts_dsc_innerdataset);
            obj.set_taborder("74");
            obj.set_codecolumn("cc_byng_ref_dsc");
            obj.set_datacolumn("dc_byng_ref_dsc");
            obj.set_displayrowcount("4");
            obj.set_index("0");
            obj = new Static("Static08", "absolute", "15", "38", "135", "21", null, null, this.div_search);
            obj.set_taborder("26");
            obj.set_text("매입참조구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_byng_ref_dsc", "absolute", "103", "38", "120", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_byng_ref_dsc_innerdataset = new Dataset("cbo_byng_ref_dsc_innerdataset", this.div_search.cbo_byng_ref_dsc);
            cbo_byng_ref_dsc_innerdataset._setContents("<ColumnInfo><Column id=\"cc_byng_ref_dsc\" size=\"256\"/><Column id=\"dc_byng_ref_dsc\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cc_byng_ref_dsc\">0</Col><Col id=\"dc_byng_ref_dsc\">전체</Col></Row><Row><Col id=\"cc_byng_ref_dsc\">1</Col><Col id=\"dc_byng_ref_dsc\">배송예정서</Col></Row><Row><Col id=\"cc_byng_ref_dsc\">4</Col><Col id=\"dc_byng_ref_dsc\">발주서</Col></Row><Row><Col id=\"cc_byng_ref_dsc\">3</Col><Col id=\"dc_byng_ref_dsc\">무발주</Col></Row></Rows>");
            obj.set_innerdataset(cbo_byng_ref_dsc_innerdataset);
            obj.set_taborder("27");
            obj.set_codecolumn("cc_byng_ref_dsc");
            obj.set_datacolumn("dc_byng_ref_dsc");
            obj.set_displayrowcount("4");
            obj.set_index("0");
            obj = new Static("Static09", "absolute", "335", "38", "135", "21", null, null, this.div_search);
            obj.set_taborder("28");
            obj.set_text("근거전표일자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("odr_dt", "absolute", "424", "38", "100", "21", null, null, this.div_search);
            obj.set_taborder("29");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "543", "38", "135", "21", null, null, this.div_search);
            obj.set_taborder("30");
            obj.set_text("거래근거번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("tr_bass_no", "absolute", "631", "38", "100", "21", null, null, this.div_search);
            obj.set_taborder("31");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "15", "69", "135", "21", null, null, this.div_search);
            obj.set_taborder("32");
            obj.set_text("전표번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("na_slpno", "absolute", "103", "69", "100", "21", null, null, this.div_search);
            obj.set_taborder("33");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "335", "69", "135", "21", null, null, this.div_search);
            obj.set_taborder("34");
            obj.set_text("사용자 ID");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("cnr_fix_usr_id", "absolute", "424", "68", "100", "21", null, null, this.div_search);
            obj.set_taborder("35");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("bisCode", "absolute", "543", "70", "135", "21", null, null, this.div_search);
            obj.set_taborder("75");
            obj.set_text("사업장코드");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("sr_NA_BZPLC", "absolute", "631", "70", "100", "21", null, null, this.div_search);
            obj.set_taborder("76");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "1", "30", "15", "42", null, null, this);
            obj.set_taborder("16");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "732", "72", "56", "41", null, null, this);
            obj.set_taborder("17");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_pda", "absolute", "0", "136", null, null, "15", "-40", this);
            obj.set_taborder("20");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Div("div_paging", "absolute", "226", null, "338", "29", null, "40", this.div_pda);
            obj.set_taborder("14");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_pda.addChild(obj.name, obj);
            obj = new Grid("grd_pda", "absolute", "0", "11", null, null, "0", "62", this.div_pda);
            obj.set_taborder("13");
            obj.set_binddataset("ds_dataTotal");
            obj.set_autofittype("none");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.set_treeinitstatus("expand,all");
            obj.style.set_background("#ffffffff URL('theme://images/B_btn_Titlebar_close_O.png')");
            obj.set_nodatatext("조회된 건수가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"85\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"사업장코드\"/><Cell col=\"2\" text=\"사업장명\"/><Cell col=\"3\" text=\"팀코드\"/><Cell col=\"4\" text=\"검수일자\"/><Cell col=\"5\" text=\"전표번호\"/><Cell col=\"6\" text=\"검수상태\"/><Cell col=\"7\" text=\"검수상품구분\"/><Cell col=\"8\" text=\"매입처거래처\"/><Cell col=\"9\" text=\"매입처거래처명\"/><Cell col=\"10\" text=\"매입처팀코드\"/><Cell col=\"11\" text=\"매입참조구분\"/><Cell col=\"12\" text=\"근거일자\"/><Cell col=\"13\" text=\"거래근거번호\"/><Cell col=\"14\" text=\"단말기번호\"/><Cell col=\"15\" text=\"검수확인자\"/><Cell col=\"16\" text=\"검수확정일\"/><Cell col=\"17\" text=\"검수완료사용자\"/><Cell col=\"18\" text=\"검수완료개인번호\"/><Cell col=\"19\" text=\"검수완료일\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\"/><Cell col=\"1\" text=\"bind:NA_BZPLC\"/><Cell col=\"2\" text=\"bind:CLNTNM\"/><Cell col=\"3\" text=\"bind:TEAM_NM\"/><Cell col=\"4\" text=\"bind:SLP_DT\" mask=\"####-##-##\"/><Cell col=\"5\" text=\"bind:NA_SLPNO\"/><Cell col=\"6\" text=\"bind:CNR_STS_DSC\" expr=\"expr:(CNR_STS_DSC == '1') ? '진행' : (CNR_STS_DSC == '2') ?  '확인' : '완료'\"/><Cell col=\"7\" text=\"bind:CNR_WRS_DSC\" expr=\"expr:(CNR_WRS_DSC == '1') ? '상품' : (CNR_WRS_DSC == '2') ? '덤' : ''\"/><Cell col=\"8\" text=\"bind:BUYPL_NA_TRPL_C\"/><Cell col=\"9\" text=\"bind:BUYPL_CLNTNM\"/><Cell col=\"10\" text=\"bind:BUYPL_TEAM_NM\"/><Cell col=\"11\" text=\"bind:BYNG_REF_NM\"/><Cell col=\"12\" text=\"bind:ODR_DT\" mask=\"####-##-##\"/><Cell col=\"13\" text=\"bind:TR_BASS_NO\"/><Cell col=\"14\" text=\"bind:NA_TRMNO\"/><Cell col=\"15\" text=\"bind:CNR_FIX_USR_ID\"/><Cell col=\"16\" text=\"bind:CNR_FIX_DTM\"/><Cell col=\"17\" text=\"bind:CNR_CMPL_USR_ID\"/><Cell col=\"18\" text=\"bind:CNR_CMPL_ENO\"/><Cell col=\"19\" text=\"bind:CNR_CMPL_DTM\"/></Band></Format><Format id=\"format_copy\"></Format></Formats>");
            this.div_pda.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "524", "30", "20", "67", null, null, this);
            obj.set_taborder("21");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "316", "30", "20", "67", null, null, this);
            obj.set_taborder("22");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "88", "128", "700", "20", null, null, this);
            obj.set_taborder("23");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 99, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("14");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 788, 419, this.div_pda,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("20");
            		p.set_text("Div02");

            	}
            );
            this.div_pda.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("검수내역조회(목록)");
            		p.set_scrollbars("fixedhorz");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","div_search.cbo_cnr_sts_dsc","value","ds_condition","CONDITION");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_search.cbo_byng_ref_dsc","value","ds_condition","REFERENCE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PDA_CN_002001.xfdl", "lib::comLib.xjs");
        this.registerScript("PDA_CN_002001.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        this.menuId = "";
        this.blbdId = "";
        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        	if(application.gv_userTPC == "admin"){
        		this.div_search.bisCode.set_visible(true);
        		this.div_search.sr_NA_BZPLC.set_visible(true);
        	}
        }

        this.fn_afterFormOnload = function()
        {
           //페이지 로딩후 실행부분
            this.div_pda.grd_pda.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	this.div_search.cal_from.set_value(this.gfn_minusDate(this.gfn_today("yyyyMMdd"),1));
        	this.div_search.cal_to.set_value(this.gfn_today("yyyyMMdd"));

        	this.ds_dataTotal.clearData();
        	this.btn_onclick();
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        /* Paging 처리 */
        this.fn_paging = function(vPageNum)
        {
        	this.ds_pageVO.clearData();
        	this.ds_dataTotal.clearData(); // Grid에 Binding된 Dataset명
        	
        	this.ds_pageVO.addRow();
        	
        	var vPageSize = 20; // Grid에 보여줄 Row수 선택
        	var vTotalCount = 0; // 전체건수. 화면조회후 리턴받아 사용 (구동시 갱신)
        	
        	this.ds_pageVO.setColumn(0, "CURRENT_PAGE", vPageNum); // 현재 페이지
        	this.ds_pageVO.setColumn(0, "PAGE_SIZE", vPageSize);
        	this.ds_pageVO.setColumn(0, "TOTAL_ROW_COUNT", vTotalCount);
        	
        	var argumentObj = "";
        	
        	this.fn_selectMstList();
        }

        this.fn_selectMstList = function()
        {
        	//this.ds_dataTotal.clearData();

        	var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        	var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일

        	var cnr_sts_dsc = this.gfn_nullToEmpty(this.div_search.cbo_cnr_sts_dsc.value); //검수상태구분코드
        	var byng_ref_dsc = this.gfn_nullToEmpty(this.div_search.cbo_byng_ref_dsc.value); //매입참조구분코드
        	var odr_dt = this.gfn_nullToEmpty(this.div_search.odr_dt.value); //근거전표일자
        	var tr_bass_no = this.gfn_nullToEmpty(this.div_search.tr_bass_no.value); //거래근거번호
        	var na_slpno = this.gfn_nullToEmpty(this.div_search.na_slpno.value); //전표번호
        	var cnr_fix_usr_id = this.gfn_nullToEmpty(this.div_search.cnr_fix_usr_id.value); //사용자 ID
        	var sr_NA_BZPLC = this.gfn_nullToEmpty(this.div_search.sr_NA_BZPLC.value); //사용자 ID
        	
        	if(cnr_sts_dsc == 0)
        		cnr_sts_dsc = "";
        	if(byng_ref_dsc == 0)
        		byng_ref_dsc = "";
        	
        	var param = "FROM_DATE=" + from_date+				
        				" TO_DATE="+to_date+
        				" CNR_STS_DSC="+cnr_sts_dsc+
        				" BYNG_REF_DSC="+byng_ref_dsc+
        				" ODR_DT="+odr_dt+		
        				" TR_BASS_NO="+tr_bass_no+
        				" NA_SLPNO="+na_slpno+
        				" NA_BZPLC="+sr_NA_BZPLC+
        				" CNR_FIX_USR_ID="+cnr_fix_usr_id;
        				
        	var sSvcID        = "InspectionList";//통신아이디
        	var sURL          = "svc::rest/pda/InspectionList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "ds_pageVO=ds_pageVO";//보내는데이터셋
        	var sOutDatasets  = "ds_dataTotal=ds_dataTotal ds_pageVO=ds_pageVO";//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* 콜백메소드 */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	var current_page = this.ds_pageVO.getColumn(0, "CURRENT_PAGE");
        	var page_size    = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        	var sTotal       = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        	
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}
        	
        	if (svcID == "InspectionList") {
        		if (this.ds_dataTotal.rowcount > 0) {
        			this.div_pda.div_paging.fn_pageSet(sTotal, page_size, "div_paging", current_page);
        		} else {
        			this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			this.div_pda.div_paging.fn_pageSet(0, 0, "div_paging", current_page);
        		}
        	} 
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.btn_onclick = function(obj,e)
        {
        	this.fn_paging(1);
        }

        this.grd_oncellclick = function(obj,e)
        {
        	this.fn_openPdaDetail(e.row);
        }

        this.div_search_edt_search_onkeydown = function(obj,e)
        {
        	if(e.keycode == '13')
        	{
        		this.div_search.edt_search.updateToDataset();
        		this.btn_search.click();
        	}
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_openPdaDetail = function(nRow)
        {	
        	var oArg = {NA_BZPLC:this.ds_dataTotal.getColumn(nRow, "NA_BZPLC"), NA_TEAM_C:this.ds_dataTotal.getColumn(nRow, "NA_TEAM_C")
        		, SLP_DT:this.ds_dataTotal.getColumn(nRow, "SLP_DT"), NA_SLPNO:this.ds_dataTotal.getColumn(nRow, "NA_SLPNO")};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("PDA_CN_002002","PDA.CN::PDA_CN_002002.xfdl",oArg,sOption,sPopupCallBack);	  
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	trace(" strId : " + strId + " strVal : " + strVal);
        	this.fn_selectMstList;	
        }

        this.div_search_odr_dt_onkeydown = function(obj,e)
        {
        	if(e.keycode == '13') 
        	{
        		this.btn_search.click();
        	}
        }

        this.div_search_sr_NA_BZPLC_onkeydown = function(obj,e)
        {
        	if(e.keycode == '13') 
        	{
        		var na_bzplc = this.gfn_nullToEmpty(this.div_search.sr_NA_BZPLC.value); //경제통합사업장코드
        		if (na_bzplc != "" && this.gfn_length(na_bzplc) < 8) {
        			this.alert('사업장코드는 8자이상이어야 합니다.');
        			return false;
        		}

        		this.btn_search.click();
        	}
        }

        this.div_search_tr_bass_no_onkeydown = function(obj,e)
        {
        	if(e.keycode == '13') 
        	{
        		this.btn_search.click();
        	}
        }

        this.div_search_cnr_fix_usr_id_onkeydown = function(obj,e)
        {
        	if(e.keycode == '13') 
        	{
        		this.btn_search.click();
        	}
        }

        this.div_search_na_slpno_onkeydown = function(obj,e)
        {
        	if(e.keycode == '13') 
        	{
        		this.btn_search.click();
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_onclick, this);
            this.div_search.cbo_cnr_sts_dsc.addEventHandler("onitemchanged", this.div_search_cbo_cnr_sts_dsc_onitemchanged, this);
            this.div_search.cbo_byng_ref_dsc.addEventHandler("onitemchanged", this.div_search_cbo_byng_ref_dsc_onitemchanged, this);
            this.div_search.odr_dt.addEventHandler("onkeydown", this.div_search_odr_dt_onkeydown, this);
            this.div_search.odr_dt.addEventHandler("oneditclick", this.div_search_odr_dt_oneditclick, this);
            this.div_search.tr_bass_no.addEventHandler("onkeydown", this.div_search_tr_bass_no_onkeydown, this);
            this.div_search.na_slpno.addEventHandler("onkeydown", this.div_search_na_slpno_onkeydown, this);
            this.div_search.cnr_fix_usr_id.addEventHandler("onkeydown", this.div_search_cnr_fix_usr_id_onkeydown, this);
            this.div_search.sr_NA_BZPLC.addEventHandler("onkeydown", this.div_search_sr_NA_BZPLC_onkeydown, this);
            this.div_pda.grd_pda.addEventHandler("oncellclick", this.grd_oncellclick, this);

        };

        this.loadIncludeScript("PDA_CN_002001.xfdl");
        this.loadPreloadList();
       
    };
}
)();
