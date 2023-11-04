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
                this.set_name("pattern_01");
                this.set_classname("pattern_01");
                this.set_titletext("상담신청조회");
                this._setFormPosition(0,0,993,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rclist", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"CSLT_RQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"CONM\" type=\"STRING\" size=\"256\"/><Column id=\"BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"STS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sts", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"status\">신청</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"status\">보완</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"status\">재신청</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"status\">접수</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"status\">거절</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"status\">완료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "69", "15", null, this);
            obj.set_taborder("73");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "79", "21", null, null, this.div_search);
            obj.getSetter("taborder").set("38");
            obj.set_text("신청일자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "36", "79", "21", null, null, this.div_search);
            obj.getSetter("taborder").set("39");
            obj.set_text("신청회사");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_comp", "absolute", "94", "36", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_comp_innerdataset = new Dataset("cbo_comp_innerdataset", this.div_search.cbo_comp);
            cbo_comp_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">사업자번호</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">업체명</Col></Row></Rows>");
            obj.set_innerdataset(cbo_comp_innerdataset);
            obj.set_taborder("41");
            obj.set_text("사업자번호");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj.set_value("1");
            obj = new Static("Static04", "absolute", "568", "10", "136", "21", null, null, this.div_search);
            obj.getSetter("taborder").set("44");
            obj.set_text("※ 신청, 보완, 재신청");
            obj.set_cssclass("sta_WF_DescriptionB02");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "335", "10", "79", "21", null, null, this.div_search);
            obj.getSetter("taborder").set("46");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "426", "36", "136", "21", null, null, this.div_search);
            obj.getSetter("taborder").set("47");
            obj.set_text("※ 사업자번호, 업체명");
            obj.set_cssclass("sta_WF_DescriptionB02");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_sts", "absolute", "413", "10", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_sts_innerdataset = new Dataset("cbo_sts_innerdataset", this.div_search.cbo_sts);
            cbo_sts_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">신청</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">보완</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">재신청</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">접수</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">거절</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">완료</Col></Row></Rows>");
            obj.set_innerdataset(cbo_sts_innerdataset);
            obj.set_taborder("48");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj.set_value("0");
            obj.set_text("전체");
            obj = new Edit("edt_comp", "absolute", "248", "36", "175", "21", null, null, this.div_search);
            obj.set_taborder("49");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static131", "absolute", "195", "10", "10", "21", null, null, this.div_search);
            obj.getSetter("taborder").set("50");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "94", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("51");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("cal_to", "absolute", "205", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("52");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Button("btn_history", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("11");
            obj.set_text("이력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "922", "21", "56", "8", null, null, this);
            obj.getSetter("taborder").set("56");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "978", "0", "15", "490", null, null, this);
            obj.getSetter("taborder").set("57");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "97", null, null, "15", "0", this);
            obj.set_taborder("69");
            this.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "-93", "228", "21", null, null, this.div_list);
            obj.getSetter("taborder").set("2");
            obj.set_text("상담 신청 조회");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0", "41", null, "352", "0", null, this.div_list);
            obj.set_taborder("1");
            obj.set_binddataset("ds_rclist");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상품분류\"/><Cell col=\"2\" text=\"업체명\"/><Cell col=\"3\" text=\"사업자등록번호\"/><Cell col=\"4\" text=\"신청일자\"/><Cell col=\"5\" text=\"진행상태\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" text=\"bind:NA_WRS_LCLC\"/><Cell col=\"2\" text=\"bind:CONM\"/><Cell col=\"3\" text=\"bind:BZNO\"/><Cell col=\"4\" text=\"bind:ST_DT\"/><Cell col=\"5\" displaytype=\"combo\" text=\"bind:STS\" combodataset=\"ds_sts\" combocodecol=\"code\" combodatacol=\"status\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("Button75", "absolute", "458", "0", null, "12", "457", null, this.div_list);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "0", "113", "238", "21", null, null, this);
            obj.getSetter("taborder").set("77");
            obj.set_text("상담신청조회");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "306", "28", "30", "45", null, null, this);
            obj.getSetter("taborder").set("78");
            obj.style.set_background("#0000ff33");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("79");
            obj.set_url("common::location.xfdl");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 69, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("73");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("69");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("상담신청조회");

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
        this.addIncludeScript("OMG_DS_SC_3110.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_3110.xfdl", function() {
        //include "lib::comLib.xjs";

        var chkDay;
        /* Form Load */
        this.pattern_01_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);
        }

        /* Form Init*/
        this.pattern_01_init = function(obj,e)
        {	
        	///페이지 로딩후 실행부분
        	var toDay = this.gfn_today("yyyyMMdd");
        	this.div_search.cal_from.set_value(this.gfn_firstDate(toDay));
        	this.div_search.cal_to.set_value(this.gfn_lastDate(toDay));
        	
        	chkDay = Number(this.gfn_minusMonth(toDay, 2));
        }

        this.div_list_Grid01_oncellclick = function(obj,e)
        {
        	if(e.cell==0){
        		this.gfn_singleChk(obj,e);	
        	}
        	else{
        		var cslt_rq_no = this.ds_rclist.getColumn(this.ds_rclist.rowposition, "CSLT_RQ_NO");
        		
        		var oArg = {paramMode:"U", dsArg:this.ds_rclist, CSLT_RQ_NO:cslt_rq_no};
        		var sOption = "autosize=true,title=true";
        		var sPopupCallBack = "fn_popupAfter";       
        		this.gfn_openPopup("popId","OMG.BT::OMG_DS_SC_3121.xfdl",oArg,sOption,sPopupCallBack); 
        	}
        	
        }

        /*상담신청 조회*/
        this.btn_search_onclick = function(obj,e)
        {
        	this.ds_rclist.clearData();
        	
        	if(this.fn_validationCheck()){
        	
        		var calFrom = this.gfn_nullToEmpty(this.div_search.cal_from.value);  //조회시작일
        		var calTo = this.gfn_nullToEmpty(this.div_search.cal_to.value);  //조회종료일
        		var cboSts = this.gfn_nullToEmpty(this.div_search.cbo_sts.value);  //진행상태
        		var cboComp = this.gfn_nullToEmpty(this.div_search.cbo_comp.value);  //사업자번호, 업체명 선택
        		var edtComp = this.gfn_nullToEmpty(this.div_search.edt_comp.value);  //사업자번호, 업체명 입력값
        		
        		param = " cal_from="+calFrom+
        				" cal_to="+calTo+
        				" cbo_sts="+cboSts+
        				" cbo_comp="+cboComp+
        				" edt_comp="+edtComp;
        				
        		var sSvcID        = "requestCounselingList";//통신아이디
        		var sURL          = "svc::rest/bt/apply/retrieveRequestList";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_rclist=ds_rclist";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        		trace(this.ds_rclist.saveXML());
        	}			
        	
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "retrievePeriodSum"){
        			if(this.ds_rclist.rowcount == 0){
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        		}
        	}
        }

        /* Validation Check */
        this.fn_validationCheck = function(){
        	
        	var calFrom = this.div_search.cal_from.value;
        	var calTo = this.div_search.cal_to.value;
        	if(this.gfn_isNull(calFrom)){
        		this.gfn_getMessage("alert", "validation.message.fromDate.no.data");
        		return false;
        	}
        	
        	if(this.gfn_isNull(calTo)){
        		this.gfn_getMessage("alert", "validation.message.toDate.no.data");
        		return false;
        	}
        	
        	if(this.gfn_getDiffDay(calFrom, calTo) < 0){
        		this.gfn_getMessage("alert", "validation.message.fromData.toDate.confirm");
        		return false;
        	}else{
        		/*
        		if(this.gfn_getDiffDay(this.div_search.cal_YMD_FR.value,this.div_search.cal_YMD_TO.value) > 31){
        			this.alert('기간을 31일 이내로 선택 하세요');
        			return false;
        		}
        		*/	
        	}
        	
        	if(Number(calFrom) - Number(chkDay) < 0){
        		this.alert("최근 3개월까지 조회 가능합니다.");
        		return false;
        	}
        	
        	if(Number(calTo) - Number(chkDay) < 0){
        		this.alert("최근 3개월까지 조회 가능합니다.");
        		return false;
        	}
        	
        	return true;
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	trace(" strId : " + strId + " strVal : " + strVal);
        }

        this.fn_afterFormOnload = function()
        {
        	trace("fn_afterFormOnload");
        }

        this.btn_history_onclick = function(obj,e)
        {
        	var cslt_rq_no;
        	//alert("this.ds_rclist.rowcount==>"+this.ds_rclist.rowcount);
        	if(this.ds_rclist.rowcount > 0){
        		for(var i = 0; i < this.ds_rclist.rowcount; i++){
        			if(this.ds_rclist.getColumn(i, "ISCHECKED") == 1)
        			{
        				cslt_rq_no = this.ds_rclist.getColumn(i, "CSLT_RQ_NO");
        				//alert("cslt_rq_no==>"+cslt_rq_no);
        				if(!this.gfn_isNull(cslt_rq_no)){
        					var oArg = {paramMode:"S", dsArg:this.ds_rclist, cslt_rq_no:cslt_rq_no};
        					var sOption = "autosize=true,title=true";
        					var sPopupCallBack = "fn_popupAfter";       
        					this.gfn_openPopup("popId","OMG.BT::OMG_DS_SC_3124.xfdl",oArg,sOption,sPopupCallBack);
        				}
        			}
        		}
        		if(this.gfn_isNull(cslt_rq_no)){
        			//alert("cslt_rq_no==>"+cslt_rq_no);
        			alert("이력을 조회할 상담신청내역을 체크 하세요");
        		}
        	}else{
        		alert("상담신청내역을 조회 하세요");
        		return false;
        	}
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.pattern_01_onload, this);
            this.btn_history.addEventHandler("onclick", this.btn_history_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_list.Grid01.addEventHandler("oncellclick", this.div_list_Grid01_oncellclick, this);
            this.Static00.addEventHandler("onclick", this.Static00_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_3110.xfdl");
        this.loadPreloadList();
       
    };
}
)();
