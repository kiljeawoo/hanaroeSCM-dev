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
                this.set_titletext("팝업 예약구매기준상품 조회");
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
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_N\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_BOX_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"120\"/><Column size=\"300\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"200\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"상품코드\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"계약가\"/><Cell col=\"4\" text=\"입수량\"/><Cell col=\"5\" text=\"과면세\"/><Cell col=\"6\" text=\"공급처\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"bind:NA_WRS_C\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:NA_WRS_N\"/><Cell col=\"3\" displaytype=\"number\" mask=\"#,##0\"/><Cell col=\"4\" displaytype=\"number\" text=\"bind:WRS_BOX_QTY\" mask=\"#,##0\"/><Cell col=\"5\" displaytype=\"number\" text=\"bind:TXT_DSC\" mask=\"#,##0\"/><Cell col=\"6\"/></Band></Format></Formats>");
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

            obj = new Static("Static04", "absolute", "242", "32", "30", "15", null, null, this);
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
            obj.set_text("예약구매기준상품 조회");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "17", "76", null, "44", "17", null, this);
            obj.set_taborder("41");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
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
            obj = new Combo("cbo_search_type", "absolute", "139", "10", "195", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_search_type_innerdataset = new Dataset("cbo_search_type_innerdataset", this.div_search.cbo_search_type);
            cbo_search_type_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">code</Col><Col id=\"datacolumn\">[1] 예약구매기준상품코드</Col></Row><Row><Col id=\"codecolumn\">txt</Col><Col id=\"datacolumn\">[2] 예약구매기준상품명</Col></Row></Rows>");
            obj.set_innerdataset(cbo_search_type_innerdataset);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("txt");
            obj.set_text("[2] 예약구매기준상품명");
            obj.set_index("1");
            obj = new Edit("edt_search_txt", "absolute", "337", "10", "213", "21", null, null, this.div_search);
            obj.set_taborder("15");
            obj.set_cssclass("WF_Essential");
            obj.set_maxlength("100");
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
            		p.set_titletext("팝업 예약구매기준상품 조회");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("VAN_DS_FN_0203.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_FN_0203.xfdl", function() {
        //include "lib::comLib.xjs";
        /*##################################################################################
         화면ID  	: VAN_DS_FN_0203
         화면명	: 예약구매기준상품 조회 팝업
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
        						edit: this.div_search.edt_search_txt,
        						fnc: 'btn_search_onclick'
        				}]
        	};
        	this.addEventEnterSearch(searchParam);
        	
        	
        };

        this.fn_afterFormOnload = function(){
        	this.div_search.edt_search_txt.set_value(this.gfn_nullToEmpty(this.getOwnerFrame().wrsnm));
        	form_id 	= this.gfn_nullToEmpty(this.getOwnerFrame().form_id);
        	auto 		= this.gfn_nullToEmpty(this.getOwnerFrame().auto);
        	var wrsnm 	= this.gfn_nullToEmpty(this.getOwnerFrame().wrsnm);
        	var naWrsC 	= this.gfn_nullToEmpty(this.getOwnerFrame().naWrsC);
        	var txt = "";
        	var searchParam =
        	{
        				form: this,							//고정
        				param:[{									
        						edit: this.div_search.edt_search_txt,		//타겟 컴포넌트
        						fnc: 'btn_search_onclick'		//엔터키 눌렀을시 실행할 함수 이름
        				}]
        	};
        	this.addEventEnterSearch(searchParam);
        	
        	if(this.gfn_isNull(naWrsC) == false ){
        		txt = naWrsC;
        		this.div_search.cbo_search_type.set_index(0);
        	}else{
        		txt = wrsnm;
        		this.div_search.cbo_search_type.set_index(1);
        	}
        	this.div_search.edt_search_txt.set_value(txt);
        	this.div_search.edt_search_txt.setFocus(true);
        };

        

        
        //Search
        this.fn_search = function(){
        	this.ds_dataM.clearData();
        	
        	var search_type = this.gfn_nullToEmpty(this.div_search.cbo_search_type.value);
        	var search_txt = "'"+this.gfn_nullToEmpty(this.div_search.edt_search_txt.value)+"'";
        	
        	
        	
        	var params =  	  " search_type=" 		+ search_type 
        					+ " search_txt=" 		+ search_txt;
        					
        					
        	
        	
        	trace(">>>> params : " + params);
        				
        	var sSvcID        = "retrieveEventOrdersWrsPopUp";//통신아이디
        	var sURL          = "svc::/rest/orders/retrieveEventOrdersWrsPopUp";// 호출할 서버 페이지 주소
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
        		if(svcID == "retrieveEventOrdersWrsPopUp"){
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
        	
        	//수주내역조회
        	if(form_id == "VAN_DS_SC_0200"){	
        		this.objRtnArr = new Array(2);
        		var na_wrs_c = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "NA_WRS_C"); 
        		var na_wrs_n = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "NA_WRS_N"); 
        		this.objRtnArr[0] = na_wrs_c;
        		this.objRtnArr[1] = na_wrs_n;
        		this.close(this.objRtnArr.toString());
        	}
        	
        	
        	
        	
        }

        this.Button07_onclick = function(obj,e)
        {
        	this.reload();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Button07.addEventHandler("onclick", this.Button07_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.grd_master.addEventHandler("oncellclick", this.grd_master_oncellclick, this);
            this.btn_cancle.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_FN_0203.xfdl");

       
    };
}
)();
