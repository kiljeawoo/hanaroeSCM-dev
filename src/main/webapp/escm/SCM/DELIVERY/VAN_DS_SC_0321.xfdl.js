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
                this.set_name("VAN_DS_SC_0321");
                this.set_titletext("배송예정직송일괄등록");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_uploadresult", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_file_inform", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BUYER_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"CTCPL_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"RQ_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_excel_bind", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ROW_SEQ\" type=\"String\" size=\"256\"/><Column id=\"ITEM_CNT\" type=\"INT\" size=\"256\"/><Column id=\"SPYPL_NA_TRPL_C\" type=\"String\" size=\"256\"/><Column id=\"SPYPL_NA_TEAM_C\" type=\"String\" size=\"256\"/><Column id=\"DVY_PLA_DT\" type=\"String\" size=\"256\"/><Column id=\"NA_DVY_PLASH_SLPNO\" type=\"String\" size=\"256\"/><Column id=\"ODRPL_NA_TRPL_C\" type=\"String\" size=\"256\"/><Column id=\"ODRPL_NA_TEAM_C\" type=\"String\" size=\"256\"/><Column id=\"RVOPL_NA_TRPL_C\" type=\"String\" size=\"256\"/><Column id=\"RVOPL_NA_TEAM_C\" type=\"String\" size=\"256\"/><Column id=\"ADJPL_NA_TRPL_C\" type=\"String\" size=\"256\"/><Column id=\"ADJPL_NA_TEAM_C\" type=\"String\" size=\"256\"/><Column id=\"MNGT_NA_TR_TPC\" type=\"String\" size=\"256\"/><Column id=\"MNGT_NA_TRPL_C\" type=\"String\" size=\"256\"/><Column id=\"MNGT_NA_TEAM_C\" type=\"String\" size=\"256\"/><Column id=\"DVYAA_NA_TRPL_C\" type=\"String\" size=\"256\"/><Column id=\"DVYAA_NA_TEAM_C\" type=\"String\" size=\"256\"/><Column id=\"DVYAA_C\" type=\"String\" size=\"256\"/><Column id=\"M_CSER_CTR_TPC\" type=\"String\" size=\"256\"/><Column id=\"SPY_TPC\" type=\"String\" size=\"256\"/><Column id=\"SLGT_ETR_DSC\" type=\"String\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"String\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"String\" size=\"256\"/><Column id=\"ACCP_C\" type=\"String\" size=\"256\"/><Column id=\"M_DVY_PLA_QT\" type=\"String\" size=\"256\"/><Column id=\"M_DVY_AM\" type=\"String\" size=\"256\"/><Column id=\"M_DVY_VAT\" type=\"String\" size=\"256\"/><Column id=\"VCBT_AM\" type=\"String\" size=\"256\"/><Column id=\"VCBX_AM\" type=\"String\" size=\"256\"/><Column id=\"M_DVY_SSDY\" type=\"String\" size=\"256\"/><Column id=\"M_DVY_TROT_FEE\" type=\"String\" size=\"256\"/><Column id=\"M_DVY_PHD_FEE\" type=\"String\" size=\"256\"/><Column id=\"M_DVY_FAR_ASTCS\" type=\"String\" size=\"256\"/><Column id=\"WD_PLTT_QT\" type=\"String\" size=\"256\"/><Column id=\"PSC_PLTT_QT\" type=\"String\" size=\"256\"/><Column id=\"PRGR_C\" type=\"String\" size=\"256\"/><Column id=\"BUY_UPR_DSC\" type=\"String\" size=\"256\"/><Column id=\"BYNG_UPR_GR_C\" type=\"String\" size=\"256\"/><Column id=\"M_RMK_CNTN\" type=\"String\" size=\"256\"/><Column id=\"ITEM_SEQ\" type=\"String\" size=\"256\"/><Column id=\"NA_WRS_C\" type=\"String\" size=\"256\"/><Column id=\"NA_SOGMN_C\" type=\"String\" size=\"256\"/><Column id=\"PDAA_NA_TRPL_C\" type=\"String\" size=\"256\"/><Column id=\"PDAA_NA_TEAM_C\" type=\"String\" size=\"256\"/><Column id=\"RCPMNM\" type=\"String\" size=\"256\"/><Column id=\"RCPMN_TELNO\" type=\"String\" size=\"256\"/><Column id=\"ODR_DT\" type=\"String\" size=\"256\"/><Column id=\"ODR_SLPNO\" type=\"String\" size=\"256\"/><Column id=\"ODR_DSQNO\" type=\"String\" size=\"256\"/><Column id=\"TXT_DSC\" type=\"String\" size=\"256\"/><Column id=\"DVY_WRS_UPR\" type=\"String\" size=\"256\"/><Column id=\"DVY_PLA_QT\" type=\"String\" size=\"256\"/><Column id=\"DVY_AM\" type=\"String\" size=\"256\"/><Column id=\"DVY_VAT\" type=\"String\" size=\"256\"/><Column id=\"DVY_VCBT_AM\" type=\"String\" size=\"256\"/><Column id=\"DVY_SSDY\" type=\"String\" size=\"256\"/><Column id=\"DVY_TROT_FEE\" type=\"String\" size=\"256\"/><Column id=\"DVY_PHD_FEE\" type=\"String\" size=\"256\"/><Column id=\"DVY_FAR_ASTCS\" type=\"String\" size=\"256\"/><Column id=\"RMK_CNTN\" type=\"String\" size=\"256\"/><Column id=\"SL_UPR_TPC\" type=\"String\" size=\"256\"/><Column id=\"CSER_CTR_TPC\" type=\"String\" size=\"256\"/><Column id=\"BUY_BZ_METC\" type=\"String\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_excel_result", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ROW_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_temp_seq", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TEMP_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "247", null, this);
            obj.set_taborder("0");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_menu", "absolute", "0", "0", "323", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear00", "absolute", null, "0", "53", "21", "59", null, this);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save00", "absolute", null, "0", "41", "21", "16", null, this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "117", "15", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_title00", "absolute", "15", "10", "67", "21", null, null, this.div_search);
            obj.set_taborder("110");
            obj.set_text("File 명");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title04", "absolute", "454", "10", "193", "21", null, null, this.div_search);
            obj.set_taborder("112");
            obj.set_text("[한 파일 최대건수 100건]");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title03", "absolute", "15", "36", "101", "21", null, null, this.div_search);
            obj.set_taborder("116");
            obj.set_text("처리결과내용");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data00", "absolute", "127", "11", "233", "21", null, null, this.div_search);
            obj.set_taborder("131");
            this.div_search.addChild(obj.name, obj);
            obj = new TextArea("txa_excel00", "absolute", "127", "37", "644", "69", null, null, this.div_search);
            obj.set_taborder("133");
            obj.set_readonly("true");
            obj.set_value("하나로 eSCM 배송예정서 일괄등록 표준템플릿을 다운로드 후 사용하시기 바랍니다.");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "771", "-1", "15", "145", null, null, this.div_search);
            obj.set_taborder("134");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new FileUpload("FileUpload00", "absolute", "363", "11", "72", "21", null, null, this.div_search);
            obj.set_taborder("135");
            obj.set_multiselect("true");
            obj.getSetter("timeout").set("0");
            obj.getSetter("retry").set("0");
            obj.getSetter("async").set("true");
            obj.getSetter("onload").set("FileUpload00_onload");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "32.95%", "106", null, "10", "53.94%", null, this.div_search);
            obj.set_taborder("136");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_down01", "absolute", null, "0", "65", "21", "193", null, this);
            obj.set_taborder("8");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_find_file00", "absolute", null, "0", "77", "21", "114", null, this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_text("File Upload");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "145", null, null, "15", "30", this);
            obj.set_taborder("10");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Button("btn_toggle00", "absolute", "46.07%", "0", null, "12", "45.94%", null, this.div_list);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_main00", "absolute", "0", "42", null, null, "0", "0", this.div_list);
            obj.set_taborder("1");
            obj.set_binddataset("ds_excel_bind");
            obj.set_visible("false");
            obj.getSetter("titletext").set("신규상품요청 일괄등록");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"01A 일련번호\"/><Cell col=\"2\" text=\"02B detail건수\"/><Cell col=\"3\" text=\"03C 공급처\"/><Cell col=\"4\" text=\"04D 공급처팀\"/><Cell col=\"5\" text=\"05E 배송예정일자\"/><Cell col=\"6\" text=\"06F 배송예정서번호\"/><Cell col=\"7\" text=\"07G 발주처\"/><Cell col=\"8\" text=\"08H 발주처팀\"/><Cell col=\"9\" text=\"09I 수주처\"/><Cell col=\"10\" text=\"10J 수주처팀\"/><Cell col=\"11\" text=\"11K 정산처\"/><Cell col=\"12\" text=\"12L 정산처팀\"/><Cell col=\"13\" text=\"13M 주관처 거래유형\"/><Cell col=\"14\" text=\"14N 주관처\"/><Cell col=\"15\" text=\"15O 주관처팀\"/><Cell col=\"16\" text=\"16P 배송처\"/><Cell col=\"17\" text=\"17Q 배송처팀\"/><Cell col=\"18\" text=\"18R 배송지\"/><Cell col=\"19\" text=\"19S 수요자 계약유형\"/><Cell col=\"20\" text=\"20T 공급유형\"/><Cell col=\"21\" text=\"21U 매취수탁 구분\"/><Cell col=\"22\" text=\"22V 대분류\"/><Cell col=\"23\" text=\"23W 중분류\"/><Cell col=\"24\" text=\"24X 인수도코드\"/><Cell col=\"25\" text=\"25Y 배송예정수량 (합계)\"/><Cell col=\"26\" text=\"26Z 배송금액 (합계)\"/><Cell col=\"27\" text=\"27AA 배송부가세 (합계)\"/><Cell col=\"28\" text=\"28AB 배송공병금액 (합계)\"/><Cell col=\"29\" text=\"29AC 배송공상자금액 (합계)\"/><Cell col=\"30\" text=\"30AD 배송장려금 (합계)\"/><Cell col=\"31\" text=\"31AE 배송환급수수료 (합계)\"/><Cell col=\"32\" text=\"32AF 배송물류수수료 (합계)\"/><Cell col=\"33\" text=\"33AG 배송운임보조비 (합계)\"/><Cell col=\"34\" text=\"34AH 목재파렛트수량 (합계)\"/><Cell col=\"35\" text=\"35AI 플라스틱파렛트 수량(합계)\"/><Cell col=\"36\" text=\"36AJ 가격군\"/><Cell col=\"37\" text=\"37AK 구매단가구분\"/><Cell col=\"38\" text=\"38AL 매입단가군\"/><Cell col=\"39\" text=\"39AM 비고내용\"/><Cell col=\"40\" text=\"40AN 배송예정서 일련번호\"/><Cell col=\"41\" text=\"41AO 상품코드\"/><Cell col=\"42\" text=\"42AP 출하자코드\"/><Cell col=\"43\" text=\"43AQ 산지사업장코드\"/><Cell col=\"44\" text=\"44AR 산지사업장팀코드\"/><Cell col=\"45\" text=\"45AS 수령인명\"/><Cell col=\"46\" text=\"46AT 수령인전화번호\"/><Cell col=\"47\" text=\"47AU 발주일자\"/><Cell col=\"48\" text=\"48AV 발주전표번호\"/><Cell col=\"49\" text=\"49AW 발주상세일련번호\"/><Cell col=\"50\" text=\"50AX 과세구분\"/><Cell col=\"51\" text=\"51AY 배송상품단가\"/><Cell col=\"52\" text=\"52AZ 배송수량\"/><Cell col=\"53\" text=\"53BA 배송금액\"/><Cell col=\"54\" text=\"54BB 배송부가세\"/><Cell col=\"55\" text=\"55BC 배송공병금액\"/><Cell col=\"56\" text=\"56BD 배송장려금\"/><Cell col=\"57\" text=\"57BE 배송환급수수료\"/><Cell col=\"58\" text=\"58BF 배송물류수수료\"/><Cell col=\"59\" text=\"59BG 배송운임보조비\"/><Cell col=\"60\" text=\"60BH 비고내용(상세)\"/><Cell col=\"61\" text=\"61BI 매출단가유형\"/><Cell col=\"62\" text=\"62BJ 수요자계약유형\"/><Cell col=\"63\" text=\"63BK 구매사업방식코드\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:ROW_SEQ\"/><Cell col=\"2\" text=\"bind:ITEM_CNT\"/><Cell col=\"3\" text=\"bind:SPYPL_NA_TRPL_C\"/><Cell col=\"4\" text=\"bind:SPYPL_NA_TEAM_C\"/><Cell col=\"5\" text=\"bind:DVY_PLA_DT\"/><Cell col=\"6\" text=\"bind:NA_DVY_PLASH_SLPNO\"/><Cell col=\"7\" text=\"bind:ODRPL_NA_TRPL_C\"/><Cell col=\"8\" text=\"bind:ODRPL_NA_TEAM_C\"/><Cell col=\"9\" text=\"bind:RVOPL_NA_TRPL_C\"/><Cell col=\"10\" text=\"bind:RVOPL_NA_TEAM_C\"/><Cell col=\"11\" text=\"bind:ADJPL_NA_TRPL_C\"/><Cell col=\"12\" text=\"bind:ADJPL_NA_TEAM_C\"/><Cell col=\"13\" text=\"bind:MNGT_NA_TR_TPC\"/><Cell col=\"14\" text=\"bind:MNGT_NA_TRPL_C\"/><Cell col=\"15\" text=\"bind:MNGT_NA_TEAM_C\"/><Cell col=\"16\" text=\"bind:DVYAA_NA_TRPL_C\"/><Cell col=\"17\" text=\"bind:DVYAA_NA_TEAM_C\"/><Cell col=\"18\" text=\"bind:DVYAA_C\"/><Cell col=\"19\" text=\"bind:M_CSER_CTR_TPC\"/><Cell col=\"20\" text=\"bind:SPY_TPC\"/><Cell col=\"21\" text=\"bind:SLGT_ETR_DSC\"/><Cell col=\"22\" text=\"bind:NA_WRS_LCLC\"/><Cell col=\"23\" text=\"bind:NA_WRS_MCLC\"/><Cell col=\"24\" text=\"bind:ACCP_C\"/><Cell col=\"25\" text=\"bind:M_DVY_PLA_QT\"/><Cell col=\"26\" text=\"bind:M_DVY_AM\"/><Cell col=\"27\" text=\"bind:M_DVY_VAT\"/><Cell col=\"28\" text=\"bind:VCBT_AM\"/><Cell col=\"29\" text=\"bind:VCBX_AM\"/><Cell col=\"30\" text=\"bind:M_DVY_SSDY\"/><Cell col=\"31\" text=\"bind:M_DVY_TROT_FEE\"/><Cell col=\"32\" text=\"bind:M_DVY_PHD_FEE\"/><Cell col=\"33\" text=\"bind:M_DVY_FAR_ASTCS\"/><Cell col=\"34\" text=\"bind:WD_PLTT_QT\"/><Cell col=\"35\" text=\"bind:PSC_PLTT_QT\"/><Cell col=\"36\" text=\"bind:PRGR_C\"/><Cell col=\"37\" text=\"bind:BUY_UPR_DSC\"/><Cell col=\"38\" text=\"bind:BYNG_UPR_GR_C\"/><Cell col=\"39\" text=\"bind:M_RMK_CNTN\"/><Cell col=\"40\" text=\"bind:ITEM_SEQ\"/><Cell col=\"41\" text=\"bind:NA_WRS_C\"/><Cell col=\"42\" text=\"bind:NA_SOGMN_C\"/><Cell col=\"43\" text=\"bind:PDAA_NA_TRPL_C\"/><Cell col=\"44\" text=\"bind:PDAA_NA_TEAM_C\"/><Cell col=\"45\" text=\"bind:RCPMNM\"/><Cell col=\"46\" text=\"bind:RCPMN_TELNO\"/><Cell col=\"47\" text=\"bind:ODR_DT\"/><Cell col=\"48\" text=\"bind:ODR_SLPNO\"/><Cell col=\"49\" text=\"bind:ODR_DSQNO\"/><Cell col=\"50\" text=\"bind:TXT_DSC\"/><Cell col=\"51\" text=\"bind:DVY_WRS_UPR\"/><Cell col=\"52\" text=\"bind:DVY_PLA_QT\"/><Cell col=\"53\" text=\"bind:DVY_AM\"/><Cell col=\"54\" text=\"bind:DVY_VAT\"/><Cell col=\"55\" text=\"bind:DVY_VCBT_AM\"/><Cell col=\"56\" text=\"bind:DVY_SSDY\"/><Cell col=\"57\" text=\"bind:DVY_TROT_FEE\"/><Cell col=\"58\" text=\"bind:DVY_PHD_FEE\"/><Cell col=\"59\" text=\"bind:DVY_FAR_ASTCS\"/><Cell col=\"60\" text=\"bind:RMK_CNTN\"/><Cell col=\"61\" text=\"bind:SL_UPR_TPC\"/><Cell col=\"62\" text=\"bind:CSER_CTR_TPC\"/><Cell col=\"63\" text=\"bind:BUY_BZ_METC\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("sta_boolChk00", "absolute", "8", "16", "42", "21", null, null, this.div_list);
            obj.set_taborder("2");
            obj.set_text("0");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_sample", "absolute", null, "0", "65", "21", "260", null, this);
            obj.set_taborder("11");
            obj.set_text("SAMPLE");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 117, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("7");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");
            		p.set_text("Div00");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1550");
            		p.set_titletext("배송예정직송일괄등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_search.edt_data00","value","ds_uploadresult","ORGFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0321.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0321.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e) 
        {
        	this.btnDisable([this.btn_find_file00,this.btn_save00]);
        	this.gfn_setInitForm(obj, e); //공통
        };

        this.fn_afterFormOnload = function() //onload
        {
        	var fileParam = {
        		form:this,		
        		param:[{//필요없는 프로퍼티는 주석처리
        				fileObj: this.div_search.FileUpload00,
        				maxSize:10,											//허용할 파일 사이즈(MB)
        				maxLength:1,										//허용할 파일갯수
        				ext:['xls','xlsx'],									//허용할 확장자명
        				cancel_after:function(obj){							//파일선택후, 취소버튼 눌렀을때 실행할 함수명 또는 함수
        					this.form.div_search.txa_excel00.set_value(""); //this대신 this.form으로 접근		
        				},
        				valid_after_fail: 'FileUpload00_onerror',  			//파일검사 실패후 호출할 함수명 또는 함수
        				upload_after_succ: 'FileUpload00_onsuccess',    	//파일 업로드 성공후 호출할 함수명 또는 함수
        				upload_after_fail: 'FileUpload00_onerror'  	    	//파일 업로드 실패후 호출할 함수명 또는 함수
        			}]
        	};
        	this.gfn_addEventFileUpload(fileParam);
        	this.div_auth.set_visible(false);
        }

        //UPLOAD
        this.FileUpload00_onitemchanged = function(obj,e)
        {
        	this.gfn_callUpload(obj);
        }

        //SINGLE DOWNLOAD
        this.btn_down01_onclick = function(obj,e)
        {
        	var systemFileName ="VAN_DS_SC_0320.xls";
        	var fileName = "delivery_notice_sample.xls";
        	
        	var strDownUrl = application.gv_server_url+"rest/common/fileDownload?systemFileName="+systemFileName+"&fileName="+fileName+"&isSampleFile=Y";
        	var wbs_dw     = this.gfn_createWebBorwserComponent(this);
        	
        	wbs_dw.set_url(strDownUrl);
        }

        this.FileUpload00_onsuccess = function(obj,e)
        {

        	if( e.datasets == null )
        	{
        		trace("업로드 실패");
        		this.div_search.txa_excel00.set_value("업로드 실패");
        	} else {
        		trace("업로드 성공");
        		this.div_search.txa_excel00.set_value("업로드 성공");
        		
        		this.ds_uploadresult.clear();
        		this.ds_uploadresult.copyData(e.datasets[0]);		
        		//this.ds_uploadresult.addColumn("CHK", "string"); //멀티건 인경우 'CHK'컬럼추가
        	}	
        }

        this.FileUpload00_onerror = function(obj,e)
        {
        	trace("FileUpload00_onerror");
        	trace("e.errorcode: "+e.errorcode);
        	trace("e.errormsg: "+e.errormsg);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	trace(" strId : " + strId + " strVal : " + strVal);
        }

        this.btn_clear00_onclick = function(obj,e)
        {
        	//this.ds_uploadresult.clearData();
        	//this.ds_excel_bind.clearData();
        	//this.div_list.grd_main00.set_visible(false);
        	//this.div_search.txa_excel00.set_value("");
        	this.reload();
        }

        this.div_search_btn_find_file00_onclick = function(obj,e)
        {	
        	this.fn_SessionChk();
        }

        this.fn_find = function()
        {	
        	if (this.gfn_isEmpty(this.div_search.edt_data00.value) == ""){
        		this.alert("파일을 선택해 주세요");
        		return false;
        	}
        	var fileName	  = "dsName=ds_excel_bind"
        					  +" systemFileName="+this.ds_uploadresult.getColumn(0,"SYSTEMFILENAME")
        					  +" ddlyYn=1"; // 직송일괄
        	var sSvcID        = "p_upload";//통신아이디
        	
        	var sURL          = "svc::rest/scm/order/downloadDeliveryNoticeOrder";// 호출할 서버 페이지 주소
        	var sInDatasets   = "in_ds=ds_excel_bind:A";//보내는데이터셋
        	var sOutDatasets  = "ds_excel_bind=copy_data ds_excel_result=ds_excel_result ds_temp_seq=ds_temp_seq";
        	var sArgument     = fileName;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var tranType 	  = "U"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.btn_save00_onclick = function(obj,e)
        {
        	
        	//var params = " tempSeq=" + tempSeq;
        	var sSvcID        = "p_save";//통신아이디
        	var sURL          = "svc::rest/scm/delivery/insertDeliveryNoticeOrder";// 호출할 서버 페이지 주소
        	var sInDatasets   = "in_ds=ds_excel_bind:A ds_temp_seq=ds_temp_seq";//보내는데이터셋
        	var sOutDatasets  = "";
        	var sArgument     = "ddlyYn=1"// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var tranType 	  = "U"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);	
        }

        
        var tempSeq;
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		if(svcID=="p_upload" && ErrorMsg=="OVERROWCOUNT"){
        			this.alert("100건 이상 연계자료는 System부하관계로 처리할수 없으니 화일을 분리하여 회차단위로 연계처리하시기 바랍니다");
        			this.reload();
        		}else{
        			if(ErrorCode == "-999"){
        				this.alert(ErrorMsg);
        			}else{
        				this.gfn_getMessage("alert", ErrorMsg);
        			}
        			
        			return;
        		}
        	}else{
        		if(svcID=="p_upload" && ErrorMsg=="SUCCESS"){
        			this.div_list.grd_main00.set_visible(true);
        			var msg = "==================================결   과================================================" + String.fromCharCode(13) + String.fromCharCode(10);
        			if(this.ds_excel_bind.rowcount > 0){
        				msg = msg + "[ 오류 건수 ] : " + this.ds_excel_result.rowcount  + " 건 삭제완료 저장버튼을 클릭하여 최종완료을 해주세요"+ String.fromCharCode(13) + String.fromCharCode(10);
        				this.btn_save00.set_enable(true);
        				this.btn_find_file00.set_enable(false);
        				//tempSeq = this.ds_temp_seq.getColumn(0, "TEMP_SEQ");
        			}else{
        				msg = msg + "[ 오류 건수 ] : " + this.ds_excel_result.rowcount  + " 건 삭제완료 "+ String.fromCharCode(13) + String.fromCharCode(10);
        			}
        			
        			if(this.ds_excel_result.rowcount > 0){
        				for(var i = 0; i < this.ds_excel_result.rowcount; i++){
        					if(this.gfn_indexOf(this.ds_excel_result.getColumn(i, "MSG"), "enter") == -1){
        						msg = msg + this.ds_excel_result.getColumn(i, "MSG") + String.fromCharCode(13) + String.fromCharCode(10);
        					}else{					
        						var arrVal = String(this.ds_excel_result.getColumn(i, "MSG")).split("enter");
        						if (arrVal.length > 0){
        							msgContents = this._gfn_AddNewLine(arrVal);
        						}
        						msg = msg + msgContents  + String.fromCharCode(13) + String.fromCharCode(10);
        					}
        				}
        			}else{
        				this.btn_save00.set_enable(true);
        				msg = msg + " [ 정상 건수 ] : " + this.ds_excel_bind.rowcount + " 건 저장버튼을 클릭하여 최종완료을 해주세요" + String.fromCharCode(13) + String.fromCharCode(10);
        				
        			}
        			msg = msg + "========================================================================================" ;
        			this.div_search.txa_excel00.set_value(msg);
        		}
        		
        		
        		if(svcID=="p_save"){
        			this.alert("정상적으로 저장되었습니다.");
        			this.reload();
        		}
        		
        		if(svcID == "sessionDeliveryNoticeOrder"){
        			this.fn_find();
        		}
        	}
        }

        
        this.div_list_btn_toggle00_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        /*sample 다운로드 클릭*/
        this.btn_sample_onclick = function(obj,e)
        {
        	var systemFileName ="delivery_sample.xlsx";
        	var fileName = "delivery_sample.xlsx"; //다운로드 할 파일 이름
        	
        	var strDownUrl = application.gv_server_url+"rest/common/fileDownload?systemFileName="+systemFileName+"&fileName="+fileName+"&isSampleFile=Y";
        	var wbs_dw     = this.gfn_createWebBorwserComponent(this);
        	
        	wbs_dw.set_url(strDownUrl);
        }

        /* 장애여부확인 */
        this.fn_SessionChk = function(){
        	
        	var sSvcID        = "sessionDeliveryNoticeOrder";//통신아이디
        	var sURL          = "svc::/rest/scm/delivery/sessionDeliveryNoticeOrder";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = "";// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_clear00.addEventHandler("onclick", this.btn_clear00_onclick, this);
            this.btn_save00.addEventHandler("onclick", this.btn_save00_onclick, this);
            this.div_search.FileUpload00.addEventHandler("onsuccess", this.FileUpload00_onsuccess, this);
            this.div_search.FileUpload00.addEventHandler("onerror", this.FileUpload00_onerror, this);
            this.div_search.FileUpload00.addEventHandler("onitemchanged", this.FileUpload00_onitemchanged, this);
            this.btn_down01.addEventHandler("onclick", this.btn_down01_onclick, this);
            this.btn_find_file00.addEventHandler("onclick", this.div_search_btn_find_file00_onclick, this);
            this.div_list.btn_toggle00.addEventHandler("onclick", this.div_list_btn_toggle00_onclick, this);
            this.btn_sample.addEventHandler("onclick", this.btn_sample_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0321.xfdl");
        this.loadPreloadList();
       
    };
}
)();
