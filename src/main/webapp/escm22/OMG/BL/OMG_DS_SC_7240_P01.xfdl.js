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
                this.set_name("OMG_DS_SC_7240_P01");
                this.set_titletext("청구입금 팝업조회");
                this._setFormPosition(0,0,456,321);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rqrvInq", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RMS_FM\" type=\"STRING\" size=\"6\"/><Column id=\"LS_RQS_AM\" type=\"INT\" size=\"256\"/><Column id=\"RV_AM\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("rqrvInq", "absolute", "17", "40", null, "225", "17", null, this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_rqrvInq");
            obj.set_autofittype("col");
            obj.set_summarytype("top");
            obj.set_autosizebandtype("summary");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"청구월\"/><Cell col=\"1\" text=\"청구금액\"/><Cell col=\"2\" text=\"입금금액\"/></Band><Band id=\"body\"><Cell text=\"bind:RMS_FM\" mask=\"@@@@-@@\" tooltiptext=\"bind:RMS_FM\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"bind:LS_RQS_AM\" tooltiptext=\"bind:LS_RQS_AM\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RV_AM\" tooltiptext=\"bind:RV_AM\"/></Band><Band id=\"summary\"><Cell style=\"align:center middle;\" text=\"합계\"/><Cell col=\"1\" displaytype=\"number\" expr=\"dataset.getSum(&quot;LS_RQS_AM&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;LS_RQS_AM&quot;)\"/><Cell col=\"2\" displaytype=\"number\" expr=\"dataset.getSum(&quot;RV_AM&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;RV_AM&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "44", "17", "73", null, null, this);
            obj.set_taborder("1");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "439", "44", "17", "67", null, null, this);
            obj.set_taborder("2");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "363", "304", "91", "17", null, null, this);
            obj.set_taborder("3");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "363", "265", "91", "10", null, null, this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "363", "36", "91", "8", null, null, this);
            obj.set_taborder("5");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "242", "0", "91", "15", null, null, this);
            obj.set_taborder("6");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "363", "87", "76", "15", null, null, this);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 456, 321, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("청구입금 팝업조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_7240_P01.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_7240_P01.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.objRtnArr = new Array(2); //팝업창 close시 전달할 값을 위한 배열 선언

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        	this.fn_search();
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.fn_search = function()
        {
        	var sParams	= "TRPL_C="		+ this.getOwnerFrame().RMS_TRPL_C
        				+ " FROM_DT="	+ this.getOwnerFrame().RMS_FM
        				+ " TO_DT="		+ this.getOwnerFrame().RMS_TM
        				;
        	var sSvcID			= "rqrvSearchPopup";				// 통신아이디
        	var sURL			= "svc::rest/bl/rqrvSearchPopup";	// 호출할 서버 페이지 주소
        	var sInDatasets		= "";								// 보내는데이터셋
        	var sOutDatasets	= "ds_rqrvInq=ds_rqrvInq";			// 화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument		= sParams;							// 파라미터
        	var sCallbackFunc	= "fn_callBack";					// 콜백
        	var sTranType		= "S";								// U:저장/삭제, S:조회

        	//API 호출
        //	trace("sArgument : " + sArgument);
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	trace(this.ds_rqrvInq.saveXML());
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", ErrorMsg);
        		return;
        	}
        	else
        	{
        		if(svcID == "rqrvSearchPopup")
        		{
        			if(this.ds_rqrvInq.rowcount == 0)
        			{
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        			else
        			{
        				var rq_am = 0;
        				var rv_am = 0;
        				var tot_rv_am = this.getOwnerFrame().RV_AM;
        				var tot_rf_am = this.getOwnerFrame().RF_AM;
        				var tot_rq_am = tot_rv_am - tot_rf_am;
        			//	trace("tot_rq_am:" + tot_rq_am);
        				for(var i = 0; i < this.ds_rqrvInq.rowcount; i++)
        				{
        					if(tot_rq_am <= 0) break;
        				//	trace("bf tot_rq_am:" + tot_rq_am + " rq_am:" + rq_am + " rv_am:" + rv_am);
        					rq_am = this.ds_rqrvInq.getColumn(i, "LS_RQS_AM");
        					if(tot_rq_am - rq_am >= 0) rv_am = rq_am;
        					else rv_am = tot_rq_am;
        					tot_rq_am = tot_rq_am - rv_am;
        				//	trace("af tot_rq_am:" + tot_rq_am + " rq_am:" + rq_am + " rv_am:" + rv_am);
        					this.ds_rqrvInq.setColumn(i, "RV_AM", rv_am);
        				}
        				// 역순으로 데이터셋 정렬
        				this.ds_rqrvInq.set_keystring("S:-RMS_FM");
        				// 스크롤을 맨위로 보낸다
        				this.ds_rqrvInq.set_rowposition(0);
        				this.ds_rqrvInq.summary.redraw();
        			//	this.rqrvInq.vscrollbar.set_pos(1);
        			}
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.rqrvInq.addEventHandler("oncelldblclick", this.grd_rvopl_oncelldblclick, this);
            this.rqrvInq.addEventHandler("onkeydown", this.grd_rvopl_onkeydown, this);

        };

        this.loadIncludeScript("OMG_DS_SC_7240_P01.xfdl", true);

       
    };
}
)();
