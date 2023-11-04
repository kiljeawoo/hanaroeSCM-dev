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
                this.set_cssclass("frm_WF_PopupBg");
                this.set_titletext("입금반영이력");
                this._setFormPosition(0,0,733,353);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_deposit_hst", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RV_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"RV_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RV_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RV_AM\" type=\"STRING\" size=\"256\"/><Column id=\"RMS_MM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_RQS_AM\" type=\"STRING\" size=\"256\"/><Column id=\"RQS_BAC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_deposit_hstView", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RV_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"RV_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RV_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RV_AM\" type=\"STRING\" size=\"256\"/><Column id=\"RMS_MM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_RQS_AM\" type=\"STRING\" size=\"256\"/><Column id=\"RQS_BAC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_cancel", "absolute", null, null, "54", "29", "17", "17", this);
            obj.set_taborder("7");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "76", "17", "73", null, null, this);
            obj.set_taborder("8");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", null, "76", "17", "67", "0", null, this);
            obj.set_taborder("9");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "363", "336", "91", "17", null, null, this);
            obj.set_taborder("10");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "363", "297", "91", "10", null, null, this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "242", "32", "91", "15", null, null, this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "0", "37", "32", "0", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("16");
            obj.set_text("입금반영이력");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_amn_hst", "absolute", "17", "47", "703", null, null, "56", this);
            obj.set_taborder("17");
            obj.set_binddataset("ds_deposit_hstView");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"118\"/><Column size=\"69\"/><Column size=\"109\"/><Column size=\"98\"/><Column size=\"92\"/><Column size=\"90\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"거래처코드\"/><Cell col=\"1\" text=\"입금일\"/><Cell col=\"2\" text=\"입금순번\"/><Cell col=\"3\" text=\"입금금액\"/><Cell col=\"4\" text=\"청구반영월\"/><Cell col=\"5\" text=\"월청구금액\"/><Cell col=\"6\" text=\"누적잔액\"/></Band><Band id=\"body\"><Cell text=\"bind:RV_TRPL_C\"/><Cell col=\"1\" text=\"bind:RV_DT\" mask=\"####-##-##\"/><Cell col=\"2\" text=\"bind:RV_SEQ\"/><Cell col=\"3\" text=\"bind:RV_AM\"/><Cell col=\"4\" text=\"bind:RMS_MM\" mask=\"####-##\"/><Cell col=\"5\" text=\"bind:LS_RQS_AM\"/><Cell col=\"6\" text=\"bind:RQS_BAC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_NA_TRPL_C", "absolute", "0", null, "10", "21", null, "0", this);
            obj.set_taborder("18");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 733, 353, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_cssclass("frm_WF_PopupBg");
            		p.set_titletext("입금반영이력");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_7231.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_7231.xfdl", function() {
        //include "lib::comLib.xjs";

        this.objRtnArr = new Array(2); //팝업창 close시 전달할 값을 위한 배열 선언

        this.form_onload = function(obj,e)
        {
        	trace("NA_TRPL_C : "+this.getOwnerFrame().NA_TRPL_C);
        	//trace("dsArg : "+this.parent.dsArg.rowcount);
        	this.edt_NA_TRPL_C.set_value(this.getOwnerFrame().NA_TRPL_C);
        	trace("NA_TRPL_C=" + this.edt_NA_TRPL_C.value);
        	this.fn_search();
        }

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.fn_search = function()
        {
        		var sParams = "NA_TRPL_C=" + this.edt_NA_TRPL_C.value;

        		var sSvcID        = "retrieveHst";
        		var sURL          = "svc::rest/bl/retrieveDepositHst"
        		var sInDatasets   = ""
        		var sOutDatasets  = "ds_deposit_hst=ds_deposit_hst";
        		var sArgument     = sParams;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "S"; // U:저장/삭제, S:조회

        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        // 콜백 함수
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        	 	if(svcID == "retrieveHst"){
        	 	trace("this.ds_deposit_hst.rowcount" + this.ds_deposit_hst.rowcount);
        	 		if(this.ds_deposit_hst.rowcount > 0)
        			{
        				var rownum;
        				rownum = this.ds_deposit_hstView.addRow()
        				//ds_deposit_hstView 0번째 컬럼에 ds_deposit_hst 첫 행을 복사 
        				this.ds_deposit_hstView.copyRow(rownum,this.ds_deposit_hst,rownum)
        				for(i = 0; i < this.ds_deposit_hst.rowcount -1; i++){
        			 		if(this.ds_deposit_hst.getColumn(i,"RV_TRPL_C") == this.ds_deposit_hst.getColumn(i+1,"RV_TRPL_C") && this.ds_deposit_hst.getColumn(i,"RV_DT") == this.ds_deposit_hst.getColumn(i+1,"RV_DT") && this.ds_deposit_hst.getColumn(i,"RV_SEQ") == this.ds_deposit_hst.getColumn(i+1,"RV_SEQ") && this.ds_deposit_hst.getColumn(i,"RV_AM") == this.ds_deposit_hst.getColumn(i+1,"RV_AM"))
        			 		{
        					this.ds_deposit_hstView.addRow()
        					this.ds_deposit_hstView.setColumn(i+1,"RV_TRPL_C","")
        					this.ds_deposit_hstView.setColumn(i+1,"RV_DT","")
        					this.ds_deposit_hstView.setColumn(i+1,"RV_SEQ","")
        					this.ds_deposit_hstView.setColumn(i+1,"RV_AM","")
        					this.ds_deposit_hstView.setColumn(i+1,"RMS_MM",this.ds_deposit_hst.getColumn(i+1,"RMS_MM"))
        					this.ds_deposit_hstView.setColumn(i+1,"LS_RQS_AM",this.ds_deposit_hst.getColumn(i+1,"LS_RQS_AM"))
        					this.ds_deposit_hstView.setColumn(i+1,"RQS_BAC",this.ds_deposit_hst.getColumn(i+1,"RQS_BAC"))
        			 		}else {
        			 		rownum = this.ds_deposit_hstView.addRow()
        			 		this.ds_deposit_hstView.copyRow(i+1,this.ds_deposit_hst,i+1)
        			 		}
        				}
        			}	
        	 		else if(this.ds_deposit_hst.rowcount == 0){
        	 			this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        	 		}
        	 	}
        	 	else{
        	 		if(this.ds_deposit_hst.rowcount == 0){
        	 			this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        	 		}
        	 	}
        	 }
        	 
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_7231.xfdl");

       
    };
}
)();
