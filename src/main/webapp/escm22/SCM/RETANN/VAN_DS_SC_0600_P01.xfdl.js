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
                this.set_name("popup01");
                this.set_titletext("반품입고 상품조회 팝업");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,740,402);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_retannRqtD", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"WRSNM\" type=\"string\" size=\"32\"/><Column id=\"RGD_UPR\" type=\"float\" size=\"8\"/><Column id=\"RGD_QT\" type=\"float\" size=\"8\"/><Column id=\"RGD_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BYNG_DFN_AM\" type=\"float\" size=\"8\"/><Column id=\"BYNG_DFN_QT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"RGD_VAT\" type=\"float\" size=\"8\"/><Column id=\"BYNG_DFN_TROT_FEE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BYNG_DFN_PHD_FEE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"VCBT_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"NA_RGD_RSN_DSC\" type=\"string\" size=\"32\"/><Column id=\"AJ_UPR\" type=\"float\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_close", "absolute", "699", "0", null, "32", "4", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("39");
            obj.set_text("상품 조회");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_detail02", "absolute", "15", "73", null, null, "15", "10", this);
            obj.set_taborder("40");
            obj.set_binddataset("ds_retannRqtD");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"135\"/><Column size=\"210\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"상품코드\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"단가\"/><Cell col=\"4\" text=\"반품수량\"/><Cell col=\"5\" text=\"반품금액\"/><Cell col=\"6\" text=\"매입확정수량\"/><Cell col=\"7\" text=\"매입확정금액\"/><Cell col=\"8\" text=\"부가세액\"/><Cell col=\"9\" text=\"환급수수료액\"/><Cell col=\"10\" text=\"물류수수료액\"/><Cell col=\"11\" text=\"공병금액\"/><Cell col=\"12\" text=\"반품사유\"/><Cell col=\"13\" text=\"조정단가\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:NA_WRS_C\"/><Cell col=\"2\" text=\"bind:WRSNM\"/><Cell col=\"3\" text=\"bind:RGD_UPR\"/><Cell col=\"4\" text=\"bind:RGD_QT\"/><Cell col=\"5\" text=\"bind:RGD_AM\"/><Cell col=\"6\" text=\"bind:BYNG_DFN_QT\"/><Cell col=\"7\" text=\"bind:BYNG_DFN_AM\"/><Cell col=\"8\" text=\"bind:RGD_VAT\"/><Cell col=\"9\" text=\"bind:BYNG_DFN_TROT_FEE\"/><Cell col=\"10\" text=\"bind:BYNG_DFN_PHD_FEE\"/><Cell col=\"11\" text=\"bind:VCBT_AM\"/><Cell col=\"12\" text=\"bind:NA_RGD_RSN_DSC\"/><Cell col=\"13\" text=\"bind:AJ_UPR\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", null, "47", "89", "21", "15", null, this);
            obj.set_taborder("42");
            obj.set_text("엑셀다운로드");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "638", "68", null, "5", "15", null, this);
            obj.set_taborder("43");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "638", "32", null, "15", "15", null, this);
            obj.set_taborder("44");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            obj.set_text("15");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 740, 402, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("반품입고 상품조회 팝업");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0600_P01.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0600_P01.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";
        /*##################################################################################
         화면명	: 미납패널티 조회
         화면ID  	: VAN_DS_SC_0370_P01
         작성자 	: hroh
         작성일자 : 2015.07.07
        ####################################################################################*/
        this.form_onload = function(obj,e) 
        {	
        	this.gfn_setInitForm(obj, e); //공통
        		
        	this.fn_search();

        };

        this.fn_afterFormOnload = function(){	
        	
        };

        //Search
        this.fn_search = function(){
        	this.ds_retannRqtD.clearData();	
        	
            var rgd_rqt = this.getOwnerFrame().p_rgd_rqt;
            var na_team_c = this.getOwnerFrame().p_na_team_c;
            var rgd_rg_dt = this.getOwnerFrame().p_rgd_rg_dt;
        	var rgd_pla_no = this.getOwnerFrame().p_rgd_pla_no;	
        	
        	params = "rgd_rqt="+rgd_rqt+
        			" na_team_c="+na_team_c+
        			" rgd_rg_dt="+rgd_rg_dt+
        			" rgd_pla_no="+rgd_pla_no;
        	
        	trace("params : " + params);
        	
        	var sSvcID        = "retrieveRqtDetailList";//통신아이디
        	var sURL          = "svc::rest/retann/retrieveRqtDetailList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_retannRqtD=ds_retannRqtD";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        	
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "retrieveRqtDetailList") {
        			if(this.ds_retannRqtD.rowcount == 0){				
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");								
        			}
        		}
        	}
        }

        
        //Close
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        //Event
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_search();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0600_P01.xfdl", true);

       
    };
}
)();
