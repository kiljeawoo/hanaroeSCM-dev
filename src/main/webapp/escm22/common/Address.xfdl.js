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
                this.set_name("SelectGLN");
                this.set_titletext("주소검색(다음API)");
                this._setFormPosition(0,0,500,500);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("wb_addr", "absolute", "0", "0", null, null, "0", "0", this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 500, 500, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AuthorityWorkplace");
            		p.set_titletext("주소검색(다음API)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("Address.xfdl", "lib::comLib.xjs");
        this.registerScript("Address.xfdl", function() {
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
        		this.close(this.returnAddrStr(e.userdata));
        	}
        }

        this.returnAddrStr = function(str)
        {
        	var addrType;
        	var zip;
        	var rAddr;
        	var jAddr;
        	var bname;
        	var bldName;
        	var bldCode;

        	// str : WD@키:값?키:값?키:값?키:값.........
        	str = str.replace("WD@", "");
        	var data = str.split("?");
        	for (var i=0; i<data.length; i++) {
        		var temp = data[i].split(":");
        		if (temp[0] == "addrType") {
        			// 주소유형 R(도로명), J(지번)
        			addrType = temp[1];
        		} else if (temp[0] == "zip") {
        			// 우편번호
        			zip = temp[1];
        		} else if (temp[0] == "rAddr") {
        			// 도로명 주소
        			rAddr = temp[1];
        		} else if (temp[0] == "jAddr") {
        			// 지번 주소
        			jAddr = temp[1];
        		} else if (temp[0] == "bname") {
        			// 법정동명
        			bname = temp[1];
        		} else if (temp[0] == "bldName") {
        			// 건물명
        			bldName = temp[1];
        		} else if (temp[0] == "bldCode") {
        			// 건물관리번호
        			bldCode = temp[1];
        		}
        	}
        	
        	var zipCode  = "FZIP#" + zip.substr(0,3);
        	zipCode += ",RZIP#" + zip.substr(3,2);
        	if (addrType == "J") {
        		// 지번
        		zipCode += ",DONGUP#" + jAddr;
        	} else {
        		// 도로명
        		zipCode += ",DONGUP#" + rAddr;
        		if (!this.gfn_isNull(bldName)){
        			zipCode += " (" + bldName + ")";
        		}
        // 		if (!this.gfn_isNull(bname)) {
        // 			zipCode += " (" + bname + ")"; // 법정동명 추가
        // 		}
        	}
        	zipCode += ",DONGBW#";
        	zipCode += ",GBN#" + (addrType == "R" ? "2" : "1") // 주소구분(1지번,2도로명)
        	zipCode += ",BLD_AMNNO#" + bldCode; // 건물관리번호
        	
        	return zipCode;
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.wb_addr.addEventHandler("onusernotify", this.wb_addr_onusernotify, this);

        };

        this.loadIncludeScript("Address.xfdl");

       
    };
}
)();
