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
                this.set_name("VAN_DS_SC_0521");
                this.set_titletext("검수실적_매입처별실적상세");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"SLP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NA_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"CNR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TRSLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"RPY_PLA_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NA_DVY_PLASH_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TR_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_CRC_CAN_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"ROTS_CTR_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"GAM_AM\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"VCBX_AM\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_GAM\" type=\"STRING\" size=\"256\"/><Column id=\"CHRG_TOT\" type=\"STRING\" size=\"256\"/><Column id=\"CBAM\" type=\"STRING\" size=\"256\"/><Column id=\"GWA_AM\" type=\"STRING\" size=\"256\"/><Column id=\"GWA_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"LIQ_GAM\" type=\"STRING\" size=\"256\"/><Column id=\"LIQ_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"EXTX_AM\" type=\"STRING\" size=\"256\"/><Column id=\"SMA_AM\" type=\"STRING\" size=\"256\"/><Column id=\"CCLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ACTL_BUYPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"BCLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_SSDY\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_AMN_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_AMN_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"SLGT_AMN_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_FEE_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"TRP_SVC_CST\" type=\"STRING\" size=\"256\"/><Column id=\"TRP_SVCOS_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_FEE_VAT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_excel", "absolute", null, "35", "41", "21", "15", null, this);
            obj.set_taborder("0");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "15", "59", null, "95", "15", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_00", "absolute", "15", "36", "79", "21", null, null, this.div_search);
            obj.set_taborder("46");
            obj.set_text("공급업체");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_01", "absolute", "15", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("47");
            obj.set_text("일자구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_03", "absolute", "439", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("48");
            obj.set_text("거래구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "293", "10", "10", "21", null, null, this.div_search);
            obj.set_taborder("52");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data04", "absolute", "94", "36", "110", "21", null, null, this.div_search);
            obj.set_taborder("53");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_readonly("true");
            obj.style.set_align("left middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data05", "absolute", "207", "36", "202", "21", null, null, this.div_search);
            obj.set_taborder("54");
            obj.set_cssclass("WF_Essential");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "232", "31", "103", "5", null, null, this.div_search);
            obj.set_taborder("56");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "233", "0", "103", "10", null, null, this.div_search);
            obj.set_taborder("58");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title05", "absolute", "439", "36", "103", "21", null, null, this.div_search);
            obj.set_taborder("59");
            obj.set_text("계통계약유형");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "409", "16", "30", "50", null, null, this.div_search);
            obj.set_taborder("63");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data00", "absolute", "94", "10", "90", "21", null, null, this.div_search);
            obj.set_taborder("64");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data01", "absolute", "187", "10", "100", "21", null, null, this.div_search);
            obj.set_taborder("65");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data02", "absolute", "309", "10", "100", "21", null, null, this.div_search);
            obj.set_taborder("66");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data03", "absolute", "542", "10", "151", "21", null, null, this.div_search);
            obj.set_taborder("67");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data06", "absolute", "542", "36", "151", "21", null, null, this.div_search);
            obj.set_taborder("68");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_02", "absolute", "15", "62", "79", "21", null, null, this.div_search);
            obj.set_taborder("69");
            obj.set_text("사업장");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data07", "absolute", "94", "62", "110", "21", null, null, this.div_search);
            obj.set_taborder("70");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_readonly("true");
            obj.style.set_align("left middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data08", "absolute", "207", "62", "202", "21", null, null, this.div_search);
            obj.set_taborder("71");
            obj.set_cssclass("WF_Essential");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "232", "57", "103", "5", null, null, this.div_search);
            obj.set_taborder("72");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "233", "83", "103", "10", null, null, this.div_search);
            obj.set_taborder("73");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data031", "absolute", "542", "10", "151", "21", null, null, this.div_search);
            obj.set_taborder("74");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data061", "absolute", "542", "36", "151", "21", null, null, this.div_search);
            obj.set_taborder("75");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data001", "absolute", "94", "10", "90", "21", null, null, this.div_search);
            obj.set_taborder("76");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.set_inputmode("normal");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("grd_detail", "absolute", "15", "178", null, null, "15", "14", this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_detail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"검수일자\"/><Cell col=\"2\" text=\"매출일자-전표번호\"/><Cell col=\"3\" text=\"지급예정일\"/><Cell col=\"4\" text=\"배송예정서번호\"/><Cell col=\"5\" text=\"거래구분\"/><Cell col=\"6\" text=\"정정취소구분\"/><Cell col=\"7\" text=\"계통구분\"/><Cell col=\"8\" text=\"공급금액\"/><Cell col=\"9\" text=\"부가세\"/><Cell col=\"10\" text=\"공병금액\"/><Cell col=\"11\" text=\"공상자금액\"/><Cell col=\"12\" text=\"총공급금액\"/><Cell col=\"13\" text=\"총공제금액\"/><Cell col=\"14\" text=\"순공급금액\"/><Cell col=\"15\" text=\"과세공급\"/><Cell col=\"16\" text=\"과세부가세\"/><Cell col=\"17\" text=\"주류공급\"/><Cell col=\"18\" text=\"주류부가세\"/><Cell col=\"19\" text=\"면세금액\"/><Cell col=\"20\" text=\"영세금액\"/><Cell col=\"21\" text=\"본지사명\"/><Cell col=\"22\" text=\"본지사코드\"/><Cell col=\"23\" text=\"사업장명\"/><Cell col=\"24\" text=\"사업장코드\"/><Cell col=\"25\" text=\"업체별수수료\"/><Cell col=\"26\" text=\"매입장려금\"/><Cell col=\"27\" text=\"관리수수료(R2)\"/><Cell col=\"28\" text=\"관리부가세(R2)\"/><Cell col=\"29\" text=\"관리수수료(R1)\"/><Cell col=\"30\" text=\"물류수수료\"/><Cell col=\"31\" text=\"물류부가세\"/><Cell col=\"32\" text=\"운송용역비\"/><Cell col=\"33\" text=\"운송부가세\"/><Cell col=\"34\" text=\"기타수수료\"/><Cell col=\"35\" text=\"기타수수료부가세\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CNR_DT\" mask=\"@@@@-@@-@@\"/><Cell col=\"2\" text=\"bind:TRSLPNO\"/><Cell col=\"3\" text=\"bind:RPY_PLA_DT\" mask=\"@@@@-@@-@@\"/><Cell col=\"4\" text=\"bind:NA_DVY_PLASH_SLPNO\"/><Cell col=\"5\" text=\"bind:NA_TR_DSC\"/><Cell col=\"6\" text=\"bind:NA_CRC_CAN_DSC\"/><Cell col=\"7\" style=\"align:left;\" text=\"bind:ROTS_CTR_DSC\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:GAM_AM\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BYNG_VAT\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VCBT_AM\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VCBX_AM\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOT_GAM\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CHRG_TOT\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CBAM\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"bind:GWA_AM\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;\" text=\"bind:GWA_VAT\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right;\" text=\"bind:LIQ_GAM\"/><Cell col=\"18\" displaytype=\"number\" style=\"align:right;\" text=\"bind:LIQ_VAT\"/><Cell col=\"19\" displaytype=\"number\" style=\"align:right;\" text=\"bind:EXTX_AM\"/><Cell col=\"20\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SMA_AM\"/><Cell col=\"21\" style=\"align:left;\" text=\"bind:CCLNTNM\"/><Cell col=\"22\" text=\"bind:ACTL_BUYPL_NA_TRPL_C\"/><Cell col=\"23\" style=\"align:left;\" text=\"bind:BCLNTNM\"/><Cell col=\"24\" text=\"bind:MNGT_NA_TRPL_C\"/><Cell col=\"25\" displaytype=\"number\" style=\"align:right;\" text=\"bind:COMP_FEE\"/><Cell col=\"26\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BYNG_SSDY\"/><Cell col=\"27\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ETR_AMN_FEE\"/><Cell col=\"28\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ETR_AMN_VAT\"/><Cell col=\"29\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLGT_AMN_FEE\"/><Cell col=\"30\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PHD_FEE\"/><Cell col=\"31\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PHD_FEE_VAT\"/><Cell col=\"32\" displaytype=\"number\" style=\"background:right;\" text=\"bind:TRP_SVC_CST\"/><Cell col=\"33\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TRP_SVCOS_VAT\"/><Cell col=\"34\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ETC_FEE\"/><Cell col=\"35\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ETC_FEE_VAT\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" style=\"align:center;\" text=\"합계\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('GAM_AM');\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BYNG_VAT');\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('VCBT_AM');\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('VCBX_AM');\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('TOT_GAM');\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('CHRG_TOT');\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('CBAM');\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('GWA_AM');\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('GWA_VAT');\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('LIQ_GAM');\"/><Cell col=\"18\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('LIQ_VAT');\"/><Cell col=\"19\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('EXTX_AM');\"/><Cell col=\"20\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('SMA_AM');\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('COMP_FEE');\"/><Cell col=\"26\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BYNG_SSDY');\"/><Cell col=\"27\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('ETR_AMN_FEE');\"/><Cell col=\"28\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('ETR_AMN_VAT');\"/><Cell col=\"29\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('SLGT_AMN_FEE');\"/><Cell col=\"30\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('PHD_FEE');\"/><Cell col=\"31\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('PHD_FEE_VAT');\"/><Cell col=\"32\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('TRP_SVC_CST');\"/><Cell col=\"33\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('TRP_SVCOS_VAT');\"/><Cell col=\"34\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('ETC_FEE');\"/><Cell col=\"35\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('ETC_FEE_VAT');\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("4");
            obj.set_text("매입처별실적상세");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "0", "39", "32", "0", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 95, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_0521");
            		p.set_titletext("검수실적_매입처별실적상세");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0521.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0521.xfdl", function() {
        //include "lib::comLib.xjs";

        var searchD = this.parent.searchD;

        this.form_onload = function(obj,e)
        {
           this.gfn_setInitForm(obj, e); //공통
        };
        this.fn_afterFormOnload = function()
        {
        	if(searchD.bznm == "합계"){
        		this.alert("정상적인 경로가 아닙니다. 경로를 확인하십시오.");
        		this.close();
        	}
        	
        	this.div_search.edt_data00.set_value(searchD.date_chk);		//일자구분
        	this.div_search.edt_data001.set_value(searchD.date_chk_nm);	//일자구분명
        	this.div_search.edt_data01.set_value(this.formatDate("yyyy-MM-dd",searchD.fr_date.toString()));		//시작일
        	this.div_search.edt_data02.set_value(this.formatDate("yyyy-MM-dd",searchD.to_date.toString()));		//종료일
        	this.div_search.edt_data03.set_value(searchD.sign_list);	//거래구분
        	this.div_search.edt_data031.set_value(searchD.sign_list_nm);//거래구분명
        	this.div_search.edt_data04.set_value(searchD.trpl_c);		//거래처코드
        	this.div_search.edt_data05.set_value(searchD.trpl_c_nm);	//거래처명
        	this.div_search.edt_data06.set_value(searchD.ctr_tpc);		//계통계약유형
        	this.div_search.edt_data061.set_value(searchD.ctr_tpc_nm);	//계통계약유형명
        	this.div_search.edt_data07.set_value(searchD.bzplc);		//매입처
        	this.div_search.edt_data08.set_value(searchD.bznm);			//매입처명
        	
        	this.search();
        }

        this.search = function()
        {
        	var params = "TRPL_C="+searchD.trpl_c				//거래처코드
        				+" search_date_type="+searchD.date_chk	//일자구분
        				+" from_date="+searchD.fr_date			//시작일
        				+" to_date="+searchD.to_date			//종료일
        				+" trade_type="+searchD.sign_list		//거래구분
        				+" is_na_all="+searchD.bz_gubun			//농협사업장 전체
        				+" na_bzplc="+searchD.bzplc				//공급처코드
        				+" rots_ctr_dsc="+searchD.ctr_tpc		//계통계약유형
        				+" MNGT_NA_TRPL_C="+searchD.bzplc		//사업장
        				
        	;
        	
        	var sSvcID        = "p_search";//통신아이디
        	var sURL          = "svc::rest/recadv/retrieveRecadvSlp_NA_TRPL_C_Detail";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_detail=ds_detail";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.fn_callback = function(svcID,nCD,sMSG)
        {
        	if(nCD < 0){
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "p_search"){
        			
        		}
        	}
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.btn_excel_onclick = function(obj,e)
        {
        	var params = "&search_date_type="+searchD.date_chk	//일자구분
        				+"&from_date="+searchD.fr_date			//시작일
        				+"&to_date="+searchD.to_date			//종료일
        				+"&trade_type="+searchD.sign_list		//거래구분
        				+"&na_bzplc="+searchD.bzplc				//공급처코드
        				+"&is_na_all="+searchD.bz_gubun			//농협사업장 전체
        				+"&rots_ctr_dsc="+searchD.ctr_tpc		//계통계약유형
        				+"&TRPL_C="+searchD.trpl_c				//권한사업장
        				+"&MNGT_NA_TRPL_C="+searchD.bzplc		//사업장
        				+"&fileName=검수실적_매입처별상세_"+this.getDate()+".xls";
        					
        	params = encodeURI(encodeURI(params));
        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelRecadvSlp_NA_TRPL_C_D?"+params, this);	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.div_search.edt_data00.addEventHandler("onkeydown", this.div_search_edt_data00_onkeydown, this);
            this.div_search.edt_data03.addEventHandler("onkeydown", this.div_search_edt_data00_onkeydown, this);
            this.div_search.edt_data06.addEventHandler("onkeydown", this.div_search_edt_data00_onkeydown, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0521.xfdl");

       
    };
}
)();
