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
                this.set_name("popup01");
                this.set_cssclass("frm_WF_PopupBg");
                this.set_titletext("데이터마트 신청등록");
                this._setFormPosition(0,0,600,314);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dmart_req", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_TM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DOC\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_TYPE_DTL1\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_DAY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_FM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RSLT_DOC_FMT\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_ST_TM\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_ED_TM\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_DT\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_EDI_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_RELT_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"SMS_SEND_TM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_doc_type_dtl1", this);
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_C_EXPL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static09", "absolute", "0", "76", "17", "73", null, null, this);
            obj.set_taborder("8");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "339", "245", "91", "17", null, null, this);
            obj.set_taborder("10");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "442", "69", "91", "8", null, null, this);
            obj.set_taborder("12");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "242", "32", "91", "15", null, null, this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "0", "37", "32", "0", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("16");
            obj.set_text("데이터마트 신청등록");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "107", "161", null, "29", "17", null, this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "17", "161", "110", "29", null, null, this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("권한사업장");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "17", "105", "110", "29", null, null, this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("유      형");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "126", "105", null, "29", "17", null, this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "17", "77", "110", "29", null, null, this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("문 서 명");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "126", "77", null, "29", "17", null, this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Combo("req_doc", "absolute", "133", "81", "130", "21", null, null, this);
            this.addChild(obj.name, obj);
            var req_doc_innerdataset = new Dataset("req_doc_innerdataset", this.req_doc);
            req_doc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">CONADV</Col><Col id=\"datacolumn\">검수실적</Col></Row></Rows>");
            obj.set_innerdataset(req_doc_innerdataset);
            obj.set_taborder("27");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Combo("cbo_doc_type", "absolute", "133", "109", "130", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_doc_type_innerdataset = new Dataset("cbo_doc_type_innerdataset", this.cbo_doc_type);
            cbo_doc_type_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전표별</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">상품별</Col></Row></Rows>");
            obj.set_innerdataset(cbo_doc_type_innerdataset);
            obj.set_taborder("30");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Static("Static10", "absolute", "107", "188", null, "29", "17", null, this);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "17", "188", "110", "29", null, null, this);
            obj.set_taborder("34");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("dayType", "absolute", "133", "192", "130", "21", null, null, this);
            this.addChild(obj.name, obj);
            var dayType_innerdataset = new Dataset("dayType_innerdataset", this.dayType);
            dayType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">매출일</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">검수일</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">지급예정일</Col></Row></Rows>");
            obj.set_innerdataset(dayType_innerdataset);
            obj.set_taborder("35");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("-1");

            obj = new Calendar("cal_from", "absolute", "267", "192", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("36");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static131", "absolute", "368", "192", "10", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_to", "absolute", "378", "192", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("38");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static11", "absolute", "107", "216", null, "29", "17", null, this);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "17", "216", "110", "29", null, null, this);
            obj.set_taborder("40");
            obj.set_text("문서포맷");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "339", "291", "91", "17", null, null, this);
            obj.set_taborder("42");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "165", "431", "21", "36", null, this);
            obj.set_taborder("44");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_doc_fmt", "absolute", "22.17%", "220", "133", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_doc_fmt_innerdataset = new Dataset("rdo_doc_fmt_innerdataset", this.rdo_doc_fmt);
            rdo_doc_fmt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">텍스트</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">엑셀</Col></Row></Rows>");
            obj.set_innerdataset(rdo_doc_fmt_innerdataset);
            obj.set_taborder("45");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            obj.set_value("1");
            obj.set_visible("false");

            obj = new Button("btn_save", "absolute", "257", "262", "54", "29", null, null, this);
            obj.set_taborder("47");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", "313", "262", "54", "29", null, null, this);
            obj.set_taborder("48");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "126", "133", null, "29", "17", null, this);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_doc_type_dtl1", "absolute", "133", "137", "130", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("50");
            obj.set_innerdataset("ds_doc_type_dtl1");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_index("-1");

            obj = new Static("Static17", "absolute", "17", "133", "110", "29", null, null, this);
            obj.set_taborder("51");
            obj.set_text("상세유형");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 600, 314, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_cssclass("frm_WF_PopupBg");
            		p.set_titletext("데이터마트 신청등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item7","Static13","text","ds_bbs","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Static10","text","ds_bbs","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Static11","text","ds_bbs","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PDS_DMART_001_P01.xfdl", "lib::comLib.xjs");
        this.registerScript("PDS_DMART_001_P01.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.objRtnArr = new Array(4); //팝업창 close시 전달할 값을 위한 배열 선언

        /*
        	TB_DMART_REQ;

        	REQ_TM               신청일시                                    
        	REQ_ID               신청ID                                      
        	REQ_STAT             진행상태(1:신청,2:진행,3:생성,4:삭제,5:오류)
        	REQ_DOC              신청문서                                    
        	DOC_TYPE             문서유형(1:전표별,3:상품별)                 
        	REQ_TRPL_C           신청권한사업장(A:권한사업장전체)            
        	SRCH_DAY_TYPE        조회기준일(1:매출일,2:검수일,3:지급예정일)  
        	SRCH_FM_DT           조회시작일                                  
        	SRCH_ED_DT           조회종료일                                  
        	RSLT_DOC_FMT         결과문서포맷(1:텍스트,2:엑셀)               
        	BATCH_ST_TM          배치시작시간                                
        	BATCH_ED_TM          배치종료시간                                
        	DEL_DT               삭제예정일자                                
        	FILE_PATH            파일경로                                    
        	COMP_FILE_SIZE       압축파일크기                                
        	TOT_EDI_SIZE         전체EDI문서크기                             
        	BATCH_RELT_KEY       배치키값                                    
        	SMS_SEND_TM          SMS전송일시(N:미전송)                       
        	FSRG_DTM             최초등록일시                                
        	FS_RGM               최초등록자                                  
        	LSCHG_DTM            최종변경일시                                
        	LS_CHGM              최종변경자                                  
         */

        
        this.form_onload = function(obj,e){
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function(){
        	
           //페이지 로딩후 실행부분  
           try
        	{

        		this.writeType  = this.getOwnerFrame().writeType; //작업 유형: 등록0, 수정1, 답글2 

        	}
        	catch(e)
        	{
        	
        	
        	}
        	
        	
        	// 콤보박스 기본값 설정
        	this.req_doc.set_value('CONADV') ; // 검수확정서
        	this.cbo_doc_type.set_value('1') ;
        	this.dayType.set_value('1') ;
        	
            this.setDtl1Cbo(); // 콤보 상세 설정 . DB 공통코드 설정
        	
        	
        	// this.docType.set
        	var dt_today = this.gfn_today("yyyyMMdd");
        	var dt_to =  this.gfn_minusDate(dt_today, + 1); // 전일자
        	var dt_from = this.gfn_minusDate(dt_to, + 7); // 전일부터 7일
        	this.cal_from.set_value(dt_from);
        	this.cal_to.set_value(dt_to);
        		
        }

        
        /* ****************************************************
         * 저장
         *
         */

        this.btn_save_onclick = function(obj,e)
        {

            
        	if(this.fn_checkValidation())
        	{

        		var strCrmMsg = "데이터마트 신청등록 확인\n\n데이터마트를 통해 EDI문서를 신청하면\n문서생성 시 검수업무 화면에서 엑셀파일을 다운로드 받는 것과\n동일한 기준으로 EDI 이용요금이 부과됩니다.\n생성된 파일은 생성일로 부터 31일동안 보관 후 자동삭제됩니다.\n신청하시겠습니까?";
        		
        		if(confirm(strCrmMsg) == false )
        		{
        			return false;
        		}
        		
        		var req_tm         = this.gfn_today("yyyyMMdd"); // 신청일시. 오늘
        		var req_id         = ""                        ; // 신청ID                                      
        		var req_stat       = "1"                       ; // 진행상태(1:신청,2:진행,3:생성,4:삭제,5:오류). 웹은 1 신청만 있음. 
        		var req_doc        = this.req_doc.value        ; // 신청문서                                    
        		var doc_type       = this.cbo_doc_type.value       ; // 문서유형(1:전표별,3:상품별)
        		var doc_type_dtl1  = this.cbo_doc_type_dtl1.value  ; // 문서상세유형 
        		/*
        				DMART_CONADV_SLIP	2	전표_상품_수수료합계
        				DMART_CONADV_SLIP	3	전표_상품_수수료상세
        				DMART_CONADV_ITEM	2	상품_전표합계
        				DMART_CONADV_ITEM	3	전표_상품_수수료

        		 */
        		
        		var req_trpl_c     = ""   ; // 신청권한사업장(A:권한사업장전체)   
        		if(this.div_auth.chk_all.value == true){
        		    req_trpl_c = "A"
        		}else{
        		    req_trpl_c = this.getTrplCode();
        		
        		}

        		var srch_day_type  = this.dayType.value        ; // 조회기준일(1:매출일,2:검수일,3:지급예정일)  
        		var srch_fm_dt     = this.cal_from.value       ; // 조회시작일                                  
        		var srch_ed_dt     = this.cal_to.value         ; // 조회종료일                                  
        		var rslt_doc_fmt   = this.rdo_doc_fmt.value    ; // 결과문서포맷(1:텍스트,2:엑셀)               
        		var batch_st_tm    = ""; // 배치시작시간                                
        		var batch_ed_tm    = ""; // 배치종료시간                                
        		var del_dt         = ""; // 삭제예정일자                                
        		var file_path      = ""; // 파일경로                                    
        		var comp_file_size = ""; // 압축파일크기                                
        		var tot_edi_size   = ""; // 전체EDI문서크기                             
        		var batch_relt_key = ""; // 배치키값                                    
        		var sms_send_tm    = ""; // SMS전송일시(N:미전송)     
        		
        	trace("req_tm        : " + req_tm        );
        	trace("req_id        : " + req_id        );
        	trace("req_stat      : " + req_stat      );
        	trace("req_doc       : " + req_doc       );
        	trace("doc_type      : " + doc_type      );
        	trace("req_trpl_c    : " + req_trpl_c    );
        	trace("srch_day_type : " + srch_day_type );
        	trace("srch_fm_dt    : " + srch_fm_dt    );
        	trace("srch_ed_dt    : " + srch_ed_dt    );
        	trace("rslt_doc_fmt  : " + rslt_doc_fmt  );
        	trace("batch_st_tm   : " + batch_st_tm   );
        	trace("batch_ed_tm   : " + batch_ed_tm   );
        	trace("del_dt        : " + del_dt        );
        	trace("file_path     : " + file_path     );
        	trace("comp_file_size: " + comp_file_size);
        	trace("tot_edi_size  : " + tot_edi_size  );
        	trace("batch_relt_key: " + batch_relt_key);
        	trace("sms_send_tm   : " + sms_send_tm   );
        	trace("doc_type_dtl1   : " + doc_type_dtl1   );
        	
        	
        	

        /*
        	alert(srch_day_type);
        	alert(this.div_auth.chk_all.value);
        	return;
        */

        		if(this.writeType == 0)//등록
        		{
        		    // this.ds_dmart_req.addRow();
        		    
        			this.ds_dmart_req.setColumn( 0, "REQ_TM",         req_tm        ); // 신청일시                                    
        			this.ds_dmart_req.setColumn( 0, "REQ_ID",         req_id        ); // 신청ID                                      
        			this.ds_dmart_req.setColumn( 0, "REQ_STAT",       req_stat      ); // 진행상태(1:신청,2:진행,3:생성,4:삭제,5:오류)
        			this.ds_dmart_req.setColumn( 0, "REQ_DOC",        req_doc       ); // 신청문서                                    
        			this.ds_dmart_req.setColumn( 0, "DOC_TYPE",       doc_type      ); // 문서유형(1:전표별,3:상품별)                 
        			this.ds_dmart_req.setColumn( 0, "DOC_TYPE_DTL1",  doc_type_dtl1      ); // 문서상세유형
        			
        			this.ds_dmart_req.setColumn( 0, "REQ_TRPL_C",     req_trpl_c    ); // 신청권한사업장(A:권한사업장전체)            
        			this.ds_dmart_req.setColumn( 0, "SRCH_DAY_TYPE",  srch_day_type ); // 조회기준일(1:매출일,2:검수일,3:지급예정일)  
        			this.ds_dmart_req.setColumn( 0, "SRCH_FM_DT",     srch_fm_dt    ); // 조회시작일                                  
        			this.ds_dmart_req.setColumn( 0, "SRCH_ED_DT",     srch_ed_dt    ); // 조회종료일                                  
        			this.ds_dmart_req.setColumn( 0, "RSLT_DOC_FMT",   rslt_doc_fmt  ); // 결과문서포맷(1:텍스트,2:엑셀)               
        			
        //          웹화면에서 저장하지 않는 항목들
        // 			this.ds_dmart_req.setColumn(10, "BATCH_ST_TM",    batch_st_tm   ); // 배치시작시간                                
        // 			this.ds_dmart_req.setColumn(11, "BATCH_ED_TM",    batch_ed_tm   ); // 배치종료시간                                
        // 			this.ds_dmart_req.setColumn(12, "DEL_DT",         del_dt        ); // 삭제예정일자                                
        // 			this.ds_dmart_req.setColumn(13, "FILE_PATH",      file_path     ); // 파일경로                                    
        // 			this.ds_dmart_req.setColumn(14, "COMP_FILE_SIZE", comp_file_size); // 압축파일크기                                
        // 			this.ds_dmart_req.setColumn(15, "TOT_EDI_SIZE",   tot_edi_size  ); // 전체EDI문서크기                             
        // 			this.ds_dmart_req.setColumn(16, "BATCH_RELT_KEY", batch_relt_key); // 배치키값                                    
        // 			this.ds_dmart_req.setColumn(17, "SMS_SEND_TM",    sms_send_tm   ); // SMS전송일시(N:미전송)     
         
         
        // alert(this.ds_dmart_req.getRowCount());

        			this.fn_insertDmartReq();
        			
        		}
        		else if(this.writeType == 1)//수정
        		{

        			
        			
        			// this.fn_update ;
        		}
        		else  
        		{
        			// 오류
        		}
        	}

        	//this.close();
        }

        
        this.fn_insertDmartReq = function()
        {

        	var today = this.gfn_today("yyyyMMdd");
        	
        	var param = " today="+today ;
        	// var param = "=" ;
        				
        	// trace("##MASTER##PARAM## fn_insertDmartReq->"+param);
        	
        	var sSvcID        = "insertDmartReq";
        	var sURL          = "svc::rest/dmart/insertDmartReq";
        	var sInDatasets   = "ds_dmart_req=ds_dmart_req";
        	var sOutDatasets  = "";	
        	var sArgument     = param;

        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);

        }

        

        /* Validation Check */
        this.fn_validationCheck = function(){
        	
        	if (this.gfn_length(this.div_search.searchText.value) < 2) {
        		this.alert('검색어는 2자이상이어야 합니다.');
        		return false;
        	}
        	return true;
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", ErrorMsg);
        		return;
        	}else{
        		if(svcID == "insertDmartReq"){
        			this.gfn_getMessage("alert", "result.message.save.success");
        			// 부모창 재조회
        			this.opener.fn_search();
        			this.close();
        		}
        	}
        }

        this.grd_rvopl_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.btn_ok_onclick();
        	}
        }

        

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        
        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/	
        this.fn_checkValidation = function()
        {

        	var prevLimit = '20120101';
        	var toDay = this.gfn_today("yyyyMMdd");
        	
        	var cal_date_fr = this.cal_from.value;
        	var cal_date_to = this.cal_to.value;
        	
        	if(cal_date_fr > cal_date_to ) {
        	
        		alert('종료일이 시작일보다 이전날짜 입니다.');
        		
        		return false;
        	}
        	
        	if(  cal_date_fr > toDay || cal_date_to  > toDay){
        	
        		alert('신청 당일 이후 데이터는 신청할 수 없습니다');
        		
        		return false;
        	}
        	 
        	if(  cal_date_fr < prevLimit || cal_date_to  < prevLimit){
        	
        		alert('신청 가능 과거일자 범위를 초과 하였습니다. ' + prevLimit);
        		
        		return false;
        	}
        /*
        	if(this.gfn_isNull(this.edt_title.value))
        	{
        		alert("제목을 입력해 주세요.");
        		return false;
        	}
        	
        */

        	return true;
        }

        

        /************************************************************************************************
         * 문서유형 선택시 상세유형 재설정
        ************************************************************************************************/	
        this.cbo_doc_type_onitemchanged = function(obj,e)
        {
            this.setDtl1Cbo();
        	

        }

        this.setDtl1Cbo = function()
        {
            var dtl1_code;
            
            // alert(this.cbo_doc_type.text ); // 문서 유형별
            
            if (this.cbo_doc_type.text == '전표별'){
            
                 dtl1_code = 'DMART_CONADV_SLIP';  // 데이터마트 검수실적 전표별 상세유형
                 
            }else if (this.cbo_doc_type.text == '상품별'){
                 dtl1_code = 'DMART_CONADV_ITEM';  // 데이터마트 검수실적 상품별 상세유형
            }
            
        	var param = [  
               {code:dtl1_code,     dsName:"ds_doc_type_dtl1",    selecttype:""}
               //     {code:"MN_CTRW_KD",     dsName:"ds_mnCtrwKd", selecttype:""}
            ];

            // 
        	this.gfn_setPortalCommonCode(param);
        	
        	this.cbo_doc_type_dtl1.set_index(0);
        	// 전체선택 추가
        	/*
        	this.ds_doc_type_dtl1.insertRow(0);
        	this.ds_doc_type_dtl1.setColumn(0,'SIMP_C','');
        	this.ds_doc_type_dtl1.setColumn(0,'SIMP_CNM','-선택-');
        	*/
        	

        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.Static06.addEventHandler("onclick", this.Static06_onclick, this);
            this.Static05.addEventHandler("onclick", this.Static05_onclick, this);
            this.cbo_doc_type.addEventHandler("onitemchanged", this.cbo_doc_type_onitemchanged, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);

        };

        this.loadIncludeScript("PDS_DMART_001_P01.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
