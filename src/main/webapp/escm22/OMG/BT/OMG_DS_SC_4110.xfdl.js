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
                this.set_name("OMG_DS_SC_4110");
                this.set_titletext("계약상담 신청자 조회");
                this._setFormPosition(0,0,993,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BZNO\" type=\"STRING\" size=\"256\" sumtext=\"사업자 번호\"/><Column id=\"CHRRNM\" type=\"STRING\" size=\"256\" sumtext=\"이름\"/><Column id=\"CHRR_MPNO\" type=\"STRING\" size=\"256\" sumtext=\"신청자 핸드폰\"/><Column id=\"RQ_DT\" type=\"STRING\" size=\"256\" sumtext=\"신청일자\"/><Column id=\"MAJ_LATC\" type=\"STRING\" size=\"256\" sumtext=\"주요품목\"/><Column id=\"CONM\" type=\"STRING\" size=\"256\" sumtext=\"업체명\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "94", "15", null, this);
            obj.set_taborder("73");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("38");
            obj.set_text("신청일자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "62", "79", "21", null, null, this.div_search);
            obj.set_taborder("39");
            obj.set_text("신청회사");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "15", "36", "79", "21", null, null, this.div_search);
            obj.set_taborder("46");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_comp", "absolute", "94", "62", "211", "21", null, null, this.div_search);
            obj.set_taborder("4");
            obj.set_inputfilter("symbol");
            obj.set_inputtype("full,digit,alpha");
            obj.set_maxlength("100");
            obj.set_password("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static131", "absolute", "195", "10", "10", "21", null, null, this.div_search);
            obj.set_taborder("50");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "94", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("cal_to", "absolute", "205", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static02", "absolute", "238", "31", "30", "5", null, null, this.div_search);
            obj.set_taborder("54");
            obj.set_visible("false");
            obj.style.set_background("#0000ff33");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_chrrnm", "absolute", "94", "36", "211", "21", null, null, this.div_search);
            obj.set_taborder("2");
            obj.set_inputfilter("symbol");
            obj.set_inputtype("full,digit,alpha");
            obj.set_maxlength("100");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "372", "62", "100", "21", null, null, this.div_search);
            obj.set_taborder("56");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_bzno", "absolute", "491", "62", "211", "21", null, null, this.div_search);
            obj.set_taborder("5");
            obj.set_inputfilter("symbol");
            obj.set_inputtype("full,digit,alpha");
            obj.set_maxlength("10");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_chrrMpno", "absolute", "491", "36", "211", "21", null, null, this.div_search);
            obj.set_taborder("3");
            obj.set_inputfilter("symbol");
            obj.set_inputtype("full,digit,alpha");
            obj.set_maxlength("14");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "372", "36", "100", "21", null, null, this.div_search);
            obj.set_taborder("59");
            obj.set_text("핸드폰");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "238", "57", "30", "5", null, null, this.div_search);
            obj.set_taborder("61");
            obj.set_visible("false");
            obj.style.set_background("#0000ff33");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "238", "83", "30", "10", null, null, this.div_search);
            obj.set_taborder("62");
            obj.set_visible("false");
            obj.style.set_background("#0000ff33");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "922", "21", "56", "8", null, null, this);
            obj.set_taborder("56");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "978", "0", "15", "490", null, null, this);
            obj.set_taborder("57");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "123", null, null, "15", "0", this);
            obj.set_taborder("69");
            this.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "-93", "228", "21", null, null, this.div_list);
            obj.set_taborder("2");
            obj.set_text("상담 신청 조회");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btu_div", "absolute", "46.83%", "0", "63", "12", null, null, this.div_list);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_bzpl", "absolute", "0", "34", null, null, "0", "15", this.div_list);
            obj.set_taborder("14");
            obj.set_binddataset("ds_search");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"99\"/><Column size=\"229\"/><Column size=\"179\"/><Column size=\"115\"/><Column size=\"138\"/><Column size=\"337\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"신청자\"/><Cell col=\"1\" text=\"업체명\"/><Cell col=\"2\" text=\"사업자 번호\"/><Cell col=\"3\" text=\"신청날짜\"/><Cell col=\"4\" text=\"핸드폰\"/><Cell col=\"5\" text=\"주력품목\"/></Band><Band id=\"body\"><Cell text=\"bind:CHRRNM\"/><Cell col=\"1\" text=\"bind:CONM\"/><Cell col=\"2\" text=\"bind:BZNO\" mask=\"@@@-@@-@@@@@\"/><Cell col=\"3\" text=\"bind:RQ_DT\" mask=\"@@@@-@@-@@\"/><Cell col=\"4\" text=\"bind:CHRR_MPNO\" mask=\"@@@-@@@@-@@@@\"/><Cell col=\"5\" style=\"align:left;\" expr=\"bind:MAJ_LATC\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static47", "absolute", "0", "10", "238", "21", null, null, this.div_list);
            obj.set_taborder("15");
            obj.set_text("상담신청자조회");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_list.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "306", "28", "30", "45", null, null, this);
            obj.set_taborder("78");
            obj.style.set_background("#0000ff33");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "579", null, this);
            obj.set_taborder("79");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 94, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("73");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("69");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("계약상담 신청자 조회");

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
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_4110.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_4110.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        
        var chkDay ;
        /* Form Load */
        this.OMG_DS_SC_4110_onload = function(obj,e)
        {

        
        	this.gfn_setInitForm(obj,e);
        	
        	var toDay = this.gfn_today("yyyyMMdd");

        	chkDay = this.gfn_minusMonth(toDay, 1);

        
        	this.div_search.cal_from.set_value(chkDay);

        	this.div_search.cal_to.set_value(toDay);
        	
        	this.div_list.grd_bzpl.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));

        }

        

        
        this.fn_search =  function()
        {

        
        		chrrnm = this.gfn_nullToEmpty(this.div_search.edt_chrrnm.value);  //신청자

        		bzno = this.gfn_nullToEmpty(this.div_search.edt_bzno.value);  //사업자등록번호

        		chrrMpno = this.gfn_nullToEmpty(this.div_search.edt_chrrMpno.value);  //신청자 핸드폰번호

        		comp = this.gfn_nullToEmpty(this.div_search.edt_comp.value);  //신청회사
        		
        		cal_from = this.div_search.cal_from.value;
        	    cal_to   = this.div_search.cal_to.value;
        		
        		param = " chrrnm="+chrrnm
        		       +" bzno="+bzno
        		       +" chrrMpno="+chrrMpno
        		       +" comp="+comp
        		       +" cal_from="+cal_from
        		       +" cal_to="+cal_to
        		       ;
        		var sSvcID        = "search";//통신아이디
        		var sURL          = "svc::rest/mg/mbcslt/retrieveCtrRqCptInq";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_search=ds_search";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        

        

        

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "search"){

        			if(this.ds_search.rowcount > 0)
        			{ 
        		
        			}else if(this.ds_search.rowcount == 0){

        		//		alert("조회된 건수가 없습니다");
        				return false;
        			}
        			
        		}
        	}
        	
        }

        
        this.btu_div_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.OMG_DS_SC_4110_onkeydown = function(obj,e)
        {
        	if (e.keycode==13  ){
        		this.btn_search.click();
        	}
        }

        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_search();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.OMG_DS_SC_4110_onload, this);
            this.addEventHandler("onkeydown", this.OMG_DS_SC_4110_onkeydown, this);
            this.div_search.Static02.addEventHandler("onclick", this.Static00_onclick, this);
            this.div_search.Static06.addEventHandler("onclick", this.Static00_onclick, this);
            this.div_search.Static07.addEventHandler("onclick", this.Static00_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_list.btu_div.addEventHandler("onclick", this.btu_div_onclick, this);
            this.div_list.grd_bzpl.addEventHandler("oncellclick", this.grd_bzpl_oncellclick, this);
            this.div_list.grd_bzpl.addEventHandler("oncelldblclick", this.btn_confirm_onclick, this);
            this.Static00.addEventHandler("onclick", this.Static00_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_4110.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
