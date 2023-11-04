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
                this.set_name("popup_balanceCheck");
                this.set_titletext("월별 잔액대사 확인");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,456,500);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_balance", this);
            obj._setContents("<ColumnInfo><Column id=\"Year\" type=\"STRING\" size=\"256\"/><Column id=\"Month\" type=\"STRING\" size=\"256\"/><Column id=\"Check_yn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Year\">2014</Col><Col id=\"Month\">03</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_bas_svc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BAS_YM\" type=\"STRING\" size=\"256\"/><Column id=\"N_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"Y_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static04", "absolute", "347", "32", "91", "15", null, null, this);
            obj.set_taborder("1");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "148", "58", "21", "17", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "17", "174", null, "53", "17", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "18", "127", "21", null, null, this.div_search);
            obj.set_taborder("0");
            obj.set_text("기준월");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("cal_bas_ym", "absolute", "106", "18", "100", "21", null, null, this.div_search);
            obj.set_taborder("1");
            obj.set_url("common::calendarMonth.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("cal_bas_ym2", "absolute", "218", "18", "100", "21", null, null, this.div_search);
            obj.set_taborder("2");
            obj.set_url("common::calendarMonth.xfdl");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("6");
            obj.set_text("월별 잔액대사 내역");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", null, null, "54", "29", "200", "15", this);
            obj.set_taborder("9");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "422", "194", null, "15", "17", null, this);
            obj.set_taborder("11");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_byng", "absolute", "17", "237", null, null, "17", "50", this);
            obj.set_taborder("13");
            obj.set_binddataset("ds_bas_svc");
            obj.set_nodatatext("조회된 건수가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"기준월\"/><Cell col=\"1\" text=\"확인건수\"/><Cell col=\"2\" style=\"color:orangered;\" text=\"미확인건수\"/><Cell col=\"3\" text=\"조 회\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" text=\"bind:BAS_YM\" mask=\"####-##\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:Y_CNT\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"normal\" style=\"color:orangered;color2:orangered;\" text=\"bind:N_CNT\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"expr:N_CNT == '0' ? 'none':'button'\" edittype=\"expr:N_CNT == '0' ? 'none':'button'\" text=\"선택(잔액장 조회)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_search00", "absolute", "17", "48", null, "90", "17", null, this);
            obj.set_taborder("14");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "0", "37", "32", "0", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "34", "48", "388", "90", null, null, this);
            obj.set_taborder("16");
            obj.set_text("귀 사는 채권채무잔액대사 미확인 거래처 입니다. \r\n납품대금 지급을 위해 월 잔액장 상세내역을 확인하시고\r\n반드시 공인인증서 전자서명을 하시기 바랍니다. \r\n문의 02-2022-4443\r\n잔액대사 내역(전월)\r\n[계통계약에 한함]");
            obj.set_wordwrap("char");
            obj.style.set_linespace("0");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 53, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 422, 127, this.div_search00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("14");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 456, 500, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1542");
            		p.set_titletext("월별 잔액대사 확인");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::calendarMonth.xfdl");
            this._addPreloadList("fdl", "common::calendarMonth.xfdl");
        };
        
        // User Script
        this.addIncludeScript("popup_balanceCheck.xfdl", "lib::comLib.xjs");
        this.registerScript("popup_balanceCheck.xfdl", function() {
        //include "lib::comLib.xjs";

        var TRPL_C = application.gv_glnCode; // 로그인 사업장코드
        var TRPL_NM = application.gv_companyName; //로그인 사업장명

        var autoPop = this.parent.autoPop;

        this.form_onload = function(obj,e) 
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	var toDay = this.gfn_today("yyyyMMdd");
        	var oneMonthAgo = this.gfn_minusMonth(toDay, 1);
        	this.div_search.cal_bas_ym._setValue(oneMonthAgo.substr(0, 6));
        	this.div_search.cal_bas_ym2._setValue(oneMonthAgo.substr(0, 6));
        	
        	this.fn_retrieveBasSvcStatCount();
        	
        }

        //조회
        this.btn_search_onclick = function(obj,e)
        {
            this.fn_retrieveBasSvcStatCount();
        }

        
        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_retrieveBasSvcStatCount = function()
        {
        	var trplC 			= TRPL_C;
        	var bas_ym 			= this.gfn_nullToEmpty(this.div_search.cal_bas_ym._getValue());
        	var bas_ym2 		= this.gfn_nullToEmpty(this.div_search.cal_bas_ym2._getValue());
        	
        	var params = 	"bas_ym=" 			+ bas_ym 		+ 
        	                " bas_ym2=" 		+ bas_ym2 		+ 
        					" trplC=" 		    + trplC
        					;
        					
        	// alert(params);
        	
        	var sSvcID        = "retrieveBasSvcStatCount";
        	var sURL          = "svc::rest/tx/retrieveBasSvcStatCount";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_bas_svc=ds_bas_svc";	
        	var sArgument     = params;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_callback = function(svcID,nCD,sMSG)
        {
        	if(nCD < 0){
        		this.getMessage('alert',sMSG);
        		return;
        	}else{
        		if(svcID == "p_search"){
        			if(this.ds_cif.rowcount == 0){
        				this.gfn_getMessage('alert','result.message.search.no.exist.data');
        			}else if(this.ds_cif.rowcount == 1){
        				if(autoPop.autoType){
        					this.grd_main00.selectRow(0);
        					this.btn_ok_onclick();
        				}
        			}else{
        				this.grd_main00.selectRow(0);
        				this.ds_cif.setFocus();
        			}
        		}
        	}
        }

        //닫기
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.grd_byng_oncellclick = function(obj,e)
        {
        	if (e.cell == 3) {
        		var N_CNT = this.ds_bas_svc.getColumn(e.row, "N_CNT");
        		if (Number(N_CNT) > 0) {		
        			var BAS_YM = this.ds_bas_svc.getColumn(e.row, "BAS_YM");
        			this.close(BAS_YM);
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_close_onclick, this);
            this.grd_byng.addEventHandler("oncellclick", this.grd_byng_oncellclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("popup_balanceCheck.xfdl");
        this.loadPreloadList();
       
    };
}
)();
