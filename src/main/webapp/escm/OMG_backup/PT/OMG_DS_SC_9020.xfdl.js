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
                this.set_name("OMG_DS_SC_9020");
                this.set_titletext("바이어 조회");
                this.set_visible("true");
                this._setFormPosition(0,0,456,429);
            }
            this.style.set_border("2 solid #067394ff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_bzpl", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"SHRT_BZPLNM\" type=\"STRING\" size=\"256\"/><Column id=\"USR_TP\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"CHRG_BSNNM\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_TELNO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
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
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TOTAL_ROW_COUNT\">13</Col><Col id=\"PAGE_SIZE\">10</Col><Col id=\"CURRENT_PAGE\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_usrTp", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_bzplSearch", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "17", "29", null, "67", "17", null, this);
            obj.set_taborder("18");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15", "8", "120", "21", null, null, this.div_search);
            obj.set_taborder("1");
            obj.set_text("바이어명");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_buyerNm", "absolute", "138", "8", "200", "21", null, null, this.div_search);
            obj.set_taborder("3");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", "-4", "15", "800", null, null, this.div_search);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_chrgBsnNm", "absolute", "138", "34", "200", "21", null, null, this.div_search);
            obj.set_taborder("5");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "34", "120", "21", null, null, this.div_search);
            obj.set_taborder("6");
            obj.set_text("담당업무");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "134", "57", "103", "5", null, null, this.div_search);
            obj.set_taborder("7");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("grd_bzpl", "absolute", "17", "111", null, "239", "17", null, this);
            obj.set_taborder("19");
            obj.set_binddataset("ds_bzpl");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"32\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"110\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"normal\"/><Cell col=\"1\" text=\"사업장명\"/><Cell col=\"2\" text=\"바이어명\"/><Cell col=\"3\" text=\"담당업무\"/><Cell col=\"4\" text=\"전화번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" text=\"bind:SHRT_BZPLNM\"/><Cell col=\"2\" text=\"bind:BUYER_NM\"/><Cell col=\"3\" text=\"bind:CHRG_BSNNM\"/><Cell col=\"4\" text=\"bind:BUYER_TELNO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_confirm", "absolute", "329", "389", "54", "29", null, null, this);
            obj.set_taborder("20");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", "385", "389", "54", "29", null, null, this);
            obj.set_taborder("21");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging", "absolute", "84", "350", "338", "29", null, null, this);
            obj.set_taborder("22");
            obj.set_text("Div03");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "142", "61", "103", "5", null, null, this);
            obj.set_taborder("27");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "141", "85", "103", "10", null, null, this);
            obj.set_taborder("28");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "289", "96", "103", "15", null, null, this);
            obj.set_taborder("29");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_shrtBzplNm", "absolute", "663", "29", "200", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "540", "29", "120", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("사업장명");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "149", "29", "103", "10", null, null, this);
            obj.set_taborder("32");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 67, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("18");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 456, 429, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_3212");
            		p.set_titletext("바이어 조회");
            		p.style.set_border("2 solid #067394ff");
            		p.set_visible("true");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_9020.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_9020.xfdl", function() {
        //include "lib::comLib.xjs"

        this.OMG_DS_SC_9020_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); // 공통
        	
        	this.grd_bzpl.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        }

        this.btn_bzplSearch_onclick = function(obj,e)
        {
        	this.fn_paging(1); // 처음 조회시, 1페이지를 조회한다.
        }

        this.fn_bzplSearch = function()
        {
        	var buyerNm = this.gfn_nullToEmpty(this.div_search.edt_buyerNm.value);  // 바이어명
        	var chrgBsnNm = this.gfn_nullToEmpty(this.div_search.edt_chrgBsnNm.value);  // 담당업무
        	
        	var param = " buyerNm=" + buyerNm
        			+ " chrgBsnNm=" + chrgBsnNm;
        	
        	var sSvcID        = "search";//통신아이디
        	var sURL          = "svc::rest/pt/comn/retrieveBuyerInq";
        	var sInDatasets   = "ds_pageVO=ds_pageVO";
        	var sOutDatasets  = "ds_bzpl=ds_bzpl ds_pageVO=ds_pageVO";
        	var sArgument     = param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}
        	
        	if (svcID == "search") {
        		if (this.ds_bzpl.rowcount == 0) {
        			this.div_paging.fn_pageSet(0, 10, "div_paging", lsNowPage);
        			return;
        		}
        		
        		var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        		var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        		
        		this.div_paging.fn_pageSet(sTotal, sPagesize, "div_paging", lsNowPage);
        	}
        }

        this.fn_afterFormOnload = function()
        {
        //	trace("fn_afterFormOnload  9020 ");
        }

        this.grd_bzpl_oncellclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		this.gfn_singleChk(obj, e);
        	}
        }

        /************************************************************************************************
         * 페이징처리
        ************************************************************************************************/
        this.fn_paging = function(vPageNum)
        {
        	this.ds_pageVO.clearData();
        	this.ds_bzpl.clearData(); // Grid에 Binding된 Dataset명
        	
        	this.ds_pageVO.addRow();
        	
        	var vPageSize  = 10; // Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        	var vTotalCount = 0; // 전체건수. 화면조회후 리턴받아 사용
        	
         	this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); // 현재 페이지
         	this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
         	this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);
        	
        	var argumentObj = "";
        	
        	lsNowPage = vPageNum; // 현재 페이지 설정 
        	
        	this.fn_bzplSearch();
        }

        this.btn_newClose_onclick = function(obj,e)
        {
        	this.parent.div_product.set_visible(false);
        	this.parent.div_product.set_url("");
        }

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        }

        this.btn_confirm_onclick = function(obj,e)
        {
        	var chkIdx = -1;
        	for (var i = 0; i < this.ds_bzpl.rowcount; i++) {
        		if (this.ds_bzpl.getColumn(i, "ISCHECKED") == 1) {
        			chkIdx = i;
        			break;
        		}
        	}
        	if (chkIdx == -1) {
        		alert("선택된 바이어가 없습니다.");
        		return;
        	}
        	
        	var strVal = "ShrtBzplNm=" + encodeURIComponent(this.gfn_isEmpty(this.ds_bzpl.getColumn(chkIdx, "SHRT_BZPLNM"))) // 바이어 사업장명
        			   + "&buyerNm="   + encodeURIComponent(this.gfn_isEmpty(this.ds_bzpl.getColumn(chkIdx, "BUYER_NM")))    // 바이어명
        			   + "&chrgBsnnm=" + encodeURIComponent(this.gfn_isEmpty(this.ds_bzpl.getColumn(chkIdx, "CHRG_BSNNM")))  // 바이어 업무명
        			   + "&naBzplc="   + encodeURIComponent(this.gfn_isEmpty(this.ds_bzpl.getColumn(chkIdx, "NA_BZPLC")))
        			   + "&buyerEno="  + encodeURIComponent(this.gfn_isEmpty(this.ds_bzpl.getColumn(chkIdx, "BUYER_ENO")));
        	
        	this.close(strVal);
        }

        this.OMG_DS_SC_9020_onkeydown = function(obj,e)
        {
         	if (e.keycode == 13) { // 13 == enter
         		this.btn_bzplSearch.click();
         	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.OMG_DS_SC_9020_onload, this);
            this.addEventHandler("onkeydown", this.OMG_DS_SC_9020_onkeydown, this);
            this.btn_bzplSearch.addEventHandler("onclick", this.btn_bzplSearch_onclick, this);
            this.grd_bzpl.addEventHandler("oncellclick", this.grd_bzpl_oncellclick, this);
            this.btn_confirm.addEventHandler("onclick", this.btn_confirm_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_9020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
