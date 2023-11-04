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
                this.set_name("OMG_DS_SC_2310");
                this.set_titletext("계약서 양식 조회");
                this._setFormPosition(0,0,993,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rsclist", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_KDC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\"/><Column id=\"SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"UYN\" type=\"STRING\" size=\"256\"/><Column id=\"UYN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ctrwKdc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CTRW_KDC\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CTRW_STY_VER\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_buyerCode", this);
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"32\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"32\"/><Column id=\"SIMP_C_EXPL\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mnCtrwKdMC", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TYPE\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CD_M\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CD_D\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mnCtrwKdMC_Temp", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CD_TYPE\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CD_M\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CD_D\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "67", "15", null, this);
            obj.set_taborder("73");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "16", "10", "118", "21", null, null, this.div_search);
            obj.set_taborder("46");
            obj.set_text("계약서 구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "0", "0", "414", "10", null, null, this.div_search);
            obj.set_taborder("65");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "133", "56", "103", "10", null, null, this.div_search);
            obj.set_taborder("73");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "16", "36", "118", "21", null, null, this.div_search);
            obj.set_taborder("76");
            obj.set_text("계약서 버젼");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_ctrwStyVer", "absolute", "141", "36", "211", "21", null, null, this.div_search);
            obj.set_taborder("77");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "434", "10", "118", "21", null, null, this.div_search);
            obj.set_taborder("79");
            obj.set_text("계약서 종류");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_mnCtrwKdM", "absolute", "559", "10", "211", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("80");
            obj.set_innerdataset("@ds_mnCtrwKdMC_Temp");
            obj.set_codecolumn("CD_D");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_enableevent("true");
            obj.set_enable("false");
            obj.set_index("-1");
            obj = new Combo("cbo_mnCtrwKdM2", "absolute", "141", "10", "211", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("81");
            obj.set_innerdataset("@ds_buyerCode");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_index("-1");

            obj = new Button("btn_new", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("11");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "922", "21", "56", "8", null, null, this);
            obj.set_taborder("56");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "978", "0", "15", "490", null, null, this);
            obj.set_taborder("57");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "95", null, null, "15", "0", this);
            obj.set_taborder("69");
            this.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "-93", "228", "21", null, null, this.div_list);
            obj.set_taborder("2");
            obj.set_text("상담 신청 조회");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_rsclist", "absolute", "0", "40", null, null, "0", "0", this.div_list);
            obj.set_taborder("1");
            obj.set_binddataset("ds_rsclist");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"250\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"90\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"계약서종류\"/><Cell col=\"2\" text=\"계약서 버젼\"/><Cell col=\"3\" text=\"사용여부\"/><Cell col=\"4\" text=\"계약서 등록일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:CTRW_KDC_NM\" combodataset=\"ds_contstyle\" combocodecol=\"code\" combodatacol=\"style\"/><Cell col=\"2\" style=\"align:center;\" text=\"bind:CTRW_STY_VER\"/><Cell col=\"3\" text=\"bind:UYN_NM\"/><Cell col=\"4\" text=\"bind:FSRG_DTM\" mask=\"@@@@-@@-@@\" calendardisplay=\"display\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btu_div", "absolute", "46.83%", "0", "63", "12", null, null, this.div_list);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static47", "absolute", "0", "13", "238", "21", null, null, this.div_list);
            obj.set_taborder("14");
            obj.set_text("전자계약조회");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_list.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("79");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "142", "61", "103", "5", null, null, this);
            obj.set_taborder("82");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_update", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("83");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 67, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("73");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 978, 393, this.div_list,
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
            		p.set_titletext("계약서 양식 조회");

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
        this.addIncludeScript("OMG_DS_SC_2310.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("OMG_DS_SC_2310.xfdl", "lib::comElt.xjs");
        this.registerScript("OMG_DS_SC_2310.xfdl", function() {
        //include "lib::comLib.xjs";
        //include "lib::comElt.xjs";

        /* Form Load */
        this.OMG_DS_SC_2310_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);
        	
        	this.div_list.grd_rsclist.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));	

            /*
             * 마스터 사용자 등록권한 설정. 
             * 사용 가능한 유저만 버튼 오픈
             */
            /*
            var isCtrwMasterUser = false;
           
            // 마스터 사용자 아이디 배열 추가
            var arrCtrwMasterUser = [
        		"K2000040", // 상품본부 박소연 과장 (200114)
        		"13400067", // 신지혜: 농산본부 담당자
        		"89104697", // 김승철: 본부장
        		"19380018", // 김병수: 대표이사 (200129)
        		"89109647", // 강인호: 옴니마케팅본부장 (200129)
        		"91102470", // 현종철: 마트지원본부장 (200129)
        		"89103251", // 이석희: 상품본부장 (200129)
        		"91110414", // 김문기: 농축산물류본부장 (200129)
        		"END"
        	];

            if (arrCtrwMasterUser.indexOf(application.gv_userId) < 0) {
                isCtrwMasterUser = false;
            } else {
                isCtrwMasterUser = true;
            } // if

            // 사용 가능한 유저만 버튼 오픈
            if (isCtrwMasterUser == true) {
        		this.btn_update.set_visible(true); //수정버튼 보여짐
        		this.btn_new.set_visible(true);    // 신규버튼 보여짐
            }
            */
            /* 마스터 사용자 등록권한 설정. 끝. */

        	this.codeLoad();	//계약담당자 구분하는 함수
        	this.getDS()			//데이터셋 가져오기
        //	this.searchInit();
        	this.gfn_checkEltAuth(obj, "eltCallback"); // 전자계약 권한체크(comElt.xjs)
        }

        /*
         * 전자계약 권한체크
         */
        this.eltCallback = function()
        {
        	if (this.gfn_hasEltAuth("ELT_A3")) {
        		this.btn_update.set_visible(true); //수정버튼 보여짐
        		this.btn_new.set_visible(true); // 신규버튼 보여짐
        	}
        }

        this.div_list_Grid01_oncellclick = function(obj,e)
        {
        	if (e.cell==0) {
        		this.gfn_singleChk(obj,e);	
        	} else {
        	}
        	
        }

        /* 계약담당자 구분하기  */
        this.codeLoad = function()
        {
        	var sSvcID        = "codeLoad";
        	var sURL          = "svc::rest/ct/eltctrw/retrieveEltctrwCDList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_buyerCode=ds_buyerCode" ;
        	var sArgument     = "SIMP_TPC=ELT_DEPT_DSC";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        // 모든 계약서들의 데이터셋을 불러올 함수
        this.getDS = function()
        {
        	var sSvcID        = "getDS";
        	var sURL          = "svc::rest/ct/eltctrw/retrieveEltctrwDSList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_mnCtrwKdMC=ds_mnCtrwKdMC" ;
        	var sArgument     = "CD_TYPE=all";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        // 계약담당자 코드별 해당 데이터셋 뽑아오기
        this.fn_codeDSC = function(param1)
        {	
        	var ctype;
        	var cdm;
        	var cdd;
        	var simpcnm;
        	//param1 : 11 (CD_M) 

        	for (var i = 0; i < this.ds_mnCtrwKdMC.rowcount; i++) { 
        		cdm = this.ds_mnCtrwKdMC.getColumn(i, "CD_M");  /*Dataset 값을 가져옴. */
        		cdd = this.ds_mnCtrwKdMC.getColumn(i, "CD_D");
        		ctype = this.ds_mnCtrwKdMC.getColumn(i, "CD_TYPE");		
        	
        		if (cdm == param1) {
        			simpcnm = this.ds_mnCtrwKdMC.getColumn(i, "SIMP_CNM");
        			
        			this.ds_mnCtrwKdMC_Temp.addRow();
        			this.ds_mnCtrwKdMC_Temp.setColumn(this.ds_mnCtrwKdMC_Temp.rowposition, "CD_TYPE", ctype); /*Dataset 에 값을 셋팅함 */
        			this.ds_mnCtrwKdMC_Temp.setColumn(this.ds_mnCtrwKdMC_Temp.rowposition, "CD_M", cdm);
        			this.ds_mnCtrwKdMC_Temp.setColumn(this.ds_mnCtrwKdMC_Temp.rowposition, "CD_D", cdd);
        			this.ds_mnCtrwKdMC_Temp.setColumn(this.ds_mnCtrwKdMC_Temp.rowposition, "SIMP_CNM", simpcnm);
        		}
        	} 
        }

        /*페이지 로드 시 조회 init */
        this.searchInit = function()
        {
        	var sSvcID        = "searchInit";//통신아이디
        	var sURL          = "svc::rest/ct/eltctrwamn/retrieveCodelList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_ctrwKdc=ds_ctrwKdc";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = "";// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /*전자계약 조회*/
        this.btn_search_onclick = function(obj,e)
        {
        	this.ds_rsclist.clearData();
        	this.search();		
        }

        /*조회*/
        this.search = function()
        {
        	if (this.fn_validationCheck()) {
        		var cbo_mnCtrwKdM = this.gfn_nullToEmpty(this.div_search.cbo_mnCtrwKdM.value);  //계약서 종류
        	//	alert('값 : ' + cbo_mnCtrwKdM);
        	//	alert('길이 : ' + cbo_mnCtrwKdM.length);
        		if (cbo_mnCtrwKdM.length == 1) {
        			cbo_mnCtrwKdM = '10' + cbo_mnCtrwKdM;
        		} else if (cbo_mnCtrwKdM.length == 2) {
        			cbo_mnCtrwKdM = '1'+ cbo_mnCtrwKdM;
        		}
        		var edt_ctrwStyVer = this.gfn_nullToEmpty(this.div_search.edt_ctrwStyVer.value);  //계약서 버젼
        		var buyerDsc = this.gfn_nullToEmpty(this.div_search.cbo_mnCtrwKdM2.value);  //계약담당자 구분
        		
        		param = "cbo_mnCtrwKdM="+cbo_mnCtrwKdM+	" edt_ctrwStyVer="+edt_ctrwStyVer +	" buyerDsc="+buyerDsc ;
        			
        		var sSvcID        = "search";//통신아이디
        		var sURL          = "svc::rest/ct/eltctrwamn/retrieveCtrwStylList";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_rsclist=ds_rsclist";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
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
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "search") {
        			if (this.ds_rsclist.rowcount == 0) {
        			
        // 				trace( "데이터 없음 " +this.ds_rsclist.saveXML());
        // 				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        		} else if (svcID == "searchInit") {
        			if (this.ds_ctrwKdc.rowcount == 0) {
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			} else {
        				var cnt = this.ds_ctrwKdc.insertRow();
        				this.ds_ctrwKdc.setColumn(cnt , "CTRW_KDC" ,"" )
        				this.ds_ctrwKdc.setColumn(cnt , "SIMP_CNM" , "전체")
        				this.div_search.cbo_mnCtrwKdM2.set_index(0);
        				//trace(this.ds_ctrwKdc.saveXML());				
        			}
        		}
        		if (svcID == "codeLoad") {
        			this.ds_buyerCode.insertRow(0);
                    this.ds_buyerCode.setColumn(0,"SIMP_C","");
                    this.ds_buyerCode.setColumn(0,"SIMP_CNM","=========선택=========");
                    this.div_search.cbo_mnCtrwKdM2.set_index(0);
        		}
        	}
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        }

        this.fn_afterFormOnload = function()
        {
        }

        this.btn_new_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"N"   };
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";       
        	this.gfn_openPopup("popId","OMG.CT::OMG_DS_SC_2311.xfdl",oArg,sOption,sPopupCallBack);
        }

        
        this.div_rsclist_oncellclick = function(obj,e)
        {
        	if (e.cell==0) {
        		this.gfn_singleChk(obj,e);	
        	} else {
        		var buyerCd = this.div_search.cbo_mnCtrwKdM2.value;
        		var cbo_mnCtrwKdM = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "CTRW_KDC");
        		var mnCtrwKdM_Nm = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "CTRW_KDC_NM" );
        		var edt_ctrwStyVer = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "CTRW_STY_VER");
        		var uyn = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "UYN");

        		var oArg = {paramMode:"S", dsArg:this.ds_rsclist, CBO_MNCTRWKDM:cbo_mnCtrwKdM  , EDT_CTRWSTYVER:edt_ctrwStyVer ,CTRW_KDC_NM:mnCtrwKdM_Nm,UYN:uyn, BUYER_CD:buyerCd };
        		var sOption = "autosize=true,title=true";
        		var sPopupCallBack = "fn_popupAfter";       
        		this.gfn_openPopup("popId","OMG.CT::OMG_DS_SC_2311.xfdl",oArg,sOption,sPopupCallBack);
        	}
        }

        this.fn_popupAfter = function()
        {
        	this.search();
        }

        this.div_list_btu_div_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        
        this.btn_update_onclick = function(obj,e)
        {
        	var cbo_mnCtrwKdM ;

        	if (this.ds_rsclist.rowcount > 0) {
        		for (var i = 0; i < this.ds_rsclist.rowcount; i++) {
        			if (this.ds_rsclist.getColumn(i, "ISCHECKED") == 1 && this.ds_rsclist.getColumn(i, "UYN") == "N") {
        				cbo_mnCtrwKdM = this.ds_rsclist.getColumn(i, "CTRW_KDC");
        				var mnCtrwKdM_Nm = this.ds_rsclist.getColumn(i, "CTRW_KDC_NM" );
        				var edt_ctrwStyVer = this.ds_rsclist.getColumn(i, "CTRW_STY_VER");
        				var uyn = this.ds_rsclist.getColumn(i, "UYN");

        				var oArg = {paramMode:"U", dsArg:this.ds_rsclist, CBO_MNCTRWKDM:cbo_mnCtrwKdM  , EDT_CTRWSTYVER:edt_ctrwStyVer ,CTRW_KDC_NM:mnCtrwKdM_Nm,UYN:uyn };
        				var sOption = "autosize=true,title=true";
        				var sPopupCallBack = "fn_popupAfter";       
        				this.gfn_openPopup("popId","OMG.CT::OMG_DS_SC_2311.xfdl",oArg,sOption,sPopupCallBack);	
        			} else if (this.ds_rsclist.getColumn(i, "ISCHECKED") == 1  &&  this.ds_rsclist.getColumn(i, "UYN") == "Y" ) {
        				cbo_mnCtrwKdM = this.ds_rsclist.getColumn(i, "CTRW_KDC");
        				alert("사용 여부가 사용 일때는 계약서 양식을 수정 할 수 없습니다. ");
        			}
        		}
        // 		if(this.gfn_isNull(cbo_mnCtrwKdM)){
        // 			//alert("cslt_rq_no==>"+cslt_rq_no);
        // 			alert("수정할 계약서 종류를 체크 하세요");
        // 		}
        	} else {
        		alert("계약서 양식을 조회 하세요");
        		return false;
        	}
        }

        
        this.OMG_DS_SC_2310_onkeydown = function(obj,e)
        {
        	if (e.keycode==13) {
        		this.btn_search.click();
        	}
        }

        //계약담당자 구분 
        this.div_search_cbo_mnCtrwKdM2_onitemchanged = function(obj,e)
        {
        	this.ds_mnCtrwKdMC_Temp.clearData();
        	this.ds_mnCtrwKdMC_Temp.insertRow(0);
        	this.ds_mnCtrwKdMC_Temp.setColumn(0,"CD_D","");
        	this.ds_mnCtrwKdMC_Temp.setColumn(0,"SIMP_CNM","=========선택=========");
        	this.div_search.cbo_mnCtrwKdM.set_index(0);
        	
        	var buyerCD=this.div_search.cbo_mnCtrwKdM2.value;	//cd_m 값
        	
        	if (buyerCD > 0) {
        //		ctrDSC='MN_CTRW_KDC';	//메인계약서
        		this.div_search.cbo_mnCtrwKdM.set_enable(true);
        		this.fn_codeDSC(buyerCD);
        	} else {
         		this.div_search.cbo_mnCtrwKdM.set_enable(false);
         	}

        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
        	var buyer = this.div_search.cbo_mnCtrwKdM2.value;
        	if (this.gfn_isNull(buyer)) {
        		alert("계약서 구분을 지정해 주시기 바랍니다.");
        		return false;
        	}
        	return true;
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.OMG_DS_SC_2310_onload, this);
            this.addEventHandler("onkeydown", this.OMG_DS_SC_2310_onkeydown, this);
            this.div_search.Static12.addEventHandler("onclick", this.div_search_Static12_onclick, this);
            this.div_search.cbo_mnCtrwKdM2.addEventHandler("onitemchanged", this.div_search_cbo_mnCtrwKdM2_onitemchanged, this);
            this.btn_new.addEventHandler("onclick", this.btn_new_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_list.grd_rsclist.addEventHandler("oncellclick", this.div_rsclist_oncellclick, this);
            this.div_list.btu_div.addEventHandler("onclick", this.div_list_btu_div_onclick, this);
            this.btn_update.addEventHandler("onclick", this.btn_update_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_2310.xfdl");
        this.loadPreloadList();
       
    };
}
)();
