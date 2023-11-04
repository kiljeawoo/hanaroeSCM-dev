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
                this.set_titletext("팝업 예약구매발주사업장 조회");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,740,402);
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
            obj._setContents("<ColumnInfo><Column id=\"ODRPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button07", "absolute", null, "47", "53", "21", "76", null, this);
            obj.set_taborder("0");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "47", "58", "21", "16", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_master", "absolute", "17", "134", null, "190", "17", null, this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_dataM");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"284\"/><Column size=\"421\"/><Column size=\"0\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"예약구매발주사업장코드\"/><Cell col=\"2\" text=\"예약구매발주사업장명\"/><Cell col=\"3\" text=\"매취수탁구분\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"bind:ODRPL_NA_TRPL_C\"/><Cell col=\"2\" text=\"bind:CLNTNM\"/><Cell col=\"3\" text=\"bind:ODR_SLPNO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button65", "absolute", "329", null, "54", "29", null, "41", this);
            obj.set_taborder("6");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancle", "absolute", "385", null, "54", "29", null, "41", this);
            obj.set_taborder("7");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "74", "17", "73", null, null, this);
            obj.set_taborder("8");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "363", "361", "91", "17", null, null, this);
            obj.set_taborder("10");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "363", "322", "91", "10", null, null, this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "331", "41", "30", "15", null, null, this);
            obj.set_taborder("13");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "363", "120", "76", "15", null, null, this);
            obj.set_taborder("14");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "699", "0", null, "32", "4", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "243", "106", "91", "5", null, null, this);
            obj.set_taborder("38");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("39");
            obj.set_text("예약구매발주사업장 조회");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "17", "76", null, "44", "17", null, this);
            obj.set_taborder("41");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "2", "10", "164", "21", null, null, this.div_search);
            obj.set_taborder("0");
            obj.set_text("예약구매발주사업장코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_search_code", "absolute", "166", "10", "141", "21", null, null, this.div_search);
            obj.set_taborder("5");
            obj.set_cssclass("WF_Essential");
            obj.set_maxlength("13");
            obj.set_inputtype("number");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "157", "0", "91", "10", null, null, this.div_search);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "304", "31", "103", "5", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "165", "31", "91", "10", null, null, this.div_search);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_search_nm", "absolute", "494", "10", "180", "21", null, null, this.div_search);
            obj.set_taborder("14");
            obj.set_cssclass("WF_Essential");
            obj.set_maxlength("100");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "346", "10", "148", "21", null, null, this.div_search);
            obj.set_taborder("15");
            obj.set_text("예약구매발주사업장명");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "579", "68", "91", "8", null, null, this);
            obj.set_taborder("42");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 44, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("41");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 740, 402, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("팝업 예약구매발주사업장 조회");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("VAN_DS_FN_0202.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_FN_0202.xfdl", function() {
        //include "lib::comLib.xjs";
        /*##################################################################################
         화면ID  	: VAN_DS_FN_0202
         화면명	: 예약구매발주사업장 조회
         작성자 	: swha
         작성일자 : 2015.08.26
        ####################################################################################*/
        /*
        	Option
        */
        var form_id;
        var auto;
        this.form_onload = function(obj,e) 
        {	
        	this.gfn_setInitForm(obj, e); //공통
        	this.grd_master.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        	var searchParam =
        	{
        				form: this,									
        				param:[{									
        						edit: this.div_search.edt_search_code,
        						fnc: 'btn_search_onclick'
        				},
        				{									
        						edit: this.div_search.edt_search_nm,
        						fnc: 'btn_search_onclick'
        				}]
        	};
        	this.addEventEnterSearch(searchParam);
        };

        
        this.fn_afterFormOnload = function(){
        	this.div_search.edt_search_code.set_value(this.gfn_nullToEmpty(this.getOwnerFrame().odrpl_na_trpl_c));
        	this.div_search.edt_search_nm.set_value(this.gfn_nullToEmpty(this.getOwnerFrame().odrpl_na_trpl_n));
        	form_id = this.gfn_nullToEmpty(this.getOwnerFrame().form_id);
        	auto 	= this.gfn_nullToEmpty(this.getOwnerFrame().auto);
        	
        	if(auto == "1"){
        		this.fn_search();
        	}
        };

        

        
        //Search
        this.fn_search = function(){
        	this.ds_dataM.clearData();
        	
        	var search_code = "'"+this.gfn_nullToEmpty(this.div_search.edt_search_code.value)+"'";
        	var search_nm 	= "'"+this.gfn_nullToEmpty(this.div_search.edt_search_nm.value)+"'";
        	
        	
        	
        	var params =  	  " search_code=" 		+ search_code 
        					+ " search_nm=" 		+ search_nm;
        					
        					
        	
        	
        	trace(">>>> params : " + params);
        				
        	var sSvcID        = "retrieveBkgEvtOdrplPopUp";//통신아이디
        	var sURL          = "svc::/rest/orders/retrieveBkgEvtOdrplPopUp";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_dataM=ds_dataM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
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
        		if(svcID == "retrieveBkgEvtOdrplPopUp"){
        			if(this.ds_dataM.rowcount == 0){
        				this.grd_master.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        			}else if(this.ds_dataM.rowcount == 1){
        				if(auto == "1"){
        					this.grd_master_oncellclick();
        				}
        			}else{
        				this.grd_master.selectRow(0);
        				this.grd_master.setFocus();
        			}
        			//this.gfn_getMessage("alert", "result.message.save.success");
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

        

        this.grd_master_oncellclick = function(obj,e)
        {
        	
        	trace("form_id  -->" + form_id);
        	
        		this.objRtnArr = new Array(2);
        			
        		var odrpl_na_trpl_c = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "ODRPL_NA_TRPL_C"); 
        		var clntnm 			= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "CLNTNM"); 
        		this.objRtnArr[0] = odrpl_na_trpl_c;
        		this.objRtnArr[1] = clntnm;
        		
        		this.close(this.objRtnArr.toString());
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.grd_master.addEventHandler("oncellclick", this.grd_master_oncellclick, this);
            this.btn_cancle.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_FN_0202.xfdl");

       
    };
}
)();
