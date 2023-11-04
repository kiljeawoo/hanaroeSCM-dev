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
                this.set_name("VAN_DS_SC_1571");
                this.set_titletext("결품등록내역 정보 조회");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pop_master", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLCNM\" type=\"STRING\" size=\"256\"/><Column id=\"APL_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NA_SPYPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPYCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRCNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_clear00", "absolute", null, "47", "53", "21", "77", null, this);
            obj.set_taborder("0");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00", "absolute", null, "47", "58", "21", "17", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok", "absolute", null, "444", "54", "29", "73", null, this);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "444", "54", "29", "17", null, this);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "694", null, "91", "17", null, "0", this);
            obj.set_taborder("4");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "694", "434", "91", "10", null, null, this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "17", "76", null, "69", "17", null, this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_title00", "absolute", "15", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_text("등록일");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_title00", "absolute", "467", "10", "55", "21", null, null, this.div_search);
            obj.set_taborder("20");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "16.69%", "57", null, "10", "70.27%", null, this.div_search);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_title01", "absolute", "94", "36", "110", "21", null, null, this.div_search);
            obj.set_taborder("22");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_title02", "absolute", "207", "36", "151", "21", null, null, this.div_search);
            obj.set_taborder("23");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_title03", "absolute", "467", "36", "110", "21", null, null, this.div_search);
            obj.set_taborder("25");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title01", "absolute", "388", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("26");
            obj.set_text("전표번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "94", "10", "97", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("27");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj = new Calendar("cal_to", "absolute", "212", "10", "97", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("28");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj = new Static("Static00", "absolute", "197", "10", "15", "21", null, null, this.div_search);
            obj.set_taborder("29");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title02", "absolute", "15", "36", "79", "21", null, null, this.div_search);
            obj.set_taborder("30");
            obj.set_text("수주처");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title03", "absolute", "388", "36", "79", "21", null, null, this.div_search);
            obj.set_taborder("31");
            obj.set_text("발주처");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "16.69%", "0", null, "10", "70.27%", null, this.div_search);
            obj.set_taborder("32");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("grd_pop_master", "absolute", "17", "185", null, "249", "17", null, this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_pop_master");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"거래처코드\"/><Cell col=\"1\" text=\"거래처명\"/><Cell col=\"2\" text=\"등록일자\"/><Cell col=\"3\" text=\"물류센터코드\"/><Cell col=\"4\" text=\"물류센터명\"/><Cell col=\"5\" text=\"발주일자\"/><Cell col=\"6\" text=\"발주전표번호\"/><Cell col=\"7\" text=\"등록건수\"/></Band><Band id=\"body\"><Cell text=\"bind:NA_BZPLC\"/><Cell col=\"1\" text=\"bind:BZPLCNM\"/><Cell col=\"2\" text=\"bind:APL_DT\"/><Cell col=\"3\" text=\"bind:NA_SPYPL_C\"/><Cell col=\"4\" text=\"bind:CLNTNM\"/><Cell col=\"5\" text=\"bind:ODR_DT\"/><Cell col=\"6\" text=\"bind:ODR_SLPNO\"/><Cell col=\"7\" text=\"bind:SPYCOUNT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", null, "32", "50", "15", "17", null, this);
            obj.set_taborder("8");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "710", "145", "76", "40", null, null, this);
            obj.set_taborder("9");
            obj.set_text("40");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("10");
            obj.set_text("결품등록내역 정보 조회");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", null, "0", "37", "32", "1", null, this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 69, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1571");
            		p.set_titletext("결품등록내역 정보 조회");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1571.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1571.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.objRtnArr = new Array(5);

        this.form_onload = function(obj,e)
        {
           this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	this.div_search.cal_from.set_value(this.gfn_minusDate(this.gfn_today('yyyyMMdd'),5));
        	this.div_search.cal_to.set_value(this.gfn_today('yyyyMMdd'));
        	this.div_search.edt_title03.set_value(this.parent.mbzplc_c);
        	this.div_search.cal_from.set_value(this.gfn_minusDate(this.parent.apldate.replace(/-/gi,''),4));
        	this.div_search.cal_to.set_value(this.gfn_addDate(this.parent.apldate.replace(/-/gi,''),1));
        	this.grd_pop_master.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        }

        this.validation = function()
        {
        	if(this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) < 0){
        		this.gfn_getMessage('alert','validation.message.fromDate.toDate.reConfirm');
        		return false;
        	}
        	return true;
        }

        
        this.btn_search00_onclick = function(obj,e)
        {

        	var params = "TRPL_C="+this.parent.trpl_c
        				+" apl_date="+this.parent.apldate
        				+" from_date="+this.div_search.cal_from.value
        				+" to_date="+this.div_search.cal_to.value
        				+" odr_slpno="+this.gfn_nullToEmpty(this.div_search.edt_title00.value)
        				+" rvopl_trpl_c="+this.gfn_nullToEmpty(this.div_search.edt_title01.value)
        				+" odrpl_trpl_c="+this.gfn_nullToEmpty(this.div_search.edt_title03.value)
        	;
        	
        	var sSvcID        = "odr_search";//통신아이디
        	var sURL          = "svc::rest/pds/pricat/getShortageOrderPopup";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_pop_master=DataSet";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.fn_callback = function(svcID,nCD,sMSG)
        {
        	if(nCD < 0){
        		this.gfn_getMessage('alert',sMSG);
        		return;
        	}else{
        		if(svcID == "odr_search"){
        			if(this.ds_pop_master.rowcount < 1){
        				this.grd_pop_master.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        			}
        		}
        	}
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.btn_ok_onclick = function(obj,e)
        {
        	var rowp = this.ds_pop_master.rowposition;
        	this.objRtnArr[0] = this.ds_pop_master.getColumn(rowp,"APL_DT");
        	this.objRtnArr[1] = this.ds_pop_master.getColumn(rowp,"ODR_SLPNO");
        	this.close(this.objRtnArr.toString());
        }

        this.grd_pop_master_oncellclick = function(obj,e)
        {
        	this.btn_ok_onclick();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_clear00.addEventHandler("onclick", this.btn_clear00_onclick, this);
            this.btn_search00.addEventHandler("onclick", this.btn_search00_onclick, this);
            this.btn_ok.addEventHandler("onclick", this.btn_ok_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.grd_pop_master.addEventHandler("oncellclick", this.grd_pop_master_oncellclick, this);
            this.Button01.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1571.xfdl", true);

       
    };
}
)();
