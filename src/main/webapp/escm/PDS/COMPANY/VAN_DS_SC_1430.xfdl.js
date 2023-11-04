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
                this.set_name("frm_VAN_DS_SC_1430");
                this.set_titletext("메뉴권한관리");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_userList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BL_AUTH_YN\" type=\"STRING\" size=\"1\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"SCM_ORDER_F\" type=\"STRING\" size=\"1\"/><Column id=\"SCM_DELIVERY_F\" type=\"STRING\" size=\"1\"/><Column id=\"SCM_RECADV_F\" type=\"STRING\" size=\"1\"/><Column id=\"PDS_OUTER_F\" type=\"STRING\" size=\"1\"/><Column id=\"PDS_SALES_F\" type=\"STRING\" size=\"1\"/><Column id=\"ANL_MARKET_F\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_title00", "absolute", "15", "10", "128", "21", null, null, this.div_search);
            obj.set_taborder("7");
            obj.set_text("사용자 조회구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_select00", "absolute", "143", "10", "140", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_select00_innerdataset = new Dataset("rdo_select00_innerdataset", this.div_search.rdo_select00);
            rdo_select00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">회원ID</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용자명</Col></Row></Rows>");
            obj.set_innerdataset(rdo_select00_innerdataset);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Edit("edt_title00", "absolute", "300", "10", "151", "21", null, null, this.div_search);
            obj.set_taborder("9");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "42.11%", "31", null, "10", "44.78%", null, this.div_search);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_menu", "absolute", "0", "0", null, "21", "596", null, this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save00", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "71", null, null, "15", "0", this);
            obj.set_taborder("6");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            obj.set_enableevent("true");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_main00", "absolute", "0", "42", null, null, "0", "0", this.div_list);
            obj.set_taborder("10");
            obj.set_binddataset("ds_userList");
            obj.set_scrollbars("autoboth");
            obj.set_autofittype("none");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"회원ID\"/><Cell col=\"2\" rowspan=\"2\" text=\"사용자명\"/><Cell col=\"3\" rowspan=\"2\" text=\"빌링권한여부\"/><Cell col=\"4\" rowspan=\"2\" text=\"협력업체 코드\"/><Cell col=\"5\" rowspan=\"2\" text=\"협력업체명\"/><Cell col=\"6\" colspan=\"4\" text=\"SCM\"/><Cell col=\"10\" text=\"부가정보\"/><Cell col=\"11\" rowspan=\"2\" text=\"판매상세정보\"/><Cell row=\"1\" col=\"6\" text=\"수주업무\"/><Cell row=\"1\" col=\"7\" text=\"배송업무\"/><Cell row=\"1\" col=\"8\" text=\"검수업무\"/><Cell row=\"1\" col=\"9\" text=\"출고정보\"/><Cell row=\"1\" col=\"10\" text=\"판매정보\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:MB_ID\"/><Cell col=\"2\" text=\"bind:USR_NM\"/><Cell col=\"3\" expr=\"expr:(BL_AUTH_YN == 'Y') ? '여' : '부'\"/><Cell col=\"4\" text=\"bind:NA_TRPL_C\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:CLNTNM\"/><Cell col=\"6\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:SCM_ORDER_F\"/><Cell col=\"7\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:SCM_DELIVERY_F\"/><Cell col=\"8\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:SCM_RECADV_F\"/><Cell col=\"9\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:PDS_OUTER_F\"/><Cell col=\"10\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:PDS_SALES_F\"/><Cell col=\"11\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ANL_MARKET_F\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_toggle00", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static138", "absolute", "0", "16", "762", "21", null, null, this.div_list);
            obj.set_taborder("12");
            obj.set_text("* 빌링권한이 있는 사용자만 수정할 수 있습니다. 체크를 해제하면 해당 메뉴를 사용할 수 없습니다.");
            obj.set_cssclass("sta_WF_DescriptionE02");
            obj.style.set_padding("2 0 0 3");
            this.div_list.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "227", null, this);
            obj.set_taborder("10");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear00", "absolute", null, "0", "53", "21", "118", null, this);
            obj.set_taborder("11");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 788, 421, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_text("Div02");
            		p.set_scrollbars("none");
            		p.set_enableevent("true");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_0160");
            		p.set_titletext("메뉴권한관리");

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
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1430.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1430.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); // 공통
        }

        this.fn_afterFormOnload = function()
        {
        	this.div_list.grd_main00.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        	
        	if (application.gv_userAuth.indexOf("1") >= 0) { // 빌링권한이 있는 경우
        		this.div_list.grd_main00.set_readonly(false);
        	}
        }

        // 초기화
        this.btn_clear00_onclick = function(obj,e)
        {
        	this.reload();
        }

        // 저장
        this.btn_save00_onclick = function(obj,e)
        {
        	var existUpdateData = false;
        	for (var i = 0; i < this.ds_userList.rowcount; i++) {
        		if (this.ds_userList.getRowType(i) == Dataset.ROWTYPE_UPDATE) {
        			existUpdateData = true;
        			break;
        		}
        	}
        	
        	if (application.gv_userAuth.indexOf("1") < 0) { // 빌링권한이 없는 경우
        		alert("빌링권한이 있는 사용자만 저장할 수 있습니다.");
        		return;
        	}
        	if (this.ds_userList.rowcount == 0) {
        		alert("저장할 데이터가 없습니다.");
        		return;
        	}
        	if (!existUpdateData) {
        		alert("변경된 데이터가 없습니다.");
        		return;
        	}
        	if (!confirm(this.gfn_getTextMessage("msg.isSave"))) {
        		return;
        	}
        	
        	var sSvcID        = "saveUsrMenuAuthList";
        	var sURL          = "svc::rest/pds/company/saveUsrMenuAuthList";
        	var sInDatasets   = "ds_userList=ds_userList:U"; // 변경된 내용만 보낸다.
        	var sOutDatasets  = "";
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callback";
        	var tranType      = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        // 조회
        this.btn_search00_onclick = function(obj,e)
        {
        	var params = "TRPL_C=" + this.getTrplCode() 									// 권한사업장 코드
        			+ " RDO_CHK=" + this.div_search.rdo_select00.value						// 사용자 조회구분 (1: 회원ID, 2: 사용자명)
        			+ " EDT_NM=" + this.gfn_nullToEmpty(this.div_search.edt_title00.value);	// 사용자 조회값
        	
        	var sSvcID        = "retrieveUsrMenuAuthList";
        	var sURL          = "svc::rest/pds/company/retrieveUsrMenuAuthList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_userList=ds_userList";
        	var sArgument     = params;
        	var sCallbackFunc = "fn_callback";
        	var tranType      = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        // 검색 영역 open/close
        this.div_list_btn_toggle00_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        // 콜백
        this.fn_callback = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}
        	
        	if (svcID == "saveUsrMenuAuthList") {
        		this.gfn_getMessage("alert", "msg.comp.save");
        	} else if (svcID == "retrieveUsrMenuAuthList") {
        		if (this.ds_userList.rowcount == 0) {
        			this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			return;
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_save00.addEventHandler("onclick", this.btn_save00_onclick, this);
            this.btn_search00.addEventHandler("onclick", this.btn_search00_onclick, this);
            this.div_list.btn_toggle00.addEventHandler("onclick", this.div_list_btn_toggle00_onclick, this);
            this.btn_clear00.addEventHandler("onclick", this.btn_clear00_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1430.xfdl");
        this.loadPreloadList();
       
    };
}
)();
