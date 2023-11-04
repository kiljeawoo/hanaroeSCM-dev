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
                this.set_titletext("하나로유통사무소일괄등록");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_uploadresult", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_hanaro", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_HIGH\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"BLG_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"CHIEF_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_DEPT_HIGH\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_DEPT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_BIZ_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CHIEF_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_BLG_NA_BZPLC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_hanaro_new", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_HIGH\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"BLG_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"CHIEF_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_DEPT_HIGH\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_DEPT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_BIZ_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CHIEF_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_BLG_NA_BZPLC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            
            // UI Components Initialize
            obj = new Static("Static04", "absolute", null, "120", "60", "20", "201", null, this);
            obj.set_taborder("17");
            obj.set_text("변경없음");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Div("div_menu", "absolute", "0", "0", "323", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear00", "absolute", null, "0", "53", "21", "101", null, this);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "0", "41", "21", "58", null, this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "72", "15", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_title00", "absolute", "15", "40", "99", "21", null, null, this.div_search);
            obj.set_taborder("110");
            obj.set_text("엑셀 업로드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data00", "absolute", "160", "40", "233", "21", null, null, this.div_search);
            obj.set_taborder("131");
            this.div_search.addChild(obj.name, obj);
            obj = new FileUpload("FileUpload00", "absolute", "396", "40", "72", "21", null, null, this.div_search);
            obj.set_taborder("135");
            obj.set_multiselect("true");
            obj.getSetter("timeout").set("0");
            obj.getSetter("retry").set("0");
            obj.getSetter("async").set("true");
            obj.getSetter("onload").set("FileUpload00_onload");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_find_file00", "absolute", "473", "40", "77", "21", null, null, this.div_search);
            obj.set_taborder("136");
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_CRUD");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_data", "absolute", "160", "10", "80", "21", null, null, this.div_search);
            obj.set_taborder("137");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_CRUD");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title01", "absolute", "15", "10", "142", "21", null, null, this.div_search);
            obj.set_taborder("138");
            obj.set_text("현재 데이터 내려받기");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new CheckBox("chk_use", "absolute", "253", "10", "121", "20", null, null, this.div_search);
            obj.set_taborder("139");
            obj.set_text("'사용안함' 포함");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_sample", "absolute", "570", "40", "90", "21", null, null, this.div_search);
            obj.set_taborder("140");
            obj.set_text("샘플 다운로드");
            obj.set_cssclass("btn_WF_CRUD");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "100", null, null, "15", "50", this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);
            obj = new Button("btn_toggle00", "absolute", "46.07%", "0", null, "12", "45.94%", null, this.div_list);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_after", "absolute", "47%", "42", null, null, "0", "0", this.div_list);
            obj.set_taborder("1");
            obj.set_binddataset("ds_hanaro_new");
            obj.getSetter("titletext").set("신규상품요청 일괄등록");
            obj.set_nodatatext("엑셀 데이터 업로드가 필요합니다");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"105\"/><Column size=\"80\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"사무소코드\"/><Cell col=\"2\" text=\"상위사무소코드\"/><Cell col=\"3\" text=\"사무소명\"/><Cell col=\"4\" text=\"사무소유형\"/><Cell col=\"5\" text=\"대표사업장코드\"/><Cell col=\"6\" text=\"사업자번호\"/><Cell col=\"7\" text=\"점장사번\"/><Cell col=\"8\" text=\"소속사업장코드\"/></Band><Band id=\"body\" style=\"selectbackground:EXPR(STATE == 'NEW' ? '#55ff55ff' : STATE == 'MOD' ? '#ffff55ff' : STATE == 'DEL' ? '#ff5555ff' : '#e3f2f7ff');cellbackground:EXPR(STATE == 'NEW' ? '#55ff55ff' : STATE == 'MOD' ? '#ffff55ff' : STATE == 'DEL' ? '#ff5555ff' : '#ffffffff');cellbackground2:EXPR(STATE == 'NEW' ? '#55ff55ff' : STATE == 'MOD' ? '#ffff55ff' : STATE == 'DEL' ? '#ff5555ff' : '#fafafaff');\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:DEPT_ID\"/><Cell col=\"2\" displaytype=\"expr:STATE == 'DEL' ? 'normal' : 'text'\" edittype=\"expr:STATE == 'DEL' ? 'none' : 'text'\" style=\"controlcolor:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));\" text=\"bind:DEPT_HIGH\" editlimit=\"20\" editdisplay=\"expr:STATE == 'DEL' ? 'edit' : 'display'\" editlengthunit=\"ascii\"/><Cell col=\"3\" displaytype=\"expr:STATE == 'DEL' ? 'normal' : 'text'\" edittype=\"expr:STATE == 'DEL' ? 'none' : 'text'\" style=\"controlcolor:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));\" text=\"bind:DEPT_NAME\" editlimit=\"64\" editdisplay=\"expr:STATE == 'DEL' ? 'edit' : 'display'\" editlengthunit=\"ascii\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"expr:STATE == 'DEL' ? 'none' : 'combo'\" style=\"controlcolor:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));\" text=\"bind:DEPT_DSC\" editimemode=\"none\" editdisplay=\"edit\" combodataset=\"ds_cbodsc\" combocodecol=\"CODE\" combodatacol=\"NAME\" combodisplay=\"display\"/><Cell col=\"5\" displaytype=\"expr:STATE == 'DEL' ? 'normal' : 'text'\" edittype=\"expr:STATE == 'DEL' ? 'none' : 'text'\" style=\"controlcolor:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));\" text=\"bind:NA_BZPLC\" editlimit=\"13\" editdisplay=\"expr:STATE == 'DEL' ? 'edit' : 'display'\" editlengthunit=\"ascii\"/><Cell col=\"6\" displaytype=\"expr:STATE == 'DEL' ? 'normal' : 'text'\" edittype=\"expr:STATE == 'DEL' ? 'none' : 'text'\" editfilter=\"number\" style=\"controlcolor:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));\" text=\"bind:BIZ_NUMBER\" mask=\"@@@-@@-@@@@@\" editlimit=\"10\" editdisplay=\"expr:STATE == 'DEL' ? 'edit' : 'display'\" editlengthunit=\"ascii\"/><Cell col=\"7\" displaytype=\"expr:STATE == 'DEL' ? 'normal' : 'text'\" edittype=\"expr:STATE == 'DEL' ? 'none' : 'text'\" style=\"controlcolor:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));\" text=\"bind:CHIEF_ENO\" editlimit=\"20\" editdisplay=\"expr:STATE == 'DEL' ? 'edit' : 'display'\" editlengthunit=\"ascii\"/><Cell col=\"8\" displaytype=\"expr:STATE == 'DEL' ? 'normal' : 'text'\" edittype=\"expr:STATE == 'DEL' ? 'none' : 'text'\" style=\"controlcolor:EXPR(dataset.parent.fn_chgCellColor(currow, this._col));\" text=\"bind:BLG_NA_BZPLC\" editlimit=\"1000\" editdisplay=\"expr:STATE == 'DEL' ? 'edit' : 'display'\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_before", "absolute", "0", "42", null, null, "54%", "0", this.div_list);
            obj.set_taborder("2");
            obj.set_binddataset("ds_hanaro");
            obj.getSetter("titletext").set("신규상품요청 일괄등록");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"75\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"사무소코드\"/><Cell col=\"2\" text=\"상위사무소코드\"/><Cell col=\"3\" text=\"사무소명\"/><Cell col=\"4\" text=\"사무소유형\"/><Cell col=\"5\" text=\"대표사업장코드\"/><Cell col=\"6\" text=\"사업자번호\"/><Cell col=\"7\" text=\"점장사번\"/><Cell col=\"8\" text=\"사용여부\"/><Cell col=\"9\" text=\"소속사업장코드\"/></Band><Band id=\"body\" style=\"selectbackground:EXPR(ORG_USE_YN == 'Y' ? '#e3f2f7ff' : '#bbbbbbff');cellbackground:EXPR(ORG_USE_YN == 'Y' ? '#ffffffff' : '#aaaaaaff');cellbackground2:EXPR(ORG_USE_YN == 'Y' ? '#fafafaff' : '#aaaaaaff');\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:ORG_DEPT_ID\"/><Cell col=\"2\" text=\"bind:ORG_DEPT_HIGH\"/><Cell col=\"3\" text=\"bind:ORG_DEPT_NAME\"/><Cell col=\"4\" text=\"expr:ORG_DEPT_DSC == '01' ? '본부' : '직영점'\"/><Cell col=\"5\" text=\"bind:ORG_NA_BZPLC\"/><Cell col=\"6\" text=\"bind:ORG_BIZ_NUMBER\" mask=\"@@@-@@-@@@@@\"/><Cell col=\"7\" text=\"bind:ORG_CHIEF_ENO\"/><Cell col=\"8\" text=\"expr:ORG_USE_YN == 'Y' ? '사용' : '사용안함'\"/><Cell col=\"9\" text=\"bind:BLG_NA_BZPLC\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "19", "150", "21", null, null, this.div_list);
            obj.set_taborder("3");
            obj.set_text("<현재>");
            obj.style.set_font("bold 9 Gulim");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "47%", "19", "150", "21", null, null, this.div_list);
            obj.set_taborder("4");
            obj.set_text("<변경>");
            obj.style.set_font("bold 9 Gulim");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "41", "21", "15", null, this);
            obj.set_taborder("12");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "47%", null, null, "35", "0", "10", this);
            obj.set_taborder("13");
            obj.set_text("※ 저장 시 기존 사무소코드가 제외되면 '사용안함' 상태로 변경됩니다.\r\n※ 소속사업장코드가 다수 일 경우 띄어쓰기 없이 콤마(,)로 구분하여 입력");
            obj.style.set_align("left top");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", null, "120", "60", "20", "139", null, this);
            obj.set_taborder("14");
            obj.set_text("신규");
            obj.style.set_background("#55ff55ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", null, "120", "60", "20", "77", null, this);
            obj.set_taborder("15");
            obj.set_text("변경");
            obj.style.set_background("#ffff55ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", null, "120", "60", "20", "15", null, this);
            obj.set_taborder("16");
            obj.set_text("사용안함");
            obj.style.set_background("#ff5555ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 72, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("7");
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
            		p.set_titletext("하나로유통사무소일괄등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_search.edt_data00","value","ds_uploadresult","ORGFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_6714_backup.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6714_backup.xfdl", function() {
        //include "lib::comLib.xjs";

        this.wv_excel;

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        };

        this.fn_afterFormOnload = function() //onload
        {
        	var fileParam = {
        		form:this,
        		param:[{//필요없는 프로퍼티는 주석처리
        				fileObj: this.div_search.FileUpload00,
        				maxSize:10, //허용할 파일 사이즈(MB)
        				maxLength:1, //허용할 파일갯수
        				ext:['xlsx'], //허용할 확장자명
        				cancel_after:function(obj) { //파일선택후, 취소버튼 눌렀을때 실행할 함수명 또는 함수
        					this.form.div_search.txa_excel00.set_value(""); //this대신 this.form으로 접근
        				},
        				valid_after_fail: 'FileUpload00_onerror', //파일검사 실패후 호출할 함수명 또는 함수
        				upload_after_succ: 'FileUpload00_onsuccess', //파일 업로드 성공후 호출할 함수명 또는 함수
        				upload_after_fail: 'FileUpload00_onerror' //파일 업로드 실패후 호출할 함수명 또는 함수
        			}]
        	};
        	this.gfn_addEventFileUpload(fileParam);
        	
        	this.btn_search.click();
        }

        //UPLOAD
        this.FileUpload00_onitemchanged = function(obj,e)
        {
        	this.gfn_callUpload(obj);
        }

        this.FileUpload00_onsuccess = function(obj,e)
        {
        	if (e.datasets == null) {
        		trace("업로드 실패");
        	} else {
        		trace("업로드 성공");
        		this.ds_uploadresult.clear();
        		this.ds_uploadresult.copyData(e.datasets[0]);
        	}
        }

        this.FileUpload00_onerror = function(obj,e)
        {
        	trace("FileUpload00_onerror");
        	trace("e.errorcode: "+e.errorcode);
        	trace("e.errormsg: "+e.errormsg);
        }

        this.btn_search_onclick = function(obj,e)
        {
        	var sSvcID        = "p_search";//통신아이디
        	var sURL          = "svc::rest/mg/nh/retrieveOrgNhData";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_hanaro=ds_hanaro";
        	var sArgument     = "t=D";// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var tranType 	  = "U"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_registerSvcDS(sSvcID, this.ds_hanaro, false);
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        
        this.btn_clear00_onclick = function(obj,e)
        {
        	this.reload();
        }

        this.div_search_btn_find_file00_onclick = function(obj,e)
        {
        	this.fn_uploadXls();
        }

        this.fn_uploadXls = function()
        {
        	if (this.gfn_isEmpty(this.div_search.edt_data00.value) == "") {
        		this.alert("파일을 선택해 주세요");
        		return false;
        	}

        	var params = "t=D sysFileNm="+this.ds_uploadresult.getColumn(0, "SYSTEMFILENAME");
        	var sSvcID = "p_upload"; //통신아이디

        	var sURL = "svc::rest/mg/nh/uploadXls"; // 호출할 서버 페이지 주소
        	var sInDatasets = ""; //보내는데이터셋
        	var sOutDatasets = "ds_hanaro_new=ds_hanaro";
        	var sArgument = params; // 파라미터
        	var sCallbackFunc = "fn_callBack"; //콜백
        	var tranType = "U"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_registerSvcDS(sSvcID, this.ds_hanaro_new, false);
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.btn_save_onclick = function(obj,e)
        {
        	if (!this.fn_validation()) {
        		return;
        	}
        	
        	var sSvcID        = "p_save";//통신아이디
        	var sURL          = "svc::rest/mg/nh/insertHanaroDeptData";// 호출할 서버 페이지 주소
        	var sInDatasets   = "ds_hanaro=ds_hanaro_new";//보내는데이터셋
        	var sOutDatasets  = "ds_result=ds_result";
        	var sArgument     = "xls=Y";// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var tranType 	  = "U"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.fn_validation = function()
        {
        	for (var i=0; i<this.ds_hanaro_new.rowcount; i++) {	
        		if (this.ds_hanaro_new.getRowType(i) == Dataset.ROWTYPE_UPDATE) {
        			var deptNm = this.gfn_nullToEmpty(this.ds_hanaro_new.getColumn(i, "DEPT_NAME"));
        			var deptHigh = this.gfn_nullToEmpty(this.ds_hanaro_new.getColumn(i, "DEPT_HIGH"));
        			var deptDsc = this.gfn_nullToEmpty(this.ds_hanaro_new.getColumn(i, "DEPT_DSC"));
        			var naBzplc = this.gfn_nullToEmpty(this.ds_hanaro_new.getColumn(i, "NA_BZPLC"));
        			var bizNumber = this.gfn_nullToEmpty(this.ds_hanaro_new.getColumn(i, "BIZ_NUMBER"));
        			
        			if (this.gfn_isNull(this.gfn_trim(deptHigh))) {
        				this.alert("상위사무소코드를 공백으로 입력할 수 없습니다.");
        				return false;
        			} else if (this.gfn_isNull(this.gfn_trim(deptNm))) {
        				this.alert("사무소명을 공백으로 입력할 수 없습니다.");
        				return false;
        			} else if (this.gfn_isNull(this.gfn_trim(deptDsc))) {
        				this.alert("사무소유형을 공백으로 입력할 수 없습니다.");
        				return false;
        			} else if (this.gfn_isNull(this.gfn_trim(naBzplc))) {
        				this.alert("사업장코드를 공백으로 입력할 수 없습니다.");
        				return false;
        			} else if (this.gfn_isNull(this.gfn_trim(bizNumber))) {
        				this.alert("사업자번호를 공백으로 입력할 수 없습니다.");
        				return false;
        			}
        		}
        	}
        	return this.confirm("저장하시겠습니까?\n\n(※ 저장 시 기존 사무소코드가 제외되면 '사용안함' 상태로 변경됩니다.)");
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	this.gfn_svcDsToggle(svcID, true);
        	
        	if (ErrorCode < 0) {
        		if (svcID=="p_upload") {
        			this.alert(ErrorMsg);
        		} else {
        			if (ErrorCode == "-999") {
        				this.alert(ErrorMsg);
        			} else {
        				this.gfn_getMessage("alert", ErrorMsg);
        			}
        			return;
        		}
        	} else {
        		if (svcID=="p_upload") {
        			if (ErrorMsg != "SUCCESS") {
        				this.alert(ErrorMsg + "\n\n오류가 발생한 행 데이터는 반영되지 않습니다.");
        			}
        			this.fn_enableSave();
        		} else if (svcID=="p_save") {
        			this.alert("정상적으로 저장되었습니다.");
        			this.reload();
        		}
        	}
        }

        this.div_list_btn_toggle00_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        /*sample 다운로드 클릭*/
        this.btn_sample_onclick = function(obj,e)
        {
        	var strDownUrl = application.gv_serverAdmin_url+"rest/mg/nh/excelHanaroData?t=D&sample=Y";
        	excelDownHandler(strDownUrl, this);
        	/*
        	if (this.gfn_isNull(this.wv_excel)) {
        		this.wv_excel = this.gfn_createWebBorwserComponent(this);
        	}
        	this.wv_excel.set_url(strDownUrl);
        	*/
        }

        this.btn_data_onclick = function(obj,e)
        {
        	if (this.ds_hanaro.rowcount == 0) {
        		this.alert("등록된 데이터가 없어 샘플 데이터 양식으로 다운로드합니다.");
        		this.btn_sample_onclick();
        		return;
        	}
        	var strDownUrl = application.gv_serverAdmin_url+"rest/mg/nh/excelHanaroData?t=D&use=" + this.div_search.chk_use.value;
        	excelDownHandler(strDownUrl, this);
        	/*
        	if (this.gfn_isNull(this.wv_excel)) {
        		this.wv_excel = this.gfn_createWebBorwserComponent(this);
        	}
        	this.wv_excel.set_url(strDownUrl);
        	*/
        }

        this.STATE = ["NONE", "ADD", "MOD"];
        this.NONE = 0;
        this.ADD = 1;
        this.MOD = 2;
        this.TEMP_CHG; // 행 수정시 초기화됨(ds_hanaro_oncolumnchanged)

        this.ds_hanaro_new_oncolumnchanged = function(obj,e)
        {
        	var i = e.row;
        	if (this.ds_hanaro_new.getRowType(i) == Dataset.ROWTYPE_UPDATE) {
        		var state = this.ds_hanaro_new.getColumn(i, "STATE");
        		if (state == "NEW") {
        			// 신규는 내용 수정여부에 관계없이 상태값이 변하지 않음
        			return;
        		}
        		
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
        			this.ds_hanaro_new.setColumn(i, "CHG_CNTN", this.TEMP_CHG);
        		} else if (curState == this.NONE) {
        			this.ds_hanaro_new.setColumn(i, "CHG_CNTN", "");
        		}
        		
        		this.ds_hanaro_new.setColumn(i, "STATE", this.STATE[curState]);
        		this.fn_enableSave();
        	}
        }

        /**
         * 저장버튼 활성화
         */
        this.fn_enableSave = function()
        {
        	if (this.ds_hanaro_new.findRow("STATE", "NEW") != -1) { this.btn_save.set_enable(true); return; }
        	if (this.ds_hanaro_new.findRow("STATE", "ADD") != -1) { this.btn_save.set_enable(true); return; }
        	if (this.ds_hanaro_new.findRow("STATE", "MOD") != -1) { this.btn_save.set_enable(true); return; }
        	if (this.ds_hanaro_new.findRow("STATE", "DEL") != -1) { this.btn_save.set_enable(true); return; }
        	this.btn_save.set_enable(false);
        }

        /**
         * 변경데이터 확인
         */
        this.fn_compare = function(curState,idx,col)
        {
        	var state = this.NONE;
        	var before = this.ds_hanaro_new.getOrgColumn(idx, "ORG_" + col);
        	var after = this.ds_hanaro_new.getColumn(idx, col);
        	if (col == "BLG_NA_BZPLC" && !this.gfn_isNull(after)) {
        		// 소속사업장 입력값 정리
        		after = after.replace(/([^0-9\,])|(,+$)|(^,+)/g, ""); // 숫자와 콤마만 남기기
        		after = after.replace(/(?:,)+/g, ","); // 연속된 콤마 하나로 합치기
        		after = after.replace(/(,+$)|(^,+)/g, ""); // 앞뒤 콤마 제거
        		this.ds_hanaro_new.setColumn(idx, col, after);
        	}
        	
        	// if (this.gfn_isNull(before) && this.gfn_nullToEmpty(after) != "") {
        	//	state = this.ADD;
        	if (this.gfn_nullToEmpty(before) != this.gfn_nullToEmpty(after)) {
        		state = this.MOD;
        		this.TEMP_CHG += this.gfn_isNull(this.TEMP_CHG) ? col : "|"+col;
        	}
        	
        	if (state > curState) {
        		curState = state;
        	}
        	return curState;
        }

        this.div_list_grd_after_oncellclick = function(obj,e)
        {
        	if (e.cell == 8) {
        		if (this.confirm("리스트에서 제외하시겠습니까?")) {
        			this.ds_hanaro_new.deleteRow(e.row);
        			this.fn_enableSave();
        		}
        	}
        }

        /**
         * 수정항목 글자색상 변경
         * expr:dataset.parent.fn_chgCellColor(currow, this._col)
         */
        this.fn_chgCellColor = function(row,col)
        {
        	var state = this.ds_hanaro_new.getColumn(row, "STATE");
        	if (state == "MOD") {
        		var cell = this.div_list.grd_after.getCellProperty("body", col, "text");
        		var bindCol = cell.substr(5);
        		var chgCol = this.ds_hanaro_new.getColumn(row, "CHG_CNTN");
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
            this.ds_hanaro_new.addEventHandler("oncolumnchanged", this.ds_hanaro_new_oncolumnchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_clear00.addEventHandler("onclick", this.btn_clear00_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.div_search.FileUpload00.addEventHandler("onsuccess", this.FileUpload00_onsuccess, this);
            this.div_search.FileUpload00.addEventHandler("onerror", this.FileUpload00_onerror, this);
            this.div_search.FileUpload00.addEventHandler("onitemchanged", this.FileUpload00_onitemchanged, this);
            this.div_search.btn_find_file00.addEventHandler("onclick", this.div_search_btn_find_file00_onclick, this);
            this.div_search.btn_data.addEventHandler("onclick", this.btn_data_onclick, this);
            this.div_search.btn_sample.addEventHandler("onclick", this.btn_sample_onclick, this);
            this.div_list.btn_toggle00.addEventHandler("onclick", this.div_list_btn_toggle00_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6714_backup.xfdl");
        this.loadPreloadList();
       
    };
}
)();
