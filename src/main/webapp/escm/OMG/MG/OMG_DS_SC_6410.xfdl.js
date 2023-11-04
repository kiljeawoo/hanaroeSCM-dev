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
                this.set_name("OMG_DS_SC_6410");
                this.set_titletext("서비스회원승인조회");
                this._setFormPosition(0,0,920,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_param", this);
            obj.getSetter("firenextcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_PRG_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_result", this);
            obj.getSetter("firenextcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"STRING\" size=\"256\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_PRG_STSC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"APV_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pageVO", this);
            obj.getSetter("firenextcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CURRENT_PAGE\">0</Col><Col id=\"PAGE_SIZE\">0</Col><Col id=\"TOTAL_ROW_COUNT\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_usrTpc", this);
            obj.getSetter("firenextcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"name\">협력업체</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">본부</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"name\">사업장</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"name\">세금계산서전용</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"name\">전자계약전용</Col></Row><Row><Col id=\"code\">81</Col><Col id=\"name\">농협몰</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0%", "0", null, "21", "56.13%", null, this);
            obj.set_taborder("3");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "60", "21", "15", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "92", "15", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "90", "21", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("회원ID");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_MB_ID", "absolute", "106", "10", "100", "21", null, null, this.div_search);
            obj.set_taborder("0");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "231", "10", "90", "21", null, null, this.div_search);
            obj.set_taborder("24");
            obj.set_text("사용자명");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_USR_NM", "absolute", "312", "10", "100", "21", null, null, this.div_search);
            obj.set_taborder("1");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15", "36", "90", "21", null, null, this.div_search);
            obj.set_taborder("27");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "666", "10", "140", "21", null, null, this.div_search);
            obj.set_taborder("29");
            obj.set_text("회원가입진행상태");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_ENT_PRG_STSC", "absolute", "786", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_ENT_PRG_STSC_innerdataset = new Dataset("cbo_ENT_PRG_STSC_innerdataset", this.div_search.cbo_ENT_PRG_STSC);
            cbo_ENT_PRG_STSC_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">진행중</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">완료</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">가입신청거절</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">수정요청중</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">수정요청거절</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">해지</Col></Row></Rows>");
            obj.set_innerdataset(cbo_ENT_PRG_STSC_innerdataset);
            obj.set_taborder("3");
            obj.set_text("전체");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("A");
            obj.style.set_align("left middle");
            obj.set_index("0");
            obj = new Static("Static04", "absolute", "231", "36", "90", "21", null, null, this.div_search);
            obj.set_taborder("32");
            obj.set_text("거래처코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "666", "36", "140", "21", null, null, this.div_search);
            obj.set_taborder("33");
            obj.set_text("페이지당 게시물수");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_pageNum", "absolute", "786", "36", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_pageNum_innerdataset = new Dataset("cbo_pageNum_innerdataset", this.div_search.cbo_pageNum);
            cbo_pageNum_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row></Rows>");
            obj.set_innerdataset(cbo_pageNum_innerdataset);
            obj.set_taborder("7");
            obj.set_value("20");
            obj.set_text("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_align("left middle");
            obj.set_index("0");
            obj = new Calendar("cal_from", "absolute", "210", "62", "90", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static07", "absolute", "307", "62", "11", "21", null, null, this.div_search);
            obj.set_taborder("37");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_to", "absolute", "322", "62", "90", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Edit("edt_CLNTNM", "absolute", "106", "36", "100", "21", null, null, this.div_search);
            obj.set_taborder("4");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_NA_TRPL_C", "absolute", "312", "36", "100", "21", null, null, this.div_search);
            obj.set_taborder("5");
            obj.set_inputtype("number");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_cal", "absolute", "106", "62", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_cal_innerdataset = new Dataset("cbo_cal_innerdataset", this.div_search.cbo_cal);
            cbo_cal_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">S</Col><Col id=\"datacolumn\">신청일자</Col></Row><Row><Col id=\"codecolumn\">L</Col><Col id=\"datacolumn\">최종변경</Col></Row></Rows>");
            obj.set_innerdataset(cbo_cal_innerdataset);
            obj.set_taborder("8");
            obj.set_value("S");
            obj.set_text("신청일자");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_align("left middle");
            obj.set_index("0");
            obj = new CheckBox("chk_DT_YN", "absolute", "417", "62", "126", "21", null, null, this.div_search);
            obj.set_taborder("11");
            obj.set_text("신청일자포함");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "441", "10", "140", "21", null, null, this.div_search);
            obj.set_taborder("45");
            obj.set_text("휴대전화번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_USR_MPNO", "absolute", "536", "10", "100", "21", null, null, this.div_search);
            obj.set_taborder("2");
            obj.set_inputtype("number");
            obj.set_displaynulltext("'-' 포함");
            obj.set_maxlength("13");
            this.div_search.addChild(obj.name, obj);
            obj = new MaskEdit("edt_BZNO", "absolute", "536", "36", "100", "21", null, null, this.div_search);
            obj.set_taborder("6");
            obj.set_mask("@@@-@@-@@@@@");
            obj.set_type("string");
            obj.style.set_align("center middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "441", "36", "90", "21", null, null, this.div_search);
            obj.set_taborder("47");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "15", "62", "90", "21", null, null, this.div_search);
            obj.set_taborder("48");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_result", "absolute", "0", "120", null, null, "15", "0", this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_mbApvrqrList", "absolute", "0", "40", null, null, "0", "46", this.div_result);
            obj.set_taborder("9");
            obj.set_binddataset("ds_result");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"112\"/><Column size=\"96\"/><Column size=\"158\"/><Column size=\"115\"/><Column size=\"80\"/><Column size=\"89\"/><Column size=\"89\"/><Column size=\"154\"/><Column size=\"96\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"회원ID\"/><Cell col=\"2\" text=\"사용자명\"/><Cell col=\"3\" text=\"가입진행상태\"/><Cell col=\"4\" text=\"사업자번호\"/><Cell col=\"5\" text=\"회사명\"/><Cell col=\"6\" text=\"거래처코드\"/><Cell col=\"7\" text=\"회원유형\"/><Cell col=\"8\" text=\"가입일자\"/><Cell col=\"9\" text=\"신청일자\"/><Cell col=\"10\" text=\"최종변경일자\"/><Cell col=\"11\" displaytype=\"normal\" text=\"변경이력\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\"/><Cell col=\"1\" style=\"align:left middle;\" text=\"bind:MB_ID\"/><Cell col=\"2\" style=\"align:left middle;\" text=\"bind:USR_NM\"/><Cell col=\"3\" style=\"align:center middle;\" text=\"bind:ENT_PRG_STSC_NM\"/><Cell col=\"4\" style=\"align:center middle;\" text=\"bind:BZNO\" mask=\"###-##-#####\"/><Cell col=\"5\" style=\"align:left middle;\" text=\"bind:CLNTNM\"/><Cell col=\"6\" style=\"align:center middle;\" text=\"bind:NA_TRPL_C\"/><Cell col=\"7\" displaytype=\"combo\" text=\"bind:USR_TPC\" combodataset=\"ds_usrTpc\" combocodecol=\"code\" combodatacol=\"name\"/><Cell col=\"8\" text=\"bind:FSRG_DTM\" mask=\"####-##-##\"/><Cell col=\"9\" style=\"align:center middle;\" text=\"bind:REQ_DT\" mask=\"####-##-##\"/><Cell col=\"10\" text=\"bind:LSCHG_DTM\"/><Cell col=\"11\" displaytype=\"button\" text=\"변경이력\"/></Band></Format></Formats>");
            this.div_result.addChild(obj.name, obj);
            obj = new Button("Button75", "absolute", "36.74%", "0", null, "12", "36.64%", null, this.div_result);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_result.addChild(obj.name, obj);
            obj = new Div("div_paging", "absolute", "230", null, "43.91%", "37", null, "1", this.div_result);
            obj.set_taborder("12");
            obj.style.set_align("center middle");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_result.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "98.37%", "0", null, "490", "0.11%", null, this);
            obj.set_taborder("6");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 92, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_result,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");

            	}
            );
            this.div_result.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 920, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("서비스회원승인조회");

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
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_6410.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6410.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
           this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
           /*조회 호출*/
           this.div_search.cbo_ENT_PRG_STSC.set_value("A");
           this.div_search.cal_from.set_value(this.gfn_addDate(application.gv_today, -365));
           this.div_search.cal_to.set_value(application.gv_today);
           //this.btn_search.click();
        }

         /*조회*/
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_paging(1); // 처음조회시 1페이지를 조회한다.
        }

        /*Paging 처리*/
        this.fn_paging = function(vPageNum)
        {
         	if (this.fn_validation()) {
        		this.ds_result.clearData(); //Grid에 Binding된 Dataset명
        		this.ds_pageVO.clearData();
        		this.ds_pageVO.addRow();

        		var vPageSize = this.div_search.cbo_pageNum.value;
        		var vTotalCount = 0;	//전체건수. 화면조회후 리턴받아 사용 (구동시 갱신)

        		this.ds_pageVO.setColumn(0, "CURRENT_PAGE", vPageNum); //현재 페이지
        		this.ds_pageVO.setColumn(0, "PAGE_SIZE", vPageSize);
        		this.ds_pageVO.setColumn(0, "TOTAL_ROW_COUNT", vTotalCount);
         	
        		var sParam =  "mb_id=" +this.gfn_nullToEmpty(this.div_search.edt_MB_ID.value)
        					+ " usr_nm=" +this.gfn_nullToEmpty(this.div_search.edt_USR_NM.value)
        					+ " ent_prg_stsc=" +this.gfn_nullToEmpty(this.div_search.cbo_ENT_PRG_STSC.value)
        					+ " clntnm=" +this.gfn_nullToEmpty(this.div_search.edt_CLNTNM.value)
        					+ " na_trpl_c=" +this.gfn_nullToEmpty(this.div_search.edt_NA_TRPL_C.value)
        					+ " bz_no=" +this.gfn_nullToEmpty(this.div_search.edt_BZNO.value)
        					+ " from=" +this.gfn_nullToEmpty(this.div_search.cal_from.value)
        					+ " tel=" +this.gfn_nullToEmpty(this.div_search.edt_USR_MPNO.value)
        					+ " to=" +this.gfn_nullToEmpty(this.div_search.cal_to.value);

        		if (this.div_search.cbo_cal.value == "L") {
        			sParam += " yn=L";
        		} else {
        			sParam += " yn=" +this.gfn_nullToEmpty(this.div_search.chk_DT_YN.value);
        		}

        		var sSvcID        = "retrieveMbApvrqrList";
        		var sURL          = "svc::rest/mg/usrinf/retrieveMbApvrqrList";
        		var sInDatasets   = "ds_pageVO=ds_pageVO";
        		var sOutDatasets  = "ds_pageVO=ds_pageVO ds_result=ds_result";
        		var sArgument     = sParam;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "S"; // U:저장/삭제, S:조회

        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
         	}
        }

        /* 조회 조건 검증 */
        this.fn_validation = function()
        {
        	var mb_id = this.gfn_nullToEmpty(this.div_search.edt_MB_ID.value);
        	var usr_nm = this.gfn_nullToEmpty(this.div_search.edt_USR_NM.value);
        	var ent_prg_stsc = this.gfn_nullToEmpty(this.div_search.cbo_ENT_PRG_STSC.value);
        	var clntnm = this.gfn_nullToEmpty(this.div_search.edt_CLNTNM.value);
        	var na_trpl_c = this.gfn_nullToEmpty(this.div_search.edt_NA_TRPL_C.value);
        	var bz_no = this.gfn_nullToEmpty(this.div_search.edt_BZNO.value);
        	var tel = this.gfn_nullToEmpty(this.div_search.edt_USR_MPNO.value);

        	/* 회원상태 전체일 때 입력조건 미설정 시 날짜조건 강제(속도이슈) */	
        	if (ent_prg_stsc == "A" && this.div_search.cbo_cal.value == "S" && this.div_search.chk_DT_YN.value == "N") {
        		var param = this.strTrim(mb_id + usr_nm + clntnm + na_trpl_c + bz_no + tel);
        		if (this.gfn_isNull(param)) {
        			this.div_search.chk_DT_YN.set_value("Y");
        			//this.alert("가입진행상태 전체일 때 조회조건 미입력 시 조회기간 조건이 자동설정 됩니다.");
        		}
        	}
        	
        	/* 조회일시 */
        	var from = this.gfn_nullToEmpty(this.div_search.cal_from.value);
        	var to = this.gfn_nullToEmpty(this.div_search.cal_to.value);
        	
        	if (this.div_search.cbo_cal.value == "L" || this.div_search.chk_DT_YN.value == "Y") {
        		if (this.gfn_isNull(from)) {
        			alert("조회 시작일을 입력하시기 바랍니다.");
        			return false;
        		}
        		if (this.gfn_isNull(to)) {
        			alert("조회 종료일을 입력하시기 바랍니다.");
        			return false;
        		}
        	}
        	return true;
        }

        /*그리드 클릭 상세화면조회*/
        this.div_result_grd_mbApvrqrList_oncellclick = function(obj,e)
        {
        	var rowPos = e.row;
        	var cellPos = e.cell;

        	this.ds_param.clearData();
        	this.ds_param.addRow();
        	this.ds_param.copyRow(0, this.ds_result, e.row);
        	
        	var oArg = {paramMode:"S", dsArg:this.ds_param};
        	var sOption = "autosize=true, title=true";
        	
        	if (obj.getCellValue(rowPos, cellPos) == "변경이력") { //변경이력 버튼 클릭했을때 이벤트
        		var sPopupCallBack = "fn_hstpopupAfter";

        		this.gfn_openPopup("popId", "OMG.MG::OMG_DS_SC_6413.xfdl", oArg, sOption, sPopupCallBack);
        	} else {
        		var usrTpc = this.ds_result.getColumn(e.row, "USR_TPC");
        		var sPopupCallBack = "fn_popupAfter";

        		if ("04" == usrTpc) { // 세금계산서 전용
        			this.gfn_openPopup("popId", "OMG.MG::OMG_DS_SC_6412.xfdl", oArg, sOption, sPopupCallBack);
        		} else if ("05" == usrTpc) { // 전자세금계산서 전용
        			this.gfn_openPopup("popId", "OMG.MG::OMG_DS_SC_6415.xfdl", oArg, sOption, sPopupCallBack);
        		} else if ("81" == usrTpc) { // 농협a마켓 전용
        			this.gfn_openPopup("popId", "OMG.MG::OMG_DS_SC_6414.xfdl", oArg, sOption, sPopupCallBack);
        		} else { // 그 외의 경우
        			this.gfn_openPopup("popId", "OMG.MG::OMG_DS_SC_6411.xfdl", oArg, sOption, sPopupCallBack);
        		}
        	}
        }

        /*팝업호출확인하기*/
        this.fn_popupAfter = function(strId,strVal)
        {
        	this.btn_search.click();
        }

         /*콜백메소드*/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "retrieveMbApvrqrList") {
        			var current_page = this.ds_pageVO.getColumn(0, "CURRENT_PAGE");
        			var page_size = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        			var sTotal = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        			
        			if (this.ds_result.rowcount == 0) {
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        				this.div_result.div_paging.fn_pageSet(0, 0, "div_paging", current_page);
        			} else if (this.ds_result.rowcount > 0) {
        				this.div_result.div_paging.fn_pageSet(sTotal, page_size, "div_paging", current_page);
        			}
        		}
        	}
        }

        this.Div00_cbo_cal_onitemchanged = function(obj,e)
        {
        	this.div_search.chk_DT_YN.set_value("N");
        	if (this.div_search.cbo_cal.value == "L") {
        		this.div_search.chk_DT_YN.set_visible(false);
        	} else {
        		this.div_search.chk_DT_YN.set_visible(true);
        	}
        }

        this.common_keydown = function(obj,e)
        {
        	if (e.keycode == "13") {
        		this.btn_search_onclick();
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_search.edt_MB_ID.addEventHandler("onkeydown", this.common_keydown, this);
            this.div_search.edt_USR_NM.addEventHandler("onkeydown", this.common_keydown, this);
            this.div_search.cbo_ENT_PRG_STSC.addEventHandler("onitemchanged", this.Div00_Combo00_onitemchanged, this);
            this.div_search.cbo_pageNum.addEventHandler("onitemchanged", this.div_search_cbo_displayYn_onitemchanged, this);
            this.div_search.edt_CLNTNM.addEventHandler("onkeydown", this.common_keydown, this);
            this.div_search.edt_NA_TRPL_C.addEventHandler("onkeydown", this.common_keydown, this);
            this.div_search.cbo_cal.addEventHandler("onitemchanged", this.Div00_cbo_cal_onitemchanged, this);
            this.div_search.edt_USR_MPNO.addEventHandler("onkeydown", this.common_keydown, this);
            this.div_search.edt_BZNO.addEventHandler("onkeydown", this.common_keydown, this);
            this.div_result.grd_mbApvrqrList.addEventHandler("oncellclick", this.div_result_grd_mbApvrqrList_oncellclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6410.xfdl");
        this.loadPreloadList();
       
    };
}
)();
