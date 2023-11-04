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
                this.set_name("Sample026_push");
                this.set_titletext("PUSH");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_pushSend", "absolute", "26", "63", "219", "50", null, null, this);
            obj.set_taborder("1");
            obj.set_text("PUSH 발송");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Sample0024_txbilTest");
            		p.set_titletext("PUSH");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("Sample026_push.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("Sample026_push.xfdl", "lib::sz_fsp_nx.xjs");
        this.registerScript("Sample026_push.xfdl", function() {
        //include "lib::comLib.xjs";
        //include "lib::sz_fsp_nx.xjs";//push lib

        var PUSH_STSC_A = "";
        var PUSH_STSC_B = "";
        var PUSH_STSC_C = "";
        var PUSH_STSC_D = "";
        var PUSH_STSC_E = "";
        var PUSH_STSC_F = "";

        this.form_onload = function (obj,e)
        {
        	this.fsp_init();
        }

        this.btn_pushSend_onclick = function(obj,e)
        {
        	this.fn_retrievePushSendInfo();
        }

        /*******************************************************************************
        * 기      능   : Push 조회 및 세팅
        * 설      명   : messageType A-F 별로 세팅해 발송
        A: 공지사항 등록시
        B: 수주내역 도착시
        C: 배송응답서 도착시
        D: 검수확정서 도착시
        E: 반품예정서 도착시
        F: 세금계산서 마감 알림
        Push 발송시 화면별로 분기처리
        PUSH_STSC_A ="1" 푸시발송, PUSH_STSC_A ="0" 푸시미발송
        ********************************************************************************/
        this.fn_retrievePushSendInfo = function (){	
        	
        	application.gds_pushInfo.clearData();
        	//application.gds_push.clearData();
        	
        	var sSvcID        = "retrievePushSendInfo";
        	var sURL          = "svc::rest/pt/comn/retrievePushSendInfo";
        	var sInDatasets   = "";
        	var sOutDatasets  = "gds_pushInfo=ds_pushInfo";
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회		 
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(svcID=="retrievePushSendInfo"){
        		if(ErrorCode < 0 ){
        			this.gfn_getMessage("alert", "error.message.server.exception");
        		}else{
        			if(application.gds_pushInfo.rowcount != 0){
        			
        				//한개 row에 targetUsers (DVIC_ID) 만 Comma 구분이라 for문 필요없음
        				//for(var i = 0; i < application.gds_pushInfo.rowcount; i++){
        					//Push 발송시 화면별로 분기처리
        					if(application.gds_pushInfo.getColumn(i,"PUSH_STSC_A") == 1){
        						
        						//application.gds_push.addRow();
        						//var mobileAppID = 10;
        						//var publishType = "T";
        						//var createUserID = "admin";
        						//var createUserName = "관리자";
        						var messageID = "";//자동으로 seq 생성됨
        						var messageType = "A";
        						var messageTitle = "PUSH테스트";
        						var messageBody	= "메시지 테스트입니다.";
        						var targetUsersArr = [];
        						for(var i = 0; i < application.gds_pushInfo.rowcount; i++){
        							targetUsersArr[i] = application.gds_pushInfo.getColumn(i,"DVIC_ID");
        						}
        						//application.gds_push.setColumn(0,"mobileAppID",mobileAppID);
        						//application.gds_push.setColumn(0,"publishType",publishType);
        						//application.gds_push.setColumn(0,"createUserID",createUserID);
        						//application.gds_push.setColumn(0,"createUserName",createUserName);
        						application.gds_push.setColumn(0,"messageID",messageID);
        						application.gds_push.setColumn(0,"messageType",messageType);
        						application.gds_push.setColumn(0,"messageTitle",messageTitle);
        						application.gds_push.setColumn(0,"messageBody",messageBody);
        						application.gds_push.setColumn(0,"targetUsers",targetUsersArr);
        					}
        				//}
        				//공지사항 푸시알림이(PUSH_STSC_A) 받기(1) 인경우 fn_send 발송
        				this.fn_send();
        			}
        		}
        	}
        }

        /*******************************************************************************
        * 기      능   : Push 발송
        * 설      명   : gds_push에 세팅된 기기별 Push 발송
        ********************************************************************************/
        this.fn_send = function() {
        	//trace(application.gds_pushInfo.saveXML());
        	trace(application.gds_push.saveXML());
        	// 서버 호출 
        	this.fsp_callService(
        		"push#nMobilePushMessageAction"
        		,"sendMessage"
        		,"ds_push=gds_push"	// inDs
        		,""	// outDs
        		,""	// args 
        		,"fn_afterSend"
        		,false
        	);
        }

        /*******************************************************************************
        * 기      능   : Save callback
        ********************************************************************************/
        this.fn_afterSend = function(ErrorCode,ErrorMsg) {
         
        }

        

        

        

        

        

        

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_pushSend.addEventHandler("onclick", this.btn_pushSend_onclick, this);

        };

        this.loadIncludeScript("Sample026_push.xfdl");

       
    };
}
)();
