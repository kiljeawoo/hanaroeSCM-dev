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
                this.set_name("OMG_DS_SC_8610");
                this.set_classname("OMG_DS_SC_7022");
                this.set_titletext("역발행 세금계산서 조회");
                this._setFormPosition(0,0,540,680);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_tax", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PBC_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"NTS_TMS_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CRT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_KD\" type=\"STRING\" size=\"256\"/><Column id=\"RCT_RQS_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_C\" type=\"STRING\" size=\"256\"/><Column id=\"RMK1\" type=\"STRING\" size=\"256\"/><Column id=\"RMK2\" type=\"STRING\" size=\"256\"/><Column id=\"RMK3\" type=\"STRING\" size=\"256\"/><Column id=\"REV_RPT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BAT_ISU_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BAT_ISU_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REV_TTCN\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_REPMNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_ADR\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_BZTPNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_BZC\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CHRRNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CHRR_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CHRR_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CHRR_MPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_FAXNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MTAL\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_REPMNM\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_ADR\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_BZTPNM\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_BZC\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_FAXNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_DEPTNM1\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRRNM1\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_TELNO1\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_EMAIL1\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_MPNO1\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_DEPTNM2\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRRNM2\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_TELNO2\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_EMAIL2\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_MPNO2\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_REPMNM\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_ADR\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_BZTPNM\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_BZC\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_CHRRNM\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_CHRR_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_CHRR_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"STL_METHC1\" type=\"STRING\" size=\"256\"/><Column id=\"STL_AM1\" type=\"STRING\" size=\"256\"/><Column id=\"STL_METHC2\" type=\"STRING\" size=\"256\"/><Column id=\"STL_AM2\" type=\"STRING\" size=\"256\"/><Column id=\"STL_METHC3\" type=\"STRING\" size=\"256\"/><Column id=\"STL_AM3\" type=\"STRING\" size=\"256\"/><Column id=\"STL_METHC4\" type=\"STRING\" size=\"256\"/><Column id=\"STL_AM4\" type=\"STRING\" size=\"256\"/><Column id=\"SPRTT\" type=\"STRING\" size=\"256\"/><Column id=\"TXA_TT\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"RQR_STS_C\" type=\"STRING\" size=\"256\"/><Column id=\"RPBC_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_SL_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"RSP_C\" type=\"STRING\" size=\"256\"/><Column id=\"RSP_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"RQR_CHAN_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_PBC_RQR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SMS_PBC_RQR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_PBC_RQR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_TAX_PBC_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_TAX_NTS_TMS_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"ISTT_PBC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PBC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ERP_REF_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ASP_TMS_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"ASP_RSP_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_C\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"BRC\" type=\"STRING\" size=\"256\"/><Column id=\"BRNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TEAMNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_CLNT_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_CLNT_TEAMNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TOT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TOT_DSNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TOT_DTI_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TOT_DTI_DSNM\" type=\"STRING\" size=\"256\"/><Column id=\"TXBZ_TP_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"TXBZ_TP_PBCNM\" type=\"STRING\" size=\"256\"/><Column id=\"RC_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"HOFC_BAT_RG_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"INPMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"APVMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"ELSG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DCZ_UYN\" type=\"STRING\" size=\"256\"/><Column id=\"ASP_ETR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_R_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"VENDER_C\" type=\"STRING\" size=\"256\"/><Column id=\"ORR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ORR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_01\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_02\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_03\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_04\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_05\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_06\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_07\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_08\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_09\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_10\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_11\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_12\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_13\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_14\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_15\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_16\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_17\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_18\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_19\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_20\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_21\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_22\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_23\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_24\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_25\" type=\"STRING\" size=\"256\"/><Column id=\"SOAC_PBC_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pageVO", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TOTAL_ROW_COUNT\">13</Col><Col id=\"PAGE_SIZE\">10</Col><Col id=\"CURRENT_PAGE\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_combo", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_C_EXPL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_condition", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DT\" type=\"STRING\" size=\"256\"/><Column id=\"CONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"STARTDT\" type=\"STRING\" size=\"256\"/><Column id=\"ENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"TX_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_list", "absolute", "0", "216", "540", null, null, "0", this);
            obj.set_taborder("52");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_list", "absolute", "0", "16", "540", null, null, "38", this.div_list);
            obj.set_taborder("0");
            obj.set_binddataset("ds_tax");
            obj.set_autofittype("col");
            obj.set_summarytype("top");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"198\"/><Column size=\"150\"/><Column size=\"190\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"50\" band=\"head\"/><Row size=\"63\"/><Row size=\"63\"/></Rows><Band id=\"head\"><Cell text=\"공급자\"/><Cell col=\"1\" text=\"작성일자\"/><Cell col=\"2\" text=\"공급가액\"/><Cell row=\"1\" text=\"공급받는자\"/><Cell row=\"1\" col=\"1\" text=\"상태\"/><Cell row=\"1\" col=\"2\" text=\"세액\"/></Band><Band id=\"body\"><Cell style=\"align: ;\" text=\"bind:SPLR_MTALNM\"/><Cell col=\"1\" displaytype=\"date\" style=\"align: ;\" text=\"bind:CRT_DT\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:SPRTT\"/><Cell row=\"1\" text=\"bind:BUY_REPMNM\"/><Cell row=\"1\" col=\"1\" displaytype=\"combo\" style=\"align:center middle;\" text=\"bind:SOAC_PBC_STSC\" combodataset=\"ds_combo\" combocodecol=\"SIMP_C\" combodatacol=\"SIMP_CNM\"/><Cell row=\"1\" col=\"2\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:TXA_TT\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_searchControl", "absolute", "0", "0", "540", "16", null, null, this.div_list);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SearchControlBtn");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_page", "absolute", "100", null, "340", "29", null, "1", this.div_list);
            obj.set_taborder("2");
            obj.style.set_align("center");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "293", "10", "13", "15", null, null, this.div_list.div_page);
            obj.getSetter("taborder").set("13");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.div_page.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "0", "0", "229", "10", null, null, this.div_list.div_page);
            obj.getSetter("taborder").set("14");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.div_page.addChild(obj.name, obj);
            obj = new Button("btn_next", "absolute", "306", "8", "15", "14", null, null, this.div_list.div_page);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PageNext");
            this.div_list.div_page.addChild(obj.name, obj);
            obj = new Button("btn_previous", "absolute", "17", "8", "15", "14", null, null, this.div_list.div_page);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_PagePrevious");
            this.div_list.div_page.addChild(obj.name, obj);
            obj = new Button("btn_end", "absolute", "323", "8", "15", "14", null, null, this.div_list.div_page);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_PageNextP");
            this.div_list.div_page.addChild(obj.name, obj);
            obj = new Button("btn_first", "absolute", "0", "8", "15", "14", null, null, this.div_list.div_page);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_PagePreviousP");
            this.div_list.div_page.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "0", "24", "229", "5", null, null, this.div_list.div_page);
            obj.getSetter("taborder").set("19");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.div_page.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "31", "9", "13", "15", null, null, this.div_list.div_page);
            obj.getSetter("taborder").set("20");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.div_page.addChild(obj.name, obj);
            obj = new Static("sta_page4", "absolute", "254", "0", "43", "29", null, null, this.div_list.div_page);
            obj.getSetter("taborder").set("21");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Page");
            obj.style.set_align("center middle");
            this.div_list.div_page.addChild(obj.name, obj);
            obj = new Static("sta_page3", "absolute", "199", "0", "44", "29", null, null, this.div_list.div_page);
            obj.getSetter("taborder").set("22");
            obj.set_text("4");
            obj.set_cssclass("sta_WF_Page");
            obj.style.set_align("center middle");
            this.div_list.div_page.addChild(obj.name, obj);
            obj = new Static("sta_page2", "absolute", "145", "0", "45", "29", null, null, this.div_list.div_page);
            obj.getSetter("taborder").set("23");
            obj.set_text("3");
            obj.set_cssclass("sta_WF_Page");
            obj.style.set_align("center middle");
            this.div_list.div_page.addChild(obj.name, obj);
            obj = new Static("sta_page1", "absolute", "92", "0", "44", "29", null, null, this.div_list.div_page);
            obj.getSetter("taborder").set("24");
            obj.set_text("2");
            obj.set_cssclass("sta_WF_Page");
            obj.style.set_align("center middle");
            this.div_list.div_page.addChild(obj.name, obj);
            obj = new Static("sta_page0", "absolute", "38", "0", "43", "29", null, null, this.div_list.div_page);
            obj.getSetter("taborder").set("25");
            obj.set_text("1");
            obj.set_cssclass("sta_WF_PageS");
            obj.style.set_align("center middle");
            this.div_list.div_page.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "0", "540", "216", null, null, this);
            obj.set_taborder("44");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15", "16", "142", "54", null, null, this.div_search);
            obj.getSetter("taborder").set("85");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_search", "absolute", "15", "147", "510", "49", null, null, this.div_search);
            obj.set_taborder("86");
            obj.set_text("조회");
            obj.set_cssclass("btn_WFSA_SearchBtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "157", "78", "368", "54", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var Combo00_innerdataset = new Dataset("Combo00_innerdataset", this.div_search.Combo00);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">사업자등록번호</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">공급받는자</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_taborder("92");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("-1");
            obj.set_enable("false");
            obj = new Static("Static00", "absolute", "15", "78", "142", "54", null, null, this.div_search);
            obj.getSetter("taborder").set("93");
            obj.set_text("거래처코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "157", "16", "180", "54", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("94");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj = new Calendar("cal_to", "absolute", "345", "16", "180", "54", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("95");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 340, 29, this.div_list.div_page,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_align("center");
            		p.style.set_background("transparent");
            		p.set_visible("false");

            	}
            );
            this.div_list.div_page.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("52");
            		p.set_text("Div01");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 216, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("44");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 680, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_7022");
            		p.set_titletext("역발행 세금계산서 조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_8610.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_8610.xfdl", function() {
        //include "lib::comLib.xjs";
        	
        	var iStartPageNo    = 0;   // 전체 페이지 순서
        	var iUnitSelRowNo   = 0;  // 한번 Server호출시 가져올 row갯수
        	var iStartSelRowNo  = 1;   // Server호출시 시작할 row no
        	var iMaxPageNum     = 5;  // 화면에 보여줄 최대 Page번호 갯수
        	//var iServerRowCount = 30;   // 서버에서 넘어온 Row갯수(100건이 안될 수 있음)
        	var iTotCnt = 0;
        	var lsDivPage = "";//페이지 컴포넌트 경로
        	var lsDivPageNum = "";//총건수 컴포넌트 경로
        	var lsTotCntDst = "";//총건수 사용여부
        	var lsFuncNm = "";//화면호출변수명
        	
        this.form_onload = function(obj,e)
        {
        	this.div_list.grd_list.set_nodatatext("데이터가 없습니다.");
        	
        	var param = [  
         		{code:"SOAC_PBC_STSC",   dsName:"ds_combo",   selecttype:"N"}
            ];
        	
        	this.gfn_setPortalCommonCode(param);
        	
        	this.ds_condition.setColumn(0,"SPLR_NA_TRPL_C", application.gv_glnCode);
            this.ds_condition.setColumn(0,"TX_TYPE", "SALE");
        	
        	//this.gfn_setInitForm(obj,e);
        	this.div_search.cal_from.set_value(this.gfn_firstDate(this.gfn_today("yyyyMMdd")));
            this.div_search.cal_to.set_value(this.gfn_today("yyyyMMdd"));
        }

        this.fn_afterFormOnload = function()
        {
        	//this.div_search.cbo_dt.set_index(0);
            //this.div_search.cbo_condition.set_index(0);
        }

        this.div_search_btn_search_onclick = function(obj,e)
        {
        	this.fn_search();
        }

        this.fn_search = function()
        {
        	this.fn_paging(1);
        }

        this.fn_paging = function(vPageNum)
        { 	  	 
        	this.ds_pageVO.clearData();  
        	this.ds_tax.clearData();     //Grid에 Binding된 Dataset명
        	
        	this.ds_pageVO.addRow(); 
        	
        	var vPageSize   = 10;
        	var vTotalCount = 0; 	//전체건수. 화면조회후 리턴받아 사용
        	
         	this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
         	this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);	 
        	 
        	var argumentObj = "";
        		
        	lsNowPage = vPageNum;//현재페이지 설정 
        	
        	this.fn_retrieveTaxBillList();
        }

        /* 조회 */
        this.fn_retrieveTaxBillList = function()
        {
        	var startDt = this.div_search.cal_from.value;
            var endDt = this.div_search.cal_to.value;
        	
        	this.ds_condition.setColumn(0,"STARTDT", startDt);
            this.ds_condition.setColumn(0,"ENDDT", endDt);
            this.ds_condition.setColumn(0,"DT", 1);//1.작성일 2.발행일
        	
        	var sSvcID        = "retrieveTaxBillList";
        	var sURL          = "svc::rest/tx/retrieveTaxBillList";
        	var sInDatasets   = "ds_condition=ds_condition ds_pageVO=ds_pageVO";
        	var sOutDatasets  = "ds_tax=ds_tax ds_pageVO=ds_pageVO";	
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
        			case "retrieveTaxBillList":
        				if(this.ds_tax.rowcount > 0)
        				{ 
        					var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        					var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        					
        					this.fn_pageSet(sTotal, sPagesize,"div_page",lsNowPage);
        					this.div_list.div_page.set_visible(true);
        					
        					trace(this.div_list.grd_list.rowcount);
        					trace(this.ds_condition.saveXML());
        				}
        				else if(this.ds_tax.rowcount == 0)
        				{
        					this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        					//alert("조회결과가 없습니다.");
        					this.fn_pageSet(0, 0,"div_page",lsNowPage);//페이징 설정		
        					trace(this.ds_tax.saveXML());
        					trace(this.div_list.grd_list.rowcount);
        					trace(this.ds_condition.saveXML());
        				}
        				
        				break;
        		}
         	}
        }

        this.div_list_btn_searchControl_onclick = function(obj,e)
        {
        	this.gfn_mobileSearchDivResize(obj, this.div_search, this.div_list);
        }

        this.btn_page_onclick = function(obj,e)
        {
        	var iNo = new Number(obj.text);
        	var iPageNo = iNo % 5;

        	objDivNm = obj.parent.name;
        	
        	if (iPageNo == 0)
        	{
        		iPageNo = 5;
        	}
        	//호출되는 함수명 추가
        	if (!this.gfn_isNull(lsFuncNm))
        	{
        		//eval(lsFuncNm + "(" +  iNo + ")");
        		this.lookupFunc(lsFuncNm + "(" +  iNo + ")").call();
        	} else	{
        		this.lookupFunc("fn_paging").call(iNo,objDivNm);
        	}
        	
        	this.fn_btnColorSet(iPageNo-1);
           
        }

        //-------------------------------------------------------------------------------------------------
        // Page번호 Setting
        //-------------------------------------------------------------------------------------------------
        this.fn_SetPageNo = function(iVStartPageNo){

        	var sPage   = iVStartPageNo*iMaxPageNum;
        	var iPageNo = 0;	//페이지번호

        	// 이전버튼 처리
        	if(iVStartPageNo < 1){
        		this.div_list.div_page.btn_first.set_visible(false);
        		this.div_list.div_page.btn_previous.set_visible(false);
        	} else {
        		this.div_list.div_page.btn_first.set_visible(true);
        		this.div_list.div_page.btn_previous.set_visible(true);
        	}

        	// 마지막 버튼 처리
        	if(iTotCnt <= ((sPage + 5 )*iUnitSelRowNo)){
        		this.div_list.div_page.btn_next.set_visible(false);
        		this.div_list.div_page.btn_end.set_visible(false);		
        	}else{
        		this.div_list.div_page.btn_next.set_visible(true);
        		this.div_list.div_page.btn_end.set_visible(true);	
        	}

        	var nCnt = "";
        	// 인덱스 번호 처리
        	for(var i=0; i<iMaxPageNum; i++){
        		iPageNo = sPage+i+1;
        		this.div_list.div_page.all["sta_page"+i].set_visible(true);
        		trace(this.div_list.div_page.all["sta_page"+i].visible);
        		trace("i=== "+i);
        		this.div_list.div_page.all["sta_page"+i].set_text(iPageNo);
        		this.div_list.div_page.all["sta_page"+i].set_tooltiptext(iPageNo);
        		
        		if (iTotCnt > ((iPageNo - 1 )*iUnitSelRowNo))
        		{
        			this.div_list.div_page.all["sta_page"+i].set_visible(true);
        			nCnt = i;			
        		}else
        		{
        			this.div_list.div_page.all["sta_page"+i].set_visible(false);
        		}
        	}
        	
        	this.fn_setButtonOrder(nCnt+1);
        }

        this.btn_next_onclick = function(obj,e)
        {
        	iStartPageNo=iStartPageNo+1;
        	
        	this.fn_SetPageNo(iStartPageNo);
        	this.fn_btnColorSet(0);//버튼색상설정	
        	objDivNm   = obj.parent.name;
        	var iValue = (iStartPageNo*iMaxPageNum) + 1;
        	
        	//호출되는 함수명 추가
        	if (!this.gfn_isNull(lsFuncNm))
        	{
        		this.all[lsFuncNm + "(" +  iValue + ")"];
        	} else
        	{
        		this.lookupFunc("fn_paging").call(iValue, objDivNm);
        	}
        }

        this.btn_previous_onclick = function(obj,e)
        {
        	iStartPageNo=iStartPageNo-1;
        	this.fn_SetPageNo(iStartPageNo);	
        	this.fn_btnColorSet(9);//버튼색상설정
        	objDivNm = obj.parent.name;
        	var iValue = ((iStartPageNo + 1)*iMaxPageNum);
        	
        	//호출되는 함수명 추가
        	if (!this.gfn_isNull(lsFuncNm))
        	{
        		this.all[lsFuncNm + "(" +  iValue + ")"];
        	} else
        	{
        		this.lookupFunc("fn_paging").call(iValue, objDivNm);
        	}	
        }

        this.btn_first_onclick = function(obj,e)
        {
        	iStartPageNo=0;
        	this.fn_SetPageNo(iStartPageNo);	
        	this.fn_btnColorSet(0);//버튼색상설정
        	objDivNm = obj.parent.name;
        	//호출되는 함수명 추가
        	if (!this.gfn_isNull(lsFuncNm))
        	{
        		this.all[lsFuncNm + "(" +  1 + ")"];
        	} else
        	{
        		this.lookupFunc("fn_paging").call(1, objDivNm);
        	}		

        }

        this.btn_end_onclick = function(obj,e)
        {
        	iStartPageNo = parseInt(iTotCnt / (iUnitSelRowNo * 5));
        	
            var iNam = iTotCnt % iUnitSelRowNo;//나머지

        	var iValue = parseInt((iTotCnt/iUnitSelRowNo)) % 5;

        	var jValue = parseInt((iTotCnt / iUnitSelRowNo)) + 1;	
        	var jTValue = parseInt(jValue % 5);//페이지 끝번호
        	
        	
        	
        	objDivNm = obj.parent.name;

        	if (iNam == 0)
        	{
        		iValue = iValue - 1;
        		jValue = jValue - 1;
        		//iStartPageNo = iStartPageNo -1;
        	}
        	
        	if (iValue == -1)
        	{
        		iValue = 9;
        	}

        	if (iNam == 0)
        	{
        		jTValue = parseInt(jValue % 5);//페이지 끝번호
        		
        		if (jTValue == 0)
        		{
        			iStartPageNo = iStartPageNo-1;
        			this.fn_SetPageNo(iStartPageNo);			
        		} else
        		{
        			this.fn_SetPageNo(iStartPageNo);			
        		}
        	} else
        	{
        		this.fn_SetPageNo(iStartPageNo);	
        	}
        	
        	this.fn_btnColorSet(iValue);//버튼색상설정

        
        	//호출되는 함수명 추가
        	if (!this.gfn_isNull(lsFuncNm))
        	{
        		this.all[lsFuncNm + "(" +  jValue + ")"];
        	} else
        	{
        		this.lookupFunc("fn_paging").call(jValue,objDivNm);
        	}	
        }

        //업무화면에서 호출
        this.fn_pageSet = function(sTotalRowCnt,sPageSize,sdivPage,sNowPage,sCalFuncNm,sTotCntDst,sDivPageNum)
        {
        	iTotCnt = sTotalRowCnt;
        	
        	//호출되는 함수명 추가
        	if (!this.gfn_isNull(sCalFuncNm))
        	{
        		lsFuncNm = sCalFuncNm;
        	}
        		
        	if (iTotCnt > 0)
        	{
        		//this.all[sdivPage].visible = true; //2015
        		this.div_list.div_page.set_visible(true);
        		 
        	} else
        	{

        		if (this.gfn_isNull(sTotalRowCnt))
        		{	
        			
        		}	
        		//this.all[sdivPage].visible = false; //2015
        		this.div_list.div_page.set_visible(false);
        	}
        	
        	iUnitSelRowNo = sPageSize;
        	
        	//현재페이지가 첫 페이지 일경우
        	if (sNowPage == 1)
        	{
        		iStartPageNo=0;	
        	}
        	
        	this.fn_SetPageNo(iStartPageNo);	
        		
        	//현재페이지가 첫 페이지 일경우
        	if (sNowPage == 1)
        	{
        		this.fn_btnColorSet(0);
        	}		
        }

        //버튼색상설정
        this.fn_btnColorSet = function(sNo)
        {	
            
        	for (var iLoop=0;iLoop < 5; iLoop++)
        	{
        		if (iLoop == sNo)
        		{
        			this.div_list.div_page.all["sta_page"+iLoop].set_cssclass("sta_WF_PageS");
        		} else
        		{
        			this.div_list.div_page.all["sta_page"+iLoop].set_cssclass("sta_WF_Page");		
        		}
        	}
        	
        	this.fn_setButtonPos();//버튼위치조정	
        }

        /***********************************************************************************************
         * 함수명     : this.fn_setButtonPos()
         * 설명       : 버튼위치 세팅
         * parameter   : void
         * return      : void
        ***********************************************************************************************/ 
        this.fn_setButtonPos = function() {
        	
        	var iPos = 5;
        	
        	for (var iLoop=0;iLoop < 5; iLoop++)
        	{
        		if (this.div_list.div_page.all["sta_page"+iLoop].visible == false)
        		{
        			iPos = iLoop;
        			break;
        		} 
        	}
        	
        	this.fn_setButtonOrder(iPos);
        }

        /***********************************************************************************************
         * 함수명     : fn_setButtonOrder()
         * 설명       : 버튼위치 정렬
         * parameter   : iPos - 안보이는 버튼 시작위치
         * return      : void
        ***********************************************************************************************/ 
        this.fn_setButtonOrder = function(iPos) 
        {
        	if (iPos == 5)
        	{
        		this.div_list.div_page.btn_first.set_left(0);
        		this.div_list.div_page.btn_previous.set_left(18);
        		this.div_list.div_page.btn_next.set_left(306);
        		this.div_list.div_page.btn_end.set_left(324);
        		
        		this.div_list.div_page.sta_page0.set_left(38);
        		this.div_list.div_page.sta_page1.set_left(92);
        		this.div_list.div_page.sta_page2.set_left(146);
        		this.div_list.div_page.sta_page3.set_left(200);
        		this.div_list.div_page.sta_page4.set_left(254);		
        		
        	} else if (iPos == 1)
        	{
        		this.div_list.div_page.btn_first.set_left(102);//18
        		this.div_list.div_page.btn_previous.set_left(120);//26
        		
        		this.div_list.div_page.sta_page0.set_left(146);
        		
        	} else if (iPos == 2)
        	{
        		this.div_list.div_page.btn_first.set_left(75);
        		this.div_list.div_page.btn_previous.set_left(93);
        		
        		this.div_list.div_page.sta_page0.set_left(119);
        		this.div_list.div_page.sta_page1.set_left(173);
        		
        	} else if (iPos == 3)
        	{
        		this.div_list.div_page.btn_first.set_left(48);
        		this.div_list.div_page.btn_previous.set_left(66);
        		
        		this.div_list.div_page.sta_page0.set_left(92);
        		this.div_list.div_page.sta_page1.set_left(146);
        		this.div_list.div_page.sta_page2.set_left(200);
        					
        	} else if (iPos == 4)
        	{
        		this.div_list.div_page.btn_first.set_left(21);
        		this.div_list.div_page.btn_previous.set_left(39);
        		
        		this.div_list.div_page.sta_page0.set_left(65);
        		this.div_list.div_page.sta_page1.set_left(119);
        		this.div_list.div_page.sta_page2.set_left(173);
        		this.div_list.div_page.sta_page3.set_left(227);
        	}		
        	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_list.btn_searchControl.addEventHandler("onclick", this.div_list_btn_searchControl_onclick, this);
            this.div_list.div_page.btn_next.addEventHandler("onclick", this.btn_next_onclick, this);
            this.div_list.div_page.btn_previous.addEventHandler("onclick", this.btn_previous_onclick, this);
            this.div_list.div_page.btn_end.addEventHandler("onclick", this.btn_end_onclick, this);
            this.div_list.div_page.btn_first.addEventHandler("onclick", this.btn_first_onclick, this);
            this.div_list.div_page.sta_page4.addEventHandler("onclick", this.btn_page_onclick, this);
            this.div_list.div_page.sta_page3.addEventHandler("onclick", this.btn_page_onclick, this);
            this.div_list.div_page.sta_page2.addEventHandler("onclick", this.btn_page_onclick, this);
            this.div_list.div_page.sta_page1.addEventHandler("onclick", this.btn_page_onclick, this);
            this.div_list.div_page.sta_page0.addEventHandler("onclick", this.btn_page_onclick, this);
            this.div_search.btn_search.addEventHandler("onclick", this.div_search_btn_search_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_8610.xfdl");

       
    };
}
)();
