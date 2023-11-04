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
                this.set_name("popup01");
                this.set_titletext("팝업 발주번호_배송요청일 조회 ");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,740,402);
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
            obj._setContents("<ColumnInfo><Column id=\"ODR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_CTR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_CTR_TPC_N\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TEAM_N\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_VHC_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"SPY_TPC_N\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_RQR_DT\" type=\"DATE\" size=\"256\"/><Column id=\"ODR_QTTT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ODR_SAM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"VATTT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"VCBT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"VCBX_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DDLY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NA_ODR_STS_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"RVOPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"RVOPL_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"RVOPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"RVOPL_NA_TEAM_N\" type=\"STRING\" size=\"256\"/><Column id=\"ROGO_INF_CRT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"DVYAA_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"DVYAA_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"DVYAA_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"DVYAA_NA_TEAM_N\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"PRGR_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_USR_SYS_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"SPY_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"DDLY_YN_N\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_ADJPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_ADJPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_UPR_MOD_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button07", "absolute", null, "47", "53", "21", "76", null, this);
            obj.set_taborder("0");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "47", "58", "21", "16", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_master", "absolute", "17", "159", null, null, "17", "80", this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_dataM");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"122\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"146\"/><Column size=\"106\"/><Column size=\"106\"/><Column size=\"106\"/><Column size=\"106\"/><Column size=\"97\"/><Column size=\"117\"/><Column size=\"131\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"148\"/><Column size=\"227\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"77\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"발주일자\"/><Cell col=\"2\" text=\"전표번호\"/><Cell col=\"3\" text=\"계약구분\"/><Cell col=\"4\" text=\"발주처코드\"/><Cell col=\"5\" text=\"발주처명\"/><Cell col=\"6\" text=\"발주처팀\"/><Cell col=\"7\" text=\"배송구분\"/><Cell col=\"8\" text=\"공급구분\"/><Cell col=\"9\" text=\"배송요청일\"/><Cell col=\"10\" text=\"발주금액\"/><Cell col=\"11\" text=\"부가세액\"/><Cell col=\"12\" text=\"공병금액\"/><Cell col=\"13\" text=\"공박스금액\"/><Cell col=\"14\" text=\"직송여부\"/><Cell col=\"15\" text=\"발주상태\"/><Cell col=\"16\" text=\"수주처코드\"/><Cell col=\"17\" text=\"수주처명\"/><Cell col=\"18\" text=\"수주처팀\"/><Cell col=\"19\" text=\"수발주생성구분코드\"/><Cell col=\"20\" text=\"배송처코드\"/><Cell col=\"21\" text=\"배송처명\"/><Cell col=\"22\" text=\"배송처팀\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" displaytype=\"date\" text=\"bind:ODR_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" text=\"bind:ODR_SLPNO\"/><Cell col=\"3\" text=\"bind:CSER_CTR_TPC_N\"/><Cell col=\"4\" text=\"bind:ODRPL_NA_TRPL_C\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:ODRPL_NA_TRPL_N\"/><Cell col=\"6\" expr=\"expr:'[' + ODRPL_NA_TEAM_C + ']' + ODRPL_NA_TEAM_N\"/><Cell col=\"7\" text=\"bind:DVY_VHC_DSC\"/><Cell col=\"8\" text=\"bind:SPY_TPC_N\"/><Cell col=\"9\" displaytype=\"date\" text=\"bind:DVY_RQR_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_SAM\" mask=\"#,##0\"/><Cell col=\"11\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:VATTT\" mask=\"#,##0\"/><Cell col=\"12\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:VCBT_AM\" mask=\"#,##0\"/><Cell col=\"13\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:VCBX_AM\" mask=\"#,##0\"/><Cell col=\"14\" text=\"bind:DDLY_YN\"/><Cell col=\"15\" text=\"bind:NA_ODR_STS_DSC\"/><Cell col=\"16\" text=\"bind:RVOPL_NA_TRPL_C\"/><Cell col=\"17\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:RVOPL_NA_TRPL_N\"/><Cell col=\"18\" text=\"bind:RVOPL_NA_TEAM_N\"/><Cell col=\"19\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:ROGO_INF_CRT_DSC\"/><Cell col=\"20\" text=\"bind:ODRPL_NA_TRPL_C\"/><Cell col=\"21\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:DVYAA_NA_TRPL_N\"/><Cell col=\"22\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:DVYAA_NA_TEAM_N\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button65", "absolute", null, null, "54", "29", "357", "41", this);
            obj.set_taborder("6");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancle", "absolute", null, null, "54", "29", "301", "41", this);
            obj.set_taborder("7");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "74", "17", "73", null, null, this);
            obj.set_taborder("8");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "363", "361", "91", "17", null, null, this);
            obj.set_taborder("10");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "363", "322", "91", "10", null, null, this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "242", "32", "91", "15", null, null, this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "363", "145", "76", "15", null, null, this);
            obj.set_taborder("14");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "699", "0", null, "32", "4", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "243", "106", "91", "5", null, null, this);
            obj.set_taborder("38");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("39");
            obj.set_text("수주전표 조회");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "17", "76", null, "69", "17", null, this);
            obj.set_taborder("41");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "2", "10", "91", "21", null, null, this.div_search);
            obj.set_taborder("0");
            obj.set_text("배송요청일");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_dvy_rqr_dt_fr", "absolute", "99", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("cal_dvy_rqr_dt_to", "absolute", "210", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static04", "absolute", "200", "10", "10", "21", null, null, this.div_search);
            obj.set_taborder("3");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "347", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("4");
            obj.set_text("전표번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_odr_slpno", "absolute", "431", "10", "100", "21", null, null, this.div_search);
            obj.set_taborder("5");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "2", "36", "91", "21", null, null, this.div_search);
            obj.set_taborder("6");
            obj.set_text("발주처");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_odrpl_na_trpl_c", "absolute", "99", "36", "105", "21", null, null, this.div_search);
            obj.set_taborder("7");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "347", "36", "79", "21", null, null, this.div_search);
            obj.set_taborder("8");
            obj.set_text("수주처");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_rvopl_na_trpl_c", "absolute", "431", "36", "155", "21", null, null, this.div_search);
            obj.set_taborder("9");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_rvopl_na_team_c", "absolute", "588", "36", "67", "21", null, null, this.div_search);
            obj.set_taborder("10");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "157", "0", "91", "10", null, null, this.div_search);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "304", "31", "103", "5", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "165", "57", "91", "10", null, null, this.div_search);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_odrpl_na_trpl_n", "absolute", "210", "36", "109", "21", null, null, this.div_search);
            obj.set_taborder("14");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "579", "68", "91", "8", null, null, this);
            obj.set_taborder("42");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 69, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("41");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 740, 402, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("팝업 발주번호_배송요청일 조회 ");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("VAN_DS_FN_0204.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_FN_0204.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";
        /*##################################################################################
         화면ID  	: VAN_DS_FN_0204
         화면명	: 발주번호_배송요청일 조회
         작성자 	: swha
         작성일자 : 2015.08.26
        ####################################################################################*/
        var DSTR_TER_YN;
        this.form_onload = function(obj,e) 
        {	
        	this.gfn_setInitForm(obj, e); //공통
        	
        	if(this.gfn_isNull(this.getOwnerFrame().trplC)){
        		this.div_search.edt_rvopl_na_trpl_c.set_value(application.gv_glnCode);
        	}else{
        		this.div_search.edt_rvopl_na_trpl_c.set_value(this.getOwnerFrame().trplC);
        	}
        	
        	this.div_search.edt_rvopl_na_team_c.set_value('00');
        	this.grd_master.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        	DSTR_TER_YN = this.getOwnerFrame().DSTR_TER_YN;
        	var searchParam =
        	{
        		form: this,									
        		param:[{									
        				edit: this.div_search.edt_odrpl_na_trpl_c,
        				fnc: 'btn_search_onclick'
        		},
        		{									
        				edit: this.div_search.edt_odr_slpno,
        				fnc: 'btn_search_onclick'
        		}]
        	};
        	this.addEventEnterSearch(searchParam);
        };

        
        var opt_odr_dt;
        var form_id;
        var var_ddly_yn;
        var var_notice_kdc;
        var var_rogo_inf_crt_dsc; // 수발주정보생성구분코드(245:PB직송)
        var var_spypl_na_trpl_c; // 공급처코드(245:PB직송)

        this.fn_afterFormOnload = function(){
        	opt_odr_dt 		= this.gfn_nullToEmpty(this.getOwnerFrame().opt_odr_dt);
        	form_id			= this.gfn_nullToEmpty(this.getOwnerFrame().form_id);
        	var_ddly_yn		= this.gfn_nullToEmpty(this.getOwnerFrame().ddly_yn);
        	var_notice_kdc	= this.gfn_nullToEmpty(this.getOwnerFrame().notice_kdc);
        	var_rogo_inf_crt_dsc = this.gfn_nullToEmpty(this.getOwnerFrame().rogo_inf_crt_dsc);
        	var_spypl_na_trpl_c = this.gfn_nullToEmpty(this.getOwnerFrame().spypl_na_trpl_c);
        	
        	if(var_ddly_yn != "1"){
        		var_ddly_yn = "0";
        	}
        	
        	if(this.gfn_isNull(var_rogo_inf_crt_dsc) || var_rogo_inf_crt_dsc != "245"){
        		var_rogo_inf_crt_dsc = "all"; // PB직송일 때만
        	}
        	
        	trace("발주서 조회");
        	trace("opt_odr_dt : " + opt_odr_dt);
        	trace("var_ddly_yn : " + var_ddly_yn);
        	trace("var_rogo_inf_crt_dsc : " + var_rogo_inf_crt_dsc);
        	trace("var_spypl_na_trpl_c : " + var_spypl_na_trpl_c);
        	
        	
        	if(opt_odr_dt == ""){
        		var today = this.gfn_today('yyyyMMdd');
        		this.div_search.cal_dvy_rqr_dt_fr.set_value(this.gfn_minusDate(today, 1));
        		this.div_search.cal_dvy_rqr_dt_to.set_value(this.gfn_addDate(today, 7));
        	}else{
        		//var today = this.gfn_today(opt_odr_dt);
        		var today = String(opt_odr_dt);
        		this.div_search.cal_dvy_rqr_dt_fr.set_value(this.gfn_minusDate(today, 1));
        		this.div_search.cal_dvy_rqr_dt_to.set_value(this.gfn_addDate(today, 7));
        	}
        	
        	//발주처가 축/수산일 경우에는 발주처를 미리 설정해 놓는다. (S: 수산, L: 축산)
        	if(var_notice_kdc == 'L'){
        		this.div_search.edt_odrpl_na_trpl_c.set_value('8808983410159');
        		
        		this.div_search.edt_odrpl_na_trpl_c.set_enable('false');
        		this.div_search.edt_odrpl_na_trpl_n.set_enable('false');

        	}
        };

        

        
        //Search
        this.fn_search = function(){
        	
        	this.ds_dataM.clearData();
        	var dvy_rqr_dt_from = this.gfn_nullToEmpty(this.div_search.cal_dvy_rqr_dt_fr.value);
        	var dvy_rqr_dt_to = this.gfn_nullToEmpty(this.div_search.cal_dvy_rqr_dt_to.value);
        	var odr_slpno = this.gfn_nullToEmpty(this.div_search.edt_odr_slpno.value);
        	var odrpl_na_trpl_c = this.gfn_nullToEmpty(this.div_search.edt_odrpl_na_trpl_c.value);
        	var odrpl_na_trpl_n = "'"+this.gfn_nullToEmpty(this.div_search.edt_odrpl_na_trpl_n.value)+"'";
        	var rvopl_na_trpl_c = this.gfn_nullToEmpty(this.div_search.edt_rvopl_na_trpl_c.value);
        	var rvopl_na_team_c = this.gfn_nullToEmpty(this.div_search.edt_rvopl_na_team_c.value);
        	
        	var params =  	  " dvy_rqr_dt_from=" 		+ dvy_rqr_dt_from 
        					+ " dvy_rqr_dt_to=" 		+ dvy_rqr_dt_to
        					+ " odr_slpno=" 				+ odr_slpno
        					+ " odrpl_na_trpl_c=" 		+ odrpl_na_trpl_c
        					+ " odrpl_na_trpl_n=" 		+ odrpl_na_trpl_n
        					+ " rvopl_na_trpl_c="		+ rvopl_na_trpl_c
        					+ " rvopl_na_team_c="		+ rvopl_na_team_c
        					+ " ddly_yn="					+ var_ddly_yn
        					+ " spypl_na_trpl_c="		+ var_spypl_na_trpl_c
        					+ " rogo_inf_crt_dsc="		+ var_rogo_inf_crt_dsc;
        					
        	
        	
        	trace(">>>> params : " + params);
        				
        	var sSvcID        = "retrieveOrdersPopUp";//통신아이디
        	var sURL          = "svc::/rest/scm/delivery/retrieveOrdersPopUp";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_dataM=ds_dataM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "retrieveOrdersPopUp"){	
        			this.ds_dataM.set_rowposition(-1);
        			if(this.ds_dataM.rowcount == 0){
        				this.grd_master.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        			}else{
        				this.grd_master.selectRow(0);
        				this.grd_master.setFocus();
        			}
        		}
        		
        		if(svcID == "billangMarkUp"){
        			trace("빌링 완료");
        			this.objRtnArr = new Array(15);
        		
        			var odrpl_na_trpl_c 		= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "ODRPL_NA_TRPL_C"); 
        			var odrpl_na_team_c 		= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "ODRPL_NA_TEAM_C"); 
        			var odr_dt 					= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "ODR_DT"); 
        			var odr_slpno 				= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "ODR_SLPNO"); 
        			var dlvpnsht_temp_yn 		= 'X'//대상 : 배송예정서 미작성에 대한 리스트
        			var spypl_na_trpl_c 		= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "SPYPL_NA_TRPL_C"); 
        			var dvyaa_na_trpl_c 		= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "DVYAA_NA_TRPL_C"); 
        			var dvyaa_na_team_c 		= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "DVYAA_NA_TEAM_C"); 
        			var spypl_na_team_c 		= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "SPYPL_NA_TEAM_C"); 
        			var ddly_yn 				= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "DDLY_YN");
        			var cser_ctr_tpc 			= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "CSER_CTR_TPC");
        			var prgr_c 					= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "PRGR_C");
        			var cser_na_usr_sys_kdc 	= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "CSER_NA_USR_SYS_KDC");
        			var spy_tpc 				= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "SPY_TPC");
        			var byng_upr_mod_yn			= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "BYNG_UPR_MOD_YN");
        			
        			if(DSTR_TER_YN == "Y" && odrpl_na_trpl_c != "8808983322353" && odrpl_na_trpl_c != "8808983324562" && odrpl_na_trpl_c != "8808983325958" && odrpl_na_trpl_c != "8808983332277"){
        				alert('선택하신 발주서는 일반등록 화면에서 작성하셔야 합니다.');
        				return false;
        			}
        			
        			if(DSTR_TER_YN == "N" && (odrpl_na_trpl_c == "8808983322353" || odrpl_na_trpl_c == "8808983324562" || odrpl_na_trpl_c == "8808983325958" || odrpl_na_trpl_c == "8808983332277")){
        				alert('선택하신 발주서는 신선등록 화면에서 작성하셔야 합니다.');
        				return false;
        			}
        			
        			
        			
        			this.objRtnArr[0] = odrpl_na_trpl_c;
        			this.objRtnArr[1] = odrpl_na_team_c;
        			this.objRtnArr[2] = odr_dt;
        			this.objRtnArr[3] = odr_slpno;
        			this.objRtnArr[4] = dlvpnsht_temp_yn;
        			this.objRtnArr[5] = spypl_na_trpl_c;
        			this.objRtnArr[6] = spypl_na_team_c;
        			this.objRtnArr[7] = dvyaa_na_trpl_c;
        			this.objRtnArr[8] = dvyaa_na_team_c;
        			this.objRtnArr[9] = ddly_yn;
        			this.objRtnArr[10] = cser_ctr_tpc;
        			this.objRtnArr[11] = prgr_c;
        			this.objRtnArr[12] = cser_na_usr_sys_kdc;
        			this.objRtnArr[13] = spy_tpc;
        			this.objRtnArr[14] = byng_upr_mod_yn;
        			
        			if(var_ddly_yn != ddly_yn){
        				var msg = "";
        				if(var_ddly_yn == "0"){
        					msg = "[ 직송 발주 ]는 [ 직송배송예정서 작성 ] 에서 처리하세요."
        				}else{
        					msg = "[ 일반 발주 ]는 [ 일반배송예정서 작성 ] 에서 처리하세요."
        				}
        				alert(msg);
        				return false;
        			}
        			trace(this.objRtnArr.toString());
        			this.close(this.objRtnArr.toString());
        		}
        	}
        }

        
        //Close
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        
        //Event

        this.btn_search_onclick = function(obj,e)
        {
        	this.ds_dataM.clearData();
        	this.fn_search();
        }

        this.fn_billingMarkUpService = function(trplO,teamO,odrDt,odrSlpno){
        	trace("trplO : " + trplO);
        	trace("teamO : " + teamO);
        	trace("odrDt : " + odrDt);
        	trace("odrSlpno : " + odrSlpno);
        	var params =  	  " trplO=" 		+ trplO 
        					+ " teamO=" 		+ teamO
        					+ " odrDt=" 		+ odrDt
        					+ " odrSlpno=" 		+ odrSlpno;
        	trace("params : " + params);
        	
        	var sSvcID        = "billangMarkUp";//통신아이디
        	var sURL          = "svc::/rest/scm/delivery/billangMarkUp";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        	
        	
        }

        this.grd_master_oncellclick = function(obj,e)
        {
        	
        	trace("form_id  -->" + form_id);
        	var odrpl_na_trpl_c 		= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "ODRPL_NA_TRPL_C"); 
        	var odrpl_na_team_c 		= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "ODRPL_NA_TEAM_C"); 
        	var odr_dt 					= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "ODR_DT"); 
        	var odr_slpno 				= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "ODR_SLPNO"); 
        	
        	
        	this.fn_billingMarkUpService(odrpl_na_trpl_c, odrpl_na_team_c, odr_dt, odr_slpno);
        	
        	/*
        		배송예정서 일반등록 : VAN_DS_SC_0300
        		배송예정서 직송등록 : VAN_DS_SC_0310
        	*/
        	
        	//if(form_id == "VAN_DS_SC_0300" || form_id == "VAN_DS_SC_0310" ){
        		
        		
        	//}
        	
        	
        	
        }

        

        this.div_search_edt_odr_slpno_onkeydown = function(obj,e)
        {
        	if(e.keycode == "13"){
        		this.fn_search();
        	}
        }

        this.div_search_edt_odrpl_na_trpl_c_onkeydown = function(obj,e)
        {
        	if(e.keycode == "13"){
        		this.fn_search();
        	}
        }

        this.div_search_edt_odrpl_na_trpl_n_onkeydown = function(obj,e)
        {
        	if(e.keycode == "13"){
        		this.fn_search();
        	}
        }

        this.div_search_cal_dvy_rqr_dt_fr_oneditclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.div_search.cal_dvy_rqr_dt_fr.value) || this.gfn_isNull(this.div_search.cal_dvy_rqr_dt_to.value)){
        		alert("배송요청일 확인해 주세요");
        		return false;
        	}
        	if(e.keycode == "13"){
        		this.fn_search();
        	}
        }

        this.div_search_cal_dvy_rqr_dt_to_oneditclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.div_search.cal_dvy_rqr_dt_fr.value) || this.gfn_isNull(this.div_search.cal_dvy_rqr_dt_to.value)){
        		alert("배송요청일 확인해 주세요");
        		return false;
        	}
        	if(e.keycode == "13"){
        		this.fn_search();
        	}
        }

        this.grd_master_onkeydown = function(obj,e)
        {
        	if(e.keycode == "13"){
        		this.grd_master_oncellclick();
        	}
        }

        this.popup01_onkeydown = function(obj,e)
        {
        	if(e.keycode == "13"){
        		this.fn_search();
        	}
        }

        this.Button65_onclick = function(obj,e)
        {
        	this.grd_master_oncellclick();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.popup01_oninit, this);
            this.addEventHandler("onkeydown", this.popup01_onkeydown, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.grd_master.addEventHandler("oncellclick", this.grd_master_oncellclick, this);
            this.grd_master.addEventHandler("onkeydown", this.grd_master_onkeydown, this);
            this.Button65.addEventHandler("onclick", this.Button65_onclick, this);
            this.btn_cancle.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.div_search.cal_dvy_rqr_dt_fr.addEventHandler("oneditclick", this.div_search_cal_dvy_rqr_dt_fr_oneditclick, this);
            this.div_search.cal_dvy_rqr_dt_to.addEventHandler("oneditclick", this.div_search_cal_dvy_rqr_dt_to_oneditclick, this);
            this.div_search.edt_odr_slpno.addEventHandler("onkeydown", this.div_search_edt_odr_slpno_onkeydown, this);
            this.div_search.edt_odrpl_na_trpl_c.addEventHandler("onkeydown", this.div_search_edt_odrpl_na_trpl_c_onkeydown, this);
            this.div_search.edt_rvopl_na_trpl_c.addEventHandler("oneditclick", this.div_search_edt_rvopl_na_trpl_c_oneditclick, this);
            this.div_search.edt_odrpl_na_trpl_n.addEventHandler("onkeydown", this.div_search_edt_odrpl_na_trpl_n_onkeydown, this);

        };

        this.loadIncludeScript("VAN_DS_FN_0204.xfdl", true);

       
    };
}
)();
