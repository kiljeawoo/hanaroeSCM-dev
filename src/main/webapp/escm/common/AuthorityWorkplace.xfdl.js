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
                this.set_name("AuthorityWorkplace");
                this._setFormPosition(0,0,431,21);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_authorityWorkplace", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"NA_MBCO_DSC\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static23", "absolute", "0", "0", "67", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_text("권한사업장");
            obj.set_cssclass("sta_WF_MiniTitle");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_authorityWorkplace", "absolute", "66", "0", null, "21", "40", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("@ds_authorityWorkplace");
            obj.set_codecolumn("NA_TRPL_C");
            obj.set_datacolumn("CLNTNM");
            obj.set_displayrowcount("15");
            obj.set_cssclass("WF_Essential");
            obj.set_index("0");

            obj = new CheckBox("chk_all", "absolute", null, "0", "18", "21", "15", null, this);
            obj.set_taborder("2");
            obj.set_text("CheckBox00");
            obj.set_cssclass("chk_WF_allSlct");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", null, "5", "5", "11", "6", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Vdash");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup01", "absolute", null, "0", "21", "21", "38", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_Searchbtn");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 431, 21, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AuthorityWorkplace");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("AuthorityWorkplace.xfdl", "lib::comLib.xjs");
        this.registerScript("AuthorityWorkplace.xfdl", function() {
        //include "lib::comLib.xjs";

        var gFunctionName; //값이 변경될때 호출할 함수명
        var gFunctionNameChk; //체크값이 변경될때 호출할 함수명

        var index = "";
        this.form_onload = function(obj,e)
        {
        	// 본사 또는 위탁대리점이 아닌 경우, 권한사업장 숨김
        	if(application.gv_mbcoType != 1 && application.gv_mbcoType != 5){
        		if (application.gv_mbcoType == 2 && application.gv_userSystemCode == "21") {	// 가공장인 경우
        			
        		} else {
        			this.set_visible(false);
        			return;
        		}
        	}	
        	
        	if(application.gds_authorityWorkplace.getRowCount() > 1){
        		this.cbo_authorityWorkplace.set_right(66);
        		this.btn_popup01.set_visible(true);
        	}
        	this.ds_authorityWorkplace.copyData(application.gds_authorityWorkplace);
        }

        this.ds_authorityWorkplace_onload = function(obj,e)
        {	
        	var _index = 0;
        	if(this.isAuthEvent()){
        	 _index = this.getEventParam();
        	 if(!_index) _index = 0;
        	}
        	this.cbo_authorityWorkplace.set_index(_index);
        }

        this.cbo_authorityWorkplace_onitemchanged = function(obj,e)
        {	
        	this.cbo_authorityWorkplace.set_type("dropdown");
            if(this.isAuthEvent()) application.gds_eventInfo.setColumn(this.getEventIndex(), "PARAM", obj.index);
            this._callBindFunction(e.postvalue); // 함수호출
        }

        //이벤트 등록된 화면인지 확인
        this.isAuthEvent = function(){
        	var sId = this.getScreenId(this.parent.url);
        	return this.isGlobalEvent(sId, 'SAVE_AUTH');	
        };
        this.getEventParam = function(){
        	var sId = this.getScreenId(this.parent.url);
        	return this.isGlobalEvent(sId, 'SAVE_AUTH', 'PARAM');	
        };
        this.getEventIndex = function(){
        	var sId = this.getScreenId(this.parent.url);
        	return this.isGlobalEvent(sId, 'SAVE_AUTH', 'INDEX');	
        };

        /**
         * @desc 값이 변경될때 호출될 함수명을 지정한다.
         * @param sFunctionName 함수명
         */
        this.setFunctionName = function (sFunctionName,sFucntionNameChk) 
        {
        	gFunctionName = sFunctionName;
        	if (sFucntionNameChk != undefined) {
        		gFunctionNameChk = sFucntionNameChk;
        	}
        }

        /**
         * @desc 값이 변경될때 마다 함수를 호출한다.
         */
        this._callBindFunction = function (sVal)
        {
        	if (!this.gfn_isNull(gFunctionName)) {	
        		try {
        			this.lookupFunc(gFunctionName).call(sVal);
        		} catch(e) {
        		}
        	}
        }

        this._callBindFunctionChk = function (sVal)
        {
        	if (!this.gfn_isNull(gFunctionNameChk)) {	
        		try {
        			this.lookupFunc(gFunctionNameChk).call(sVal);
        		} catch(e) {
        		}
        	}
        }

        this.AuthorityWorkplace_ontimer = function(obj,e)
        {
        	if (e.timerid == 0) {
        		var nCnt = application.gds_authorityWorkplace.rowcount;
        		if (nCnt >0) {
        			this.ds_authorityWorkplace.copyData(application.gds_authorityWorkplace);
        			this.cbo_authorityWorkplace.set_index(0);
        			this.killTimer(0);
        		}
        	}
        }

        this.chk_all_onchanged = function(obj,e)
        {
        	this._callBindFunctionChk(e.postvalue); // 함수호출
        }

        this.btn_popup01_onclick = function(obj,e)
        {
        	index = this.cbo_authorityWorkplace.index;
        	this.cbo_authorityWorkplace.set_type("search");
        	this.cbo_authorityWorkplace.set_index(-1);
        	//this.cbo_authorityWorkplace.set_type("filterlike");
        	this.cbo_authorityWorkplace.setFocus();
        }

        this.btn_popup01_onmousemove = function(obj,e)
        {
        	obj.set_tooltiptext("권한사업장검색");
        }

        this.cbo_authorityWorkplace_onkillfocus = function(obj,e)
        {
        	if(this.gfn_isNull(this.cbo_authorityWorkplace.text))
        	{	
        		this.cbo_authorityWorkplace.set_type("dropdown");
        		this.cbo_authorityWorkplace.set_index(index);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_authorityWorkplace.addEventHandler("onload", this.ds_authorityWorkplace_onload, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.cbo_authorityWorkplace.addEventHandler("onitemchanged", this.cbo_authorityWorkplace_onitemchanged, this);
            this.cbo_authorityWorkplace.addEventHandler("onkillfocus", this.cbo_authorityWorkplace_onkillfocus, this);
            this.chk_all.addEventHandler("onchanged", this.chk_all_onchanged, this);
            this.btn_popup01.addEventHandler("onclick", this.btn_popup01_onclick, this);
            this.btn_popup01.addEventHandler("onmousemove", this.btn_popup01_onmousemove, this);

        };

        this.loadIncludeScript("AuthorityWorkplace.xfdl");

       
    };
}
)();
