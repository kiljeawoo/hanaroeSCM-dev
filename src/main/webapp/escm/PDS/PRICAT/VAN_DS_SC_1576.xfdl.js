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
                this.set_name("VAN_DS_SC_1576");
                this.set_titletext("물류센터결품내역 일괄등록");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Bzplc", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"SHRT_BZPLNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPL_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"BZPL_DTI_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"BZPL_TPNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPL_DTI_TPNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_excel_bind", this);
            obj._setContents("<ColumnInfo><Column id=\"A\" type=\"STRING\" size=\"256\"/><Column id=\"B\" type=\"STRING\" size=\"256\"/><Column id=\"C\" type=\"STRING\" size=\"256\"/><Column id=\"D\" type=\"STRING\" size=\"256\"/><Column id=\"E\" type=\"STRING\" size=\"256\"/><Column id=\"F\" type=\"STRING\" size=\"256\"/><Column id=\"G\" type=\"STRING\" size=\"256\"/><Column id=\"H\" type=\"STRING\" size=\"256\"/><Column id=\"I\" type=\"STRING\" size=\"256\"/><Column id=\"J\" type=\"STRING\" size=\"256\"/><Column id=\"K\" type=\"STRING\" size=\"256\"/><Column id=\"L\" type=\"STRING\" size=\"256\"/><Column id=\"M\" type=\"STRING\" size=\"256\"/><Column id=\"N\" type=\"STRING\" size=\"256\"/><Column id=\"O\" type=\"STRING\" size=\"256\"/><Column id=\"P\" type=\"STRING\" size=\"256\"/><Column id=\"Q\" type=\"STRING\" size=\"256\"/><Column id=\"R\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_menu", "absolute", "0", "0", "397", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "259", null, this);
            obj.set_taborder("1");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear00", "absolute", null, "0", "53", "21", "137", null, this);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "0", "41", "21", "15", null, this);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "73", "15", null, this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_title00", "absolute", "15", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("26");
            obj.set_text("File 명");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "16.69%", "31", null, "10", "70.27%", null, this.div_search);
            obj.set_taborder("28");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_bzpl_list", "absolute", "574", "10", "200", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("31");
            obj.set_codecolumn("NA_BZPLC");
            obj.set_datacolumn("SHRT_BZPLNM");
            obj.set_innerdataset("@ds_Bzplc");
            obj = new FileUpload("FileUpload00", "absolute", "70", "10", "266", "21", null, null, this.div_search);
            obj.set_taborder("32");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title01", "absolute", "471", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("33");
            obj.set_text("물류센터코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title02", "absolute", "339", "10", "190", "21", null, null, this.div_search);
            obj.set_taborder("34");
            obj.set_text("[최대건수 1000건]");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title03", "absolute", "73", "36", "253", "37", null, null, this.div_search);
            obj.set_taborder("35");
            obj.set_text("적용일은 항상 현재 날짜로 등록됩니다.");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_upload", "absolute", null, "0", "77", "21", "58", null, this);
            obj.set_taborder("7");
            obj.set_text("File Upload");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_master", "absolute", "0", "120", null, null, "15", "3", this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_excel_bind");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"116\"/><Column size=\"200\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"01A 일련번호\"/><Cell col=\"1\" text=\"02B 경제통합 사업장코드\"/><Cell col=\"2\" text=\"03C 상품코드\"/><Cell col=\"3\" text=\"04D 상품명\"/><Cell col=\"4\" text=\"05E 거래처코드\"/><Cell col=\"5\" text=\"06F 거래처명\"/><Cell col=\"6\" text=\"07G 연락처전화번호\"/><Cell col=\"7\" text=\"08H 신청내용\"/><Cell col=\"8\" text=\"09I 발주일자\"/><Cell col=\"9\" text=\"10J 발주전표번호\"/><Cell col=\"10\" text=\"11K 발주일련번호\"/><Cell col=\"11\" text=\"12L 발주수량\"/><Cell col=\"12\" text=\"13M 발주금액\"/><Cell col=\"13\" text=\"14N 입고수량\"/><Cell col=\"14\" text=\"15O 미입고수량\"/><Cell col=\"15\" text=\"16P 미입고사유코드\"/><Cell col=\"16\" text=\"17Q 공급가능일자\"/><Cell col=\"17\" text=\"18R 미입고사유(기타)\"/></Band><Band id=\"body\"><Cell text=\"bind:A\"/><Cell col=\"1\" text=\"bind:B\"/><Cell col=\"2\" text=\"bind:C\"/><Cell col=\"3\" text=\"bind:D\"/><Cell col=\"4\" text=\"bind:E\"/><Cell col=\"5\" text=\"bind:F\"/><Cell col=\"6\" text=\"bind:G\"/><Cell col=\"7\" text=\"bind:H\"/><Cell col=\"8\" text=\"bind:I\"/><Cell col=\"9\" text=\"bind:J\"/><Cell col=\"10\" text=\"bind:K\"/><Cell col=\"11\" text=\"bind:L\"/><Cell col=\"12\" text=\"bind:M\"/><Cell col=\"13\" text=\"bind:N\"/><Cell col=\"14\" text=\"bind:O\"/><Cell col=\"15\" text=\"bind:P\"/><Cell col=\"16\" text=\"bind:Q\"/><Cell col=\"17\" text=\"bind:R\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sample", "absolute", null, "0", "65", "21", "191", null, this);
            obj.set_taborder("9");
            obj.set_text("SAMPLE");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 73, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1580");
            		p.set_titletext("물류센터결품내역 일괄등록");

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
        this.addIncludeScript("VAN_DS_SC_1576.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1576.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
           this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	var fileParam = {
        		form:this,													//*필수 - 폼
        		param:[{//필요없는 프로퍼티는 주석처리
        				fileObj: this.div_search.FileUpload00,				//*필수 - 파일컴포넌트
        				dataset: this.ds_uploadresult,						//파일정보 데이터셋
        				maxSize:1,											//허용할 파일 사이즈(MB)
        				maxLength:1,										//허용할 파일갯수
        				ext:['xls','xlsx'],									//허용할 확장자명
        				cancel_after:function(){							//취소버튼 눌렀을때 실행
        					this.form.div_search.FileUpload00.set_text("");
        				},
        				valid_after_fail: 'FileUpload00_onerror',  			//파일검사 실패후 호출할 함수명 또는 함수(업로드전)
        				upload_after_succ: 'FileUpload00_onsuccess',    	//파일 업로드 성공후 호출할 함수명 또는 함수(업로드후)
        				upload_after_fail: 'FileUpload00_onerror'  	    	//파일 업로드 실패후 호출할 함수명 또는 함수(업로드후)
        			}]
        	};
        	this.gfn_addEventFileUpload(fileParam);							//이벤트 등록
        	this.div_auth.cbo_authorityWorkplace.addEventHandler('onitemchanged',this.trplChange,this);
        	this.div_auth.chk_all.set_visible(false);
        	this.getBzpl();	
        }
        this.trplChange = function()
        {
        	this.getBzpl();
        }
        //초기화
        this.btn_clear00_onclick = function(obj,e)
        {
        	this.reload();
        }

        this.FileUpload00_onsuccess = function(obj,e)
        {	trace('성공');
        	this.ds_uploadresult.clear();
        	this.ds_uploadresult.copyData(e.datasets[0]);
        	this.ds_uploadresult.addColumn("CHK", "string"); //멀티건 인경우 'CHK'컬럼추가
        }

        this.FileUpload00_onerror = function(obj,e)
        {
        	trace("FileUpload00_onerror");
        	trace("e.errorcode: "+e.errorcode);
        	trace("e.errormsg: "+e.errormsg);
        }

        //UPLOAD
        this.FileUpload00_onitemchanged = function(obj,e)
        {
        	this.gfn_callUpload(obj);
        }

        
        //물류센터 조회
        this.getBzpl = function()
        {
        	var params = "TRPL_C="+this.getTrplCode();
        	
        	var sSvcID        = "getBzpl_code";//통신아이디
        	var sURL          = "svc::rest/pds/stock/getBZPLCode";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_Bzplc=ds_Bzplc";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.validation = function()
        {
        	var ds = this.ds_excel_bind;
        	if(ds.rowcount > 1000){
        		this.alert("1,000건 이상 연계자료는 System부하관계로 처리할수 없으니 화일을 분리하여 회차단위로 연계처리하시기 바랍니다");
        		return;
        	}
        	for(var i = 0; i<ds.rowcount; i++){
        		if (this.gfn_nullToEmpty(ds.getColumn(i,"")).length > 4 ) {
        		   this.alert("라인번호 ["+(i+1)+"] 1번째 Cell 값["+parent.framMiddle.myTbd.rows(i).cells( 1).innerText+"]은 자리수를 4자리 이하로 작성하세요.");
        		   return false;
        		}

        		if (!isNumber(ds.getColumn(i,""))) {
        		   this.alert("라인번호 ["+(i+1)+"] 1번째 Cell 값["+parent.framMiddle.myTbd.rows(i).cells( 1).innerText+"]은 숫자 형태로 작성하세요.");
        		   return false;
        		}

        		if ( parseInt(ds.getColumn(i,""))  > parseInt(ds.getColumn(i,"")) ) {
        		   this.alert("라인번호 ["+(i+1)+"] 1번째 Cell 값["+parent.framMiddle.myTbd.rows(i).cells( 1).innerText+"]은\n0번째 Cell 값["+parent.framMiddle.myTbd.rows(i).cells( 0).innerText+"보다 커야 합니다.");
        		   return false;
        		}

        		if (i > 0 ) {
        		   if ( parseInt(ds.getColumn(i,"")) >= parseInt(ds.getColumn(i,"")) ) {
        			   this.alert("라인번호 ["+(i+1)+"] 1번째 Cell 값["+parent.framMiddle.myTbd.rows(i).cells( 1).innerText+"]은\n이전 Cell 값["+parent.framMiddle.myTbd.rows(i-1).cells( 1).innerText+"]보다 커야 합니다.");
        			   return false;
        		   }
        		}

        		if (!isNumber(ds.getColumn(i,""))) {
        		   this.alert("라인번호 ["+(i+1)+"] 2번째 Cell 값["+parent.framMiddle.myTbd.rows(i).cells( 2).innerText+"]은 숫자 형태로 작성하세요.");
        		   return false;
        		}
        	}
        	return true;
        	
        }

        this.fn_callback = function(svcID,nCD,sMSG)
        {	
        	if(nCD < 0){
        		this.gfn_getMessage('alert',sMSG);
        		return;
        	}else{
        		if(svcID == "getBzpl_code"){
        			if (this.ds_Bzplc.insertRow(0) != -1){
        				this.ds_Bzplc.setColumn(0,"NA_BZPLC","");
        				this.ds_Bzplc.setColumn(0,"SHRT_BZPLNM","- 선택안됨 -");
        			};
        			this.div_search.cbo_bzpl_list.set_index(0);
        		}
        		
        		if(svcID == "uploadFile"){
        		    if(this.ds_excel_bind.rowcount == 0) {
        				this.grd_main.set_nodatatext("결품등록 내용이 없습니다.");	
        		    }			
        		}
        		
        		if(svcID == "saveShortageFile"){
        			alert("결품내역이 저장되었습니다.");
        			this.reload();
        		}
        	}
        }

        this.btn_save_onclick = function(obj,e)
        {
        	if(this.ds_excel_bind.rowcount == 0) {
        		alert("먼저 결품등록 파일을 업로드해주십시오. ")
        		return;
        	}
        	
        	
        	var params = "NA_BZPLC="+this.div_search.cbo_bzpl_list.value;
        	
        	trace(params);				
        	var sSvcID        = "saveShortageFile";//통신아이디
        	var sURL          = "svc::rest/pds/pricat/saveShortageFile";// 호출할 서버 페이지 주소
        	var sInDatasets   = "in_ds=ds_excel_bind:A";//보내는데이터셋
        	var sOutDatasets  = "";
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType 	  = "U"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);	
        }

        this.btn_upload_onclick = function(obj,e)
        {
        	if(this.div_search.cbo_bzpl_list.value == ""){
        		this.alert('물류센터 코드를 입력하세요.');
        		return;
        	}
        	
        	var params	      = "systemFileName="+this.ds_uploadresult.getColumn(0,"SYSTEMFILENAME")
        					   +" NA_BZPLC="+this.div_search.cbo_bzpl_list.value;
        					   
        	var sSvcID        = "uploadFile";//통신아이디
        	var sURL          = "svc::rest/pds/pricat/uploadShortageFile";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_excel_bind=ds_excel_bind";
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType 	  = "U"; // U:저장/삭제, S:조회
        	trace(params);
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        /*sample 다운로드 클릭*/
        this.btn_sample_onclick = function(obj,e)
        {
        	var systemFileName ="sample_shortageItem.xlsx";
        	var fileName = "sample_shortageItem.xlsx"; //다운로드 할 파일 이름
        	
        	var strDownUrl = application.gv_server_url+"rest/common/fileDownload?systemFileName="+systemFileName+"&fileName="+fileName+"&isSampleFile=Y";
        	var wbs_dw     = this.gfn_createWebBorwserComponent(this);
        	
        	wbs_dw.set_url(strDownUrl);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_clear00.addEventHandler("onclick", this.btn_clear00_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.div_search.FileUpload00.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.div_search.FileUpload00.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.div_search.FileUpload00.addEventHandler("onitemchanged", this.div_search_FileUpload00_onitemchanged, this);
            this.btn_upload.addEventHandler("onclick", this.btn_upload_onclick, this);
            this.btn_sample.addEventHandler("onclick", this.btn_sample_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1576.xfdl");
        this.loadPreloadList();
       
    };
}
)();
