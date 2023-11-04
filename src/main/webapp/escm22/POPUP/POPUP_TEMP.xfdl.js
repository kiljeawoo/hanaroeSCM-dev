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
                this.set_name("POPUP_TEMP");
                this.set_titletext("농협몰 꾸러미 참여 신청 안내");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,891,800);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_down", this);
            obj._setContents("<ColumnInfo><Column id=\"FILENAME\" type=\"STRING\" size=\"256\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FILENAME\">(붙임)마트상품부 갱신계약 필요서류.hwp</Col><Col id=\"SYSTEMFILENAME\">elt20211217</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_cancel", "absolute", "40%", null, null, "29", "40%", "35", this);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk", "absolute", null, null, "105", "17", "10", "10", this);
            obj.set_taborder("3");
            obj.set_text("다시 보지 않기");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Div("div_img", "absolute", "0", "0", null, null, "0", "75", this);
            obj.set_taborder("5");
            obj.set_scrollbars("autovert");
            this.addChild(obj.name, obj);
            obj = new ImageViewer("imgView", "absolute", "0", "0", "891", "848", null, null, this.div_img);
            obj.set_taborder("0");
            obj.set_stretch("fixaspectratio");
            obj.set_image("URL('theme://images/new/nh20211027p.png')");
            this.div_img.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_img,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_scrollbars("autovert");

            	}
            );
            this.div_img.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 891, 800, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("농협몰 꾸러미 참여 신청 안내");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("POPUP_TEMP.xfdl", function(exports) {
        this.form_onload = function(obj,e) 
        {
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.div_chk_onchanged = function(obj,e)
        {
        	if (obj.value == 1) {
        		application.setPrivateProfile("nhm_220214", "Y");
        		this.close();
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_close_onclick, this);
            this.chk.addEventHandler("onchanged", this.div_chk_onchanged, this);

        };

        this.loadIncludeScript("POPUP_TEMP.xfdl", true);

       
    };
}
)();
