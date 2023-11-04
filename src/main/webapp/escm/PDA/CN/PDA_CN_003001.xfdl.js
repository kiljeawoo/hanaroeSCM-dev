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
                this.set_name("PDA_CN_003001");
                this.set_titletext("단말기번호조회(목록)");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data", this);
            obj._setContents("");
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
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CURRENT_PAGE\">0</Col><Col id=\"PAGE_SIZE\">0</Col><Col id=\"TOTAL_ROW_COUNT\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("11");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "788", "0", "15", "490", null, null, this);
            obj.set_taborder("12");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("13");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("14");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "207", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("2");
            obj.set_text("MAC주소");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "15", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("0");
            obj.set_text("단말기번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("mac_addr", "absolute", "276", "10", "150", "21", null, null, this.div_search);
            obj.set_taborder("3");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("na_trmno", "absolute", "92", "10", "100", "21", null, null, this.div_search);
            obj.set_inputtype("digit");
            obj.set_taborder("1");
            obj.set_maxlength("4");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("bisCode", "absolute", "461", "10", "135", "21", null, null, this.div_search);
            obj.set_taborder("4");
            obj.set_text("사업장코드");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("na_bzplc", "absolute", "539", "10", "100", "21", null, null, this.div_search);
            obj.set_taborder("5");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "1", "30", "15", "42", null, null, this);
            obj.set_taborder("16");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "732", "32", "56", "41", null, null, this);
            obj.set_taborder("17");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_pda", "absolute", "0", "71", null, null, "15", "0", this);
            obj.set_taborder("20");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Div("div_paging", "absolute", "226", null, "338", "29", null, "0", this.div_pda);
            obj.set_taborder("14");
            obj.set_text("Div03");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_pda.addChild(obj.name, obj);
            obj = new Grid("grd_pda", "absolute", "0", "25", null, null, "0", "29", this.div_pda);
            obj.set_taborder("13");
            obj.set_binddataset("ds_data");
            obj.set_autofittype("col");
            obj.style.set_background("#ffffffff URL('theme://images/B_btn_Titlebar_close_O.png')");
            obj.set_nodatatext("조회된 건수가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"240\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"사업장코드\"/><Cell col=\"2\" text=\"사업장명\"/><Cell col=\"3\" text=\"단말기번호\"/><Cell col=\"4\" text=\"MAC주소\"/><Cell col=\"5\" text=\"최초등록자\"/><Cell col=\"6\" text=\"최초등록일시\"/><Cell col=\"7\" text=\"최종변경자\"/><Cell col=\"8\" text=\"최종변경일시\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\"/><Cell col=\"1\" text=\"bind:NA_BZPLC\"/><Cell col=\"2\" text=\"bind:CLNTNM\"/><Cell col=\"3\" text=\"bind:NA_TRMNO\"/><Cell col=\"4\" text=\"bind:MAC_ADDR\"/><Cell col=\"5\" text=\"bind:FSRGMN_ENO\"/><Cell col=\"6\" text=\"bind:FSRG_DTM\" mask=\"####-##-## ##:##:##\"/><Cell col=\"7\" text=\"bind:LS_CMENO\"/><Cell col=\"8\" text=\"bind:LSCHG_DTM\" mask=\"####-##-## ##:##:##\"/></Band></Format></Formats>");
            this.div_pda.addChild(obj.name, obj);

            obj = new Button("btn_add", "absolute", null, "0", "41", "21", "83", null, this);
            obj.set_taborder("21");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 99, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("14");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 788, 219, this.div_pda,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("20");
            		p.set_text("Div02");

            	}
            );
            this.div_pda.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("단말기번호조회(목록)");

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
        this.addIncludeScript("PDA_CN_003001.xfdl", "lib::comLib.xjs");
        this.registerScript("PDA_CN_003001.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        this.menuId = "";
        this.blbdId = "";
        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        	if(application.gv_userTPC == "admin"){
        		this.div_search.bisCode.set_visible(true);
        		this.div_search.na_bzplc.set_visible(true);
        	}
        }

        /* 페이지 로딩 후 실행부분 */
        this.fn_afterFormOnload = function()
        {
           //페이지 로딩후 실행부분
            this.div_pda.grd_pda.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));

        	/* 조회 호출 */
        	this.btn_search.click();
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        /* Paging 처리 */
        this.fn_paging = function(vPageNum)
        {
        	this.ds_pageVO.clearData();
        	this.ds_data.clearData(); // Grid에 Binding된 Dataset명
        	
        	this.ds_pageVO.addRow();
        	
        	var vPageSize = 20; // Grid에 보여줄 Row수 선택
        	var vTotalCount = 0; // 전체건수. 화면조회후 리턴받아 사용 (구동시 갱신)
        	
        	this.ds_pageVO.setColumn(0, "CURRENT_PAGE", vPageNum); // 현재 페이지
        	this.ds_pageVO.setColumn(0, "PAGE_SIZE", vPageSize);
        	this.ds_pageVO.setColumn(0, "TOTAL_ROW_COUNT", vTotalCount);
        	
        	var argumentObj = "";
        	
        	this.fn_selectList();
        }

        /* 조회-서비스 Call */
        this.fn_selectList = function()
        {
        //	this.ds_data.clearData();

         	var na_bzplc = this.gfn_nullToEmpty(this.div_search.na_bzplc.value); //경제통합사업장코드
         	var na_trmno = this.gfn_nullToEmpty(this.div_search.na_trmno.value); //경제통합단말기번호
         	var mac_addr = this.gfn_nullToEmpty(this.div_search.mac_addr.value); //MAC주소
        	
        	var param = "na_bzplc="+na_bzplc+
        				" na_trmno="+na_trmno+
        				" mac_addr="+mac_addr;
        				
        	var sSvcID        = "retrieve";//통신아이디
        	var sURL          = "svc::rest/pda/macAddressList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "ds_pageVO=ds_pageVO"; //보내는데이터셋
        	var sOutDatasets  = "ds_data=ds_data ds_pageVO=ds_pageVO";//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* 콜백메소드 */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	var current_page = this.ds_pageVO.getColumn(0, "CURRENT_PAGE");
        	var page_size    = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        	var sTotal       = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        	
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}
        	
        	if (svcID == "retrieve") {
        		if (this.ds_data.rowcount > 0) {
        			this.div_pda.div_paging.fn_pageSet(sTotal, page_size, "div_paging", current_page);
        		} else {
        			this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			this.div_pda.div_paging.fn_pageSet(0, 0, "div_paging", current_page);
        		}
        	} else if (svcID == "insert") {
        		if (ErrorCode == 1) {
        			this.gfn_getMessage("alert", "result.message.save.success");
        			this.btn_search.click();
        		}
        	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /* 조회버튼 이벤트 */
        this.btn_onclick = function(obj,e)
        {
        // 	switch(obj.name)
        // 	{
        // 		case "btn_search":	
        // 			this.ds_data.clearData();
        // 			this.fn_selectList();
        // 	
        // 			break;
        // 	}
        	this.fn_paging(1); // 처음조회시 1페이지를 조회한다.
        }

        this.grd_oncellclick = function(obj,e)
        {
        	this.fn_openDetail(e.row);
        }	

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_openDetail = function(nRow)
        {	
        	var oArg = {na_bzplc:this.ds_data.getColumn(nRow, "NA_BZPLC"), na_trmno:this.ds_data.getColumn(nRow, "NA_TRMNO")};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("PDA_CN_003002","PDA.CN::PDA_CN_003003.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	trace(" strId : " + strId + " strVal : " + strVal);
        	this.btn_search.click();
        }

        this.div_search_na_trmno_onkeydown = function(obj,e)
        {
        	if(e.keycode == '13')
        	{
        		this.btn_search.click();
        	}
        }

        this.div_search_mac_addr_onkeydown = function(obj,e)
        {
        	if(e.keycode == '13')
        	{
        		this.btn_search.click();
        	}
        }

        this.div_search_na_bzplc_onkeydown = function(obj,e)
        {
        	if(e.keycode == '13')
        	{
        		var na_bzplc = this.gfn_nullToEmpty(this.div_search.na_bzplc.value); //경제통합사업장코드
        		if (na_bzplc != "" && this.gfn_length(na_bzplc) < 8) {
        			this.alert('사업장코드는 8자이상이어야 합니다.');
        			return false;
        		}

        		this.btn_search.click();
        	}
        }

        this.btn_add_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"I"};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("PDA_CN_003002","PDA.CN::PDA_CN_003002.xfdl",oArg,sOption,sPopupCallBack);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_onclick, this);
            this.div_search.Static06.addEventHandler("onclick", this.div_search_Static06_onclick, this);
            this.div_search.Static07.addEventHandler("onclick", this.div_search_Static07_onclick, this);
            this.div_search.mac_addr.addEventHandler("onkeydown", this.div_search_mac_addr_onkeydown, this);
            this.div_search.na_trmno.addEventHandler("onkeydown", this.div_search_na_trmno_onkeydown, this);
            this.div_search.na_bzplc.addEventHandler("onkeydown", this.div_search_na_bzplc_onkeydown, this);
            this.div_pda.grd_pda.addEventHandler("oncellclick", this.grd_oncellclick, this);
            this.btn_add.addEventHandler("onclick", this.btn_add_onclick, this);

        };

        this.loadIncludeScript("PDA_CN_003001.xfdl");
        this.loadPreloadList();
       
    };
}
)();
