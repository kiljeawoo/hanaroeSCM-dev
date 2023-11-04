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
                this.set_classname("popup01");
                this.set_titletext("사용자 수정");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,767,254);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj.set_firefirstcount("0");
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
            obj.getSetter("taborder").set("2");
            obj.set_text("부서 등록");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "17", "76", "134", "29", null, null, this);
            obj.getSetter("taborder").set("3");
            obj.set_text("부서 아이디");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "17", "104", "134", "29", null, null, this);
            obj.getSetter("taborder").set("4");
            obj.set_text("상위 부서 아이디");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "150", "76", null, "29", "17", null, this);
            obj.getSetter("taborder").set("5");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "150", "104", null, "29", "17", null, this);
            obj.getSetter("taborder").set("6");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "673", "32", "91", "15", null, null, this);
            obj.getSetter("taborder").set("7");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "99", "17", "67", null, null, this);
            obj.getSetter("taborder").set("8");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.getSetter("taborder").set("9");
            obj.set_text("부서 등록");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "729", "0", "37", "32", null, null, this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_dept_id", "absolute", "154", "80", "166", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_cssclass("edt_WF_Essential");
            obj.set_value("99999");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_depthigh_id", "absolute", "154", "108", "166", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "150", "132", null, "29", "17", null, this);
            obj.getSetter("taborder").set("18");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_deptname", "absolute", "154", "136", "166", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_cssclass("edt_WF_Essential");
            obj.set_readonly("false");
            obj.set_value("test");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "17", "132", "134", "29", null, null, this);
            obj.getSetter("taborder").set("21");
            obj.set_text("부 서 명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "17", "188", "134", "29", null, null, this);
            obj.getSetter("taborder").set("23");
            obj.set_text("정 렬 순 서");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "150", "188", null, "29", "17", null, this);
            obj.getSetter("taborder").set("24");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_deptsort", "absolute", "154", "192", "166", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_readonly("false");
            obj.set_cssclass("edt_WF_Essential");
            obj.set_value("1004");
            this.addChild(obj.name, obj);

            obj = new Button("btn_comnameCheck", "absolute", "43.16%", "80", null, "21", "48.37%", null, this);
            obj.set_taborder("25");
            obj.set_text("중복확인");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "150", "160", null, "29", "17", null, this);
            obj.getSetter("taborder").set("26");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_nabzplc", "absolute", "154", "164", "166", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_readonly("false");
            obj.set_cssclass("edt_WF_Essential");
            obj.set_value("9999");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "17", "160", "134", "29", null, null, this);
            obj.getSetter("taborder").set("28");
            obj.set_text("사업장 코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 767, 254, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("사용자 수정");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_6714.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6714.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        var btn_save_enable = false;
        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        	this.edit_depthigh_id.set_value(this.getOwnerFrame().depthighid);
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
        		this.edit_gln.setFocus();
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.edit_deptname.value)){
        		this.alert("부서명을 입력해주세요");
        		this.edit_compname.setFocus();
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.edit_deptname.value)){
        		this.alert("부서명을 입력해주세요");
        		this.edit_compname.setFocus();
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.edit_nabzplc.value)){
        		this.alert("사업장 코드를 입력해주세요");
        		this.edit_compname.setFocus();
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.edit_deptsort.value)){
        		this.alert("정렬순서를 입력해주세요");
        		this.edit_compname.setFocus();
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
        	this.close();
        }

        /*저장*/

        
        this.btn_save_onclick = function(obj,e)
        {
        	if(btn_save_enable){
        		if(this.fn_validationCheck()){
        			this.ds_dept.addRow();
        			this.ds_dept.setColumn(0,"DEPT_ID",this.edit_dept_id.value);
        			this.ds_dept.setColumn(0,"DEPT_HIGH",this.edit_depthigh_id.value);
        			this.ds_dept.setColumn(0,"DEPT_NAME",this.edit_deptname.value);
        			this.ds_dept.setColumn(0,"DEPT_SORT",this.edit_deptsort.value);
        			this.ds_dept.setColumn(0,"NA_BZPLC",this.edit_nabzplc.value);
        			this.ds_dept.setColumn(0,"DEPT_LEVEL",nexacro.toNumber(this.getOwnerFrame().deptlevel)+1);
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
         	}
         	else {
         		this.alert("중복확인을 해주세요.");
         	}
        }

        this.btn_comnameCheck_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.edit_dept_id.value)){
        		this.alert("부서 아이디를 입력해주세요");
        		this.edit_gln.setFocus();
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
            this.btn_comnameCheck.addEventHandler("onclick", this.btn_comnameCheck_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6714.xfdl");

       
    };
}
)();
