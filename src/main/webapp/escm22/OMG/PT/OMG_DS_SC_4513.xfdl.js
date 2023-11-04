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
                this.set_name("OMG_DS_SC_013");
                this.set_titletext("경쟁사 상품판매가 제공 동의");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,741,539);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_usrConsent", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BSN_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSENT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CONSENT_YN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static20", "absolute", "17", "103", "110", "29", null, null, this);
            obj.set_taborder("119");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "126", "103", null, "29", "18", null, this);
            obj.set_taborder("120");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0%", "0", null, "32", "53.44%", null, this);
            obj.set_taborder("102");
            obj.set_text("자사 판매정보 제공 동의");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "94.74%", "0", null, "32", "0.27%", null, this);
            obj.set_taborder("103");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "993", "0", "15", "490", null, null, this);
            obj.set_taborder("71");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0%", "76", null, "73", "97.71%", null, this);
            obj.set_taborder("104");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "97.57%", "96", "17", "333", null, null, this);
            obj.set_taborder("105");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "78.14%", "423", null, "17", "9.58%", null, this);
            obj.set_taborder("106");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "73.82%", "384", null, "10", "13.9%", null, this);
            obj.set_taborder("107");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok", "absolute", null, null, "54", "29", "375", "20", this);
            obj.set_taborder("108");
            obj.set_text("동의");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "242", "32", "91", "15", null, null, this);
            obj.set_taborder("109");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "683", "39", null, "8", "17", null, this);
            obj.set_taborder("110");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "17", "47", "110", "29", null, null, this);
            obj.set_taborder("113");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "572", "75", null, "29", "18", null, this);
            obj.set_taborder("115");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_text("2016-07-04");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "17", "75", "110", "29", null, null, this);
            obj.set_taborder("116");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "463", "75", "110", "29", null, null, this);
            obj.set_taborder("117");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("날짜");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "126", "75", "338", "29", null, null, this);
            obj.set_taborder("118");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_text("관리자");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "17", "103", null, null, "18", "59", this);
            obj.set_taborder("121");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "17%", "47", null, "29", "2.43%", null, this);
            obj.set_taborder("123");
            obj.set_text("자사 판매정보 제공동의");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "3.1%", "108", null, "364", "3.64%", null, this);
            obj.set_taborder("126");
            obj.set_value("안녕하십니까? 하나로eSCM 운영자 입니다.\r\n\r\n지난 4월부터 하나로eSCM 서비스 활성화를 위해 주요 협력업체와 운영 협의체를 구성하여\r\n매월 간담회를 진행하고 있습니다. \r\n간담회 주요안건 중, 협력업체의 마케팅 분석의 중요정보로서 타 업체의 판매자료 제공을 요청\r\n하였습니다. 그에 따라서 하나로eSCM은 정보분석서비스 고도화 추진을 준비중에 있습니다.\r\n\r\n서비스 제공에 앞서 협력업체의 사전 동의 절차를 거쳐서 동의한 업체에 한하여 귀사의 판매정\r\n보를 타사에서 확인할 수 있고, 타사의 정보를 귀사에서 이용할 수 있도록 서비스를 개발 진행\r\n예정입니다.\r\n아래 동의/비동의 버튼을 반드시 선택하여 귀사의 의견을 제시해 주시기 바라며, \r\n 기간내 체크하지 않은 업체는 정보제공에 동의한 것으로 처리할 예정입니다.\r\n\r\n  - 접수기간 : ‘16. 7. 1 ~ 15 (15일간), 하나로eSCM 팝업게시 \r\n  - 대상업체 : 농협 전 협력업체 본사 \r\n \r\n※ 변경사항 \r\n    - 판매정보 다운로드 (현행 : 자사 정보, 변경 : 자사정보 + 타사정보)\r\n    - 카테고리 시장정보 (현행 : 점  유  율, 변경 : 점유율 + SKU정보)\r\n       주) 판매정보 : 농협 사업장의 POS매출자료\r\n");
            obj.style.set_border("0 solid #bfbfbfff");
            obj.set_wordwrap("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_no", "absolute", "50.07%", null, null, "29", "42.65%", "20", this);
            obj.set_taborder("127");
            obj.set_text("비동의");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 741, 539, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("경쟁사 상품판매가 제공 동의");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item6","OMG_DS_SC_013","","ds_notice","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","OMG_DS_SC_013","","ds_notice","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Static19","text","ds_notice","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Static21","text","ds_notice","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","OMG_DS_SC_013","","ds_notice","");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_4513.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_4513.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        //this.objRtnArr = new Array(2); //팝업창 close시 전달할 값을 위한 배열 선언
        this.noticeSeq = "";
        this.documentId = "";
        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	//this.gfn_setInitForm(obj, e); //공통
        	

        }

        this.fn_afterFormOnload = function()
        {
           //페이지 로딩후 실행부분
        	//this.noticeSeq = this.getOwnerFrame().noticeSeq;

        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        
        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/

        // 동의 
        this.btn_ok_onclick = function(obj,e)
        {
            // 정보제공동의
            this.fn_saveUsrConsent('Y');
        }
        // 거부
        this.btn_no_onclick = function(obj,e)
        {
            // 정보제공 거부
            this.fn_saveUsrConsent('N');
        }

        
        this.fn_saveUsrConsent = function(strYN)
        {
            // alert('fn_saveUsrConsent');
            var msg = "";
            
            if(strYN == 'N'){
                msg = "동의하지 않으시면 확인을 눌러주세요.";
            }else{
                 msg = "확인을 누르시면 자사 판매정보 제공에 동의처리됩니다.";
            }
        	if (!confirm(msg)) {
        		return;
        	}
        	
        	var bsnDsc = "sales_price";
        	var glnCode = application.gv_glnCode;
        	var consentYN = strYN;

        	var params =  "bsnDsc="     + bsnDsc
        				 + " naTrplC="  + glnCode 
        				 + " consentYN=" + consentYN 
        				 ;

        
        	var sArgument     = params;
        	var sSvcID        = "saveUsrConsent";
        	var sURL          = "svc::rest/pt/usrinf/saveUsrConsent";
        	var sInDatasets   = "";
        	var sOutDatasets  = "";
        	var sArgument     = params;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        
        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}
        	
        	if (svcID == "saveUsrConsent") {
        		alert("저장되었습니다.");
        		this.close("SUCCESS"); // strVal
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_ok.addEventHandler("onclick", this.btn_ok_onclick, this);
            this.TextArea00.addEventHandler("oneditclick", this.TextArea00_oneditclick, this);
            this.btn_no.addEventHandler("onclick", this.btn_no_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_4513.xfdl", true);

       
    };
}
)();
