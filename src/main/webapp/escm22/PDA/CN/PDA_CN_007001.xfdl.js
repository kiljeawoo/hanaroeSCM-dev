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
                this.set_name("PDA_CN_007001");
                this.set_titletext("검수실적 그룹관리");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_kpiGroup", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PD_KPI_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"PD_KPI_GROUP_C\" type=\"STRING\" size=\"2\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"50\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_groupNm", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"STRING\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_groupNmGrd", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"STRING\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_kpiGroupChg", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PD_KPI_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"PD_KPI_GROUP_C\" type=\"STRING\" size=\"2\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"50\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_kpiFlag", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\" prop=\"\"/><Column id=\"DATA\" type=\"STRING\" size=\"32\" prop=\"\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">직영점</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"DATA\">계열사</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("89");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "27.61%", "10", null, "21", "61.45%", null, this.div_search);
            obj.set_taborder("31");
            obj.set_text("사업장조회");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit_comnum", "absolute", "38.17%", "10", null, "21", "52.93%", null, this.div_search);
            obj.set_taborder("32");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit_comname", "absolute", "47.33%", "10", null, "21", "43.26%", null, this.div_search);
            obj.set_taborder("33");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_comname", "absolute", "57%", "10", null, "21", "40.33%", null, this.div_search);
            obj.set_taborder("34");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cb_groupNm", "absolute", "8.4%", "10", null, "21", "79.9%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("35");
            obj.set_innerdataset("@ds_groupNm");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.style.set_align("left middle");
            obj.set_displayrowcount("-1");
            obj.set_index("-1");
            obj = new Static("Static01", "absolute", "15", "10", "67", "21", null, null, this.div_search);
            obj.set_taborder("36");
            obj.set_text("그 룹");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "68.83%", "10", null, "21", "20.1%", null, this.div_search);
            obj.set_taborder("37");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_use", "absolute", "77.1%", "10", null, "21", "1.15%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_use_innerdataset = new Dataset("rdo_use_innerdataset", this.div_search.rdo_use);
            rdo_use_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">중지</Col></Row></Rows>");
            obj.set_innerdataset(rdo_use_innerdataset);
            obj.set_taborder("38");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("2");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_index("0");

            obj = new Div("Div02", "absolute", "0", "71", null, null, "15", "1", this);
            obj.set_taborder("81");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Button("Button75", "absolute", "347", "0", null, "12", "363", null, this.Div02);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.Div02.addChild(obj.name, obj);
            obj = new Grid("Grd01", "absolute", "0", "42", null, null, "0", "66", this.Div02);
            obj.set_taborder("2");
            obj.set_binddataset("ds_kpiGroup");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_summarytype("top");
            obj.set_treeusebutton("use");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseexpandkey("true");
            obj.set_treeuseimage("false");
            obj.set_treeuseline("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"0\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"그룹\"/><Cell col=\"3\" text=\"사업장코드\"/><Cell col=\"4\" text=\"사업장명\"/><Cell col=\"5\" text=\"레벨\"/><Cell col=\"6\" text=\"사용/중지\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: ;\" expr=\"currow+1\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" style=\"align: ;\" text=\"bind:PD_KPI_FLAG\" combodataset=\"ds_kpiFlag\" combocodecol=\"CODE\" combodatacol=\"DATA\" tooltiptext=\"bind:PD_KPI_FLAG\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" style=\"align: ;\" text=\"bind:PD_KPI_GROUP_C\" combodataset=\"ds_groupNmGrd\" combocodecol=\"SIMP_C\" combodatacol=\"SIMP_CNM\" tooltiptext=\"bind:PD_KPI_GROUP_C\"/><Cell col=\"3\" edittype=\"expr:(dataset.getRowType(currow)==2||NA_TRPL_C==null)?'normal':'none'\" text=\"bind:NA_TRPL_C\" tooltiptext=\"bind:NA_TRPL_C\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:CLNTNM\" tooltiptext=\"bind:CLNTNM\"/><Cell col=\"5\" displaytype=\"number\" text=\"bind:LEV\" tooltiptext=\"bind:LEV\"/><Cell col=\"6\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:USE_YN\" tooltiptext=\"bind:USE_YN\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("btn_execl", "absolute", null, "0", "41", "21", "79", null, this);
            obj.set_taborder("11");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("68");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "788", "0", "15", "490", null, null, this);
            obj.set_taborder("71");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("72");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "732", "72", "56", "41", null, null, this);
            obj.set_taborder("87");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0.12%", "30", null, "42", "98.01%", null, this);
            obj.set_taborder("88");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "0", "41", "21", "126", null, this);
            obj.set_taborder("91");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert", "absolute", null, "0", "41", "21", "174", null, this);
            obj.set_taborder("92");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("89");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 788, 420, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("81");
            		p.set_text("Div02");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("검수실적 그룹관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item2","div_search.rdo_use","value","ds_dataM","DVY_VHC_DSC");
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
        this.addIncludeScript("PDA_CN_007001.xfdl", "lib::comLib.xjs");
        this.registerScript("PDA_CN_007001.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        // Form Init: 페이지 호출 후 실행
        this.form_init = function(obj,e)
        {
         
        }

        // Form Onload: DataSet 로딩 후 실행
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통

            var param = [
        		{code:"PDA_KPI_GROUP"	, dsName:"ds_groupNm"		, selecttype:"A"},
            ];
            this.gfn_setPortalCommonCode(param); 

        //	시스템관리자가 아니면 권한확인을 한다
        	if(application.gv_userTPC != "admin")
        	{
        		this.fn_getAuth();
        	}	
        }

        this.fn_afterFormOnload = function() //onload
        {

        }

        // gfn_setCommonCode, gfn_setPortalCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	this.div_search.cb_groupNm.set_index(0);

        //	ds_groupNm -> ds_groupNmGrd 전체 빼고 복사
        	for(var i = 1, length = this.ds_groupNm.getRowCount(); i < length; i++)
        	{
        		var nRow	= this.ds_groupNmGrd.addRow();
        		var bSucc	= this.ds_groupNmGrd.copyRow(nRow, this.ds_groupNm, i);	
        	}
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_setAuth = function()
        {
        //	권한에 따른 가능 및 제약업무 설정

        }

        // 콜백 함수
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        	}
        	else
        	{
        		if(svcID == "retrieveSmtPdaKpiGroupList")
        		{
        		//	trace("ds_kpiGroup:" + this.ds_kpiGroup.saveXML());
        			if(this.ds_kpiGroup.rowcount==0)
        			{
        				this.Div02.Grd01.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        			}
        		}
        		else if(svcID == "updateSmtPdaKpiGroup")
        		{
        		
        			if(ErrorCode == 0)
        			{
        				this.alert("변경내역을 반영 하였습니다.");
        				// 변경내역 저장 데이터셋 초기화
        				this.ds_kpiGroupChg.clearData();
        				this.fn_search();
        			}
        			else if(ErrorCode == 1)
        			{
        				this.alert(ErrorMsg + " 코드는 이미 등록되어 있습니다.");
        			}
        			else if(ErrorCode == 2)
        			{
        				this.alert(ErrorMsg + " 코드는 존재하지 않는 사업장코드 입니다.");
        			}
        			
        		
        			

        		}
        		else if(svcID == "getAuthSmtPdaKpiGroupChg")
        		{
        			trace("getAuthSmtPdaKpiGroupChg ErrorCode:" + ErrorCode);
        			if(ErrorCode == 1)
        			{
        				this.btn_insert.set_visible(true);
        				this.btn_save.set_visible(true);
        			}

        		}
        	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        // 조회조건 영역 펼치기, 접기
        this.Div_Md_Button75_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.Div02);
        }

        this.btn_insert_onclick = function(obj,e)
        {
        	var rownum = this.ds_kpiGroup.addRow();
        	// 초기값 설정
        	this.ds_kpiGroup.setColumn(rownum, "PD_KPI_FLAG", '1');
        	this.ds_kpiGroup.setColumn(rownum, "PD_KPI_GROUP_C", '01');
        	this.ds_kpiGroup.setColumn(rownum, "USE_YN", '1');
        }

        this.btn_save_onclick = function(obj,e)
        {

        	this.ds_kpiGroupChg.clearData();
        	
        	for(var i = 0, length = this.ds_kpiGroup.getRowCount(); i < length; i++)
        	{
        		if(this.ds_kpiGroup.getRowType(i) == "2" || this.ds_kpiGroup.getRowType(i) == "4")	// INSERT OR UPDATE
        		{
        			var nRow	= this.ds_kpiGroupChg.addRow();
        			var bSucc	= this.ds_kpiGroupChg.copyRow(nRow, this.ds_kpiGroup, i);
        		}
        	}

        	if(this.ds_kpiGroupChg.getRowCount() > 0)
        	{
        		var ret = application.confirm(this.ds_kpiGroupChg.getRowCount() + "건에 대해 변경하시겠습니까?", "변경확인", "QUESTION");
        		if (ret == false)
        		{
        			//this.reload();
        			return;
        		}
        	}
        	else if(this.ds_kpiGroupChg.getRowCount() == 0)
        	{
        		alert("저장할 변경내역이 없습니다");
        		return;
        	}

        	trace("ds_kpiGroupChg:" + this.ds_kpiGroupChg.saveXML());
        	var params	      = "";
        	var sSvcID        = "updateSmtPdaKpiGroup"; 				// 통신아이디
        	var sURL          = "svc::rest/pda/updateSmtPdaKpiGroup";	// 호출할 서버 페이지 주소
        	var sInDatasets   = "in_ds=ds_kpiGroupChg:A";				// 보내는데이터셋
        	var sOutDatasets  = "";
        	var sArgument     = ""										// 파라미터
        	var sCallbackFunc = "fn_callBack";							// 콜백
        	var tranType 	  = "U";									// U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        // 엑셀 다운로드
        this.btn_excel_onclick = function(obj,e)
        {
        	var trplC	= this.gfn_nullToEmpty(this.div_search.Edit_comnum.value);
        	var clntNm	= this.gfn_nullToEmpty(this.div_search.Edit_comname.value);
        	var grp_cd	= this.div_search.cb_groupNm.value;
        	if(grp_cd == "all")	grp_cd = "";
        	var use_cd	= this.div_search.rdo_use.value;
        	if(use_cd == '2')	use_cd = "";

        	var param	=  "TRPL_C="	+ trplC
        				+ "&CLNTNM="	+ clntNm
        				+ "&GROUP_C="	+ grp_cd
        				+ "&USE_CD="	+ use_cd
        				;

        	this.fn_excel(param);
        }

        this.fn_excel = function(param)
        {
        	trace("엑셀 다운로드 params >>> " + param);
        	excelDownHandler(application.gv_server_url + "rest/excel/pda/downloadExcelSmtPdaKpiGroupList?" + param, this);
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/	
        // 검수실적 그룹관리 목록조회
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_search();
        }

        this.fn_getAuth = function()
        {
        	var param			=  "USR_ID="	+ application.gv_userId;

        	var sSvcID			= "getAuthSmtPdaKpiGroupChg";
        	var sURL			= "svc::rest/pda/getAuthSmtPdaKpiGroupChg";
        	var sInDatasets		= "";				// 보내는데이터셋
        	var sOutDatasets	= "";				// 화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument		= param;
        	var sCallbackFunc	= "fn_callBack";
        	var sTranType		= "S";				// U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_search = function()
        {
        	var trplC	= this.gfn_nullToEmpty(this.div_search.Edit_comnum.value);
        	var clntNm	= this.gfn_nullToEmpty(this.div_search.Edit_comname.value);
        	var grp_cd	= this.div_search.cb_groupNm.value;
        	if(grp_cd == "all")	grp_cd = "";
        	var use_cd	= this.div_search.rdo_use.value;
        	if(use_cd == '2')	use_cd = "";

        	var param	=  "TRPL_C="	+ trplC
        				+ " CLNTNM="	+ clntNm
        				+ " GROUP_C="	+ grp_cd
        				+ " USE_CD="	+ use_cd
        				;

        	var sSvcID			= "retrieveSmtPdaKpiGroupList";
        	var sURL			= "svc::rest/pda/retrieveSmtPdaKpiGroupList";
        	var sInDatasets		= "";							// 보내는데이터셋
        	var sOutDatasets	= "ds_kpiGroup=ds_kpiGroup";	// 화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument		= param;
        	var sCallbackFunc	= "fn_callBack";
        	var sTranType		= "S";							// U:저장/삭제, S:조회

        //	trace("param:" + param);
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        // 업체 조회
        this.div_search_btn_comname_onclick = function(obj,e)
        {
        	var oArg = "";
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("trplSearchPopup","MOB.MD::MOB_MD_SC_1111_P01.xfdl",oArg,sOption,sPopupCallBack);
        }

        // 팝업작업 후 진행함수
        this.fn_popupAfter = function(strId,strVal)
        {
        //	trace(" strId : " + strId + " strVal : " + strVal);	
        	if(strId == "trplSearchPopup"){
        		if(strVal != ''){
        			var paramsArr = strVal.split(",");
        			this.div_search.Edit_comnum.set_value(paramsArr[0]);
        			this.div_search.Edit_comname.set_value(paramsArr[1]);
        		}
        	}
        }

        this.div_search_rdo_use_onitemclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_init, this);
            this.div_search.btn_comname.addEventHandler("onclick", this.div_search_btn_comname_onclick, this);
            this.div_search.rdo_use.addEventHandler("onitemclick", this.div_search_rdo_use_onitemclick, this);
            this.Div02.Button75.addEventHandler("onclick", this.Div_Md_Button75_onclick, this);
            this.btn_execl.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_insert.addEventHandler("onclick", this.btn_insert_onclick, this);

        };

        this.loadIncludeScript("PDA_CN_007001.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
