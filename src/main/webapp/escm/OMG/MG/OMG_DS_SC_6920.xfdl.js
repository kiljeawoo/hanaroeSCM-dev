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
                this.set_name("OMG_DS_SC_6920");
                this.set_titletext("폐사업자관리");
                this.set_name("OMG_DS_SC_6120");
                this._setFormPosition(0,0,803,797);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_branch", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"32\"/><Column id=\"BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"REPMNM\" type=\"DATE\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"256\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"256\"/><Column id=\"BZCCNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZTPNM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"TX_REG\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_closeYn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"value\">정상</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"value\">폐업</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_excel", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"32\"/><Column id=\"BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"REPMNM\" type=\"DATE\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"256\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"256\"/><Column id=\"BZCCNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZTPNM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"TX_REG\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pageVO", this);
            obj.getSetter("firenextcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CURRENT_PAGE\">0</Col><Col id=\"PAGE_SIZE\">0</Col><Col id=\"TOTAL_ROW_COUNT\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "18", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "787", "0", "15", "490", null, null, this);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "69", "15", null, this);
            obj.set_taborder("10");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "242", "9", "92", "21", null, null, this.div_search);
            obj.set_taborder("17");
            obj.set_text("거래처코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_NA_TRPL_C", "absolute", "333", "9", "120", "21", null, null, this.div_search);
            obj.set_taborder("18");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "10", "9", "92", "21", null, null, this.div_search);
            obj.set_taborder("19");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_BZNO", "absolute", "101", "9", "120", "21", null, null, this.div_search);
            obj.set_taborder("20");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "474", "9", "92", "21", null, null, this.div_search);
            obj.set_taborder("21");
            obj.set_text("폐업여부");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_CLOSE_YN", "absolute", "554", "9", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_CLOSE_YN_innerdataset = new Dataset("cbo_CLOSE_YN_innerdataset", this.div_search.cbo_CLOSE_YN);
            cbo_CLOSE_YN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">정상</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">폐업</Col></Row></Rows>");
            obj.set_innerdataset(cbo_CLOSE_YN_innerdataset);
            obj.set_taborder("22");
            obj.set_value("A");
            obj.set_text("전체");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_align("left middle");
            obj.set_index("0");
            obj = new Static("Static02", "absolute", "11", "40", "140", "21", null, null, this.div_search);
            obj.set_taborder("23");
            obj.set_text("페이지당 게시물수");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_pageNum", "absolute", "137", "39", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_pageNum_innerdataset = new Dataset("cbo_pageNum_innerdataset", this.div_search.cbo_pageNum);
            cbo_pageNum_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row></Rows>");
            obj.set_innerdataset(cbo_pageNum_innerdataset);
            obj.set_taborder("24");
            obj.set_value("20");
            obj.set_text("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_align("left middle");
            obj.set_index("0");

            obj = new Div("div_list", "absolute", "0", "97", null, null, "15", "0", this);
            obj.set_taborder("0");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Button("btn_flag", "absolute", "347", "0", null, "12", "363", null, this.div_list);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0", "42", null, null, "0%", "59", this.div_list);
            obj.set_taborder("1");
            obj.set_binddataset("ds_branch");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"54\"/><Column size=\"76\"/><Column size=\"106\"/><Column size=\"108\"/><Column size=\"146\"/><Column size=\"79\"/><Column size=\"259\"/><Column size=\"126\"/><Column size=\"77\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"선택\"/><Cell col=\"1\" text=\"폐업여부\"/><Cell col=\"2\" text=\"사업자번호\"/><Cell col=\"3\" text=\"거래처코드\"/><Cell col=\"4\" text=\"거래처명\"/><Cell col=\"5\" text=\"대표자명\"/><Cell col=\"6\" text=\"주소\"/><Cell col=\"7\" text=\"최종변경일시\"/><Cell col=\"8\" text=\"최종변경자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" edittype=\"combo\" text=\"bind:CLOSE_YN\" expr=\"expr:CLOSE_YN=='1'?'폐업':'정상'\" combodataset=\"ds_closeYn\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"2\" text=\"bind:BZNO\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" style=\"align:center middle;\" text=\"bind:NA_TRPL_C\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:CLNTNM\"/><Cell col=\"5\" edittype=\"none\" style=\"align:center;\" text=\"bind:REPMNM\"/><Cell col=\"6\" edittype=\"none\" style=\"align:left;\" text=\"bind:DONGUP\"/><Cell col=\"7\" edittype=\"none\" style=\"align:center;\" text=\"bind:LSCHG_DTM\"/><Cell col=\"8\" text=\"bind:LS_CHGM\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_paging", "absolute", "230", null, "43.91%", "37", null, "12", this.div_list);
            obj.set_taborder("2");
            obj.style.set_align("center middle");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "0", "42", "21", "82", null, this);
            obj.set_taborder("15");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("URL('theme://images/btn_WF_CRUD.png') stretch 7,7");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "132", null, this);
            obj.set_taborder("16");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_excel", "absolute", "-11", "865", null, "135", "1.37%", null, this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_excel");
            obj.set_autofittype("col");
            obj.set_visible("false");
            obj.style.set_border("0 none #808080ff,1 solid #d6d6d6ff,1 solid #d6d6d6ff,1 solid #d6d6d6ff");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"76\"/><Column size=\"106\"/><Column size=\"108\"/><Column size=\"146\"/><Column size=\"79\"/><Column size=\"259\"/><Column size=\"126\"/><Column size=\"77\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"폐업여부\"/><Cell col=\"1\" text=\"사업자번호\"/><Cell col=\"2\" text=\"거래처코드\"/><Cell col=\"3\" text=\"거래처명\"/><Cell col=\"4\" text=\"대표자명\"/><Cell col=\"5\" text=\"주소\"/><Cell col=\"6\" text=\"최종변경일시\"/><Cell col=\"7\" text=\"최종변경자\"/></Band><Band id=\"body\"><Cell edittype=\"combo\" text=\"bind:CLOSE_YN\" expr=\"expr:CLOSE_YN=='1'?'폐업':'정상'\" combodataset=\"ds_closeYn\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"1\" text=\"bind:BZNO\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" style=\"align:center middle;\" text=\"bind:NA_TRPL_C\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:CLNTNM\"/><Cell col=\"4\" edittype=\"none\" style=\"align:center;\" text=\"bind:REPMNM\"/><Cell col=\"5\" edittype=\"none\" style=\"align:left;\" text=\"bind:DONGUP\"/><Cell col=\"6\" edittype=\"none\" style=\"align:center;\" text=\"bind:LSCHG_DTM\"/><Cell col=\"7\" text=\"bind:LS_CHGM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 965, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 965, 444, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div02");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 797, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("폐사업자관리");

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
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_6920.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6920.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        /* 페이지 로딩 후 실행부분 */
        this.fn_afterFormOnload = function()
        {

        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
         
        /* 조회버튼 이벤트 */
        this.btn_search_onclick = function(obj,e)
        {
            this.fn_retrieveList(); // 처음조회시 1페이지를 조회한다.
        }

        /*  리스트  조회*/
        this.fn_retrieveList = function()
        {	
        	this.fn_paging(1); // 처음조회시 1페이지를 조회한다
        }

        /*Paging 처리*/
        this.fn_paging = function(vPageNum)
        {

        	// alert(this.gfn_nullToEmpty(this.div_search.edt_BZNO.value) );
            
            this.ds_branch.clearData(); //Grid에 Binding된 Dataset명
            this.ds_pageVO.clearData();
        	this.ds_pageVO.addRow();
        	
        	var vPageSize = this.div_search.cbo_pageNum.value;
        	var vTotalCount = 0;	//전체건수. 화면조회후 리턴받아 사용 (구동시 갱신)

        	this.ds_pageVO.setColumn(0, "CURRENT_PAGE", vPageNum); //현재 페이지
        	this.ds_pageVO.setColumn(0, "PAGE_SIZE", vPageSize);
        	this.ds_pageVO.setColumn(0, "TOTAL_ROW_COUNT", vTotalCount);
         
        	var bzno  = this.gfn_nullToEmpty(this.div_search.edt_BZNO.value);
        	var trplC = this.gfn_nullToEmpty(this.div_search.edt_NA_TRPL_C.value);
        	var closeYn = this.gfn_nullToEmpty(this.div_search.cbo_CLOSE_YN.value);

        	var param = "bzno=" + bzno
        	        + " trplC=" + trplC
        	        + " closeYn=" + closeYn
        			;
        			
        	var sSvcID        = "retrieveBranchList";//통신아이디
        	var sURL          = "svc::rest/mg/membership/retrieveBranchList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "ds_pageVO=ds_pageVO";//보내는데이터셋
        	var sOutDatasets  = "ds_pageVO=ds_pageVO ds_branch=ds_branch";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);

        }

        /*
         * 저장
         */
         this.btn_save_onclick = function(obj,e)
        {

            // alert('btn_save_onclick');
            
            var checkCnt =0 ;	//선택된 체크박스 개수
        	var position =0 ;	//선택된 체크박스 위치
        	for(var i = 0 ; i < this.ds_branch.rowcount; i++){		
        		if(this.ds_branch.getColumn(i, "ISCHECKED") =="1"){
        			checkCnt = checkCnt +1;			
        			position = i;
        		}
        	}
            
        	var dsParams = "";
        	var params = "";

        	//trace("[ Params ] >>>>>> " + params);	
        	dsParams = "ds_branch=ds_branch ";
        	
        	if(checkCnt == 0){
        		alert("저장해야할 데이터를 선택해 주시기 바랍니다.");
        		return;
        	} else {

        		var sSvcID        = "saveBranchList";//통신아이디
        		var sURL          = "svc::rest/mg/membership/saveBranchList";// 호출할 서버 페이지 주소
        		var sInDatasets   = dsParams;//보내는데이터셋
        		var sOutDatasets  = "";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = params;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        	
        	}
        }

        
        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/

        /* 조회-서비스 Call */

        /* 콜백메소드 */
        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {

            // alert(svcID);
            
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "retrieveBranchList"){
        		
        			var current_page = this.ds_pageVO.getColumn(0, "CURRENT_PAGE");
        			var page_size = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        			var sTotal = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        		
        			if(this.ds_branch.rowcount == 0){
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        				this.div_list.div_paging.fn_pageSet(0, 0, "Grid00,div_paging", current_page);
        			} else if (this.ds_branch.rowcount > 0) {
        				this.div_list.div_paging.fn_pageSet(sTotal, page_size, "Grid00,div_paging", current_page);
        			}
        			
        		} else if(svcID == "saveBranchList"){
        		    alert("저장되었습니다.");
        			this.fn_retrieveList();
        		}

        	}

          //trace("ds_rsclist" + this.ds_rsclist.saveXML());
        }

        
        this.btn_excel_onclick = function(obj,e)
        {
        	
        	var bzno  = this.gfn_nullToEmpty(this.div_search.edt_BZNO.value);
        	var trplC = this.gfn_nullToEmpty(this.div_search.edt_NA_TRPL_C.value);
        	var closeYn = this.gfn_nullToEmpty(this.div_search.cbo_CLOSE_YN.value);
        	
        	var toDay = this.gfn_today("yyyyMMdd");
            var fileName = "폐사업장관리_"+toDay+".xlsx";//엑셀 파일 이름
        	
        	var param = "&bzno="+bzno+
        			"&trplC="+trplC+
        			"&closeYn="+closeYn+
        			"&fileName="+fileName;

            param = encodeURI(encodeURI(param));
            
            if(this.ds_branch.rowcount == 0){
        		this.gfn_getMessage("alert", "result.message.search.no.exist.data");	
        	} else if(this.ds_branch.rowcount > 0){
        		excelDownHandler(application.gv_serverAdmin_url+"rest/mg/membership/ExcelRetrieveBranchList?"+param, this);
            }
            
        	
        	
        }

        this.btn_flag_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_search.cbo_CLOSE_YN.addEventHandler("onitemchanged", this.Div00_Combo00_onitemchanged, this);
            this.div_search.cbo_pageNum.addEventHandler("onitemchanged", this.div_search_cbo_displayYn_onitemchanged, this);
            this.div_list.btn_flag.addEventHandler("onclick", this.btn_flag_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6920.xfdl");
        this.loadPreloadList();
       
    };
}
)();
