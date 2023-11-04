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
                this.set_name("OMG_DS_SC_7080");
                this.set_classname("OMG_DS_SC_7022");
                this.set_titletext("반품예정정보조회");
                this._setFormPosition(0,0,540,680);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("grd01", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">진안농협하나로마트</Col><Col id=\"Column1\">2015-05-06</Col><Col id=\"Column2\">10009</Col><Col id=\"Column3\">승인확정</Col><Col id=\"Column4\">39.00</Col></Row><Row><Col id=\"Column0\">(주)농협대전유통(소매)</Col><Col id=\"Column1\">2015-05-06</Col><Col id=\"Column2\">10007</Col><Col id=\"Column3\">반품확정</Col><Col id=\"Column4\">39.00</Col></Row><Row><Col id=\"Column0\">진안농협하나로마트</Col><Col id=\"Column1\">2015-05-06</Col><Col id=\"Column2\">10057</Col><Col id=\"Column3\">승인확정</Col><Col id=\"Column4\">26.00</Col></Row><Row><Col id=\"Column0\">(주)농협대전유통(소매)</Col><Col id=\"Column1\">2015-05-06</Col><Col id=\"Column2\">10009</Col><Col id=\"Column3\">반품확정</Col><Col id=\"Column4\">26.00</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_na_rgd_sts_dsc", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_retannRqtSumM", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_RGD_STS_DSC\" type=\"string\" size=\"32\"/><Column id=\"NA_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"RGD_RG_DT\" type=\"string\" size=\"32\"/><Column id=\"RVOPL_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"RVOPL_CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"TEL\" type=\"string\" size=\"32\"/><Column id=\"RGD_QT\" type=\"float\" size=\"8\"/><Column id=\"BYNG_DFN_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"RGD_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"RGD_VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"VCBT_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BYNG_DFN_TROT_FEE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BYNG_DFN_PHD_FEE\" type=\"bigdecimal\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_retannRqtD", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"WRSNM\" type=\"string\" size=\"32\"/><Column id=\"RGD_UPR\" type=\"float\" size=\"8\"/><Column id=\"RGD_QT\" type=\"float\" size=\"8\"/><Column id=\"RGD_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BYNG_DFN_AM\" type=\"float\" size=\"8\"/><Column id=\"BYNG_DFN_QT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"RGD_VAT\" type=\"float\" size=\"8\"/><Column id=\"BYNG_DFN_TROT_FEE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BYNG_DFN_PHD_FEE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"VCBT_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"NA_RGD_RSN_DSC\" type=\"string\" size=\"32\"/><Column id=\"AJ_UPR\" type=\"float\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_retannRqtM", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RTNCNF_DTM\" type=\"datetime\" size=\"17\"/><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"RGD_RG_DT\" type=\"string\" size=\"32\"/><Column id=\"RGD_PLA_NO\" type=\"string\" size=\"32\"/><Column id=\"NA_RGD_STS_DSC\" type=\"string\" size=\"32\"/><Column id=\"OGN_SLPNO\" type=\"string\" size=\"32\"/><Column id=\"OSLIP_DT\" type=\"string\" size=\"32\"/><Column id=\"NA_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"RGD_QT\" type=\"int\" size=\"4\"/><Column id=\"ITEM_CNT\" type=\"float\" size=\"8\"/><Column id=\"RGD_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BYNG_DFN_QT\" type=\"float\" size=\"8\"/><Column id=\"BYNG_DFN_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"RGD_VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"VCBT_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BYNG_DFN_TROT_FEE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BYNG_DFN_PHD_FEE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"WDR_PLA_DT\" type=\"string\" size=\"32\"/><Column id=\"SPY_TPC\" type=\"string\" size=\"32\"/><Column id=\"CSER_CTR_TPC\" type=\"string\" size=\"32\"/><Column id=\"XML_RGD_PLA_NO\" type=\"string\" size=\"32\"/><Column id=\"RMK_CNTN\" type=\"string\" size=\"32\"/><Column id=\"LSCHG_DTM\" type=\"datetime\" size=\"17\"/><Column id=\"LS_CMENO\" type=\"string\" size=\"32\"/><Column id=\"DEL_DTM\" type=\"datetime\" size=\"17\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_list", "absolute", "0", "216", "540", null, null, "0", this);
            obj.set_taborder("49");
            obj.set_text("div_list");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_masterSum", "absolute", "0", "16", "540", null, null, "0", this.div_list);
            obj.set_taborder("0");
            obj.set_binddataset("ds_retannRqtSumM");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"237\"/><Column size=\"150\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"63\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"반품의뢰처명\"/><Cell col=\"2\" text=\"반품수량\"/></Band><Band id=\"body\"><Cell colspan=\"2\" displaytype=\"text\" style=\"align:left middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:CLNTNM\" wordwrap=\"char\"/><Cell col=\"2\" style=\"align: ;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:RGD_QT\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_searchControl", "absolute", "0", "0", "540", "16", null, null, this.div_list);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SearchControlBtn");
            this.div_list.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "0", "540", "216", null, null, this);
            obj.set_taborder("44");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15", "16", "122", "54", null, null, this.div_search);
            obj.getSetter("taborder").set("85");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_search", "absolute", "15", "147", "510", "49", null, null, this.div_search);
            obj.set_taborder("86");
            obj.set_text("조회");
            obj.set_cssclass("btn_WFSA_SearchBtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "78", "124", "54", null, null, this.div_search);
            obj.getSetter("taborder").set("90");
            obj.set_text("반품상태\r\n구분코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_na_rgd_sts_dsc", "absolute", "137", "78", "388", "54", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("92");
            obj.set_index("-1");
            obj.set_innerdataset("@ds_na_rgd_sts_dsc");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");
            obj = new Calendar("cal_from", "absolute", "137", "16", "184", "54", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("93");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj = new Calendar("cal_to", "absolute", "341", "16", "184", "54", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("94");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj = new Static("Static09", "absolute", "318", "16", "26", "54", null, null, this.div_search);
            obj.getSetter("taborder").set("95");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "435", "196", "91", "20", null, null, this);
            obj.getSetter("taborder").set("46");
            obj.set_visible("false");
            obj.style.set_background("#dc143c33");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "617", "56", "20", "41", null, null, this);
            obj.getSetter("taborder").set("47");
            obj.set_visible("false");
            obj.style.set_background("#dc143c33");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "525", "56", "15", "118", null, null, this);
            obj.getSetter("taborder").set("48");
            obj.set_visible("false");
            obj.style.set_background("#dc143c33");
            this.addChild(obj.name, obj);

            obj = new Div("div_master", "absolute", "548", "0", "540", "680", null, null, this);
            obj.set_taborder("52");
            obj.set_text("div_master");
            obj.set_visible("false");
            obj.style.set_background("white");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "0", "540", "680", null, null, this.div_master);
            obj.set_taborder("0");
            obj.set_binddataset("ds_retannRqtM");
            obj.set_autofittype("col");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"177\"/><Column size=\"120\"/><Column size=\"140\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"63\"/></Rows><Band id=\"head\"><Cell text=\"반품등록일\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_Head\" text=\"반품번호\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_Head\" text=\"상태\"/></Band><Band id=\"body\"><Cell style=\"align:center middle;\" text=\"bind:RGD_RG_DT\" mask=\"####-##-##\"/><Cell col=\"1\" style=\"align:center middle;\" text=\"bind:RGD_PLA_NO\"/><Cell col=\"2\" style=\"align:center middle;\" text=\"bind:NA_RGD_STS_DSC\"/></Band></Format></Formats>");
            this.div_master.addChild(obj.name, obj);

            obj = new Div("div_detail", "absolute", "1099", "0", "540", "680", null, null, this);
            obj.set_taborder("53");
            obj.set_text("div_detail");
            obj.style.set_background("white");
            obj.set_scrollbars("none");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_detail", "absolute", "0", "0", null, "680", "0", null, this.div_detail);
            obj.set_taborder("0");
            obj.set_binddataset("ds_retannRqtD");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"160\"/><Column size=\"177\"/><Column size=\"100\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"63\"/></Rows><Band id=\"head\"><Cell text=\"상품코드\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_Head\" text=\"상품명\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_Head\" text=\"반품수량\"/></Band><Band id=\"body\"><Cell style=\"align:center middle;\" text=\"bind:NA_WRS_C\"/><Cell col=\"1\" style=\"align:center middle;\" text=\"bind:WRSNM\"/><Cell col=\"2\" style=\"align:center middle;\" text=\"bind:RGD_QT\"/></Band></Format></Formats>");
            this.div_detail.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 540, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("49");
            		p.set_text("div_list");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 216, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("44");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 680, this.div_master,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("52");
            		p.set_text("div_master");
            		p.set_visible("false");
            		p.style.set_background("white");

            	}
            );
            this.div_master.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 680, this.div_detail,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("53");
            		p.set_text("div_detail");
            		p.style.set_background("white");
            		p.set_scrollbars("none");
            		p.set_visible("false");

            	}
            );
            this.div_detail.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 680, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_7022");
            		p.set_titletext("반품예정정보조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_8330.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_8330.xfdl", function() {
        //include "lib::comLib.xjs";

        /* form load */
        this.form_onload = function(obj,e)
        {
        	this.div_list.grd_masterSum.set_nodatatext("데이터가 없습니다.");
        	
        	//this.gfn_setInitForm(obj,e);
        	
        	var param = [  
         		{code:"NA_RGD_STS_DSC",   dsName:"ds_na_rgd_sts_dsc" }
            ];

        	this.gfn_setMobileCommonCode(param);
        	
        	this.div_search.cal_from.set_value(this.gfn_minusDate(this.gfn_today("yyyyMMdd"),7));	
        	this.div_search.cal_to.set_value(this.gfn_today("YYYYMMdd"));
        }

        this.form_init = function(obj,e)
        {
        	//권한사업장 표시 여부(1:본사)
        	if(application.gv_mbcoType != '1'){
        		//this.Div00.visible = false;
        	}
        }

        //공통코드 데이터셋 onload후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	trace("fn_commonAfterOnload");
        }

        /* 페이지 로딩후 실행부분 */
        this.fn_afterFormOnload = function()
        {		
        	
        }

        /* Validation Check */
        this.fn_validationCheck = function(){

        	if(this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) < 0){
        	
        		//조회 시작일과 종료일을 다시 확인해 주세요
        		this.gfn_getMessage("alert", "validation.message.fromDate.toDate.reConfirm");
        		return false;
        	}else{
        		if(this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) > 93){

        		//기간을 31일 이내로 선택해 주세요
        		this.gfn_getMessage("alert", "validation.message.needs.action","기간을 31일 이내로","선택");
        		return false;
        		}
        	}
        	
        	if(this.gfn_isNull(this.div_search.cbo_na_rgd_sts_dsc.value)){
        		alert("반품상태 구분코드를 선택해 주세요");
        		return false;
        	}
        	
        	return true;
        }
        this.div_search_btn_search_onclick = function(obj,e)
        {
        	this.ds_retannRqtSumM.clearData();
        	//this.ds_retannRqtM.clearData();
        	//this.ds_retannRqtD.clearData();
        		
        	if(this.fn_validationCheck()){
        			
        		var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        		var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일	
        		var na_rgd_sts_dsc = this.gfn_nullToEmpty(this.div_search.cbo_na_rgd_sts_dsc.value); //반품상태구분코드
        		
        		//테스트 데이터
        		//from_date = "20150504"
        		//to_date = "20150504"
        		
        		
        		// 반품처 - 8801094001100
        		// 반품의뢰처 - 8808983622910
        		
        		var param = " from_date="+from_date+
        					" to_date="+to_date+
        					" na_rgd_sts_dsc="+na_rgd_sts_dsc;
        					
        		trace("##MASTER##PARAM##->"+param);
        		
        		var sSvcID        = "retrieveRqtMasterSumList";//통신아이디
        		var sURL          = "svc::rest/retann/retrieveRqtMasterSumList";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_retannRqtSumM=ds_retannRqtSumM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
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
        	}else{
        		if(svcID == "retrieveRqtMasterSumList"){
        			if(this.ds_retannRqtSumM.rowcount == 0){				
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        				//alert("조회결과가 없습니다.");
        			}else{							
        			}			
        		}else if(svcID == "retrieveRqtMasterList") {
        			if(this.ds_retannRqtM.rowcount == 0){				
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");								
        			}
        		}else if(svcID == "retrieveRqtDetailList") {
        			if(this.ds_retannRqtD.rowcount == 0){				
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");								
        			}
        			trace(this.ds_retannRqtD.saveXML());
        		}
        	}
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	//trace(" strId : " + strId + " strVal : " + strVal);
        }

        this.div_list_grd_masterSum_oncellclick = function(obj,e)
        {
        	this.searchMaster();
        	
        	var nLeft = 0;
        	var nTop = 0;
        	this.div_master.move(nLeft, nTop);
        	this.div_master.bringToFront();
        	this.div_master.set_visible(true);
        	
        	this.gfn_callDetailMenu("div_master", "반품입고의뢰 상세", "반품입고의뢰^검수실적;직송분");
        }
        var clntlm = "";
        var rgdqt= "";

        this.searchMaster = function()
        {
        	this.ds_retannRqtM.clearData();
        	this.ds_retannRqtD.clearData();
        	
        	var rgd = this.gfn_nullToEmpty(this.ds_retannRqtSumM.getColumn(this.ds_retannRqtSumM.rowposition,"RVOPL_NA_TRPL_C"));	//반품처코드
            var rgd_rqt = this.gfn_nullToEmpty(this.ds_retannRqtSumM.getColumn(this.ds_retannRqtSumM.rowposition,"NA_TRPL_C"));  //반품의뢰처코드
            var na_team_c = this.gfn_nullToEmpty(this.ds_retannRqtSumM.getColumn(this.ds_retannRqtSumM.rowposition,"NA_TEAM_C"));  //경제통합팀코드
            var rgd_rg_dt = this.gfn_nullToEmpty(this.ds_retannRqtSumM.getColumn(this.ds_retannRqtSumM.rowposition,"RGD_RG_DT"));  //반품등록일자    
            var na_rgd_sts_dsc = this.gfn_nullToEmpty(this.ds_retannRqtSumM.getColumn(this.ds_retannRqtSumM.rowposition,"NA_RGD_STS_DSC"));  //반품상태구분코드
        				
        	param = "rgd="+rgd+
        			" rgd_rqt="+rgd_rqt+
        			" na_team_c="+na_team_c+
        			" na_rgd_sts_dsc="+na_rgd_sts_dsc+
        			" rgd_rg_dt="+rgd_rg_dt;			 
        	
        	trace("##DETAIL 01##PARAM##->"+param);	
        	
        	var sSvcID        = "retrieveRqtMasterList";//통신아이디
        	var sURL          = "svc::rest/retann/retrieveRqtMasterList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_retannRqtM=ds_retannRqtM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc , "S");
        }

        this.div_master_grd_master_oncellclick = function(obj,e)
        {
        	this.searchDetail();
        	
        	this.div_master.set_visible(false);
        	this.div_master.bringToPrev();
        	
        	var nLeft = 0;
        	var nTop = 0;
        	
        	this.div_detail.move(nLeft, nTop);
        	this.div_detail.bringToFront();
        	this.div_detail.set_visible(true);
        	
        	this.gfn_callDetailMenu("div_detail", "반품입고의뢰 상세", "반품입고의뢰");
        }

        this.searchDetail = function()
        {
        	var rgd_rqt = this.gfn_nullToEmpty(this.ds_retannRqtM.getColumn(this.ds_retannRqtM.rowposition,"NA_TRPL_C"));  //반품의뢰처코드
            var na_team_c = this.gfn_nullToEmpty(this.ds_retannRqtM.getColumn(this.ds_retannRqtM.rowposition,"NA_TEAM_C"));  //경제통합팀코드
            var rgd_rg_dt = this.gfn_nullToEmpty(this.ds_retannRqtM.getColumn(this.ds_retannRqtM.rowposition,"RGD_RG_DT"));  //반품등록일자
        	var rgd_pla_no = this.gfn_nullToEmpty(this.ds_retannRqtM.getColumn(this.ds_retannRqtM.rowposition,"RGD_PLA_NO"));  //반품예정번호
        	
        	param = "rgd_rqt="+rgd_rqt+
        			" na_team_c="+na_team_c+
        			" rgd_rg_dt="+rgd_rg_dt+
        			" rgd_pla_no="+rgd_pla_no;
        	
        	trace("##DETAIL 02##PARAM##->"+param);	
        	
        	var sSvcID        = "retrieveRqtDetailList";//통신아이디
        	var sURL          = "svc::rest/retann/retrieveRqtDetailList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_retannRqtD=ds_retannRqtD";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc , "S");
        }
        /* 뒤로가기 버튼으로 대체
        this.div_detail_grd_master_oncellclick = function(obj:Grid, e:nexacro.GridClickEventInfo)
        {
        	this.div_detail.set_visible(false);
        	this.div_detail.bringToPrev();
        }
        */
        this.div_list_btn_searchControl_onclick = function(obj,e)
        {
        	this.gfn_mobileSearchDivResize(obj, this.div_search, this.div_list);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_retannRqtSumM.addEventHandler("onrowposchanged", this.ds_retannRqtSumM_onrowposchanged, this);
            this.ds_retannRqtM.addEventHandler("onrowposchanged", this.ds_retannRqtM_onrowposchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.div_list.grd_masterSum.addEventHandler("oncellclick", this.div_list_grd_masterSum_oncellclick, this);
            this.div_list.btn_searchControl.addEventHandler("onclick", this.div_list_btn_searchControl_onclick, this);
            this.div_search.btn_search.addEventHandler("onclick", this.div_search_btn_search_onclick, this);
            this.div_master.grd_master.addEventHandler("oncellclick", this.div_master_grd_master_oncellclick, this);
            this.div_detail.grd_detail.addEventHandler("oncellclick", this.div_detail_grd_master_oncellclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_8330.xfdl");

       
    };
}
)();
