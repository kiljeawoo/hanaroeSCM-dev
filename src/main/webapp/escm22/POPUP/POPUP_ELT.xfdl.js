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
                this.set_cssclass("frm_WF_PopupBg");
                this.set_titletext("전자계약서 조회");
                this._setFormPosition(0,0,843,437);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_elt", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"string\" size=\"32\"/><Column id=\"ELT_CTRW_NO\" type=\"string\" size=\"32\"/><Column id=\"CHG_SQNO\" type=\"string\" size=\"32\"/><Column id=\"MN_CTRW_KD\" type=\"string\" size=\"32\"/><Column id=\"MN_CTRW_KD_NM\" type=\"string\" size=\"32\"/><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"MTALNM\" type=\"string\" size=\"32\"/><Column id=\"CTR_ST_DT\" type=\"string\" size=\"32\"/><Column id=\"CTR_ED_DT\" type=\"string\" size=\"32\"/><Column id=\"CTR_DT\" type=\"string\" size=\"32\"/><Column id=\"CTRW_DRUP_DT\" type=\"string\" size=\"32\"/><Column id=\"COLB_COMP_SGNT_DTM\" type=\"string\" size=\"32\"/><Column id=\"BUYER_APV_DTM\" type=\"string\" size=\"32\"/><Column id=\"STS\" type=\"string\" size=\"32\"/><Column id=\"STS_NM\" type=\"string\" size=\"32\"/><Column id=\"STS_EXP\" type=\"string\" size=\"32\"/><Column id=\"CHG_NM\" type=\"string\" size=\"32\"/><Column id=\"DCM_APD_CHK\" type=\"string\" size=\"32\"/><Column id=\"STYL_AMM_CHK\" type=\"string\" size=\"32\"/><Column id=\"BUYER_NM\" type=\"string\" size=\"32\"/><Column id=\"BUYER_ENO\" type=\"string\" size=\"32\"/><Column id=\"BUYER_BLG\" type=\"string\" size=\"32\"/><Column id=\"SCTR_SJT\" type=\"string\" size=\"32\"/><Column id=\"STS_CANCEL\" type=\"string\" size=\"32\"/><Column id=\"CHG_REQ_STA\" type=\"string\" size=\"32\"/><Column id=\"CHG_NO\" type=\"string\" size=\"32\"/><Column id=\"CHG_BUYER_ENO\" type=\"string\" size=\"32\"/><Column id=\"CHG_BUYER_NM\" type=\"string\" size=\"32\"/><Column id=\"CHG_REQ_STAT\" type=\"string\" size=\"32\"/><Column id=\"DONG\" type=\"string\" size=\"32\"/><Column id=\"TELNO\" type=\"string\" size=\"32\"/><Column id=\"CEO\" type=\"string\" size=\"32\"/><Column id=\"BUYER_NA_TRPL_NM\" type=\"string\" size=\"32\"/><Column id=\"BUYER_BZNO\" type=\"string\" size=\"32\"/><Column id=\"CHG_NA_TRPL_NM\" type=\"string\" size=\"32\"/><Column id=\"CTR_CHRR_MTALNM\" type=\"string\" size=\"32\"/><Column id=\"CTR_CHRR_REPMN\" type=\"string\" size=\"32\"/><Column id=\"BF_CTR_NO\" type=\"string\" size=\"32\"/><Column id=\"BF_CTR_SQNO\" type=\"string\" size=\"32\"/><Column id=\"ATCH_CTR_CNT\" type=\"string\" size=\"32\"/><Column id=\"ATCH_CTR_NO\" type=\"string\" size=\"32\"/><Column id=\"FSRG_DTM\" type=\"string\" size=\"32\"/><Column id=\"LSCHG_DTM\" type=\"string\" size=\"32\"/><Column id=\"LS_CHGM\" type=\"string\" size=\"32\"/><Column id=\"SEAL_OMIT_YN\" type=\"string\" size=\"32\"/><Column id=\"MN_CTRW_DSN\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "17", "51", null, "41", "17", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("searchText", "absolute", "123", "10", "224", "21", null, null, this.div_search);
            obj.set_taborder("18");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("searchType", "absolute", "10", "10", "106", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var searchType_innerdataset = new Dataset("searchType_innerdataset", this.div_search.searchType);
            searchType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">계약서번호</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">거래처코드</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">거래처명</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">사업자등록번호</Col></Row></Rows>");
            obj.set_innerdataset(searchType_innerdataset);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_text("계약서번호");
            obj = new Button("btn_search", "absolute", null, "10", "58", "21", "10", null, this.div_search);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_contDay", "absolute", "375", "10", "106", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_contDay_innerdataset = new Dataset("cbo_contDay_innerdataset", this.div_search.cbo_contDay);
            cbo_contDay_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">계약서변경일</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">계약시작일</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">계약만료일</Col></Row></Rows>");
            obj.set_innerdataset(cbo_contDay_innerdataset);
            obj.set_taborder("22");
            obj.set_value("0");
            obj.set_text("계약서변경일");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj = new Calendar("cal_from", "absolute", "488", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("23");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("cal_to", "absolute", "599", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("24");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static131", "absolute", "589", "10", "10", "21", null, null, this.div_search);
            obj.set_taborder("25");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("grd_elt", "absolute", "17", "104", null, "274", "17", null, this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_elt");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"109\"/><Column size=\"138\"/><Column size=\"120\"/><Column size=\"133\"/><Column size=\"170\"/><Column size=\"98\"/><Column size=\"158\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"계약서번호\"/><Cell col=\"1\" text=\"계약서종류\"/><Cell col=\"2\" text=\"거래처코드\"/><Cell col=\"3\" text=\"계약자상호\"/><Cell col=\"4\" text=\"계약기간\"/><Cell col=\"5\" text=\"계약담당자명\"/><Cell col=\"6\" text=\"계약담당자소속\"/></Band><Band id=\"body\"><Cell text=\"bind:ELT_CTRW_NO\"/><Cell col=\"1\" text=\"bind:MN_CTRW_KD_NM\"/><Cell col=\"2\" text=\"bind:NA_TRPL_C\"/><Cell col=\"3\" text=\"bind:MTALNM\"/><Cell col=\"4\" text=\"bind:CTR_DT\"/><Cell col=\"5\" text=\"bind:BUYER_NM\"/><Cell col=\"6\" text=\"bind:BUYER_BLG\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok", "absolute", "365", "390", "54", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", "423", "390", "54", "29", null, null, this);
            obj.set_taborder("7");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "0", "29", "32", "0", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("16");
            obj.set_text("전자계약서 조회");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_view", "absolute", "17", "390", "100", "29", null, null, this);
            obj.set_taborder("17");
            obj.set_text("계약서 보기");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 41, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 843, 437, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_cssclass("frm_WF_PopupBg");
            		p.set_titletext("전자계약서 조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("POPUP_ELT.xfdl", "lib::comLib.xjs");
        this.registerScript("POPUP_ELT.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
        	//엔터키 검색 이벤트 등록
        	var searchParam =
        	{
        		form: this, 
        		param: [{
        				edit: this.div_search.searchText, 
        				fnc: 'btn_search_onclick'
        		}]
        	};
        	this.addEventEnterSearch(searchParam);
        	this.grd_elt.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));

        	var toDay = this.gfn_today("yyyyMMdd");
        	this.chkDay = this.gfn_minusMonth(toDay, 1);

        	this.div_search.cal_from.set_value(this.chkDay);
        	this.div_search.cal_to.set_value(toDay);
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.btn_ok_onclick = function(obj,e)
        {
        	if (this.ds_elt.rowposition < 0) {
        		this.alert("선택한 전자계약서가 없습니다");
        		return;
        	}
        	var eltCtrwNo = this.ds_elt.getColumn(this.ds_elt.rowposition, "ELT_CTRW_NO");
        	var chgSqno = this.ds_elt.getColumn(this.ds_elt.rowposition, "CHG_SQNO");
        	var ctrwKdNm = this.ds_elt.getColumn(this.ds_elt.rowposition, "MN_CTRW_KD_NM");
        	this.close(eltCtrwNo + "#" + chgSqno + "#" + ctrwKdNm);
        }

        this.btn_search_onclick = function(obj,e)
        {
        	this.ds_elt.clearData();

        	var searchType = this.gfn_nullToEmpty(this.div_search.searchType.value); //검색조건
        	var searchText = this.gfn_nullToEmpty(this.div_search.searchText.value); //검색어
        	var calCont = this.gfn_nullToEmpty(this.div_search.cbo_contDay.value); //날짜 조건
        	var calFrom = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        	var calTo = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일
        	var sts = this.gfn_nullToEmpty(this.parent.sts); // 전자계약 상태
        	var buyerCd = this.gfn_nullToEmpty(this.parent.buyerCd); // 계약서 구분

        	var param = "search_type='" + searchType + "'"
        		+ " search_text='" + searchText + "'"
        		+ " cal_cont=" + calCont
        		+ " cal_from=" + calFrom
        		+ " cal_to=" + calTo
        		+ " sts=" + sts
        		+ " buyer_cd=" + buyerCd
        	;

        	var sSvcID        = "search"; //통신아이디
        	var sURL          = "svc::rest/ct/eltctrw/retrievePopupEltCtrwList"; // 호출할 서버 페이지 주소
        	var sInDatasets   = ""; //보내는데이터셋
        	var sOutDatasets  = "ds_elt=ds_elt";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param; // 파라미터
        	var sCallbackFunc = "fn_callBack"; //콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets , sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", ErrorMsg);
        		return;
        	} else {
        		if (svcID == "search") {
        			// 계약서 종류에 따른 필터링
        			if (this.parent.filter == "192") {
        				this.ds_elt.filter("MN_CTRW_KD == '21'");
        			} else if (this.parent.filter == "194") {
        				this.ds_elt.filter("MN_CTRW_KD == '23'");
        			} else if (this.parent.filter == "195") {
        				this.ds_elt.filter("MN_CTRW_KD == '41'");
        			} else if (this.parent.filter == "196") {
        				this.ds_elt.filter("MN_CTRW_KD == '43'");
        			} else if (this.parent.filter == "197") {
        				this.ds_elt.filter("MN_CTRW_KD == '44'");
        			} else if (this.parent.filter == "198") {
        				this.ds_elt.filter("MN_CTRW_KD == '45'");
        			}
        			
        			if (this.ds_elt.rowcount > 0) {
        				this.grd_elt.selectRow(0);
        				this.btn_view.set_enable(true);
        			} else {
        				this.btn_view.set_enable(false);
        			}
        		}
        	}
        }

        this.grd_buyer_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.btn_ok_onclick();
        	}
        }

        this.grd_elt_oncellclick = function(obj,e)
        {
        	this.btn_ok_onclick();
        }

        this.btn_view_onclick = function(obj,e)
        {	
        	var mnCtrwKd = this.gfn_nullToEmpty(this.ds_elt.getColumn(this.ds_elt.rowposition, "MN_CTRW_KD"));
        	var eltCtrwNo = this.gfn_nullToEmpty(this.ds_elt.getColumn(this.ds_elt.rowposition, "ELT_CTRW_NO"));
        	var chgSqNo = this.gfn_nullToEmpty(this.ds_elt.getColumn(this.ds_elt.rowposition, "CHG_SQNO"));
        	
        	// comEsum.xjs
        	this.eltOzViewer(mnCtrwKd, eltCtrwNo, chgSqNo); // type, eltCtrwNo, chgSqNo
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.grd_elt.addEventHandler("onkeydown", this.grd_buyer_onkeydown, this);
            this.grd_elt.addEventHandler("oncelldblclick", this.grd_elt_oncellclick, this);
            this.btn_ok.addEventHandler("onclick", this.btn_ok_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_view.addEventHandler("onclick", this.btn_view_onclick, this);

        };

        this.loadIncludeScript("POPUP_ELT.xfdl", true);

       
    };
}
)();
