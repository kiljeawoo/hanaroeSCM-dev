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
                this.set_name("OMG_DS_SC_2311");
                this.set_titletext("계약서 양식 등록");
                this._setFormPosition(0,0,993,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_in", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\"/><Column id=\"SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"UYN\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_CNTN\" type=\"STRING\" size=\"4000\"/><Column id=\"CTRW_MOD_CNTN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            
            // UI Components Initialize
            obj = new Button("btn_save", "absolute", null, "1", "41", "21", "15", null, this);
            obj.set_taborder("11");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "978", "0", "15", "490", null, null, this);
            obj.set_taborder("57");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "15", "16", "467", "21", null, null, this);
            obj.set_taborder("83");
            obj.set_text("신규 전자계약서 작성");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "15", "0", "803", "20", null, null, this);
            obj.set_taborder("84");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "15", "41", "110", "29", null, null, this);
            obj.set_taborder("85");
            obj.set_text("계약서 종류");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "124", "41", null, "29", "15", null, this);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "15", "69", "110", "29", null, null, this);
            obj.set_taborder("88");
            obj.set_text("계약서 버젼");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "124", "69", null, "29", "15", null, this);
            obj.set_taborder("89");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "496", "69", "110", "29", null, null, this);
            obj.set_taborder("91");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ctrwStyVer", "absolute", "128", "73", "200", "21", null, null, this);
            obj.set_taborder("94");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_background("#ecececff");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_UYn", "absolute", "612", "73", "158", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_UYn_innerdataset = new Dataset("rdo_UYn_innerdataset", this.rdo_UYn);
            rdo_UYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">사용안함</Col></Row></Rows>");
            obj.set_innerdataset(rdo_UYn_innerdataset);
            obj.set_taborder("95");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("N");
            obj.set_direction("vertical");
            obj.set_index("1");

            obj = new Combo("cbo_mnCtrwKdM", "absolute", "128", "45", "200", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("96");
            obj.set_innerdataset("@ds_ctrwKdc");
            obj.set_codecolumn("CTRW_KDC");
            obj.set_datacolumn("SIMP_CNM");

            obj = new Static("Static02", "absolute", "0", "8", "15", "490", null, null, this);
            obj.set_taborder("97");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_ctrw_cntn", "absolute", "15", "139", null, "315", "15", null, this);
            obj.set_taborder("98");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "15", "114", "467", "21", null, null, this);
            obj.set_taborder("99");
            obj.set_text("계약서 내용");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "15", "98", "803", "20", null, null, this);
            obj.set_taborder("100");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_update", "absolute", null, "1", "41", "21", "15", null, this);
            obj.set_taborder("101");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_CtrwModCntn", "absolute", "15", "494", null, "130", "15", null, this);
            obj.set_taborder("102");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "15", "469", "467", "21", null, null, this);
            obj.set_taborder("103");
            obj.set_text("계약서 수정내용");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "846", "453", "50", "41", null, null, this);
            obj.set_taborder("104");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "26", "624", "230", "15", null, null, this);
            obj.set_taborder("105");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ctrwBrk", "absolute", null, "1", "74", "21", "60", null, this);
            obj.set_taborder("106");
            obj.set_text("계약서내역");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 993, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("계약서 양식 등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","txa_ctrw_cntn","value","ds_in","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","txa_CtrwModCntn","value","ds_in","");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_2311.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_2311.xfdl", function() {
        //include "lib::comLib.xjs";

        this.fn_cbo_mnCtrwKdM = "";
        this.fn_edt_ctrwStyVer = "";
        this.fn_mnCtrwKdM_Nm = "";
        this.fn_uyn = "";
        this.fv_paramMode = "";
        this.fn_buyerCd = "";

        this.OMG_DS_SC_2311_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e);
        	this.fv_paramMode = this.getOwnerFrame().paramMode;

        	this.fn_cbo_mnCtrwKdM = this.gfn_isEmpty(this.getOwnerFrame().CBO_MNCTRWKDM);
        	this.fn_edt_ctrwStyVer = this.gfn_isEmpty(this.getOwnerFrame().EDT_CTRWSTYVER);
        	this.fn_mnCtrwKdM_Nm = this.gfn_isEmpty(this.getOwnerFrame().CTRW_KDC_NM);
        	this.fn_uyn = this.gfn_isEmpty(this.getOwnerFrame().UYN);
        	this.fn_buyerCd = this.gfn_isEmpty(this.parent.BUYER_CD);

        	if (this.fv_paramMode == "N") {
        		this.btn_save.set_visible(true);
        		this.btn_update.set_visible(false);
        		this.fn_searchInit();
        	} else if (this.fv_paramMode == "S") {
        		var cnt = this.ds_ctrwKdc.addRow();
        		this.ds_ctrwKdc.setColumn(cnt, "CTRW_KDC", this.fn_cbo_mnCtrwKdM);
        		this.ds_ctrwKdc.setColumn(cnt, "SIMP_CNM", this.fn_mnCtrwKdM_Nm);

        		this.cbo_mnCtrwKdM.set_value(this.fn_cbo_mnCtrwKdM);
        		this.edt_ctrwStyVer.set_value(this.fn_edt_ctrwStyVer);
        		this.rdo_UYn.set_value(this.fn_uyn);

        		this.fn_search();
        		this.disable();
        	} else {
        		var cnt = this.ds_ctrwKdc.addRow();
        		this.ds_ctrwKdc.setColumn(cnt, "CTRW_KDC", this.fn_cbo_mnCtrwKdM);
        		this.ds_ctrwKdc.setColumn(cnt, "SIMP_CNM", this.fn_mnCtrwKdM_Nm);
        		this.cbo_mnCtrwKdM.set_value(this.fn_cbo_mnCtrwKdM);
        		this.edt_ctrwStyVer.set_value(this.fn_edt_ctrwStyVer);

        		this.fn_search();
        		this.disable();
        	}
        }

        /*조회 init */
        this.fn_searchInit = function()
        {
        	var sSvcID = "searchInit";//통신아이디
        	var sURL = "svc::rest/ct/eltctrwamn/retrieveCodelList";// 호출할 서버 페이지 주소
        	var sInDatasets = "";//보내는데이터셋
        	var sOutDatasets = "ds_ctrwKdc=ds_ctrwKdc";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument = "";// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets , sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /*조회*/
        this.fn_search = function()
        {
        	param = "cbo_mnCtrwKdM="+this.fn_cbo_mnCtrwKdM+" edt_ctrwStyVer="+this.fn_edt_ctrwStyVer;

        	var sSvcID = "search";//통신아이디
        	var sURL = "svc::rest/ct/eltctrwamn/retrieveCtrwStyDsclList";// 호출할 서버 페이지 주소
        	var sInDatasets = "";//보내는데이터셋
        	var sOutDatasets = "ds_in=ds_in";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets , sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.btn_save_onclick = function(obj,e)
        {
        	this.fn_ctrw_cntn_division();
        	this.ds_in.setColumn(0, "UYN", "N"); //물류수수료율

        	if (this.cbo_mnCtrwKdM.value == "") {
        		alert("계약서 종류가 잘못 선택되었습니다.");
        		return;
        	}

        	var sSvcID = "insert";
        	var sURL = "svc::/rest/ct/eltctrwamn/insertContractForm";
        	var sInDatasets = "ds_in=ds_in";
        	var sOutDatasets = "";
        	var sArgument = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType = "U"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets , sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "search") {
        			if (this.ds_in.rowcount == 0) {
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			} else {
        				this.ctrw_cntn_add();
        				this.edt_ctrwStyVer.set_value(this.ds_in.getColumn(0, "CTRW_STY_VER"));
        				this.rdo_UYn.set_value(this.ds_in.getColumn(0, "UYN"));
        			}
        		} else if (svcID == "searchInit") {
        			if (this.ds_ctrwKdc.rowcount == 0) {
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			} else {
        				//this.cbo_mnCtrwKdM.set_index(0);
        				this.edt_ctrwStyVer.set_value(this.ds_ctrwKdc.getColumn(0, "CTRW_STY_VER"))

        				var cnt = this.ds_ctrwKdc.insertRow();
         				this.ds_ctrwKdc.setColumn(cnt, "CTRW_KDC", "")
         				this.ds_ctrwKdc.setColumn(cnt, "SIMP_CNM", "전체")
        				this.cbo_mnCtrwKdM.set_index(0);
        			}
        		} else if (svcID == "insert") {
        			if (ErrorCode == 1) {
        				this.gfn_getMessage("alert", "result.message.save.success");

        				var num = 0;
        				this.fn_cbo_mnCtrwKdM = this.cbo_mnCtrwKdM.value;
        				num = nexacro.toNumber(this.edt_ctrwStyVer.value);
        				this.fn_edt_ctrwStyVer = num + 1;

        				this.fn_search();

        				this.fv_paramMode = "U";

        				//this.edt_ctrwStyVer.set_value(fn_edt_ctrwStyVer);
        				this.btn_save.set_visible(false);
        				this.btn_update.set_visible(true);
        				//this.disable();
        			}
        		} else if (svcID == "update") {
        			if (ErrorCode == 1) {
        				this.gfn_getMessage("alert", "result.message.save.success");
        				var num = 0;
        				fn_edt_ctrwStyVer = this.edt_ctrwStyVer.value;
        				this.fn_search();
        				//this.disable();
        			}
        		}
        	}
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
        	if (this.gfn_isNull(calFrom)) {
        		this.gfn_getMessage("alert", "validation.message.fromDate.no.data");
        		return false;
        	}

        	if (this.gfn_isNull(calTo)) {
        		this.gfn_getMessage("alert", "validation.message.toDate.no.data");
        		return false;
        	}
        	return true;
        }

        this.fn_afterFormOnload = function()
        {
        }

        this.ctrw_cntn_add = function()
        {
        	var sColVal = "";
        	var sctrwModCntn = "";

        	for (var j=0; j<this.ds_in.rowcount; j++) {
        		if (j==0) {
        			sctrwModCntn = this.ds_in.getColumn(j, "CTRW_MOD_CNTN");
        			sColVal = this.ds_in.getColumn(j, "CTRW_CNTN");
        		} else {
        			sColVal += "^" +this.ds_in.getColumn(j, "CTRW_CNTN");
        		}
        	}

        	this.txa_ctrw_cntn.set_value(sColVal);
        	this.txa_CtrwModCntn.set_value(sctrwModCntn);
        }

        this.fn_ctrw_cntn_division = function()
        {
        	var fsRgm = "";
        	var fsrgDtm = "";
        	var arrVal = this.txa_ctrw_cntn.value.split("^");
        	var ctrwStyVer = this.edt_ctrwStyVer.value;

        	if (this.fv_paramMode == "N") {
        		ctrwStyVer = nexacro.toNumber( this.edt_ctrwStyVer.value) + 1;
        	} else {
        		fsRgm = this.ds_in.getColumn(0 , "FS_RGM");
        		fsrgDtm = this.ds_in.getColumn(0 , "FSRG_DTM");
        		this.ds_in.clearData();
        	}

        	var uyn = this.rdo_UYn.value;
        	var ctrwModCntn = this.txa_CtrwModCntn.value;

        	for (var v=0; v<arrVal.length; v++) {
        		var nARow = this.ds_in.addRow();
        		this.ds_in.setColumn(nARow, "CTRW_KDC", this.cbo_mnCtrwKdM.value);
        		this.ds_in.setColumn(nARow, "CTRW_STY_VER", ctrwStyVer);
        		this.ds_in.setColumn(nARow, "UYN", uyn);
        		this.ds_in.setColumn(nARow, "SQNO", v+1);

        		if (this.fv_paramMode != "N") {
        			this.ds_in.setColumn(nARow, "FS_RGM", fsRgm);
        			this.ds_in.setColumn(nARow, "FSRG_DTM", fsrgDtm);
        		}

        		this.ds_in.setColumn(nARow, "CTRW_CNTN", arrVal[v]);
        		if (nARow == 0) {
        			this.ds_in.setColumn(nARow, "CTRW_MOD_CNTN", ctrwModCntn);
        		}
        	}
        }

        this.cbo_mnCtrwKdM_onitemchanged = function(obj,e)
        {
        	var num = this.cbo_mnCtrwKdM.index;
        	this.edt_ctrwStyVer.set_value(this.ds_ctrwKdc.getColumn( num, "CTRW_STY_VER"))
        }

        this.disable = function(obj,e)
        {
        	this.cbo_mnCtrwKdM.set_enable(false);
        	this.edt_ctrwStyVer.set_enable(false);
        	//this.txa_ctrw_cntn.set_readonly(true);
        	this.btn_save.set_visible(false);

        	if (this.fv_paramMode == "U") {
        		this.btn_update.set_visible(true);
        	} else if (this.fv_paramMode == "S") {
        		this.txa_CtrwModCntn.set_readonly(true);
        		this.txa_ctrw_cntn.set_readonly(true);
        		this.rdo_UYn.set_enable(false);
        		this.btn_update.set_visible(false);
        		this.btn_ctrwBrk.set_right(15);
        	} else {
        		this.btn_update.set_visible(false);
        	}
        }

        this.btn_update_onclick = function(obj,e)
        {
        	//var uyn = this.rdo_UYn.value;
        	this.fv_paramMode = "U";
        	this.ds_in.setColumn(0, "UYN", this.rdo_UYn.value);
        	this.fn_ctrw_cntn_division();

        	var sSvcID = "update";
        	var sURL = "svc::/rest/ct/eltctrwamn/updateContractForm";
        	var sInDatasets = "ds_in=ds_in";
        	var sOutDatasets = "";
        	var sArgument = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType = "U"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets , sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.btn_ctrwBrk_onclick = function(obj,e)
        {
        	ctrw_kdc = this.cbo_mnCtrwKdM.value; //전제
        	ctrw_sty_ver = this.edt_ctrwStyVer.value;

        	var _url = "/rest/oz/ct/eltctrw/osEltctrwTest";
        	var _sid = "OMG_DS_SC_211301";

        	if (this.fn_buyerCd == "12" || this.fn_buyerCd == "14" || this.fn_buyerCd == "15" || ctrw_kdc == "503") {
        		if (ctrw_kdc == "121" || ctrw_kdc == "307" || ctrw_kdc == "415" || ctrw_kdc == "416") {
        			// 임대차거래계약서
        			_sid = "OMG_DS_SC_311301";
        			_url = "/rest/oz/ct/eltctrw/osEltctrwNewTest";
        		} else if (ctrw_kdc == "122" || ctrw_kdc == "308" || ctrw_kdc == "503") {
        			// 직매입거래계약서(공통)
        			_sid = "OMG_DS_SC_311304";
        			_url = "/rest/oz/ct/eltctrw/osEltctrwNewTest";
        		} else if (ctrw_kdc == "123" || ctrw_kdc == "417") {
        			// 특약매입거래계약서(공통)
        			_sid = "OMG_DS_SC_311305";
        			_url = "/rest/oz/ct/eltctrw/osEltctrwNewTest";
        		} else if (ctrw_kdc == "418") {
        			// 특약서(협력업체 기여도평가)
        			_sid = "OMG_DS_SC_311601";
        			_url = "/rest/oz/ct/eltctrw/osEltctrwNewTest";
        		} else if (ctrw_kdc == "141" || ctrw_kdc == "419") {
        			// 임대차거래계약서(테넌트)
        			_sid = "OMG_DS_SC_311501";
        			_url = "/rest/oz/ct/eltctrw/osEltctrwNewTest";
        		} else if (ctrw_kdc == "143") {
        			// 특약매입거래계약서(테넌트)
        			_sid = "OMG_DS_SC_311503";
        			_url = "/rest/oz/ct/eltctrw/osEltctrwNewTest";
        		} else if (ctrw_kdc == "144") {
        			// 단기 임대차 거래계약서(테넌트)
        			_sid = "OMG_DS_SC_311504";
        			_url = "/rest/oz/ct/eltctrw/osEltctrwNewTest";
        		} else if (ctrw_kdc == "145") {
        			// 단기 특약매입 거래계약서(테넌트)
        			_sid = "OMG_DS_SC_311505";
        			_url = "/rest/oz/ct/eltctrw/osEltctrwNewTest";
        		} else if (ctrw_kdc == "151") {
        			// 직매입거래계약서(수산)
        			_sid = "OMG_DS_SC_311601";
        			_url = "/rest/oz/ct/eltctrw/osEltctrwNewTest";
        		} else if (ctrw_kdc == "152") {
        			// 특약매입거래계약서(수산)
        			_sid = "OMG_DS_SC_311602";
        			_url = "/rest/oz/ct/eltctrw/osEltctrwNewTest";
        		} else if (ctrw_kdc == "192") {
        			// 부속계약서(임대차)
        			_sid = "OMG_DS_SC_311392";
        			_url = "/rest/oz/ct/eltctrw/osEltctrwNewTest";
        		} else if (ctrw_kdc == "194") {
        			// 부속계약서(특약매입)
        			_sid = "OMG_DS_SC_311394";
        			_url = "/rest/oz/ct/eltctrw/osEltctrwNewTest";
        		} else if (ctrw_kdc == "195") {
        			// 부속계약서(임대차_테넌트)
        			_sid = "OMG_DS_SC_311595";
        			_url = "/rest/oz/ct/eltctrw/osEltctrwNewTest";
        		} else if (ctrw_kdc == "196") {
        			// 부속계약서(특약매입_테넌트)
        			_sid = "OMG_DS_SC_311596";
        			_url = "/rest/oz/ct/eltctrw/osEltctrwNewTest";
        		} else if (ctrw_kdc == "197") {
        			// 부속계약서(테넌트_단기 임대차)
        			_sid = "OMG_DS_SC_311597";
        			_url = "/rest/oz/ct/eltctrw/osEltctrwNewTest";
        		} else if (ctrw_kdc == "198") {
        			// 부속계약서(테넌트_단기 특약매입)
        			_sid = "OMG_DS_SC_311598";
        			_url = "/rest/oz/ct/eltctrw/osEltctrwNewTest";
        		}
        	} else if (this.fn_buyerCd == "13") {
        		if (ctrw_kdc == "131") {
        			// 위수탁거래계약서(농산)
        			_sid = "OMG_DS_SC_311302";
        			_url = "/rest/oz/ct/eltctrw/osEltctrwNewTest";
        		} else if (ctrw_kdc == "132" || ctrw_kdc == "206" || ctrw_kdc == "502") {
        			// 직매입거래계약서(농산)
        			_sid = "OMG_DS_SC_311303";
        			_url = "/rest/oz/ct/eltctrw/osEltctrwNewTest";
        		} else if (ctrw_kdc == "193") {
        			// 부속계약서(농산)
        			_sid = "OMG_DS_SC_311393";
        			_url = "/rest/oz/ct/eltctrw/osEltctrwNewTest";
        		}
        	}

        	var ozParam = {
        		sId: _sid, 
        		sUrl: _url, 
        		paramType: 'param', 
        		sParam: {CTRW_KDC:ctrw_kdc, CTRW_STY_VER:ctrw_sty_ver}
        	};
        	this.ozViewer(ozParam, "ozViewerPotal", "HTML5");
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.OMG_DS_SC_2311_onload, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.cbo_mnCtrwKdM.addEventHandler("onitemchanged", this.cbo_mnCtrwKdM_onitemchanged, this);
            this.txa_ctrw_cntn.addEventHandler("oneditclick", this.txa_ctrw_cntn_oneditclick, this);
            this.btn_update.addEventHandler("onclick", this.btn_update_onclick, this);
            this.btn_ctrwBrk.addEventHandler("onclick", this.btn_ctrwBrk_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_2311.xfdl");

       
    };
}
)();
