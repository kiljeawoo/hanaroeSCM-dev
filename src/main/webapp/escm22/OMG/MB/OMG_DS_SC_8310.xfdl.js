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
                this.set_name("OMG_DS_SC_8310");
                this.set_classname("OMG_DS_SC_7022");
                this.set_titletext("전표별 검수실적 조회");
                this._setFormPosition(0,0,540,866);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Rcv_M", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"NA_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"SLP_DT\" type=\"string\" size=\"32\"/><Column id=\"NA_SLPNO\" type=\"string\" size=\"32\"/><Column id=\"NA_CRC_CAN_DSC\" type=\"string\" size=\"32\"/><Column id=\"BCLNTNM\" type=\"string\" size=\"32\"/><Column id=\"NA_DVY_PLASH_SLPNO\" type=\"string\" size=\"32\"/><Column id=\"CCLNTNM\" type=\"string\" size=\"32\"/><Column id=\"CNR_DT\" type=\"string\" size=\"32\"/><Column id=\"TRSLPNO\" type=\"string\" size=\"32\"/><Column id=\"RPY_PLA_DT\" type=\"string\" size=\"32\"/><Column id=\"GAM_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BYNG_VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TOT_GAM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"CHRG_TOT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"VCBT_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"VCBX_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"CBAM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"NA_TR_DSC\" type=\"string\" size=\"32\"/><Column id=\"ROTS_CTR_DSC\" type=\"string\" size=\"32\"/><Column id=\"MNGT_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"ACTL_BUYPL_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"COMP_FEE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BYNG_SSDY\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ETR_AMN_FEE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ETR_AMN_VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"SLGT_AMN_FEE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"PHD_FEE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"PHD_FEE_VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TRP_SVC_CST\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TRP_SVCOS_VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ETC_FEE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ETC_FEE_VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ADJ_NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"ADJ_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"FSRGMN_ENO\" type=\"string\" size=\"32\"/><Column id=\"EDIRG_DTM\" type=\"datetime\" size=\"17\"/><Column id=\"FS_RMS_DT\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_Rcv_D", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"WRSNM\" type=\"string\" size=\"32\"/><Column id=\"TXT_DSC\" type=\"string\" size=\"32\"/><Column id=\"BYAM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BYNG_UPR\" type=\"float\" size=\"8\"/><Column id=\"BYNG_QT\" type=\"float\" size=\"8\"/><Column id=\"GAM_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BYNG_VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"WRS_STDNM\" type=\"string\" size=\"32\"/><Column id=\"VCBT_NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"VCBT_QT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"VCBT_UPR\" type=\"bigdecimal\" size=\"8\"/><Column id=\"INPD_QT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"PD_YY\" type=\"string\" size=\"32\"/><Column id=\"BYNG_WT\" type=\"float\" size=\"8\"/><Column id=\"RPY_PLA_DT\" type=\"string\" size=\"32\"/><Column id=\"NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"NA_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"SLP_DT\" type=\"string\" size=\"32\"/><Column id=\"NA_SLPNO\" type=\"string\" size=\"32\"/><Column id=\"SLP_SQNO\" type=\"bigdecimal\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_commission", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SLP_SQNO\" type=\"string\" size=\"32\"/><Column id=\"NA_FEE_C\" type=\"string\" size=\"32\"/><Column id=\"FEENM\" type=\"string\" size=\"32\"/><Column id=\"SPY_AM_VAT\" type=\"string\" size=\"32\"/><Column id=\"TXT_VAT\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_trade_type", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"string\" size=\"13\"/><Column id=\"name\" type=\"string\" size=\"13\"/></ColumnInfo><Rows><Row><Col id=\"code\"/><Col id=\"name\">-전체-</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"name\">매출정상</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"name\">반품정상</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"name\">매출정상 + 반품정정 + 반품취소</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"name\">반품정상 + 매출정정 + 매출취소</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_date", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"string\" size=\"13\"/><Column id=\"name\" type=\"string\" size=\"13\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"name\">매출일</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"name\">검수일</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"name\">지급예정일</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_contract_type", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_list", "absolute", "0", "402", "540", "464", null, null, this);
            obj.set_taborder("53");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_sum", "absolute", "0", "16", "540", "95", null, null, this.div_list);
            obj.set_cssclass("grd_Wf_SumData");
            obj.set_taborder("0");
            obj.set_binddataset("ds_Rcv_M");
            obj.set_scrollbars("none");
            obj.set_autofittype("col");
            obj.set_summarytype("top");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"130\"/></Columns><Rows><Row size=\"47\" band=\"head\"/><Row size=\"63\"/><Row size=\"47\" band=\"summ\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" cssclass=\"grd_essential\" text=\"공급금액\"/><Cell col=\"2\" text=\"총공급금액\"/><Cell col=\"3\" text=\"총공제금액\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/></Band><Band id=\"summary\"><Cell style=\"align:center middle;color:#ffffffff;color2:#ffffffff;\" text=\"합계\"/><Cell col=\"1\" text=\"expr:dataset.getSum('GAM_AM');\"/><Cell col=\"2\" text=\"expr:dataset.getSum('TOT_GAM');\"/><Cell col=\"3\" text=\"expr:dataset.getSum('CHRG_TOT');\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_list", "absolute", "0", "111", "540", "353", null, null, this.div_list);
            obj.set_taborder("1");
            obj.set_binddataset("ds_Rcv_M");
            obj.set_autofittype("col");
            obj.set_summarytype("top");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"182\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"50\" band=\"head\"/><Row size=\"63\"/><Row size=\"63\"/></Rows><Band id=\"head\"><Cell cssclass=\"Cellgrd_WF_Head\" text=\"정정취소구분\"/><Cell col=\"1\" colspan=\"2\" text=\"실매입처\"/><Cell col=\"3\" text=\"총공제금액\"/><Cell row=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"검수일자\"/><Cell row=\"1\" col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"매출일자-번호\"/><Cell row=\"1\" col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"공급금액\"/><Cell row=\"1\" col=\"3\" text=\"총공급금액\"/></Band><Band id=\"body\"><Cell text=\"bind:NA_CRC_CAN_DSC\"/><Cell col=\"1\" colspan=\"2\" style=\"align:left middle;\" text=\"bind:CCLNTNM\" wordwrap=\"char\"/><Cell col=\"3\" style=\"align:right middle;\" text=\"bind:CHRG_TOT\"/><Cell row=\"1\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:CNR_DT\"/><Cell row=\"1\" col=\"1\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:TRSLPNO\"/><Cell row=\"1\" col=\"2\" style=\"align:right middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:GAM_AM\"/><Cell row=\"1\" col=\"3\" style=\"align:right middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:TOT_GAM\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_searchControl", "absolute", "0", "0", "540", "16", null, null, this.div_list);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_SearchControlBtn");
            this.div_list.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "0", "540", "402", null, null, this);
            obj.set_taborder("44");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15", "16", "162", "54", null, null, this.div_search);
            obj.getSetter("taborder").set("85");
            obj.set_text("일자구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_search", "absolute", "15", "333", "510", "49", null, null, this.div_search);
            obj.set_taborder("86");
            obj.set_text("조회");
            obj.set_cssclass("btn_WFSA_SearchBtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "78", "162", "54", null, null, this.div_search);
            obj.getSetter("taborder").set("87");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "176", "78", "171", "54", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("88");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj = new Calendar("cal_to", "absolute", "354", "78", "171", "54", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("89");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj = new Static("Static01", "absolute", "15", "140", "162", "54", null, null, this.div_search);
            obj.getSetter("taborder").set("91");
            obj.set_text("거래구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_trade_type", "absolute", "176", "140", "349", "54", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("92");
            obj.set_text("전체");
            obj.set_index("0");
            obj.set_value("1");
            obj.set_innerdataset("@ds_trade_type");
            obj.set_datacolumn("name");
            obj.set_codecolumn("code");
            obj = new Static("Static03", "absolute", "15", "202", "162", "54", null, null, this.div_search);
            obj.getSetter("taborder").set("93");
            obj.set_text("계통계약구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_contract_type", "absolute", "176", "202", "349", "54", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("94");
            obj.set_index("-1");
            obj.set_innerdataset("@ds_contract_type");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new Static("Static04", "absolute", "15", "264", "162", "54", null, null, this.div_search);
            obj.getSetter("taborder").set("95");
            obj.set_text("사(전)후\r\n장려금");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new MaskEdit("mae_incentive", "absolute", "176", "264", "349", "54", null, null, this.div_search);
            obj.set_taborder("96");
            obj.set_visible("true");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_date", "absolute", "176", "16", "349", "54", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("97");
            obj.set_text("매출일");
            obj.set_index("0");
            obj.set_value("1");
            obj.set_innerdataset("@ds_date");
            obj.set_datacolumn("name");
            obj.set_codecolumn("code");

            obj = new Div("div_detail", "absolute", "551", "0", "540", "866", null, null, this);
            obj.set_taborder("54");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_detail", "absolute", "0", "0", null, "866", "0", null, this.div_detail);
            obj.set_taborder("0");
            obj.set_binddataset("ds_Rcv_D");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"154\"/><Column size=\"100\"/><Column size=\"85\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"50\" band=\"head\"/><Row size=\"63\"/><Row size=\"63\"/></Rows><Band id=\"head\"><Cell cssclass=\"Cellgrd_WF_Head\" text=\"경제통합상품코드\"/><Cell col=\"1\" colspan=\"3\" cssclass=\"Cellgrd_WF_Head\" text=\"상품명\"/><Cell col=\"4\" text=\"과세구분\"/><Cell row=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"총공급금액\"/><Cell row=\"1\" col=\"1\" displaytype=\"normal\" edittype=\"none\" cssclass=\"Cellgrd_WF_Head\" text=\"매입단가\"/><Cell row=\"1\" col=\"2\" displaytype=\"normal\" edittype=\"none\" cssclass=\"Cellgrd_WF_Head\" text=\"매입수량\"/><Cell row=\"1\" col=\"3\" cssclass=\"Cellgrd_WF_Head\" text=\"공급금액\"/><Cell row=\"1\" col=\"4\" cssclass=\"Cellgrd_WF_Head\" text=\"매입부가세\"/></Band><Band id=\"body\"><Cell cssclass=\"Cellgrd_WF_txt\" text=\"bind:NA_WRS_C\"/><Cell col=\"1\" colspan=\"3\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:WRSNM\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:TXT_DSC\"/><Cell row=\"1\" style=\"align:right middle;\" text=\"bind:BYAM\"/><Cell row=\"1\" col=\"1\" style=\"align:right middle;\" text=\"bind:BYNG_UPR\"/><Cell row=\"1\" col=\"2\" text=\"bind:BYNG_QT\"/><Cell row=\"1\" col=\"3\" style=\"align:right middle;\" text=\"bind:GAM_AM\"/><Cell row=\"1\" col=\"4\" style=\"align:right middle;\" text=\"bind:BYNG_VAT\"/></Band></Format></Formats>");
            this.div_detail.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 540, 464, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("53");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 402, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("44");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 866, this.div_detail,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("54");
            		p.set_visible("false");

            	}
            );
            this.div_detail.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 866, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_7022");
            		p.set_titletext("전표별 검수실적 조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_8310.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_8310.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
        	this.div_list.grd_list.set_nodatatext("데이터가 없습니다.");
        	this.div_detail.grd_detail.set_nodatatext("데이터가 없습니다.");
        		
        	//this.gfn_setInitForm(obj,e);
        		
        	var param = [  
         		{code:"CSER_CTR_TPC",   dsName:"ds_contract_type",   selecttype:"A"} 		
            ];

        	this.gfn_setMobileCommonCode(param);
        	
        	this.div_search.cal_from.set_value(this.gfn_minusDate(this.gfn_today("YYYYMMdd"),7));	
        	this.div_search.cal_to.set_value(this.gfn_today("YYYYMMdd"));
        }

        this.fn_commonAfterOnload= function()
        {
        	trace("fn_commonAfterOnload");
        	this.div_search.cbo_contract_type.set_index(0);
        }

        this.fn_afterFormOnload = function()
        {
        	
        }

        /* 조회 */
        this.div_search_btn_search_onclick = function(obj,e)
        {
        	this.ds_Rcv_M.clearData();
        	this.ds_Rcv_D.clearData();
        	
        	this.search();
        }

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
        	return true;
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", ErrorMsg);
        		return;
        	}else{
        		if(svcID == "retrieveRecadvSlpMasterList"){										
        			if(this.ds_Rcv_M.rowcount == 0){				
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        				//alert("조회결과가 없습니다.");
        			}else{
        				trace(this.ds_Rcv_M.saveXML());
        			}			
        		}else if(svcID == "retrieveRecadvSlpDetailList"){			
        			if(this.ds_Rcv_D.rowcount == 0){
        				//this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        		}		
        	}
        }

        this.search = function()
        {
        	if(this.fn_validationCheck()){	
        		
        		//권한사업장 없을때(접속자가 지사일때)
        		var chkAll = 'N'
        		var trplC = application.gv_glnCode;
        		
        		var search_date_type = this.gfn_nullToEmpty(this.div_search.cbo_date.value); //매출일			
        		var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        		var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일		
        		var trade_type = this.gfn_nullToEmpty(this.div_search.cbo_trade_type.value); //거래구분
        		var is_na_all = 1; //1농협사업장전체, 2실매입처(마트)
        		//var na_bzplc = this.gfn_nullToEmpty(this.div_search.edt_na_bzplc_name.value); //실매입처
        		var rots_ctr_dsc =this.gfn_nullToEmpty(this.div_search.cbo_contract_type.value); //계통계약구분
        		
        		var param = "TRPL_C=" + trplC+
        					" CHK_ALL=" + chkAll+
        					" search_date_type="+search_date_type+
        					" from_date="+from_date+
        					" to_date="+to_date+
        					" trade_type="+trade_type+		
        					" rots_ctr_dsc="+rots_ctr_dsc+
        					" is_na_all="+is_na_all;
        					
        		trace("##MASTER##PARAM##->"+param);	
        		
        		var sSvcID        = "retrieveRecadvSlpMasterList";//통신아이디
        		var sURL          = "svc::rest/recadv/retrieveRecadvSlpMasterList";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_Rcv_M=ds_rcvM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        this.div_list_grd_list_oncellclick = function(obj,e)
        {
        	var nLeft = 0;
        	this.div_detail.move(nLeft);
        	this.div_detail.bringToFront();
        	this.div_detail.set_visible(true);
        	
        	this.searchDetail();
        	this.gfn_callDetailMenu("div_detail", "검수실적_전표별 상세", "검수실적_전표별^^검수실적;직송분");
        }

        this.searchDetail = function()
        {
        	if(this.fn_validationCheck()){
        	
        		var na_bzplc = this.gfn_nullToEmpty(this.ds_Rcv_M.getColumn(this.ds_Rcv_M.rowposition,"NA_BZPLC")); //경제통합사업장코드
        		var na_team_c = this.gfn_nullToEmpty(this.ds_Rcv_M.getColumn(this.ds_Rcv_M.rowposition,"NA_TEAM_C")); //경제통합팀코드
        		var slp_dt = this.gfn_nullToEmpty(this.ds_Rcv_M.getColumn(this.ds_Rcv_M.rowposition,"SLP_DT")); //전표일자
        		var na_slpno = this.gfn_nullToEmpty(this.ds_Rcv_M.getColumn(this.ds_Rcv_M.rowposition,"NA_SLPNO")); //경제통합전표번호
        		/*	
        		na_bzplc="1000000000001";
        		na_team_c="00"
        		slp_dt="20150610"
        		na_slpno="10000001"
        		*/
        		var param = "na_bzplc="+na_bzplc+
        					" na_team_c="+na_team_c+
        					" slp_dt="+slp_dt+
        					" na_slpno="+na_slpno;
        					
        		trace("##DETAIL##PARAM##->"+param);
        			
        		var sSvcID        = "retrieveRecadvSlpDetailList";//통신아이디
        		var sURL          = "svc::rest/recadv/retrieveRecadvSlpDetailList";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_Rcv_D=ds_rcvD";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        			
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        this.div_detail_grd_detail_oncellclick = function(obj,e)
        {
        	/*
        	var nLeft = 0;
        	this.div_detail.bringToPrev();
        	this.div_detail.set_visible(false);
        	*/
        }

        this.div_list_btn_searchControl_onclick = function(obj,e)
        {
        	this.gfn_mobileSearchDivResize(obj, this.div_search, this.div_list);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_Rcv_M.addEventHandler("onrowposchanged", this.ds_Rcv_M_onrowposchanged, this);
            this.ds_Rcv_D.addEventHandler("onrowposchanged", this.ds_Rcv_D_onrowposchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.div_list.grd_list.addEventHandler("oncellclick", this.div_list_grd_list_oncellclick, this);
            this.div_list.btn_searchControl.addEventHandler("onclick", this.div_list_btn_searchControl_onclick, this);
            this.div_search.btn_search.addEventHandler("onclick", this.div_search_btn_search_onclick, this);
            this.div_detail.grd_detail.addEventHandler("oncellclick", this.div_detail_grd_detail_oncellclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_8310.xfdl");

       
    };
}
)();
