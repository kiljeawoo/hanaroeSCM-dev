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
                this.set_name("OMG_DS_SC_8340_P01");
                this.set_titletext("혁신점포 거래업체 등록");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,577,152);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_ctl_trpl", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"string\" size=\"1\"/><Column id=\"BSN_DSC\" type=\"string\" size=\"250\"/><Column id=\"UZ_DSC\" type=\"string\" size=\"250\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"250\"/><Column id=\"RMK_CNTN\" type=\"string\" size=\"250\"/><Column id=\"FSRG_DTM\" type=\"string\" size=\"250\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"250\"/></ColumnInfo><Rows><Row><Col id=\"BSN_DSC\">ESCM</Col><Col id=\"UZ_DSC\">001</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_close", "absolute", null, "47", "41", "21", "13", null, this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("text_title", "absolute", "17", "51", "153", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_text("혁신점포 공급업체 등록");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "17", "79", "110", "29", null, null, this);
            obj.set_taborder("2");
            obj.set_text("공급업체");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "126", "79", null, "29", "17", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "126", "107", null, "29", "17", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("9");
            obj.set_text("혁신점포 공급업체 모니터링");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Button("brn_cls", "absolute", null, "0", "37", "32", "0", null, this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "47", "43", "21", "55", null, this);
            obj.set_taborder("11");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "17", "107", "110", "29", null, null, this);
            obj.set_taborder("12");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "17", "164", "110", "29", null, null, this);
            obj.set_taborder("20");
            obj.set_text("업무구분");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "126", "164", null, "29", "17", null, this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "282", "164", "91", "29", null, null, this);
            obj.set_taborder("22");
            obj.set_text("용도구분");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_rmk", "absolute", "131", "111", "414", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_maxlength("200");
            obj.set_lengthunit("ascii");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_bsnDsc", "absolute", "131", "168", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_bsnDsc_innerdataset = new Dataset("cbo_bsnDsc_innerdataset", this.cbo_bsnDsc);
            cbo_bsnDsc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">ESCM</Col><Col id=\"datacolumn\">ESCM</Col></Row><Row><Col id=\"codecolumn\">CONSULT</Col><Col id=\"datacolumn\">컨설팅</Col></Row><Row><Col id=\"codecolumn\">MDS</Col><Col id=\"datacolumn\">장비쇼핑몰</Col></Row><Row><Col id=\"codecolumn\">IF</Col><Col id=\"datacolumn\">인터페이스</Col></Row></Rows>");
            obj.set_innerdataset(cbo_bsnDsc_innerdataset);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("ESCM");
            obj.set_text("ESCM");
            obj.set_enable("false");
            obj.set_visible("false");

            obj = new Combo("cbo_uzDsc", "absolute", "377", "168", "168", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_uzDsc_innerdataset = new Dataset("cbo_uzDsc_innerdataset", this.cbo_uzDsc);
            cbo_uzDsc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">001</Col><Col id=\"datacolumn\">혁신점포 공급업체 모니터링</Col></Row></Rows>");
            obj.set_innerdataset(cbo_uzDsc_innerdataset);
            obj.set_taborder("29");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("001");
            obj.set_text("혁신점포 공급업체 모니터링");
            obj.set_enable("false");
            obj.set_visible("false");

            obj = new Edit("edt_bzplc", "absolute", "131", "83", "300", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_cssclass("WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", "430", "83", "21", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_gln", "absolute", "490", "83", "52", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_maxlength("12");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 577, 152, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("혁신점포 거래업체 등록");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edt_rmk","value","ds_ctl_trpl","RMK_CNTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cbo_bsnDsc","value","ds_ctl_trpl","BSN_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","cbo_uzDsc","value","ds_ctl_trpl","UZ_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edt_gln","value","ds_ctl_trpl","NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_8340_P01.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_8340_P01.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e) //공통
        {
           this.gfn_setInitForm(obj, e);
        }

        this.fn_afterFormOnload = function() //페이지 로딩후 실행부분
        {
        	var fv_paramMode = this.getOwnerFrame().paramMode;
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        /*저장 버튼 이벤트*/
        this.btn_save_onclick = function(obj,e)
        {
        	this.insert();
        }

        /*창닫기 버튼 이벤트*/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/

        /* 등록 및 수정시 사용되는 Validation Check */
        this.fn_validationCheck = function(){
        	// 입력값 체크
        	if (this.gfn_isNull(this.cbo_bsnDsc.value)) {
        		this.alert('업무구분을 선택해주세요.');
        		this.cbo_bsnDsc.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.cbo_uzDsc.value)) {
        		this.alert('용도구분을 선택해주세요.');
        		this.cbo_uzDsc.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.edt_gln.value)) {
        		this.alert('공급업체를 선택해주세요.');
        		this.edt_bzplc.setFocus();
        		return false;
        	}
        	
            return true;
        }

        /*등록*/
        this.insert = function()
        {
        	if (this.fn_validationCheck()) {
        		var sSvcID        = "insert";
        		var sURL          = "svc::rest/pt/survey/insertCtlTrpl";
        		var sInDatasets   = "ds_ctl_trpl=ds_ctl_trpl";
        		var sOutDatasets  = "";
        		var sArgument     = "";
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회

        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        //callback메소드
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		if (ErrorCode == -2) {
        			this.alert("본부 사용자만 이용할 수 있습니다.");
        		} else {
        			this.gfn_getMessage("alert", "error.message.server.exception");
        		}
        		return;
        	} else {
        		if (svcID =="insert") {
        			this.gfn_getMessage("alert", "result.message.save.success");
        			this.close();
        		}
        	}
        }

        this.fn_openSearchPopup = function(auto)
        {	
        	var param = {
        		autoType: auto,
        		searchCode:this.gfn_nullToEmpty(this.edt_bzplc.value.replace(/[^0-9]/g, ""))
        	};
        	var oArg = { autoPop: param };
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("POPUP_SRC_SPYPL_TRPL","POPUP::POPUP_SRC_SPYPL_TRPL.xfdl", oArg, sOption, sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	if (strVal != undefined) {
        		var valueArr = strVal.split(",");	
        		if (strId == "POPUP_SRC_SPYPL_TRPL") {
        			var na_trpl_c = valueArr[0];
        			var clntnm = valueArr[1];
        			this.edt_bzplc.set_value(na_trpl_c + " (" + clntnm + ")");
        			this.edt_gln.set_value(na_trpl_c);
        		}
        	}
        }

        this.edt_bzplc_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.fn_openSearchPopup(true);
        	}
        }

        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_openSearchPopup(false);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.Static07.addEventHandler("onclick", this.Static07_onclick, this);
            this.Static06.addEventHandler("onclick", this.Static06_onclick, this);
            this.brn_cls.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.Static01.addEventHandler("onclick", this.Static07_onclick, this);
            this.edt_bzplc.addEventHandler("onkeydown", this.edt_bzplc_onkeydown, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.edt_gln.addEventHandler("onkeydown", this.edt_bzplc_onkeydown, this);

        };

        this.loadIncludeScript("OMG_DS_SC_8340_P01.xfdl");

       
    };
}
)();
