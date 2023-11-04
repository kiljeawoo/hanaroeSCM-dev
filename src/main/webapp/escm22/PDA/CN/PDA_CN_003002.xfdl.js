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
                this.set_name("PDA_CN_003002");
                this.set_cssclass("sta_WF_PopupTitle");
                this.set_titletext("단말기번호등록");
                this._setFormPosition(0,0,767,214);
            }
            this.style.set_cursor("auto");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_ins", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_save", "absolute", null, "15", "55", "21", "17", null, this);
            obj.set_taborder("68");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "17", "19", "135", "21", null, null, this);
            obj.set_taborder("88");
            obj.set_text("단말기MAC주소관리");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "673", "0", "91", "15", null, null, this);
            obj.set_taborder("89");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "150", "100", null, "29", "17", null, this);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "17", "100", "134", "29", null, null, this);
            obj.set_taborder("91");
            obj.set_text("비고내용");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_rmk_cntn", "absolute", "154", "104", "544", "21", null, null, this);
            obj.set_taborder("92");
            obj.set_cssclass("edt_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "99", "17", "67", null, null, this);
            obj.set_taborder("93");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "17", "44", "134", "29", null, null, this);
            obj.set_taborder("94");
            obj.set_text("경제통합사업장코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "150", "44", null, "29", "17", null, this);
            obj.set_taborder("95");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_clntnm", "absolute", "325", "48", "171", "21", null, null, this);
            obj.set_taborder("96");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_na_bzplc", "absolute", "154", "48", "166", "21", null, null, this);
            obj.set_taborder("97");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Essential");
            obj.set_enable("true");
            obj.style.setStyleValue("cursor", "disabled", "no");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clntnm", "absolute", "499", "48", "21", "21", null, null, this);
            obj.set_taborder("98");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_macaddrCheck", "absolute", "523", "48", "65", "21", null, null, this);
            obj.set_taborder("99");
            obj.set_text("중복확인");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "17", "72", "134", "29", null, null, this);
            obj.set_taborder("100");
            obj.set_text("경제통합단말기번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "150", "72", null, "29", "17", null, this);
            obj.set_taborder("101");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_na_trmno", "absolute", "154", "76", "166", "21", null, null, this);
            obj.set_taborder("102");
            obj.set_maxlength("4");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "419", "72", "110", "29", null, null, this);
            obj.set_taborder("103");
            obj.set_text("MAC주소");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mac_addr", "absolute", "532", "76", "166", "21", null, null, this);
            obj.set_taborder("104");
            obj.set_cssclass("edt_WF_Essential");
            obj.set_inputfilter("comma,space");
            obj.set_inputtype("number,english");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 767, 214, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popupPda");
            		p.set_cssclass("sta_WF_PopupTitle");
            		p.set_titletext("단말기번호등록");
            		p.style.set_cursor("auto");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("PDA_CN_003002.xfdl", "lib::comLib.xjs");
        this.registerScript("PDA_CN_003002.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        var btn_save_enable = false;
        // var na_bzplc = "";
        // var na_trmno = "";
        // var mac_addr = "";
        // var rmk_cntn = "";
        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        	if(application.gv_userTPC != "admin") {
        		this.edt_na_bzplc.set_readonly(true);
        		this.edt_na_bzplc.set_value(application.gv_glnCode);
        		this.btn_clntnm.set_visible(false);
        		this.edt_clntnm.set_value(application.gv_companyName);
        	}
        }

        this.fn_afterFormOnload = function()
        {
        	//페이지 로딩후 실행부분
        	if(application.gv_userTPC == "admin") {
        		this.edt_na_bzplc.setFocus();
        	} else {
        		this.edt_mac_addr.setFocus();
        	}
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        /*콜백 함수*/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}
        	
        	if(svcID == "check") {
        		if(this.ds_ins.rowcount==0){
        			this.alert("사용 가능합니다.");
        			btn_save_enable = true;
        		}
        		else {
        			this.alert("이미 사용중입니다.");
        		}
        	}
        	else if(svcID == "insert") {
        		this.gfn_getMessage("alert", "result.message.save.success");
        		btn_save_enable = false;
        		this.close("SUCCESS");
        	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /*추가등록 시 사용되는 Validation Check */
        /*추가등록 시 사용되는 Validation Check */
        this.fn_validationCheck = function() {
        	
        	if (this.gfn_isNull(this.edt_na_bzplc.value)) {
        		this.alert("사업장 코드를 입력해주세요");
        		this.edt_na_bzplc.setFocus();
        		return false;
        	}
        	
        	if (this.gfn_isNull(this.edt_mac_addr.value)) {
        		this.alert("MAC주소를 입력해주세요");
        		this.edt_mac_addr.setFocus();
        		return false;
        	}
        	
        	return true;
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.btn_clntnm_onclick = function(obj,e)
        {
        	var oArg = "";
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_compopupAfter";    
        	this.gfn_openPopup("trplSearchPopup","PDA.CN::PDA_CN_003004.xfdl",oArg,sOption,sPopupCallBack);
        }

        /*업체조회 팝업콜백 함수*/
        this.fn_compopupAfter = function(strId,strVal)
        {
        	if(strVal != ''){
        		var paramsArr = strVal.split(",");
        	
        		if(strId == "trplSearchPopup"){
        			this.edt_na_bzplc.set_value(paramsArr[0]);
        			this.edt_clntnm.set_value(paramsArr[1]);
        		}
        	}
        }

        this.btn_macaddrCheck_onclick = function(obj,e)
        {
        	if(!this.fn_validationCheck()){
        		return false;
        	}
        	
        	var sSvcID        = "check";
        	var sURL          = "svc::rest/pda/checkMacAddress";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_ins=ds_ins";
        	var sArgument     = "na_bzplc="+this.gfn_nullToEmpty(this.edt_na_bzplc.value) +
        						" mac_addr="+this.gfn_nullToEmpty(this.edt_mac_addr.value);
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회  
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.btn_save_onclick = function(obj,e)
        {
        	if(btn_save_enable){
        		if(this.fn_validationCheck()){
        		 	var sSvcID        = "insert";
        			var sURL          = "svc::rest/pda/insertMacAddress";
        			var sInDatasets   = "";			
        			var sOutDatasets  = "";
        			var sArgument     = "na_bzplc="+ this.gfn_nullToEmpty(this.edt_na_bzplc.value) +
        								" mac_addr=" + this.gfn_nullToEmpty(this.edt_mac_addr.value) +
        								" rmk_cntn=" + this.gfn_nullToEmpty(this.edt_rmk_cntn.value);
        			var sCallbackFunc = "fn_callBack";
        			var sTranType     = "U"; // U:저장/삭제, S:조회
        			
        			this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        		}
        	} else {
        		this.alert("중복확인을 해주세요.");
        	}
        }

        this.edt_na_bzplc_ontextchange = function(obj,e)
        {
        	btn_save_enable = false;
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.edt_na_bzplc.addEventHandler("ontextchange", this.edt_na_bzplc_ontextchange, this);
            this.btn_clntnm.addEventHandler("onclick", this.btn_clntnm_onclick, this);
            this.btn_macaddrCheck.addEventHandler("onclick", this.btn_macaddrCheck_onclick, this);
            this.Static06.addEventHandler("onclick", this.Static05_onclick, this);

        };

        this.loadIncludeScript("PDA_CN_003002.xfdl", true);

       
    };
}
)();
