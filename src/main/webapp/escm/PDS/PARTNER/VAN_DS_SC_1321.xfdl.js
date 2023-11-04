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
                this.set_name("VAN_DS_SC_1321");
                this.set_titletext("탄력가격업체거래관계 도움말");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,500,530);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new TextArea("TextArea00", "absolute", "17", "51", null, "469", "17", null, this);
            obj.set_taborder("0");
            obj.set_value("▣ 계통탄력가격적용 협력업체\r\n    거래관계의 계통탄력가격적용 여부가 '여'인 협력업체로서\r\n    하나의 농협에 대해 2개이상의 거래관계를 맺을 수 있습니다.\r\n\r\n▣ 거래관계 설정방법\r\n    1. 거래관계를 맺을(조회할) 수요처(농협)을 설정합니다.\r\n        ※ 명칭은 2 자리 이상, 코드는 8자리 이상 입력해야 합니다.\r\n    2. 조회버튼을 클릭하여 A 그리드 마트분사 - \r\n       마트 거래관계를 조회합니다.\r\n    3. A 그리드의 선택을 클릭하면 선택한 수요처와 거래관계를 맺은\r\n       공급업체가 B 그리드에 조회됩니다.\r\n    4. B 그리드 작업\r\n        ※ 새로운 거래관계를 맺을 경우 선택을 체크합니다.\r\n        ※ 기존 거래관계를 삭제할 경우 삭제를 체크합니다.\r\n    5. 설정할 거래관계가 있다면 위 4번을 반복합니다.\r\n    6. 저장버튼을 클릭하여 설정한 거래관계를 저장합니다.\r\n\r\n▣ 거래관계 주의사항\r\n    1. 거래관계는 모든 거래에 있어 중요한 기초자료입니다.\r\n    2. 당일 삭제한 거래관계는 당일자로 재 거래관계 설정할 수 없습니다.\r\n\r\n▣ 참고\r\n    [ dp2054 ] 하나로마트거래관계 화면에서\r\n    계통탄력가격적용 공급업체의 거래관계 조회는 가능합니다.");
            obj.style.set_border("0 solid #bfbfbfff");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "463", "0", "37", "32", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("2");
            obj.set_text("탄력가격업체 거래관계");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 500, 530, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1321");
            		p.set_titletext("탄력가격업체거래관계 도움말");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1321.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1321.xfdl", function() {
        //include "lib::comLib.xjs";

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.TextArea00.addEventHandler("oneditclick", this.TextArea00_oneditclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1321.xfdl");

       
    };
}
)();
