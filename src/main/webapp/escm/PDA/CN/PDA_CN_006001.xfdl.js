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
                this.set_name("PDA_CN_002001");
                this.set_titletext("PDA 공지");
                this.set_scrollbars("fixedhorz");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dataTotal", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NOTICE_SQNO\" type=\"bigdecimal\" size=\"8\"/><Column id=\"NOTICE_ST_DTM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"NOTICE_ED_DTM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"NOTICE_SUBJECT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"NOTICE_CNTN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"PUSH_USE_YN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"PUSH_PRC_ST\" type=\"bigdecimal\" size=\"8\"/><Column id=\"PUSH_SEND_DTM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"PUSH_SEND_RESULT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"FS_RGM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"FSRG_DTM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"LS_CHGM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"LSCHG_DTM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TOT_ROW_CNT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"SEQ\" type=\"bigdecimal\" size=\"8\"/><Column id=\"NOTICE_MAX_SQNO\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_condition", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NOTICE_MAX_SQNO\" type=\"bigdecimal\" size=\"8\"/></ColumnInfo>");
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

            obj = new Div("div_search", "absolute", "0", "29", null, "99", "15", null, this);
            obj.set_taborder("14");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "15", "7", "103", "21", null, null, this.div_search);
            obj.set_taborder("23");
            obj.set_text("게시기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "103", "7", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("21");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("true");
            obj = new Static("Static05", "absolute", "205", "7", "10", "21", null, null, this.div_search);
            obj.set_taborder("73");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_to", "absolute", "215", "7", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("true");

            obj = new Static("Static03", "absolute", "1", "30", "15", "42", null, null, this);
            obj.set_taborder("16");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "732", "72", "56", "41", null, null, this);
            obj.set_taborder("17");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_pda", "absolute", "0", "136", null, null, "15", "-40", this);
            obj.set_taborder("20");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Div("div_paging", "absolute", "226", null, "338", "29", null, "40", this.div_pda);
            obj.set_taborder("14");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_pda.addChild(obj.name, obj);
            obj = new Grid("grd_pda", "absolute", "0", "11", null, null, "0", "62", this.div_pda);
            obj.set_taborder("13");
            obj.set_binddataset("ds_dataTotal");
            obj.set_autofittype("none");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.set_treeinitstatus("expand,all");
            obj.style.set_background("#ffffffff URL('theme://images/B_btn_Titlebar_close_O.png')");
            obj.set_nodatatext("조회된 건수가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"77\"/><Column size=\"98\"/><Column size=\"100\"/><Column size=\"97\"/><Column size=\"111\"/><Column size=\"113\"/><Column size=\"98\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"공지순번\"/><Cell col=\"1\" text=\"공지사항제목\"/><Cell col=\"2\" text=\"최초등록자\"/><Cell col=\"3\" text=\"최종등록자\"/><Cell col=\"4\" text=\"게시시작일시\"/><Cell col=\"5\" text=\"게시종료일시\"/><Cell col=\"6\" text=\"PUSH사용여부\"/><Cell col=\"7\" text=\"PUSH송신일시\"/></Band><Band id=\"body\"><Cell text=\"bind:NOTICE_SQNO\"/><Cell col=\"1\" text=\"bind:NOTICE_SUBJECT\"/><Cell col=\"2\" text=\"bind:FS_RGM\"/><Cell col=\"3\" text=\"bind:LS_CHGM\"/><Cell col=\"4\" text=\"bind:NOTICE_ST_DTM\" mask=\"####-##-##\"/><Cell col=\"5\" text=\"bind:NOTICE_ED_DTM\" mask=\"####-##-##\"/><Cell col=\"6\" text=\"bind:PUSH_USE_YN\"/><Cell col=\"7\" text=\"bind:PUSH_SEND_DTM\" mask=\"####년##월##일##시\"/></Band></Format><Format id=\"format_copy\"></Format></Formats>");
            this.div_pda.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "524", "30", "20", "67", null, null, this);
            obj.set_taborder("21");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "316", "30", "20", "67", null, null, this);
            obj.set_taborder("22");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "88", "128", "700", "20", null, null, this);
            obj.set_taborder("23");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add", "absolute", "91.91%", "0", null, "21", "4.73%", null, this);
            obj.set_taborder("24");
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
            obj = new Layout("default", "", 788, 419, this.div_pda,
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
            		p.set_titletext("PDA 공지");
            		p.set_scrollbars("fixedhorz");

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
        this.addIncludeScript("PDA_CN_006001.xfdl", "lib::comLib.xjs");
        this.registerScript("PDA_CN_006001.xfdl", function() {
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
        		this.div_search.sr_NA_BZPLC.set_visible(true);		
        	}
        }

        this.fn_afterFormOnload = function()
        {
           //페이지 로딩후 실행부분
            this.div_pda.grd_pda.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	this.div_search.cal_from.set_value(this.gfn_minusDate(this.gfn_today("yyyyMMdd"),1));
        	this.div_search.cal_to.set_value(this.gfn_today("yyyyMMdd"));

        	this.ds_dataTotal.clearData();
        	this.btn_onclick();
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        /* Paging 처리 */
        this.fn_paging = function(vPageNum)
        {
        	this.ds_pageVO.clearData();
        	this.ds_dataTotal.clearData(); // Grid에 Binding된 Dataset명
        	
        	this.ds_pageVO.addRow();
        	
        	var vPageSize = 20; // Grid에 보여줄 Row수 선택
        	var vTotalCount = 0; // 전체건수. 화면조회후 리턴받아 사용 (구동시 갱신)
        	
        	this.ds_pageVO.setColumn(0, "CURRENT_PAGE", vPageNum); // 현재 페이지
        	this.ds_pageVO.setColumn(0, "PAGE_SIZE", vPageSize);
        	this.ds_pageVO.setColumn(0, "TOTAL_ROW_COUNT", vTotalCount);
        	
        	var argumentObj = "";
        	
        	this.fn_selectMstList();
        }

        this.fn_selectMstList = function()
        {
        	//this.ds_dataTotal.clearData();

        	var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        	var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일

        	
        	var param = "FROM_DATE=" + from_date+				
        				" TO_DATE="+to_date;
        				
        	var sSvcID        = "PdaNoticeList";//통신아이디
        	var sURL          = "svc::rest/pda/PdaNoticeList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "ds_pageVO=ds_pageVO";//보내는데이터셋
        	var sOutDatasets  = "ds_dataTotal=ds_dataTotal ds_pageVO=ds_pageVO ds_condition=ds_condition";//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
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
        	
        	if (svcID == "PdaNoticeList") {
        		if (this.ds_dataTotal.rowcount > 0) {
        			this.div_pda.div_paging.fn_pageSet(sTotal, page_size, "div_paging", current_page);
        		} else {
        			this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			this.div_pda.div_paging.fn_pageSet(0, 0, "div_paging", current_page);
        		}
        	} 
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.btn_onclick = function(obj,e)
        {
        	this.fn_paging(1);
        }

        this.grd_oncellclick = function(obj,e)
        {
        	this.fn_openPdaDetail(e.row);	
        }

        this.div_search_edt_search_onkeydown = function(obj,e)
        {
        	if(e.keycode == '13')
        	{
        		this.div_search.edt_search.updateToDataset();
        		this.btn_search.click();
        	}
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_openPdaDetail = function(nRow)
        {	
        	var oArg = {NOTICE_SQNO:this.ds_dataTotal.getColumn(nRow, "NOTICE_SQNO")};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("PDA_CN_006002","PDA.CN::PDA_CN_006002.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.btn_add_onclick = function()
        {
        	var oArg = {NOTICE_MAX_SQNO:this.ds_condition.getColumn("NOTICE_MAX_SQNO")};	
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("PDA_CN_006003","PDA.CN::PDA_CN_006003.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	trace(" strId : " + strId + " strVal : " + strVal);
        	this.fn_selectMstList;	
        }

        this.div_search_odr_dt_onkeydown = function(obj,e)
        {
        	if(e.keycode == '13') 
        	{
        		this.btn_search.click();
        	}
        }

        this.div_search_sr_NA_BZPLC_onkeydown = function(obj,e)
        {
        	if(e.keycode == '13') 
        	{
        		var na_bzplc = this.gfn_nullToEmpty(this.div_search.sr_NA_BZPLC.value); //경제통합사업장코드
        		if (na_bzplc != "" && this.gfn_length(na_bzplc) < 8) {
        			this.alert('사업장코드는 8자이상이어야 합니다.');
        			return false;
        		}

        		this.btn_search.click();
        	}
        }

        this.div_search_tr_bass_no_onkeydown = function(obj,e)
        {
        	if(e.keycode == '13') 
        	{
        		this.btn_search.click();
        	}
        }

        this.div_search_cnr_fix_usr_id_onkeydown = function(obj,e)
        {
        	if(e.keycode == '13') 
        	{
        		this.btn_search.click();
        	}
        }

        this.div_search_na_slpno_onkeydown = function(obj,e)
        {
        	if(e.keycode == '13') 
        	{
        		this.btn_search.click();
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_onclick, this);
            this.div_pda.grd_pda.addEventHandler("oncellclick", this.grd_oncellclick, this);
            this.btn_add.addEventHandler("onclick", this.btn_add_onclick, this);

        };

        this.loadIncludeScript("PDA_CN_006001.xfdl");
        this.loadPreloadList();
       
    };
}
)();
