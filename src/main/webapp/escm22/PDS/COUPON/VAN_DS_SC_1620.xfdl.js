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
                this.set_name("VAN_DS_SC_1620");
                this.set_titletext("쿠폰실적 조회");
                this._setFormPosition(0,0,803,1007);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_master", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"TRPL_ABR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"DC_CPN_QT\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_DC_AM\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_detail", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"TRPL_ABR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_CPN_C\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_ABR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DC_CPN_QT\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_DC_AM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_CPN_KDC", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"13\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"13\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_menu", "absolute", "0", "0", "323", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("7");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "50", "15", null, this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "13", "13", "106", "21", null, null, this.div_search);
            obj.set_taborder("13");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("START_DT", "absolute", "98", "13", "160", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("21");
            obj.set_dateformat("yyyyMMdd");
            obj = new Static("Static03", "absolute", "519", "13", "91", "21", null, null, this.div_search);
            obj.set_taborder("35");
            obj.set_text("쿠폰종류");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static131", "absolute", "266", "13", "10", "21", null, null, this.div_search);
            obj.set_taborder("5");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("END_DT", "absolute", "279", "13", "160", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("38");
            obj.set_dateformat("yyyyMMdd");
            obj = new Combo("CPN_KDC", "absolute", "613", "13", "160", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("40");
            obj.set_innerdataset("@ds_CPN_KDC");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");

            obj = new Div("div_list", "absolute", "0", "78", null, null, "15", "11", this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Button("btn_toggle00", "absolute", "368", "0", null, "12", "357", null, this.div_list);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "27", null, "300", "0", null, this.div_list);
            obj.set_taborder("1");
            obj.set_binddataset("ds_master");
            obj.set_scrollbars("autovert");
            obj.set_nodatatext("조회된 데이터가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"206\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"사업장코드\"/><Cell col=\"2\" text=\"사업장\"/><Cell col=\"3\" text=\"발생구분\"/><Cell col=\"4\" text=\"회수량\"/><Cell col=\"5\" text=\"쿠폰할인금액\"/><Cell col=\"6\" text=\"영수증건수\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:NA_BZPLC\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:TRPL_ABR_NM\"/><Cell col=\"3\" text=\"bind:CPN_KDC\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DC_CPN_QT\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CPN_DC_AM\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CNT\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_detail", "absolute", "0", "368", null, "468", "0", null, this.div_list);
            obj.set_taborder("2");
            obj.set_binddataset("ds_detail");
            obj.set_scrollbars("autovert");
            obj.set_nodatatext("조회된 데이터가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"110\"/><Column size=\"166\"/><Column size=\"110\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"쿠폰코드\"/><Cell col=\"2\" text=\"쿠폰명\"/><Cell col=\"3\" text=\"상품코드\"/><Cell col=\"4\" text=\"상품명\"/><Cell col=\"5\" text=\"쿠폰수량\"/><Cell col=\"6\" text=\"할인금액\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:NA_CPN_C\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:CPN_WRSNM\"/><Cell col=\"3\" text=\"bind:NA_WRS_C\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:WRS_ABR_NM\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DC_CPN_QT\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CPN_DC_AM\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_detailExcel", "absolute", null, "342", "41", "21", "0", null, this.div_list);
            obj.set_taborder("6");
            obj.set_text("엑셀");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_print", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_text("출력");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "405", "803", "15", null, null, this);
            obj.set_taborder("10");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 50, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_text("Div00");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 1007, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1610");
            		p.set_titletext("쿠폰실적 조회");

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
        this.addIncludeScript("VAN_DS_SC_1620.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1620.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";
        var NA_BZPLC = "";
        this.form_onload = function(obj,e) 
        {
        	this.gfn_setInitForm(obj, e); //공통
        };

        this.fn_afterFormOnload = function() //onload
        {

        	this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        	this.div_list.grd_detail.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        	var todays = this.gfn_today('yyyyMMdd');
        	this.div_search.START_DT.set_value(todays);
        	this.div_search.END_DT.set_value(todays);
        	
        	var param = [  
        		{code:"CPN_KDC", dsName:"ds_CPN_KDC", selecttype:"S"},
        	];
        	this.gfn_setCommonCode(param);
        	
        }

        this.fn_commonAfterOnload= function()
        {
        	this.div_search.CPN_KDC.set_index(0);
        }

        this.btn_search00_onclick = function(obj,e){
        	this.ds_master.clearData();
        	if(this.fn_validationCheck()) {
        		var param = "START_DT="+this.div_search.START_DT.value
        					+" END_DT="+this.div_search.END_DT.value
        					+" CPN_KDC="+this.div_search.CPN_KDC.value;
        		var sSvcID        = "getCouponSaleResultList";//통신아이디
        		var sURL          = "svc::rest/pds/coupon/getCouponSaleResultList";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_master=DATASET";
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callback";//콜백
        		var tranType 	  = "U"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        	}
        }

        this.fn_callback = function(svcID,nCD,sMSG)
        {
        	if(nCD < 0)
        	{
        		this.gfn_getMessage("alert", sMSG);
        		return;
        	}else{
        		if(svcID == "getCouponSaleResultList"){										
        			if(this.ds_master.rowcount == 0){				
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");								
        			}			
        		} else if(svcID == "getCouponSaleResultDetailList"){										
        			if(this.ds_detail.rowcount == 0){				
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");								
        			}			
        		}	
        	}
        	
        }

        this.fn_validationCheck = function(){
        	var date1 = this.div_search.START_DT.value;
        	var date2 = this.div_search.END_DT.value;
        	
        	if(date1 != "" && date2 != ""){
        		if(this.gfn_getDiffDay(date1,date2) < 0){
        			this.alert('조회기간을 확인하십시요.');
        			return false;
        		}else{
        			if(this.gfn_getDiffDay(date1,date2) > 92){
        				this.alert('기간을  3개월 이내로 선택 하세요');
        				return false;
        			}
        		}
        	}else if(date1 != "" && date2 == ""){
        		this.alert('조회기간을 확인하십시요. ['+date1+' - '+date2+']');
        		return false;
        	}else if(date1 == "" && date2 != ""){
        		this.alert('조회기간을 확인하십시요. ['+date1+' - '+date2+']');
        		return false;
        	}
        	
        	if(this.div_search.CPN_KDC.index == 0){
        		this.alert('조회할 쿠폰종류를 선택 하세요.');	
        		return false;
        	}
        	return true;
        }

        //조회 조건 숨김 여부 이벤트
        this.div_list_btn_toggle00_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.div_list_grd_master_oncellclick = function(obj,e)
        {
        	this.ds_detail.clearData();
        	if(this.fn_validationCheck()) {
        		NA_BZPLC = this.ds_master.getColumn(e.row,"NA_BZPLC");
        		trace("NA_BZPLC="+NA_BZPLC);
        	
        		var param = "START_DT="+this.div_search.START_DT.value
        					+" END_DT="+this.div_search.END_DT.value
        					+" NA_BZPLC="+NA_BZPLC
        					+" CPN_KDC="+this.div_search.CPN_KDC.value;
        		var sSvcID        = "getCouponSaleResultDetailList";//통신아이디
        		var sURL          = "svc::rest/pds/coupon/getCouponSaleResultDetailList";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_detail=DATASET";
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callback";//콜백
        		var tranType 	  = "U"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        	}
        }

        this.div_list_btn_detailExcel_onclick = function(obj,e)
        {
        	trace("NA_BZPLC="+NA_BZPLC);
        	if(this.fn_validationCheck()) {
        		var param = "NA_BZPLC="+NA_BZPLC
        					+"&START_DT="+this.div_search.START_DT.value
        					+"&END_DT="+this.div_search.END_DT.value
        					+"&CPN_KDC="+this.div_search.CPN_KDC.value;
        		var strDownUrl = application.gv_server_url+"rest/excel/pds/coupon/getCouponSaleResultDetailList?"+param;
        		excelDownHandler(strDownUrl, this);
        		
        		//var wbs_dw     = this.gfn_createWebBorwserComponent(this);
        		//wbs_dw.set_url(strDownUrl);
        	}	
        }

        this.btn_excel_onclick = function(obj,e)
        {
        	if(this.fn_validationCheck()) {
        		var param = "START_DT="+this.div_search.START_DT.value
        					+"&END_DT="+this.div_search.END_DT.value
        					+"&CPN_KDC="+this.div_search.CPN_KDC.value;
        		var strDownUrl = application.gv_server_url+"rest/excel/pds/coupon/getCouponSaleResultList?"+param;
        		excelDownHandler(strDownUrl, this);
        	}
        }

        this.btn_print_onclick = function(obj,e)
        {
        	if(!this.fn_validationCheck()) {
        		return;
        	}
        		
        	var searchText = "[조회기간]:"+this.div_search.START_DT.value+" ~ "+this.div_search.END_DT.value;
        	
        	trace(searchText);
        	
        	var ozParam = {
        		sId: 'VAN_DS_SC_1620',
        		sUrl: '/rest/oz/pds/coupon/getCouponSaleResultList',
        		paramType: 'param',
        		sParam:{
        			TRPL_C_TEXT:searchText,
        			START_DT:this.gfn_nullToEmpty(this.div_search.START_DT.value),
        			END_DT:this.gfn_nullToEmpty(this.div_search.END_DT.value),
        			CPN_KDC:this.gfn_nullToEmpty(this.div_search.CPN_KDC.value)
        		}
        	};
        	this.ozViewer(ozParam);					
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search00_onclick, this);
            this.div_search.Static01.addEventHandler("onclick", this.div_search_Static01_onclick, this);
            this.div_search.START_DT.addEventHandler("oneditclick", this.div_search_cal_fsrg00_oneditclick, this);
            this.div_search.Static131.addEventHandler("onclick", this.div_list_Static131_onclick, this);
            this.div_list.btn_toggle00.addEventHandler("onclick", this.div_list_btn_toggle00_onclick, this);
            this.div_list.grd_master.addEventHandler("oncellclick", this.div_list_grd_master_oncellclick, this);
            this.div_list.btn_detailExcel.addEventHandler("onclick", this.div_list_btn_detailExcel_onclick, this);
            this.btn_print.addEventHandler("onclick", this.btn_print_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1620.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
