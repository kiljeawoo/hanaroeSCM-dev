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
                this.set_name("CHUCK");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,506,231);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_auth", this);
            obj._setContents("<ColumnInfo><Column id=\"MD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USR_EMAIL1\" type=\"STRING\" size=\"256\"/><Column id=\"USR_EMAIL2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_officeInfo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BZNO1\" type=\"STRING\" size=\"30\"/><Column id=\"BZNO2\" type=\"STRING\" size=\"30\"/><Column id=\"BZNO3\" type=\"STRING\" size=\"30\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"30\"/><Column id=\"COMP_TPC\" type=\"STRING\" size=\"30\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"30\"/><Column id=\"MB_PW\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"30\"/><Column id=\"USR_TELNO\" type=\"STRING\" size=\"30\"/><Column id=\"USR_EMAIL01\" type=\"STRING\" size=\"30\"/><Column id=\"USR_EMAIL02\" type=\"STRING\" size=\"30\"/><Column id=\"SMS_RMS_YN\" type=\"STRING\" size=\"30\"/><Column id=\"EMAIL_RMS_YN\" type=\"STRING\" size=\"30\"/><Column id=\"USR_HP\" type=\"STRING\" size=\"30\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"30\"/><Column id=\"REPMNM\" type=\"STRING\" size=\"30\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"30\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"30\"/><Column id=\"FZIP\" type=\"STRING\" size=\"30\"/><Column id=\"RZIP\" type=\"STRING\" size=\"30\"/><Column id=\"TEL1\" type=\"STRING\" size=\"30\"/><Column id=\"TEL2\" type=\"STRING\" size=\"30\"/><Column id=\"TEL3\" type=\"STRING\" size=\"30\"/><Column id=\"HP1\" type=\"STRING\" size=\"30\"/><Column id=\"HP2\" type=\"STRING\" size=\"30\"/><Column id=\"HP3\" type=\"STRING\" size=\"30\"/><Column id=\"BIRTH\" type=\"STRING\" size=\"30\"/><Column id=\"SEX_DSC\" type=\"STRING\" size=\"30\"/><Column id=\"MB_CV_DSC\" type=\"STRING\" size=\"30\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("0");
            obj.set_text("본인인증");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_MB_ID", "absolute", "136", "62", "122", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_inputtype("number");
            obj.set_maxlength("9");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "0", "37", "32", "0", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "51.78%", "101", null, "20", "44.66%", null, this);
            obj.set_taborder("6");
            obj.set_text("@");
            obj.style.set_font("bold 14 Gulim");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "8.3%", "61", null, "24", "77.08%", null, this);
            obj.set_taborder("8");
            obj.set_text("아이디");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "8.3%", "101", null, "24", "77.08%", null, this);
            obj.set_taborder("9");
            obj.set_text("이메일");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "24.9%", "146", null, "42", "25.1%", null, this);
            obj.set_taborder("10");
            obj.set_text("인증");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_USR_EMAIL01", "absolute", "136", "103", "122", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_maxlength("25");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_USR_EMAIL02", "absolute", "288", "103", "122", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_maxlength("25");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 24, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("8");
            		p.set_text("아이디");
            		p.style.set_font("bold 9 Gulim");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 506, 231, this,
            	//-- Layout function
            	function(p) {
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item10","edt_MB_ID","value","ds_userInfo","MB_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","edt_USR_EMAIL01","value","ds_userInfo","USR_EMAIL01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","edt_USR_EMAIL02","value","ds_userInfo","USR_EMAIL02");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("POPUP_SELF_AUTH_copy.xfdl", "lib::comLib.xjs");
        this.registerScript("POPUP_SELF_AUTH_copy.xfdl", function() {
        //include "lib::comLib.xjs";

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.Button00_onclick = function(obj,e)
        {
        	//서버에 인증을 요청하는 코드
        	var param = "mbId="+this.edt_MB_ID.value
         				+" email_1="+this.edt_USR_EMAIL01.value
         				+" email_2="+this.edt_USR_EMAIL02.value
        				;
        				
        	var sSvcID        = "check_authority";
        	var sURL          = "svc::rest/pt/usrinf/check_authority";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_officeInfo=ds_officeInfo";
        	var sArgument     =  param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회	
        	 
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);

        //	this.close();
        }

        
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {		
        	//if(svcID =="retrieveBuyerInfo"){
        	if(svcID =="check_authority"){
        	console.log('auth_check');
        // 	console.log(this.ds_officeInfo.getColCount());
        // 	console.log(this.ds_officeInfo.getColID(0));
        // 	console.log(this.ds_officeInfo.getColumn(0,this.ds_officeInfo.getColID(0)));
        	let ds_officeInfo_obj={};
        	for(let i=0; i<this.ds_officeInfo.getColCount(); i++){
        		ds_officeInfo_obj[this.ds_officeInfo.getColID(i)] = this.ds_officeInfo.getColumn(0,this.ds_officeInfo.getColID(i));
        	}
        	console.log(ds_officeInfo_obj);
        	console.log(JSON.stringify(ds_officeInfo_obj));
        	this.gfn_openPopup("popId", url, oArg, sOption, sPopupCallBack);
        	this.close(JSON.stringify(ds_officeInfo_obj));
        	}
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.edt_MB_ID.addEventHandler("oneditclick", this.Div05_edt_MB_ID_oneditclick, this);
            this.edt_MB_ID.addEventHandler("onchanged", this.Div05_edt_MB_ID_onchanged, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("POPUP_SELF_AUTH_copy.xfdl");

       
    };
}
)();
