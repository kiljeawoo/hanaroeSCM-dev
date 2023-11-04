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
                this.set_name("VAN_DS_SC_0120");
                this.set_titletext("TC수주 내역 조회");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pageVO", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TOTAL_ROW_COUNT\">0</Col><Col id=\"PAGE_SIZE\">10</Col><Col id=\"CURRENT_PAGE\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dataM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ODRPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DSQNO\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"BOXPE_AQZ\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_STDNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_STD_UNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_PCS\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_QT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_QT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_AM\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_FCLT_N\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TRPL_N\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_NABizPlace", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"SHRT_BZPLNM\" type=\"STRING\" size=\"256\"/><Column id=\"RE_SHRT_BZPLNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPL_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"BZPL_DTI_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"BZPL_TPNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPL_DTI_TPNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_USR_SYS_KDC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "116", null, this);
            obj.set_taborder("42");
            obj.set_text("div_auth");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "68", "15", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "36", "91", "21", null, null, this.div_search);
            obj.set_taborder("0");
            obj.set_text("사업장");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("2");
            obj.set_text("조회일자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "94", "10", "150", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("27");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static131", "absolute", "248", "10", "10", "21", null, null, this.div_search);
            obj.set_taborder("28");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_to", "absolute", "261", "10", "150", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("29");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Combo("cbo_nacode", "absolute", "94", "36", "318", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("32");
            obj.set_innerdataset("ds_NABizPlace");
            obj.set_codecolumn("NA_BZPLC");
            obj.set_datacolumn("SHRT_BZPLNM");
            obj.set_displayrowcount("10");
            obj.set_index("-1");
            obj = new Static("Static01", "absolute", "442", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("37");
            obj.set_text("상품별");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_na_wrs_c", "absolute", "521", "10", "97", "21", null, null, this.div_search);
            obj.set_taborder("102");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_wrsnm", "absolute", "620", "10", "139", "21", null, null, this.div_search);
            obj.set_taborder("103");
            obj.set_maxlength("12");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup", "absolute", "762", "10", "21", "21", null, null, this.div_search);
            obj.set_taborder("79");
            obj.set_cssclass("btn_WF_Searchbtn");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "96", null, null, "15", "0", this);
            obj.set_taborder("36");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("Button10", "absolute", "329", "0", null, "12", "332", null, this.div_list);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd", "absolute", "0", "41", null, null, "0", "46", this.div_list);
            obj.set_taborder("12");
            obj.set_binddataset("ds_dataM");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"86\"/><Column size=\"90\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"173\"/><Column size=\"300\"/><Column size=\"173\"/><Column size=\"173\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"물류기능코드\"/><Cell col=\"2\" text=\"상품코드\"/><Cell col=\"3\" text=\"상품명\"/><Cell col=\"4\" text=\"박스당입수\"/><Cell col=\"5\" text=\"규격\"/><Cell col=\"6\" text=\"단위\"/><Cell col=\"7\" text=\"면과세\"/><Cell col=\"8\" displaytype=\"normal\" text=\"단가\"/><Cell col=\"9\" text=\"BOX수량\"/><Cell col=\"10\" text=\"수주수량\"/><Cell col=\"11\" text=\"수주금액\"/><Cell col=\"12\" text=\"공병금액\"/><Cell col=\"13\" text=\"발주처\"/><Cell col=\"14\" text=\"공급처\"/><Cell col=\"15\" text=\"공급처명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PHD_FCLT_N\"/><Cell col=\"2\" text=\"bind:NA_WRS_C\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:WRSNM\"/><Cell col=\"4\" displaytype=\"number\" text=\"bind:BOXPE_AQZ\" mask=\"#,##0\"/><Cell col=\"5\" text=\"bind:WRS_STDNM\"/><Cell col=\"6\" text=\"bind:NA_WRS_STD_UNT_C\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" text=\"bind:TXT_DSC\"/><Cell col=\"8\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_PCS\" mask=\"#,##0.99\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BOX_QT\" mask=\"#,##0\"/><Cell col=\"10\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_QT\" mask=\"#,##0\"/><Cell col=\"11\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_AM\" mask=\"#,##0\"/><Cell col=\"12\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:VCBT_AM\" mask=\"#,##0\"/><Cell col=\"13\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:ODRPL_NA_TRPL_N\"/><Cell col=\"14\" text=\"bind:SPYPL_NA_TRPL_C\"/><Cell col=\"15\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:SPYPL_NA_TRPL_N\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_page", "absolute", "225", null, null, "44", "225", "2", this.div_list);
            obj.set_taborder("13");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("9");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "733", "21", "55", "8", null, null, this);
            obj.set_taborder("21");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "788", "0", "15", "491", null, null, this);
            obj.set_taborder("22");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "122", "30", "103", "10", null, null, this);
            obj.set_taborder("31");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "122", "61", "103", "5", null, null, this);
            obj.set_taborder("32");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "36", "408", null, this);
            obj.set_taborder("41");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "122", "87", "103", "10", null, null, this);
            obj.set_taborder("43");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "683", "21", "44", "14", null, null, this);
            obj.set_taborder("44");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 68, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("36");
            		p.set_text("Div02");
            		p.set_scrollbars("none");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("TC수주 내역 조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0120.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0120.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";
        /***************************************************************************************
        	code        : 호출할 공통코드
        	dsName      : 호출된 공통코드를 담을 Dataset
        	selecttype  : ComboBox 최상단에 추가할 문구( A: -전체-, S:-선택-, N: 빈칸)
        	 
        	selecttype은 추후 변경될 수 있음.
        	this.fn_commonAfterOnload를 화면에 선언하면 gfn_setCommonCode처리후 호출됨.
        *****************************************************************************************/

        /* form load */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);
        	this.div_list.grd.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));	
        }

        /* Form Init*/
        this.form_init = function(obj,e)
        {	
        	
        	//this.div_search.edt_code.set_visible(false);
        	//this.div_search.edt_name.set_visible(false);
        	//this.div_search.btn_popup.set_visible(false);
        }

        //공통코드 데이터셋 onload후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	trace("fn_commonAfterOnload");
        	
        	this.div_search.cbo_phd_fclt_c.set_index(0);

        }

        /* 페이지 로딩후 실행부분 */
        this.fn_afterFormOnload = function()
        {		
        	//this.div_search.cal_from.set_value(this.gfn_today("YYYYMM") + "01");	
        	this.div_search.cal_from.set_value(this.gfn_today("yyyyMMdd"));	
        	this.div_search.cal_to.set_value(this.gfn_today("yyyyMMdd"));
        	
        	//this.div_search.cal_from.set_value(this.gfn_minusDate(this.gfn_today("yyyyMMdd"),3));	
        	//this.div_search.cal_to.set_value(this.gfn_today("yyyyMMdd"));
        	
        	this.fn_getNABizPlace(application.gv_glnCode);
        	
        }

        /*농협사업장 조회*/
        this.fn_getNABizPlace = function(v_nacode){
        	
        	var nacode = v_nacode;
        	var search_type = "added";
        	
        	var param = "search_type="+search_type+
        				" splr_na_trpl_c="+nacode;
        	
        	trace("##### fn_getNABizPlace PARAM ################"+param);
        	
        	var sSvcID        = "getNABizPlace";//통신아이디
        	var sURL          = "svc::rest/common/getNABizPlace";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_NABizPlace=data";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);

        }

        /* Validation Check */
        this.fn_validationCheck = function(){

        	if(this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) < 0){
        	
        		//조회 시작일과 종료일을 다시 확인해 주세요
        		this.gfn_getMessage("alert", "validation.message.fromDate.toDate.reConfirm");
        		return false;
        	}else{
        		if(this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) > 31){

        		//기간을 31일 이내로 선택해 주세요
        		this.gfn_getMessage("alert", "validation.message.selectDateIn31Day");
        		return false;
        		}
        	}
        	
        	
        	if(this.gfn_isNull(this.div_search.cbo_nacode.value)){
        		this.alert('농협사업장을 선택하세요');
        		return false;
        	}
        	
        	
        	return true;
        }

        /* search */
        this.btn_search_onclick = function(obj,e)
        {	
        	this.ds_dataM.clearData();
        	if(this.fn_validationCheck())
        		this.fn_paging(1); 
        	
        	
        	
        	
        }

        /*-----------------------------------------------------------------------------------------*/
        // 페이징처리
        /*-----------------------------------------------------------------------------------------*/
        this.fn_paging = function(vPageNum,objDivNm)
        {	
        	var oDs, oBindDs;
        	
        	if(this.gfn_isNull(objDivNm)){
        		objDivNm = "div_page";
        		oDs = this.ds_pageVO;
        		oBindDs = this.ds_dataM;
        	}
        	
        	if(objDivNm == "div_page"){
        		oDs = this.ds_pageVO;
        		oBindDs = this.ds_dataM;
        	}

        	
        	oDs.clearData();  
        	oBindDs.clearData();     //Grid에 Binding된 Dataset명
        	
        	oDs.addRow(); 
        	
        	var vPageSize   = 30; 	//Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        	var vTotalCount = 0; 	//전체건수. 화면조회후 리턴받아 사용
        	
         	oDs.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
         	oDs.setColumn(0,"PAGE_SIZE",vPageSize);
         	oDs.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);	 
        	 
        	var argumentObj = "";
        	
        	lsNowPage = vPageNum;//현재페이지 설정 
        	//this.div_list.all[objDivNm].fn_pageSet(150, 10,objDivNm,lsNowPage);
        	
        	this.fn_search();
         
        }

        this.fn_search = function(){
        	
        		
        	
        	//권한사업장 코드
        	var trplC = this.getTrplCode();

        	var odrpl_na_trpl_c = this.gfn_nullToEmpty(this.div_search.cbo_nacode.value); //검색사업장	
        	var cal_from = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        	var cal_to = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일	
        	var na_wrs_c = this.gfn_nullToEmpty(this.div_search.edt_na_wrs_c.value); //상품코드	
        	
        	var params = 	  " odrpl_na_trpl_c="+odrpl_na_trpl_c
        					+ " cal_from="+cal_from
        					+ " cal_to="+cal_to
        					+ " na_usr_sys_kdc="+na_usr_sys_kdc
        					+ " TRPL_C=" + trplC
        					+ " na_wrs_c=" + na_wrs_c;
        				
        	trace("##MASTER##PARAM##->"+params);
        	
        	var sSvcID        = "retrieveTCOrders";//통신아이디
        	var sURL          = "svc::rest/scm/order/retrieveTCOrders";// 호출할 서버 페이지 주소
        	var sInDatasets   = "ds_pageVO=ds_pageVO";//보내는데이터셋
        	var sOutDatasets  = "ds_dataM=ds_dataM ds_pageVO=ds_pageVO";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
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
        		this.gfn_getMessage("alert", ErrorMsg);
        		return;
        	}else{
        		trace(this.ds_NABizPlace.saveXML());
        		if(svcID == "retrieveTCOrders"){
        			if(this.ds_dataM.rowcount > 0){
        				var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        				var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        				this.div_list.div_page.fn_pageSet(sTotal, sPagesize,"grd,div_page",lsNowPage);		
        			}else{
        				this.div_list.grd.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));	
        				this.div_list.div_page.fn_pageSet(0, 0,"grd,div_page",lsNowPage);//페이징 설정
        			}
        			
        									
        							
        			
        		}else if(svcID == "getNABizPlace") {
        			
        			if(this.ds_NABizPlace.rowcount > 0){
        				for (var i=0; i < this.ds_NABizPlace.rowcount ;i++)			
        				{					
        					this.ds_NABizPlace.setColumn(i,"SHRT_BZPLNM","["+this.ds_NABizPlace.getColumn(i,0)+"] "+this.ds_NABizPlace.getColumn(i,1));
        					this.ds_NABizPlace.setColumn(i,"RE_SHRT_BZPLNM ", this.ds_NABizPlace.getColumn(i,1));
        				}	
        				
        				if (this.ds_NABizPlace.insertRow(0) != -1){
        					this.ds_NABizPlace.setColumn(0,"NA_BZPLC","");
        					this.ds_NABizPlace.setColumn(0,"SHRT_BZPLNM","- 선택 -");
        				};
        				this.div_search.cbo_nacode.set_index(0);
        			}
        		}
        	}
        }

        
        this.div_list_Button10_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.btn_excel_onclick = function(obj,e)
        {
        		this.excel();
        }

        this.excel = function(){
        	
        	//권한사업장 코드
        	var trplC 			= this.getTrplCode();
        	var odrpl_na_trpl_c = this.gfn_nullToEmpty(this.div_search.cbo_nacode.value); //검색사업장	
        	var cal_from 		= this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        	var cal_to 			= this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일
        	var na_wrs_c 		= this.gfn_nullToEmpty(this.div_search.edt_na_wrs_c.value); //상품코드	
            var fileName = this.getExcelFileName("TC발주내역조회");
        	
        	var params = 
        				   "odrpl_na_trpl_c="+odrpl_na_trpl_c
        				 + "&cal_from="+cal_from
        				 + "&cal_to="+cal_to
        				 + "&na_usr_sys_kdc="+na_usr_sys_kdc
        				 + "&TRPL_C=" + trplC
        				 + "&fileName=" + fileName
        				 + "&na_wrs_c=" + na_wrs_c;
        	
        	trace("Master 엑셀 다운로드 params >>> " + params);
        	//this.web_downExcel.set_url(application.gv_server_url+"rest/excel/scm/order/downloadExcelTCOrders?"+params);
        	excelDownHandler(application.gv_server_url+"rest/excel/scm/order/downloadExcelTCOrders?"+params, this);	
        	
        }
        var na_usr_sys_kdc;
        this.div_search_cbo_nacode_onitemchanged = function(obj,e)
        {
        	na_usr_sys_kdc = this.gfn_nullToEmpty(this.ds_NABizPlace.getColumn(this.div_search.cbo_nacode.index, "NA_USR_SYS_KDC"));
        }

        this.div_search_edt_na_wrs_c_onkeyup = function(obj,e)
        {
        	if(e.keycode==13)
        	this.fn_enterWrs(true, "edt");
        }

        this.fn_enterWrs = function(param,type){
        	
        	var params = {
                    autoType:param,
                    searchCode:this.gfn_nullToEmpty(this.div_search.edt_na_wrs_c.value),
                    searchText:this.gfn_nullToEmpty(this.div_search.edt_wrsnm.value)
        	}
        	if(typeof param == "boolean" && typeof type == "edt" ){
              if(!this.searPopValue(params)){return};
        	}
           
        	var oArg = {autoPop:params};
        	var sOption = "autosize=true, titleText=false";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("POPUP_SRC_WRS","POPUP::POPUP_SRC_WRS.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.div_search_btn_popup_onclick = function(obj,e)
        {
        	this.fn_enterWrs(true, "btn");
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	if(strVal != undefined){
        		var valueArr = strVal.split(",");	
        		this.div_search.edt_na_wrs_c.set_value(valueArr[0]);
        		this.div_search.edt_wrsnm.set_value(valueArr[1]);
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_dataM.addEventHandler("onrowposchanged", this.ds_dataM01_onrowposchanged, this);
            this.addEventHandler("oninit", this.form_init, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.cbo_nacode.addEventHandler("onitemchanged", this.div_search_cbo_nacode_onitemchanged, this);
            this.div_search.edt_na_wrs_c.addEventHandler("onkeyup", this.div_search_edt_na_wrs_c_onkeyup, this);
            this.div_search.edt_wrsnm.addEventHandler("onkeyup", this.div_search_edt_na_wrs_c_onkeyup, this);
            this.div_search.btn_popup.addEventHandler("onclick", this.div_search_btn_popup_onclick, this);
            this.div_list.Button10.addEventHandler("onclick", this.div_list_Button10_onclick, this);
            this.div_list.grd.addEventHandler("oncellclick", this.div_list_grd_oncellclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0120.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
