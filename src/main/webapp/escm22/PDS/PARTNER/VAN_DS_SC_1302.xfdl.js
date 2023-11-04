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
                this.set_name("VAN_DS_SC_1341");
                this.set_titletext("거래처조회");
                this.set_cssclass("frm_WF_PopupBg");
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
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZ_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZ_TPN\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"TEAMNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_RGN_C\" type=\"STRING\" size=\"256\"/><Column id=\"UP_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"BZPL_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"BZPL_TPNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPL_DTI_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"BZPL_DTI_TPNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NAAC_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_MBCO_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_MBCO_DSN\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"NAAC_DSN\" type=\"STRING\" size=\"256\"/><Column id=\"NA_USR_SYS_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TXBZ_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"FMACH_PATS_TRT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TR_STOP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TR_STOP_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"ATEL\" type=\"STRING\" size=\"256\"/><Column id=\"HTEL\" type=\"STRING\" size=\"256\"/><Column id=\"STEL\" type=\"STRING\" size=\"256\"/><Column id=\"MPSVNO\" type=\"STRING\" size=\"256\"/><Column id=\"MPHNO\" type=\"STRING\" size=\"256\"/><Column id=\"MPSQNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "17", "76", null, "43", "17", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("edt_searchText", "absolute", "221", "10", "172", "21", null, null, this.div_search);
            obj.set_taborder("21");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_trpl_c_kind", "absolute", "88", "10", "130", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_trpl_c_kind_innerdataset = new Dataset("cbo_trpl_c_kind_innerdataset", this.div_search.cbo_trpl_c_kind);
            cbo_trpl_c_kind_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">거래처코드</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">거래처명</Col></Row></Rows>");
            obj.set_innerdataset(cbo_trpl_c_kind_innerdataset);
            obj.set_taborder("22");
            obj.set_value("1");
            obj.set_text("거래처코드");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj = new Static("Static00", "absolute", "9", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("23");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "423", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("24");
            obj.set_text("중/조합구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_NAAC_DSC", "absolute", "526", "10", "130", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_NAAC_DSC_innerdataset = new Dataset("cbo_NAAC_DSC_innerdataset", this.div_search.cbo_NAAC_DSC);
            cbo_NAAC_DSC_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">내부</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">외부</Col></Row></Rows>");
            obj.set_innerdataset(cbo_NAAC_DSC_innerdataset);
            obj.set_taborder("25");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("-1");

            obj = new Grid("grd_rvopl", "absolute", "17", "160", null, "259", "17", null, this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_master_data");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"320\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"중조합\"/><Cell col=\"2\" rowspan=\"2\" text=\"본지사\"/><Cell col=\"3\" rowspan=\"2\" text=\"거래처코드\"/><Cell col=\"4\" rowspan=\"2\" text=\"거래처명\"/><Cell col=\"5\" colspan=\"2\" text=\"팀\"/><Cell col=\"7\" colspan=\"2\" text=\"사업유형\"/><Cell col=\"9\" rowspan=\"2\" text=\"사업장유형\"/><Cell col=\"10\" rowspan=\"2\" text=\"상세사업장유형\"/><Cell col=\"11\" rowspan=\"2\" text=\"거래처구분\"/><Cell col=\"12\" rowspan=\"2\" text=\"주소\"/><Cell col=\"13\" rowspan=\"2\" text=\"우편번호\"/><Cell row=\"1\" col=\"5\" text=\"코드\"/><Cell row=\"1\" col=\"6\" text=\"팀\"/><Cell row=\"1\" col=\"7\" text=\"코드\"/><Cell row=\"1\" col=\"8\" text=\"명\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:NAAC_DSN\"/><Cell col=\"2\" text=\"bind:NA_MBCO_DSN\"/><Cell col=\"3\" text=\"bind:NA_TRPL_C\"/><Cell col=\"4\" text=\"bind:CLNTNM\"/><Cell col=\"5\" text=\"bind:NA_TEAM_C\"/><Cell col=\"6\" text=\"bind:TEAMNM\"/><Cell col=\"7\" text=\"bind:NA_BZ_TPC\"/><Cell col=\"8\" text=\"bind:NA_BZ_TPN\"/><Cell col=\"9\" text=\"bind:BZPL_TPC\"/><Cell col=\"10\" text=\"bind:BZPL_DTI_TPC\"/><Cell col=\"11\" text=\"bind:NA_TRPL_DSC\"/><Cell col=\"12\" text=\"bind:DONG\"/><Cell col=\"13\" text=\"bind:ZIP\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok", "absolute", null, "435", "54", "29", "74", null, this);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", null, "435", "54", "29", "17", null, this);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "47", "58", "21", "17", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "732", "68", "56", "8", null, null, this);
            obj.set_taborder("5");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0%", "0", null, "32", "57.04%", null, this);
            obj.set_taborder("6");
            obj.set_text("거래처조회");
            obj.set_cssclass("sta_WF_PopupTitle");
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
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1341");
            		p.set_titletext("거래처조회");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1302.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1302.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        var TRPL_C = application.gv_glnCode;	//로그인한 거래처코드
        this.objRtnArr = new Array(11);			//선택한 데이터를 담을 배열

        var autoPop = this.parent.autoPop;

        this.form_onload = function(obj,e) 
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function() //onload
        {
        	this.div_search.cbo_NAAC_DSC.set_index(0);
        	if(this.parent.sepVal == "1300"){
        		this.div_search.cbo_NAAC_DSC.set_value("1");
        		this.div_search.cbo_NAAC_DSC.set_readonly(true);
        	}
        	if(this.parent.sepVal == "1330"){
        		this.div_search.cbo_NAAC_DSC.set_value("1");
        		this.div_search.cbo_NAAC_DSC.set_readonly(true);
        	}
        	if(this.parent.sepVal == "1340"){
        		this.div_search.cbo_NAAC_DSC.set_value("1");
        		this.div_search.cbo_NAAC_DSC.set_readonly(true);
        	}
        	this.grd_rvopl.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	
        	var searchParam =
        	{
        				form: this,							//고정
        				param:[{									
        						edit: this.div_search.edt_searchText,		//타겟 컴포넌트
        						fnc: 'search'		//엔터키 눌렀을시 실행 할 함수 이름
        				}]
        	};
        	this.addEventEnterSearch(searchParam);
        	
        	if(autoPop.autoType){
        		if(autoPop.searchCode && autoPop.searchText){
        			this.div_search.cbo_trpl_c_kind.set_value("1");
        			this.div_search.edt_searchText.set_value(autoPop.searchCode);
        		}
        		if(autoPop.searchCode && !autoPop.searchText){
        			this.div_search.cbo_trpl_c_kind.set_value("1");
        			this.div_search.edt_searchText.set_value(autoPop.searchCode);
        		}
        		if(!autoPop.searchCode && autoPop.searchText){
        			this.div_search.cbo_trpl_c_kind.set_value("2");
        			this.div_search.edt_searchText.set_value(autoPop.searchText);
        		}
        		if(!autoPop.searchCode && !autoPop.searchText){
        			return;
        		}
        		this.search();
        	}
        }

        //조회
        this.search = function()
        {
        	if(this.validationchk() == false){return false;}

        	var params ="TRPL_C_KIND="+this.div_search.cbo_trpl_c_kind.value 	//검색조건 
        				+" NAAC_DSC="+this.div_search.cbo_NAAC_DSC.value  		//중/조합구분코드
        				+" searchText='"+this.div_search.edt_searchText.value+"'";	//검색입력값
        	
        	var sSvcID        = "p_search";//통신아이디
        	var sURL          = "svc::rest/pds/partner/Trade/retrievePopTrades";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_master_data=ds_master_data";
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType 	  = "U"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.validationchk = function()
        {
        	var searchVal = this.div_search.edt_searchText;
        	if(this.gfn_nullToEmpty(searchVal.value).length < 1){
        		this.gfn_getMessage("alert",'msg.van_ds_sc_1302.view.text.null');
        		return false;
        	}
        	
        	if(this.div_search.cbo_trpl_c_kind.value == 1 && 
        	(this.gfn_nullToEmpty(searchVal.value).length < 7 || this.gfn_nullToEmpty(searchVal.value).length > 13)){
        		this.gfn_getMessage("alert",'msg.van_ds_sc_1302.view.text.between');
        		return false;
        	}
        	
        	if(this.div_search.cbo_trpl_c_kind.value == 2 && this.gfn_nullToEmpty(searchVal.value).length < 2){
        		this.gfn_getMessage("alert",'msg.van_ds_sc_1302.view.input.bzplcnm');
        		return false;
        	}
        	return true;
        }

        this.fn_callback = function(svcID,nCD,sMSG)
        {
        	if(nCD < 0){
        		this.gfn_getMessage("alert", sMSG);
        		return;
        	}else{
        		if(svcID == "p_search" && sMSG == "success.data"){
        			if(this.ds_master_data.rowcount < 1){
        				this.alert('해당 거래처['+this.div_search.edt_searchText.value+']의 사업장 정보가 존재하지 않습니다. \n'
        						  +'(주의 : 대표사업장/삭제된 사업장은 조회되지않습니다.)'
        						);
        				this.grd_rvopl.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        			}else if(this.ds_master_data.rowcount == 1){
        				if(autoPop.autoType == true){
        					this.grd_rvopl.selectRow(0);
        					this.btn_ok_onclick();
        				}
        			}else{
        				this.grd_rvopl.selectRow(0);
        				this.ds_master_data.setFocus();
        			}
        			
        			var ds = this.ds_master_data;
        			var BZPL_TPC = "";
        			var BZPL_TPNM = "";
        			var BZPL_DTI_TPC = "";
        			var BZPL_DTI_TPNM = "";
        			for(var i=0;i<ds.rowcount; i++){
        			//사업장유형컬럼에 Text 형태를 변경
        				BZPL_TPC = ds.getColumn(i,"BZPL_TPC");
        				BZPL_TPNM = ds.getColumn(i,"BZPL_TPNM");
        				//ds.setColumn(i,"BZPL_TPNM",BZPL_TPC+" "+BZPL_TPNM);
        			//상세사업장유형컬럼에 Text 형태를 변경	
        				BZPL_DTI_TPC = ds.getColumn(i,"BZPL_DTI_TPC");
        				BZPL_DTI_TPNM = ds.getColumn(i,"BZPL_DTI_TPNM");
        				//ds.setColumn(i,"BZPL_DTI_TPNM",BZPL_DTI_TPC+" "+BZPL_DTI_TPNM);
        			}
        		}
        	}
        }

        //팝업 창 닫기
        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        }

        //확인을 누르면 배열로 담아 master 페이지에 던져준다.
        this.btn_ok_onclick = function(obj,e)
        {
        	this.objRtnArr[0] = this.ds_master_data.getColumn(this.ds_master_data.rowposition,"NA_TRPL_C");			//경제통합거래처코드
        	this.objRtnArr[1] = this.ds_master_data.getColumn(this.ds_master_data.rowposition,"NA_TRPL_DSC");		//경제통합거래처구분코드
        	this.objRtnArr[2] = this.ds_master_data.getColumn(this.ds_master_data.rowposition,"NAAC_DSC");			//중앙회조합구분코드
        	this.objRtnArr[3] = this.ds_master_data.getColumn(this.ds_master_data.rowposition,"CLNTNM");			//거래처명
        	this.objRtnArr[4] = this.ds_master_data.getColumn(this.ds_master_data.rowposition,"NA_MBCO_DSC");		//본지사구분코드
        	this.objRtnArr[5] = this.ds_master_data.getColumn(this.ds_master_data.rowposition,"NA_RGN_C");			//통합지역코드
        	this.objRtnArr[6] = this.ds_master_data.getColumn(this.ds_master_data.rowposition,"FMACH_PATS_TRT_YN");	//농기계부품취급여부
        	this.objRtnArr[7] = this.ds_master_data.getColumn(this.ds_master_data.rowposition,"TR_STOP_YN");		//거래중지일자
        	this.objRtnArr[8] = this.ds_master_data.getColumn(this.ds_master_data.rowposition,"BIZ_NUMBER");		//사업자등록번호
        	this.objRtnArr[9] = this.ds_master_data.getColumn(this.ds_master_data.rowposition,"NA_TEAM_C");			//팀코드
        	this.objRtnArr[10] = this.ds_master_data.getColumn(this.ds_master_data.rowposition,"TEAMNM");			//팀명
        	
        	this.close(this.objRtnArr.toString());
        }

        this.grd_rvopl_oncellclick = function(obj,e)
        {
        	this.btn_ok_onclick();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.grd_rvopl.addEventHandler("oncellclick", this.grd_rvopl_oncellclick, this);
            this.btn_ok.addEventHandler("onclick", this.btn_ok_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);
            this.btn_search.addEventHandler("onclick", this.search, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1302.xfdl", true);

       
    };
}
)();
