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
                this.set_titletext("수주예정 상품조회");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,825,329);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dataM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_STDNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_UNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"BOXPE_AQZ\" type=\"INT\" size=\"256\"/><Column id=\"ODR_PCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"ODR_QT\" type=\"FLOAT\" size=\"256\"/><Column id=\"ODR_VAT\" type=\"FLOAT\" size=\"256\"/><Column id=\"BOX_QT\" type=\"FLOAT\" size=\"256\"/><Column id=\"ODR_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"VCBT_AM\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "17", "47", null, "226", "17", null, this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_dataM");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"250\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"상품코드\"/><Cell col=\"1\" text=\"상품명\"/><Cell col=\"2\" text=\"규격\"/><Cell col=\"3\" text=\"단위\"/><Cell col=\"4\" text=\"입수\"/><Cell col=\"5\" text=\"단가\"/><Cell col=\"6\" text=\"수주량\"/><Cell col=\"7\" text=\" BOX수량\"/><Cell col=\"8\" text=\"공병금액\"/></Band><Band id=\"body\"><Cell text=\"bind:NA_WRS_C\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:WRSNM\"/><Cell col=\"2\" text=\"bind:WRS_STDNM\"/><Cell col=\"3\" text=\"bind:NA_WRS_UNT_C\"/><Cell col=\"4\" text=\"bind:BOXPE_AQZ\"/><Cell col=\"5\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_PCS\" mask=\"#,##0.99\"/><Cell col=\"6\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_QT\" mask=\"#,##0\"/><Cell col=\"7\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BOX_QT\" mask=\"#,##0\"/><Cell col=\"8\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:VCBT_AM\" mask=\"#,##0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button65", "absolute", "753", "283", "54", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "733", "312", "91", "17", null, null, this);
            obj.set_taborder("8");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "733", "273", "91", "10", null, null, this);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "363", "32", "91", "15", null, null, this);
            obj.set_taborder("10");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "808", "32", "17", "67", null, null, this);
            obj.set_taborder("11");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "67", "17", "67", null, null, this);
            obj.set_taborder("12");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "770", "0", null, "32", "0", null, this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("14");
            obj.set_text("수주예정 상품조회");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 825, 329, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("수주예정 상품조회");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0130_P01.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0130_P01.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
        	this.Grid00.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));	
        	
        	var ODRPL_NA_TRPL_C = this.parent.PODRPL_NA_TRPL_C;
        	var ODRPL_NA_TEAM_C = this.parent.PODRPL_NA_TEAM_C;
        	var ODR_SLPNO = this.parent.PODR_SLPNO;
        	var ODR_DT = this.parent.PODR_DT;
        	var SPYPL_NA_TRPL_C = this.parent.PSPYPL_NA_TRPL_C;
        	
        	var params = "ODRPL_NA_TRPL_C="+ODRPL_NA_TRPL_C
        			 + 	" ODRPL_NA_TEAM_C="+ODRPL_NA_TEAM_C
        			 +	" ODR_SLPNO=" + ODR_SLPNO
        			 +	" SPYPL_NA_TRPL_C=" + SPYPL_NA_TRPL_C
        			 +	" ODR_DT=" + ODR_DT;
        	trace("PARAMS="+params);
        	
        	var sSvcID        = "getOrderRSVThird";//통신아이디
        	var sURL          = "svc::/rest/scm/order/getOrderRSVThird";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_dataM=DATASET";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        	
        }

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", ErrorMsg);
        		return;
        	}else{
        		if(svcID == "getOrderRSVThird"){
        			if(this.ds_dataM.rowcount == 0){
        				this.Grid00.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));	
        			}
        		}
        	}
        }

        
        this.Button65_onclick = function(obj,e)
        {
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Button65.addEventHandler("onclick", this.Button65_onclick, this);
            this.Button01.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0130_P01.xfdl");

       
    };
}
)();
