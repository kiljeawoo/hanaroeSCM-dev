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
                this.set_name("browserPopup");
                this.set_titletext("브라우저 공지사항 팝업");
                this._setFormPosition(0,0,344,206);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static04", "absolute", "0", "0", "344", "206", null, null, this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_POP_Brwsbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "12", "52", "320", "61", null, null, this);
            obj.set_taborder("0");
            obj.set_text("웹브라우저 IE6, 7을 사용하는 PC는 원활한 서비스\r\n이용을 위해 <b v=\"true\">구글, 크롬</b> 설치 후 이용하시기 바랍니다. ");
            obj.set_cssclass("sta_POP_Brwsmsg");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "2", "2", "340", "41", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_Brwstitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "12", "120", "68", "16", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_POP_Brwstxt01");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "88", "123", "159", "11", null, null, this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_POP_Brwstxt02");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "12", "154", "320", "35", null, null, this);
            obj.set_taborder("5");
            obj.set_text("구글, 크롬 다운로드 바로가기");
            obj.set_cssclass("btn_POP_Brwsbtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 344, 206, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("browserPopup");
            		p.set_titletext("브라우저 공지사항 팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("browserPopup.xfdl");

       
    };
}
)();
