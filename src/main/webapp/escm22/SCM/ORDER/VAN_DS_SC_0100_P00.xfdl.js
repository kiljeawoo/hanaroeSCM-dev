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
                this.set_titletext("팝업 수주번호조회");
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
            obj._setContents("<ColumnInfo><Column id=\"ODRPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SHRT_BZPLNM\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"TEAMNM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"VAN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_VHC_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"SPY_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_RQR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_QT\" type=\"INT\" size=\"256\"/><Column id=\"ODR_AM\" type=\"INT\" size=\"256\"/><Column id=\"DLVPNSHT_TEMP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Grid("grd_master", "absolute", "17", "159", null, "163", "17", null, this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_dataM");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"106\"/><Column size=\"106\"/><Column size=\"106\"/><Column size=\"106\"/><Column size=\"106\"/><Column size=\"131\"/><Column size=\"120\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"발주일자\"/><Cell col=\"1\" text=\"발주전표번호\"/><Cell col=\"2\" text=\"발주처코드\"/><Cell col=\"3\" text=\"발주처명\"/><Cell col=\"4\" text=\"발주처팀코드\"/><Cell col=\"5\" text=\"발주처팀명\"/><Cell col=\"6\" text=\"배송구분\"/><Cell col=\"7\" text=\"공급구분\"/><Cell col=\"8\" text=\"배송요청일\"/><Cell col=\"9\" text=\"발주수량\"/><Cell col=\"10\" text=\"발주금액\"/><Cell col=\"11\" text=\"배송예정서작성여부\"/><Cell col=\"12\" text=\"공급처코드\"/><Cell col=\"13\" text=\"공급처팀코드\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" text=\"bind:ODR_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" text=\"bind:ODR_SLPNO\"/><Cell col=\"2\" text=\"bind:ODRPL_NA_TRPL_C\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:SHRT_BZPLNM\"/><Cell col=\"4\" text=\"bind:ODRPL_NA_TEAM_C\"/><Cell col=\"5\" text=\"bind:TEAMNM\"/><Cell col=\"6\" text=\"bind:DVY_VHC_DSC\"/><Cell col=\"7\" text=\"bind:SPY_TPC\"/><Cell col=\"8\" displaytype=\"date\" text=\"bind:DVY_RQR_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_QT\" mask=\"#,##0\"/><Cell col=\"10\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_AM\" mask=\"#,##0\"/><Cell col=\"11\" text=\"bind:DLVPNSHT_TEMP_YN\" expr=\"expr:DLVPNSHT_TEMP_YN == 'Y' ? '임시저장' : DLVPNSHT_TEMP_YN == 'X' ? '미작성' : '작성'\"/><Cell col=\"12\" text=\"bind:SPYPL_NA_TRPL_C\"/><Cell col=\"13\" text=\"bind:SPYPL_NA_TEAM_C\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button65", "absolute", "329", "332", "54", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancle", "absolute", "385", "332", "54", "29", null, null, this);
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
            obj.set_text("수주번호조회");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "17", "76", null, "69", "17", null, this);
            obj.set_taborder("41");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "2", "10", "91", "21", null, null, this.div_search);
            obj.set_taborder("0");
            obj.set_text("발주일자");
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
            obj = new Edit("edt_odr_slpno", "absolute", "431", "10", "155", "21", null, null, this.div_search);
            obj.set_taborder("5");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "2", "36", "91", "21", null, null, this.div_search);
            obj.set_taborder("6");
            obj.set_text("발주처");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_odrpl_na_trpl_c", "absolute", "99", "36", "210", "21", null, null, this.div_search);
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
            		p.set_titletext("팝업 수주번호조회");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0100_P00.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0100_P00.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";
        /*##################################################################################
         화면명	: 수주등록
         화면ID  	: VAN_DS_SC_0100_P00
         작성자 	: swha
          작성일자 : 2015.07.06
        ####################################################################################*/
        /*
        	Option
        */

        this.form_onload = function(obj,e) 
        {	
        	this.gfn_setInitForm(obj, e); //공통
        	this.grd_master.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));	
        	
        	var searchParam =
        	{
        			form: this,									
        			param:[{									
        					edit: this.div_search.cal_dvy_rqr_dt_fr,
        					fnc: 'btn_search_onclick'
        			},
        			{									
        					edit: this.div_search.cal_dvy_rqr_dt_to,
        					fnc: 'btn_search_onclick'
        			},
        			{									
        					edit: this.div_search.edt_odr_slpno,
        					fnc: 'btn_search_onclick'
        			},
        			{									
        					edit: this.div_search.edt_odrpl_na_trpl_c,
        					fnc: 'btn_search_onclick'
        			}
        			]
        	};
        	this.addEventEnterSearch(searchParam);
        	
        };

        
        var temp_yn = ""; // 발주정보 임시저장 여부(N : 작성완료, Y : 작성 중)
        var dlvpnsht_temp_yn = ""; //배송예정서 임시저장 여부(X : 미작성, Y : 작성중, N : 작성완료)
        var ddly_yn = ""; //직송상품여부
        var opt_odr_dt = "";//검색 발주일자
        var rvopl_na_trpl_c = "";//수주처
        var form_id = "";//부모창 ID
        this.fn_afterFormOnload = function(){

        	
        	trace(this.getOwnerFrame().form.name);
        	opt_odr_dt = this.gfn_nullToEmpty(this.getOwnerFrame().opt_odr_dt);
        	temp_yn = this.gfn_nullToEmpty(this.getOwnerFrame().temp_yn);
        	dlvpnsht_temp_yn = this.gfn_nullToEmpty(this.getOwnerFrame().dlvpnsht_temp_yn);
        	ddly_yn = this.gfn_nullToEmpty(this.getOwnerFrame().ddly_yn);
        	rvopl_na_trpl_c = this.gfn_nullToEmpty(this.getOwnerFrame().trplC);
        	//trplC = application.gv_glnCode;
        	

        	form_id = this.gfn_nullToEmpty(this.getOwnerFrame().form_id);
        	this.div_search.edt_rvopl_na_trpl_c.set_value(rvopl_na_trpl_c);
        	
        	
        	if(opt_odr_dt == ""){
        		var today = this.gfn_today('yyyyMMdd');
        		this.div_search.cal_dvy_rqr_dt_fr.set_value(this.gfn_minusDate(today, 0));
        		this.div_search.cal_dvy_rqr_dt_to.set_value(this.gfn_addDate(today, 0));
        	}else{
        		//var today = this.gfn_today(opt_odr_dt);
        		var today = opt_odr_dt;
        		this.div_search.cal_dvy_rqr_dt_fr.set_value(this.gfn_minusDate(today, 0));
        		this.div_search.cal_dvy_rqr_dt_to.set_value(this.gfn_addDate(today, 0));
        	}	
        };

        

        
        //Search
        this.fn_search = function(){
        	this.ds_dataM.clearData();
        	
        	var dvy_rqr_dt_fr = this.gfn_nullToEmpty(this.div_search.cal_dvy_rqr_dt_fr.value);
        	var dvy_rqr_dt_to = this.gfn_nullToEmpty(this.div_search.cal_dvy_rqr_dt_to.value);
        	var odr_slpno = this.gfn_nullToEmpty(this.div_search.edt_odr_slpno.value);
        	var odrpl_na_trpl_c = this.gfn_nullToEmpty(this.div_search.edt_odrpl_na_trpl_c.value);
        	var rvopl_na_trpl_c = this.gfn_nullToEmpty(this.div_search.edt_rvopl_na_trpl_c.value);
        	
        	
        	var params =  	  " dvy_rqr_dt_fr=" 		+ dvy_rqr_dt_fr 
        					+ " dvy_rqr_dt_to=" 		+ dvy_rqr_dt_to
        					+ " odr_slpno=" 			+ odr_slpno
        					+ " odrpl_na_trpl_c=" 		+ odrpl_na_trpl_c
        					+ " temp_yn=" 				+ temp_yn
        					+ " dlvpnsht_temp_yn="		+ dlvpnsht_temp_yn
        					+ " ddly_yn="				+ ddly_yn
        					+ " rvopl_na_trpl_c="		+ rvopl_na_trpl_c;
        					
        	
        	
        	trace(">>>> params : " + params);
        				
        	var sSvcID        = "retrieveVanSeq";//통신아이디
        	var sURL          = "svc::/rest/scm/order/retrieveVanSeq";// 호출할 서버 페이지 주소
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
        		if(svcID == "retrieveVanSeq"){
        			if(this.ds_dataM.rowcount == 0)
        				this.grd_master.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));	
        			//this.gfn_getMessage("alert", "result.message.save.success");
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
        	this.fn_search();
        }

        

        this.grd_master_oncellclick = function(obj,e)
        {
        	
        	trace("form_id  -->" + form_id);
        	
        	
        	//수주등록일 경우
        	if(form_id == "VAN_DS_SC_0100"){	
        		this.objRtnArr = new Array(6);
        			
        		var odrpl_na_trpl_c = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "ODRPL_NA_TRPL_C"); 
        		var odrpl_na_team_c = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "ODRPL_NA_TEAM_C"); 
        		var odr_dt = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "ODR_DT"); 
        		var odr_slpno = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "ODR_SLPNO"); 
        		var van_seq = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "VAN_SEQ"); 
        		
        		this.objRtnArr[0] = odrpl_na_trpl_c;
        		this.objRtnArr[1] = odrpl_na_team_c;
        		this.objRtnArr[2] = odr_dt;
        		this.objRtnArr[3] = odr_slpno;
        		this.objRtnArr[4] = van_seq;
        		this.objRtnArr[5] = rvopl_na_trpl_c;
        		this.close(this.objRtnArr.toString());
        		/*
        		this.opener.edt_h_odrpl_na_trpl_c.set_value(odrpl_na_trpl_c);
        		this.opener.edt_h_odrpl_na_team_c.set_value(odrpl_na_team_c);
        		this.opener.edt_h_odr_dt.set_value(odr_dt);
        		this.opener.edt_h_odr_slpno.set_value(odr_slpno);
        		this.opener.edt_van_seq.set_value(van_seq);
        		*/
        	}
        	
        	//미납 패널티일경우
        	if(form_id == "VAN_DS_SC_0370"){
        		var odr_slpno = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "ODR_SLPNO");

        		this.opener.div_search.edt_odr_slpno.set_value(odr_slpno);
        		this.close();
        	}
        	
        	//배송예정서 일반등록
        	/*
        	if(this.opener.name == "VAN_DS_SC_0300"){
        		this.objRtnArr = new Array(9);
        		
        		var odrpl_na_trpl_c = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "ODRPL_NA_TRPL_C"); 
        		var odrpl_na_team_c = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "ODRPL_NA_TEAM_C"); 
        		var odr_dt = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "ODR_DT"); 
        		var odr_slpno = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "ODR_SLPNO"); 
        		var dlvpnsht_temp_yn = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "DLVPNSHT_TEMP_YN"); 
        		var spypl_na_trpl_c = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "SPYPL_NA_TRPL_C"); 
        		var dvyaa_na_trpl_c = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "DVYAA_NA_TRPL_C"); 
        		var spypl_na_team_c = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "SPYPL_NA_TEAM_C"); 
        		
        		
        		this.objRtnArr[0] = odrpl_na_trpl_c;
        		this.objRtnArr[1] = odrpl_na_team_c;
        		this.objRtnArr[2] = odr_dt;
        		this.objRtnArr[3] = odr_slpno;
        		this.objRtnArr[4] = dlvpnsht_temp_yn;
        		this.objRtnArr[5] = spypl_na_trpl_c;
        		this.objRtnArr[6] = spypl_na_team_c;
        		this.objRtnArr[7] = dvyaa_na_trpl_c;
        		
        		this.opener.cal_odr_dt.set_value(opt_odr_dt);
        		trace(this.objRtnArr.toString());
        		this.close(this.objRtnArr.toString());
        	}
        	*/
        	//배송예정서 직송등록
        	if(form_id == "VAN_DS_SC_0310"){
        		this.objRtnArr = new Array(9);
        		
        		var odrpl_na_trpl_c = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "ODRPL_NA_TRPL_C"); 
        		var odrpl_na_team_c = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "ODRPL_NA_TEAM_C"); 
        		var odr_dt = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "ODR_DT"); 
        		var odr_slpno = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "ODR_SLPNO"); 
        		var dlvpnsht_temp_yn = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "DLVPNSHT_TEMP_YN"); 
        		var spypl_na_trpl_c = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "SPYPL_NA_TRPL_C"); 
        		var dvyaa_na_trpl_c = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "DVYAA_NA_TRPL_C"); 
        		var spypl_na_team_c = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "SPYPL_NA_TEAM_C"); 
        		
        		
        		this.objRtnArr[0] = odrpl_na_trpl_c;
        		this.objRtnArr[1] = odrpl_na_team_c;
        		this.objRtnArr[2] = odr_dt;
        		this.objRtnArr[3] = odr_slpno;
        		this.objRtnArr[4] = dlvpnsht_temp_yn;
        		this.objRtnArr[5] = spypl_na_trpl_c;
        		this.objRtnArr[6] = spypl_na_team_c;
        		this.objRtnArr[7] = dvyaa_na_trpl_c;
        		
        		this.opener.cal_odr_dt.set_value(opt_odr_dt);
        		trace(this.objRtnArr.toString());
        		this.close(this.objRtnArr.toString());
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.grd_master.addEventHandler("oncellclick", this.grd_master_oncellclick, this);
            this.btn_cancle.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0100_P00.xfdl", true);

       
    };
}
)();
