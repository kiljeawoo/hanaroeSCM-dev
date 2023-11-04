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
                this.set_name("FRM_VAN_DS_SC_0303");
                this.set_titletext("전자계약직인등록");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cif", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NUMBER\" type=\"INT\" size=\"7\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"50\"/><Column id=\"NA_MBCO_DSC\" type=\"INT\" size=\"7\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"TR_STOP_YN\" type=\"STRING\" size=\"1\"/><Column id=\"TR_STOP_RSNC\" type=\"STRING\" size=\"2\"/><Column id=\"TR_STOP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"50\"/><Column id=\"NA_TRPL_SEAL_FLNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cif_mbco", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_MBCO_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

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

            obj = new Dataset("ds_authBranch", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"AUTH_CHECK\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_menu", "absolute", "0", "0", "397", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "71", null, null, "15", "0", this);
            obj.set_taborder("6");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_main00", "absolute", "0", "74", null, null, "0", "10", this.div_list);
            obj.set_taborder("11");
            obj.set_binddataset("ds_cif");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"140\"/><Column size=\"240\"/><Column size=\"110\"/><Column size=\"127\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"본/지사 코드\"/><Cell col=\"2\" text=\"본/지사 명\"/><Cell col=\"3\" text=\"본/지사구분\"/><Cell col=\"4\" text=\"직인파일등록여부\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:NA_TRPL_C\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:CLNTNM\"/><Cell col=\"3\" text=\"bind:NA_MBCO_DSC\" expr=\"expr:NA_MBCO_DSC=='1'?'본사(소)':'지사(소)'\"/><Cell col=\"4\" text=\"bind:NA_TRPL_SEAL_FLNM\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("sta_title03", "absolute", "0", "9", "112", "29", null, null, this.div_list);
            obj.set_taborder("13");
            obj.set_text("업체코드");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("sta_back_bar11", "absolute", "109", "9", null, "29", "0", null, this.div_list);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_list.addChild(obj.name, obj);
            obj = new FileUpload("FileUpload00", "absolute", "368", "13", "328", "21", null, null, this.div_list);
            obj.set_taborder("12");
            obj.set_multiselect("true");
            obj.getSetter("timeout").set("0");
            obj.getSetter("retry").set("0");
            obj.getSetter("async").set("true");
            obj.getSetter("onload").set("FileUpload00_onload");
            obj.set_index("0");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("sta_title00", "absolute", "252", "9", "112", "29", null, null, this.div_list);
            obj.set_taborder("15");
            obj.set_text("직인파일업로드");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("edt_trpl_c", "absolute", "116", "13", "132", "21", null, null, this.div_list);
            obj.set_taborder("16");
            obj.set_cssclass("WF_Essential");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_f_cancel", "absolute", "700", "13", "50", "21", null, null, this.div_list);
            obj.set_taborder("17");
            obj.set_text("취소");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "50", "442", "21", null, null, this.div_list);
            obj.set_taborder("18");
            obj.set_text("본/지사 코드를 리스트에서 선택 후 업로드 저장 및 삭제 바랍니다.");
            this.div_list.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "153", null, this);
            obj.set_taborder("7");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("8");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("10");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_text("Div02");
            		p.set_scrollbars("none");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_0180");
            		p.set_titletext("전자계약직인등록");

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
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_2303.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_2303.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
           this.gfn_setInitForm(obj, e); //공통
           
        	//그리드클릭 이벤트 등록
        	this.div_list.grd_main00.addEventHandler("oncellclick", this.grd_afterFnc, this);
        	
        	this.fn_checkBranch();            // 직매장여부 체크 
        };

        /*
         * 직매장 로그인 시 Y/N 리턴 
         */
        this.fn_checkBranch = function()
        {

        	var sParams = "branch_dsc="+ "01"  // 대리점 구분 01 직매장 
        				+ " mb_id=";
        	var sSvcID        = "branchCheck";
        	var sURL          = "svc::rest/pt/checkBranch";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_authBranch=ds_authBranch";  // 
        	var sArgument     =  sParams;
        	var sCallbackFunc = "fn_callback";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        //UPLOAD
        this.FileUpload00_onsuccess = function(obj,e)
        {
        	
        	this.ds_uploadresult.clear();
        	this.ds_uploadresult.copyData(e.datasets[0]);		
        	this.ds_uploadresult.addColumn("CHK", "string"); //멀티건 인경우 'CHK'컬럼추가
        	trace("SystemFileName="+this.ds_uploadresult.getColumn(0,"SYSTEMFILENAME"));
        	var fileObj = this.div_list.FileUpload00;
        	fileObj.clearEventHandler("onitemchanged");
        	fileObj.clearEventHandler("onsuccess");
        	fileObj.clearEventHandler("onerror");
        	this.div_list.FileUpload00.deleteItem(0);
        	this.div_list.FileUpload00.appendItem();
        	this.div_list.edt_trpl_c.set_value('');
        	this.btn_search00_onclick();
        	
        	//alert(fileObj._unique_id);
        	//$('#'+fileObj._unique_id).find('input').val('1');
        	//this.reload();
        	
        }

        this.fn_afterFormOnload = function()
        {
        	// 파일업로드 설정
        	var fileParam = {
        		form:this,
        		param:[{
        				fileObj: this.div_list.FileUpload00,
        				maxSize:3,						//허용할 파일 사이즈(MB)
        				maxLength:1,					//허용할 파일갯수
        				ext:['jpg','jpeg','png'],		//허용할 확장자명
        				upload_after_succ: 'FileUpload_onsuccess'    	//파일 업로드 성공후 호출할 함수이름
        			}]
        	};
        	this.gfn_addEventFileUpload(fileParam);
        	
        	this.div_list.grd_main00.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	this.div_auth.chk_all.set_visible(true);
        	this.btn_search00_onclick();
        	this.alert("직인등록 화면은 2020. 07. 01.(수)부터 비활성화 예정입니다. 계약서 작성일이 2020년 이전인 계약의 체결이 필요하신 경우, 2020. 06. 30.(화)까지 체결완료하시기 바랍니다.");
        }

        
        this.grd_afterFnc = function(obj,e)
        {
        	this.div_list.edt_trpl_c.set_value(this.ds_cif.getColumn(this.ds_cif.rowposition,"NA_TRPL_C"));	
        }

        this.btn_search00_onclick = function(obj,e)
        {
        	this.ds_cif.clearData();
        	var json = this.getParamJson(this.components);
        	json.TRPL_C = this.getTrplCode();
        	var params = this.getParamJsonToString(json);
        	
        	var sSvcID        = "p_search";//통신아이디
        	var sURL          = "svc::rest/pds/company/Company/CompanyTypes";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_cif=ds_cif";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        
        this.fn_callback = function(svcID,nCD,sMSG)//첫번째 인자값은 통신 ID
        {
        	if(nCD < 0){
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "p_search" && sMSGD == "SYSTEMERROR"){
        			this.div_list.grd_main00.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        		}
        		
        		if(svcID == "deleteImg"){
        			alert("정상적으로 삭제되었습니다.");
        			this.btn_search00_onclick();
        			return false;
        		}
        		
        		
        		if (svcID == "branchCheck") {

                    /*
                     *  직매장이 아닌 사업장인 경우
                     */
        			if (application.gv_userType == "03"  &&  this.ds_authBranch.getColumn(0, "AUTH_CHECK") != "Y" ) {
        				 // alert('직매장 -> ' + this.ds_authBranch.getColumn(0, "AUTH_CHECK"));
        				 // this.btn_save.set_visible(true);
        				 alert("하나로유통 직매장만 사용 가능한 메뉴 입니다. ");
        				 this.set_enable(false);
        			} 
        		}// branchCheck
        	}
        }

        this.btn_print00_onclick = function(obj,e)
        {
        	if(this.div_list.grd_main00.rowcount < 1){
        		this.gfn_getMessage('alert','result.message.search.no.exist.data');
        		return;
        	}
        	var trpl_text = this.getTrplCodePrint();
        	var ozParam = {
        		sId: 'VAN_DS_SC_1420',
        		sUrl: '/rest/oz/pds/company/Company/CompanyTypes',
        		paramType: 'param',
        		sParam: {
        			TRPL_C:this.getTrplCode(),
        			TRPL_C_TEXT:trpl_text
        		}
        	};
        	this.ozViewer(ozParam);	
        }

        this.btn_save_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.div_list.edt_trpl_c.value)){
        		alert("업체를 선택해 주세요");
        		return false;
        	}
        	if(this.gfn_isNull(this.div_list.FileUpload00.value)){
        		alert('직인파일을 선택해 주세요');
        		return false;
        	}
        	
        	var fileParam = {
        		form:this,													//*필수 - 폼
        		param:[{//필요없는 프로퍼티는 주석처리
        				doc_type : 'notice',
        				na_trpl_c : this.div_list.edt_trpl_c.value,
        				fileObj: this.div_list.FileUpload00,							//*필수 - 파일컴포넌트
        				dataset: this.ds_uploadresult,						//파일정보 데이터셋
        				maxSize:2,											//허용할 파일 사이즈(MB)
        				maxLength:1,										//허용할 파일갯수
        				ext:['jpg','jpeg','png','gif'],						//허용할 확장자명
        				cancelBtn: this.div_list.btn_f_cancel,						//취소버튼 컴포넌트
        				cancel_after:function(){							//취소버튼 눌렀을때 실행

        				},
        				//valid_after_fail: 'FileUpload00_onerror',  		//파일검사 실패후 호출할 함수명 또는 함수(업로드전)
        				upload_after_succ: 'FileUpload00_onsuccess'	      	//파일 업로드 성공후 호출할 함수명 또는 함수(업로드후)
        				//upload_after_fail: 'FileUpload00_onerror'  	   	//파일 업로드 실패후 호출할 함수명 또는 함수(업로드후)
        			}]
        	};
        	
        	this.gfn_addEventFileUpload(fileParam);							//이벤트 등록
        	this.fileUploadExec(this.div_list.FileUpload00);
        }

        

        

        this.div_list_btn_f_cancel_onclick = function(obj,e)
        {
        	var fileObj = this.div_list.FileUpload00;
        	fileObj.clearEventHandler("onitemchanged");
        	fileObj.clearEventHandler("onsuccess");
        	fileObj.clearEventHandler("onerror");
        	this.div_list.FileUpload00.deleteItem(0);
        	this.div_list.FileUpload00.appendItem();
        }

        this.btn_delete_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.div_list.edt_trpl_c.value)){
        		alert("업체를 선택해 주세요");
        		return false;
        	}
        	
        	if(this.ds_cif.getColumn(this.ds_cif.rowposition, "NA_TRPL_SEAL_FLNM") == "N"){
        		alert("직인파일이 등록되지 않았습니다.");
        		return false;
        	}
        		
        		
        	var chk = application.confirm("정말 삭제하겠습니까?");
        	if(chk){
        		
        		var params = "na_trpl_c=" + this.div_list.edt_trpl_c.value;
        		var sSvcID        = "deleteImg";//통신아이디
        		var sURL          = "svc::rest/common/deleteImg";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = params;// 파라미터
        		var sCallbackFunc = "fn_callback";//콜백
        		var tranType = "U"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_list.btn_f_cancel.addEventHandler("onclick", this.div_list_btn_f_cancel_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_search00.addEventHandler("onclick", this.btn_search00_onclick, this);
            this.btn_delete.addEventHandler("onclick", this.btn_delete_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_2303.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
