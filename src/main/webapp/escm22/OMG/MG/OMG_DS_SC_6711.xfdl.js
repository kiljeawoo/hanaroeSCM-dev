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
                this.set_name("popup01");
                this.set_titletext("부서 등록/수정");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,767,254);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_ID\" type=\"STRING\" size=\"64\"/><Column id=\"DEPT_HIGH\" type=\"STRING\" size=\"64\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"128\"/><Column id=\"DEPT_SORT\" type=\"STRING\" size=\"32\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"13\"/><Column id=\"DEPT_LEVEL\" type=\"STRING\" size=\"1\"/><Column id=\"LEVEL_ID\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_save", "absolute", null, "47", "41", "21", "56", null, this);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close2", "absolute", null, "47", "41", "21", "13", null, this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "17", "51", "135", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_text("부서 등록/수정");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "17", "76", "134", "29", null, null, this);
            obj.set_taborder("3");
            obj.set_text("부서 아이디");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "17", "104", "134", "29", null, null, this);
            obj.set_taborder("4");
            obj.set_text("상위 부서 아이디");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "150", "76", null, "29", "17", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "150", "104", null, "29", "17", null, this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "673", "32", "91", "15", null, null, this);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "99", "17", "67", null, null, this);
            obj.set_taborder("8");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("9");
            obj.set_text("부서 정보 관리");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "729", "0", "37", "32", null, null, this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_dept_id", "absolute", "154", "80", "166", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_cssclass("edt_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_depthigh_id", "absolute", "154", "108", "166", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_cssclass("edt_WF_Essential");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "150", "132", null, "29", "17", null, this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_deptname", "absolute", "154", "136", "166", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_cssclass("edt_WF_Essential");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "17", "132", "134", "29", null, null, this);
            obj.set_taborder("21");
            obj.set_text("부 서 명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Button("btn_deptidCheck", "absolute", "322", "80", "54", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_text("중복확인");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "150", "160", null, "29", "17", null, this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_nabzplc", "absolute", "154", "164", "166", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_readonly("false");
            obj.set_cssclass("edt_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "17", "160", "134", "29", null, null, this);
            obj.set_taborder("28");
            obj.set_text("사업장 코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "17", "188", "134", "29", null, null, this);
            obj.set_taborder("29");
            obj.set_text("정렬 순서");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "150", "188", null, "29", "17", null, this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_deptsort", "absolute", "154", "192", "166", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_cssclass("edt_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "17", "216", "134", "29", null, null, this);
            obj.set_taborder("32");
            obj.set_text("부서 레벨");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "150", "216", null, "29", "17", null, this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_deptlevel", "absolute", "154", "220", "166", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_cssclass("edt_WF_Essential");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 767, 254, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("부서 등록/수정");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_6711.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6711.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        var btn_save_enable = false;
        var save_exec = false;
        var dept_id="";
        var dept_highid="";
        var paraMode = "";
        var dept_sort="";
        var dept_level="";
        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        	paraMode = this.getOwnerFrame().paramMode;
        	dept_highid=this.getOwnerFrame().depthighid;	//dept_highid 입력
        	this.edit_depthigh_id.set_value(dept_highid);
        	dept_level=this.getOwnerFrame().deptlevel;
        	dept_sort=this.getOwnerFrame().deptsort;	//deptsort 입력
        	if(paraMode == "I"){
        		this.edit_deptlevel.set_value(nexacro.toNumber(this.getOwnerFrame().deptlevel)+1);
        		this.edit_deptsort.set_enable("false");
        	}
        	if(paraMode == "U"){	 //수정업데이트
        		dept_id=this.getOwnerFrame().deptid;	//dept_id 입력
        		this.edit_dept_id.set_value(dept_id);
        		this.edit_deptname.set_value(this.getOwnerFrame().deptname);	//deptname 입력
        		
        		this.edit_deptsort.set_value(dept_sort);
        		
        		this.edit_deptlevel.set_value(dept_level);
        		this.edit_nabzplc.set_value(this.getOwnerFrame().nabzplc);	    //nabzplc 입력
        		this.btn_deptidCheck.set_visible(false);
        		this.edit_dept_id.set_cssclass("edt_WF_Readonly");
        		this.edit_dept_id.set_readonly("true");
        		btn_save_enable = true;
        	}
        	
        }
        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        /*콜백 함수*/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "checkEmpeAmnid"){
        			if(this.ds_dept.rowcount==0){
        				this.alert("사용 가능합니다.");
        				btn_save_enable = true;
        			}
        			else {
        				this.alert("이미 사용중입니다.");
        			}
        		}
        		else if(svcID == "insertEmpeAmn") {
        			this.gfn_getMessage("alert", "result.message.save.success");
        			btn_save_enable = false;
        			save_exec = true;
        		}
        		else if(svcID == "updateEmpeAmn") {
        			this.gfn_getMessage("alert", "result.message.save.success");
        			save_exec = true;
        		}
        	}	

        }
        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /*추가등록 시 사용되는 Validation Check */
        this.fn_validationCheck = function() {
        	
        	if(this.gfn_isNull(this.edit_dept_id.value)){
        		this.alert("부서 아이디를 입력해주세요");
        		this.edit_dept_id.setFocus();
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.edit_deptname.value)){
        		this.alert("부서명을 입력해주세요");
        		this.edit_deptname.setFocus();
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.edit_deptname.value)){
        		this.alert("부서명을 입력해주세요");
        		this.edit_deptname.setFocus();
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.edit_nabzplc.value)){
        		this.alert("사업장 코드를 입력해주세요");
        		this.edit_nabzplc.setFocus();
        		return false;
        	}
        	
        	return true;
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        /*닫기*/
        this.btn_close_onclick = function(obj,e)
        {
        	if(save_exec){
        		this.close(dept_id);
        	}else{
        		this.close();
        	}
        }

        /*저장*/

        
        this.btn_save_onclick = function(obj,e)
        {
        	if(btn_save_enable){
        		if(this.fn_validationCheck()){
        			
        			if(paraMode == "I"){
        				this.ds_dept.addRow();
        				this.ds_dept.setColumn(0,"DEPT_ID",this.edit_dept_id.value);
        				this.ds_dept.setColumn(0,"DEPT_HIGH",this.edit_depthigh_id.value);
        				dept_id=this.edit_depthigh_id.value;
        				this.ds_dept.setColumn(0,"DEPT_NAME",this.edit_deptname.value);
        				this.ds_dept.setColumn(0,"DEPT_SORT",dept_sort);
        				this.ds_dept.setColumn(0,"NA_BZPLC",this.edit_nabzplc.value);
        				this.ds_dept.setColumn(0,"DEPT_LEVEL",this.edit_deptlevel.value);
        				var sParams = "";
        				var sSvcID        = "insertEmpeAmn";
        				var sURL          = "svc::rest/mg/insertEmpeAmn";	
        				var sInDatasets   = "ds_dept=ds_dept";
        				var sOutDatasets  = "";	
        				var sArgument     = sParams;
        				var sCallbackFunc = "fn_callBack";
        				var sTranType     = "U"; // U:저장/삭제, S:조회			
        				
        				this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        				btn_save_enable = false;
        			}
        			else if(paraMode == "U"){
        				this.ds_dept.addRow();
        				this.ds_dept.setColumn(0,"DEPT_ID",this.edit_dept_id.value);
        				this.ds_dept.setColumn(0,"DEPT_HIGH",this.edit_depthigh_id.value);
        				this.ds_dept.setColumn(0,"DEPT_NAME",this.edit_deptname.value);
        				this.ds_dept.setColumn(0,"DEPT_SORT",this.edit_deptsort.value);
        				this.ds_dept.setColumn(0,"DEPT_LEVEL",this.edit_deptlevel.value);
        				trace("1");
        				this.ds_dept.setColumn(0,"NA_BZPLC",this.edit_nabzplc.value);
        				var sParams = "";
        				var sSvcID        = "updateEmpeAmn";
        				var sURL          = "svc::rest/mg/updateEmpeAmn";	
        				var sInDatasets   = "ds_dept=ds_dept";
        				var sOutDatasets  = "";	
        				var sArgument     = sParams;
        				var sCallbackFunc = "fn_callBack";
        				var sTranType     = "U"; // U:저장/삭제, S:조회			
        				
        				this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        			}
        		}
         	}
         	else {
         		this.alert("중복확인을 해주세요.");
         	}
        }

        this.btn_deptidCheck_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.edit_dept_id.value)){
        		this.alert("부서 아이디를 입력해주세요");
        		this.edit_dept_id.setFocus();
        		return false;
        	}
        	
        	var sParams = "dept_id="+this.gfn_nullToEmpty(this.edit_dept_id.value);
        	var sSvcID        = "checkEmpeAmnid";
        	var sURL          = "svc::rest/mg/checkEmpeAmnid";	
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_dept=ds_dept";	
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회  
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);

        }

        this.edit_dept_id_ontextchange = function(obj,e)
        {
        	btn_save_enable = false;
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_close2.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.edit_dept_id.addEventHandler("ontextchange", this.edit_dept_id_ontextchange, this);
            this.edit_deptname.addEventHandler("ontextchanged", this.edit_deptname_ontextchanged, this);
            this.btn_deptidCheck.addEventHandler("onclick", this.btn_deptidCheck_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6711.xfdl", true);

       
    };
}
)();
