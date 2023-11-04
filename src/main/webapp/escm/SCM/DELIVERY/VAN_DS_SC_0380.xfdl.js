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
                this.set_name("VAN_DS_SC_0380");
                this.set_titletext("물류센터 결품 내역");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_center_dqpd", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"DVY_PLA_DT\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"WRSNM\" type=\"string\" size=\"32\"/><Column id=\"NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"ODR_DT\" type=\"string\" size=\"32\"/><Column id=\"ODR_SLPNO\" type=\"string\" size=\"32\"/><Column id=\"ODR_DSQNO\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ODR_QT\" type=\"float\" size=\"8\"/><Column id=\"STR_CPL_QT\" type=\"float\" size=\"8\"/><Column id=\"NSTR_QT\" type=\"float\" size=\"8\"/><Column id=\"FSRG_DTM\" type=\"datetime\" size=\"17\"/><Column id=\"LSCHG_DTM\" type=\"datetime\" size=\"17\"/><Column id=\"LS_CMENO\" type=\"string\" size=\"32\"/><Column id=\"DQPD_RSNC\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_date", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"string\" size=\"13\"/><Column id=\"name\" type=\"string\" size=\"13\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"name\">발주일자</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"name\">배송예정일자</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NABizPlace", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"SHRT_BZPLNM\" type=\"string\" size=\"32\"/><Column id=\"BZPL_TPC\" type=\"string\" size=\"32\"/><Column id=\"BZPL_DTI_TPC\" type=\"string\" size=\"32\"/><Column id=\"BZPL_TPNM\" type=\"string\" size=\"32\"/><Column id=\"BZPL_DTI_TPNM\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_auth", "absolute", null, "0", "379", "21", "159", null, this);
            obj.set_taborder("35");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "69", "15", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "36", "89", "21", null, null, this.div_search);
            obj.set_taborder("33");
            obj.set_text("조회구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("34");
            obj.set_text("물류센터코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static131", "absolute", "601", "10", "10", "21", null, null, this.div_search);
            obj.set_taborder("54");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "501", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("55");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("cal_to", "absolute", "611", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("56");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static14", "absolute", "122", "31", null, "5", "537", null, this.div_search);
            obj.set_taborder("57");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "122", "0", null, "10", "571", null, this.div_search);
            obj.set_taborder("60");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "398", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("65");
            obj.set_text("배송예정일자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_search_type", "absolute", "118", "36", "150", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_search_type_innerdataset = new Dataset("rdo_search_type_innerdataset", this.div_search.rdo_search_type);
            rdo_search_type_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">상품코드</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">상품명</Col></Row></Rows>");
            obj.set_innerdataset(rdo_search_type_innerdataset);
            obj.set_taborder("70");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Edit("edt_wrs", "absolute", "268", "36", "100", "21", null, null, this.div_search);
            obj.set_taborder("73");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_nacode", "absolute", "118", "10", "250", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("74");
            obj.set_innerdataset("ds_NABizPlace");
            obj.set_codecolumn("NA_BZPLC");
            obj.set_datacolumn("SHRT_BZPLNM");
            obj.set_displayrowcount("5");
            obj.set_index("-1");

            obj = new Static("Static09", "absolute", "1", "30", null, "69", "977", null, this);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "83", "30", null, "69", "888", null, this);
            obj.set_taborder("8");
            obj.set_text("22");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "319", "30", null, "10", "594", null, this);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "319", "61", null, "5", "594", null, this);
            obj.set_taborder("10");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "410", "30", null, "69", "553", null, this);
            obj.set_taborder("11");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "319", "87", null, "10", "594", null, this);
            obj.set_taborder("12");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "788", "1", "15", "490", null, null, this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "922", "21", "56", "8", null, null, this);
            obj.set_taborder("14");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "923", "308", null, "15", "15", null, this);
            obj.set_taborder("15");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "923", "344", null, "5", "15", null, this);
            obj.set_taborder("16");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("21");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "97", null, null, "15", "0", this);
            obj.set_taborder("0");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("Button10", "absolute", "331", "0", null, "12", "330", null, this.div_list);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "40", null, null, "0", "0", this.div_list);
            obj.set_taborder("24");
            obj.set_binddataset("ds_center_dqpd");
            obj.set_summarytype("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"39\"/><Column size=\"99\"/><Column size=\"90\"/><Column size=\"99\"/><Column size=\"129\"/><Column size=\"99\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"93\"/><Column size=\"93\"/><Column size=\"127\"/><Column size=\"91\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"공급처코드\"/><Cell col=\"2\" text=\"배송예정일자\"/><Cell col=\"3\" text=\"상품코드\"/><Cell col=\"4\" text=\"상품명\"/><Cell col=\"5\" text=\"물류센터코드\"/><Cell col=\"6\" text=\"발주일자\"/><Cell col=\"7\" text=\"발주번호\"/><Cell col=\"8\" text=\"발주수량\"/><Cell col=\"9\" text=\"입고수량\"/><Cell col=\"10\" text=\"미입고수량\"/><Cell col=\"11\" text=\"최초 등록일시\"/><Cell col=\"12\" text=\"최종 변경일시\"/><Cell col=\"13\" text=\"최종변경자 개인번호\"/><Cell col=\"14\" text=\"결품 사유\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:NA_TRPL_C\"/><Cell col=\"2\" text=\"bind:DVY_PLA_DT\"/><Cell col=\"3\" text=\"bind:NA_WRS_C\"/><Cell col=\"4\" text=\"bind:WRSNM\"/><Cell col=\"5\" text=\"bind:NA_BZPLC\"/><Cell col=\"6\" text=\"bind:ODR_DT\"/><Cell col=\"7\" text=\"expr:ODR_SLPNO+'-'+ODR_DSQNO\"/><Cell col=\"8\" text=\"bind:ODR_QT\"/><Cell col=\"9\" text=\"bind:STR_CPL_QT\"/><Cell col=\"10\" text=\"bind:NSTR_QT\"/><Cell col=\"11\" displaytype=\"date\" edittype=\"none\" text=\"bind:FSRG_DTM\" mask=\"yyyy-MM-dd HH\" calendardisplaynulltype=\"none\"/><Cell col=\"12\" displaytype=\"date\" text=\"bind:LSCHG_DTM\" mask=\"yyyy-MM-dd HH\" calendardisplaynulltype=\"none\"/><Cell col=\"13\" text=\"bind:LS_CMENO\"/><Cell col=\"14\" text=\"bind:DQPD_RSNC\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "613", "279", null, "69", "350", null, this.div_list);
            obj.set_taborder("29");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "733", "0", "55", "15", null, null, this.div_list);
            obj.set_taborder("30");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", null, "15", "89", "21", "0", null, this.div_list);
            obj.set_taborder("31");
            obj.set_text("엑셀다운로드");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "637", "36", null, "5", "1", null, this.div_list);
            obj.set_taborder("32");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("36");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "36", "408", null, this);
            obj.set_taborder("37");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
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
            obj = new Layout("default", "", 978, 800, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div02");
            		p.set_scrollbars("none");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("물류센터 결품 내역");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0380.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0380.xfdl", function() {
        //include "lib::comLib.xjs";

        /* form load */
        this.form_onload = function(obj,e)
        {		
        	this.gfn_setInitForm(obj,e);
        };

        /* 페이지 로딩후 실행부분 */
        this.fn_afterFormOnload = function()
        {		
        	//권한사업장 표시 여부(1:본사)	
        	if(application.gv_mbcoType != '1'){
        		this.div_auth.visible = false;
        	}
        	
        	//권한사업장 변경 할때마다  물류센터코드 조회
        	this.div_auth.cbo_authorityWorkplace.addEventHandler("onitemchanged", this.fn_getNABizPlace, this);
        	//일자 설정
        	this.div_search.cal_from.set_value(this.gfn_minusDate(this.gfn_today("yyyyMMdd"),1));	
        	this.div_search.cal_to.set_value(this.gfn_today("YYYYMMdd"));
        	//그리드
        	this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        	//처음 물류센터코드 설정
        	this.fn_getNABizPlace(application.gv_glnCode);
        };

        /*농협사업장 조회*/
        this.fn_getNABizPlace = function(obj ,e){
        	
        	var nacode = obj;
        	
        	if(arguments.length == 2){
        		nacode = obj.value;
        	}	
        	var search_type = "added";
        	
        	var param = "search_type="+search_type+
        				" splr_na_trpl_c="+nacode;
        	
        	trace("##### fn_getNABizPlace PARAM ################"+param);
        	
        	var sSvcID        = "getNABizPlace";//통신아이디
        	var sURL          = "svc::rest/common/getNABizPlace";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_NABizPlace=data";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);

        };

        /* Validation Check */
        this.fn_validationCheck = function(){
        	
        	if(this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) < 0){
        	
        		//조회 시작일과 종료일을 다시 확인해 주세요
        		this.gfn_getMessage("alert", "validation.message.fromDate.toDate.reConfirm");
        		return false;
        	}else{
        		if(this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) > 31){

        		//기간을 31일 이내로 선택해 주세요
        		this.gfn_getMessage("alert", "validation.message.selectDateIn31Day");
        		return false;
        		}
        	
        	}
        	
        	//시작일을 입력하세요
        	if(this.gfn_isNull(this.div_search.cal_from.value)){
        		this.gfn_getMessage("alert", "validation.message.needs.action","조회시작일","입력");
        		return false;
        		
        	}
        	
        	//종료일을 입력하세요
        	if(this.gfn_isNull(this.div_search.cal_to.value)){
        		this.gfn_getMessage("alert", "validation.message.needs.action","조회종료일","입력");
        		return false;
        		
        	}
        	
        	//물류센터코드를 입력하세요.
        	
        	if(this.gfn_isNull(this.getCompInfo().cbo_nacode.value)){
        		this.gfn_getMessage("alert", "validation.message.needs.action","물류센터코드","입력");
        		return false;
        	}	
        	
        	return true;
        }

        
        this.btn_search_onclick = function(obj,e)
        {

        	this.ds_center_dqpd.clearData();
        	
        	if(this.fn_validationCheck()){
        	
        	/*
        	var json = this.getParamJson(this.components);	
        	var param = this.getParamJsonToString(json,true);	
        	*/
        	
        	var trplC = '';
        	var chkAll = '';
        				
        		//권한사업장 있을때(접속자가 본사일때)
        		if(this.div_auth.visible == true){
        			trace("권한사업장 있을때");	
        			if(this.div_auth.chk_all.value == true){
        				chkAll = 'Y'
        				trplC = application.gv_glnCode;
        			}else{			
        				chkAll = 'N'
        				trplC = this.div_auth.cbo_authorityWorkplace.value;			
        			}
        		}
        		
        	//권한사업장 없을때(접속자가 지사일때)
        	if(this.div_auth.visible == false){
        		trace("권한사업장 없을때");
        		trplC = application.gv_glnCode;
        	}
        	
        	var search_type = this.gfn_nullToEmpty(this.div_search.rdo_search_type.value);  //조회구분		
        	var wrs = this.gfn_nullToEmpty(this.div_search.edt_wrs.value);  //상품 코드 or 상품 명		
        	var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value);  //조회시작일
        	var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value);  //조회종료일
        	var na_bzplc = this.gfn_nullToEmpty(this.div_search.cbo_nacode.value); //검색사업장	
        	//var ref_type = this.gfn_nullToEmpty(this.div_search.rdo_ref_type.value);  //참조구분
        			
        	param = "search_type="+search_type+
        			" wrs="+ wrs+
        			" from_date="+from_date+
        			" to_date="+to_date+
        			" na_bzplc="+na_bzplc+				
        			" TRPL_C=" + trplC+
        			" CHK_ALL=" + chkAll;
        	
        	trace("##MASTER##PARAM##->"+param);
        		
        	var sSvcID        = "retrieveCenterDqpdList";//통신아이디
        	var sURL          = "svc::rest/delivery/retrieveCenterDqpdList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "ds_test=ds_test";//보내는데이터셋
        	var sOutDatasets  = "ds_center_dqpd=ds_centerDqpd";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);	
        	
        	}
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", ErrorMsg);
        		return;
        	}	
        	if(svcID == "retrieveCenterDqpdList"){
        		
        		return;
        	}
        	if(svcID == "getNABizPlace") {
        		
        		if(this.getCompInfo().ds_NABizPlace.rowcount != 0){			
        		
        		for (var i=0; i < this.ds_NABizPlace.getRowCount() ;i++)
        		{					
        			this.getCompInfo().ds_NABizPlace.setColumn(i,"SHRT_BZPLNM","["+this.ds_NABizPlace.getColumn(i,0)+"] "+this.ds_NABizPlace.getColumn(i,1));				
        		}
        		
        		if (this.getCompInfo().ds_NABizPlace.insertRow(0) != -1){
        			this.getCompInfo().ds_NABizPlace.setColumn(0,"NA_BZPLC","");
        			this.getCompInfo().ds_NABizPlace.setColumn(0,"SHRT_BZPLNM","- 선택 -");
        			};		
        		this.getCompInfo().cbo_nacode.set_index(0);
        		}		
        		return;
        	}	
        }

        this.getCompInfo = function(){
        	
        	var compInfo = {};
        	compInfo.ds_NABizPlace = this.ds_NABizPlace;
        	compInfo.cbo_nacode = this.div_search.cbo_nacode;
        	return compInfo;
        	
        };
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_center_dqpd.addEventHandler("onrowposchanged", this.ds_Rcv_M_onrowposchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.rdo_search_type.addEventHandler("onitemclick", this.div_search_Radio01_onitemclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0380.xfdl");
        this.loadPreloadList();
       
    };
}
)();
