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
                this.set_name("popupM1");
                this.set_cssclass("sta_WF_PopupTitle");
                this.set_titletext("검수내역상세");
                this._setFormPosition(0,0,950,636);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("pda_mst", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"bigdecimal\" size=\"8\"/><Column id=\"NA_TEAM_C\" type=\"bigdecimal\" size=\"8\"/><Column id=\"DVY_PLA_DT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"NA_WRS_C\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BUYPL_NA_TRPL_C\" type=\"bigdecimal\" size=\"8\"/><Column id=\"WRS_IMG_NM_01\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_img", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PICTURE\" type=\"BLOB\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static19", "absolute", "17", "90", "130", "29", null, null, this);
            obj.set_taborder("49");
            obj.set_text("납품일");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_linespace("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "299", "90", "130", "29", null, null, this);
            obj.set_taborder("61");
            obj.set_text("상품명");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_linespace("5");
            this.addChild(obj.name, obj);

            obj = new Static("st_EDI_IF_ID", "absolute", "428", "90", "180", "29", null, null, this);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_CNR_CMPL_ENO", "absolute", "146", "90", "156", "29", null, null, this);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgView", "absolute", "17", "117", "916", "503", null, null, this);
            obj.set_taborder("87");
            obj.set_stretch("fixaspectratio");
            obj.style.set_border("1 solid #ccd3d5ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "15", "14", "88", "21", null, null, this);
            obj.set_taborder("88");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "64%", "90", null, "28", "25.79%", null, this);
            obj.set_taborder("89");
            obj.set_text("이미지 파일명");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_linespace("5");
            this.addChild(obj.name, obj);

            obj = new Static("st_EDI_IF_ID01", "absolute", "74.21%", "90", null, "28", "9.79%", null, this);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_init", "absolute", "90.21%", "90", null, "27", "1.79%", null, this);
            obj.set_taborder("91");
            obj.getSetter("retry").set("0");
            obj.set_text("다운로드");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 950, 636, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popupPda");
            		p.set_cssclass("sta_WF_PopupTitle");
            		p.set_titletext("검수내역상세");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item22","st_CNR_CMPL_ENO","text","pda_mst","DVY_PLA_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","st_EDI_IF_ID","text","pda_mst","WRS_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","imgView","image","ds_img","PICTURE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","st_EDI_IF_ID01","text","pda_mst","WRS_IMG_NM_01");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("PDA_CN_005002.xfdl", "lib::comLib.xjs");
        this.registerScript("PDA_CN_005002.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        var NA_BZPLC = "";
        var NA_TEAM_C = "";
        var BUYPL_NA_TRPL_C = "";
        var DVY_PLA_DT = "";
        var NA_WRS_C = ""; //상품코드

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        	this.NA_BZPLC = this.parent.NA_BZPLC;
        	this.NA_TEAM_C = this.parent.NA_TEAM_C;
        	this.BUYPL_NA_TRPL_C = this.parent.BUYPL_NA_TRPL_C;
        	this.DVY_PLA_DT = this.parent.DVY_PLA_DT;
        	this.NA_WRS_C = this.parent.NA_WRS_C;
        	
        	this.fn_pdaPhotoSearch();
        }

        this.fn_afterFormOnload = function()
        {
        	//페이지 로딩후 실행부분
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        /* 검색 */
        this.fn_pdaPhotoSearch = function()
        {
        	var sSvcID        = "InspectionPhotoDetail";
        	var sURL          = "svc::rest/pda/InspectionPhotoDetail";
        //	var sInDatasets   = "ds_pageVO=ds_pageVO";
        	var sInDatasets   = "";
        	var sOutDatasets  = "pda_mst=pda_mst ds_img=ds_img";
        	var sArgument     = "NA_BZPLC="+ this.NA_BZPLC +
        	                    " NA_TEAM_C=" + this.NA_TEAM_C +
        	                    " DVY_PLA_DT=" + this.DVY_PLA_DT +
        	                    " NA_WRS_C=" + this.NA_WRS_C +
        	                    " BUYPL_NA_TRPL_C=" + this.BUYPL_NA_TRPL_C;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* 새로고침 */
        this.fn_pdaRefresh = function()
        {
        	var sSvcID        = "InspectionRefresh";
        	var sURL          = "svc::rest/pda/InspectionPhotoDetail";
        //	var sInDatasets   = "ds_pageVO=ds_pageVO";
        	var sInDatasets   = "";
        	var sOutDatasets  = "pda_mst=pda_mst ds_img=ds_img";
        	var sArgument     = "NA_BZPLC="+ this.NA_BZPLC +
        	                    " NA_TEAM_C=" + this.NA_TEAM_C +
        	                    " DVY_PLA_DT=" + this.DVY_PLA_DT +
        	                    " NA_WRS_C=" + this.NA_WRS_C +
        	                    " BUYPL_NA_TRPL_C=" + this.BUYPL_NA_TRPL_C;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_formatDate = function(dateStr)
        {
        	if (dateStr && dateStr.length == 8) {
        		dateStr = dateStr.substring(0, 4) + "-" + dateStr.substring(4, 6) + "-" + dateStr.substring(6, 8)
        	}
        	return dateStr;
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
         	if(ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}
        	
        	if(svcID == "InspectionPhotoDetail"){
         		if(this.pda_mst.rowcount == 0){
        			this.grd_master.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));	
        			alert("데이터가 없습니다.");
        			this.close();
        			return;
        		}

        		
        		//서명이미지보이기		
        		if(this.ds_img.rowcount == 0) {
        			this.imgView.set_text("서명 이미지 없음");
        		}
        		
        		CNR_STS_DSC = this.pda_mst.getColumn(0, "CNR_STS_DSC");
        		PRC_YN = this.pda_mst.getColumn(0, "PRC_YN");
        		CNR_WRS_DSC = this.pda_mst.getColumn(0, "CNR_WRS_DSC");
        		NA_CRC_CAN_DSC = this.pda_mst.getColumn(0, "NA_CRC_CAN_DSC");
        		
        		//검수상품구분코드
        		if (CNR_WRS_DSC == '1') {
        			this.st_CNR_WRS_DSC.set_text("상품");
        		} else if (CNR_WRS_DSC == '2') {
        			this.st_CNR_WRS_DSC.set_text("덤");
        		}
        		
        		//경제통합정정취소구분코드
         		if (NA_CRC_CAN_DSC == '0') {
         			this.st_NA_CRC_CAN_DSC.set_text("등록");
         		} else if (NA_CRC_CAN_DSC == '9') {
         			this.st_NA_CRC_CAN_DSC.set_text("취소");
         		}
        			
        		switch(CNR_STS_DSC) {
        		case "1":
        			this.btn_status.set_text("검수상태 : 진행");
        			this.btn_status.set_visible(true);
        			this.btn_confirm.set_visible(true);
        			this.btn_refresh.set_visible(false);
        			this.st_CNR_STS_DSC.set_text("진행");
        			break;
        		case "2":
        			if(PRC_YN == "N" || PRC_YN == "P" ){
        				//alert("검수완료 : 상태변경 처리중입니다.");
        				this.btn_status.set_visible(true);
        				this.btn_status.set_text("검수상태 : 완료 처리중...");
        				this.btn_status.set_visible(true);
        				this.st_CNR_STS_DSC.set_text("완료 처리중");
        				this.btn_refresh.set_visible(true);
        				break;
        			}
        			this.btn_status.set_text("검수상태 : 확인");
        			this.btn_status.set_visible(true);
        			this.btn_finish.set_visible(true);
        			this.btn_init.set_visible(true);
        			this.btn_refresh.set_visible(false);
        			this.st_CNR_STS_DSC.set_text("확인");
        			break;
        		case "3":
        			if(PRC_YN == "N" || PRC_YN == "P" ){
        				//alert("검수완료취소 : 상태변경 처리중입니다.");
        				this.btn_status.set_text("검수상태 : 완료취소 처리중...");
        				this.btn_status.set_visible(true);
        				this.st_CNR_STS_DSC.set_text("완료취소 처리중");
        				this.btn_refresh.set_visible(true);
        				break;
        			}
        			this.btn_status.set_text("검수상태 : 완료");
        			this.btn_status.set_visible(true);
        			this.btn_cancle.set_visible(true);
        			this.btn_refresh.set_visible(false);
        			this.st_CNR_STS_DSC.set_text("완료");
        			break;
        		}
        		
        		if (CNR_STS_DSC == "1") { //셀 정보 변경함.
        			this.grd_pdaD.setCellProperty("Body", 5, "displaytype", "number");
        			this.grd_pdaD.setCellProperty("Body", 5, "editdisplay", "display");
        			this.grd_pdaD.setCellProperty("Body", 5, "edittype", "text");
        		}
        		
        	} else if(svcID == "updatePdaResult"){
        		if (this.status == "3") {
        			alert("검수완료 : 상태변경 처리중입니다.");
        		} else if (this.status == "2") {
        			alert("검수완료취소 : 상태변경 처리중입니다.");
        		}
        		this.reload();
        	} else if(svcID == "InspectionRefresh"){
        		this.reload();
        	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        this.common_onclick = function(obj,e)
        {
            img_name = this.pda_mst.getColumn(0, "WRS_IMG_NM_01");  
            var sFileName = encodeURIComponent(encodeURIComponent(img_name));    
            
        	var server_url = application.gv_server_url;
        	var url = server_url + "rest/pda/InspectionPhotoDownload"			
        			+ "?WRS_IMG_NM_01=" + sFileName +
        		      "&NA_BZPLC=" + this.NA_BZPLC +
        	          "&DVY_PLA_DT=" + this.DVY_PLA_DT;			
        	
        	this.fileDownHandler(url, this);
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.Static00_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Static00.addEventHandler("onclick", this.Static00_onclick, this);
            this.st_EDI_IF_ID01.addEventHandler("onclick", this.st_EDI_IF_ID00_onclick, this);
            this.btn_init.addEventHandler("onclick", this.common_onclick, this);

        };

        this.loadIncludeScript("PDA_CN_005002.xfdl", true);

       
    };
}
)();
