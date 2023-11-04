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
                this.set_name("OMG_DS_SC_2320");
                this.set_titletext("전자계약 필수 서류 관리 화면");
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
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"DCM_C\" type=\"STRING\" size=\"256\"/><Column id=\"DCM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ESS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"STS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_essYn", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo><Rows><Row><Col id=\"SIMP_C\">Y</Col><Col id=\"SIMP_CNM\">필수</Col></Row><Row><Col id=\"SIMP_C\">N</Col><Col id=\"SIMP_CNM\">선택</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_uYn", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo><Rows><Row><Col id=\"SIMP_C\">Y</Col><Col id=\"SIMP_CNM\">사용</Col></Row><Row><Col id=\"SIMP_C\">N</Col><Col id=\"SIMP_CNM\">사용안함</Col></Row></Rows>");
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

            obj = new Dataset("ds_buyerCode", this);
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"32\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"32\"/><Column id=\"SIMP_C_EXPL\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "41", "15", null, this);
            obj.set_taborder("80");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "16", "10", "118", "21", null, null, this.div_search);
            obj.set_taborder("74");
            obj.set_text("계약서 구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "0", "0", "414", "10", null, null, this.div_search);
            obj.set_taborder("76");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "133", "30", "103", "10", null, null, this.div_search);
            obj.set_taborder("77");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "505", "8", "118", "21", null, null, this.div_search);
            obj.set_taborder("79");
            obj.set_text("메인계약서종류");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_mnCtrwKdM", "absolute", "622", "7", "211", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("80");
            obj.set_innerdataset("@ds_mnCtrwKdMC_Temp");
            obj.set_codecolumn("CD_D");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_enable("false");
            obj = new Combo("cbo_mnCtrwKdM2", "absolute", "133", "9", "211", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("81");
            obj.set_innerdataset("@ds_buyerCode");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new Static("Static01", "absolute", "622", "29", "103", "10", null, null, this.div_search);
            obj.set_taborder("82");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("11");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            obj.set_enable("false");
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

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("79");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "68", null, null, "15", "0", this);
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
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"63\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"132\"/><Column size=\"90\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"메인계약서종류\" combodisplay=\"edit\"/><Cell col=\"3\" text=\"구분\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\" text=\"서류명\"/><Cell col=\"5\" displaytype=\"normal\" text=\"상태\"/><Cell col=\"6\" text=\"비고\"/><Cell col=\"7\" text=\"수정자\"/><Cell col=\"8\" text=\"수정일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" displaytype=\"normal\" text=\"expr:currow+1\" combodataset=\"ds_contstyle\" combocodecol=\"code\" combodatacol=\"style\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"none\" text=\"bind:MN_CTRW_KDC\" combodataset=\"ds_mnCtrwKdMC_Temp\" combocodecol=\"CD_D\" combodatacol=\"SIMP_CNM\" combodisplay=\"edit\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;\" text=\"bind:ESS_YN\" combodataset=\"ds_essYn\" combocodecol=\"SIMP_C\" combodatacol=\"SIMP_CNM\" combodisplayrowcount=\"-1\" combodisplay=\"display\" calendardisplay=\"edit\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\" text=\"bind:DCM_NM\" editdisplay=\"display\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;\" text=\"bind:STS\" combodataset=\"ds_uYn\" combocodecol=\"SIMP_C\" combodatacol=\"SIMP_CNM\" combodisplayrowcount=\"0\" combodisplay=\"display\" calendardisplay=\"edit\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:RMK\" editdisplay=\"display\"/><Cell col=\"7\" text=\"bind:USR_NM\"/><Cell col=\"8\" text=\"bind:LSCHG_DTM\" mask=\"####-##-##\" maskchar=\" \"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btu_div", "absolute", "46.83%", "1", "63", "12", null, null, this.div_list);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static47", "absolute", "0", "13", "238", "21", null, null, this.div_list);
            obj.set_taborder("14");
            obj.set_text("전자계약조회");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_add", "absolute", null, "14", "53", "21", "56", null, this.div_list);
            obj.set_taborder("15");
            obj.set_text("행추가");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_del", "absolute", null, "14", "53", "21", "0", null, this.div_list);
            obj.set_taborder("16");
            obj.set_text("행삭제");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 41, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("80");
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
            		p.set_titletext("전자계약 필수 서류 관리 화면");

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
        this.addIncludeScript("OMG_DS_SC_2320.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("OMG_DS_SC_2320.xfdl", "lib::comElt.xjs");
        this.registerScript("OMG_DS_SC_2320.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comElt.xjs", null, exports); }	//include "lib::comElt.xjs";

        /* Form Load */
        this.OMG_DS_SC_2320_onload = function(obj,e)
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
            if (isCtrwMasterUser) {
        		this.btn_save.set_visible(true);
        		this.div_list.btn_add.set_visible(true);
        		this.div_list.btn_del.set_visible(true);
            }
            */
            /* 마스터 사용자 등록권한 설정. 끝. */

        	this.codeLoad();	//계약담당자 구분하는 함수
        	this.getDS();			//데이터셋 가져오기
        	this.gfn_checkEltAuth(obj, "eltCallback"); // 전자계약 권한체크(comElt.xjs)
        }

        /*
         * 전자계약 권한체크
         */
        this.eltCallback = function()
        {
        	if (this.gfn_hasEltAuth("ELT_A4")) {
        		this.btn_save.set_visible(true);
        		this.div_list.btn_add.set_visible(true);
        		this.div_list.btn_del.set_visible(true);
        	}
        }

        //gfn_setCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
            
        }

        this.div_list_Grid01_oncellclick = function(obj,e)
        {
        	if (e.cell==0) {
        		this.gfn_singleChk(obj,e);
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
        	var sArgument     = "";
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

        	for (var i = 0; i < this.ds_mnCtrwKdMC.rowcount; i++) {
        		cdm = this.ds_mnCtrwKdMC.getColumn(i, "CD_M");  /*Dataset 값을 가져옴. */
        		cdd = this.ds_mnCtrwKdMC.getColumn(i, "CD_D");
        		ctype = this.ds_mnCtrwKdMC.getColumn(i, "CD_TYPE");
        		
        		// 자리수 맞추기 1##
        		if (cdd.length == 1) {
        			cdd = '10' + cdd;
        		} else if (cdd.length == 2) {
        			cdd = '1' + cdd;
        		}

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

        /*전자계약 조회*/
        this.btn_search_onclick = function(obj,e)
        {
        	this.search();
        }

        /*조회*/
        this.search = function()
        {
        	var buyerDsc = this.gfn_nullToEmpty(this.div_search.cbo_mnCtrwKdM2.value);  //계약담당자 구분
        	if (this.gfn_isNull(buyerDsc)) {
        		alert("계약서 구분을 지정해 주시기 바랍니다.");
        		return false;
        	}

        	var cbo_mnCtrwKdM = this.gfn_nullToEmpty(this.div_search.cbo_mnCtrwKdM.value);  //계약서 종류
        	if (this.gfn_isNull(cbo_mnCtrwKdM)) {
        		alert("메인계약서 종류를 지정해 주시기 바랍니다.");
        		return false;
        	}
        	
        	var param = "cbo_mnCtrwKdM="+cbo_mnCtrwKdM + " buyerDsc="+buyerDsc;

        	var sSvcID        = "search";//통신아이디
        	var sURL          = "svc::/rest/ct/eltctrwamn/retrieveEssDcmAmnList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_rsclist=ds_rsclist";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "search") {
        			// 조회 후 등록버튼 활성
        			this.btn_save.set_enable(true);
        // 			if (this.ds_rsclist.rowcount > 0) {
        // 			}
        		} else if (svcID == "update") {
        			this.search();
        			this.gfn_getMessage("alert", "result.message.save.success");
        		} else if (svcID == "codeLoad") {
        			this.ds_buyerCode.insertRow(0);
        			this.ds_buyerCode.setColumn(0,"SIMP_C","");
        			this.ds_buyerCode.setColumn(0,"SIMP_CNM","=========선택=========");
        			this.div_search.cbo_mnCtrwKdM2.set_index(0);
        		}
        	}
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
        	if (this.ds_rsclist.rowcount == 0) {
        		this.alert('입력할 데이터가 없습니다.');
        		return false;
        	}

        	var strChk = this.gfn_checkImportant(this.div_list.grd_rsclist, "MN_CTRW_KDC,DCM_NM,ESS_YN,STS");
        	if (strChk == false) {
        		return false;
        	}
        	return true;
        }

        this.fn_afterFormOnload = function()
        {

        }

        this.btn_save_onclick = function(obj,e)
        {
        	if (this.fn_validationCheck()) {
        		for (var i = 0 ; i < this.ds_rsclist.getDeletedRowCount(); i++) {
        			var nRow = this.ds_rsclist.addRow();

        			this.ds_rsclist.setColumn(nRow,"MN_CTRW_KDC", this.ds_rsclist.getDeletedColumn(i,"MN_CTRW_KDC"));
        			this.ds_rsclist.setColumn(nRow,"SQNO", this.ds_rsclist.getDeletedColumn(i,"SQNO"));
        			this.ds_rsclist.setColumn(nRow,"BUYER_ENO", this.ds_rsclist.getDeletedColumn(i,"BUYER_ENO"));
        			this.ds_rsclist.setColumn(nRow,"ISCHECKED", "Y");
        			this.ds_rsclist.set_updatecontrol(false);
        			this.ds_rsclist.setRowType(nRow, Dataset.ROWTYPE_UPDATE);
        			this.ds_rsclist.set_updatecontrol(true);
        		}

        		var sSvcID        = "update";
        		var sURL          = "svc::rest/ct/eltctrwamn/saveEssDcmAmnList";
        		var sInDatasets   = "ds_rsclist=ds_rsclist:A";
        		var sOutDatasets  = "";
        		var sArgument     = "";
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회

        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        this.btn_addRow_onclick = function(obj,e)
        {
        	if (this.div_search.cbo_mnCtrwKdM.value != "") {
        		this.ds_rsclist.addRow();
        		var nRow = this.ds_rsclist.rowcount -1;

        		this.ds_rsclist.setColumn(nRow, "MN_CTRW_KDC" , this.div_search.cbo_mnCtrwKdM.value);
        	} else {
        		alert("메인계약서를 선택하세요.");
        	}
        }

        this.btn_delRow_onclick = function(obj,e)
        {
        	for (var i=this.ds_rsclist.rowcount; i>-1; i--) {
        		var nCheck = this.ds_rsclist.getColumn(i, "ISCHECKED");

        		if (nCheck == 1) {
        			this.ds_rsclist.deleteRow(i);
        		}
        	}
        }

        this.div_list_btu_div_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.OMG_DS_SC_2320_onkeydown = function(obj,e)
        {
        	if (e.keycode==13) {
        		this.btn_search.click();
        	}
        }

        this.div_search_cbo_mnCtrwKdM2_onitemchanged = function(obj,e)
        {
        	this.ds_mnCtrwKdMC_Temp.clearData();
        	this.ds_mnCtrwKdMC_Temp.insertRow(0);
        	this.ds_mnCtrwKdMC_Temp.setColumn(0,"CD_D","");
        	this.ds_mnCtrwKdMC_Temp.setColumn(0,"SIMP_CNM","=========선택=========");
        	this.div_search.cbo_mnCtrwKdM.set_index(0);

        	var buyerCD=this.div_search.cbo_mnCtrwKdM2.value;	//cd_m 값

        	if (buyerCD > 0) {
        		this.div_search.cbo_mnCtrwKdM.set_enable(true);
        		this.fn_codeDSC(buyerCD);
        	} else {
         		this.div_search.cbo_mnCtrwKdM.set_enable(false);
         	}
         	this.btn_save.set_enable(false);
        }

        this.div_search_cbo_mnCtrwKdM_onitemchanged = function(obj,e)
        {
        	this.btn_save.set_enable(false);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.OMG_DS_SC_2320_onload, this);
            this.addEventHandler("onkeydown", this.OMG_DS_SC_2320_onkeydown, this);
            this.div_search.Static12.addEventHandler("onclick", this.div_search_Static12_onclick, this);
            this.div_search.cbo_mnCtrwKdM.addEventHandler("onitemchanged", this.div_search_cbo_mnCtrwKdM_onitemchanged, this);
            this.div_search.cbo_mnCtrwKdM2.addEventHandler("onitemchanged", this.div_search_cbo_mnCtrwKdM2_onitemchanged, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_list.btu_div.addEventHandler("onclick", this.div_list_btu_div_onclick, this);
            this.div_list.btn_add.addEventHandler("onclick", this.btn_addRow_onclick, this);
            this.div_list.btn_del.addEventHandler("onclick", this.btn_delRow_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_2320.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
