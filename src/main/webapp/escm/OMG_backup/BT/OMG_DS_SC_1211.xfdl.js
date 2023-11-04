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
                this.set_name("OMG_DS_SC_1211");
                this.set_titletext("상담신청내역확인");
                this._setFormPosition(0,0,500,430);
            }
            this.style.set_background("#ffffffff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_hp", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_newConfirm", "absolute", "233", "254", "41", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "94", "149", "110", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "203", "149", "210", "29", null, null, this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "94", "177", "110", "29", null, null, this);
            obj.set_taborder("8");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "203", "177", "210", "29", null, null, this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_chrrNm", "absolute", "207", "181", "202", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "94", "205", "110", "29", null, null, this);
            obj.set_taborder("10");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "203", "205", "210", "29", null, null, this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "319", "209", "9", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "260", "209", "9", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_bzno", "absolute", "207", "153", "151", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_type("string");
            obj.set_mask("###-##-#####");
            obj.set_trimtype("right");
            obj.set_limitbymask("integer");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_chrwMphno", "absolute", "269", "209", "48", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_inputtype("digit");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_chrwMpsqno", "absolute", "328", "209", "48", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_inputtype("digit");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_chrwMpsvno", "absolute", "207", "209", "51", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_innerdataset("@ds_hp");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_index("-1");

            obj = new Button("btn_search", "absolute", "362", "153", "21", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "514", "0", "460", "390", null, null, this);
            obj.set_taborder("18");
            obj.style.set_background("white");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 500, 430, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_3212");
            		p.set_titletext("상담신청내역확인");
            		p.style.set_background("#ffffffff");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_1211.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_1211.xfdl", function() {
        //include "lib::comLib.xjs"

        this.OMG_DS_SC_1211_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); // 공통
        }

        this.fn_afterFormOnload = function()
        {
        	// 공통코드 가져오기
        	var param = [
        		{ code: "HP", dsName: "ds_hp" } // 휴대전화번호
        	];
        	this.gfn_setPortalCommonCode(param);
        }

        // 공통코드 가져오기 - 콜백
        this.fn_commonAfterOnload = function()
        {
        	this.cbo_chrwMpsvno.set_index(this.ds_hp.findRow("SIMP_C", "010")); // 휴대전화번호 (기본값: 010)
        }

        this.btn_newConfirm_onclick = function(obj,e)
        {
        	if (!this.fn_validationCheck()) {
        		return;
        	}
        	
        	var param = "mae_bzno=" + this.gfn_nullToEmpty(this.mae_bzno.value)
        			+ " edt_chrrNm=" + encodeURIComponent(this.gfn_nullToEmpty(this.edt_chrrNm.value)) // encode
        			+ " chrr_mpno=" + this.gfn_nullToEmpty(this.cbo_chrwMpsvno.value)
        							+ this.gfn_nullToEmpty(this.edt_chrwMphno.value)
        							+ this.gfn_nullToEmpty(this.edt_chrwMpsqno.value);
        	
        	var sSvcID        = "search";
        	var sURL          = "svc::rest/bt/rqBrk/retrieveRqBrk";
        	var sInDatasets   = "";
        	var sOutDatasets  = "";
        	var sArgument     = param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        this.fn_validationCheck = function()
        {
        	if (this.gfn_isNull(this.mae_bzno.value)) {
        		this.alert("사업자등록번호를 입력하세요.");
        		this.mae_bzno.setFocus();
        		return false;
        	} else if (this.gfn_length(this.gfn_replace(this.mae_bzno.value, " ", "")) < 10) {
        		this.alert("사업자등록번호 10자리를 확인 후 다시 입력하세요.");
        		this.mae_bzno.setFocus();
        		return false;
        	}
        	
        	if (this.gfn_isNull(this.edt_chrrNm.value)) {
        		this.alert("신청자를 입력하세요.");
        		this.edt_chrrNm.setFocus();
        		return false;
        	}
        	
        	if  (this.gfn_isNull(this.cbo_chrwMpsvno.value)) {
        		this.alert("휴대폰 번호 앞자리를 선택하세요.");
        		this.cbo_chrwMpsvno.setFocus();
        		return false;
        	} else if (this.gfn_isNull(this.edt_chrwMphno.value)) {
        		this.alert("휴대폰 번호를 입력하세요.");
        		this.edt_chrwMphno.setFocus();
        		return false;
        	} else if (this.gfn_isNull(this.edt_chrwMpsqno.value)) {
        		this.alert("휴대폰 번호를 입력하세요.");
        		this.edt_chrwMpsqno.setFocus();
        		return false;
        	}
        	
        	return true;
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "search") {
        			if (ErrorCode == 0) {
        				alert("상담신청내역이 없습니다.");
        				return;
        			}
        			
        			var objRtnArr = [
        				this.mae_bzno.value,
        				encodeURIComponent(this.edt_chrrNm.value),
        				this.cbo_chrwMpsvno.value + this.edt_chrwMphno.value + this.edt_chrwMpsqno.value
        			];
        			
        			this.close(objRtnArr.toString()); // strVal
        		}
        	}
        }

        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_chrrSearch(); // 신청자 조회
        }

        this.fn_chrrSearch = function()
        {
        	this.div_search.set_url("OMG.PT::OMG_DS_SC_9060.xfdl"); 
        	this.div_search.move(20, 20);
        	this.div_search.bringToFront();
        	this.div_search.set_visible(true);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.OMG_DS_SC_1211_onload, this);
            this.btn_newConfirm.addEventHandler("onclick", this.btn_newConfirm_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_1211.xfdl");

       
    };
}
)();
