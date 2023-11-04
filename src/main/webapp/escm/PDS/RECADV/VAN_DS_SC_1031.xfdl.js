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
                this.set_name("frm_van_ds_sc_1031");
                this.set_titletext("상품별/사업장정보 상세");
                this._setFormPosition(0,0,803,459);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dataM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"BY_QT\" type=\"INT\" size=\"256\"/><Column id=\"BY_AM\" type=\"INT\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_total", this);
            obj._setContents("<ColumnInfo><Column id=\"TOTAL_BYNG_QT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TOTAL_BYAM\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "15", "29", null, "43", "15", null, this);
            obj.set_taborder("114");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "15", "13", "100", "21", null, null, this.div_search);
            obj.set_taborder("0");
            obj.set_text("상품코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_bzplc", "absolute", "101", "10", "200", "21", null, null, this.div_search);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "335", "13", "75", "21", null, null, this.div_search);
            obj.set_taborder("2");
            obj.set_text("상품명");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_bzplcnm", "absolute", "416", "10", "250", "21", null, null, this.div_search);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "1", "22", "15", "141", null, null, this);
            obj.set_taborder("102");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "788", "0", "15", "699", null, null, this);
            obj.set_taborder("58");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "7", "41", "21", "16", null, this);
            obj.set_taborder("110");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "69", null, null, "15", "16", this);
            obj.set_taborder("111");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "15", "41", null, "280", "0", null, this.div_list);
            obj.set_taborder("38");
            obj.set_binddataset("ds_dataM");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"280\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"사업장코드\"/><Cell col=\"1\" text=\"사업장명\"/><Cell col=\"2\" text=\"수량\"/><Cell col=\"3\" text=\"금액\"/><Cell col=\"4\" text=\"조회시작일\"/><Cell col=\"5\" text=\"조회종료일\"/></Band><Band id=\"body\"><Cell text=\"bind:NA_BZPLC\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:CLNTNM\"/><Cell col=\"2\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BYNG_QT\" mask=\"#,##0\"/><Cell col=\"3\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BYAM\" mask=\"#,##0\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" style=\"align:center;\" text=\"합   계\"/><Cell col=\"2\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_total.getColumn(0,'TOTAL_BYNG_QT')\" mask=\"#,##0\"/><Cell col=\"3\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_total.getColumn(0,'TOTAL_BYAM')\" mask=\"#,##0\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("Button10", "absolute", "365", "0", null, "12", "360", null, this.div_list);
            obj.set_taborder("55");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_page", "absolute", "229", null, "338", "44", null, "7", this.div_list);
            obj.set_taborder("56");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "692", "4", "44", "14", null, null, this);
            obj.set_taborder("115");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("114");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 978, 503, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("111");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 459, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("상품별/사업장정보 상세");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1031.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1031.xfdl", function() {
        /*##################################################################################
         화면명	: 기간별 상품별/점포별 정보 - 상세
         화면ID  	: VAN_DS_SC_1031
         작성자 	: swha
        ####################################################################################*/
        //include "lib::comLib.xjs";

        var NA_WRS_C;
        var WRSNM;
        var SRH_BY_DT_FR;
        var SRH_BY_DT_TO;
        var SRH_CHK_ALL;
        var SRH_TRPL_C;

        /* Form Load */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);
        	
        }

        this.fn_afterFormOnload = function()
        {
        	NA_WRS_C = this.getOwnerFrame().NA_WRS_C;
        	WRSNM = this.getOwnerFrame().WRSNM;
        	SRH_BY_DT_FR = this.getOwnerFrame().SRH_BY_DT_FR;
        	SRH_BY_DT_TO = this.getOwnerFrame().SRH_BY_DT_TO;
        	trplC = this.getOwnerFrame().trplC;
        	this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        	this.div_search.edt_bzplc.set_value(NA_WRS_C);
        	this.div_search.edt_bzplcnm.set_value(WRSNM);
        	this.fn_paging(1);
        }

        this.fn_search = function(){

        	var params =  "NA_WRS_C=" + NA_WRS_C
        				+ " BY_DT_FR=" + SRH_BY_DT_FR
        				+ " BY_DT_TO=" + SRH_BY_DT_TO
        				+ " TRPL_C=" + trplC;
        			
        	var sSvcID        = "retrievePeriodSkuSumDetail";//통신아이디
        	var sURL          = "svc::/rest/pds/retrievePeriodSkuSumDetail";// 호출할 서버 페이지 주소
        	var sInDatasets   = "ds_pageVO=ds_pageVO";//보내는데이터셋
        	var sOutDatasets  = "ds_dataM=ds_dataM ds_pageVO=ds_pageVO ds_total=ds_total";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "retrievePeriodSkuSumDetail"){
        			this.ds_dataM.set_rowposition(1);
                    this.ds_dataM.set_rowposition(0);
        			if(this.ds_dataM.rowcount > 0){
        				var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        				var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        				
        				this.div_list.div_page.fn_pageSet(sTotal, sPagesize,"grd_master,div_page",lsNowPage);
        			}else{
        				this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        				this.div_list.div_page.fn_pageSet(0, 0,"grd_master,div_page",lsNowPage);//페이징 설정
        				
        			}
        		}
        	}
        }

        
        this.div_list_btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.div_list_Button10_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list)
        }

        /*
         * Paging
         */
        this.fn_paging = function(vPageNum)
        { 	  	 
        	this.ds_pageVO.clearData();  
        	this.ds_dataM.clearData();     //Grid에 Binding된 Dataset명	
        	
        	this.ds_pageVO.addRow(); 
        	
        	var vPageSize   = 10; 	//Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        	var vTotalCount = 1; 	//전체건수. 화면조회후 리턴받아 사용
         	this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
         	this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);
        	 
        	var argumentObj = "";
        	
        	lsNowPage = vPageNum;//현재페이지 설정 
        	
        	//trace(this.ds_pageVO.saveXML());
        	
        	this.fn_search();
         
        }
         
        this.btn_excel_onclick = function(obj,e)
        {	
        	var fileName = this.getExcelFileName("납품정보_상품별사업장_상세");
        	NA_WRS_C = this.getOwnerFrame().NA_WRS_C;
        	WRSNM = this.getOwnerFrame().WRSNM;
        	SRH_BY_DT_FR = this.getOwnerFrame().SRH_BY_DT_FR;
        	SRH_BY_DT_TO = this.getOwnerFrame().SRH_BY_DT_TO;
        	trplC = this.getOwnerFrame().trplC;
        	
        	var params = "NA_WRS_C=" + this.gfn_nullToEmpty(this.getOwnerFrame().NA_WRS_C)
        				+ "&WRSNM=" + this.gfn_nullToEmpty(this.getOwnerFrame().WRSNM)
        				+ "&BY_DT_FR=" + this.gfn_nullToEmpty(this.getOwnerFrame().SRH_BY_DT_FR)
        				+ "&BY_DT_TO=" + this.gfn_nullToEmpty(this.getOwnerFrame().SRH_BY_DT_TO)
        				+ "&TRPL_C=" + this.gfn_nullToEmpty(this.getOwnerFrame().trplC)
        				+ "&fileName=" + fileName;
        	
        	excelDownHandler(application.gv_server_url+"rest/excel/pds/downloadExcelPeriodStoreSumDeail?"+params, this);								
        	//this.web_downExcel.set_url(application.gv_server_url+"rest/excel/pds/downloadExcelPeriodStoreSumDeail?"+params);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_dataM.addEventHandler("onrowposchanged", this.ds_dataM_onrowposchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.Static05.addEventHandler("onclick", this.div_search_Static05_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.div_list.grd_master.addEventHandler("oncellclick", this.fn_grid01_search, this);
            this.div_list.Button10.addEventHandler("onclick", this.div_list_Button10_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1031.xfdl");
        this.loadPreloadList();
       
    };
}
)();
