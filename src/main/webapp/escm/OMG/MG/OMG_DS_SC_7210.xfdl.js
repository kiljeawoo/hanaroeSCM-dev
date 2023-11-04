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
                this.set_name("OMG_DS_SC_7112");
                this.set_titletext("SMS발송조회");
                this._setFormPosition(0,0,800,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_sms", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MSG_ID\" type=\"STRING\" size=\"16\"/><Column id=\"SMS_MSG\" type=\"STRING\" size=\"16\"/><Column id=\"SEND_DATE\" type=\"STRING\" size=\"16\"/><Column id=\"DEST_INFO\" type=\"STRING\" size=\"16\"/><Column id=\"SEND_STATUS\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pageVO", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TOTAL_ROW_COUNT\">0</Col><Col id=\"PAGE_SIZE\">10</Col><Col id=\"CURRENT_PAGE\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "787", "0", "15", "490", null, null, this);
            obj.set_taborder("4");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "69", "15", null, this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("22");
            obj.set_text("발송일");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "15", "39", "79", "21", null, null, this.div_search);
            obj.set_taborder("31");
            obj.set_text("수신자");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_send_date_from", "absolute", "119", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("33");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static08", "absolute", "227", "10", "10", "21", null, null, this.div_search);
            obj.set_taborder("34");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_send_date_to", "absolute", "244", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("35");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Edit("edt_dest_info", "absolute", "119", "39", "225", "21", null, null, this.div_search);
            obj.set_taborder("36");
            obj.set_cssclass("WF_Essential");
            obj.set_inputtype("number");
            obj.set_maxlength("15");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_send_dsc", "absolute", "514", "10", "194", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_send_dsc_innerdataset = new Dataset("cbo_send_dsc_innerdataset", this.div_search.cbo_send_dsc);
            cbo_send_dsc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">all</Col><Col id=\"datacolumn\">전체(역발행안내 제외)</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">수동발송</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">역발행안내</Col></Row></Rows>");
            obj.set_innerdataset(cbo_send_dsc_innerdataset);
            obj.set_taborder("37");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("all");
            obj.set_text("전체(역발행안내 제외)");
            obj = new Static("Static00", "absolute", "406", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("38");
            obj.set_text("송신구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_send_sts", "absolute", "514", "39", "194", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_send_sts_innerdataset = new Dataset("cbo_send_sts_innerdataset", this.div_search.cbo_send_sts);
            cbo_send_sts_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">all</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">발송</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">미발송</Col></Row></Rows>");
            obj.set_innerdataset(cbo_send_sts_innerdataset);
            obj.set_taborder("39");
            obj.set_value("1");
            obj.set_text("발송");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("1");
            obj = new Static("Static01", "absolute", "406", "39", "103", "21", null, null, this.div_search);
            obj.set_taborder("40");
            obj.set_text("전송상태");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "97", null, null, "15", "1", this);
            obj.set_taborder("9");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_comncList", "absolute", "0", "42", null, null, "0", "54", this.div_list);
            obj.set_taborder("8");
            obj.set_binddataset("ds_sms");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"96\"/><Column size=\"157\"/><Column size=\"359\"/><Column size=\"84\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"ID\"/><Cell col=\"1\" rowspan=\"2\" text=\"발송일\"/><Cell col=\"2\" rowspan=\"2\" text=\"수신자\"/><Cell col=\"3\" rowspan=\"2\" text=\"메시지\"/><Cell col=\"4\" rowspan=\"2\" text=\"상태\"/></Band><Band id=\"body\"><Cell text=\"bind:MSG_ID\" autosizecol=\"none\"/><Cell col=\"1\" text=\"bind:SEND_DATE\" autosizecol=\"none\"/><Cell col=\"2\" text=\"expr:comp.parent.parent.fn_dest_info(DEST_INFO)\" wordwrap=\"char\" autosizecol=\"none\"/><Cell col=\"3\" text=\"bind:SMS_MSG\"/><Cell col=\"4\" text=\"bind:SEND_STATUS\" autosizecol=\"none\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "731", "1", "56", "41", null, null, this.div_list);
            obj.set_taborder("9");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_flag", "absolute", "347", "0", null, "12", "363", null, this.div_list);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_paging", "absolute", "224", null, "338", "44", null, "9", this.div_list);
            obj.set_taborder("12");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("11");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "18", null, this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 965, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 965, 444, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.set_text("Div02");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 800, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_5160");
            		p.set_titletext("SMS발송조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_7210.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_7210.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }
        this.fn_afterFormOnload = function()
        {
            /*조회 호출*/
           //this.btn_search.click();

           this.div_list.grd_comncList.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        		
        	var today = this.gfn_today('yyyyMMdd');
        	this.div_search.cal_send_date_from.set_value(this.gfn_addDate(today, -30));	
        	this.div_search.cal_send_date_to.set_value(today);
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

         /*조회버튼 이벤트*/
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_paging(1);
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_retrieveSmsList = function()
        {
        	var sParams = "from="+this.gfn_nullToEmpty(this.div_search.cal_send_date_from.value)
        				+ " to="+this.gfn_nullToEmpty(this.div_search.cal_send_date_to.value)
        				+ " dest="+this.gfn_nullToEmpty(this.div_search.edt_dest_info.value)
        				+ " dsc="+this.gfn_nullToEmpty(this.div_search.cbo_send_dsc.value)
        				+ " sts="+this.gfn_nullToEmpty(this.div_search.cbo_send_sts.value)
        				;

        	var sSvcID        = "smsList";
        	var sURL          ="svc::rest/mg/usrinf/retrieveSMSList";
        	var sInDatasets   = "ds_pageVO=ds_pageVO";
        	var sOutDatasets  = "ds_sms=ds_sms ds_pageVO=ds_pageVO";
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        
          /*Paging 처리*/
        this.fn_paging = function(vPageNum)
        { 	  	 
        	this.ds_pageVO.clearData();  
        	this.ds_sms.clearData();     //Grid에 Binding된 Dataset명
        	
        	this.ds_pageVO.addRow(); 
        	
        	var vPageSize   = 30; //Grid에 보여줄 Row수 선택
        	var vTotalCount = 0;	//전체건수. 화면조회후 리턴받아 사용 (구동시 갱신)
        	
         	this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
         	this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);
        	 
        	var argumentObj = "";
        	
        	this.fn_retrieveSmsList();
        } 

         /*상단 전체 선택/해제 체크박스 및 컬럼 정렬 이벤트*/
        this.Div02_Grid01_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		this.gfn_setGridCheckAll(obj,e);
        	} else {
        		this.gfn_gridSort(obj, e);
        	}
        }

         /*콜백메소드*/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        	 	if (svcID == "smsList") {	 	
        			var current_page = this.ds_pageVO.getColumn(0, "CURRENT_PAGE");
        			var page_size    = this.ds_pageVO.getColumn(0,"PAGE_SIZE");
        			var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        			
        			if (this.ds_sms.rowcount > 0) {
        				this.div_list.div_paging.fn_pageSet(sTotal, page_size,"grd_comncList,div_paging",current_page);
        				this.list_empty_check(false);
        			} else {
        	 			this.div_list.div_paging.fn_pageSet(0, 0,"grd_comncList,div_paging",current_page);
        				this.list_empty_check(true);
        			}
        	 	}
        	 }
        }

        this.list_empty_check = function(isEmpty) {
        	if (isEmpty) {
        		this.div_list.grd_comncList.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	}
        }

        this.btn_flag_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.fn_dest_info = function(destInfo){
        	// expr:comp.parent.parent.fn_dest_info(DEST_INFO)
        	var result = "";
        	if (destInfo != undefined) {
        		if (destInfo.indexOf("|") != -1) {
        			var s1 = destInfo.split("|");
        			for (var i=0; i<s1.length; i++) {
        				if (s1[i].indexOf("^") != -1) {			
        					if (result != "") { result +=", "; }
        					result += s1[i].split("^")[1];
        				}
        			}
        		} else if (destInfo.indexOf("^") != -1) {
        			result = destInfo.split("^")[1];
        		} else {
        			result = destInfo;
        		}
        	}
        	return result;
        }

        this.div_search_edt_dest_info_onkeyup = function(obj,e)
        {
        	if (e.keycode == "13") {
        		this.btn_search.click();
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.edt_dest_info.addEventHandler("onkeyup", this.div_search_edt_dest_info_onkeyup, this);
            this.div_list.grd_comncList.addEventHandler("onheadclick", this.Div02_Grid01_onheadclick, this);
            this.div_list.btn_flag.addEventHandler("onclick", this.btn_flag_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_7210.xfdl");
        this.loadPreloadList();
       
    };
}
)();
