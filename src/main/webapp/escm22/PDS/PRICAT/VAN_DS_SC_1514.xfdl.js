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
                this.set_name("VAN_DS_SC_1514");
                this.set_titletext("필수 상품 속성 정보 관리");
                this.set_name("VAN_DS_SC_1514");
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

            obj = new Dataset("ds_file_inform", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BUYER_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"CTCPL_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"RQ_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_excel_bind", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ROW_SEQ\" type=\"String\" size=\"256\"/><Column id=\"SPYPL_NA_TRPL_C\" type=\"String\" size=\"256\"/><Column id=\"SPYPL_NA_TRPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"STPL_NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_STDNM\" type=\"STRING\" size=\"256\"/><Column id=\"INPD_QT\" type=\"STRING\" size=\"256\"/><Column id=\"BOXPE_AQZ\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_UNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_ODR_UNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_CSTD_METC\" type=\"STRING\" size=\"256\"/><Column id=\"VLD_PRD_CN\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_IPO_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"SL_UPR\" type=\"STRING\" size=\"256\"/><Column id=\"UPR_01\" type=\"STRING\" size=\"256\"/><Column id=\"UPR_02\" type=\"STRING\" size=\"256\"/><Column id=\"UPR_03\" type=\"STRING\" size=\"256\"/><Column id=\"MD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZTPNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_excel_result", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ROW_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_trtwrs", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SPYPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TRPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"STPL_NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_STDNM\" type=\"STRING\" size=\"256\"/><Column id=\"INPD_QT\" type=\"STRING\" size=\"256\"/><Column id=\"BOXPE_AQZ\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_UNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_ODR_UNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_CSTD_METC\" type=\"STRING\" size=\"256\"/><Column id=\"VLD_PRD_CN\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_IPO_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"SL_UPR\" type=\"STRING\" size=\"256\"/><Column id=\"UPR_01\" type=\"STRING\" size=\"256\"/><Column id=\"UPR_02\" type=\"STRING\" size=\"256\"/><Column id=\"UPR_03\" type=\"STRING\" size=\"256\"/><Column id=\"MD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZTPNM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN_ENO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CMENO\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CMENO_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_menu", "absolute", "0", "0", "323", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear00", "absolute", null, "0", "53", "21", "125", null, this);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down01", "absolute", null, "0", "89", "21", "184", null, this);
            obj.set_taborder("8");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "184", null, null, "15", "31", this);
            obj.set_taborder("10");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Button("btn_toggle00", "absolute", "46.07%", "0", null, "12", "45.94%", null, this.div_list);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("sta_boolChk00", "absolute", "8", "16", "42", "21", null, null, this.div_list);
            obj.set_taborder("2");
            obj.set_text("0");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_main00", "absolute", "-1", "32", null, null, "1", "30", this.div_list);
            obj.set_taborder("12");
            obj.set_binddataset("ds_trtwrs");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"160\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"240\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"240\"/><Column size=\"160\"/><Column size=\"240\"/><Column size=\"240\"/><Column size=\"240\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"담당MD명(필수)\"/><Cell col=\"2\" text=\"매입처코드(필수)\"/><Cell col=\"3\" text=\"매입처명칭(필수)\"/><Cell col=\"4\" text=\"판매상품코드(필수)\"/><Cell col=\"5\" text=\"낱개(sku)상품코드(필수)\"/><Cell col=\"6\" text=\"박스상품코드\"/><Cell col=\"7\" text=\"물류상품코드(14자리)\"/><Cell col=\"8\" text=\"판매상품명\"/><Cell col=\"9\" text=\"규격 및 모델\"/><Cell col=\"10\" text=\"내품수량\"/><Cell col=\"11\" text=\"박스당입수\"/><Cell col=\"12\" text=\"단위\"/><Cell col=\"13\" text=\"최소발주단위\"/><Cell col=\"14\" text=\"과세여부(면세/과세)\"/><Cell col=\"15\" text=\"보관방식(냉동/냉장/상온/실온)\"/><Cell col=\"16\" text=\"유통기한(일)\"/><Cell col=\"17\" text=\"완제품수입여부(여/부)\"/><Cell col=\"18\" text=\"배송구분(R1/R2/R1R2)\"/><Cell col=\"19\" text=\"권장판매가\"/><Cell col=\"20\" text=\"단위당단가(낱개기준) - 내용량\"/><Cell col=\"21\" text=\"단위당단가(낱개기준) - 표시기준단량\"/><Cell col=\"22\" text=\"단위당단가(낱개기준) - 기준단위\"/><Cell col=\"23\" text=\"업태구분(소매/식자재)\"/><Cell col=\"24\" text=\"변경자\"/><Cell col=\"25\" text=\"변경일시\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:MD_NM\"/><Cell col=\"2\" text=\"bind:SPYPL_NA_TRPL_C\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:SPYPL_NA_TRPL_NM\"/><Cell col=\"4\" text=\"bind:NA_WRS_C\"/><Cell col=\"5\" text=\"bind:STPL_NA_WRS_C\"/><Cell col=\"6\" text=\"bind:BOX_WRS_C\"/><Cell col=\"7\" style=\"align: ;\" text=\"bind:PHD_WRS_C\"/><Cell col=\"8\" style=\"align:left;\" text=\"bind:WRSNM\"/><Cell col=\"9\" displaytype=\"number\" style=\"align: ;\" text=\"bind:WRS_STDNM\"/><Cell col=\"10\" style=\"align:right;\" text=\"bind:INPD_QT\"/><Cell col=\"11\" style=\"align:right;\" text=\"bind:BOXPE_AQZ\"/><Cell col=\"12\" style=\"align: ;\" text=\"bind:NA_WRS_UNT_C\"/><Cell col=\"13\" style=\"align: ;\" text=\"bind:MIN_ODR_UNT_C\"/><Cell col=\"14\" text=\"bind:TXT_DSC\"/><Cell col=\"15\" style=\"align: ;\" text=\"bind:NA_WRS_CSTD_METC\"/><Cell col=\"16\" style=\"align:right;\" text=\"bind:VLD_PRD_CN\"/><Cell col=\"17\" text=\"bind:NA_WRS_IPO_DSC\"/><Cell col=\"18\" text=\"bind:DVY_DSC\"/><Cell col=\"19\" style=\"align:right;\" text=\"bind:SL_UPR\"/><Cell col=\"20\" style=\"align:right;\" text=\"bind:UPR_01\"/><Cell col=\"21\" style=\"align:right;\" text=\"bind:UPR_02\"/><Cell col=\"22\" text=\"bind:UPR_03\"/><Cell col=\"23\" text=\"bind:BZTPNM\"/><Cell col=\"24\" text=\"bind:LS_CMENO_NM\"/><Cell col=\"25\" text=\"bind:LSCHG_DTM\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_search00", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "155", "15", null, this);
            obj.set_taborder("14");
            obj.set_scrollbars("none");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "119", "103", "21", null, null, this.div_search);
            obj.set_taborder("102");
            obj.set_text("매입처코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_trpl_corp_nm", "absolute", "106", "119", "157", "21", null, null, this.div_search);
            obj.set_taborder("103");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup", "absolute", "266", "119", "21", "21", null, null, this.div_search);
            obj.set_taborder("104");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_na_trpl_c", "absolute", "290", "119", "117", "21", null, null, this.div_search);
            obj.set_taborder("105");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "434", "119", "74", "21", null, null, this.div_search);
            obj.set_taborder("106");
            obj.set_text("MD명");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_md_nm", "absolute", "515", "119", "204", "21", null, null, this.div_search);
            obj.set_taborder("107");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title00", "absolute", "15", "10", "67", "21", null, null, this.div_search);
            obj.set_taborder("16");
            obj.set_text("File 명");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data00", "absolute", "127", "10", "233", "21", null, null, this.div_search);
            obj.set_taborder("17");
            this.div_search.addChild(obj.name, obj);
            obj = new FileUpload("FileUpload00", "absolute", "363", "10", "72", "21", null, null, this.div_search);
            obj.set_taborder("18");
            obj.set_multiselect("true");
            obj.getSetter("timeout").set("0");
            obj.getSetter("retry").set("0");
            obj.getSetter("async").set("true");
            obj.getSetter("onload").set("FileUpload00_onload");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title03", "absolute", "15", "40", "101", "21", null, null, this.div_search);
            obj.set_taborder("19");
            obj.set_text("처리결과내용");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new TextArea("txa_excel00", "absolute", "127", "40", "644", "69", null, null, this.div_search);
            obj.set_taborder("20");
            obj.set_value("엑셀다운로드 후 사용하시기 바랍니다.");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_find_file00", "absolute", null, "0", "77", "21", "279", null, this);
            obj.set_taborder("15");
            obj.set_text("엑셀업로드");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save00", "absolute", null, "0", "41", "21", "77", null, this);
            obj.set_taborder("21");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down00", "absolute", null, "0", "105", "21", "362", null, this);
            obj.set_taborder("22");
            obj.set_text("경통취급상품등록");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");
            		p.set_text("Div00");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 155, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("14");
            		p.set_scrollbars("none");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1550");
            		p.set_titletext("필수 상품 속성 정보 관리");

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
        this.addIncludeScript("VAN_DS_SC_1514.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1514.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e) 
        {
        	this.btnDisable([this.btn_find_file00,this.btn_save00]);
        	this.gfn_setInitForm(obj, e); //공통
        };

        this.fn_afterFormOnload = function() //onload
        {
        	var fileParam = {
        		form:this,		
        		param:[{//필요없는 프로퍼티는 주석처리
        				fileObj: this.div_search.FileUpload00,
        				maxSize:10,											//허용할 파일 사이즈(MB)
        				maxLength:1,										//허용할 파일갯수
        				ext:['xls','xlsx'],									//허용할 확장자명
        				cancel_after:function(obj){							//파일선택후, 취소버튼 눌렀을때 실행할 함수명 또는 함수
        					this.form.div_search.txa_excel00.set_value(""); //this대신 this.form으로 접근		
        				},
        				valid_after_fail: 'FileUpload00_onerror',  			//파일검사 실패후 호출할 함수명 또는 함수
        				upload_after_succ: 'FileUpload00_onsuccess',    	//파일 업로드 성공후 호출할 함수명 또는 함수
        				upload_after_fail: 'FileUpload00_onerror'  	    	//파일 업로드 실패후 호출할 함수명 또는 함수
        			}]
        	};
        	this.gfn_addEventFileUpload(fileParam);
        	//this.div_auth.set_visible(false);
        	this.div_list.grd_main00.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        }

        //UPLOAD
        this.FileUpload00_onitemchanged = function(obj,e)
        {
        	this.gfn_callUpload(obj);
        }

        this.FileUpload00_onsuccess = function(obj,e)
        {

        	if( e.datasets == null )
        	{
        		trace("업로드 실패");
        		this.div_search.txa_excel00.set_value("업로드 실패");
        	} else {
        		trace("업로드 성공");
        		this.div_search.txa_excel00.set_value("업로드 성공");
        		
        		this.ds_uploadresult.clear();
        		this.ds_uploadresult.copyData(e.datasets[0]);		
        		//this.ds_uploadresult.addColumn("CHK", "string"); //멀티건 인경우 'CHK'컬럼추가
        	}	
        }

        this.FileUpload00_onerror = function(obj,e)
        {
        	trace("FileUpload00_onerror");
        	trace("e.errorcode: "+e.errorcode);
        	trace("e.errormsg: "+e.errormsg);
        }

        this.div_search_btn_popup00_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"U", dsArg:this.Dataset00};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("popId","template::createAccount.xfdl",oArg,sOption,sPopupCallBack);	
        }

        //SINGLE DOWNLOAD
        this.btn_down01_onclick = function(obj,e)
        {	

        	var na_trpl_c	 	= this.gfn_nullToEmpty(this.div_search.edt_na_trpl_c.value);
        	var md_nm 			= this.gfn_nullToEmpty(this.div_search.edt_md_nm.value);
        	
        	var params = 	"na_trpl_c=" 	+ na_trpl_c + 
        					"&md_nm=" 		+ md_nm;

        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelMDMngTempOdTrtwrsList?"+params, this);	
        }

        this.btn_down00_onclick = function(obj,e)
        {
        	
        	var na_trpl_c	 	= this.gfn_nullToEmpty(this.div_search.edt_na_trpl_c.value);
        	var md_nm 			= this.gfn_nullToEmpty(this.div_search.edt_md_nm.value);
        	
        	var params = 	"na_trpl_c=" 	+ na_trpl_c + 
        					"&md_nm=" 		+ md_nm;

        	excelDownHandler(application.gv_server_url+"rest/excel/downloadTransferExcelMDMngTempOdTrtwrsList?"+params, this);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	trace(" strId : " + strId + " strVal : " + strVal);
        	switch(strId)
        	{
        		
        		case "POPUP_TRPL":
        			if(!this.gfn_isNull(strVal))
        			{
        				var strValNo = strVal.split(',');
        				this.div_search.edt_na_trpl_c.set_value(strValNo[0]);
        				this.div_search.edt_trpl_corp_nm.set_value(strValNo[1]);
        			}
        			break;	
        	}
        	 
        }

        this.btn_clear00_onclick = function(obj,e)
        {
        	//this.ds_uploadresult.clearData();
        	//this.ds_excel_bind.clearData();
        	//this.div_list.grd_main00.set_visible(false);
        	//this.div_search.txa_excel00.set_value("");
        	this.reload();
        }

        this.div_search_btn_find_file00_onclick = function(obj,e)
        {	
        	if (this.gfn_isEmpty(this.div_search.edt_data00.value) == ""){
        		this.alert("파일을 선택해 주세요");
        		return false;
        	}
        	var fileName	  = "dsName=ds_excel_bind"
        					  +" systemFileName="+this.ds_uploadresult.getColumn(0,"SYSTEMFILENAME");
        	var sSvcID        = "p_upload";//통신아이디
        	
        	var sURL          = "svc::rest/pds/pricat/uploadMDMngTempOdTrtwrsInfoFile";// 호출할 서버 페이지 주소
        	var sInDatasets   = "in_ds=ds_excel_bind:A";//보내는데이터셋
        	var sOutDatasets  = "ds_excel_bind=ds_excel_bind";
        	var sArgument     = fileName;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var tranType 	  = "U"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.btn_save00_onclick = function(obj,e)
        {
        	
        	//var params = " tempSeq=" + tempSeq;
        	var sSvcID        = "p_save";//통신아이디
        	var sURL          = "svc::rest/pds/pricat/saveMDMngTempOdTrtwrsInfoFile";// 호출할 서버 페이지 주소
        	var sInDatasets   = "in_ds=ds_excel_bind:A";//보내는데이터셋
        	var sOutDatasets  = "";
        	var sArgument     = ""// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var tranType 	  = "U"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);	
        }

        this.btn_search00_onclick = function(obj,e)
        {
        	this.search();
        }

        this.search = function()
        {

        	this.ds_trtwrs.clearData();     //Grid에 Binding된 Dataset명
        	
        	var na_trpl_c	 	= this.gfn_nullToEmpty(this.div_search.edt_na_trpl_c.value);
        	var md_nm 			= this.gfn_nullToEmpty(this.div_search.edt_md_nm.value);
        	
        	var params = 	"na_trpl_c=" 	+ na_trpl_c + 
        					" md_nm=" 		+ md_nm;

        	var sSvcID        = "p_search";//통신아이디
        	var sURL          = "svc::rest/pds/pricat/Product/selectMDMngTempOdTrtwrsList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_trtwrs=ds_tempOdTrtwrs";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var tranType = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출 
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        var tempSeq;
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {

        	if(ErrorCode < 0)
        	{
        		//if(svcID=="p_upload" && ErrorMsg=="OVERROWCOUNT"){
        		//	this.alert("100건 이상 연계자료는 System부하관계로 처리할수 없으니 화일을 분리하여 회차단위로 연계처리하시기 바랍니다");
        		//	this.reload();
        		//}else{
        			if(ErrorCode == "-999"){
        				this.alert(ErrorMsg);
        			}else{
        				this.alert(ErrorMsg);
        				//this.gfn_getMessage("alert", ErrorMsg);
        			}
        			
        			return;
        		//}
        	}else{
        	
        		if(svcID=="p_upload" && ErrorMsg=="SUCCESS"){
        			//this.div_list.grd_main00.set_visible(true);
        			var msg = "=========================결   과===================================" + String.fromCharCode(13) + String.fromCharCode(10);
        			/*
        			if(this.ds_excel_bind.rowcount > 0){
        				msg = msg + "[ 오류 건수 ] : " + this.ds_excel_result.rowcount  + " 건 삭제완료 저장버튼을 클릭하여 최종완료을 해주세요"+ String.fromCharCode(13) + String.fromCharCode(10);
        				this.btn_save00.set_enable(true);
        				this.btn_find_file00.set_enable(false);
        				//tempSeq = this.ds_temp_seq.getColumn(0, "TEMP_SEQ");
        			}else{
        				msg = msg + "[ 오류 건수 ] : " + this.ds_excel_result.rowcount  + " 건 삭제완료 "+ String.fromCharCode(13) + String.fromCharCode(10);
        			}
        			*/
        			
        			if(this.ds_excel_result.rowcount > 0){
        				for(var i = 0; i < this.ds_excel_result.rowcount; i++){
        					if(this.gfn_indexOf(this.ds_excel_result.getColumn(i, "MSG"), "enter") == -1){
        						msg = msg + this.ds_excel_result.getColumn(i, "MSG") + String.fromCharCode(13) + String.fromCharCode(10);
        					}else{					
        						var arrVal = String(this.ds_excel_result.getColumn(i, "MSG")).split("enter");
        						if (arrVal.length > 0){
        							msgContents = this._gfn_AddNewLine(arrVal);
        						}
        						msg = msg + msgContents  + String.fromCharCode(13) + String.fromCharCode(10);
        					}
        				}
        			}else{
        				this.btn_save00.set_enable(true);
        				msg = msg + " [ 총 건수 ] : " + this.ds_excel_bind.rowcount + " 건 저장버튼을 클릭하여 최종완료를 해주세요" + String.fromCharCode(13) + String.fromCharCode(10);
        				
        			}
        			msg = msg + "=================================================================" ;
        			this.div_search.txa_excel00.set_value(msg);
        		}
        		
        		
        		if(svcID=="p_save"){
        			this.alert(this.ds_excel_bind.rowcount + "건 정상적으로 업로드되었습니다.");
        			//this.reload();
        			this.search();
        		}
        		
        		if(svcID=="p_search"){
        			if(this.div_list.grd_main00.rowcount == 0){
        				this.div_list.grd_main00.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        			}
        		}
        		
        	}
        }

        this.div_list_btn_toggle00_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.btn_sample_onclick = function(obj,e)
        {
        	var systemFileName ="trtwrs_sample.xlsx";
        	var fileName = "trtwrs_sample.xlsx"; //다운로드 할 파일 이름
        	
        	var strDownUrl = application.gv_server_url+"rest/common/fileDownload?systemFileName="+systemFileName+"&fileName="+fileName+"&isSampleFile=Y";
        	var wbs_dw     = this.gfn_createWebBorwserComponent(this);
        	
        	wbs_dw.set_url(strDownUrl);
        }

        this.common_onclick = function(obj,e)
        {
        	switch(obj.name)
        	{	
        		case "btn_popup":
        			
        			//var codes = this.gfn_nullToEmpty(this.div_search.edt_data02.value);
        			var codes="";
        			var texts = this.gfn_nullToEmpty(this.div_search.edt_trpl_corp_nm.value);
        			
        			var param = {
        						autoType:false,
        						searchCode:codes,
        						searchText:texts
        			};
        			if(typeof params == "boolean"){
        				if(!this.searPopValue(param)){return};
        			}
        	
        	
        			this.fn_openTrpl();
        			break;
        			
        	}
        }

        this.fn_openTrpl = function(){
        	var oArg = {searchWord:this.div_search.edt_trpl_corp_nm.value};
        	var sOption = "autosize=true,title=false";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("POPUP_TRPL","POPUP::POPUP_SRC_RVOPL_TRPL.xfdl",oArg,sOption,sPopupCallBack);
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_clear00.addEventHandler("onclick", this.btn_clear00_onclick, this);
            this.btn_down01.addEventHandler("onclick", this.btn_down01_onclick, this);
            this.div_list.btn_toggle00.addEventHandler("onclick", this.div_list_btn_toggle00_onclick, this);
            this.btn_search00.addEventHandler("onclick", this.btn_search00_onclick, this);
            this.div_search.edt_trpl_corp_nm.addEventHandler("onkeydown", this.edt_suppliee_onkeydown, this);
            this.div_search.edt_trpl_corp_nm.addEventHandler("onchanged", this.div_search_edt_suppliee_onchanged, this);
            this.div_search.btn_popup.addEventHandler("onclick", this.common_onclick, this);
            this.div_search.edt_md_nm.addEventHandler("onkeydown", this.div_search_edt_md_nm_onkeydown, this);
            this.div_search.FileUpload00.addEventHandler("onsuccess", this.FileUpload00_onsuccess, this);
            this.div_search.FileUpload00.addEventHandler("onerror", this.FileUpload00_onerror, this);
            this.div_search.FileUpload00.addEventHandler("onitemchanged", this.FileUpload00_onitemchanged, this);
            this.btn_find_file00.addEventHandler("onclick", this.div_search_btn_find_file00_onclick, this);
            this.btn_save00.addEventHandler("onclick", this.btn_save00_onclick, this);
            this.btn_down00.addEventHandler("onclick", this.btn_down00_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1514.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
