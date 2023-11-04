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
                this.set_name("VAN_DS_SC_1573");
                this.set_titletext("발주번호 상품코드 조회");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_master", this);
            obj._setContents("<ColumnInfo><Column id=\"ODR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_CTR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_CTR_TPC_N\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TRPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SPY_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_RQR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SAM\" type=\"STRING\" size=\"256\"/><Column id=\"VATTT\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"VCBX_AM\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_EDT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DDLY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NA_ODR_STS_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"RVOPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"RVOPL_NA_TRPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RVOPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"RVOPL_NA_TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CTCPL_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_STDNM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_QT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_AM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DSQNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button01", "absolute", null, "0", "37", "32", "1", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("1");
            obj.set_text("발주번호상품코드 조회");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "47", "58", "21", "17", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear00", "absolute", null, "47", "53", "21", "77", null, this);
            obj.set_taborder("3");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "17", "76", null, "69", "17", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_title00", "absolute", "15", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("33");
            obj.set_text("배송요청일");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_title00", "absolute", "491", "10", "55", "21", null, null, this.div_search);
            obj.set_taborder("34");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "16.69%", "57", null, "10", "70.27%", null, this.div_search);
            obj.set_taborder("35");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_title01", "absolute", "118", "36", "110", "21", null, null, this.div_search);
            obj.set_taborder("36");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_title02", "absolute", "231", "36", "151", "21", null, null, this.div_search);
            obj.set_taborder("37");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_title04", "absolute", "491", "36", "110", "21", null, null, this.div_search);
            obj.set_taborder("38");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title01", "absolute", "412", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("39");
            obj.set_text("전표번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "118", "10", "97", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("40");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("cal_to", "absolute", "236", "10", "97", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("41");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static00", "absolute", "221", "10", "15", "21", null, null, this.div_search);
            obj.set_taborder("42");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title02", "absolute", "15", "36", "103", "21", null, null, this.div_search);
            obj.set_taborder("43");
            obj.set_text("수주처");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title03", "absolute", "412", "36", "79", "21", null, null, this.div_search);
            obj.set_taborder("44");
            obj.set_text("상품코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "16.69%", "0", null, "10", "70.27%", null, this.div_search);
            obj.set_taborder("45");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_title03", "absolute", "643", "10", "110", "21", null, null, this.div_search);
            obj.set_taborder("46");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title04", "absolute", "576", "10", "67", "21", null, null, this.div_search);
            obj.set_taborder("47");
            obj.set_text("발주처");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "17", "185", null, "249", "17", null, this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_master");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"발주일자\"/><Cell col=\"1\" text=\"전표번호\"/><Cell col=\"2\" text=\"계약구분\"/><Cell col=\"3\" text=\"발주처코드\"/><Cell col=\"4\" text=\"발주처명\"/><Cell col=\"5\" text=\"발주처팀\"/><Cell col=\"6\" text=\"발주처팀명\"/><Cell col=\"7\" text=\"배송구분\"/><Cell col=\"8\" text=\"공급구분\"/><Cell col=\"9\" text=\"배송요청일\"/><Cell col=\"10\" text=\"발주금액\"/><Cell col=\"11\" text=\"부가세액\"/><Cell col=\"12\" text=\"공병금액\"/><Cell col=\"13\" text=\"공박스금액\"/><Cell col=\"14\" text=\"납품서편집가능\"/><Cell col=\"15\" text=\"직송여부\"/><Cell col=\"16\" text=\"발주상태\"/><Cell col=\"17\" text=\"수주처코드\"/><Cell col=\"18\" text=\"수주처명\"/><Cell col=\"19\" text=\"수주처팀\"/><Cell col=\"20\" text=\"수주처팀명\"/><Cell col=\"21\" text=\"삭제여부\"/><Cell col=\"22\" text=\"상품코드\"/><Cell col=\"23\" text=\"상품명\"/><Cell col=\"24\" text=\"발주수량\"/><Cell col=\"25\" text=\"발주부가세\"/><Cell col=\"26\" text=\"발주금액\"/><Cell col=\"27\" text=\"발주일련번호\"/></Band><Band id=\"body\"><Cell text=\"bind:ODR_DT\"/><Cell col=\"1\" text=\"bind:ODR_SLPNO\"/><Cell col=\"2\" text=\"bind:CSER_CTR_TPC_N\"/><Cell col=\"3\" text=\"bind:ODRPL_NA_TRPL_C\"/><Cell col=\"4\" text=\"bind:ODRPL_NA_TRPL_NM\"/><Cell col=\"5\" text=\"bind:ODRPL_NA_TEAM_C\"/><Cell col=\"6\" text=\"bind:ODRPL_NA_TEAM_NM\"/><Cell col=\"7\" text=\"bind:DLV_TYPE\"/><Cell col=\"8\" text=\"bind:SPY_TPC\"/><Cell col=\"9\" text=\"bind:DVY_RQR_DT\"/><Cell col=\"10\" displaytype=\"number\" text=\"bind:ODR_SAM\" mask=\"#,##0\"/><Cell col=\"11\" displaytype=\"number\" text=\"bind:VATTT\" mask=\"#,##0\"/><Cell col=\"12\" displaytype=\"number\" text=\"bind:VCBT_AM\" mask=\"#,##0\"/><Cell col=\"13\" displaytype=\"number\" text=\"bind:VCBX_AM\" mask=\"#,##0\"/><Cell col=\"14\" text=\"bind:DLV_EDT_YN\"/><Cell col=\"15\" text=\"bind:DDLY_YN\"/><Cell col=\"16\" text=\"bind:NA_ODR_STS_DSC\"/><Cell col=\"17\" text=\"bind:RVOPL_NA_TRPL_C\"/><Cell col=\"18\" text=\"bind:RVOPL_NA_TRPL_NM\"/><Cell col=\"19\" text=\"bind:RVOPL_NA_TEAM_C\"/><Cell col=\"20\" text=\"bind:RVOPL_NA_TEAM_NM\"/><Cell col=\"21\" text=\"bind:DEL_DTM\"/><Cell col=\"22\" text=\"bind:NA_WRS_C\"/><Cell col=\"23\" text=\"bind:NA_WRS_NM\"/><Cell col=\"24\" text=\"bind:ODR_QT\"/><Cell col=\"25\" displaytype=\"number\" text=\"bind:ODR_VAT\" mask=\"#,##0\"/><Cell col=\"26\" displaytype=\"number\" text=\"bind:ODR_AM\" mask=\"#,##0\"/><Cell col=\"27\" text=\"bind:ODR_DSQNO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok", "absolute", null, "444", "54", "29", "73", null, this);
            obj.set_taborder("6");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "444", "54", "29", "17", null, this);
            obj.set_taborder("7");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "694", "434", "91", "10", null, null, this);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "694", null, "91", "17", null, "0", this);
            obj.set_taborder("9");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 69, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1573");
            		p.set_titletext("발주번호 상품코드 조회");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1573.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1573.xfdl", function() {
        //include "lib::comLib.xjs";

        var TRPL_C = this.parent.mtrpl_c;
        this.objRtnArr = new Array(11);
        var isall = this.parent.isall;

        this.form_onload = function(obj,e)
        {
           this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	var balju_d = this.parent.balju_d.replace(/-/gi,'');
        	this.div_search.edt_title03.set_value(this.parent.mbzplc_c);
        	this.div_search.edt_title04.set_value(this.parent.wrs_c);
        	this.div_search.cal_from.set_value(this.gfn_minusDate(balju_d,1));
        	this.div_search.cal_to.set_value(this.gfn_addDate(balju_d,7));
        	this.btn_search_onclick();
        }

        this.btn_clear00_onclick = function(obj,e)
        {
        	this.reload();
        }

        this.btn_ok_onclick = function(obj,e)
        {
        	this.objRtnArr[0] = this.ds_master.getColumn(this.ds_master.rowposition,"ODR_SLPNO");	//전표번호
        	this.objRtnArr[1] = this.ds_master.getColumn(this.ds_master.rowposition,"CSER_CTR_TPC");//계약유형
        	this.objRtnArr[2] = this.ds_master.getColumn(this.ds_master.rowposition,"NA_WRS_C");	//상품코드
        	this.objRtnArr[3] = this.ds_master.getColumn(this.ds_master.rowposition,"NA_WRS_NM");	//상품명
        	if (!this.gfn_isNull(this.objRtnArr[3])) {
        		this.objRtnArr[3] =  this.objRtnArr[3].replace(",", " ");
        	}
        	//this.objRtnArr[3] = (this.ds_master.getColumn(this.ds_master.rowposition,"NA_WRS_NM")).replace(","," ");	//상품명
        	this.objRtnArr[4] = this.ds_master.getColumn(this.ds_master.rowposition,"WRS_STDNM");	//상품규격
        	this.objRtnArr[5] = this.ds_master.getColumn(this.ds_master.rowposition,"ODR_QT");		//발주수량
        	this.objRtnArr[6] = this.ds_master.getColumn(this.ds_master.rowposition,"ODR_VAT");		//발주부가세
        	this.objRtnArr[7] = this.ds_master.getColumn(this.ds_master.rowposition,"ODR_AM");		//발주금액
        	this.objRtnArr[8] = this.ds_master.getColumn(this.ds_master.rowposition,"ODR_DT");		//발주일자
        	this.objRtnArr[9] = this.ds_master.getColumn(this.ds_master.rowposition,"ODR_DSQNO");		//발주일련번호
        	this.objRtnArr[10] = this.ds_master.getColumn(this.ds_master.rowposition,"CTCPL_TELNO");		//전화번호
        	
        	this.close(this.objRtnArr.toString());
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.validation = function()
        {
        	if(this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) < 0){
        		this.gfn_getMessage('alert','validation.message.fromDate.toDate.reConfirm');
        		return false;
        	}
        	return true;
        }

        this.btn_search_onclick = function(obj,e)
        {
        	if(!this.validation()){
        		return;
        	}
        	
        	var params = "TRPL_C="+TRPL_C
        				+" isall="+isall	
        				+" rqr_dt_from="+this.div_search.cal_from.value 						//배송예정일 from
        				+" rqr_dt_to="+this.div_search.cal_to.value								//배송예정일 to
        				+" odr_slpno="+this.gfn_nullToEmpty(this.div_search.edt_title00.value)	//전표번호
        				+" odr_trpl_c="+this.gfn_nullToEmpty(this.div_search.edt_title03.value)	//발주처
        				+" rvopl_trpl_c="+this.gfn_nullToEmpty(this.div_search.edt_title01.value)	//수주처
        				+" wrs_c="+this.gfn_nullToEmpty(this.div_search.edt_title04.value)		//상품코드
        	;
        	var sSvcID        = "odr_search";//통신아이디
        	var sURL          = "svc::rest/pds/pricat/getWRSCodeForShortageOrder";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_master=DATASET";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.fn_callback = function(svcID,nCD,sMSG)
        {
        	if(nCD < 0){
        		this.alert(sMSG);
        		return;
        	}else{
        	
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Button01.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_clear00.addEventHandler("onclick", this.btn_clear00_onclick, this);
            this.Grid00.addEventHandler("oncellclick", this.btn_ok_onclick, this);
            this.btn_ok.addEventHandler("onclick", this.btn_ok_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1573.xfdl");

       
    };
}
)();
