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
                this.set_name("pattern_01");
                this.set_titletext("sms전송결과");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_condition", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STARTDT\" type=\"STRING\" size=\"256\"/><Column id=\"ENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"NTS_TMS_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_KD\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"MPNO1\" type=\"STRING\" size=\"256\"/><Column id=\"MPNO2\" type=\"STRING\" size=\"256\"/><Column id=\"MPNO3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"STARTDT\"/><Col id=\"ENDDT\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_combo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SIMP_CNM\">전체</Col></Row><Row><Col id=\"SIMP_C\">0</Col><Col id=\"SIMP_CNM\">접수</Col></Row><Row><Col id=\"SIMP_C\">1</Col><Col id=\"SIMP_CNM\">처리시작</Col></Row><Row><Col id=\"SIMP_C\">2</Col><Col id=\"SIMP_CNM\">전송중</Col></Row><Row><Col id=\"SIMP_C\">3</Col><Col id=\"SIMP_CNM\">발송완료</Col></Row><Row><Col id=\"SIMP_C\">-1</Col><Col id=\"SIMP_CNM\">실패</Col></Row></Rows>");
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

            obj = new Dataset("ds_sms", this);
            obj._setContents("<ColumnInfo><Column id=\"MSG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SMS_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"CALLBACK\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USR_MPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "69", "15", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Searchbg");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "127", "21", null, null, this.div_search);
            obj.set_taborder("0");
            obj.set_text("전송일자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "36", "103", "21", null, null, this.div_search);
            obj.set_taborder("1");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "463", "36", "79", "21", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("조회건수");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_start", "absolute", "126", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20150504");
            obj = new Static("Static06", "absolute", "232", "10", "12", "21", null, null, this.div_search);
            obj.set_taborder("14");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_end", "absolute", "247", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20150716");
            obj = new Combo("cbo_num", "absolute", "550", "36", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_num_innerdataset = new Dataset("cbo_num_innerdataset", this.div_search.cbo_num);
            cbo_num_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row><Row><Col id=\"codecolumn\">150</Col><Col id=\"datacolumn\">150</Col></Row><Row><Col id=\"codecolumn\">200</Col><Col id=\"datacolumn\">200</Col></Row><Row><Col id=\"codecolumn\">250</Col><Col id=\"datacolumn\">250</Col></Row><Row><Col id=\"codecolumn\">300</Col><Col id=\"datacolumn\">300</Col></Row></Rows>");
            obj.set_innerdataset(cbo_num_innerdataset);
            obj.set_taborder("17");
            obj.set_text("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("3");
            obj.set_index("0");
            obj = new Static("Static02", "absolute", "463", "10", "94", "21", null, null, this.div_search);
            obj.set_taborder("21");
            obj.set_text("전송결과");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_stat", "absolute", "550", "10", "129", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_innerdataset("@ds_combo");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_index("0");
            obj = new Combo("cbo_mpno", "absolute", "126", "36", "51", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_mpno_innerdataset = new Dataset("cbo_mpno_innerdataset", this.div_search.cbo_mpno);
            cbo_mpno_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">010</Col><Col id=\"datacolumn\">010</Col></Row><Row><Col id=\"codecolumn\">011</Col><Col id=\"datacolumn\">011</Col></Row></Rows>");
            obj.set_innerdataset(cbo_mpno_innerdataset);
            obj.set_taborder("23");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_text("선택");
            obj.set_index("0");
            obj = new Static("Static31", "absolute", "238", "36", "9", "21", null, null, this.div_search);
            obj.set_taborder("24");
            obj.set_text("-");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static33", "absolute", "179", "36", "9", "21", null, null, this.div_search);
            obj.set_taborder("25");
            obj.set_text("-");
            this.div_search.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit04", "absolute", "188", "36", "48", "21", null, null, this.div_search);
            obj.set_taborder("26");
            obj.set_value("1234");
            obj.set_autoskip("true");
            obj.set_mask("####");
            obj.set_limitbymask("integer");
            this.div_search.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit05", "absolute", "247", "36", "48", "21", null, null, this.div_search);
            obj.set_taborder("27");
            obj.set_value("1234");
            obj.set_mask("####");
            obj.set_limitbymask("integer");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_grd", "absolute", "0", "97", null, null, "15", "0", this);
            obj.set_taborder("39");
            this.addChild(obj.name, obj);
            obj = new Button("btn_flag", "absolute", "329", "0", null, "12", "332", null, this.div_grd);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_grd.addChild(obj.name, obj);
            obj = new Grid("grd_sms", "absolute", "0", "42", null, null, "0", "29", this.div_grd);
            obj.set_taborder("1");
            obj.set_binddataset("ds_sms");
            obj.set_autofittype("col");
            obj.set_enable("true");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"592\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"전송일자\"/><Cell col=\"2\" text=\"수신자번호\"/><Cell col=\"3\" text=\"전송내용\"/><Cell col=\"4\" text=\"전송상태\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:SEND_DATE\"/><Cell col=\"2\" displaytype=\"normal\" text=\"bind:USR_MPNO\" mask=\"###-####-####\" maskchar=\" \"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:SMS_MSG\" tooltiptext=\"bind:SMS_MSG\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:SEND_STATUS\" combodataset=\"ds_combo\" combocodecol=\"SIMP_C\" combodatacol=\"SIMP_CNM\"/></Band></Format></Formats>");
            this.div_grd.addChild(obj.name, obj);
            obj = new Button("btn_excel", "absolute", null, "16", "89", "21", "0", null, this.div_grd);
            obj.set_taborder("4");
            obj.set_text("엑셀다운로드");
            obj.set_visible("false");
            this.div_grd.addChild(obj.name, obj);
            obj = new Div("div_paging", "absolute", "225", null, "338", "29", null, "0", this.div_grd);
            obj.set_taborder("6");
            obj.set_text("Div03");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_grd.addChild(obj.name, obj);
            obj = new Static("st_cnt", "absolute", "0", "19", "460", "21", null, null, this.div_grd);
            obj.set_taborder("11");
            obj.set_text("[ 총 건수 : 0   SMS 성공건수 : 0   SMS 실패건수 : 0 ]");
            obj.set_visible("false");
            this.div_grd.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", null, "1", "15", "491", "0", null, this);
            obj.set_taborder("22");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("44");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcelM", "absolute", "520", "117", null, "20", "230", null, this);
            obj.set_taborder("49");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 69, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WFSA_Searchbg");
            		p.set_scrollbars("none");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 788, 367, this.div_grd,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("39");

            	}
            );
            this.div_grd.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("sms전송결과");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_search.cal_start","value","ds_condition","STARTDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_search.cal_end","value","ds_condition","ENDDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","div_search.cbo_stat","value","ds_condition","SEND_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_search.cbo_mpno","value","ds_condition","MPNO1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_search.MaskEdit04","value","ds_condition","MPNO2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_search.MaskEdit05","value","ds_condition","MPNO3");
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
        this.addIncludeScript("OMG_MG_TX_1030.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("OMG_MG_TX_1030.xfdl", "lib::comTSToolKit.xjs");
        this.registerScript("OMG_MG_TX_1030.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";
        //include "lib::comTSToolKit.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        this.flag = true;
        this.enter = false;
        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	this.div_grd.grd_sms.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	
        	this.div_search.cbo_mpno.set_index(0);
        	this.div_search.cbo_stat.set_index(0);
        	this.div_search.cbo_num.set_index(0);
        	this.div_search.cbo_stat.set_index(0);
            
        	this.div_search.cal_start.set_value(this.gfn_firstDate(this.gfn_today("yyyyMMdd")));
            this.div_search.cal_end.set_value(this.gfn_today("yyyyMMdd"));
            
            this.btn_search.click();
        }
        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_retrieveTaxSmsResult = function()
        {
        	if(this.fn_chkDatePeriod())
        	{
        		var sSvcID        = "retrieveTaxSmsResult";
        		var sURL          = "svc::rest/tx/retrieveTaxSmsResult";
        		var sInDatasets   = "ds_condition=ds_condition ds_pageVO=ds_pageVO";
        		var sOutDatasets  = "ds_sms=ds_sms ds_pageVO=ds_pageVO";	
        		var sArgument     = "";
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0) //에러
         	{
        		trace(">>>>>>>>>>>>>>> svcID ::" +  svcID + ",  ErrorCode :: " + ErrorCode + ",  ErrorMsg :: " + ErrorMsg);
         	}
         	else 
         	{
        		switch(svcID)
        		{
        			case "retrieveTaxSmsResult":
        				//this.div_grd.st_cnt.set_text("[ 총 건수 :  " +this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT")+ "  SMS 성공건수 : "+ this.ds_sms.getCaseCount("SEND_STATUS=='3'")+"  SMS 실패건수 : "+ this.ds_sms.getCaseCount("SEND_STATUS!='3'")+" ]");
        				if(this.ds_sms.rowcount > 0)
        				{ 
        					var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        					var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        								
        					this.div_grd.div_paging.fn_pageSet(sTotal, sPagesize,"grd_sms,div_paging",lsNowPage);	
        									  
        				}
        				else if(this.ds_sms.rowcount == 0)
        				{
        					this.div_grd.div_paging.fn_pageSet(0, 0,"grd_sms,div_paging",lsNowPage);//페이징 설정			
        				}
        				break;
        		}
         	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.common_onclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_search":	
        			this.fn_search();
        			break;
        			
        		case "btn_excel": 
        			if(this.ds_sms.rowcount < 1)
        			{
        				alert("조회내용이 없습니다.");
        				return;
        			}
        			
        			var params = "STARTDT="+ this.gfn_nullToEmpty(this.ds_condition.getColumn(0,"STARTDT"))
        					   + "&ENDDT=" + this.gfn_nullToEmpty(this.ds_condition.getColumn(0,"ENDDT"))
        			           + "&DT_TYPE=" + this.gfn_nullToEmpty(this.ds_condition.getColumn(0,"DT_TYPE"))
        			           + "&NA_BZPLC=" + this.gfn_nullToEmpty(this.ds_condition.getColumn(0,"NA_BZPLC"))
        			           + "&NA_TRPL_C=" + this.gfn_nullToEmpty(this.ds_condition.getColumn(0,"NA_TRPL_C")) 
        			           + "&TXBIL_STSC=" +  this.gfn_nullToEmpty(this.ds_condition.getColumn(0,"TXBIL_STSC"))
        			           + "&NTS_TMS_SQNO=" +  this.gfn_nullToEmpty(this.ds_condition.getColumn(0,"NTS_TMS_SQNO"))
        			           + "&TXBIL_KD=" +  this.gfn_nullToEmpty(this.ds_condition.getColumn(0,"TXBIL_KD"));
        			           
        			this.web_downExcelM.set_url(application.gv_server_url+"rest/excel/tx/retrieveSlTxbilListExcel?"+params);
        			break;
        	}
        }

        this.btn_flag_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_grd);
        }

        this.Calendar_onkeydown = function(obj,e)
        {
        	if(e.keycode == '13')
        	{
        		this.enter = true;
        	}
        }

        this.Calendar_onchanged = function(obj,e)
        {
        	if(this.enter)
        	{
        		obj.updateToDataset();
        		this.btn_search.click();
        	}
        	this.enter = false;
        }

        this.common_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		obj.updateToDataset();
        		this.btn_search.click();
        	}
        }
        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_chkDatePeriod = function() 
        {
        	if(this.div_search.cal_start.value > this.div_search.cal_end.value)
        	{
        		alert("조회기간을 확인하여 주십시오.");
        		return false;
        	}
        	return true;
        }

        

        /************************************************************************************************
         * 페이징처리
        ************************************************************************************************/
        this.fn_search = function()
        {
        	this.fn_paging(1);// 처음조회시 1페이지를 조회한다.
        }

        this.fn_paging = function(vPageNum)
        { 	  	 
        	this.ds_pageVO.clearData();  
        	this.ds_sms.clearData();     //Grid에 Binding된 Dataset명
        	
        	this.ds_pageVO.addRow(); 
        	
        	var vPageSize   = this.div_search.cbo_num.value; 	//Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        	var vTotalCount = 0; 	//전체건수. 화면조회후 리턴받아 사용
        	
         	this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
         	this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);	 
        	 
        	var argumentObj = "";
        		
        	lsNowPage = vPageNum;//현재페이지 설정 
        	
        	this.fn_retrieveTaxSmsResult();
         
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.cal_start.addEventHandler("onkeydown", this.Calendar_onkeydown, this);
            this.div_search.cal_start.addEventHandler("onchanged", this.Calendar_onchanged, this);
            this.div_search.cal_end.addEventHandler("onkeydown", this.Calendar_onkeydown, this);
            this.div_search.cal_end.addEventHandler("onchanged", this.Calendar_onchanged, this);
            this.div_search.cbo_stat.addEventHandler("onitemchanged", this.div_search_cbo_stat_onitemchanged, this);
            this.div_search.cbo_mpno.addEventHandler("onkeydown", this.common_onkeydown, this);
            this.div_search.MaskEdit04.addEventHandler("onkeydown", this.common_onkeydown, this);
            this.div_search.MaskEdit05.addEventHandler("onkeydown", this.common_onkeydown, this);
            this.div_grd.btn_flag.addEventHandler("onclick", this.btn_flag_onclick, this);
            this.div_grd.grd_sms.addEventHandler("onheadclick", this.div_grd_grd_sms_onheadclick, this);
            this.div_grd.btn_excel.addEventHandler("onclick", this.common_onclick, this);
            this.btn_search.addEventHandler("onclick", this.common_onclick, this);

        };

        this.loadIncludeScript("OMG_MG_TX_1030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
