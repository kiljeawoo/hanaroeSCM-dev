﻿(function()
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
                this.set_titletext("검수내역조회(목록)");
                this.set_scrollbars("fixedhorz");
                this._setFormPosition(0,0,1911,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dataIns", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"bigdecimal\" size=\"8\"/><Column id=\"NA_TEAM_C\" type=\"bigdecimal\" size=\"8\"/><Column id=\"DVY_PLA_DT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"NA_WRS_C\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BUYPL_NA_TRPL_C\" type=\"bigdecimal\" size=\"8\"/><Column id=\"WRS_IMG_NM_01\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_con", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"REFERENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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

            obj = new Dataset("centerBzplc", this);
            obj._setContents("<ColumnInfo><Column id=\"bzplc\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "99", "15", null, this);
            obj.set_taborder("14");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "523", "7", "103", "21", null, null, this.div_search);
            obj.set_taborder("23");
            obj.set_text("납품일");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "40.6%", "5", null, "21", "53.22%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("38");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static08", "absolute", "46.99%", "5", null, "21", "52.48%", null, this.div_search);
            obj.set_taborder("39");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_to", "absolute", "47.78%", "5", null, "21", "46.25%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("40");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static10", "absolute", "20", "6", "135", "21", null, null, this.div_search);
            obj.set_taborder("32");
            obj.set_text("물류센터");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("na_buypl", "absolute", "108", "6", "179", "21", null, null, this.div_search);
            obj.set_enable("false");
            obj.set_taborder("33");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("bisCode", "absolute", "309", "7", "135", "21", null, null, this.div_search);
            obj.set_taborder("75");
            obj.set_text("사업장코드");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("sr_NA_BZPLC", "absolute", "397", "6", "100", "21", null, null, this.div_search);
            obj.set_taborder("76");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_pda", "absolute", "0", "136", null, null, "15", "-40", this);
            obj.set_taborder("20");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Div("div_paging", "absolute", "226", null, "338", "29", null, "40", this.div_pda);
            obj.set_taborder("14");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_pda.addChild(obj.name, obj);
            obj = new Grid("grd_pdaphoto", "absolute", "0", "11", null, null, "0", "62", this.div_pda);
            obj.set_taborder("13");
            obj.set_binddataset("ds_dataIns");
            obj.set_autofittype("none");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.set_treeinitstatus("expand,all");
            obj.style.set_background("#ffffffff URL('theme://images/B_btn_Titlebar_close_O.png')");
            obj.set_nodatatext("조회된 건수가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"250\"/><Column size=\"246\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"센터\"/><Cell col=\"2\" text=\"사업장\"/><Cell col=\"3\" text=\"납품일\"/><Cell col=\"4\" text=\"상품코드\"/><Cell col=\"5\" text=\"상품명\"/><Cell col=\"6\" text=\"사진보기\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\"/><Cell col=\"1\" text=\"bind:BUYPL_NA_TRPL_C\"/><Cell col=\"2\" text=\"bind:NA_BZPLC\"/><Cell col=\"3\" text=\"bind:DVY_PLA_DT\"/><Cell col=\"4\" text=\"bind:NA_WRS_C\"/><Cell col=\"5\" text=\"bind:WRS_NM\"/><Cell col=\"6\" text=\"bind:WRS_IMG_NM_01\"/></Band></Format><Format id=\"format_copy\"></Format></Formats>");
            this.div_pda.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "41.23%", "0", null, "490", "57.98%", null, this);
            obj.set_taborder("27");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "38.3%", "21", null, "8", "58.77%", null, this);
            obj.set_taborder("28");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "38.3%", "72", null, "41", "58.77%", null, this);
            obj.set_taborder("29");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "27.42%", "30", null, "67", "71.53%", null, this);
            obj.set_taborder("30");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "16.54%", "30", null, "67", "82.42%", null, this);
            obj.set_taborder("31");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0.05%", "30", null, "42", "99.16%", null, this);
            obj.set_taborder("32");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0%", "0", null, "21", "29.46%", null, this);
            obj.set_taborder("36");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "4.6%", "128", null, "20", "58.77%", null, this);
            obj.set_taborder("37");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
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
            obj = new Layout("default", "", 1911, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("검수내역조회(목록)");
            		p.set_scrollbars("fixedhorz");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","div_search.na_buypl","value","centerBzplc","bzplc");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PDA_CN_005001.xfdl", "lib::comLib.xjs");
        this.registerScript("PDA_CN_005001.xfdl", function() {
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
        var bzplc = application.gv_glnCode;
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        	this.centerBzplc.addRow();
        	this.centerBzplc.setColumn(0,"bzplc",bzplc);
        	var temp1 = this.centerBzplc.getColumn(0,"bzplc");
        }

        this.fn_afterFormOnload = function()
        {
           //페이지 로딩후 실행부분
            this.div_pda.grd_pdaphoto.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	var toDay = this.gfn_today("yyyyMMdd");
        	this.div_search.cal_from.set_value(this.gfn_firstDate(toDay));
        	this.div_search.cal_to.set_value(toDay);

        	this.ds_dataIns.clearData();
        	this.btn_onclick();
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        /* Paging 처리 */
        this.fn_paging = function(vPageNum)
        {
        	this.ds_pageVO.clearData();
        	this.ds_dataIns.clearData(); // Grid에 Binding된 Dataset명
        	
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
        	//this.ds_dataIns.clearData();

        	var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        	var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value);
        	if(from_date > to_date){
        	       alert("납품시작일을 확인 해주세요")
        	    }
        	var centerCode = this.gfn_nullToEmpty(application.gv_glnCode); //업체GLN
        	var martcode = this.gfn_nullToEmpty(this.div_search.sr_NA_BZPLC.value); //사업장GLN
        	
        	//alert(centerCode);
        	
        	
        	var param = "FROM_DATE=" + from_date+
        	            " TO_DATE="+ to_date+
        				" BUYPL_NA_TRPL_C="+centerCode+
        				" NA_BZPLC="+martcode;
        				
        	var sSvcID        = "InspectionPhotoList";//통신아이디
        	var sURL          = "svc::rest/pda/InspectionProd";// 호출할 서버 페이지 주소
        	var sInDatasets   = "ds_pageVO=ds_pageVO";//보내는데이터셋
        	var sOutDatasets  = "ds_dataIns=ds_dataIns ds_pageVO=ds_pageVO";//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
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
        	
        	if (svcID == "InspectionPhotoList") {
        		if (this.ds_dataIns.rowcount > 0) {
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
        	this.fn_openPdaPhotoDetail(e.row);
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
        this.fn_openPdaPhotoDetail = function(nRow)
        {	
        	var oArg = {NA_BZPLC:this.ds_dataIns.getColumn(nRow, "NA_BZPLC"), BUYPL_NA_TRPL_C:this.ds_dataIns.getColumn(nRow, "BUYPL_NA_TRPL_C")
        		, DVY_PLA_DT:this.ds_dataIns.getColumn(nRow, "DVY_PLA_DT"), NA_WRS_C:this.ds_dataIns.getColumn(nRow, "NA_WRS_C")
        		, NA_TEAM_C:this.ds_dataIns.getColumn(nRow, "NA_TEAM_C")};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("PDA_CN_005002","PDA.CN::PDA_CN_005002.xfdl",oArg,sOption,sPopupCallBack);	  
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

        this.div_search_cal_to_oneditclick = function(obj,e)
        {
        	
        }

        this.Static10_onclick = function(obj,e)
        {
        	
        }

        this.Static08_onclick = function(obj,e)
        {
        	
        }

        this.Static11_onclick = function(obj,e)
        {
        	
        }

        this.Static01_onclick = function(obj,e)
        {
        	
        }

        this.div_search_Static00_onclick = function(obj,e)
        {
        	
        }

        this.div_search_Static06_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_onclick, this);
            this.div_search.Static06.addEventHandler("onclick", this.div_search_Static06_onclick, this);
            this.div_search.cal_from.addEventHandler("oneditclick", this.div_search_cal_from_oneditclick, this);
            this.div_search.cal_to.addEventHandler("oneditclick", this.div_search_cal_to_oneditclick, this);
            this.div_search.sr_NA_BZPLC.addEventHandler("onkeydown", this.div_search_sr_NA_BZPLC_onkeydown, this);
            this.div_pda.grd_pdaphoto.addEventHandler("oncellclick", this.grd_oncellclick, this);
            this.Static01.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static11.addEventHandler("onclick", this.Static11_onclick, this);
            this.Static10.addEventHandler("onclick", this.Static10_onclick, this);

        };

        this.loadIncludeScript("PDA_CN_005001.xfdl");
        this.loadPreloadList();
       
    };
}
)();
