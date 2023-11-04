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
                this.set_name("OMG_DS_SC_6912");
                this.set_titletext("임시거래처코드관리");
                this._setFormPosition(0,0,900,500);
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
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"NA_MBCO_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"REPMNM\" type=\"STRING\" size=\"256\"/><Column id=\"ATEL\" type=\"STRING\" size=\"256\"/><Column id=\"HTEL\" type=\"STRING\" size=\"256\"/><Column id=\"STEL\" type=\"STRING\" size=\"256\"/><Column id=\"FZIP\" type=\"STRING\" size=\"256\"/><Column id=\"RZIP\" type=\"STRING\" size=\"256\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"256\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"OGLN_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"USR_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ELT_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_result_temp", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"NA_MBCO_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"REPMNM\" type=\"STRING\" size=\"256\"/><Column id=\"ATEL\" type=\"STRING\" size=\"256\"/><Column id=\"HTEL\" type=\"STRING\" size=\"256\"/><Column id=\"STEL\" type=\"STRING\" size=\"256\"/><Column id=\"FZIP\" type=\"STRING\" size=\"256\"/><Column id=\"RZIP\" type=\"STRING\" size=\"256\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"256\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"OGLN_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"USR_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ELT_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0%", "0", null, "21", "56.13%", null, this);
            obj.set_taborder("7");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "53", "21", "15", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "42", "15", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "251", "10", "89", "21", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "15", "10", "90", "21", null, null, this.div_search);
            obj.set_taborder("32");
            obj.set_text("거래처코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "466", "10", "90", "21", null, null, this.div_search);
            obj.set_taborder("44");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_NA_TRPL_C", "absolute", "96", "10", "120", "21", null, null, this.div_search);
            obj.set_taborder("0");
            obj.set_inputtype("number");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("13");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_CLNTNM", "absolute", "307", "10", "120", "21", null, null, this.div_search);
            obj.set_taborder("1");
            this.div_search.addChild(obj.name, obj);
            obj = new MaskEdit("edt_BZNO", "absolute", "547", "10", "100", "21", null, null, this.div_search);
            obj.set_taborder("2");
            obj.set_type("string");
            obj.set_mask("@@@-@@-@@@@@");
            obj.style.set_align("center middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "687", "10", "115", "21", null, null, this.div_search);
            obj.set_taborder("47");
            obj.set_text("이관가능 여부");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_mig", "absolute", "788", "10", "70", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_mig_innerdataset = new Dataset("cbo_mig_innerdataset", this.div_search.cbo_mig);
            cbo_mig_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">all</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">가능</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">불가</Col></Row></Rows>");
            obj.set_innerdataset(cbo_mig_innerdataset);
            obj.set_taborder("46");
            obj.set_text("전체");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("all");

            obj = new Div("div_result", "absolute", "0", "70", null, null, "15", "0", this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_tempgln", "absolute", "0", "40", null, null, "0", "46", this.div_result);
            obj.set_taborder("9");
            obj.set_binddataset("ds_result");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"120\"/><Column size=\"227\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"97\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"거래처코드\"/><Cell col=\"2\" rowspan=\"2\" text=\"회사명\"/><Cell col=\"3\" rowspan=\"2\" text=\"사업자번호\"/><Cell col=\"4\" rowspan=\"2\" text=\"등록일자\"/><Cell col=\"5\" rowspan=\"2\" text=\"최종변경일자\"/><Cell col=\"6\" colspan=\"3\" text=\"이관 데이터\"/><Cell row=\"1\" col=\"6\" text=\"정식GLN\"/><Cell row=\"1\" col=\"7\" text=\"회원가입\"/><Cell row=\"1\" col=\"8\" text=\"전자계약\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\"/><Cell col=\"1\" style=\"align:center middle;\" text=\"bind:NA_TRPL_C\"/><Cell col=\"2\" style=\"align:center middle;\" text=\"bind:CLNTNM\"/><Cell col=\"3\" style=\"align:center middle;\" text=\"bind:BIZ_NUMBER\" mask=\"###-##-#####\"/><Cell col=\"4\" text=\"bind:FSRG_DTM\" mask=\"####-##-##\"/><Cell col=\"5\" text=\"bind:LSCHG_DTM\" mask=\"####-##-##\"/><Cell col=\"6\" text=\"expr:OGLN_CNT != '0' ? 'O' : ''\"/><Cell col=\"7\" text=\"expr:USR_CNT + ' 개'\"/><Cell col=\"8\" text=\"expr:ELT_CNT + ' 건'\"/></Band></Format></Formats>");
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


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 42, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_result,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");

            	}
            );
            this.div_result.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 900, 500, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("임시거래처코드관리");

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
            this._addPreloadList("fdl", "common::location.xfdl");
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_6912.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6912.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	
        }

        /* 조회 */
        this.btn_search_onclick = function()
        {
        	this.fn_paging(1);
        }

        /* Paging 처리 */
        this.fn_paging = function(vPageNum)
        {
        	this.ds_pageVO.clearData();
        	this.ds_result.clearData(); //Grid에 Binding된 Dataset명
        	
        	this.ds_pageVO.addRow();
        	
        	var vPageSize = 20;
        	var vTotalCount = 0; //전체건수. 화면조회후 리턴받아 사용 (구동시 갱신)
        	
         	this.ds_pageVO.setColumn(0, "CURRENT_PAGE", vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0, "PAGE_SIZE", vPageSize);
         	this.ds_pageVO.setColumn(0, "TOTAL_ROW_COUNT", vTotalCount);
        	
        	this.fn_search();
        }

        this.fn_search = function()
        {
        	var sParam = "clntnm=" + this.gfn_nullToEmpty(this.div_search.edt_CLNTNM.value)
        		+ " gln=" + this.gfn_nullToEmpty(this.div_search.edt_NA_TRPL_C.value)
        		+ " bzno=" + this.gfn_nullToEmpty(this.div_search.edt_BZNO.value)
        		+ " mig=" + this.gfn_nullToEmpty(this.div_search.cbo_mig.value);
        	
        	var sSvcID			= "retrieveTempGlnList";
        	var sURL			= "svc::rest/mg/usrinf/retrieveTempGlnList";
        	var sInDatasets		= "ds_pageVO=ds_pageVO";
        	var sOutDatasets	= "ds_pageVO=ds_pageVO ds_result=ds_result";	
        	var sArgument		= sParam;
        	var sCallbackFunc	= "fn_callBack";
        	var sTranType		= "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

         /*콜백메소드*/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "retrieveTempGlnList") {
        			var current_page = this.ds_pageVO.getColumn(0, "CURRENT_PAGE");
        			var page_size = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        			var sTotal = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        			
        			if (this.ds_result.rowcount == 0) {
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        				this.div_result.div_paging.fn_pageSet(0, 0, "grd_tempgln,div_paging", current_page);
        			} else if (this.ds_result.rowcount > 0) {
        				this.div_result.div_paging.fn_pageSet(sTotal, page_size, "grd_tempgln,div_paging", current_page);
        			}
        		}
        	}
        }

        this.common_keydown = function(obj,e)
        {
        	if (e.keycode == "13") {
        		this.btn_search_onclick();
        	}
        }

        this.div_result_grd_tempgln_oncelldblclick = function(obj,e)
        {
        	this.ds_result_temp.clearData();
        	this.ds_result_temp.addRow();
        	this.ds_result_temp.copyRow(0, this.ds_result, this.ds_result.rowposition);

        	var oArg = {dsInfo:this.ds_result_temp};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("detailPop", "OMG.MG::OMG_DS_SC_6912_P01.xfdl", oArg, sOption, sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	if (strVal == "Y") {
        		this.btn_search_onclick();
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_search.edt_NA_TRPL_C.addEventHandler("onkeydown", this.common_keydown, this);
            this.div_search.edt_CLNTNM.addEventHandler("onkeydown", this.common_keydown, this);
            this.div_search.edt_BZNO.addEventHandler("onkeydown", this.common_keydown, this);
            this.div_result.grd_tempgln.addEventHandler("oncelldblclick", this.div_result_grd_tempgln_oncelldblclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6912.xfdl");
        this.loadPreloadList();
       
    };
}
)();
