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
                this.set_name("OMG_DS_SC_6210");
                this.set_titletext("서비스 운영 회원 조회");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_memberList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MB_PW\" type=\"STRING\" size=\"256\"/><Column id=\"USR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEX_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"USR_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"USR_MPNO\" type=\"STRING\" size=\"256\"/><Column id=\"USR_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"SMS_RMS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_RMS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_PRG_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CHRG_BSNNM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\"/><Column id=\"PW_LSRG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MB_CV_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_member", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MB_PW\" type=\"STRING\" size=\"256\"/><Column id=\"USR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEX_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"USR_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"USR_MPNO\" type=\"STRING\" size=\"256\"/><Column id=\"USR_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"SMS_RMS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_RMS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_PRG_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CHRG_BSNNM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\"/><Column id=\"PW_LSRG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MB_CV_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_deleteList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MB_PW\" type=\"STRING\" size=\"256\"/><Column id=\"USR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEX_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"USR_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"USR_MPNO\" type=\"STRING\" size=\"256\"/><Column id=\"USR_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"SMS_RMS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_RMS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_PRG_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CHRG_BSNNM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\"/><Column id=\"PW_LSRG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MB_CV_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_del", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("11");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mod", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("37");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", "240", "21", null, null, this);
            obj.set_taborder("68");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "788", "0", "15", "490", null, null, this);
            obj.set_taborder("71");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("72");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("85");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "2.04%", "10", null, "21", "84.86%", null, this.div_search);
            obj.set_taborder("1");
            obj.set_text("운영자ID");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_mbId", "absolute", "13.36%", "9", null, "21", "68.83%", null, this.div_search);
            obj.set_taborder("2");
            obj.set_maxlength("8");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "36.77%", "11", null, "21", "49.24%", null, this.div_search);
            obj.set_taborder("3");
            obj.set_text("운영자이름");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_oprrNm", "absolute", "49.75%", "9", null, "21", "32.44%", null, this.div_search);
            obj.set_taborder("4");
            obj.set_maxlength("8");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "1", "30", "15", "42", null, null, this);
            obj.set_taborder("86");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "732", "72", "56", "41", null, null, this);
            obj.set_taborder("87");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reg", "absolute", null, "0", "41", "21", "161", null, this);
            obj.set_taborder("88");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_memberList", "absolute", "0", "113", null, null, "15", "0", this);
            obj.set_taborder("89");
            obj.set_binddataset("ds_memberList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"운영ID\"/><Cell col=\"2\" text=\"운영자이름\"/><Cell col=\"3\" text=\"전화번호\"/><Cell col=\"4\" text=\"이메일\"/><Cell col=\"5\" text=\"휴대전화\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:MB_ID\"/><Cell col=\"2\" style=\"align:left;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:USR_NM\"/><Cell col=\"3\" style=\"align:left;\" text=\"expr:comp.parent.fn_telNo(USR_TELNO)\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:USR_EMAIL\"/><Cell col=\"5\" style=\"align:left;\" text=\"expr:comp.parent.fn_telNo(USR_MPNO)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("85");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("서비스 운영 회원 조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_6210.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6210.xfdl", function() {
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
           //페이지 로딩후 실행부분
           this.fn_retrieveSvcOperMbList();
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_retrieveSvcOperMbList = function()
        {
        	var sSvcID        = "retrieveSvcOperMbList";
        	var sURL          = "svc::rest/mg/retrieveSvcOperMbList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_memberList=ds_memberList";	
        	var sArgument     = "MB_ID=" + this.gfn_nullToEmpty(this.div_search.edt_mbId.value) +  
        						" MB_NM=" + this.gfn_nullToEmpty(this.div_search.edt_oprrNm.value) +
        						" USR_TPC=99";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_deleteSvcOperMb = function()
        {
        	var sSvcID        = "deleteSvcOperMb";
        	var sURL          = "svc::rest/mg/deleteSvcOperMb";
        	var sInDatasets   = "ds_deleteList=ds_deleteList";
        	var sOutDatasets  = "";	
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
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
        			case "retrieveSvcOperMbList":
        				break;
        			case "deleteSvcOperMb":
        				alert("삭제되었습니다.");
        				this.fn_retrieveSvcOperMbList();
        				break;
        		}
         	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        
        this.common_onclick = function(obj,e)
        {
        	var nRow = -1 ;
        	switch(obj.name)
        	{
        		case "btn_mod":
        			var nRow = this.ds_memberList.findRow("ISCHECKED", "1");
        			if( nRow > -1 )
        			{
        				this.ds_member.assign(this.ds_memberList);
        				this.ds_member.clearData();
        				this.ds_member.addRow();
        				this.ds_member.copyRow(0, this.ds_memberList, nRow );
        				this.fn_openPop(obj.name);
        			}
        			else
        			{
        				alert("선택해주세요.");
        			}
        			break;
        		
        		case "btn_reg":
        			this.ds_member.assign(this.ds_memberList);
        			this.ds_member.clearData();
        			this.ds_member.addRow();
        			this.fn_openPop(obj.name);
        			break;
        			
        		case "btn_del":
        			var nRow = this.ds_memberList.findRow("ISCHECKED", "1");
        			if( nRow > -1 )
        			{
        				this.ds_deleteList.assign(this.ds_memberList);
        				this.ds_deleteList.clearData();
        				this.ds_deleteList.addRow();
        				this.ds_deleteList.copyRow(0, this.ds_memberList, nRow );
        				if(confirm("정말로 삭제하시겠습니까?"))
        				{
        					this.fn_deleteSvcOperMb();
        				}
        			}
        			else
        			{
        				alert("선택해주세요.");
        			}
        			
        			break;
        			
        		case "btn_search":
        			this.fn_retrieveSvcOperMbList();
        			break;
        	}
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_openPop = function(popName)
        {
        	var oArg = {paramMode:popName, dsArg:this.ds_member};			
        	var sOption = "autosize=true, title=true";
        	var sPopupCallBack = "fn_popupAfter";    				
        	this.gfn_openPopup("OMG_DS_SC_6211_"+popName,"OMG.MG::OMG_DS_SC_6211.xfdl",oArg,sOption,sPopupCallBack);	
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	this.fn_retrieveSvcOperMbList();
        }

        this.edit_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        		this.fn_retrieveSvcOperMbList();
        }

        this.Grid01_oncellclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		//체크박스를 하나만 할 수 있도록,,
        		for(var i = 0 ; i < this.ds_memberList.rowcount ; i++)
        		{
        			this.ds_memberList.setColumn(i, "ISCHECKED", 0);
        		}
        		this.ds_memberList.setColumn(e.row, "ISCHECKED", 1)
        	}
        }

        this.ds_memberList_oncolumnchanged = function(obj,e)
        {
        	obj.enableevent = false;
        	if(e.columnid == "ISCHECKED" && e.newvalue == 1)
        	{
        		for(var i = 0 ; i < this.ds_memberList.rowcount ; i++)
        		{
        			if(e.row != i)
        			this.ds_memberList.setColumn(i, "ISCHECKED", 0);
        		}
        	}
        	obj.enableevent = true;
        }

        //전화 번호 타입 변경
        this.fn_telNo = function(strTelNo)
        {

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
        	}
        	return strTelNo;
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_memberList.addEventHandler("oncolumnchanged", this.ds_memberList_oncolumnchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_del.addEventHandler("onclick", this.common_onclick, this);
            this.btn_search.addEventHandler("onclick", this.common_onclick, this);
            this.btn_mod.addEventHandler("onclick", this.common_onclick, this);
            this.div_search.edt_mbId.addEventHandler("onkeydown", this.edit_onkeydown, this);
            this.div_search.edt_oprrNm.addEventHandler("onkeydown", this.edit_onkeydown, this);
            this.btn_reg.addEventHandler("onclick", this.common_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6210.xfdl");
        this.loadPreloadList();
       
    };
}
)();
