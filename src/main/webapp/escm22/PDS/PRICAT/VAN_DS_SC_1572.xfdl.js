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
                this.set_name("VAN_DS_SC_1572");
                this.set_titletext("물류상품 정보 조회");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pop_master", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_STDNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"TRPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_UPR\" type=\"STRING\" size=\"256\"/><Column id=\"PRGR_C\" type=\"STRING\" size=\"256\"/><Column id=\"PRGRNM\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_FEERT\" type=\"STRING\" size=\"256\"/><Column id=\"AMN_FEERT\" type=\"STRING\" size=\"256\"/><Column id=\"TROT_FEERT\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_FEERT\" type=\"STRING\" size=\"256\"/><Column id=\"DDLY_PHD_FEERT\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLCNM\" type=\"STRING\" size=\"256\"/><Column id=\"DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CMENO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_clear00", "absolute", null, "47", "53", "21", "77", null, this);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00", "absolute", null, "47", "58", "21", "17", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", null, "32", "50", "15", "17", null, this);
            obj.set_taborder("4");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "17", "76", null, "43", "17", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_title00", "absolute", "15", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("11");
            obj.set_text("공급업체코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_title00", "absolute", "118", "10", "151", "21", null, null, this.div_search);
            obj.set_taborder("13");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "16.67%", "31", null, "10", "70.23%", null, this.div_search);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_title01", "absolute", "272", "10", "30", "21", null, null, this.div_search);
            obj.set_taborder("15");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_title02", "absolute", "546", "10", "151", "21", null, null, this.div_search);
            obj.set_taborder("16");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_trtwrs", "absolute", "433", "10", "110", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_trtwrs_innerdataset = new Dataset("cbo_trtwrs_innerdataset", this.div_search.cbo_trtwrs);
            cbo_trtwrs_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">물류상품코드</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">물류상품명</Col></Row></Rows>");
            obj.set_innerdataset(cbo_trtwrs_innerdataset);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj = new Edit("edt_title03", "absolute", "305", "10", "120", "21", null, null, this.div_search);
            obj.set_taborder("18");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "699", "434", "91", "10", null, null, this);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok", "absolute", null, "444", "54", "29", "73", null, this);
            obj.set_taborder("7");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "444", "54", "29", "17", null, this);
            obj.set_taborder("8");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "699", null, "91", "17", null, "0", this);
            obj.set_taborder("9");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_pop_master", "absolute", "17", "159", null, "275", "17", null, this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_pop_master");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"상품코드\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"규격\"/><Cell col=\"4\" text=\"다매가유형\"/><Cell col=\"5\" text=\"공급업체코드\"/><Cell col=\"6\" text=\"공급업체명\"/><Cell col=\"7\" text=\"원가\"/><Cell col=\"8\" text=\"업체수수료\"/><Cell col=\"9\" text=\"관리수수료\"/><Cell col=\"10\" text=\"환급수수료\"/><Cell col=\"11\" text=\"물류수수료\"/><Cell col=\"12\" text=\"물류직송수수료\"/><Cell col=\"13\" text=\"물류센터코드\"/><Cell col=\"14\" text=\"물류센터명\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:NA_WRS_C\"/><Cell col=\"2\" text=\"bind:WRSNM\"/><Cell col=\"3\" text=\"bind:WRS_STDNM\"/><Cell col=\"4\" text=\"bind:PRGRNM\"/><Cell col=\"5\" text=\"bind:SPYPL_NA_TRPL_C\"/><Cell col=\"6\" text=\"bind:TRPL_NM\"/><Cell col=\"7\" text=\"bind:BYNG_UPR\"/><Cell col=\"8\" text=\"bind:COMP_FEERT\"/><Cell col=\"9\" text=\"bind:AMN_FEERT\"/><Cell col=\"10\" text=\"bind:TROT_FEERT\"/><Cell col=\"11\" text=\"bind:PHD_FEERT\"/><Cell col=\"12\" text=\"bind:DDLY_PHD_FEERT\"/><Cell col=\"13\" text=\"bind:NA_BZPLC\"/><Cell col=\"14\" text=\"bind:BZPLCNM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "710", "119", "76", "40", null, null, this);
            obj.set_taborder("11");
            obj.set_text("40");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", null, "0", "37", "32", "1", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("13");
            obj.set_text("물류상품 정보 조회");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_auto", "absolute", "19", "46", null, "21", "670", null, this);
            obj.set_taborder("14");
            obj.set_text("0");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1572");
            		p.set_titletext("물류상품 정보 조회");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1572.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1572.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.objRtnArr = new Array(10);

        this.form_onload = function(obj,e)
        {
           this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	this.div_search.edt_title00.set_value(this.parent.mtrpl_c);
        	this.div_search.edt_title01.set_value("0");
        	this.div_search.edt_title03.set_value(this.parent.mbzplc_c);
        	this.div_search.cbo_trtwrs.set_value("2");
        	this.grd_pop_master.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	
        	if(this.parent.wrsc != undefined && this.parent.wrsc != ""){
        		this.div_search.cbo_trtwrs.set_value("1");
        		this.div_search.edt_title02.set_value(this.parent.wrsc);
        		this.sta_auto.set_text("1");
        		this.btn_search00_onclick();
        	}
        }

        //조회
        this.btn_search00_onclick = function(obj,e)
        {
        	if(this.gfn_nullToEmpty(this.div_search.edt_title02.value) == ""){
        		this.alert('조건을 입력하고 조회버튼을 클릭하세요.');
        		return;
        	}
        	if(this.div_search.cbo_trtwrs.value == "1" && this.gfn_nullToEmpty(this.div_search.edt_title02.value).length < 7){
        		this.gfn_getMessage('alert','msg.van_ds_sc_1530.view.wrsc.moredata');
        		return;
        	}
        	if(this.div_search.cbo_trtwrs.value == "2" && this.gfn_nullToEmpty(this.div_search.edt_title02.value).length < 2){
        		this.gfn_getMessage('alert','msg.van_ds_sc_1530.view.wrsnm.moredata');
        		return;
        	}
        	
        	var params = "TRPL_C="+this.parent.mtrpl_c
        				+" bzplc="+this.div_search.edt_title03.value
        				+" cbo_trt="+this.div_search.cbo_trtwrs.value
        				+" searchText="+this.gfn_nullToEmpty(this.div_search.edt_title02.value)
        	;
        	
        	var sSvcID        = "trtwrs_search";//통신아이디
        	var sURL          = "svc::rest/pds/pricat/getWRSInfoForShortage";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_pop_master=ds_pop_master";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
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
        		if(svcID == "trtwrs_search"){
        			if(this.sta_auto.text != "0"){
        				this.btn_ok_onclick();
        			}
        		}
        	}
        }

        //초기화
        this.btn_clear00_onclick = function(obj,e)
        {
        	this.reload();
        }

        this.grd_pop_master_oncellclick = function(obj,e)
        {
        	this.btn_ok_onclick();
        }

        this.btn_ok_onclick = function(obj,e)
        {
        	var rowp = this.ds_pop_master.rowposition;
        	this.objRtnArr[0] = this.ds_pop_master.getColumn(rowp,"NA_WRS_C");
        	this.objRtnArr[1] = this.ds_pop_master.getColumn(rowp,"WRSNM");
        	this.objRtnArr[2] = this.ds_pop_master.getColumn(rowp,"WRS_STDNM");
        	this.objRtnArr[3] = this.ds_pop_master.getColumn(rowp,"DTM");
        	this.objRtnArr[4] = this.ds_pop_master.getColumn(rowp,"SPYPL_NA_TRPL_C");
        	this.objRtnArr[5] = this.ds_pop_master.getColumn(rowp,"TRPL_NM");
        	this.objRtnArr[6] = this.ds_pop_master.getColumn(rowp,"LS_CMENO");
        	this.close(this.objRtnArr.toString());
        }

        //닫기
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
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

        this.loadIncludeScript("VAN_DS_SC_1572.xfdl", true);

       
    };
}
)();
