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
                this.set_titletext("부속계약서");
                this._setFormPosition(0,0,788,500);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static86", "absolute", "0", "50", "59.26%", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("관련계약서");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "0", "10", "59.26%", "21", null, null, this);
            obj.set_taborder("78");
            obj.set_text("[부속계약서]");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("left middle");
            obj.style.set_padding("0 0 1 5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_origin", "absolute", null, "50", "107", "21", "0.89%", null, this);
            obj.set_taborder("151");
            obj.set_text("계약서 보기");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_related", "absolute", "0", "77", null, "113", "0.51%", null, this);
            obj.set_taborder("152");
            obj.set_binddataset("ds_related");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"47\"/><Column size=\"138\"/><Column size=\"223\"/><Column size=\"201\"/><Column size=\"123\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"mask\" text=\"계약서번호\" mask=\"######\"/><Cell col=\"3\" text=\"계약서종류\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"mask\" text=\"계약기간\" mask=\"######\"/><Cell col=\"5\" text=\"계약서상태\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"padding:0 5 0 5;\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" edittype=\"none\" style=\"align:center middle;padding:0 5 0 5;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"expr:currow+1\"/><Cell col=\"2\" edittype=\"none\" style=\"align:center middle;padding:0 5 0 5;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ELT_CTRW_NO\"/><Cell col=\"3\" edittype=\"none\" style=\"align:center middle;padding:0 5 0 5;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:MN_CTRW_KD_NM\"/><Cell col=\"4\" edittype=\"none\" style=\"align:center middle;padding:0 5 0 5;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:CTR_DT\"/><Cell col=\"5\" edittype=\"none\" style=\"align:center middle;padding:0 5 0 5;\" text=\"bind:STS_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "207", "59.26%", "21", null, null, this);
            obj.set_taborder("153");
            obj.set_text("부속계약서 내용");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static72", "absolute", "16.88%", "460", null, "29", "0.89%", null, this);
            obj.set_taborder("154");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static73", "absolute", "0", "460", null, "29", "80.96%", null, this);
            obj.set_taborder("155");
            obj.set_text("기타 (이미지)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static65", "absolute", "16.88%", "233", null, "228", "0.89%", null, this);
            obj.set_taborder("156");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static66", "absolute", "0%", "233", null, "228", "80.96%", null, this);
            obj.set_taborder("157");
            obj.set_text("내  용");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload", "absolute", "19.67%", "464", null, "24", "159", null, this);
            obj.set_taborder("158");
            obj.getSetter("retry").set("0");
            obj.set_scrollbars("none");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new TextArea("edt_ETC52", "absolute", "19.67%", "238", null, "217", "5.46%", null, this);
            obj.set_taborder("159");
            obj.set_scrollbars("autovert");
            obj.set_wordwrap("char");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("2000");
            obj.set_readonly("true");
            obj.style.set_background("#ecececff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delPlan", "absolute", "81.22%", "464", null, "21", "11.17%", null, this);
            obj.set_taborder("160");
            obj.set_text("변경");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 500, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("부속계약서");

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
        this.addIncludeScript("OMG_DS_SC_311390_13.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_311390_13.xfdl", function() {
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
        		if (this.parent.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC") == "190") {
        			this.ds_etcEltStylAmm101.copyRow(0, this.parent.ds_etcEltStylAmm, i);
        		}
        	}
        	//trace(this.parent.ds_eltCtrwDtl.saveXML()) ;
        	//this.parent.ds_eltCtrwDtl.set_enableevent(false);

        	for (var i = 0; i < this.parent.ds_eltCtrwDtl.rowcount; i++) {
        		if (this.parent.ds_eltCtrwDtl.getColumn(i, "MN_CTRW_KDC") == "190") {
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
        					+ '\n "구매자"가 "공급자"에게 대금 지급 시. 물류센터 경유분에 대해 물류수수료(일반 : 4.4%, 친환경 : 5.5%), 직송분에 대해 취급수수료(2.2%)를 차감하고 지급한다.'
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
        	trace("FileUpload_onerror");
        	trace("e.errorcode: "+e.errorcode);
        	trace("e.errormsg: "+e.errormsg);	
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
        		trace("업로드 실패");
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
        	
        	trace("관련 계약서 보기 : " + mnCtrwKd + " / " + eltCtrwNo + " / " + chgSqNo);
        	
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
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_origin.addEventHandler("onclick", this.btn_origin_onclick, this);
            this.grd_related.addEventHandler("oncellclick", this.grd_related_oncellclick, this);
            this.FileUpload.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.edt_ETC52.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.btn_delPlan.addEventHandler("onclick", this.btn_delPlan_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_311390_13.xfdl");

       
    };
}
)();
