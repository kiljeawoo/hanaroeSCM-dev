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
                this.set_name("VAN_DS_SC_1320");
                this.set_titletext("탄력가격업체 거래관계 등록(R3)");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_master_data", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_TEAM_N\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_CTR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"SPY_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_TR_REL_AMNNO\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ROTS_FLEX_PR_APL_YN", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_MBCO_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ROTS_FLEX_PR_APL_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_detail_data", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_TEAM_N\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_CTR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_TPNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPY_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"SPY_TPNM\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_TR_REL_AMNNO\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_CSER_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_CSER_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_CSER_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_SPLR_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_SPLR_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_CSER_CTR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_SPY_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_MNGT_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_MNGT_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_MNGT_NA_TR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"T1_CSER_TR_REL_AMNNO\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"AMNNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cser_ctr_tpc", this);
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

            obj = new Dataset("ds_spy_tpc", this);
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


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "69", "15", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_00", "absolute", "15", "10", "106", "21", null, null, this.div_search);
            obj.set_taborder("50");
            obj.set_text("수요처(농협)");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_02", "absolute", "15", "36", "106", "21", null, null, this.div_search);
            obj.set_taborder("51");
            obj.set_text("거래관계");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_store_chk00", "absolute", "121", "10", "147", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_store_chk00_innerdataset = new Dataset("rdo_store_chk00_innerdataset", this.div_search.rdo_store_chk00);
            rdo_store_chk00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">수요처</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">지역</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_chk00_innerdataset);
            obj.set_taborder("54");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Static("Static00", "absolute", "257", "36", "10", "21", null, null, this.div_search);
            obj.set_taborder("55");
            obj.set_text("-");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data00", "absolute", "121", "36", "131", "21", null, null, this.div_search);
            obj.set_taborder("56");
            obj.set_inputtype("number");
            obj.set_cssclass("WF_Essential");
            obj.set_value("농협하나로유통");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data01", "absolute", "268", "36", "150", "21", null, null, this.div_search);
            obj.set_taborder("57");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_local_code", "absolute", "268", "10", "103", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_local_code_innerdataset = new Dataset("cbo_local_code_innerdataset", this.div_search.cbo_local_code);
            cbo_local_code_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">[1100]서울</Col></Row><Row><Col id=\"codecolumn\">21</Col><Col id=\"datacolumn\">[2100]부산</Col></Row><Row><Col id=\"codecolumn\">22</Col><Col id=\"datacolumn\">[2200]인천</Col></Row><Row><Col id=\"codecolumn\">23</Col><Col id=\"datacolumn\">[2300]대구</Col></Row><Row><Col id=\"codecolumn\">24</Col><Col id=\"datacolumn\">[2400]광주</Col></Row><Row><Col id=\"codecolumn\">25</Col><Col id=\"datacolumn\">[2500]대전</Col></Row><Row><Col id=\"codecolumn\">26</Col><Col id=\"datacolumn\">[2600]울산</Col></Row><Row><Col id=\"codecolumn\">31</Col><Col id=\"datacolumn\">[3100]경기</Col></Row><Row><Col id=\"codecolumn\">32</Col><Col id=\"datacolumn\">[3200]강원</Col></Row><Row><Col id=\"codecolumn\">33</Col><Col id=\"datacolumn\">[3300]충북</Col></Row><Row><Col id=\"codecolumn\">34</Col><Col id=\"datacolumn\">[3400]충남</Col></Row><Row><Col id=\"codecolumn\">35</Col><Col id=\"datacolumn\">[3500]전북</Col></Row><Row><Col id=\"codecolumn\">36</Col><Col id=\"datacolumn\">[3600]전남</Col></Row><Row><Col id=\"codecolumn\">37</Col><Col id=\"datacolumn\">[3700]경북</Col></Row><Row><Col id=\"codecolumn\">38</Col><Col id=\"datacolumn\">[3800]경남</Col></Row><Row><Col id=\"codecolumn\">39</Col><Col id=\"datacolumn\">[3900]제주</Col></Row><Row><Col id=\"codecolumn\">40</Col><Col id=\"datacolumn\">[4000]세종</Col></Row><Row><Col id=\"codecolumn\">99</Col><Col id=\"datacolumn\">[9900]기타대</Col></Row></Rows>");
            obj.set_innerdataset(cbo_local_code_innerdataset);
            obj.set_taborder("61");
            obj.set_value("11");
            obj.set_text("[1100]서울");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_visible("false");
            obj.set_index("0");
            obj = new Combo("cbo_local_code01", "absolute", "268", "10", "74", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_local_code01_innerdataset = new Dataset("cbo_local_code01_innerdataset", this.div_search.cbo_local_code01);
            cbo_local_code01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">명칭</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">코드</Col></Row></Rows>");
            obj.set_innerdataset(cbo_local_code01_innerdataset);
            obj.set_taborder("62");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_text("명칭");
            obj = new Edit("edt_bzp_text00", "absolute", "345", "10", "175", "21", null, null, this.div_search);
            obj.set_taborder("63");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "270", "31", "103", "5", null, null, this.div_search);
            obj.set_taborder("64");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_sep_val", "absolute", "686", "37", "60", "21", null, null, this.div_search);
            obj.set_taborder("65");
            obj.set_text("0");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_cser_c", "absolute", "547", "10", "67", "21", null, null, this.div_search);
            obj.set_taborder("66");
            obj.set_visible("false");
            obj.style.set_border("1 solid #808080ff");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_cser_team", "absolute", "619", "10", "59", "21", null, null, this.div_search);
            obj.set_taborder("67");
            obj.set_visible("false");
            obj.style.set_border("1 solid #808080ff");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_cser_amnno", "absolute", "683", "10", "59", "21", null, null, this.div_search);
            obj.set_taborder("68");
            obj.set_visible("false");
            obj.style.set_border("1 solid #808080ff");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "97", null, null, "15", "0", this);
            obj.set_taborder("4");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_main", "absolute", "0", "41", "400", null, null, "0", this.div_list);
            obj.set_taborder("26");
            obj.set_binddataset("ds_master_data");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"45\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"260\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"선택\"/><Cell col=\"2\" text=\"수요처코드\"/><Cell col=\"3\" text=\"팀코드\"/><Cell col=\"4\" text=\"수요처명\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECK_YN\"/><Cell col=\"2\" text=\"bind:CSER_NA_TRPL_C\"/><Cell col=\"3\" text=\"bind:CSER_NA_TEAM_C\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:CLNTNM\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_toggle00", "absolute", "363", "0", null, "12", "362", null, this.div_list);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_detail", "absolute", "418", "41", null, null, "0", "0", this.div_list);
            obj.set_taborder("28");
            obj.set_binddataset("ds_detail_data");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"45\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"260\"/><Column size=\"60\"/><Column size=\"45\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"130\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"선택\"/><Cell col=\"2\" text=\"현 공급처\"/><Cell col=\"3\" text=\"수요처~공급업체 계약\"/><Cell col=\"4\" text=\"팀\"/><Cell col=\"5\" text=\"변경수요처\"/><Cell col=\"6\" text=\"팀\"/><Cell col=\"7\" text=\"삭제\"/><Cell col=\"8\" text=\"계약유형\"/><Cell col=\"9\" text=\"공급유형\"/><Cell col=\"10\" text=\"공급처코드\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECK_YN\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:CLNTNM\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:CSER_NA_TRPL_N\"/><Cell col=\"4\" text=\"bind:CSER_NA_TEAM_N\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:UPDATE_CSER_NA_TRPL_N\"/><Cell col=\"6\" text=\"bind:UPDATE_CSER_NA_TEAM_C\"/><Cell col=\"7\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:DELETE_YN\"/><Cell col=\"8\" text=\"bind:UPDATE_CSER_CTR_TPC\"/><Cell col=\"9\" text=\"bind:UPDATE_SPY_TPC\"/><Cell col=\"10\" text=\"bind:NA_TRPL_C\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", "0", "103", "15", null, null, this.div_list);
            obj.set_taborder("29");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("sta_pagename00", "absolute", "0", "15", "500", "21", null, null, this.div_list);
            obj.set_taborder("30");
            obj.set_text("주관사업장 [주관사업장이 농협하나로유통인 3자 계통 거래관계 생성]");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "36", "103", "5", null, null, this.div_list);
            obj.set_taborder("31");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_help", "absolute", null, "0", "53", "21", "118", null, this);
            obj.set_taborder("5");
            obj.set_text("도움말");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save00", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear00", "absolute", null, "0", "53", "21", "173", null, this);
            obj.set_taborder("7");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup01", "absolute", null, "0", "113", "21", "228", null, this);
            obj.set_taborder("8");
            obj.set_text("요청거래관계검색");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 69, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 788, 317, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_scrollbars("none");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1320");
            		p.set_titletext("탄력가격업체 거래관계 등록(R3)");

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
        this.addIncludeScript("VAN_DS_SC_1320.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1320.xfdl", function() {
        //include "lib::comLib.xjs";

        var TRPL_C = application.gv_glnCode;		//권한사업장
        //var TRPL_C = '2900004700013';				//권한사업장 (엘지)
        var TRPL_N = application.gv_companyName;	//로그인 회사명

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        
        this.fn_afterFormOnload = function() //onload
        {
        	var param = [
         		{code:"CSER_CTR_TPC", dsName:"ds_cser_ctr_tpc", selecttype:"A"}, 	// 0.계약유형
         		{code:"SPY_TPC", dsName:"ds_spy_tpc", selecttype:"A"} 				// 1.공급유형
         	];
        	this.gfn_setCommonCode(param);
        	
        	if(application.gv_mbcoType != "1"){
        		obj.alert('본사만 거래관계를 맺을 수 있습니다.');
        		return;
        	}
        	
        	this.addEventSingleCheckbox(this.div_list.grd_main); 	// 하나의 체크박스만 체크 가능(그리드)
        	this.div_list.grd_detail.afterFnc = this.update_chk;	// 마스터 테이블 체크 박스 클릭 시
        	this.gridCheckboxInit([this.div_list.grd_detail]); 		// 체크박스 이벤트 등록
        	this.div_search.edt_data01.set_value(TRPL_N);			// 거래관계
        	
        	this.btnDisable(this.btn_save00);
        	
        	//그리드클릭 이벤트 등록
        	this.div_list.grd_main.addEventHandler("oncellclick", this.grd_afterFnc, this);
        	this.div_list.grd_detail.addEventHandler('oncellclick',this.delete_chk,this);
        	
        	// 처음 조회 시 계통탄력가격적용여부에 따라 조회 가능 여부 판단
        	this.initflex();
        }

        //오른쪽 사업장 체크박스 클릭 시 변경 사업장 입력
        this.update_chk = function(obj,result,row)
        {
        	var mindex = 0;
        	for(var i=0; i<obj.ds_master_data.rowcount; i++){
        		if(obj.ds_master_data.getColumn(i,"CHECK_YN") == 1){
        			mindex = i;
        			break;
        		}
        	}
        	
        	var cs_trpl_c = obj.ds_master_data.getColumn(mindex,"CSER_NA_TRPL_C"); 		// 왼쪽 그리드 수요거래처코드
         	var clntnm = obj.ds_master_data.getColumn(mindex,"CLNTNM"); 				// 왼쪽 그리드 수요거래처명
         	var cs_team_c = obj.ds_master_data.getColumn(mindex,"CSER_NA_TEAM_C"); 		// 왼쪽 그리드 수요거래처팀코드
         	var sp_trpl_c = obj.ds_master_data.getColumn(mindex,"SPLR_NA_TRPL_C");
         	var sp_team_c = obj.ds_master_data.getColumn(mindex,"SPLR_NA_TEAM_C");
         	var cser_ctr_tpc = obj.ds_master_data.getColumn(mindex,"CSER_CTR_TPC"); 	// 왼쪽 그리드 계약유형
         	var spy_tpc = obj.ds_master_data.getColumn(mindex,"SPY_TPC"); 				// 왼쪽 그리드 공급유형
        	var mn_trpl_c = obj.ds_master_data.getColumn(mindex,"MNGT_NA_TRPL_C");
        	var mn_team_c = obj.ds_master_data.getColumn(mindex,"MNGT_NA_TEAM_C");
        	var tr_tpc = obj.ds_master_data.getColumn(mindex,"MNGT_NA_TR_TPC");
        	var wrs_lclc = obj.ds_master_data.getColumn(mindex,"NA_WRS_LCLC");
        	var wrs_mclc = obj.ds_master_data.getColumn(mindex,"NA_WRS_MCLC");
        	var cser_amnno = obj.ds_master_data.getColumn(mindex,"CSER_TR_REL_AMNNO");
        	
        	var cser_c = obj.ds_detail_data.getColumn(row,"CSER_NA_TRPL_C");			// 오른쪽 그리드 수요처코드
        	
        	if(result == true){
        		if(cs_trpl_c == cser_c){
        			obj.alert('현재 수요처와 변경 수요처가 동일합니다.');
        			obj.ds_detail_data.setColumn(row,"CHECK_YN","0");
        			return;
        		}
        		var cser_ctr_n = ""; 
        		var spy_tpc_n = "";
        		for(var y=0;y<obj.ds_cser_ctr_tpc.rowcount;y++){
        			if(obj.ds_cser_ctr_tpc.getColumn(y,"SIMP_C") == cser_ctr_tpc){
        				cser_ctr_n = obj.ds_cser_ctr_tpc.getColumn(y,"SIMP_CNM");
        			}
        		}
        		for(var m=0;m<obj.ds_spy_tpc.rowcount;m++){
        			if(obj.ds_spy_tpc.getColumn(m,"SIMP_C") == spy_tpc){
        				spy_tpc_n = obj.ds_spy_tpc.getColumn(m,"SIMP_CNM");
        			}
        		}
        		obj.ds_detail_data.setColumn(row,"UPDATE_CSER_NA_TRPL_C",cs_trpl_c);
        		obj.ds_detail_data.setColumn(row,"UPDATE_CSER_NA_TRPL_N",clntnm);
        		obj.ds_detail_data.setColumn(row,"UPDATE_CSER_NA_TEAM_C",cs_team_c);
        		obj.ds_detail_data.setColumn(row,"UPDATE_SPLR_NA_TRPL_C",sp_trpl_c);
        		obj.ds_detail_data.setColumn(row,"UPDATE_SPLR_NA_TEAM_C",sp_team_c);
        		obj.ds_detail_data.setColumn(row,"UPDATE_CSER_CTR_TPC",cser_ctr_tpc);
        		obj.ds_detail_data.setColumn(row,"UPDATE_SPY_TPC",spy_tpc);
        		obj.ds_detail_data.setColumn(row,"UPDATE_MNGT_NA_TRPL_C",mn_trpl_c);
        		obj.ds_detail_data.setColumn(row,"UPDATE_MNGT_NA_TEAM_C",mn_team_c);
        		obj.ds_detail_data.setColumn(row,"UPDATE_MNGT_NA_TR_TPC",tr_tpc);
        		obj.ds_detail_data.setColumn(row,"UPDATE_NA_WRS_LCLC",wrs_lclc);
        		obj.ds_detail_data.setColumn(row,"UPDATE_NA_WRS_MCLC",wrs_mclc);
        		obj.ds_detail_data.setColumn(row,"T1_CSER_TR_REL_AMNNO",cser_amnno);
        	}else{
        		obj.ds_detail_data.setColumn(row,"UPDATE_CSER_NA_TRPL_C","");
        		obj.ds_detail_data.setColumn(row,"UPDATE_CSER_NA_TRPL_N","");
        		obj.ds_detail_data.setColumn(row,"UPDATE_CSER_NA_TEAM_C","");
        		obj.ds_detail_data.setColumn(row,"UPDATE_SPLR_NA_TRPL_C","");
        		obj.ds_detail_data.setColumn(row,"UPDATE_SPLR_NA_TEAM_C","");
        		obj.ds_detail_data.setColumn(row,"UPDATE_CSER_CTR_TPC","");
        		obj.ds_detail_data.setColumn(row,"UPDATE_SPY_TPC","");
        		obj.ds_detail_data.setColumn(row,"UPDATE_MNGT_NA_TRPL_C","");
        		obj.ds_detail_data.setColumn(row,"UPDATE_MNGT_NA_TEAM_C","");
        		obj.ds_detail_data.setColumn(row,"UPDATE_MNGT_NA_TR_TPC","");
        		obj.ds_detail_data.setColumn(row,"UPDATE_NA_WRS_LCLC","");
        		obj.ds_detail_data.setColumn(row,"UPDATE_NA_WRS_MCLC","");
        		obj.ds_detail_data.setColumn(row,"T1_CSER_TR_REL_AMNNO","");
        	}
        }

        // 삭제 클릭
        this.delete_chk = function(obj,e)
        {
        	if (e.cell == 7) {
        		var row = e.row;
        		
        		if (this.ds_detail_data.getColumn(row, "DELETE_YN") == "0") {
        			if (this.gfn_nullToEmpty(this.ds_detail_data.getColumn(row, "UPDATE_CSER_NA_TRPL_N")) != "") {
        				this.alert('변경수요처가 존재할 경우 삭제할 수 없습니다.');
        				return;
        			}
        			if (this.gfn_nullToEmpty(this.ds_detail_data.getColumn(row, "CSER_NA_TRPL_N")) == "") {
        				this.alert('삭제할 거래관계가 없습니다. 거래관계를 확인하십시요.');
        				return;
        			}
        			
        			for (var i = 0; i < this.ds_master_data.rowcount; i++) {
        				if (this.ds_master_data.getColumn(i, "CHECK_YN") == "1") { // 왼쪽 그리드 체크 index
        					this.ds_detail_data.setColumn(row, "DELETE_YN", "1"); // 삭제 선택
        					
        					this.ds_detail_data.setColumn(row, "UPDATE_CSER_NA_TRPL_C", this.ds_master_data.getColumn(i, "CSER_NA_TRPL_C"));	// 수요거래처코드
        					
        					this.ds_detail_data.setColumn(row, "UPDATE_CSER_NA_TEAM_C", this.ds_master_data.getColumn(i, "CSER_NA_TEAM_C"));	// 수요거래처팀코드
        					this.ds_detail_data.setColumn(row, "UPDATE_SPLR_NA_TRPL_C", this.ds_master_data.getColumn(i, "SPLR_NA_TRPL_C"));
        					this.ds_detail_data.setColumn(row, "UPDATE_SPLR_NA_TEAM_C", this.ds_master_data.getColumn(i, "SPLR_NA_TEAM_C"));
        					
        					this.ds_detail_data.setColumn(row, "UPDATE_MNGT_NA_TRPL_C", this.ds_master_data.getColumn(i, "MNGT_NA_TRPL_C"));
        					this.ds_detail_data.setColumn(row, "UPDATE_MNGT_NA_TEAM_C", this.ds_master_data.getColumn(i, "MNGT_NA_TEAM_C"));
        					this.ds_detail_data.setColumn(row, "UPDATE_MNGT_NA_TR_TPC", this.ds_master_data.getColumn(i, "MNGT_NA_TR_TPC"));
        					this.ds_detail_data.setColumn(row, "UPDATE_NA_WRS_LCLC",    this.ds_master_data.getColumn(i, "NA_WRS_LCLC"));
        					this.ds_detail_data.setColumn(row, "UPDATE_NA_WRS_MCLC",    this.ds_master_data.getColumn(i, "NA_WRS_MCLC"));
        					this.ds_detail_data.setColumn(row, "T1_CSER_TR_REL_AMNNO",  this.ds_master_data.getColumn(i, "CSER_TR_REL_AMNNO"));
        					
        					break;
        				}
        			}
        			
        		} else {
        			this.ds_detail_data.setColumn(row, "DELETE_YN", "0"); // 삭제 해제
        			
        			this.ds_detail_data.setColumn(row, "UPDATE_CSER_NA_TRPL_C", "");
        			
        			this.ds_detail_data.setColumn(row, "UPDATE_CSER_NA_TEAM_C", "");
        			this.ds_detail_data.setColumn(row, "UPDATE_SPLR_NA_TRPL_C", "");
        			this.ds_detail_data.setColumn(row, "UPDATE_SPLR_NA_TEAM_C", "");
        			
        			this.ds_detail_data.setColumn(row, "UPDATE_MNGT_NA_TRPL_C", "");
        			this.ds_detail_data.setColumn(row, "UPDATE_MNGT_NA_TEAM_C", "");
        			this.ds_detail_data.setColumn(row, "UPDATE_MNGT_NA_TR_TPC", "");
        			this.ds_detail_data.setColumn(row, "UPDATE_NA_WRS_LCLC",    "");
        			this.ds_detail_data.setColumn(row, "UPDATE_NA_WRS_MCLC",    "");
        			this.ds_detail_data.setColumn(row, "T1_CSER_TR_REL_AMNNO",  "");
        		}
        	}
        }

        //조회 버튼
        this.btn_search00_onclick = function(obj,e)
        {
        	if(this.ds_ROTS_FLEX_PR_APL_YN.getColumn(0,"ROTS_FLEX_PR_APL_YN") != "1"){
        		this.alert('탄력가격협력업체가 아닐경우 조회 되지않습니다.');
        		return;
        	}
        	if(this.div_search.rdo_store_chk00.value == "1"){
        		if((this.div_search.cbo_local_code01.value == "1") && (this.gfn_nullToEmpty(this.div_search.edt_bzp_text00.value).length < 2)){
        			this.gfn_getMessage('alert','msg.van_ds_sc_1320.view.cser.length');
        			return;
        		}
        		if((this.div_search.cbo_local_code01.value == "2") && (this.gfn_nullToEmpty(this.div_search.edt_bzp_text00.value).length < 8)){
        			this.gfn_getMessage('alert','msg.van_ds_sc_1320.view.code.length');
        			return;
        		}
        	}
        	this.ds_master_data.clearData();
        	this.ds_detail_data.clearData();
        	this.flexTrades(2);
        }

        //그리드 클릭 시 조회
        this.grd_afterFnc = function(obj,e)
        {
        	var mds = this.ds_master_data;
        	
        	if (e.cell == 1) {
        		if (mds.getColumn(mds.rowposition,"CHECK_YN") == "1") {
        			this.div_search.sta_cser_c.set_text(mds.getColumn(mds.rowposition,"CSER_NA_TRPL_C"));
        			this.div_search.sta_cser_team.set_text(mds.getColumn(mds.rowposition,"CSER_NA_TEAM_C"));
        			this.div_search.sta_cser_amnno.set_text(mds.getColumn(mds.rowposition,"CSER_TR_REL_AMNNO"));
        			this.flexTrades(3);
        		} else {
        			this.ds_detail_data.clearData();
        		}
        	}
        }

        //저장 버튼
        this.btn_save00_onclick = function(obj,e)
        {
        	if(this.ds_detail_data.rowcount == 0){
        		this.gfn_getMessage('alert','validation.message.no.parameter');
        		return;
        	}
        	var chkcount = 0;
        	for(var i=0;i<this.ds_detail_data.rowcount;i++){
        		if(this.ds_detail_data.getColumn(i,"CHECK_YN") == 1 || this.ds_detail_data.getColumn(i,"DELETE_YN") == 1){
        			chkcount += 1;
        		}
        	}
        	
        	if(chkcount == 0){
        		this.alert('저장 할 데이터가 없습니다.');
        		return;
        	}
        	
        	var bOk = application.confirm(this.gfn_getTextMessage('msg.van_ds_sc_1310.view.count.msg')+chkcount+this.gfn_getTextMessage('msg.van_ds_sc_1310.view.count.msgf'));
        	if(bOk == true){
        		this.flexTrades(4);
        	}
        }

        //계통탄력가격적용여부 조회
        this.initflex = function()
        {
        	var json = this.getParamJson(this.components);
        	json.TRPL_C = TRPL_C;
        	var params = this.getParamJsonToString(json);
        	
        	var sSvcID        = "p_initflex";//통신아이디
        	var sURL          = "svc::rest/pds/partner/Trade/getFlexTrades";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_ROTS_FLEX_PR_APL_YN=ds_ROTS_FLEX_PR_APL_YN";
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType 	  = "U"; // U:저장/삭제, S:조회	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        //마스터, 디테일 저장,수정
        this.flexTrades = function(sepVal)
        {
        	var json = this.getParamJson(this.components);
        	json.separator = sepVal;
        	json.TRPL_C = TRPL_C;
        	json.GUBUN = this.div_search.rdo_store_chk00.value;
        	json.local_code = this.div_search.cbo_local_code.value;
        	json.na_gubun = this.div_search.cbo_local_code01.value;
        	json.schtext = this.gfn_nullToEmpty(this.div_search.edt_bzp_text00.value);
        	json.rowp = this.ds_master_data.rowposition;
        	json.cser_c = this.gfn_nullToEmpty(this.div_search.sta_cser_c.text);
        	json.cser_team = this.gfn_nullToEmpty(this.div_search.sta_cser_team.text);
        	json.cser_amnno = this.gfn_nullToEmpty(this.div_search.sta_cser_amnno.text);
        	var params = this.getParamJsonToString(json);
        	
        	var sSvcID        = "";//통신아이디
        	var sURL          = "svc::rest/pds/partner/Trade/retrieveFlexTrades";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "";
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType 	  = "S"; // U:저장/삭제, S:조회
        	if(this.div_search.sta_sep_val.text == "1"){
        		//마스터 데이터 조회(왼쪽 그리드)
        		if(sepVal == "2"){
        			var storechk = this.div_search.edt_data01.value;
        			if(this.gfn_nullToEmpty(storechk).length < 1){
        				this.alert('거래관계를 위한 본지사 정보가 없습니다. \n'+ 
        				'본지사 정보 설정을 위해 재 로그인 하시기 바랍니다.');
        				return;
        			}
        			sSvcID = "p_masterSearch"
        			sOutDatasets  = "ds_master_data=ds_master_data";
        		//디테일 데이터 조회(오른쪽 그리드)
        		}else if(sepVal == "3"){
        			sSvcID = "p_detailSearch"
        			sInDatasets   = "ds_master_data=ds_master_data:A";
        			sOutDatasets  = "ds_detail_data=ds_detail_data";
        		//디테일 데이터 수정
        		}else if(sepVal == "4"){
        			sSvcID = "p_detailUpdate"
        			sInDatasets = "ds_detail_data=ds_detail_data:A";
        		}
        		
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        	}
        }

        // 조회 성공/실패 여부 시 처리구간
        this.fn_callback = function(svcID,nCD,sMSG)
        {
        	if(nCD < 0 && nCD > -999){
        		this.gfn_getMessage("alert", sMSG);
        		return;
        	}else{
        		if(svcID == "p_initflex")
        		{
        			//계통탄력가격적용 거래처일 경우 본 화면 이용불가 처리
        			if(this.ds_ROTS_FLEX_PR_APL_YN.getColumn(0,"ROTS_FLEX_PR_APL_YN") != '1'){
        				this.alert('계통탄력가격적용 공급업체가 아닐 경우 탄력가격업체거래관계 화면을 사용하여 3자 거래관계를 등재하실 수 없습니다.\n\n' +
        					  '하나로마트거래관계 화면을 이용하여 주시기 바랍니다.');
        				return;
        			}else{
        				this.div_search.sta_sep_val.set_text("1");
        			}
        		}
        		if(svcID =="p_masterSearch"){
        			if(this.div_list.grd_main.rowcount < 1){
        				this.div_list.grd_detail.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        			}
        		}
        		if(svcID == "p_detailSearch")
        		{
        			if(this.div_list.grd_detail.rowcount < 1){
        				this.div_list.grd_detail.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        				this.gfn_getMessage('alert',this.gfn_getTextMessage('result.message.search.no.exist.data'));
        			}
        		}
        		if(svcID == "p_detailUpdate" && nCD == 1){
        			this.alert('주관사업장이 농협하나로마트분사인 수요처와 공급업체의 거래관계를 저장하였습니다.');
        		}else if(svcID == "p_detailUpdate" && nCD == -999){
        			this.alert(sMSG);
        		}
        	}
        }

        //수요처 라디오 버튼 클릭 시 지역,수요처 visible 유무
        this.div_search_rdo_store_chk00_onitemchanged = function(obj,e)
        {
        	var rdochk = this.div_search.rdo_store_chk00.value;
        	if(rdochk == 1){	//수요처 일때
        		this.div_search.cbo_local_code.set_visible(false);
        		this.div_search.cbo_local_code01.set_visible(true);
        		this.div_search.edt_bzp_text00.set_visible(true);
        		
        	}else if(rdochk == 2){	//지역 일때
        		this.div_search.cbo_local_code.set_visible(true);
        		this.div_search.cbo_local_code01.set_visible(false);
        		this.div_search.edt_bzp_text00.set_visible(false);
        	}
        }

        //저장버튼
        this.btn_help_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"U", dsArg:this.Dataset00};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("popId","PDS.PARTNER::VAN_DS_SC_1321.xfdl",oArg,sOption,sPopupCallBack);	
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	trace('팝업완료');
        }

        //조회 조건 숨김 여부 이벤트
        this.div_list_btn_toggle00_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        
        this.btn_clear00_onclick = function(obj,e)
        {
        	this.reload();
        }

        this.btn_popup01_onclick = function(obj,e)
        {
        	var pop_trpl = TRPL_C;
        	var pop_trplnm = TRPL_N;
        	
        	var oArg = {paramMode:"A", dsArg:this.ds_master_data, trplc:pop_trpl, trplnm:pop_trplnm};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "req_popupAfter";
        	this.gfn_openPopup("popId","PDS.PARTNER::VAN_DS_SC_1322.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.div_search_edt_bzp_text00_onkeydown = function(obj,e)
        {
        	if (e.keycode == "13") {
        		this.btn_search00.click(); // 조회
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search00.addEventHandler("onclick", this.btn_search00_onclick, this);
            this.div_search.rdo_store_chk00.addEventHandler("onitemchanged", this.div_search_rdo_store_chk00_onitemchanged, this);
            this.div_search.edt_bzp_text00.addEventHandler("onkeydown", this.div_search_edt_bzp_text00_onkeydown, this);
            this.div_list.btn_toggle00.addEventHandler("onclick", this.div_list_btn_toggle00_onclick, this);
            this.btn_help.addEventHandler("onclick", this.btn_help_onclick, this);
            this.btn_save00.addEventHandler("onclick", this.btn_save00_onclick, this);
            this.btn_clear00.addEventHandler("onclick", this.btn_clear00_onclick, this);
            this.btn_popup01.addEventHandler("onclick", this.btn_popup01_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1320.xfdl");
        this.loadPreloadList();
       
    };
}
)();
