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
                this.set_name("MOB_MD_SC_1112");
                this.set_titletext("가격할인 이력관리");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_mdInf", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MD_RGST_TM\" type=\"STRING\" size=\"14\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"200\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"50\"/><Column id=\"MD_WRS_C\" type=\"STRING\" size=\"50\"/><Column id=\"MD_WRS_ABR_NM\" type=\"STRING\" size=\"50\"/><Column id=\"MD_SL_UPR\" type=\"INT\"/><Column id=\"MD_PRICE\" type=\"INT\"/><Column id=\"MD_RATE\" type=\"INT\"/><Column id=\"MD_RSN_CD\" type=\"STRING\" size=\"50\"/><Column id=\"MD_STAT_CD\" type=\"STRING\" size=\"50\"/><Column id=\"CHGR_NM\" type=\"STRING\" size=\"50\"/><Column id=\"MD_APPR_TM\" type=\"STRING\" size=\"14\"/><Column id=\"MD_RJT_CD\" type=\"STRING\" size=\"50\"/><Column id=\"MD_PRNT_CNT\" type=\"INT\"/></ColumnInfo>");
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

            obj = new Dataset("ds_mdAuth", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"50\"/><Column id=\"USR_TPC\" type=\"STRING\" size=\"2\"/><Column id=\"MD_ID\" type=\"STRING\" size=\"9\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"50\"/><Column id=\"USR_MPNO\" type=\"STRING\" size=\"20\"/><Column id=\"MD_IMEI_NO\" type=\"STRING\" size=\"20\"/><Column id=\"MD_MNGR_CD\" type=\"STRING\" size=\"2\"/><Column id=\"MD_CHGR_CD\" type=\"STRING\" size=\"2\"/><Column id=\"MD_USE_CD\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_statCd", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"STRING\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "110", "15", null, this);
            obj.set_taborder("89");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "2.16%", "10", null, "21", "86.9%", null, this.div_search);
            obj.set_taborder("31");
            obj.set_text("사업장조회");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit_comnum", "absolute", "11.7%", "10", null, "21", "79.39%", null, this.div_search);
            obj.set_taborder("32");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit_comname", "absolute", "20.87%", "10", null, "21", "69.72%", null, this.div_search);
            obj.set_taborder("33");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_comname", "absolute", "30.53%", "10", null, "21", "66.79%", null, this.div_search);
            obj.set_taborder("34");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "35.5%", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("37");
            obj.set_text("개인번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_ID", "absolute", "54.45%", "10", null, "21", "35.24%", null, this.div_search);
            obj.set_taborder("38");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "68.83%", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("39");
            obj.set_text("이름");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_NM", "absolute", "85.75%", "10", null, "21", "3.82%", null, this.div_search);
            obj.set_taborder("40");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cb_chIdCd", "absolute", "45.67%", "10", null, "21", "46.18%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cb_chIdCd_innerdataset = new Dataset("cb_chIdCd_innerdataset", this.div_search.cb_chIdCd);
            cb_chIdCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">담당자</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">책임자</Col></Row></Rows>");
            obj.set_innerdataset(cb_chIdCd_innerdataset);
            obj.set_taborder("45");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_align("left middle");
            obj.set_value("0");
            obj.set_text("담당자");
            obj.set_displayrowcount("2");
            obj.set_index("0");
            obj = new Combo("cb_chNmCd", "absolute", "77.1%", "10", null, "21", "14.76%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cb_chNmCd_innerdataset = new Dataset("cb_chNmCd_innerdataset", this.div_search.cb_chNmCd);
            cb_chNmCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">담당자</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">책임자</Col></Row></Rows>");
            obj.set_innerdataset(cb_chNmCd_innerdataset);
            obj.set_taborder("46");
            obj.set_value("0");
            obj.set_text("담당자");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_align("left middle");
            obj.set_displayrowcount("2");
            obj.set_index("0");
            obj = new Static("Static01", "absolute", "2.16%", "42", null, "21", "86.9%", null, this.div_search);
            obj.set_taborder("47");
            obj.set_text("상품조회");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit_wrsnum", "absolute", "11.7%", "42", null, "21", "79.39%", null, this.div_search);
            obj.set_taborder("48");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit_wrsname", "absolute", "20.87%", "42", null, "21", "69.72%", null, this.div_search);
            obj.set_taborder("49");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_wrsname", "absolute", "30.53%", "42", null, "21", "66.79%", null, this.div_search);
            obj.set_taborder("50");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "35.5%", "42", "79", "21", null, null, this.div_search);
            obj.set_taborder("51");
            obj.set_text("할인율");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_fmRate", "absolute", "45.67%", "42", null, "21", "46.18%", null, this.div_search);
            obj.set_taborder("52");
            obj.set_inputtype("digit");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "54.58%", "42", null, "21", "44.15%", null, this.div_search);
            obj.set_taborder("53");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_toRate", "absolute", "56.62%", "42", null, "21", "35.24%", null, this.div_search);
            obj.set_taborder("54");
            obj.set_inputtype("digit");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "68.83%", "42", "79", "21", null, null, this.div_search);
            obj.set_taborder("55");
            obj.set_text("출력매수");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_fmPcnt", "absolute", "77.1%", "42", null, "21", "14.76%", null, this.div_search);
            obj.set_taborder("56");
            obj.set_inputtype("digit");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "86.13%", "42", null, "21", "12.6%", null, this.div_search);
            obj.set_taborder("57");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_toPcnt", "absolute", "88.04%", "42", null, "21", "3.82%", null, this.div_search);
            obj.set_taborder("58");
            obj.set_inputtype("digit");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "2.16%", "74", "72", "21", null, null, this.div_search);
            obj.set_taborder("59");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "11.7%", "74", null, "21", "78.63%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("60");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static09", "absolute", "21.88%", "74", null, "21", "76.84%", null, this.div_search);
            obj.set_taborder("61");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_to", "absolute", "23.41%", "74", null, "21", "66.79%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("62");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static10", "absolute", "68.83%", "74", null, "21", "13.49%", null, this.div_search);
            obj.set_taborder("63");
            obj.set_text("게시물수");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_pageNum", "absolute", "77.1%", "74", "60", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_pageNum_innerdataset = new Dataset("cbo_pageNum_innerdataset", this.div_search.cbo_pageNum);
            cbo_pageNum_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row></Rows>");
            obj.set_innerdataset(cbo_pageNum_innerdataset);
            obj.set_taborder("64");
            obj.set_value("20");
            obj.set_text("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj = new Static("Static11", "absolute", "35.5%", "74", "79", "21", null, null, this.div_search);
            obj.set_taborder("65");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cb_statCd", "absolute", "45.67%", "74", null, "21", "46.18%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("66");
            obj.set_value("0");
            obj.set_text("담당자");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.style.set_align("left middle");
            obj.set_innerdataset("@ds_statCd");
            obj.set_visible("false");
            obj.set_index("0");

            obj = new Div("div_md", "absolute", "0", "138", null, null, "15", "1", this);
            obj.set_taborder("81");
            obj.set_text("div_md");
            this.addChild(obj.name, obj);
            obj = new Button("Button75", "absolute", "347", "0", null, "12", "363", null, this.div_md);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_md.addChild(obj.name, obj);
            obj = new Div("div_paging", "absolute", "226", null, "338", "29", null, "40", this.div_md);
            obj.set_taborder("4");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_md.addChild(obj.name, obj);
            obj = new Grid("grd_md", "absolute", "0", "42", null, null, "0", "66", this.div_md);
            obj.set_taborder("2");
            obj.set_binddataset("ds_mdInf");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_summarytype("top");
            obj.set_treeusebutton("use");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseexpandkey("true");
            obj.set_treeuseimage("false");
            obj.set_treeuseline("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"0\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"140\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"등록일시\"/><Cell col=\"2\" text=\"사업장명\"/><Cell col=\"3\" text=\"레벨\"/><Cell col=\"4\" text=\"담당자\"/><Cell col=\"5\" text=\"상품코드\"/><Cell col=\"6\" text=\"상품명\"/><Cell col=\"7\" text=\"판매가\"/><Cell col=\"8\" text=\"할인가\"/><Cell col=\"9\" text=\"할인율\"/><Cell col=\"10\" text=\"할인사유\"/><Cell col=\"11\" text=\"출력매수\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: ;\" expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:MD_RGST_TM\" mask=\"@@@@-@@-@@ @@:@@:@@\" tooltiptext=\"bind:MD_RGST_TM\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:CLNTNM\" tooltiptext=\"bind:CLNTNM\"/><Cell col=\"3\" displaytype=\"number\" text=\"bind:LEV\" tooltiptext=\"bind:LEV\"/><Cell col=\"4\" displaytype=\"normal\" style=\"align: ;\" text=\"bind:USR_NM\" tooltiptext=\"bind:USR_NM\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:MD_WRS_C\" tooltiptext=\"bind:MD_WRS_C\"/><Cell col=\"6\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:MD_WRS_ABR_NM\" tooltiptext=\"bind:MD_WRS_ABR_NM\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:MD_SL_UPR\" tooltiptext=\"bind:MD_SL_UPR\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MD_PRICE\" tooltiptext=\"bind:MD_PRICE\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:MD_RATE\" tooltiptext=\"bind:MD_RATE\"/><Cell col=\"10\" displaytype=\"normal\" style=\"align: ;\" text=\"bind:MD_RSN_CD\" tooltiptext=\"bind:MD_RSN_CD\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MD_PRNT_CNT\" tooltiptext=\"bind:MD_PRNT_CNT\"/></Band></Format></Formats>");
            this.div_md.addChild(obj.name, obj);

            obj = new Button("btn_execl", "absolute", null, "0", "41", "21", "79", null, this);
            obj.set_taborder("11");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_Searchbtn");
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

            obj = new Button("btn_na_print", "absolute", null, "0", "41", "21", "126", null, this);
            obj.set_taborder("90");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 110, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("89");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 788, 420, this.div_md,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("81");
            		p.set_text("div_md");

            	}
            );
            this.div_md.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("가격할인 이력관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("MOB_MD_SC_1112.xfdl", "lib::comLib.xjs");
        this.registerScript("MOB_MD_SC_1112.xfdl", function() {
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
        // Form Init: 페이지 호출 후 실행
        this.form_init = function(obj,e)
        {
        	this.div_search.cbo_pageNum.set_index(0);
        	this.div_search.cal_from.set_value(this.gfn_minusDate(application.gv_today,1))
        	this.div_search.cal_to.set_value(this.gfn_minusDate(application.gv_today,1))
        }

        // Form Onload: DataSet 로딩 후 실행
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통

            var param = [  
        		{code:"MD_STAT_CD"	, dsName:"ds_statCd"	, selecttype:"A"}
            ];

        	this.gfn_setPortalCommonCode(param);

        //	시스템관리자가 아니면 사용자 인증 및 권한확인을 한다
        	if(application.gv_userTPC != "admin")
        	{
        		this.fn_getAuth();
        	}	
        }

        this.fn_afterFormOnload = function() //onload
        {

        }

        // gfn_setCommonCode, gfn_setPortalCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	this.div_search.cb_statCd.set_index(3);
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        /* Paging 처리 */
        this.fn_paging = function(vPageNum)
        {
        	this.ds_pageVO.clearData();
        	this.ds_mdInf.clearData(); // Grid에 Binding된 Dataset명

        	this.ds_pageVO.addRow();

        	var vPageSize = this.div_search.cbo_pageNum.value; // Grid에 보여줄 Row수 선택
        	var vTotalCount = 0; // 전체건수. 화면조회후 리턴받아 사용 (구동시 갱신)

        	this.ds_pageVO.setColumn(0, "CURRENT_PAGE", vPageNum); // 현재 페이지
        	this.ds_pageVO.setColumn(0, "PAGE_SIZE", vPageSize);
        	this.ds_pageVO.setColumn(0, "TOTAL_ROW_COUNT", vTotalCount);

        	var argumentObj = "";

        	this.fn_search();
        }

        // 사용자관리 탭화면 닫기
        this.close_tab_window = function()
        {
            var strFormId = '';	// 화면폼 아이디
        	     if(application.gv_userType == '03') strFormId = '39001001';
            else if(application.gv_userType == '02') strFormId = '29001001';
        	application.afrm_FrameSet.frames[strFormId].form.close();
        }

        this.fn_setAuth = function()
        {
        //	권한에 따른 가능 및 제약업무 설정
        //	trace("application.gv_glnCode:" + application.gv_glnCode);
        //	trace("application.gv_userType:" + application.gv_userType);

        	//	읽기전용 입력창 배경색
        	var	rdonly_bgcolor = "#999999ff";
        	//	조회조건 제약
        	//	사업장 사용자는 소속사업장의 정보만 조회가 가능하다
        	if(application.gv_userType == '03')
        	{
        		//	조회조건 사업장코드 고정 & 비활성화
        		this.div_search.Edit_comnum.set_value(application.gv_glnCode);
        		this.div_search.Edit_comnum.set_readonly(true);
        		this.div_search.Edit_comnum.style.set_background(rdonly_bgcolor);
        		//	조회조건 사업장명 고정 & 비활성화
        		this.div_search.Edit_comname.set_value(application.gv_companyName);
        		this.div_search.Edit_comname.set_readonly(true);
        		this.div_search.Edit_comname.style.set_background(rdonly_bgcolor);
        		//	사업장조회 버튼 비활성화
        		this.div_search.btn_comname.set_enable(false);
        	
        		//	매장 관리자가 아니어도 소속사업장의 이력정보는 조회가 가능하다
        		//	따라서 별도의 비활성화는 하지 않는다
        	}
        }

        // 콜백 함수
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	var current_page = this.ds_pageVO.getColumn(0, "CURRENT_PAGE");
        	var page_size    = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        	var sTotal       = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");

        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        	}
        	else
        	{
        		if(svcID == "retrieveMdUsrAuth")
        		{
        		//	trace("this.ds_mdAuth:" + this.ds_mdAuth.saveXML());
        			if (this.ds_mdAuth.rowcount > 0)
        			{
        				if(this.ds_mdAuth.getColumn(0, "MD_USE_CD") == 0)
        				{
        					alert("사용중지된 가격할인 사용자입니다");
        					this.close_tab_window();
        				}
        				this.fn_setAuth();
        			}
        			else
        			{
        				alert("가격할인 사용자가 아닙니다");
        				this.close_tab_window();
        			}
        		}
        		else if(svcID == "retrieveMdInfList")
        		{
        		//	trace("this.ds_mdInf:" + this.ds_mdInf.saveXML());
        			if (this.ds_mdInf.rowcount > 0) {
        				this.div_md.div_paging.fn_pageSet(sTotal, page_size, "div_paging", current_page);
        			} else {
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        				this.div_md.div_paging.fn_pageSet(0, 0, "div_paging", current_page);
        			}
        		}
        	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        // 조회조건 영역 펼치기, 접기
        this.Div_Md_Button75_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_md);
        }

        // 오즈 출력
        this.btn_na_print_onclick = function(obj,e)
        {
        	var stat_cd	= this.gfn_nullToEmpty(this.div_search.cb_statCd.value);
        	if (stat_cd == "all")	stat_cd = "";

        	var ozParam = {
        		sId: 'MOB_MD_SC_1112',
        		sUrl: '/rest/mob/printMdInfList',
        		paramType: 'param',
        		sParam: {
        			TRPL_C:		this.gfn_nullToEmpty(this.div_search.Edit_comnum.value),
        			CLNTNM:		this.gfn_nullToEmpty(this.div_search.Edit_comname.value),
        			CHID_CD:	this.gfn_nullToEmpty(this.div_search.cb_chIdCd.value),
        			MD_ID:		this.gfn_nullToEmpty(this.div_search.edt_ID.value),
        			CHNM_CD:	this.gfn_nullToEmpty(this.div_search.cb_chNmCd.value),
        			MD_NM:		this.gfn_nullToEmpty(this.div_search.edt_NM.value),
        			WRS_CD:		this.gfn_nullToEmpty(this.div_search.Edit_wrsnum.value),
        			WRS_NM:		this.gfn_nullToEmpty(this.div_search.Edit_wrsname.value),
        			FM_RATE:	this.gfn_nullToEmpty(this.div_search.edt_fmRate.value),
        			TO_RATE:	this.gfn_nullToEmpty(this.div_search.edt_toRate.value),
        			FM_PCNT:	this.gfn_nullToEmpty(this.div_search.edt_fmPcnt.value),
        			TO_PCNT:	this.gfn_nullToEmpty(this.div_search.edt_toPcnt.value),
        			FROM_DT:	this.gfn_nullToEmpty(this.div_search.cal_from.value),
        			TO_DT:		this.gfn_nullToEmpty(this.div_search.cal_to.value),
        			STAT_CD:	stat_cd
        		}
        	};
        	this.ozViewer(ozParam);	
        }

        // 엑셀 다운로드
        this.btn_excel_onclick = function(obj,e)
        {
        	var trplC	= this.gfn_nullToEmpty(this.div_search.Edit_comnum.value);
        	var clntNm	= this.gfn_nullToEmpty(this.div_search.Edit_comname.value);
        	var chId_cd	= this.gfn_nullToEmpty(this.div_search.cb_chIdCd.value);
        	var md_id	= this.gfn_nullToEmpty(this.div_search.edt_ID.value);
        	var chNm_cd	= this.gfn_nullToEmpty(this.div_search.cb_chNmCd.value);
        	var md_nm	= this.gfn_nullToEmpty(this.div_search.edt_NM.value);
        	var wrs_cd	= this.gfn_nullToEmpty(this.div_search.Edit_wrsnum.value);
        	var wrs_nm	= this.gfn_nullToEmpty(this.div_search.Edit_wrsname.value);
        	var fmRate	= this.gfn_nullToEmpty(this.div_search.edt_fmRate.value);
        	var toRate	= this.gfn_nullToEmpty(this.div_search.edt_toRate.value);
        	var fmPcnt	= this.gfn_nullToEmpty(this.div_search.edt_fmPcnt.value);
        	var toPcnt	= this.gfn_nullToEmpty(this.div_search.edt_toPcnt.value);
        	var fromDt	= this.gfn_nullToEmpty(this.div_search.cal_from.value);
        	var toDt	= this.gfn_nullToEmpty(this.div_search.cal_to.value);
        	var stat_cd	= this.gfn_nullToEmpty(this.div_search.cb_statCd.value);
        	if (stat_cd == "all")	stat_cd = "";

        	var param	=  "TRPL_C="	+ trplC
        				+ "&CLNTNM="	+ clntNm
        				+ "&CHID_CD="	+ chId_cd
        				+ "&MD_ID="		+ md_id
        				+ "&CHNM_CD="	+ chNm_cd
        				+ "&MD_NM="		+ md_nm
        				+ "&WRS_CD="	+ wrs_cd
        				+ "&WRS_NM="	+ wrs_nm
        				+ "&FM_RATE="	+ fmRate
        				+ "&TO_RATE="	+ toRate
        				+ "&FM_PCNT="	+ fmPcnt
        				+ "&TO_PCNT="	+ toPcnt
        				+ "&FROM_DT="	+ fromDt
        				+ "&TO_DT="		+ toDt
        				+ "&STAT_CD="	+ stat_cd
        				;

        	this.fn_excel(param);
        }

        this.fn_excel = function(param)
        {
        		trace("엑셀 다운로드 params >>> " + param);
        	//	param = encodeURI(encodeURI(param));
        		excelDownHandler(application.gv_server_url + "rest/excel/mob/downloadExcelMdInfList?" + param, this);
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/	
        // 가격할인 사용자 조회
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_paging(1);
        }

        this.fn_getAuth = function()
        {
        	var param			= "MD_ID=" + application.gv_userId;
        	var sSvcID			= "retrieveMdUsrAuth";
        	var sURL			= "svc::rest/mob/retrieveMdUsrAuth";
        	var sInDatasets		= "";									// 보내는데이터셋
        	var sOutDatasets	= "ds_mdAuth=ds_mdAuth";				// 화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument		= param;
        	var sCallbackFunc	= "fn_callBack";
        	var sTranType		= "S";									// U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_search = function()
        {
        	var trplC	= this.gfn_nullToEmpty(this.div_search.Edit_comnum.value);
        	var clntNm	= this.gfn_nullToEmpty(this.div_search.Edit_comname.value);
        	var chId_cd	= this.gfn_nullToEmpty(this.div_search.cb_chIdCd.value);
        	var md_id	= this.gfn_nullToEmpty(this.div_search.edt_ID.value);
        	var chNm_cd	= this.gfn_nullToEmpty(this.div_search.cb_chNmCd.value);
        	var md_nm	= this.gfn_nullToEmpty(this.div_search.edt_NM.value);
        	var wrs_cd	= this.gfn_nullToEmpty(this.div_search.Edit_wrsnum.value);
        	var wrs_nm	= this.gfn_nullToEmpty(this.div_search.Edit_wrsname.value);
        	var fmRate	= this.gfn_nullToEmpty(this.div_search.edt_fmRate.value);
        	var toRate	= this.gfn_nullToEmpty(this.div_search.edt_toRate.value);
        	var fmPcnt	= this.gfn_nullToEmpty(this.div_search.edt_fmPcnt.value);
        	var toPcnt	= this.gfn_nullToEmpty(this.div_search.edt_toPcnt.value);
        	var fromDt	= this.gfn_nullToEmpty(this.div_search.cal_from.value);
        	var toDt	= this.gfn_nullToEmpty(this.div_search.cal_to.value);
        	var stat_cd	= this.gfn_nullToEmpty(this.div_search.cb_statCd.value);
        	if (stat_cd == "all")	stat_cd = "";

        	var param	=  "TRPL_C="	+ trplC
        				+ " CLNTNM="	+ clntNm
        				+ " CHID_CD="	+ chId_cd
        				+ " MD_ID="		+ md_id
        				+ " CHNM_CD="	+ chNm_cd
        				+ " MD_NM="		+ md_nm
        				+ " WRS_CD="	+ wrs_cd
        				+ " WRS_NM="	+ wrs_nm
        				+ " FM_RATE="	+ fmRate
        				+ " TO_RATE="	+ toRate
        				+ " FM_PCNT="	+ fmPcnt
        				+ " TO_PCNT="	+ toPcnt
        				+ " FROM_DT="	+ fromDt
        				+ " TO_DT="		+ toDt
        				+ " STAT_CD="	+ stat_cd
        				;

        	var sSvcID			= "retrieveMdInfList";
        	var sURL			= "svc::rest/mob/retrieveMdInfList";
        	var sInDatasets		= "ds_pageVO=ds_pageVO";					// 보내는데이터셋
        	var sOutDatasets	= "ds_mdInf=ds_mdInf ds_pageVO=ds_pageVO";	// 화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument		= param;
        	var sCallbackFunc	= "fn_callBack";
        	var sTranType		= "S";										// U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        // 사업장 조회버튼
        this.div_search_btn_comname_onclick = function(obj,e)
        {
        	var oArg			= "";
        	var sOption			= "autosize=true,title=true";
        	var sPopupCallBack	= "fn_popupAfter";    
        	this.gfn_openPopup("trplSearchPopup", "MOB.MD::MOB_MD_SC_1111_P01.xfdl", oArg, sOption, sPopupCallBack);
        }

        // 상품 조회버튼
        this.div_search_btn_wrsname_onclick = function(obj,e)
        {
        	var oArg			= "";
        	var sOption			= "autosize=true,title=true";
        	var sPopupCallBack	= "fn_popupAfter";    
        	this.gfn_openPopup("wrsSearchPopup", "MOB.MD::MOB_MD_SC_1112_P01.xfdl", oArg, sOption, sPopupCallBack);
        }

        // 팝업작업 후 진행함수
        this.fn_popupAfter = function(strId,strVal)
        {
        //	trace(" strId : " + strId + " strVal : " + strVal);	
        	if(strId == "trplSearchPopup"){
        		if(strVal != ''){
        			var paramsArr = strVal.split(",");
        			this.div_search.Edit_comnum.set_value(paramsArr[0]);
        			this.div_search.Edit_comname.set_value(paramsArr[1]);
        		}
        	}
        	else if(strId == "wrsSearchPopup"){
        		if(strVal != ''){
        			var paramsArr = strVal.split(",");
        			this.div_search.Edit_wrsnum.set_value(paramsArr[0]);
        			this.div_search.Edit_wrsname.set_value(paramsArr[1]);
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_init, this);
            this.div_search.btn_comname.addEventHandler("onclick", this.div_search_btn_comname_onclick, this);
            this.div_search.edt_ID.addEventHandler("onkeydown", this.edt_ACNO_onkeydown, this);
            this.div_search.edt_NM.addEventHandler("onkeydown", this.edt_ACNO_onkeydown, this);
            this.div_search.btn_wrsname.addEventHandler("onclick", this.div_search_btn_wrsname_onclick, this);
            this.div_search.edt_fmRate.addEventHandler("onkeydown", this.edt_ACNO_onkeydown, this);
            this.div_search.edt_toRate.addEventHandler("onkeydown", this.edt_ACNO_onkeydown, this);
            this.div_search.edt_fmPcnt.addEventHandler("onkeydown", this.edt_ACNO_onkeydown, this);
            this.div_search.edt_toPcnt.addEventHandler("onkeydown", this.edt_ACNO_onkeydown, this);
            this.div_search.Static07.addEventHandler("onclick", this.div_search_Static05_onclick, this);
            this.div_search.cal_from.addEventHandler("oneditclick", this.div_search_cal_from_oneditclick, this);
            this.div_search.Static10.addEventHandler("onclick", this.div_search_Static01_onclick, this);
            this.div_search.cbo_pageNum.addEventHandler("onitemchanged", this.div_search_cbo_displayYn_onitemchanged, this);
            this.div_md.Button75.addEventHandler("onclick", this.Div_Md_Button75_onclick, this);
            this.btn_execl.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_na_print.addEventHandler("onclick", this.btn_na_print_onclick, this);

        };

        this.loadIncludeScript("MOB_MD_SC_1112.xfdl");
        this.loadPreloadList();
       
    };
}
)();
