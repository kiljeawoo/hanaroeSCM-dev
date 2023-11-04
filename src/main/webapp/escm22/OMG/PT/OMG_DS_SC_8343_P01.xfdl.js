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
                this.set_name("OMG_DS_SC_8343_P01");
                this.set_titletext("모니터링 결과 상세");
                this._setFormPosition(0,0,600,450);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_survey", this);
            obj._setContents("<ColumnInfo><Column id=\"SRV_A_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"ANSWER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("sta_q", "absolute", "10", "20", null, "72", "10", null, this);
            obj.set_taborder("169");
            obj.style.set_background("white");
            obj.style.set_border("1 solid #ddddddff");
            obj.style.set_padding("5 5 5 5");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "10", "110", null, null, "10", "10", this);
            obj.set_taborder("170");
            obj.set_binddataset("ds_survey");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"126\"/><Column size=\"80\"/><Column size=\"192\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"업체GLN\"/><Cell col=\"1\" text=\"업체명\"/><Cell col=\"2\" text=\"선택\"/><Cell col=\"3\" text=\"업체 응답내용\"/></Band><Band id=\"body\"><Cell text=\"bind:NA_TRPL_C\"/><Cell col=\"1\" text=\"bind:NA_TRPL_N\"/><Cell col=\"2\" text=\"bind:ANSWER\"/><Cell col=\"3\" text=\"bind:INPUT_TEXT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 600, 450, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("모니터링 결과 상세");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_8343_P01.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_8343_P01.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e) //공통
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function() //페이지 로딩후 실행부분
        {
        	this.sta_q.set_text(this.parent.Q);
        	this.search();
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /*상세 조회*/
        this.search = function()
        {
        	var srv_seq = this.parent.SRV_SEQ;
        	var srv_q_seq = this.parent.SRV_Q_SEQ;
        	
        	var sParams = "SRV_SEQ=" + srv_seq
        				+" SRV_Q_SEQ=" + srv_q_seq;
        	var sSvcID        = "retrieveMonitorResultDetail";
        	var sURL          = "svc::rest/pt/survey/retrieveMonitorResultDetail";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_survey=ds_survey";	
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* 창닫기 버튼 이벤트 */
        this.fn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "retrieveMonitorResultDetail") {
        		}
        	}
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);

        };

        this.loadIncludeScript("OMG_DS_SC_8343_P01.xfdl");

       
    };
}
)();
