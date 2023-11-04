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
                this.set_titletext("검수실적 수수료 팝업");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,740,402);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_commission", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SLP_SQNO\" type=\"string\" size=\"32\"/><Column id=\"NA_FEE_C\" type=\"string\" size=\"32\"/><Column id=\"FEENM\" type=\"string\" size=\"32\"/><Column id=\"SPY_AM_VAT\" type=\"string\" size=\"32\"/><Column id=\"TXT_VAT\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_close", "absolute", "699", "0", null, "32", "4", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("39");
            obj.set_text("수수료 조회");
            obj.set_cssclass("sta_WF_PopupTitle");
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

            obj = new Button("btn_print", "absolute", null, "47", "50", "21", "15", null, this);
            obj.set_taborder("45");
            obj.set_text("출력");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_commison", "absolute", "15", "73", null, null, "15", "15", this);
            obj.set_taborder("46");
            obj.set_binddataset("ds_commission");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"90\"/><Column size=\"190\"/><Column size=\"140\"/><Column size=\"90\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"전표\"/><Cell col=\"2\" text=\"수수료명\"/><Cell col=\"3\" text=\"수수료\"/><Cell col=\"4\" text=\"부가세\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:SLP_SQNO\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:FEENM\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPY_AM_VAT\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TXT_VAT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 740, 402, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("검수실적 수수료 팝업");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0500_P01.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0500_P01.xfdl", function() {
        //include "lib::comLib.xjs";
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
        	this.grd_commison.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));	
        };

        //Search
        this.fn_search = function(){
        	this.ds_commission.clearData();	
        	
            var na_bzplc = this.getOwnerFrame().p_na_bzplc;
            var na_team_c = this.getOwnerFrame().p_na_team_c;
            var slp_dt = this.getOwnerFrame().p_slp_dt;
        	var na_slpno = this.getOwnerFrame().p_na_slpno;
        	var slp_sqno = this.getOwnerFrame().p_slp_sqno;	
        	
        	var CNR_DS_AM = this.getOwnerFrame().CNR_DS_AM; //검수구분금액
        	
        	var param = "na_bzplc="+na_bzplc+
        				" na_team_c="+na_team_c+
        				" slp_dt="+slp_dt+
        				" na_slpno="+na_slpno+
        				" slp_sqno="+slp_sqno+
        				" CNR_DS_AM="+CNR_DS_AM;
        	
        	trace("params : " + param);
        		
        	var sSvcID        = "retrieveCommissionList";//통신아이디
        	var sURL          = "svc::rest/recadv/retrieveCommissionList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_commission=data";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "retrieveCommissionList"){
        			if(this.ds_commission.rowcount == 0){
        				//this.gfn_getMessage("alert", "result.message.search.no.exist.data");
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

        /* 출력버튼 */
        this.btn_print_onclick = function(obj,e)
        {
        	/*
            var na_bzplc = this.getOwnerFrame().p_na_bzplc;
            var na_team_c = this.getOwnerFrame().p_na_team_c;
            var slp_dt = this.getOwnerFrame().p_slp_dt;
        	var na_slpno = this.getOwnerFrame().p_na_slpno;
        	var slp_sqno = this.getOwnerFrame().p_slp_sqno;	
        	*/
        	var param = "";
        	var sId = "";		
        	
        	//검수실적 전표별
        	if(this.opener.url.indexOf("VAN_DS_SC_0500") !=-1){	
        		param = {			
        		na_bzplc:this.getOwnerFrame().p_na_bzplc,
        		na_team_c:this.getOwnerFrame().p_na_team_c,
        		slp_dt:this.getOwnerFrame().p_slp_dt,
        		na_slpno:this.getOwnerFrame().p_na_slpno,
        		slp_sqno:this.getOwnerFrame().p_slp_sqno,
        		TRPL_C:this.getOwnerFrame().TRPL_C,
        		TRPL_C_TEXT:this.getOwnerFrame().TRPL_C_TEXT,		
        		search_date_type:this.getOwnerFrame().search_date_type,
        		search_date_type_name:this.getOwnerFrame().search_date_type_name,
        		trade_type:this.getOwnerFrame().trade_type,
        		trade_type_name:this.getOwnerFrame().trade_type_name,
        		rots_ctr_dsc:this.getOwnerFrame().rots_ctr_dsc,
        		rots_ctr_dsc_name:this.getOwnerFrame().rots_ctr_dsc_name,
        		from_date:this.getOwnerFrame().from_date,
        		to_date:this.getOwnerFrame().to_date,		
        		ACTL_BUYPL_NA_TRPL_C:this.getOwnerFrame().ACTL_BUYPL_NA_TRPL_C,
        		CCLNTNM:this.getOwnerFrame().CCLNTNM,
        		TRSLPNO:this.getOwnerFrame().TRSLPNO,
        		NA_DVY_PLASH_SLPNO:this.getOwnerFrame().NA_DVY_PLASH_SLPNO,		
        		WRSNM:this.getOwnerFrame().WRSNM,
        		NA_WRS_C:this.getOwnerFrame().NA_WRS_C,
        		TXT_DSC:this.getOwnerFrame().TXT_DSC,
        		CNR_DS_AM:this.getOwnerFrame().CNR_DS_AM
        		};
        		
        		sId = 'VAN_DS_SC_0500_P01';

        	}
        	
        	//검수실적 직송분
        	if(this.opener.url.indexOf("VAN_DS_SC_0510") !=-1){	
        		param = {
        		na_bzplc:this.getOwnerFrame().p_na_bzplc,
        		na_team_c:this.getOwnerFrame().p_na_team_c,
        		slp_dt:this.getOwnerFrame().p_slp_dt,
        		na_slpno:this.getOwnerFrame().p_na_slpno,		
        		slp_sqno:this.getOwnerFrame().p_slp_sqno,		
        		TRPL_C:this.getOwnerFrame().TRPL_C,
        		TRPL_C_TEXT:this.getOwnerFrame().TRPL_C_TEXT,
        		search_date_type:this.getOwnerFrame().search_date_type,
        		search_date_type_name:this.getOwnerFrame().search_date_type_name,
        		from_date:this.getOwnerFrame().from_date,
        		to_date:this.getOwnerFrame().to_date,
        		trade_type:this.getOwnerFrame().trade_type,
        		trade_type_name:this.getOwnerFrame().trade_type_name,
        		rots_ctr_dsc:this.getOwnerFrame().rots_ctr_dsc,
        		rots_ctr_dsc_name:this.getOwnerFrame().rots_ctr_dsc_name,
        		
        		chk_commision:this.getOwnerFrame().chk_commision,		
        		DDLY_BUYPL_NA_TRPL_C:this.getOwnerFrame().DDLY_BUYPL_NA_TRPL_C,
        		
        		ACTL_BUYPL_NA_TRPL_C:this.getOwnerFrame().ACTL_BUYPL_NA_TRPL_C,
        		CCLNTNM:this.getOwnerFrame().CCLNTNM,
        		TRSLPNO:this.getOwnerFrame().TRSLPNO,
        		NA_DVY_PLASH_SLPNO:this.getOwnerFrame().NA_DVY_PLASH_SLPNO,		
        		WRSNM:this.getOwnerFrame().WRSNM,
        		NA_WRS_C:this.getOwnerFrame().NA_WRS_C,
        		TXT_DSC:this.getOwnerFrame().TXT_DSC,
        		CNR_DS_AM:this.getOwnerFrame().CNR_DS_AM
        		};
        			
        		sId = 'VAN_DS_SC_0510_P01';
        	}	
        trace('---------');		
        trace('sId> '+sId);
        	var ozParam = {
        	sId: sId,
        	sUrl: '/rest/oz/recadv/printCommissionList',
        	paramType: 'param',
        	sParam: param
        	};
        	this.ozViewer(ozParam);

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_print.addEventHandler("onclick", this.btn_print_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0500_P01.xfdl");

       
    };
}
)();
