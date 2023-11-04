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
                this.set_titletext("배송예정리스트");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,1015,487);
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
            obj._setContents("<ColumnInfo><Column id=\"RVOPL_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"RVOPL_CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"ODRPL_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"ODRPL_CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"DVYAA_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"DVYAA_CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"NA_DVY_PLASH_SLPNO\" type=\"string\" size=\"32\"/><Column id=\"DVY_AM\" type=\"float\" size=\"8\"/><Column id=\"DVY_PLA_DT\" type=\"string\" size=\"32\"/><Column id=\"CSER_CTR_TPC_N\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_CTR_TPC\" type=\"string\" size=\"32\"/><Column id=\"DVY_PLASH_STSC\" type=\"string\" size=\"32\"/><Column id=\"DVY_PLASH_UGAV_YN\" type=\"string\" size=\"32\"/><Column id=\"SPYPL_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"SPYPL_CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"RMK_CNTN\" type=\"string\" size=\"32\"/><Column id=\"DDLY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRGR_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_USR_SYS_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"TEMP_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Grid("grd_master", "absolute", "17", "156", null, "188", "17", null, this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_dataM");
            obj.set_autofittype("none");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"53\"/><Column size=\"88\"/><Column size=\"168\"/><Column size=\"110\"/><Column size=\"181\"/><Column size=\"110\"/><Column size=\"222\"/><Column size=\"110\"/><Column size=\"217\"/><Column size=\"75\"/><Column size=\"119\"/><Column size=\"87\"/><Column size=\"110\"/><Column size=\"220\"/><Column size=\"78\"/><Column size=\"191\"/><Column size=\"142\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"배송예정일\"/><Cell col=\"2\" text=\"배송예정서번호\"/><Cell col=\"3\" text=\"수주처\"/><Cell col=\"4\" text=\"수주처명\"/><Cell col=\"5\" text=\"발주처\"/><Cell col=\"6\" text=\"발주처명\"/><Cell col=\"7\" text=\"배송지거래처\"/><Cell col=\"8\" text=\"배송지거래처명\"/><Cell col=\"9\" text=\"금액\"/><Cell col=\"10\" text=\"계약구분\"/><Cell col=\"11\" text=\"상태코드\"/><Cell col=\"12\" text=\"공급처\"/><Cell col=\"13\" text=\"공급처명\"/><Cell col=\"14\" text=\"직송여부\"/><Cell col=\"15\" text=\"비고\"/><Cell col=\"16\" text=\"임시저장여부\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"date\" text=\"bind:DVY_PLA_DT\" calendardisplaynulltype=\"none\" tooltiptext=\"bind:RMK_CNTN\"/><Cell col=\"2\" text=\"bind:NA_DVY_PLASH_SLPNO\" tooltiptext=\"bind:RMK_CNTN\"/><Cell col=\"3\" text=\"bind:RVOPL_NA_TRPL_C\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:RVOPL_CLNTNM\"/><Cell col=\"5\" text=\"bind:ODRPL_NA_TRPL_C\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:ODRPL_CLNTNM\"/><Cell col=\"7\" text=\"bind:DVYAA_NA_TRPL_C\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:DVYAA_CLNTNM\"/><Cell col=\"9\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DVY_AM\"/><Cell col=\"10\" text=\"bind:CSER_CTR_TPC_N\"/><Cell col=\"11\" text=\"bind:DVY_PLASH_STSC\"/><Cell col=\"12\" text=\"bind:SPYPL_NA_TRPL_C\"/><Cell col=\"13\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:SPYPL_CLNTNM\"/><Cell col=\"14\" text=\"expr:DDLY_YN == '1' ? '직송' : '일반'\"/><Cell col=\"15\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:RMK_CNTN\"/><Cell col=\"16\" expr=\"expr:TEMP_YN == 'Y' ? '임시저장' : '작성완료'\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "74", "17", "73", null, null, this);
            obj.set_taborder("8");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "363", "383", "91", "17", null, null, this);
            obj.set_taborder("10");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "363", "344", "91", "10", null, null, this);
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

            obj = new Static("Static05", "absolute", "363", "141", "76", "15", null, null, this);
            obj.set_taborder("14");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "960", "0", null, "32", "4", null, this);
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
            obj.set_text("배송예정서 조회");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "17", "76", null, "68", "17", null, this);
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
            obj = new Static("Static02", "absolute", "2", "36", "91", "21", null, null, this.div_search);
            obj.set_taborder("6");
            obj.set_text("발주처");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "157", "0", "91", "10", null, null, this.div_search);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "165", "56", "91", "10", null, null, this.div_search);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_odrpl_na_trpl_c", "absolute", "99", "36", "104", "21", null, null, this.div_search);
            obj.set_taborder("14");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_odrpl_na_trpl_c00", "absolute", "315", "10", "104", "21", null, null, this.div_search);
            obj.set_taborder("15");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "173", "31", "91", "5", null, null, this.div_search);
            obj.set_taborder("16");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_odrpl_na_trpl_n", "absolute", "205", "36", "214", "21", null, null, this.div_search);
            obj.set_taborder("17");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "579", "68", "91", "8", null, null, this);
            obj.set_taborder("42");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("str_text", "absolute", "258", "357", null, null, "226", "21", this);
            obj.set_taborder("43");
            obj.set_text("조건을 입력하고 조회버튼을 클릭하세요.");
            obj.set_cssclass("sta_WF_Location");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 68, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("41");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1015, 487, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("배송예정리스트");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0370_P01.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0370_P01.xfdl", function() {
        //include "lib::comLib.xjs";
        /*##################################################################################
         화면명	:  배송예정서 리스트 조회
         화면ID  	: VAN_DS_SC_0370_P01
         작성자 	: hroh
         작성일자 : 2015.07.07
        ####################################################################################*/
        var form_id = "";
        var trplC = "";
        var authorityNo= "";
        var DSTR_TER_YN = "";//신선발주여부
        var all = "";//전체보여주기
        this.form_onload = function(obj,e) 
        {	
        	this.gfn_setInitForm(obj, e); //공통
        	
        	trace("AuthorityNo : "+this.getOwnerFrame().AuthorityNo);
        	form_id = this.getOwnerFrame().form_id;
        	authorityNo = this.getOwnerFrame().AuthorityNo;
        	trplC = this.getOwnerFrame().trplC;
        	DSTR_TER_YN = this.getOwnerFrame().DSTR_TER_YN;
        	all = this.gfn_nullToEmpty(this.getOwnerFrame().sts);
        	this.fn_search();

        };

        this.fn_afterFormOnload = function(){	

        	var today = this.gfn_today('yyyyMMdd');
        	this.div_search.cal_dvy_rqr_dt_fr.set_value(this.gfn_minusDate(today, 1));
        	this.div_search.cal_dvy_rqr_dt_to.set_value(this.gfn_addDate(today, 7));
        	var_notice_kdc	= this.gfn_nullToEmpty(this.getOwnerFrame().notice_kdc);
        	
        	//발주처가 축/수산일 경우에는 발주처를 미리 설정해 놓는다. (S: 수산, L: 축산)
        	if(var_notice_kdc == 'L'){
        		this.div_search.edt_odrpl_na_trpl_c.set_value('8808983410159');
        		
        		this.div_search.edt_odrpl_na_trpl_c.set_enable('false');
        		this.div_search.edt_odrpl_na_trpl_n.set_enable('false');
        	}
        	
        };

        //Search
        var ddly_yn;
        this.fn_search = function(){
        	this.ds_dataM.clearData();
        	
        	var from_date 				= this.gfn_nullToEmpty(this.div_search.cal_dvy_rqr_dt_fr.value);
        	var to_date 				= this.gfn_nullToEmpty(this.div_search.cal_dvy_rqr_dt_to.value);	
        	var edt_odrpl_na_trpl_c 	= this.gfn_nullToEmpty(this.div_search.edt_odrpl_na_trpl_c.value);
        	var edt_odrpl_na_trpl_n 	= "'"+this.gfn_nullToEmpty(this.div_search.edt_odrpl_na_trpl_n.value)+"'";
        	var authorityNo 			= this.gfn_nullToEmpty(this.getOwnerFrame().AuthorityNo);
        	var_ddly_yn 				= this.gfn_nullToEmpty(this.getOwnerFrame().ddly_yn);
        	var temp_yn 				= this.gfn_nullToEmpty(this.getOwnerFrame().temp_yn);
        	var prc_yn 					= this.gfn_nullToEmpty(this.getOwnerFrame().prc_yn);
        	
        	var params =  	"from_date=" 			+ from_date 
        					+ " to_date=" 			+ to_date					
        					+ " odrpl_na_trpl_c=" 	+ edt_odrpl_na_trpl_c
        					+ " odrpl_na_trpl_n=" 	+ edt_odrpl_na_trpl_n
        					+ " authorityNo=" 		+ authorityNo
        					+ " ddly_yn=" 			+ var_ddly_yn
        					+ " temp_yn=" 			+ temp_yn
        					+ " prc_yn=" 			+ prc_yn
        					+ " trplC="				+ trplC
        					+ " all="				+ all;
        					
        	
        	
        	trace("params : " + params);	
        	
        	var sSvcID        = "retrieveOdDlvpnshtList";//통신아이디
        	var sURL          = "svc::/rest/delivery/retrieveOdDlvpnshtList";// 호출할 서버 페이지 주소
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
        		if(svcID == "retrieveOdDlvpnshtList"){
        			//this.gfn_getMessage("alert", "result.message.save.success");
        			
        			if(this.ds_dataM.rowcount != 0){
        				//초기 클릭 안되어 있게 만듬
        				/*
        				this.ds_dataM.set_enableevent(false);
        				this.ds_dataM.set_rowposition(-1);
        				this.ds_dataM.set_enableevent(true);
        				*/
        				/*
        				if(this.ds_dataM.rowcount == 1){
        					this.grd_master_oncellclick();
        				}else 
        				*/
        				
        				if(this.ds_dataM.rowcount == 0){
        					this.str_text.set_text("조회결과가 없습니다.");
        				}else{
        					this.grd_master.selectRow(0);
        					this.grd_master.setFocus();
        				}
        		
        				this.str_text.set_text("조회결과 : " +this.ds_dataM.rowcount+"건이 조회되었습니다.");
        			}else if(this.ds_dataM.rowcount == 0){
        				this.str_text.set_text("조회결과가 없습니다.");
        			}
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
        	var dvy_plash_slpno 	= this.gfn_nullToEmpty(this.ds_dataM.getColumn(this.ds_dataM.rowposition, "NA_DVY_PLASH_SLPNO")); 		
        	var temp_yn 			= this.gfn_nullToEmpty(this.ds_dataM.getColumn(this.ds_dataM.rowposition, "TEMP_YN"));
        	var spypl_na_trpl_c 	= this.gfn_nullToEmpty(this.ds_dataM.getColumn(this.ds_dataM.rowposition, "SPYPL_NA_TRPL_C"));
        	var dvyaa_na_trpl_c 	= this.gfn_nullToEmpty(this.ds_dataM.getColumn(this.ds_dataM.rowposition, "DVYAA_NA_TRPL_C"));
        	var ddly_yn 			= this.gfn_nullToEmpty(this.ds_dataM.getColumn(this.ds_dataM.rowposition, "DDLY_YN"));//직송여부
        	var prgr_c 				= this.gfn_nullToEmpty(this.ds_dataM.getColumn(this.ds_dataM.rowposition, "PRGR_C"));//가격군코드
        	var cser_na_usr_sys_kdc = this.gfn_nullToEmpty(this.ds_dataM.getColumn(this.ds_dataM.rowposition, "CSER_NA_USR_SYS_KDC"));//발주처시스템코드
        	var cser_ctr_tpc 		= this.gfn_nullToEmpty(this.ds_dataM.getColumn(this.ds_dataM.rowposition, "CSER_CTR_TPC"));//계약유형
        	var odrpl_na_trpl_c		= this.gfn_nullToEmpty(this.ds_dataM.getColumn(this.ds_dataM.rowposition, "ODRPL_NA_TRPL_C"));//발주처
        	var dvy_pla_dt		= this.gfn_nullToEmpty(this.ds_dataM.getColumn(this.ds_dataM.rowposition, "DVY_PLA_DT"));//배송예정일자
        	
        	var pbddly_yn		= this.gfn_nullToEmpty(this.ds_dataM.getColumn(this.ds_dataM.rowposition, "PBDDLY_YN"));//PB직송여부
        	var dvy_plash_crt_dsc		= this.gfn_nullToEmpty(this.ds_dataM.getColumn(this.ds_dataM.rowposition, "DVY_PLASH_CRT_DSC"));//배송예정서생성구분코드
        	
        	
        	if(DSTR_TER_YN == "Y" && odrpl_na_trpl_c != "8808983322353" && odrpl_na_trpl_c != "8808983324562" && odrpl_na_trpl_c != "8808983325958" && odrpl_na_trpl_c != "8808983332277"){
        		alert('선택하신 발주서 참조 배송예정서는 일반등록 화면에서 작성하셔야 합니다.');
        		return false;
        	}
        	
        	if(DSTR_TER_YN == "N" && (odrpl_na_trpl_c == "8808983322353" || odrpl_na_trpl_c == "8808983324562" || odrpl_na_trpl_c == "8808983325958" || odrpl_na_trpl_c == "8808983332277")){
        		alert('선택하신 발주서 참조 배송예정서는 신선등록 화면에서 작성하셔야 합니다.');
        		return false;
        	}
        	
        	
        	//미입고 패널티 화면
        	if(this.parent.name == "VAN_DS_SC_0370"){
        		trace("dvy_plash_slpno--" + dvy_plash_slpno);		
        		this.opener.div_search.edt_dvy_plash_slpno.set_value(dvy_plash_slpno);	
        		this.close();
        		return;
        	}
        	
        	//배송예정 거래처별 조회
        	if(form_id == "VAN_DS_SC_0330" || form_id == "VAN_DS_SC_0331"  || form_id == "VAN_DS_SC_0332"){
        		this.objRtnArr = new Array(1);
        		this.objRtnArr[0] = dvy_plash_slpno;
        		trace(this.objRtnArr.toString());
        		
        		this.close(this.objRtnArr.toString());
        		return;
        	}
        	
        	//배송예정서 일반등록
        	if(this.parent.name == "deliveryNoticePopup"){
        		this.opener.edt_na_dvy_plash_slpno.set_value(dvy_plash_slpno);
        		
        		this.objRtnArr = new Array(11);
        		this.objRtnArr[0] = spypl_na_trpl_c;
        		this.objRtnArr[1] = dvyaa_na_trpl_c;
        		this.objRtnArr[2] = dvy_plash_slpno;
        		this.objRtnArr[3] = temp_yn;
        		this.objRtnArr[4] = ddly_yn;
        		this.objRtnArr[5] = prgr_c;
        		this.objRtnArr[6] = cser_na_usr_sys_kdc;
        		this.objRtnArr[7] = cser_ctr_tpc;
        		this.objRtnArr[8] = pbddly_yn;
        		this.objRtnArr[9] = dvy_plash_crt_dsc;
        		this.objRtnArr[10] = dvy_pla_dt;
        		
        		/*
        		if(var_ddly_yn != ddly_yn){
        			var msg = "";
        			if(var_ddly_yn == "0"){
        				msg = "[ 직송 배송예정서 ]는 [ 직송배송예정서 작성 ] 에서 처리하세요."
        			}else{
        				msg = "[ 일반 배송예정서 ]는 [ 일반배송예정서 작성 ] 에서 처리하세요."
        			}
        			alert(msg);
        			return false;
        		}
        		*/
        		
        		this.close(this.objRtnArr.toString());
        		return;
        	}
        	
        	
        	
        	//입고 예약 등록
        	if(this.parent.name == "VAN_DS_SC_0400"){
        		this.opener.div_search.edt_dvy_plash_slpno.set_value(dvy_plash_slpno);
        		
        		this.close();		
        		return;
        		//this.objRtnArr = new Array(1);
        		//this.objRtnArr[0] = spypl_na_trpl_c;		
        		//this.close(this.objRtnArr.toString());
        	}
        }

        this.div_search_edt_odrpl_na_trpl_n_onkeydown = function(obj,e)
        {
        	if(e.keycode=="13"){
        		this.fn_search();
        	}
        }

        this.div_search_edt_odrpl_na_trpl_c_onkeydown = function(obj,e)
        {
        	if(e.keycode=="13"){
        		this.fn_search();
        	}
        }

        this.grd_master_onkeydown = function(obj,e)
        {
        	if(e.keycode=="13"){
        		this.grd_master_oncellclick();
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.grd_master.addEventHandler("oncellclick", this.grd_master_oncellclick, this);
            this.grd_master.addEventHandler("onkeydown", this.grd_master_onkeydown, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.div_search.edt_odrpl_na_trpl_c.addEventHandler("onkeydown", this.div_search_edt_odrpl_na_trpl_c_onkeydown, this);
            this.div_search.edt_odrpl_na_trpl_n.addEventHandler("onkeydown", this.div_search_edt_odrpl_na_trpl_n_onkeydown, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0370_P01.xfdl");

       
    };
}
)();
