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
                this.set_titletext("팝업 통합행사조회");
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
            obj._setContents("<ColumnInfo><Column id=\"EVT_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"EVTNM\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_ED_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Grid("grd_master", "absolute", "17", "132", null, "188", "17", null, this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_dataM");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"74\"/><Column size=\"136\"/><Column size=\"217\"/><Column size=\"140\"/><Column size=\"138\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"행사번호\"/><Cell col=\"3\" text=\"행사명\"/><Cell col=\"4\" text=\"행사시작일\"/><Cell col=\"5\" text=\"행사종료일\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" expr=\"expr:currow + 1\"/><Cell col=\"2\" text=\"bind:EVT_SQNO\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:EVTNM\"/><Cell col=\"4\" displaytype=\"date\" text=\"bind:EVT_ST_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:EVT_ED_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button65", "absolute", "329", "332", "54", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancle", "absolute", "385", "332", "54", "29", null, null, this);
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

            obj = new Static("Static04", "absolute", "242", "32", "91", "15", null, null, this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "363", "118", "76", "15", null, null, this);
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
            obj.set_text("통합행사조회");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "17", "76", null, "42", "17", null, this);
            obj.set_taborder("41");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "157", "0", "91", "10", null, null, this.div_search);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "165", "31", "91", "10", null, null, this.div_search);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_srh_txt", "absolute", "299", "10", "211", "21", null, null, this.div_search);
            obj.set_taborder("14");
            obj.set_cssclass("WF_Essential");
            obj.set_maxlength("100");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_srh_gubun", "absolute", "175", "10", "122", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_srh_gubun_innerdataset = new Dataset("cbo_srh_gubun_innerdataset", this.div_search.cbo_srh_gubun);
            cbo_srh_gubun_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">행사명</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">행사번호</Col></Row></Rows>");
            obj.set_innerdataset(cbo_srh_gubun_innerdataset);
            obj.set_taborder("15");
            obj.set_value("1");
            obj.set_text("예약구매1코드");
            obj.set_displaynulltext("[선택안됨]");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");

            obj = new Static("Static07", "absolute", "385", "68", "91", "8", null, null, this);
            obj.set_taborder("42");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 42, this.div_search,
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
            		p.set_titletext("팝업 통합행사조회");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("VAN_DS_FN_0206.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_FN_0206.xfdl", function() {
        //include "lib::comLib.xjs";
        /*##################################################################################
         화면ID  	: VAN_DS_FN_0206
         화면명	: 통합행사조회 팝업
         작성자 	: swha
         작성일자 : 2015.08.26
        ####################################################################################*/
        /*
        	Option
        */
        var form_id = "";
        var auto = "";
        this.form_onload = function(obj,e) 
        {	
        	this.gfn_setInitForm(obj, e); //공통
        	this.grd_master.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        	var searchParam =
        	{
        			form: this,									
        			param:[{									
        					edit: this.div_search.edt_srh_txt,
        					fnc: 'btn_search_onclick'
        			}]
        	};
        	this.addEventEnterSearch(searchParam);	
        };

        
        this.fn_afterFormOnload = function(){
        	
        	form_id = this.getOwnerFrame().form_id;
        	auto = this.getOwnerFrame().auto;
        	var evt_sqno = this.getOwnerFrame().evt_sqno;
        	var evtnm = this.getOwnerFrame().evtnm;
        	var txt = "";
        	if(auto == "1"){
        		if(this.gfn_isNull(evt_sqno) == false){
        			txt = evt_sqno;
        			this.div_search.cbo_srh_gubun.set_index(1);
        		}else{
        			txt = evtnm;
        			this.div_search.cbo_srh_gubun.set_index(0);
        		}
        		this.div_search.edt_srh_txt.set_value(txt);
        	}
        };

        

        
        //Search
        this.fn_search = function(){
        	this.ds_dataM.clearData();
        	var trplC = this.gfn_nullToEmpty(this.getOwnerFrame().trplC);
        	var srh_gubun = this.gfn_nullToEmpty(this.div_search.cbo_srh_gubun.value);
        	var srh_txt = "'"+this.gfn_nullToEmpty(this.div_search.edt_srh_txt.value)+"'";
        	
        	
        	
        	var params =  	  " srh_gubun=" + srh_gubun 
        					+ " srh_txt=" + srh_txt
        					+ " TRPL_C=" + trplC;
        					
        					
        	
        	
        	trace(">>>> params : " + params);
        				
        	var sSvcID        = "retrieveEventPriceChangePopUp";//통신아이디
        	var sURL          = "svc::/rest/orders/retrieveEventPriceChangePopUp";// 호출할 서버 페이지 주소
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
        		if(svcID == "retrieveEventPriceChangePopUp"){
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
        	if(this.validationChk())
        			this.fn_search();
        }

        this.validationChk = function(){
        	if(this.gfn_isNull(this.div_search.edt_srh_txt.value)){
        		alert("검색어를 입력해 주세요");
        		return false;
        	}
        	return true;
        }

        

        this.grd_master_oncellclick = function(obj,e)
        {
        	//행사가격변동조회
        	if(form_id == "VAN_DS_SC_0230"){	
        		this.objRtnArr = new Array(2);
        			
        		var evt_sqno = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "EVT_SQNO"); 
        		var evtnm = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "EVTNM"); 
        		
        		this.objRtnArr[0] = evt_sqno;
        		this.objRtnArr[1] = evtnm;
        		
        	}
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

        this.loadIncludeScript("VAN_DS_FN_0206.xfdl");

       
    };
}
)();
