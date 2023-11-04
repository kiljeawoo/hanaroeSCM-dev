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
                this.set_titletext("반품의뢰전표 조회");
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
            obj._setContents("<ColumnInfo><Column id=\"RGD_RG_DT\" type=\"string\" size=\"32\"/><Column id=\"RGD_PLA_NO\" type=\"string\" size=\"32\"/><Column id=\"RVOPL_NA_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"CSER_CTR_TPC\" type=\"string\" size=\"32\"/><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"DIV\" type=\"string\" size=\"32\"/><Column id=\"NA_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"NA_RGD_STS_DSC\" type=\"string\" size=\"32\"/><Column id=\"WDR_PLA_DT\" type=\"string\" size=\"32\"/><Column id=\"WDRPL_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"WDRPL_CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"WDRPL_NA_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"RGD_AMN_DSC\" type=\"string\" size=\"32\"/></ColumnInfo>");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"39\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"106\"/><Column size=\"106\"/><Column size=\"180\"/><Column size=\"90\"/><Column size=\"0\"/><Column size=\"106\"/><Column size=\"131\"/><Column size=\"131\"/><Column size=\"180\"/><Column size=\"90\"/><Column size=\"116\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"반품등록일자\"/><Cell col=\"2\" text=\"전표번호\"/><Cell col=\"3\" text=\"수주처팀\"/><Cell col=\"4\" text=\"계통구분\"/><Cell col=\"5\" text=\"의뢰처 코드\"/><Cell col=\"6\" text=\"의뢰처명\"/><Cell col=\"7\" text=\"의뢰처팀\"/><Cell col=\"8\" text=\"구분\"/><Cell col=\"9\" text=\"반품구분\"/><Cell col=\"10\" text=\"회수예정일자\"/><Cell col=\"11\" text=\"회수처코드\"/><Cell col=\"12\" text=\"회수처명\"/><Cell col=\"13\" text=\"회수처팀\"/><Cell col=\"14\" text=\"반품관리구분\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:RGD_RG_DT\"/><Cell col=\"2\" text=\"bind:RGD_PLA_NO\"/><Cell col=\"3\" text=\"bind:RVOPL_NA_TEAM_C\"/><Cell col=\"4\" text=\"bind:CSER_CTR_TPC\"/><Cell col=\"5\" text=\"bind:NA_TRPL_C\"/><Cell col=\"6\" text=\"bind:CLNTNM\"/><Cell col=\"7\" text=\"bind:NA_TEAM_C\"/><Cell col=\"8\" text=\"bind:DIV\"/><Cell col=\"9\" text=\"bind:NA_RGD_STS_DSC\"/><Cell col=\"10\" text=\"bind:WDR_PLA_DT\"/><Cell col=\"11\" text=\"bind:WDRPL_NA_TRPL_C\"/><Cell col=\"12\" text=\"bind:WDRPL_CLNTNM\"/><Cell col=\"13\" text=\"bind:WDRPL_NA_TEAM_C\"/><Cell col=\"14\" text=\"bind:RGD_AMN_DSC\"/></Band></Format></Formats>");
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
            obj.set_text("반품의뢰전표 조회");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "17", "76", null, "69", "17", null, this);
            obj.set_taborder("41");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "82", "10", "114", "21", null, null, this.div_search);
            obj.set_taborder("0");
            obj.set_text("반품등록일자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_dvy_rqr_dt_fr", "absolute", "179", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("cal_dvy_rqr_dt_to", "absolute", "290", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static04", "absolute", "280", "10", "10", "21", null, null, this.div_search);
            obj.set_taborder("3");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "427", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("4");
            obj.set_text("전표번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_rgd_pla_no", "absolute", "511", "10", "100", "21", null, null, this.div_search);
            obj.set_taborder("5");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "142", "36", "91", "21", null, null, this.div_search);
            obj.set_taborder("6");
            obj.set_text("반품의뢰처");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_na_trpl_c", "absolute", "239", "36", "138", "21", null, null, this.div_search);
            obj.set_taborder("7");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_na_trpl_c_name", "absolute", "380", "36", "155", "21", null, null, this.div_search);
            obj.set_taborder("9");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
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
            		p.set_titletext("반품의뢰전표 조회");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0610_P00.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0610_P00.xfdl", function() {
        //include "lib::comLib.xjs";
        /*##################################################################################
         화면명	: 반품의뢰전표 조회
         화면ID  	: VAN_DS_SC_0610_P00
         작성자 	: hroh
          작성일자 : 2015.07.22
        ####################################################################################*/

        this.objRtnArr = new Array(6); //팝업창 close시 전달할 값을 위한 배열 선언

        var autoPop = this.parent.autoPop;

        this.form_onload = function(obj,e) 
        {	
        	this.gfn_setInitForm(obj, e); //공통	
        	
        };

        this.fn_afterFormOnload = function(){	
        	var today = this.gfn_today('yyyyMMdd');
        	//this.div_search.cal_dvy_rqr_dt_fr.set_value(this.gfn_minusDate(today, 7));	
        	//this.div_search.cal_dvy_rqr_dt_to.set_value(today);

        	

        	trace("autoPop.search_date->"+autoPop.search_date);		

        	//trace("1-->"+this.gfn_datetime(autoPop.search_date));

        	

        	this.div_search.cal_dvy_rqr_dt_fr.set_value(this.gfn_minusDate(this.gfn_datetime(autoPop.search_date), 7));	

        	this.div_search.cal_dvy_rqr_dt_to.set_value(autoPop.search_date);

        	
        	//this.div_search.cal_dvy_rqr_dt_to.set_value(this.gfn_addDate(today, 7));
        	
        	//trace("autoPop.autoType->"+autoPop.autoType);
        	//trace("autoPop.p_rgd_pla_no->"+autoPop.p_rgd_pla_no);
        	//trace("autoPop.p_mbco_code->"+autoPop.p_mbco_code);	
        	
        	this.div_search.edt_rgd_pla_no.set_value( autoPop.p_rgd_pla_no); //반품입고확인등록 화면에서 반품요청번호 입력햇을시
        	
        	if(autoPop.autoType){		
        		this.btn_search_onclick();
        	}
        	
        };

        //Search
        this.fn_search = function(){
        	this.ds_dataM.clearData();	
        	
        	var mbco_code = application.gv_glnCode;
        	
        	if(this.gfn_isEmpty(autoPop.p_mbco_code)){	
        		mbco_code = this.gfn_nullToEmpty(autoPop.p_mbco_code); //거래처코드
        	}	
        	
        	var dvy_rqr_dt_fr = this.gfn_nullToEmpty(this.div_search.cal_dvy_rqr_dt_fr.value); //조회시작일
        	var dvy_rqr_dt_to = this.gfn_nullToEmpty(this.div_search.cal_dvy_rqr_dt_to.value); //조회종료일	
        	var rgd_pla_no = this.gfn_nullToEmpty(this.div_search.edt_rgd_pla_no.value);  //전표번호
        	
        	var na_trpl_c = this.gfn_nullToEmpty(this.div_search.edt_na_trpl_c.value);  //반품의뢰처코드	
        	
        	var params =  	"dvy_rqr_dt_fr=" + dvy_rqr_dt_fr 
        					+ " dvy_rqr_dt_to=" + dvy_rqr_dt_to
        					+ " rgd_pla_no=" + rgd_pla_no
        					+ " na_trpl_c=" + na_trpl_c
        					+ " mbco_code=" + mbco_code;
        	
        	trace(">>>> params : " + params);
        	
        	
        	var sSvcID        = "retrieveRqtSlpList";//통신아이디
        	var sURL          = "svc::/rest/retann/retrieveRqtSlpList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_dataM=ds_retannCnf";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
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
        		if(svcID == "retrieveRqtSlpList"){
        					
        			if(this.ds_dataM.rowcount == 0){
        				this.ds_dataM.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));				
        			}else if(this.ds_dataM.rowcount == 1){
        				if(autoPop.autoType == true){
        					this.grd_master.selectRow(0);
        					this.grd_master_oncellclick();
        				}
        			}else{
        				this.grd_master.selectRow(0);
        				this.ds_dataM.setFocus();
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
        	/*
        	trace("this.opener.name  -->" + this.opener.name);
        	
        	//반품입고확인등록
        	if(this.opener.name == "VAN_DS_SC_0610"){
        	
        		this.objRtnArr = new Array(4);
        		
        		var na_trpl_c = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "NA_TRPL_C"); //의뢰처코드
        		var clntnm = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "CLNTNM"); //의뢰처명
        		var na_team_c = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "NA_TEAM_C"); //의뢰처팀
        		var rgd_rg_dt = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "RGD_RG_DT"); //반품등록일자
        		var rgd_pla_no = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "RGD_PLA_NO"); //전표번호		
        				
        		this.objRtnArr[0] = na_trpl_c;
        		this.objRtnArr[1] = clntnm;
        		this.objRtnArr[2] = rgd_rg_dt;
        		this.objRtnArr[3] = rgd_pla_no;
        		
        		this.opener.div_search.mae_rgd_rqt_code.set_value(na_trpl_c);
        		this.opener.div_search.edt_rgd_rqt_name.set_value(clntnm);
        		this.opener.div_search.mae_rgd_rqt_team_code.set_value(na_team_c);
        		this.opener.div_search.cal_search_date.set_value(rgd_rg_dt);
        		this.opener.div_search.edt_rgd_pla_no.set_value(rgd_pla_no);
        		
        		//팝업 조회 했는지 여부
        		this.opener.div_list.edt_hidden_chk_function.set_value("true");
        		
        		this.close();
        	}
        	*/
        	
        	this.objRtnArr[0] = this.ds_dataM.getColumn(this.ds_dataM.rowposition,"NA_TRPL_C");
        	this.objRtnArr[1] = this.ds_dataM.getColumn(this.ds_dataM.rowposition,"CLNTNM");
        	this.objRtnArr[2] = this.ds_dataM.getColumn(this.ds_dataM.rowposition,"NA_TEAM_C");
        	this.objRtnArr[3] = this.ds_dataM.getColumn(this.ds_dataM.rowposition,"RGD_RG_DT");
        	this.objRtnArr[4] = this.ds_dataM.getColumn(this.ds_dataM.rowposition,"RGD_PLA_NO");
        	this.objRtnArr[5] = this.ds_dataM.getColumn(this.ds_dataM.rowposition,"CSER_CTR_TPC");
        	this.objRtnArr[6] = this.ds_dataM.getColumn(this.ds_dataM.rowposition,"RGD_AMN_DSC");
        	this.objRtnArr[7] = this.ds_dataM.getColumn(this.ds_dataM.rowposition,"NA_RGD_STS_DSC");
        	this.objRtnArr[8] = "true";
        	
        	trace(this.objRtnArr.toString());
        	this.close(this.objRtnArr.toString());
        }

        this.div_search_edt_rgd_pla_no_onkeydown = function(obj,e)
        {
        	if(e.keycode==13)
        	{
        		this.fn_search();
        	}
        }

        this.div_search_edt_na_trpl_c_onkeydown = function(obj,e)
        {
        	if(e.keycode==13)
        	{
        		this.fn_search();
        	}	
        }

        this.div_search_edt_na_trpl_c_name_onkeydown = function(obj,e)
        {
        	if(e.keycode==13)
        	{
        		this.fn_search();
        	}	
        }

        
        /*초기화버튼*/
        this.Button07_onclick = function(obj,e)
        {
        	this.ds_dataM.clearData();
        	this.div_search.edt_rgd_pla_no.set_value("");
        	this.div_search.edt_na_trpl_c.set_value("");
        	this.div_search.edt_na_trpl_c_name.set_value("");

        }

        this.div_search_cal_dvy_rqr_dt_fr_onkeydown = function(obj,e)
        {
        	if(e.keycode==13)
        	{
        		this.fn_search();
        	}	
        }

        

        this.div_search_cal_dvy_rqr_dt_to_onkeydown = function(obj,e)
        {
        	if(e.keycode==13)
        	{
        		this.fn_search();
        	}		
        }

        this.grd_master_onkeydown = function(obj,e)
        {
        	if(e.keycode == "13"){
        		this.grd_master_oncellclick();
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
            this.Button07.addEventHandler("onclick", this.Button07_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.grd_master.addEventHandler("oncellclick", this.grd_master_oncellclick, this);
            this.grd_master.addEventHandler("onkeydown", this.grd_master_onkeydown, this);
            this.Button65.addEventHandler("onclick", this.Button65_onclick, this);
            this.btn_cancle.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.div_search.cal_dvy_rqr_dt_fr.addEventHandler("onkeydown", this.div_search_cal_dvy_rqr_dt_fr_onkeydown, this);
            this.div_search.cal_dvy_rqr_dt_to.addEventHandler("onkeydown", this.div_search_cal_dvy_rqr_dt_to_onkeydown, this);
            this.div_search.edt_rgd_pla_no.addEventHandler("onkeydown", this.div_search_edt_rgd_pla_no_onkeydown, this);
            this.div_search.edt_na_trpl_c.addEventHandler("onkeydown", this.div_search_edt_na_trpl_c_onkeydown, this);
            this.div_search.edt_na_trpl_c_name.addEventHandler("onkeydown", this.div_search_edt_na_trpl_c_name_onkeydown, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0610_P00.xfdl");

       
    };
}
)();
