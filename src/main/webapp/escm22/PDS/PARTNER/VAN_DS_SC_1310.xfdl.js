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
                this.set_name("VAN_DS_SC_1310");
                this.set_titletext("하나로마트 거래관계 등록(R2)");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_RQR_NA_TRPL_C", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_MBCO_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_master_data", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHECK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CRQRTRPL\" type=\"STRING\" size=\"256\"/><Column id=\"CRQRTEAM\" type=\"STRING\" size=\"256\"/><Column id=\"CRQRMNENO\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_TEAM_N\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_CTR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_CTR_TPC_N\" type=\"STRING\" size=\"256\"/><Column id=\"SPY_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"SPY_TPC_N\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR\" type=\"STRING\" size=\"256\"/><Column id=\"SPLRN\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RSP_C_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"EDI_IF_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_SPLR_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_SPLR_NA_TRPL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_TR_REL_AMNNO\" type=\"STRING\" size=\"256\"/><Column id=\"AMNNO\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_excel", this);
            obj._setContents("<ColumnInfo><Column id=\"CHECK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CRQRTRPL\" type=\"STRING\" size=\"256\"/><Column id=\"CRQRTEAM\" type=\"STRING\" size=\"256\"/><Column id=\"CRQRMNENO\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_TEAM_N\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_CTR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_CTR_TPC_N\" type=\"STRING\" size=\"256\"/><Column id=\"SPY_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"SPY_TPC_N\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR\" type=\"STRING\" size=\"256\"/><Column id=\"SPLRN\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RSP_C_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"EDI_IF_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_SPLR_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_SPLR_NA_TRPL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_TR_REL_AMNNO\" type=\"STRING\" size=\"256\"/><Column id=\"AMNNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save00", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "69", "15", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WFSA_Searchbg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            obj = new Static("sta_00", "absolute", "15", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("32");
            obj.set_text("거래관계");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_02", "absolute", "15", "36", "79", "21", null, null, this.div_search);
            obj.set_taborder("33");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_01", "absolute", "442", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("34");
            obj.set_text("지역코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_03", "absolute", "442", "38", "79", "21", null, null, this.div_search);
            obj.set_taborder("35");
            obj.set_text("수요처");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_store_chk00", "absolute", "94", "36", "130", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_store_chk00_innerdataset = new Dataset("rdo_store_chk00_innerdataset", this.div_search.rdo_store_chk00);
            rdo_store_chk00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">거래처</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_chk00_innerdataset);
            obj.set_taborder("36");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Static("Static00", "absolute", "250", "10", "10", "21", null, null, this.div_search);
            obj.set_taborder("40");
            obj.set_text("-");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data00", "absolute", "94", "10", "150", "21", null, null, this.div_search);
            obj.set_taborder("41");
            obj.set_cssclass("WF_Essential");
            obj.set_value("마트상품부");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data01", "absolute", "262", "10", "150", "21", null, null, this.div_search);
            obj.set_taborder("42");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup00", "absolute", "765", "38", "21", "21", null, null, this.div_search);
            obj.set_taborder("43");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data02", "absolute", "521", "38", "110", "21", null, null, this.div_search);
            obj.set_taborder("44");
            obj.set_inputtype("number");
            obj.set_cssclass("WF_Essential");
            obj.set_maxlength("25");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data03", "absolute", "634", "38", "128", "21", null, null, this.div_search);
            obj.set_taborder("45");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_local_code00", "absolute", "521", "10", "110", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_local_code00_innerdataset = new Dataset("cbo_local_code00_innerdataset", this.div_search.cbo_local_code00);
            cbo_local_code00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">[1100]서울</Col></Row><Row><Col id=\"codecolumn\">21</Col><Col id=\"datacolumn\">[2100]부산</Col></Row><Row><Col id=\"codecolumn\">22</Col><Col id=\"datacolumn\">[2200]인천</Col></Row><Row><Col id=\"codecolumn\">23</Col><Col id=\"datacolumn\">[2300]대구</Col></Row><Row><Col id=\"codecolumn\">24</Col><Col id=\"datacolumn\">[2400]광주</Col></Row><Row><Col id=\"codecolumn\">25</Col><Col id=\"datacolumn\">[2500]대전</Col></Row><Row><Col id=\"codecolumn\">26</Col><Col id=\"datacolumn\">[2600]울산</Col></Row><Row><Col id=\"codecolumn\">31</Col><Col id=\"datacolumn\">[3100]경기</Col></Row><Row><Col id=\"codecolumn\">32</Col><Col id=\"datacolumn\">[3200]강원</Col></Row><Row><Col id=\"codecolumn\">33</Col><Col id=\"datacolumn\">[3300]충북</Col></Row><Row><Col id=\"codecolumn\">34</Col><Col id=\"datacolumn\">[3400]충남</Col></Row><Row><Col id=\"codecolumn\">35</Col><Col id=\"datacolumn\">[3500]전북</Col></Row><Row><Col id=\"codecolumn\">36</Col><Col id=\"datacolumn\">[3600]전남</Col></Row><Row><Col id=\"codecolumn\">37</Col><Col id=\"datacolumn\">[3700]경북</Col></Row><Row><Col id=\"codecolumn\">38</Col><Col id=\"datacolumn\">[3800]경남</Col></Row><Row><Col id=\"codecolumn\">39</Col><Col id=\"datacolumn\">[3900]제주</Col></Row><Row><Col id=\"codecolumn\">40</Col><Col id=\"datacolumn\">[4000]세종</Col></Row><Row><Col id=\"codecolumn\">99</Col><Col id=\"datacolumn\">[9900]기타대</Col></Row></Rows>");
            obj.set_innerdataset(cbo_local_code00_innerdataset);
            obj.set_taborder("47");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_text("전체");
            obj.set_index("0");
            obj = new Static("sta_search_data", "absolute", null, "10", "21", "21", "43", null, this.div_search);
            obj.set_taborder("49");
            obj.set_text("0");
            obj.set_visible("false");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "261", "57", "103", "10", null, null, this.div_search);
            obj.set_taborder("50");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "245", "31", "103", "5", null, null, this.div_search);
            obj.set_taborder("51");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_RQR_NA_TRPL_C", "absolute", "237", "36", "175", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("52");
            obj.set_innerdataset("@ds_RQR_NA_TRPL_C");
            obj.set_datacolumn("CLNTNM");
            obj.set_codecolumn("NA_TRPL_C");
            obj = new Static("Static08", "absolute", "412", "0", "30", "67", null, null, this.div_search);
            obj.set_taborder("53");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_ten", "absolute", "80.79%", "10", null, "21", "13.74%", null, this.div_search);
            obj.set_taborder("54");
            obj.set_value("0");
            obj.set_visible("false");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_search_cc", "absolute", null, "10", "29", "21", "67", null, this.div_search);
            obj.set_taborder("55");
            obj.set_text("0");
            obj.set_enable("false");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_cser_team", "absolute", null, "10", "29", "21", "11", null, this.div_search);
            obj.set_taborder("56");
            obj.set_enable("false");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_flex_val", "absolute", null, "10", "21", "21", "11", null, this.div_search);
            obj.set_taborder("57");
            obj.set_text("0");
            obj.set_enable("false");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "97", null, null, "15", "0", this);
            obj.set_taborder("5");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_detail00", "absolute", "430", "28", null, null, "-12", "13", this.div_list);
            obj.set_taborder("30");
            obj.set_binddataset("ds_excel");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"220\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"220\"/><Column size=\"92\"/><Column size=\"220\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"마트분사 ~ 수요처 계약\"/><Cell col=\"2\" text=\"수요처코드\"/><Cell col=\"3\" text=\"수요처 팀\"/><Cell col=\"4\" text=\"계약유형\"/><Cell col=\"5\" text=\"공급유형\"/><Cell col=\"6\" text=\"수요처 ~ 공급업체 계약\"/><Cell col=\"7\" text=\"변경일\"/><Cell col=\"8\" text=\"변경공급처\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:CLNTNM\"/><Cell col=\"2\" text=\"bind:CSER_NA_TRPL_C\"/><Cell col=\"3\" text=\"bind:CSER_NA_TEAM_N\"/><Cell col=\"4\" text=\"bind:CSER_CTR_TPC_N\"/><Cell col=\"5\" text=\"bind:SPY_TPC_N\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:SPLRN\"/><Cell col=\"7\" text=\"bind:LSCHG_DTM\" mask=\"####-##-##\"/><Cell col=\"8\" text=\"bind:UPDATE_SPLR_NA_TRPL_C\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_main", "absolute", "0", "41", "400", null, null, "0", this.div_list);
            obj.set_taborder("23");
            obj.set_binddataset("ds_RQR_NA_TRPL_C");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"240\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"선택\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"거래처코드\"/><Cell col=\"3\" text=\"거래처명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECK_YN\"/><Cell col=\"1\" text=\"bind:NA_MBCO_DSC\"/><Cell col=\"2\" text=\"bind:NA_TRPL_C\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:CLNTNM\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_toggle00", "absolute", "363", "0", null, "12", "362", null, this.div_list);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_detail", "absolute", "418", "41", null, null, "0", "0", this.div_list);
            obj.set_taborder("25");
            obj.set_binddataset("ds_master_data");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"45\"/><Column size=\"220\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"220\"/><Column size=\"92\"/><Column size=\"220\"/><Column size=\"45\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"마트분사 ~ 수요처 계약\"/><Cell col=\"3\" text=\"수요처코드\"/><Cell col=\"4\" text=\"수요처 팀\"/><Cell col=\"5\" text=\"계약유형\"/><Cell col=\"6\" text=\"공급유형\"/><Cell col=\"7\" text=\"수요처 ~ 공급업체 계약\"/><Cell col=\"8\" text=\"변경일\"/><Cell col=\"9\" text=\"변경공급처\"/><Cell col=\"10\" displaytype=\"normal\" edittype=\"none\" text=\"삭제\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECK_YN\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:CLNTNM\"/><Cell col=\"3\" text=\"bind:CSER_NA_TRPL_C\"/><Cell col=\"4\" text=\"bind:CSER_NA_TEAM_N\"/><Cell col=\"5\" text=\"bind:CSER_CTR_TPC_N\"/><Cell col=\"6\" text=\"bind:SPY_TPC_N\"/><Cell col=\"7\" style=\"align:left;\" text=\"bind:SPLRN\"/><Cell col=\"8\" text=\"bind:LSCHG_DTM\" mask=\"####-##-##\"/><Cell col=\"9\" text=\"bind:UPDATE_SPLR_NA_TRPL_C\"/><Cell col=\"10\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:DELETE_YN\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("sta_pagename00", "absolute", "0", "15", "500", "21", null, null, this.div_list);
            obj.set_taborder("26");
            obj.set_text("주관사업장 [주관사업장이 마트상품부인 3자 계통 거래관계 생성]");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "5", "0", "103", "15", null, null, this.div_list);
            obj.set_taborder("27");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "5", "36", "103", "5", null, null, this.div_list);
            obj.set_taborder("28");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_excel", "absolute", null, "14", "41", "21", "3", null, this.div_list);
            obj.set_taborder("29");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", null, "15", "400", "21", "50", null, this.div_list);
            obj.set_taborder("32");
            obj.set_text("※ 동일 수요처로 거래관계 등록 및 삭제는 1일 1회만 가능합니다.");
            obj.style.set_color("#0000ffff");
            obj.style.set_align("right middle");
            obj.style.set_font("bold 9 Gulim");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_clear00", "absolute", null, "0", "53", "21", "233", null, this);
            obj.set_taborder("6");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup01", "absolute", null, "0", "113", "21", "118", null, this);
            obj.set_taborder("7");
            obj.set_text("요청거래관계검색");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 69, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_cssclass("div_WFSA_Searchbg");
            		p.set_visible("true");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 788, 317, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_scrollbars("none");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1310");
            		p.set_titletext("하나로마트 거래관계 등록(R2)");

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
        this.addIncludeScript("VAN_DS_SC_1310.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1310.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        var TRPL_C = application.gv_glnCode; 			//로그인 사업장코드
        var TRPL_NM = application.gv_companyName; 		//로그인 사업장명

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        };

        this.fn_afterFormOnload = function() //onload
        {
        	this.div_search.edt_data01.set_value(TRPL_NM); // 거래관계입력

        	//this.addEventSingleCheckbox(this.div_list.grd_main); 	// 하나의 체크박스만 체크 가능(그리드)
        	this.div_list.grd_detail.afterFnc = this.update_chk; 	// 클릭 시 이벤트
        	this.div_list.grd_detail.addEventHandler('oncellclick',this.delete_chk,this);	// 삭제(체크박스) 이벤트 등록

        	this.btnDisable(this.btn_save00);

        	//탄력업체 시 저장 버튼 사용 못함
        	this.initflex();
        	if (this.div_search.sta_flex_val.text == "0") {
        		this.btn_save00.set_enable(false);
        	}
        	////////////////////////////
         	if (this.div_search.edt_ten.value == "0") {
        		return;
        	}
        	this.search(); 		//권한사업장 조회
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
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType, true);
        }

        this.div_list_grd_detail_oncellclick = function(obj,e)
        {
        	var chkyn = true;
        	if (this.ds_master_data.getColumn(this.ds_master_data.rowposition,"CHECK_YN")==0) {
        		chkyn = false;
        	}
        	if (e.cell == 1) {
        		this.update_chk(this,chkyn,this.ds_master_data.rowposition);
        	}
        }

        //오른쪽 사업장 체크박스 클릭 시 변경 사업장 입력
        this.update_chk = function(obj,result,row)
        {

        	var chkIndex = obj.getCheckIndex(); //왼쪽 그리드 체크 index

        	var na_trpl_c = obj.ds_RQR_NA_TRPL_C.getColumn(chkIndex,"NA_TRPL_C"); 	// 왼쪽 그리드에서 선택한 거래처코드
        	var clntnm = obj.ds_RQR_NA_TRPL_C.getColumn(chkIndex,"CLNTNM"); 		// 왼쪽 그리드에서 선택한 거래처명
        	var mna_trpl_c = obj.ds_master_data.getColumn(row,"SPLR");				// 오른쪽 그리드에서 선택한 거래처코드
        	var mclntnm = obj.ds_master_data.getColumn(row,"SPLRN"); 		// 오른쪽 그리드에서 선택한 거래처명

        	var fs_date = this.ds_master_data.getColumn(row,"FSRG_DTM");
        	var ls_date = this.ds_master_data.getColumn(row,"LSCHG_DTM");
        	// 체크가 될때
        	if (result == true) {
        		if (chkIndex == undefined) {
        			obj.alert("변경할 공급처를 먼저 선택해주세요.");
        			obj.ds_master_data.setColumn(row,"CHECK_YN","0");
        			return;
        		}
        		if (obj.ds_master_data.getColumn(row,"DELETE_YN") == "1") {
        			obj.alert("삭제 체크를 먼저 풀어주세요.");
        			obj.ds_master_data.setColumn(row,"CHECK_YN","0");
        			return;
        		}
        		if (na_trpl_c == mna_trpl_c) {
        			obj.gfn_getMessage('alert','msg.van_ds_sc_1310.view.same.value');
        			obj.ds_master_data.setColumn(row,"CHECK_YN","0");
        			return;
        		}
        		obj.ds_master_data.setColumn(row,"UPDATE_SPLR_NA_TRPL_C",clntnm);		// 변경 할 거래처명을 입력한다.
        		obj.ds_master_data.setColumn(row,"UPDATE_SPLR_NA_TRPL_CODE",na_trpl_c);	// 변경 할 거래처코드를 입력한다.
        	// 체크가 풀릴때
        	} else if (result == false) {
        		obj.ds_master_data.setColumn(row,"UPDATE_SPLR_NA_TRPL_C","");
        		obj.ds_master_data.setColumn(row,"UPDATE_SPLR_NA_TRPL_CODE","");
        	}
        }

        this.delete_chk = function(obj,e)
        {
        	var dsMa = this.ds_master_data;
        	if (e.cell == 10) {
        		if (dsMa.getColumn(e.row,"DELETE_YN") == "0") {
        			if (this.gfn_nullToEmpty(dsMa.getColumn(e.row,"UPDATE_SPLR_NA_TRPL_C")) != "") {
        				this.alert('변경공급처가 존재할 경우 삭제할 수 없습니다.');
        				return;
        			}
        			if (this.gfn_nullToEmpty(dsMa.getColumn(e.row,"SPLRN")) == "") {
        				this.alert('삭제할 거래관계가 없습니다. 거래관계를 확인하십시요.');
        				return;
        			}
        			dsMa.setColumn(e.row,"DELETE_YN","1");
        		} else {
        			dsMa.setColumn(e.row,"DELETE_YN","0");
        		}
        	}
        }
        //조회
        this.search = function()
        {
        	var separator = this.div_search.sta_search_data.text;
        	var up_trpl = this.ds_RQR_NA_TRPL_C.getColumn(0,"NA_TRPL_C");
        	var params 		  = "separator="+separator
        						+" glncode="+application.gv_glnCode		//로그인 사업장
        						+" userId="+application.gv_userId
        						+" mbcoType="+application.gv_mbcoType	//로그인 정보
        						+" TRPL_C="+TRPL_C;
        	var sSvcID = "";
        	var sOutDatasets = "";
        	var sInDatasets   = "";//보내는데이터셋
        	var sURL          = "svc::rest/pds/partner/Trade/retrieveHanaroTrades";// 호출할 서버 페이지 주소
        	// 화면생성 후 자동 실행
        	if (separator == "0") {
        		sSvcID  = "p_onload";
        		sOutDatasets  = "ds_RQR_NA_TRPL_C=ds_RQR_NA_TRPL_C";
        		sURL = "svc::rest/pds/partner/Trade/retrievePopData";
        	// 조회버튼 클릭시 실행
        	} else if (separator == "1") {
        		if (this.ds_RQR_NA_TRPL_C.rowcount < 1) {
        			this.alert('본사거래처에 대한 거래관계를 먼저 검색하십시오.');
        			return;
        		}
        		var local_code = this.div_search.cbo_local_code00.value;
        		params = "separator="+separator
        				+" TRPL_C="+TRPL_C
        				+" UP_TRPL_C="+up_trpl
        				+" local_code="+local_code
        				+" ser_na="+this.div_search.cbo_RQR_NA_TRPL_C.value
        				+" cser_na="+this.gfn_nullToEmpty(this.div_search.edt_data02.value)
        				+" cser_team="+this.gfn_nullToEmpty(this.div_search.sta_cser_team.text)
        				+" rdo_gubun="+this.div_search.rdo_store_chk00.value;
        		sSvcID	= "p_search";
        		sOutDatasets  = "ds_master_data=ds_master_data";
        	// 저장 버튼 클릭 후 실행
        	} else if (separator == "2") {
        		sSvcID	= "p_insert";
        		sInDatasets = "ds_master_data=ds_master_data:A"
        	}

        
        	var sArgument     = params
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType 	  = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        // 전체와 거래처를 비교하여 코드를 가져온다.
        this.getCode = function()
        {
        	var trplCode = '';

        	if (this.div_search.cbo_RQR_NA_TRPL_C.value != undefined) {// onload 이벤트땐 undefined
        		//전체
        		if (this.div_search.rdo_store_chk00.value == "1") {
        			var trpl_co = this.ds_RQR_NA_TRPL_C.rowcount;
        			for (var i = 0; i<trpl_co; i++) {
        				if ((i+1) < trpl_co) {
        					trplCode += this.ds_RQR_NA_TRPL_C.getColumn(i,"NA_TRPL_C")+",";
        				} else if ((i+1) == trpl_co) {
        					trplCode += this.ds_RQR_NA_TRPL_C.getColumn(i,"NA_TRPL_C");
        				}
        			}
        		//한개
        		} else {
        			trplCode = this.div_search.cbo_RQR_NA_TRPL_C.value;
        		}
        	} else {
        		// 처음 로드 시 사업장을 가져오지 못하므로 기본 로그인 사업장을 가져온다.
        		trplCode = TRPL_C;
        	}
        	return trplCode;
        }

        //master 그리드 체크 후 변경공급처 적용
        this.chkCbox = function()
        {
        	if (fGetObj(multiFrmD.cbxdel,currow).checked) {
        		this.alert('삭제 체크하신 거래관계입니다. 삭제 체크를 먼저 해지하십시요.');
        		obj.checked = false;
        		return;
        	}
        }

        //조회버튼 클릭
        this.btn_search00_onclick = function(obj,e)
        {
        	this.div_search.sta_search_data.set_text("1"); //구분코드
        	if (this.div_search.edt_data02.value == "8808983000015") {
        		this.alert("수요처는 주관사업장 및 본사거래처와 동일할 수 없습니다.\n"
        				  +" [주관-본사-수요처][8808983000015 - "+this.div_search.cbo_RQR_NA_TRPL_C.value+" - "+this.div_search.edt_data02.value+"]");
        		return;
        	}
        	this.search();
        }

        this.fn_callback = function(svcID,nCD,sMSG)
        {
        	if (nCD < 0 && nCD > -999) {
        		this.gfn_getMessage("alert", sMSG);
        		return;
        	} else {
        		if (svcID == "p_initflex" && nCD > 0) {
        			//계통탄력가격적용 거래처일 경우 본 화면 이용불가 처리
        			if (this.ds_ROTS_FLEX_PR_APL_YN.getColumn(0,"ROTS_FLEX_PR_APL_YN") == '1') {
        				this.alert('계통탄력가격적용 공급업체는 하나로마트거래관계\n'+
        						   '화면을 사용하여 3자 거래관계를 등재하실 수 없습니다.\n\n'+
        						   '탄력가격업체거래관계 화면을 이용하여 주시기 바랍니다.\n\n'+
        						   '단, 농협하나로마트분사 3자 거래관계 조회 기능은 제공됩니다.');
        				this.div_search.sta_flex_val.set_text("0");
        			} else {
        				this.div_search.sta_flex_val.set_text("1");
        				this.div_search.edt_ten.set_value("1");
        			}
        		} else if (svcID == "p_initflex" && nCD == 0) {
        			this.alert('마트분사와 공급업체와의 거래관계가 없습니다.\n\n < 주의사항 >\n'+
        						'1.(중앙본부계통계약) 계약유형과 (수탁) 공급유형인 거래관계만 조회됩니다. \n'+
        						'2.외부업체일 경우 본점과의 거래관계만 조회됩니다.\n'+
        						'(필히 본점과 거래관계를 맺어야 합니다.)'
        			)
        		}
        		if (svcID=="p_onload" && sMSG=="success.init.combo") {

        			this.div_search.sta_search_data.set_text(1);
        			this.div_search.cbo_RQR_NA_TRPL_C.set_value(TRPL_C);
        			this.ds_RQR_NA_TRPL_C.setColumn(0,"CHECK_YN","1");
        			this.div_list.grd_main.preCheck = 0;

        			this.div_search.edt_data01.set_value(this.ds_RQR_NA_TRPL_C.getColumn(0,"CLNTNM"));
        		}

        		if (svcID=="p_search" && sMSG=="success.search.data") {

        			if (this.div_list.grd_detail.rowcount < 1) {
        				if (this.gfn_nullToEmpty(this.div_search.edt_data02.value).length > 0) {
        					this.alert('수요처['+this.div_search.edt_data02.value+']와 마트상품부[8808983000015]와의 거래관계가 없습니다.\n\n'+
        					'수요처로 마트상품부와의 거래관계 등록 요청 후 진행하세요.');
        				} else {
        					this.alert('해당 지역의 계통 사업장과 맺어진 거래관계가 없습니다. \n\n'+
        					'거래관계요청등록화면에서 먼저 거래관계를 등록하세요.');
        				}
        			}
        		} else {
        			this.div_list.grd_detail.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        		}

        		if (svcID=="p_insert" && nCD == 1) {
        			this.alert('거래관계 ['+this.div_search.sta_search_cc.text+']건이 정상 등록되었습니다.' );
        			this.div_search.sta_search_data.set_text("1");
        			this.search();
        		} else if (svcID=="p_insert" && nCD == -999) {
        			this.alert(sMSG);
        		}
        		if (svcID=="TradesExcelDownload" ) {/*엑셀출력 콜백*/
        				var today = this.gfn_today("yyyyMMdd");

        			this.exportObj = new ExcelExportObject("Export00", this);
        			this.exportObj.addEventHandler("onsuccess" , this.fn_excelDownload_onsuccess , this);
        			this.exportObj.addEventHandler("onerror", this.fn_excelDownload_onerror, this);

        			this.exportObj.set_exportfilename("TradesList_" + today);
        			this.exportObj.set_exporturl(application.gv_server_url + "XExportImport");
        			this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.div_list.grd_detail00, "Sheet1!A1");
        			this.exportObj.exportData();

        		}
        	}
        }

        // 엑셀 다운로드 성공
        this.fn_excelDownload_onsuccess = function(obj,e)
        {
        	trace("excel download : success");
        }
        // 엑셀 다운로드 실패
        this.fn_excelDownload_onerror = function(obj,e)
        {
        	trace("excel download : error");
        }

        //수요처 팝업 조회
        this.div_search_btn_popup00_onclick = function(params)
        {
        	if (params == true) {
        		if ((this.gfn_nullToEmpty(this.div_search.edt_data02.value).length < 7 && this.gfn_nullToEmpty(this.div_search.edt_data02.value).length > 0) || (this.gfn_nullToEmpty(this.div_search.edt_data02.value).length > 13)) {
        			this.gfn_getMessage("alert",'msg.van_ds_sc_1302.view.text.between');
        			return;
        		}
        		if (this.gfn_nullToEmpty(this.div_search.edt_data03.value).length == 1) {
        			this.gfn_getMessage("alert",'msg.van_ds_sc_1302.view.input.bzplcnm');
        			return;
        		}
        	}

        	var code = this.div_search.edt_data02.value;
        	var textname = this.div_search.edt_data03.value;
        	var param = {
        				autoType:params,
        				searchCode:code,
        				searchText:textname
        	};
        	if (typeof params == "boolean") {
        		if (!this.searPopValue(param)) {return};
        	}

        	var oArg = {paramMode:"U", sepVal:'1310', autoPop:param};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("cer_trpl","PDS.PARTNER::VAN_DS_SC_1302.xfdl",oArg,sOption,sPopupCallBack);
        }

        //팝업 닫은 후 실행
        this.fn_popupAfter = function(strId,strVal)
        {
        	if (strVal != undefined) {
        		if (strId == "cer_trpl") {
        			this.div_search.edt_data02.set_value(strVal.split(",")[0]); //팝업 창 데이터 선택(사업장코드)
        			this.div_search.edt_data03.set_value(strVal.split(",")[3]);	//팝업 창 데이터 선택(사업장명)
        			this.div_search.sta_cser_team.set_text(strVal.split(",")[9]);
        		}
        	}
        }

        //왼쪽 그리드 체크 박스 index 값
        this.getCheckIndex = function()
        {
        	var ds = this.ds_RQR_NA_TRPL_C;
        	var selbox = "";
        	for (var i=0; i<ds.getRowCount();i++) {
        		selbox = ds.getColumn(i,"CHECK_YN");
        		if (selbox == "1") {
        			return i;
        		}
        	}
        }

        //오른쪽 삭제 체크 박스 index 값
        this.getDeleteCheckIndex = function()
        {
        	var mds = this.ds_master_data;
        	var delbox = "";
        	var delval = "";
        	for (var i=0; i<mds.getRowCount();i++) {
        		delbox = mds.getColumn(i,"DELETE_YN");
        		if (delbox == "1") {
        			delval += i+",";
        		}
        	}
        	return delval.substring(0,delval.length-1);
        }

        //일괄적용 버튼
        this.div_list_btn_all_chk_onclick = function(obj,e)
        {
        	if (this.div_list.grd_detail.rowcount < 1)
        	{
        		this.alert(this.gfn_getTextMessage('msg.van_ds_sc_1310.view.allchk.notdata'));
        	}
        }

        //저장버튼 클릭
        this.btn_save00_onclick = function(obj,e)
        {
        	var chkcount = 0;
        	for (var i=0;i<this.ds_master_data.rowcount;i++) {
        		if (this.ds_master_data.getColumn(i,"CHECK_YN") == 1) {
        			chkcount += 1;
        		}
        		if (this.ds_master_data.getColumn(i,"DELETE_YN") == 1) {
        			chkcount += 1;
        		}
        	}

        	if (chkcount == 0) {
        		this.alert('저장 할 데이터가 없습니다.');
        		return;
        	}

        	var bOk = application.confirm('거래관계 반영시 최소 5분에서 최대 1시간 소요됩니다.\n\n'+
        					this.gfn_getTextMessage('msg.van_ds_sc_1310.view.count.msg')+chkcount+this.gfn_getTextMessage('msg.van_ds_sc_1310.view.count.msgf'));

        	if (bOk == true) {
        		if (this.div_list.grd_detail.rowcount < 1) {
        			this.alert('조회를 먼저 해주세요.');
        			return;
        		}
        		this.div_search.sta_search_cc.set_text(chkcount);
        		this.div_search.sta_search_data.set_text("2");
        		this.search();
        	}
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

        this.div_search_edt_data02_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.div_search_btn_popup00_onclick(true);
        	}
        }

        this.div_search_edt_data03_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.div_search_btn_popup00_onclick(true);
        	}
        }

        this.btn_popup01_onclick = function(obj,e)
        {
        	var trplc = this.ds_RQR_NA_TRPL_C.getColumn(0,'NA_TRPL_C');
        	var pop_trpl = this.div_search.cbo_RQR_NA_TRPL_C.value;
        	var pop_trplnm = this.div_search.cbo_RQR_NA_TRPL_C.text;

        	var oArg = {paramMode:"A", dsArg:this.ds_master_data, trpl_c:trplc , splrc:pop_trpl, splrnm:pop_trplnm};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("trnpel_search","PDS.PARTNER::VAN_DS_SC_1311.xfdl",oArg,sOption,sPopupCallBack);
        }

        

        this.div_list_grd_detail_onheadclick = function(obj,e)
        {
        	if (e.cell == 1) {
        		if (e.row == -1) {
        			if (this.ds_master_data.rowcount < 1) {
        				this.alert('전체 적용할 거래관계가 없습니다. 조회하신 후 작업하시기 바랍니다.');
        				return;
        			}
        			var bOk = application.confirm('변경 공급처를 ['+this.ds_RQR_NA_TRPL_C.getColumn(this.ds_RQR_NA_TRPL_C.rowposition,"CLNTNM")+'] 거래처로 일괄적용 하시겠습니까?\n\n'+
        										  '거래관계를 잘못 설정할 경우 거래를 발생 시킬 수 없으니 주의하시기 바랍니다.\n\n'+
        										  '일괄적용 거래처와 현재공급처가 동일할 경우 일괄적용 대상에서 제외됩니다.(삭제 체크 자료 원복)'
        										);
        			if (!bOk) {
        				return;
        			}
        			for (var i=0;i<this.ds_master_data.rowcount;i++) {
        				this.allchk(this,true,i);
        			}
        		}
        	}
        }

        this.allchk = function(obj,result,row)
        {
        	var chkIndex = obj.getCheckIndex(); //왼쪽 그리드 체크 index

        	var na_trpl_c = obj.ds_RQR_NA_TRPL_C.getColumn(chkIndex,"NA_TRPL_C"); 	// 왼쪽 그리드에서 선택한 거래처코드
        	var clntnm = obj.ds_RQR_NA_TRPL_C.getColumn(chkIndex,"CLNTNM"); 		// 왼쪽 그리드에서 선택한 거래처명
        	var mclntnm = obj.ds_master_data.getColumn(row,"SPLRN"); 		// 오른쪽 그리드에서 선택한 거래처명

        	if (clntnm == mclntnm) {
        		obj.ds_master_data.setColumn(row,"CHECK_YN","0");
        		return;
        	}

        	obj.ds_master_data.setColumn(row,"UPDATE_SPLR_NA_TRPL_C",clntnm);		// 변경 할 거래처명을 입력한다.
        	obj.ds_master_data.setColumn(row,"UPDATE_SPLR_NA_TRPL_CODE",na_trpl_c);	// 변경 할 거래처코드를 입력한다.
        	obj.ds_master_data.setColumn(row,"CHECK_YN","1");
        }

        /*엑셀 출력*/
        this.btn_excel_onclick = function(obj,e)
        {
        	var separator = this.div_search.sta_search_data.text;
        	var up_trpl = this.ds_RQR_NA_TRPL_C.getColumn(0,"NA_TRPL_C");
        	var params 		  = "separator="+separator
        						+" glncode="+application.gv_glnCode		//로그인 사업장
        						+" userId="+application.gv_userId
        						+" mbcoType="+application.gv_mbcoType	//로그인 정보
        						+" TRPL_C="+TRPL_C;
        	var sSvcID = "";
        	var sOutDatasets = "";
        	var sInDatasets   = "";//보내는데이터셋
        	var sURL          = "svc::rest/pds/partner/Trade/TradesExcelDownload";// 호출할 서버 페이지 주소
        	// 화면생성 후 자동 실행

        	// 조회버튼 클릭시 실행
        	if (separator == "1") {
        		if (this.ds_RQR_NA_TRPL_C.rowcount < 1) {
        			this.alert('본사거래처에 대한 거래관계를 먼저 검색하십시오.');
        			return;
        		}
        		var local_code = this.div_search.cbo_local_code00.value;
        		params = "separator="+separator
        				+" TRPL_C="+TRPL_C
        				+" UP_TRPL_C="+up_trpl
        				+" local_code="+local_code
        				+" ser_na="+this.div_search.cbo_RQR_NA_TRPL_C.value
        				+" cser_na="+this.gfn_nullToEmpty(this.div_search.edt_data02.value)
        				+" cser_team="+this.gfn_nullToEmpty(this.div_search.sta_cser_team.text)
        				+" rdo_gubun="+this.div_search.rdo_store_chk00.value;
        		sSvcID	= "TradesExcelDownload";
        		sOutDatasets  = "ds_excel=ds_excel";
        	// 저장 버튼 클릭 후 실행
        	}

        	var sArgument     = params
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType 	  = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.div_list_grd_main_oncellclick = function(obj,e)
        {
        	var check;
        	if (obj.preCheck == e.row) {
        		obj.preCheck = -1;
        		check = "0";
        	} else {
        		this.ds_RQR_NA_TRPL_C.setColumn(obj.preCheck, "CHECK_YN", "0");
        		obj.preCheck = e.row;
        		check = "1";
        	}
        	this.ds_RQR_NA_TRPL_C.setColumn(e.row, "CHECK_YN", check);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_save00.addEventHandler("onclick", this.btn_save00_onclick, this);
            this.btn_search00.addEventHandler("onclick", this.btn_search00_onclick, this);
            this.div_search.btn_popup00.addEventHandler("onclick", this.div_search_btn_popup00_onclick, this);
            this.div_search.edt_data02.addEventHandler("onkeydown", this.div_search_edt_data02_onkeydown, this);
            this.div_search.edt_data03.addEventHandler("onkeydown", this.div_search_edt_data03_onkeydown, this);
            this.div_search.sta_flex_val.addEventHandler("onclick", this.div_search_sta_flex_val_onclick, this);
            this.div_list.grd_detail00.addEventHandler("oncellclick", this.div_list_grd_detail_oncellclick, this);
            this.div_list.grd_detail00.addEventHandler("onheadclick", this.div_list_grd_detail_onheadclick, this);
            this.div_list.grd_main.addEventHandler("oncellclick", this.div_list_grd_main_oncellclick, this);
            this.div_list.btn_toggle00.addEventHandler("onclick", this.div_list_btn_toggle00_onclick, this);
            this.div_list.grd_detail.addEventHandler("oncellclick", this.div_list_grd_detail_oncellclick, this);
            this.div_list.grd_detail.addEventHandler("onheadclick", this.div_list_grd_detail_onheadclick, this);
            this.div_list.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_clear00.addEventHandler("onclick", this.btn_clear00_onclick, this);
            this.btn_popup01.addEventHandler("onclick", this.btn_popup01_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1310.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
