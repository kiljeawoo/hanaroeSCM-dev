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
                this.set_name("OMG_DS_SC_6410");
                this.set_titletext("비밀번호 초기화");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_result", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"USR_TPC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CURRENT_PAGE\">0</Col><Col id=\"PAGE_SIZE\">0</Col><Col id=\"TOTAL_ROW_COUNT\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_usr_tpc", this);
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_result", "absolute", "0", "74", null, null, "15", "46", this);
            obj.set_taborder("4");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_mbInfList", "absolute", "0.25%", "40", null, null, "0.51%", "46", this.div_result);
            obj.set_taborder("9");
            obj.set_binddataset("ds_result");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"115\"/><Column size=\"96\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"회원ID\"/><Cell col=\"2\" text=\"사용자명\"/><Cell col=\"3\" text=\"사업자번호\"/><Cell col=\"4\" text=\"회사명\"/><Cell col=\"5\" text=\"거래처코드\"/><Cell col=\"6\" text=\"가입일자\"/><Cell col=\"7\" text=\"최종변경일자\"/><Cell col=\"8\" text=\"사용자유형\"/><Cell col=\"9\" text=\"계정잠김여부\"/><Cell col=\"10\" displaytype=\"normal\" text=\"초기화\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" style=\"align:center middle;\" text=\"bind:MB_ID\"/><Cell col=\"2\" style=\"align:center middle;\" text=\"bind:USR_NM\"/><Cell col=\"3\" style=\"align:center middle;\" text=\"bind:BZNO\" mask=\"###-##-#####\"/><Cell col=\"4\" style=\"align:center middle;\" text=\"bind:CLNTNM\"/><Cell col=\"5\" style=\"align:center middle;\" text=\"bind:NA_TRPL_C\"/><Cell col=\"6\" text=\"bind:FSRG_DTM\" mask=\"####-##-##\"/><Cell col=\"7\" text=\"bind:LSCHG_DTM\" mask=\"####-##-##\"/><Cell col=\"8\" displaytype=\"combo\" style=\"align:center middle;\" text=\"bind:USR_TPC\" combodataset=\"ds_usr_tpc\" combocodecol=\"SIMP_C\" combodatacol=\"SIMP_CNM\" combodisplay=\"edit\"/><Cell col=\"9\" displaytype=\"normal\" style=\"align:center middle;\" text=\"bind:LOCK_YN\"/><Cell col=\"10\" displaytype=\"button\" text=\"초기화\"/></Band></Format></Formats>");
            this.div_result.addChild(obj.name, obj);
            obj = new Button("Button75", "absolute", "36.74%", "0", null, "12", "36.64%", null, this.div_result);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_result.addChild(obj.name, obj);
            obj = new Div("div_paging", "absolute", "230", null, "43.91%", "37", null, "1", this.div_result);
            obj.set_taborder("12");
            obj.style.set_align("center middle");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_result.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "91.91%", "120", null, "41", "2.49%", null, this);
            obj.set_taborder("0");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "98.38%", "0", null, "490", "0.12%", null, this);
            obj.set_taborder("6");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0%", "0", null, "21", "56.13%", null, this);
            obj.set_taborder("7");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", "92.72%", "0", null, "21", "1.5%", null, this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0%", "29", null, "45", "1.87%", null, this);
            obj.set_taborder("11");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", null, "21", "679", null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("회원ID");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_MB_ID", "absolute", "106", "10", "120", "21", null, null, this.div_search);
            obj.set_taborder("18");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "256", "10", null, "21", "438", null, this.div_search);
            obj.set_taborder("32");
            obj.set_text("거래처코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "496", "10", null, "21", "149", null, this.div_search);
            obj.set_taborder("33");
            obj.set_text("페이지당 게시물수");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_pageNum", "absolute", "636", "10", "120", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_pageNum_innerdataset = new Dataset("cbo_pageNum_innerdataset", this.div_search.cbo_pageNum);
            cbo_pageNum_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row></Rows>");
            obj.set_innerdataset(cbo_pageNum_innerdataset);
            obj.set_taborder("34");
            obj.set_value("20");
            obj.set_text("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_align("left middle");
            obj.set_index("0");
            obj = new Edit("edt_NA_TRPL_C", "absolute", "347", "10", "120", "21", null, null, this.div_search);
            obj.set_taborder("42");
            obj.set_inputtype("number");
            this.div_search.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_result,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_text("Div02");

            	}
            );
            this.div_result.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 45, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("11");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("비밀번호 초기화");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","divSearch.edt_menuId","value","ds_in","MENU_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divSearch.cbo_menuLevel","value","ds_in","MENU_LEVEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divSearch.edt_menuName","value","ds_in","MENU_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divSearch.edt_svcGroup","value","ds_in","SVC_GROUP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divSearch.edt_fileName","value","ds_in","FILE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divSearch.edt_fileType","value","ds_in","FILE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divSearch.cbo_displayYn","value","ds_in","DISPLAY_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divSearch.cbo_useYn","value","ds_in","USE_YN");
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
        this.addIncludeScript("OMG_DS_SC_6911.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6911.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        	
        	var param = [  
         		{code:"USR_TPC",   dsName:"ds_usr_tpc",   selecttype:""}//계약유형
            ];
            
        	this.fn_setPotalCode(param);
        }

        this.fn_afterFormOnload = function()
        {
        //	this.btn_search_onclick();
        }

        this.fn_setPotalCode = function(param)
        {
        	var sCode = "";
        	var sOutDs = "";

        	for (var idx in param) 
            {
        		if(idx == "indexOf") { break; }
        		var sCodeOrg   = param[idx].code;
        		var sOutDsOrg  = param[idx].dsName;
        		
        		var arrDsNm = new Array(2);
        		if(sCodeOrg.indexOf("$") != -1){
        			arrDsNm = sCodeOrg.split("$");
        		}else{
        			arrDsNm[0] = sCodeOrg;
        		}		
        		
        		if(idx == 0) {
        			sCode  = sCodeOrg;			
        			sOutDs = sOutDsOrg+"="+arrDsNm[0];		
        		}else{			
        			sCode += ","+sCodeOrg;
        			sOutDs += " "+sOutDsOrg+"="+arrDsNm[0];			
        		}	
        	}
        	
        	var paramList = "codeKeys="+sCode;
        	
        	var sSvcID			= "getPortalCodeList";
        	var sURL			= "svc::rest/common/getPortalCodeList";
        	var sInDatasets		= "";
        	var sOutDatasets	= sOutDs;
        	var sArgument		= paramList;
        	var sCallbackFunc	= "fn_callBack";
        	var sTranType		= "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType, true);
        }

        /* 조회 */
        this.btn_search_onclick = function()
        {
        	this.fn_paging(1);// 처음조회시 1페이지를 조회한다.
        }

        /* Paging 처리 */
        this.fn_paging = function(vPageNum)
        {
        	this.ds_pageVO.clearData();
        	this.ds_result.clearData();     //Grid에 Binding된 Dataset명
        	
        	this.ds_pageVO.addRow();
        	
        	var vPageSize = this.div_search.cbo_pageNum.value;
        	var vTotalCount = 0;	//전체건수. 화면조회후 리턴받아 사용 (구동시 갱신)
        	
         	this.ds_pageVO.setColumn(0, "CURRENT_PAGE", vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0, "PAGE_SIZE", vPageSize);
         	this.ds_pageVO.setColumn(0, "TOTAL_ROW_COUNT", vTotalCount);
        	
        	this.fn_search();
        }

        this.fn_search = function ()
        {
        	var sParam			= "mbId=" + this.gfn_nullToEmpty(this.div_search.edt_MB_ID.value)
        						+ " naTrplC=" + this.gfn_nullToEmpty(this.div_search.edt_NA_TRPL_C.value);
        	
        	var sSvcID			= "retrieveMbInfList";
        	var sURL			= "svc::rest/mg/usrinf/retrieveMbInfList";
        	var sInDatasets		= "ds_pageVO=ds_pageVO";
        	var sOutDatasets	= "ds_pageVO=ds_pageVO ds_result=ds_result";	
        	var sArgument		= sParam;
        	var sCallbackFunc	= "fn_callBack";
        	var sTranType		= "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_mbInfList_oncellclick = function(obj,e)
        {
        	var mbId = this.ds_result.getColumn(e.row, "MB_ID");
        	var bzno = this.ds_result.getColumn(e.row, "BZNO");
        	
        	if (e.cell == 10 && obj.getCellValue(e.row, e.cell) == '초기화') {
        		if (application.confirm("비밀번호를 초기화 하시겠습니까?")) {
        			var sSvcID			= "updateMbPw";
        			var sURL			= "svc::rest/mg/usrinf/updateMbPw";
        			var sInDatasets		= "";
        			var sOutDatasets	= "";
        			var sArgument		= "mbId=" + mbId + " bzno=" + bzno;
        			var sCallbackFunc	= "fn_callBack";
        			var sTranType		= "U"; // U:저장/삭제, S:조회
        			
        			this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        		}
        	}
        }

         /*콜백메소드*/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	var current_page = this.ds_pageVO.getColumn(0, "CURRENT_PAGE");
        	var page_size    = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        	var sTotal    	 = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        	
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "retrieveMbInfList"){
        			if(this.ds_result.rowcount == 0){
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        				this.div_result.div_paging.fn_pageSet(0, 0,"grd_mbInfList,div_paging",current_page);
        			} else if(this.ds_result.rowcount > 0){
        				this.div_result.div_paging.fn_pageSet(sTotal, page_size,"grd_mbInfList,div_paging",current_page);
        			}
        		} else if (svcID == "updateMbPw") {
        			alert("비밀번호가 초기화되었습니다.");
        			this.btn_search_onclick();
        		}
        	}
        }

        this.edt_mb_id_onkeydown = function(obj,e)
        {
        	if (e.keycode == "13") {
        		this.btn_search_onclick();
        	}
        }

        this.edt_na_trpl_c_onkeydown = function(obj,e)
        {
        	if (e.keycode == "13") {
        		this.btn_search_onclick();
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_result.grd_mbInfList.addEventHandler("oncellclick", this.fn_mbInfList_oncellclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_search.edt_MB_ID.addEventHandler("onkeydown", this.edt_mb_id_onkeydown, this);
            this.div_search.Static01.addEventHandler("onclick", this.div_search_Static01_onclick, this);
            this.div_search.cbo_pageNum.addEventHandler("onitemchanged", this.div_search_cbo_displayYn_onitemchanged, this);
            this.div_search.edt_NA_TRPL_C.addEventHandler("onkeydown", this.edt_na_trpl_c_onkeydown, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6911.xfdl");
        this.loadPreloadList();
       
    };
}
)();
