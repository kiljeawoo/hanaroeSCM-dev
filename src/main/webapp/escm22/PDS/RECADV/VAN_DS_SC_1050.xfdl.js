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
                this.set_name("VAN_DS_SC_1050");
                this.set_titletext("납품자료수신");
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

            obj = new Static("Static01", "absolute", "6", "61", "301", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_text("기간집계");
            obj.set_cssclass("sta_WF_Subtitle");
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

            obj = new Div("div_auth", "absolute", null, "0", "379", "21", "52", null, this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_fr00", "absolute", "114", "89", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Calendar("cal_to00", "absolute", "224", "89", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static04", "absolute", "215", "89", "10", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_chk00", "absolute", "461", "90", "319", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_chk00_innerdataset = new Dataset("rdo_chk00_innerdataset", this.rdo_chk00);
            rdo_chk00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">사업장별/상품별</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">상품별/사업장별</Col></Row></Rows>");
            obj.set_innerdataset(rdo_chk00_innerdataset);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");

            obj = new Static("Static03", "absolute", "-1", "81", "871", "5", null, null, this);
            obj.set_taborder("11");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "344", "85", "110", "29", null, null, this);
            obj.set_taborder("12");
            obj.set_text("선      택");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "-1", "112", "871", "40", null, null, this);
            obj.set_taborder("13");
            obj.set_text("40");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "0", "176", "110", "29", null, null, this);
            obj.set_taborder("14");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "109", "176", null, "29", "15", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "6", "151", "301", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("일별집계");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_fr01", "absolute", "114", "180", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Calendar("cal_to01", "absolute", "224", "180", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static11", "absolute", "215", "180", "10", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_chk01", "absolute", "461", "181", "308", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_chk01_innerdataset = new Dataset("rdo_chk01_innerdataset", this.rdo_chk01);
            rdo_chk01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">사업장별/상품별</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">상품별/사업장별</Col></Row></Rows>");
            obj.set_innerdataset(rdo_chk01_innerdataset);
            obj.set_taborder("21");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");

            obj = new Static("Static13", "absolute", "-1", "172", "871", "5", null, null, this);
            obj.set_taborder("22");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "345", "176", "110", "29", null, null, this);
            obj.set_taborder("23");
            obj.set_text("선      택");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "-1", "203", "871", "40", null, null, this);
            obj.set_taborder("24");
            obj.set_text("40");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "0", "264", "110", "29", null, null, this);
            obj.set_taborder("25");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "109", "264", null, "29", "15", null, this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "6", "242", "301", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_text("일일자료");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_fr02", "absolute", "114", "268", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("28");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_visible("false");

            obj = new Calendar("cal_to02", "absolute", "224", "268", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("29");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_visible("false");

            obj = new Static("Static26", "absolute", "215", "268", "10", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_text("~");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "0", "260", "871", "5", null, null, this);
            obj.set_taborder("31");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "0", "291", "871", "40", null, null, this);
            obj.set_taborder("32");
            obj.set_text("40");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_part01", "absolute", "82", "62", "120", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_value("false");
            obj.set_cssclass("chk_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_part02", "absolute", "81", "151", "120", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_cssclass("chk_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_part03", "absolute", "82", "241", "120", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_cssclass("chk_WF_Essential");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "6", "344", "100", "40", null, null, this);
            obj.set_taborder("36");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "15", null, this);
            obj.set_taborder("37");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("납품자료수신");

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
        this.addIncludeScript("VAN_DS_SC_1050.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1050.xfdl", function(exports) {
        /*##################################################################################
         화면명	: 자료수신
         화면ID  	: VAN_DS_SC_1050
         작성자 	: swha
        ####################################################################################*/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        var fromDate;
        var toDate;
        /* Form Load */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);
        }

        
        /* Form Init*/
        this.fn_afterFormOnload = function()
        {	
        	
        	///페이지 로딩후 실행부분
        	/*
        	var toDay = this.gfn_today("yyyyMMdd");
        	this.div_search.cal_by_dt_fr.set_value(this.gfn_firstDate(toDay));
        	this.div_search.cal_by_dt_to.set_value(this.gfn_lastDate(toDay));
        	*/
        	var toDay = this.gfn_today("yyyyMMdd");
        	this.cal_fr00.set_value(this.gfn_firstDate(toDay));
        	this.cal_to00.set_value(this.gfn_lastDate(toDay));
        	
        	this.cal_fr01.set_value(toDay);
        	this.cal_to01.set_value(toDay);
        	
        }

        /* Validation Check */
        this.fn_validationCheck = function(){
        		
        	if(this.chk_part01.isChecked() == false && this.chk_part02.isChecked() == false && this.chk_part03.isChecked() == false){
        		this.alert("기간집계, 일별집계, 일일자료 중 하나를 선택해 주세요");
        		return false;
        	}
        	
        	if(this.chk_part01.isChecked()){
        		fromDate = this.gfn_nullToEmpty(this.cal_fr00.value);
        		toDate = this.gfn_nullToEmpty(this.cal_to00.value);
        		
        	}else if(this.chk_part02.isChecked()){
        		fromDate = this.gfn_nullToEmpty(this.cal_fr01.value);
        		toDate = this.gfn_nullToEmpty(this.cal_to01.value);
        	}else{
        		fromDate = this.gfn_nullToEmpty(this.cal_fr02.value);
        		toDate = this.gfn_nullToEmpty(this.cal_to02.value);
        	}
        	
        	if(fromDate == ''){
        		this.gfn_getMessage("alert", "validation.message.fromDate.no.data");
        		return false;
        	}

        	if(toDate == ''){
        		this.gfn_getMessage("alert", "validation.message.toDate.no.data");
        		return false;
        	}
        	
        	if(this.gfn_getDiffDay(fromDate,toDate) < 0){
        		this.gfn_getMessage("alert", "validation.message.fromData.toDate.confirm");
        		return false;
        	}
        	
        	if(this.gfn_getDiffDay(fromDate,toDate) > 62){
        		alert("기간을 62일 이내로 설정해주세요.");
        		return false;
        	}
        	
        	return true;
        }

        
        /* Search */

        /* Print */ 

        /* Excel */
        this.fn_exceldown = function(){
        	
        	var chkPart = "";//집계구분 00 : 월별집계, 01 : 일일자료
        	var chkSelect = ""; //선택 1 : 사업장별 2: 상품별
        	var excelName = "";
        	
        		
        	var chkPart = "";//집계구분 01 : 기간집계, 02 : 일별집계, 03 : 일일자료
        	var chkSelect = ""; //선택 1 : 점포별/상품별, 2 : 상품별/점포별
        	var excelName = "";
        	if(this.chk_part01.isChecked()){
        		chkPart = "01";
        		chkSelect = this.rdo_chk00.value;
        		if(chkSelect == "1"){
        			excelName = "기간집계_사업장별_상품별";
        		}else{
        			excelName = "기간집계_상품별_사업장별";
        		}
        		
        	}else if(this.chk_part02.isChecked()){
        		chkPart = "02";
        		chkSelect = this.rdo_chk01.value;
        		if(chkSelect == "1"){
        			excelName = "일별집계_사업장별_상품별";
        		}else{
        			excelName = "일별집계_상품별_사업장별";
        		}
        	}else{
        		chkPart = "03";
        	}
        	
        	var title = '납품정보_'+this.parent.sNm+excelName;
        	title = title.replace(/ /gi, '');
        	var fileName = this.getExcelFileName(title);
        	var trplC = this.getTrplCode();
        	
        	var params =  "CHK_PART=" + chkPart 
        				+ "&CHK_SELECT=" + chkSelect
        				+ "&FROM_DATE=" + fromDate
        				+ "&TO_DATE=" + toDate
        				+ "&FILE_NM=" + fileName
        				+ "&TRPL_C=" + trplC;
        					
        	//trace(">>>>>>> params : " +  params);
        	
        	
                       
           //trace(">>>>>>> params : " +  params);
              
           //this.web_downExcel.set_url(application.gv_server_url+"rest/excel/pds/downloadStoreSumCSV?"+params);
          	excelDownHandler(application.gv_server_url+"rest/excel/pds/downloadStoreSumCSV?"+params, this);	

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
        			
        		}
        	}
        }

        

        

        

        

        
        this.cal_fr00_oneditclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Static02.addEventHandler("onclick", this.Static20_onclick, this);
            this.Static14.addEventHandler("onclick", this.Static20_onclick, this);
            this.chk_part01.addEventHandler("onclick", this.chk_onclick, this);
            this.chk_part02.addEventHandler("onclick", this.chk_onclick, this);
            this.chk_part03.addEventHandler("onclick", this.chk_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1050.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
