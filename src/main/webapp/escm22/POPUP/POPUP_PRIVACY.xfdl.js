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
                this.set_name("POPUP_PRIVACY");
                this.set_titletext("개인정보처리방침 비교표");
                this.set_scrollbars("none");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,900,400);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_privacy", this);
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"TOBE\" type=\"STRING\" size=\"256\"/><Column id=\"ASIS\" type=\"STRING\" size=\"256\"/><Column id=\"ETC\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("48");
            obj.set_text("하나로 eSCM - 개인정보처리방침");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "0", "29", "32", "0", null, this);
            obj.set_taborder("49");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "20", "80", null, "301", "20", null, this);
            obj.set_taborder("50");
            obj.set_binddataset("ds_privacy");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"300\"/><Column size=\"300\"/><Column size=\"113\"/></Columns><Rows><Row size=\"45\" band=\"head\"/><Row size=\"119\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"변경 전\"/><Cell col=\"2\" text=\"변경 후\"/><Cell col=\"3\" text=\"비고\"/></Band><Band id=\"body\"><Cell style=\"padding:10 5 10 5;selectbackground:#ffffff00;\" text=\"bind:GBN\" wordwrap=\"char\"/><Cell col=\"1\" style=\"align:left middle;padding:10 5 10 5;selectbackground:#ffffff00;\" text=\"bind:ASIS\" wordwrap=\"char\"/><Cell col=\"2\" style=\"align:left middle;padding:10 5 10 5;selectbackground:#ffffff00;\" text=\"bind:TOBE\" wordwrap=\"char\"/><Cell col=\"3\" style=\"align:left middle;padding:10 5 10 5;selectbackground:#ffffff00;\" text=\"bind:ETC\" wordwrap=\"char\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_date", "absolute", "20", "42", "450", "30", null, null, this);
            obj.set_taborder("61");
            obj.set_text("2011년 11월 2일 제정");
            obj.style.set_font("bold 20 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 900, 400, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_3212");
            		p.set_titletext("개인정보처리방침 비교표");
            		p.set_scrollbars("none");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("POPUP_PRIVACY.xfdl", "lib::comLib.xjs");
        this.registerScript("POPUP_PRIVACY.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs"

        this.hdate = "";

        this.OMG_DS_SC_9090_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        	
        	this.hdate = this.parent.hdate;
        	this.fn_showHistory();
        }

        this.fn_showHistory = function()
        {
        	if (!this.gfn_isNull(this.hdate)) {
        		var gbn = "내용";
        		var tobe = "";
        		var asis = "";
        		var etc = "";
        		if (this.hdate == "20190819") {
        			gbn = "제4조 (개인정보 처리의 위탁)";
        			asis =
        				"① 금융결제원\n" +
        				" - 개인정보를 제공받는 자 : 금융결제원\n" +
        				" - 제공받는 자의 개인정보 이용목적 : 자동이체(CMS) 은행계좌 등록 및 해지, 사용료 출금\n" +
        				" - 제공하는 개인정보 항목 : 아이디, 계좌번호, 생년월일\n" +
        				" - 제공받는 자의 보유 이용기간 : 서비스 탈퇴 시 까지";
        			tobe =
        				"[수탁업체]\n"+			
        				"① 금융결제원, 쿠콘(구KIBNET)\n"+
        				" - 위탁업무 내용: 자동이체(CMS) 은행계좌 등록 및 해지, 사용료 출금\n"+
        				" - 보유/이용 기간 : CMS 출금이체 신청일로부터 종료(해지) 일 후 5년까지\n"+
        				"② 신세계아이앤씨, 농협하나로유통\n"+
        				" - 위탁업무 내용: 문자, 알림톡 전송\n"+
        				" - 보유/이용 기간 : 가입 일로부터 회원 탈퇴 시 까지\n";
        			etc = "변경 후 내용은 표 형태로 제공";
        			
        			this.ds_privacy.setColumn(0, "GBN", gbn);
        			this.ds_privacy.setColumn(0, "ASIS", asis);
        			this.ds_privacy.setColumn(0, "TOBE", tobe);
        			this.ds_privacy.setColumn(0, "ETC", etc);
        		} else if (this.hdate == "20211101") {
        			gbn = "제1조(개인정보의 처리목적)의 1. 서비스 제공";
        			asis = "";
        			tobe = "계약 상담 시 담당자와 바이어 간 상담진행을 위한 연락에 활용";
        			etc = "추가";
        			
        			this.ds_privacy.setColumn(0, "GBN", gbn);
        			this.ds_privacy.setColumn(0, "ASIS", asis);
        			this.ds_privacy.setColumn(0, "TOBE", tobe);
        			this.ds_privacy.setColumn(0, "ETC", etc);
        			
        			
        			gbn = "제4조(개인정보 처리의 위탁)의 1. 개인정보 처리 위탁";
        			asis = "② 신세계아이앤씨, 농협하나로유통";
        			tobe = "② 농협 중앙회, 경제지주, 금융지주 및 계열사와 관계사, 신세계아이앤씨";
        			etc = "변경";
        			
        			this.ds_privacy.addRow();
        			this.ds_privacy.setColumn(1, "GBN", gbn);
        			this.ds_privacy.setColumn(1, "ASIS", asis);
        			this.ds_privacy.setColumn(1, "TOBE", tobe);
        			this.ds_privacy.setColumn(1, "ETC", etc);
        			
        			this.Grid00.selectRow(0);
        		}
        		
        		var yy = this.hdate.substring(0,4);
        		var mm = this.hdate.substring(4,6);
        		var dd = this.hdate.substring(6,8);
        		
        		this.sta_date.set_text(yy + "년 " + mm + "월 " + dd + "일 개정");
        	} else {
        		alert("개인정보처리방침 이력정보가 없습니다.");
        		this.close();
        	}
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.OMG_DS_SC_9090_onload, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("POPUP_PRIVACY.xfdl", true);

       
    };
}
)();
