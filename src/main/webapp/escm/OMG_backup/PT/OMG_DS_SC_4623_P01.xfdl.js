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
                this.set_name("OMG_DS_SC_4623_P01");
                this.set_titletext("마감간소화 이용약관");
                this.set_name("OMG_DS_SC_6120");
                this._setFormPosition(0,0,400,320);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "15", "15", null, "200", "15", null, this);
            obj.set_taborder("0");
            obj.set_text("1. 마감간소화 서비스는 세금계산서를 월 단위로 조회하고, 조회 시 해당 월의 모든 납품확인서(검수 확정서 및 반품 확인서)에 대해 EDI 요금을 청구 한다.\r\n\r\n2. 마감간소화 서비스에서 1회 청구된 납품확인서는 이후 마감간소화 서비스에서 재조회하여도 EDI 요금이 청구되지 않는다.\r\n\r\n3. 마감간소화 서비스의 조회 기간은 현재 월로부터 과거 2년 전까지의 납품확인서를 제공한다.");
            obj.set_wordwrap("char");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_padding("10 10 10 10");
            this.addChild(obj.name, obj);

            obj = new Div("div_agree", "absolute", "15", "230", null, null, "15", "15", this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);
            obj = new Static("sta_agree", "absolute", "0", "0", null, "35", "0", null, this.div_agree);
            obj.set_taborder("0");
            obj.set_text("이용약관에 동의하시면 마감간소화 서비스 이용 신청이 가능합니다.\r\n동의하시겠습니까?");
            obj.set_wordwrap("char");
            this.div_agree.addChild(obj.name, obj);
            obj = new Button("btn_agree", "absolute", "80", null, "100", "29", null, "0", this.div_agree);
            obj.set_taborder("1");
            obj.set_text("동의");
            obj.set_cssclass("btn_WF_CRUD");
            this.div_agree.addChild(obj.name, obj);
            obj = new Button("btn_disagree", "absolute", null, null, "100", "29", "80", "0", this.div_agree);
            obj.set_taborder("2");
            obj.set_text("동의하지 않음");
            this.div_agree.addChild(obj.name, obj);

            obj = new Div("div_info", "absolute", "15", null, null, "29", "15", "40", this);
            obj.set_taborder("5");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Button("btn_close", "absolute", "135", "0", "100", "29", null, null, this.div_info);
            obj.set_taborder("4");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_CRUD");
            this.div_info.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_agree,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");

            	}
            );
            this.div_agree.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 29, this.div_info,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_visible("false");

            	}
            );
            this.div_info.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 400, 320, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("마감간소화 이용약관");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","divSearch.edt_menuId","value","ds_in","MENU_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divSearch.cbo_menuLevel","value","ds_in","MENU_LEVEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divSearch.edt_menuName","value","ds_in","MENU_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divSearch.edt_svcGroup","value","ds_in","SVC_GROUP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divSearch.edt_fileName","value","ds_in","FILE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divSearch.edt_fileType","value","ds_in","FILE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divSearch.cbo_displayYn","value","ds_in","DISPLAY_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divSearch.cbo_useYn","value","ds_in","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_4623_P01.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_4623_P01.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	if (this.parent.isJoin != "Y") {
        		this.div_agree.set_visible(false);
        		this.div_info.set_visible(true);
        	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.fn_agree = function(obj,e)
        {
        	if (obj.id == "btn_agree") {
        		this.close("Y");
        	} else if (obj.id == "btn_disagree" || obj.id == "btn_close") {
        		this.close();
        	}
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_agree.btn_agree.addEventHandler("onclick", this.fn_agree, this);
            this.div_agree.btn_disagree.addEventHandler("onclick", this.fn_agree, this);
            this.div_info.btn_close.addEventHandler("onclick", this.fn_agree, this);

        };

        this.loadIncludeScript("OMG_DS_SC_4623_P01.xfdl");

       
    };
}
)();
