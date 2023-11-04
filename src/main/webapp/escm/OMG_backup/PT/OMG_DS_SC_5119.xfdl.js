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
                this.set_name("OMG_DS_SC_1641");
                this.set_titletext("지사 사업자번호 확인");
                this.set_scrollbars("autoboth");
                this._setFormPosition(0,0,617,370);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_branch_bzno", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZNO\" type=\"STRING\" size=\"10\"/><Column id=\"REPMNM\" type=\"STRING\" size=\"50\"/><Column id=\"ZIP\" type=\"STRING\" size=\"6\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"300\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"100\"/><Column id=\"BZCCNM\" type=\"STRING\" size=\"60\"/><Column id=\"BZTPNM\" type=\"STRING\" size=\"50\"/></ColumnInfo><Rows><Row><Col id=\"NA_TRPL_C\"/><Col id=\"CLNTNM\"/><Col id=\"BZNO\"/><Col id=\"REPMNM\"/><Col id=\"ZIP\"/><Col id=\"DONGUP\"/><Col id=\"DONGBW\"/><Col id=\"BZCCNM\"/><Col id=\"BZTPNM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "2.76%", "15", null, "21", "8.27%", null, this);
            obj.set_taborder("118");
            obj.set_text("서비스이용료 세금계산서 발행용 정보등록");
            obj.style.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "15", "41", "21", "17", null, this);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "17", "44", "110", "29", null, null, this);
            obj.set_taborder("101");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_CLNTNM", "absolute", "126", "44", null, "29", "281", null, this);
            obj.set_taborder("102");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", null, "44", "110", "29", "173", null, this);
            obj.set_taborder("103");
            obj.set_text("거래처코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_NA_TRPL_C", "absolute", null, "44", "157", "29", "17", null, this);
            obj.set_taborder("104");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "17", "72", "110", "29", null, null, this);
            obj.set_taborder("105");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "126", "72", null, "29", "17", null, this);
            obj.set_taborder("106");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_B_BZN01", "absolute", "131", "76", "35", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_maxlength("3");
            obj.set_lengthunit("ascii");
            obj.set_inputtype("digit");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_B_BZN02", "absolute", "175", "76", "30", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_maxlength("2");
            obj.set_lengthunit("ascii");
            obj.set_inputtype("digit");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_B_BZN03", "absolute", "214", "76", "65", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_maxlength("5");
            obj.set_lengthunit("ascii");
            obj.set_inputtype("digit");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "168", "76", "9", "21", null, null, this);
            obj.set_taborder("108");
            obj.set_text("-");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "207", "76", "9", "21", null, null, this);
            obj.set_taborder("109");
            obj.set_text("-");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "17", "100", "110", "29", null, null, this);
            obj.set_taborder("110");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "126", "100", null, "29", "17", null, this);
            obj.set_taborder("111");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_REPMNM", "absolute", "131", "104", "180", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_maxlength("50");
            obj.set_lengthunit("ascii");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "17", "128", "110", "29", null, null, this);
            obj.set_taborder("112");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "126", "128", null, "29", "17", null, this);
            obj.set_taborder("113");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ZIP", "absolute", "131", "132", "70", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_maxlength("6");
            obj.set_lengthunit("ascii");
            obj.set_inputtype("digit");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "17", "156", "110", "58", null, null, this);
            obj.set_taborder("114");
            obj.set_text("회사주소");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "126", "156", null, "58", "17", null, this);
            obj.set_taborder("115");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_DONGUP", "absolute", "131", "161", null, "21", "22", null, this);
            obj.set_taborder("6");
            obj.set_maxlength("300");
            obj.set_lengthunit("ascii");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_DONGBW", "absolute", "131", "187", null, "21", "22", null, this);
            obj.set_taborder("7");
            obj.set_maxlength("100");
            obj.set_lengthunit("ascii");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "17", "213", "110", "29", null, null, this);
            obj.set_taborder("119");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "126", "213", null, "29", "17", null, this);
            obj.set_taborder("120");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_BZTPNM", "absolute", "131", "217", null, "21", "22", null, this);
            obj.set_taborder("8");
            obj.set_maxlength("50");
            obj.set_lengthunit("ascii");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "17", "241", "110", "29", null, null, this);
            obj.set_taborder("121");
            obj.set_text("종목");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "126", "241", null, "29", "17", null, this);
            obj.set_taborder("122");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_BZCCNM", "absolute", "131", "245", null, "21", "22", null, this);
            obj.set_taborder("9");
            obj.set_maxlength("60");
            obj.set_lengthunit("ascii");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "5.67%", "290", null, "21", "5.35%", null, this);
            obj.set_taborder("107");
            obj.set_text("로그인하신 농협사업자코드(GLN)에 대한 정확한 사업자번호를 입력해 주시기 바랍니다.");
            obj.style.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "5.67%", "314", null, "21", "85.74%", null, this);
            obj.set_taborder("116");
            obj.set_text("* 주의 : ");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "13.13%", "314", null, "38", "5.02%", null, this);
            obj.set_taborder("116");
            obj.set_text("잘못입력하신 경우에는 잘못입력하신 사업자번호로 하나로eSCM 이용료가 청구되오니 \r\n주의하여 정확히 입력해 주시기 바랍니다.");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "34.85%", "132", null, "21", "47.33%", null, this);
            obj.set_taborder("117");
            obj.set_text("('-' 제외)");
            obj.style.set_color("gray");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 617, 370, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("지사 사업자번호 확인");
            		p.set_scrollbars("autoboth");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","sta_CLNTNM","text","ds_branch_bzno","CLNTNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","sta_NA_TRPL_C","text","ds_branch_bzno","NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edt_REPMNM","value","ds_branch_bzno","REPMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_ZIP","value","ds_branch_bzno","ZIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edt_DONGUP","value","ds_branch_bzno","DONGUP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edt_DONGBW","value","ds_branch_bzno","DONGBW");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edt_BZCCNM","value","ds_branch_bzno","BZCCNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edt_BZTPNM","value","ds_branch_bzno","BZTPNM");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_5119.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_5119.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.fn_retrieveBranchBzno();
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_retrieveBranchBzno = function()
        {
        	var sSvcID        = "retrieveBranchBzno";
        	var sURL          = "svc::rest/pt/usrinf/retrieveBranchBzno";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_branch_bzno=ds_branch_bzno";
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        this.fn_saveBranchBzno = function()
        {
        	if (!this.fn_saveBranchBzno_validate()) {
        		return;
        	}
        	if (!confirm("저장하시겠습니까?")) {
        		return;
        	}
        	
        	var BZNO = this.edt_B_BZN01.value + this.edt_B_BZN02.value + this.edt_B_BZN03.value;
        	
        	this.ds_branch_bzno.setColumn(0, "BZNO", BZNO); // set Dataset
        	
        	var sSvcID        = "saveBranchBzno";
        	var sURL          = "svc::rest/pt/usrinf/saveBranchBzno";
        	var sInDatasets   = "ds_branch_bzno=ds_branch_bzno";
        	var sOutDatasets  = "";
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}
        	
        	if (svcID == "retrieveBranchBzno") {
        		if (this.ds_branch_bzno.rowcount == 0) {
        			alert("지사 사업자번호 정보를 찾을 수 없습니다.");
        			return;
        		}
        		
        		var BZNO = this.ds_branch_bzno.getColumn(0, "BZNO");
        		if (BZNO && BZNO.length == 10) {
        			this.edt_B_BZN01.set_value(BZNO.substring(0, 3)); // 3자리
        			this.edt_B_BZN02.set_value(BZNO.substring(3, 5)); // 2자리
        			this.edt_B_BZN03.set_value(BZNO.substring(5, 10)); // 5자리
        		}
        	} else if (svcID == "saveBranchBzno") {
        		alert("저장되었습니다.");
        		this.close("SUCCESS"); // strVal
        	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.btn_save_onclick = function(obj,e)
        {
        	this.fn_saveBranchBzno();
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_saveBranchBzno_validate = function()
        {
        	var BZNO = this.edt_B_BZN01.value + this.edt_B_BZN02.value + this.edt_B_BZN03.value;
        	var REPMNM = this.edt_REPMNM.value;
        	var ZIP = this.edt_ZIP.value;
        	var DONGUP = this.edt_DONGUP.value;
        	var DONGBW = this.edt_DONGBW.value;
        	var BZTPNM = this.edt_BZTPNM.value;
        	var BZCCNM = this.edt_BZCCNM.value;
        	
        	// BZNO
        	if (!this.fn_BZNOCheck(BZNO)) {
        		alert("사업자번호가 잘못되었습니다."); 
        		this.edt_B_BZN03.setFocus();
        		return false;
        	}
        	// REPMNM
        	if (this.gfn_isNull(REPMNM)) {
        		alert("대표자명을 입력하세요.");
        		this.edt_REPMNM.setFocus();
        		return false;
        	}
        	if (!this.gfn_isMaxLengh(REPMNM, 50)) {
        		alert("대표자명 값이 너무 큽니다.");
        		this.edt_REPMNM.setFocus();
        		return false;
        	}
        	// ZIP
        	if (this.gfn_isNull(ZIP)) {
        		alert("우편번호를 입력하세요.");
        		this.edt_ZIP.setFocus();
        		return false;
        	}
        	// DONGUP, DONGBW
        	if (this.gfn_isNull(DONGUP)) {
        		alert("회사주소를 입력하세요.");
        		this.edt_DONGUP.setFocus();
        		return false;
        	}
        	if (!this.gfn_isMaxLengh(DONGUP, 300)) {
        		alert("회사주소 값이 너무 큽니다.");
        		this.edt_DONGUP.setFocus();
        		return false;
        	}
        	if (!this.gfn_isMaxLengh(DONGBW, 100)) {
        		alert("회사주소 값이 너무 큽니다.");
        		this.edt_DONGBW.setFocus();
        		return false;
        	}
        	// BZTPNM
        	if (!this.gfn_isMaxLengh(BZTPNM, 50)) {
        		alert("업태 값이 너무 큽니다.");
        		this.edt_BZTPNM.setFocus();
        		return false;
        	}
        	// BZCCNM
        	if (!this.gfn_isMaxLengh(BZCCNM, 60)) {
        		alert("종목 값이 너무 큽니다.");
        		this.edt_BZCCNM.setFocus();
        		return false;
        	}
        	
        	return true;
        }

        this.fn_BZNOCheck = function(strNumb)
        {
         	if (!strNumb || strNumb.length != 10 || strNumb =='0000000000') {
         		return false; 
         	}
        	var sumMod = 0 ;
        	sumMod += nexacro.toNumber(strNumb.substring(0,1));
        	sumMod += nexacro.toNumber(strNumb.substring(1,2)) * 3 % 10;
        	sumMod += nexacro.toNumber(strNumb.substring(2,3)) * 7 % 10;
        	sumMod += nexacro.toNumber(strNumb.substring(3,4)) * 1 % 10;
        	sumMod += nexacro.toNumber(strNumb.substring(4,5)) * 3 % 10;
        	sumMod += nexacro.toNumber(strNumb.substring(5,6)) * 7 % 10;
        	sumMod += nexacro.toNumber(strNumb.substring(6,7)) * 1 % 10;
        	sumMod += nexacro.toNumber(strNumb.substring(7,8)) * 3 % 10;
        	sumMod += Math.floor(parseInt(strNumb.substring(8,9)) * 5 / 10);
        	sumMod += nexacro.toNumber(strNumb.substring(8,9)) * 5 % 10;
        	sumMod += nexacro.toNumber(strNumb.substring(9,10));
        	
        	if (sumMod % 10 != 0) {
        		return false;
        	}
        	return true;
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_5119.xfdl");

       
    };
}
)();
