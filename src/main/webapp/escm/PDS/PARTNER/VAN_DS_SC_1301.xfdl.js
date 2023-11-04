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
                this.set_name("VAN_DS_SC_1301");
                this.set_titletext("요청거래관계조회");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pop_data", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CSER_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_TEAM_N\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NA_TEAM_N\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TEAM_N\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_CTR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_CTR_TPC_N\" type=\"STRING\" size=\"256\"/><Column id=\"BZ_METH_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_ADJPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_ADJPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_CTR_CHRRNM\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_CTR_CHRR_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_CTR_CHRR_MPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_HOFF_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_BNK_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_STL_ACNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_DPRNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CTR_CHRRNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CTR_CHRR_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CTR_CHRR_MPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPY_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"SPY_TPC_N\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_STOP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_CLO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_CLO_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"TR_STOP_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_ODR_FBID_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_FBID_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_BUYER_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"NA_RVO_FBID_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"RVO_FBID_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LDTM_DDS\" type=\"STRING\" size=\"256\"/><Column id=\"RGD_AMN_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_PMI_SBJ_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"STL_FDT_BASCD\" type=\"STRING\" size=\"256\"/><Column id=\"SSDYRT_BASCD\" type=\"STRING\" size=\"256\"/><Column id=\"SSDYRT\" type=\"STRING\" size=\"256\"/><Column id=\"SSDY_BAS_AM\" type=\"STRING\" size=\"256\"/><Column id=\"DDLY_SSDYRT\" type=\"STRING\" size=\"256\"/><Column id=\"SSDY_PY_PTM_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BKG_CHG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TR_REL_RG_RQR_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CMENO\" type=\"STRING\" size=\"256\"/><Column id=\"APVMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"APV_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"APV_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"APV_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REJ_RSNCTT\" type=\"STRING\" size=\"256\"/><Column id=\"TR_REL_PRG_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RSP_C_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"EDI_IF_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AMNNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cser_ctr_tpc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_spy_tpc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_search00", "absolute", null, "47", "58", "21", "17", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "17", "76", null, "95", "17", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_title00", "absolute", "15", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("136");
            obj.set_text("계약유형");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title02", "absolute", "15", "36", "79", "21", null, null, this.div_search);
            obj.set_taborder("137");
            obj.set_text("수요처");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title04", "absolute", "467", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("138");
            obj.set_text("공급유형");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title03", "absolute", "15", "62", "79", "21", null, null, this.div_search);
            obj.set_taborder("140");
            obj.set_text("공급처");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data01", "absolute", "212", "36", "130", "21", null, null, this.div_search);
            obj.set_taborder("141");
            obj.set_cssclass("WF_Essential");
            obj.getSetter("titletext").set("하나로마트요청내역조회");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data00", "absolute", "99", "36", "110", "21", null, null, this.div_search);
            obj.set_taborder("142");
            obj.set_inputtype("number");
            obj.set_readonly("false");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup00", "absolute", "345", "36", "22", "21", null, null, this.div_search);
            obj.set_taborder("145");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data02", "absolute", "370", "36", "67", "21", null, null, this.div_search);
            obj.set_taborder("149");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data03", "absolute", "99", "62", "110", "21", null, null, this.div_search);
            obj.set_taborder("150");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.getSetter("titletext").set("하나로마트요청거래관계조회");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data04", "absolute", "212", "62", "130", "21", null, null, this.div_search);
            obj.set_taborder("151");
            obj.set_cssclass("WF_Essential");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup01", "absolute", "345", "62", "22", "21", null, null, this.div_search);
            obj.set_taborder("152");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data05", "absolute", "370", "62", "67", "21", null, null, this.div_search);
            obj.set_taborder("153");
            obj.set_enable("false");
            obj.set_value("00");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_CSER_CTR_TPC", "absolute", "99", "10", "110", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("154");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_innerdataset("@ds_cser_ctr_tpc");
            obj = new Combo("cbo_SPY_TPC", "absolute", "546", "10", "110", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("155");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_innerdataset("@ds_spy_tpc");
            obj = new Static("Static12", "absolute", "99", "83", "100", "10", null, null, this.div_search);
            obj.set_taborder("156");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "100", "0", "100", "10", null, null, this.div_search);
            obj.set_taborder("157");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "99", "57", "100", "5", null, null, this.div_search);
            obj.set_taborder("158");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "99", "31", "100", "5", null, null, this.div_search);
            obj.set_taborder("159");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "437", "8", "30", "62", null, null, this.div_search);
            obj.set_taborder("160");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("grd_pop_data", "absolute", "17", "186", null, null, "17", "58", this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_pop_data");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"진행상태\"/><Cell col=\"2\" rowspan=\"2\" text=\"요청일자\"/><Cell col=\"3\" colspan=\"2\" text=\"수요처\"/><Cell col=\"5\" colspan=\"2\" text=\"공급처\"/><Cell col=\"7\" rowspan=\"2\" text=\"계약유형\"/><Cell col=\"8\" rowspan=\"2\" text=\"공급유형\"/><Cell col=\"9\" colspan=\"2\" text=\"주관사업장\"/><Cell col=\"11\" rowspan=\"2\" text=\"주관거래유형\"/><Cell col=\"12\" colspan=\"2\" text=\"상품\"/><Cell row=\"1\" col=\"3\" text=\"거래처\"/><Cell row=\"1\" col=\"4\" text=\"팀\"/><Cell row=\"1\" col=\"5\" text=\"거래처\"/><Cell row=\"1\" col=\"6\" text=\"팀\"/><Cell row=\"1\" col=\"9\" text=\"거래처\"/><Cell row=\"1\" col=\"10\" text=\"팀\"/><Cell row=\"1\" col=\"12\" text=\"대분류\"/><Cell row=\"1\" col=\"13\" text=\"중분류\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:AMNNO\" expr=\"expr:AMNNO=='0'?'요청진행중':'등록완료'\"/><Cell col=\"2\" text=\"bind:EDI_IF_ID\"/><Cell col=\"3\" text=\"bind:CSER_NA_TRPL_N\"/><Cell col=\"4\" text=\"bind:CSER_NA_TEAM_N\"/><Cell col=\"5\" text=\"bind:SPLR_NA_TRPL_N\"/><Cell col=\"6\" text=\"bind:SPLR_NA_TEAM_N\"/><Cell col=\"7\" text=\"bind:CSER_CTR_TPC_N\"/><Cell col=\"8\" text=\"bind:SPY_TPC_N\"/><Cell col=\"9\" text=\"bind:MNGT_NA_TRPL_N\"/><Cell col=\"10\" text=\"bind:MNGT_NA_TEAM_N\"/><Cell col=\"11\" text=\"bind:MNGT_NA_TR_TPC\"/><Cell col=\"12\" text=\"bind:NA_WRS_LCLC\"/><Cell col=\"13\" text=\"bind:NA_WRS_MCLC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "0", "37", "32", "0", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("6");
            obj.set_text("하나로마트거래관계요청내역조회");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "695", "68", "91", "8", null, null, this);
            obj.set_taborder("8");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok", "absolute", null, "442", "54", "29", "73", null, this);
            obj.set_taborder("9");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", null, "442", "54", "29", "17", null, this);
            obj.set_taborder("10");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "699", "471", "89", "17", null, null, this);
            obj.set_taborder("11");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "87.05%", "432", null, "10", "1.87%", null, this);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 95, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1301");
            		p.set_titletext("요청거래관계조회");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1301.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1301.xfdl", function() {
        //include "lib::comLib.xjs";

        this.objRtnArr = new Array(this.ds_pop_data.colcount); //팝업창 close시 전달할 값을 위한 배열 선언

        this.form_onload = function(obj,e) 
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function() //onload
        {
        	var param = [
         		{code:"CSER_CTR_TPC", dsName:"ds_cser_ctr_tpc", selecttype:"A"}, 	// 0.계약유형
         		{code:"SPY_TPC", dsName:"ds_spy_tpc", selecttype:"A"}, 				// 1.공급유형
        	];
        	this.gfn_setCommonCode(param);
        	
        	this.div_search.cbo_CSER_CTR_TPC.set_value("all"); 	//계약유형 전체값 설정
        	this.div_search.cbo_SPY_TPC.set_value("all"); 		//공급유형 전체값 설정
        	var init_trpl_c = this.parent.trplc;
        	var init_trpl_nm = this.parent.trplnm;
        	
        	//그리드 조회없음 표시
        	this.grd_pop_data.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	
        	// 팝업조회 시 로그인 정보를 입력
        	this.div_search.edt_data03.set_value(init_trpl_c); 
        	this.div_search.edt_data04.set_value(init_trpl_nm);
        	this.search(init_trpl_c);
        }

        //조회버튼
        this.btn_search00_onclick = function(obj,e)
        {
        	var search_trpl_c = this.div_search.edt_data03.value;
        	this.search(search_trpl_c);
        }

        //조회
        this.search = function(TRPL_C)
        {
        	var json = this.getParamJson(this.components);
        	json.TRPL_C = TRPL_C	//사업장코드
        	var params = this.getParamJsonToString(json);
        	
        	var sSvcID        = "p_popsearch";//통신아이디
        	var sURL          = "svc::rest/pds/partner/Trade/retrieveTrnrelPopup";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_pop_data=ds_pop_data";
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType 	  = "U"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.fn_callback = function(svcID,nCD,sMSG)
        {
        	if(nCD < 0)
        	{
        		this.alert('조회실패');
        	}
        }

        // 수요거래처 조회
        this.div_search_btn_popup00_onclick = function(params)
        {
        	if(params == true){
        		if(this.gfn_nullToEmpty((this.div_search.edt_data00.value).length < 7 && this.gfn_nullToEmpty(this.div_search.edt_data00.value).length > 0) || (this.gfn_nullToEmpty(this.div_search.edt_data00.value).length > 13)){
        			this.gfn_getMessage("alert",'msg.van_ds_sc_1302.view.text.between');
        			return;
        		}
        		if(this.gfn_nullToEmpty(this.div_search.edt_data01.value).length == 1){
        			this.gfn_getMessage("alert",'msg.van_ds_sc_1302.view.input.bzplcnm');
        			return;
        		}
        	}

        	var code = this.div_search.edt_data00.value;
        	var textname = this.div_search.edt_data01.value;
        	var param = {
        				autoType:params,
        				searchCode:code,
        				searchText:textname
        	};
        	if(typeof params == "boolean"){
        		if(!this.searPopValue(param)){return};
        	}
        	
        	var oArg = {paramMode:"U", sepVal:'1310', autoPop:param};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("cer_trpl","PDS.PARTNER::VAN_DS_SC_1302.xfdl",oArg,sOption,sPopupCallBack);	  
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	if(strVal != undefined){
        		var strarr = strVal.split(",");
        		if(strId == "cer_trpl"){
        			this.div_search.edt_data00.set_value(strarr[0]);
        			this.div_search.edt_data01.set_value(strarr[3]);
        			this.div_search.edt_data02.set_value(strarr[9]);
        		}
        	}
        }
        //닫기
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }
        //닫기
        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        }

        // 그리드 선택 된 로우를 보내준다.
        this.btn_ok_onclick = function(obj,e)
        {
        	var arrcount = this.objRtnArr.length;
        	for(var arrc = 0; arrc<arrcount; arrc++)
        	{
        		this.objRtnArr[arrc] = this.ds_pop_data.getColumn(this.ds_pop_data.rowposition,arrc);
        	}
        	this.close(this.objRtnArr.toString());
        }

        this.div_search_edt_data00_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_btn_popup00_onclick(true);
        	}
        }

        this.div_search_edt_data01_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_btn_popup00_onclick(true);
        	}
        }

        this.grd_pop_data_oncellclick = function(obj,e)
        {
        	var rows = this.ds_pop_data.rowposition;
        	this.div_search.edt_data00.set_value(this.ds_pop_data.getColumn(rows,"CSER_NA_TRPL_C"));
        	this.div_search.edt_data01.set_value(this.ds_pop_data.getColumn(rows,"CSER_NA_TRPL_N"));
        	this.div_search.edt_data02.set_value(this.ds_pop_data.getColumn(rows,"CSER_NA_TEAM_C"));
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search00.addEventHandler("onclick", this.btn_search00_onclick, this);
            this.div_search.edt_data01.addEventHandler("onkeydown", this.div_search_edt_data01_onkeydown, this);
            this.div_search.edt_data00.addEventHandler("onkeydown", this.div_search_edt_data00_onkeydown, this);
            this.div_search.btn_popup00.addEventHandler("onclick", this.div_search_btn_popup00_onclick, this);
            this.div_search.btn_popup01.addEventHandler("onclick", this.div_search_btn_popup00_onclick, this);
            this.grd_pop_data.addEventHandler("oncellclick", this.grd_pop_data_oncellclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_ok.addEventHandler("onclick", this.btn_ok_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1301.xfdl");

       
    };
}
)();
