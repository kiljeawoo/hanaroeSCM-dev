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
                this.set_titletext("팝업 상품별 조회");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,1000,360);
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
            obj._setContents("<ColumnInfo><Column id=\"ODR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TRPL_C \" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_QT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_AM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"SPY_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_ODR_STS_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "17", "47", null, "300", "17", null, this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_dataM");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"115\"/><Column size=\"80\"/><Column size=\"115\"/><Column size=\"240\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"발주일자\"/><Cell col=\"2\" text=\"발주번호\"/><Cell col=\"3\" text=\"정산처\"/><Cell col=\"4\" text=\"정산처명\"/><Cell col=\"5\" text=\"수주량\"/><Cell col=\"6\" text=\"수주금액\"/><Cell col=\"7\" text=\"부가세액\"/><Cell col=\"8\" text=\"공병금액\"/><Cell col=\"9\" text=\"발주상태\"/><Cell col=\"10\" text=\"발주자\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:ODR_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" text=\"bind:ODR_SLPNO\"/><Cell col=\"3\" text=\"bind:MNGT_NA_TRPL_C\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:CLNTNM\"/><Cell col=\"5\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_QT\" mask=\"#,##0\"/><Cell col=\"6\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_AM\" mask=\"#,##0\"/><Cell col=\"7\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_VAT\" mask=\"#,##0\"/><Cell col=\"8\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:VCBT_AM\" mask=\"#,##0\"/><Cell col=\"9\" text=\"bind:NA_ODR_STS_DSC\"/><Cell col=\"10\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "363", "32", "91", "15", null, null, this);
            obj.set_taborder("10");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "67", "17", "67", null, null, this);
            obj.set_taborder("12");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", null, "0", "56", "32", "0", null, this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("14");
            obj.set_text("상품별 상품조회");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1000, 360, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("팝업 상품별 조회");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0110_P04.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0110_P04.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
        	
        	this.gridAutoResizeM(this.Grid00);
        	this.Grid00.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	
        	var oArg = {
        						odrpl_na_trpl_c:odrpl_na_trpl_c, 
        						odrpl_na_team_c:odrpl_na_team_c, 
        						search_period:search_period,
        						cal_from:cal_from,
        						cal_to:cal_to,
        						na_wrs_c:na_wrs_c,
        						vhcno:vhcno,
        						trplC:trplC
        					};
        	var odrpl_na_trpl_c = this.getOwnerFrame().odrpl_na_trpl_c;
        	var odrpl_na_team_c = this.getOwnerFrame().odrpl_na_team_c;
        	var search_period = this.getOwnerFrame().search_period;
        	var cal_from = this.getOwnerFrame().cal_from;
        	var cal_to = this.getOwnerFrame().cal_to;
        	var na_wrs_c = this.getOwnerFrame().na_wrs_c;
        	var vhcno = this.getOwnerFrame().vhcno;
        	var trplC = this.getOwnerFrame().trplC;
        	
        	
        	
        	var params;
        	params = 		" odrpl_na_trpl_c="+odrpl_na_trpl_c
        				 + 	" odrpl_na_team_c="+odrpl_na_team_c
        				 +	" search_period=" + search_period
        				 +	" cal_from=" + cal_from
        				 +	" cal_to=" + cal_to
        				 +	" na_wrs_c=" + na_wrs_c
        				 +	" vhcno=" + vhcno
        				 +	" trplC=" + trplC
        				 +	" idx=4";
        	trace(params);
        	var sSvcID        = "retrieveOrderTrd";//통신아이디
        	var sURL          = "svc::/rest/scm/order/retrieveOrderTrd";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_dataM=ds_dataM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
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
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "retrieveOrderTrd"){
        			if(this.ds_dataM.rowcount == 0){
        				this.grd_master.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));	
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
            this.Button01.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0110_P04.xfdl", true);

       
    };
}
)();
