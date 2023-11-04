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
                this.set_name("OMG_DS_SC_6912_P01");
                this.set_titletext("임시거래처코드 상세");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,800,360);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_result", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"NA_MBCO_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"REPMNM\" type=\"STRING\" size=\"256\"/><Column id=\"ATEL\" type=\"STRING\" size=\"256\"/><Column id=\"HTEL\" type=\"STRING\" size=\"256\"/><Column id=\"STEL\" type=\"STRING\" size=\"256\"/><Column id=\"FZIP\" type=\"STRING\" size=\"256\"/><Column id=\"RZIP\" type=\"STRING\" size=\"256\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"256\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"OGLN_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"USR_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ELT_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_related", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"NA_MBCO_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"REPMNM\" type=\"STRING\" size=\"256\"/><Column id=\"ATEL\" type=\"STRING\" size=\"256\"/><Column id=\"HTEL\" type=\"STRING\" size=\"256\"/><Column id=\"STEL\" type=\"STRING\" size=\"256\"/><Column id=\"FZIP\" type=\"STRING\" size=\"256\"/><Column id=\"RZIP\" type=\"STRING\" size=\"256\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"256\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CBO_TEXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_related_dp", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"NA_MBCO_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"REPMNM\" type=\"STRING\" size=\"256\"/><Column id=\"ATEL\" type=\"STRING\" size=\"256\"/><Column id=\"HTEL\" type=\"STRING\" size=\"256\"/><Column id=\"STEL\" type=\"STRING\" size=\"256\"/><Column id=\"FZIP\" type=\"STRING\" size=\"256\"/><Column id=\"RZIP\" type=\"STRING\" size=\"256\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"256\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CBO_TEXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("15");
            obj.set_text("임시거래처코드 관리");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Button("brn_cls", "absolute", null, "0", "37", "32", "0", null, this);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "15", "129", null, "29", "15", null, this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "15", "91", null, "29", "15", null, this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "15", "167", null, "29", "15", null, this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static91", "absolute", "15", "79", null, "2", "15", null, this);
            obj.set_taborder("20");
            obj.style.set_background("#40b3ccff");
            this.addChild(obj.name, obj);

            obj = new Static("Static103", "absolute", "15", "251", null, "58", "15", null, this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static98", "absolute", "15", "223", null, "29", "15", null, this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static95", "absolute", "15", "195", null, "29", "15", null, this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static92", "absolute", "385", "167", "140", "29", null, null, this);
            obj.set_taborder("24");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "15", "167", "140", "29", null, null, this);
            obj.set_taborder("25");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static97", "absolute", "15", "195", "140", "29", null, null, this);
            obj.set_taborder("26");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static100", "absolute", "15", "223", "140", "29", null, null, this);
            obj.set_taborder("27");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static102", "absolute", "15", "251", "140", "58", null, null, this);
            obj.set_taborder("28");
            obj.set_text("회사주소");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "25", "49", "90", "30", null, null, this);
            obj.set_taborder("29");
            obj.set_text("거래처코드 :");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_font("bold 9 맑은 고딕, Gulim");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_REPMNM", "absolute", "159", "199", "150", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_FZIP", "absolute", "159", "227", "30", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("3");
            obj.style.set_border("1 solid #bfbfbfff,0 none transparent,1 solid #bfbfbfff,1 solid #bfbfbfff");
            obj.style.set_padding("2 0 2 0");
            obj.style.set_align("right middle");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_DONGBW", "absolute", "159", "282", "500", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_DONGUP", "absolute", "159", "257", "500", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("300");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static114", "absolute", "385", "195", "140", "29", null, null, this);
            obj.set_taborder("30");
            obj.set_text("대표전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_TEL2", "absolute", "579", "199", "40", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_inputtype("number");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_TEL3", "absolute", "634", "199", "40", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_inputtype("number");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "566", "199", "11", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_text("-");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "621", "199", "11", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("-");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_CLNTNM", "absolute", "159", "171", "212", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("200");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_BZNO", "absolute", "529", "171", "100", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_type("string");
            obj.set_mask("@@@-@@-@@@@@");
            obj.style.set_align("center");
            obj.getSetter("maxlength").set("3");
            obj.set_enable("false");
            obj.set_tooltiptext("민감한 정보이므로 본 화면에서 수정할 수 없습니다");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_TEL1", "absolute", "529", "199", "35", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_inputtype("number");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_zip", "absolute", "222", "227", "21", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("sta_natrplc", "absolute", "99", "49", "160", "30", null, null, this);
            obj.set_taborder("38");
            obj.set_text("0000000000000");
            obj.set_wordwrap("char");
            obj.style.set_padding("0 0 2 0");
            obj.style.set_font("bold 13 맑은 고딕, Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_date", "absolute", null, "49", "230", "30", "25", null, this);
            obj.set_taborder("39");
            obj.set_text("등록 : 2021-01-01 | 수정 : 2021-12-10");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("right middle");
            obj.style.set_font("9 맑은 고딕, Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "15", "91", "140", "29", null, null, this);
            obj.set_taborder("40");
            obj.set_text("회원가입(아이디)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "385", "91", "140", "29", null, null, this);
            obj.set_taborder("41");
            obj.set_text("전자계약");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_user", "absolute", "164", "91", "150", "29", null, null, this);
            obj.set_taborder("42");
            obj.set_text("0 개");
            this.addChild(obj.name, obj);

            obj = new Static("sta_elt", "absolute", "534", "91", "150", "29", null, null, this);
            obj.set_taborder("43");
            obj.set_text("0 건");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "15", "129", "140", "29", null, null, this);
            obj.set_taborder("44");
            obj.set_text("작업 선택");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_gln", "absolute", "385", "133", "342", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_value("8801045000015");
            obj.set_text("[8801045000015] 오뚜기 테스트");
            obj.set_innerdataset("@ds_related");
            obj.set_codecolumn("NA_TRPL_C");
            obj.set_datacolumn("CBO_TEXT");
            obj.set_enable("false");
            obj.set_tooltiptext("동일 사업자번호를 가진 거래처코드 목록입니다");
            obj.set_index("0");

            obj = new Button("btn_ok", "absolute", null, null, "100", "21", "15", "15", this);
            obj.set_taborder("11");
            obj.set_text("정보 수정");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_natrplc_to", "absolute", "238", "49", "170", "30", null, null, this);
            obj.set_taborder("47");
            obj.set_text("→ <fc v='#0000ffff'>0000000000000</fc>");
            obj.set_usedecorate("true");
            obj.set_wordwrap("char");
            obj.style.set_padding("0 0 2 0");
            obj.style.set_font("bold 13 맑은 고딕, Gulim");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_type", "absolute", "164", "133", "220", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_type_innerdataset = new Dataset("rdo_type_innerdataset", this.rdo_type);
            rdo_type_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">MOD</Col><Col id=\"datacolumn\">정보 수정</Col></Row><Row><Col id=\"codecolumn\">CHG</Col><Col id=\"datacolumn\">정식GLN 이관</Col></Row></Rows>");
            obj.set_innerdataset(rdo_type_innerdataset);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            obj.set_value("MOD");

            obj = new Button("btn_cancel", "absolute", null, null, "60", "21", "121", "15", this);
            obj.set_taborder("12");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_RZIP", "absolute", "189", "227", "30", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("3");
            obj.style.set_border("1 solid #bfbfbfff,1 solid #bfbfbfff,1 solid #bfbfbfff,0 none transparent");
            obj.style.set_padding("2 0 2 0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 800, 360, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("임시거래처코드 상세");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","sta_natrplc","text","ds_result","NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("bindedt1","edt_CLNTNM","value","ds_result","CLNTNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("bindedt2","edt_BZNO","value","ds_result","BIZ_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("bindedt3","edt_REPMNM","value","ds_result","REPMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("bindedt4","edt_TEL2","value","ds_result","HTEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("bindedt5","edt_TEL3","value","ds_result","STEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("bindedt6","edt_TEL1","value","ds_result","ATEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("bindedt7","edt_RZIP","value","ds_result","RZIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("bindedt8","edt_FZIP","value","ds_result","FZIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("bindedt9","edt_DONGBW","value","ds_result","DONGBW");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("bindedt10","edt_DONGUP","value","ds_result","DONGUP");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_6912_P01.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6912_P01.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        this.availableChg = false;
        this.USER_CNT;
        this.ELT_CNT;

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e) //공통
        {
           this.gfn_setInitForm(obj, e);
        }

        this.fn_afterFormOnload = function() //페이지 로딩후 실행부분
        {
        	this.ds_result.addRow();
        	this.ds_result.copyRow(0, this.parent.dsInfo, 0);
        	this.ds_result.applyChange();
        	
        	this.USER_CNT = this.ds_result.getColumn(0, "USR_CNT");
        	this.ELT_CNT = this.ds_result.getColumn(0, "ELT_CNT");
        	this.sta_user.set_text(this.USER_CNT == "0" ? "없음" : this.USER_CNT + " 개");
        	this.sta_elt.set_text(this.ELT_CNT == "0" ? "없음" : this.ELT_CNT + " 건");
        	this.sta_date.set_text("등록 : " + this.ds_result.getColumn(0, "FSRG_DTM") + " | 수정 : " + this.ds_result.getColumn(0, "LSCHG_DTM"));
        	
        	this.fn_search();
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        /*저장 버튼 이벤트*/
        this.btn_ok_onclick = function(obj,e)
        {
        	if (this.rdo_type.value == "MOD") {
        		this.fn_updateTempGln();
        	} else {
        		this.fn_chg2Official();
        	}
        }

        /*창닫기 버튼 이벤트*/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.div_info_btn_zip_onclick = function(obj,e)
        {
        	var sOption = "autosize=true, title=true";
        	var sPopupCallBack = "fn_addr";
        	//this.gfn_openPopup("zipCode", "OMG.PT::OMG_DS_SC_9010.xfdl", {}, sOption, sPopupCallBack);
        	this.gfn_openPopup("zipCode", "common::AddressDaum.xfdl", {}, sOption, sPopupCallBack); // 테스트용 다음 주소API
        }

        this.cbo_gln_onitemchanged = function(obj,e)
        {
        	this.ds_related_dp.clearData();
        	if (this.gfn_nullToEmpty(e.postvalue) != "") {
        		this.sta_natrplc_to.set_visible(true);
        		this.sta_natrplc_to.set_text("→ <fc v='#0000ffff'>"+e.postvalue+"</fc>");
        		this.btn_ok.set_enable(true);
        		
        		this.ds_related_dp.addRow();
        		this.ds_related_dp.copyRow(0, this.ds_related, e.postindex);
        	} else {
        		this.sta_natrplc_to.set_visible(false);
        		this.btn_ok.set_enable(false);
        	}
        }

        this.rdo_type_onitemchanged = function(obj,e)
        {
        	this.btn_ok.set_text(e.posttext);
        	this.btn_ok.set_enable(false);
        	this.sta_natrplc_to.set_visible(false);
        	this.fn_changeType(e.postvalue == "MOD");
        }

        this.rdo_type_canitemchange = function(obj,e)
        {
        	if (e.postvalue == "CHG") {
        		if (!this.availableChg) {
        			this.alert("변경 가능한 거래처코드가 없습니다.");
        			return false;
        		} else if (this.USER_CNT == "0" && this.ELT_CNT == "0") {
        			this.alert("이관할 회원정보 또는 전자계약이 없습니다.");
        			return false;
        		}
        	}
        }

        this.ds_result_oncolumnchanged = function(obj,e)
        {
        	if (this.rdo_type.value == "MOD" && obj.getRowType(e.row) == Dataset.ROWTYPE_UPDATE) {
        		this.btn_ok.set_enable(true);
        	}
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/

        this.fn_updateTempGln = function()
        {
        	if (this.fn_validationCheck()) {
        		var sSvcID = "updateTempGln";
        		var sURL = "svc::rest/mg/usrinf/updateTempGln";
        		var sInDatasets = "ds_gln=ds_result";
        		var sOutDatasets = "";
        		var sArgument = "";
        		var sCallbackFunc = "fn_callBack";
        		var sTranType = "U";
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        this.fn_chg2Official = function()
        {
        	var msg = "아래의 임시거래처코드 데이터를 정식거래처코드로 이관하시겠습니까?";
        	msg += "\n\n" + this.ds_result.getColumn(0, "NA_TRPL_C") + " → " + this.ds_related_dp.getColumn(0, "NA_TRPL_C");
        	if (this.USER_CNT != "0") {
        		msg += "\n- 회원ID : " + this.USER_CNT + " 개";
        	}
        	if (this.ELT_CNT != "0") {
        		msg += "\n- 전자계약 : " + this.ELT_CNT + " 건";
        	}
        	
        	if (this.confirm(msg)) {
        		var sSvcID = "changeTempGlnToOfficial";
        		var sURL = "svc::rest/mg/usrinf/changeTempGlnToOfficial";
        		var sInDatasets = "ds_to=ds_related_dp";
        		var sOutDatasets = "";
        		var sArgument = "from=" + this.ds_result.getColumn(0, "NA_TRPL_C") + " eltAll=N";
        		var sCallbackFunc = "fn_callBack";
        		var sTranType = "U";
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        this.fn_validationCheck = function()
        {
        	// 정보수정일 때 검사
        	if (this.rdo_type.value == "MOD") {
        		if (!this.fn_checkComp(this.edt_BZNO, "사업자번호를")) { return false;
        		} else if (!this.fn_checkComp(this.edt_CLNTNM, "회사명을")) { return false;
        		} else if (!this.fn_checkComp(this.edt_REPMNM, "대표자명을")) { return false;
        		} else if (!this.fn_checkComp(this.edt_FZIP, "주소를")) { return false;
        		} else if (!this.fn_checkComp(this.edt_RZIP, "주소를")) { return false;
        		} else if (!this.fn_checkComp(this.edt_DONGUP, "주소를")) { return false;
        		} else if (!this.fn_checkComp(this.edt_DONGBW, "상세주소를")) { return false;
        		} else if (!this.fn_checkComp(this.edt_TEL1, "전화번호를")) { return false;
        		} else if (!this.fn_checkComp(this.edt_TEL2, "전화번호를")) { return false;
        		} else if (!this.fn_checkComp(this.edt_TEL3, "전화번호를")) { return false;
        		}
        		
        		var orgBzno = this.ds_result.getOrgColumn(0, "BIZ_NUMBER");
        		var newBzno = this.ds_result.getColumn(0, "BIZ_NUMBER");
        	}
        	
            return this.confirm("임시거래처 정보를 변경하시겠습니까?");
        }

        this.fn_checkComp = function(obj,msg)
        {
        	if (this.gfn_isNull(obj.value)) {
        		this.alert(msg + ' 입력바랍니다.');
        		obj.setFocus();
        		return false;
        	}
        	return true;
        }

        this.fn_search = function()
        {
        	var sSvcID = "retrieveTempRelatedGlnList";
        	var sURL = "svc::rest/mg/usrinf/retrieveTempRelatedGlnList";
        	var sInDatasets = "";
        	var sOutDatasets = "ds_related=ds_related";
        	var sArgument = "bzno=" + this.ds_result.getColumn(0, "BIZ_NUMBER");
        	var sCallbackFunc = "fn_callBack";
        	var sTranType = "S";
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        //callback메소드
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID =="retrieveTempRelatedGlnList") {
        			if (this.ds_related.rowcount > 0) {
        				this.ds_related.insertRow(0);
        				this.ds_related.setColumn(0, "NA_TRPL_C", "");
        				this.ds_related.setColumn(0, "CBO_TEXT", "=========선택=========");
        				this.cbo_gln.set_index(0);
        				this.availableChg = true;
        			} else {
        				this.ds_related.addRow();
        				this.ds_related.setColumn(0, "CBO_TEXT", "변경 가능한 거래처코드 없음");
        				this.cbo_gln.set_index(0);
        				this.cbo_gln.set_enable(false);
        				this.availableChg = false;
        			}
        		} else if (svcID == "updateTempGln") {
        			this.alert("거래처 정보가 수정되었습니다.");
        			this.close("Y");
        		} else if (svcID == "changeTempGlnToOfficial") {
        			this.alert("임시거래처 정보가 이관되었습니다.");
        			this.close("Y");
        		}
        	}
        }

        this.fn_addr = function(strId,strVal)
        {
        	if (this.gfn_isNull(strVal)) {
        		return;
        	}
        	
        	var temp = strVal.split(",");

        	for (var i=0; i<temp.length; i++) {
        		var addrStr = temp[i].split("#");

        		if (addrStr[0] == "FZIP") {
        			this.ds_result.setColumn(0, "FZIP", addrStr[1]); // 우편번호 앞자리
        		} else if (addrStr[0] == "RZIP") {
        			this.ds_result.setColumn(0, "RZIP", addrStr[1]); // 우편번호 뒷자리
        		} else if (addrStr[0] == "DONGUP") {
        			this.ds_result.setColumn(0, "DONGUP", addrStr[1]); // 기본주소
        		} else if (addrStr[0] == "DONGBW") {
        			this.ds_result.setColumn(0, "DONGBW", addrStr[1]); // 상세주소
        		}
        	}
        }

        this.fn_changeType = function(isMod)
        {
        	/* 컴포넌트 상태 변경 */
        	var compList = [
        		this.edt_BZNO,
        		this.edt_CLNTNM,
        		this.edt_REPMNM,
        		this.edt_FZIP,
        		this.edt_RZIP,
        		this.edt_TEL1,
        		this.edt_TEL2,
        		this.edt_TEL3,
        		this.edt_DONGUP,
        		this.edt_DONGBW
        	];
        	
        	for (var i=0; i<compList.length; i++) {
        		if (compList[i].id != "edt_FZIP" && compList[i].id != "edt_RZIP" && compList[i].id != "edt_DONGUP" && compList[i].id != "edt_BZNO") {
        			compList[i].set_readonly(!isMod);
        		}
        		compList[i].style.set_color(isMod ? "#333333ff" : "#3333ffff");
        	}
        	this.btn_zip.set_enable(isMod);
        	this.cbo_gln.set_enable(!isMod);
        	this.cbo_gln.set_index(0);
        	this.ds_related_dp.clearData();
        	
        	/* Bind 세팅 변경 */
        	var makeList = new Array();
        	for (var j=0; j<this.binds.length; j++) {
        		if (this.binds[j].name.indexOf("bindedt") != -1) {
        			makeList.push({name:this.binds[j].name, compid:this.binds[j].compid, propid:this.binds[j].propid, columnid:this.binds[j].columnid});
        		}
        	}
        	
        	for (var k=0; k<makeList.length; k++) {
        		var name;
        		var ds;
        		if (isMod) {
        			name = "bindedt_i";
        			ds = "ds_result";
        		} else {
        			name = "bindedt_r";
        			ds = "ds_related_dp";
        		}
        		
        		// 기존 Bind 제거
        		var rtnobj = this.removeChild(makeList[k].name);
        		rtnobj.destroy();
        		
        		// 신규 Bind 생성
        		var objBindItem = new BindItem();
        		objBindItem.init(name+k, makeList[k].compid, makeList[k].propid, ds, makeList[k].columnid);
        		this.addChild(name+k, objBindItem);
        		objBindItem.bind();
        	}
        }

        this.fn_inputEvent = function(obj,e)
        {
        	obj.updateToDataset();
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_result.addEventHandler("oncolumnchanged", this.ds_result_oncolumnchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.Static06.addEventHandler("onclick", this.Static06_onclick, this);
            this.brn_cls.addEventHandler("onclick", this.btn_close_onclick, this);
            this.edt_REPMNM.addEventHandler("onkeyup", this.fn_inputEvent, this);
            this.edt_REPMNM.addEventHandler("onkillfocus", this.fn_inputEvent, this);
            this.edt_DONGBW.addEventHandler("onkeyup", this.fn_inputEvent, this);
            this.edt_DONGBW.addEventHandler("onkillfocus", this.fn_inputEvent, this);
            this.edt_TEL2.addEventHandler("onkeyup", this.fn_inputEvent, this);
            this.edt_TEL2.addEventHandler("onkillfocus", this.fn_inputEvent, this);
            this.edt_TEL3.addEventHandler("onkeyup", this.fn_inputEvent, this);
            this.edt_TEL3.addEventHandler("onkillfocus", this.fn_inputEvent, this);
            this.edt_CLNTNM.addEventHandler("onkeyup", this.fn_inputEvent, this);
            this.edt_CLNTNM.addEventHandler("onkillfocus", this.fn_inputEvent, this);
            this.edt_BZNO.addEventHandler("onkeyup", this.fn_inputEvent, this);
            this.edt_BZNO.addEventHandler("onkillfocus", this.fn_inputEvent, this);
            this.edt_TEL1.addEventHandler("onkeyup", this.fn_inputEvent, this);
            this.edt_TEL1.addEventHandler("onkillfocus", this.fn_inputEvent, this);
            this.btn_zip.addEventHandler("onclick", this.div_info_btn_zip_onclick, this);
            this.cbo_gln.addEventHandler("onitemchanged", this.cbo_gln_onitemchanged, this);
            this.btn_ok.addEventHandler("onclick", this.btn_ok_onclick, this);
            this.rdo_type.addEventHandler("onitemchanged", this.rdo_type_onitemchanged, this);
            this.rdo_type.addEventHandler("canitemchange", this.rdo_type_canitemchange, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6912_P01.xfdl");

       
    };
}
)();
