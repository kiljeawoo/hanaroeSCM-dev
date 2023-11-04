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
                this.set_name("PDA_CN_003003");
                this.set_cssclass("sta_WF_PopupTitle");
                this.set_titletext("단말기번호상세");
                this._setFormPosition(0,0,767,214);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_delete", "absolute", null, "15", "55", "21", "16", null, this);
            obj.set_taborder("68");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "17", "100", "134", "29", null, null, this);
            obj.set_taborder("69");
            obj.set_text("최초등록자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "384", "100", "134", "29", null, null, this);
            obj.set_taborder("71");
            obj.set_text("최종변경자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "17", "72", "134", "29", null, null, this);
            obj.set_taborder("74");
            obj.set_text("경제통합단말기번호");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_linespace("5");
            this.addChild(obj.name, obj);

            obj = new Static("mac_addr", "absolute", "517", "72", "235", "29", null, null, this);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("ls_cmeno", "absolute", "517", "100", "235", "29", null, null, this);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("clmnm", "absolute", "150", "44", "602", "29", null, null, this);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "150", "72", "235", "29", null, null, this);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("fsrgmn_eno", "absolute", "150", "100", "235", "29", null, null, this);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "17", "128", "134", "29", null, null, this);
            obj.set_taborder("81");
            obj.set_text("최초등록일시");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "150", "128", "235", "29", null, null, this);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "384", "128", "134", "29", null, null, this);
            obj.set_taborder("83");
            obj.set_text("최종변경일시");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "517", "128", "235", "29", null, null, this);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "17", "156", "134", "29", null, null, this);
            obj.set_taborder("85");
            obj.set_text("비고내용");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("rmk_cntn", "absolute", "150", "156", "602", "29", null, null, this);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "99", "17", "67", null, null, this);
            obj.set_taborder("87");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "17", "44", "134", "29", null, null, this);
            obj.set_taborder("89");
            obj.set_text("경제통합사업장코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "384", "72", "134", "29", null, null, this);
            obj.set_taborder("90");
            obj.set_text("MAC주소");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "17", "19", "135", "21", null, null, this);
            obj.set_taborder("92");
            obj.set_text("단말기MAC주소관리");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Edit("na_bzplc", "absolute", "154", "48", "166", "21", null, null, this);
            obj.set_taborder("93");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("clntnm", "absolute", "325", "48", "171", "21", null, null, this);
            obj.set_taborder("94");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "673", "0", "91", "15", null, null, this);
            obj.set_taborder("96");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("lschg_dtm", "absolute", "67.54%", "131", "166", "23", null, null, this);
            obj.set_taborder("97");
            obj.set_readonly("true");
            obj.set_mask("####-##-## ##:##:##");
            obj.style.set_border("0 solid #bfbfbfff");
            obj.style.set_align("left middle");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("fsrg_dtm", "absolute", "19.69%", "131", "166", "23", null, null, this);
            obj.set_taborder("98");
            obj.set_readonly("true");
            obj.set_type("string");
            obj.set_mask("####-##-## ##:##:##");
            obj.style.set_border("0 solid #bfbfbfff");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("na_trmno", "absolute", "154", "76", "166", "21", null, null, this);
            obj.set_taborder("93");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 767, 214, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popupPda");
            		p.set_cssclass("sta_WF_PopupTitle");
            		p.set_titletext("단말기번호상세");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","na_bzplc","value","ds_data","NA_BZPLC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","clntnm","value","ds_data","CLNTNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","na_trmno","value","ds_data","NA_TRMNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","mac_addr","text","ds_data","MAC_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","fsrgmn_eno","text","ds_data","FSRGMN_ENO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","ls_cmeno","text","ds_data","LS_CMENO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","fsrg_dtm","value","ds_data","FSRG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","lschg_dtm","value","ds_data","LSCHG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","rmk_cntn","text","ds_data","RMK_CNTN");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("PDA_CN_003003.xfdl", "lib::comLib.xjs");
        this.registerScript("PDA_CN_003003.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        var na_bzplc = "";
        var na_trmno = "";
        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        	this.na_bzplc = this.parent.na_bzplc;
        	this.na_trmno = this.parent.na_trmno;
        	this.fn_selectDetail();
        	if(application.gv_userTPC == "admin"){
        		this.btn_delete.set_visible(true);
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
        	
        	if(svcID == "detail"){
        		if(this.ds_data.rowcount == 0){
        			this.grd_master.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));	
        			alert("데이터가 없습니다.");
        			this.close();
        			return;
        		}
        	} else if(svcID == "delete"){
        		alert("삭제되었습니다.");
        		this.close("SUCCESS");
        	}
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_deleteDetail = function(status)
        {       
            var sSvcID        = "delete";
        	var sURL          = "svc::rest/pda/deleteMacAddress";
        	var sInDatasets   = "ds_data=ds_data";
        	var sOutDatasets  = "";
        	var sArgument     = "na_bzplc="+ this.na_bzplc +
        	                    " na_trmno=" + this.na_trmno;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_selectDetail = function()
        {
        	var sSvcID        = "detail";
        	var sURL          = "svc::rest/pda/macAddressDetail";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_data=ds_data";	
        	var sArgument     = "na_bzplc="+ this.na_bzplc +
        	                    " na_trmno=" + this.na_trmno;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_delete.addEventHandler("onclick", this.fn_deleteDetail, this);
            this.Static24.addEventHandler("onclick", this.Static24_onclick, this);
            this.Static02.addEventHandler("onclick", this.Static24_onclick, this);
            this.Static04.addEventHandler("onclick", this.Static24_onclick, this);

        };

        this.loadIncludeScript("PDA_CN_003003.xfdl");

       
    };
}
)();
