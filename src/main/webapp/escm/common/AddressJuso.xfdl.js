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
                this.set_name("SearchAddress");
                this.set_titletext("주소등록");
                this._setFormPosition(0,0,800,500);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_addr", this);
            obj._setContents("<ColumnInfo><Column id=\"BLD_AMNNO\" type=\"STRING\" size=\"256\"/><Column id=\"DTCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PROVNM\" type=\"STRING\" size=\"256\"/><Column id=\"PROV_ENM\" type=\"STRING\" size=\"256\"/><Column id=\"CCWNM\" type=\"STRING\" size=\"256\"/><Column id=\"CCW_ENM\" type=\"STRING\" size=\"256\"/><Column id=\"TTVNM\" type=\"STRING\" size=\"256\"/><Column id=\"TTV_ENM\" type=\"STRING\" size=\"256\"/><Column id=\"RODNM_C\" type=\"STRING\" size=\"256\"/><Column id=\"RODNM\" type=\"STRING\" size=\"256\"/><Column id=\"RODNM_ENM\" type=\"STRING\" size=\"256\"/><Column id=\"UGR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BLD_NO_MHZNO\" type=\"STRING\" size=\"256\"/><Column id=\"BLD_NO_SHZNO\" type=\"STRING\" size=\"256\"/><Column id=\"LGQT_DVPNM\" type=\"STRING\" size=\"256\"/><Column id=\"CCWN_BLDNM\" type=\"STRING\" size=\"256\"/><Column id=\"LWDG_C\" type=\"STRING\" size=\"256\"/><Column id=\"LWDGNM\" type=\"STRING\" size=\"256\"/><Column id=\"RINM\" type=\"STRING\" size=\"256\"/><Column id=\"ADDGNM\" type=\"STRING\" size=\"256\"/><Column id=\"MNT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LTNO_MHZNO\" type=\"STRING\" size=\"256\"/><Column id=\"TTV_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"LTNO_SHZNO\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_SQNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new WebBrowser("wb_addr", "absolute", "0", "0", null, null, "0", "120", this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Div("div_result", "absolute", "0", null, null, "115", "0", "0", this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "96", "40", null, "29", "10", null, this.div_result);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_result.addChild(obj.name, obj);
            obj = new Static("Static23", "absolute", "96", "68", null, "29", "10", null, this.div_result);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_result.addChild(obj.name, obj);
            obj = new Button("btn_register", "absolute", null, "5", "100", "21", "10", null, this.div_result);
            obj.set_taborder("2");
            obj.set_text("주소 등록");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.div_result.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "10", "40", "120", "29", null, null, this.div_result);
            obj.set_taborder("3");
            obj.set_text("도로명 주소");
            obj.set_cssclass("sta_WF_Label");
            this.div_result.addChild(obj.name, obj);
            obj = new Static("Static25", "absolute", "10", "68", "120", "29", null, null, this.div_result);
            obj.set_taborder("4");
            obj.set_text("지번 주소");
            obj.set_cssclass("sta_WF_Label");
            this.div_result.addChild(obj.name, obj);
            obj = new Edit("edt_road", "absolute", "135", "44", "500", "21", null, null, this.div_result);
            obj.set_taborder("5");
            this.div_result.addChild(obj.name, obj);
            obj = new Edit("edt_jibun", "absolute", "135", "72", "500", "21", null, null, this.div_result);
            obj.set_taborder("6");
            this.div_result.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "10", "10", "301", "21", null, null, this.div_result);
            obj.set_taborder("7");
            obj.set_text("주소 등록 내용");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_result.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 115, this.div_result,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");

            	}
            );
            this.div_result.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 800, 500, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AuthorityWorkplace");
            		p.set_titletext("주소등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Div00.edt_chrrNm","value","ds_rc","CHRRNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div00.edt_chrrEmail","value","ds_rc","CHRR_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AddressJuso.xfdl", "lib::comLib.xjs");
        this.registerScript("AddressJuso.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	var jusoUrl = application.gv_server_url + "escm/OpenWeb_API/juso.html";
        	this.wb_addr.set_url(jusoUrl);
        }

        this.wb_addr_onusernotify = function(obj,e)
        {
        	if (!this.gfn_isNull(e.userdata)) {
        		this.returnAddrStr(e.userdata);
        		//this.close();
        	}
        }

        this.returnAddrStr = function(str)
        {
        	trace(str);
        	if (!this.gfn_isNull(str)){
        		var temp = str.split("|");
        		this.ds_addr.clearData();
        		var row = this.ds_addr.addRow();
        		this.ds_addr.setColumn(row, "BLD_AMNNO", temp[0]);
        		this.ds_addr.setColumn(row, "DTCT_NO", temp[1]);
        		this.ds_addr.setColumn(row, "PROVNM", temp[2]);
        		this.ds_addr.setColumn(row, "CCWNM", temp[3]);
        		this.ds_addr.setColumn(row, "TTVNM", temp[4]);
        		this.ds_addr.setColumn(row, "RODNM_C", temp[5]);
        		this.ds_addr.setColumn(row, "RODNM", temp[6]);
        		this.ds_addr.setColumn(row, "UGR_YN", temp[7]);
        		this.ds_addr.setColumn(row, "BLD_NO_MHZNO", temp[8]);
        		this.ds_addr.setColumn(row, "BLD_NO_SHZNO", temp[9]);
        		this.ds_addr.setColumn(row, "CCWN_BLDNM", temp[10]);
        		this.ds_addr.setColumn(row, "LWDG_C", temp[11]);
        		this.ds_addr.setColumn(row, "LWDGNM", temp[12]);
        		this.ds_addr.setColumn(row, "RINM", temp[13]);
        		this.ds_addr.setColumn(row, "MNT_YN", temp[14]);
        		this.ds_addr.setColumn(row, "LTNO_MHZNO", temp[15]);
        		this.ds_addr.setColumn(row, "TTV_SQNO", temp[16]);
        		this.ds_addr.setColumn(row, "LTNO_SHZNO", temp[17]);
        		
        		this.div_result.edt_road.set_value(temp[18]);
        		this.div_result.edt_jibun.set_value(temp[19]);
        		this.div_result.btn_register.set_enable(true);
        	}
        }

        this.btn_register_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.wb_addr.addEventHandler("onusernotify", this.wb_addr_onusernotify, this);
            this.div_result.btn_register.addEventHandler("onclick", this.btn_register_onclick, this);

        };

        this.loadIncludeScript("AddressJuso.xfdl");

       
    };
}
)();
