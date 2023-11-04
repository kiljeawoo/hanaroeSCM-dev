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
                this._setFormPosition(0,0,740,456);
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

            obj = new Dataset("ds_wrs_clfL", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_LCLFNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_wrs_clfM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_MCLFNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_wrs_clfS", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_SCLC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_SCLFNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_wrs_clfD", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_DTCF_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_DTCFNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_bzplSearch", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "17", "29", null, "92", "17", null, this);
            obj.set_taborder("18");
            obj.set_cssclass("div_WFSA_Searchbg");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "3", "8", "132", "21", null, null, this.div_search);
            obj.set_taborder("1");
            obj.set_text("바이어명");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_buyerNm", "absolute", "134", "8", "158", "21", null, null, this.div_search);
            obj.set_taborder("3");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "3", "34", "132", "21", null, null, this.div_search);
            obj.set_taborder("6");
            obj.set_text("대분류");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "134", "57", "103", "5", null, null, this.div_search);
            obj.set_taborder("7");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_cus_ag_lrg", "absolute", "113", "948", "104", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_cus_ag_lrg_innerdataset = new Dataset("cbo_cus_ag_lrg_innerdataset", this.div_search.cbo_cus_ag_lrg);
            cbo_cus_ag_lrg_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">- 선택 -</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">해당없음</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">농협전용상품</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">기획상품</Col></Row></Rows>");
            obj.set_innerdataset(cbo_cus_ag_lrg_innerdataset);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj = new Combo("cbo_wrs_lclc", "absolute", "134", "34", "158", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_innerdataset("@ds_wrs_clfL");
            obj.set_value("null");
            obj.set_datacolumn("WRS_LCLFNM");
            obj.set_codecolumn("NA_WRS_LCLC");
            obj = new Static("Static00", "absolute", "322", "34", "132", "21", null, null, this.div_search);
            obj.set_taborder("10");
            obj.set_text("중분류");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_wrs_mclc", "absolute", "409", "34", "158", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_innerdataset("@ds_wrs_clfM");
            obj.set_value("null");
            obj.set_datacolumn("WRS_MCLFNM");
            obj.set_codecolumn("NA_WRS_MCLC");
            obj = new Static("Static04", "absolute", "3", "61", "132", "21", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("소분류");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_wrs_sclc", "absolute", "134", "61", "158", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_innerdataset("@ds_wrs_clfS");
            obj.set_value("null");
            obj.set_datacolumn("WRS_SCLFNM");
            obj.set_codecolumn("NA_WRS_SCLC");
            obj = new Static("Static05", "absolute", "322", "61", "132", "21", null, null, this.div_search);
            obj.set_taborder("14");
            obj.set_text("세분류");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_wrs_dclc", "absolute", "409", "61", "158", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_innerdataset("@ds_wrs_clfD");
            obj.set_datacolumn("WRS_DTCFNM");
            obj.set_codecolumn("NA_WRS_DTCF_C");

            obj = new Grid("grd_bzpl", "absolute", "17", "136", null, "231", "17", null, this);
            obj.set_taborder("19");
            obj.set_binddataset("ds_bzpl");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"32\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"240\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"normal\"/><Cell col=\"1\" text=\"사업장명\"/><Cell col=\"2\" text=\"바이어명\"/><Cell col=\"3\" text=\"담당업무\"/><Cell col=\"4\" text=\"전화번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" text=\"bind:SHRT_BZPLNM\"/><Cell col=\"2\" text=\"bind:BUYER_NM\"/><Cell col=\"3\" text=\"bind:CHRG_BSNNM\"/><Cell col=\"4\" text=\"bind:BUYER_TELNO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_confirm", "absolute", "304", "414", "54", "29", null, null, this);
            obj.set_taborder("20");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", "360", "414", "54", "29", null, null, this);
            obj.set_taborder("21");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
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

            obj = new Static("Static00", "absolute", "289", "121", "103", "15", null, null, this);
            obj.set_taborder("29");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_shrtBzplNm", "absolute", "871", "29", "200", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "748", "29", "120", "21", null, null, this);
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

            obj = new Static("Static04", "absolute", "149", "111", "103", "10", null, null, this);
            obj.set_taborder("33");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "310", "66", "30", "15", null, null, this);
            obj.set_taborder("35");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging", "absolute", "189", "375", "338", "29", null, null, this);
            obj.set_taborder("22");
            obj.set_text("Div03");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 706, 92, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("18");
            		p.set_cssclass("div_WFSA_Searchbg");
            		p.set_scrollbars("none");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 740, 456, this,
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
            obj = new BindItem("item177","div_search.cbo_cus_ag_lrg","value","ds_wrs_rg_req","PLG_WRS_KD");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_9021.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_9021.xfdl", function() {
        //include "lib::comLib.xjs"

        this.OMG_DS_SC_9020_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); // 공통
        	
        	// 대분류 코드 검색
        	this.fn_wrsLcLcSet();//대분류 SET
        	this.div_search.cbo_wrs_mclc.set_enable(false);
        	this.div_search.cbo_wrs_sclc.set_enable(false);
        	this.div_search.cbo_wrs_dclc.set_enable(false);
        	this.grd_bzpl.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        }

        this.btn_bzplSearch_onclick = function(obj,e)
        {
        	trace("btn_bzplSearch_onclick");
        	this.fn_paging(1); // 처음 조회시, 1페이지를 조회한다.
        }

        this.fn_bzplSearch = function()
        {
        	var buyerNm = this.gfn_nullToEmpty(this.div_search.edt_buyerNm.value);  // 바이어명
        	//var chrgBsnNm = this.gfn_nullToEmpty(this.div_search.edt_chrgBsnNm.value);  // 담당업무
        	var wrsLclc = this.gfn_nullToEmpty(this.div_search.cbo_wrs_lclc.value);  // 대분류명
        	var wrsMclc = this.gfn_nullToEmpty(this.div_search.cbo_wrs_mclc.value);  // 중분류명
        	var wrsSclc = this.gfn_nullToEmpty(this.div_search.cbo_wrs_sclc.value);  // 소분류명
        	var wrsDclc = this.gfn_nullToEmpty(this.div_search.cbo_wrs_dclc.value);  // 세분류명
        	
        	var param = " buyerNm=" + buyerNm
        			//+ " chrgBsnNm=" + chrgBsnNm
        			+ " wrsLclc=" + wrsLclc
        			+ " wrsMclc=" + wrsMclc
        			+ " wrsSclc=" + wrsSclc
        			+ " wrsDclc=" + wrsDclc;
        	
        	var sSvcID        = "search";//통신아이디
        	var sURL          = "svc::rest/pt/comn/retrieveBuyerInqNew";
        	var sInDatasets   = "ds_pageVO=ds_pageVO";
        	var sOutDatasets  = "ds_bzpl=ds_bzpl ds_pageVO=ds_pageVO";
        	var sArgument     = param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        /*
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
        */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	trace("fn_callBack=============>"+svcID);
        	
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else if (svcID == "updateBuyer") {
        		this.gfn_getMessage("alert", "result.message.save.success");
        		this.close("SUCCESS");
        		return;
        	}else{
        		if (svcID == "search") {
        			trace("this.ds_bzpl.rowcount===============>"+this.ds_bzpl.rowcount);
        			if (this.ds_bzpl.rowcount == 0) {
        				this.div_paging.fn_pageSet(0, 10, "div_paging", lsNowPage);
        				return;
        			}
        			
        			var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        			var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        			
        			this.div_paging.fn_pageSet(sTotal, sPagesize, "div_paging", lsNowPage);
        		}
        		if (svcID == "retrieveWrsClfL") {
        			trace("retrieveWrsClfL");
        			this.div_search.cbo_wrs_lclc.set_index(0);
        			this.fn_clearData(1);
        		}
        		if (svcID == "retrieveWrsClfM") {
        			this.div_search.cbo_wrs_mclc.set_index(0);
        		}
        		if (svcID == "retrieveWrsClfS") {
        			this.div_search.cbo_wrs_sclc.set_index(0);
        		}
        		if (svcID == "retrieveWrsClfD") {
        			this.div_search.cbo_wrs_dclc.set_index(0);
        		}
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
        	trace("fn_paging");
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
        	if (!confirm("바이어를 담당자로 배정하시겠습니까?")) {
        		return;
        	}
        	
        	var strVal = "ShrtBzplNm=" + encodeURIComponent(this.gfn_isEmpty(this.ds_bzpl.getColumn(chkIdx, "SHRT_BZPLNM"))) // 바이어 사업장명
        			   + "&buyerNm="   + encodeURIComponent(this.gfn_isEmpty(this.ds_bzpl.getColumn(chkIdx, "BUYER_NM")))    // 바이어명
        			   + "&chrgBsnnm=" + encodeURIComponent(this.gfn_isEmpty(this.ds_bzpl.getColumn(chkIdx, "CHRG_BSNNM")))  // 바이어 업무명
        			   + "&naBzplc="   + encodeURIComponent(this.gfn_isEmpty(this.ds_bzpl.getColumn(chkIdx, "NA_BZPLC")))
        			   + "&buyerEno="  + encodeURIComponent(this.gfn_isEmpty(this.ds_bzpl.getColumn(chkIdx, "BUYER_ENO")));
        	
        	console.log(strVal);
        	this.close(strVal);
        }

        this.OMG_DS_SC_9020_onkeydown = function(obj,e)
        {
         	if (e.keycode == 13) { // 13 == enter
         		this.btn_bzplSearch.click();
         	}
        }

        // 대분류코드
        this.fn_wrsLcLcSet = function()
        {
        	var sSvcID        = "retrieveWrsClfL";//통신아이디
        	var sURL          = "svc::/rest/scm/order/retrieveWrsClfL";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_wrs_clfL=ds_wrs_clfL";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = "";// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        // 대분류코드에서 중분류코드 불러오기
        this.div_search_cbo_wrs_lclc_onitemchanged = function(obj,e)
        {
        	var na_wrs_lclc = this.gfn_nullToEmpty(this.div_search.cbo_wrs_lclc.value);
        	var params = " na_wrs_lclc=" + na_wrs_lclc;

        	if (na_wrs_lclc != 'all') {
        		this.div_search.cbo_wrs_mclc.set_enable(true);
        		var sSvcID    = "retrieveWrsClfM";//통신아이디
        		var sURL          = "svc::/rest/scm/order/retrieveWrsClfM";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_wrs_clfM=ds_wrs_clfM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = params;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회

        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        		
        	} else {
        		this.fn_clearData(1);
        	}
        }

        
        // 중분류코드에서 소분류코드 불러오기
        this.div_search_cbo_wrs_mclc_onitemchanged = function(obj,e)
        {
        	var na_wrs_mclc = this.gfn_nullToEmpty(this.div_search.cbo_wrs_mclc.value);
        	var params = " na_wrs_mclc=" + na_wrs_mclc;

        	if (na_wrs_mclc != 'all') {
        		this.div_search.cbo_wrs_sclc.set_enable(true);
        		var sSvcID    = "retrieveWrsClfS";//통신아이디
        		var sURL          = "svc::/rest/scm/order/retrieveWrsClfS";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_wrs_clfS=ds_wrs_clfS";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = params;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회

        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        	} else {
        		this.fn_clearData(2);
        	}
        }

        
        // 소분류코드에서 세분류코드 불러오기
        this.div_search_cbo_wrs_sclc_onitemchanged = function(obj,e)
        {
        	var na_wrs_sclc = this.gfn_nullToEmpty(this.div_search.cbo_wrs_sclc.value);
        	var params = " na_wrs_sclc=" + na_wrs_sclc;

        	if (na_wrs_sclc != 'all') {
        		this.div_search.cbo_wrs_dclc.set_enable(true);
        		var sSvcID    = "retrieveWrsClfD";//통신아이디
        		var sURL          = "svc::/rest/scm/order/retrieveWrsClfD";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_wrs_clfD=ds_wrs_clfD";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = params;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회

        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        	} else {
        		this.fn_clearData(3);
        	}
        }

        this.fn_clearData= function(indx){
        	
        	if(indx  == "1"){
        		//중분류
        		this.ds_wrs_clfM.clearData();
        		this.ds_wrs_clfM.addRow();
        		this.ds_wrs_clfM.setColumn(0, "NA_WRS_MCLC", "all");
        		this.ds_wrs_clfM.setColumn(0, "WRS_MCLFNM", "-전체-");
        		this.div_search.cbo_wrs_mclc.set_index(0);
        		this.div_search.cbo_wrs_mclc.set_enable(false);
        		//소분류
        		this.ds_wrs_clfS.clearData();
        		this.ds_wrs_clfS.addRow();
        		this.ds_wrs_clfS.setColumn(0, "NA_WRS_SCLC", "all");
        		this.ds_wrs_clfS.setColumn(0, "WRS_SCLFNM", "-전체-");
        		this.div_search.cbo_wrs_sclc.set_index(0);		
        		this.div_search.cbo_wrs_sclc.set_enable(false);
        		//상세분류
        		this.ds_wrs_clfD.clearData();
        		this.ds_wrs_clfD.addRow();
        		this.ds_wrs_clfD.setColumn(0, "NA_WRS_DTCF_C", "all");
        		this.ds_wrs_clfD.setColumn(0, "WRS_DTCFNM", "-전체-");
        		this.div_search.cbo_wrs_dclc.set_index(0);
        		this.div_search.cbo_wrs_dclc.set_enable(false);
        	}
        	if(indx == "2"){
        		//소분류
        		this.ds_wrs_clfS.clearData();
        		this.ds_wrs_clfS.addRow();
        		this.ds_wrs_clfS.setColumn(0, "NA_WRS_SCLC", "all");
        		this.ds_wrs_clfS.setColumn(0, "WRS_SCLFNM", "-전체-");
        		this.div_search.cbo_wrs_sclc.set_index(0);		
        		this.div_search.cbo_wrs_sclc.set_enable(false);
        		//상세분류
        		this.ds_wrs_clfD.clearData();
        		this.ds_wrs_clfD.addRow();
        		this.ds_wrs_clfD.setColumn(0, "NA_WRS_DTCF_C", "all");
        		this.ds_wrs_clfD.setColumn(0, "WRS_DTCFNM", "-전체-");
        		this.div_search.cbo_wrs_dclc.set_index(0);
        		this.div_search.cbo_wrs_dclc.set_enable(false);
        	}
        	if(indx == "3"){
        		//상세분류
        		this.ds_wrs_clfD.clearData();
        		this.ds_wrs_clfD.addRow();
        		this.ds_wrs_clfD.setColumn(0, "NA_WRS_DTCF_C", "all");
        		this.ds_wrs_clfD.setColumn(0, "WRS_DTCFNM", "-전체-");
        		this.div_search.cbo_wrs_dclc.set_index(0);
        		this.div_search.cbo_wrs_dclc.set_enable(false);
        	}
        	
        }

        this.OMG_DS_SC_9021_onkeydown = function(obj,e)
        {
        	// 13 ==  enter
         	if (e.keycode==13  ){
         		this.btn_bzplSearch.click() ;
         	}
        }	
        /*
        this.btn_updateBuyer_onclick = function(obj:Button, e:nexacro.ClickEventInfo)
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

        	var sParams = " CSLT_RQ_NO="        + this.gfn_isEmpty(this.getOwnerFrame().CSLT_RQ_NO)
        				+ " BUYER_SHRT_BZPLNM=" + encodeURIComponent(this.gfn_isEmpty(this.ds_bzpl.getColumn(chkIdx, "SHRT_BZPLNM")))
        				+ " BUYER_CHRG_BSNNM="  + encodeURIComponent(this.gfn_isEmpty(this.ds_bzpl.getColumn(chkIdx, "BUYER_NM")))
        				+ " BUYER_NM="          + encodeURIComponent(this.gfn_isEmpty(this.ds_bzpl.getColumn(chkIdx, "CHRG_BSNNM")))
        				+ " NA_TRPL_C="         + encodeURIComponent(this.gfn_isEmpty(this.ds_bzpl.getColumn(chkIdx, "NA_BZPLC")))
        				+ " BUYER_ENO="         + encodeURIComponent(this.gfn_isEmpty(this.ds_bzpl.getColumn(chkIdx, "BUYER_ENO")));
        	
        	var sSvcID        = "updateBuyer";
        	var sURL          = "svc::rest/bt/rq/saveCtrCsltRqBuyer";
        	var sInDatasets   = "";
        	var sOutDatasets  = "";
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        	this.close(strVal);
        }
        */
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.OMG_DS_SC_9020_onload, this);
            this.btn_bzplSearch.addEventHandler("onclick", this.btn_bzplSearch_onclick, this);
            this.div_search.edt_buyerNm.addEventHandler("onkeydown", this.OMG_DS_SC_9020_onkeydown, this);
            this.div_search.cbo_wrs_lclc.addEventHandler("onitemchanged", this.div_search_cbo_wrs_lclc_onitemchanged, this);
            this.div_search.cbo_wrs_mclc.addEventHandler("onitemchanged", this.div_search_cbo_wrs_mclc_onitemchanged, this);
            this.div_search.cbo_wrs_sclc.addEventHandler("onitemchanged", this.div_search_cbo_wrs_sclc_onitemchanged, this);
            this.grd_bzpl.addEventHandler("oncellclick", this.grd_bzpl_oncellclick, this);
            this.btn_confirm.addEventHandler("onclick", this.btn_confirm_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_9021.xfdl");
        this.loadPreloadList();
       
    };
}
)();
