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
                this.set_name("pattern_01");
                this.set_titletext("사용자 관리");
                this._setFormPosition(0,0,803,503);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_user", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"check\" type=\"INT\" size=\"3\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"64\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"64\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"64\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"128\"/><Column id=\"POS\" type=\"STRING\" size=\"128\"/><Column id=\"GRADE\" type=\"STRING\" size=\"128\"/><Column id=\"JOB\" type=\"STRING\" size=\"512\"/><Column id=\"PHONE\" type=\"STRING\" size=\"128\"/><Column id=\"MOBILE\" type=\"STRING\" size=\"128\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"128\"/><Column id=\"USER_SORT\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_TYPE_CD\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_param", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"64\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"64\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"64\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"128\"/><Column id=\"POS\" type=\"STRING\" size=\"128\"/><Column id=\"GRADE\" type=\"STRING\" size=\"128\"/><Column id=\"JOB\" type=\"STRING\" size=\"512\"/><Column id=\"PHONE\" type=\"STRING\" size=\"128\"/><Column id=\"MOBILE\" type=\"STRING\" size=\"128\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"128\"/><Column id=\"USER_SORT\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_TYPE_CD\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dep", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_ID\" type=\"STRING\" size=\"64\"/><Column id=\"DEPT_HIGH\" type=\"STRING\" size=\"64\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"128\"/><Column id=\"DEPT_SORT\" type=\"STRING\" size=\"32\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"13\"/><Column id=\"DEPT_LEVEL\" type=\"STRING\" size=\"1\"/><Column id=\"LEVEL_ID\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_select", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"64\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("6");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "788", "-1", "15", "491", null, null, this);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "0%", "7", null, null, "15", "21", this);
            obj.set_taborder("21");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_update", "absolute", null, "0", "89", "21", "77", null, this.Div02);
            obj.set_taborder("22");
            obj.set_text("사용자 동기화");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("btn_insa_add", "absolute", null, "45", "53", "21", "112", null, this.Div02);
            obj.set_taborder("60");
            obj.set_text("등록");
            obj.set_enable("true");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("btn_insa_chg", "absolute", null, "45", "53", "21", "56", null, this.Div02);
            obj.set_taborder("64");
            obj.set_text("수정");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("btn_insa_del", "absolute", null, "45", "53", "21", "0", null, this.Div02);
            obj.set_taborder("65");
            obj.set_text("삭제");
            this.Div02.addChild(obj.name, obj);
            obj = new Grid("grid_user", "absolute", "256", "73", null, null, "0", "0", this.Div02);
            obj.set_taborder("67");
            obj.set_binddataset("ds_user");
            obj.set_cellsizingtype("none");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("collapse,null");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"77\"/><Column size=\"73\"/><Column size=\"94\"/><Column size=\"54\"/><Column size=\"68\"/><Column size=\"64\"/><Column size=\"106\"/><Column size=\"117\"/><Column size=\"58\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"아이디\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"부서명\"/><Cell col=\"4\" text=\"직급\"/><Cell col=\"5\" text=\"직위\"/><Cell col=\"6\" text=\"전화번호\"/><Cell col=\"7\" text=\"휴대폰\"/><Cell col=\"8\" text=\"이메일\"/><Cell col=\"9\" text=\"정렬\"/><Cell col=\"10\" text=\"권한\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:check\"/><Cell col=\"1\" text=\"bind:USER_ID\"/><Cell col=\"2\" text=\"bind:USER_NAME\"/><Cell col=\"3\" text=\"bind:DEPT_NAME\"/><Cell col=\"4\" text=\"bind:POS\"/><Cell col=\"5\" text=\"bind:GRADE\"/><Cell col=\"6\" text=\"bind:PHONE\"/><Cell col=\"7\" text=\"bind:MOBILE\"/><Cell col=\"8\" text=\"bind:EMAIL\"/><Cell col=\"9\" text=\"bind:USER_SORT\"/><Cell col=\"10\" text=\"bind:AUTH_TYPE_CD\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static89", "absolute", "0", "44", "135", "21", null, null, this.Div02);
            obj.set_taborder("68");
            obj.set_text("사용자 관리");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.Div02.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "8", "73", "240", null, null, "0", this.Div02);
            obj.set_taborder("69");
            obj.set_binddataset("ds_dep");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("collapse,null");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"218\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"조직도\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:DEPT_NAME\" treelevel=\"bind:DEPT_LEVEL\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("btn_update_pic", "absolute", null, "0", "74", "21", "0", null, this.Div02);
            obj.set_taborder("70");
            obj.set_text("사진 동기화");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "119", "34", "452", "21", null, null, this.Div02);
            obj.set_taborder("71");
            obj.set_text("일 6번 회원 정보 동기화 되므로 다음 동기화 시간 이후 반영 여부 확인 바랍니다.");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "119", "51", "506", "21", null, null, this.Div02);
            obj.set_taborder("72");
            obj.set_text("동기화 시간 : 오전 10시 / 오전 11시 30분 / 오후 2시 / 오후 4시 30분 / 오후 6시 / 오후 9시");
            this.Div02.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("21");
            		p.set_text("Div02");
            		p.set_scrollbars("none");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 503, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("사용자 관리");

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
        this.addIncludeScript("OMG_DS_SC_4910.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_4910.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        var userposition = 0;
        var deptposition = 0;
        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        	this.call_dept();

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
        		if(svcID == "deleteUserAmn"){
        			this.call_user(deptposition);
        			alert("정상적으로 삭제되었습니다.");
        		}else if(svcID == "retrieveUserAmnList"){
        			if(this.ds_user.rowcount==0){
        				alert("조회 내용이 없습니다.");
        			}else{
        				this.ds_user.addColumn("check", "INT");
        				for(var i = 0; i<this.ds_user.rowcount; i++)
        				{
        					this.ds_user.setColumn(i,"check",0);
        					if(this.ds_user.getColumn(i,"AUTH_TYPE_CD")=="1"){
        						this.ds_user.setColumn(i,"AUTH_TYPE_CD","일반");
        					}else if(this.ds_user.getColumn(i,"AUTH_TYPE_CD")=="2"){
        						this.ds_user.setColumn(i,"AUTH_TYPE_CD","팀");
        					}else if(this.ds_user.getColumn(i,"AUTH_TYPE_CD")=="3"){
        						this.ds_user.setColumn(i,"AUTH_TYPE_CD","부");
        					}else if(this.ds_user.getColumn(i,"AUTH_TYPE_CD")=="4"){
        						this.ds_user.setColumn(i,"AUTH_TYPE_CD","본부");
        					}
        					
        				}	
        			}
        		}else if(svcID == "SyncUserAmn" || svcID == "SyncPicture"){
        			if(ErrorCode==1){
        				alert("동기화 성공하였습니다.");
        			}else if(ErrorCode==0){
        				alert("동기화 실패하였습니다.");
        			}
        		}else if(svcID == "retrieveEmpeAmnList"){
        			if(this.ds_dep.rowcount==1){
        				this.ds_dep.setColumn(0,"DEPT_LEVEL","0");
        			}else if(this.ds_dep.rowcount==0){
        				alert("메뉴 권한이 없습니다.");
        				this.Div02.btn_insa_add.set_visible(false);
        				this.Div02.btn_insa_chg.set_visible(false);
        				this.Div02.btn_insa_del.set_visible(false);
        				this.Div02.btn_update.set_visible(false);
        				this.Div02.btn_update_pic.set_visible(false);
        			}
        		}
        	}
        }

        /*팝업 콜백 함수*/
        this.fn_popupAfter = function(strId,strVal)
        {	
        	if(strVal!=null){
        		if (strId == "user_add") {
        			this.call_user(deptposition);
        		}
        	}		
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        
        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/	

        /* 사용자 등록*/
        this.Div02_btn_insa_add_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"I", deptid:this.ds_user.getColumn(0,"DEPT_ID")
        				, deptname:this.ds_user.getColumn(0,"DEPT_NAME"),dept_level:this.ds_dep.getColumn(0,"DEPT_LEVEL")};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("user_add","OMG.PT::OMG_DS_SC_4911.xfdl",oArg,sOption,sPopupCallBack);
        }

        /* 사용자 조회*/
        this.call_user = function(row)
        {
        	var sParams       = "dept_id="+this.gfn_nullToEmpty(this.ds_dep.getColumn(row,"DEPT_ID"));
        	var sSvcID        = "retrieveUserAmnList";
        	var sURL          = "svc::rest/pt/retrieveUserAmnList";	
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_user=ds_user";	
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회  
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	
        	userposition=0;
        }

        /*조직도 불러오기*/
        this.call_dept = function()
        {
        	var sParams = "";
        	var sSvcID        = "retrieveEmpeAmnList";
        	var sURL          = "svc::rest/pt/retrieveEmpeAmnList";	
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_dep=ds_dep";	
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회  
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* 사용자 수정*/
        this.Div02_btn_insa_chg_onclick = function(obj,e)
        {
        	var checkCnt = 0; 
        	this.ds_select.clearData();
        	for(var i=0; i<this.ds_user.rowcount; i++)
        	{
        		if(this.ds_user.getColumn(i,"check")==1)
        		{
        			this.ds_select.insertRow(checkCnt);
        			this.ds_select.copyRow(checkCnt++, this.ds_user, i);
        		}
        	}
        	if(checkCnt == 1){
        		this.ds_param.clearData();
        		this.ds_param.insertRow(0);
        		this.ds_param.copyRow(0,this.ds_user,userposition);
        		if(this.ds_param.getColumn(0,"AUTH_TYPE_CD")=="일반"){
        			this.ds_param.setColumn(0,"AUTH_TYPE_CD","1");
        		}else if(this.ds_param.getColumn(0,"AUTH_TYPE_CD")=="팀"){
        			this.ds_param.setColumn(0,"AUTH_TYPE_CD","2");
        		}else if(this.ds_param.getColumn(0,"AUTH_TYPE_CD")=="부"){
        			this.ds_param.setColumn(0,"AUTH_TYPE_CD","3");
        		}else if(this.ds_param.getColumn(0,"AUTH_TYPE_CD")=="본부"){
        			this.ds_param.setColumn(0,"AUTH_TYPE_CD","4");
        		}

        		var oArg = {paramMode:"U", dept_sort:this.ds_dep.getColumn(0,"DEPT_SORT")
        					, dept_level:this.ds_dep.getColumn(0,"DEPT_LEVEL"), dsArg:this.ds_param
        					, dsdepArg:this.ds_dep};
        		var sOption = "autosize=true,title=true";
        		var sPopupCallBack = "fn_popupAfter";
        		this.gfn_openPopup("user_add","OMG.PT::OMG_DS_SC_4911.xfdl",oArg,sOption,sPopupCallBack);
        	}else { 
        		alert("1명의 회원만 선택 바랍니다.");
        	}
        }
        /* 사용자 클릭*/
        this.ds_user_onrowposchanged = function(obj,e)
        {	
        	userposition = e.newrow;
        }

        /* 사용자 삭제*/
        this.Div02_btn_insa_del_onclick = function(obj,e)
        {
        	var checkCnt = 0;
        	this.ds_select.clearData();
        	for(var i=0; i<this.ds_user.rowcount; i++)
        	{
        		if(this.ds_user.getColumn(i,"check")==1)
        		{
        			this.ds_select.insertRow(checkCnt);
        			this.ds_select.copyRow(checkCnt++, this.ds_user, i);
        		}
        	}
        	if (checkCnt > 0)
        	{
        		if(confirm("회원 삭제 시 선택 회원의 모든 정보가 삭제됩니다.\n삭제하시겠습니까?")){
        			var sParams = "";
        			var sSvcID        = "deleteUserAmn";
        			var sURL          = "svc::rest/pt/deleteUserAmn";	
        			var sInDatasets   = "ds_select=ds_select";
        			var sOutDatasets  = "";	
        			var sArgument     = sParams;
        			var sCallbackFunc = "fn_callBack";
        			var sTranType     = "U"; // U:저장/삭제, S:조회  
        			this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        		}
        	}
        	else
        	{
        		alert("사용자를 체크해 주세요.");
        	}
        }

        this.btn_update_onclick = function(obj,e)
        {
        	var sParams = "";
        	var sSvcID        = "SyncUserAmn";
        	var sURL          = "svc::rest/pt/SyncUserAmn";	
        	var sInDatasets   = "";
        	var sOutDatasets  = "";	
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회  
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.Div02_Grid00_oncellclick = function(obj,e)
        {
        	this.call_user(e.row);
        	deptposition = e.row;
        }

        this.Div02_grid_user_onheadclick = function(obj,e)
        {
        	if(e.cell == 0) {
        		this.gfn_setGridCheckAll(obj,e);
        	}
        }

        this.Div02_btn_update_pic_onclick = function(obj,e)
        {
        	var checkCnt = 0;
        	this.ds_select.clearData();
        	for(var i=0; i<this.ds_user.rowcount; i++)
        	{
        		if(this.ds_user.getColumn(i,"check")==1)
        		{
        			this.ds_select.insertRow(checkCnt);
        			this.ds_select.copyRow(checkCnt++, this.ds_user, i);
        		}
        	}
        	if (checkCnt > 0)
        	{
        		var sParams = "";
        		var sSvcID        = "SyncPicture";
        		var sURL          = "svc::rest/pt/SyncPicture";	
        		var sInDatasets   = "ds_select=ds_select";
        		var sOutDatasets  = "";	
        		var sArgument     = sParams;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회  
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        	else
        	{
        		alert("동기화할 사용자를 체크해 주세요.");
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_user.addEventHandler("onrowposchanged", this.ds_user_onrowposchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.Div02.btn_update.addEventHandler("onclick", this.btn_update_onclick, this);
            this.Div02.btn_insa_add.addEventHandler("onclick", this.Div02_btn_insa_add_onclick, this);
            this.Div02.btn_insa_chg.addEventHandler("onclick", this.Div02_btn_insa_chg_onclick, this);
            this.Div02.btn_insa_del.addEventHandler("onclick", this.Div02_btn_insa_del_onclick, this);
            this.Div02.grid_user.addEventHandler("onheadclick", this.Div02_grid_user_onheadclick, this);
            this.Div02.grid_user.addEventHandler("oncellclick", this.Div02_grid_user_oncellclick, this);
            this.Div02.Grid00.addEventHandler("oncellclick", this.Div02_Grid00_oncellclick, this);
            this.Div02.btn_update_pic.addEventHandler("onclick", this.Div02_btn_update_pic_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_4910.xfdl");
        this.loadPreloadList();
       
    };
}
)();
