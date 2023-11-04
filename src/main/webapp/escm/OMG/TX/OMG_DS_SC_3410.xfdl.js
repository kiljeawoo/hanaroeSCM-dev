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
                this.set_name("OMG_DS_SC_6211");
                this.set_classname("popup01");
                this.set_titletext("농협인증서조회");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_ctfc", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TEMNM\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_CHRRNM\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_CHRR_MPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_CHRRNM\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_CHRR_MPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SG_ATOA_FL_TMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"SG_ATOA_FLNM\" type=\"STRING\" size=\"256\"/><Column id=\"SG_PSN_KY_FL_TMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"SG_PSN_KY_FLNM\" type=\"STRING\" size=\"256\"/><Column id=\"PWIZE_ATOA_FL_TMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"PWIZE_ATOA_FLNM\" type=\"STRING\" size=\"256\"/><Column id=\"PWIZE_PSN_KY_FL_TMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"PWIZE_PSN_KY_FLNM\" type=\"STRING\" size=\"256\"/><Column id=\"ATOA_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ATOA_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"VLD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ATOA_PW\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("upper_level1", "absolute", "109", "57", null, "29", "15", null, this);
            obj.getSetter("taborder").set("15");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cellPhone3", "absolute", "634", "61", "44", "21", null, null, this);
            obj.set_taborder("145");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "109", "85", null, "29", "15", null, this);
            obj.getSetter("taborder").set("18");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "109", "29", null, "29", "15", null, this);
            obj.getSetter("taborder").set("14");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0", "29", "110", "29", null, null, this);
            obj.getSetter("taborder").set("12");
            obj.set_text("사업장코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "0", "57", "110", "57", null, null, this);
            obj.getSetter("taborder").set("13");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "674", null, "91", "15", null, "0", this);
            obj.getSetter("taborder").set("68");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "659", "21", "91", "8", null, null, this);
            obj.getSetter("taborder").set("73");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_regsit", "absolute", null, "0", "77", "21", "15", null, this);
            obj.set_taborder("95");
            obj.set_text("인증서등록");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "393", "57", "100", "29", null, null, this);
            obj.getSetter("taborder").set("133");
            obj.set_text("휴대폰");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "393", "29", "110", "29", null, null, this);
            obj.getSetter("taborder").set("134");
            obj.set_text("사업장명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "393", "85", "100", "29", null, null, this);
            obj.getSetter("taborder").set("135");
            obj.set_text("휴대폰");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_oprrNm", "absolute", "505", "33", null, "21", "19", null, this);
            obj.set_taborder("138");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mbId", "absolute", "113", "33", "277", "21", null, null, this);
            obj.set_taborder("139");
            obj.set_inputtype("number,english");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("9");
            obj.set_imemode("alpha");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_cellPhone", "absolute", "506", "61", "62", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_cellPhone_innerdataset = new Dataset("cbo_cellPhone_innerdataset", this.cbo_cellPhone);
            cbo_cellPhone_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">010</Col><Col id=\"datacolumn\">010</Col></Row><Row><Col id=\"codecolumn\">011</Col><Col id=\"datacolumn\">011</Col></Row></Rows>");
            obj.set_innerdataset(cbo_cellPhone_innerdataset);
            obj.set_taborder("141");
            obj.set_value("010");
            obj.set_text("010");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");

            obj = new Static("Static02", "absolute", "569", "60", "11", "21", null, null, this);
            obj.getSetter("taborder").set("142");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "624", "61", "9", "21", null, null, this);
            obj.getSetter("taborder").set("143");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cellPhone2", "absolute", "579", "61", "44", "21", null, null, this);
            obj.set_taborder("144");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "109", "113", null, "29", "15", null, this);
            obj.getSetter("taborder").set("162");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "0", "113", "110", "29", null, null, this);
            obj.getSetter("taborder").set("163");
            obj.set_text("인증서 등록일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_eMail01", "absolute", "113", "117", "277", "21", null, null, this);
            obj.set_taborder("164");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("60");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "393", "113", "110", "29", null, null, this);
            obj.getSetter("taborder").set("165");
            obj.set_text("인증서유효기간");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_cellPhone00", "absolute", "506", "89", "62", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_cellPhone00_innerdataset = new Dataset("cbo_cellPhone00_innerdataset", this.cbo_cellPhone00);
            cbo_cellPhone00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">010</Col><Col id=\"datacolumn\">010</Col></Row><Row><Col id=\"codecolumn\">011</Col><Col id=\"datacolumn\">011</Col></Row></Rows>");
            obj.set_innerdataset(cbo_cellPhone00_innerdataset);
            obj.set_taborder("169");
            obj.set_value("010");
            obj.set_text("010");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");

            obj = new Static("Static12", "absolute", "624", "89", null, "21", "164", null, this);
            obj.getSetter("taborder").set("170");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "570", "89", null, "21", "219", null, this);
            obj.getSetter("taborder").set("171");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cellPhone00", "absolute", "579", "89", "44", "21", null, null, this);
            obj.set_taborder("172");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cellPhone01", "absolute", "634", "89", "44", "21", null, null, this);
            obj.set_taborder("173");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "67", "57", "43", "29", null, null, this);
            obj.getSetter("taborder").set("174");
            obj.set_text("정");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "67", "85", "43", "29", null, null, this);
            obj.getSetter("taborder").set("175");
            obj.set_text("부");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mbId00", "absolute", "187", "61", "203", "21", null, null, this);
            obj.set_taborder("176");
            obj.set_imemode("alpha");
            obj.set_inputtype("number,english");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mbId01", "absolute", "187", "89", "203", "21", null, null, this);
            obj.set_taborder("177");
            obj.set_imemode("alpha");
            obj.set_inputtype("number,english");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_eMail03", "absolute", "506", "117", null, "21", "19", null, this);
            obj.set_taborder("178");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("60");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "107", "57", "70", "29", null, null, this);
            obj.getSetter("taborder").set("179");
            obj.set_text("이름");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "107", "85", "70", "29", null, null, this);
            obj.getSetter("taborder").set("180");
            obj.set_text("이름");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", null, "1", "15", "491", "0", null, this);
            obj.getSetter("taborder").set("181");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("182");
            obj.set_url("common::location.xfdl");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("농협인증서조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item2","edt_oprrNm","value","ds_ctfc","NA_BZPLNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_mbId","value","ds_ctfc","NA_BZPLC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","edt_eMail01","value","ds_ctfc","FSRG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edt_mbId00","value","ds_ctfc","MAIN_CHRRNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edt_mbId01","value","ds_ctfc","SUB_CHRRNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","edt_eMail03","value","ds_ctfc","");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_3410.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_3410.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        this.id_confirm = false;
        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }
        this.fn_afterFormOnload = function()
        {
        	//페이지 로딩후 실행부분
        	this.fn_retrieveCtfc();
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_retrieveCtfc = function()
        {
        	var sSvcID        = "retrieveCtfc";
        	var sURL          = "svc::rest/tx/retrieveCtfc";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_ctfc=ds_ctfc";	
        	var sArgument     = "NA_BZPLC=" + '8761389544234';
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
         	if(ErrorCode < 0) //에러
         	{
        		trace(">>>>>>>>>>>>>>> svcID ::" +  svcID + ",  ErrorCode :: " + ErrorCode + ",  ErrorMsg :: " + ErrorMsg);
         	}
         	else 
         	{
        		switch(svcID)
        		{
        			case "retrieveCtfc":
        				this.fn_telNo(this.ds_ctfc.getColumn(0, "MAIN_CHRR_MPNO", this.cbo_cellPhone, this.edt_cellPhone2, this.edt_cellPhone3));
        				this.fn_telNo(this.ds_ctfc.getColumn(0, "SUB_CHRR_MPNO", this.cbo_cellPhone00, this.edt_cellPhone00, this.edt_cellPhone01));
        				break;
        		}
         	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.common_onclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_regsit":
        			var oArg = {user:application.gv_userId};
        			var sOption = "autosize=true, title=true";
        			var sPopupCallBack = "fn_popupAfter";    
        			this.gfn_openPopup("OMG_DS_SC_3420","OMG.TX::OMG_DS_SC_3420.xfdl",oArg,sOption,sPopupCallBack);	
        			break;
        	}
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/

        
        //전화 번호 타입 변경
        this.fn_telNo = function(strTelNo,strVal1,strVal2,strVal3)
        {
        	if(this.gfn_isNull(strTelNo)) return ;
        	
        	if(strTelNo.length > 8 ){
              var RegPhonNum = ""; 

               //문자열 길이에 따른 값 처리
              if(strTelNo.length == 9 ) {
                 RegPhonNum = /([0-9]{2})([0-9]{3})([0-9]+)/; 
              } else if(strTelNo.length == 10){
                 if(strTelNo.substring(0,2)=="02"){
                    RegPhonNum = /([0-9]{2})([0-9]{4})([0-9]+)/; 
                 }else{
                    RegPhonNum = /([0-9]{3})([0-9]{3})([0-9]+)/;
                 }
              } else if(strTelNo.length > 10){ 
                 RegPhonNum = /([0-9]{3})([0-9]{4})([0-9]+)/; 
              }
        	  strTelNo = strTelNo.replace(RegPhonNum, "$1-$2-$3"); 

              var naTrplCVal = strTelNo.split("-");

                  this.cbo_cellPhone.set_value(naTrplCVal[0]);
                  this.edt_cellPhone00.set_value(naTrplCVal[1]);
                  strVal3.set_value(naTrplCVal[2]);
           }
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_regsit.addEventHandler("onclick", this.common_onclick, this);
            this.edt_mbId.addEventHandler("ontextchanged", this.edt_mbId_ontextchanged, this);
            this.edt_mbId00.addEventHandler("ontextchanged", this.edt_mbId_ontextchanged, this);
            this.edt_mbId01.addEventHandler("ontextchanged", this.edt_mbId_ontextchanged, this);

        };

        this.loadIncludeScript("OMG_DS_SC_3410.xfdl");
        this.loadPreloadList();
       
    };
}
)();
