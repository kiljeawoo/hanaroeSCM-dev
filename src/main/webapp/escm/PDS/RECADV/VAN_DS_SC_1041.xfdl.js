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
                this.set_name("frm_van_ds_sc_1021");
                this.set_titletext("사업장/상품별 미납정보 상세");
                this._setFormPosition(0,0,803,409);
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
            obj._setContents("<ColumnInfo><Column id=\"WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"NBY_QT\" type=\"INT\" size=\"256\"/><Column id=\"NBY_AM\" type=\"INT\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_dataTotal", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TOTAL_NBY_QT\" type=\"INT\" size=\"256\"/><Column id=\"TOTAL_NBY_AM\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("114");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "15", "13", "150", "21", null, null, this.div_search);
            obj.set_taborder("0");
            obj.set_text("점포코드/점포명");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sic_trplCN", "absolute", "143", "13", "444", "21", null, null, this.div_search);
            obj.set_taborder("1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "1", "22", "15", "141", null, null, this);
            obj.set_taborder("102");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "97", "30", "103", "10", null, null, this);
            obj.set_taborder("100");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "788", "0", "15", "699", null, null, this);
            obj.set_taborder("58");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "733", "21", "55", "8", null, null, this);
            obj.set_taborder("104");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("106");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "16", null, this);
            obj.set_taborder("110");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "135", "62", "103", "10", null, null, this);
            obj.set_taborder("112");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "302", "28", "30", "44", null, null, this);
            obj.set_taborder("113");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "69", null, null, "15", "1", this);
            obj.set_taborder("111");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "41", null, null, "0", "91", this.div_list);
            obj.set_taborder("38");
            obj.set_binddataset("ds_dataM");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"103\"/><Column size=\"204\"/><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"상품코드\"/><Cell col=\"1\" text=\"상품명\"/><Cell col=\"2\" text=\"수량\"/><Cell col=\"3\" text=\"금액(천원)\"/></Band><Band id=\"body\"><Cell text=\"bind:WRS_C\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:WRSNM\"/><Cell col=\"2\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:NBY_QT\" mask=\"#,##0\"/><Cell col=\"3\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:NBY_AM\" mask=\"#,##0\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" style=\"align:center;\" text=\"합   계\"/><Cell col=\"2\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_dataTotal.getColumn(0,'TOTAL_NBY_QT')\" mask=\"#,##0\"/><Cell col=\"3\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_dataTotal.getColumn(0,'TOTAL_NBY_AM');\" mask=\"#,##0\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "733", "1", "55", "40", null, null, this.div_list);
            obj.set_taborder("39");
            obj.set_text("40");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "732", "407", "55", "30", null, null, this.div_list);
            obj.set_taborder("40");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "697", "489", "91", "17", null, null, this.div_list);
            obj.set_taborder("58");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "697", "450", "91", "10", null, null, this.div_list);
            obj.set_taborder("59");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("Button10", "absolute", "364", "2", null, "12", "361", null, this.div_list);
            obj.set_taborder("60");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_page", "absolute", "229", null, "338", "44", null, "47", this.div_list);
            obj.set_taborder("61");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "696", "4", "44", "14", null, null, this);
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
            obj = new Layout("default", "", 803, 409, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("사업장/상품별 미납정보 상세");

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
        this.addIncludeScript("VAN_DS_SC_1041.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1041.xfdl", function() {
        /*##################################################################################
         화면명	: 기간별 점포별/상품별 정보조회 - 상세
         화면ID  	: VAN_DS_SC_1041
         작성자 	: swha
        ####################################################################################*/
        //include "lib::comLib.xjs";

        
        var BZPL;
        var BZPLCN;
        var SRH_NBY_DT_FR;
        var SRH_NBY_DT_TO;
        var trplC;

        /* Form Load */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);
        	
        	///페이지 로딩후 실행부분
        	
        	BZPLC = this.getOwnerFrame().BZPLC;//점포코드
        	BZPLCNM = this.getOwnerFrame().BZPLCNM;//점포명
        	SRH_NBY_DT_FR = this.getOwnerFrame().SRH_NBY_DT_FR;//검색시작일
        	
        	
        	SRH_NBY_DT_TO = this.getOwnerFrame().SRH_NBY_DT_TO;//검색종료일
        	trplC = this.getOwnerFrame().trplC;//거래처코드
        	this.div_search.sic_trplCN.set_text(BZPLC + " / " + BZPLCNM);
        	this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        }

        this.fn_afterFormOnload = function(){
        	
        	this.fn_paging(1);
        }

        /* Validation Check */
        this.fn_validationCheck = function(){

        }

        
        this.fn_search = function(){
        	
        	
        	
        	var params =  "BZPLC=" + this.getOwnerFrame().BZPLC 
        				+ " NBY_DT_FR=" + this.getOwnerFrame().SRH_NBY_DT_FR
        				+ " NBY_DT_TO=" + this.getOwnerFrame().SRH_NBY_DT_TO
        				+ " TRPL_C=" + this.getOwnerFrame().trplC;
        	
        	trace(">>>>>>> params : " +  params);
        			
        	var sSvcID        = "retrieveNPeriodStoreSumDeail";//통신아이디
        	var sURL          = "svc::/rest/pds/retrieveNPeriodStoreSumDetail";// 호출할 서버 페이지 주소
        	var sInDatasets   = "ds_pageVO=ds_pageVO";//보내는데이터셋
        	var sOutDatasets  = "ds_dataM=ds_dataM ds_pageVO=ds_pageVO ds_dataTotal=ds_dataTotal";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        

        /* Print */

        /* Excel */

        /* Event */

        
        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "retrieveNPeriodStoreSumDeail"){
        			if(this.ds_dataM.rowcount > 0){
        				this.ds_dataM.set_rowposition(1);
        				this.ds_dataM.set_rowposition(0);
        				
        				
        				var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        				var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        				
        				//trace("sTotal : " + sTotal);
        				//trace("sPagesize : " + sPagesize);
        				//trace("lsNowPage: "+lsNowPage);
        				this.div_list.div_page.fn_pageSet(sTotal, sPagesize,"grd_master,div_page",lsNowPage);
        				
        				trace(this.ds_dataTotal.saveXML());
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

        /*-----------------------------------------------------------------------------------------*/
        // 페이징처리
        /*-----------------------------------------------------------------------------------------*/
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
        	
        	this.fn_search();
         
        }

        

        

        this.btn_excel_onclick = function(obj,e)
        {
        	
        	var fileName = this.getExcelFileName("납부정보_점표별_제품별미납정보_상세");
        	var params =  "BZPLC=" + BZPLC 
        				+ "&NBY_DT_FR=" + SRH_NBY_DT_FR
        				+ "&NBY_DT_TO=" + SRH_NBY_DT_TO
        				+ "&TRPL_C=" + trplC
        				+ "&fileName=" + fileName;
        				
        // 	trace("params : "  + params);		
        // 				
        // 	trace(">>>>>>> excel params : " +  params);
        	//this.web_downExcel.set_url(application.gv_server_url+"rest/excel/pds/downloadExcelNPeriodStoreSumDeail?"+params);
        	excelDownHandler(application.gv_server_url+"rest/excel/pds/downloadExcelNPeriodStoreSumDeail?"+params, this);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_dataM.addEventHandler("onrowposchanged", this.ds_dataM_onrowposchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.div_list.grd_master.addEventHandler("oncellclick", this.fn_grid01_search, this);
            this.div_list.Button10.addEventHandler("onclick", this.Div02_Button10_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1041.xfdl");
        this.loadPreloadList();
       
    };
}
)();
