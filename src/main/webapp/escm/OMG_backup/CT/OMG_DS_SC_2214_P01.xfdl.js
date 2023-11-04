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
                this.set_name("OMG_DS_SC_5161");
                this.set_titletext("전자계약직매장권한등록");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,767,210);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_bzno", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_auth", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BZNO1\" type=\"STRING\" size=\"30\"/><Column id=\"BZNO2\" type=\"STRING\" size=\"30\"/><Column id=\"BZNO3\" type=\"STRING\" size=\"30\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"30\"/><Column id=\"CHIEF_ENO\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static13", "absolute", "126", "132", null, "29", "17", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "126", "76", null, "29", "17", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "126", "104", null, "29", "17", null, this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "47", "41", "21", "13", null, this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("text_title", "absolute", "17", "51", "198", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_text("전자계약 직매장 등록/수정");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "17", "132", "160", "29", null, null, this);
            obj.set_taborder("2");
            obj.set_text("직매장 관리자 사번");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "750", "76", "17", "67", null, null, this);
            obj.set_taborder("5");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "673", "32", "91", "15", null, null, this);
            obj.set_taborder("6");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "99", "17", "67", null, null, this);
            obj.set_taborder("7");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "674", "68", "91", "8", null, null, this);
            obj.set_taborder("8");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("9");
            obj.set_text("전자계약 직매장관리");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Button("brn_cls", "absolute", "729", "0", "37", "32", null, null, this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "47", "43", "21", "55", null, this);
            obj.set_taborder("11");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "17", "76", "160", "29", null, null, this);
            obj.set_taborder("12");
            obj.set_text("직매장 사업자번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "17", "104", "160", "29", null, null, this);
            obj.set_taborder("20");
            obj.set_text("직매장명 (대표명칭)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_BZNO01", "absolute", "181", "80", "35", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_maxlength("3");
            obj.set_lengthunit("ascii");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("Static129", "absolute", "216", "80", "9", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_BZNO02", "absolute", "225", "80", "30", "21", null, null, this);
            obj.set_taborder("46");
            obj.set_maxlength("2");
            obj.set_lengthunit("ascii");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "255", "80", "9", "21", null, null, this);
            obj.set_taborder("47");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_BZNO03", "absolute", "264", "80", "65", "21", null, null, this);
            obj.set_taborder("48");
            obj.set_maxlength("5");
            obj.set_lengthunit("ascii");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", "331", "80", "41", "21", null, null, this);
            obj.set_taborder("49");
            obj.set_text("찾기");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_HiddenBZNO1", "absolute", "15", "238", "19.3%", "21", null, null, this);
            obj.set_taborder("50");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_HiddenBZNO2", "absolute", "184", "238", "19.3%", "21", null, null, this);
            obj.set_taborder("51");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_HiddenBZNO3", "absolute", "353", "238", "19.3%", "21", null, null, this);
            obj.set_taborder("52");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_CLNTNM", "absolute", "181", "108", "329", "21", null, null, this);
            obj.set_taborder("54");
            obj.set_maxlength("100");
            obj.set_lengthunit("ascii");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_CHIEF_ENO", "absolute", "181", "136", "148", "21", null, null, this);
            obj.set_taborder("55");
            obj.set_maxlength("9");
            obj.set_lengthunit("ascii");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "22", "159", "728", "45", null, null, this);
            obj.set_taborder("56");
            obj.set_text("- 등록한 직매장에 소속된 바이어들은 전자계약 메뉴를 사용할 수 있습니다.\r\n- 관리자로 등록된 사용자는 해당 사업자번호 전자계약의 최고권한을 갖습니다. (선택사항)");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 767, 210, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("전자계약직매장권한등록");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","edt_BZNO01","value","ds_auth","BZNO1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edt_BZNO02","value","ds_auth","BZNO2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edt_BZNO03","value","ds_auth","BZNO3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edt_CLNTNM","value","ds_auth","CLNTNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_CHIEF_ENO","value","ds_auth","CHIEF_ENO");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_2214_P01.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_2214_P01.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e) //공통
        {
           this.gfn_setInitForm(obj, e);
        }

        this.fn_afterFormOnload = function() //페이지 로딩후 실행부분
        {
        	var fv_paramMode = this.getOwnerFrame().paramMode;
        	
        	this.ds_auth.clearData();
        	this.ds_auth.addRow();
        	
        	
        	// 체크박스로 선택된 row의 수정업데이트  모드일 경우 실행
        	if(fv_paramMode == "U"){
        		this.search();
        	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        /*저장 버튼 이벤트*/
        this.btn_save_onclick = function(obj,e)
        {
        	if(this.getOwnerFrame().paramMode== "I"){ //추가등록
        		this.insert();
        	}
        	else if(this.getOwnerFrame().paramMode== "U"){	 //수정업데이트
        	   this.update();
        	}
        }

        /*창닫기 버튼 이벤트*/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        //사업자번호로 거래처 정보조회하기
        this.btn_search_onclick = function(obj,e)
        {	
        	this.ds_bzno.clearData();
        	
        	if(this.gfn_isNull(this.edt_BZNO01.value) || this.edt_BZNO01.getLength() !=3){		
        		alert("사업자번호를 확인해주세요.");
        		this.edt_BZNO01.setFocus();
        		return;
        	}
        	if(this.gfn_isNull(this.edt_BZNO02.value) || this.edt_BZNO02.getLength() !=2){		
        		alert("사업자번호를 확인해주세요.");
        		this.edt_BZNO02.setFocus();
        		return;
        	}
        	if(this.gfn_isNull(this.edt_BZNO03.value) || this.edt_BZNO03.getLength() !=5){
        		alert("사업자번호를 확인해주세요.");
        		this.edt_BZNO03.setFocus();
        		return;
        	}
        	
        	this.edt_HiddenBZNO1.set_value(this.edt_BZNO01.value);
        	this.edt_HiddenBZNO2.set_value(this.edt_BZNO02.value);
        	this.edt_HiddenBZNO3.set_value(this.edt_BZNO03.value);
        	
        	var param = "bzNo1="+this.edt_BZNO01.value 
        				 +" bzNo2="+this.edt_BZNO02.value				
        				 +" bzNo3="+this.edt_BZNO03.value;
        	var sSvcID        = "retrieveEltctrwBizNoList";
        	var sURL          = "svc::rest/ct/eltctrw/retrieveEltctrwBizNoList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_bzno=ds_bzno";
        	var sArgument     =  param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회	
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* 등록시 사용되는 Validation Check */
        this.fn_validationCheck = function()
        {
        	
        	if(this.getOwnerFrame().paramMode== "I"){
        		if(this.ds_bzno.rowcount == 0){
        			alert("사업자번호를 입력 후 찾기버튼을 누르시기 바랍니다.");
        			return false;
        		}
        		if(this.edt_BZNO01.value != this.edt_HiddenBZNO1.value){
        			alert("사업자번호가 변경되었습니다. 찾기버튼을 누르시기 바랍니다.");
        			return false;
        		}
        		if(this.edt_BZNO02.value != this.edt_HiddenBZNO2.value){
        			alert("사업자번호가 변경되었습니다. 찾기버튼을 누르시기 바랍니다.");
        			return false;
        		}
        		if(this.edt_BZNO03.value != this.edt_HiddenBZNO3.value){
        			alert("사업자번호가 변경되었습니다. 찾기버튼을 누르시기 바랍니다.");
        			return false;
        		}
        	}
        	if(this.gfn_isNull(this.edt_CLNTNM.value)){
        		alert("사업장명을 입력 하세요.");	
        		this.edt_CLNTNM.setFocus();
        		return false;
        	}
            return true;
        }

        /* 추가등록 */
        this.insert = function()
        {
        	if (this.fn_validationCheck()) {
        		var sSvcID        = "insertEltctrwAuth";
        		var sURL          = "svc::rest/ct/eltctrw/insertEltctrwAuth";
         		var sInDatasets   = "ds_auth=ds_auth";
         		var sOutDatasets  = "";
         		var sArgument     = "";
         		var sCallbackFunc = "fn_callBack";
         		var sTranType     = "U"; // U:저장/삭제, S:조회

         		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        
        /* 전자계약직매장권한조회 화면에서 체크박스 선택 후 수정버튼 클릭시 해당 row 정보 조회 */
        this.search = function()
        {
         	var ds_parent = this.parent.dsArg;
         	var bzno = ds_parent.getColumn(0,"BIZ_NUMBER");

        	this.ds_auth.copyRow(0,ds_parent,0);
        	this.ds_auth.setColumn(0, "BZNO1", bzno.substring(0,3));
        	this.ds_auth.setColumn(0, "BZNO2", bzno.substring(3,5));
        	this.ds_auth.setColumn(0, "BZNO3", bzno.substring(5,10));
        	
        	this.edt_BZNO01.set_enable(false);
        	this.edt_BZNO02.set_enable(false);
        	this.edt_BZNO03.set_enable(false);
        	this.btn_search.set_enable(false);
        }

        /*수정*/
        this.update = function()
        {
        	if (this.fn_validationCheck()) {
        		var sSvcID        = "updateEltctrwAuth";
        		var sURL          = "svc::rest/ct/eltctrw/updateEltctrwAuth";
        		var sInDatasets   = "ds_auth=ds_auth";
        		var sOutDatasets  = "";
        		var sArgument     = "";
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회

        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        //callback메소드
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0){
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID =="insertEltctrwAuth"){
        			if(ErrorCode == 0){
        				this.gfn_getMessage("alert", "result.message.save.success");
        				this.close("I");
        			}
        		}else if(svcID=="updateEltctrwAuth"){
        			if(ErrorCode == 0){
        				this.gfn_getMessage("alert", "result.message.save.success");
        				this.close("U");
        			}
        		}else if(svcID =="retrieveEltctrwBizNoList"){		
        			if(ErrorCode < 0 ){
        				this.gfn_getMessage("alert", "error.message.server.exception");
        			}else{
        				if(this.ds_bzno.rowcount == 0 ){
        					alert("사업자번호를 확인하시기 바랍니다.");
        					this.ds_auth.clearData();
        					this.ds_auth.addRow();
        					this.ds_auth.setColumn(0,"BZNO1",this.edt_HiddenBZNO1.value);
        					this.ds_auth.setColumn(0,"BZNO2",this.edt_HiddenBZNO2.value);
        					this.ds_auth.setColumn(0,"BZNO3",this.edt_HiddenBZNO3.value);
        				}		
        			}
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.Static07.addEventHandler("onclick", this.Static07_onclick, this);
            this.Static06.addEventHandler("onclick", this.Static06_onclick, this);
            this.brn_cls.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.Static01.addEventHandler("onclick", this.Static07_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_2214_P01.xfdl");

       
    };
}
)();
