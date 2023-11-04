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
                this.set_name("VAN_DS_SC_0350");
                this.set_titletext("배송예정 결과 조회");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pageVO", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dataM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_PLASH_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_PLASH_STSNM\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"NA_DVY_PLASH_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_PLA_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_AM\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DDLY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_CTR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"DVYAA_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CMENO\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"R_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RES_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RES_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"ISRESEND\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "265", null, this);
            obj.set_taborder("42");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "94", "15", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "91", "21", null, null, this.div_search);
            obj.set_taborder("0");
            obj.set_text("발주처");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_dvy_pla_dt_fr", "absolute", "571", "62", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("27");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static131", "absolute", "672", "62", "10", "21", null, null, this.div_search);
            obj.set_taborder("28");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_dvy_pla_dt_to", "absolute", "683", "62", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("29");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static03", "absolute", "462", "62", "92", "21", null, null, this.div_search);
            obj.set_taborder("44");
            obj.set_text("배송요청일");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_orpl_na_trpl_c", "absolute", "94", "10", "120", "21", null, null, this.div_search);
            obj.set_taborder("46");
            obj.set_cssclass("WF_Essential");
            obj.set_maxlength("13");
            obj.set_inputtype("number");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_orpl_na_trpl_n", "absolute", "217", "10", "200", "21", null, null, this.div_search);
            obj.set_taborder("47");
            obj.set_cssclass("WF_Essential");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            obj.set_enable("false");
            obj.style.setStyleValue("background", "disabled", "#ffffffff");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup05", "absolute", "420", "10", "21", "21", null, null, this.div_search);
            obj.set_taborder("48");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15", "62", "91", "21", null, null, this.div_search);
            obj.set_taborder("49");
            obj.set_text("배송구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "122", "83", "103", "10", null, null, this.div_search);
            obj.set_taborder("51");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_ddly_yn", "absolute", "94", "62", "180", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_ddly_yn_innerdataset = new Dataset("rdo_ddly_yn_innerdataset", this.div_search.rdo_ddly_yn);
            rdo_ddly_yn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">일반</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">직송</Col></Row></Rows>");
            obj.set_innerdataset(rdo_ddly_yn_innerdataset);
            obj.set_taborder("50");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_visible("true");
            obj.style.set_font("9 Gulim");
            obj.set_index("0");
            obj = new Static("Static01", "absolute", "15", "36", "79", "21", null, null, this.div_search);
            obj.set_taborder("52");
            obj.set_text("결과상태");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_res_code", "absolute", "94", "36", "98", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_res_code_innerdataset = new Dataset("cbo_res_code_innerdataset", this.div_search.cbo_res_code);
            cbo_res_code_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">에러</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">인수거절</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">정상</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">전송중</Col></Row></Rows>");
            obj.set_innerdataset(cbo_res_code_innerdataset);
            obj.set_taborder("53");
            obj.set_displaynulltext("전체");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("");
            obj = new Static("Static04", "absolute", "462", "36", "118", "21", null, null, this.div_search);
            obj.set_taborder("54");
            obj.set_text("배송예정서번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_na_dvy_plash_slpno", "absolute", "571", "36", "120", "21", null, null, this.div_search);
            obj.set_taborder("55");
            obj.set_maxlength("16");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "462", "10", "102", "21", null, null, this.div_search);
            obj.set_taborder("56");
            obj.set_text("발주번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_odr_slpno", "absolute", "571", "10", "120", "21", null, null, this.div_search);
            obj.set_taborder("57");
            obj.set_inputtype("number");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "122", null, null, "15", "1", this);
            obj.set_taborder("36");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_divResize", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd", "absolute", "0", "21", null, null, "0", "32", this.div_list);
            obj.set_taborder("12");
            obj.set_binddataset("ds_dataM");
            obj.set_autosizingtype("none");
            obj.set_extendsizetype("row");
            obj.set_cellsizebandtype("body");
            obj.set_cellsizingtype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"97\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"74\"/><Column size=\"400\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"재전송\"/><Cell col=\"2\" text=\"발주처\"/><Cell col=\"3\" text=\"발주처명\"/><Cell col=\"4\" text=\"공급처코드\"/><Cell col=\"5\" text=\"공급처명\"/><Cell col=\"6\" text=\"배송예정서번호\"/><Cell col=\"7\" text=\"XML EDI전문번호\"/><Cell col=\"8\" text=\"배송요청일\"/><Cell col=\"9\" text=\"배송금액\"/><Cell col=\"10\" text=\"배송부가세\"/><Cell col=\"11\" text=\"발주번호\"/><Cell col=\"12\" text=\"발주일자\"/><Cell col=\"13\" text=\"최종변경일\"/><Cell col=\"14\" text=\"최종변경자\"/><Cell col=\"15\" text=\"배송구분\"/><Cell col=\"16\" text=\"배송예정서상태\"/><Cell col=\"17\" text=\"응답결과\"/><Cell col=\"18\" text=\" 응답내용\"/></Band><Band id=\"body\"><Cell style=\"color:EXPR(PRC_YN=='E'?'red':black');color2:EXPR(PRC_YN=='E'?'red':black');selectcolor:EXPR(PRC_YN=='E'?'red':black');\" text=\"bind:RN\" autosizerow=\"limitmin\" autosizecol=\"none\"/><Cell col=\"1\" displaytype=\"expr:ISRESEND == 'Y' ? 'button':'none'\" edittype=\"expr:ISRESEND == 'Y' ? 'button':'none'\" style=\"color:EXPR(PRC_YN=='R'?' black':'red');color2:EXPR(PRC_YN=='R'?' black':'red');selectcolor:EXPR(PRC_YN=='R'?' black':'red');\" expr=\"expr:ISRESEND == 'Y' ? '재전송':''\"/><Cell col=\"2\" style=\"color:EXPR(PRC_YN=='E'?'red':black');color2:EXPR(PRC_YN=='E'?'red':black');selectcolor:EXPR(PRC_YN=='E'?'red':black');\" text=\"bind:ODRPL_NA_TRPL_C\"/><Cell col=\"3\" style=\"color:EXPR(PRC_YN=='E'?'red':black');color2:EXPR(PRC_YN=='E'?'red':black');selectcolor:EXPR(PRC_YN=='E'?'red':black');\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:ODRPL_NA_TRPL_N\"/><Cell col=\"4\" style=\"color:EXPR(PRC_YN=='E'?'red':black');color2:EXPR(PRC_YN=='E'?'red':black');selectcolor:EXPR(PRC_YN=='E'?'red':black');\" text=\"bind:SPYPL_NA_TRPL_C\"/><Cell col=\"5\" style=\"color:EXPR(PRC_YN=='E'?'red':black');color2:EXPR(PRC_YN=='E'?'red':black');selectcolor:EXPR(PRC_YN=='E'?'red':black');\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:SPYPL_NA_TRPL_N\"/><Cell col=\"6\" style=\"color:EXPR(PRC_YN=='E'?'red':black');color2:EXPR(PRC_YN=='E'?'red':black');selectcolor:EXPR(PRC_YN=='E'?'red':black');\" text=\"bind:NA_DVY_PLASH_SLPNO\"/><Cell col=\"7\" style=\"color:EXPR(PRC_YN=='E'?'red':black');color2:EXPR(PRC_YN=='E'?'red':black');selectcolor:EXPR(PRC_YN=='E'?'red':black');\" text=\"bind:NA_DVY_PLASH_SLPNO\"/><Cell col=\"8\" displaytype=\"date\" style=\"color:EXPR(PRC_YN=='E'?'red':black');color2:EXPR(PRC_YN=='E'?'red':black');selectcolor:EXPR(PRC_YN=='E'?'red':black');\" text=\"bind:DVY_PLA_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"none\" style=\"align:right;color:EXPR(PRC_YN=='E'?'red':black');color2:EXPR(PRC_YN=='E'?'red':black');selectcolor:EXPR(PRC_YN=='E'?'red':black');\" text=\"bind:DVY_AM\" mask=\"#,##0\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"none\" style=\"align:right;color:EXPR(PRC_YN=='E'?'red':black');color2:EXPR(PRC_YN=='E'?'red':black');selectcolor:EXPR(PRC_YN=='E'?'red':black');\" text=\"bind:DVY_VAT\" mask=\"#,##0\"/><Cell col=\"11\" style=\"color:EXPR(PRC_YN=='E'?'red':black');color2:EXPR(PRC_YN=='E'?'red':black');selectcolor:EXPR(PRC_YN=='E'?'red':black');\" text=\"bind:ODR_SLPNO\"/><Cell col=\"12\" displaytype=\"date\" style=\"color:EXPR(PRC_YN=='E'?'red':black');color2:EXPR(PRC_YN=='E'?'red':black');selectcolor:EXPR(PRC_YN=='E'?'red':black');\" text=\"bind:ODR_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"13\" displaytype=\"normal\" text=\"bind:LSCHG_DTM\"/><Cell col=\"14\" text=\"bind:LS_CMENO\"/><Cell col=\"15\" style=\"selectcolor: ;\" text=\"bind:DDLY_YN\" expr=\"expr:DDLY_YN == '1' ? '직송' : '일반'\"/><Cell col=\"16\" style=\"color:EXPR(PRC_YN=='R'?' black':'red');color2:EXPR(PRC_YN=='R'?' black':'red');selectcolor:EXPR(PRC_YN=='R'?' black':'red');\" text=\"bind:DVY_PLASH_STSNM\"/><Cell col=\"17\" style=\"color:EXPR(PRC_YN=='R'?' black':'red');color2:EXPR(PRC_YN=='R'?' black':'red');selectcolor:EXPR(PRC_YN=='R'?' black':'red');\" text=\"bind:RES_CODE\"/><Cell col=\"18\" style=\"color:EXPR(PRC_YN=='R'?' black':'red');color2:EXPR(PRC_YN=='R'?' black':'red');selectcolor:EXPR(PRC_YN=='R'?' black':'red');\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:RES_DESC\" tooltiptext=\"bind:RES_DESC\" autosizerow=\"default\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_page", "absolute", "29.57%", null, "338", "32", null, "0", this.div_list);
            obj.set_taborder("14");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "733", "21", "55", "8", null, null, this);
            obj.set_taborder("21");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "788", "0", "15", "491", null, null, this);
            obj.set_taborder("22");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "122", "30", "103", "10", null, null, this);
            obj.set_taborder("31");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "122", "61", "103", "5", null, null, this);
            obj.set_taborder("32");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "36", "408", null, this);
            obj.set_taborder("41");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "122", "87", "103", "5", null, null, this);
            obj.set_taborder("43");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel00", "absolute", null, "0", "41", "21", "141", null, this);
            obj.set_taborder("44");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel01", "absolute", null, "0", "61", "21", "77", null, this);
            obj.set_taborder("45");
            obj.set_text("엑셀 상세");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("all_send", "absolute", null, "0", "64", "21", "184", null, this);
            obj.set_taborder("46");
            obj.set_text("일괄재전송");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 94, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("36");
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
            		p.set_titletext("배송예정 결과 조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0350.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0350.xfdl", function() {
        //include "lib::comLib.xjs";

        /* form load */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);

        	 var searchParam =
        	{
        		form: this,
        		param:[

        		{
        			edit: this.div_search.cal_dvy_pla_dt_fr,
        			fnc: 'btn_search_onclick'
        		},
        		{
        			edit: this.div_search.cal_dvy_pla_dt_to,
        			fnc: 'btn_search_onclick'
        		}
        		]
        	};
        	this.addEventEnterSearch(searchParam);
        }

        /* Form Init*/
        this.form_init = function(obj,e)
        {

        }

        //공통코드 데이터셋 onload후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	// trace("fn_commonAfterOnload");
        }

        /* 페이지 로딩후 실행부분 */
        this.fn_afterFormOnload = function()
        {
        	//그리드 nodata
        	this.div_list.grd.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));

        	var today = this.gfn_today('yyyyMMdd');

        	this.div_search.cal_dvy_pla_dt_fr.set_value(this.gfn_addDate(today, -1));
        	this.div_search.cal_dvy_pla_dt_to.set_value(this.gfn_addDate(today, +7));
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
        	if(this.gfn_isNull(this.div_search.cal_dvy_pla_dt_fr.value)){
        		alert("조회기간(부터)를 확인하세요.");
        		return false;
            }

            if(this.gfn_isNull(this.div_search.cal_dvy_pla_dt_to.value)){
        		alert("조회기간(까지)를 확인하세요.");
        		return false;
            }

        	if(this.gfn_getDiffDay(this.div_search.cal_dvy_pla_dt_fr.value,this.div_search.cal_dvy_pla_dt_to.value) < 0){
        		//조회 시작일과 종료일을 다시 확인해 주세요
        		this.gfn_getMessage("alert", "validation.message.fromDate.toDate.reConfirm");
        		return false;
        	}else{
        		if(this.gfn_getDiffDay(this.div_search.cal_dvy_pla_dt_fr.value,this.div_search.cal_dvy_pla_dt_to.value) > 31){
        			//기간을 31일 이내로 선택해 주세요
        			this.gfn_getMessage("alert", "validation.message.selectDateIn31Day");
        			return false;
        		}
        	}

        	return true;
        }

        /* search */
        this.btn_search_onclick = function(obj,e)
        {
        	this.ds_dataM.clearData();
        	if(this.fn_validationCheck())
        		this.fn_paging(1);// 처음조회시 1페이지를 조회한다.
        }

        this.fn_search = function()
        {
        	//권한사업장 코드
        	var trplC = this.getTrplCode();

        	var dvy_pla_dt_fr = this.gfn_nullToEmpty(this.div_search.cal_dvy_pla_dt_fr.value); //조회시작일
        	var dvy_pla_dt_to = this.gfn_nullToEmpty(this.div_search.cal_dvy_pla_dt_to.value); //조회종료일
        	var odrpl_na_trpl_c = this.gfn_nullToEmpty(this.div_search.edt_orpl_na_trpl_c.value); //발주처
        	var res_code = this.gfn_nullToEmpty(this.div_search.cbo_res_code.value);//상태
        	var ddly_yn = this.gfn_nullToEmpty(this.div_search.rdo_ddly_yn.value);//배송상태
        	var na_dvy_plash_slpno = this.gfn_nullToEmpty(this.div_search.edt_na_dvy_plash_slpno.value);//배송예정서번호
        	var odr_slpno = this.gfn_nullToEmpty(this.div_search.edt_odr_slpno.value);//발주번호

        	var param = " dvy_pla_dt_fr="+dvy_pla_dt_fr+
        				" dvy_pla_dt_to="+dvy_pla_dt_to+
        				" odrpl_na_trpl_c="+odrpl_na_trpl_c+
        				" res_code="+res_code+
        				" ddly_yn="+ddly_yn+
        				" TRPL_C="+trplC+
        				" na_dvy_plash_slpno="+na_dvy_plash_slpno+
        				" odr_slpno="+odr_slpno;

        	// trace("##MASTER##PARAM##->"+param);

        	var sSvcID        = "retrieveDeliveryResult";//통신아이디
        	var sURL          = "svc::rest/scm/delivery/retrieveDeliveryResult";// 호출할 서버 페이지 주소
        	var sInDatasets   = "ds_pageVO=ds_pageVO";//보내는데이터셋
        	var sOutDatasets  = "ds_dataM=ds_dataM ds_pageVO=ds_pageVO";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", ErrorMsg);
        		return;
        	} else {
        		if(svcID == "retrieveDeliveryResult"){
        			if(this.ds_dataM.rowcount > 0){
        				// 페이지 셋팅
        				var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        				var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");

        // 				trace("sTotal : " + sTotal);
        // 				trace("sPagesize : " + sPagesize);

        				this.div_list.div_page.fn_pageSet(sTotal, sPagesize,"grd,div_page",lsNowPage);
        			}else{
        				this.div_list.div_page.fn_pageSet(0, 0,"grd,div_page",lsNowPage);//페이징 설정
        			}
        		}

        		if(svcID == "reSendDeliveryNoticeOrder"){
        			this.fn_search();
        		}

        		if(svcID == "reSendAllDeliveryNoticeOrder"){
        			if(ErrorMsg == '0'){
        				alert("재전송 처리 할 건이 없습니다.");
        			}else{
        				alert(ErrorMsg + "건을 재전송 처리하였습니다.");
        			}
        		}
        	}
        }

        
        this.div_list_btn_divResize_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	// trace(" strId : " + strId + " strVal : " + strVal);
        	if(strId == "POPUP_TRNREL_ODRPL"){
        		var valueArr = strVal.split(",");
        		this.div_search.edt_orpl_na_trpl_c.set_value(valueArr[0]);
        		this.div_search.edt_orpl_na_trpl_n.set_value(valueArr[1]);
        	}
        }

        
        /*-----------------------------------------------------------------------------------------*/
        // 페이징처리
        /*-----------------------------------------------------------------------------------------*/
        this.fn_paging = function(vPageNum)
        {
        	this.ds_pageVO.clearData();
        	this.ds_dataM.clearData();     //Grid에 Binding된 Dataset명

        	this.ds_pageVO.addRow();

        	var vPageSize   = 30; 	//Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        	var vTotalCount = 1; 	//전체건수. 화면조회후 리턴받아 사용
         	this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
         	this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);

        	var argumentObj = "";

        	lsNowPage = vPageNum;//현재페이지 설정
        	this.fn_search();
        }

        this.div_list_onsize = function(obj,e)
        {
        	/* 페이지 숫자 위치 설정*/

        	//trace("div_list_onsize");
        	var nLeft = (e.cx/2)-(this.div_list.div_page.width/2);
        	this.div_list.div_page.set_left(nLeft);
        }

        this.btn_popup05_onclick = function(obj,e)
        {
        	var oArg = {form_id:"VAN_DS_SC_0300"};
        	var sOption = "autosize=true,title=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("POPUP_TRNREL_ODRPL","POPUP::POPUP_TRNREL_ODRPL.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.div_list_grd_oncellclick = function(obj,e)
        {
        	if(this.ds_dataM.getColumn(e.row, "ISRESEND") == "Y" && e.cell == 1) {

        		var SPYPL_NA_TRPL_C = this.ds_dataM.getColumn(e.row,"SPYPL_NA_TRPL_C");
        		var DVYAA_NA_TRPL_C = this.ds_dataM.getColumn(e.row,"DVYAA_NA_TRPL_C");
        		var NA_DVY_PLASH_SLPNO = this.ds_dataM.getColumn(e.row,"NA_DVY_PLASH_SLPNO");
        		var DVY_PLA_DT = this.ds_dataM.getColumn(e.row,"DVY_PLA_DT");

        		var param = " SPYPL_NA_TRPL_C="+SPYPL_NA_TRPL_C+
        					" DVYAA_NA_TRPL_C="+DVYAA_NA_TRPL_C+
        					" NA_DVY_PLASH_SLPNO="+NA_DVY_PLASH_SLPNO+
        					" DVY_PLA_DT="+DVY_PLA_DT;

        		// trace("##MASTER##PARAM##->"+param);

        		var sSvcID        = "reSendDeliveryNoticeOrder";//통신아이디
        		var sURL          = "svc::rest/scm/delivery/reSendDeliveryNoticeOrder";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회

        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);

        		return;
        	}
        	var spypl_na_trpl_c = this.ds_dataM.getColumn(e.row,"SPYPL_NA_TRPL_C");
        	var dvyaa_na_trpl_c = this.ds_dataM.getColumn(e.row,"DVYAA_NA_TRPL_C");
        	var na_dvy_plash_slpno = this.ds_dataM.getColumn(e.row,"NA_DVY_PLASH_SLPNO");
        	var dvy_pla_dt = this.ds_dataM.getColumn(e.row,"DVY_PLA_DT");
        	var ddly_yn = this.ds_dataM.getColumn(e.row,"DDLY_YN");
        	var cser_ctr_tpc = this.ds_dataM.getColumn(e.row,"CSER_CTR_TPC");

        	var oArg = {
        		Pspypl_na_trpl_c:spypl_na_trpl_c,
        		Pdvyaa_na_trpl_c:dvyaa_na_trpl_c,
        		Pna_dvy_plash_slpno:na_dvy_plash_slpno,
        		Pdvy_pla_dt:dvy_pla_dt,
        		Pddly_yn:ddly_yn,
        		Pcser_ctr_tpc:cser_ctr_tpc
        		};
        	// trace(oArg);
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("popId","SCM.DELIVERY::VAN_DS_SC_0350_P01.xfdl",oArg,sOption,sPopupCallBack);

        }

        this.div_search_edt_orpl_na_trpl_c_onkeydown = function(obj,e)
        {
        	if(e.keycode == '13'){
        		var trplO = this.gfn_nullToEmpty(this.div_search.edt_orpl_na_trpl_c.value);
        		if(this.gfn_length(trplO) < 6){
        			alert("발주처 코드["+trplO+"] 6자리 이상 입력해 주세요");
        			return false;
        		}

        		if(trplO.length == 6){
        			trplO = '8808983' + trplO;
        		}

        		var idx = "0";
        		var trplO = this.div_search.edt_orpl_na_trpl_c.value;
        		var trplC = this.getTrplCode();//권한사업장
        		var oArg = {form_id:"VAN_DS_SC_0350", trplC:trplC, idx:idx, auto:"1", trplO:trplO};
        		var sOption = "autosize=true,title=false";
        		var sPopupCallBack = "fn_popupAfter";
        		this.gfn_openPopup("POPUP_TRNREL_ODRPL","POPUP::POPUP_TRNREL_ODRPL.xfdl",oArg,sOption,sPopupCallBack);
        	}
        }

        this.div_search_edt_orpl_na_trpl_n_onkeydown = function(obj,e)
        {
        	if(e.keycode == "13"){
        		var trplON = this.div_search.edt_orpl_na_trpl_n.value;
        		if(this.gfn_length(trplON) < 4){
        			alert("발주처명["+trplON+"] 3자리 이상 입력해 주세요");
        			return false;
        		}

        		var idx = "1";
        		var trplON = this.div_search.edt_orpl_na_trpl_n.value;
        		var trplC = this.getTrplCode();//권한사업장
        		var oArg = {form_id:"VAN_DS_SC_0350", trplC:trplC, idx:idx, auto:"1", trplON:trplON};
        		var sOption = "autosize=true,title=false";
        		var sPopupCallBack = "fn_popupAfter";
        		this.gfn_openPopup("POPUP_TRNREL_ODRPL","POPUP::POPUP_TRNREL_ODRPL.xfdl",oArg,sOption,sPopupCallBack);
        	}
        }

        this.btn_excel00_onclick = function(obj,e)
        {
        	//권한사업장 코드
        	var trplC = this.getTrplCode();

        	var dvy_pla_dt_fr = this.gfn_nullToEmpty(this.div_search.cal_dvy_pla_dt_fr.value); //조회시작일
        	var dvy_pla_dt_to = this.gfn_nullToEmpty(this.div_search.cal_dvy_pla_dt_to.value); //조회종료일
        	var odrpl_na_trpl_c = this.gfn_nullToEmpty(this.div_search.edt_orpl_na_trpl_c.value); //발주처
        	var res_code = this.gfn_nullToEmpty(this.div_search.cbo_res_code.value);//상태
        	var ddly_yn = this.gfn_nullToEmpty(this.div_search.rdo_ddly_yn.value);//배송상태

        	var param = "dvy_pla_dt_fr="+dvy_pla_dt_fr+
        					"&dvy_pla_dt_to="+dvy_pla_dt_to+
        					"&odrpl_na_trpl_c="+odrpl_na_trpl_c+
        					"&res_code="+res_code+
        					"&ddly_yn="+ddly_yn+
        					"&TRPL_C=" + trplC;

        	// trace("##MASTER##PARAM##->"+param);

        		//var strDownUrl = application.gv_server_url+"/rest/excel/scm/delivery/downloadExcelDeliveryResult?"+param;
        		excelDownHandler(application.gv_server_url+"rest/excel/scm/delivery/downloadExcelDeliveryResult?"+param, this);
        		//var wbs_dw     = this.gfn_createWebBorwserComponent(this);
        	//	wbs_dw.set_url(strDownUrl);
        }

        this.btn_excel10_onclick = function(obj,e)
        {
        	//권한사업장 코드
        	var trplC = this.getTrplCode();

        	var dvy_pla_dt_fr = this.gfn_nullToEmpty(this.div_search.cal_dvy_pla_dt_fr.value); //조회시작일
        	var dvy_pla_dt_to = this.gfn_nullToEmpty(this.div_search.cal_dvy_pla_dt_to.value); //조회종료일
        	var odrpl_na_trpl_c = this.gfn_nullToEmpty(this.div_search.edt_orpl_na_trpl_c.value); //발주처
        	var res_code = this.gfn_nullToEmpty(this.div_search.cbo_res_code.value);//상태
        	var ddly_yn = this.gfn_nullToEmpty(this.div_search.rdo_ddly_yn.value);//배송상태

        	var param = "dvy_pla_dt_fr="+dvy_pla_dt_fr+
        					"&dvy_pla_dt_to="+dvy_pla_dt_to+
        					"&odrpl_na_trpl_c="+odrpl_na_trpl_c+
        					"&res_code="+res_code+
        					"&ddly_yn="+ddly_yn+
        					"&TRPL_C=" + trplC;

        	// trace("##MASTER##PARAM##->"+param);

        		//var strDownUrl = application.gv_server_url+"/rest/excel/scm/delivery/downloadExcelDeliveryResult?"+param;
        		excelDownHandler(application.gv_server_url+"rest/excel/scm/delivery/downloadExcelDeliveryDetailResult?"+param, this);
        		//var wbs_dw     = this.gfn_createWebBorwserComponent(this);
        	//	wbs_dw.set_url(strDownUrl);
        }

        this.fn_search_onclick = function (obj,e)
        {
        	if(e.keycode == "13"){
        		this.ds_dataM.clearData();
        		this.fn_search();
        	}
        }

        this.all_send_onclick = function(obj,e)
        {
        	var trplC = this.getTrplCode();
        	var dvy_pla_dt_fr = this.gfn_nullToEmpty(this.div_search.cal_dvy_pla_dt_fr.value); //조회시작일
        	var dvy_pla_dt_to = this.gfn_nullToEmpty(this.div_search.cal_dvy_pla_dt_to.value); //조회종료일

        	var param = "dvy_pla_dt_fr="+dvy_pla_dt_fr+
        				" dvy_pla_dt_to="+dvy_pla_dt_to+
        				" TRPL_C=" + trplC;

        	var sSvcID        = "reSendAllDeliveryNoticeOrder";//통신아이디
        	var sURL          = "svc::rest/scm/delivery/reSendAllDeliveryNoticeOrder";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.form_init, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.edt_orpl_na_trpl_c.addEventHandler("onkeydown", this.div_search_edt_orpl_na_trpl_c_onkeydown, this);
            this.div_search.edt_orpl_na_trpl_n.addEventHandler("onkeydown", this.div_search_edt_orpl_na_trpl_n_onkeydown, this);
            this.div_search.btn_popup05.addEventHandler("onclick", this.btn_popup05_onclick, this);
            this.div_search.cbo_res_code.addEventHandler("onitemchanged", this.div_search_cbo_res_code_onitemchanged, this);
            this.div_search.edt_na_dvy_plash_slpno.addEventHandler("onkeydown", this.fn_search_onclick, this);
            this.div_search.edt_odr_slpno.addEventHandler("onkeydown", this.fn_search_onclick, this);
            this.div_list.addEventHandler("onsize", this.div_list_onsize, this);
            this.div_list.btn_divResize.addEventHandler("onclick", this.div_list_btn_divResize_onclick, this);
            this.div_list.grd.addEventHandler("oncellclick", this.div_list_grd_oncellclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_excel00.addEventHandler("onclick", this.btn_excel00_onclick, this);
            this.btn_excel01.addEventHandler("onclick", this.btn_excel10_onclick, this);
            this.all_send.addEventHandler("onclick", this.all_send_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0350.xfdl");
        this.loadPreloadList();
       
    };
}
)();
