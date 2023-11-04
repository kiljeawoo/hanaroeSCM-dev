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
                this.set_name("VAN_DS_SC_1575");
                this.set_titletext("물류센터결품내역 조회");
                this._setFormPosition(0,0,803,660);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Bzplc", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"SHRT_BZPLNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPL_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"BZPL_DTI_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"BZPL_TPNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPL_DTI_TPNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_master_data", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_SPYPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"APL_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DSQNO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_QT\" type=\"STRING\" size=\"256\"/><Column id=\"STR_QT\" type=\"STRING\" size=\"256\"/><Column id=\"UN_STR_QT\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CMENO\" type=\"STRING\" size=\"256\"/><Column id=\"LSCGMN_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DLMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"DLMN_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_C_RQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NA_C_RQ_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"CTCPL_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"RC_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"RCST_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"RCST_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PRCMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"PRCMN_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_C_RQ_REJ_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"RQ_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"RMK_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"APV_RQ_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"UN_STR_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"ROTS_SPY_PSB_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NA_SPYPL_C_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN_NA_BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCGMN_NA_BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DLMN_NA_BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RCST_NA_BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRCMN_NA_BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APV_RQ_NA_BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_C_RQ_STSC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_C_RQ_REJ_RSNC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UN_STR_RSNC_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_detail_data", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_SPYPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"APL_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DSQNO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_QT\" type=\"STRING\" size=\"256\"/><Column id=\"STR_QT\" type=\"STRING\" size=\"256\"/><Column id=\"UN_STR_QT\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CMENO\" type=\"STRING\" size=\"256\"/><Column id=\"LSCGMN_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DLMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"DLMN_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_C_RQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NA_C_RQ_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"CTCPL_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"RC_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"RCST_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"RCST_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PRCMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"PRCMN_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_C_RQ_REJ_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"RQ_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"RMK_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"APV_RQ_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"UN_STR_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"ROTS_SPY_PSB_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NA_SPYPL_C_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN_NA_BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCGMN_NA_BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DLMN_NA_BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RCST_NA_BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRCMN_NA_BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APV_RQ_NA_BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_C_RQ_STSC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_C_RQ_REJ_RSNC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UN_STR_RSNC_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "69", "15", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "151", "21", null, null, this.div_search);
            obj.set_taborder("26");
            obj.set_text("상품코드 조회구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "36", "151", "21", null, null, this.div_search);
            obj.set_taborder("27");
            obj.set_text("물류센터코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_store_chk00", "absolute", "166", "10", "160", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_store_chk00_innerdataset = new Dataset("rdo_store_chk00_innerdataset", this.div_search.rdo_store_chk00);
            rdo_store_chk00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">상품코드</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">상품명</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_chk00_innerdataset);
            obj.set_taborder("29");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Edit("edt_data00", "absolute", "326", "10", "143", "21", null, null, this.div_search);
            obj.set_taborder("30");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data01", "absolute", "366", "36", "103", "21", null, null, this.div_search);
            obj.set_taborder("31");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_bzpl_list", "absolute", "166", "36", "197", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("32");
            obj.set_codecolumn("NA_BZPLC");
            obj.set_datacolumn("SHRT_BZPLNM");
            obj.set_innerdataset("@ds_Bzplc");
            obj = new Radio("rdo_sep_value", "absolute", "562", "36", "221", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_sep_value_innerdataset = new Dataset("rdo_sep_value_innerdataset", this.div_search.rdo_sep_value);
            rdo_sep_value_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">발주전표</Col></Row></Rows>");
            obj.set_innerdataset(rdo_sep_value_innerdataset);
            obj.set_taborder("36");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Static("Static03", "absolute", "491", "36", "79", "21", null, null, this.div_search);
            obj.set_taborder("37");
            obj.set_text("참조구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "491", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("28");
            obj.set_text("적용일자");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from_date", "absolute", "562", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("33");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_visible("true");
            obj = new Calendar("cal_to_date", "absolute", "683", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("34");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_visible("true");
            obj = new Static("Static04", "absolute", "668", "10", "10", "21", null, null, this.div_search);
            obj.set_taborder("35");
            obj.set_text("~");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_menu", "absolute", "0%", "0", null, "21", "50.56%", null, this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "160", null, this);
            obj.set_taborder("2");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear00", "absolute", null, "0", "53", "21", "118", null, this);
            obj.set_taborder("3");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("4");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "97", null, null, "15", "17", this);
            obj.set_taborder("6");
            obj.set_text("<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<UxFormClipBoard version=\"1.5\">\r\n  <Dataset id=\"ds_pageVO\" firefirstcount=\"0\" firenextcount=\"0\" useclientlayout=\"false\" updatecontrol=\"true\" enableevent=\"true\" loadkeymode=\"keep\" loadfiltermode=\"keep\" reversesubsum=\"false\">\r\n    <ColumnInfo>\r\n      <Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/>\r\n      <Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/>\r\n      <Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/>\r\n    </ColumnInfo>\r\n    <Rows>\r\n      <Row>\r\n        <Col id=\"TOTAL_ROW_COUNT\">0</Col>\r\n        <Col id=\"PAGE_SIZE\">10</Col>\r\n        <Col id=\"CURRENT_PAGE\">1</Col>\r\n      </Row>\r\n    </Rows>\r\n  </Dataset>\r\n</UxFormClipBoard>\r\n");
            this.addChild(obj.name, obj);
            obj = new Button("btn_toggle00", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_main", "absolute", "0", "34", null, null, "0", "44", this.div_list);
            obj.set_taborder("10");
            obj.set_binddataset("ds_master_data");
            obj.set_nodatatext("조회된 건수가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"25\" band=\"head\"/><Row size=\"28\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"경제통합&#13;&#10;공급처코드\"/><Cell col=\"2\" rowspan=\"2\" text=\"적용일자\"/><Cell col=\"3\" rowspan=\"2\" text=\"경제통합&#13;&#10;상품코드\"/><Cell col=\"4\" rowspan=\"2\" text=\"경제통합&#13;&#10;사업장코드\"/><Cell col=\"5\" rowspan=\"2\" text=\"발주일자\"/><Cell col=\"6\" rowspan=\"2\" text=\"발주전표번호\"/><Cell col=\"7\" rowspan=\"2\" text=\"발주상세&#13;&#10;일련번호\"/><Cell col=\"8\" rowspan=\"2\" text=\"발주수량\"/><Cell col=\"9\" rowspan=\"2\" text=\"입고수량\"/><Cell col=\"10\" rowspan=\"2\" text=\"미입고수량\"/><Cell col=\"11\" rowspan=\"2\" text=\"최초&#13;&#10;등록일시\"/><Cell col=\"12\" rowspan=\"2\" text=\"최초등록자&#13;&#10;개인번호\"/><Cell col=\"13\" rowspan=\"2\" text=\"최초등록자&#13;&#10;사업장코드\"/><Cell col=\"14\" rowspan=\"2\" text=\"최종&#13;&#10;변경일시\"/><Cell col=\"15\" rowspan=\"2\" text=\"최종변경자&#13;&#10;개인번호\"/><Cell col=\"16\" rowspan=\"2\" text=\"최종변경자&#13;&#10;사업장코드\"/><Cell col=\"17\" rowspan=\"2\" text=\"삭제일시\"/><Cell col=\"18\" rowspan=\"2\" text=\"삭제자&#13;&#10;개인번호\"/><Cell col=\"19\" rowspan=\"2\" text=\"삭제자&#13;&#10;사업장코드\"/><Cell col=\"20\" rowspan=\"2\" text=\"경제통합&#13;&#10;코드신청번호\"/><Cell col=\"21\" rowspan=\"2\" text=\"경제통합&#13;&#10;코드신청산태코드\"/><Cell col=\"22\" rowspan=\"2\" text=\"연락처&#13;&#10;전화번호\"/><Cell col=\"23\" rowspan=\"2\" text=\"접수일시\"/><Cell col=\"24\" rowspan=\"2\" text=\"접수자&#13;&#10;개인번호\"/><Cell col=\"25\" rowspan=\"2\" text=\"접수자&#13;&#10;사업장코드\"/><Cell col=\"26\" rowspan=\"2\" text=\"처리일시\"/><Cell col=\"27\" rowspan=\"2\" text=\"처리자&#13;&#10;개인번호\"/><Cell col=\"28\" rowspan=\"2\" text=\"처리자&#13;&#10;사업장코드\"/><Cell col=\"29\" rowspan=\"2\" text=\"경제통합&#13;&#10;거절사유코드\"/><Cell col=\"30\" rowspan=\"2\" text=\"신청내용\"/><Cell col=\"31\" rowspan=\"2\" text=\"처리내용\"/><Cell col=\"32\" rowspan=\"2\" text=\"비고내용\"/><Cell col=\"33\" rowspan=\"2\" text=\"승인신청&#13;&#10;사업장코드\"/><Cell col=\"34\" rowspan=\"2\" text=\"미입고&#13;&#10;사유코드\"/><Cell col=\"35\" rowspan=\"2\" text=\"계통공급&#13;&#10;가능일자\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:NA_SPYPL_C\"/><Cell col=\"2\" rowspan=\"2\" text=\"bind:APL_DT\"/><Cell col=\"3\" text=\"bind:NA_WRS_C\"/><Cell col=\"4\" text=\"bind:NA_BZPLC\"/><Cell col=\"5\" rowspan=\"2\" text=\"bind:ODR_DT\"/><Cell col=\"6\" rowspan=\"2\" text=\"bind:ODR_SLPNO\"/><Cell col=\"7\" rowspan=\"2\" text=\"bind:ODR_DSQNO\"/><Cell col=\"8\" rowspan=\"2\" text=\"bind:ODR_QT\"/><Cell col=\"9\" rowspan=\"2\" text=\"bind:STR_QT\"/><Cell col=\"10\" rowspan=\"2\" text=\"bind:UN_STR_QT\"/><Cell col=\"11\" rowspan=\"2\" text=\"bind:FSRG_DTM\"/><Cell col=\"12\" rowspan=\"2\" text=\"bind:FSRGMN_ENO\"/><Cell col=\"13\" text=\"bind:FSRGMN_NA_BZPLC\"/><Cell col=\"14\" rowspan=\"2\" text=\"bind:LSCHG_DTM\"/><Cell col=\"15\" rowspan=\"2\" text=\"bind:LS_CMENO\"/><Cell col=\"16\" text=\"bind:LSCGMN_NA_BZPLC\"/><Cell col=\"17\" rowspan=\"2\" text=\"bind:DEL_DTM\"/><Cell col=\"18\" rowspan=\"2\" text=\"bind:DLMN_ENO\"/><Cell col=\"19\" text=\"bind:DLMN_NA_BZPLC\"/><Cell col=\"20\" rowspan=\"2\" text=\"bind:NA_C_RQ_NO\"/><Cell col=\"21\" text=\"bind:NA_C_RQ_STSC\"/><Cell col=\"22\" rowspan=\"2\" text=\"bind:CTCPL_TELNO\"/><Cell col=\"23\" rowspan=\"2\" text=\"bind:RC_DTM\"/><Cell col=\"24\" rowspan=\"2\" text=\"bind:RCST_ENO\"/><Cell col=\"25\" rowspan=\"2\" text=\"bind:RCST_NA_BZPLC\"/><Cell col=\"26\" rowspan=\"2\" text=\"bind:PRC_DTM\"/><Cell col=\"27\" rowspan=\"2\" text=\"bind:PRCMN_ENO\"/><Cell col=\"28\" rowspan=\"2\" text=\"bind:PRCMN_NA_BZPLC\"/><Cell col=\"29\" rowspan=\"2\" text=\"bind:NA_C_RQ_REJ_RSNC\"/><Cell col=\"30\" rowspan=\"2\" text=\"bind:RQ_CNTN\"/><Cell col=\"31\" rowspan=\"2\" text=\"bind:PRC_CNTN\"/><Cell col=\"32\" rowspan=\"2\" text=\"bind:RMK_CNTN\"/><Cell col=\"33\" rowspan=\"2\" text=\"bind:APV_RQ_NA_BZPLC\"/><Cell col=\"34\" rowspan=\"2\" text=\"bind:UN_STR_RSNC\"/><Cell col=\"35\" rowspan=\"2\" text=\"bind:ROTS_SPY_PSB_DT\"/><Cell row=\"1\" col=\"1\" text=\"bind:NA_SPYPL_C_NM\"/><Cell row=\"1\" col=\"3\" text=\"bind:WRSNM\"/><Cell row=\"1\" col=\"4\" text=\"bind:NA_BZPLC_NM\"/><Cell row=\"1\" col=\"13\" text=\"bind:FSRGMN_NA_BZPLC_NM\"/><Cell row=\"1\" col=\"16\" text=\"bind:LSCGMN_NA_BZPLC_NM\"/><Cell row=\"1\" col=\"19\"/><Cell row=\"1\" col=\"21\" text=\"bind:NA_C_RQ_STSC_NM\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_excel01", "absolute", null, "7", "41", "21", "0", null, this.div_list);
            obj.set_taborder("13");
            obj.set_text("엑셀");
            this.div_list.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 69, this.div_search,
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
            		p.set_taborder("6");
            		p.set_text("<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<UxFormClipBoard version=\"1.5\">\r\n  <Dataset id=\"ds_pageVO\" firefirstcount=\"0\" firenextcount=\"0\" useclientlayout=\"false\" updatecontrol=\"true\" enableevent=\"true\" loadkeymode=\"keep\" loadfiltermode=\"keep\" reversesubsum=\"false\">\r\n    <ColumnInfo>\r\n      <Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/>\r\n      <Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/>\r\n      <Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/>\r\n    </ColumnInfo>\r\n    <Rows>\r\n      <Row>\r\n        <Col id=\"TOTAL_ROW_COUNT\">0</Col>\r\n        <Col id=\"PAGE_SIZE\">10</Col>\r\n        <Col id=\"CURRENT_PAGE\">1</Col>\r\n      </Row>\r\n    </Rows>\r\n  </Dataset>\r\n</UxFormClipBoard>\r\n");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 660, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1590");
            		p.set_titletext("물류센터결품내역 조회");

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
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1575.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1575.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
           this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	this.div_search.cal_from_date.set_value(this.gfn_minusDate(this.gfn_today('yyyyMMdd'),1));
        	this.div_search.cal_to_date.set_value(this.gfn_today('yyyyMMdd'));
        	this.div_auth.cbo_authorityWorkplace.addEventHandler('onitemchanged',this.trplChange,this);
        	this.getBzpl();
        	
        }

        //초기화
        this.btn_clear00_onclick = function(obj,e)
        {
        	this.reload();
        }

        this.trplChange = function()
        {
        	this.getBzpl();
        }

        //물류센터 조회
        this.getBzpl = function()
        {
        	var params = "TRPL_C="+this.getTrplCode();
        	
        	var sSvcID        = "getBzpl_code";//통신아이디
        	var sURL          = "svc::rest/pds/stock/getBZPLCode";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_Bzplc=ds_Bzplc";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        //필수값 체크
        this.validation = function()
        {
        	var from_date = this.div_search.cal_from_date.value;
        	var from_to = this.div_search.cal_to_date.value;
        	
        	if(this.div_search.cbo_bzpl_list.value == ""){
        		this.alert('물류센터코드를 입력하세요.');
        		return;
        	}
        	if(this.gfn_getDiffDay(from_date,from_to) > 31){
        		this.gfn_getMessage('alert','validation.message.selectDateIn31Day');
        		return;
        	}
        	if(this.gfn_getDiffDay(from_date,from_to) < -1){
        		this.gfn_getMessage('alert','validation.message.fromDate.toDate.reConfirm');
        		return;
        	}
        	return true;
        }

        this.btn_search00_onclick = function(obj,e)
        {
        	if(!this.validation()){
        		return;
        	}
        	
        	var params = "TRPL_C="+this.getTrplCode()
        				+" wrs_gubun="+this.div_search.rdo_store_chk00.value		//상품조회구분
        				+" searchText="+this.gfn_nullToEmpty(this.div_search.edt_data00.value)	//상품조회값
        				+" cal_apl_from="+this.div_search.cal_from_date.value	//적용일자from
        				+" cal_apl_to="+this.div_search.cal_to_date.value		//적용일자to
        				+" cbo_bzplc="+this.div_search.cbo_bzpl_list.value		//물류센터
        	;
        	
        	var sSvcID        = "m_search";//통신아이디
        	var sURL          = "svc::rest/pds/pricat/getShortageOrderMaseter";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_master_data=ds_master_data";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        	
        }

        this.div_list_grd_main_oncellclick = function(obj,e)
        {
        	
        	var aRow = this.ds_master_data.rowposition;
        	
        	var params = "NA_SPYPL_C="+this.ds_master_data.getColumn(aRow,"NA_SPYPL_C")		//공급처
        				+" NA_BZPLC="+this.ds_master_data.getColumn(aRow,"NA_BZPLC")	//물류센터
        				+" APL_DT="+this.ds_master_data.getColumn(aRow,"APL_DT")		//적용일자
        				+" NA_WRS_C="+this.ds_master_data.getColumn(aRow,"NA_WRS_C")	//상품코드
        				+" ODR_DT="+this.ds_master_data.getColumn(aRow,"ODR_DT")		//발주일자
        				+" ODR_SLPNO="+this.ds_master_data.getColumn(aRow,"ODR_SLPNO")	//전표번호
        				+" ODR_DSQNO="+this.ds_master_data.getColumn(aRow,"ODR_DSQNO")	//전표상세번호
        	;
        	
        	var sSvcID        = "d_search";//통신아이디
        	var sURL          = "svc::rest/pds/pricat/getShortageOrderDetail";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_detail_data=ds_detail_data";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.fn_callback = function(svcID,nCD,sMSG)
        {
        	if(nCD < 0){
        		this.gfn_getMessage('alert',sMSG);
        		return;
        	}else{
        		if(svcID == "getBzpl_code"){
        			if (this.ds_Bzplc.insertRow(0) != -1){
        				this.ds_Bzplc.setColumn(0,"NA_BZPLC","");
        				this.ds_Bzplc.setColumn(0,"SHRT_BZPLNM","- 선택안됨 -");
        			};
        			this.div_search.cbo_bzpl_list.set_index(0);
        		}
        		if(svcID == "m_search"){
        		
        		}
        		if(svcID == "d_search"){
        		
        		}
        	}
        }

        
        //엑셀 다운로드 버튼
        this.btn_excel_onclick = function(obj,e)
        {
        	if(!this.validation()){
        		return;
        	}
        	
        	var params = "TRPL_C="+this.getTrplCode()
        				+"&wrs_gubun="+this.div_search.rdo_store_chk00.value		//상품조회구분
        				+"&searchText="+this.gfn_nullToEmpty(this.div_search.edt_data00.value)	//상품조회값
        				+"&cal_apl_from="+this.div_search.cal_from_date.value	//적용일자from
        				+"&cal_apl_to="+this.div_search.cal_to_date.value		//적용일자to
        				+"&cbo_bzplc="+this.div_search.cbo_bzpl_list.value		//물류센터
        	;
        	
        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelShortageOrderMaster?"+params, this);	
        }

        this.div_list_btn_excel01_onclick = function(obj,e)
        {
        		if(!this.validation()){
        			return;
        		}
        		var params = "TRPL_C="+this.getTrplCode()
        				+"&wrs_gubun="+this.div_search.rdo_store_chk00.value		//상품조회구분
        				+"&searchText="+this.gfn_nullToEmpty(this.div_search.edt_data00.value)	//상품조회값
        				+"&cal_apl_from="+this.div_search.cal_from_date.value	//적용일자from
        				+"&cal_apl_to="+this.div_search.cal_to_date.value		//적용일자to
        				+"&cbo_bzplc="+this.div_search.cbo_bzpl_list.value		//물류센터
        	 ;
        	
        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelShortageOrderMaster?"+params, this);	

        }

        

        

        //물류센터 change 이벤트
        this.div_search_cbo_bzpl_list_onitemchanged = function(obj,e)
        {
        	this.div_search.edt_data01.set_value(this.div_search.cbo_bzpl_list.value);
        }

        
        this.div_list_btn_toggle00_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.cbo_bzpl_list.addEventHandler("onitemchanged", this.div_search_cbo_bzpl_list_onitemchanged, this);
            this.div_search.rdo_sep_value.addEventHandler("onitemchanged", this.div_search_rdo_sep_value_onitemchanged, this);
            this.btn_clear00.addEventHandler("onclick", this.btn_clear00_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_search00.addEventHandler("onclick", this.btn_search00_onclick, this);
            this.div_list.btn_toggle00.addEventHandler("onclick", this.div_list_btn_toggle00_onclick, this);
            this.div_list.grd_main.addEventHandler("oncellclick", this.div_list_grd_main_oncellclick, this);
            this.div_list.btn_excel01.addEventHandler("onclick", this.div_list_btn_excel01_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1575.xfdl");
        this.loadPreloadList();
       
    };
}
)();
