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
                this.set_name("frm_VAN_DS_SC_1410");
                this.set_titletext("자사사용자관리");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_master_data", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MB_PW\" type=\"STRING\" size=\"256\"/><Column id=\"USR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEX_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"USR_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"USR_MPNO\" type=\"STRING\" size=\"256\"/><Column id=\"USR_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"SMS_RMS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_RMS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_PRG_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CHRG_BSNNM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\"/><Column id=\"PW_LSRG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MB_CV_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_PRG_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"256\"/><Column id=\"LGIN_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"HOFF_APV_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_title00", "absolute", "15", "10", "128", "21", null, null, this.div_search);
            obj.set_taborder("7");
            obj.set_text("사용자 조회구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_select00", "absolute", "143", "10", "140", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_select00_innerdataset = new Dataset("rdo_select00_innerdataset", this.div_search.rdo_select00);
            rdo_select00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">회원ID</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용자명</Col></Row></Rows>");
            obj.set_innerdataset(rdo_select00_innerdataset);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Edit("edt_title00", "absolute", "300", "10", "151", "21", null, null, this.div_search);
            obj.set_taborder("9");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "42.11%", "31", null, "10", "44.78%", null, this.div_search);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_menu", "absolute", "0", "0", null, "21", "596", null, this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save00", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "71", null, null, "15", "0", this);
            obj.set_taborder("6");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            obj.set_enableevent("true");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_main00", "absolute", "0", "42", null, null, "0", "0", this.div_list);
            obj.set_taborder("10");
            obj.set_binddataset("ds_master_data");
            obj.set_autofittype("none");
            obj.set_scrollbars("autoboth");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"170\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"회원ID\"/><Cell col=\"2\" text=\"사용자명\"/><Cell col=\"3\" text=\"협력업체 코드\"/><Cell col=\"4\" text=\"협력업체명\"/><Cell col=\"5\" text=\"전화번호\"/><Cell col=\"6\" text=\"휴대전화번호\"/><Cell col=\"7\" text=\"이메일\"/><Cell col=\"8\" text=\"상태\"/><Cell col=\"9\" text=\"최근접속일\"/><Cell col=\"10\" text=\"사업자번호\"/><Cell col=\"11\" text=\"우편번호\"/><Cell col=\"12\" text=\"기본주소\"/><Cell col=\"13\" text=\"승인\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:MB_ID\"/><Cell col=\"2\" text=\"bind:USR_NM\"/><Cell col=\"3\" text=\"bind:NA_TRPL_C\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:CLNTNM\"/><Cell col=\"5\" text=\"bind:USR_TELNO\"/><Cell col=\"6\" text=\"bind:USR_MPNO\"/><Cell col=\"7\" text=\"bind:USR_EMAIL\"/><Cell col=\"8\" text=\"bind:ENT_PRG_STSC\"/><Cell col=\"9\" text=\"bind:LGIN_DTM\" mask=\"####-##-##\"/><Cell col=\"10\" text=\"bind:BZNO\"/><Cell col=\"11\" text=\"bind:ZIP\"/><Cell col=\"12\" text=\"bind:DONGUP\"/><Cell col=\"13\" displaytype=\"checkbox\" edittype=\"expr:MB_ID == application.gv_userId ? &quot;none&quot; : &quot;checkbox&quot;\" text=\"bind:HOFF_APV_YN\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_toggle00", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "227", null, this);
            obj.set_taborder("10");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear00", "absolute", null, "0", "53", "21", "161", null, this);
            obj.set_taborder("11");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("12");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 788, 421, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_text("Div02");
            		p.set_scrollbars("none");
            		p.set_enableevent("true");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_0160");
            		p.set_titletext("자사사용자관리");

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
        this.addIncludeScript("VAN_DS_SC_1410.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1410.xfdl", function() {
        //include "lib::comLib.xjs";

        var TRPL_C = application.gv_glnCode;	//로그인 사업장 코드

        this.form_onload = function(obj,e)
        {
           this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
           this.div_list.grd_main00.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
           this.btnDisable(this.btn_save00);
        }

        //조회 메뉴 div 숨김 여부 이벤트
        this.div_list_btn_toggle00_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        //조회
        this.btn_search00_onclick = function(obj,e)
        {
        	var params = "TRPL_C="+this.getTrplCode() 											// 권한사업장 코드
        				+" RDO_CHK="+this.div_search.rdo_select00.value							// 사업장 구분 라디오
        				+" EDT_NM="+this.gfn_nullToEmpty(this.div_search.edt_title00.value);	// 사용자조건명
        	
        	var sSvcID        = "p_search";//통신아이디
        	var sURL          = "svc::rest/pds/company/Company/CompanyUsers";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_master_data=ds_master_data";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        //저장
        this.btn_save00_onclick = function(obj,e)
        {
        	var bOk = application.confirm(this.gfn_getTextMessage('msg.isSave'));
        	if(bOk != true){
        		return;
        	}
        	
        	//페이지 로딩후 실행부분
        	var sSvcID        = "p_update";//통신아이디
        	var sURL          = "svc::rest/pds/company/Company/UpdateCompanyUsers";// 호출할 서버 페이지 주소
        	var sInDatasets   = "ds_master_data=ds_master_data:A";//보내는데이터셋
        	var sOutDatasets  = "";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = "";// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType = "U"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.fn_callback = function(svcID,nCD,sMSG)//첫번째 인자값은 통신 ID
        {
        	if(nCD < 0){
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "p_search" && sMSG == "SYSTEMERROR"){
        			this.div_list.grd_main00.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        		}
        		if(svcID == "p_search" && sMSG == "SUCCESS"){
        			for(var i=0;i<this.ds_master_data.rowcount;i++){
        				var tt = this.ds_master_data.getColumn(i,"ENT_PRG_STSC");
        				if(tt == "0"){this.ds_master_data.setColumn(i,"ENT_PRG_STSC","진행중")}
        				if(tt == "1"){this.ds_master_data.setColumn(i,"ENT_PRG_STSC","신청완료")}
        				if(tt == "2"){this.ds_master_data.setColumn(i,"ENT_PRG_STSC","가입신청거절")}
        				if(tt == "3"){this.ds_master_data.setColumn(i,"ENT_PRG_STSC","수정요청중")}
        				if(tt == "4"){this.ds_master_data.setColumn(i,"ENT_PRG_STSC","수정요청거절")}
        				if(tt == "5"){this.ds_master_data.setColumn(i,"ENT_PRG_STSC","해지")}
        				
        				if(this.ds_master_data.getColumn(i,"HOFF_APV_YN") == "Y"){
        					this.ds_master_data.setColumn(i,"HOFF_APV_YN","1");
        				}else{
        					this.ds_master_data.setColumn(i,"HOFF_APV_YN","0");
        				}
        			}
        		}
        		if(svcID == "p_update" && sMSG == "SUCCESS"){
        			this.gfn_getMessage('alert','msg.comp.update');
        		}
        	}
        }

        //초기화
        this.btn_clear00_onclick = function(obj,e)
        {
        	this.reload();
        }

        this.btn_excel_onclick = function(obj,e)
        {

        	var params = "TRPL_C="+this.getTrplCode() 											// 권한사업장 코드
        				+"&RDO_CHK="+this.div_search.rdo_select00.value							// 사업장 구분 라디오
        				+"&EDT_NM="+this.gfn_nullToEmpty(this.div_search.edt_title00.value);	// 사용자조건명
        	
        	//this.div_list.web_downExcelM.set_url(application.gv_server_url+"rest/excel/downloadExcelTrades?"+params);
        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelCompanyUsers?"+params, this);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_save00.addEventHandler("onclick", this.btn_save00_onclick, this);
            this.btn_search00.addEventHandler("onclick", this.btn_search00_onclick, this);
            this.div_list.btn_toggle00.addEventHandler("onclick", this.div_list_btn_toggle00_onclick, this);
            this.btn_clear00.addEventHandler("onclick", this.btn_clear00_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1410.xfdl");
        this.loadPreloadList();
       
    };
}
)();
