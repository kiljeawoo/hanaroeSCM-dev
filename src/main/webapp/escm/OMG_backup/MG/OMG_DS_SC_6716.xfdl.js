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
                this.set_name("OMG_DS_SC_6714");
                this.set_titletext("하나로유통사무소관리");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_hanaro", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_HIGH\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"CHIEF_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_DEPT_HIGH\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_DEPT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_BIZ_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CHIEF_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"BLG_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_BLG_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"BLG_LV\" type=\"STRING\" size=\"256\"/><Column id=\"BLG_GLN\" type=\"STRING\" size=\"256\"/><Column id=\"BLG_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_result", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ACTIVE\" type=\"STRING\" size=\"256\"/><Column id=\"INACTIVE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cbodsc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">본부</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">직영점</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cbouse", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">사용</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"NAME\">사용안함</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "70", "15", null, this);
            obj.set_taborder("14");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "15", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("8");
            obj.set_text("사무소코드");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_deptid", "absolute", "104", "10", "140", "21", null, null, this.div_search);
            obj.set_taborder("9");
            obj.set_maxlength("30");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "37", "103", "21", null, null, this.div_search);
            obj.set_taborder("10");
            obj.set_text("사업장코드");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_bzplc", "absolute", "104", "37", "140", "21", null, null, this.div_search);
            obj.set_taborder("11");
            obj.set_maxlength("13");
            obj.set_lengthunit("ascii");
            obj.set_inputtype("number");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "302", "9", "103", "21", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("사무소명");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_deptnm", "absolute", "391", "9", "140", "21", null, null, this.div_search);
            obj.set_taborder("13");
            obj.set_maxlength("30");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "302", "37", "103", "21", null, null, this.div_search);
            obj.set_taborder("14");
            obj.set_text("사업자코드");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_bzno", "absolute", "391", "37", "140", "21", null, null, this.div_search);
            obj.set_taborder("15");
            obj.set_maxlength("10");
            obj.set_lengthunit("ascii");
            obj.set_inputtype("number");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "98", null, null, "15", "35", this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);
            obj = new Button("btn_toggle00", "absolute", "46.07%", "0", null, "12", "45.94%", null, this.div_list);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_after", "absolute", "0", "42", null, null, "0", "0", this.div_list);
            obj.set_taborder("3");
            obj.set_binddataset("ds_hanaro");
            obj.getSetter("titletext").set("");
            obj._setContents("<Formats><Format id=\"basic\"><Columns><Column size=\"40\"/><Column size=\"45\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"72\"/><Column size=\"150\"/><Column size=\"75\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"삭제\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"사무소코드\"/><Cell col=\"3\" text=\"상위사무소코드\"/><Cell col=\"4\" text=\"사무소명\"/><Cell col=\"5\" text=\"사무소유형\"/><Cell col=\"6\" text=\"대표사업장코드\"/><Cell col=\"7\" text=\"사업자번호\"/><Cell col=\"8\" text=\"점장사번\"/><Cell col=\"9\" text=\"사용여부\"/><Cell col=\"10\" text=\"소속사업장코드\"/><Cell col=\"11\" text=\"변경상태\"/></Band><Band id=\"body\" style=\"selectbackground:EXPR(STATE == 'NEW' ? '#55ff55ff' : STATE == 'DEL' ? '#ff5555ff' : '#e3f2f7ff');cellbackground:EXPR(STATE == 'NEW' ? '#55ff55ff' : STATE == 'DEL' ? '#ff5555ff' : '#ffffffff');cellbackground2:EXPR(STATE == 'NEW' ? '#55ff55ff' : STATE == 'DEL' ? '#ff5555ff' : '#fafafaff');\"><Cell displaytype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" text=\"expr:currow + 1\"/><Cell col=\"2\" text=\"bind:ORG_DEPT_ID\"/><Cell col=\"3\" edittype=\"text\" editfilter=\"number\" style=\"color:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));color2:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));selectcolor:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));\" text=\"bind:ORG_DEPT_HIGH\" editlimit=\"20\" editlengthunit=\"ascii\"/><Cell col=\"4\" edittype=\"text\" style=\"color:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));color2:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));selectcolor:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));\" text=\"bind:ORG_DEPT_NAME\" editlimit=\"64\" editlengthunit=\"ascii\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"combo\" style=\"color:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));color2:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));selectcolor:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));\" text=\"bind:ORG_DEPT_DSC\" combodataset=\"ds_cbodsc\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"6\" edittype=\"text\" editfilter=\"number\" style=\"color:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));color2:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));selectcolor:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));\" text=\"bind:ORG_NA_BZPLC\" editlimit=\"13\" editlengthunit=\"ascii\"/><Cell col=\"7\" edittype=\"text\" editfilter=\"number\" style=\"color:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));color2:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));selectcolor:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));\" text=\"bind:ORG_BIZ_NUMBER\" mask=\"###-##-#####\" editlimit=\"10\" editlimitbymask=\"both\" editlengthunit=\"ascii\"/><Cell col=\"8\" edittype=\"text\" style=\"color:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));color2:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));selectcolor:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));\" text=\"bind:ORG_CHIEF_ENO\" editlimit=\"20\" editlengthunit=\"ascii\"/><Cell col=\"9\" displaytype=\"combo\" edittype=\"combo\" style=\"color:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));color2:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));selectcolor:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));\" text=\"bind:ORG_USE_YN\" combodataset=\"ds_cbouse\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"10\" edittype=\"text\" style=\"color:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));color2:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));selectcolor:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));\" text=\"bind:ORG_BLG_NA_BZPLC\"/><Cell col=\"11\" text=\"expr:STATE == &quot;ADD&quot; ? &quot;추가됨&quot; : STATE == &quot;MOD&quot; ? &quot;변경됨&quot; : &quot;&quot;\"/></Band></Format><Format id=\"detail\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"72\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"사무소코드\"/><Cell col=\"1\" text=\"상위사무소코드\"/><Cell col=\"2\" text=\"사무소명\"/><Cell col=\"3\" text=\"사무소유형\"/><Cell col=\"4\" text=\"대표사업장코드\"/><Cell col=\"5\" text=\"소속사업장코드\"/><Cell col=\"6\" text=\"소속사업장명\"/><Cell col=\"7\" text=\"사업자번호\"/><Cell col=\"8\" text=\"점장사번\"/><Cell col=\"9\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell style=\"background:#ffffffff;background2:#ffffffff;\" text=\"bind:ORG_DEPT_ID\" suppress=\"2\" suppressalign=\"middle,over\"/><Cell col=\"1\" edittype=\"none\" editfilter=\"number\" style=\"background:#ffffffff;background2:#ffffffff;\" text=\"bind:ORG_DEPT_HIGH\" editlimit=\"20\" editlengthunit=\"ascii\" suppress=\"3\" suppressalign=\"middle,over\"/><Cell col=\"2\" style=\"background:#ffffffff;background2:#ffffffff;\" text=\"bind:ORG_DEPT_NAME\" editlimit=\"64\" editlengthunit=\"ascii\" suppress=\"4\" suppressalign=\"middle,over\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" style=\"background:#ffffffff;background2:#ffffffff;\" text=\"expr:ORG_DEPT_DSC == '01' ? '본부' : '직영점'\" suppress=\"5\" suppressalign=\"middle,over\"/><Cell col=\"4\" editfilter=\"number\" style=\"background:#ffffffff;background2:#ffffffff;\" text=\"bind:ORG_NA_BZPLC\" editlimit=\"13\" editlengthunit=\"ascii\" suppress=\"6\" suppressalign=\"middle,over\"/><Cell col=\"5\" style=\"color:EXPR(BLG_GLN == null ? '#999999FF' : '');color2:EXPR(BLG_GLN == null ? '#999999FF' : '');selectcolor:EXPR(BLG_GLN == null ? '#999999FF' : '');\" text=\"expr:BLG_GLN == null ? '&lt;없음&gt;' : BLG_GLN\"/><Cell col=\"6\" style=\"color:EXPR(BLG_GLN == null ? '#999999FF' : '');color2:EXPR(BLG_GLN == null ? '#999999FF' : '');selectcolor:EXPR(BLG_GLN == null ? '#999999FF' : '');\" text=\"bind:BLG_NAME\"/><Cell col=\"7\" editfilter=\"number\" style=\"background:#ffffffff;background2:#ffffffff;\" text=\"bind:ORG_BIZ_NUMBER\" mask=\"###-##-#####\" editlimit=\"10\" editlimitbymask=\"both\" editlengthunit=\"ascii\" suppress=\"7\" suppressalign=\"middle,over\"/><Cell col=\"8\" style=\"background:#ffffffff;background2:#ffffffff;\" text=\"bind:ORG_CHIEF_ENO\" editlimit=\"20\" editlengthunit=\"ascii\" suppress=\"8\" suppressalign=\"middle,over\"/><Cell col=\"9\" style=\"background:#ffffffff;background2:#ffffffff;\" text=\"expr:ORG_USE_YN == 'Y' ? '사용' : '사용안함'\" suppress=\"9\" suppressalign=\"middle,over\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_swap", "absolute", null, "16", "112", "21", "0", null, this.div_list);
            obj.set_taborder("4");
            obj.set_text("소속 사업장 보기");
            obj.set_cssclass("btn_WF_CRUD");
            this.div_list.addChild(obj.name, obj);

            obj = new Div("div_menu", "absolute", "0", "0", "323", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "0", "41", "21", "59", null, this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "41", "21", "15", null, this);
            obj.set_taborder("12");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_new", "absolute", null, "0", "65", "21", "159", null, this);
            obj.set_taborder("15");
            obj.set_text("신규등록");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete", "absolute", null, "0", "41", "21", "103", null, this);
            obj.set_taborder("16");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", null, null, "21", "0", "10", this);
            obj.set_taborder("17");
            obj.set_text("※ 항목을 더블클릭하여 수정할 수 있습니다.");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 70, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("14");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1550");
            		p.set_titletext("하나로유통사무소관리");

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
        this.addIncludeScript("OMG_DS_SC_6716.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6716.xfdl", function() {
        //include "lib::comLib.xjs";

        this.gridMode = "basic";
        this.editMode = false;

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        };

        this.fn_afterFormOnload = function() //onload
        {
        	this.fn_drawGrid();
        	this.btn_search.click();
        }

        this.btn_search_onclick = function(obj,e)
        {
        	this.btn_delete.set_enable(false);
        	this.btn_save.set_enable(false);
        	this.editMode = false;
        	
        	var di = this.gfn_nullToEmpty(this.div_search.edt_deptid.value);
        	var dn = this.gfn_nullToEmpty(this.div_search.edt_deptnm.value);
        	var gln = this.gfn_nullToEmpty(this.div_search.edt_bzplc.value);
        	var bz = this.gfn_nullToEmpty(this.div_search.edt_bzno.value);
        	
        	var param = "t=D blg=Y"
        		 + " di="+di
        		 + " dn="+dn
        		 + " gln="+gln
        		 + " bz="+bz;

        	var sSvcID        = "p_search";//통신아이디
        	var sURL          = "svc::rest/mg/nh/retrieveOrgNhData";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_hanaro=ds_hanaro";
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var tranType 	  = "U"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.btn_save_onclick = function(obj,e)
        {
        	var sSvcID        = "p_save";//통신아이디
        	var sURL          = "svc::rest/mg/nh/insertHanaroDeptData";// 호출할 서버 페이지 주소
        	var sInDatasets   = "ds_hanaro=ds_hanaro:U";//보내는데이터셋
        	var sOutDatasets  = "ds_result=ds_result";
        	var sArgument     = ""// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var tranType 	  = "U"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.btn_delete_onclick = function(obj,e)
        {
        	if (this.ds_hanaro.findRow("ISCHECKED", "1") != -1 && this.confirm("삭제하시겠습니까?")) {
        		var sSvcID        = "p_delete";//통신아이디
        		var sURL          = "svc::rest/mg/nh/deleteHanaroData";// 호출할 서버 페이지 주소
        		var sInDatasets   = "ds_hanaro=ds_hanaro:U";//보내는데이터셋
        		var sOutDatasets  = "";
        		var sArgument     = "t=D";// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var tranType 	  = "U"; // U:저장/삭제, S:조회

        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        	}
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		if (ErrorCode == "-999") {
        			this.alert(ErrorMsg);
        		} else {
        			this.gfn_getMessage("alert", ErrorMsg);
        		}
        		return;
        	} else {
        		if (svcID=="p_search") {
        			this.fn_drawGrid();
        		} else if (svcID=="p_save") {
        			this.alert("정상적으로 저장되었습니다.");
        			this.btn_search.click();
        		} else if (svcID == "p_delete") {
        			if (ErrorCode > 0) {
        				this.alert("정상적으로 삭제되었습니다.");
        				this.btn_search.click();
        			} else {
        				this.alert("삭제된 건이 없습니다."); // 코드상 오류는 없으나 DB삭제되지 않음
        			}
        		}
        	}
        }

        this.div_list_btn_toggle00_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.div_search_onkeydown = function(obj,e)
        {
        	if (e.keycode == "13" && this.gfn_nullToEmpty(obj.value) != "") {
        		this.btn_search.click();
        	}
        }

        this.STATE = ["NONE", "ADD", "MOD"];
        this.NONE = 0;
        this.ADD = 1;
        this.MOD = 2;
        this.TEMP_CHG; // 행 수정시 초기화됨(ds_hanaro_oncolumnchanged)

        this.ds_hanaro_oncolumnchanged = function(obj,e)
        {
        	var i = e.row;
        	if (this.ds_hanaro.getRowType(i) == Dataset.ROWTYPE_UPDATE) {
        		var curState = this.NONE;
        		this.TEMP_CHG = "";
        		
        		curState = this.fn_compare(curState, i, "DEPT_ID");
        		curState = this.fn_compare(curState, i, "DEPT_NAME");
        		curState = this.fn_compare(curState, i, "DEPT_HIGH");
        		curState = this.fn_compare(curState, i, "DEPT_DSC");
        		curState = this.fn_compare(curState, i, "NA_BZPLC");
        		curState = this.fn_compare(curState, i, "BLG_NA_BZPLC");
        		curState = this.fn_compare(curState, i, "BIZ_NUMBER");
        		curState = this.fn_compare(curState, i, "CHIEF_ENO");
        		curState = this.fn_compare(curState, i, "USE_YN");
        		
        		if (curState != this.NONE) {
        			this.fn_setUpdateData(i);
        			this.ds_hanaro.setColumn(i, "CHG_CNTN", this.TEMP_CHG);
        		} else if (curState == this.NONE) {
        			this.ds_hanaro.setColumn(i, "CHG_CNTN", "");
        		}
        		
        		this.ds_hanaro.setColumn(i, "STATE", this.STATE[curState]);
        		this.editMode = this.fn_enableSave();
        	}
        }

        /**
         * 저장버튼 활성화
         */
        this.fn_enableSave = function()
        {
        	this.btn_delete.set_enable(this.ds_hanaro.findRow("ISCHECKED", "1") != -1);

        	if (this.ds_hanaro.findRow("STATE", "NEW") != -1) { this.btn_save.set_enable(true); return true; }
        	if (this.ds_hanaro.findRow("STATE", "ADD") != -1) { this.btn_save.set_enable(true); return true; }
        	if (this.ds_hanaro.findRow("STATE", "MOD") != -1) { this.btn_save.set_enable(true); return true; }
        	if (this.ds_hanaro.findRow("STATE", "DEL") != -1) { this.btn_save.set_enable(true); return true; }
        	this.btn_save.set_enable(false);
        	return false;
        }

        /**
         * 변경데이터 확인
         */
        this.fn_compare = function(curState,idx,col)
        {
        	var colNm = "ORG_" + col;
        	var state = this.NONE;
        	var before = this.ds_hanaro.getOrgColumn(idx, colNm);
        	var after = this.ds_hanaro.getColumn(idx, colNm);
        	if (col == "BLG_NA_BZPLC" && !this.gfn_isNull(after)) {
        		// 소속사업장 입력값 정리
        		after = after.replace(/([^0-9\,])|(,+$)|(^,+)/g, ""); // 숫자와 콤마만 남기기
        		after = after.replace(/(?:,)+/g, ","); // 연속된 콤마 하나로 합치기
        		after = after.replace(/(,+$)|(^,+)/g, ""); // 앞뒤 콤마 제거
        		this.ds_hanaro.setColumn(idx, colNm, after);
        	}
        	
        	if (this.gfn_nullToEmpty(before) != this.gfn_nullToEmpty(after)) {
        		state = this.MOD;
        		this.TEMP_CHG += this.gfn_isNull(this.TEMP_CHG) ? col : "|"+col;
        	}
        	
        	if (state > curState) {
        		curState = state;
        	}
        	return curState;
        }

        this.fn_setUpdateData = function(idx)
        {
        	this.ds_hanaro.setColumn(idx, "DEPT_ID", this.ds_hanaro.getColumn(idx, "ORG_DEPT_ID"));
        	this.ds_hanaro.setColumn(idx, "DEPT_NAME", this.ds_hanaro.getColumn(idx, "ORG_DEPT_NAME"));
        	this.ds_hanaro.setColumn(idx, "DEPT_HIGH", this.ds_hanaro.getColumn(idx, "ORG_DEPT_HIGH"));
        	this.ds_hanaro.setColumn(idx, "DEPT_DSC", this.ds_hanaro.getColumn(idx, "ORG_DEPT_DSC"));
        	this.ds_hanaro.setColumn(idx, "NA_BZPLC", this.ds_hanaro.getColumn(idx, "ORG_NA_BZPLC"));
        	this.ds_hanaro.setColumn(idx, "BLG_NA_BZPLC", this.ds_hanaro.getColumn(idx, "ORG_BLG_NA_BZPLC"));
        	this.ds_hanaro.setColumn(idx, "BIZ_NUMBER", this.ds_hanaro.getColumn(idx, "ORG_BIZ_NUMBER"));
        	this.ds_hanaro.setColumn(idx, "CHIEF_ENO", this.ds_hanaro.getColumn(idx, "ORG_CHIEF_ENO"));
        	this.ds_hanaro.setColumn(idx, "USE_YN", this.ds_hanaro.getColumn(idx, "ORG_USE_YN"));
        }

        this.btn_new_onclick = function(obj,e)
        {
        	var oArg = {};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("popDupDeptId","OMG.MG::OMG_DS_SC_6716_P01.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	if (strVal == "I") {
        		this.btn_search.click();
        	}
        }

        this.div_list_grd_after_oncellclick = function(obj,e)
        {
        	if (e.col == 0) {
        		var chk = this.ds_hanaro.getColumn(e.row, "ISCHECKED");
        		if (this.gfn_isNull(chk)) { chk = "0"; }
        		this.ds_hanaro.setColumn(e.row, "ISCHECKED", chk == "0" ? "1" : "0");
        	}
        }

        this.div_list_btn_swap_onclick = function(obj,e)
        {
        	if (this.editMode) {
        		this.alert("소속사업장 목록은 편집중인 내용을 저장 또는 취소 후 확인하실 수 있습니다.");
        		return;
        	}
        	if (this.gridMode == "basic") {
        		this.gridMode = "detail";
        	} else {
        		this.gridMode = "basic";
        	}
        	this.fn_drawGrid();
        }

        this.fn_drawGrid = function()
        {
        	var sExpr = ""; 
        	if (this.gridMode == "detail") {
        		this.div_list.btn_swap.set_text("대표 사업장 보기");
        		this.div_list.grd_after.set_autofittype("col");
        		this.btn_save.set_enable(false);
        		this.btn_delete.set_enable(false);
        	} else {
        		this.div_list.btn_swap.set_text("소속 사업장 보기");
        		this.div_list.grd_after.set_autofittype("none");
        		sExpr = "BLG_LV=='1'";
        	}
        	this.div_list.grd_after.set_formatid(this.gridMode);
        	this.ds_hanaro.filter(sExpr); 
        }

        /**
         * 수정항목 글자색상 변경
         * expr:dataset.parent.fn_chgCellColor(currow, this._col)
         */
        this.fn_chgCellColor = function(row,col)
        {
        	var state = this.ds_hanaro.getColumn(row, "STATE");
        	if (state == "MOD") {
        		var cell = this.div_list.grd_after.getCellProperty("body", col, "text");
        		var bindCol = cell.substr(5).replace("ORG_", "");
        		var chgCol = this.ds_hanaro.getColumn(row, "CHG_CNTN");
        		var reg = new RegExp('\\b(?!_)('+bindCol+')', 'g');
        		if (reg.test(chgCol)) {
        			return "#0000ffff";
        		}
        	}
        	return "#000000ff";
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_hanaro.addEventHandler("oncolumnchanged", this.ds_hanaro_oncolumnchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.edt_deptid.addEventHandler("onkeydown", this.div_search_onkeydown, this);
            this.div_search.edt_bzplc.addEventHandler("onkeydown", this.div_search_onkeydown, this);
            this.div_search.edt_deptnm.addEventHandler("onkeydown", this.div_search_onkeydown, this);
            this.div_search.edt_bzno.addEventHandler("onkeydown", this.div_search_onkeydown, this);
            this.div_list.btn_toggle00.addEventHandler("onclick", this.div_list_btn_toggle00_onclick, this);
            this.div_list.grd_after.addEventHandler("oncellclick", this.div_list_grd_after_oncellclick, this);
            this.div_list.btn_swap.addEventHandler("onclick", this.div_list_btn_swap_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_new.addEventHandler("onclick", this.btn_new_onclick, this);
            this.btn_delete.addEventHandler("onclick", this.btn_delete_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6716.xfdl");
        this.loadPreloadList();
       
    };
}
)();
