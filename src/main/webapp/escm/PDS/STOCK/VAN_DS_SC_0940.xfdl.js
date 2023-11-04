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
                this.set_name("frm_van_ds_sc_0940");
                this.set_titletext("자료수신");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static21", "absolute", "0", "85", "110", "29", null, null, this);
            obj.set_taborder("0");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "109", "85", null, "29", "15", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "788", "0", "15", "181", null, null, this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "0", "21", "871", "40", null, null, this);
            obj.set_taborder("4");
            obj.set_text("40");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("5");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "56", null, this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_by_dt_fr", "absolute", "118", "89", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Calendar("cal_by_dt_to", "absolute", "228", "89", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_visible("false");

            obj = new Static("Static04", "absolute", "218", "89", "10", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_text("~");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "-1", "81", "871", "5", null, null, this);
            obj.set_taborder("11");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "5", "61", "301", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_text("일일자료");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_part01", "absolute", "82", "61", "120", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_value("false");
            obj.set_cssclass("chk_WF_Essential");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "569", "164", "64", "35", null, null, this);
            obj.set_taborder("34");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "15", null, this);
            obj.set_taborder("35");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("자료수신");

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
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0940.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0940.xfdl", function() {
        /*##################################################################################
         화면명	: 자료수신
         화면ID  	: VAN_DS_SC_0940
         작성자 	: hroh
        ####################################################################################*/
        //include "lib::comLib.xjs";

        var fromDate;
        var toDate;
        /* Form Load */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);
        }

        
        /* Form Init*/
        this.fn_afterFormOnload = function() //onload
        {	
        	
        	///페이지 로딩후 실행부분
        	
        	var toDay = this.gfn_today("yyyyMMdd");
        	this.cal_by_dt_fr.set_value(this.gfn_minusDate(this.gfn_today("yyyyMMdd"),1));
        	//this.cal_by_dt_to.set_value(this.gfn_minusDate(this.gfn_today("yyyyMMdd"),1));
        	
        	
        }

        /* Validation Check */
        this.fn_validationCheck = function(){
        	
        	/*	
        	if(this.chk_part01.isChecked() == false){
        		this.alert("일일자료를 선택해 주세요");
        		return false;
        	}
        	*/
        	
        	if(this.gfn_nullToEmpty(this.cal_by_dt_fr.value) == ''){
        		this.gfn_getMessage("alert", "validation.message.fromDate.no.data");
        		return false;
        	}

        	/*
        	if(this.gfn_nullToEmpty(this.cal_by_dt_to.value) == ''){
        		this.gfn_getMessage("alert", "validation.message.toDate.no.data");
        		return false;
        	}
        	
        	if(this.gfn_getDiffDay(this.cal_by_dt_fr.value,this.cal_by_dt_to.value) < 0){
        		this.gfn_getMessage("alert", "validation.message.fromDate.toDate.reConfirm");
        		return false;
        	}	
        	
        	if(this.gfn_getDiffDay(this.cal_by_dt_fr.value,this.cal_by_dt_to.value) > 1){

        		//기간을 31일 이내로 선택해 주세요
        		//this.gfn_getMessage("alert", "validation.message.selectDateIn31Day");
        		this.alert("조회 기간을 1일 이내로 선택해주세요.");
        		return false;
        	}
        	*/
        	
        	return true;
        }

        
        /* Search */

        /* Print */ 

        /* Excel */
        this.fn_exceldown = function(){	
        	
        	//권한사업장
        	var trplC = this.getTrplCode();
        	
        	//var fileName = "자료수신_엑셀.xls";//엑셀 파일 이름
        	
        	var title = '재고정보_'+this.parent.sNm;
        	title = title.replace(/ /gi, '');
        	var fileName = title + "_" + this.getDate() + ".xls";
        	
        	fromDate = this.gfn_nullToEmpty(this.cal_by_dt_fr.value); //조회시작일
        	//toDate = this.gfn_nullToEmpty(this.cal_by_dt_to.value);	 //조회종료일
        	toDate = this.gfn_nullToEmpty(this.cal_by_dt_fr.value);
        	
        	var params =  "TRPL_C=" + trplC
        				+ "&FROM_DATE=" + fromDate
        				+ "&TO_DATE=" + toDate
        				+ "&fileName=" + fileName;
        					
        	trace(">>>>>>> params : " +  params);
        	
        	params = encodeURI(encodeURI(params));
        	
        	//this.web_downExcel.set_url(application.gv_server_url+"rest/excel/downloadExcelStock?"+params);
        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelStock?"+params, this);
        }

        /* Event */
        this.btn_excel_onclick = function(obj,e)
        {
        	if(this.fn_validationCheck()){
        		this.fn_exceldown();
        	}
        }

        this.chk_onclick = function(obj,e)
        {
        	/*
        	if(obj.name == 'chk_part01'){
        		this.chk_part02.set_value(false);
        		this.chk_part03.set_value(false);
        	}
        	
        	if(obj.name == 'chk_part02'){
        		this.chk_part01.set_value(false);
        		this.chk_part03.set_value(false);
        	}
        	
        	if(obj.name == 'chk_part03'){
        		this.chk_part01.set_value(false);
        		this.chk_part02.set_value(false);
        	}
        	*/
        }

        
        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "downloadStoreSumCSV"){
        			if(this.ds_dataM.rowcount == 0){
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.form_init, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.chk_part01.addEventHandler("onclick", this.chk_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0940.xfdl");
        this.loadPreloadList();
       
    };
}
)();
