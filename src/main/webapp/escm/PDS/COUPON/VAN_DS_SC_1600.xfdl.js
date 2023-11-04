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
                this.set_name("VAN_DS_SC_1600");
                this.set_titletext("할인쿠폰 일괄등록");
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

            obj = new Dataset("ds_seq", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TEMP_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"TOTAL_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"SUCCESS_CNT\" type=\"STRING\" size=\"32\"/><Column id=\"ERROR_CNT\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_error", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ERROR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_CPN_C\" type=\"STRING\" size=\"256\"/><Column id=\"DC_NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_SC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DC_VLD_PRD_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DC_VLD_PRD_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"ERROR_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_auth", "absolute", null, "0", "379", "21", "204", null, this);
            obj.set_taborder("0");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_menu", "absolute", "0", "0", "323", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_fileDownload", "absolute", null, "0", "65", "21", "139", null, this);
            obj.set_taborder("8");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_findUpload", "absolute", null, "0", "77", "21", "60", null, this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_text("File Upload");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "0", "41", "21", "17", null, this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "49", "15", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_title_fileName", "absolute", "15", "10", "67", "21", null, null, this.div_search);
            obj.set_taborder("110");
            obj.set_text("File 명");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "771", "-1", "15", "145", null, null, this.div_search);
            obj.set_taborder("134");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new FileUpload("FileUpload00", "absolute", "71", "11", "319", "21", null, null, this.div_search);
            obj.set_taborder("135");
            obj.set_multiselect("true");
            obj.getSetter("timeout").set("0");
            obj.getSetter("retry").set("0");
            obj.getSetter("async").set("true");
            obj.getSetter("onload").set("FileUpload00_onload");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "32.95%", "31", null, "10", "53.94%", null, this.div_search);
            obj.set_taborder("136");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_cancel", "absolute", "396", "11", "51", "21", null, null, this.div_search);
            obj.set_taborder("137");
            obj.set_text("취소 ");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "77", null, null, "15", "26", this);
            obj.set_taborder("10");
            obj.set_text("div_list");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Button("btn_toggle00", "absolute", "46.07%", "0", null, "12", "45.94%", null, this.div_list);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_result", "absolute", "0", "46", null, "59", "0", null, this.div_list);
            obj.set_taborder("1");
            obj.set_binddataset("ds_result");
            obj.getSetter("titletext").set("업로드 결과");
            obj.set_scrollbars("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"67\"/><Column size=\"210\"/><Column size=\"257\"/><Column size=\"254\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"항목\"/><Cell col=\"1\" text=\"파일내 건수\"/><Cell col=\"2\" text=\"업로드 건수\"/><Cell col=\"3\" text=\"실패 건수\"/></Band><Band id=\"body\"><Cell text=\"건수\"/><Cell col=\"1\" text=\"bind:TOTAL_CNT\"/><Cell col=\"2\" text=\"bind:SUCCESS_CNT\"/><Cell col=\"3\" text=\"bind:ERROR_CNT\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_error", "absolute", "0", "145", null, null, "0", "0", this.div_list);
            obj.set_taborder("1");
            obj.set_binddataset("ds_error");
            obj.getSetter("titletext").set("등록실패 오류내용");
            obj.set_scrollbars("autovert");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"162\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"등록실패사유\"/><Cell col=\"2\" text=\"쿠폰종류\"/><Cell col=\"3\" text=\"쿠폰바코드\"/><Cell col=\"4\" text=\"상품바코드\"/><Cell col=\"5\" text=\"시작일자\"/><Cell col=\"6\" text=\"종료일자\"/><Cell col=\"7\" text=\"쿠폰상품명\"/><Cell col=\"8\" text=\"오류설명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:ERROR_TYPE\"/><Cell col=\"2\" text=\"bind:CPN_KDC\"/><Cell col=\"3\" text=\"bind:NA_CPN_C\"/><Cell col=\"4\" text=\"bind:DC_NA_WRS_C\"/><Cell col=\"5\" text=\"bind:DC_VLD_PRD_ST_DT\"/><Cell col=\"6\" text=\"bind:DC_VLD_PRD_ED_DT\"/><Cell col=\"7\" text=\"bind:CPN_WRSNM\"/><Cell col=\"8\" text=\"bind:ERROR_DSC\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static51", "absolute", "17", "123", "135", "21", null, null, this.div_list);
            obj.set_taborder("2");
            obj.set_text("업로드 실패사유");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "17", "23", "135", "21", null, null, this.div_list);
            obj.set_taborder("3");
            obj.set_text("업로드 결과");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_list.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 49, this.div_search,
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
            		p.set_text("div_list");
            		p.set_visible("false");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1550");
            		p.set_titletext("할인쿠폰 일괄등록");

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
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1600.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1600.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e) 
        {
        	this.gfn_setInitForm(obj, e); //공통
        	this.btnDisable([this.btn_findUpload,this.btn_save]);
        	
        	var fileParam = {
        		form:this,													//*필수 - 폼
        		param:[{//필요없는 프로퍼티는 주석처리
        				fileObj: this.div_search.FileUpload00,				//*필수 - 파일컴포넌트
        				dataset: this.ds_uploadresult,						//파일정보 데이터셋
        				maxSize:2,											//허용할 파일 사이즈(MB)
        				maxLength:1,										//허용할 파일갯수
        				//ext:['data','DAT'],									//허용할 확장자명
        				cancelBtn: this.div_search.btn_cancel,			//취소버튼 컴포넌트
        				cancel_after:function(){							//취소버튼 눌렀을때 실행
        					
        				},
        				valid_after_fail: 'FileUpload00_onerror',  			//파일검사 실패후 호출할 함수명 또는 함수(업로드전)
        				upload_after_succ: 'FileUpload00_onsuccess'    	//파일 업로드 성공후 호출할 함수명 또는 함수(업로드후)
        				//upload_after_fail: 'FileUpload00_onerror'  	    	//파일 업로드 실패후 호출할 함수명 또는 함수(업로드후)
        			}]
        	};
        	this.gfn_addEventFileUpload(fileParam);							//이벤트 등록
        };

        this.fn_afterFormOnload = function() //onload
        {

        }

        //SINGLE DOWNLOAD
        this.btn_down01_onclick = function(obj,e)
        {

        	var systemFileName ="VAN_DS_SC_1600.data";
        	var fileName = "coupon_sample.data";
        	
        	var strDownUrl = application.gv_server_url+"rest/common/fileDownload?systemFileName="+systemFileName+"&fileName="+fileName+"&isSampleFile=Y";
        	var wbs_dw     = this.gfn_createWebBorwserComponent(this);
        	
        	wbs_dw.set_url(strDownUrl);
        }

        this.FileUpload00_onsuccess = function(obj,e)
        {
        	if( e.datasets == null )
        	{
        		trace("업로드 실패");
        		//this.div_search.txa_excel00.set_value("업로드 실패");
        	} else {
        		trace("업로드 성공");
        		//this.div_search.txa_excel00.set_value("업로드 성공");
        		
        		this.ds_uploadresult.clear();
        		this.ds_uploadresult.copyData(e.datasets[0]);		
        		this.ds_uploadresult.addColumn("CHK", "string"); //멀티건 인경우 'CHK'컬럼추가
        	}	
        }

        this.FileUpload00_onerror = function(obj,e)
        {
        	trace("FileUpload00_onerror");
        	trace("e.errorcode: "+e.errorcode);
        	trace("e.errormsg: "+e.errormsg);
        }

        

        //Validation Check
        this.fFileOpenValid = function(){
        	return true;
        }

        //조회 조건 숨김 여부 이벤트
        this.div_list_btn_toggle00_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        
        this.btn_save00_onclick = function(obj,e){
        	if(this.ds_seq.getColumn(0,"TEMP_SEQ") == null) {
        		alert("쿠폰파일을 먼저 업로드 하십시오.")
        		return;
        	}

        	if(this.ds_error.rowcount != 0) {
        		if(!application.confirm( "쿠폰파일에 에러 항목이 있습니다.\n이를 무시하고 저장하시겠습니까?" )) {
        			return;
        		}
        	}

        	var params	      = "TEMP_SEQ="+this.ds_seq.getColumn(0,"TEMP_SEQ");
        	var sSvcID        = "insertEventCPN";//통신아이디
        	var sURL          = "svc::rest/pds/coupon/insertEventCPN";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "";
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType 	  = "U"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);	
        }

        this.div_search_btn_findUpload_onclick = function(obj,e)
        {
        	var params	      = "systemFileName="+this.ds_uploadresult.getColumn(0,"SYSTEMFILENAME");
        	var sSvcID        = "uploadCoupon";//통신아이디
        	var sURL          = "svc::rest/pds/coupon/uploadCoupon";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_seq=seqDS ds_result=RESULT_DS ds_error=ERROR_DS";
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType 	  = "U"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.fn_callback = function(svcID,ErrorCode,ErrorMsg)
        {
        	trace(svcID);
        	trace(ErrorCode);
        	trace(ErrorMsg);
        	
        	if(ErrorCode < 0)
        	{
        		//this.gfn_getMessage("alert", ErrorMsg);
        		alert(ErrorMsg);
        		return;
        	}else{
        		if(svcID == "uploadCoupon" && ErrorMsg=="SUCCESS"){
        		    if(this.ds_error.rowcount == 0) {
        				this.div_list.grd_error.set_nodatatext("첨부파일에서 발견된 오류가 없습니다.");	
        		    }
        			this.div_list.set_visible(true);			
        		} else if(svcID == "insertEventCPN" && ErrorMsg=="SUCCESS"){
        			alert("쿠폰정보가 저장되었습니다.");
        			this.reload();
        		} else if(svcID == "insertEventCPN" && ErrorMsg!="SUCCESS"){
        			alert(ErrorMsg);
        			this.reload();
        		}
        	}	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_fileDownload.addEventHandler("onclick", this.btn_down01_onclick, this);
            this.btn_findUpload.addEventHandler("onclick", this.div_search_btn_findUpload_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save00_onclick, this);
            this.div_search.FileUpload00.addEventHandler("onsuccess", this.FileUpload00_onsuccess, this);
            this.div_search.FileUpload00.addEventHandler("onerror", this.FileUpload00_onerror, this);
            this.div_search.FileUpload00.addEventHandler("onitemchanged", this.FileUpload00_onitemchanged, this);
            this.div_list.btn_toggle00.addEventHandler("onclick", this.div_list_btn_toggle00_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1600.xfdl");
        this.loadPreloadList();
       
    };
}
)();
