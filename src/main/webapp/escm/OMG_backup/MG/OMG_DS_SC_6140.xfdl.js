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
                this.set_name("OMG_DS_SC_6120");
                this.set_titletext("주소등록관리");
                this.set_name("OMG_DS_SC_6120");
                this._setFormPosition(0,0,1200,783);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_addr", this);
            obj._setContents("<ColumnInfo><Column id=\"BLD_AMNNO\" type=\"STRING\" size=\"256\"/><Column id=\"DTCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PROVNM\" type=\"STRING\" size=\"256\"/><Column id=\"PROV_ENM\" type=\"STRING\" size=\"256\"/><Column id=\"CCWNM\" type=\"STRING\" size=\"256\"/><Column id=\"CCW_ENM\" type=\"STRING\" size=\"256\"/><Column id=\"TTVNM\" type=\"STRING\" size=\"256\"/><Column id=\"TTV_ENM\" type=\"STRING\" size=\"256\"/><Column id=\"RODNM_C\" type=\"STRING\" size=\"256\"/><Column id=\"RODNM\" type=\"STRING\" size=\"256\"/><Column id=\"RODNM_ENM\" type=\"STRING\" size=\"256\"/><Column id=\"UGR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BLD_NO_MHZNO\" type=\"STRING\" size=\"256\"/><Column id=\"BLD_NO_SHZNO\" type=\"STRING\" size=\"256\"/><Column id=\"LGQT_DVPNM\" type=\"STRING\" size=\"256\"/><Column id=\"CCWN_BLDNM\" type=\"STRING\" size=\"256\"/><Column id=\"LWDG_C\" type=\"STRING\" size=\"256\"/><Column id=\"LWDGNM\" type=\"STRING\" size=\"256\"/><Column id=\"RINM\" type=\"STRING\" size=\"256\"/><Column id=\"ADDGNM\" type=\"STRING\" size=\"256\"/><Column id=\"MNT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LTNO_MHZNO\" type=\"STRING\" size=\"256\"/><Column id=\"TTV_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"LTNO_SHZNO\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"STS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_check", this);
            obj._setContents("<ColumnInfo><Column id=\"BLD_AMNNO\" type=\"STRING\" size=\"256\"/><Column id=\"DTCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PROVNM\" type=\"STRING\" size=\"256\"/><Column id=\"PROV_ENM\" type=\"STRING\" size=\"256\"/><Column id=\"CCWNM\" type=\"STRING\" size=\"256\"/><Column id=\"CCW_ENM\" type=\"STRING\" size=\"256\"/><Column id=\"TTVNM\" type=\"STRING\" size=\"256\"/><Column id=\"TTV_ENM\" type=\"STRING\" size=\"256\"/><Column id=\"RODNM_C\" type=\"STRING\" size=\"256\"/><Column id=\"RODNM\" type=\"STRING\" size=\"256\"/><Column id=\"RODNM_ENM\" type=\"STRING\" size=\"256\"/><Column id=\"UGR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BLD_NO_MHZNO\" type=\"STRING\" size=\"256\"/><Column id=\"BLD_NO_SHZNO\" type=\"STRING\" size=\"256\"/><Column id=\"LGQT_DVPNM\" type=\"STRING\" size=\"256\"/><Column id=\"CCWN_BLDNM\" type=\"STRING\" size=\"256\"/><Column id=\"LWDG_C\" type=\"STRING\" size=\"256\"/><Column id=\"LWDGNM\" type=\"STRING\" size=\"256\"/><Column id=\"RINM\" type=\"STRING\" size=\"256\"/><Column id=\"ADDGNM\" type=\"STRING\" size=\"256\"/><Column id=\"MNT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LTNO_MHZNO\" type=\"STRING\" size=\"256\"/><Column id=\"TTV_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"LTNO_SHZNO\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_insert", "absolute", null, "29", "50", "21", "10", null, this);
            obj.set_taborder("3");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("wb_addr", "absolute", "10", "53", "600", null, null, "60", this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "10", "29", "340", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("행정안전부 도로명주소 조회 (www.juso.go.kr)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "620", "53", null, null, "10", "60", this);
            obj.set_taborder("17");
            obj.set_binddataset("ds_addr");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"68\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"65\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"우편번호\"/><Cell col=\"3\" text=\"시/도\"/><Cell col=\"4\" text=\"시군구\"/><Cell col=\"5\" text=\"읍면동\"/><Cell col=\"6\" text=\"도로명\"/><Cell col=\"7\" text=\"건물번호본번\"/><Cell col=\"8\" text=\"건물번호부번\"/><Cell col=\"9\" text=\"건물명\"/><Cell col=\"10\" text=\"법정동\"/><Cell col=\"11\" text=\"리\"/><Cell col=\"12\" text=\"산여부\"/><Cell col=\"13\" text=\"지번본번\"/><Cell col=\"14\" text=\"지번부번\"/></Band><Band id=\"body\" style=\"selectcolor:EXPR(STS == 'R' ? '#3333FFFF' : STS == 'E' ? '#FF3333FF' : '#333333FF');cellline:1 solid #d6d6d6ff ;cellcolor:EXPR(STS == 'R' ? '#3333FFFF' : STS == 'E' ? '#FF3333FF' : '#333333FF');cellcolor2:EXPR(STS == 'R' ? '#3333FFFF' : STS == 'E' ? '#FF3333FF' : '#333333FF');\"><Cell displaytype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"expr:STS == 'R' ? '등록가능' : STS == 'E' ? '등록됨' : '미확인'\"/><Cell col=\"2\" text=\"bind:DTCT_NO\"/><Cell col=\"3\" text=\"bind:PROVNM\"/><Cell col=\"4\" text=\"bind:CCWNM\"/><Cell col=\"5\" text=\"bind:TTVNM\"/><Cell col=\"6\" text=\"bind:RODNM\"/><Cell col=\"7\" text=\"bind:BLD_NO_MHZNO\"/><Cell col=\"8\" text=\"bind:BLD_NO_SHZNO\"/><Cell col=\"9\" text=\"bind:CCWN_BLDNM\"/><Cell col=\"10\" text=\"bind:LWDGNM\"/><Cell col=\"11\" text=\"bind:RINM\"/><Cell col=\"12\" text=\"expr:MNT_YN == &quot;1&quot; ? &quot;여&quot; : &quot;부&quot;\"/><Cell col=\"13\" text=\"bind:LTNO_MHZNO\"/><Cell col=\"14\" text=\"bind:LTNO_SHZNO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "620", "29", "318", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_text("주소등록대상 확인");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete", "absolute", null, "29", "55", "21", "164", null, this);
            obj.set_taborder("22");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_check", "absolute", null, "29", "93", "21", "65", null, this);
            obj.set_taborder("23");
            obj.set_text("등록가능확인");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "10", null, "829", "40", null, "10", this);
            obj.set_taborder("24");
            obj.set_text("- 주소검색 후 추가버튼을 눌러 주소등록대상에 추가\r\n- 등록가능여부 확인 후 등록버튼을 통해 주소 저장(등록가능 상태만 저장됨)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addr_mois", "absolute", "319", "27", "130", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_text("도로명주소 홈페이지");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1200, 783, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("주소등록관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","divSearch.edt_menuId","value","ds_in","MENU_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divSearch.cbo_menuLevel","value","ds_in","MENU_LEVEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divSearch.edt_menuName","value","ds_in","MENU_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divSearch.edt_svcGroup","value","ds_in","SVC_GROUP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divSearch.edt_fileName","value","ds_in","FILE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divSearch.edt_fileType","value","ds_in","FILE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divSearch.cbo_displayYn","value","ds_in","DISPLAY_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divSearch.cbo_useYn","value","ds_in","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_6140.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6140.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        this.CHECK_DUP = "N";

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	this.ds_addr.clearData();
        	var jusoUrl = "https://www.nhescm.co.kr/escm/OpenWeb_API/juso.html";
        	this.wb_addr.set_url(jusoUrl);
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.wb_addr_onusernotify = function(obj,e)
        {
        	if (!this.gfn_isNull(e.userdata)) {
        		this.returnAddrStr(e.userdata);
        	}
        }

        // 등록
        this.btn_insert_onclick = function(obj,e)
        {
        	if (this.CHECK_DUP == "Y") {
        		if (this.confirm("주소를 등록하시겠습니까?\n(등록가능 상태의 주소만 저장합니다.)")) {
        			var sSvcID        = "insertAddr";//통신아이디
        			var sURL          = "svc::rest/mg/insertAddress";// 호출할 서버 페이지 주소
        			var sInDatasets   = "ds_addr=ds_addr";//보내는데이터셋
        			var sOutDatasets  = "";		//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        			var sArgument     = "";// 파라미터
        			var sCallbackFunc = "fn_callBack";//콜백
        			var sTranType     = "U"; // U:저장/삭제, S:조회
        			//API 호출

        			this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        			this.btn_insert.set_enable(false);
        		}
        	} else {
        		// 예외처리
        		this.alert("주소 등록가능 여부를 먼저 확인해주세요.");
        	}
        }

        // 중복검사
        this.btn_check_onclick = function(obj,e)
        {
        	var sSvcID        = "dupCheck";//통신아이디
        	var sURL          = "svc::rest/mg/checkDupAddr";// 호출할 서버 페이지 주소
        	var sInDatasets   = "ds_addr=ds_addr";//보내는데이터셋
        	var sOutDatasets  = "ds_check=ds_check";		//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = "";// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	//API 호출

        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        // 그리드 삭제
        this.btn_delete_onclick = function(obj,e)
        {
        	if (this.ds_addr.findRow("CHK", "1") == -1) {
        		this.alert("선택된 행이 없습니다.");
        	}
        	for (var i=this.ds_addr.getRowCount()-1; i>=0; i--) {
        		if (this.ds_addr.getColumn(i, "CHK") == "1") {
        			this.ds_addr.deleteRow(i);
        		}
        	}
        	if (this.ds_addr.getRowCount() == 0) {
        		this.btn_check.set_enable(false);
        		this.btn_delete.set_enable(false);
        		this.btn_insert.set_enable(false);
        		this.CHECK_DUP = "N";
        	}
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.returnAddrStr = function(str)
        {
        	if (!this.gfn_isNull(str)) {
        		var temp = str.split("|");
        		if (this.ds_addr.findRow("BLD_AMNNO", temp[0]) != -1) {
        			this.alert("이미 주소등록대상으로 선택한 주소입니다.");
        			return;
        		}
        		
        		var row = this.ds_addr.addRow();
        		this.ds_addr.setColumn(row, "CHK", "0");
        		this.ds_addr.setColumn(row, "STS", "N");
        		this.ds_addr.setColumn(row, "BLD_AMNNO", temp[0]);
        		this.ds_addr.setColumn(row, "DTCT_NO", temp[1]);
        		this.ds_addr.setColumn(row, "PROVNM", temp[2]);
        		this.ds_addr.setColumn(row, "CCWNM", temp[3]);
        		this.ds_addr.setColumn(row, "TTVNM", temp[4]);
        		this.ds_addr.setColumn(row, "RODNM_C", temp[5]);
        		this.ds_addr.setColumn(row, "RODNM", temp[6]);
        		this.ds_addr.setColumn(row, "UGR_YN", temp[7]);
        		this.ds_addr.setColumn(row, "BLD_NO_MHZNO", temp[8]);
        		this.ds_addr.setColumn(row, "BLD_NO_SHZNO", temp[9]);
        		this.ds_addr.setColumn(row, "CCWN_BLDNM", temp[10]);
        		this.ds_addr.setColumn(row, "LWDG_C", temp[11]);
        		this.ds_addr.setColumn(row, "LWDGNM", temp[12]);
        		this.ds_addr.setColumn(row, "RINM", temp[13]);
        		this.ds_addr.setColumn(row, "MNT_YN", temp[14]);
        		this.ds_addr.setColumn(row, "LTNO_MHZNO", temp[15]);
        		this.ds_addr.setColumn(row, "TTV_SQNO", temp[16]);
        		this.ds_addr.setColumn(row, "LTNO_SHZNO", temp[17]);
        		
        		//this.div_result.edt_road.set_value(temp[18]);
        		//this.div_result.edt_jibun.set_value(temp[19]);
        		this.btn_check.set_enable(true);
        		this.btn_delete.set_enable(true);
        		this.btn_insert.set_enable(false);
        		this.CHECK_DUP = "N";
        	}
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "dupCheck") {
        			for (var i=0; i<this.ds_addr.rowcount; i++) {
        				var row = this.ds_check.findRow("BLD_AMNNO", this.ds_addr.getColumn(i, "BLD_AMNNO"));
        				if (row != -1) {
        					//this.ds_addr.deleteRow(row);
        					this.ds_addr.setColumn(i, "STS", "E"); // 등록 불가(Exist)
        				} else {
        					this.ds_addr.setColumn(i, "STS", "R"); // 등록 가능(Regist)
        					this.btn_insert.set_enable(true);
        					this.CHECK_DUP = "Y";
        				}
        			}
        		} else if (svcID == "insertAddr") {
        			this.alert("주소가 등록되었습니다.");
        			this.btn_check_onclick();
        		}
        	}
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	if (strId == "zipCode") {
        	}
        }

        this.Grid00_oncellclick = function(obj,e)
        {
        	if (e.col == 0) {
        		this.ds_addr.setColumn(e.row, "CHK", this.ds_addr.getColumn(e.row, "CHK") == "0" ? "1" : "0");
        	}
        }

        this.btn_addr_mois_onclick = function(obj,e)
        {
        	window.open("http://www.juso.go.kr");
        }

        this.Grid00_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		this.gfn_setGridCheckAll(obj,e);
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_insert.addEventHandler("onclick", this.btn_insert_onclick, this);
            this.wb_addr.addEventHandler("onusernotify", this.wb_addr_onusernotify, this);
            this.Grid00.addEventHandler("oncellclick", this.Grid00_oncellclick, this);
            this.Grid00.addEventHandler("onheadclick", this.Grid00_onheadclick, this);
            this.btn_delete.addEventHandler("onclick", this.btn_delete_onclick, this);
            this.btn_check.addEventHandler("onclick", this.btn_check_onclick, this);
            this.btn_addr_mois.addEventHandler("onclick", this.btn_addr_mois_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6140.xfdl");
        this.loadPreloadList();
       
    };
}
)();
