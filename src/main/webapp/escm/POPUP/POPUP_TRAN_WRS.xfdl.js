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
                this.set_titletext("유통취급상품 조회");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,740,361);
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
            obj._setContents("<ColumnInfo><Column id=\"NAAC_DSC_N\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"BZPL_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"BZPL_DTI_TPC_N\" type=\"STRING\" size=\"256\"/><Column id=\"BZPL_TPNM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"NA_RGN_C\" type=\"STRING\" size=\"256\"/><Column id=\"RGN_CNM\" type=\"STRING\" size=\"256\"/><Column id=\"TEL\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZ_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZ_TPNM\" type=\"STRING\" size=\"256\"/><Column id=\"TR_STOP_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static07", "absolute", "579", "68", "91", "8", null, null, this);
            obj.set_taborder("0");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "17", "76", null, "42", "17", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "157", "0", "91", "10", null, null, this.div_search);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "165", "31", "91", "10", null, null, this.div_search);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_search_type", "absolute", "5", "10", "130", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_search_type_innerdataset = new Dataset("cbo_search_type_innerdataset", this.div_search.cbo_search_type);
            cbo_search_type_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">사업장코드</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">사업장명</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">사업자번호</Col></Row></Rows>");
            obj.set_innerdataset(cbo_search_type_innerdataset);
            obj.set_taborder("18");
            obj.set_value("01");
            obj.set_text("사업장코드");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj = new Edit("edt_search_txt", "absolute", "137", "10", "257", "21", null, null, this.div_search);
            obj.set_taborder("19");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("2");
            obj.set_text("유통취급상품 조회");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "243", "106", "91", "5", null, null, this);
            obj.set_taborder("3");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "699", "0", null, "32", "0", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "363", "118", "76", "15", null, null, this);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "242", "32", "91", "15", null, null, this);
            obj.set_taborder("6");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "363", "295", "91", "10", null, null, this);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "363", "334", "91", "17", null, null, this);
            obj.set_taborder("8");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "74", "17", "73", null, null, this);
            obj.set_taborder("9");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancle", "absolute", "384", "305", "54", "29", null, null, this);
            obj.set_taborder("10");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("Button65", "absolute", "328", "305", "54", "29", null, null, this);
            obj.set_taborder("11");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_master", "absolute", "17", "132", null, "163", "17", null, this);
            obj.set_taborder("12");
            obj.set_binddataset("ds_dataM");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"250\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"158\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"중앙회조합구분\"/><Cell col=\"1\" text=\"거래처코드\"/><Cell col=\"2\" text=\"거래처명\"/><Cell col=\"3\" text=\"사업장유형\"/><Cell col=\"4\" text=\"사업장 세부유형\"/><Cell col=\"5\" text=\"사업장유형명(전체)\"/><Cell col=\"6\" text=\"사업자번호\"/><Cell col=\"7\" text=\"지역\"/><Cell col=\"8\" text=\"전화번호\"/><Cell col=\"9\" text=\"사업유형\"/><Cell col=\"10\" text=\"거래중지여부\"/></Band><Band id=\"body\"><Cell text=\"bind:NAAC_DSC_N\"/><Cell col=\"1\" text=\"bind:NA_TRPL_C\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:NA_TRPL_N\"/><Cell col=\"3\" text=\"bind:BZPL_TPC\"/><Cell col=\"4\" text=\"bind:BZPL_DTI_TPC_N\"/><Cell col=\"5\" text=\"bind:BZPL_TPNM\"/><Cell col=\"6\" text=\"bind:BIZ_NUMBER\"/><Cell col=\"7\" text=\"bind:RGN_CNM\"/><Cell col=\"8\" text=\"bind:TEL\"/><Cell col=\"9\" text=\"bind:NA_BZ_TPNM\"/><Cell col=\"10\" text=\"bind:TR_STOP_YN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "47", "58", "21", "17", null, this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button07", "absolute", null, "47", "53", "21", "77", null, this);
            obj.set_taborder("14");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 42, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 740, 361, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("유통취급상품 조회");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("POPUP_TRAN_WRS.xfdl", "lib::comLib.xjs");
        this.registerScript("POPUP_TRAN_WRS.xfdl", function() {
        //include "lib::comLib.xjs";
        /*##################################################################################
         화면명	: 수주등록
         화면ID  	: VAN_DS_SC_0100_P00
         작성자 	: swha
          작성일자 : 2015.07.06
        ####################################################################################*/
        /*
        	Option
        */
        //var form_id = "";//부모창 ID
        this.form_onload = function(obj,e) 
        {	
        	
        	this.gfn_setInitForm(obj, e); //공통
        	form_id = this.getOwnerFrame().form_id;
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
        }

        

        
        this.fn_afterFormOnload = function(){
        }

        

        
        //Search
        this.fn_search = function(){
        	this.ds_dataM.clearData();
        	
        	var search_type = this.gfn_nullToEmpty(this.div_search.cbo_search_type.value);
        	var search_txt = this.gfn_nullToEmpty(this.div_search.edt_search_txt.value);
        	
        	
        	var param = "searchType='"+searchType+"' searchText='"+searchText+"'";
        	
        	
        	trace(">>>> params : " + params);
        				
        	var sSvcID        = "retrieveBr";//통신아이디
        	var sURL          = "svc::/rest/scm/order/retrieveBr";// 호출할 서버 페이지 주소
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
        		if(svcID == "retrieveBr"){
        			if(this.ds_dataM.rowcount == 0)
        				this.grd_master.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        				
        			this.ds_dataM.set_enableevent(false);
        			this.ds_dataM.set_rowposition(-1);
        			this.ds_dataM.set_enableevent(true);
        		}
        	}
        }

        
        //Close
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        
        this.validationChk = function(){
        	var search_type = this.gfn_nullToEmpty(this.div_search.cbo_search_type.value);
        	var search_txt = this.gfn_nullToEmpty(this.div_search.edt_search_txt.value);
        	
        	if(search_type == "02"){//명
        		if(this.gfn_length(search_txt) < 2){
        			alert("조회조건을 입력하고 조회하세요(코드 3자리, 명칭 2자리이상");
        			return false;
        		}
        	}else{
        		if(this.gfn_length(search_txt) < 3){
        			alert("조회조건을 입력하고 조회하세요(코드 3자리, 명칭 2자리이상");
        			return false;
        		}
        	}
        	return true;
        }
        //Event
        this.btn_search_onclick = function(obj,e)
        {
        	if(this.validationChk())
        		this.fn_search();
        }

        

        this.grd_master_oncellclick = function(obj,e)
        {
        	
        	trace("form_id  -->" + form_id);
        	
        	
        	
        	//수주등록일 경우
        	if(form_id == "POPUP_TRNREL_ODRPL"){	
        		this.objRtnArr = new Array(1);
        		var na_trpl_c = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "NA_TRPL_C"); 
        		this.objRtnArr[0] = na_trpl_c;
        		this.close(this.objRtnArr.toString());	
        	}
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_cancle.addEventHandler("onclick", this.btn_close_onclick, this);
            this.grd_master.addEventHandler("oncellclick", this.grd_master_oncellclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);

        };

        this.loadIncludeScript("POPUP_TRAN_WRS.xfdl");

       
    };
}
)();
