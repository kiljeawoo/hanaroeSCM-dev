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
                this.set_name("OMG_DS_SC_311390");
                this.set_titletext("부속계약서(농산)");
                this._setFormPosition(0,0,788,500);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_etcEltStylAmm101", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CTRW_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_eltCtrwDtl01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"MN_CTRW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"메인계약서종류코드\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\" sumtext=\"계약서양식버젼\"/><Column id=\"CNR_DT\" type=\"STRING\" size=\"256\" sumtext=\"검수일\"/><Column id=\"PSG_MM\" type=\"STRING\" size=\"256\" sumtext=\"경과분/월\"/><Column id=\"PSG_DD\" type=\"STRING\" size=\"256\" sumtext=\"경과분/일\"/><Column id=\"ETR_FEE\" type=\"STRING\" size=\"256\" sumtext=\"수탁수수료\"/><Column id=\"PHD_FEERT\" type=\"STRING\" size=\"256\" sumtext=\"물류수수료율\"/><Column id=\"LIG_PLTPE\" type=\"STRING\" size=\"256\" sumtext=\"주류파렛트당\"/><Column id=\"MEXP_DD\" type=\"STRING\" size=\"256\" sumtext=\"관리비일\"/><Column id=\"RT\" type=\"STRING\" size=\"256\" sumtext=\"마진율\"/><Column id=\"BLM_GRMY\" type=\"STRING\" size=\"256\" sumtext=\"하자보증금\"/><Column id=\"WRS_PRM_PY\" type=\"STRING\" size=\"256\" sumtext=\"상품대금 지금\"/><Column id=\"GRMY\" type=\"STRING\" size=\"256\" sumtext=\"보증금\"/><Column id=\"WRS_SPYAM\" type=\"STRING\" size=\"256\" sumtext=\"상품공급액\"/><Column id=\"CTR_CLO\" type=\"STRING\" size=\"256\" sumtext=\"계약해지\"/><Column id=\"SCTR_SJT\" type=\"STRING\" size=\"256\" sumtext=\"특약사항\"/><Column id=\"CTRW_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일 이름\"/><Column id=\"CTRW_FL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일전체경로\"/><Column id=\"CTRW_FL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일크기\"/><Column id=\"APDFLNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일 이름\"/><Column id=\"APDFL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일전체경로\"/><Column id=\"APDFL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일크기\"/><Column id=\"SYS_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"시스템 파일이름\"/><Column id=\"CTRW_TINM\" type=\"STRING\" size=\"256\" sumtext=\"제목\"/><Column id=\"CTRW_CNTN\" type=\"STRING\" size=\"256\" sumtext=\"계약서내용\"/><Column id=\"CTRW_SGNT\" type=\"STRING\" size=\"256\" sumtext=\"계약서서명\"/><Column id=\"BRAND_N\" type=\"STRING\" size=\"256\" sumtext=\"브랜드명\"/><Column id=\"RETURN_DATE\" type=\"STRING\" size=\"256\" sumtext=\"반품기간\"/><Column id=\"PHD_FEERT1\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_FEERT2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"ETC4\" type=\"STRING\" size=\"256\"/><Column id=\"ETC5\" type=\"STRING\" size=\"256\"/><Column id=\"ETC6\" type=\"STRING\" size=\"256\"/><Column id=\"ETC7\" type=\"STRING\" size=\"256\"/><Column id=\"ETC8\" type=\"STRING\" size=\"256\"/><Column id=\"ETC9\" type=\"STRING\" size=\"256\"/><Column id=\"ETCA\" type=\"STRING\" size=\"256\"/><Column id=\"ETC10\" type=\"STRING\" size=\"256\" sumtext=\"우편번호1\"/><Column id=\"ETC11\" type=\"STRING\" size=\"256\" sumtext=\"우편번호2\"/><Column id=\"ETC12\" type=\"STRING\" size=\"256\" sumtext=\"주소1\"/><Column id=\"ETC13\" type=\"STRING\" size=\"256\" sumtext=\"주소2\"/><Column id=\"ETC14\" type=\"STRING\" size=\"256\" sumtext=\"점유면적\"/><Column id=\"ETC15\" type=\"STRING\" size=\"256\" sumtext=\"공유면적\"/><Column id=\"ETC16\" type=\"STRING\" size=\"256\" sumtext=\"면적 계\"/><Column id=\"ETC17\" type=\"STRING\" size=\"256\" sumtext=\"임대차기간 시작일\"/><Column id=\"ETC18\" type=\"STRING\" size=\"256\" sumtext=\"임대차기간 종료일\"/><Column id=\"ETC19\" type=\"STRING\" size=\"256\" sumtext=\"임대보증금\"/><Column id=\"ETC20\" type=\"STRING\" size=\"256\" sumtext=\"월임대료 금액\"/><Column id=\"ETC21\" type=\"STRING\" size=\"256\" sumtext=\"월임대료 %\"/><Column id=\"ETC22\" type=\"STRING\" size=\"256\" sumtext=\"업종\"/><Column id=\"ETC23\" type=\"STRING\" size=\"256\" sumtext=\"매장명\"/><Column id=\"ETC24\" type=\"STRING\" size=\"256\" sumtext=\"주요판매상품1 4000 바이트\"/><Column id=\"ETC25\" type=\"STRING\" size=\"256\" sumtext=\"주요판매상품2 4000 바이트\"/><Column id=\"ETC26\" type=\"STRING\" size=\"256\" sumtext=\"주요판매상품3 4000 바이트\"/><Column id=\"ETC27\" type=\"STRING\" size=\"256\" sumtext=\"주요판매상품4 4000 바이트\"/><Column id=\"ETC28\" type=\"STRING\" size=\"256\" sumtext=\"주요판매상품5 4000 바이트\"/><Column id=\"ETC29\" type=\"STRING\" size=\"256\" sumtext=\"임대보증금 납부일자\"/><Column id=\"ETC30\" type=\"STRING\" size=\"256\" sumtext=\"임대보증금 연체료율\"/><Column id=\"ETC31\" type=\"STRING\" size=\"256\" sumtext=\"보증금 공제\"/><Column id=\"ETC32\" type=\"STRING\" size=\"256\" sumtext=\"임대료 납부일\"/><Column id=\"ETC33\" type=\"STRING\" size=\"256\" sumtext=\"임대료 연체료율\"/><Column id=\"ETC34\" type=\"STRING\" size=\"256\" sumtext=\"판매대금 지급일\"/><Column id=\"ETC35\" type=\"STRING\" size=\"256\" sumtext=\"관리비 및 시설 이용료 납부\"/><Column id=\"ETC36\" type=\"STRING\" size=\"256\" sumtext=\"비밀유지기간\"/><Column id=\"ETC37\" type=\"STRING\" size=\"256\" sumtext=\"임대보증금\"/><Column id=\"ETC38\" type=\"STRING\" size=\"256\" sumtext=\"지연이자\"/><Column id=\"ETC39\" type=\"STRING\" size=\"256\" sumtext=\"임대료 위약벌\"/><Column id=\"ETC40\" type=\"STRING\" size=\"256\"/><Column id=\"ETC41\" type=\"STRING\" size=\"256\"/><Column id=\"ETC42\" type=\"STRING\" size=\"256\"/><Column id=\"ETC43\" type=\"STRING\" size=\"256\"/><Column id=\"ETC44\" type=\"STRING\" size=\"256\"/><Column id=\"ETC45\" type=\"STRING\" size=\"256\"/><Column id=\"ETC46\" type=\"STRING\" size=\"256\"/><Column id=\"ETC47\" type=\"STRING\" size=\"256\"/><Column id=\"ETC48\" type=\"STRING\" size=\"256\"/><Column id=\"ETC49\" type=\"STRING\" size=\"256\"/><Column id=\"ETC50\" type=\"STRING\" size=\"256\"/><Column id=\"ETC51\" type=\"STRING\" size=\"256\"/><Column id=\"ETC52\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_related", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"1\"/><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NA_TRPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"STS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_file", this);
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


            
            // UI Components Initialize
            obj = new Static("Static72", "absolute", "16.88%", "460", null, "29", "0.89%", null, this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static65", "absolute", "16.88%", "233", null, "228", "0.89%", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delPlan", "absolute", "81.22%", "464", null, "21", "11.17%", null, this);
            obj.set_taborder("0");
            obj.set_text("변경");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new TextArea("edt_ETC52", "absolute", "19.67%", "238", null, "217", "5.46%", null, this);
            obj.set_taborder("1");
            obj.set_scrollbars("autovert");
            obj.set_wordwrap("char");
            obj.set_readonly("true");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("2000");
            obj.style.set_background("#ecececff");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload", "absolute", "19.67%", "464", null, "24", "159", null, this);
            obj.set_taborder("2");
            obj.getSetter("retry").set("0");
            obj.set_scrollbars("none");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static66", "absolute", "0%", "233", null, "228", "80.96%", null, this);
            obj.set_taborder("3");
            obj.set_text("내  용");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static73", "absolute", "0", "460", null, "29", "80.96%", null, this);
            obj.set_taborder("5");
            obj.set_text("기타 (이미지)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "207", "59.26%", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_text("부속계약서 내용");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_related", "absolute", "0", "77", null, "113", "0.51%", null, this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_related");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"47\"/><Column size=\"138\"/><Column size=\"223\"/><Column size=\"201\"/><Column size=\"123\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"mask\" text=\"계약서번호\" mask=\"######\"/><Cell col=\"3\" text=\"계약서종류\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"mask\" text=\"계약기간\" mask=\"######\"/><Cell col=\"5\" text=\"계약서상태\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"padding:0 5 0 5;\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" edittype=\"none\" style=\"align:center middle;padding:0 5 0 5;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"expr:currow+1\"/><Cell col=\"2\" edittype=\"none\" style=\"align:center middle;padding:0 5 0 5;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ELT_CTRW_NO\"/><Cell col=\"3\" edittype=\"none\" style=\"align:center middle;padding:0 5 0 5;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:MN_CTRW_KD_NM\"/><Cell col=\"4\" edittype=\"none\" style=\"align:center middle;padding:0 5 0 5;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:CTR_DT\"/><Cell col=\"5\" edittype=\"none\" style=\"align:center middle;padding:0 5 0 5;\" text=\"bind:STS_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_origin", "absolute", null, "50", "107", "21", "0.89%", null, this);
            obj.set_taborder("9");
            obj.set_text("계약서 보기");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "0", "10", "59.26%", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_text("[부속계약서]");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("left middle");
            obj.style.set_padding("0 0 1 5");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", "0", "50", "59.26%", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_text("관련계약서");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 500, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("부속계약서(농산)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item18","edt_ETC52","value","ds_eltCtrwDtl01","ETC52");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_311393.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_311393.xfdl", function() {
        //include "lib::comLib.xjs";

        var fv_position = 0; //위치값
        var fv_chk = 0 ;  //데이터 체크 

        this.form_onload = function(obj,e)
        {   
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	// 파일업로드 설정
        	var fileParam = {
        		form:this,
        		param:[{
        				fileObj: this.FileUpload,
        				maxSize:3,						//허용할 파일 사이즈(MB)
        				maxLength:1,					//허용할 파일갯수
        				ext:['jpg','jpeg','png'],		//허용할 확장자명
        				upload_after_succ: 'FileUpload_onsuccess'    	//파일 업로드 성공후 호출할 함수이름
        			}]
        	};
        	this.gfn_addEventFileUpload(fileParam);
        	
        	// 폼양식
        	for (var i = 0 ; i < this.parent.ds_etcEltStylAmm.rowcount; i++) {
        		if (this.parent.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC") == "193") {
        			this.ds_etcEltStylAmm101.copyRow(0, this.parent.ds_etcEltStylAmm, i);
        		}
        	}
        	//trace(this.parent.ds_eltCtrwDtl.saveXML()) ;
        	//this.parent.ds_eltCtrwDtl.set_enableevent(false);

        	for (var i = 0; i < this.parent.ds_eltCtrwDtl.rowcount; i++) {
        		if (this.parent.ds_eltCtrwDtl.getColumn(i, "MN_CTRW_KDC") == "193") {
        			fv_chk = 1 ;
        			
        			if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(i, "CTRW_STY_VER")) == "") {
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CTRW_STY_VER" , this.ds_etcEltStylAmm101.getColumn(0,"CTRW_STY_VER") ) ;		
        			}
        			if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(i, "CHG_SQNO")) == "") {
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CHG_SQNO" , this.parent.ds_register.getColumn(0 ,"CHG_SQNO"));
        			}
        			if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(i, "ETC52")) == "") {
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC52", 
        					'1. 목   적'
        					+ '\n 이 계약의 목적은 "구매자"가 "공급자"로부터 부가가치세를 포함하여 수취하던 취급수수료 및 물류수수료가 부가가치세 면세됨에 따른 변경사항을 반영하기 위함에 있다.'
        					+ '\n'
        					+ '\n2. 배송 및 그 비용의 부담'
        					+ '\n "구매자"는 "공급자"의 공급금액에 다음 각 호의 수수료율을 곱한 금액을 "공급자"로부터 수령할 수 있다. 취급수수료는 직송분에 대한 판매장 하역비, 전산제비용, 농업지원사업비 등 소요경비 개념이며, 물류수수료는 물류센터 경유분에 대한 하역비, 운반비, 물류센터 운영비 등의 물류비용 개념이다.'
        					+ '\n  1. 취급수수료 : 2.2%'
        					+ '\n  2. 물류수수료 : 과일·채소 4.4%, 친환경 5.5%'
        					+ '\n'
        					+ '\n3. 특약사항'
        					+ '\n "구매자"가 "공급자"에게 대금 지급 시. 물류센터 경유분에 대해 물류수수료(일반 : 4.4%, 친환경 : 5.5%), 직송분에 대해 취급수수료(2.2%)를 차감하고 지급한다. 단, "공급자"가 농협경제지주 공판장 소속 중도매인인 경우 "구매자"가 대금을 소속 공판장의 은행계좌로 입금하면 "공급자"에게 지급할 대금에서 변제되는 것으로 본다.'
        				);
        			}
        			
        			//this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC17", this.parent.cal_ctrStDt.value) ; // 계약 시작일
        			//this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC18", this.parent.cal_ctrEdDt.value) ; // 계약 종료일
        						
        	        this.ds_eltCtrwDtl01.addRow();
        			this.ds_eltCtrwDtl01.copyRow(0, this.parent.ds_eltCtrwDtl, fv_position);
        			
        			if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(fv_position, "ETC49")) != "") {
        				this.FileUpload.set_enable(false); // 수정시에 기본 비활성
        				this.btn_delPlan.set_visible(true);
        			}
        			//this.parent.ds_eltCtrwDtl.set_enableevent(true);
        		}
        	}
        }

        this.FileUpload_onerror = function(obj,e)
        {
        // 	trace("FileUpload_onerror");
        // 	trace("e.errorcode: "+e.errorcode);
        // 	trace("e.errormsg: "+e.errormsg);	
        }

        this.FileUpload_onitemchanged = function(obj,e)
        {
            // alert("FileUpload_onitemchanged");   
        	this.gfn_callUpload(obj);
        }

        /*
         * 업로드처리이벤트 
         */
        this.FileUpload_onsuccess = function(obj,e)
        {
        	if( e.datasets == null ){
        		// trace("업로드 실패");
        	} else {		
        		this.ds_uploadresult.copyData(e.datasets[0]);					
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC49" , this.ds_uploadresult.getColumn(0,"ORGFNAME")) ;             // 매장위치: 첨부파일명   
        	    this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC50" , this.ds_uploadresult.getColumn(0,"SYSTEMFILENAME")) ;       // 매장위치:  시스템파일명
        	}	
        }

        // 도면 삭제
        this.btn_delPlan_onclick = function(obj,e)
        {
        	if (confirm("첨부파일을 변경하시겠습니까?")) {
        		this.FileUpload.set_enable(true);
        		this.FileUpload.deleteItem(0);
        		this.FileUpload.appendItem();
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC49", ""); // 매장위치: 첨부파일명   
        	    this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC50", ""); // 매장위치: 시스템파일명
        	}
        }

        /*
         * 편집값 세팅 
         */
        this.OMG_DS_SC_311301_ontextchanged = function(obj,e)
        {
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
            var strTitletext = "부속계약서";

            // 발주금액 대비 미납금액의 비율 손해배상 비율
        //     if (this.gfn_nullToEmpty(this.edt_ETC11.value) == "") {
        // 		alert("발주금액 대비 미납금액의 비율 10%미만 손해배상 비율을 입력해주세요.");
        // 		this.edt_ETC11.setFocus();
        // 		return false;
        // 	}
        	return true;
        }

        /*
         * 관련 계약서 로드
         */
        this.fn_loadRelatedElt = function()
        {
        	this.ds_related.clearData();

        	var eltCtrwNo = this.gfn_nullToEmpty(this.parent.ds_register_org.getColumn(0, "ELT_CTRW_NO"));
        	var chgSqNo = this.gfn_nullToEmpty(this.parent.ds_register_org.getColumn(0, "CHG_SQNO"));
        	
        	var param = "relyn=Y"
        		+ " relno=" + eltCtrwNo
        		+ " relseq=" + chgSqNo
        		+ " sts=A"
        	;

        	var sSvcID        = "relatedEltList";//통신아이디
        	var sURL          = "svc::rest/ct/eltctrw/retrieveRelatedEltCtrw";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_related=ds_elt";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {		
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "relatedEltList") {
        			if (this.ds_related.rowcount > 0) {
        				this.btn_origin.set_enable(true);
        			}
        		}
        	}
        }

        // 계약서 보기
        this.btn_origin_onclick = function(obj,e)
        {
        	var rowposition = -1;
        	for (var i = 0; i < this.ds_related.rowcount; i++) {
        		if (this.ds_related.getColumn(i, "ISCHECKED") == "1") {
        			rowposition = i;
        			break;
        		}
        	}
        	
        	if (rowposition == -1) {
        		this.alert("계약서를 먼저 선택해주시기 바랍니다.");
        		return;
        	}
        	
        	var mnCtrwKd = this.gfn_nullToEmpty(this.ds_related.getColumn(rowposition, "MN_CTRW_KD"));
        	var eltCtrwNo = this.gfn_nullToEmpty(this.ds_related.getColumn(rowposition, "ELT_CTRW_NO"));
        	var chgSqNo = this.gfn_nullToEmpty(this.ds_related.getColumn(rowposition, "CHG_SQNO"));
        	
        	// trace("관련 계약서 보기 : " + mnCtrwKd + " / " + eltCtrwNo + " / " + chgSqNo);
        	
        	// comEsum.xjs
        	this.eltOzViewer(mnCtrwKd, eltCtrwNo, chgSqNo); // type, eltCtrwNo, chgSqNo
        }

        this.grd_related_oncellclick = function(obj,e)
        {
        	if (e.cell==0) {
        		this.gfn_singleChk(obj,e);
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_file.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.ds_uploadresult.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_delPlan.addEventHandler("onclick", this.btn_delPlan_onclick, this);
            this.edt_ETC52.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.FileUpload.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.grd_related.addEventHandler("oncellclick", this.grd_related_oncellclick, this);
            this.btn_origin.addEventHandler("onclick", this.btn_origin_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_311393.xfdl");

       
    };
}
)();
