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
                this.set_name("SYS_BATCH_1040");
                this.set_titletext("전산작업일정관리");
                this.set_name("OMG_DS_SC_6120");
                this._setFormPosition(0,0,803,700);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_m", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"BSN_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"WK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"WK_ST_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"WK_ED_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"NOTICE_MSG\" type=\"STRING\" size=\"2048\"/><Column id=\"IF_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_PROC_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"RECV_PROC_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"SUCCESS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MP_1\" type=\"STRING\" size=\"256\"/><Column id=\"MP_2\" type=\"STRING\" size=\"256\"/><Column id=\"UYN\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_bsn", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">TAX</Col><Col id=\"NM\">세금계산서</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "18", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "787", "0", "15", "490", null, null, this);
            obj.set_taborder("3");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("4");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "69", "15", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "90", "21", null, null, this.div_search);
            obj.set_taborder("7");
            obj.set_text("네트웍상태");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "15", "39", "90", "21", null, null, this.div_search);
            obj.set_taborder("8");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_useYn", "absolute", "110", "39", "140", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_useYn_innerdataset = new Dataset("cbo_useYn_innerdataset", this.div_search.cbo_useYn);
            cbo_useYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(cbo_useYn_innerdataset);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("-1");
            obj = new Static("Static04", "absolute", "251", "-2", "30", "67", null, null, this.div_search);
            obj.set_taborder("11");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "281", "39", "90", "21", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("작업여부");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "281", "10", "90", "21", null, null, this.div_search);
            obj.set_taborder("13");
            obj.set_text("작업일");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_ifState", "absolute", "110", "10", "140", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_ifState_innerdataset = new Dataset("cbo_ifState_innerdataset", this.div_search.cbo_ifState);
            cbo_ifState_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(cbo_ifState_innerdataset);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj = new Radio("rdo_wkDtm", "absolute", "376", "10", "140", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_wkDtm_innerdataset = new Dataset("rdo_wkDtm_innerdataset", this.div_search.rdo_wkDtm);
            rdo_wkDtm_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">지정일</Col></Row></Rows>");
            obj.set_innerdataset(rdo_wkDtm_innerdataset);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_index("0");
            obj = new Calendar("dt_wkDtm", "absolute", "551", "10", "140", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_align("center middle");
            obj.set_enable("false");
            obj = new Combo("cbo_successYn", "absolute", "376", "39", "140", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_successYn_innerdataset = new Dataset("cbo_successYn_innerdataset", this.div_search.cbo_successYn);
            cbo_successYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(cbo_successYn_innerdataset);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("-1");

            obj = new Button("btn_save", "absolute", null, "0", "42", "21", "82", null, this);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("URL('theme://images/btn_WF_CRUD.png') stretch 7,7");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "97", null, "650", "15", null, this);
            obj.set_taborder("0");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "667", "1", "56", "41", null, null, this.div_list);
            obj.set_taborder("23");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_flag", "absolute", "347", "0", null, "12", "363", null, this.div_list);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_addRow", "absolute", "92.01%", "11", null, "21", "0.38%", null, this.div_list);
            obj.set_taborder("25");
            obj.set_text("행추가");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "1.78%", "50", null, "549", "0%", null, this.div_list);
            obj.set_taborder("26");
            obj.set_binddataset("ds_m");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"43\"/><Column size=\"105\"/><Column size=\"140\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"224\"/><Column size=\"89\"/><Column size=\"89\"/><Column size=\"89\"/><Column size=\"89\"/><Column size=\"124\"/><Column size=\"124\"/><Column size=\"130\"/><Column size=\"64\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"선택\"/><Cell col=\"1\" text=\"업무 구분\"/><Cell col=\"2\" text=\"시스템명\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"작업시작일시\"/><Cell col=\"4\" text=\"작업종료일시\"/><Cell col=\"5\" text=\"작업안내메시지\"/><Cell col=\"6\" text=\"네트웍송수신\"/><Cell col=\"7\" text=\"송신배치실행\"/><Cell col=\"8\" text=\"수신배치실행\"/><Cell col=\"9\" text=\"작업완료여부\"/><Cell col=\"10\" text=\"휴대폰1\"/><Cell col=\"11\" text=\"휴대폰2\"/><Cell col=\"12\" text=\"수정일시\"/><Cell col=\"13\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" displaytype=\"expr:SQNO == &quot;&quot; || SQNO == null ? &quot;combo&quot; : &quot;normal&quot;\" edittype=\"expr:SQNO == &quot;&quot; || SQNO == null ? &quot;combo&quot; : &quot;none&quot;\" style=\"align:center;\" text=\"bind:BSN_DSC\" combodataset=\"ds_bsn\" combocodecol=\"CD\" combodatacol=\"NM\" combodisplay=\"display\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" style=\"align:center;\" text=\"bind:WK_NAME\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" style=\"align:center;\" text=\"bind:WK_ST_DTM\" mask=\"yyyy-MM-dd HH:mm\" calendardisplay=\"display\" calendardisplaynulltype=\"default\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" style=\"align:center;\" text=\"bind:WK_ED_DTM\" mask=\"yyyy-MM-dd HH:mm\" calendardisplay=\"display\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"textarea\" style=\"align:center;\" text=\"bind:NOTICE_MSG\"/><Cell col=\"6\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:IF_STAT\" autosizecol=\"default\"/><Cell col=\"7\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:SEND_PROC_STAT\"/><Cell col=\"8\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:RECV_PROC_STAT\"/><Cell col=\"9\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:SUCCESS_YN\"/><Cell col=\"10\" displaytype=\"text\" edittype=\"text\" style=\"align:center;\" text=\"bind:MP_1\"/><Cell col=\"11\" displaytype=\"text\" edittype=\"text\" style=\"align:center;\" text=\"bind:MP_2\"/><Cell col=\"12\" displaytype=\"date\" edittype=\"none\" style=\"align:center;\" text=\"bind:LSCHG_DTM\" mask=\"yyyy-MM-dd HH:mm\" calendardisplay=\"edit\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"13\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:UYN\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 965, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 965, 444, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div02");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 700, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("전산작업일정관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item4","div_search.dt_wkDtm","value","ds_survey","APL_ST_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SYS_BATCH_1040.xfdl", "lib::comLib.xjs");
        this.registerScript("SYS_BATCH_1040.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        /* 페이지 로딩 후 실행부분 */
        this.fn_afterFormOnload = function()
        {
        	
        	//페이지 로딩후 실행부분
        	/*초기값세팅*/
        	this.div_search.cbo_ifState.set_index(0);
        	this.div_search.cbo_successYn.set_index(0);
        	this.div_search.cbo_useYn.set_index(0);

        
            /*조회 호출*/
           this.btn_search.click();
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
         
        /* 조회버튼 이벤트 */
        this.btn_search_onclick = function(obj,e)
        {
            this.fn_retrieveTxNtsIfList(); // 처음조회시 1페이지를 조회한다.
        }

        /* 리스트  조회*/
        this.fn_retrieveTxNtsIfList = function()
        {
            var sParams = " IF_STATE="+this.gfn_nullToEmpty(this.div_search.cbo_ifState.value)
        				+ " DTM_TYPE="+this.gfn_nullToEmpty(this.div_search.rdo_wkDtm.value)
        				+ " WK_DTM="+this.gfn_nullToEmpty(this.div_search.dt_wkDtm.value)
        				+ " SUCCESS_YN="+this.gfn_nullToEmpty(this.div_search.cbo_successYn.value)
        				+ " UYN="+this.gfn_nullToEmpty(this.div_search.cbo_useYn.value)
        				;
        					
        	var sSvcID        = "retrieveTxNtsIfList";//통신아이디
        	var sURL          = "svc::rest/sys/retrieveTxNtsIfList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_m=ds_m";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = sParams;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        // 행추가
        this.btn_addrow_onclick = function(obj,e)
        {
            if(this.ds_m.rowcount < 1){
                this.ds_m.addColumn("BSN_DSC"); // 업무구분: ESCM, CONSULT, ETC 
                this.ds_m.addColumn("SQNO"); 	//  순번
                this.ds_m.addColumn("WK_NAME"); // 작업명 
                this.ds_m.addColumn("WK_ST_DTM"); // 작업시작일시                
                this.ds_m.addColumn("WK_ED_DTM"); // 작업종료일시                
                this.ds_m.addColumn("NOTICE_MSG"); // 작업안내메시지                     
                this.ds_m.addColumn("IF_STAT"); // 네트웍 송수신 확인                               
                this.ds_m.addColumn("SEND_PROC_STAT"); // 수신배치 실행 확인                              
                this.ds_m.addColumn("RECV_PROC_STAT"); // 송신배치 실행 확인                 
                this.ds_m.addColumn("SUCCESS_YN" ); // 작업완료여부 확인                               
                this.ds_m.addColumn("MP_1"); // 휴대폰1                      
                this.ds_m.addColumn("MP_2"); // 휴대폰2                      
                this.ds_m.addColumn("UYN"); // 사용여부                         
            }
        	var nRow = this.ds_m.addRow();
        	
        	var today = new Date();		
        	var d1 = this.gfn_today("yyyyMMdd") + String(today.getHours()).padLeft(2, "0") + String(today.getMinutes()).padLeft(4, "0");
        	today.setHours(today.getHours()+1);
        	var d2 = this.gfn_today("yyyyMMdd") + String(today.getHours()).padLeft(2, "0") + String(today.getMinutes()).padLeft(4, "0");
        	
        	this.ds_m.setColumn(this.ds_m.rowposition, "");
        	this.ds_m.setColumn(this.ds_m.rowposition, "BSN_DSC", "ESCM");
        	this.ds_m.setColumn(this.ds_m.rowposition, "WK_ST_DTM", d1);
        	this.ds_m.setColumn(this.ds_m.rowposition, "WK_ED_DTM", d2);
        	this.ds_m.setColumn(this.ds_m.rowposition, "IF_STAT", "0");
        	this.ds_m.setColumn(this.ds_m.rowposition, "SEND_PROC_STAT", "0");
        	this.ds_m.setColumn(this.ds_m.rowposition, "RECV_PROC_STAT", "0");
        	this.ds_m.setColumn(this.ds_m.rowposition, "SUCCESS_YN", "0");
        	this.ds_m.setColumn(this.ds_m.rowposition, "UYN", "0");
        	this.ds_m.set_updatecontrol(false);
        	this.ds_m.setRowType(nRow, Dataset.ROWTYPE_INSERT);
        	this.ds_m.set_updatecontrol(true); // 이걸 해주지 않으면 자동으로 바뀌지 않음
        } 

        /*
         * 저장
         */
         this.btn_save_onclick = function(obj,e)
        {
            if(this.fn_validationCheck()){
        		var sSvcID        = "saveTxNtsIfList";//통신아이디
        		var sURL          = "svc::rest/sys/saveTxNtsIfList";// 호출할 서버 페이지 주소
        		var sInDatasets   = "ds_m=ds_m";//보내는데이터셋
        		var sOutDatasets  = "";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = "";// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        	}
        }

        /* 등록 및 수정시 사용되는 Validation Check */
        this.fn_validationCheck = function(){
        	
        	// 입력값 체크
        	for(var i = 0; i < this.ds_m.rowcount; i++){
        		if(this.gfn_isNull(this.ds_m.getColumn(i,"WK_NAME"))){
        			alert('시스템명을 입력바랍니다.');
        			return false;
        		}
        		if(this.gfn_isNull(this.ds_m.getColumn(i,"NOTICE_MSG"))){ 
        			this.alert('작업안내메세지를 입력바랍니다.');
        			return false;
        		}
        	}
            return true;
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/

        /* 조회-서비스 Call */

        /* 콜백메소드 */
        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {

        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "retrieveTxNtsIfList"){
        			if(this.ds_m.rowcount == 0){
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        		} else if(svcID == "saveTxNtsIfList"){
        		    alert("저장되었습니다.");
        			this.fn_retrieveTxNtsIfList();
        		}
        	}
        }

        this.div_search_rdo_wkDtm_onitemchanged = function(obj,e)
        {
        	if (obj.value == "2" && this.gfn_nullToEmpty(this.div_search.dt_wkDtm.value) == '') {
        		this.div_search.dt_wkDtm.set_enable(true);
        		this.div_search.dt_wkDtm.set_value(this.gfn_today("yyyyMMdd"));
        	}else{
        		this.div_search.dt_wkDtm.set_enable(false);
        		this.div_search.dt_wkDtm.set_value("");
        	}
        }

        this.btn_flag_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_search.Static04.addEventHandler("onclick", this.Static04_onclick, this);
            this.div_search.rdo_wkDtm.addEventHandler("onitemchanged", this.div_search_rdo_wkDtm_onitemchanged, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.div_list.btn_flag.addEventHandler("onclick", this.btn_flag_onclick, this);
            this.div_list.btn_addRow.addEventHandler("onclick", this.btn_addrow_onclick, this);

        };

        this.loadIncludeScript("SYS_BATCH_1040.xfdl");
        this.loadPreloadList();
       
    };
}
)();
