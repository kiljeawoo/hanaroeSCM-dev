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
                this.set_name("multiCheckCombo");
                this._setFormPosition(0,0,140,21);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_returnComboMC", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_list", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("edt_name", "absolute", "0", "0", null, "21", "0", null, this);
            obj.set_taborder("1");
            obj.style.set_padding("2 25 0 5");
            obj.set_displaynulltext("-선택-");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_combo", "absolute", null, "0", "22", "21", "0", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_cmb");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv_list", "absolute", "0", "79", "140", "145", null, null, this);
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_list", "absolute", "0", "0", null, null, "0", "0", this.pdiv_list);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_pdiv");
            obj.set_useselcolor("false");
            obj.set_selecttype("row");
            obj.style.set_background("#ffffffff");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"32\"/><Column size=\"108\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"line:1px solid #d6d6d6,0px solid #d6d6d6;controlalign:center bottom;\" text=\"0\"/><Cell col=\"1\" style=\"align:left;padding:0 0 0 10;line:1px solid #d6d6d6ff,0px solid #d6d6d6ff;\" text=\"전체\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" style=\"align:left;padding:0 0 0 10;\"/></Band></Format></Formats>");
            this.pdiv_list.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 140, 145, this.pdiv_list,
            	//-- Layout function
            	function(p) {
            		p.set_visible("false");

            	}
            );
            this.pdiv_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 140, 21, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("multiCheckCombo");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("multiCheckCombo.xfdl", "lib::comLib.xjs");
        this.registerScript("multiCheckCombo.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        var strFunctionName;
        var strColCd    = "";
        var strColNm    = "";
        var nPdivHeight = 5;

        /************************************************************************************************
         * FORM EVENT 영역
         ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
         
        }

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
         * @desc 값이 변경될때 마다 함수를 호출한다.
         */
        this.callBindFunction = function() 
        {
        	var strValue = this._getValue();
        	
        	if (!this.gfn_isNull(strFunctionName)) 
        	{
        		try 
        		{
        			this.lookupFunc(strFunctionName).call(strValue);
        		} catch(e) 
        		{
        		}
        	}
        }

        /************************************************************************************************
         * 사용자 EVENT 영역
         ************************************************************************************************/

        this.btn_combo_onclick = function(obj,e)
        { 	
        	var nX = system.clientToScreenX(this.edt_name, 0) - system.clientToScreenX(application.mainframe, 0); 
        	var nY = system.clientToScreenY(this.edt_name, parseInt(this.edt_name.height)) - system.clientToScreenY(application.mainframe, 0); 
        		
        	var nRtn = this.pdiv_list.trackPopup(nX,nY);
        }

        /**
         * @desc 값이 변경될때 호출될 함수명을 지정한다.
         * @param sFunctionName 함수명
         **/
        this.setFunctionName = function (strName) 
        {
        	strFunctionName = strName;
        }

        this._setWidth = function(popupwidth)
        {
        	var nWidth = this.edt_name.width ;

        	if(this.gfn_isNull(popupwidth)|| nWidth > nexacro.toNumber(popupwidth)){
        		this.pdiv_list.set_width(nWidth);
        	} else {
        		this.pdiv_list.set_width(popupwidth);
        	}
        	
        	var objGrid = this.pdiv_list.grd_list;
        	objGrid.setFormatColProperty(0,"size",32);
        	
        }

        this._setDisplayCount = function(displayrowcount)
        {
        	nPdivHeight = displayrowcount;
        }

        this._getValue = function() 
        {
        	return this.ds_returnComboMC;
        }

        this._clearValue = function()
        { 
        	var objDS   = this.ds_list;
        	var objGrid = this.pdiv_list.grd_list;
        	
        	for(var i=0; i<objDS.rowcount; i++) 
            {
                objDS.setColumn(i, "CHK", 0);
            }
            
            objGrid.setCellProperty("Head",0,"text",0);	
        	this.ds_returnComboMC.clearData();
        	this.edt_name.set_value("-선택-");
        }

        this._enable = function(obj)
        {
        	if(obj) {
        		this.edt_name.set_enable(true);
        		this.btn_combo.set_enable(true);
        	} else {
        		this.edt_name.set_enable(false);
        		this.btn_combo.set_enable(false);
        	}
        }

        this._readonly = function(obj)
        {
        	if(obj) {
        		this.edt_name.set_readonly(true);
        		this.btn_combo.set_enable(false);
        		this.edt_name.set_cssclass("edt_WF_Readonly");
        	} else {
        		this.edt_name.set_readonly(false);
        		this.btn_combo.set_enable(true);
        		this.edt_name.set_cssclass("");
        	}
        }

        this._essential = function(obj)
        {
        	if(obj) {
        		this.edt_name.set_cssclass("edt_WF_Essential");
        	}else{
        		this.edt_name.set_cssclass("");
        	}
        }

        this._binddataset = function(ds,col1,col2)
        {
        	this.ds_list.copyData(ds);
        			
        	if(this.gfn_isNull(this.ds_list.getColumnInfo("CHK"))){
        		this.ds_list.addColumn("CHK", "string");
        	}
        	
        	this.pdiv_list.grd_list.set_binddataset("ds_list");
        	this.pdiv_list.grd_list.setCellProperty("body",1,"text","bind:"+col2);
        	
        	strColCd = col1;
        	strColNm = col2;
        	
        	//Pdiv Height설정
        	if(this.gfn_isNull(nPdivHeight)){
        		nPdivHeight = 5;
        	}
        	
        	var nCnt = this.ds_list.rowcount;
        	
        	var nWidth = 0;
        	
        	if(nCnt <= nPdivHeight) {
        		nWidth = (nCnt * 24)+26;
        	}else{
        		nWidth = (nPdivHeight * 24)+26;
        	}
        	
        	this.pdiv_list.set_height(nWidth);
        	
        }

        this.pdiv_list_grd_list_onheadclick = function(obj,e)
        {
        	if (e.col == 0){
        		this.gfn_setGridCheckAll(obj,e); //전체체크 함수
        	}
        }
        this.pdiv_list_oncloseup = function(obj,e)
        {
        	var oDs = this.ds_list;
        	this.ds_returnComboMC.clearData(); 
        	oDs.filter("CHK==1");	
        	this.ds_returnComboMC.copyData(oDs,true);	
        	oDs.filter("");
        	
        	var sVal;
        	
        	if(this.ds_returnComboMC.rowcount > 0){
        		if(this.ds_returnComboMC.rowcount == 1){
        			sVal = this.ds_returnComboMC.getColumn(0,strColNm);
        		}else{
        			sVal = this.ds_returnComboMC.rowcount+"건 선택됨";
        		}
        	}else{
        		sVal = "-선택-";
        	}
        	
        	this.edt_name.set_value(sVal);
        	
        	this.callBindFunction();
        }

        this.edt_name_oneditclick = function(obj,e)
        {
        	this.btn_combo_onclick();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.edt_name.addEventHandler("oneditclick", this.edt_name_oneditclick, this);
            this.btn_combo.addEventHandler("onclick", this.btn_combo_onclick, this);
            this.pdiv_list.addEventHandler("oncloseup", this.pdiv_list_oncloseup, this);
            this.pdiv_list.grd_list.addEventHandler("onheadclick", this.pdiv_list_grd_list_onheadclick, this);

        };

        this.loadIncludeScript("multiCheckCombo.xfdl", true);

       
    };
}
)();
